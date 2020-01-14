import React from "react"

import { Table, Tag, Collapse, Empty } from "antd"
const { Panel } = Collapse

const columns = [
  {
    title: "DTA",
    dataIndex: "dta",
  },
  {
    title: "Data Response",
    dataIndex: "dataResponse",
  },
  {
    title: "User",
    dataIndex: "user",
  },
  {
    title: "Date/Time",
    dataIndex: "dateTime",
  },
]

export default ({ detail }) => {
  const {
    results,
    diagnosis,
    procedure,
    rehabOptimaTherapy,
    calculationDetail,
    registration
  } = detail

  if ( 
    !registration &&
    !calculationDetail &&
    results.length === 0 &&
    diagnosis.length === 0 &&
    procedure.length === 0 &&
    rehabOptimaTherapy.length === 0 &&
    results.length === 0
  ) {
    return <Empty />
  }

  return (
    <Collapse>
      {results.length > 0 && (
        <Panel header="PowerChart Results">
          <Table
            columns={columns}
            dataSource={results}
            size="small"
            pagination={false}
          />
        </Panel>
      )}

      {registration && (
        <Panel header="Millennium Registration">
          <pre>{JSON.stringify(registration, null, 2)}</pre>
        </Panel>
      )}

      {diagnosis.length > 0 && (
        <Panel header="PowerChart Diagnosis">
          {diagnosis.map(item => (
            <Tag color="#5C6770">{item}</Tag>
          ))}
        </Panel>
      )}

      {procedure.length > 0 && (
        <Panel header="PowerChart Procedures">
          {procedure.map(item => (
            <Tag color="#5C6770">{item}</Tag>
          ))}
        </Panel>
      )}

      {rehabOptimaTherapy.length > 0 && (
        <Panel header="Rehab Optima Therapy">
          <pre>{JSON.stringify(rehabOptimaTherapy, null, 2)}</pre>
        </Panel>
      )}

      {calculationDetail && (
        <Panel header="Calculation Detail">
          <p>{calculationDetail}</p>
        </Panel>
      )}
    </Collapse>
  )
}
