import { browser } from "webextension-polyfill-ts"

const { APP_HOST } = process.env

if (window.origin === APP_HOST) {
  const sendEventAsMessage = (event: MessageEvent) => {
    if (event.source === window && event.origin === APP_HOST) {
      browser.runtime.sendMessage(event.data)
    }
  }

  window.addEventListener("message", sendEventAsMessage)
}
