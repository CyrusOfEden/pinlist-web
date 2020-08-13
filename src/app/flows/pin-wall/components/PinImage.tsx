import { AspectRatioBox, BoxProps, Image } from "@chakra-ui/core"
import * as Motion from "~/src/@components/Motion"
import { Pin } from "~/src/@types/pinlist-api"
import { useBoolean } from "ahooks"
import { MotionProps } from "framer-motion"
import React from "react"

type Props = BoxProps & MotionProps & { pin: Pin; inset: number }

export const PinImage: React.FC<Props> = ({ pin, inset, ...delegated }) => {
  const [hasImageLoaded, { setTrue: imageHasLoaded }] = useBoolean(false)

  return (
    <Motion.Box
      {...delegated}
      bg="black"
      animate={{ opacity: hasImageLoaded ? 1 : 0 }}
      borderRadius={24}
      overflow="hidden"
    >
      <AspectRatioBox ratio={1}>
        <Image
          src={pin.image}
          size="100%"
          boxShadow="inner"
          objectFit="cover"
          onLoad={imageHasLoaded}
          css={{
            maskMode: "luminance",
            maskImage:
              "radial-gradient(circle, white 0%, rgba(255, 255, 255, 0.9) 75%, rgba(255, 255, 255, 0.8) 90%)",
          }}
        />
      </AspectRatioBox>
    </Motion.Box>
  )
}
