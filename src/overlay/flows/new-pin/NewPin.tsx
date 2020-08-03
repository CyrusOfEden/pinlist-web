import { useClipboard } from "@chakra-ui/core"
import { useAppDispatch, useAppSelector } from "~/src/@store"
import { Pin, PinParams } from "~/src/@types/pinlist-api"
import { PinCard } from "~/src/app/flows/pins/components/PinCard"
import React, { useCallback } from "react"

import { closeOverlay } from "../../reducers/overlayStore"

export const NewPin = () => {
  const dispatch = useAppDispatch()

  const pin = useAppSelector<Pin | PinParams>(
    (state) => state.overlay.pin ?? state.overlay.pinParams,
  )

  const { onCopy } = useClipboard((pin as Pin).shareUrl)

  const handleSave = useCallback(() => {
    onCopy()
    dispatch(closeOverlay())
  }, [onCopy, dispatch])

  return (
    <PinCard
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
