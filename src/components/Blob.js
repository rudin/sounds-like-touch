import { h, Fragment } from "preact"
import { useState, useEffect, useRef } from "preact/hooks"
import { useMousePositionAsFactorFromCenter } from "./MousePosition"
import { useBounce } from "./BounceOscillatorVolume"
import Oscillator from "./Oscillator"
import Sawtooth from "./Sawtooth"
import Sound from "react-sound"
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock"
// every point consists of an object with the angle, radius
// render as svg

const calcAngle = (index, count) => ((Math.PI * 2) / count) * index

// eslint-disable-next-line react/display-name
export default ({
  points = [...Array(8).fill(null)].map((_, index, source) => ({
    radius: 200,
    angle: calcAngle(index, source.length),
  })),
  tick,
  radiusMaxBezierOffset,
  angleMaxBezierOffset,
}) => {
  const [
    mouseX,
    mouseY,
    ref,
    mousePosition,
  ] = useMousePositionAsFactorFromCenter(
    0, // enterDelay
    0, // leaveDelay
    30 // fps
  )

  const [active, setActive] = useState(false)

  useEffect(() => {
    if (active) {
      disableBodyScroll(window.document.getElementById("blob"))
    } else {
      clearAllBodyScrollLocks()
    }
  }, [active])

  const { shrink, animatedProps } = useBounce(mouseY)
  console.log(mouseX, (0.5 - Math.abs(mouseX)) * 200)
  // make spikey also into a spring?! eigenlijk wel he?! later..
  const spikey = Math.abs(mouseY * 2) || 0 // 1 = full, 0 = none: blobby
  const radiusOffset = spikey * radiusMaxBezierOffset
  const angleOffset = Math.max(0, (1 - spikey) * angleMaxBezierOffset)
  return (
    <Fragment>
      <div>{mouseX}</div>
      <div>Spikey: {Math.abs(mouseY * 2)}</div>
      <div>radiusOffset: {radiusOffset}</div>
      <div>angleOffset: {angleOffset}</div>
      <div
        id="blob"
        style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
        ref={ref}
        onMouseDown={() => setActive(true)}
        onMouseUp={() => setActive(false)}
        onTouchStart={() => setActive(true)}
        onTouchEnd={() => setActive(false)}
      >
        <svg
          viewBox="0 0 500 500"
          preserveAspectRatio="xMidYMid meet"
          style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
        >
          <path
            fill="black"
            stroke="red"
            d={`${
              points.reduce((collect, { angle, radius }, index) => {
                const bezierFactor =
                  0.7 - (active ? Math.abs(mouseX * 1.4 || 0) : 0)
                const x = 250 + Math.cos(angle) * radius
                const y =
                  250 +
                  Math.sin(angle) *
                    radius *
                    (!active ? 1 : animatedProps.shrink.value)
                const bezierX =
                  250 + Math.cos(angle + angleOffset) * (radius + radiusOffset)
                const bezierY =
                  250 + Math.sin(angle + angleOffset) * (radius + radiusOffset)
                //  * (!active ? 1 : animatedProps.shrink.value)
                // SIMPLE LINES: return collect + `${index === 0 ? "M" : "L"} ${x},${y}`
                const nextPoint =
                  index < points.length - 1 ? points[index + 1] : points[0]
                const nextX = 250 + Math.cos(nextPoint.angle) * radius
                const nextY = 250 + Math.sin(nextPoint.angle) * radius
                const nextBezierX =
                  250 +
                  Math.cos(nextPoint.angle - angleOffset) *
                    (radius + radiusOffset)
                const nextBezierY =
                  250 +
                  Math.sin(nextPoint.angle - angleOffset) *
                    (radius + radiusOffset)

                // return `${collect  }${index === 0 ? "M" : "L"} ${x},${y}`

                return `${collect}
            ${
              index === 0
                ? `M ${x},${y}
            L ${bezierX},${bezierY}
             L ${nextBezierX},${nextBezierY}
             L ${nextX},${nextY}
            
            
            
            `
                : `
     

                L ${x},${y}
            L ${bezierX},${bezierY}
             L ${nextBezierX},${nextBezierY}
             L ${nextX},${nextY}

                `
            }
              ${index === points.length - 100000 ? `${nextX},${nextY}` : ``}`
              }, "")
              /* .map(({ angle, radius }, index) => {
              const x = 250 + Math.cos(angle) * radius
              const y = 250 + Math.sin(angle) * radius
              return `${index === 0 ? "M" : "L"} ${x},${y}`
            }) */
            } Z`}
          />
        </svg>
        {active && (
          <Oscillator volume={animatedProps.shrink.value / 1.3} autoPlay />
        )}
        {active && (
          <Sawtooth volume={Math.abs(mouseX) * -5 || -20000} autoPlay />
        )}
        {active && (
          <Sound
            url="assets/guitar-loop.mp3"
            loop={true}
            playStatus={Sound.status.PLAYING}
            volume={Math.max(0, (0.5 - Math.abs(mouseX)) * 200) || 0}
          />
        )}
      </div>
    </Fragment>
  )
}
