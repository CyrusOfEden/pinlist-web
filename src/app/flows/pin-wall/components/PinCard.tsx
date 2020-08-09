import { Box, IconButton, StackProps } from "@chakra-ui/core"
import { unwrapResult } from "@reduxjs/toolkit"
import * as Motion from "~/src/@components/Motion"
import theme from "~/src/@design/theme"
import { useAppDispatch } from "~/src/@store"
import { Pin, updatePin } from "~/src/@store/reducers/pinsStore"
import { PinParams } from "~/src/@types/pinlist-api"
import { MotionProps } from "framer-motion"
import identity from "lodash/identity"
import React, { useEffect } from "react"
import { useForm } from "react-hook-form"

import { NotesField } from "./NotesField"
import { PinImage } from "./PinImage"
import { TagsField } from "./TagsField"
import { TitleField } from "./TitleField"

interface Props {
  pin: Pin | PinParams
  inset?: number
  showSubmitButton?: boolean
  onSave?: (updatedPin: Pin) => unknown
  autoFocus?: "title" | "tags" | "notes"
  withImage?: boolean
}

export const PinCard: React.FC<Props & StackProps & MotionProps> = ({
  pin,
  withImage,
  autoFocus,
  inset = 5,
  showSubmitButton = false,
  onSave = identity,
  ...delegated
}) => {
  const form = useForm<PinParams>({
    mode: "onSubmit",
    defaultValues: pin,
  })

  useEffect(() => {
    form.reset(pin)
  }, [pin])

  const dispatch = useAppDispatch()

  const upsert = async (updates: Partial<Pin>) => {
    const action = updatePin({ ...pin, ...updates })
    const updatedPin = await dispatch(action).then(unwrapResult)
    onSave(updatedPin)
  }

  const handleSubmit = form.handleSubmit(upsert)

  const { isDirty, isSubmitting } = form.formState

  return (
    <Motion.Stack
      id={`pin$${pin.id}$update`}
      bg="white"
      boxShadow="sm"
      borderColor={pin.isStarred ? "gold.400" : "gray.50"}
      borderWidth={4}
      borderRadius={32}
      {...delegated}
      as="form"
      onSubmit={handleSubmit}
      p={inset}
      position="relative"
      spacing={3}
      whileHover={{ boxShadow: theme.shadows.lg, y: -2 }}
    >
      {withImage && (
        <Box>
          <PinImage pin={pin as Pin} />
        </Box>
      )}

      <TitleField form={form} autoFocus={autoFocus === "title"} />

      <TagsField form={form} />

      <NotesField form={form} />

      <Motion.Box
        position="absolute"
        right={5}
        bottom={0}
        variants={{
          mount: { display: "none", y: 0, opacity: 0 },
          enter: { display: "block", y: 24, opacity: 1 },
        }}
        animate={showSubmitButton || isDirty ? "enter" : "mount"}
      >
        <IconButton
          aria-label="Save Changes"
          boxShadow="xl"
          icon="check"
          rounded="full"
          size="lg"
          type="submit"
          variantColor="pink"
          isLoading={isSubmitting}
        />
      </Motion.Box>
    </Motion.Stack>
  )
}
