import React from "react"

import { List, Typography, Row, Col, Progress } from "antd"
const { Text } = Typography

const data = [
  { key: 1, text: "Section A", value: 85 },
  { key: 2, text: "Section B", value: 15 },
  { key: 3, text: "Section C", value: 34 },
  { key: 4, text: "Section D", value: 70 },
  { key: 5, text: "Section E", value: 100 },
  { key: 6, text: "Section F", value: 25 },
  { key: 7, text: "Section G", value: 0 },
  { key: 8, text: "Section GG", value: 100 },
]

export default () => (
  <>
    {data.map(item => (
        <Row>
            <Col><Text>{item.text}</Text></Col>
            <Col><Progress percent={item.value} /></Col>
        </Row>
    ))}
  </>
)
