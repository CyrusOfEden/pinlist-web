import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createAPIv1Client } from "~/src/@services/APIv1"
import * as Firebase from "~/src/@services/Firebase"
import { User } from "~/src/@types/pinlist-api"

import { RootState } from ".."

export type SessionState = {
  loading: boolean
  firebaseUser: firebase.User | null
  firebaseToken: string | null
  currentUser: User | null
}

export const registerUser = createAsyncThunk(
  "session/registerUser",
  async (params: Partial<User>, { getState }) => {
    const {
      session: { firebaseToken },
    } = getState() as RootState
    const api = createAPIv1Client(firebaseToken)

    const firebaseUser = Firebase.auth.currentUser

    const currentUser = await api<User>({
      method: "POST",
      url: "/users",
      data: { user: { phoneNumber: firebaseUser.phoneNumber, ...params } },
    })

    firebaseUser.updateEmail(currentUser.email)
    firebaseUser.updateProfile({
      displayName: currentUser.username,
      photoURL: currentUser.photoUrl,
    })

    return { currentUser }
  },
)

export const setCurrentUser = createAsyncThunk(
  "session/setFirebaseCurrentUser",
  async (user?: firebase.User) => {
    if (user == null) {
      return null
    }

    const firebaseUser = user.toJSON()
    const firebaseToken = await user.getIdToken()

    const api = createAPIv1Client(firebaseToken)
    const currentUser = await api<User>({
      method: "POST",
      url: "/sessions",
    }).catch(() => ({}))

    return { firebaseUser, firebaseToken, currentUser }
  },
)

const { reducer, actions } = createSlice({
  name: "session",
  initialState: {
    loading: true,
    firebaseUser: null,
    firebaseToken: null,
    currentUser: null,
  } as SessionState,
  reducers: {
    setSessionState: (state, action) => {
      for (const [key, value] of Object.entries(action.payload)) {
        if (state[key] == null) {
          state[key] = value
        }
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.currentUser = payload.currentUser
        state.loading = false
      })
      .addCase(setCurrentUser.pending, (state) => {
        state.loading = true
      })
      .addCase(setCurrentUser.fulfilled, (state, { payload }) => {
        state.firebaseUser = payload.firebaseUser as any
        state.currentUser = payload.currentUser as any
        state.firebaseToken = payload.firebaseToken
        state.loading = false
      })
  },
})

export const { setSessionState } = actions

export default reducer
