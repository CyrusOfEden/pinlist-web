import { PinParams } from "~/src/@types/pinlist-api"
import Frame from "iframe-resizer-react"
import camelCase from "lodash/fp/camelCase"
import flow from "lodash/fp/flow"
import get from "lodash/fp/get"
import maxBy from "lodash/fp/maxBy"
import QueryString from "query-string"
import React from "react"
import ReactDOM from "react-dom"
import { browser } from "webextension-polyfill-ts"

const containerId = "pinlist-overlay-container"

const container = () => {
  let node = document.getElementById(containerId)
  if (node == null) {
    node = document.createElement("div")
    node.id = containerId
    node.style.position = "fixed"
    node.style.zIndex = "2147483647"
    node.style.top = "24px"
    node.style.right = "24px"
    document.body.appendChild(node)
  }
  return node
}

export const mount = () => {
  const pinAttributes: Partial<Omit<
    PinParams,
    "id" | "isStarred" | "tagOptions"
  >> = {
    siteName: location.hostname,
    title: document.title.trim(),
  }

  document.querySelectorAll(`meta[property^="og:"]`).forEach((tag) => {
    const value = tag.getAttribute("content")
    if (value) {
      const property = tag.getAttribute("property").slice(3)
      pinAttributes[camelCase(property)] = value.trim()
    }
  })

  pinAttributes.url = location.href

  if (!pinAttributes.image) {
    pinAttributes.image = flow(
      maxBy((img: HTMLImageElement) => img.height * img.width),
      get("src"),
    )(document.querySelectorAll("img"))
  }

  ReactDOM.render(
    <Frame
      allowTransparency
      frameBorder={0}
      sizeWidth
      sizeHeight
      src={QueryString.stringifyUrl({
        url: browser.extension.getURL("overlay.html"),
        query: pinAttributes,
      })}
    />,
    container(),
  )
}

export const unmount = () => {
  const node = container()
  if (node.childElementCount > 0) {
    ReactDOM.unmountComponentAtNode(node)
  }
  node.remove()
}
