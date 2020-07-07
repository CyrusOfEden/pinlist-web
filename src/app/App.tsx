import { Flex } from "@chakra-ui/core"
import * as firebase from "~/src/services/firebase"
import ErrorScreen from "~/src/system/components/ErrorScreen"
import { ThemeProvider } from "~/src/system/ThemeProvider"
import React from "react"
import ReactDOM from "react-dom"
import { useAuthState } from "react-firebase-hooks/auth"

import Onboarding, { hasCompletedSignup } from "./flows/onboarding/Onboarding"

const Application: React.FC = () => {
  const [user, loading, error] = useAuthState(firebase.auth)

  if (loading) return null

  return (
    <Flex
      w={[480, 720, 1200]}
      my={16}
      mx="auto"
      align="center"
      justify="center"
    >
      {error ? (
        <ErrorScreen error={error} />
      ) : !hasCompletedSignup(user) ? (
        <Onboarding user={user} />
      ) : null}
    </Flex>
  )
}

ReactDOM.render(
  <ThemeProvider>
    <Application />
  </ThemeProvider>,
  document.getElementById("root"),
)
