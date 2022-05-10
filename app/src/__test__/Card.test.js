import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import Card from "../components/Card"
import { Title, Thumbnail } from "../components/CardStyles"
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

test("Renders title", () => {
	const { container } = render(<Card {...props} />)
	const title = container.querySelector(Title)
	expect(title).toHaveTextContent(props.name)
})

test("Renders thumbnail", async () => {
	const { container } = await render(<Card {...props} />)
	const cardImage = container.querySelector(`${Thumbnail} > img`)
	expect(cardImage.src).toContain(props.image[0])
})
