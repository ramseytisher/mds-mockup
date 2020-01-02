import React, { useState, useContext } from "react"

import Layout from "../components/layout"

import SectionA from "../components/sections/section-a"
import SectionC from "../components/sections/section-c"
import SectionI from "../components/sections/section-i"
import SectionK from "../components/sections/section-k"

import ImportDetails from "../components/import-details"

import { Drawer, Tabs, Divider, Typography, Card, Tag } from "antd"
const { Title } = Typography
const { TabPane } = Tabs

const IndexPage = () => {
  const [showDetail, setShowDetail] = useState(false)

  return (
    <Layout>
      <Divider orientation="left">
        <Title>Section A: Identification Information</Title>
      </Divider>
      <SectionA showDetail={setShowDetail} />
      <Divider orientation="left">
        <Title>Section C: Cognitive Patterns</Title>
      </Divider>
      <SectionC showDetail={setShowDetail} />
      <Divider orientation="left">
        <Title>Section I: Active Diagnosis</Title>
      </Divider>
      <SectionI showDetail={setShowDetail} />
      <Divider orientation="left">
        <Title>Section K: Swalling/Nutritional Status</Title>
      </Divider>
      <SectionK showDetail={setShowDetail} />
      <Drawer
        title="Details for [MDS Field]"
        placement="right"
        closable={false}
        onClose={() => setShowDetail(false)}
        visible={showDetail}
        width="70vw"
      >
        <Card title="Description: The Question Text would go here">
          <p>
            Current Value: <Tag color="#2db7f5">0. No</Tag>
          </p>
          <p>
            Completed By: <Tag color="#2db7f5">Robin Miller</Tag>
          </p>
        </Card>
        <Tabs defaultActiveKey="1" onChange={e => console.log(e)}>
          <TabPane tab="Source Data" key="1">
            <ImportDetails />
          </TabPane>
          <TabPane tab="Finanical Impact" key="2">
            Content of Tab 4
          </TabPane>
          <TabPane tab="Clinical Impact" key="3">
            Content of Tab 4
          </TabPane>
          <TabPane tab="Quality Measures" key="4">
            Content of Tab 3
          </TabPane>
          <TabPane tab="Field History/Notes" key="5">
            Content of Tab 1
          </TabPane>
        </Tabs>
      </Drawer>
    </Layout>
  )
}

export default IndexPage
