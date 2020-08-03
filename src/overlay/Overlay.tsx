import { LoadingScreen } from "~/src/@screens/LoadingScreen"
import { useAppSelector } from "~/src/@store"
import React from "react"

import { NewPin } from "./flows/new-pin/NewPin"

export const Overlay = () => {
  const isLoading = useAppSelector((state) => state.overlay.name === "mount")

  return isLoading ? <LoadingScreen /> : <NewPin />
}
