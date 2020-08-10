import { Global } from "@emotion/core"
import { unwrapResult } from "@reduxjs/toolkit"
import theme from "~/src/@design/theme"
import { ThemeProvider } from "~/src/@design/ThemeProvider"
import { LoadingScreen } from "~/src/@screens/LoadingScreen"
import * as Extension from "~/src/@services/actors/Extension"
import * as Firebase from "~/src/@services/Firebase"
import { Route, Switch } from "~/src/@services/Router"
import { Router } from "~/src/@services/Router"
import { useSession } from "~/src/@store"
import { configureAppStore } from "~/src/@store"
import pins from "~/src/@store/reducers/pinsStore"
import {
  SessionState,
  serializeSession,
  setCurrentFirebaseUser,
} from "~/src/@store/reducers/sessionStore"
import session, { setSessionState } from "~/src/@store/reducers/sessionStore"
import tags from "~/src/@store/reducers/tagsStore"
import isEmpty from "lodash/isEmpty"
import React from "react"
import ReactDOM from "react-dom"
import { Provider as StoreProvider } from "react-redux"
import { Redirect } from "react-router-dom"

import { Onboarding } from "./flows/onboarding/Onboarding"
import { PinWall } from "./flows/pin-wall/PinWall"

const App = () => {
  const session = useSession()

  if (session.isLoading) {
    return <LoadingScreen />
  }

  if (!session.isDoneOnboarding) {
    return <Onboarding {...session} />
  }

  return (
    <Switch>
      <Route path="/wall" component={PinWall} />
      <Redirect from="/" to="/wall" />
    </Switch>
  )
}

const store = configureAppStore({ session, pins, tags })

const localSession: Partial<SessionState> = JSON.parse(
  localStorage.getItem("session") || "{}",
)
localSession.isLoading = isEmpty(localSession)
store.dispatch(setSessionState(localSession))

Firebase.auth.onAuthStateChanged(async (user) => {
  const session = await store
    .dispatch(setCurrentFirebaseUser(user))
    .then(unwrapResult)

  if (session) {
    // Save in LocalStorage
    localStorage.setItem("session", serializeSession(session))
    // Sync session with extension
    const { data } = await Firebase.rpc("createAuthToken")()
    Extension.call({ name: "authenticate", token: data })
  }
})

ReactDOM.render(
  <ThemeProvider>
    <Global
      styles={{
        body: {
          background: theme.colors.gold[50],
        },
      }}
    />
    <StoreProvider store={store}>
      <Router>
        <App />
      </Router>
    </StoreProvider>
  </ThemeProvider>,
  document.getElementById("root"),
)
