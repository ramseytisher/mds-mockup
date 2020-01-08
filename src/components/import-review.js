import React, { useState } from "react"

import {
  Modal,
  Button,
  Collapse,
  Table,
  Typography,
  Select,
  Switch,
  Row,
  Col,
} from "antd"
const { Panel } = Collapse
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
const data = [
  {
    key: "1",
    field: "C0100: Should Brief Interview for Mental Status be Conducted?",
    previous: "3. Correct",
    previousUser: "Ramsey Tisher",
    import: "Not a value to import",
  },
  {
    key: "2",
    field: "C0200: Repetition of Three Words",
    previous: "3. Correct",
    previousUser: "Ramsey Tisher",
    import: "2. Missed by 1 year",
  },
  {
    key: "3",
    field: "C0300A: Able to report correct year",
    previous: "3. Correct",
    previousUser: "Ramsey Tisher",
    import: "2. Missed by 1 year",
  },
  {
    key: "4",
    field: "C0300B: Able to report correct month",
    previous: "3. Correct",
    previousUser: "Ramsey Tisher",
    import: "2. Missed by 1 year",
  },
  {
    key: "5",
    field: "C0300C: Able to report correct day of the week",
    previous: "3. Correct",
    previousUser: "Ramsey Tisher",
    import: "2. Missed by 1 year",
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

export default () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Import</Button>
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
        <div style={{ paddingBottom: 10 }}>
          <Row type="flex" justify="space-between" gutter={[16, 16]}>
            <Col span={8}>
              <Text>Filter by Section</Text>
              <br />
              <Select
                mode="multiple"
                style={{ width: "100%" }}
                placeholder="Select section(s) to filter by"
              >
                <Option key="a">Section A</Option>
                <Option key="b">Section B</Option>
                <Option key="c">Section C</Option>
                <Option key="d">Section D</Option>
                <Option key="e">Section E</Option>
                <Option key="f">Section F</Option>
                <Option key="g">Section G</Option>
              </Select>
            </Col>
            <Col span={8}>
              <Text>Show Only Changes</Text>
              <br />
              <Switch />
            </Col>
            <Col span={6}>
              <Button>Save As My Filter</Button>{" "}
              <Button type="primary">Apply My Filter</Button>
            </Col>
          </Row>
        </div>
        <Collapse>
          <Panel header="Section A: Identification Information" key="1">
            Section A Stuff
          </Panel>
          <Panel header="Section B: Hearing, Speech, and Vision" key="2">
            Section B Stuff
          </Panel>
          <Panel header="Section C: Cognitive Patterns" key="3">
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={data}
            />{" "}
          </Panel>
          <Panel header="You get the idea ..." key="4">
            Really, you had to click this?
          </Panel>
        </Collapse>
      </Modal>
    </>
  )
}
