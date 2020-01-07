import React from "react"

import { Typography, Collapse } from "antd"
const { Title, Text } = Typography
const { Panel } = Collapse

export default () => (
  <>
    <Text>
      The following information describes how this field specifically impacts
      financial outcomes.
    </Text>
    <Collapse style={{ margin: 10}}>
      <Panel header="PDPM Group: PT/OT">
        This would be how this field impacts the PT/OT Grouper
      </Panel>
      <Panel header="PDPM Group: Nursing">
        This would be how this field impacts the Nursing Grouper
      </Panel>
    </Collapse>
  </>
)
