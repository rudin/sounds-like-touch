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
      viewBox="0 0 550 550"
      preserveAspectRatio="xMidYMid meet"
      style={{ width: "100%", height: "35vw" }}
    >
      <path
        fill="black"
        d={`${
          points.reduce((collect, { angle, radius }, index) => {
            const x = 250 + Math.cos(angle) * radius
            const y = 250 + Math.sin(angle) * radius
            const bezierX = 250 + Math.cos(angle) * radius * 1.5
            const bezierY = 250 + Math.sin(angle) * radius * 1.5
            // SIMPLE LINES: return collect + `${index === 0 ? "M" : "L"} ${x},${y}`
            const nextPoint =
              index < points.length - 1 ? points[index + 1] : points[0]
            const nextX = 250 + Math.cos(nextPoint.angle) * radius
            const nextY = 250 + Math.sin(nextPoint.angle) * radius
            const nextBezierX = 250 + Math.cos(nextPoint.angle) * radius * 1.5
            const nextBezierY = 250 + Math.sin(nextPoint.angle) * radius * 1.5

            // return `${collect  }${index === 0 ? "M" : "L"} ${x},${y}`

            return `${collect}
            ${index === 0 ? "M" : "L"} ${x},${y}
            C ${bezierX},${bezierY}
              ${nextBezierX},${nextBezierY}
              ${nextX},${nextY}`
          }, "")
          /* .map(({ angle, radius }, index) => {
              const x = 250 + Math.cos(angle) * radius
              const y = 250 + Math.sin(angle) * radius
              return `${index === 0 ? "M" : "L"} ${x},${y}`
            }) */
        } Z`}
      />
    </svg>
  )
}
