import { render, screen } from "../utils/test-utils";
import Header from "./Header";

test("renders header with correct title", () => {
  render(<Header title="Clínica Odontológica" />);
  const title = screen.getByText(/Clínica Odontológica/i);
  expect(title).toBeInTheDocument();
});

test("renders header with links", () => {
  const links = [
    {
      href: "#about",
      description: "Sobre",
    },
  ];
  render(<Header title="Clínica Odontológica" links={links} />);
  const title = screen.getByText(/Clínica Odontológica/i);
  const aboutLink = screen.getByRole("link", { name: /Sobre/i });
  expect(title).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
});
