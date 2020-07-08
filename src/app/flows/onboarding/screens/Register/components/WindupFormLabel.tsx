import { Heading } from "@chakra-ui/core"
import React from "react"
import { useWindupString } from "windups"

export const WindupFormLabel = ({ title, ...delegated }) => {
  const [label] = useWindupString(title, { pace: () => 1000 / title.length })

  return (
    <Heading mb={2} size="md" {...delegated}>
      {label}
    </Heading>
  )
}
