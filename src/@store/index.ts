import { CombinedState, configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"

import pins from "./reducers/pinsStore"
import session, { SessionState } from "./reducers/sessionStore"
import tags from "./reducers/tagsStore"

export const configureAppStore = (preloadedState?) => {
  const reducer = combineReducers({ pins, session, tags })
  const store = configureStore({ preloadedState, reducer })

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers", () => store.replaceReducer(reducer))
  }

  return store
}

export type AppStore = ReturnType<typeof configureAppStore>
export type RootState = ReturnType<AppStore["getState"]>

export type AppDispatch = AppStore["dispatch"]

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector = <T>(
  selector: (state: CombinedState<RootState>) => T,
) => useSelector<RootState, T>(selector)

export { SessionState }

export const useSession = () =>
  useAppSelector<SessionState>((state) => state.session)
