import * as ContentScript from "~/src/@services/actors/ContentScript"
import { browser } from "webextension-polyfill-ts"

browser.browserAction.onClicked.addListener((tab) => {
  ContentScript.call(tab, { name: "mountOverlay" })
})
