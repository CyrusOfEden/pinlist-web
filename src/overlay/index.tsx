import "iframe-resizer/js/iframeResizer.contentWindow"

import { ThemeProvider } from "~/src/@design/ThemeProvider"
import { createAPIv1Client } from "~/src/@services/APIv1"
import { CurrentUser, SessionProvider } from "~/src/@services/Session"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { browser } from "webextension-polyfill-ts"

import { Overlay } from "./Overlay"

const loadSession = async (firebaseUser: firebase.User) => {
  const {
    firebaseToken = null,
    currentUser = null,
  } = await browser.storage.sync.get(["firebaseToken", "currentUser"])
  const api = createAPIv1Client(firebaseToken)
  return { firebaseUser, firebaseToken, currentUser, api }
}

const createSession = async (firebaseUser: firebase.User) => {
  const firebaseToken = await firebaseUser.getIdToken()
  const api = createAPIv1Client(firebaseToken)
  const currentUser = await api<CurrentUser>({
    method: "POST",
    url: "/sessions",
  })
  browser.storage.sync.set({ firebaseToken, currentUser })
  return { firebaseUser, firebaseToken, currentUser, api }
}

ReactDOM.render(
  <ThemeProvider>
    <BrowserRouter>
      <SessionProvider
        loadSession={loadSession}
        createSession={createSession}
        render={(session) => <Overlay session={session} />}
      />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root"),
)
