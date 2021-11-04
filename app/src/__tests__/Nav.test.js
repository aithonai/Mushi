import { render, screen } from "@testing-library/react";
import Nav from "../components/Nav";

test("renders Buscar input placeholder" , () => {
  render(<Nav />);
  const placeholderText = screen.getByPlaceholderText(/Buscar/i);
  expect(placeholderText).toBeInTheDocument();
});
