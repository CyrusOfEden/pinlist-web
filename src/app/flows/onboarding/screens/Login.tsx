import * as Motion from "~/src/@design/Motion"
import { auth, client } from "~/src/@services/firebase"
import React from "react"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { useHistory } from "react-router-dom"

export const Login = () => {
  const history = useHistory()

  return (
    <Motion.Box
      mt={24}
      initial="initial"
      animate="enter"
      variants={{
        initial: { opacity: 0, y: 100, transition: { type: "spring" } },
        enter: { opacity: 1, y: 0, transition: { type: "spring" } },
      }}
    >
      <StyledFirebaseAuth
        firebaseAuth={auth}
        uiConfig={{
          signInFlow: "popup",
          signInOptions: [client.auth.PhoneAuthProvider.PROVIDER_ID],
          callbacks: {
            async signInFailure(error) {
              debugger
            },
            uiShown() {},
            signInSuccessWithAuthResult({ additionalUserInfo: { isNewUser } }) {
              history.push("/register")
              return false
            },
          },
        }}
      />
    </Motion.Box>
  )
}
