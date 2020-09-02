import React, { useState } from "react"

import { Card, Statistic, Modal, Table, Button, Typography, message } from "antd"
import { CheckCircleOutlined } from "@ant-design/icons"

const { Text } = Typography

export default () => {
  const [showDetail, setShowDetail] = useState(false)

  const data = [
    {
      id: 1,
      name: "Lucille Dalton",
      type: "NQ",
      status: "Closed",
      due: "8/26/2020",
    },
    {
      id: 2,
      name: "Mary Lou Tisher",
      type: "NQ",
      status: "Closed",
      due: "8/26/2020",
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
      title: "Status",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "Complete and Sign Due",
      key: "due",
      dataIndex: "due",
      render: text => (
        <Text type="danger" strong>
          {text}
        </Text>
      ),
    },
    {
      title: "Actions",
      render: (text, record) => (
        <Button
          type="primary"
          onClick={() => message.info("Imagine you just got taken to the MDS Assessment!")}
        >
          Go To Assessment
        </Button>
      ),
    },
  ]
  return (
    <>
      <Modal
        title="Past Due for Completion"
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
        <Statistic title={`Past Due for Completion`} value={data.length} />
      </Card>
    </>
  )
}
