import { useClipboard } from "@chakra-ui/core"
import { useAppDispatch, useAppSelector } from "~/src/@store"
import { Pin } from "~/src/@types/pinlist-api"
import { PinCard } from "~/src/app/flows/pin-wall/components/PinCard"
import React, { useCallback } from "react"

import { closeOverlay } from "../../reducers/overlayStore"

export const NewPin = () => {
  const dispatch = useAppDispatch()

  const pin = useAppSelector<Pin>(
    (state) => state.overlay.pin ?? state.overlay.pinParams,
  )

  const { onCopy } = useClipboard(pin.shareableUrl)

  const handleSave = useCallback(() => {
    onCopy()
    dispatch(closeOverlay())
  }, [onCopy, dispatch])

  return (
    <PinCard
      id={`pin$${pin.id}$create`}
      pin={pin}
      withImage={false}
      autoFocus="title"
      borderColor={pin.isStarred ? "gold.500" : "gold.200"}
      boxShadow="none"
      showSubmitButton={true}
      onSave={handleSave}
    />
  )
}
