import { Ahoy } from "~/src/@services/Ahoy"
import { browser } from "webextension-polyfill-ts"

import { mapBrowserTab } from "./reducers/tabsStore"

browser.sessions.onChanged.addListener(async () => {
  for (const tab of await browser.tabs.query({})) {
    Ahoy.track("tab", mapBrowserTab(tab))
  }
})
