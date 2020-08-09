import { createAsyncThunk, createSlice, unwrapResult } from "@reduxjs/toolkit"
import * as ContentScript from "~/src/@services/actors/ContentScript"
import { RootState } from "~/src/@store"
import { updatePin, upsertPin } from "~/src/@store/reducers/pinsStore"
import { Pin, PinParams } from "~/src/@types/pinlist-api"
import { browser } from "webextension-polyfill-ts"

export type OverlayState = {
  name: "mount" | "loaded" | "created" | "leave"
  pin?: Pin
  pinParams?: PinParams
  tabId?: number
}

export const loadPinForTab = createAsyncThunk(
  "overlay/loadPin",
  async (tabId: number) => {
    const [page, { lastUsedTagOptions = [] }] = await Promise.all([
      ContentScript.request(tabId, { name: "defaultPinAttributes" }),
      browser.storage.sync.get(["lastUsedTagOptions"]),
    ])
    return { ...page, tagOptions: lastUsedTagOptions }
  },
)

export const savePin = createAsyncThunk(
  "overlay/savePin",
  async (_, { dispatch, getState }) => {
    const {
      overlay: { pinParams },
    } = getState() as RootState
    const pin = await dispatch(upsertPin(pinParams)).then(unwrapResult)
    return pin
  },
)

export const closeOverlay = createAsyncThunk(
  "overlay/close",
  async (_, { getState }) => {
    const {
      overlay: {
        tabId,
        pin: { tagOptions: lastUsedTagOptions },
      },
    } = getState() as RootState
    await Promise.all([
      browser.storage.sync.set({ lastUsedTagOptions }),
      ContentScript.call(tabId, { name: "unmountOverlay" }),
    ])
  },
)

const { reducer } = createSlice({
  name: "overlay",
  initialState: { name: "mount" } as OverlayState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(loadPinForTab.pending, (state, { meta: { arg: tabId } }) => {
        state.tabId = tabId
      })
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
      .addCase(closeOverlay.pending, (state) => {
        state.name = "leave"
      }),
})

export default reducer
