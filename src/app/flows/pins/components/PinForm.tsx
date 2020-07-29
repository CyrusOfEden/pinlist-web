import {
  Button,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  Stack,
  useClipboard,
} from "@chakra-ui/core"
import { useAppDispatch } from "~/src/@store"
import { createPin } from "~/src/@store/reducers/pinsStore"
import { PinParams } from "~/src/@types/pinlist-api"
import { TagsField } from "~/src/overlay/flows/new-pin/screens/PinForm/components/TagsField"
import { TitleField } from "~/src/overlay/flows/new-pin/screens/PinForm/components/TitleField"
import React, { useEffect, useMemo } from "react"
import { useForm } from "react-hook-form"

export const PinForm = ({ pin, unmount }) => {
  const dispatch = useAppDispatch()

  const form = useForm<PinParams>({
    mode: "onSubmit",
    defaultValues: pin,
  })
  useEffect(() => {
    form.reset(pin)
  }, [pin])

  const { onCopy, hasCopied } = useClipboard(
    "shareUrl" in pin ? pin.shareUrl : "",
  )

  const upsertPin = useMemo(
    () => async (values: PinParams) => {
      setTimeout(unmount, 1000)
      await dispatch(createPin(values))
    },
    [unmount],
  )

  return (
    <Stack spacing={3} as="form" onSubmit={form.handleSubmit(upsertPin)}>
      <Stack spacing={4}>
        <Image src={pin.image} size="100%" boxShadow="inner" />

        <Input hidden name="id" ref={form.register()} />
        <Input hidden name="siteName" ref={form.register()} />
        <Input hidden name="url" ref={form.register()} />
        <Input hidden name="image" ref={form.register()} />
        <Input hidden name="description" ref={form.register()} />

        <Heading size="xs" color="gold.300">
          {pin.siteName}
        </Heading>

        <TitleField form={form} />
      </Stack>

      <Stack isInline align="center" spacing={4}>
        <TagsField form={form} autoFocus={false} />
      </Stack>
    </Stack>
  )
}
