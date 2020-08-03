import {
  AspectRatioBox,
  Box,
  Button,
  Icon,
  Image,
  Link,
  useClipboard,
} from "@chakra-ui/core"
import Hover from "~/src/@components/Hover"
import * as Motion from "~/src/@components/Motion"
import { ButtonLink } from "~/src/@services/Router"
import { useAppDispatch } from "~/src/@store"
import { updatePin } from "~/src/@store/reducers/pinsStore"
import React, { useCallback } from "react"

export const PinImage = ({ pin, inset = 5, ...delegated }) => {
  const dispatch = useAppDispatch()

  const toggleStarred = useCallback(async () => {
    await dispatch(updatePin({ ...pin, isStarred: !pin.isStarred }))
  }, [pin.isStarred])

  const shareUrl = "shareUrl" in pin && pin.shareUrl
  const { onCopy, hasCopied } = useClipboard(shareUrl)

  return (
    <Motion.Box
      {...delegated}
      bg="black"
      position="relative"
      borderRadius={24}
      overflow="hidden"
    >
      <AspectRatioBox ratio={1}>
        <Image
          src={pin.image}
          size="100%"
          boxShadow="inner"
          objectFit="cover"
          css={{
            maskMode: "luminance",
            maskImage:
              "radial-gradient(circle, white 0%, rgba(255, 255, 255, 0.9) 75%, rgba(255, 255, 255, 0.8) 90%)",
          }}
        />
      </AspectRatioBox>
      <Hover>
        {(ref, isMouseOverButton, props) => (
          <Motion.Box
            ref={ref}
            position="absolute"
            top={inset}
            left={inset}
            animate={isMouseOverButton ? { width: 96 } : { width: "unset" }}
            {...props}
          >
            {pin.isStarred ? (
              <Button
                aria-label="Unstar Pin"
                size="sm"
                w="100%"
                variantColor="gold"
                rounded="full"
                boxShadow="inner"
                _hover={{ boxShadow: "sm" }}
                onClick={toggleStarred}
              >
                <Icon name="star" mr={isMouseOverButton ? 1 : -1} ml={-1} />
                {isMouseOverButton && "Unstar"}
              </Button>
            ) : (
              <Button
                aria-label="Star Pin"
                size="sm"
                w="100%"
                bg="white"
                variant="ghost"
                variantColor="gold"
                rounded="full"
                boxShadow="inner"
                _hover={{ boxShadow: "sm" }}
                onClick={toggleStarred}
              >
                <Icon name="star" mr={isMouseOverButton ? 1 : -1} ml={-1} />
                {isMouseOverButton && "Star"}
              </Button>
            )}
          </Motion.Box>
        )}
      </Hover>
      <Hover>
        {(ref, isMouseOverButton, props) => (
          <Motion.Box
            ref={ref}
            position="absolute"
            top={inset}
            right={inset}
            animate={isMouseOverButton ? { width: 96 } : { width: "unset" }}
            {...props}
          >
            <Button
              aria-label="Share Link"
              size="sm"
              w="100%"
              bg="white"
              variant="ghost"
              variantColor="gold"
              rounded="full"
              boxShadow="inner"
              _hover={{ boxShadow: "sm" }}
              isLoading={shareUrl == null}
              onClick={onCopy}
            >
              {isMouseOverButton && (hasCopied ? "Copied!" : "Share")}
              <Icon
                name={hasCopied ? "check" : "external-link"}
                ml={isMouseOverButton ? 1 : -1}
                mr={-1}
              />
            </Button>
          </Motion.Box>
        )}
      </Hover>
      <Hover>
        {(ref, isMouseOverButton, props) => (
          <Motion.Box
            ref={ref}
            position="absolute"
            bottom={inset}
            right={inset}
            animate={isMouseOverButton ? { width: 120 } : { width: "unset" }}
            {...props}
          >
            <Link
              display="block"
              _hover={{ textDecoration: "none" }}
              href={pin.url}
              target="_blank"
              rel="noopen noreferer"
            >
              <Button
                aria-label="Open Pinned Link"
                size="sm"
                w="100%"
                variant="ghost"
                variantColor="gray"
                rounded="full"
                boxShadow="inner"
                bg="white"
                _hover={{ boxShadow: "sm" }}
              >
                {isMouseOverButton && "Open Pin"}
                <Icon name="link" ml={isMouseOverButton ? 1 : -1} mr={-1} />
              </Button>
            </Link>
          </Motion.Box>
        )}
      </Hover>
      <Box position="absolute" bottom={inset} left={inset}>
        <ButtonLink
          to={{}}
          boxShadow="inner"
          rounded="full"
          size="sm"
          bg="white"
          variant="ghost"
          variantColor="gray"
        >
          {pin.siteName.toLowerCase()}
        </ButtonLink>
      </Box>
    </Motion.Box>
  )
}
