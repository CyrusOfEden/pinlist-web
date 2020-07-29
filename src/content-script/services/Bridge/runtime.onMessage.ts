import { Message } from "~/src/@services/actors/ContentScript"
import { PinParams } from "~/src/@types/pinlist-api"
import { iframeResizer } from "iframe-resizer"
import camelCase from "lodash/camelCase"
import { browser } from "webextension-polyfill-ts"

browser.runtime.onMessage.addListener(async (message: Message) => {
  switch (message.name) {
    case "mountOverlay": {
      unmountOverlay()
      return mountOverlay(message.tabId)
    }
    case "unmountOverlay": {
      return unmountOverlay()
    }
    case "defaultPinAttributes": {
      return defaultPinAttributes()
    }
  }
})

const mountOverlay = (tabId: number) => {
  const iframe = (document.getElementById("pinlist-overlay-iframe") ??
    document.createElement("iframe")) as HTMLIFrameElement

  const iframeAttrs = [
    ["title", "Pinlist Overlay"],
    ["src", browser.extension.getURL("overlay.html") + `?tabId=${tabId}`],
    ["allowtransparency", "true"],
    ["frameborder", "0"],
  ]

  for (const [name, value] of iframeAttrs) {
    iframe.setAttribute(name, value)
  }

  iframe.style.width = "540px"
  iframeResizer(
    {
      id: "pinlist-overlay-iframe",
      minHeight: 160,
      maxHeight: 480,
      bodyMargin: 32,
    },
    iframe,
  )

  document.getElementById("pinlist-overlay-container").appendChild(iframe)
}

const unmountOverlay = () => {
  const iframe = document.getElementById("pinlist-overlay-iframe")
  if (iframe) {
    iframe.remove()
  }
}

const defaultPinAttributes = () => {
  const data: Partial<PinParams> = {
    siteName: location.hostname,
    title: document.title,
  }

  document.querySelectorAll(`meta[property^="og:"]`).forEach((tag) => {
    const property = tag.getAttribute("property").slice(3)
    data[camelCase(property)] = tag.getAttribute("content")
  })

  data.url = location.href

  return data as PinParams
}
