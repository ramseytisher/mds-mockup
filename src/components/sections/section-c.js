import React, { useState, useContext } from "react"
import MdsField from "../../components/mds-field"
import { MdsContext } from "../../context/mds-context"
import ImportDetails from "../../components/import-details"
import { Drawer, Tabs, Divider, Typography, Card, Tag } from "antd"

const { Title } = Typography
const { TabPane } = Tabs

export default ({ showDetail }) => {
  const { mds, handleChange } = useContext(MdsContext)
  const { C0100, C0200, C0300A, C0300B, C0300C, C0400A, C0400B, C0400C, C0500 } = mds

  return (
    <>
      <MdsField
        field="C0100"
        value={C0100}
        setValue={value => handleChange("C0100", value)}
        openModal={() => showDetail(true)}
        flags={[3]}
      />
      <MdsField
        field="C0200"
        value={C0200}
        setValue={value => handleChange("C0200", value)}
        openModal={() => showDetail(true)}
        flags={[1, 2, 3, 4]}
        loading
      />
      <MdsField
        field="C0300A"
        value={C0300A}
        setValue={value => handleChange("C0300A", value)}
        openModal={() => showDetail(true)}
        flags={[1, 2, 3, 4, 5]}
        loading
      />
      <MdsField
        field="C0300B"
        value={C0300B}
        setValue={value => handleChange("C0300B", value)}
        openModal={() => showDetail(true)}
        flags={[1, 2, 3, 4]}
        flag
      />
      <MdsField
        field="C0300C"
        value={C0300C}
        setValue={value => handleChange("C0300C", value)}
        openModal={() => showDetail(true)}
        flags={[1, 2, 3, 4]}
      />
      <MdsField
        field="C0400A"
        value={C0400A}
        setValue={value => handleChange("C0400A", value)}
        openModal={() => showDetail(true)}
        flags={[1, 2, 3, 4]}
      />
      <MdsField
        field="C0400B"
        value={C0400B}
        setValue={value => handleChange("C0400B", value)}
        openModal={() => showDetail(true)}
        flags={[1, 2, 3, 4]}
      />
      <MdsField
        field="C0400C"
        value={C0400C}
        setValue={value => handleChange("C0400C", value)}
        openModal={() => showDetail(true)}
        flags={[1, 2, 3, 4]}
      />
      <MdsField
        field="C0500"
        value={C0500}
        setValue={value => handleChange("C0500", value)}
        openModal={() => showDetail(true)}
        flags={[2, 3, 4]}
      />
    </>
  )
}
