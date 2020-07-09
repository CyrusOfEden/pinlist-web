import { UseFormMethods } from "react-hook-form"

export const useFormStep = (form: UseFormMethods<any>, fieldName = "step") =>
  parseInt(form.watch(fieldName) || "0")
