import React, { useState, useContext } from "react"
import MdsField from "../../components/mds-field"
import { MdsContext } from "../../context/mds-context"
import ImportDetails from "../../components/import-details"
import { Drawer, Tabs, Divider, Typography, Card, Tag } from "antd"

const { Title } = Typography
const { TabPane } = Tabs

export default ({ showDetail }) => {
  const { mds, handleChange } = useContext(MdsContext)
  const {
    A2300,
  } = mds

  return (
    <>
      <MdsField
        field="A2300"
        date
        value={A2300}
        setValue={value => handleChange("A2300", value)}
        openModal={() => showDetail(true)}
        flags={[3]}
      />
    </>
  )
}
