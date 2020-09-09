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
  message,
  Alert,
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
      title: "Indicators Found",
      dataIndex: "sigChangeAlerts",
      render: item => <span>{item.length}</span>,
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
      title: "Review Date",
      key: "found",
      dataIndex: "found",
    },
    {
      title: "Alerts",
      width: "50%",
      key: "sigChangeAlerts",
      render: item => {
        const tags = item.sigChangeAlerts
        return tags.map(tag => <AlertTag text={tag} />)
      },
    },
    // {
    //   title: "Data Percentage",
    //   key: "percent",
    //   render: item => {
    //     return (
    //       <Tooltip title="Amount of PDPM items where clinical data was identified">
    //         <Progress percent={item.percent} />
    //       </Tooltip>
    //     )
    //   },
    // },
    {
      title: "Actions",
      render: (text, record) => (
        <Popconfirm
          title={`Are you sure you want to start an Significant Change assessment for ${record.found}?`}
          okText="Yes"
          cancelText="No"
          onConfirm={record => {
            setDetail(null)
            message.success("This would open the Significant Change Assessment with ARD set")
          }}
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
      <PageHeader title="Significant Change Assessment Review" />
      {/* <Slider
        toolTipVisible
        value={slider}
        onChange={value => setSlider(value)}
      /> */}
      <Table
        size="small"
        showHeader={true}
        columns={columns}
        dataSource={_.uniqBy(alerts.filter(({sigChangeAlerts}) => { return sigChangeAlerts.length >= 2 }), "resident")}
        onRow={(record, rowIndex) => {
          return {
            onClick: event => {
              setDetail(record.resident)
            },
          }
        }}
      />
      <Modal
        title={`Review Significant Change Details For: ${detail}`}
        width="90vw"
        visible={detail !== null}
        onOk={() => setDetail(null)}
        onCancel={() => setDetail(null)}
      >
        <>
          <Alert
            description={`The final decision regarding what constitutes a significant change in status must be based upon
                the judgment of the IDT. MDS assessments are not required for minor or temporary variations in
                resident status - in these cases, the resident’s condition is expected to return to baseline within 2
                weeks`}
            type="info"
            showIcon
            style={{ margin: 10 }}
          />
          <Table
            size="small"
            columns={detailColumns}
            dataSource={alerts.filter(alert => {
              return alert.resident === detail
            })}
          />
        </>
      </Modal>
    </>
  )
}
