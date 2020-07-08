import { Button, FormControl, Radio, RadioGroup, Stack } from "@chakra-ui/core"
import * as Motion from "~/src/system/Motion"
import React from "react"

import { WindupFormLabel } from "./WindupFormLabel"

export const GenderField = ({ form, isCurrentStep, ...delegated }) => (
  <Motion.Box {...delegated}>
    <WindupFormLabel title="How do you see yourself?" />
    <Stack
      isInline
      spacing={8}
      align="center"
      justify="space-between"
      height="40px"
    >
      <RadioGroup name="gender" as={FormControl} isInline spacing={4}>
        <RadioButton form={form} value="female">
          Female
        </RadioButton>
        <RadioButton form={form} value="nuanced">
          Nuanced
        </RadioButton>
        <RadioButton form={form} value="male">
          Male
        </RadioButton>
      </RadioGroup>
      {isCurrentStep && (
        <Button type="submit" variantColor="gold">
          OK
        </Button>
      )}
    </Stack>
  </Motion.Box>
)

const RadioButton = ({ form, ...delegated }) => (
  <Radio
    name="gender"
    ref={form.register({ required: "Please select the most accurate one." })}
    {...delegated}
    variantColor="gold"
    borderColor="gold.200"
  />
)
