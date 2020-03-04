import React, { useState } from "react"
import _ from "lodash"

// import {
//   VictoryChart,
//   VictoryBar,
//   VictoryGroup,
//   VictoryLegend,
//   VictoryTheme,
// } from "victory"
import { Card, Progress, Button, Row, Col } from "antd"

const data = [
  { query: "I0020B Equals Diabetes", assessments: 4, residents: 3 },
  { query: "Fall Occurred", assessments: 12, residents: 9 },
  { query: "Active Wound", assessments: 8, residents: 6 },
  { query: "Query 4", assessments: 32, residents: 25 },
  { query: "Query 5", assessments: 21, residents: 18 },
]
const maxAssessments = _.maxBy(data, "assessments")
const maxResidents = _.maxBy(data, "residents")

export default () => {
  const [byResident, setByResident] = useState(false)
  return (
    <Card
      title={`MDS Search Queries By ${byResident ? "Resident" : "Assessment"}`}
      extra={<Button onClick={() => setByResident(!byResident)}>Toggle</Button>}
      bordered={false}
    >
      {data.map(({ query, assessments, residents }) => {
        const percentAssessments =
          (assessments / maxAssessments.assessments) * 100
        const percentResidents = (residents / maxResidents.residents) * 100

        return (
          <Row justify="space-around">
            <Col span={8}>{query}</Col>
            <Col span={16}>
              <Progress
                percent={byResident ? percentResidents : percentAssessments}
                strokeWidth={20}
                format={
                  byResident ? () => `${residents}` : () => `${assessments}`
                }
                status="active"
                style={{ padding: 10 }}
              />
            </Col>
          </Row>
        )
      })}
    </Card>
  )
}

// export default () => (
//   <Card>
//     <VictoryLegend
//       title="MDS Queries"
//       x={125}
//       y={50}
//       gutter={10}
//       orientation="horizontal"
//       style={{ title: { fontSize: 20 } }}
//       data={[{ name: "Assessments" }, { name: "Residents" }]}
//       colorScale={["blue", "gold"]}
//       borderPadding={{ top: 0, bottom: 0 }}
//       height={150}
//     />
//     <VictoryChart domainPadding={30} theme={VictoryTheme.material}>
//       <VictoryGroup horizontal offset={10} colorScale={["blue", "gold"]}>
//         <VictoryBar data={data} x="query" y="assessments" />
//         <VictoryBar data={data} x="query" y="residents" />
//       </VictoryGroup>
//     </VictoryChart>
//   </Card>
// )
