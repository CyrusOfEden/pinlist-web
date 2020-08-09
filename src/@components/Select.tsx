import theme from "~/src/@design/theme"
import { useDebounceFn } from "ahooks"
import { DebounceOptions } from "ahooks/lib/useDebounce/debounceOptions"
import React, { forwardRef } from "react"
import { Theme } from "react-select"
import AsyncSelect, { Props as AsyncProps } from "react-select/async"
import AsyncCreatableSelect, {
  Props as AsyncCreatableProps,
} from "react-select/async-creatable"
import CreatableSelect, {
  Props as CreatableProps,
} from "react-select/creatable"

export { components } from "react-select"

export interface Option {
  value: string
  label: string
}

export const useDebouncedOptions = (
  optionsLoader: (input: string) => Promise<Option[]>,
  options?: DebounceOptions,
) => {
  type LoadOptions = AsyncProps<Option>["loadOptions"]

  // react-select doesn't like promises...
  const { run, cancel } = useDebounceFn<LoadOptions>(
    (input, callback) => optionsLoader(input).then(callback),
    options,
  )

  return { loadOptions: run, cancelOptionsLoading: cancel }
}

export const Async: React.FC<AsyncProps<
  Option
>> = forwardRef((props, ref: React.Ref<any>) => (
  <AsyncSelect theme={selectTheme} ref={ref} {...props} />
))

export const AsyncCreatable: React.FC<AsyncCreatableProps<
  Option
>> = forwardRef((props, ref: React.Ref<any>) => (
  <AsyncCreatableSelect theme={selectTheme} ref={ref} {...props} />
))

export const Creatable: React.FC<CreatableProps<
  Option
>> = forwardRef((props, ref: React.Ref<any>) => (
  <CreatableSelect theme={selectTheme} ref={ref} {...props} />
))

const { colors } = theme

const selectTheme = (): Theme => ({
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
