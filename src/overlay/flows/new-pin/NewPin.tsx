import { useClipboard } from "@chakra-ui/core"
import { useAppDispatch, useAppSelector, useSession } from "~/src/@store"
import { savePin, unmountOverlay } from "~/src/@store/reducers/overlayStore"
import { Pin } from "~/src/@types/pinlist-api"
import { PinCard } from "~/src/app/flows/pin-wall/components/PinCard"
import { useMount } from "ahooks"
import React, { useCallback, useEffect } from "react"

export const NewPin = () => {
  const dispatch = useAppDispatch()

  const { isLoading } = useSession()
  const stateName = useAppSelector((state) => state.overlay.name)
  const pin = useAppSelector<Pin>(
    (state) => state.overlay.pin ?? state.overlay.pinParams,
  )

  const { onCopy } = useClipboard(pin.shareableUrl)

  useEffect(() => {
    if (!isLoading && stateName === "loaded") {
      dispatch(savePin())
    }
  }, [isLoading, stateName])

  const handleSave = useCallback(() => {
    onCopy()
    dispatch(unmountOverlay())
  }, [onCopy, dispatch])

  return (
    <PinCard
      mx={4}
      my={2}
      w={480}
      id={`pin$${pin.id}$create`}
      pin={pin}
      withImage={false}
      autoFocus="title"
      borderColor={pin.isStarred ? "gold.500" : "gold.200"}
      showSubmitButton={true}
      onSave={handleSave}
    />
  )
}
