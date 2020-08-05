import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import map from "lodash/fp/map"
import { Tabs } from "webextension-polyfill-ts"

export type Tab = Pick<
  Tabs.Tab,
  "windowId" | "favIconUrl" | "title" | "url"
> & {
  tabId: number
  isActive: boolean
}

export const mapBrowserTab = ({
  id: tabId,
  windowId,
  active: isActive,
  favIconUrl,
  title,
  url,
}: Tabs.Tab): Tab => ({
  tabId,
  windowId,
  isActive,
  favIconUrl,
  title,
  url,
})

export const mapBrowserTabs = map(mapBrowserTab)

const tabsAdapter = createEntityAdapter<Tab>()

const { reducer, actions } = createSlice({
  name: "tabs",
  initialState: tabsAdapter.getInitialState(),
  reducers: {
    setAll: tabsAdapter.setAll,
  },
})

export const { setAll } = actions

export default reducer
