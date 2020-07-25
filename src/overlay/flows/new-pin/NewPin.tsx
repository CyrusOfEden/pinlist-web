import * as Motion from "~/src/@components/Motion"
import * as ContentScript from "~/src/@services/actors/ContentScript"
import { useSession } from "~/src/@services/Session"
import { Pin } from "~/src/@types/pinlist-api"
import { getLastUsedTags } from "~/src/overlay/services/TagsCache"
import { useRequest } from "ahooks"
import { Variants } from "framer-motion"
import React, { useCallback, useState } from "react"

import { PinForm, PinFormFields } from "./screens/PinForm/PinForm"

export const NewPin: React.FC<{
  tabId: number
  defaultValues: PinFormFields
}> = ({ tabId, defaultValues }) => {
  const { currentUser, api } = useSession()
  const [state, setState] = useState("mount")

  const { data } = useRequest(
    async () => {
      const pin = await api<Pin>({
        method: "POST",
        url: `/users/${currentUser.id}/pins`,
        data: { pin: defaultValues },
      })
      if (pin.tagOptions.length === 0) {
        pin.tagOptions = await getLastUsedTags()
      }
      return pin
    },
    { onSuccess: () => setState("enter") },
  )

  const unmount = useCallback(() => {
    setState("mount")
    setTimeout(() => {
      ContentScript.call(tabId, { name: "unmountOverlay", tabId })
    }, 1500)
  }, [tabId])

  const motion: Variants = {
    mount: {
      y: -200,
      opacity: 0,
      transition: { type: "spring", stiffness: 50 },
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.35 },
    },
  }

  return (
    <Motion.Box
      bg="peach.50"
      borderColor="peach.100"
      borderWidth={4}
      borderRadius={8}
      boxShadow="lg"
      w="100%"
      py={4}
      px={5}
      initial="mount"
      animate={state}
      variants={motion}
    >
      <PinForm pin={data ?? defaultValues} unmount={unmount} />
    </Motion.Box>
  )
}
