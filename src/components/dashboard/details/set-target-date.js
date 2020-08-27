import React, { useState } from "react"

import { Card, Statistic, Modal, Table, Button } from "antd"
import { CheckCircleOutlined } from "@ant-design/icons"

export default () => {
  const [showDetail, setShowDetail] = useState(false)

  const data = [
    {
      id: 1,
      name: "Virgil Tisher",
      type: "NQ",
      targetWindow: "8/26/2020 - 8/30/2020",
    },
    {
      id: 2,
      name: "Bryce Dalton",
      type: "NQ",
      targetWindow: "8/26/2020 - 8/30/2020",
    },
    {
      id: 3,
      name: "Steve Fraley",
      type: "NQ",
      targetWindow: "8/26/2020 - 8/30/2020",
    },
  ]

  const columns = [
    {
      title: "Resident Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "MDS ID",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "Assessment Type",
      key: "type",
      dataIndex: "type",
    },
    {
      title: "Target Date Window",
      key: "targetWindow",
      dataIndex: "targetWindow",
    },
    {
      title: "Actions",
      render: (text, record) => (
        <Button type="primary" onClick={() => alert("Create Assessment Screen")}>
          Create Assessment
        </Button>
      ),
    },
  ]
  return (
    <>
      <Modal
        title="Set Target Date"
        visible={showDetail}
        onOk={() => setShowDetail(false)}
        onCancel={() => setShowDetail(false)}
        width="70vw"
        footer={null}
      >
        <Table
          size="small"
          columns={columns}
          dataSource={data}
          onRow={(record, rowIndex) => {
            return {
              onClick: event => {
                alert("Open this assessment!")
              },
            }
          }}
        />
      </Modal>
      <Card hoverable size="small" onClick={() => setShowDetail(true)}>
        <Statistic title={`Set Target Date`} value={data.length} />
      </Card>
    </>
  )
}
