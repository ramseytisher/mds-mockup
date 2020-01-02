// had to add this to get it to work on build
// see https://github.com/gatsbyjs/gatsby/issues/15968 for more info

import React from "react"
import { MdsProvider } from "./src/context/mds-context"

export const wrapRootElement = ({ element }) => (
    <MdsProvider>
        {element}
    </MdsProvider>
)