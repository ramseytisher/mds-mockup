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
  Select,
  Radio,
  Alert,
  message,
} from "antd"

const { Title, Text } = Typography
const { Step } = Steps

export default () => {
  const [openModal, setOpenModal] = useState(false)
  const [showImportDetails, setShowImportDetails] = useState(false)

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
        <Card>
          <Table
            pagination={false}
            columns={[
              {
                title: "",
                dataIndex: "item",
              },
              {
                title: "Required Flags",
                render: (text, record) => {
                  if (record.required === 0) {
                    return <Button icon="check" type="primary" />
                  } else {
                    return (
                      <a
                        onClick={() =>
                          message.info(
                            "What .. you know what I do already, click the IMPORT row!"
                          )
                        }
                      >
                        {record.required}
                      </a>
                    )
                  }
                },
              },
              {
                title: "Informational",
                render: (text, record) => {
                  if (record.information === 0) {
                    return <Button icon="check" type="primary" />
                  } else {
                    return (
                      <a
                        onClick={() => setShowImportDetails(!showImportDetails)}
                      >
                        {record.information}
                      </a>
                    )
                  }
                },
              },
            ]}
            dataSource={[
              {
                item: "CMS",
                required: 2,
                information: 0,
              },
              {
                item: "Critical",
                required: 0,
                information: 0,
              },
              {
                item: "Clinical",
                required: 1,
                information: 0,
              },
              {
                item: "Imports",
                required: 0,
                information: 3,
              },
            ]}
          />
          {showImportDetails && (
            <Card title="Suggested Import Information Changed">
              The clinical documentation that was captured as a baseline at the
              beginning of the assessment has changed, and the value currently
              in the MDS field does not match the most recent suggested value.
              The following items needed reviewed to ensure accuracy:
              {/* <Alert
                style={{ margin: 10 }}
                type="warning"
                message={`To resolve the flag you will need to review documentation and
                edit the appropriate MDS response associated with the flag, or
                you may resolve it by marking it as "Keep Current Field Value":`}
              /> */}
              <Table
                size="small"
                columns={[
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
                      <>
                        <Text>
                          {record.field}: {record.fieldDesc}
                        </Text>
                        <br />
                        <Select value={record.currentValue} />
                        <Button icon="paper-clip" />
                      </>
                    ),
                  },
                  // {
                  //   title: "Action",
                  //   key: "action",
                  //   render: (text, record) => (
                  //     <span>
                  //       <Radio
                  //         onClick={() =>
                  //           message.info("This would resolve this one!")
                  //         }
                  //       >
                  //         Keep Current Field Value
                  //       </Radio>
                  //     </span>
                  //   ),
                  // },
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
                  {
                    id: 3,
                    field: "K0200B",
                    fieldDesc: "Weight",
                    firstValue: "170",
                    firstDate: "4/1/2020",
                    lastValue: "173",
                    lastDate: "4/20/2020",
                    currentValue: "172",
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
          )}
        </Card>
      </Modal>
    </>
  )
}
