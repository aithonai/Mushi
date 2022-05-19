import "jest-styled-components"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Loader from "../components/Loader"
import { Animation } from "../components/LoaderStyles"
import loader_logo from "../assets/loader.svg"

beforeEach(() => render(<Loader />))

test("renders animation", () => {
  const loader = screen.getByAltText("Loader")
  expect(loader).toBeInTheDocument()
  expect(loader.src).toContain(loader_logo)
})
