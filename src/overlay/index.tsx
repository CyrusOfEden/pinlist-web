import "iframe-resizer/js/iframeResizer.contentWindow"

import { unwrapResult } from "@reduxjs/toolkit"
import { ThemeProvider } from "~/src/@design/ThemeProvider"
import * as Firebase from "~/src/@services/Firebase"
import { configureAppStore } from "~/src/@store"
import pins from "~/src/@store/reducers/pinsStore"
import {
  setCurrentFirebaseUser,
  setSessionState,
} from "~/src/@store/reducers/sessionStore"
import session from "~/src/@store/reducers/sessionStore"
import tags from "~/src/@store/reducers/tagsStore"
import React from "react"
import ReactDOM from "react-dom"
import { Provider as StoreProvider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { browser } from "webextension-polyfill-ts"

import { Overlay } from "./Overlay"
import overlay, { loadPinForTab, savePin } from "./reducers/overlayStore"

const store = configureAppStore({ session, tags, pins, overlay })

const bootstrapOverlayState = async () => {
  const session = await browser.storage.sync.get([
    "firebaseToken",
    "firebaseUser",
    "currentUser",
  ])
  store.dispatch(setSessionState(session))

  const params = new URLSearchParams(window.location.search)
  const tabId = parseInt(params.get("tabId"))

  await store.dispatch(loadPinForTab(tabId))
  await store.dispatch(savePin())
}

bootstrapOverlayState()

Firebase.auth.onAuthStateChanged(async (firebaseUser) => {
  const session = await store
    .dispatch(setCurrentFirebaseUser(firebaseUser))
    .then(unwrapResult)
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
