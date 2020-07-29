import { Modal, ModalBody } from "@chakra-ui/core"
import * as Motion from "~/src/@components/Motion"
import { useAppDispatch } from "~/src/@store"
import { updatePin } from "~/src/@store/reducers/pinsStore"
import { Pin } from "~/src/@types/pinlist-api"
import React from "react"
import { RouteComponentProps } from "react-router-dom"

import { PinForm } from "../components/PinForm"

export const ViewPin = ({ history, location }: RouteComponentProps) => {
  const dispatch = useAppDispatch()
  const { pin } = location.state as { pin: Pin }

  const savePin = async () => {
    dispatch(updatePin(pin))
    history.goBack()
  }

  return (
    <Modal isOpen onClose={savePin} size="lg">
      <Motion.ModalOverlay
        bg="gold.50"
        initial="mount"
        animate="enter"
        exit="leave"
        variants={{
          mount: { opacity: 0 },
          enter: { opacity: 0.7 },
          leave: { opacity: 0 },
        }}
      />
      <Motion.ModalContent
        bg="white"
        borderRadius={4}
        py={4}
        initial="mount"
        animate="enter"
        exit="leave"
        variants={{
          mount: { scale: 0 },
          enter: { scale: 1 },
          leave: { scale: 0 },
        }}
      >
        <ModalBody>
          <PinForm pin={pin} unmount={history.goBack} />
        </ModalBody>
      </Motion.ModalContent>
    </Modal>
  )
}
