window.onload = () => {
  let container = document.getElementById("pinlist-overlay-container")
  if (container == null) {
    container = document.createElement("div")
    container.id = "pinlist-overlay-container"
    container.style.position = "fixed"
    container.style.zIndex = "2147483647"
    container.style.top = "0"
    container.style.right = "0"
    document.body.appendChild(container)
  }
}
