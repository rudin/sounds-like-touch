import { h } from "preact"
import { useState, useEffect, useRef } from "preact/hooks"
import { useMousePositionAsFactorFromCenter } from "./MousePosition"
import useToggle from "react-use-toggle"
import { useSpring } from "react-spring"
import Oscillator from "./Oscillator"
import Sawtooth from "./Sawtooth"

export const useBounce = (y) => {
  const timeout = useRef()
  const ms = useRef()

  useEffect(() => {
    ms.current = y || y === 0 ? 200 + Math.abs(y * 500) : 1000
  }, [y])

  const [shrink, toggle] = useToggle(false)

  // reset setInterval when fired

  const resetTimeout = (y) => {
    clearTimeout(timeout.current)
    timeout.current = setTimeout(resetTimeout, ms.current)
    toggle()
  }

  useEffect(() => {
    resetTimeout()
    return () => {
      clearTimeout(timeout.current)
    }
  }, [])

  const [animatedProps, set] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      shrink: 1,
      // Setup physics
      config: { mass: 3, tension: 500, friction: 30, precision: 0.00001 },
    }
  })

  useEffect(() => set({ shrink: shrink ? 0.5 : 1 }), [shrink])

  return { shrink, animatedProps }
}

const Bounce = ({ tick }) => {
  const [x, y, ref, mousePosition] = useMousePositionAsFactorFromCenter(
    0, // enterDelay
    0, // leaveDelay
    10 // fps
  )

  const { shrink, animatedProps } = useBounce(y)
  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: 300,
        height: 200,
        border: "3px solid black",
        marginBottom: 40,
        padding: "1em",
      }}
    >
      {shrink && "shrink"}
      <br />
      {animatedProps.shrink.value.toFixed(4)}
      <div
        style={{
          height: 100 * animatedProps.shrink.value.toFixed(5) + "%",
          transform: `translateY(-${50}%)`,
          width: 6,
          backgroundColor: "black",
          position: "absolute",
          left: "50%",
          top: "50%",
        }}
      />
      <Oscillator volume={animatedProps.shrink.value / 1.3} />
      <Sawtooth volume={Math.abs(x) * -5 || -20000} />
      {tick}
    </div>
  )
}

export default Bounce
