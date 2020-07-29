import {
  Button,
  Heading,
  Icon,
  Input,
  Stack,
  useClipboard,
} from "@chakra-ui/core"
import { useAppDispatch, useSession } from "~/src/@store"
import {
  createPin,
  deletePin,
  updatePin,
} from "~/src/@store/reducers/pinsStore"
import { Pin, PinParams } from "~/src/@types/pinlist-api"
import { setLastUsedTags } from "~/src/overlay/services/TagsCache"
import React, { useEffect, useMemo } from "react"
import { useForm } from "react-hook-form"

import { TagsField } from "./components/TagsField"
import { TitleField } from "./components/TitleField"

type FormProps = {
  pin: PinParams | Pin
  unmount: () => void
}

export const PinForm: React.FC<FormProps> = ({ pin, unmount }) => {
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

  const onDelete = async () => {
    if (pin.id) {
      await dispatch(deletePin(pin as Pin))
    }
    if (unmount) unmount()
  }

  const upsertPin = useMemo(
    () => async (values: PinParams) => {
      await dispatch((values.id ? updatePin : createPin)(values))
      setLastUsedTags(values.tagOptions)
      if (unmount) unmount()
    },
    [unmount],
  )

  return (
    <Stack spacing={3} as="form" onSubmit={form.handleSubmit(upsertPin)}>
      <Stack spacing={2}>
        <Stack isInline justify="space-between" align="center">
          <Heading size="xs" color="gold.300">
            {pin.siteName}
          </Heading>
          <Button
            opacity={0.5}
            size="xs"
            variant="outline"
            variantColor="pink"
            onClick={onDelete}
          >
            Unpin
          </Button>
        </Stack>

        <Input hidden name="id" ref={form.register()} />
        <Input hidden name="siteName" ref={form.register()} />
        <Input hidden name="url" ref={form.register()} />
        <Input hidden name="image" ref={form.register()} />
        <Input hidden name="description" ref={form.register()} />

        <TitleField form={form} />
      </Stack>

      <Stack isInline spacing={4}>
        <TagsField form={form} autoFocus />

        <Button
          type="submit"
          w="120px"
          ml="auto"
          onClick={onCopy}
          variantColor="purple"
        >
          {hasCopied ? (
            "Copied!"
          ) : (
            <>
              Pin&nbsp;+&nbsp;
              <Icon name="link" />
            </>
          )}
        </Button>
      </Stack>
    </Stack>
  )
}
