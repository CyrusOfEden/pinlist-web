import { SerializedError } from "@reduxjs/toolkit"

export const timestamps = (t = new Date()) => ({
  lastUpdateSentAt: t.toString(),
})

export type Fields = { error?: SerializedError; requestId?: string }

export const inProgress = (request: string) => ({
  ...timestamps(),
  error: undefined,
  request,
})

export const succeeded = () => ({
  ...timestamps(),
  error: undefined,
  request: undefined,
})

export const failed = (error: SerializedError) => ({
  ...timestamps(),
  error,
  request: undefined,
})
