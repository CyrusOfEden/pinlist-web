import { Route } from "~/src/@services/Router"
import React from "react"
import { RouteComponentProps } from "react-router"

import { PinWall } from "./screens/PinWall"

export const Pins = ({ match }: RouteComponentProps) => (
  <>
    <Route path={match.path} component={PinWall} />
  </>
)
