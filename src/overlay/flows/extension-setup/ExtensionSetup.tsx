import { Button, Heading } from "@chakra-ui/core"
import Hover from "~/src/@components/Hover"
import * as Motion from "~/src/@components/Motion"
import Sparkles from "~/src/@design/animations/Sparkles"
import colors from "~/src/@design/colors"
import * as WebApp from "~/src/overlay/services/WebApp"
import { Variants } from "framer-motion"
import React from "react"

export const ExtensionSetup = () => {
  const motion: Variants = {
    mount: { opacity: 0, y: 50 },
    enter: { opacity: 1, y: 0 },
  }

  return (
    <Motion.Stack spacing={4} variants={motion}>
      <Motion.Box>
        <Heading color="gold.300">Get Started</Heading>
      </Motion.Box>
      <Motion.Box>
        <Hover>
          {(ref, isHovered) => (
            <Button
              onClick={() => WebApp.open()}
              ref={ref}
              rightIcon="arrow-forward"
              size="lg"
              variantColor="gold"
            >
              <Sparkles color={colors.yellow[200]} enabled={isHovered}>
                Get Started
              </Sparkles>
            </Button>
          )}
        </Hover>
      </Motion.Box>
    </Motion.Stack>
  )
}
