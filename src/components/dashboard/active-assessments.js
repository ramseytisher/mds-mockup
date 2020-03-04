import React from "react"
import styled from "styled-components"

const data = [
  { type: "PPS", assessments: 6 },
  { type: "OBRA", assessments: 2 },
  { type: "Managed Care", assessments: 3},
]

export default () => (
    <pre>{JSON.stringify(data, null, 2)}</pre>
)

// This was an attempt to use a chart library that failed, worked locally but not on production build
// import { Chart, Geom, Axis, Tooltip, Legend, Coord } from "bizcharts"



// const cols = {
//   assessments: { alias: "Assessments" },
//   type: { alias: "MDS Type" },
// }

// export default () => (
//   <Chart width={300} height={400} data={data} scale={cols}>
//     <Axis name="assessments" title />
//     <Coord transpose />
//     <Tooltip />
//     <Geom type="interval" position="type*assessments" color="type" />
//   </Chart>
// )
