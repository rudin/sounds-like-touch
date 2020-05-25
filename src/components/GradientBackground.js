import { h } from "preact"

const GradientBackground = () => (
  <div
    style={{
      position: "fixed",
      left: 0,
      right: 0,
      top: 0,
      height: "100vh",
      zIndex: 10,
      pointerEvents: "none",
      background:
        "radial-gradient(at 50% 25%, rgba(61,226,169,1) 0%, rgba(133,113,86,1) 100%)",
      mixBlendMode: "lighten",
    }}
  />
)

export default GradientBackground
