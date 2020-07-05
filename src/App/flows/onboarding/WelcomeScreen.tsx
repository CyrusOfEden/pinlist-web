import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/core"
import { RouteComponentProps } from "@reach/router"
import { Hello } from "~/system/animations/Hello"
import Welcome from "~/system/illustrations/Welcome"
import { Variants, motion } from "framer-motion"
import React from "react"

export default function WelcomeScreen(_: RouteComponentProps) {
  return (
    <Flex
      mt={16}
      width="100%"
      align="center"
      justify="space-around"
      wrap="wrap"
    >
      <Illustration w={[280, 360, 420]} />
      <Greeting w={[420, 420, 560]} />
    </Flex>
  )
}

const Illustration = (props) => {
  const AnimatedBox = motion.custom(Box)

  const transition: Variants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
      },
    },
  }

  return (
    <AnimatedBox
      {...props}
      initial="hidden"
      animate="visible"
      variants={transition}
      whileHover={{ scale: 1.1 }}
    >
      <Welcome />
    </AnimatedBox>
  )
}

const Greeting = (props) => {
  const AnimatedStack = motion.custom(Stack)
  const AnimatedHeading = motion.custom(Heading)
  const AnimatedText = motion.custom(Text)
  const AnimatedButton = motion.custom(Button)

  const transition: Variants = {
    hidden: {
      opacity: 0,
      translateY: 30,
    },
    visible: (i) => ({
      opacity: 1,
      translateY: 0,
      transition: {
        delay: 3 + i * 0.5,
        type: "spring",
        velocity: 0.7,
      },
    }),
  }

  return (
    <Stack {...props} spacing={16}>
      <Box w="100%" maxW={360} mb={24} mx="auto">
        <Hello />
      </Box>
      <AnimatedStack
        spacing={4}
        color="gold.700"
        initial="hidden"
        animate="visible"
      >
        <AnimatedHeading
          textAlign="center"
          as="h1"
          size="2xl"
          custom={0}
          variants={transition}
        >
          Welcome to Pinlist!
        </AnimatedHeading>
        <AnimatedText fontSize="xl" custom={1} variants={transition}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          eligendi tenetur corporis maiores ducimus nostrum error commodi fuga
          sint, asperiores beatae unde, officiis quas deleniti quaerat neque
          doloribus facilis reprehenderit!
        </AnimatedText>
        <AnimatedButton
          mt={4}
          mx={[0, 4, 16]}
          size="lg"
          variantColor="gold"
          rightIcon="arrow-forward"
          custom={2}
          variants={transition}
        >
          Get Started
        </AnimatedButton>
      </AnimatedStack>
    </Stack>
  )
}
