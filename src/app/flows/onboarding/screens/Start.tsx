import { Box, Heading, Stack, Text } from "@chakra-ui/core"
import Hover from "~/src/@components/Hover"
import * as Motion from "~/src/@components/Motion"
import { Hello } from "~/src/@design/animations/Hello"
import Sparkles from "~/src/@design/animations/Sparkles"
import colors from "~/src/@design/colors"
import { ButtonLink } from "~/src/@services/Router"
import { Variants } from "framer-motion"
import React from "react"

export const Start = () => {
  const motion: Variants = {
    mount: {
      opacity: 0,
      y: 50,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 3.5,
        type: "spring",
      },
    },
  }

  return (
    <Stack w="100%" spacing={16}>
      <Box w="100%" maxW={360} mb={24}>
        <Hello />
      </Box>
      <Motion.Stack
        color="gold.700"
        spacing={4}
        initial="mount"
        animate="enter"
      >
        <Motion.Box variants={motion}>
          <Heading as="h1" size="2xl">
            Welcome to Joyful!
          </Heading>
        </Motion.Box>
        <Motion.Box variants={motion}>
          <Text fontSize="xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            eligendi tenetur corporis maiores ducimus nostrum error commodi fuga
            sint, asperiores beatae unde, officiis quas deleniti quaerat neque
            doloribus facilis reprehenderit!
          </Text>
        </Motion.Box>
        <Motion.Box mt={4} variants={motion}>
          <Hover>
            {(ref, isHovered) => (
              <ButtonLink
                to="/login"
                ref={ref}
                size="lg"
                variantColor="gold"
                rightIcon="arrow-forward"
              >
                <Sparkles color={colors.yellow[200]} enabled={isHovered}>
                  Get Started
                </Sparkles>
              </ButtonLink>
            )}
          </Hover>
        </Motion.Box>
      </Motion.Stack>
    </Stack>
  )
}
