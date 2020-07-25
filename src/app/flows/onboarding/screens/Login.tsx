import * as Motion from "~/src/@components/Motion"
import { auth, client } from "~/src/@services/Firebase"
import React from "react"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

export const Login = () => (
  <Motion.Box
    mt={24}
    initial="mount"
    animate="enter"
    variants={{
      mount: { opacity: 0, y: 100, transition: { type: "spring" } },
      enter: { opacity: 1, y: 0, transition: { type: "spring" } },
    }}
  >
    <StyledFirebaseAuth
      firebaseAuth={auth}
      uiConfig={{
        signInOptions: [client.auth.PhoneAuthProvider.PROVIDER_ID],
        callbacks: {
          signInSuccessWithAuthResult: () => false,
        },
      }}
    />
  </Motion.Box>
)
