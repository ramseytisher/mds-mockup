import React, { useState, useContext } from "react"
import { Authenticator, SignIn, SignUp } from "aws-amplify-react"
import { Link } from "gatsby"

import { Drawer, Modal, Button } from "antd"

import { UserContext } from "../context/user-context"

export default () => {
  const [showLogin, setShowLogin] = useState(false)

  const { loggedIn, setLoggedIn, handleLogout } = useContext(UserContext)

  if (loggedIn) {
    return <Button onClick={() => handleLogout()}>Logout</Button>
  }

  return (
    <>
      <Button onClick={() => setShowLogin(true)}>Login</Button>
      {/* <Drawer
        placement="right"
        visible={showLogin}
        onClose={() => setShowLogin(false)}
        width="60vw"
      >
        <Authenticator
          onStateChange={authState =>
            authState === "signedIn" && setLoggedIn(true)
          }
        />
      </Drawer> */}
      <Modal
        title="Login"
        visible={showLogin}
        footer={null}
      >
        <Authenticator
          usernameAttributes='email'
          onStateChange={authState =>
            authState === "signedIn" && setLoggedIn(true)
          }
        />
      </Modal>
    </>
  )
}
