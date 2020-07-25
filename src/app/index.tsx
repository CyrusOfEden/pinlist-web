import { ThemeProvider } from "~/src/@design/ThemeProvider"
import { createAPIv1Client } from "~/src/@services/APIv1"
import * as Firebase from "~/src/@services/Firebase"
import { SessionLoader, SessionProvider } from "~/src/@services/Session"
import { CurrentUser } from "~/src/@services/Session"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

import * as Extension from "../@services/actors/Extension"
import { App } from "./App"

const syncSessionWithExtension = async () => {
  const { data: token } = await Firebase.rpc("createAuthToken")()
  Extension.call({ name: "authenticate", token })
}

const loadSession: SessionLoader = async (firebaseUser) => {
  const firebaseToken = localStorage.getItem("firebaseToken")
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}")
  const api = createAPIv1Client(firebaseToken)
  return { firebaseUser, firebaseToken, currentUser, api }
}

const createSession: SessionLoader = async (firebaseUser) => {
  const firebaseToken = await firebaseUser.getIdToken()
  const api = createAPIv1Client(firebaseToken)
  const currentUser = await api<CurrentUser>({
    method: "POST",
    url: "/sessions",
  })

  localStorage.setItem("firebaseToken", firebaseToken)
  localStorage.setItem("currentUser", JSON.stringify(currentUser))
  syncSessionWithExtension()

  return { firebaseUser, firebaseToken, api, currentUser }
}

ReactDOM.render(
  <ThemeProvider>
    <BrowserRouter>
      <SessionProvider
        loadSession={loadSession}
        createSession={createSession}
        render={(session) => <App session={session} />}
      />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root"),
)
