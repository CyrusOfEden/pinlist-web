import { BoxProps, Button, Icon, Link } from "@chakra-ui/core"
import Hover from "~/src/@components/Hover"
import * as Motion from "~/src/@components/Motion"
import { Pin } from "~/src/@types/pinlist-api"
import { MotionProps } from "framer-motion"
import React from "react"

type Props = BoxProps & MotionProps & { pin: Pick<Pin, "id" | "url"> }

export const OpenPin: React.FC<Props> = ({ pin, ...delegated }) => (
  <Hover>
    {(ref, isMouseOverButton, props) => (
      <Motion.Box
        {...delegated}
        ref={ref}
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
            id={`pin$${pin.id}openOriginalLink`}
            aria-label="Open Pinned Link"
            size="sm"
            w="100%"
            variant="outline"
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
)
