import React, { useState } from "react"

import { Table } from "antd"

const columns = [
  {
    title: "MDS ID",
    dataIndex: "id",
    key: "id",
  },
  {
      title: "ARD",
      dataIndex: 'ard'
  },
  {
      title: "N0410A",
      dataIndex: 'n0410A'
  },
  {
      title: "D0600",
      dataIndex: 'd0600'
  },
  {
      title: "D0300",
      dataIndex: 'd0300'
  },
]

const data = [
  {
    key: 0,
    id: 1,
    name: "Virgil Dalton",
    ard: "10/4/2020",
    n0410A: "0",
    d0600: "",
    d0300: 24,
  },
  {
    key: 1,
    id: 2,
    name: "Lucille Tisher",
    ard: "10/4/2020",
    n0410A: "0",
    d0600: "3",
    d0300: 99
  },
]

export default () => {
  return (
    <Table
      pagination={false}
      size="small"
      columns={columns}
      dataSource={data}
    />
  )
}
