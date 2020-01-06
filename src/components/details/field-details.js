import React from "react"

import { Typography, Descriptions, Card, Button } from "antd"
const { Title, Text } = Typography

export default ({ closeDetail }) => (
  <>
    <Descriptions bordered title="C0300A. Able to report correct year">
      <Descriptions.Item label="Current Value">3. Correct</Descriptions.Item>
      <Descriptions.Item label="Completed By">John Smith</Descriptions.Item>
      <Descriptions.Item label="Date/Time">
        10/30/2019 12:15PM
      </Descriptions.Item>
      <Descriptions.Item
        label={
          <>
            <Text>Calculated Response</Text>
            <br />
            <Button type="primary" size="small" onClick={closeDetail}>
              Import Response
            </Button>
          </>
        }
        span={3}
      >
        <Text mark>1. Missed by 2-5 years</Text>
      </Descriptions.Item>
    </Descriptions>
  </>
)
