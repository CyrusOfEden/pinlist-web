import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit"
import { createAPIv1Client } from "~/src/@services/APIv1"
import { Tag } from "~/src/@types/pinlist-api"

import { RootState } from "../"

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
  async (params: object, { getState }) => {
    const {
      session: { firebaseToken },
    } = getState() as RootState

    const api = createAPIv1Client(firebaseToken)
    const tags = await api<Tag[]>({
      method: "GET",
      url: `/pin_tags`,
      params: params ?? {},
    })

    return tags
  },
)

const { reducer, actions } = createSlice({
  name: "tags",
  initialState: tagsAdapter.getInitialState() as TagsState,
  reducers: {
    upsertOne: tagsAdapter.upsertOne,
  },
  extraReducers(builder) {
    builder
      .addCase(loadTags.pending, (state) => {
        state.loading = true
      })
      .addCase(loadTags.fulfilled, (state, action) => {
        tagsAdapter.upsertMany(state, action.payload)
        state.loading = false
      })
  },
})

export const { upsertOne } = actions

export default reducer
