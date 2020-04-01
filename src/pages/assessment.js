import React, { useContext } from "react"

import Layout from "../components/layout"
import ImportReview from "../components/import-review"

import { MdsContext } from "../context/mds-context"

import SectionList from "../components/assessment/section-list"
import Intelligence from "../components/assessment/intelligence"

import SectionA from "../components/sections/section-a"
import SectionC from "../components/sections/section-c"
import SectionI from "../components/sections/section-i"
import SectionK from "../components/sections/section-k"
import SectionGG from "../components/sections/section-gg"
import ReportCard from "../components/report-card"

import { PageHeader, Button, Popconfirm, message, Row, Col, Input } from "antd"
const { Search } = Input

export default () => {
  const { searchValue, setSearchValue } = useContext(MdsContext)

  return (
    <Layout>
      <Row type="flex" justify="space-between" style={{ padding: "1rem" }}>
        <Col>
          <Button style={{ margin: 2 }} icon="vertical-align-middle" />
          <Button style={{ margin: 2 }} icon="calculator" />
          <Button style={{ margin: 2 }} icon="printer" />
          <Button style={{ margin: 2 }} icon="flag" />
          <Button style={{ margin: 2 }} icon="question-circle" />
          <Button style={{ margin: 2 }} icon="book" />
          <ReportCard />
          <ImportReview section={null}/>
        </Col>
        <Col>
          <Search
            placeholder="search by field/description ..."
            style={{
              width: "30vw",
              boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.3)",
            }}
            size="large"
            onSearch={value => setSearchValue(value)}
            allowClear
          />
        </Col>
      </Row>
      <Row type="flex">
        <Col span={4}>
          <div
            style={{
              margin: `0 auto`,
              padding: `0px 1rem 1.5rem`,
            }}
          >
            <SectionList />
          </div>
        </Col>
        <Col span={18}>
          <div
            style={{
              margin: `0 auto`,
              padding: `0px 1.875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <PageHeader
              title="Section A"
              subTitle="Identification Information"
              style={{
                padding: "6px",
              }}
              extra={[
                <ImportReview section="A" />,
                <Button icon="login" />,
                <Button icon="like" />,
                <Button icon="book" />,
              ]}
            />
            <SectionA />
            <PageHeader
              title="Section C"
              subTitle="Cognitive Patterns"
              style={{
                padding: "6px",
              }}
              extra={[
                <ImportReview section="C" />,
                <Button icon="login" />,
                <Button icon="like" />,
                <Button icon="book" />,
              ]}
            />
            <SectionC />
            <PageHeader
              title="Section GG"
              subTitle="Functional Abilities and Goals"
              style={{
                padding: "6px",
              }}
              extra={[
                <ImportReview />,
                <Button icon="login" />,
                <Button icon="like" />,
                <Button icon="book" />,
              ]}
            />
            <SectionGG />
            <PageHeader
              title="Section I"
              subTitle="Active Diagnosis"
              style={{
                padding: "6px",
              }}
              extra={[
                <ImportReview />,
                <Button icon="login" />,
                <Button icon="like" />,
                <Button icon="book" />,
              ]}
            />
            <SectionI />
            <PageHeader
              title="Section K"
              subTitle="Swallowing/Nutritional Status"
              style={{
                padding: "6px",
              }}
              extra={[
                <ImportReview />,
                <Button icon="login" />,
                <Button icon="like" />,
                <Button icon="book" />,
              ]}
            />
            <SectionK />
          </div>
        </Col>
        <Col span={2}>
          <Intelligence />
        </Col>
      </Row>
    </Layout>
  )
}
