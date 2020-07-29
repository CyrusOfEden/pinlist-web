import { FormControl } from "@chakra-ui/core"
import { createSelector } from "@reduxjs/toolkit"
import * as Select from "~/src/@components/Select"
import { RootState, useAppSelector } from "~/src/@store"
import { selectAll } from "~/src/@store/reducers/tagsStore"
import { Tag } from "~/src/@types/pinlist-api"
import React from "react"
import { Controller } from "react-hook-form"

export const TagsField = ({ form, autoFocus, ...props }) => {
  const userTags = useAppSelector((state) => selectAll(state.tags))
  const isLoading = useAppSelector((state) => state.tags.loading)

  const formatTag = (tag = "") => "#" + tag.trim().toLowerCase()

  return (
    <FormControl w="100%" fontSize="md" {...props}>
      <Controller
        name="tagOptions"
        control={form.control}
        render={(props) => (
          <Select.Creatable
            autoFocus={autoFocus}
            blurInputOnSelect={false}
            captureMenuScroll
            formatCreateLabel={formatTag}
            formatOptionLabel={({ value }) => formatTag(value)}
            isClearable={false}
            isLoading={isLoading}
            isMulti
            maxMenuHeight={120}
            menuPlacement="top"
            menuShouldScrollIntoView={false}
            options={userTags.map(Select.tagToOption)}
            placeholder="Tags"
            {...props}
          />
        )}
      />
    </FormControl>
  )
}
