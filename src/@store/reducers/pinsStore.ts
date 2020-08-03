import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit"
import { createAPIv1Client } from "~/src/@services/APIv1"
import {
  Pin as ApiPin,
  Pagy,
  PagyMetadata,
  PinParams,
} from "~/src/@types/pinlist-api"

import { RootState } from "../"
import * as requestState from "./requestState"

export type Pin = ApiPin & requestState.Fields

const pinsAdapter = createEntityAdapter<Pin>({
  // Most recently created first
  sortComparer: ({ createdAt: a }, { createdAt: b }) =>
    new Date(b).getTime() - new Date(a).getTime(),
})

export const { selectAll, selectById } = pinsAdapter.getSelectors()

export type PinsState = ReturnType<typeof pinsAdapter.getInitialState> & {
  metadata: PagyMetadata
  loading: boolean | null
}

// Actions
export const upsertPin = createAsyncThunk(
  "pins/upsertPin",
  async (pin: PinParams, { getState }) => {
    const { session } = getState() as RootState
    const api = createAPIv1Client(session.firebaseToken)
    const upsertedPin = await api<Pin>({
      method: "POST",
      url: `/pins`,
      data: { pin },
    })
    return upsertedPin
  },
)

export const loadPins = createAsyncThunk(
  "pins/load",
  async (page: number | "nextPage", { getState }) => {
    const {
      session: { firebaseToken },
      pins: { metadata: pinsMetadata },
    } = getState() as RootState

    if (page === "nextPage") {
      page = Math.min((pinsMetadata?.page ?? 0) + 1, pinsMetadata.last)
    }

    const api = createAPIv1Client(firebaseToken)
    const { pins, metadata } = await api<Pagy<{ pins: Pin[] }>>({
      method: "GET",
      url: `/pins`,
      params: { page },
    })

    return { pins, metadata }
  },
)

export const updatePin = createAsyncThunk(
  "pins/update",
  async (pin: PinParams, { getState }) => {
    const { session } = getState() as RootState
    const api = createAPIv1Client(session.firebaseToken)
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
    loading: null,
  }) as PinsState,
  reducers: {
    resetPins: pinsAdapter.removeAll,
  },
  extraReducers(builder) {
    builder
      .addCase(loadPins.pending, (state) => {
        state.loading = true
      })
      .addCase(loadPins.fulfilled, (state, action) => {
        pinsAdapter.upsertMany(state, action.payload.pins)
        state.metadata = action.payload.metadata
        state.loading = false
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

export const { resetPins } = actions

export default reducer
