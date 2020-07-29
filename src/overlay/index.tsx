import "iframe-resizer/js/iframeResizer.contentWindow"

import { unwrapResult } from "@reduxjs/toolkit"
import { ThemeProvider } from "~/src/@design/ThemeProvider"
import * as Firebase from "~/src/@services/Firebase"
import { configureAppStore } from "~/src/@store"
import { mergeState, setCurrentUser } from "~/src/@store/reducers/sessionStore"
import React from "react"
import ReactDOM from "react-dom"
import { Provider as StoreProvider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { browser } from "webextension-polyfill-ts"

import { Overlay } from "./Overlay"

const store = configureAppStore()

browser.storage.sync
  .get(["firebaseToken", "firebaseUser", "currentUser"])
  .then((session) => store.dispatch(mergeState(session)))

Firebase.auth.onAuthStateChanged(async (firebaseUser) => {
  const session = await store
    .dispatch(setCurrentUser(firebaseUser))
    .then(unwrapResult)
  // Browser Storage
  await browser.storage.sync.set(session)
})

const render = () => {
  ReactDOM.render(
    <ThemeProvider>
      <StoreProvider store={store}>
        <BrowserRouter>
          <Overlay />
        </BrowserRouter>
      </StoreProvider>
    </ThemeProvider>,
    document.getElementById("root"),
  )
}

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./Overlay", render)
}

render()
