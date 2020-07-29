import * as Motion from "~/src/@components/Motion"
import theme from "~/src/@design/theme"
import { useAppDispatch, useAppSelector } from "~/src/@store"
import {
  loadPins,
  resetPins,
  selectAll,
  selectById,
} from "~/src/@store/reducers/pinsStore"
import { Pin } from "~/src/@types/pinlist-api"
import { useMount } from "ahooks"
import { Masonry, useInfiniteLoader } from "masonic"
import React, { useMemo } from "react"
import { batch } from "react-redux"
import { RouteComponentProps } from "react-router-dom"

import { PinCard } from "../components/PinCard"

export const PinWall = (_: RouteComponentProps) => {
  const dispatch = useAppDispatch()
  const pins = useAppSelector((state) => selectAll(state.pins))
  const allPinsCount = useAppSelector((state) => state.pins.metadata?.count)

  const refresh = () => {
    batch(() => {
      dispatch(resetPins)
      dispatch(loadPins(1))
    })
  }
  useMount(refresh)

  const loadMoreItems = useInfiniteLoader(
    async () => dispatch(loadPins("nextPage")),
    {
      isItemLoaded: (index, items) => index < items.length,
      totalItems: allPinsCount,
    },
  )

  return (
    <Motion.Box
      p={8}
      bg="peach.50"
      initial="mount"
      animate="enter"
      variants={{
        mount: { opacity: 0 },
        enter: { opacity: 1, transition: { staggerChildren: 0.1 } },
      }}
    >
      <Masonry
        render={MasonryCell}
        onRender={loadMoreItems}
        items={pins}
        itemKey={(pin?: Pin) => pin?.id}
        itemHeightEstimate={640}
        columnWidth={380}
        columnGutter={16}
      />
    </Motion.Box>
  )
}

const MasonryCell = ({ data, width }) => {
  const pin = useAppSelector((state) => selectById(state.pins, data.id))

  const interactions = useMemo(() => {
    return pin.archivedAt
      ? { animate: "leave", whileHover: {} }
      : { animate: "enter", whileHover: { y: -2, boxShadow: theme.shadows.lg } }
  }, [pin.archivedAt])

  return (
    <Motion.Box
      w={width}
      bg="white"
      boxShadow="sm"
      variants={{
        mount: { y: 12, opacity: 0 },
        enter: { y: 0, opacity: 1 },
        leave: { y: 2, opacity: 0.5 },
      }}
      {...interactions}
    >
      <PinCard pin={pin} headingSize="sm" />
    </Motion.Box>
  )
}
