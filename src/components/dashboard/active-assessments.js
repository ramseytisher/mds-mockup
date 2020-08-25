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
const { Option } = Select

const data = [
  { type: "Past Due for Completion", assessments: 6 },
  { type: "Past Due for Submission", assessments: 2 },
  { type: "Set Target Date", assessments: 1 },
  { type: "Assessments Inflight", assessments: 0 },
  { type: "Assessments Needs Signed", assessments: 3 },
  { type: "Assessments Need Sent", assessments: 2 },
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

      //   extra={
      //     <Button onClick={() => setChartVersion(!chartVersion)}>
      //       Toggle{max.assessments}
      //     </Button>
      //   }
    >
      {chartVersion ? (
        <>
          <VictoryLegend
            x={125}
            y={50}
            gutter={10}
            orientation="horizontal"
            style={{ title: { fontSize: 20 } }}
            data={[{ name: "Managed Care" }, { name: "PPS" }, { name: "OBRA" }]}
            colorScale={["gold", "blue", "cyan"]}
            borderPadding={{ top: 0, bottom: 0 }}
            height={150}
          />
          <VictoryPie
            theme={VictoryTheme.material}
            data={data}
            innerRadius={100}
            labelRadius={120}
            x="type"
            y="assessments"
            labels={({ datum }) => `${datum.y}`}
            colorScale={["gold", "blue", "cyan"]}
          />
        </>
      ) : (
        <Row gutter={[16, 8]}>
          {data.map(({ assessments, type }) => {
            const percent = (assessments / max.assessments) * 100
            return (
              // <Progress
              //   percent={percent}
              //   strokeWidth={20}
              //   steps={max.assessments}
              //   format={() => `${assessments} - ${type}`}
              //   style={{ padding: 10, width: "75%" }}
              // />
              <Col span={8}>
                <Card
                  hoverable
                  size="small"
                  onClick={() => alert("Should go to the Schedule")}
                >
                  <Statistic
                    title={type}
                    value={assessments}
                    valueStyle={assessments === 0 ? { color: "#3f8600" } : null}
                  />
                </Card>
              </Col>
            )
          })}
        </Row>
      )}
    </Card>
  )
}
