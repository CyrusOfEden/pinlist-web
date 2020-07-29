import {
  SerializedError,
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit"
import { createAPIv1Client } from "~/src/@services/APIv1"
import {
  Pagy,
  PagyMetadata,
  Pin,
  PinParams,
  Timestamps,
} from "~/src/@types/pinlist-api"

import { RootState } from "../"

const timestamps = (t = new Date()) => ({ updatedAt: t.toString() })

type RequestState = { error?: SerializedError; requestId?: string }
const inProgress = (request: string) => ({
  ...timestamps(),
  error: undefined,
  request,
})
const succeeded = () => ({
  ...timestamps(),
  error: undefined,
  request: undefined,
})
const failed = (error: SerializedError) => ({
  ...timestamps(),
  error,
  request: undefined,
})

const pinsAdapter = createEntityAdapter<Pin & RequestState>()

export const { selectAll, selectById } = pinsAdapter.getSelectors()

export type PinsState = ReturnType<typeof pinsAdapter.getInitialState> & {
  metadata: PagyMetadata
  loading: boolean | null
}

// Actions
export const loadPins = createAsyncThunk(
  "pins/load",
  async (page: number | "nextPage", { getState }) => {
    const {
      session: { firebaseToken, currentUser },
      pins: { metadata: pinsMetadata },
    } = getState() as RootState

    if (page === "nextPage") {
      page = Math.min((pinsMetadata?.page ?? 0) + 1, pinsMetadata.last)
    }

    const api = createAPIv1Client(firebaseToken)
    const { pins, metadata } = await api<Pagy<{ pins: Pin[] }>>({
      method: "GET",
      url: `/users/${currentUser.id}/pins`,
      params: { page },
    })

    return { pins, metadata }
  },
)

export const createPin = createAsyncThunk(
  "pins/create",
  async (pin: PinParams, { getState }) => {
    const { session } = getState() as RootState
    const api = createAPIv1Client(session.firebaseToken)
    const createdPin = await api<Pin>({
      method: "POST",
      url: `/users/${session.currentUser.id}/pins`,
      data: { pin },
    })
    return createdPin
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

export const deletePin = createAsyncThunk(
  "pins/delete",
  async (pin: Pin, { getState }) => {
    const { session } = getState() as RootState
    const api = createAPIv1Client(session.firebaseToken)
    const deletedPin = await api<Pin>({
      method: "DELETE",
      url: `/pins/${pin.id}`,
      data: { pin },
    })
    return deletedPin
  },
)

const { reducer, actions } = createSlice({
  name: "pins",
  initialState: pinsAdapter.getInitialState({
    metadata: {},
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
        createPin.pending,
        (state, { meta: { arg: stubbedPin, requestId } }) => {
          state.loading = true
          const pin = {
            ...stubbedPin,
            ...inProgress(requestId),
            archivedAt: null,
          }
          pinsAdapter.upsertOne(state, pin as any)
        },
      )
      .addCase(createPin.fulfilled, (state, { payload: pin }) => {
        pinsAdapter.upsertOne(state, pin)
      })
      .addCase(createPin.rejected, (state, { error, meta: { arg: pin } }) => {
        pinsAdapter.updateOne(state, {
          id: pin.id,
          changes: failed(error),
        })
      })
      .addCase(
        updatePin.pending,
        (state, { meta: { arg: pin, requestId } }) => {
          pinsAdapter.upsertOne(state, {
            ...pin,
            ...inProgress(requestId),
          } as any)
        },
      )
      .addCase(updatePin.fulfilled, (state, { payload: pin }) => {
        pinsAdapter.upsertOne(state, { ...pin, ...succeeded() })
      })
      .addCase(updatePin.rejected, (state, { error, meta: { arg: pin } }) => {
        pinsAdapter.updateOne(state, {
          id: pin.id,
          changes: failed(error),
        } as any)
      })
      .addCase(
        deletePin.pending,
        (state, { meta: { arg: pin, requestId } }) => {
          pinsAdapter.upsertOne(state, {
            ...pin,
            ...inProgress(requestId),
            archivedAt: new Date().toString(),
          })
        },
      )
      .addCase(deletePin.rejected, (state, { error, meta: { arg: pin } }) => {
        pinsAdapter.updateOne(state, {
          id: pin.id,
          changes: failed(error),
        })
      })
  },
})

export const { resetPins } = actions

export default reducer
