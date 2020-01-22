import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import IpaTable from "../components/dashboard/ipaTable"
import SigChangTable from "../components/dashboard/sigChangeTable"

import {
  Button,
  Row,
  Col,
  Table,
  Collapse,
  Slider,
  PageHeader,
  Popconfirm,
  message,
} from "antd"

const initialAssessments = [
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
        return (
          <Button
            type="primary"
            onClick={() => message.info("This would go to the assessment")}
          >
            Set ARD
          </Button>
        )
      }
      if (item.action === 2) {
        return (
          <Popconfirm
            title="Are you sure you want to sign?"
            onConfirm={() => message.success("Assessment successfully signed")}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary">Sign MDS</Button>
          </Popconfirm>
        )
      }
      if (item.action === 3) {
        return (
          <Button
            type="primary"
            onClick={() => message.info("This would go to the assessment")}
          >
            Open Assessment
          </Button>
        )
      }
      if (item.action === 4) {
        return (
          <Button
            type="primary"
            onClick={() => message.info("This would go to the assessment")}
          >
            Open Assessment
          </Button>
        )
      }
      if (item.action === 5) {
        return <Button type="danger">Recall Working Copy</Button>
      }
    },
  },
]

export default () => {
  const [assessmentFilter, setAssessmentFilter] = useState(0)
  const [assessments, setAssessments] = useState(initialAssessments)

  useEffect(() => {
    if (assessmentFilter != 0) {
      const filtered = initialAssessments.filter(assessment => {
        return assessment.action === assessmentFilter
      })
      setAssessments(filtered)
    } else {
      setAssessments(initialAssessments)
    }
  }, [assessmentFilter])

  return (
    <Layout>
      <Row type="flex" justify="center" align="top">
        <Col span={14}>
          <PageHeader title="MDS Tasks" />
          <div style={{ padding: 10 }}>
            Filter by task:
            <Button
              type={assessmentFilter === 1 ? "primary" : "link"}
              onClick={() => setAssessmentFilter(1)}
              size="small"
            >
              Set ARD
            </Button>
            <Button
              type={assessmentFilter === 2 ? "primary" : "link"}
              onClick={() => setAssessmentFilter(2)}
              size="small"
            >
              Signatures Due
            </Button>
            <Button
              type={assessmentFilter === 3 ? "primary" : "link"}
              onClick={() => setAssessmentFilter(3)}
              size="small"
            >
              Assessments Due
            </Button>
            <Button
              type={assessmentFilter === 4 ? "primary" : "link"}
              onClick={() => setAssessmentFilter(4)}
              size="small"
            >
              Care Plan Due
            </Button>
            <Button
              type={assessmentFilter === 5 ? "primary" : "link"}
              onClick={() => setAssessmentFilter(5)}
              size="small"
            >
              Recall Working Copy
            </Button>
            {assessmentFilter !== 0 && (
              <Button
                type="circle"
                icon="close"
                onClick={() => setAssessmentFilter(0)}
                style={{ marginLeft: 4 }}
              />
            )}
          </div>
          <div style={{ marginTop: 10 }}>
            <Table size="small" dataSource={assessments} columns={columns} />
          </div>
        </Col>
        <Col span={10}>
          <IpaTable />
          <SigChangTable />
        </Col>
      </Row>
    </Layout>
  )
}
