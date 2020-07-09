import { useCallback, useEffect, useRef } from "react"

export const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min

export const useRandomInterval = (
  effect: () => unknown,
  minDelay: number,
  maxDelay: number,
): (() => void) => {
  const callback = useRef(effect)

  const timeout = useRef(null)
  const clearInterval = useCallback(() => {
    clearTimeout(timeout.current)
  }, [])

  const handleTick = useCallback(() => {
    const nextTickAt = random(minDelay, maxDelay)
    timeout.current = setTimeout(() => {
      callback.current()
      handleTick()
    }, nextTickAt)
  }, [minDelay, maxDelay])

  useEffect(() => {
    handleTick()
    return clearInterval
  }, [handleTick, clearInterval])

  return clearInterval
}
