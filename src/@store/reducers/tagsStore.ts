import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit"
import { loadPins, updatePin } from "~/src/@store/reducers/pinsStore"
import { Tag, TagOption } from "~/src/@types/pinlist-api"
import flatMap from "lodash/fp/flatMap"
import get from "lodash/fp/get"
import map from "lodash/fp/map"

import { createAPIClient } from "./helpers"

const tagsAdapter = createEntityAdapter<Tag>({
  selectId: ({ name }) => name,
  // Most recently updated first
  sortComparer: ({ updatedAt: a }, { updatedAt: b }) =>
    new Date(b).getTime() - new Date(a).getTime(),
})

export const { selectAll } = tagsAdapter.getSelectors()

export type TagsState = ReturnType<typeof tagsAdapter.getInitialState> & {
  loading: boolean | null
}

// Actions
export const loadTags = createAsyncThunk(
  "tags/load",
  async (data: object = {}, { getState }) => {
    const api = createAPIClient(getState())

    const tags = await api<Tag[]>({
      method: "POST",
      url: `/pin_tags`,
      data,
    })

    return tags
  },
)

const { reducer, actions } = createSlice({
  name: "tags",
  initialState: tagsAdapter.getInitialState() as TagsState,
  reducers: {
    upsertOne: tagsAdapter.upsertOne,
    upsertMany: tagsAdapter.upsertMany,
  },
  extraReducers: (builder) =>
    builder
      .addCase(loadTags.pending, (state) => {
        state.loading = true
      })
      .addCase(loadTags.fulfilled, (state, action) => {
        tagsAdapter.upsertMany(state, action.payload)
        state.loading = false
      })
      .addCase(loadPins.fulfilled, (state, { payload }) => {
        tagsAdapter.upsertMany(state, flatMap(get("tags"), payload.pins))
      })
      .addCase(updatePin.fulfilled, (state, { payload }) => {
        tagsAdapter.upsertMany(state, payload.tags)
      }),
})

export const { upsertOne, upsertMany } = actions

export const mapTagToTagOptions = ({ name }: Tag): TagOption => ({
  value: name,
  label: name,
})

export const mapTagsToTagOptions = map(mapTagToTagOptions)

export default reducer
