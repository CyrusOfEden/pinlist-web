import { browser } from "webextension-polyfill-ts"

export const open = (path = "/") =>
  browser.tabs.create({ url: process.env.APP_HOST + path })
