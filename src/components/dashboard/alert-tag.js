import React from "react"

import { Popover, Tag, Result } from "antd"

export default ({ text }) => {
  const getColor = () => {
    switch (text) {
      case "Primary Diagnosis Change":
        return "#77BC1F"
      case "PT/OT Functional Score Change":
      case "PT/OT Clinical Category Change":
        return "#00A8E1"
      case "SLP Clinical Category Change":
      case "SLP Comorbidities Change":
      case "SLP Cognitive Impairement Change":
      case "SLP Swallowing Disorder Change":
      case "SLP Mechanically Altered Diet Change":
        return "#6D3075"
      case "NTA Score Change":
        return "#EF7622"
      case "Nursing Functional Score Change":
      case "Nursing Group Change":
        return "#F7A800"
      default:
        return "#007CBA"
    }
  }

  const getDetails = () => {
    switch (text) {
      case "Primary Diagnosis Change":
        return (
          <p>
            The previous PPS assessment indicated a Primary Diagnosis of:{" "}
            <Tag>Knee Replacement</Tag>
            <br />
            There is now clinical documentation that indicates the Primary
            Diangosis is: <Tag color="#007CBA">Alzheimers</Tag>
          </p>
        )
      case "PT/OT Functional Score Change":
        return (
          <p>
            The previous PPS assessment indicated a PT/OT Functional Score of:{" "}
            <Tag>3</Tag>
            <br />
            There is now clinical documentation that indicates a PT/OT
            Functional Score of <Tag color="#007CBA">6</Tag>
          </p>
        )
      case "PT/OT Clinical Category Change":
        return (
          <p>
            The previous PPS assessment indicated a PT/OT Clinical Category of:{" "}
            <Tag>Medical Management</Tag>
            <br />
            There is now clinical documentation that indicates a NTA Score of{" "}
            <Tag color="#007CBA">Major Joint Replacement or Spinal Surgery</Tag>
          </p>
        )
      case "SLP Clinical Category Change":
        return (
          <p>
            The SLP Clinical Category has changed from <Tag>Non-Neurologic</Tag>{" "}
            to <Tag color="#007CBA">Acute Neurologic</Tag>
          </p>
        )
      case "SLP Comorbidities Change":
        return (
          <p>
            The previous PPS assessment did not indicate the presense of one or
            more SLP-related comorbidities. There is now clinical documentation
            that suggests the presense of one or more SLP-related comorbidities.
          </p>
        )
      case "SLP Cognitive Impairement Change":
        return (
          <p>
            The previous PPS assessment did not indicate the presense of a
            Cognitive Impairement. There is now clinical documentation that
            suggests the presense of a cognitive impairement.
          </p>
        )
      case "SLP Swallowing Disorder Change":
        return (
          <p>
            The previous PPS assessment did not indicate the presense of a
            Swallowing Disorder. There is now clinical documentation that
            suggests the presense of a Swallowing Disorder.
          </p>
        )
      case "SLP Mechanically Altered Diet Change":
        return (
          <p>
            The previous PPS assessment did not indicate the presense of a
            Mechanically Altered Diet. There is now clinical documentation that
            suggests the presense of a Mechanically Altered Diet.
          </p>
        )
      case "NTA Score Change":
        return (
          <p>
            The previous PPS assessment indicated a NTA Score of: <Tag>8</Tag>
            <br />
            There is now clinical documentation that indicates a NTA Score of{" "}
            <Tag color="#007CBA">14</Tag>
          </p>
        )
      case "Nursing Functional Score Change":
        return (
          <p>
            The previous PPS assessment indicated a Nursing Functional Score of:{" "}
            <Tag>3</Tag>
            <br />
            There is now clinical documentation that indicates a Nursing
            Functional Score of <Tag color="#007CBA">7</Tag>
          </p>
        )
      case "Nursing Group Change":
        return (
          <p>
            The previous PPS assessment indicated a Nursing Group of:{" "}
            <Tag>Reduced Physical Function</Tag>
            <br />
            There is now clinical documentation that indicates a Nursing Group
            of <Tag color="#007CBA">Special Care Low</Tag>
          </p>
        )
      default:
        return null
    }
  }

  return (
    <Popover content={getDetails()} title={text} trigger="click">
      <Tag color={getColor()}>{text}</Tag>
    </Popover>
  )
}
