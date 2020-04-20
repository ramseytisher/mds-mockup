import React, { useState } from "react"

import {
  Row,
  Col,
  Button,
  Card,
  Modal,
  Typography,
  Table,
  List,
  Steps,
  Icon,
  Statistic,
  Popover,
  Tag,
  message,
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
        <Card title="Import Information">
          The following items have changed since the first import for this
          assessment:
          <Table
            size="small"
            columns={[
              {
                title: "Field",
                render: (text, record) => (
                  <>
                    <Text>{record.field}</Text>
                    <br />
                    <Text>{record.fieldDesc}</Text>
                  </>
                ),
              },
              {
                title: "Suggested Value Change",
                render: (text, record) => (
                  <>
                    <Text delete>{record.firstValue}</Text>
                    <br />
                    <Text mark>{record.lastValue}</Text>
                  </>
                ),
              },
              {
                title: "Current Field Value",
                render: (text, record) => (
                  <Row align="middle" type="flex" gutter={2}>
                    <Col span={20}>
                      <Text strong>{record.currentValue}</Text>
                      <br />
                      <Text
                        type="secondary"
                        style={{ fontSize: ".7rem" }}
                      >{`${record.currentValueUser} on ${record.currentValueDate}`}</Text>
                    </Col>
                    <Col span={4}>
                      <Popover
                        title="Field Note"
                        content={
                          <>
                            <Text>{record.fieldNote}</Text>
                            <br />
                            <Text
                              type="secondary"
                              style={{ fontSize: ".9em" }}
                            >{`${record.fieldNoteUser} on ${record.fieldNoteDate}`}</Text>
                          </>
                        }
                      >
                        <Button size="small" icon="paper-clip" />
                      </Popover>
                    </Col>
                  </Row>
                ),
              },
              {
                title: "Action",
                key: "action",
                render: (text, record) => (
                  <span>
                    <a
                      style={{ fontSize: ".8rem" }}
                      onClick={() =>
                        message.info("User would be taken to edit working copy")
                      }
                    >
                      Edit Assessment
                    </a>
                  </span>
                ),
              },
            ]}
            dataSource={[
              {
                id: 1,
                field: "[MDS Field]",
                fieldDesc: "[MDS Field Description]",
                firstValue: "[First Suggested Value]",
                firstDate: "[First Suggested Date]",
                lastValue: "[Last Suggested Value]",
                lastDate: "[Last Suggested Date]",
                currentValue: "[Current Value]",
                currentValueUser: "[Current Value User]",
                currentValueDate: "[Current Value Date]",
                fieldNote: "[Field Note]",
                fieldNoteUser: "[Field Note User]",
                fieldNoteDate: "[Field Note Date]",
              },
              {
                id: 2,
                field: "G0120A",
                fieldDesc: "Bathing - Self performance",
                firstValue: "0. Independent",
                firstDate: "4/1/2020",
                lastValue: "3. Physical help in part of bathing activity",
                lastDate: "4/20/2020",
                currentValue: "1. Supervision",
                currentValueUser: "[Current Value User]",
                currentValueDate: "4/17/2020",
                fieldNote:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                fieldNoteUser: "[Field Note User]",
                fieldNoteDate: "[Field Note Date]",
              },
            ]}
          />
        </Card>
      </Modal>
    </>
  )
}
