import styled from "@emotion/styled"
import Image from "~/assets/illustrations/HouseParty.svg"

const HouseParty = styled(Image)`
  .a {
    fill: none;
  }
  .b {
    fill: ${({ theme }) => theme.colors.green.base};
  }
  .c,
  .e {
    fill: ${({ theme }) => theme.colors.gold.base};
  }
  .d,
  .h {
    fill: ${({ theme }) => theme.colors.peach.base};
  }
  .f {
    fill: ${({ theme }) => theme.colors.white};
  }
  .g,
  .i {
    fill: ${({ theme }) => theme.colors.pink.base};
  }
`

export default HouseParty
