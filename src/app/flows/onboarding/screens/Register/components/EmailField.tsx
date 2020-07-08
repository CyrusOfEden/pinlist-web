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

export const EmailField = ({ form, isCurrentStep, ...delegated }) => {
  const { error } = useFormField(form, "email")

  return (
    <Motion.Box {...delegated}>
      <WindupFormLabel title="What's your email?" />
      <Stack isInline>
        <FormControl isInvalid={error} w="100%">
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email Address"
            borderColor="transparent"
            focusBorderColor="gold.500"
            autoFocus
            ref={form.register({
              required: "You need an email to register.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Make sure your email is formatted correctly!",
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
