import { Link } from "gatsby"
import React from "react"

import Login from "./login"

import { Row, Col, Button, Popconfirm, Typography, message, Icon } from "antd"
const { Title, Text } = Typography

const Header = () => (
  <header
    style={{
      background: `#fff`,
      margin: `0 auto`,
      padding: `.5rem 1.0875rem`,
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
            MDS Mockup
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
          <Button type="link" size="large" disabled>
            Schedule
          </Button>
        </Link>
        <Login />
      </Col>
    </Row>
  </header>
)

export default Header
