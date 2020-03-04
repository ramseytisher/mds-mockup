import React, { useState, useEffect } from "react"
import _ from "lodash"
import { mockAlerts } from "../../data/mock-alerts"
import AlertTag from "../dashboard/alert-tag"

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
  Modal,
  Progress,
  Tooltip,
  Popconfirm,
  message
} from "antd"

const { Panel } = Collapse

export default () => {
  const [slider, setSlider] = useState(25)
  const [alerts, setAlerts] = useState(mockAlerts)
  const [detail, setDetail] = useState(null)
  const [hidden, setHidden] = useState([])
  const [visible, setVisible] = useState(false)

  const columns = [
    {
      title: "Resident",
      dataIndex: "resident",
      key: "resident",
    },
    {
      title: "Last Alert",
      key: "found",
      dataIndex: "found",
    },
    // {
    //   title: "Difference",
    //   key: "difference",
    //   dataIndex: "difference",
    //   sorter: (a, b) => a.difference - b.difference,
    //   sortDirection: ["descend"],
    // },
    // {
    //   title: "Actions",
    //   key: "actions",
    //   render: item => {
    //     return (
    //       <span>
    //         <Button
    //           type="link"
    //           onClick={() => setHidden({ ...hidden, [item.key]: item })}
    //         >
    //           Ignore
    //         </Button>
    //         <Button type="primary" onClick={() => setVisible(true)}>Create</Button>
    //       </span>
    //     )
    //   },
    // },
  ]

  const detailColumns = [
    {
      title: "Suggested Date",
      key: "found",
      dataIndex: "found",
    },
    {
      title: "Alerts",
      width: "50%",
      key: "alerts",
      render: item => {
        const tags = item.alerts
        return tags.map(tag => <AlertTag text={tag} />)
      },
    },
    {
      title: "Data Percentage",
      key: "percent",
      render: item => {
        return (
          <Tooltip title="Amount of PDPM items where clinical data was identified">
            <Progress percent={item.percent} />
          </Tooltip>
        )
      },
    },
    {
      title: "Actions",
      render: (text, record) => (
        <Popconfirm
          title={`Are you sure you want to start an IPA assessment for ${record.found}?`}
          okText="Yes"
          cancelText="No"
          onConfirm={record => {
            setDetail(null)
            message.success('This would open the IPA Assessment with ARD set')}
          }
        >
          <Button>Start Assessment</Button>
        </Popconfirm>
      ),
    },
  ]

  useEffect(() => {
    // const filtered = alerts.filter(alert => {
    //   return !hidden[alert.key]
    // })
    // setAlerts(filtered)
  }, [hidden])

  return (
    <>
      <PageHeader title="Suggested Interim Payment Assessments" />
      {/* <Slider
        toolTipVisible
        value={slider}
        onChange={value => setSlider(value)}
      /> */}
      <Table
        size="small"
        showHeader={false}
        columns={columns}
        dataSource={_.uniqBy(alerts, "resident")}
        onRow={(record, rowIndex) => {
          return {
            onClick: event => {
              setDetail(record.resident)
            },
          }
        }}
      />
      <Modal
        title={`Suggested IPA Details For: ${detail}`}
        width="90vw"
        visible={detail !== null}
        onOk={() => setDetail(null)}
        onCancel={() => setDetail(null)}
      >
        <Table
          size="small"
          columns={detailColumns}
          dataSource={alerts.filter(alert => {
            return alert.resident === detail
          })}
        />
      </Modal>
    </>
  )
}
