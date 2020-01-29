import React from "react"

import { Card, Progress, Affix } from "antd"

export default () => (
  <Affix offsetTop={140}>
    <Progress
      type="dashboard"
      width={70}
      percent={20}
      format={percent => `PT: TI`}
    />
    <Progress
      type="dashboard"
      width={70}
      percent={20}
      format={percent => `OT: TI`}
    />
    <Progress
      type="dashboard"
      width={70}
      percent={40}
      format={percent => `SLP: SA`}
    />
    <Progress
      type="dashboard"
      width={70}
      percent={90}
      format={percent => `NTA: NF`}
    />
    <Progress
      type="dashboard"
      width={70}
      percent={40}
      format={percent => `NUR: PDE1`}
    />
  </Affix>
)
