import React from "react"

import Layout from "../components/layout"
import ImportReview from "../components/import-review"

import SectionA from "../components/sections/section-a"
import SectionC from "../components/sections/section-c"
import SectionI from "../components/sections/section-i"
import SectionK from "../components/sections/section-k"
import SectionGG from "../components/sections/section-gg"

import { PageHeader, Button, Popconfirm, message } from "antd"

export default () => (
  <Layout>
    <PageHeader
      style={{
        border: "1px solid rgb(235, 237, 240)",
        background: "#8F8D8C",
        padding: "6px",
      }}
      extra={[
        <Popconfirm
          title="This will overwrite all values with imported data. Are you sure you want to proceed?"
          onConfirm={() =>
            message.success("You imported 45ish items to this MDS")
          }
          onCancel={() =>
            message.error("Action Canceled: No items were imported to this MDS")
          }
        >
          <Button>Import All</Button>
        </Popconfirm>,
      ]}
    />
    <div
      style={{
        margin: `0 auto`,
        padding: `0px 1.0875rem 1.45rem`,
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
  </Layout>
)
