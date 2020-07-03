import { browser } from "webextension-polyfill-ts"

browser.runtime.onInstalled.addListener((event) => {
  switch (event.reason) {
    case "install":
      browser.tabs.create({
        url: browser.extension.getURL("onboarding.html"),
      })
    case "update":
    case "browser_update":
      return
  }
})
