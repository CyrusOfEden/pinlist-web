import { RouteComponentProps } from "@reach/router"
import React from "react"

import WelcomeScreen from "./WelcomeScreen"

export default function OnboardingFlow(_: RouteComponentProps) {
  return (
    <>
      <WelcomeScreen default />
    </>
  )
}
