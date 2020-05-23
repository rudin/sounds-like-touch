import { h } from "preact"

const GradientBackground = () => (
  <div
    style={{
      position: "fixed",
      left: 0,
      right: 0,
      top: 0,
      height: "100vh",
      zIndex: -1,
      background:
        "linear-gradient(180deg, rgba(85,115,108,1) 0%, rgba(65,65,201,1) 0%, rgba(0,212,255,1) 100%)",
    }}
  />
)

export default GradientBackground
