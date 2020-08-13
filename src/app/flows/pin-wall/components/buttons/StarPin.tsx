import { BoxProps, Button, Icon } from "@chakra-ui/core"
import Hover from "~/src/@components/Hover"
import * as Motion from "~/src/@components/Motion"
import { useAppDispatch } from "~/src/@store"
import { updatePin } from "~/src/@store/reducers/pinsStore"
import { Pin } from "~/src/@types/pinlist-api"
import { MotionProps } from "framer-motion"
import React, { useCallback } from "react"

type Props = BoxProps & MotionProps & { pin: Pick<Pin, "id" | "isStarred"> }

export const StarPin: React.FC<Props> = ({ pin, ...delegated }) => {
  const dispatch = useAppDispatch()

  const toggleStarred = useCallback(async () => {
    const { id } = pin
    const isStarred = !pin.isStarred
    await dispatch(updatePin({ id, isStarred }))
  }, [pin.id, pin.isStarred])

  return (
    <Hover>
      {(ref, isMouseOverButton, props) => (
        <Motion.Box
          {...delegated}
          ref={ref}
          animate={isMouseOverButton ? { width: 96 } : { width: "unset" }}
          {...props}
        >
          {pin.isStarred ? (
            <Button
              id={`pin$${pin.id}$unstar`}
              aria-label="Unstar Pin"
              size="sm"
              w="100%"
              variantColor="gold"
              rounded="full"
              borderWidth={0}
              borderColor="gold.500"
              _hover={{ boxShadow: "sm" }}
              onClick={toggleStarred}
            >
              <Icon name="star" mr={isMouseOverButton ? 1 : -1} ml={-1} />
              {isMouseOverButton && "Unstar"}
            </Button>
          ) : (
            <Button
              id={`pin$${pin.id}$star`}
              aria-label="Star Pin"
              size="sm"
              w="100%"
              bg="white"
              variant="ghost"
              variantColor="gold"
              rounded="full"
              boxShadow="inner"
              borderWidth={1}
              borderColor="gray.200"
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
  )
}
