import { browser } from "webextension-polyfill-ts"

export const open = async (path = "/") =>
  await browser.tabs.create({ url: process.env.APP_HOST + path })
