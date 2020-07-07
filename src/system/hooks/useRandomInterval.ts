import { useCallback, useEffect, useRef } from "react"

export const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min

export const useRandomInterval = (
  callback: () => unknown,
  minDelay: number,
  maxDelay: number,
) => {
  const timeoutId = useRef(null)
  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    const isEnabled =
      typeof minDelay === "number" && typeof maxDelay === "number"
    if (isEnabled) {
      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay)
        timeoutId.current = window.setTimeout(() => {
          savedCallback.current()
          handleTick()
        }, nextTickAt)
      }
      handleTick()
    }
    return () => window.clearTimeout(timeoutId.current)
  }, [minDelay, maxDelay])

  return useCallback(() => {
    clearTimeout(timeoutId.current)
  }, [])
}
