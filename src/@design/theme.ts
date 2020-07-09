import { theme as chakra } from "@chakra-ui/core"

import colors from "./colors"

const sans = `-apple-system, BlinkMacSystemFont, "Segoe UI",
Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
"Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`

const fonts = {
  ...chakra.fonts,
  heading: `"Josefin Sans", ${sans}`,
  body: `Inter, ${sans}`,
}

const theme = {
  ...chakra,
  colors,
  fonts,
  breakpoints: ["500px", "840px", "1280px"],
}

export default theme
