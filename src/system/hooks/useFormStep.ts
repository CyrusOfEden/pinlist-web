export const useFormStep = (form, fieldName = "step") =>
  parseInt(form.watch(fieldName) || 0)
