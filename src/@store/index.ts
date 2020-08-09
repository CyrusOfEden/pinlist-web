import {
  CombinedState,
  DeepPartial,
  ReducersMapObject,
  configureStore,
} from "@reduxjs/toolkit"
import { combineReducers } from "@reduxjs/toolkit"
import { createAPIv1Client } from "~/src/@services/APIv1"
import debounce from "lodash/debounce"
import isEqual from "lodash/fp/isEqual"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { batchedSubscribe } from "redux-batched-subscribe"

import { SessionState } from "./reducers/sessionStore"

export const configureAppStore = (reducers: ReducersMapObject<any, any>) => {
  const reducer = combineReducers(reducers)
  const store = configureStore({
    reducer,
    enhancers: [
      batchedSubscribe(
        debounce((notify) => {
          notify()
        }, 100),
      ),
    ],
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
  useAppSelector<SessionState>((state) => state.session, isEqual)

export const useAPI = () => {
  const { firebaseToken } = useSession()
  return useMemo(() => createAPIv1Client(firebaseToken), [firebaseToken])
}
