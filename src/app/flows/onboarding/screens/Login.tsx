import * as Motion from "~/src/@components/Motion"
import { LoadingScreen } from "~/src/@screens/LoadingScreen"
import { auth, client } from "~/src/@services/Firebase"
import React from "react"
import Loadable from "react-loadable"

const PhoneNumberLogin = Loadable({
  loading: LoadingScreen,
  loader: () => import("react-firebaseui/StyledFirebaseAuth"),
  webpack: () => [require.resolveWeak("react-firebaseui/StyledFirebaseAuth")],
})

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
    <PhoneNumberLogin
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
