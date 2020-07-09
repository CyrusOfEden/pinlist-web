import { useHover } from "ahooks"
import React, { ReactElement, useRef } from "react"

interface HoverProps {
  children: (ref: React.Ref<any>, isHovered: boolean) => ReactElement
}

export default function Hover({ children: render }: HoverProps) {
  const ref = useRef(null)
  const isHovering = useHover(ref)
  return render(ref, isHovering)
}
