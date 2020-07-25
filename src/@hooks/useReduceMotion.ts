import { useEffect, useState } from "react"

export const useReduceMotion = () => {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
  const [matches, setMatch] = useState(mediaQuery.matches)

  useEffect(() => {
    const handleChange = () => {
      setMatch(mediaQuery.matches)
    }

    handleChange()
    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return matches
}
