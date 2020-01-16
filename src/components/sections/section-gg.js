import React, { useContext } from "react"
import MdsField from "../../components/mds-field"
import { MdsContext } from "../../context/mds-context"

export default ({ showDetail }) => {
  const { mds, handleChange } = useContext(MdsContext)
  const {
    GG0130A1,
    GG0130A2,
    GG0130A3,
    GG0130B1,
    GG0130B2,
    GG0130B3,
    GG0130C1,
    GG0130C2,
    GG0130C3,
  } = mds

  return (
    <div style={{ padding: 10 }}>
      <MdsField
        field="GG0130A1"
        value={GG0130A1}
        setValue={value => handleChange("GG0130A1", value)}
        openModal={() => showDetail(true)}
        flags={[3]}
        divider="GG0130A. Eating"
      />
      <MdsField
        field="GG0130A2"
        value={GG0130A2}
        setValue={value => handleChange("GG0130A2", value)}
        openModal={() => showDetail(true)}
        flags={[3]}
      />
      <MdsField
        field="GG0130A3"
        value={GG0130A3}
        setValue={value => handleChange("GG0130A3", value)}
        openModal={() => showDetail(true)}
        flags={[3]}
        skip
      />
      <MdsField
        field="GG0130B1"
        value={GG0130B1}
        setValue={value => handleChange("GG0130B1", value)}
        openModal={() => showDetail(true)}
        flags={[3]}
        divider="GG0130B. Oral hygiene"
      />
      <MdsField
        field="GG0130B2"
        value={GG0130B2}
        setValue={value => handleChange("GG0130B2", value)}
        openModal={() => showDetail(true)}
        flags={[3]}
      />
      <MdsField
        field="GG0130B3"
        value={GG0130B3}
        setValue={value => handleChange("GG0130B3", value)}
        openModal={() => showDetail(true)}
        flags={[3]}
        skip
      />
      <MdsField
        field="GG0130C1"
        value={GG0130C1}
        setValue={value => handleChange("GG0130C1", value)}
        openModal={() => showDetail(true)}
        flags={[3]}
        divider="GG0130C. Toileting hygiene"
      />
      <MdsField
        field="GG0130C2"
        value={GG0130C2}
        setValue={value => handleChange("GG0130C2", value)}
        openModal={() => showDetail(true)}
        flags={[3]}
      />
      <MdsField
        field="GG0130C3"
        value={GG0130C3}
        setValue={value => handleChange("GG0130AC", value)}
        openModal={() => showDetail(true)}
        flags={[3]}
        skip
      />
    </div>
  )
}
