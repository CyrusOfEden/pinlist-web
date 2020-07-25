import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import first from "lodash/first"
import mapValues from "lodash/mapValues"

export type APIv1 = <T = any>(request: AxiosRequestConfig) => Promise<T>

export const createAPIv1Client = (firebaseToken: string): APIv1 => {
  const client = axios.create({
    timeout: 5000,
    baseURL: `${process.env.RAILS_HOST}/api/v1`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${firebaseToken}`,
    },
  })

  const handleErrors = ({ data }: AxiosResponse) => {
    if (data.errors) {
      type Errors = { [field: string]: string[] }
      const errors = mapValues(data.errors as Errors, first)
      throw errors
    } else {
      return data
    }
  }

  return (request: AxiosRequestConfig) => client(request).then(handleErrors)
}
