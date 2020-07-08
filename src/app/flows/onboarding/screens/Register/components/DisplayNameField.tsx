import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Stack,
} from "@chakra-ui/core"
import { useFormField } from "~/src/system/hooks/useFormField"
import * as Motion from "~/src/system/Motion"
import React from "react"

import { WindupFormLabel } from "./WindupFormLabel"

export const DisplayNameField = ({ form, isCurrentStep, ...delegated }) => {
  const { error } = useFormField(form, "displayName")

  return (
    <Motion.Box {...delegated}>
      <WindupFormLabel title="Pick a snazzy username!" />
      <Stack isInline>
        <FormControl isInvalid={error} w="100%">
          <Input
            type="text"
            name="displayName"
            id="displayName"
            placeholder="Something Unique"
            borderColor="transparent"
            focusBorderColor="gold.500"
            spellCheck={false}
            autoCapitalize="off"
            autoComplete="off"
            autoFocus
            ref={form.register({
              required: "You need a username.",
              minLength: {
                value: 3,
                message: "Usernames must be at least 3 characters long.",
              },
              maxLength: {
                value: 24,
                message: "Usernames cannot be longer than 24 characters.",
              },
              pattern: {
                value: /[A-Za-z0-9.-_]+/,
                message:
                  "You can only use letters, numbers, and .-_ in your username.",
              },
            })}
          />
          <FormErrorMessage>{error?.message}</FormErrorMessage>
        </FormControl>
        {isCurrentStep && (
          <Button type="submit" variantColor="gold">
            OK
          </Button>
        )}
      </Stack>
    </Motion.Box>
  )
}
