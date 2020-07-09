import { Flex } from "@chakra-ui/core"
import { RainBros } from "~/src/@design/animations/RainBros"
import { useDelay } from "~/src/@hooks/useDelay"
import { useBoolean } from "ahooks"
import React from "react"

export const LoadingScreen: React.FC = () => {
  const [pastDelay, { setTrue }] = useBoolean(false)

  useDelay(setTrue, 1000)

  return !pastDelay ? null : (
    <Flex
      w={[480, 720, 1200]}
      my={16}
      mx="auto"
      align="center"
      justify="center"
    >
      <RainBros />
    </Flex>
  )
}
