import styled from "@emotion/styled"
import Image from "~/assets/illustrations/HouseParty.svg"

import colors from "../colors"

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
