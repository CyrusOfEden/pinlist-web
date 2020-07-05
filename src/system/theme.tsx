import {
  CSSReset,
  ThemeProvider as ChakraThemeProvider,
  theme as chakra,
} from "@chakra-ui/core"
import { Global } from "@emotion/core"
import React from "react"

import colors from "./colors"

const sans = `-apple-system, BlinkMacSystemFont, "Segoe UI",
Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
"Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`

export const theme = {
  ...chakra,
  colors: {
    ...chakra.colors,
    ...colors,
  },
  fonts: {
    ...chakra.fonts,
    heading: `"Josefin Sans", ${sans}`,
    body: `Inter, ${sans}`,
  },
  breakpoints: ["500px", "840px", "1280px"],
}

export const ThemeProvider: React.FC = ({ children }) => (
  <ChakraThemeProvider theme={theme}>
    <CSSReset />
    <Global styles={{ body: { background: colors.peach[50] } }} />
    {children}
  </ChakraThemeProvider>
)
