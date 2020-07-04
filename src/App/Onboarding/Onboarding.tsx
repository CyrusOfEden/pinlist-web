import { Col, Row, Space } from "antd"

import { Hello } from "../components/animated/Hello"
import React from "react"

export const Onboarding: React.FC = () => {
  return (
    <Row justify="center" align="middle" className="pt-64">
      <Col xs={10} md={6}>
        <Hello />
      </Col>
    </Row>
  )
}
