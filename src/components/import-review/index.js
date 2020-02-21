import React, { useState, useEffect } from "react"

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
            type="error"
            description="There was an issue trying to import this value, contact support if it continues."
            showIcon
          />
        )
      } else if (record.import === null) {
        return <Alert message="No Import Value Found" type="info" showIcon />
      } else if (record.import === undefined) {
        return <Alert message="No Import Configured" type="info" showIcon />
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
  const [filter, setFilter] = useState(null)
  const [filterSection, setFilterSection] = useState(null)
  const [data, setData] = useState(importData)

  useEffect(() => {
    const filtered = importData.filter(item => {
      switch (filter) {
        case "all":
          return item
        case "empty":
          return item.previous === null
        case "different":
          return item.previous !== item.import
        case "found":
          return !(
            item.import === null ||
            item.import === undefined ||
            item.import === "error"
          )
        default:
          return item
      }
    })
    setData(filtered.filter(item => {
      if (filterSection) {
        return item.section === filterSection
      } else {
        return item
      }
    }))

  }, [filter, filterSection])

  const handleSelect = () => {
    setOpen(true)
    setFilterSection(section)
  }

  return (
    <>
      <Button icon="vertical-align-bottom" onClick={handleSelect} />
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
            <Select defaultValue="All" style={{ width: 200 }} onChange={value => setFilter(value)}>
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
          dataSource={data}
          size="small"
        />{" "}
      </Modal>
    </>
  )
}
