import { Box } from "@chakra-ui/core"
import * as Motion from "~/src/@design/Motion"
import { Route, Switch } from "~/src/@design/Router"
import { useSession } from "~/src/@services/ApplicationSession"
import React from "react"
import { BrowserRouter, Redirect } from "react-router-dom"

import { Illustration } from "./components/Illustration"
import { Login } from "./screens/Login"
import { Register } from "./screens/Register/Register"
import { Start } from "./screens/Start"

export const isDoneOnboarding = (user: firebase.User) =>
  user && ["email", "displayName", "photoUrl"].every((field) => !!user[field])

export const Onboarding = () => {
  const { firebaseUser } = useSession()

  return (
    <Motion.Flex w="100%" justify="space-around">
      <BrowserRouter basename="/onboarding">
        <Box w={[420, 420, 560]}>
          <Switch>
            {firebaseUser ? (
              <>
                <Route path="/register" component={Register} />
                <Redirect from="/onboarding" to="/register" />
              </>
            ) : (
              <>
                <Route path="/start" component={Start} />
                <Route path="/login" component={Login} />
                <Redirect from="/onboarding" to="/start" />
              </>
            )}
          </Switch>
        </Box>
        <Illustration w={[280, 360, 420]} mt={12} />
      </BrowserRouter>
    </Motion.Flex>
  )
}
