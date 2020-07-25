import {
  Button,
  Heading,
  Icon,
  Input,
  Stack,
  useClipboard,
} from "@chakra-ui/core"
import { useSession } from "~/src/@services/Session"
import { Pin } from "~/src/@types/pinlist-api"
import { setLastUsedTags } from "~/src/overlay/services/TagsCache"
import React, { useEffect, useMemo } from "react"
import { useForm } from "react-hook-form"

import { TagsField } from "./components/TagsField"
import { TitleField } from "./components/TitleField"

export type PinFormFields = Pick<
  Pin,
  "id" | "title" | "url" | "siteName" | "image" | "description" | "tagOptions"
>

type FormProps = {
  pin: PinFormFields | Pin
  unmount: () => void
}

export const PinForm: React.FC<FormProps> = ({ pin, unmount }) => {
  const { currentUser, api } = useSession()

  const form = useForm<PinFormFields>({
    mode: "onSubmit",
    defaultValues: pin,
  })
  useEffect(() => {
    form.reset(pin)
  }, [pin])

  const { onCopy, hasCopied } = useClipboard(
    "shareUrl" in pin ? pin.shareUrl : "",
  )

  const onCancel = async () => {
    if (pin.id) {
      await api({ method: "DELETE", url: `/pins/${pin.id}/` })
    }
    unmount()
  }

  const onSubmit = useMemo(
    () => async (values: PinFormFields) => {
      const data = { pin: values }
      setTimeout(unmount, 1000)
      await Promise.all([
        setLastUsedTags(values.tagOptions),
        api<Pin>(
          pin.id
            ? { method: "PUT", url: `/pins/${pin.id}`, data }
            : { method: "POST", url: `/users/${currentUser.id}/pins`, data },
        ),
      ])
    },
    [pin.id, currentUser.id, unmount],
  )

  return (
    <Stack spacing={3} as="form" onSubmit={form.handleSubmit(onSubmit)}>
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
            onClick={onCancel}
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
        <TagsField form={form} />

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
