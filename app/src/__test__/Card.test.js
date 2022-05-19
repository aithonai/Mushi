import "jest-styled-components"
import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react"
import Card from "../components/Card"
import { NewCard, Title, Thumbnail } from "../components/CardStyles"
import { ModalContainer } from "../components/ModalStyles"
import mushiLogo from "../assets/mushi_mini.png"

const props = {
	id: 1,
	price: 11,
	stock: 111,
	category: "Shop",
	name: "Mushi",
	description: "Mushi description",
	image: [mushiLogo],
	thumbnail: [mushiLogo],
	created_at: "2022-05-05T11:10:52.000Z",
  updated_at: "2022-05-05T11:10:52.000Z"
}

describe("Renders card information", () => {
	test("Renders title", () => {
		const { container } = render(<Card {...props} />)
		const title = container.querySelector(Title)
		expect(title).toHaveTextContent(props.name)
	})

	test("Renders thumbnail", () => {
		const { container } = render(<Card {...props} />)
		const cardImage = container.querySelector(`${Thumbnail} > img`)
		expect(cardImage.src).toContain(props.image[0])
	})
})

describe("Modal shows when click the Card", () => {
	test("Modal display turns to flex", () => {
		const { container } = render(<Card {...props} />)
		const card = container.querySelector(NewCard)
		const cardModal = container.querySelector(ModalContainer)

		fireEvent.click(card)
		expect(cardModal).toHaveStyleRule('display', 'flex')
	})

	test("Modal opacity turns to 1", () => {
		const { container } = render(<Card {...props} />)
		const card = container.querySelector(NewCard)
		const cardModal = container.querySelector(ModalContainer)

		fireEvent.click(card)
		expect(cardModal).toHaveStyleRule('opacity', '1')
	})
})
