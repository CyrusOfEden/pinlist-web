import styled from "@emotion/styled"
import { theme } from "~/system/theme"

import Image from "./source/welcome.svg"

const { colors } = theme

const Welcome = styled(Image)`
  .welcome_svg__ {
    &a {
      fill: none;
    }
    &b {
      fill: ${colors.green.base};
    }
    &c,
    &e {
      fill: ${colors.gold.base};
    }
    &d,
    &h {
      fill: ${colors.peach.base};
    }
    &f {
      fill: ${colors.white};
    }
    &g,
    &i {
      fill: ${colors.pink.base};
    }
  }
`

export default Welcome
