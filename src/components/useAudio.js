import React, { useRef, useEffect, useState } from "react"
import { useThrottle } from "use-throttle"

const useAudio = (url, active, volume, context) => {
  const isFirstRun = useRef(true)

  const audioBufferRef = useRef(null)

  const gainNodeRef = useRef()

  useEffect(() => {
    console.log("Setup Audio!")
    gainNodeRef.current = context.createGain
      ? context.createGain()
      : context.createGainNode()

    window
      .fetch(url)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => context.decodeAudioData(arrayBuffer))
      .then((audioBuffer) => {
        audioBufferRef.current = audioBuffer
      })
    return () => {
      // context.close()
    }
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

  const throttledVolume = useThrottle(volume, 40)

  useEffect(() => {
    gainNodeRef.current.gain.value = throttledVolume
  }, [throttledVolume])
}

export default useAudio
