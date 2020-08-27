import React, { useState } from "react"

import { Card, Statistic, Modal, Table } from "antd"
import { CheckCircleOutlined } from "@ant-design/icons"

export default () => {
  const [showDetail, setShowDetail] = useState(false)

  const data = [
    {
      id: 1,
      name: "Virgil Tisher",
      type: "NQ",
      targetWindow: "8/26/2020 - 8/30/2020",
    },
    {
      id: 2,
      name: "Bryce Dalton",
      type: "NQ",
      targetWindow: "8/26/2020 - 8/30/2020",
    },
    {
      id: 3,
      name: "Steve Fraley",
      type: "NQ",
      targetWindow: "8/26/2020 - 8/30/2020",
    },
  ]
  const columns = [
      {
          title: "Resident Name",
          key: 'name',
          dataIndex: 'name',
      },
  ]
  return (
    <>
        <Modal
            title="Past Due for Submission"
            visible={showDetail}
            onOk={() => setShowDetail(false)}
            onCancel={() => setShowDetail(false)}
        >
            <Table 
                size="small"
                columns={columns}
                dataSource={data}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: event => {
                            alert('Open this assessment!')
                        }
                    }
                }}
            />
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </Modal>
      <Card
        hoverable
        size="small"
        onClick={() => setShowDetail(true)}
      >
        <Statistic
          title={`Past Due for Submission`}
          value={data.length}
        />
      </Card>
    </>
  )
}
