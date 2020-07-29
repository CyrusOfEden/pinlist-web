import { Route, Switch } from "~/src/@services/Router"
import { useSession } from "~/src/@store"
import React from "react"
import { Redirect } from "react-router-dom"

import { Onboarding, isDoneOnboarding } from "./flows/onboarding/Onboarding"
import { Pins } from "./flows/pins/Pins"

export const App = () => {
  const session = useSession()

  return isDoneOnboarding(session) ? (
    <Switch>
      <Route path="/pins" component={Pins} />
      <Redirect from="/" to="/pins" />
    </Switch>
  ) : (
    <Onboarding />
  )
}
