import React, { useState, useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { MdsContext } from "../../context/mds-context"
import { mockData } from "../../data/mock-data"
import FieldDetails from "./details"

import {
  Button,
  Row,
  Drawer,
  Col,
  Icon,
  Input,
  Select,
  Typography,
  Tooltip,
  DatePicker,
  Divider,
  Card,
  Badge,
} from "antd"

const { Option } = Select
const { Title, Text } = Typography
const { Search } = Input

const QmSvg = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="50" height="50" fill="white" />
    <circle cx="30" cy="30" r="30" stroke="currentColor" stroke-width="2" />
    <path
      d="M21.5156 24.8555C21.5156 26.4492 21.2578 27.8359 20.7422 29.0156C20.2266 30.1875 19.5117 31.1289 18.5977 31.8398L21.4336 34.0664L19.1953 36.0469L15.5625 33.1289C15.1484 33.1992 14.7188 33.2344 14.2734 33.2344C12.8594 33.2344 11.5977 32.8945 10.4883 32.2148C9.37891 31.5352 8.51953 30.5664 7.91016 29.3086C7.30078 28.043 6.99219 26.5898 6.98438 24.9492V24.1055C6.98438 22.4258 7.28516 20.9492 7.88672 19.6758C8.49609 18.3945 9.35156 17.4141 10.4531 16.7344C11.5625 16.0469 12.8281 15.7031 14.25 15.7031C15.6719 15.7031 16.9336 16.0469 18.0352 16.7344C19.1445 17.4141 20 18.3945 20.6016 19.6758C21.2109 20.9492 21.5156 22.4219 21.5156 24.0938V24.8555ZM17.9531 24.082C17.9531 22.293 17.6328 20.9336 16.9922 20.0039C16.3516 19.0742 15.4375 18.6094 14.25 18.6094C13.0703 18.6094 12.1602 19.0703 11.5195 19.9922C10.8789 20.9062 10.5547 22.25 10.5469 24.0234V24.8555C10.5469 26.5977 10.8672 27.9492 11.5078 28.9102C12.1484 29.8711 13.0703 30.3516 14.2734 30.3516C15.4531 30.3516 16.3594 29.8906 16.9922 28.9688C17.625 28.0391 17.9453 26.6875 17.9531 24.9141V24.082ZM28.6875 15.9375L33.0703 28.3125L37.4297 15.9375H42.0469V33H38.5195V28.3359L38.8711 20.2852L34.2656 33H31.8516L27.2578 20.2969L27.6094 28.3359V33H24.0938V15.9375H28.6875Z"
      fill="currentColor"
    />
  </svg>
)

const ClinicalSvg = () => (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 50 50"
  >
    <g>
      <path
        d="M46.966,23.345c0-3.814-3.115-6.92-6.931-6.92s-6.933,3.105-6.933,6.92c0,3.435,2.496,6.267,5.769,6.813v7.267
			c0,5.664-4.597,10.261-10.261,10.261c-5.664,0-10.262-4.598-10.262-10.261L18.323,29.1c2.686-0.358,5.311-1.929,7.646-4.612
			c0.343-0.394,0.447-0.902,0.388-1.387c3.052-4.035,4.945-9.53,4.945-13.754c0-6.521-2.922-7.198-7.754-8.304l-0.007-0.012
			C23.244,0.433,22.644,0,21.917,0c-1.021,0-1.849,0.827-1.849,1.836c0,1.021,0.827,1.848,1.849,1.848
			c0.404,0,0.783-0.168,1.084-0.407l0.043,0.016c4.691,1.077,5.957,1.369,5.957,6.054c0,3.715-1.758,8.69-4.445,12.282
			c-0.445,0.026-0.885,0.222-1.214,0.588c-1.373,1.589-3.567,3.491-6.159,3.491c-2.59,0-4.782-1.884-6.155-3.469
			c-0.33-0.366-0.769-0.562-1.211-0.587c-2.694-3.605-4.456-8.586-4.456-12.306c0-4.688,1.245-4.979,5.965-6.056l0.016-0.015
			c0.324,0.239,0.677,0.408,1.107,0.408c1.021,0,1.848-0.828,1.848-1.848C14.296,0.827,13.47,0,12.448,0
			c-0.729,0-1.328,0.433-1.646,1.029L10.798,1.03C5.961,2.146,3.034,2.811,3.034,9.347c0,4.228,1.9,9.743,4.979,13.777
			c-0.059,0.485,0.046,0.994,0.389,1.387c2.333,2.665,4.933,4.23,7.616,4.589l0.003,8.324C16.022,44.359,21.676,50,28.61,50
			c6.934,0,12.564-5.641,12.564-12.576v-7.267C44.446,29.611,46.966,26.779,46.966,23.345z M40.035,27.975
			c-2.543,0-4.63-2.074-4.63-4.628c0-2.544,2.087-4.617,4.63-4.617s4.606,2.073,4.606,4.617
			C44.642,25.9,42.578,27.975,40.035,27.975z"
      />
      <path
        d="M40.035,19.891c-1.91,0-3.466,1.545-3.466,3.455c0,1.921,1.556,3.464,3.466,3.464c1.909,0,3.466-1.543,3.466-3.464
			C43.501,21.436,41.944,19.891,40.035,19.891z"
      />
    </g>
  </svg>
)

const QmIcon = props => <Icon component={QmSvg} {...props} />
const ClinicalIcon = props => <Icon component={ClinicalSvg} {...props} />

export default ({
  field,
  valueFrom,
  type,
  skip,
  value,
  setValue,
  openModal,
  flag,
  loading,
}) => {
  const data = useStaticQuery(graphql`
    query GetFieldData {
      allCmsItemMstrCsv {
        edges {
          node {
            itm_mstr_key
            itm_id
            itm_shrt_label
          }
        }
      }
      allCmsItemValCsv {
        edges {
          node {
            itm_id
            itm_mstr_key
            itm_val_key
            val_srt_id
            val_txt
            val_id
          }
        }
      }
    }
  `)

  const [showFlag, setShowFlag] = useState(false)
  const [fieldDetail, setFieldDetail] = useState(null)
  const [activeKey, setActiveKey] = useState(null)
  const [showDetail, setShowDetail] = useState(false)

  const question = data.allCmsItemMstrCsv.edges.find(item => {
    return item.node.itm_id === field
  })

  const responses = data.allCmsItemValCsv.edges.filter(item => {
    return item.node.itm_id === field
  })

  const fieldData = mockData.find(data => {
    return data.field === field
  })

  const responseOptions = []
  for (let i = 0; i < responses.length; i++) {
    responseOptions.push({
      label: `${responses[i].node.val_txt} (${responses[i].node.val_id})`,
      value: responses[i].node.val_id,
    })
    if (responses[i].node.val_txt.indexOf("Minimum") !== -1) {
      let maxValue = parseInt(responses[i].node.val_id, 10) + 1

      for (let j = 0; j < responses.length; j++) {
        if (responses[j].node.val_txt.indexOf("Maximum") !== -1) {
          maxValue = responses[j].node.val_id
        }
      }

      for (
        let k = parseInt(responses[i].node.val_id, 10) + 1;
        k < maxValue;
        k++
      ) {
        responseOptions.push({
          label: `${k}`,
          value: `${k}`,
        })
      }
    }
  }

  const ImportTip = () => (
    <p>
      Information is available to import for this field from the configured
      import source(s). Click to see more information.
    </p>
  )

  const FinancialTip = () => <p>This field impacts financial calucations.</p>

  const QualityTip = () => (
    <p>
      This field impacts Quality Measures for CASPER, Five Star, and Nursing
      Home Compare.
    </p>
  )

  const ClinicalTip = () => (
    <p>This field has potential triggers for the Care Area Assessment (CAA).</p>
  )

  const NoteTip = () => (
    <p>
      This field has manually entered notes associated to it from other users.
    </p>
  )

  const InputType = () => {
    switch (type) {
      case "date":
        return <DatePicker allowClear style={{ width: "30vw" }} />
      case "search":
        return (
          <Select
            style={{ width: "30vw" }}
            suffixIcon={<Icon type="search" />}
            allowClear
            showSearch
            placeholder="Select a diagnosis"
            optionFilterProp="children"
          >
            <Option value="A01.01">A01.01: Typhoid meningitis</Option>
            <Option value="A01.02">
              A01.02: Typhoid fever with heart involvement
            </Option>
            <Option value="A01.03">A01.03: Typhoid pneumonia</Option>
          </Select>
        )
      default:
        return (
          <Select
            id={field}
            name={field}
            defaultValue="0"
            disabled={skip}
            prefixIcon={<Icon type="user" />}
            style={{ minWidth: "20vw" }}
          >
            {responseOptions.map(response => (
              <Option value={response.value}>{response.label}</Option>
            ))}
          </Select>
        )
    }
  }

  if (!fieldData) {
    return null
  }

  if (fieldData) {
    return (
      <Row gutter={[16, 16]} style={{ paddingLeft: 40 }}>
        <Col>
          <Row>
            <Tooltip
              title="Vice photo booth iceland id dolor direct trade, ullamco before they sold out franzen 3 wolf moon cloud bread seitan lomo craft beer. La croix photo booth velit whatever trust fund tumeric. Freegan eiusmod succulents jean shorts, banh mi ethical velit dreamcatcher occupy. Chicharrones bitters humblebrag disrupt cliche actually fixie. Keytar schlitz poutine semiotics."
              placement="left"
            >
              <Text
                style={{
                  fontSize: 14,
                }}
              >
                {field}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                }}
              >
                {`: ${question.node.itm_shrt_label}`}
              </Text>
            </Tooltip>
          </Row>
          <Row align="middle" type="flex" gutter={8} style={{ padding: 2 }}>
            <Col>
              {loading ? (
                <Button shape="circle" loading={loading} tabindex="-1" />
              ) : flag ? (
                <Button
                  type="danger"
                  size="large"
                  shape="circle"
                  onClick={() => setShowFlag(!showFlag)}
                  tabindex="-1"
                >
                  {showFlag ? (
                    <Icon type="close" style={{ fontSize: "22px" }} />
                  ) : (
                    <Icon type="flag" style={{ fontSize: "22px" }} />
                  )}
                </Button>
              ) : (
                <Button
                  type="primary"
                  shape="circle"
                  tabindex="-1"
                  disabled={skip}
                >
                  {skip ? (
                    <Icon type="stop" style={{ fontSize: "22px" }} />
                  ) : (
                    <Icon type="safety" style={{ fontSize: "22px" }} />
                  )}
                </Button>
              )}
            </Col>
            <Col>
              <InputType />
            </Col>
            <Col>
              <Tooltip title={<ImportTip />} placement="bottom">
                {fieldData.sourceData.results.length > 0 ? (
                  <Button
                    type="primary"
                    shape="circle"
                    onClick={() => setActiveKey("1")}
                    tabindex="-1"
                    style={{ background: "#00A8E1", border: "none" }}
                  >
                    <Icon
                      type="vertical-align-bottom"
                      style={{ fontSize: "1.25rem" }}
                    />
                  </Button>
                ) : (
                  <Button
                    type="dashed"
                    shape="circle"
                    onClick={() => setActiveKey("1")}
                    tabindex="-1"
                  >
                    <Icon type="vertical-align-bottom" />
                  </Button>
                )}
              </Tooltip>
              <Tooltip title={<FinancialTip />} placement="bottom">
                {fieldData.referenceData.financialImpact ? (
                  <Button
                    type="primary"
                    shape="circle"
                    onClick={() => setActiveKey("2")}
                    tabindex="-1"
                    style={{ background: "#00A8E1", border: "none" }}
                  >
                    <Icon type="dollar" style={{ fontSize: "1.15rem" }} />
                  </Button>
                ) : (
                  <Button
                    type="dashed"
                    shape="circle"
                    onClick={() => setActiveKey("2")}
                    tabindex="-1"
                  >
                    <Icon type="dollar" />
                  </Button>
                )}
              </Tooltip>
              <Tooltip title={<QualityTip />} placement="bottom">
                {fieldData.referenceData.qmImpact ? (
                  <Button
                    type="primary"
                    shape="circle"
                    onClick={() => setActiveKey("3")}
                    tabindex="-1"
                    style={{ background: "#00A8E1", border: "none" }}
                  >
                    QM
                  </Button>
                ) : (
                  <Button
                    type="dashed"
                    shape="circle"
                    onClick={() => setActiveKey("3")}
                    tabindex="-1"
                  >
                    QM
                  </Button>
                )}
              </Tooltip>
              <Tooltip title={<ClinicalTip />} placement="bottom">
                {fieldData.referenceData.caaImpact ? (
                  <Button
                    type="primary"
                    shape="circle"
                    onClick={() => setActiveKey("4")}
                    tabindex="-1"
                    style={{ background: "#00A8E1", border: "none" }}
                  >
                    <Icon type="medicine-box" style={{ fontSize: "1.15rem" }} />
                  </Button>
                ) : (
                  <Button
                    type="dashed"
                    shape="circle"
                    onClick={() => setActiveKey("4")}
                    tabindex="-1"
                  >
                    <Icon type="medicine-box" />
                  </Button>
                )}
              </Tooltip>
              <Tooltip title={<NoteTip />} placement="bottom">
                {fieldData.noteData.length > 0 ? (
                  <Button
                    type="primary"
                    shape="circle"
                    onClick={() => setActiveKey("6")}
                    tabindex="-1"
                    style={{ background: "#00A8E1", border: "none" }}
                  >
                    <Icon type="file" style={{ fontSize: "1rem" }} />
                  </Button>
                ) : (
                  <Button
                    type="dashed"
                    shape="circle"
                    onClick={() => setActiveKey("6")}
                    tabindex="-1"
                  >
                    <Icon type="file" />
                  </Button>
                )}
              </Tooltip>
            </Col>
          </Row>
          {flag && showFlag && (
            <Row style={{ padding: "4px" }}>
              <Card title={`Flag Information`} size="small">
                <p>asdfasdfsadasdfsad</p>
              </Card>
            </Row>
          )}
        </Col>
        <Drawer
          placement="right"
          closable={false}
          onClose={() => setActiveKey(0)}
          visible={activeKey > 0}
          width="70vw"
        >
          <FieldDetails
            closeDetail={() => setActiveKey(0)}
            detail={fieldData}
            question={question}
            activeKey={activeKey}
            setActiveKey={setActiveKey}
          />
        </Drawer>
      </Row>
    )
  }
}
