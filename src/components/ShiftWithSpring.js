import { h } from "preact"
import { useState, useEffect, useRef } from "preact/hooks"
import { useSpring } from "react-spring"

// met een interval ... angleShift radiusShift
// array met objecten... next.. current.. van current naar next..
// 0 to 1... later: factor applyen..

const fill = (count) => [...Array(count).fill(null)].map((_) => Math.random())

const damping = 80

export const useShift = ({ count = 8, tick = 0 }) => {
  const [nextShift, setNextShift] = useState(fill(count))
  const [currentShift, setCurrentShift] = useState([...nextShift])
  const [lastChanged, setLastChanged] = useState([])

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      shift: fill(count),
      // Setup physics
      config: { mass: 10, tension: 400, friction: 40, precision: 0.001 },
    }
  })

  useEffect(() => {
    const iv = setInterval(() => {
      // later: update one of the points
      const newNext = [...nextShift]
      let change = -1
      while (change === -1 || lastChanged.includes(change)) {
        change = Math.round(count * Math.random())
      }
      newNext[change] = Math.random()
      setNextShift([...newNext])
      setLastChanged([change, ...lastChanged.slice(0, 3)])
      setAnimatedProps({
        shift: [...newNext],
      })
    }, 250)
    return () => clearInterval(iv)
  }, [lastChanged])
  /*
  useEffect(() => {
    setCurrentShift(
      currentShift.map(
        (current, index) => current + (nextShift[index] - current) / damping
      )
    )
  })
  */
  return animatedProps.shift.payload.map((prop) => prop.value)
}

export default ({ tick }) => {
  const radiusShiftArray = useShift({ count: 8, tick })
  return (
    <div>
      {radiusShiftArray.map((shift) => (
        <div>
          <div
            style={{
              height: 6,
              width: shift.toFixed(5) * 100,
              backgroundColor: "black",
            }}
          />
          <div>{Math.max(shift.toFixed(3), 0)}</div>
        </div>
      ))}
    </div>
  )
}
