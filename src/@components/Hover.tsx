import { useHover } from "ahooks"
import React, { ReactElement, useEffect, useRef, useState } from "react"

interface HoverProps {
  children: (
    ref: React.Ref<any>,
    isHovered: boolean,
    delegated?: object,
  ) => ReactElement
  delay?: number
}

export default function Hover({
  children: render,
  delay = 600,
  ...delegated
}: HoverProps) {
  const ref = useRef(null)
  const isHovering = useHover(ref)
  const [state, setState] = useState(isHovering)

  useEffect(() => {
    if (!delay || delay <= 0) {
      setState(isHovering)
    } else {
      const timer = setTimeout(
        () => setState(isHovering),
        isHovering ? delay / 2 : delay,
      )
      return () => clearTimeout(timer)
    }
  }, [delay, isHovering])

  return render(ref, state, delegated)
}
