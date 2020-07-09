import React from "react"

interface ErrorProps {
  error: Pick<Error, "message">
  message?: string
}

export const ErrorScreen: React.FC<ErrorProps> = ({
  error,
  message = error.message,
}: ErrorProps) => <>{message}</>
