import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/core"
import { AnimatePresence } from "framer-motion"
import React from "react"
import {
  Route,
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  Switch as RouterSwitch,
  SwitchProps,
} from "react-router-dom"

export const Switch: React.FC = (props: SwitchProps) => (
  <Route
    render={({ location }) => (
      <AnimatePresence exitBeforeEnter>
        <RouterSwitch {...props} location={location} key={location.hash} />
      </AnimatePresence>
    )}
  />
)

export { Route }

export type LinkProps = ChakraLinkProps & RouterLinkProps
export const Link: React.FC<LinkProps> = React.forwardRef((props, ref) => (
  <ChakraLink {...props} ref={ref} as={RouterLink as any} />
))

export type ButtonLinkProps = ChakraButtonProps & RouterLinkProps
export const ButtonLink: React.FC<ButtonLinkProps> = React.forwardRef(
  (props, ref) => <ChakraButton {...props} ref={ref} as={RouterLink as any} />,
)
