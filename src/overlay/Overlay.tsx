import * as ContentScript from "~/src/@services/actors/ContentScript"
import { SessionState } from "~/src/@services/Session"
import { useRequest } from "ahooks"
import React from "react"
import { useLocation } from "react-router-dom"

import { NewPin } from "./flows/new-pin/NewPin"

export const Overlay: React.FC<{ session: SessionState }> = ({ session }) => {
  const location = useLocation()
  const params = new URLSearchParams(location.search)

  const tabId = parseInt(params.get("tabId"))

  const { data: defaultValues, loading: isLoadingDefaults } = useRequest(() =>
    ContentScript.request(tabId, { name: "defaultPinAttributes" }),
  )

  return isLoadingDefaults ? null : (
    <NewPin tabId={tabId} defaultValues={defaultValues} />
  )
}
