import React from "react"

import { Card, Progress, Button, Select, Statistic, Row, Col } from "antd"
import { CheckCircleOutlined } from "@ant-design/icons"

import SetTargetDate from "./details/set-target-date"
import AssessmentsInflight from "./details/assess-inflight"
import AssessmentsNeedsSigned from "./details/assess-needs-signed"
import AssessmentsNeedSent from "./details/assess-needs-sent"

const { Option } = Select

export default () => {

  return (
    <Card
      title="MDS Assessments Requiring Action"
      bordered={false}
      style={{ padding: 10 }}
    >
      <Row gutter={[16, 8]}>
        <Col span={12}>
          <SetTargetDate />
        </Col>
        <Col span={12}>
          <AssessmentsInflight />
        </Col>
        <Col span={12}>
          <AssessmentsNeedsSigned />
        </Col>
        <Col span={12}>
          <AssessmentsNeedSent />
        </Col>
      </Row>
    </Card>
  )
}
