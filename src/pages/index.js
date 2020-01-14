import React from "react"

import Layout from "../components/layout"
import ImportReview from "../components/import-review"

import SectionA from "../components/sections/section-a"
import SectionC from "../components/sections/section-c"
import SectionI from "../components/sections/section-i"
import SectionK from "../components/sections/section-k"
import SectionGG from "../components/sections/section-gg"


import {
  PageHeader,
  Button,
} from "antd"

const IndexPage = () => {

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
          border: "1px solid rgb(235, 237, 240)",
          background: "lightblue",
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
      <SectionGG />
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
      <SectionI />
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
      <SectionK />
    </Layout>
  )
}

export default IndexPage
