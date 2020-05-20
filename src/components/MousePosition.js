import { h } from "preact"
import { useState, useEffect, useRef } from "preact/hooks"
import useMousePosition from "@react-hook/mouse-position"

export const useMousePositionAsFactorFromCenter = () => {
  const [mousePosition, ref] = useMousePosition(
    0, // enterDelay
    0, // leaveDelay
    30 // fps
  )
  const x = mousePosition && mousePosition.x / mousePosition.elementWidth - 0.5
  const y = mousePosition && mousePosition.y / mousePosition.elementHeight - 0.5
  return [x, y, ref, mousePosition]
}

const MousePosition = () => {
  const [x, y, ref, mousePosition] = useMousePositionAsFactorFromCenter(
    0, // enterDelay
    0, // leaveDelay
    30 // fps
  )
  return (
    <div
      ref={ref}
      style={{
        width: 300,
        height: 200,
        backgroundColor: "#DDD",
        marginBottom: 40,
        padding: "1em",
      }}
    >
      {mousePosition.elementWidth} {mousePosition.elementHeight}
      <br />
      {mousePosition.x} {mousePosition.y}
      <br />
      {x ? x.toFixed(3) : ""} {y ? y.toFixed(3) : ""}
    </div>
  )
}

export default MousePosition
