import { FormControl, FormErrorMessage } from "@chakra-ui/core"
import { Textfield } from "~/src/@components/Textfield"
import { useFormField } from "~/src/@hooks/useFormField"
import React from "react"

export const TitleField = ({ form, autoFocus = false, ...props }) => {
  const field = useFormField(form, "title")

  return (
    <FormControl w="100%" isInvalid={!!form.errors?.title?.message} {...props}>
      <Textfield
        name="title"
        placeholder="Title"
        ref={form.register({ required: "You need a title!" })}
        maxRows={3}
        variant="flushed"
        color="gold.800"
        fontFamily="heading"
        fontSize="xl"
        autoFocus={autoFocus}
        lineHeight={1.25}
        fontWeight={500}
        borderBottomWidth={2}
        borderColor={field.isDirty ? "pink.300" : "transparent"}
        _hover={{ borderBottomColor: "gold.300" }}
        _focus={{ borderBottomColor: "gold.500" }}
      />
      <FormErrorMessage>{form.errors?.title?.message}</FormErrorMessage>
    </FormControl>
  )
}
