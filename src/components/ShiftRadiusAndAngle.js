import { h } from "preact"
import { useState, useEffect, useRef } from "preact/hooks"

// met een interval ... angleShift radiusShift
// array met objecten... next.. current.. van current naar next..
// 0 to 1... later: factor applyen..

const fill = (count) => [...Array(count).fill(null)].map((_) => Math.random())

const damping = 80

export const useShift = ({ count = 8, tick = 0 }) => {
  const [nextShift, setNextShift] = useState(fill(count))
  const [currentShift, setCurrentShift] = useState([...nextShift])
  const [lastChanged, setLastChanged] = useState([])
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
    }, 250)
    return () => clearInterval(iv)
  }, [lastChanged])
  useEffect(() => {
    setCurrentShift(
      currentShift.map(
        (current, index) => current + (nextShift[index] - current) / damping
      )
    )
  })
  return currentShift
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
          <div>{shift.toFixed(3)}</div>
        </div>
      ))}
    </div>
  )
}
