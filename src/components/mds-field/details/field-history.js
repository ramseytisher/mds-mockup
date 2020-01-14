import React from "react"

import { Typography, Timeline, Descriptions } from "antd"
const { Text } = Typography

export default () => (
  <Timeline bordered>
    <Timeline.Item>
      <Descriptions title="1/1/2020">
        <Descriptions.Item label="Response Change">
          <Text code>1. Yes</Text>
          {" > "}
          <Text code>0. No</Text>
        </Descriptions.Item>
        <Descriptions.Item label="User">John Smith</Descriptions.Item>
      </Descriptions>
    </Timeline.Item>
    <Timeline.Item>
      <Descriptions title="12/15/2020">
        <Descriptions.Item label="Response Change">
          <Text code>0. No</Text>
          {" > "}
          <Text code>1. Yes</Text>
        </Descriptions.Item>
        <Descriptions.Item label="User">John Smith</Descriptions.Item>
      </Descriptions>
    </Timeline.Item>
    <Timeline.Item>
      <Descriptions title="12/1/2019">
        <Descriptions.Item label="Response Change">
          <Text code>(Empty)</Text>
          {" > "}
          <Text code>0. No</Text>
        </Descriptions.Item>
        <Descriptions.Item label="User">Jane Doe</Descriptions.Item>
      </Descriptions>
    </Timeline.Item>
  </Timeline>
)
