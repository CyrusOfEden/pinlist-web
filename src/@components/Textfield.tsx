import { Input, InputProps } from "@chakra-ui/core"
import React from "react"
import TextareaAutosize, {
  TextareaAutosizeProps,
} from "react-textarea-autosize"

export type TextfieldProps = InputProps & TextareaAutosizeProps

export const Textfield: React.FC<TextfieldProps> = React.forwardRef(
  (
    { variant = "outline", py = variant === "unstyled" ? 0 : 2, ...props },
    ref,
  ) => (
    <Input
      {...props}
      variant={variant}
      py={py}
      ref={ref}
      as={TextareaAutosize}
      transition="none"
      resize="none"
    />
  ),
)
