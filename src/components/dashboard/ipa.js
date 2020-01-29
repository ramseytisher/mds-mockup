import React, { useState, useEffect } from "react"

import {
  Typography,
  Result,
  Button,
  Row,
  Col,
  Statistic,
  Card,
  Icon,
  Table,
  Slider,
  Collapse,
  PageHeader,
  Modal
} from "antd"

const { Panel } = Collapse

const initialAlerts = [
  {
    key: "1",
    resident: "Smith, John",
    difference: 35,
    found: "1/22/2020",
  },
  {
    key: "2",
    resident: "Smith, John",
    difference: 25,
    found: "1/20/2020",
  },
  {
    key: "3",
    resident: "Smith, John",
    difference: 85,
    found: "1/22/2020",
  },
  {
    key: "4",
    resident: "Smith, John",
    difference: 75,
    found: "1/21/2020",
  },
  {
    key: "5",
    resident: "Smith, John",
    difference: 5,
    found: "1/21/2020",
  },
]

export default () => {
  const [slider, setSlider] = useState(25)
  const [alerts, setAlerts] = useState(initialAlerts)
  const [hidden, setHidden] = useState([])
  const [visible, setVisible] = useState(false)

  const columns = [
    {
      title: "Resident",
      dataIndex: "resident",
      key: "resident",
    },
    {
      title: "Found",
      key: "found",
      dataIndex: "found",
    },
    {
      title: "Difference",
      key: "difference",
      dataIndex: "difference",
      sorter: (a, b) => a.difference - b.difference,
      sortDirection: ["descend"],
    },
    {
      title: "Actions",
      key: "actions",
      render: item => {
        return (
          <span>
            <Button
              type="link"
              onClick={() => setHidden({ ...hidden, [item.key]: item })}
            >
              Ignore
            </Button>
            <Button type="primary" onClick={() => setVisible(true)}>Create</Button>
          </span>
        )
      },
    },
  ]

  useEffect(() => {
    const filtered = alerts.filter(alert => {
      return !hidden[alert.key]
    })
    setAlerts(filtered)
  }, [hidden])

  return (
    <>
      <PageHeader title="Suggested Interim Payment Assessments" />
      <Slider
        toolTipVisible
        value={slider}
        onChange={value => setSlider(value)}
      />
      <Table
        size="small"
        columns={columns}
        dataSource={alerts.filter(item => {
          return item.difference < slider
        })}
      />
      <Modal
        title="Suggested IPA Details"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>something awesome would be said here  .. </p>
      </Modal>
    </>
  )
}
