import { RouteComponentProps } from "@reach/router"
import React from "react"

interface ErrorProps extends RouteComponentProps {
  error: Pick<Error, "message">
  message?: string
}

export default function ErrorScreen({
  error,
  message = error.message,
}: ErrorProps) {
  return <>{message}</>
}
