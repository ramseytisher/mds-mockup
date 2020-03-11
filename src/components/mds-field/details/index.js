import React from "react"

import SourceDetails from "./source-details"
import FinancialDetails from "./financial-details"
import ClinicalDetails from "./clinical-details"
import QualityDetails from "./quality-details"
import FieldHistory from "./field-history"
import Notes from "./notes"

import {
  Typography,
  Tabs,
  Button,
  Icon,
  Card,
  Tag,
} from "antd"
const { Text, Title } = Typography
const { TabPane } = Tabs

export default ({ closeDetail, detail, question, activeKey, setActiveKey }) => (
  <>
    <Title
      level={2}
    >{`${detail.field}: ${question.node.itm_shrt_label}`}</Title>

    <Card bordered={false}>
      <Text>
        The value currently in {detail.field} is "{detail.previousAnswer}", set
        by {detail.previousUser} on {detail.previousDateTime}.
      </Text>
    </Card>

    <Card>
      Based on the imported information, there is documentation that supports a
      response of "{detail.sourceData.calculatedResponse}"{" "}
      <br />
      <Button type="primary" onClick={closeDetail} style={{ margin: 10 }}>
        Use This Response
      </Button>
    </Card>

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
