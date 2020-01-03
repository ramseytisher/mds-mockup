import React, { useState, useContext } from "react"

import Layout from "../components/layout"

import SectionA from "../components/sections/section-a"
import SectionC from "../components/sections/section-c"
import SectionI from "../components/sections/section-i"
import SectionK from "../components/sections/section-k"
import SectionGG from "../components/sections/section-gg"

import ImportDetails from "../components/import-details"

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
        <Card title="Description: The Question Text would go here">
          <p>
            Current Value: <Tag color="#2db7f5">0. No</Tag>
          </p>
          <p>
            Completed By: <Tag color="#2db7f5">Robin Miller</Tag>
          </p>
        </Card>
        <Tabs defaultActiveKey="1" onChange={e => console.log(e)}>
          <TabPane tab={<span><Icon type="vertical-align-bottom" />Source Data</span>} key="1">
            <ImportDetails />
          </TabPane>
          <TabPane tab={<span><Icon type="dollar" />Financial Impact</span>} key="2">
            Content of Financial
          </TabPane>
          <TabPane tab={<span>(QM) Quality Measures</span>} key="3">
            Content of Quality Measures
          </TabPane>
          <TabPane tab={<span>(N) Clinical Impact</span>} key="4">
            Content of Clinical Impact
          </TabPane>
          <TabPane tab={<span><Icon type="file" />Notes</span>} key="5">
            Content of Notes
          </TabPane>
        </Tabs>
      </Drawer>
    </Layout>
  )
}

export default IndexPage
