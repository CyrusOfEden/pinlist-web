import { UseFormMethods } from "react-hook-form"

export const useFormField = (form: UseFormMethods, fieldName: string) => ({
  error: form.errors && form.errors[fieldName],
  isTouched: form.formState.touched[fieldName],
  isDirty: form.formState.dirtyFields[fieldName],
  value: form.watch(fieldName),
})
