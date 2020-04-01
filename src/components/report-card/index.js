import React, { useState } from "react"

import {
  Row,
  Col,
  Button,
  Card,
  Modal,
  Typography,
  Timeline,
  List,
  Steps,
  Icon,
  Statistic,
  Tag,
} from "antd"

const { Title, Text } = Typography
const { Step } = Steps

export default () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Button icon="check-square" onClick={() => setOpenModal(true)}>
        Report Card
      </Button>
      <Modal
        title="MDS Report Card"
        visible={openModal}
        onCancel={() => setOpenModal(false)}
        width="80vw"
      >
        <Timeline>
          <Timeline.Item>
            <Card title="Today's Grid">You already know what goes here</Card>
          </Timeline.Item>
          <Timeline.Item>
            <Card title="Import Information">
              The following items have changed since the first import for this
              assessment:
              <List
                dataSource={[
                  {
                    id: 1,
                    field: "[MDS Field]",
                    fieldDesc: "[MDS Field Description]",
                    firstValue: "0. None",
                    lastValue: "1. One",
                    currentValue: "2. Two",
                  },
                  {
                    id: 2,
                    field: "G0120A",
                    fieldDesc: "Bathing - Self performance",
                    firstValue: "0. Independent",
                    lastValue: "3. Physical help in part of bathing activity",
                    currentValue: "1. Supervision",
                  },
                ]}
                renderItem={({
                  id,
                  firstValue,
                  currentValue,
                  lastValue,
                  field,
                  fieldDesc,
                }) => (
                  <Row
                    type="flex"
                    justify="space-between"
                    style={{ padding: 10 }}
                    align="middle"
                    gutter={16}
                  >
                    <Col span={6}>
                      <Card
                        size="small"
                        title={field}
                      >
                        <Text>
                          Current value:{" "}
                          <Tag>{currentValue}</Tag>
                        </Text>
                      </Card>
                    </Col>
                    <Col span={14}>
                      {/* <Steps labelPlacement="vertical">
                        <Step
                          title={firstValue}
                          subTitle="First value imported"
                          status="process"
                          icon={<Icon type="vertical-right" />}
                        />
                        <Step
                          title={lastValue}
                          subTitle="Last value imported"
                          status="process"
                          icon={<Icon type="vertical-left" />}
                        />
                      </Steps> */}
                      <Card size="small" bordered={false}>
                        <Text>
                          The first imported value was: <Tag>{firstValue}</Tag>
                        </Text>
                        <br />
                        <Text>
                          The last imported value was: <Tag>{lastValue}</Tag>
                        </Text>
                      </Card>
                    </Col>
                    <Col span={4}>
                      <Button type="link">Open Assessment</Button>
                    </Col>
                  </Row>
                )}
              />
            </Card>
          </Timeline.Item>
        </Timeline>
      </Modal>
    </>
  )
}
