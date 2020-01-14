import React from "react"

import { Divider, Typography } from "antd"
const { Text } = Typography

export default ({ text }) => (
  <Divider orientation="left">
    <Text style={{ fontSize: 16, fontWeight: "bold" }}>{text}</Text>
  </Divider>
)
