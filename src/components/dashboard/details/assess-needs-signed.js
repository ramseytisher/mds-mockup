import React, { useState } from "react"

import { Card, Statistic, Modal, Table, Button, message } from "antd"
import { CheckCircleOutlined } from "@ant-design/icons"

export default () => {
  const [showDetail, setShowDetail] = useState(false)

  const data = [
    {
      id: 1,
      name: "Virgil Tisher",
      type: "NQ",
      status: "Signature Ready",
      target: "9/1/2020",
    },
    {
      id: 2,
      name: "Bryce Dalton",
      type: "NQ",
      status: "Signature Ready",
      target: "9/3/2020",

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
      title: "Target Date",
      key: "target",
      dataIndex: "target",
    },
    {
      title: "Assessment Status",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "Actions",
      render: (text, record) => (
        <>
          <Button
            type="primary"
            onClick={() => message.info("Imagine you were just transported to the MDS Completion Signature Screen for this assessment.")}
          >
            Sign Assessment
          </Button>
          {" "}
          <Button onClick={() => message.info("Open this MDS assessment")}>Go To Assessment</Button>
        </>
      ),
    },
  ]
  return (
    <>
      <Modal
        title="Assessments Needs Signed"
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
        />
      </Modal>
      <Card hoverable size="small" onClick={() => setShowDetail(true)}>
        <Statistic title={`Assessments Needs Signed`} value={data.length} />
      </Card>
    </>
  )
}
