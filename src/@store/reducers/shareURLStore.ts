import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit"
import { ShortenedURL } from "~/src/@types/pinlist-api"

import { createAPIClient } from "./helpers"
import * as requestState from "./helpers/requestState"

export type ShareURL = ShortenedURL & requestState.Fields

const urlAdapter = createEntityAdapter<ShareURL>({
  selectId: ({ url }) => url,
})

export const { selectById: selectByUrl } = urlAdapter.getSelectors()

export const upsertURL = createAsyncThunk(
  "shareURL/upsertURL",
  async (url: string, { getState }) => {
    const api = createAPIClient(getState())
    const shortenedURL = await api<ShortenedURL>({
      method: "POST",
      url: "/shortened_urls",
      data: { url },
    })
    return shortenedURL
  },
)

const { reducer } = createSlice({
  name: "shareURL",
  initialState: urlAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(
        upsertURL.pending,
        (state, { meta: { arg: url, requestId } }) => {
          urlAdapter.upsertOne(state, {
            url,
            ...requestState.inProgress(requestId),
          } as any)
        },
      )
      .addCase(upsertURL.fulfilled, (state, { payload: url }) => {
        urlAdapter.upsertOne(state, { ...url, ...requestState.succeeded() })
      }),
})

export default reducer
