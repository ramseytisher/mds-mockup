import React, { useState } from "react"

import { dataA, dataC } from './import-data'

import {
  Modal,
  Button,
  Table,
  Typography,
} from "antd"
const { Text } = Typography

const columns = [
  {
    title: "Field",
    dataIndex: "field",
    render: text => <a>{text}</a>,
  },
  {
    title: "Current Value",
    dataIndex: "previous",
    render: (text, record) => (
      <>
        <Text>{text}</Text>
        <br />
        <Text
          style={{ fontSize: "80%" }}
          disabled
        >{`${record.previousUser}`}</Text>
      </>
    ),
  },
  {
    title: "New Value",
    dataIndex: "import",
  },
  {
    title: "View Details",
    render: () => <Button icon="search">View Details</Button>,
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

export default ({ section }) => {
  const [open, setOpen] = useState(false)

  const getData = () => {
    switch(section) {
      case 'A': return dataA; break
      case 'C': return dataC; break
      default: return dataC; break
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
