import { h } from "preact"
import { useState, useEffect, useRef } from "preact/hooks"
import Tone from "tone"
import useToggle from "react-use-toggle"

const Oscillator = ({ volume = 1 }) => {
  const [play, toggle] = useToggle(false)
  const osc = useRef(new Tone.Oscillator(440, "sine").toMaster())
  useEffect(() => {
    if (play) {
      osc.current.start()
    } else {
      osc.current.stop()
    }
  }, [play])
  useEffect(() => {
    osc.current.volume.value = -25 + volume * 20
    osc.current.partials = [volume, 0.2 * volume, 0.01]
  }, [volume])
  return <div onClick={toggle}>{play ? "Stop" : "Start"}</div>
}

export default Oscillator
