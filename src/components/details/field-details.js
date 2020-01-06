import React from "react"

import { Typography, Descriptions, Card, Button } from "antd"
const { Title, Text } = Typography

export default ({ closeDetail }) => (
  <>
    <Descriptions title="Field Info" bordered>
      <Descriptions.Item label="Current Value">
        0. None of the Above
      </Descriptions.Item>
      <Descriptions.Item label="Completed By">John Smith</Descriptions.Item>
      <Descriptions.Item label="Date/Time">
        10/30/2019 12:15PM
      </Descriptions.Item>
      <Descriptions.Item
        label={
          <>
            <Text>Calculated Value</Text>
            <br />
            <Button type="primary" size="small" onClick={closeDetail}>
              Import Response
            </Button>
          </>
        }
        span={3}
      >
        <Text>1. The first option in the list</Text>
      </Descriptions.Item>
    </Descriptions>
  </>
)
