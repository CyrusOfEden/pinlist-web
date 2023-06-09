import { CircularProgress, Input, Stack } from "@chakra-ui/core"
import { Global, css } from "@emotion/core"
import * as Motion from "~/src/@components/Motion"
import { LoadingScreen } from "~/src/@screens/LoadingScreen"
import { useAppDispatch, useAppSelector } from "~/src/@store"
import {
  LoadPinsParams,
  loadPins,
  resetPins,
  selectAll,
} from "~/src/@store/reducers/pinsStore"
import { Pin } from "~/src/@types/pinlist-api"
import { useRequest } from "ahooks"
import { Variants } from "framer-motion"
import { Masonry, MasonryProps, useInfiniteLoader } from "masonic"
import React, { useCallback } from "react"
import { useForm } from "react-hook-form"
import Loadable from "react-loadable"
import { batch } from "react-redux"
import { useQueryParam } from "use-query-params"
import { Pause, WindupChildren } from "windups"

import { PinCard as BasePinCard } from "./components/PinCard"

const PinCard: MasonryProps<Pin>["render"] = React.memo(({ data }) => (
  <BasePinCard pin={data} withImage withActions />
))

export const PinWall = () => {
  const [search, setSearch] = useQueryParam<string>("search")

  const form = useForm({ defaultValues: { search } })

  const dispatch = useAppDispatch()

  const { pins, totalItems, isLoading } = useAppSelector(({ pins }) => ({
    pins: selectAll(pins) ?? [],
    totalItems: pins.metadata?.count,
    isLoading: pins.isLoading,
  }))

  const load = async (params: LoadPinsParams) => {
    await dispatch(loadPins(params))
  }

  useRequest(() => load({ search, page: 1 }), {
    refreshOnWindowFocus: true,
  })

  const loadMorePins = useInfiniteLoader(() => load({ search }), {
    totalItems,
    isItemLoaded: (index) => index < totalItems,
  })

  const handleSubmit = useCallback(
    async ({ search }) => {
      setSearch(search)
      batch(() => {
        dispatch(resetPins())
        load({ search })
      })
    },
    [dispatch, setSearch],
  )

  if (isLoading === null) {
    return <LoadingScreen />
  }

  return (
    <Stack p={8} spacing={8}>
      <Motion.Box
        w="60%"
        minW={320}
        maxW={800}
        mx="auto"
        as="form"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <Input
          variant="unstyled"
          placeholder="Search"
          fontFamily="heading"
          fontSize="6xl"
          fontStyle="italic"
          fontWeight={300}
          color="gold.700"
          _placeholder={{ color: "gold.200" }}
          name="search"
          ref={form.register()}
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
      {isLoading ? (
        <CircularProgress
          isIndeterminate
          color="gold"
          trackColor="gold"
          mx="auto"
          mt={8}
        />
      ) : pins.length === 0 ? (
        <EmptyState />
      ) : null}
    </Stack>
  )
}

const RainBros = Loadable({
  loading: LoadingScreen,
  loader: () => import("~/src/@design/animations/RainBros"),
  webpack: () => [require.resolveWeak("~/src/@design/animations/RainBros")],
})

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
    <Motion.Box
      w="100%"
      maxW={800}
      mt={8}
      mx="auto"
      initial="mount"
      animate="enter"
    >
      <WindupChildren>
        <Words>
          As you're browsing online, use Joyful to save products for later.
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

export default PinWall
