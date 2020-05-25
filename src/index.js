import "./style"
import App from "./components/app"

export default App

if (typeof window !== "undefined") {
  window.document.addEventListener("gesturestart", (e) => {
    e.preventDefault()
    // special hack to prevent zoom-to-tabs gesture in safari
    document.body.style.zoom = 0.99
  })

  window.document.addEventListener("gesturechange", (e) => {
    e.preventDefault()
    // special hack to prevent zoom-to-tabs gesture in safari
    document.body.style.zoom = 0.99
  })

  window.document.addEventListener("gestureend", (e) => {
    e.preventDefault()
    // special hack to prevent zoom-to-tabs gesture in safari
    document.body.style.zoom = 0.99
  })
}
