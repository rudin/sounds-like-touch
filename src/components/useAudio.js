import React, { useRef, useEffect, useState } from "react"
import { useThrottle } from "use-throttle"

const useAudio = (
  url = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3",
  active,
  volume
) => {
  const isFirstRun = useRef(true)

  const contextRef = useRef(new AudioContext())
  let context = contextRef.current

  const audioBufferRef = useRef(null)

  const gainNodeRef = useRef()

  useEffect(() => {
    console.log("Setup Audio!")
    gainNodeRef.current = context.createGain()

    window
      .fetch(url)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => context.decodeAudioData(arrayBuffer))
      .then((audioBuffer) => {
        audioBufferRef.current = audioBuffer
      })
  }, [context, url])

  useEffect(() => {
    if (active === true) {
      if (isFirstRun.current === false) {
        return
      }
      isFirstRun.current = false
      const gainNode = gainNodeRef.current
      const source = context.createBufferSource()
      source.buffer = audioBufferRef.current
      // source.connect(context.destination);

      source.connect(gainNode)
      gainNode.connect(context.destination)

      source.loop = true
      source.start()
      // random gain!

      // setInterval(randomGain, 100)
    }
  }, [active, audioBufferRef, context])

  const throttledVolume = useThrottle(volume, 74)

  useEffect(() => {
    gainNodeRef.current.gain.value = throttledVolume
  }, [throttledVolume])
}

export default useAudio
