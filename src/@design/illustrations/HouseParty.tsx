import styled from "@emotion/styled"
import Image from "~/assets/illustrations/HouseParty.svg"

import colors from "../colors"

const HouseParty = styled(Image)`
  .HouseParty_svg__a {
    fill: none;
  }
  .HouseParty_svg__b {
    fill: ${colors.green.base};
  }
  .HouseParty_svg__c,
  .HouseParty_svg__e {
    fill: ${colors.gold.base};
  }
  .HouseParty_svg__d,
  .HouseParty_svg__h {
    fill: ${colors.peach.base};
  }
  .HouseParty_svg__f {
    fill: ${colors.white};
  }
  .HouseParty_svg__g,
  .HouseParty_svg__i {
    fill: ${colors.pink.base};
  }
`

export default HouseParty
