import React from "react"
import { MdsProvider } from './src/context/mds-context'
require('./src/components/layout.css');

export const wrapRootElement = ({ element }) => (
    <MdsProvider>
        {element}
    </MdsProvider>
)