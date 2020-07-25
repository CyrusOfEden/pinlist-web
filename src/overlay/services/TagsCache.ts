import { Pin } from "~/src/@types/pinlist-api"
import { browser } from "webextension-polyfill-ts"

export const getLastUsedTags = async () =>
  (await browser.storage.sync.get(["lastUsedTagOptions"]).then(
    ({ lastUsedTagOptions = [] }) => lastUsedTagOptions,
    () => [],
  )) as Pin["tagOptions"]

export const setLastUsedTags = async (lastUsedTagOptions: Pin["tagOptions"]) =>
  await browser.storage.sync.set({ lastUsedTagOptions }).then(
    () => true,
    () => false,
  )
