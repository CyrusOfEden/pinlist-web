import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createAPIv1Client } from "~/src/@services/APIv1"
import { User } from "~/src/@types/pinlist-api"

export type SessionState = {
  loading: boolean | null
  firebaseUser: firebase.User | null
  firebaseToken: string | null
  currentUser: User | null
}

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
    })

    return { firebaseUser, firebaseToken, currentUser }
  },
)

const { reducer, actions } = createSlice({
  name: "session",
  initialState: {
    loading: null,
    firebaseUser: null,
    firebaseToken: null,
    currentUser: null,
  } as SessionState,
  reducers: {
    mergeState: (state, action) => {
      for (const [key, value] of Object.entries(action.payload)) {
        if (state[key] == null) {
          state[key] = value
        }
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(setCurrentUser.pending, (state) => {
        state.loading = true
      })
      .addCase(setCurrentUser.fulfilled, (state, { payload }) => {
        state.loading = false
        if (payload != null) {
          for (const [key, value] of Object.entries(payload)) {
            state[key] = value
          }
        }
      })
  },
})

export const { mergeState } = actions

export default reducer
