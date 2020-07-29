import {
  Box,
  Button,
  Heading,
  Icon,
  IconButton,
  Image,
  Stack,
  Tag,
  TagLabel,
  useClipboard,
} from "@chakra-ui/core"
import Hover from "~/src/@components/Hover"
import * as Motion from "~/src/@components/Motion"
import { useAppDispatch } from "~/src/@store"
import { createPin, deletePin } from "~/src/@store/reducers/pinsStore"
import random from "lodash/random"
import React, { useMemo, useRef } from "react"
import { Link } from "react-router-dom"
import { WindupChildren } from "windups"

export const PinCard = ({
  pin,
  headingSize,
  imageSize = {},
  spacing = 4,
  ...delegated
}) => {
  const dispatch = useAppDispatch()
  const restorePin = () => dispatch(createPin(pin))
  const archivePin = () => dispatch(deletePin(pin))

  const { onCopy, hasCopied } = useClipboard(pin.shareUrl)

  return (
    <Motion.Stack p={6} spacing={spacing} {...delegated} position="relative">
      <Hover>
        {(ref, isMouseOverButton) => (
          <Motion.Box
            ref={ref}
            position="absolute"
            top={2}
            left={2}
            animate={isMouseOverButton ? { width: 128 } : { width: "unset" }}
          >
            {pin.archivedAt ? (
              <Button
                w="100%"
                aria-label="Restore Pin"
                isLoading={!!pin.requestId}
                size="md"
                bg="white"
                variant="ghost"
                variantColor="green"
                rounded="full"
                onClick={restorePin}
              >
                <Icon
                  name="repeat-clock"
                  size="0.9em"
                  mr={Number(isMouseOverButton)}
                />
                {isMouseOverButton && <WindupChildren>Restore</WindupChildren>}
              </Button>
            ) : (
              <Button
                w="100%"
                aria-label="Archive Pin"
                isLoading={!!pin.requestId}
                size="md"
                bg="white"
                color={isMouseOverButton ? "pink.500" : "pink.200"}
                variant="ghost"
                variantColor="pink"
                rounded="full"
                onClick={archivePin}
              >
                <Icon
                  name="close"
                  size="0.7em"
                  mr={Number(isMouseOverButton)}
                />
                {isMouseOverButton && <WindupChildren>Archive</WindupChildren>}
              </Button>
            )}
          </Motion.Box>
        )}
      </Hover>
      <Hover>
        {(ref, isMouseOverButton) => (
          <Motion.Box
            ref={ref}
            position="absolute"
            top={2}
            right={2}
            animate={isMouseOverButton ? { width: 96 } : { width: "unset" }}
          >
            <a href={pin.url} target="_blank" rel="noopen noreferer">
              <Button
                aria-label="Open Link"
                size="md"
                bg="white"
                variant="ghost"
                variantColor="gold"
                rounded="full"
              >
                {isMouseOverButton && <WindupChildren>Open</WindupChildren>}
                <Icon
                  name="external-link"
                  size="0.9em"
                  ml={Number(isMouseOverButton)}
                />
              </Button>
            </a>
          </Motion.Box>
        )}
      </Hover>
      <Box as="article" pointerEvents={pin.archivedAt ? "none" : "unset"}>
        <Link to={{ pathname: `/pins/${pin.id}`, state: { pin } }}>
          <Stack spacing={spacing}>
            <Image
              src={pin.image}
              m="auto"
              style={imageSize}
              objectFit="cover"
            />
            <Heading size="xs" color="gold.300">
              {pin.siteName}
            </Heading>
            <Heading size={headingSize} color="gold.800" fontWeight={500}>
              {pin.title}
            </Heading>
          </Stack>
        </Link>
        <Stack mt={spacing} isInline spacing={1} align="center">
          <Stack isInline spacing={1} flexWrap="wrap" w="80%">
            {pin.tagList.map((tag: string) => (
              <Tag
                key={tag}
                rounded="full"
                variant="solid"
                variantColor="gold"
                size="sm"
                mb={1}
              >
                <TagLabel>#{tag}</TagLabel>
              </Tag>
            ))}
          </Stack>
          <Motion.Box
            ml="auto"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
          >
            <IconButton
              size="sm"
              icon={hasCopied ? "check" : "link"}
              aria-label="Copy Link"
              rounded="full"
              variantColor="green"
              onClick={onCopy}
            />
          </Motion.Box>
        </Stack>
      </Box>
    </Motion.Stack>
  )
}

const ArchivedStamp = ({ ...delegated }) => {
  const rotationStyles = useMemo(() => {
    const offsetTop = random(48, 96)
    const offsetSide = random(24, 48)
    const rotation = random(0, 25)

    return random() > 0.5
      ? {
          top: offsetTop,
          right: offsetSide,
          transform: `rotate(${rotation}deg)`,
        }
      : {
          top: offsetTop,
          left: offsetSide,
          transform: `rotate(${-rotation}deg)`,
        }
  }, [])

  return (
    <Hover>
      {(ref, isHovered) => (
        <Motion.Box
          ref={ref}
          p={10}
          pb={8}
          w="240px"
          color="green.50"
          bg={isHovered ? "green.500" : "green.900"}
          borderRadius={8}
          boxShadow="xl"
          position="absolute"
          textAlign="center"
          cursor="pointer"
          animate={rotationStyles}
          transformOrigin={"right" in rotationStyles ? "left" : "right"}
          {...delegated}
        >
          <Heading size="xl">{isHovered ? "Restore" : "Archived"}</Heading>
        </Motion.Box>
      )}
    </Hover>
  )
}
