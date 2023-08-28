import { render, screen } from "../utils/test-utils";
import MainLanding from "./MainLanding";

test("renders main landing component", () => {
  render(<MainLanding />);
  const imageElement = screen.getByRole("img");
  expect(imageElement).toBeInTheDocument();
  const contactButton = screen.getByText("Entre em contato");
  expect(contactButton).toBeInTheDocument();
  const scheduleButton = screen.getByText("Agende sua consulta");
  expect(scheduleButton).toBeInTheDocument();
});
