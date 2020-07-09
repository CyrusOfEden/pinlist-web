import { Flex } from "@chakra-ui/core"
import { ThemeProvider } from "~/src/@design/ThemeProvider"
import { ApplicationSession } from "~/src/@services/ApplicationSession"
import React from "react"
import ReactDOM from "react-dom"

import { Onboarding } from "./flows/onboarding/Onboarding"

const Application: React.FC = () => (
  <Flex w={[480, 720, 1200]} my={16} mx="auto" align="center" justify="center">
    <Onboarding />
  </Flex>
)

ReactDOM.render(
  <ThemeProvider>
    <ApplicationSession>
      <Application />
    </ApplicationSession>
  </ThemeProvider>,
  document.getElementById("root"),
)
