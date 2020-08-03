import { Box } from "@chakra-ui/core"
import { Global, css } from "@emotion/core"
import * as Motion from "~/src/@components/Motion"
import { RainBros } from "~/src/@design/animations/RainBros"
import { LoadingScreen } from "~/src/@screens/LoadingScreen"
import { useAppDispatch, useAppSelector } from "~/src/@store"
import { loadPins, selectAll } from "~/src/@store/reducers/pinsStore"
import { Pin } from "~/src/@types/pinlist-api"
import { useMount, usePersistFn, useWhyDidYouUpdate } from "ahooks"
import { Variants } from "framer-motion"
import { Masonry, useInfiniteLoader } from "masonic"
import React from "react"
import { RouteComponentProps } from "react-router-dom"
import { Pause, WindupChildren } from "windups"

import { PinCard } from "../components/PinCard"
import { PinImage } from "../components/PinImage"

export const PinWall = (_: RouteComponentProps) => {
  const dispatch = useAppDispatch()
  const { pins, totalPins } = useAppSelector(({ pins }) => ({
    pins: selectAll(pins),
    totalPins: pins.metadata?.count,
  }))

  useMount(async () => {
    dispatch(loadPins(1))
  })

  const loadMorePins = useInfiniteLoader(
    async () => dispatch(loadPins("nextPage")),
    {
      totalItems: totalPins,
      isItemLoaded: (index) => index < totalPins,
    },
  )

  const renderPin = usePersistFn(({ data }) => (
    <PinCard pin={data as Pin} withImage={true} />
  ))

  return pins.length === 0 ? (
    <EmptyState />
  ) : (
    <Motion.Box
      p={8}
      initial="mount"
      animate="enter"
      variants={{
        mount: { opacity: 0 },
        enter: { opacity: 1 },
      }}
    >
      <Global
        styles={css`
          div[role="grid"]:focus {
            outline: none;
          }
        `}
      />
      <Masonry
        columnGutter={16}
        columnWidth={380}
        itemHeightEstimate={640}
        itemKey={(pin?: Pin) => pin?.id}
        items={pins}
        onRender={loadMorePins}
        render={renderPin}
      />
    </Motion.Box>
  )
}

const EmptyState = ({ spacing = 4 }) => {
  const motion: Variants = {
    mount: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
  }

  const Words = (props) => (
    <Motion.Text
      color="gold.600"
      fontSize="xl"
      mt={spacing}
      variants={motion}
      {...props}
    />
  )

  return (
    <Motion.Box pt={16} maxW={800} m="auto" initial="mount" animate="enter">
      <WindupChildren>
        <Motion.Heading color="gold.700" variants={motion}>
          You're all set!
        </Motion.Heading>
        <Pause ms={500} />
        <Words>
          As you're browsing online, use Joyful to save products for later.
        </Words>
        <Pause ms={250} />
        <Words>
          And make sure to bookmark this page so you can come back to it!
        </Words>
        <Pause ms={1000} />
        <Words>PS. Enjoy this cute animation.</Words>
        <Pause ms={500} />
        <Motion.Box variants={motion}>
          <RainBros />
        </Motion.Box>
      </WindupChildren>
    </Motion.Box>
  )
}
