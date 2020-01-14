import React from "react"

import SourceDetails from "./source-details"
import FinancialDetails from "./financial-details"
import ClinicalDetails from "./clinical-details"
import QualityDetails from "./quality-details"
import FieldHistory from "./field-history"
import Notes from "./notes"

import { Typography, Tabs, Descriptions, Button, Icon } from "antd"
const { Text } = Typography
const { TabPane } = Tabs

export default ({ closeDetail, detail, question, activeKey, setActiveKey }) => (
  <>
    <Descriptions
      bordered
      title={`${detail.field}: ${question.node.itm_shrt_label}`}
    >
      <Descriptions.Item label="Current Value">
        {detail.previousAnswer}
      </Descriptions.Item>
      <Descriptions.Item label="Completed By">
        {detail.previousUser}
      </Descriptions.Item>
      <Descriptions.Item label="Date/Time">
        {detail.previousDateTime}
      </Descriptions.Item>
      {detail.sourceData.calculatedResponse && (
        <Descriptions.Item
          label={
            <>
              <Text>Calculated Response</Text>
              <br />
              <Button type="primary" size="small" onClick={closeDetail}>
                Import Response
              </Button>
            </>
          }
          span={3}
        >
          <Text mark style={{ fontSize: "1.5rem" }}>
            {detail.sourceData.calculatedResponse}
          </Text>
        </Descriptions.Item>
      )}
    </Descriptions>
    <Tabs activeKey={activeKey} onChange={e => setActiveKey(e)}>
      <TabPane
        tab={
          <span>
            <Icon type="vertical-align-bottom" />
            Source Data
          </span>
        }
        key="1"
      >
        <SourceDetails detail={detail.sourceData} />
      </TabPane>
      <TabPane
        tab={
          <span>
            <Icon type="dollar" />
            Financial Impact
          </span>
        }
        key="2"
      >
        <FinancialDetails />
      </TabPane>
      <TabPane tab={<span>(QM) Quality Measures</span>} key="3">
        <QualityDetails />
      </TabPane>
      <TabPane tab={<span>(N) CAA Triggers</span>} key="4">
        <ClinicalDetails />
      </TabPane>
      <TabPane
        tab={
          <span>
            <Icon type="history" />
            Field History
          </span>
        }
        key="5"
      >
        <FieldHistory />
      </TabPane>
      <TabPane
        tab={
          <span>
            <Icon type="file" />
            Notes
          </span>
        }
        key="6"
      >
        <Notes />
      </TabPane>
    </Tabs>
  </>
)
