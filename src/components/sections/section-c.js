import React, { useContext } from "react"
import MdsField from "../../components/mds-field"
import { MdsContext } from "../../context/mds-context"

export default ({ showDetail }) => {
  const { mds, handleChange } = useContext(MdsContext)
  const {
    C0100,
    C0200,
    C0300A,
    C0300B,
    C0300C,
    C0400A,
    C0400B,
    C0400C,
    C0500,
    C0600,
    C0700,
    C0800,
    C0900A,
    C0900B,
    C0900C,
    C0900D,
    C0900Z,
    C1000,
    C1310A,
    C1310B,
    C1310C,
    C1310D,
  } = mds

  return (
    <>
      <MdsField
        field="C0100"
        valueFrom="import"
        value={C0100}
        setValue={value => handleChange("C0100", value)}
        openModal={() => showDetail(true)}
        divider="C0100. Should Brief Interview for Mental Status (C0200 - C0500) be Conducted?"
      />
      <MdsField
        field="C0200"
        valueFrom="import"
        value={C0200}
        setValue={value => handleChange("C0200", value)}
        openModal={() => showDetail(true)}
        loading
        divider="C0200. Repetition of Three Words"
      />
      <MdsField
        field="C0300A"
        value={C0300A}
        valueFrom="import"
        setValue={value => handleChange("C0300A", value)}
        openModal={() => showDetail(true)}
        divider="C0300. Temporal Orientation (orientation to year, month, and day)"
      />
      <MdsField
        field="C0300B"
        value={C0300B}
        setValue={value => handleChange("C0300B", value)}
        openModal={() => showDetail(true)}
      />
      <MdsField
        field="C0300C"
        value={C0300C}
        valueFrom="import"
        setValue={value => handleChange("C0300C", value)}
        openModal={() => showDetail(true)}
      />
      <MdsField
        field="C0400A"
        value={C0400A}
        setValue={value => handleChange("C0400A", value)}
        openModal={() => showDetail(true)}
        divider="C0400. Recall"
      />
      <MdsField
        field="C0400B"
        value={C0400B}
        setValue={value => handleChange("C0400B", value)}
        openModal={() => showDetail(true)}
      />
      <MdsField
        field="C0400C"
        value={C0400C}
        setValue={value => handleChange("C0400C", value)}
        openModal={() => showDetail(true)}
      />
      <MdsField
        field="C0500"
        value={C0500}
        setValue={value => handleChange("C0500", value)}
        openModal={() => showDetail(true)}
      />
      <MdsField
        field="C0600"
        value={C0600}
        setValue={value => handleChange("C0600", value)}
        openModal={() => showDetail(true)}
      />
      <MdsField
        field="C0700"
        value={C0700}
        setValue={value => handleChange("C0700", value)}
        openModal={() => showDetail(true)}
        divider="Staff Assessment for Mental Status"
      />
      <MdsField
        field="C0800"
        value={C0800}
        setValue={value => handleChange("C0800", value)}
        openModal={() => showDetail(true)}
      />
      <MdsField
        field="C0900A"
        value={C0900A}
        setValue={value => handleChange("C0900A", value)}
        openModal={() => showDetail(true)}
      />
      <MdsField
        field="C0900B"
        value={C0900B}
        setValue={value => handleChange("C0900B", value)}
        openModal={() => showDetail(true)}
      />
      <MdsField
        field="C0900C"
        value={C0900C}
        setValue={value => handleChange("C0900C", value)}
        openModal={() => showDetail(true)}
      />
      <MdsField
        field="C0900D"
        value={C0900D}
        setValue={value => handleChange("C0900D", value)}
        openModal={() => showDetail(true)}
      />
      <MdsField
        field="C0900Z"
        value={C0900Z}
        setValue={value => handleChange("C0900Z", value)}
        openModal={() => showDetail(true)}
      />
      <MdsField
        field="C1000"
        value={C1000}
        setValue={value => handleChange("C1000", value)}
        openModal={() => showDetail(true)}
      />
      <MdsField
        field="C1310A"
        value={C1310A}
        setValue={value => handleChange("C1310A", value)}
        openModal={() => showDetail(true)}
        divider="Delirium"
      />
      <MdsField
        field="C1310B"
        value={C1310B}
        setValue={value => handleChange("C1310B", value)}
        openModal={() => showDetail(true)}
      />
      <MdsField
        field="C1310C"
        value={C1310C}
        setValue={value => handleChange("C1310C", value)}
        openModal={() => showDetail(true)}
      />
      <MdsField
        field="C1310D"
        value={C1310D}
        setValue={value => handleChange("C1310D", value)}
        openModal={() => showDetail(true)}
      />
    </>
  )
}
