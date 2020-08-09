import { CircularProgress, Stack } from "@chakra-ui/core"
import { Global, css } from "@emotion/core"
import * as Motion from "~/src/@components/Motion"
import { RainBros } from "~/src/@design/animations/RainBros"
import { LoadingScreen } from "~/src/@screens/LoadingScreen"
import { useAppDispatch, useAppSelector } from "~/src/@store"
import {
  loadPins,
  selectAll,
  selectWhereTaggedWith,
} from "~/src/@store/reducers/pinsStore"
import { Pin, TagOption } from "~/src/@types/pinlist-api"
import { useWhyDidYouUpdate } from "ahooks"
import { Variants } from "framer-motion"
import flow from "lodash/fp/flow"
import { Masonry, MasonryProps, useInfiniteLoader } from "masonic"
import React, { useCallback, useEffect } from "react"
import { useMemo } from "react"
import { useHistory, useLocation } from "react-router-dom"
import { Pause, WindupChildren } from "windups"

import { PinCard as BasePinCard } from "./components/PinCard"
import { TagsSearch } from "./components/TagsSearch"

const PinCard: MasonryProps<Pin>["render"] = React.memo(({ data }) => (
  <BasePinCard pin={data} withImage={true} />
))

export const PinWall = () => {
  const { pathname, search } = useLocation()
  const filterTags = useMemo(
    () => new URLSearchParams(search).getAll("tags[]"),
    [search],
  )

  const history = useHistory()
  const setFilterTags = (options: TagOption[]) => {
    const params = new URLSearchParams(search)
    params.delete("tags[]")
    for (const { value } of options || []) {
      params.append("tags[]", value)
    }
    history.push({ pathname, search: params.toString() })
  }

  const dispatch = useAppDispatch()

  const { pins, totalItems, isLoading } = useAppSelector(({ pins }) => ({
    pins: flow(selectAll, selectWhereTaggedWith(filterTags))(pins) ?? [],
    totalItems: pins.metadata?.count,
    isLoading: pins.isLoading,
  }))

  const loadNextPage = useCallback(
    async () => dispatch(loadPins({ tags: filterTags })),
    [dispatch, filterTags],
  )

  useEffect(() => {
    loadNextPage()
  }, [filterTags])

  const loadMorePins = useInfiniteLoader(loadNextPage, {
    totalItems,
    isItemLoaded: (index) => index < totalItems,
  })

  const isFilteredByTags = filterTags.length !== 0
  const noPins = pins.length === 0

  if (isLoading === null || (isLoading && noPins)) {
    return <LoadingScreen />
  }

  if (!isLoading && !isFilteredByTags && noPins) {
    return <EmptyState />
  }

  return (
    <Stack p={8} spacing={8}>
      <Motion.Box w="60%" minW={320} maxW={800} mx="auto">
        <TagsSearch
          autoFocus={true}
          defaultValue={filterTags.map((tag) => ({ label: tag, value: tag }))}
          onChange={setFilterTags}
        />
      </Motion.Box>
      <Motion.Box
        w="100%"
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
          columnGutter={32}
          columnWidth={320}
          itemHeightEstimate={640}
          itemKey={(pin?: Pin) => pin?.id}
          key={pins.length}
          items={pins}
          onRender={loadMorePins}
          render={PinCard}
        />
      </Motion.Box>
      {isLoading && (
        <CircularProgress
          isIndeterminate
          color="gold"
          trackColor="gold"
          mx="auto"
        />
      )}
    </Stack>
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
