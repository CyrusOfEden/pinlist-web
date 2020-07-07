import styled from "@emotion/styled"

import theme from "../theme"
import Image from "./source/HouseParty.svg"

const { colors } = theme

const HouseParty = styled(Image)`
  .a {
    fill: none;
  }
  .b {
    fill: ${colors.green.base};
  }
  .c,
  .e {
    fill: ${colors.gold.base};
  }
  .d,
  .h {
    fill: ${colors.peach.base};
  }
  .f {
    fill: ${colors.white};
  }
  .g,
  .i {
    fill: ${colors.pink.base};
  }
`

export default HouseParty
