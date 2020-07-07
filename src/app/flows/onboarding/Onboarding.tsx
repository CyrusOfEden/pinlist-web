import { Box } from "@chakra-ui/core"
import HouseParty from "~/src/system/illustrations/HouseParty"
import * as Motion from "~/src/system/Motion"
import { Route, Switch } from "~/src/system/Router"
import { Variants } from "framer-motion"
import React from "react"
import { BrowserRouter, Redirect, useLocation } from "react-router-dom"

import Start from "./screens/1_Start"
import Login from "./screens/2_Login"
import Register from "./screens/3_Register"
import Welcome from "./screens/4_Welcome"

export const isLoggedIn = (user) => !!user
export const hasCompletedSignup = (user) => !!user?.email

export default function Onboarding({ user }) {
  return (
    <Motion.Flex w="100%" justify="space-around">
      <BrowserRouter>
        <Box w={[420, 420, 560]}>
          <Switch>
            {!isLoggedIn(user) ? (
              <>
                <Route path="/start" component={Start} />
                <Route path="/login" component={Login} />
                <Redirect from="/" to="/start" />
              </>
            ) : !hasCompletedSignup(user) ? (
              <>
                <Route path="/register" component={Register} />
                <Redirect from="/" to="/register" />
              </>
            ) : (
              <>
                <Route path="/welcome" component={Welcome} />
                <Redirect from="/" to="/welcome" />
              </>
            )}
          </Switch>
        </Box>
        <Illustration w={[280, 360, 420]} mt={12} key="illustration" />
      </BrowserRouter>
    </Motion.Flex>
  )
}

const Illustration = (props) => {
  const { pathname } = useLocation()

  const motion: Variants = {
    initial: {
      opacity: 0,
      scale: 0,
      y: 50,
      transition: { type: "spring" },
    },
    enter: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: pathname === "/start" ? 3 : 0,
        type: "spring",
      },
    },
  }

  return (
    <Motion.Box
      {...props}
      variants={motion}
      initial="initial"
      animate="enter"
      whileHover={{ scale: 1.1 }}
    >
      <HouseParty />
    </Motion.Box>
  )
}
