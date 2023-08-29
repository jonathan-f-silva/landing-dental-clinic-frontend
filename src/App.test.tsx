import { render, screen } from "./utils/test-utils";
import App from "./App";

test("renders main application components", () => {
  render(<App />);
  screen.getByText(/Clínica Odontológica/i);
  screen.getByText(/Onde estamos/i);
  screen.getByText(/Entre em contato!/i);
  screen.getByText(/Rua 15 de Novembro, 1234/i);
});
