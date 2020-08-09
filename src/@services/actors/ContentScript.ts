import { Tabs, browser } from "webextension-polyfill-ts"

type TabRef = Tabs.Tab | number

const getTabId = (ref: TabRef): number =>
  typeof ref === "number" ? ref : ref.id

export type MountPinOverlay = { name: "mountOverlay"; tabId: number }
export type UnmountPinOverlay = { name: "unmountOverlay" }
export type GetDefaultPinAttributes = { name: "defaultPinAttributes" }

export type Message =
  | MountPinOverlay
  | UnmountPinOverlay
  | GetDefaultPinAttributes

export const request = (ref: TabRef, message: GetDefaultPinAttributes) =>
  browser.tabs.sendMessage(getTabId(ref), message)

export const call = (
  ref: TabRef,
  message: MountPinOverlay | UnmountPinOverlay,
) => browser.tabs.sendMessage(getTabId(ref), message)
