import React, { useRef, useEffect, useState } from "react"

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

  function randomGain() {
    gainNodeRef.current.gain.value = Math.random()
    console.log("yeh")
  }

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
        console.log("NOTTHE FIRST RUN!")
        return
      }
      isFirstRun.current = false
      const gainNode = gainNodeRef.current
      console.log("ACTIVE!")
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

  useEffect(() => {
    gainNodeRef.current.gain.value = volume
  }, [volume])
}

export default useAudio
