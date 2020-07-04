import { RainBros } from "./animated/RainBros"
import React from "react"
import { Row } from "antd"

export const LoadingScreen: React.FC = () => {
  return (
    <Row justify="center" align="middle">
      <RainBros />
    </Row>
  )
}
