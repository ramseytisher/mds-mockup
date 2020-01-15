import React from "react"

import Layout from "../components/layout"
import ImportReview from "../components/import-review"

import { Typography, Result, Button } from "antd"

export default () => (
  <Layout>
    <div
      style={{
        margin: `0 auto`,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
        maxWidth: 520,
        textAlign: "right",
      }}
    >
      <Result
        status="404"
        title="Future development"
        subTitle="Haven't got to this yet but we'll be spending time on it in the future ... "
      />
    </div>
  </Layout>
)
