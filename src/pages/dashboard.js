import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import IpaTable from "../components/dashboard/ipa"
import SigChangTable from "../components/dashboard/sig-change"
import DashboardItem from "../components/dashboard/dashboard-item"
import MdsCalendar from "../components/dashboard/mds-calendar"
import ActiveAssessments from "../components/dashboard/active-assessments"
import SearchQuery from "../components/dashboard/search-query"
import MdsSearch from "../components/mds-search"

import {
  Button,
  Row,
  Col,
  Table,
  Collapse,
  Slider,
  PageHeader,
  Popconfirm,
  Progress,
  message,
  DatePicker,
  Tabs,
  Input,
  Select,
} from "antd"

const { MonthPicker, RangePicker, WeekPicker } = DatePicker
const { TabPane } = Tabs
const { Search } = Input
const { Option } = Select

const initialAssessments = [
  {
    key: "1",
    assessmentId: "111",
    assessmentResident: "Smith, John",
    action: 1,
    actionDate: "1/22/2020",
    ard: "1/1/2020",
    type: "Admission",
    working: ["User 1", "User 2"],
  },
  {
    key: "2",
    assessmentId: "112",
    assessmentResident: "Jones, Hank",
    action: 2,
    actionDate: "1/23/2020",
    ard: "1/1/2020",
    type: "5 Day",
    working: ["User 2"],
  },
  {
    key: "3",
    assessmentId: "221",
    assessmentResident: "Miller, Amy",
    action: 4,
    actionDate: "1/23/2020",
    ard: "1/1/2020",
    type: "Quarterly",
    working: ["User 1", "User 3"],
  },
  {
    key: "4",
    assessmentId: "331",
    assessmentResident: "Morris, Chet",
    action: 1,
    actionDate: "1/26/2020",
    ard: "1/1/2020",
    type: "Quarterly",
    working: [],
  },
  {
    key: "5",
    assessmentId: "740",
    assessmentResident: "Abner, Abbey",
    action: 3,
    actionDate: "1/6/2020",
    ard: "1/1/2020",
    type: "Quarterly",
    working: ["User 4"],
  },
  {
    key: "7",
    assessmentId: "951",
    assessmentResident: "Abner, Abbey",
    action: 3,
    actionDate: "2/26/2020",
    ard: "1/1/2020",
    type: "Quarterly",
    working: [],
  },
  {
    key: "8",
    assessmentId: "740",
    assessmentResident: "Abner, Abbey",
    action: 3,
    actionDate: "3/26/2020",
    ard: "1/1/2020",
    type: "Quarterly",
    working: [],
  },
  {
    key: "9",
    assessmentId: "753",
    assessmentResident: "Morris, Chet",
    action: 2,
    actionDate: "1/26/2020",
    ard: "1/1/2020",
    type: "Quarterly",
    working: [],
  },
  {
    key: "10",
    assessmentId: "951",
    assessmentResident: "Abner, Abbey",
    action: 3,
    actionDate: "1/26/2020",
    ard: "1/1/2020",
    type: "Quarterly",
    working: [],
  },
]

const columns = [
  {
    title: "ID",
    dataIndex: "assessmentId",
    key: "assessmentId",
  },
  {
    title: "Resident",
    dataIndex: "assessmentResident",
    key: "assessmentResident",
  },
  // {
  //   title: "Assessment Task",
  //   key: "action",
  //   render: item => {
  //     if (item.action === 1) {
  //       return <span>Set ARD</span>
  //     }
  //     if (item.action === 2) {
  //       return <span>Signature Due</span>
  //     }
  //     if (item.action === 3) {
  //       return <span>Assessment Due</span>
  //     }
  //     if (item.action === 4) {
  //       return <span>Care Plan Due</span>
  //     }
  //     if (item.action === 5) {
  //       return <span>Open Working Copy</span>
  //     }
  //   },
  // },
  {
    title: "Type",
    key: "type",
    dataIndex: "type",
  },
  {
    title: "ARD",
    key: "ard",
    dataIndex: "ard",
  },
  {
    title: "Due By",
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
            size="small"
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
            <Button type="primary" size="small">
              Complete MDS
            </Button>
            <Button icon="edit" style={{ marginLeft: 4 }} size="small">
              Sign
            </Button>
          </Popconfirm>
        )
      }
      if (item.action === 3) {
        return (
          <Button
            type="primary"
            onClick={() => message.info("This would go to the assessment")}
            size="small"
          >
            Complete Care Plan
          </Button>
        )
      }
      if (item.action === 4) {
        return (
          <Button
            type="primary"
            onClick={() => message.info("This would go to the assessment")}
            size="small"
          >
            Comlete CAA
          </Button>
        )
      }
    },
  },
]

export default () => {
  const [assessmentFilter, setAssessmentFilter] = useState(0)
  const [assessments, setAssessments] = useState(initialAssessments)
  const [selectedTab, setSelectedTab] = useState(null)

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
      <Tabs
        onChange={key => setSelectedTab(key)}
        tabBarExtraContent={
          selectedTab !== 3 ? (
            <Select defaultValue="1" style={{ width: 240 }}>
              <Option value="1">Facility 1</Option>
              <Option value="2">Facility 2</Option>
              <Option value="3">Facility 3</Option>
            </Select>
          ) : null
        }
      >
        <TabPane tab="MDS Dashboard" key="0">
          <Row type="flex" justify="center" align="top">
            <Col span={12}>
              {/* <PageHeader title="MDS Assessment Tasks" />
          <Tabs defaultActiveKey="1">
            <TabPane tab="Past Due" key="2">
              <pre>show past due assessments here</pre>
            </TabPane>
            <TabPane tab="Current" key="1">
              <div style={{ padding: 10 }}>
                <Row style={{ marginBottom: 4 }}>
                  <Col span={16}>
                    Date Range: <RangePicker />
                  </Col>
                  <Col span={8}>
                    <Search
                      placeholder="search by resident/id/type"
                      style={{
                        boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.3)",
                      }}
                    />
                  </Col>
                </Row>
                <br />
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
                {/* <Button
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
                <Table
                  size="small"
                  dataSource={assessments}
                  expandedRowRender={record => (
                    <span>
                      Active Working Copies:
                      {record.working.length === 0
                        ? "None"
                        : record.working.map(user => (
                            <Popconfirm title="Do you want to recall this working copy?">
                              <Button size="small" style={{ margin: 4 }}>
                                {user}
                              </Button>
                            </Popconfirm>
                          ))}
                    </span>
                  )}
                  columns={columns}
                />
              </div>
            </TabPane>
            <TabPane tab="Calendar" key="3">
              <MdsCalendar assessments={initialAssessments} />
            </TabPane>
          </Tabs> */}
              <ActiveAssessments />
              <SearchQuery />
            </Col>
            <Col span={12}>
              <IpaTable />
              <SigChangTable />
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="MDS Schedule" key="1">
          This is in Sencha ...
        </TabPane>
        <TabPane tab="MDS Link Center" key="2">
          This is in Sencha ...
        </TabPane>
        <TabPane tab="MDS Search" key="3">
          <MdsSearch />
        </TabPane>
      </Tabs>
    </Layout>
  )
}
