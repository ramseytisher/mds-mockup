import React, { useState, useContext } from "react"
import MdsField from "../../components/mds-field"
import { MdsContext } from "../../context/mds-context"
import ImportDetails from "../../components/import-details"
import { Drawer, Timeline, Tabs, Divider, Typography, Card, Tag } from "antd"

const { Title, Text } = Typography
const { TabPane } = Tabs

export default ({ showDetail }) => {
  const { mds, handleChange } = useContext(MdsContext)
  const { A2300, A0310A, A0310B, A0310E, A0310F } = mds

  return (
    <>
      <MdsField
        field="A2300"
        type="date"
        value={A2300}
        setValue={value => handleChange("A2300", value)}
        openModal={() => showDetail(true)}
        flags={[3]}
      />
      <Timeline>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          A0310. Type of Assessment
        </Text>
        <Timeline.Item>
          <MdsField
            field="A0310A"
            value={A0310A}
            setValue={value => handleChange("A0310A", value)}
            openModal={() => showDetail(true)}
            flags={[3]}
          />
        </Timeline.Item>
        <Timeline.Item>
          <MdsField
            field="A0310B"
            value={A0310B}
            setValue={value => handleChange("A0310B", value)}
            openModal={() => showDetail(true)}
            flags={[3]}
          />
        </Timeline.Item>
        <Timeline.Item>
          <MdsField
            field="A0310E"
            value={A0310E}
            setValue={value => handleChange("A0310E", value)}
            openModal={() => showDetail(true)}
            flags={[3]}
            skip
          />
        </Timeline.Item>
        <Timeline.Item>
          <MdsField
            field="A0310F"
            value={A0310F}
            setValue={value => handleChange("A0310F", value)}
            openModal={() => showDetail(true)}
            flags={[3]}
          />
        </Timeline.Item>
      </Timeline>
    </>
  )
}
