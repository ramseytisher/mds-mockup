import React, { createContext, useState } from "react"

export const MdsContext = createContext()

const initialMdsState = {
  A2300: "",
  A0310A: "-",
  A0310B: "",
  A0310E: "",
  A0310F: "",
  B0100: "-",
  B0700: "-",
  C0100: "-",
  C0200: "-",
  C0300A: "-",
  C0300B: "-",
  C0300C: "-",
  C0400A: "-",
  C0400B: "-",
  C0400C: "-",
  C0500: "",
  C0700: "",
  C0800: "-",
  C0900A: "-",
  C0900B: "-",
  C0900C: "-",
  C0900D: "-",
  C0900Z: "-",
  C1000: "-",
  C1310A: "-",
  C1310B: "-",
  C1310C: "-",
  C1310D: "-",
  GG0130A1: "-",
  GG0130A2: "-",
  GG0130A3: "-",
  GG0130B1: "-",
  GG0130B2: "-",
  GG0130B3: "-",
  GG0130C1: "-",
  GG0130C2: "-",
  GG0130C3: "-",
  I0020: "-",
  I0020B: "",
  I0100: "-",
  I0200: "-",
  I0300: "-",
  I0400: "-",
  I8000A: "",
  K0100A: "-",
  K0100B: "-",
  K0100C: "-",
  K0100D: "-",
  K0100Z: "-",
  K0200A: "-",
  K0200B: "-",
  K0300: "-",
  K0310: "-",
  K0510A1: "-",
  K0510A2: "-",
}

export const MdsProvider = ({ children }) => {
  const [mds, setMds] = useState(initialMdsState)
  const [searchValue, setSearchValue] = useState('')

  function handleChange(field, value) {
    setMds({
      ...mds,
      [field]: value,
    })
  }

  return (
    <MdsContext.Provider value={{ mds, handleChange, searchValue, setSearchValue }}>
      {children}
    </MdsContext.Provider>
  )
}
