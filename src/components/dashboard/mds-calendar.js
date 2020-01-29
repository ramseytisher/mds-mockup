import React, { useState } from "react"
import { Calendar, Button, Drawer, Result } from "antd"

export default ({ assessments }) => {
  const [showDetail, setShowDetail] = useState(false)
  const monthCellRender = value => {
    const results = assessments.filter(item => {
      const date = new Date(item.actionDate)
      const month = date.getMonth()

      return month === value.month()
    })

    if (results.length > 0) {
      return (
        <Button
          type="primary"
          shape="round"
          icon="rocket"
          onClick={() => setShowDetail(true)}
        >
          {results.length}
        </Button>
      )
    } else {
      return null
    }
  }

  const dateCellRender = value => {
    const results = assessments.filter(item => {
      const date = new Date(item.actionDate)
      const day = date.getDate()

      console.log("Day value: ", day === value.date())
      return day === value.date()
    })

    if (results.length > 0) {
      return (
        <Button
          type="primary"
          shape="round"
          icon="rocket"
          onClick={() => setShowDetail(true)}
        >
          {results.length}
        </Button>
      )
    } else {
      return null
    }
  }

  return (
    <>
      <Calendar
        monthCellRender={monthCellRender}
        dateCellRender={dateCellRender}
      />
      <Drawer
        visible={showDetail}
        onClose={() => setShowDetail(false)}
        placement="right"
        width="60vw"
      >
        <Result status="404" title="There area is under constrution" />
      </Drawer>
    </>
  )
}
