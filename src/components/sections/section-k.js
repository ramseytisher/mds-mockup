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
    K0100A,
    K0100B,
    K0100C,
    K0100D,
    K0100Z,
    K0200A,
    K0200B,
    K0300,
    K0310,
    K0510A1,
    K0510A2,
  } = mds

  return (
    <>
      <MdsField
        field="K0100A"
        value={K0100A}
        setValue={value => handleChange("K0100A", value)}
        openModal={() => showDetail(true)}
        flags={[3]}
      />
      <MdsField
        field="K0100B"
        value={K0100B}
        setValue={value => handleChange("K0100B", value)}
        openModal={() => showDetail(true)}
        flags={[1, 2, 3]}
      />
      <MdsField
        field="K0100C"
        value={K0100C}
        setValue={value => handleChange("K0100C", value)}
        openModal={() => showDetail(true)}
        flags={[1, 2, 3, 4, 5]}
      />
      <MdsField
        field="K0100D"
        value={K0100D}
        setValue={value => handleChange("K0100D", value)}
        openModal={() => showDetail(true)}
        flags={[1, 2, 3, 4]}
        loading
      />
      <MdsField
        field="K0100Z"
        value={K0100Z}
        setValue={value => handleChange("K0100Z", value)}
        openModal={() => showDetail(true)}
        flags={[1, 2, 3, 4, 5]}
        loading
      />
      <MdsField
        field="K0200A"
        value={K0200A}
        setValue={value => handleChange("K0200A", value)}
        openModal={() => showDetail(true)}
        flags={[1, 2, 3, 4]}
        flag
      />
      <MdsField
        field="K0200B"
        value={K0200B}
        setValue={value => handleChange("K0200B", value)}
        openModal={() => showDetail(true)}
        flags={[1, 2, 3, 4]}
        flag
      /><MdsField
        field="K0300"
        value={K0300}
        setValue={value => handleChange("K0300", value)}
        openModal={() => showDetail(true)}
        flags={[1, 2, 3, 4]}
        flag
      /><MdsField
        field="K0310"
        value={K0310}
        setValue={value => handleChange("K0310", value)}
        openModal={() => showDetail(true)}
        flags={[1, 2, 3, 4]}
        flag
      /><MdsField
        field="K0510A1"
        value={K0510A1}
        setValue={value => handleChange("K0510A1", value)}
        openModal={() => showDetail(true)}
        flags={[1, 2, 3, 4]}
        flag
      />
    </>
  )
}
