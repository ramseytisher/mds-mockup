import React from "react"

import { Tag, Collapse, Tree } from "antd"
const { Panel } = Collapse
const { TreeNode } = Tree

export default () => (
  <>
    <Collapse>
      <Panel header="Independent">
        <Tree defaultExpandAll>
          <TreeNode title="21 - Residents who self-report moderate to severe pain">
            <TreeNode
              title={
                <>
                  <Tag>Casper</Tag>
                  <Tag>Five Star</Tag>
                  <Tag>Nursing Home Compare</Tag>
                </>
              }
            ></TreeNode>
          </TreeNode>
        </Tree>
      </Panel>
      <Panel header="Modified independence">
        <Tree defaultExpandAll>
          <TreeNode title="21 - Residents who self-report moderate to severe pain">
            <TreeNode
              title={
                <>
                  <Tag>Casper</Tag>
                  <Tag>Five Star</Tag>
                  <Tag>Nursing Home Compare</Tag>
                </>
              }
            ></TreeNode>
          </TreeNode>
        </Tree>
      </Panel>
      <Panel header="Moderately impaired">N/A</Panel>
      <Panel header="Severely impaired">
        <Tree defaultExpandAll>
          <TreeNode title="6 - Residents who made improvements in function">
            <TreeNode
              title={
                <>
                  <Tag>Casper</Tag>
                  <Tag>Five Star</Tag>
                  <Tag>Nursing Home Compare</Tag>
                </>
              }
            ></TreeNode>
          </TreeNode>
        </Tree>
        <Tree defaultExpandAll>
          <TreeNode title="37 - Residents whose ability to move independently worsened">
            <TreeNode
              title={
                <>
                  <Tag>Casper</Tag>
                  <Tag>Five Star</Tag>
                  <Tag>Nursing Home Compare</Tag>
                </>
              }
            />
          </TreeNode>
        </Tree>
        <Tree defaultExpandAll>
          <TreeNode title="MDS COVARIATES for CLAIMS-BASED QUALITY MEASURES">
            <TreeNode title="1 - Short-stay residents who were re-hospitalized after a nursing home admission">
              <TreeNode
                title={
                  <>
                    <Tag>Five Star</Tag>
                    <Tag>Nursing Home Compare</Tag>
                  </>
                }
              />
            </TreeNode>
            <TreeNode title="2 - Number of hospitalizations per 1,000 long-stay resident days">
              <TreeNode
                title={
                  <>
                    <Tag>Five Star</Tag>
                    <Tag>Nursing Home Compare</Tag>
                  </>
                }
              />
            </TreeNode>
            <TreeNode title="3 - Short-stay residents who have had an outpatient emergency department visit">
              <TreeNode
                title={
                  <>
                    <Tag>Five Star</Tag>
                    <Tag>Nursing Home Compare</Tag>
                  </>
                }
              />
            </TreeNode>
            <TreeNode title="4 - Number of outpatient emergency department visits per 1,000 long-stay resident days">
              <TreeNode
                title={
                  <>
                    <Tag>Five Star</Tag>
                    <Tag>Nursing Home Compare</Tag>
                  </>
                }
              />
            </TreeNode>
            <TreeNode title="5 - Discharge to community">
              <TreeNode
                title={
                  <>
                    <Tag>Five Star</Tag>
                    <Tag>Nursing Home Compare</Tag>
                  </>
                }
              />
            </TreeNode>
          </TreeNode>
        </Tree>
      </Panel>
    </Collapse>
  </>
)
