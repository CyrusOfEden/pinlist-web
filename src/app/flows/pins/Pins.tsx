import { Route, Switch } from "~/src/@services/Router"
import React from "react"
import { RouteComponentProps } from "react-router"

import { AllPins } from "./screens/AllPins"
import { ViewPin } from "./screens/ViewPin"

export const Pins = ({ match }: RouteComponentProps) => (
  <Switch>
    <Route exact path={match.path} component={AllPins} />
    <Route path={`${match.path}/:id`} component={ViewPin} />
  </Switch>
)
