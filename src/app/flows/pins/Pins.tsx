import { Route } from "~/src/@services/Router"
import React from "react"
import { RouteComponentProps } from "react-router"

import { PinWall } from "./screens/PinWall"
import { ViewPin } from "./screens/ViewPin"

export const Pins = ({ match }: RouteComponentProps) => (
  <>
    <Route path={match.path} component={PinWall} />
    <Route path={`${match.path}/:id`} component={ViewPin} />
  </>
)
