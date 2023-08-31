import { render, screen } from "../utils/test-utils";
import Header from "./Header";

test("renders header with correct title and links", () => {
  render(<Header title="Clínica Odontológica" />);
  const title = screen.getByText(/Clínica Odontológica/i);
  const contactLink = screen.getByRole("link", { name: /Contato/i });
  const registerLink = screen.getByRole("link", { name: /Localização/i });
  expect(title).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
  expect(registerLink).toBeInTheDocument();
});

test("renders header with additional links", () => {
  const additionalLinks = [
    {
      href: "#about",
      description: "Sobre",
    },
  ];
  render(
    <Header title="Clínica Odontológica" additionalLinks={additionalLinks} />,
  );
  const title = screen.getByText(/Clínica Odontológica/i);
  const contactLink = screen.getByRole("link", { name: /Contato/i });
  const registerLink = screen.getByRole("link", { name: /Localização/i });
  const aboutLink = screen.getByRole("link", { name: /Sobre/i });
  expect(title).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
  expect(registerLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
});
