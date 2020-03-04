import React from "react"
import styled from "styled-components"

import { Chart, Geom, Axis, Tooltip, Legend, Coord } from "bizcharts"
import DataSet from "@antv/data-set"

const data = [
  { label: "Query 1", assessments: 12, residents: 11 },
  { label: "Query 2", assessments: 5, residents: 4 },
  { label: "Query 3", assessments: 7, residents: 7 },
  { label: "Query 4", assessments: 0, residents: 0 },
  { label: "Query 5", assessments: 13, residents: 3 },
]

export default () => (
    <pre>{JSON.stringify(data, null, 2)}</pre>
)

// This was an attempt to use a chart library that failed, worked locally but not on production build

// const cols = {
//   assessments: { alias: "Assessments" },
//   residents: { alias: "Residents" },
//   type: { alias: "MDS Type" },
// }

// const ds = new DataSet()
// const dv = ds.createView().source(data)

// dv.transform({
//   type: "fold",
//   fields: ["assessments", "residents"],
//   key: "type",
//   value: "value",
// })

// export default () => (
//   <Chart width={500} height={400} data={dv} scale={cols}>
//     <Coord transpose />
//     <Axis name="value" position={"right"} />
//     <Tooltip />
//     <Geom
//       type="interval"
//       position="label*value"
//       color="type"
//       adjust={[{ type: "dodge" }]}
//     />
//     <Legend />
//   </Chart>
// )
