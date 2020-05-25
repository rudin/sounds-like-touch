import { h } from "preact"
import { useState, useEffect, useRef } from "preact/hooks"

// every point consists of an object with the angle, radius
// render as svg

const calcAngle = (index, count) => ((Math.PI * 2) / count) * index

// eslint-disable-next-line react/display-name
export default ({
  points = [...Array(8).fill(null)].map((_, index, source) => ({
    radius: 200,
    angle: calcAngle(index, source.length),
  })),
}) => {
  return (
    <svg
      viewBox="0 0 500 500"
      preserveAspectRatio="xMidYMid meet"
      style={{ width: "100%", height: "30vw" }}
    >
      <path
        fill="none"
        stroke="black"
        strokeWidth="6px"
        vector-effect="non-scaling-stroke"
        d={
          points
            .map(({ angle, radius }, index) => {
              const x = 250 + Math.cos(angle) * radius
              const y = 250 + Math.sin(angle) * radius
              return `${index === 0 ? "M" : "L"} ${x},${y}`
            })
            .join("\n ") + " Z"
        }
      />
    </svg>
  )
}
