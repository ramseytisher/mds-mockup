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
    <br/>
    <Progress
      type="dashboard"
      width={70}
      percent={20}
      format={percent => `OT: TI`}
    />
    <br/>
    <Progress
      type="dashboard"
      width={70}
      percent={40}
      format={percent => `SLP: SA`}
    />
    <br/>
    <Progress
      type="dashboard"
      width={70}
      percent={90}
      format={percent => `NTA: NF`}
    />
    <br/>
    <Progress
      type="dashboard"
      width={70}
      percent={40}
      format={percent => `NUR: PDE1`}
    />
  </Affix>
)
