import { LoadingScreen } from "~/src/@screens/LoadingScreen"
import { Route, Switch } from "~/src/@services/Router"
import { useSession } from "~/src/@store"
import React from "react"
import { Redirect } from "react-router-dom"

import { Onboarding } from "./flows/onboarding/Onboarding"
import { PinWall } from "./flows/pin-wall/PinWall"

export const App = () => {
  const session = useSession()

  if (session.isLoading) {
    return <LoadingScreen />
  }

  if (!session.isDoneOnboarding) {
    return <Onboarding {...session} />
  }

  return (
    <Switch>
      <Route path="/wall" component={PinWall} />
      <Redirect from="/" to="/wall" />
    </Switch>
  )
}
