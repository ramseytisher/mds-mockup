import React from "react"

import { Typography, Card, Table, Tag, Collapse } from "antd"
const { Title } = Typography
const { Panel } = Collapse

const columns = [
  {
    title: "Data Response",
    dataIndex: "dataResponse",
  },
  {
    title: "User",
    dataIndex: "user",
  },
  {
    title: "Date/Time",
    dataIndex: "dateTime",
  },
]

const dataC0300A = [
  {
    key: "1",
    dataResponse: "Correct",
    user: "Jane Smith (RN)",
    dateTime: "10/9/2019 11:43AM",
  },
  {
    key: "2",
    dataResponse: "Correct",
    user: "John Doe (MD)",
    dateTime: "10/11/2019 01:25PM",
  },
  {
    key: "3",
    dataResponse: "Missed by 2-5 years",
    user: "Jim Henry (CNA)",
    dateTime: "10/13/2019 04:42PM",
  },
]

const dataC0300B = [
  {
    key: "1",
    dataResponse: "Accurate within 5 days",
    user: "Jane Smith (RN)",
    dateTime: "10/9/2019 11:43AM",
  },
  {
    key: "2",
    dataResponse: "Accurate within 5 days",
    user: "John Doe (MD)",
    dateTime: "10/11/2019 01:25PM",
  },
  {
    key: "3",
    dataResponse: "Accurate within 5 days",
    user: "Jim Henry (CNA)",
    dateTime: "10/13/2019 04:42PM",
  },
]

export default () => {
  return (
    <Collapse>
      <Panel header="PowerChart Results (2 DTAs)">
        <Card title="Able to report correct year" size="small">
          <Table
            columns={columns}
            dataSource={dataC0300A}
            size="small"
            pagination={false}
          />
        </Card>
        <Card title="Able to report correct month" size="small">
          <Table
            columns={columns}
            dataSource={dataC0300B}
            size="small"
            pagination={false}
          />
        </Card>
      </Panel>
      <Panel header="PowerChart Diagnosis">
        <p>The following diagnosis information was found:</p>
        <Tag color="#5C6770">XYZ.123 - Some Diagnosis 1</Tag>
        <Tag color="#5C6770">ABC.123 - Some Diagnosis 2</Tag>
        <Tag color="#5C6770">LMN.123 - Some Diagnosis 3</Tag>
      </Panel>
      <Panel header="PowerChart Procedure">
        <p>The following procedure information was found:</p>
        <Tag color="#5C6770">XYZ.123 - Some Procedure 1</Tag>
        <Tag color="#5C6770">ABC.123 - Some Procedure 2</Tag>
        <Tag color="#5C6770">LMN.123 - Some Procedure 3</Tag>
      </Panel>
      <Panel header="Rehab Optima Therapy">
        <p>
          The Rehab Optima Therapy interface returned a value of{" "}
          <Tag color="#5C6770">300</Tag> for this field.
        </p>
      </Panel>
      <Panel header="Calculation Detail">
        <p>
          Lorem ipsum dolor amet wolf YOLO godard next level man braid 3 wolf
          moon kale chips skateboard adaptogen gochujang twee. IPhone artisan
          beard chia whatever man bun typewriter raclette chambray humblebrag
          hoodie celiac williamsburg godard. Hella vape next level, waistcoat
          leggings before they sold out narwhal etsy vegan fanny pack semiotics
          banh mi actually art party pour-over. Stumptown hammock tilde kinfolk
          four loko.
        </p>
      </Panel>
    </Collapse>
  )
}
