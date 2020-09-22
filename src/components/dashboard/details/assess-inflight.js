import React, { useState } from "react"

import {
  Card,
  Statistic,
  Modal,
  Table,
  Tag,
  Tooltip,
  Typography,
  Button,
  message,
  Progress,
} from "antd"
import { CheckCircleOutlined } from "@ant-design/icons"

const { Title, Text } = Typography

export default () => {
  const [showDetail, setShowDetail] = useState(false)

  const data = [
    {
      id: 1,
      alert: "Past Due For Completion",
      name: "Virgil Tisher",
      type: "NQ",
      targetDate: "9/30/2020",
      status: "Open",
      assessmentComp: 99,
      caaBlank: [1, 4],
      caaNo: [2],
      caaYes: [5],
    },
    {
      id: 2,
      alert: "Past Due for CAA Completion",
      name: "Lucille Dalton",
      type: "NQ",
      targetDate: "9/30/2020",
      status: "Open",
      assessmentComp: 100,
      caaBlank: [4],
      caaNo: [],
      caaYes: [1, 3, 4],
    },
    {
      id: 3,
      alert: "Past Due for Care Plan Completion",
      name: "Paul Schott",
      type: "NQ",
      targetDate: "9/30/2020",
      status: "Open",
      assessmentComp: 94,
      caaBlank: [4],
      caaNo: [2],
      caaYes: [3],
    },
    {
      id: 4,
      alert: null,
      name: "Glenna Fraley",
      type: "NQ",
      targetDate: "9/30/2020",
      status: "Open",
      assessmentComp: 33,
      caaBlank: [4, 2],
      caaNo: [2],
      caaYes: [3],
    },
  ]
  const columns = [
    {
      title: "Alerts",
      render: (text, record) => {
        if (record.alert) {
          return <Tag color="red">{record.alert}</Tag>
        } else {
          return null
        }
      },
    },
    {
      title: "Resident Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Target Date",
      key: "targetDate",
      dataIndex: "targetDate",
    },
    {
      title: "Assessment Type",
      key: "type",
      dataIndex: "type",
    },
    {
      title: "MDS Status",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "Assessment Completion %",
      render: (text, record) => <Progress percent={record.assessmentComp} />,
    },
    {
      title: "CAA/Care Plan Decision",
      render: (text, record) => (
        <>
          <Tag>{`Blank: ${record.caaBlank}`}</Tag>
          <Tag>{`No: ${record.caaNo}`}</Tag>
          <Tag>{`Yes: ${record.caaYes}`}</Tag>
        </>
      ),
    },
    {
      title: "Actions",
      render: (text, record) => (
        <>
          <Button
            type="primary"
            onClick={() => message.info("Boom! Here is the assessment.")}
          >
            Go To Assessment
          </Button>{" "}
          <Button
            onClick={() =>
              message.info(
                "Go directly to the CAA, do not pass go, do not collection $200!"
              )
            }
          >
            Go To CAA
          </Button>
        </>
      ),
    },
  ]
  return (
    <>
      <Tooltip
        mouseEnterDelay={2}
        title="Click here to see all assessments that have not been completed."
      >
        <Card hoverable size="small" onClick={() => setShowDetail(true)}>
          <Statistic
            title={`Assessments Inflight`}
            value={data.length}
            suffix={<Tag color="red">3 Past Due</Tag>}
          />
        </Card>
      </Tooltip>
      <Modal
        title={
          <>
            <Title level={4}>Assessments Inflight</Title>
            <Text type="secondary">Assessments that need completed.</Text>
          </>
        }
        visible={showDetail}
        onOk={() => setShowDetail(false)}
        onCancel={() => setShowDetail(false)}
        width="80vw"
        footer={null}
      >
        <Table
          size="small"
          columns={columns}
          dataSource={data}
          expandedRowRender={record => <Text>MDS ID: {record.id}</Text>}
        />
      </Modal>
    </>
  )
}
