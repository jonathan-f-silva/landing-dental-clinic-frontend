import { render, screen } from "../utils/test-utils";
import Header from "./Header";

test("renders header with correct title and links", () => {
  render(<Header />);
  const title = screen.getByText(/Clínica Odontológica/i);
  const contactLink = screen.getByRole("link", { name: /Contato/i });
  const registerLink = screen.getByRole("link", { name: /Cadastre-se/i });
  expect(title).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
  expect(registerLink).toBeInTheDocument();
});
