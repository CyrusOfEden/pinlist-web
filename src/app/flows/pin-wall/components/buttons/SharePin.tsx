import { BoxProps, Button, Icon, useClipboard } from "@chakra-ui/core"
import Hover from "~/src/@components/Hover"
import * as Motion from "~/src/@components/Motion"
import { Pin } from "~/src/@types/pinlist-api"
import { MotionProps } from "framer-motion"
import React from "react"

type Props = BoxProps & MotionProps & { pin: Pick<Pin, "id" | "shareableUrl"> }

export const SharePin: React.FC<Props> = ({ pin, ...delegated }) => {
  const { onCopy, hasCopied } = useClipboard(pin.shareableUrl)

  return (
    <Hover>
      {(ref, isMouseOverButton, props) => (
        <Motion.Box
          {...delegated}
          ref={ref}
          animate={isMouseOverButton ? { width: 96 } : { width: "unset" }}
          {...props}
        >
          <Button
            id={`pin$${pin.id}copyShareableLink`}
            aria-label="Share Link"
            size="sm"
            w="100%"
            bg="white"
            variant="outline"
            variantColor="gold"
            rounded="full"
            boxShadow="inner"
            borderWidth={1}
            borderColor="gray.200"
            _hover={{ boxShadow: "sm" }}
            onClick={onCopy}
          >
            {isMouseOverButton && (hasCopied ? "Copied" : "Share")}
            <Icon
              name={hasCopied ? "check" : "external-link"}
              ml={isMouseOverButton ? 1 : -1}
              mr={-1}
            />
          </Button>
        </Motion.Box>
      )}
    </Hover>
  )
}
