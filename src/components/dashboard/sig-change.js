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
  PageHeader,
  Modal
} from "antd"

const initialAlerts = [
  {
    key: "1",
    resident: "Smith, John",
    difference: 4,
    found: "1/22/2020",
  },
  {
    key: "2",
    resident: "Jones, Michael",
    difference: 2,
    found: "1/21/2020",
  },
  {
    key: "3",
    resident: "Doe, Jane",
    difference: 3,
    found: "1/20/2020",
  },
]

export default () => {
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
      <PageHeader title="Suggested Significant Change Assessments" />
      <Result type="404" title="Under Construction" subTitle="Most likely will be similiar to IPA" />
      {/* <Table size="small" columns={columns} dataSource={alerts} />
      <Modal
        title="Suggested IPA Details"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>something awesome would be said here .. </p>
      </Modal> */}
    </>
  )
}
