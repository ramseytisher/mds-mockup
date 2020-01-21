import React from "react"

import Layout from "../components/layout"
import ImportReview from "../components/import-review"
import IpaTable from "../components/dashboard/ipaTable"
import SigChangTable from "../components/dashboard/sigChangeTable"

import {
  Typography,
  Result,
  Button,
  Row,
  Col,
  Statistic,
  Card,
  Icon,
  Table,
  Collapse,
  Slider,
} from "antd"

const { Panel } = Collapse

const assessments = [
  {
    key: "1",
    assessmentId: "111",
    assessmentResident: "Smith, John",
    action: 1,
    actionDate: "1/22/2020",
  },
  {
    key: "2",
    assessmentId: "112",
    assessmentResident: "Jones, Hank",
    action: 2,
    actionDate: "1/23/2020",
  },
  {
    key: "3",
    assessmentId: "221",
    assessmentResident: "Miller, Amy",
    action: 4,
    actionDate: "1/23/2020",
  },
  {
    key: "4",
    assessmentId: "331",
    assessmentResident: "Morris, Chet",
    action: 5,
    actionDate: "1/26/2020",
  },
  {
    key: "5",
    assessmentId: "740",
    assessmentResident: "Abner, Abbey",
    action: 3,
    actionDate: "1/26/2020",
  },
]

const columns = [
  {
    title: "Assessment ID",
    dataIndex: "assessmentId",
    key: "assessmentId",
  },
  {
    title: "Resident",
    dataIndex: "assessmentResident",
    key: "assessmentResident",
  },
  {
    title: "Assessment Task",
    key: "action",
    render: item => {
      if (item.action === 1) {
        return <span>Set ARD</span>
      }
      if (item.action === 2) {
        return <span>Signature Due</span>
      }
      if (item.action === 3) {
        return <span>Assessment Due</span>
      }
      if (item.action === 4) {
        return <span>Care Plan Due</span>
      }
      if (item.action === 5) {
        return <span>Open Working Copy</span>
      }
    },
  },
  {
    title: "Task Date",
    dataIndex: "actionDate",
    key: "actionDate",
  },
  {
    title: "Action",
    key: "button",
    render: item => {
      if (item.action === 1) {
        return <Button type="primary">Set ARD</Button>
      }
      if (item.action === 2) {
        return <Button type="primary">Sign MDS</Button>
      }
      if (item.action === 3) {
        return <Button type="primary">Open Assessment</Button>
      }
      if (item.action === 4) {
        return <Button type="primary">Open Assessment</Button>
      }
      if (item.action === 5) {
        return <Button type="danger">Recall Working Copy</Button>
      }
    },
  },
]

export default () => (
  <Layout>
    <Row type="flex" justify="center" align="top">
      <Col span={14}>
        <Card title="Assessment Tasks" style={{ margin: 10 }}>
          Filter by task:
          <Button type="link">Set ARD</Button>
          <Button type="link">Signatures Due</Button>
          <Button type="link">Assessments Due</Button>
          <Button type="link">Care Plan Due</Button>
          <Button type="link">Recall Working Copy</Button>
          <Button>Clear Filter</Button>
          <div style={{ marginTop: 10 }}>
            <Table size="small" dataSource={assessments} columns={columns} />
          </div>
        </Card>
      </Col>
      <Col span={10}>
          <IpaTable />
          <SigChangTable />
      </Col>
    </Row>
  </Layout>
)
