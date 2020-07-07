import { useHover } from "@umijs/hooks"
import React, { ReactElement } from "react"

interface HoverProps {
  children: (ref: React.Ref<any>, isHovered: boolean) => ReactElement
}

export default function Hover({ children: render }: HoverProps) {
  const [state, ref] = useHover()
  return render(ref, state)
}
