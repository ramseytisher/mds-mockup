import React, { useState } from "react"

import { dataA, dataC, importData } from "./import-data"

import {
  Modal,
  Button,
  Table,
  Typography,
  Switch,
  Select,
  Row,
  Col,
  Alert,
} from "antd"
const { Text } = Typography
const { Option } = Select

const columns = [
  {
    title: "Field",
    dataIndex: "field",
    render: text => <a>{text}</a>,
  },
  {
    title: "Current Value",
    dataIndex: "previous",
    render: (text, record) => {
      return (
        <>
          <Text>{text}</Text>
          <br />
          <Text
            style={{ fontSize: "80%" }}
            disabled
          >{`${record.previousUser}`}</Text>
        </>
      )
    },
  },
  {
    title: "Import Value",
    dataIndex: "import",
    render: (text, record) => {
      if (record.import === "error") {
        return (
          <Alert
            message="Issue Importing Data"
            type="warning"
            description="There was an issue trying to import this value, contact support if it continues."
            showIcon
          />
        )
      } else if (record.import === null) {
        return (
          <Alert
            message="No Import Value"
            type="info"
            description="No import value found"
            showIcon
          />
        )
      } else if (record.import === undefined) {
        return (
          <Alert
            message="No Import Setup"
            type="info"
            description="There is no import configured for this field"
            showIcon
          />
        )
      } else {
        return (
          <Alert
            message="Import Value Found"
            type="success"
            description={text}
            showIcon
          />
        )
      }
    },
  },
  {
    title: "View Details",
    render: (text, record) => (
      <Button
        icon="search"
        disabled={
          record.import === null ||
          record.import === "error" ||
          record.import === undefined
        }
      >
        View Details
      </Button>
    ),
  },
]

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    )
  },
  getCheckboxProps: record => ({
    disabled: record.key === "1", // Column configuration not to be checked
    name: record.name,
  }),
}

export default ({ section, text }) => {
  const [open, setOpen] = useState(false)

  const getData = () => {
    switch (section) {
      case "A":
        return dataA
        break
      case "C":
        return dataC
        break
      default:
        return importData
        break
    }
  }

  return (
    <>
      <Button icon="vertical-align-bottom" onClick={() => setOpen(true)} />
      <Modal
        title="Import Review"
        visible={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width="90vw"
        footer={[
          <Button key="back" onClick={() => setOpen(false)}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={() => setOpen(false)}>
            Import
          </Button>,
        ]}
      >
        <Row
          type="flex"
          align="middle"
          gutter={4}
          style={{ marginBottom: 10 }}
          justify="end"
        >
          <Col> Show:</Col>
          <Col>
            <Select defaultValue="All" style={{ width: 200 }}>
              <Option value="all">All</Option>
              <Option value="empty">Current Value Empty</Option>
              <Option value="found">Import Value Found</Option>
              <Option value="different">Import Value Different</Option>
            </Select>
          </Col>
        </Row>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={getData()}
          size="small"
        />{" "}
      </Modal>
    </>
  )
}
