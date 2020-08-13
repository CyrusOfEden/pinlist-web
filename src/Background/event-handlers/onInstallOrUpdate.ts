import * as WebApp from "~/src/overlay/services/WebApp"
import { browser } from "webextension-polyfill-ts"

browser.runtime.onInstalled.addListener(async (event) => {
  switch (event.reason) {
    case "install":
    case "update":
      return await WebApp.open()
  }
})
