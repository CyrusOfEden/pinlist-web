import * as Motion from "~/src/@components/Motion"
import HouseParty from "~/src/@design/illustrations/HouseParty"
import { Variants } from "framer-motion"
import React from "react"
import { useLocation } from "react-router-dom"

export const Illustration = (delegated) => {
  const { pathname } = useLocation()

  const motion: Variants = {
    mount: {
      opacity: 0,
      scale: 0,
      y: 50,
      transition: { type: "spring" },
    },
    enter: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: pathname === "/start" ? 3 : 0,
        type: "spring",
      },
    },
  }

  return (
    <Motion.Box
      {...delegated}
      variants={motion}
      initial="mount"
      animate="enter"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
    >
      <HouseParty />
    </Motion.Box>
  )
}
