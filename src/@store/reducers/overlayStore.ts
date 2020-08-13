import { createAsyncThunk, createSlice, unwrapResult } from "@reduxjs/toolkit"
import { RootState } from "~/src/@store"
import { updatePin, upsertPin } from "~/src/@store/reducers/pinsStore"
import { Pin, PinParams } from "~/src/@types/pinlist-api"
import QueryString from "query-string"
import { browser } from "webextension-polyfill-ts"

export type OverlayState = {
  name: "mounted" | "loaded" | "created" | "left"
  pin?: Pin
  pinParams?: PinParams
}

const lastUsedTagOptions = async () =>
  await browser.storage.local
    .get(["lastUsedTagOptions"])
    .then(({ lastUsedTagOptions: options }) => options ?? [])

export const loadPinForTab = createAsyncThunk("overlay/loadPin", async () => {
  const pinAttributes = QueryString.parse(location.search)
  const tagOptions = await lastUsedTagOptions()

  return { ...pinAttributes, tagOptions } as PinParams
})

export const savePin = createAsyncThunk(
  "overlay/savePin",
  async (_, { dispatch, getState }) => {
    const {
      overlay: { pinParams },
    } = getState() as RootState
    const action = await dispatch(upsertPin(pinParams))
    const pin = unwrapResult(action)
    return pin
  },
)

export const unmountOverlay = createAsyncThunk(
  "overlay/unmount",
  async (_, { getState }) => {
    const {
      overlay: {
        pin: { tagOptions: lastUsedTagOptions },
      },
    } = getState() as RootState
    await browser.storage.local.set({ lastUsedTagOptions })
    await browser.runtime.sendMessage("pinlist/unmountOverlay")
  },
)

const { reducer } = createSlice({
  name: "overlay",
  initialState: { name: "mounted" } as OverlayState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(loadPinForTab.fulfilled, (state, { payload }) => {
        state.name = "loaded"
        state.pinParams = payload
      })
      .addCase(savePin.fulfilled, (state, { payload }) => {
        state.name = "created"
        state.pin = payload
      })
      .addCase(updatePin.pending, (state, { meta: { arg: pinParams } }) => {
        state.pin = { ...state.pin, ...pinParams }
      })
      .addCase(updatePin.fulfilled, (state, { payload }) => {
        state.pin = payload
      })
      .addCase(unmountOverlay.pending, (state) => {
        state.name = "left"
      }),
})

export default reducer
