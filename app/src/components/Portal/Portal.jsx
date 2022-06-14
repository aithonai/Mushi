import { createPortal } from "react-dom"
import { useState, useLayoutEffect } from "react"
import createWrapperAndAppendToBody from "./CreateWrapperAndAppendToBody"

function ReactPortal({ children, wrapperId = "react-portal-wrapper" }) {
  const [wrapperElement, setWrapperElement] = useState(null)

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId)
    let wrapperCreated = false;

    if (!element) {
      element = createWrapperAndAppendToBody(wrapperId)
      wrapperCreated = true;
    }
    setWrapperElement(element)

    return () => {
      if (wrapperCreated) {
        element.remove()
      }
    }
  }, [wrapperId])

  if (wrapperElement === null) return null

  return createPortal(children, wrapperElement)
}

export default ReactPortal
