import { browser } from "webextension-polyfill-ts"

// Basic Stuff
const mountOverlay = () =>
  browser.tabs.executeScript({ file: "/js/overlay.mount.js" })

const unmountOverlay = () =>
  browser.tabs.executeScript({ file: "/js/overlay.unmount.js" })

// BrowserAction
browser.browserAction.onClicked.addListener(mountOverlay)

// Context Menus
browser.runtime.onInstalled.addListener(() => {
  browser.contextMenus.create({
    id: "pinlist/mountOverlay",
    title: "Save to Joyful",
    contexts: ["page"],
  })
})

browser.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "pinlist/mountOverlay":
      return mountOverlay()
  }
})

browser.runtime.onMessage.addListener((message) => {
  switch (message) {
    case "pinlist/unmountOverlay":
      return unmountOverlay()
  }
})
