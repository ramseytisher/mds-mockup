import React, { useState, useContext } from "react"

import Layout from "../components/layout"

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
  Divider,
  Typography,
  Card,
  Icon,
  Tag,
} from "antd"
const { Title } = Typography
const { TabPane } = Tabs

const IndexPage = () => {
  const [showDetail, setShowDetail] = useState(false)

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
          <Button icon="vertical-align-bottom" />,
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
          <Button icon="vertical-align-bottom" />,
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
          <Button icon="vertical-align-bottom" />,
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
          <Button icon="vertical-align-bottom" />,
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
          <Button icon="vertical-align-bottom" />,
          <Button icon="login" />,
          <Button icon="like" />,
          <Button icon="book" />,
        ]}
      />
      <SectionK showDetail={setShowDetail} />
      <Drawer
        title="Details for [MDS Field]"
        placement="right"
        closable={false}
        onClose={() => setShowDetail(false)}
        visible={showDetail}
        width="70vw"
      >
        <FieldDetails closeDetail={() => setShowDetail(false)} />
        <Tabs defaultActiveKey="1" onChange={e => console.log(e)}>
          <TabPane tab={<span><Icon type="vertical-align-bottom" />Source Data</span>} key="1">
            <SourceDetails />
          </TabPane>
          <TabPane tab={<span><Icon type="dollar" />Financial Impact</span>} key="2">
            <FinancialDetails />
          </TabPane>
          <TabPane tab={<span>(QM) Quality Measures</span>} key="3">
            <QualityDetails />
          </TabPane>
          <TabPane tab={<span>(N) Clinical Impact</span>} key="4">
            <ClinicalDetails />
          </TabPane>
          <TabPane tab={<span><Icon type="history" />Field History</span>} key="2">
            <FieldHistory />
          </TabPane>
          <TabPane tab={<span><Icon type="file" />Notes</span>} key="5">
            <Notes />
          </TabPane>
        </Tabs>
      </Drawer>
    </Layout>
  )
}

export default IndexPage
