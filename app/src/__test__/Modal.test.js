import "jest-styled-components"
import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react"
import Modal from "../components/Modal"
import { useModal } from "../hooks/useModal"
import { NewCard, Title, Thumbnail } from "../components/CardStyles"
import { ModalContainer, CloseButton } from "../components/ModalStyles"

describe("Close modal properly", () => {
	test("Modal close using close button", () => {
		const { container } = render(<Modal />)
		const modalContainer = container.querySelector(ModalContainer)
		const closeButton = container.querySelector(CloseButton)

		fireEvent.click(modalContainer)
		fireEvent.click(closeButton)

		expect(modalContainer).toHaveStyleRule('display', 'none')
	})

	test("Modal close when click darken zone", () => {
		const { container } = render(<Modal />)
		const modalContainer = container.querySelector(ModalContainer)

		fireEvent.click(modalContainer) // Open modal
		fireEvent.click(modalContainer) // Click darken zone
		expect(modalContainer).toHaveStyleRule('display', 'none')
	})
})