import React, { createContext, useState, useEffect } from "react"
import { Auth } from "aws-amplify"

import Login from "../components/login"
import Header from "../components/header"

import { Result } from "antd"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [accountInfo, setAccountInfo] = useState({})

  useEffect(() => {
    if (loggedIn) {
      Auth.currentAuthenticatedUser()
        .then(() => setLoggedIn(true))
        .catch(error => console.log("Error authing: ", error))
    }
  }, [loggedIn])

  const handleLogout = () => {
    Auth.signOut().then(() => {
      setLoggedIn(false)
      setAccountInfo({})
    })
  }

  return (
    <UserContext.Provider
      value={{ loggedIn, accountInfo, setLoggedIn, handleLogout }}
    >
      {loggedIn ? (
        children
      ) : (
        <>
          <Header />
          <Result
            title="You must login to see this content."
          />
        </>
      )}
    </UserContext.Provider>
  )
}
