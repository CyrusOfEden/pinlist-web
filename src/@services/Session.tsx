import { ErrorScreen } from "~/src/@screens/ErrorScreen"
import { LoadingScreen } from "~/src/@screens/LoadingScreen"
import * as Firebase from "~/src/@services/Firebase"
import { useBoolean, useMount, useSetState } from "ahooks"
import React, { createContext, useContext, useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"

import { APIv1 } from "./APIv1"

export type CurrentUser = {
  id: number
  username: string
  email: string
  phoneNumber: string
  photoUrl: string
  gender: string
}

export type SessionState = {
  firebaseUser: firebase.User
  firebaseToken: string
  currentUser: CurrentUser
  setState: (
    patch:
      | Partial<SessionState>
      | ((prevState: SessionState) => Partial<SessionState>),
  ) => void
  api: APIv1
}

const NULL_SESSION = Object.freeze({
  setState(_: unknown) {},
  firebaseUser: null,
  firebaseToken: null,
  currentUser: null,
  api: null,
})

const SessionContext = createContext<SessionState>(NULL_SESSION as any)

export const useSession = () => useContext(SessionContext)

export type SessionLoader = (
  user: firebase.User,
) => Promise<Omit<SessionState, "setState">>

export interface SessionProvider {
  render: React.FC<SessionState>
  createSession: SessionLoader
  loadSession: SessionLoader
}

export const SessionProvider: React.FC<SessionProvider> = ({
  render,
  createSession,
  loadSession,
}) => {
  const [state, setState] = useSetState<SessionState>(NULL_SESSION as any)
  useMount(() => setState({ setState }))

  const [firebaseUser, firebaseLoading, firebaseError] = useAuthState(
    Firebase.auth,
  )
  const [isLoading, { setFalse: setLoaded }] = useBoolean(firebaseLoading)

  useMount(() => {
    loadSession(firebaseUser).then(setState)
  })

  useEffect(() => {
    if (firebaseUser) {
      createSession(firebaseUser).then(setState).then(setLoaded)
    } else if (!firebaseLoading) {
      setLoaded()
    }
  }, [firebaseUser, firebaseLoading, loadSession])

  return isLoading ? (
    <LoadingScreen />
  ) : firebaseError ? (
    <ErrorScreen error={firebaseError} />
  ) : (
    <SessionContext.Provider value={state} children={render(state)} />
  )
}
