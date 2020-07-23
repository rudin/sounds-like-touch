import React, { useRef, useEffect, useState } from "react"
import { useThrottle } from "use-throttle"

const useAudio = (url, context) => {
  const [active, setActive] = useState(false)
  const [volume, setVolume] = useState(0)

  const setupDone = useRef(false)

  const audioBufferRef = useRef(null)
  const gainNodeRef = useRef()
  const sourceRef = useRef()

  useEffect(() => {
    console.log("Setup Audio!")
    gainNodeRef.current = context.createGain
      ? context.createGain()
      : context.createGainNode()

    /*
    window
      .fetch(url)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) =>
        context.decodeAudioData(arrayBuffer, (audioBuffer) => {
          audioBufferRef.current = audioBuffer
        })
      )
*/

    const request = new XMLHttpRequest()
    request.open("GET", url, true)
    request.responseType = "arraybuffer"

    // Decode asynchronously
    request.onload = function () {
      context.decodeAudioData(
        request.response,
        (buffer) => {
          console.log("buffer", buffer)
          audioBufferRef.current = buffer
        },
        (err) => {
          window.alert(JSON.stringify(err))
        }
      )
    }
    request.send()
    /*
      .then((audioBuffer) => {
        audioBufferRef.current = audioBuffer
      })
      .catch((err) => {
        console.log("error setting up")
        console.log(err)
      })
      */
    return () => {
      // context.close()
      console.log("disconnect gain node")
      gainNodeRef.current.disconnect()
    }
  }, [context, url])

  const setup = () => {
    console.log("setup gogo")

    const gainNode = gainNodeRef.current
    sourceRef.current = context.createBufferSource()
    const source = sourceRef.current
    source.buffer = audioBufferRef.current
    console.log("set source buffer", audioBufferRef.current)
    // source.connect(context.destination)

    source.connect(gainNode)
    gainNode.connect(context.destination)

    source.loop = true
    source.start(0)

    gainNodeRef.current.gain.value = 0.3

    setupDone.current = true
  }

  const throttledVolume = useThrottle(volume, 40)

  useEffect(() => {
    if (setupDone.current === true) {
      // console.log("change volume")
      // gainNodeRef.current.gain.value = throttledVolume
      // .suspend()
    }
    gainNodeRef.current.gain.value = throttledVolume
  }, [throttledVolume])

  return !audioBufferRef.current
    ? null
    : (incomingActive, incomingVolume) => {
        if (
          setupDone.current === false &&
          audioBufferRef.current &&
          incomingActive === true
        ) {
          setup()
        }
        if (incomingActive !== active) {
          console.log("set active", incomingActive)
          setActive(active)
        }
        if (incomingVolume !== volume && setupDone.current === true) {
          console.log("set volume", incomingVolume)
          setVolume(incomingVolume)
          // gainNodeRef.current.gain.value = incomingVolume
        }
      }
}

export default useAudio
