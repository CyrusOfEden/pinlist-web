import { browser } from "webextension-polyfill-ts"

const host = process.env.APP_HOST

export const open = async (path = "/") =>
  await browser.tabs.create({ url: host + path })
