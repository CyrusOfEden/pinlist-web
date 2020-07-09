import { DependencyList, useEffect } from "react"

export const useDelay = (
  callback: () => unknown,
  delay: number,
  deps?: DependencyList,
) =>
  useEffect(() => {
    const timer = setTimeout(callback, delay)
    return () => clearTimeout(timer)
  }, deps ?? [])
