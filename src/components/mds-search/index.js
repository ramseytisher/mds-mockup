import React, { useState } from "react"

import SearchTable from "./search-table"

import {
  Card,
  Select,
  Radio,
  Input,
  DatePicker,
  Tree,
  Row,
  Col,
  Button,
  Typography,
  Divider,
  Tag,
} from "antd"
const { Option } = Select
const { RangePicker } = DatePicker
const { Search } = Input
const { TreeNode, DirectoryTree } = Tree
const { Title, Text } = Typography

export default () => {
  const [selectFac, setSelectFac] = useState(false)
  return (
    <Row gutter={[16, 8]}>
      <Col span={8} style={{ padding: 20 }}>
        <Button type="primary" style={{ width: "100%", marginBottom: 10 }}>
          Add New Query
        </Button>
        <Card>
          <Card>
            <Radio.Group
              buttonStyle="solid"
              onChange={e => setSelectFac(e.target.value)}
              defaultValue={selectFac}
            >
              <Radio.Button value={false}>All Facilities</Radio.Button>
              <Radio.Button value={true}>Select Facilities</Radio.Button>
            </Radio.Group>
            {selectFac && (
              <Select
                allowClear
                mode="multiple"
                defaultValue="0"
                style={{ width: "100%", padding: 10 }}
              >
                <Option value="1">Facility 1</Option>
                <Option value="2">Facility 2</Option>
                <Option value="3">Facility 3</Option>
              </Select>
            )}
            <Card bordered={false}>
              <RangePicker />
            </Card>
            <Card>
              <Search
                placeholder="Search"
                onChange={e => console.log(e.target.value)}
              />
              <DirectoryTree multiple defaultExpandAll>
                <TreeNode title="My Queries" key="0-1">
                  <TreeNode title="My Query 1" key="0-1-0" isLeaf />
                  <TreeNode title="My Query 2" key="0-1-1" isLeaf />
                </TreeNode>
                <TreeNode title="System Queries" key="0-0">
                  <TreeNode title="System Query 1" key="0-0-0" isLeaf />
                  <TreeNode title="System Query 2" key="0-0-1" isLeaf />
                </TreeNode>
                <TreeNode title="Other User Queries" key="0-2">
                  <TreeNode title="Other User Query 1" key="0-2-0" isLeaf />
                  <TreeNode title="Other User Query 2" key="0-2-1" isLeaf />
                </TreeNode>
              </DirectoryTree>{" "}
            </Card>
          </Card>
        </Card>{" "}
      </Col>
      <Col span={16}>
        <Card
          bordered={false}
          extra={
            <>
              <Button>Edit Query</Button> <Button>Delete Query</Button>
            </>
          }
          title={
            <>
              <Title level={4}>Query Name</Title>
              <Text>Some descriptive text</Text>
            </>
          }
        >
          <div style={{padding: 10}}>
            <Tag>Facility: Facility CST</Tag>
            <Tag>MDSs: 6 of 36 (16.67%)</Tag>
            <Tag>Residents: 3 of 12 (25.00%)</Tag>
          </div>
          <SearchTable />
          <div style={{padding: 10}}>
            <Tag>Facility: Facility EST</Tag>
            <Tag>MDSs: 2 of 63 (3.17%)</Tag>
            <Tag>Residents: 2 of 26 (7.69%)</Tag>
          </div>
          <SearchTable />
        </Card>
      </Col>
    </Row>
  )
}
