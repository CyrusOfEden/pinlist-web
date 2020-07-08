import * as firebase from "~/src/services/firebase"
import * as Motion from "~/src/system/Motion"
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
        firebaseAuth={firebase.auth}
        uiConfig={{
          signInFlow: "popup",
          signInOptions: [firebase.client.auth.PhoneAuthProvider.PROVIDER_ID],
          callbacks: {
            async signInFailure(error) {
              debugger
            },
            uiShown() {},
            signInSuccessWithAuthResult({ additionalUserInfo: { isNewUser } }) {
              if (isNewUser) {
                history.push("/register")
              } else {
                history.push("/connect")
              }
            },
          },
        }}
      />
    </Motion.Box>
  )
}
