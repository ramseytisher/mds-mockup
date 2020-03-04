import React from "react"
import styled from "styled-components"

import { Chart, Geom, Axis, Tooltip, Legend, Coord } from "bizcharts"

const data = [
  { type: "PPS", assessments: 6, income: 2300 },
  { type: "OBRA", assessments: 2, income: 667 },
  { type: "Managed Care", assessments: 3, income: 982 },
]

const cols = {
  assessments: { alias: "Assessments" },
  type: { alias: "MDS Type" },
}

export default () => (
  <Chart width={300} height={400} data={data} scale={cols}>
    <Axis name="assessments" title />
    <Coord transpose />
    <Tooltip />
    <Geom type="interval" position="type*assessments" color="type" />
  </Chart>
)
