import { Heading, Stack, Text } from "@chakra-ui/core"
import * as Motion from "~/src/@components/Motion"
import React from "react"
import { useWindupString } from "windups"

export const WindupFieldHeader = ({ title, earnedPoints, ...delegated }) => {
  const [label] = useWindupString(title, { pace: () => 1000 / title.length })

  return (
    <Stack isInline justify="space-between">
      <Heading mb={2} size="md" {...delegated}>
        {label}
      </Heading>
      {earnedPoints && earnedPoints !== 0 && (
        <Motion.Box
          initial="mount"
          animate="enter"
          variants={{
            mount: {
              opacity: 0,
              scale: 0,
              x: 100,
            },
            enter: {
              opacity: 1,
              scale: 1,
              x: 0,
              transition: { type: "spring", velocity: 10 },
            },
          }}
        >
          <Text color="green.600" fontWeight="bold">
            {`+${earnedPoints}`}
          </Text>
        </Motion.Box>
      )}
    </Stack>
  )
}
