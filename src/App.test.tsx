import { renderWithRouter, screen } from "./utils/test-utils";

test("renders main application components", () => {
  renderWithRouter();
  screen.getByText(/Clínica Odontológica/i);
  screen.getByText(/Onde estamos/i);
  screen.getByText(/Entre em contato!/i);
  screen.getByText(/Rua 15 de Novembro, 1234/i);
  screen.getByText(/vai de digital/i);
});

test("renders dashboard components", () => {
  renderWithRouter(["/dashboard"]);
  screen.getByText(/Dashboard/i);
  screen.getByText(/Introdução/i);
  screen.getByText(/Banner/i);
  screen.getByText(/Adicionar botões para as seções/i);
  screen.getByText(/Salvar alterações/i);
});
