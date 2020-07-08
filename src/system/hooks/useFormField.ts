export const useFormField = (form, fieldName) => ({
  error: form.errors && form.errors[fieldName],
  isDirty: form.touched && form.touched[fieldName],
  value: form.watch(fieldName),
})
