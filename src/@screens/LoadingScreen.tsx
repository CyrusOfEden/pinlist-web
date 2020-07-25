import { Flex, Spinner } from "@chakra-ui/core"
import { useTimeout } from "@chakra-ui/hooks"
import { useBoolean } from "ahooks"
import React from "react"

export const LoadingScreen: React.FC = () => {
  const [pastDelay, { setTrue }] = useBoolean(false)
  useTimeout(setTrue, 1000)

  return !pastDelay ? null : (
    <Flex w="100%" my={16} mx="auto" align="center" justify="center">
      <Spinner color="gold.500" />
    </Flex>
  )
}
