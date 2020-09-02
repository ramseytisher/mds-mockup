import React, { useState } from "react"

import {
  Card,
  Statistic,
  Modal,
  Table,
  Button,
  Tooltip,
  Typography,
  Popconfirm,
  message,
} from "antd"
import { CheckCircleOutlined } from "@ant-design/icons"

const { Title, Text } = Typography

export default () => {
  const [showDetail, setShowDetail] = useState(false)

  const data = [
    {
      id: 1,
      name: "Virgil Tisher",
      mrn: "3456",
      type: "NQ",
      targetWindow: "8/26/2020 - 8/30/2020",
    },
    {
      id: 2,
      name: "Bryce Dalton",
      mrn: "7890",
      type: "NQ",
      targetWindow: "8/26/2020 - 8/30/2020",
    },
    {
      id: 3,
      name: "Steve Fraley",
      mrn: "2112",
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
        <>
          <Button
            type="primary"
            onClick={() =>
              message.info(
                "Close your eyes and envision the Create Assessment Screen with information pre-populated"
              )
            }
          >
            Create
          </Button>
          <Popconfirm
            title="No turning back now. Are you sure?"
            okText="Yes"
            cancelText="No"
            onConfirm={() =>
              message.warn(
                "Well that was not the best choice, you deleted the ghost card. You are on your own now!"
              )
            }
          >
            <Button type="link">Delete</Button>
          </Popconfirm>
        </>
      ),
    },
  ]

  return (
    <>
      <Tooltip
        mouseEnterDelay={2}
        title="Click here to see all assessments that need created."
      >
        <Card hoverable size="small" onClick={() => setShowDetail(true)}>
          <Statistic title={`Set Target Date`} value={data.length} />
        </Card>
      </Tooltip>
      <Modal
        title={
          <>
            <Title level={4}>Set Target Date</Title>
            <Text type="secondary">Assessments that need created.</Text>
          </>
        }
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
          expandedRowRender={record => <Text>MRN: {record.mrn}</Text>}
        />
      </Modal>
    </>
  )
}
