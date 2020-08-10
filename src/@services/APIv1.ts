import * as Firebase from "~/src/@services/Firebase"
import { useAppSelector } from "~/src/@store"
import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import first from "lodash/first"
import mapValues from "lodash/mapValues"
import { useMemo } from "react"

export type APIv1 = <T = any>(request: AxiosRequestConfig) => Promise<T>

const handleExpiredToken = (client) => async (error) => {
  const { config: request, response } = error
  if (request._retry) {
    return null
  }

  if (response.status !== 401) {
    throw error
  }

  return new Promise(async (resolve, reject) => {
    request._retry = true

    const unsubscribe = Firebase.auth.onAuthStateChanged(async (user) => {
      if (user) {
        const firebaseToken = await user.getIdToken()
        request.headers["authorization"] = `Bearer ${firebaseToken}`
        request.headers["actually_ok"] = "yes"
        unsubscribe()
        client(request).then(resolve)
      }
    }, reject)
  })
}

const handleModelErrors = ({ data }: AxiosResponse) => {
  if (data.errors) {
    type Errors = { [field: string]: string[] }
    const errors = mapValues(data.errors as Errors, first)
    throw errors
  } else {
    return data
  }
}

export const createAPIv1Client = (firebaseToken: string): APIv1 => {
  const client = axios.create({
    timeout: 5000,
    baseURL: `${process.env.RAILS_HOST}/v1`,
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${firebaseToken}`,
    },
  })

  return (request: AxiosRequestConfig) =>
    client(request).catch(handleExpiredToken(client)).then(handleModelErrors)
}

export const useAPI = () => {
  const token = useAppSelector((state) => state.session.firebaseToken)
  return useMemo(() => token && createAPIv1Client(token), [token])
}
