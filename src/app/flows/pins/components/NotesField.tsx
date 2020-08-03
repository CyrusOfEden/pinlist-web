import { FormControl, FormErrorMessage } from "@chakra-ui/core"
import { Textfield } from "~/src/@components/Textfield"
import { useFormField } from "~/src/@hooks/useFormField"
import React from "react"

export const NotesField = ({ form, ...props }) => {
  const field = useFormField(form, "notes")
  return (
    <FormControl w="100%" isInvalid={!!form.errors?.title?.message} {...props}>
      <Textfield
        name="notes"
        placeholder="Start typing some notes..."
        ref={form.register()}
        maxRows={8}
        variant="flushed"
        color="gray.500"
        borderBottomWidth={2}
        borderColor={field.isDirty ? "pink.300" : "transparent"}
        _placeholder={{ color: "gray.300" }}
        _hover={{ borderBottomColor: "gold.300" }}
        _focus={{ borderBottomColor: "gold.500" }}
      />
      <FormErrorMessage>{form.errors?.title?.message}</FormErrorMessage>
    </FormControl>
  )
}
