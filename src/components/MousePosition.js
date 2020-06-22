import { h } from "preact"
import { useState, useEffect, useRef } from "preact/hooks"
import useMousePosition from "@react-hook/mouse-position"
import { useSpring } from "react-spring"

export const useMousePositionAsFactorFromCenter = () => {
  /*
  const [animatedProps, set] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      x: 0,
      y: 0,
      // Setup physics
      config: { mass: 3, tension: 500, friction: 30, precision: 0.00001 },
    }
  })
  */

  const [mousePosition, ref] = useMousePosition(
    0, // enterDelay
    0, // leaveDelay
    30 // fps
  )
  const x = mousePosition && mousePosition.x / mousePosition.elementWidth - 0.5
  const y = mousePosition && mousePosition.y / mousePosition.elementHeight - 0.5

  // useEffect(() => set({ x: x || 0, y: y || 0 }), [x, y, set])
  // console.log({ animatedProps })

  return [x || 0, y || 0, ref, mousePosition]
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
        border: "3px solid black",
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
