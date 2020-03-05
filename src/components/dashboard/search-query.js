import React, { useState } from "react"
import _ from "lodash"

// import {
//   VictoryChart,
//   VictoryBar,
//   VictoryGroup,
//   VictoryLegend,
//   VictoryTheme,
// } from "victory"
import {
  Card,
  Progress,
  Button,
  Row,
  Col,
  Modal,
  Select,
  message,
  Checkbox,
} from "antd"
const { Option } = Select

const initialData = [
  {
    query: "Psychotropic Drug Used Last 7 Days & Fall In Last Month",
    assessments: 1,
    residents: 1,
    selected: false,
  },
  {
    query: "Psychotropic Drug Use & No Gradual Dose Reduction",
    assessments: 2,
    residents: 1,
    selected: true,
  },
  {
    query: "Psychotropic Drug Use & No Supportive Diagnosis",
    assessments: 1,
    residents: 1,
    selected: false,
  },
  {
    query: "Indwelling Catheter & No Supportive Diagnosis",
    assessments: 4,
    residents: 4,
    selected: false,
  },
  {
    query: "Indwelling Catheter & UTI",
    assessments: 2,
    residents: 1,
    selected: true,
  },
]

export default () => {
  const [byResident, setByResident] = useState(false)
  const [addQuery, setAddQuery] = useState(false)
  const [data, setData] = useState(initialData)

  const maxAssessments = _.maxBy(data, "assessments")
  const maxResidents = _.maxBy(data, "residents")

  function handleChange(event, item) {
    const newData = data.map(d => {
      return d.query === item.query
        ? { ...d, selected: event.target.checked }
        : d
    })
    setData(newData)
  }

  return (
    <Card
      title={`MDS Search Queries By ${byResident ? "Resident" : "Assessment"}`}
      style={{ padding: 10 }}
      extra={
        <>
          <Modal
            title="Add MDS Search Query"
            visible={addQuery}
            onOk={() => setAddQuery(false)}
            onCancel={() => setAddQuery(false)}
          >
            <>
              {data.map(item => (
                <Checkbox
                  checked={item.selected}
                  onChange={event => handleChange(event, item)}
                >
                  {item.query}
                </Checkbox>
              ))}
            </>
          </Modal>
        </>
      }
      actions={[
        <Button onClick={() => setByResident(!byResident)}>Toggle</Button>,
        <Button type="dashed" icon="setting" onClick={() => setAddQuery(true)}>
          Configure
        </Button>,
      ]}
      bordered={false}
    >
      {data.map(({ query, assessments, residents, selected }) => {
        const percentAssessments =
          (assessments / maxAssessments.assessments) * 100
        const percentResidents = (residents / maxResidents.residents) * 100
        if (selected) {
          return (
            <Row justify="space-around">
              <Col span={8}>{query}</Col>
              <Col span={16}>
                <Progress
                  percent={byResident ? percentResidents : percentAssessments}
                  strokeWidth={20}
                  format={
                    byResident ? () => `${residents}` : () => `${assessments}`
                  }
                  status="active"
                  style={{ padding: 10 }}
                  onClick={() => message.info('This would go to the related MDS Search Query')}
                />
              </Col>
            </Row>
          )
        } else return null
      })}
    </Card>
  )
}

// export default () => (
//   <Card>
//     <VictoryLegend
//       title="MDS Queries"
//       x={125}
//       y={50}
//       gutter={10}
//       orientation="horizontal"
//       style={{ title: { fontSize: 20 } }}
//       data={[{ name: "Assessments" }, { name: "Residents" }]}
//       colorScale={["blue", "gold"]}
//       borderPadding={{ top: 0, bottom: 0 }}
//       height={150}
//     />
//     <VictoryChart domainPadding={30} theme={VictoryTheme.material}>
//       <VictoryGroup horizontal offset={10} colorScale={["blue", "gold"]}>
//         <VictoryBar data={data} x="query" y="assessments" />
//         <VictoryBar data={data} x="query" y="residents" />
//       </VictoryGroup>
//     </VictoryChart>
//   </Card>
// )
