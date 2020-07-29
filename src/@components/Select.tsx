import colors from "~/src/@design/colors"
import React, { forwardRef } from "react"
import { OptionTypeBase as Option, StylesConfig, Theme } from "react-select"
import AsyncCreatableSelect, {
  Props as AsyncCreatableProps,
} from "react-select/async-creatable"
import CreatableSelect, {
  Props as CreatableProps,
} from "react-select/creatable"

export const tagToOption = ({ name }: { name: string }) => ({
  value: name,
  label: name,
})

// export const wrapControllerChangeHandler = (
//   onChange: (...events: any[]) => void,
// ): StateManager["onChange"] => (value, action) => {
//   switch (action.action) {
//     case "create-option":
//     case "select-option":
//       debugger
//     case "deselect-option":
//     case "pop-value":
//     case "remove-value":
//       debugger
//     case "clear":
//       debugger
//   }
// }

export const AsyncCreatable: React.FC<AsyncCreatableProps<
  Option
>> = forwardRef((props, ref: React.Ref<any>) => (
  <AsyncCreatableSelect styles={styles} theme={theme} ref={ref} {...props} />
))

export const Creatable: React.FC<CreatableProps<
  Option
>> = forwardRef((props, ref: React.Ref<any>) => (
  <CreatableSelect styles={styles} theme={theme} ref={ref} {...props} />
))

const styles: StylesConfig = {
  multiValueRemove: (base) => ({ ...base, cursor: "pointer" }),
}

const theme = (): Theme => ({
  borderRadius: 4,
  colors: {
    primary: colors.gold[500],
    primary75: colors.gold[400],
    primary50: colors.gold[300],
    primary25: colors.gold[200],
    danger: colors.red[50],
    dangerLight: colors.red.base,
    neutral0: colors.white,
    neutral5: colors.gold[50],
    neutral10: colors.gold[100],
    neutral20: colors.gold[200],
    neutral30: colors.gold[300],
    neutral40: colors.gold[400],
    neutral50: colors.gold[500],
    neutral60: colors.gold[600],
    neutral70: colors.gold[700],
    neutral80: colors.gold[800],
    neutral90: colors.gold[900],
  },
  spacing: {
    baseUnit: 4,
    controlHeight: 40,
    menuGutter: 6,
  },
})
