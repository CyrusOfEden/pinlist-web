import { Flex } from "@chakra-ui/core"
import { Router } from "@reach/router"
import * as firebase from "~/services/firebase"
import ErrorScreen from "~/system/components/ErrorScreen"
import LoadingScreen from "~/system/components/LoadingScreen"
import { ThemeProvider } from "~/system/theme"
import { AnimatePresence } from "framer-motion"
import React from "react"
import ReactDOM from "react-dom"
import { useAuthState } from "react-firebase-hooks/auth"
import Loadable from "react-loadable"

const OnboardingFlow = Loadable({
  loader: () => import("./flows/onboarding"),
  loading: LoadingScreen,
})

const HomeScreen = Loadable({
  loader: () => import("./screens/HomeScreen"),
  loading: LoadingScreen,
})

const Application: React.FC = () => {
  const [user, loading, error] = useAuthState(firebase.auth)

  if (loading) return null

  return (
    <AnimatePresence>
      <Flex
        w={[480, 720, 1200]}
        mx="auto"
        align="center"
        justify="center"
        as={Router}
      >
        {error ? (
          <ErrorScreen error={error} default />
        ) : user ? (
          <HomeScreen user={user} default />
        ) : (
          <OnboardingFlow default />
        )}
      </Flex>
    </AnimatePresence>
  )
}

ReactDOM.render(
  <ThemeProvider>
    <Application />
  </ThemeProvider>,
  document.getElementById("root"),
)
