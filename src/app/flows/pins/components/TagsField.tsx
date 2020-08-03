import { FormControl, FormControlProps } from "@chakra-ui/core"
import { unwrapResult } from "@reduxjs/toolkit"
import {
  AsyncCreatable,
  Option,
  useDebouncedOptions,
} from "~/src/@components/Select"
import { useAppDispatch } from "~/src/@store"
import { loadTags } from "~/src/@store/reducers/tagsStore"
import { PinParams } from "~/src/@types/pinlist-api"
import React from "react"
import { Controller, UseFormMethods } from "react-hook-form"
import { Props as AsyncCreatableProps } from "react-select/async-creatable"

const formatTag = (name = "") => name.trim().toLowerCase()

interface TagsFieldProps extends FormControlProps {
  form: UseFormMethods<PinParams>
  selectProps?: Partial<AsyncCreatableProps<Option>>
}

export const TagsField: React.FC<TagsFieldProps> = ({
  form,
  selectProps = {},
  ...delegated
}) => {
  const dispatch = useAppDispatch()

  const { loadOptions } = useDebouncedOptions(
    async (input) => {
      const params = { filter: { name: { startsWith: input } } }
      const tags = await dispatch(loadTags(params)).then(unwrapResult)
      return tags.map(({ name }) => ({ value: name, label: name }))
    },
    { wait: 250 },
  )

  return (
    <FormControl w="100%" fontSize="md" {...delegated}>
      <Controller
        name="tagOptions"
        control={form.control}
        render={(props) => (
          <AsyncCreatable
            allowCreateWhileLoading={false}
            blurInputOnSelect={false}
            captureMenuScroll={true}
            defaultOptions={true}
            formatCreateLabel={formatTag}
            formatOptionLabel={({ value }) => formatTag(value)}
            isClearable={false}
            isMulti={true}
            loadOptions={loadOptions}
            maxMenuHeight={120}
            menuShouldScrollIntoView={true}
            placeholder="Tags"
            {...selectProps}
            {...props}
          />
        )}
      />
    </FormControl>
  )
}
