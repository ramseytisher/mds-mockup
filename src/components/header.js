import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ImportReview from "./import-review"

import { Row, Col } from "antd"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#5C6770`,
      marginBottom: `1.45rem`,
    }}
  >
    <Row type="flex" align="middle">
      <Col span="20">
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
        </div>
      </Col>
      <Col span="4">
        <ImportReview />
      </Col>
    </Row>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
