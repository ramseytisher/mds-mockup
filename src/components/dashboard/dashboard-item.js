import React, { useState } from "react"
import { Progress, Modal, Button, Col, Result } from "antd"

export default ({ label, value, details }) => {
  const [showDetail, setShowDetail] = useState(false)

  return (
    <Col>
      <Progress
        type="dashboard"
        onClick={() => setShowDetail(true)}
        percent={value}
        width={90}
        format={percent => `${percent}`}
        style={{ cursor: 'pointer' }}
      /><br/>
      <p style={{ margin: 'auto', textAlign: 'center'}}>{label}</p>
      <Modal
        visible={showDetail}
        onOk={() => setShowDetail(false)}
        onCancel={() => setShowDetail(false)}
        width="70vw"
      >
        {details ? details : <Result status="404" title="There area is under constrution" />}
      </Modal>
    </Col>
  )
}
