import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit"
import {
  Pin as ApiPin,
  Pagy,
  PagyMetadata,
  PinParams,
} from "~/src/@types/pinlist-api"
import assign from "lodash/assign"

import { RootState } from "../"
import { createAPIClient } from "./helpers"
import * as requestState from "./helpers/requestState"

export type Pin = ApiPin & requestState.Fields

const pinsAdapter = createEntityAdapter<Pin>({
  // Most recently created first
  sortComparer: ({ createdAt: a }, { createdAt: b }) =>
    new Date(b).getTime() - new Date(a).getTime(),
})

export const { selectAll, selectById } = pinsAdapter.getSelectors()

export type PinsState = ReturnType<typeof pinsAdapter.getInitialState> & {
  metadata: PagyMetadata
  isLoading: boolean | null
}

// Actions
export const upsertPin = createAsyncThunk(
  "pins/upsertPin",
  async (pin: PinParams, { getState }) => {
    const api = createAPIClient(getState())
    const upsertedPin = await api<Pin>({
      method: "POST",
      url: `/pins`,
      data: { pin },
    })
    return upsertedPin
  },
)

type LoadParams = {
  tags?: string[]
}

export const loadPins = createAsyncThunk(
  "pins/load",
  async (params: LoadParams, { getState }) => {
    const {
      pins: {
        metadata: { page = 1, last = 1 },
      },
    } = getState() as RootState

    const api = createAPIClient(getState())
    const { pins, metadata } = await api<Pagy<{ pins: Pin[] }>>({
      method: "GET",
      url: `/pins`,
      params: {
        page: Math.min(page + 1, last),
        ...params,
      },
    })

    return { pins, metadata }
  },
)

export const updatePin = createAsyncThunk(
  "pins/update",
  async (pin: Pick<Pin, "id"> & Partial<Pin>, { getState }) => {
    const api = createAPIClient(getState())
    const updatedPin = await api<Pin>({
      method: "PUT",
      url: `/pins/${pin.id}`,
      data: { pin },
    })
    return updatedPin
  },
)

const { reducer, actions } = createSlice({
  name: "pins",
  initialState: pinsAdapter.getInitialState({
    metadata: {},
    isLoading: null,
  }) as PinsState,
  reducers: {
    resetPins: pinsAdapter.removeAll,
    setPinsState: (state, { payload }) => {
      assign(state, payload)
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loadPins.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loadPins.fulfilled, (state, action) => {
        pinsAdapter.upsertMany(state, action.payload.pins)
        state.metadata = action.payload.metadata
        state.isLoading = false
      })
      .addCase(
        updatePin.pending,
        (state, { meta: { arg: pin, requestId } }) => {
          pinsAdapter.upsertOne(state, {
            ...pin,
            ...requestState.inProgress(requestId),
          } as any)
        },
      )
      .addCase(updatePin.fulfilled, (state, { payload: pin }) => {
        pinsAdapter.upsertOne(state, { ...pin, ...requestState.succeeded() })
      })
      .addCase(updatePin.rejected, (state, { error, meta: { arg: pin } }) => {
        pinsAdapter.updateOne(state, {
          id: pin.id,
          changes: requestState.failed(error),
        } as any)
      })
  },
})

export const { resetPins, setPinsState } = actions

export const selectWhereTaggedWith = (taggedWith: string[]) => (pins: Pin[]) =>
  pins.filter(({ tags }) =>
    taggedWith.every((tag) => !!tags.find(({ name }) => name === tag)),
  )

export default reducer
