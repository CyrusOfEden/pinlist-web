import { Global } from "@emotion/core"
import { unwrapResult } from "@reduxjs/toolkit"
import theme from "~/src/@design/theme"
import { ThemeProvider } from "~/src/@design/ThemeProvider"
import * as Extension from "~/src/@services/actors/Extension"
import * as Firebase from "~/src/@services/Firebase"
import { SessionState, configureAppStore } from "~/src/@store"
import pins from "~/src/@store/reducers/pinsStore"
import { setCurrentUser } from "~/src/@store/reducers/sessionStore"
import session from "~/src/@store/reducers/sessionStore"
import tags from "~/src/@store/reducers/tagsStore"
import React from "react"
import ReactDOM from "react-dom"
import { Provider as StoreProvider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

import { App } from "./App"

const store = configureAppStore({ session, pins, tags }, () => {
  const session: Partial<SessionState> = JSON.parse(
    localStorage.getItem("session") || "{}",
  )
  session.loading = !session.currentUser
  return { session }
})

Firebase.auth.onAuthStateChanged(async (firebaseUser) => {
  const session = await store
    .dispatch(setCurrentUser(firebaseUser))
    .then(unwrapResult)
  // Save in LocalStorage
  localStorage.setItem("session", JSON.stringify(session || "{}"))
  // Sync session with extension
  const { data } = await Firebase.rpc("createAuthToken")()
  Extension.call({ name: "authenticate", token: data })
})

const render = () => {
  ReactDOM.render(
    <ThemeProvider>
      <Global styles={{ body: { background: theme.colors.gold[50] } }} />
      <StoreProvider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StoreProvider>
    </ThemeProvider>,
    document.getElementById("root"),
  )
}

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./App", render)
}

render()
