import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Ahoy } from "~/src/@services/Ahoy"
import { createAPIv1Client } from "~/src/@services/APIv1"
import * as Firebase from "~/src/@services/Firebase"
import { Honeybadger } from "~/src/@services/Honeybadger"
import { User } from "~/src/@types/pinlist-api"
import assign from "lodash/assign"
import pick from "lodash/fp/pick"

export type SessionState = {
  firebaseUser: firebase.User | null
  firebaseToken: string | null
  currentUser: User | null
  isLoading: boolean
  isLoggedIn: boolean | null
  isDoneOnboarding: boolean | null
}

export const loadSession = async (user?: firebase.User) => {
  if (user == null) {
    Ahoy.configure({ headers: {} })
    Honeybadger.resetContext()
    return null
  }

  const firebaseUser = user.toJSON() as firebase.User
  const firebaseToken = await user.getIdToken()

  Ahoy.configure({
    headers: { Authorization: `Bearer ${firebaseToken}` },
  })
  Honeybadger.setContext({
    user_id: firebaseUser.uid,
  })

  const api = createAPIv1Client(firebaseToken)
  const currentUser: User | null = await api({
    method: "POST",
    url: "/sessions",
  }).catch((error) => {
    if ("currentUser" in error && error.currentUser === "not found") {
      return null
    } else {
      throw error
    }
  })

  return { firebaseUser, firebaseToken, currentUser }
}

export const setCurrentFirebaseUser = createAsyncThunk(
  "session/setCurrentFirebaseUser",
  loadSession,
)

export const setSessionState = createAsyncThunk(
  "session/setState",
  async (state: Partial<SessionState>) => {
    if (state.firebaseUser) {
      await Firebase.auth.updateCurrentUser(state.firebaseUser)
    }
  },
)

const { reducer } = createSlice({
  name: "session",
  initialState: {
    firebaseUser: null,
    firebaseToken: null,
    currentUser: null,
    isLoading: true,
    isLoggedIn: null,
    isDoneOnboarding: null,
  } as SessionState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(setSessionState.pending, (state, { meta: { arg: payload } }) => {
        assign(state, payload)
        assign(state, derivedState(state))
      })
      .addCase(setCurrentFirebaseUser.pending, (state) => {
        state.isLoading = !state.firebaseUser
      })
      .addCase(setCurrentFirebaseUser.fulfilled, (state, { payload }) => {
        if (payload != null) {
          const { firebaseUser, currentUser } = payload
          state.firebaseUser = firebaseUser
          state.currentUser = currentUser
          assign(state, derivedState(state))
        }

        state.isLoading = false
      })
  },
})

export const serializeSession = pick(["firebaseUser", "currentUser"])

const derivedState = ({
  firebaseUser,
  firebaseToken,
  currentUser,
}: SessionState) => ({
  isDoneOnboarding: !!(
    currentUser?.email &&
    currentUser?.username &&
    currentUser?.photoUrl
  ),
  isLoggedIn: !!firebaseUser,
  isLoading: !firebaseToken,
})

export default reducer
