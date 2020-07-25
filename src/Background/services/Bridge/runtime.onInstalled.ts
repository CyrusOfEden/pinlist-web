import * as WebApp from "~/src/overlay/services/WebApp"
import { browser } from "webextension-polyfill-ts"

browser.runtime.onInstalled.addListener(async (event) => {
  switch (event.reason) {
    case "install":
      return WebApp.open()
    case "update":
    case "browser_update":
      return
  }
})
