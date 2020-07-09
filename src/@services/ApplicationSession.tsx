import { ErrorScreen } from "~/src/@screens/ErrorScreen"
import { LoadingScreen } from "~/src/@screens/LoadingScreen"
import { auth } from "~/src/@services/firebase"
import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
import React, { useContext, useEffect, useMemo, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"

export type CurrentUser = {
  username: string
  email: string
  phoneNumber: string
  photoUrl: string
  gender: string
}

export type SessionContext = {
  firebaseUser: firebase.User
  firebaseToken: string
  currentUser: CurrentUser
  setCurrentUser: (user: CurrentUser) => void
  api: AxiosInstance & { requestMethod: (AxiosRequestConfig) => Promise<any> }
}

const NULL_STATE = Object.freeze({
  firebaseUser: null,
  firebaseToken: null,
  currentUser: null,
  api: null,
  setCurrentUser(_: any) {},
})

const SessionContext = React.createContext<SessionContext>(NULL_STATE as any)

export const ApplicationSession: React.FC = ({ children }) => {
  const [firebaseUser, firebaseLoading, firebaseError] = useAuthState(auth)
  const [state, setState] = useState<SessionContext>(NULL_STATE as any)

  const setCurrentUser = useMemo(
    () => (currentUser: CurrentUser) =>
      setState((state) => ({ ...state, currentUser })),
    [setState],
  )

  useEffect(() => {
    if (!firebaseUser || firebaseError) return
    createSession(firebaseUser).then((session) =>
      setState({ ...session, setCurrentUser }),
    )
  }, [firebaseUser])

  return firebaseLoading ? (
    <LoadingScreen />
  ) : firebaseError ? (
    <ErrorScreen error={firebaseError} />
  ) : (
    <SessionContext.Provider value={state}>{children}</SessionContext.Provider>
  )
}

const createSession = async (
  firebaseUser: firebase.User,
): Promise<Omit<SessionContext, "setCurrentUser">> => {
  const firebaseToken = await firebaseUser.getIdToken()

  const client = axios.create({
    timeout: 2000,
    baseURL: `${process.env.RAILS_HOST}/api/v1`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${firebaseToken}`,
    },
  })

  const api: SessionContext["api"] = Object.assign(client, {
    requestMethod: (options: AxiosRequestConfig) =>
      client(options).then(({ data }) => data),
  })

  const { data } = await api.post("/sessions")
  const { currentUser } = data

  return { firebaseUser, firebaseToken, api, currentUser }
}

export const useSession = () => useContext(SessionContext)
