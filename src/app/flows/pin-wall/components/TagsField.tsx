import { FormControl, FormControlProps } from "@chakra-ui/core"
import { unwrapResult } from "@reduxjs/toolkit"
import { AsyncCreatable, useDebouncedOptions } from "~/src/@components/Select"
import theme from "~/src/@design/theme"
import { useAppDispatch, useAppSelector } from "~/src/@store"
import { mapTagsToTagOptions, selectAll } from "~/src/@store/reducers/tagsStore"
import { loadTags } from "~/src/@store/reducers/tagsStore"
import { TagOption } from "~/src/@types/pinlist-api"
import constant from "lodash/constant"
import React from "react"
import { Controller } from "react-hook-form"
import { StylesConfig } from "react-select"
import { Props as AsyncCreatableProps } from "react-select/async-creatable"

const formatTag = (name = "") => name.trim().toLowerCase()

const filterTagOptions = ({ value }: TagOption, input: string) =>
  value.toString().startsWith(input.trim().toLowerCase())

interface Props extends FormControlProps {
  form: any
  selectProps?: Partial<AsyncCreatableProps<TagOption>>
}

export const TagsField: React.FC<Props> = ({
  form,
  selectProps = {},
  ...delegated
}) => {
  const dispatch = useAppDispatch()
  const loadedOptions = useAppSelector((state) =>
    mapTagsToTagOptions(selectAll(state.tags)),
  )

  const { loadOptions } = useDebouncedOptions(
    async (input) => {
      const params = { filter: { name: { startsWith: input } } }
      const tags = await dispatch(loadTags(params)).then(unwrapResult)
      return mapTagsToTagOptions(tags)
    },
    { wait: 250, leading: false, trailing: true },
  )

  return (
    <FormControl w="100%" fontSize="md" {...delegated}>
      <Controller
        name="tagOptions"
        control={form.control}
        render={(props) => (
          <AsyncCreatable
            allowCreateWhileLoading={true}
            blurInputOnSelect={false}
            captureMenuScroll={true}
            createOptionPosition="first"
            defaultOptions={loadedOptions}
            filterOption={filterTagOptions}
            formatCreateLabel={formatTag}
            formatOptionLabel={({ value }) => formatTag(value)}
            isClearable={true}
            isMulti={true}
            loadOptions={loadOptions}
            maxMenuHeight={120}
            menuShouldScrollIntoView={true}
            noOptionsMessage={constant("No tags found")}
            placeholder="Tags"
            styles={styles}
            {...selectProps}
            {...props}
          />
        )}
      />
    </FormControl>
  )
}

const { colors } = theme

const borderRadius = 24

export const styles: StylesConfig = {
  control: (base, state) => ({
    ...base,
    borderWidth: 0,
    outlineWidth: 0,
    boxShadow: "none",
    borderRadius: 0,
    borderBottomWidth: 2,
    borderBottomColor: state.isFocused ? colors.gold[500] : "transparent",
  }),
  valueContainer: (base) => ({
    ...base,
    padding: 0,
  }),
  multiValue: (base) => ({
    ...base,
    borderRadius,
    overflow: "hidden",
    paddingLeft: 2,
  }),
  multiValueRemove: (base) => ({
    ...base,
    cursor: "pointer",
    marginLeft: 1,
    paddingLeft: 1,
    paddingRight: ((base.paddingRight as number) ?? 0) + 2,
  }),
  placeholder: (base) => ({
    ...base,
    color: colors.gray[400],
  }),
  menu: (base) => ({
    ...base,
    overflow: "hidden",
    paddingTop: 8,
    paddingBottom: 8,
    boxShadow: theme.shadows.xl,
    borderWidth: 2,
    borderColor: colors.gold[200],
  }),
  clearIndicator: (base) => ({ ...base, cursor: "pointer" }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: () => ({ display: "none" }),
}
