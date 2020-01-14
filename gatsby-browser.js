import React from "react"

import Amplify from "aws-amplify"
import awsconfig from "./src/aws-exports"

import { UserProvider } from "./src/context/user-context"
import { MdsProvider } from "./src/context/mds-context"
require("./src/components/layout.css")

Amplify.configure(awsconfig)

export const wrapRootElement = ({ element }) => (
  <UserProvider>
    <MdsProvider>{element}</MdsProvider>
  </UserProvider>
)
