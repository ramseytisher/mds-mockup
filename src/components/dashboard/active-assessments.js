import React, { useState } from "react"
import _ from "lodash"

import {
  VictoryChart,
  VictoryLabel,
  VictoryLegend,
  VictoryBar,
  VictoryPie,
  VictoryTheme,
} from "victory"
import { Card, Progress, Button, Select, Statistic, Row, Col } from "antd"
import { CheckCircleOutlined } from "@ant-design/icons"

import SetTargetDate from "./details/set-target-date"
import AssessmentsInflight from "./details/assess-inflight"
import AssessmentsNeedsSigned from "./details/assess-needs-signed"
import AssessmentsNeedSent from "./details/assess-needs-sent"
import PastDueCompletion from "./details/past-due-completion"
import PastDueSubmission from "./details/past-due-submission"

const { Option } = Select

const data = [
  { type: "Set Target Date", assessments: 1 },
  { type: "Assessments Inflight", assessments: 0 },
  { type: "Assessments Needs Signed", assessments: 3 },
  { type: "Assessments Need Sent", assessments: 2 },
  { type: "Past Due for Completion", assessments: 6 },
  { type: "Past Due for Submission", assessments: 2 },
]

const Label = () => {}

export default () => {
  const [chartVersion, setChartVersion] = useState(false)

  const max = _.maxBy(data, "assessments")
  console.log("max: ", max)

  return (
    <Card
      title="MDS Assessments Requiring Action"
      bordered={false}
      style={{ padding: 10 }}
    >
      <Row gutter={[16, 8]}>
        <Col span={8}>
          <SetTargetDate />
        </Col>
        <Col span={8}>
          <AssessmentsInflight />
        </Col>
        <Col span={8}>
          <AssessmentsNeedsSigned />
        </Col>
        <Col span={8}>
          <AssessmentsNeedSent />
        </Col>
        <Col span={8}>
          <PastDueCompletion />
        </Col>
        <Col span={8}>
          <PastDueSubmission />
        </Col>
      </Row>
    </Card>
  )
}
