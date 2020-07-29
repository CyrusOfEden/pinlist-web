import { unwrapResult } from "@reduxjs/toolkit"
import { ThemeProvider } from "~/src/@design/ThemeProvider"
import * as Extension from "~/src/@services/actors/Extension"
import * as Firebase from "~/src/@services/Firebase"
import { SessionState, configureAppStore } from "~/src/@store"
import { setCurrentUser } from "~/src/@store/reducers/sessionStore"
import React from "react"
import ReactDOM from "react-dom"
import { Provider as StoreProvider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

import { App } from "./App"

const session: Partial<SessionState> = JSON.parse(
  localStorage.getItem("session") || "{}",
)

const store = configureAppStore({ session })

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
