import { h, Fragment } from "preact"
import { useState, useEffect, useRef } from "preact/hooks"
import useToggle from "react-use-toggle"
/*
import DotsOnACircle from "./DotsOnACircle"
import ShiftRadiusAndAngle, { useShift } from "./ShiftRadiusAndAngle"
import ShiftWithSpring, { useShift as useSpringShift } from "./ShiftWithSpring"
import MousePosition from "./MousePosition"
import Bounce from "./Bounce"
import Oscillator from "./Oscillator"
import BounceOscillatorVolume from "./BounceOscillatorVolume"
*/
import Home from "./Home"
import GradientBackground from "./GradientBackground"
import Blob from "./Blob"

const segmentCount = 8
// een cirkel, onderverdeeld in 8 hoeken / vlakken
// per punt een x, y offset please?!
const calcAngle = (index, count) => ((Math.PI * 2) / count) * index

const App = () => {
  const [process, toggle] = useToggle(false)

  const requestRef = useRef(0)
  const [tick, setTick] = useState(0)
  const [running, setRunning] = useState(true)

  const updateTick = () => {
    console.log(tick)

    setTick((tick) => tick + 1)
  }
  const nextFrame = () => {
    updateTick()
    requestRef.current = window.requestAnimationFrame(() => {
      if (running) {
        nextFrame()
      }
    })
  }
  useEffect(() => {
    if (running) {
      nextFrame()
    } else {
      window.cancelAnimationFrame(requestRef.current)
    }
  }, [running])
  const pause = () => setRunning((running) => !running)
  const radiusShiftArray = useShift({ count: segmentCount, tick })
  const angleShiftArray = useShift({ count: segmentCount, tick })

  const radiusSpring = useSpringShift({ count: segmentCount, tick })
  const angleSpring = useSpringShift({ count: segmentCount, tick })
  // return <BounceOscillatorVolume />

  return (
    <Fragment>
      <GradientBackground />
      <div
        id="app"
        style={{
          paddingLeft: "5vw",
          paddingRight: "5vw",
          backgroundColor: "#FFF",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            maxWidth: 600,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            style={{
              position: "relative",
              height: 0,
              paddingBottom: "90%",
              overflowY: "visible",
            }}
          >
            <h1 style={{ textTransform: "uppercase", position: "absolute" }}>
              Sounds
            </h1>
            <h1
              style={{
                textTransform: "uppercase",
                position: "absolute",
                right: 0,
              }}
            >
              Like
            </h1>
            <h1
              style={{
                textTransform: "uppercase",
                position: "absolute",
                bottom: 0,
              }}
            >
              Touch
            </h1>
            <Blob
              points={radiusSpring.map((value, index) => ({
                radius: 150 + value * 20,
                angle: calcAngle(index, segmentCount) + angleSpring[index] / 6,
              }))}
              tick={tick}
              radiusMaxBezierOffset={-60}
              angleMaxBezierOffset={calcAngle(1, segmentCount) / 2.5}
              segmentCount={segmentCount}
            />
          </div>
          {!process && <Home />}
          {/* process && (
            <Fragment>
              <div style={{ marginTop: 100 }}>
                Run a 'ticker' to animate on.
              </div>
              <div style={{ marginTop: 100 }} onClick={pause}>
                {running && "Running "}
                {tick}
              </div>
              <div
                style={{
                  transform:
                    "translate3D(" +
                    Math.sin(tick) * 22 +
                    "px, " +
                    Math.cos(tick) * 22 +
                    "px, 0) ",
                }}
              >
                •
              </div>
              <div style={{ marginTop: 100 }}>
                Evenly distribute dots on a circle, based on radius and angle.
              </div>
              <div style={{ height: 500 }}>
                <DotsOnACircle />
              </div>
              <div style={{ marginTop: 100, marginBottom: "1em" }}>
                Generate and animate some random values.
              </div>
              <ShiftRadiusAndAngle tick={tick} />
              <div style={{ marginTop: 100 }}>
                Use those to 'shift' the radius of the dots.
              </div>
              <div style={{ height: 600 }}>
                <DotsOnACircle
                  points={radiusShiftArray.map((value, index) => ({
                    radius: 175 + value * 50,
                    angle: calcAngle(index, segmentCount),
                  }))}
                />
              </div>
              <div style={{ marginTop: 100 }}>
                And now shift both the radius & the angle.
              </div>
              <div style={{ height: 600 }}>
                <DotsOnACircle
                  points={radiusShiftArray.map((value, index) => ({
                    radius: 175 + value * 50,
                    angle:
                      calcAngle(index, segmentCount) +
                      angleShiftArray[index] / 4,
                  }))}
                />
              </div>
              <div style={{ marginTop: 100, marginBottom: "1em" }}>
                We can make this more smooth by using a 'spring'.
              </div>
              <ShiftWithSpring />
              <div style={{ height: 600 }}>
                vcvc
                <DotsOnACircle
                  points={radiusSpring.map((value, index) => ({
                    radius: 165 + value * 80,
                    angle:
                      calcAngle(index, segmentCount) + angleSpring[index] / 3,
                  }))}
                />
              </div>
              <div style={{ marginTop: 20, marginBottom: "1em" }}>
                Detect mouse position, also as factor of the total area, seen
                from the center.
              </div>
              <MousePosition />
              <div style={{ marginTop: 20, marginBottom: "1em" }}>
                Bounce, based on mouse position, bounce faster...
              </div>
              <Bounce />
              <div style={{ marginTop: 20, marginBottom: "1em" }}>
                Go Sound!
              </div>
              <Oscillator />
              <div style={{ marginTop: 20, marginBottom: "1em" }}>
                Bounce the volume of the sound.
              </div>
              <BounceOscillatorVolume tick={tick} />
              <div style={{ height: 40 }} />
            </Fragment>
                )*/}
          <div onClick={toggle}>...</div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
