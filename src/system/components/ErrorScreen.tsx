import React from "react"

interface ErrorProps {
  error: Pick<Error, "message">
  message?: string
}

export default function ErrorScreen({
  error,
  message = error.message,
}: ErrorProps) {
  return <>{message}</>
}
