import React, { useState, useContext } from "react"
import MdsField from "../../components/mds-field"
import { MdsContext } from "../../context/mds-context"
import ImportDetails from "../../components/import-details"
import { Drawer, Tabs, Divider, Typography, Card, Tag } from "antd"

const { Title } = Typography
const { TabPane } = Tabs

export default ({ showDetail }) => {
  const { mds, handleChange } = useContext(MdsContext)
  const { I0020, I0020B, I0100, I0200, I0300, I0400 } = mds

  return (
    <>
    <MdsField
        field="I0020"
        value={I0020}
        setValue={value => handleChange("I0020", value)}
        openModal={() => showDetail(true)}
        flags={[3]}
      />
      <MdsField
        field="I0020B"
        value={I0020B}
        setValue={value => handleChange("I0020B", value)}
        openModal={() => showDetail(true)}
        flags={[1,2,3]}
      />
      <MdsField
        field="I0100"
        value={I0100}
        setValue={value => handleChange("I0100", value)}
        openModal={() => showDetail(true)}
        flags={[1, 2, 3, 4, 5]}
      />
      <MdsField
        field="I0200"
        value={I0200}
        setValue={value => handleChange("I0200", value)}
        openModal={() => showDetail(true)}
        flags={[1, 2, 3, 4]}
        loading
      />
      <MdsField
        field="I0300"
        value={I0300}
        setValue={value => handleChange("I0300", value)}
        openModal={() => showDetail(true)}
        flags={[1, 2, 3, 4, 5]}
        loading
      />
      <MdsField
        field="I0400"
        value={I0400}
        setValue={value => handleChange("I0400", value)}
        openModal={() => showDetail(true)}
        flags={[1, 2, 3, 4]}
        flag
      />
    </>
  )
}
