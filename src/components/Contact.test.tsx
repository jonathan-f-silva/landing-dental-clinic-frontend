import { render, screen, userEvent } from "../utils/test-utils";
import Contact from "./Contact";

test("renders contact component", () => {
  render(<Contact />);
  const title = screen.getByText(/Entre em contato!/i);
  expect(title).toBeInTheDocument();
  const name = screen.getByLabelText(/Nome/i);
  expect(name).toBeInTheDocument();
  const email = screen.getByLabelText(/E-mail/i);
  expect(email).toBeInTheDocument();
  const phone = screen.getByLabelText(/Telefone/i);
  expect(phone).toBeInTheDocument();
  const message = screen.getByLabelText(/Mensagem/i);
  expect(message).toBeInTheDocument();
  const prefersWhatsapp = screen.getByLabelText(
    /Prefere contato por WhatsApp?/i,
  );
  expect(prefersWhatsapp).toBeInTheDocument();
  const submitButton = screen.getByRole("button", { name: /Enviar/i });
  expect(submitButton).toBeDisabled();
});

test("submits form only with valid data", async () => {
  render(<Contact />);
  const name = screen.getByLabelText(/Nome/i);
  const email = screen.getByLabelText(/E-mail/i);
  const phone = screen.getByLabelText(/Telefone/i);
  const message = screen.getByLabelText(/Mensagem/i);
  const prefersWhatsapp = screen.getByRole("checkbox", {
    name: /Prefere contato por WhatsApp?/i,
  });
  const submitButton = screen.getByRole("button", { name: /Enviar/i });

  await userEvent.type(name, "John Doe");
  await userEvent.type(email, "jonh.doe@example.com");
  await userEvent.type(phone, "11999999999");
  await userEvent.type(message, "Olá, gostaria de um orçamento!");
  await userEvent.click(prefersWhatsapp);

  expect(name).toHaveValue("John Doe");
  expect(email).toHaveValue("jonh.doe@example.com");
  expect(phone).toHaveValue("11999999999");
  expect(message).toHaveValue("Olá, gostaria de um orçamento!");
  expect(prefersWhatsapp).toBeChecked();
  expect(submitButton).toBeEnabled();
});
