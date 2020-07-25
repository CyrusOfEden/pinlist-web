import { FormControl } from "@chakra-ui/core"
import * as Select from "~/src/@components/Select"
import { useSession } from "~/src/@services/Session"
import { Tag } from "~/src/@types/pinlist-api"
import { useRequest } from "ahooks"
import React from "react"
import { Controller } from "react-hook-form"

export const TagsField = ({ form, ...props }) => {
  const { currentUser, api } = useSession()

  const formatTag = (tag = "") => "#" + tag.trim().toLowerCase()

  const { data: options, loading: isLoading } = useRequest(async () => {
    const userTags: Tag[] = await api({
      method: "GET",
      url: `/users/${currentUser.id}/pin_tags`,
    }).catch(() => [])
    return userTags.map(Select.tagToOption)
  })

  return (
    <FormControl w="100%" fontSize="md" {...props}>
      <Controller
        name="tagOptions"
        control={form.control}
        render={(props) => (
          <Select.Creatable
            autoFocus
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
            options={options}
            placeholder="Tags"
            {...props}
          />
        )}
      />
    </FormControl>
  )
}
