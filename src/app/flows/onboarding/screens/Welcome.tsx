import { Box, Heading } from "@chakra-ui/core"
import { useTimeout } from "@chakra-ui/hooks"
import * as Motion from "~/src/@components/Motion"
import { RainBros } from "~/src/@design/animations/RainBros"
import React, { useMemo } from "react"
import { RouteComponentProps } from "react-router-dom"
import { useWindupString } from "windups"

export const Welcome = ({ history }: RouteComponentProps) => {
  useTimeout(() => history.push("/"), 4000)

  const pace = useMemo(() => {
    let t = 15
    return () => (t *= 1.12)
  }, [])

  const [text] = useWindupString("Getting things ready for you......", { pace })

  return (
    <Motion.Stack
      mt={24}
      initial="mount"
      animate="enter"
      exit="leave"
      variants={{
        leave: { opacity: 0, y: 100, transition: { type: "spring" } },
      }}
    >
      <Box textAlign="center">
        <Heading color="gold.700">{text}</Heading>
      </Box>
      <Motion.Box
        variants={{
          mount: { opacity: 0, y: 100, transition: { type: "spring" } },
          enter: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", delay: 0.5 },
          },
        }}
      >
        <RainBros />
      </Motion.Box>
    </Motion.Stack>
  )
}
