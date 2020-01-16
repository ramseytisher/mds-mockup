import React, { useContext } from "react"
import MdsField from "../../components/mds-field"
import { MdsContext } from "../../context/mds-context"

export default ({ showDetail }) => {
  const { mds, handleChange } = useContext(MdsContext)
  const { I0020, I0020B, I0100, I0200, I0300, I0400, I8000A } = mds

  return (
    <>
      <MdsField
        field="I0020"
        value={I0020}
        setValue={value => handleChange("I0020", value)}
        openModal={() => showDetail(true)}
        divider="Indicate the resident's primary medical condition category"
      />
      <MdsField
        field="I0020B"
        value={I0020B}
        type="search"
        setValue={value => handleChange("I0020B", value)}
        openModal={() => showDetail(true)}
      />
      <MdsField
        field="I0100"
        value={I0100}
        setValue={value => handleChange("I0100", value)}
        openModal={() => showDetail(true)}
        divider="Active Diagnoses in last 7 days"
      />
      <MdsField
        field="I0200"
        value={I0200}
        setValue={value => handleChange("I0200", value)}
        openModal={() => showDetail(true)}
        loading
      />
      <MdsField
        field="I0300"
        value={I0300}
        setValue={value => handleChange("I0300", value)}
        openModal={() => showDetail(true)}
        loading
      />
      <MdsField
        field="I0400"
        value={I0400}
        setValue={value => handleChange("I0400", value)}
        openModal={() => showDetail(true)}
      />
      <MdsField
        field="I8000A"
        value={I8000A}
        type="search"
        setValue={value => handleChange("I8000A", value)}
        openModal={() => showDetail(true)}
      />
    </>
  )
}
