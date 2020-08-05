import {
  CombinedState,
  DeepPartial,
  ReducersMapObject,
  configureStore,
} from "@reduxjs/toolkit"
import { combineReducers } from "@reduxjs/toolkit"
import { createAPIv1Client } from "~/src/@services/APIv1"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"

import { SessionState } from "./reducers/sessionStore"

export const configureAppStore = (
  reducers: ReducersMapObject<any, any>,
  loadInitialState?: () => DeepPartial<any>,
) => {
  const reducer = combineReducers(reducers)
  const preloadedState = loadInitialState ? loadInitialState() : {}
  const store = configureStore({
    reducer,
    preloadedState,
  })

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
  equalityFn?: (left: T, right: T) => boolean,
) => useSelector<RootState, T>(selector, equalityFn)

export { SessionState }

export const useSession = () =>
  useAppSelector<SessionState>((state) => state.session)

export const useAPI = () => {
  const { firebaseToken } = useSession()
  return useMemo(() => createAPIv1Client(firebaseToken), [firebaseToken])
}
