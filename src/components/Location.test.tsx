import { render, screen } from "../utils/test-utils";
import Location from "./Location";

test("renders location map and address details", () => {
  render(
    <Location
      url="http://someurl.com"
      description="alguma descrição de teste"
    />,
  );
  const title = screen.getByText(/Localização/i);
  const map = screen.getByTitle(/localização da clínica no mapa/i);
  const address = screen.getByText(/alguma descrição de teste/i);
  expect(title).toBeInTheDocument();
  expect(map).toBeInTheDocument();
  expect(map).toBeInstanceOf(HTMLIFrameElement);
  expect(map).toHaveAttribute("src", "http://someurl.com");
  expect(address).toBeInTheDocument();
});
