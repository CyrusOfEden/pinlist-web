import { Global } from "@emotion/core"
import { unwrapResult } from "@reduxjs/toolkit"
import theme from "~/src/@design/theme"
import { ThemeProvider } from "~/src/@design/ThemeProvider"
import { LoadingScreen } from "~/src/@screens/LoadingScreen"
import * as Extension from "~/src/@services/Extension"
import * as Firebase from "~/src/@services/Firebase"
import { Route, Switch } from "~/src/@services/Router"
import { configureAppStore, useSession } from "~/src/@store"
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
import Loadable from "react-loadable"
import { Provider as StoreProvider } from "react-redux"
import { BrowserRouter, Redirect } from "react-router-dom"
import { QueryParamProvider } from "use-query-params"

const PinWall = Loadable({
  loading: LoadingScreen,
  loader: () => import("./flows/pin-wall/PinWall"),
  webpack: () => [require.resolveWeak("./flows/pin-wall/PinWall")],
})

const Onboarding = Loadable({
  loading: LoadingScreen,
  loader: () => import("./flows/onboarding/Onboarding"),
  webpack: () => [require.resolveWeak("./flows/onboarding/Onboarding")],
})

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
store.dispatch(setSessionState(localSession))

Firebase.auth.onIdTokenChanged(async (user) => {
  const firebaseToken = await user.getIdToken()
  await store.dispatch(setSessionState({ firebaseToken }))
})

Firebase.auth.onAuthStateChanged(async (user) => {
  const action = await store.dispatch(setCurrentFirebaseUser(user))
  const session = unwrapResult(action)

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
      <BrowserRouter>
        <QueryParamProvider ReactRouterRoute={Route}>
          <App />
        </QueryParamProvider>
      </BrowserRouter>
    </StoreProvider>
  </ThemeProvider>,
  document.getElementById("root"),
)
