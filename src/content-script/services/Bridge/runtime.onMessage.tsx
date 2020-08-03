import { Message } from "~/src/@services/actors/ContentScript"
import { PinParams } from "~/src/@types/pinlist-api"
import AutosizedIFrame from "iframe-resizer-react"
import camelCase from "lodash/camelCase"
import React from "react"
import ReactDOM from "react-dom"
import { browser } from "webextension-polyfill-ts"

browser.runtime.onMessage.addListener(async (message: Message) => {
  switch (message.name) {
    case "mountOverlay": {
      return mountOverlay(message.tabId)
    }
    case "unmountOverlay": {
      return unmountOverlay(message.tabId)
    }
    case "defaultPinAttributes": {
      return defaultPinAttributes()
    }
  }
})

const containerId = "pinlist-overlay-container"

const mountOverlay = (tabId: number) => {
  ReactDOM.render(
    <AutosizedIFrame
      sizeHeight={true}
      sizeWidth={true}
      minWidth={520}
      heightCalculationMethod="max"
      src={browser.extension.getURL("overlay.html") + `?tabId=${tabId}`}
      allowTransparency={true}
      frameBorder={0}
    />,
    document.getElementById(containerId),
  )
}

const unmountOverlay = (_) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId))
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
