import React, { useState } from "react"
import _ from "lodash"

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
  Statistic,
  Radio,
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
    residents: 3,
    selected: false,
  },
  {
    query: "Indwelling Catheter & UTI",
    assessments: 8,
    residents: 6,
    selected: true,
  },
]

export default () => {
  const [showBy, setShowBy] = useState("residents")
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
      title={`MDS Search Queries By ${
        showBy === "residents" ? "Resident" : "Assessment"
      } - Last 7 Days`}
      style={{ padding: 10 }}
      extra={
        <>
          <Radio.Group
            defaultValue={showBy}
            buttonStyle="solid"
            onChange={event => setShowBy(event.target.value)}
          >
            <Radio.Button value="residents">Show By Resident</Radio.Button>
            <Radio.Button value="assessment">Show By Assessment</Radio.Button>
          </Radio.Group>
          ,
          <Modal
            title="Add MDS Search Query"
            visible={addQuery}
            onOk={() => setAddQuery(false)}
            onCancel={() => setAddQuery(false)}
          >
            <Card>
              <Card title="Select Queries To Display">
                {data.map(item => (
                  <Checkbox
                    checked={item.selected}
                    onChange={event => handleChange(event, item)}
                  >
                    {item.query}
                  </Checkbox>
                ))}
              </Card>
              <Card title="Select Default Date Range">
                <Select defaultValue={7} style={{ width: "100%" }} >
                  <Option value={7}>Last 7 Days</Option>
                  <Option value={30}>Last 30 Days</Option>
                  <Option value={60}>Last 60 Days</Option>
                  <Option value={90}>Last 90 Days</Option>
                  <Option value={180}>Last 180 Days</Option>
                  <Option value={"Custom"}>Manually Enter #</Option>
                </Select>
              </Card>
            </Card>
          </Modal>
        </>
      }
      actions={[
        <Button icon="setting" onClick={() => setAddQuery(true)}>
          Configure
        </Button>,
      ]}
      bordered={false}
    >
      <Row gutter={[16, 8]}>
        {data.map(({ query, assessments, residents, selected }) => {
          return (
            <Col span={8}>
              <Card
                hoverable
                size="small"
                onClick={() => alert("Should go to the Search")}
              >
                <Statistic
                  title={query}
                  value={showBy === "residents" ? residents : assessments}
                />
              </Card>
            </Col>
          )
        })}
      </Row>

      {/* {data.map(({ query, assessments, residents, selected }) => {
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
                  style={{ padding: 10 }}
                  onClick={() =>
                    message.info(
                      "This would go to the related MDS Search Query"
                    )
                  }
                />
              </Col>
            </Row>
          )
        } else return null
      })} */}
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
