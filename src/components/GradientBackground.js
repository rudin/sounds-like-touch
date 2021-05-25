import { h } from "preact"

const gradients = {
  default: "radial-gradient(at 50% 25%, rgba(61,226,169,1) 0%, rgba(133,113,86,1) 100%)",
  tactology: "radial-gradient(at 50% 25%, rgba(0,126,255,1) 0%, rgba(255,0,0,1) 100%)"
}

const GradientBackground = ({id = "default"}) => (
  <div
    style={{
      position: "fixed",
      left: "50%",
      width: "clamp(130vh, 100vw, 100vw)",
      transform: "translateX(-50%)",
      top: 0,
      height: "100vh",
      zIndex: 10,
      pointerEvents: "none",
      background: gradients[id],
      mixBlendMode: "lighten",
      transition: "background 1.2s linear"
    }}
  />
)

export default GradientBackground
