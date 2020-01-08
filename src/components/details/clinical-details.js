import React from "react"

import { Typography, Card, Tag, Collapse, Tree } from "antd"
const { Title, Text } = Typography
const { Panel } = Collapse
const { TreeNode } = Tree

export default () => (
  <>
    <Collapse>
      <Panel header="Independent" key="1">
        <Tree defaultExpandAll>
          <TreeNode title="CAA 5: ADL Functional/Rehabilitation Potential" />
        </Tree>
      </Panel>
      <Panel header="Modified independence" key="2">
        <Tree defaultExpandAll>
          <TreeNode title="CAA 2: Cognitive Loss/Dementia" />
          <TreeNode title="CAA 5: ADL Functional/Rehabilitation Potential" />
        </Tree>
      </Panel>
      <Panel header="Moderately impaired" key="3">
        <Tree defaultExpandAll>
          <TreeNode title="CAA 2: Cognitive Loss/Dementia" />
          <TreeNode title="CAA 5: ADL Functional/Rehabilitation Potential" />
        </Tree>
      </Panel>
      <Panel header="Severely impaired" key="4">
        <Tree defaultExpandAll>
          <TreeNode title="CAA 2: Cognitive Loss/Dementia" />
        </Tree>
      </Panel>
    </Collapse>
  </>
)
