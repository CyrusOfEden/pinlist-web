import { FormControl, FormControlProps } from "@chakra-ui/core"
import { unwrapResult } from "@reduxjs/toolkit"
import { Async, useDebouncedOptions } from "~/src/@components/Select"
import theme from "~/src/@design/theme"
import { useAppDispatch, useAppSelector } from "~/src/@store"
import {
  loadTags,
  mapTagsToTagOptions,
  selectAll,
} from "~/src/@store/reducers/tagsStore"
import { TagOption } from "~/src/@types/pinlist-api"
import React from "react"
import { Controller } from "react-hook-form"
import { StylesConfig } from "react-select"
import { Props as AsyncProps } from "react-select/async"

import { styles as tagFieldStyles } from "./TagsField"

export const TagsSearch: React.FC<Partial<AsyncProps<TagOption>>> = (props) => {
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
    <Async
      defaultOptions={loadedOptions}
      isClearable={false}
      isMulti={true}
      loadOptions={loadOptions}
      placeholder="Search by tags"
      formatOptionLabel={({ label }) => formatTag(label)}
      filterOption={filterTagOptions}
      styles={styles}
      noOptionsMessage={noOptionsMessage}
      {...props}
    />
  )
}

const formatTag = (name = "") => name.trim().toLowerCase()

const filterTagOptions = ({ value }: TagOption, input: string) =>
  value.toString().startsWith(input.trim().toLowerCase())

const noOptionsMessage = ({ inputValue }: { inputValue: string }): string =>
  `Nothing tagged with '${inputValue}'`

const styles: StylesConfig = {
  ...tagFieldStyles,
  control: (...args) => ({
    ...tagFieldStyles.control(...args),
    paddingTop: theme.space[4],
    paddingBottom: theme.space[4],
    paddingLeft: theme.space[8],
    paddingRight: theme.space[8],
  }),
  valueContainer: (...args) => ({
    ...tagFieldStyles.valueContainer(...args),
  }),
  multiValue: (...args) => ({
    ...tagFieldStyles.multiValue(...args),
    paddingLeft: theme.space[2],
  }),
  multiValueLabel: (base) => ({
    ...base,
    fontFamily: theme.fonts.heading,
    fontSize: theme.fontSizes.lg,
  }),
  multiValueRemove: (...args) => ({
    ...tagFieldStyles.multiValueRemove(...args),
    paddingRight: theme.space[2],
  }),
  input: (base) => ({
    ...base,
    marginLeft: theme.space[4],
    fontFamily: theme.fonts.heading,
    fontStyle: "italic",
    fontSize: theme.fontSizes["3xl"],
  }),
  placeholder: (...args) => ({
    ...tagFieldStyles.placeholder(...args),
    marginLeft: theme.space[4],
    fontFamily: theme.fonts.heading,
    fontStyle: "italic",
    fontSize: theme.fontSizes["3xl"],
  }),
  menu: (...args) => ({
    ...tagFieldStyles.menu(...args),
    boxShadow: theme.shadows["2xl"],
  }),
  loadingIndicator: () => ({ display: "none" }),
}
