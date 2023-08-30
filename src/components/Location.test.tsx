import { render, screen } from "../utils/test-utils";
import Location from "./Location";

test("renders location map and address details", () => {
  render(<Location />);
  const title = screen.getByText(/Localização/i);
  const map = screen.getByTitle(/localização da clínica no mapa/i);
  const address = screen.getByText(/Rua 15 de Novembro, 123/i);
  expect(title).toBeInTheDocument();
  expect(map).toBeInTheDocument();
  expect(address).toBeInTheDocument();
});
