import { h, Fragment } from "preact"
import { useState, useEffect, useRef } from "preact/hooks"
import { useMousePositionAsFactorFromCenter } from "./MousePosition"
import { useBounce } from "./BounceOscillatorVolume"
import Oscillator from "./Oscillator"
import Sawtooth from "./Sawtooth"
import Sound from "react-sound"
import useAudio from "./useAudio"
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock"
import { useSpring } from "react-spring"

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
  /*
    various factors:
    hover: upscale
    active: blobbing - modulate the max angle/radius to near-zero
    bounce: the amount of y-scale-bouncing
    scaleY: always schrink the whole on the y-axis
  */

  const scaleY = 0.84

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

  const [hover, setHover] = useState(false)

  const [active, setActive] = useState(false)

  useEffect(() => {
    if (active) {
      disableBodyScroll(window.document.getElementById("blob"))
    } else {
      clearAllBodyScrollLocks()
    }
  }, [active])

  const { shrink, animatedProps } = useBounce(mouseX)
  // make spikey also into a spring?! eigenlijk wel he?! later..

  const [animatedPropsLocal, set] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      active: 0,
      upscale: 1,
      mouseX: 0,
      mouseY: 0,
      // Setup physics
      config: { mass: 3, tension: 500, friction: 30, precision: 0.01 },
    }
  })

  const [animatedActive, setAnimatedActive] = useSpring(() => {
    return {
      active: 0,
      config: { mass: 1, tension: 120, friction: 14, precision: 0.01 },
    }
  })

  useEffect(() => {
    set({ upscale: hover ? 1 : 0.9 })
    setTimeout(() => set({ upscale: 0.9 }), 300)
  }, [hover])

  useEffect(() => {
    set({ mouseY: active ? mouseY : 0 })
    setAnimatedActive({ active: active ? 1 : 0 })
  }, [mouseY, active])

  useEffect(() => {
    set({ mouseX: active ? mouseX : 0 })
  }, [mouseX, active])

  const newX = animatedPropsLocal.mouseX.value
  const newY = animatedPropsLocal.mouseY.value

  const bounce = 1 - (animatedProps.shrink.value / 2) * Math.abs(newX)
  const spikey = Math.abs(newY * 2) // 1 = full, 0 = none: blobby
  const radiusOffset = spikey * radiusMaxBezierOffset
  const angleOffset = Math.max(0, Math.min((1 - spikey) * angleMaxBezierOffset))

  const totalUpscale = animatedPropsLocal.upscale.value * (1 + spikey / 4)

  const contextRef = useRef(
    new (window.AudioContext || window.webkitAudioContext)()
  )

  const bounceVolume =
    (0.5 - Math.abs(mouseY)) *
    (1 - (1 - bounce) * 3) *
    animatedActive.active.value
  /* Math.min(
    ((0.5 - Math.abs(mouseY)) * (1 - (1 - bounce) * 3), 1)
 ) */

  useAudio(
    "assets/sound/default.mp3",
    active,
    Math.max(0, bounceVolume || 0),
    contextRef.current
  )

  useAudio(
    "assets/sound/spikey.mp3",
    active,
    Math.max(0, Math.min((0.5 - Math.abs(mouseX)) * 2 * spikey, 1)) || 0,
    contextRef.current
  )

  return (
    <Fragment>
      <div
        id="blob"
        style={{
          position: "absolute",
          left: "-30%",
          right: "-30%",
          top: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onMouseUp={() => setActive(false)}
      >
        <div
          ref={ref}
          id="touch"
          style={{
            position: "absolute",
            zIndex: 90,
            left: "8%",
            right: "8%",
            top: "6%",
            bottom: "6%",
            opacity: 1,
            transform: "translate3D(0,0,0)",
          }}
          onMouseDown={() => setActive(true)}
          onMouseUp={() => setActive(false)}
          onTouchStart={() => setActive(true)}
          onTouchEnd={() => setActive(false)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => {
            setHover(false)
          }}
        >
          {/*mouseY: {mouseY}
          <div
            style={{ width: mouseY * 100, height: 20, background: "black" }}
          />
          newY: {animatedPropsLocal.mouseY.value}
          <div
            style={{
              width: animatedPropsLocal.mouseY.value * 100,
              height: 20,
              background: "black",
            }}
          />
          mouseX: {mouseX}
          <br />
          mouseY: {mouseY}
          <br />
          upscale: {animatedPropsLocal.upscale.value}
          <br />
          bounce: {bounceVolume} {bounce}*/}
        </div>
        <svg
          viewBox="0 0 500 500"
          preserveAspectRatio="xMidYMid meet"
          style={{ width: "100%" }}
        >
          <path
            fill="currentColor"
            d={`${
              points.reduce((collect, { angle, radius: initRadius }, index) => {
                const radius = initRadius * totalUpscale
                const x = 250 + Math.cos(angle) * radius
                const y = 250 + Math.sin(angle) * radius * bounce * scaleY
                const bezierX =
                  250 +
                  Math.cos(angle + angleOffset) * (radius * 1.05 + radiusOffset)
                const bezierY =
                  250 +
                  Math.sin(angle + angleOffset) *
                    (radius * 1.05 + radiusOffset) *
                    bounce *
                    scaleY
                //  * (!active ? 1 : bounce)
                // SIMPLE LINES: return collect + `${index === 0 ? "M" : "L"} ${x},${y}`
                const nextPoint =
                  index < points.length - 1 ? points[index + 1] : points[0]
                const nextPointRadius = nextPoint.radius * totalUpscale
                const nextX = 250 + Math.cos(nextPoint.angle) * nextPointRadius
                const nextY =
                  250 +
                  Math.sin(nextPoint.angle) * nextPointRadius * bounce * scaleY
                const nextBezierX =
                  250 +
                  Math.cos(nextPoint.angle - angleOffset) *
                    (nextPointRadius * 1.05 + radiusOffset)
                const nextBezierY =
                  250 +
                  Math.sin(nextPoint.angle - angleOffset) *
                    (nextPointRadius * 1.05 + radiusOffset) *
                    bounce *
                    scaleY

                // return `${collect  }${index === 0 ? "M" : "L"} ${x},${y}`

                return `${collect}
            ${
              index === 0
                ? `M ${x},${y}
            C ${bezierX},${bezierY}
              ${nextBezierX},${nextBezierY}
              ${nextX},${nextY}
            
            
            
            `
                : `
     
                L ${x},${y}
                C ${bezierX},${bezierY}
                  ${nextBezierX},${nextBezierY}
                  ${nextX},${nextY}

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
        {/* active && <Oscillator volume={bounce / 1.3} autoPlay /> */}
        {/* active && (
          <Sawtooth volume={(0.5 - Math.abs(mouseY)) * -2 || -20000} autoPlay />
        )*/}
      </div>
    </Fragment>
  )
}

/*

        {active && (
          <Sound
            url="assets/sound/default.mp3"
            loop={true}
            playStatus={Sound.status.PLAYING}
            volume={Math.max(0, (0.5 - Math.abs(mouseX)) * 200 * bounce) || 0}
          />
        )}
        {active && (
          <Sound
            url="assets/sound/spikey.mp3"
            loop={true}
            playStatus={Sound.status.PLAYING}
            volume={Math.max(0, (0.5 - Math.abs(mouseX)) * 200 * spikey) || 0}
          />
        )}
        {active && 1 === 7 && (
          <Sound
            url="assets/guitar-loop.mp3"
            loop={true}
            playStatus={Sound.status.PLAYING}
            volume={Math.max(0, (0.5 - Math.abs(mouseX)) * 200) || 0}
          />
        )}
        */
