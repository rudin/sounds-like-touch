import { h } from "preact"
import { useState, useEffect, useRef } from "preact/hooks"
import Tone from "tone"
import useToggle from "react-use-toggle"

const Oscillator = ({ volume = 1 }) => {
  const [play, toggle] = useToggle(false)
  const osc = useRef(new Tone.Oscillator().toMaster())
  // const osc = useRef(new Tone.Synth().toMaster())
  useEffect(() => {
    if (play) {
      osc.current.start()
      // osc.current.triggerAttack("C4")
    } else {
      osc.current.stop()
      // osc.current.triggerRelease()
    }
  }, [play])
  useEffect(() => {
    osc.current.volume.value = -25 + volume * 20
    osc.current.partials = [volume, 0.2 * volume, 0.01]
    if (volume > 0.75) {
      // osc.current.setNote("Bb4")
    } else {
      // osc.current.setNote("C4")
    }
  }, [volume])
  return <div onClick={toggle}>{play ? "Stop" : "Start"}</div>
}

export default Oscillator
