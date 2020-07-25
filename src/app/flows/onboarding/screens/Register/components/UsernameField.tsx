import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Stack,
} from "@chakra-ui/core"
import * as Motion from "~/src/@components/Motion"
import { useFormField } from "~/src/@hooks/useFormField"
import React from "react"

import { WindupFieldHeader } from "./WindupFieldHeader"

export const UsernameField = ({ form, isCurrentStep, ...delegated }) => {
  const { error } = useFormField(form, "username")

  return (
    <Motion.Box {...delegated}>
      <WindupFieldHeader
        title="Pick a snazzy username!"
        earnedPoints={isCurrentStep ? 0 : 250}
      />
      <Stack isInline>
        <FormControl isInvalid={error} w="100%">
          <Input
            type="text"
            name="username"
            id="username"
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
