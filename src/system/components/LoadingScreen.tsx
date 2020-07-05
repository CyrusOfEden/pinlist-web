import ErrorScreen from "./ErrorScreen"
import React from "react"

interface LoadingProps {
  error: Error | null
  retry: () => unknown
  timedOut: boolean
  pastDelay: boolean
}

export default function LoadingScreen({ error, pastDelay }: LoadingProps) {
  if (error) {
    return <ErrorScreen error={error} />
  }
  return null
}
