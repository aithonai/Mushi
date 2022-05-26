import { useEffect } from "react"
import { ModalContainer, Body } from "./ModalStyles"

export default function Modal(props) {
  const closeModal = () => props.closeModal()

  const handleModalClose = e => {
    const ModalContainerID = ModalContainer.styledComponentId
    if (e.target.className.includes(ModalContainerID)) closeModal()
  }

  const preventPageScroll = () => {
    props.isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset")
  }

  const closeWithEscape = e => (e.charCode || e.keyCode) === 27 && closeModal()

  useEffect(preventPageScroll, [props.isOpen])
  useEffect(() => {
    document.body.addEventListener("keydown", closeWithEscape)
    document.body.addEventListener("click", handleModalClose)
    return function cleanup() {
      document.body.removeEventListener("keydown", closeWithEscape)
      document.body.removeEventListener("click", handleModalClose)
    }
  })

  return (
    <ModalContainer isOpen={props.isOpen}>
      <Body>{props.children}</Body>
    </ModalContainer>
  )
}
