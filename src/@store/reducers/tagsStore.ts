import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit"
import { createAPIv1Client } from "~/src/@services/APIv1"
import { Tag } from "~/src/@types/pinlist-api"

import { RootState } from "../"

const tagsAdapter = createEntityAdapter<Tag>({
  sortComparer({ updatedAt: a }, { updatedAt: b }) {
    // Most recently updated first
    return new Date(b).getTime() - new Date(a).getTime()
  },
})

export const { selectAll } = tagsAdapter.getSelectors()

export type TagsState = ReturnType<typeof tagsAdapter.getInitialState> & {
  loading: boolean | null
}

// Actions
export const loadTags = createAsyncThunk(
  "tags/load",
  async (_, { getState }) => {
    const {
      session: { firebaseToken, currentUser },
    } = getState() as RootState

    const api = createAPIv1Client(firebaseToken)
    const tags = await api<Tag[]>({
      method: "GET",
      url: `/users/${currentUser.id}/pin_tags`,
    })

    return tags
  },
)

const { reducer } = createSlice({
  name: "tags",
  initialState: tagsAdapter.getInitialState() as TagsState,
  reducers: {},
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

export default reducer
