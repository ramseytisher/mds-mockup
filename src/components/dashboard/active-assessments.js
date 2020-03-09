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
import { Card, Progress, Button } from "antd"

const data = [
  { type: "PPS", assessments: 6 },
  { type: "OBRA", assessments: 2 },
  { type: "Managed Care", assessments: 3 },
]

const Label = () => {}

export default () => {
  const [chartVersion, setChartVersion] = useState(false)

  const max = _.maxBy(data, "assessments")
  console.log("max: ", max)

  return (
    <Card
      title="Active MDS Assessments"
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
        <div style={{ padding: 30 }}>
          {data.map(({ assessments, type }) => {
            const percent = (assessments / max.assessments) * 100
            return (
              <Progress
                percent={percent}
                strokeWidth={20}
                steps={max.assessments}
                format={() => `${assessments} - ${type}`}
                style={{ padding: 10, width: "75%" }}
              />
            )
          })}
        </div>
      )}
    </Card>
  )
}
