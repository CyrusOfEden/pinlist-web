import "iframe-resizer/js/iframeResizer.contentWindow"

import { unwrapResult } from "@reduxjs/toolkit"
import { ThemeProvider } from "~/src/@design/ThemeProvider"
import { LoadingScreen } from "~/src/@screens/LoadingScreen"
import * as Firebase from "~/src/@services/Firebase"
import { configureAppStore, useAppSelector } from "~/src/@store"
import overlay, {
  loadPinForTab,
  savePin,
} from "~/src/@store/reducers/overlayStore"
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
import { MemoryRouter } from "react-router-dom"
import { browser } from "webextension-polyfill-ts"

import { NewPin } from "./flows/new-pin/NewPin"

export const Overlay = () => {
  const isLoading = useAppSelector((state) => state.overlay.name === "mounted")

  return isLoading ? <LoadingScreen /> : <NewPin />
}

const store = configureAppStore({ session, tags, pins, overlay })

const render = () => {
  ReactDOM.render(
    <ThemeProvider>
      <StoreProvider store={store}>
        <MemoryRouter>
          <Overlay />
        </MemoryRouter>
      </StoreProvider>
    </ThemeProvider>,
    document.getElementById("root"),
  )
}

Firebase.auth.onAuthStateChanged(async (firebaseUser) => {
  const action = await store.dispatch(setCurrentFirebaseUser(firebaseUser))
  const session = unwrapResult(action)
  if (session != null) {
    await browser.storage.sync.set(session)
  }
})

const loadSession = async () =>
  browser.storage.sync.get(["firebaseToken", "firebaseUser", "currentUser"])

const saga = async () => {
  await Promise.all([
    store.dispatch(setSessionState(await loadSession())),
    store.dispatch(loadPinForTab()),
  ])

  render()

  await store.dispatch(savePin())
}

saga()

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./flows", render)
}
