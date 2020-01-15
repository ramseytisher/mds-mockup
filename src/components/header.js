import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Login from "./login"

import { Row, Col, Button, Popconfirm, Typography, message, Icon } from "antd"
const { Title, Text } = Typography

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#fff`,
      margin: `0 auto`,
      maxWidth: 1280,
      padding: `1.05rem 1.0875rem`,
    }}
  >
    <Row type="flex" align="middle" justify="space-between">
      <Col>
        <Title>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
              color: "#5C6770",
            }}
          >
            <Icon type="highlight" theme="twoTone" />{" "}
            {siteTitle}
          </Link>
        </Title>
      </Col>
      <Col>
        <Link to="/assessment">
          <Button type="link" size="large">
            Assessment
          </Button>
        </Link>
        <Link to="/schedule">
          <Button type="link" size="large">
            Schedule
          </Button>
        </Link>
        <Login />
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
