import { useEffect } from "react"
import * as Modal from "./ModalStyles"
import ReactPortal from "./Portal/Portal"

export default function ModalComponent(props) {
  useEffect(() => {
    props.active
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset")

    const closeWithEscape = e => e.key === "Escape" && props.close()
    document.body.addEventListener("keydown", closeWithEscape)
    return () => {
      document.body.removeEventListener("keydown", closeWithEscape)
    }
  }, [props])

  return (
    <ReactPortal wrapperId="react-portal-wrapper">
      <Modal.Modal active={props.active} onClick={props.close}>
        <Modal.Container>
          <Modal.Body>{props.children}</Modal.Body>
        </Modal.Container>
      </Modal.Modal>
    </ReactPortal>
  )
}
