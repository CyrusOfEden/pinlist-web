import { UseFormMethods } from "react-hook-form"

export const useFormField = (form: UseFormMethods, fieldName: string) => ({
  error: form.errors && form.errors[fieldName],
  isTouched: form.formState.touched[fieldName],
  value: form.watch(fieldName),
})
