import React, { useState } from "react"
import _ from "lodash"

// import {
//   VictoryChart,
//   VictoryBar,
//   VictoryGroup,
//   VictoryLegend,
//   VictoryTheme,
// } from "victory"
import { Card, Progress, Button } from "antd"

const data = [
  { query: "Query 1", assessments: 4, residents: 3 },
  { query: "Query 2", assessments: 12, residents: 9 },
  { query: "Query 3", assessments: 8, residents: 6 },
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
    >
      {data.map(({ query, assessments, residents }) => {
        const percentAssessments = assessments / maxAssessments.assessments * 100
        const percentResidents = residents / maxResidents.residents * 100

        return (
          <span>
          {query}:{` `}
          <Progress
            percent={byResident ? percentResidents : percentAssessments}
            strokeWidth={20}
            format={byResident ? () => `${residents}` : () => `${assessments}`}
            status="active"
          />
          </span>
          
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
