import * as firebase from "~/src/services/firebase"
import { RainBros } from "~/src/system/animations/RainBros"
import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"

export const Welcome = () => {
  const [user, loading, error] = useAuthState(firebase.auth)

  return <RainBros />
}
