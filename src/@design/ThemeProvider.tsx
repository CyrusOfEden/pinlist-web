import { CSSReset, ThemeProvider as ChakraThemeProvider } from "@chakra-ui/core"
import { Global } from "@emotion/core"
import React from "react"

import theme from "./theme"

const GlobalStyles = () => (
  <Global
    styles={{
      body: {
        background: theme.colors.peach[50],
      },
    }}
  />
)

export const ThemeProvider: React.FC = ({ children }) => (
  <ChakraThemeProvider theme={theme}>
    <CSSReset />
    <GlobalStyles />
    {children}
  </ChakraThemeProvider>
)
