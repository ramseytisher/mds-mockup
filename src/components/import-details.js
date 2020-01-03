import React from "react"

import { Typography, Card, Table, List } from "antd"
const { Title } = Typography

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

const data = [
  {
    key: "1",
    dataResponse: "None",
    user: "Jane Smith (RN)",
    dateTime: "10/9/2019 11:43AM",
  },
  {
    key: "2",
    dataResponse: "None",
    user: "John Doe (MD)",
    dateTime: "10/11/2019 01:25PM",
  },
  {
    key: "3",
    dataResponse: "One",
    user: "Jim Henry (CNA)",
    dateTime: "10/13/2019 04:42PM",
  },
]

export default () => {
  return (
    <>
      <Card title="Import Source Data 1">
        <p>
          The following data was used to determine the calculated value upon
          import
        </p>
        <Card
          title={`PowerChart Results "Repetition of Three Words"`}
          size="small"
        >
          <Table
            columns={columns}
            dataSource={data}
            size="small"
            pagination={false}
            style={{ fontSize: 12 }}
          />
        </Card>
        <Card title={`PowerChart Diagnosis`} size="small">
          <List>
            <List.Item>XYZ.123 - Some Diagnosis 1</List.Item>
            <List.Item>ABC.123 - Some Diagnosis 2</List.Item>
            <List.Item>LMN.123 - Some Diagnosis 3</List.Item>
          </List>
        </Card>
        <Card title={`PowerChart MAR`} size="small">
          <Table
            columns={columns}
            dataSource={data}
            size="small"
            pagination={false}
          />
        </Card>
        <Card title="Import Calculation Description" style={{ padding: "2px" }}>
          <p>
            Lorem ipsum dolor amet wolf YOLO godard next level man braid 3 wolf
            moon kale chips skateboard adaptogen gochujang twee. IPhone artisan
            beard chia whatever man bun typewriter raclette chambray humblebrag
            hoodie celiac williamsburg godard. Hella vape next level, waistcoat
            leggings before they sold out narwhal etsy vegan fanny pack
            semiotics banh mi actually art party pour-over. Stumptown hammock
            tilde kinfolk four loko.
          </p>
        </Card>
      </Card>
    </>
  )
}
