import "./app.less"

import * as firebase from "~/services/firebase"

import React, { useEffect, useState } from "react"

import { Home } from "./Home/Home"
import { LoadingScreen } from "./components/LoadingScreen"
import { Onboarding } from "./Onboarding/Onboarding"
import ReactDOM from "react-dom"
import { useAuthState } from "react-firebase-hooks/auth"

const AppContext: React.FC = () => {
  const [user, loading, error] = useAuthState(firebase.auth)

  if (loading) return null
  if (!user) return <Onboarding />

  return <Home user={user} />
}

ReactDOM.render(<AppContext />, document.getElementById("root"))
