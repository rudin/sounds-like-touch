import { h } from "preact"
import { useState, useEffect, useRef } from "preact/hooks"

// every point consists of an object with the angle, radius

const Dot = ({ x, y }) => (
  <div
    style={{
      position: "absolute",
      left: x,
      top: y,
      width: 8,
      height: 8,
      borderRadius: 4,
      transform: "translate3D(-4px, -4px, 0)",
      backgroundColor: "black",
    }}
  />
)

const calcAngle = (index, count) => ((Math.PI * 2) / count) * index

// eslint-disable-next-line react/display-name
export default ({
  points = [...Array(8).fill(null)].map((_, index, source) => ({
    radius: 200,
    angle: calcAngle(index, source.length),
  })),
}) => {
  return (
    <div style={{ position: "relative", left: 300, top: 300 }}>
      {points.map(({ angle, radius }) => {
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        return <Dot x={x} y={y} />
      })}
    </div>
  )
}
