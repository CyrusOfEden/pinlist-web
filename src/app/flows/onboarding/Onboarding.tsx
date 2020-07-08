import { Box } from "@chakra-ui/core"
import * as Motion from "~/src/system/Motion"
import { Route, Switch } from "~/src/system/Router"
import React from "react"
import { BrowserRouter, Redirect } from "react-router-dom"

import { Illustration } from "./components/Illustration"
import { Login } from "./screens/Login"
import { Register } from "./screens/Register/Register"
import { Start } from "./screens/Start"
import { Welcome } from "./screens/Welcome"

export const isOnboarded = (user) =>
  user && ["email", "displayName", "photoURL"].every((field) => !!user[field])

export const Onboarding = ({ user }) => (
  <Motion.Flex w="100%" justify="space-around">
    <BrowserRouter basename="/onboarding">
      <Box w={[420, 420, 560]}>
        <Switch>
          {!user ? (
            <>
              <Route path="/start" component={Start} />
              <Route path="/login" component={Login} />
              <Redirect from="/" to="/start" />
            </>
          ) : !isOnboarded(user) ? (
            <>
              <Route path="/register" component={Register} />
              <Redirect from="/" to="/register" />
            </>
          ) : (
            <Route path="/" component={Welcome} />
          )}
        </Switch>
      </Box>
      <Illustration w={[280, 360, 420]} mt={12} />
    </BrowserRouter>
  </Motion.Flex>
)
