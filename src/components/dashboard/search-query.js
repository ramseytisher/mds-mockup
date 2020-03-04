import React from "react"

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
