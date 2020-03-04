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