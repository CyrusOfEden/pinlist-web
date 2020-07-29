import { Box } from "@chakra-ui/core"
import * as Motion from "~/src/@components/Motion"
import { Route, Switch } from "~/src/@services/Router"
import { SessionState, useSession } from "~/src/@store"
import React from "react"
import { Redirect } from "react-router-dom"

import { Illustration } from "./components/Illustration"
import { Login } from "./screens/Login"
import { Register } from "./screens/Register/Register"
import { Start } from "./screens/Start"

export const isLoggedIn = ({
  firebaseUser,
}: Pick<SessionState, "firebaseUser">) => !!firebaseUser

export const isDoneOnboarding = ({
  firebaseUser,
  currentUser,
}: Pick<SessionState, "firebaseUser" | "currentUser">) =>
  !!firebaseUser &&
  currentUser?.email &&
  currentUser?.username &&
  currentUser?.photoUrl

export const Onboarding = () => {
  const session = useSession()

  return (
    <Motion.Flex w="100%" justify="space-around">
      <Box w={[420, 420, 560]} mt={16}>
        {isLoggedIn(session) ? (
          <Switch>
            <Route path="/register" component={Register} />
            <Redirect from="/" to="/register" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/start" component={Start} />
            <Route path="/login" component={Login} />
            <Redirect from="/" to="/start" />
          </Switch>
        )}
      </Box>
      <Illustration w={[280, 360, 420]} mt={12} />
    </Motion.Flex>
  )
}
