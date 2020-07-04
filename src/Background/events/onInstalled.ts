import { browser } from "webextension-polyfill-ts"

browser.runtime.onInstalled.addListener((event) => {
  switch (event.reason) {
    case "install":
    case "update":
      browser.tabs.create({
        url: browser.extension.getURL("app.html"),
      })
    case "browser_update":
      return
  }
})
