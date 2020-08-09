import { Message } from "~/src/@services/actors/ContentScript"
import AutosizedIFrame from "iframe-resizer-react"
import React from "react"
import ReactDOM from "react-dom"
import { browser } from "webextension-polyfill-ts"

const CONTAINER_ID = "pinlist-overlay-container"

const getContainerElement = () => document.getElementById(CONTAINER_ID)

const createContainerElement = () => {
  const container = document.createElement("div")
  container.id = CONTAINER_ID
  container.style.position = "fixed"
  container.style.zIndex = "2147483647"
  container.style.top = "24px"
  container.style.right = "24px"
  document.body.appendChild(container)
  return container
}

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
    getContainerElement() || createContainerElement(),
  )
}

const unmountOverlay = () => {
  ReactDOM.unmountComponentAtNode(getContainerElement())
}

browser.runtime.onMessage.addListener((message: Message) => {
  switch (message.name) {
    case "mountOverlay":
      return mountOverlay(message.tabId)
    case "unmountOverlay":
      return unmountOverlay()
  }
})
