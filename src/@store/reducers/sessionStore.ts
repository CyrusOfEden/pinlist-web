import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Ahoy } from "~/src/@services/Ahoy"
import { createAPIv1Client } from "~/src/@services/APIv1"
import * as Firebase from "~/src/@services/Firebase"
import { User } from "~/src/@types/pinlist-api"
import assign from "lodash/assign"
import flow from "lodash/fp/flow"
import pick from "lodash/fp/pick"

import { createAPIClient } from "./helpers"

export type SessionState = {
  firebaseUser: firebase.User | null
  firebaseToken: string | null
  currentUser: User | null
  isLoading: boolean
  isLoggedIn: boolean | null
  isDoneOnboarding: boolean | null
}

export const setCurrentFirebaseUser = createAsyncThunk(
  "session/setCurrentFirebaseUser",
  async (user?: firebase.User) => {
    if (user == null) {
      Ahoy.configure({ headers: {} })
      return null
    }

    const firebaseUser = user.toJSON() as firebase.User
    const firebaseToken = await user.getIdToken()

    Ahoy.configure({
      headers: { Authorization: `Bearer ${firebaseToken}` },
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
  },
)

export const setSessionState = createAction(
  "session/setState",
  (state: Partial<SessionState>) => ({ payload: state }),
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
      .addCase(setSessionState, (state, { payload }) => {
        assign(state, payload)
        assign(state, derivedState(state))
      })
      .addCase(setCurrentFirebaseUser.pending, (state) => {
        state.isLoading = !state.firebaseUser
      })
      .addCase(setCurrentFirebaseUser.fulfilled, (state, { payload }) => {
        if (payload != null) {
          const { firebaseUser, firebaseToken, currentUser } = payload
          state.firebaseUser = firebaseUser
          state.firebaseToken = firebaseToken
          state.currentUser = currentUser
          assign(state, derivedState(state))
        }

        state.isLoading = false
      })
  },
})

export const serializeSession = flow(
  pick(["firebaseUser", "firebaseToken", "currentUser"]),
  JSON.stringify,
)

const derivedState = ({ firebaseUser, currentUser }: SessionState) => ({
  isDoneOnboarding: !!(
    currentUser?.email &&
    currentUser?.username &&
    currentUser?.photoUrl
  ),
  isLoggedIn: !!firebaseUser,
})

export default reducer
