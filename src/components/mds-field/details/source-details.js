import React from "react"

import { Table, Tag, Collapse, Empty } from "antd"

import ReactMarkdown from 'react-markdown'

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
    <Collapse defaultActiveKey={['1', '6']}>
      {results.length > 0 && (
        <Panel header="PowerChart Results" key={1}>
          <Table
            columns={columns}
            dataSource={results}
            size="small"
            pagination={false}
          />
        </Panel>
      )}

      {registration && (
        <Panel header="Millennium Registration" key={2}>
          <pre>{JSON.stringify(registration, null, 2)}</pre>
        </Panel>
      )}

      {diagnosis.length > 0 && (
        <Panel header="PowerChart Diagnosis" key={3}>
          {diagnosis.map(item => (
            <Tag color="#5C6770">{item}</Tag>
          ))}
        </Panel>
      )}

      {procedure.length > 0 && (
        <Panel header="PowerChart Procedures" key={4}>
          {procedure.map(item => (
            <Tag color="#5C6770">{item}</Tag>
          ))}
        </Panel>
      )}

      {rehabOptimaTherapy.length > 0 && (
        <Panel header="Rehab Optima Therapy" key={5}>
          <pre>{JSON.stringify(rehabOptimaTherapy, null, 2)}</pre>
        </Panel>
      )}

      {/* react-markdown: https://github.com/rexxars/react-markdown */}
      {calculationDetail && (
        <Panel header="Calculation Detail" key={6}>
          <ReactMarkdown source={calculationDetail} />
        </Panel>
      )}
    </Collapse>
  )
}
