import { FormControl, FormErrorMessage } from "@chakra-ui/core"
import { Textfield } from "~/src/@components/Textfield"
import React from "react"

export const TitleField = ({ form, ...props }) => (
  <FormControl w="100%" isInvalid={!!form.errors?.title?.message} {...props}>
    <Textfield
      id="title"
      name="title"
      placeholder="Title"
      ref={form.register({ required: "You need a title!" })}
      maxRows={3}
      variant="unstyled"
      color="gold.800"
      fontFamily="heading"
      fontSize="xl"
      fontWeight={500}
      borderColor="transparent"
      focusBorderColor="gold.500"
    />
    <FormErrorMessage>{form.errors?.title?.message}</FormErrorMessage>
  </FormControl>
)
