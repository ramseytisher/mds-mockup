import React from "react"

import Layout from "../components/layout"
import ImportReview from "../components/import-review"

import { Typography } from "antd"

const { Title, Text } = Typography

const IndexPage = () => {
  return (
    <Layout>
      <div
        style={{
          margin: `0 auto`,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          maxWidth: 520,
          textAlign: 'right'
        }}
      >
        <Title>What this is</Title>
        <Text>Our team has developed this working prototype to obtain rapid feedback from clients earlier in the design phase. It will help facilitate conversations about future features/workflows, as well as provide us a place to try new things. </Text>
      </div>
    </Layout>
  )
}

export default IndexPage
