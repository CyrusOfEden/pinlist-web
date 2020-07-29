import {
  Button,
  Heading,
  Stack,
  Tag,
  TagLabel,
  useClipboard,
} from "@chakra-ui/core"
import * as Motion from "~/src/@components/Motion"
import { Pin } from "~/src/@types/pinlist-api"
import { Variants } from "framer-motion"
import React from "react"

export const SharePin: React.FC<{ pin: Pin }> = ({ pin }) => {
  const { onCopy: copyShareUrl, hasCopied } = useClipboard(pin.shareUrl)

  const motion: Variants = {
    mount: { opacity: 0, y: 50 },
    enter: { opacity: 1, y: 0 },
  }
  return (
    <Stack spacing={2}>
      <Motion.Stack variants={motion}>
        <Heading size="xs" color="gold.300">
          {pin.siteName}
        </Heading>
        <Heading size="md" color="gold.800">
          {pin.title}
        </Heading>
      </Motion.Stack>
      <Motion.Stack spacing={4} isInline variants={motion}>
        <Stack spacing={1} isInline flexWrap="wrap" w="80%">
          {pin.tags.map(({ id, name }) => (
            <Tag
              key={id}
              rounded="full"
              variant="solid"
              variantColor="gold"
              size="sm"
              mb={1}
            >
              <TagLabel>#{name}</TagLabel>
            </Tag>
          ))}
        </Stack>
        <Button
          ml="auto"
          w="120px"
          onClick={copyShareUrl}
          variantColor="purple"
          rightIcon={hasCopied ? "check" : "link"}
        >
          {hasCopied ? "Copied" : "Share"}
        </Button>
      </Motion.Stack>
    </Stack>
  )
}
