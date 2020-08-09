import { Message } from "~/src/@services/actors/ContentScript"
import { PinParams } from "~/src/@types/pinlist-api"
import camelCase from "lodash/camelCase"
import { browser } from "webextension-polyfill-ts"

const defaultPinAttributes = () => {
  const data: Partial<PinParams> = {
    siteName: location.hostname,
    title: document.title.trim(),
  }

  document.querySelectorAll(`meta[property^="og:"]`).forEach((tag) => {
    const property = tag.getAttribute("property").slice(3)
    data[camelCase(property)] = tag.getAttribute("content").trim()
  })

  data.url = location.href

  return data as PinParams
}

browser.runtime.onMessage.addListener(async (message: Message) => {
  switch (message.name) {
    case "defaultPinAttributes":
      return defaultPinAttributes()
  }
})
