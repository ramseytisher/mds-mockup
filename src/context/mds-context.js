import React, { createContext, useState } from "react"

export const MdsContext = createContext()

const initialMdsState = {
  A2300: "",
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
  C0500: "99",
  C0700: "-",
  C1000: "-",
  I0020: "-",
  I0020B: "",
  I0100: "-",
  I0200: "-",
  I0300: "-",
  I0400: "-",
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
  K0510A2: "-"
}

export const MdsProvider = ({ children }) => {
  const [mds, setMds] = useState(initialMdsState)
  const [openDetail, setOpenDetail] = useState(false)

  function handleChange(field, value) {
    setMds({
      ...mds,
      [field]: value,
    })
  }

  return (
    <MdsContext.Provider value={{ mds, handleChange }}>
      {children}
    </MdsContext.Provider>
  )
}
