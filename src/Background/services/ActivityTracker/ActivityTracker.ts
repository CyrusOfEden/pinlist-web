import { Segment } from "~/src/@services/Segment"
import { browser } from "webextension-polyfill-ts"

import { mapBrowserTab } from "./reducers/tabsStore"

browser.sessions.onChanged.addListener(async () => {
  for (const tab of await browser.tabs.query({})) {
    Segment.track("tab", mapBrowserTab(tab))
  }
})
