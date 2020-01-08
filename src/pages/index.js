import React, { useState, useContext } from "react"

import Layout from "../components/layout"
import { MdsContext } from "../context/mds-context"
import ImportReview from "../components/import-review"

import SectionA from "../components/sections/section-a"
import SectionC from "../components/sections/section-c"
import SectionI from "../components/sections/section-i"
import SectionK from "../components/sections/section-k"
import SectionGG from "../components/sections/section-gg"

import FieldDetails from "../components/details/field-details"
import SourceDetails from "../components/details/source-details"
import FinancialDetails from "../components/details/financial-details"
import ClinicalDetails from "../components/details/clinical-details"
import QualityDetails from "../components/details/quality-details"
import FieldHistory from "../components/details/field-history"
import Notes from "../components/details/notes"

import {
  PageHeader,
  Button,
  Drawer,
  Tabs,
  Icon,
} from "antd"
const { TabPane } = Tabs

const IndexPage = () => {
  const [showDetail, setShowDetail] = useState(false)

  const { activeKey, setActiveKey } = useContext(MdsContext)

  return (
    <Layout>
      <PageHeader
        title="Section A"
        subTitle="Identification Information"
        style={{
          border: "1px solid rgb(235, 237, 240)",
          background: "lightblue",
          padding: "6px",
        }}
        extra={[
          <ImportReview />,
          <Button icon="login" />,
          <Button icon="like" />,
          <Button icon="book" />,
        ]}
      />
      <SectionA showDetail={setShowDetail} />
      <PageHeader
        title="Section C"
        subTitle="Cognitive Patterns"
        style={{
          border: "1px solid rgb(235, 237, 240)",
          background: "lightblue",
          padding: "6px",
        }}
        extra={[
          <ImportReview />,
          <Button icon="login" />,
          <Button icon="like" />,
          <Button icon="book" />,
        ]}
      />
      <SectionC showDetail={setShowDetail} />
      <PageHeader
        title="Section GG"
        subTitle="Functional Abilities and Goals"
        style={{
          border: "1px solid rgb(235, 237, 240)",
          background: "lightblue",
          padding: "6px",
        }}
        extra={[
          <ImportReview />,
          <Button icon="login" />,
          <Button icon="like" />,
          <Button icon="book" />,
        ]}
      />
      <SectionGG showDetail={setShowDetail} />
      <PageHeader
        title="Section I"
        subTitle="Active Diagnosis"
        style={{
          border: "1px solid rgb(235, 237, 240)",
          background: "lightblue",
          padding: "6px",
        }}
        extra={[
          <ImportReview />,
          <Button icon="login" />,
          <Button icon="like" />,
          <Button icon="book" />,
        ]}
      />
      <SectionI showDetail={setShowDetail} />
      <PageHeader
        title="Section K"
        subTitle="Swallowing/Nutritional Status"
        style={{
          border: "1px solid rgb(235, 237, 240)",
          background: "lightblue",
          padding: "6px",
        }}
        extra={[
          <ImportReview />,
          <Button icon="login" />,
          <Button icon="like" />,
          <Button icon="book" />,
        ]}
      />
      <SectionK showDetail={setShowDetail} />
      <Drawer
        placement="right"
        closable={false}
        onClose={() => setActiveKey(0)}
        visible={activeKey > 0}
        width="70vw"
      >
        <FieldDetails closeDetail={() => setActiveKey(0)} />
        <Tabs activeKey={activeKey} onChange={e => setActiveKey(e)}>
          <TabPane tab={<span><Icon type="vertical-align-bottom" />Source Data</span>} key="1">
            <SourceDetails />
          </TabPane>
          <TabPane tab={<span><Icon type="dollar" />Financial Impact</span>} key="2">
            <FinancialDetails />
          </TabPane>
          <TabPane tab={<span>(QM) Quality Measures</span>} key="3">
            <QualityDetails />
          </TabPane>
          <TabPane tab={<span>(N) CAA Triggers</span>} key="4">
            <ClinicalDetails />
          </TabPane>
          <TabPane tab={<span><Icon type="history" />Field History</span>} key="5">
            <FieldHistory />
          </TabPane>
          <TabPane tab={<span><Icon type="file" />Notes</span>} key="6">
            <Notes />
          </TabPane>
        </Tabs>
      </Drawer>
    </Layout>
  )
}

export default IndexPage
