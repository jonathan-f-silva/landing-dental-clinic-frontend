import { render, screen, userEvent } from "../utils/test-utils";
import SignUp from "./SignUp";

test("renders sign up component", () => {
  render(<SignUp />);
  const nameInput = screen.getByLabelText("Nome");
  expect(nameInput).toBeInTheDocument();
  const emailInput = screen.getByLabelText("E-mail");
  expect(emailInput).toBeInTheDocument();
  const submitButton = screen.getByRole("button", { name: "Cadastrar" });
  expect(submitButton).toBeDisabled();
});

test("submits form only with valid data", async () => {
  render(<SignUp />);
  const nameInput = screen.getByLabelText("Nome");
  const emailInput = screen.getByLabelText("E-mail");
  const submitButton = screen.getByRole("button", { name: "Cadastrar" });

  await userEvent.type(nameInput, "John Doe");
  await userEvent.type(emailInput, "john.doe@example.com");

  expect(nameInput).toHaveValue("John Doe");
  expect(emailInput).toHaveValue("john.doe@example.com");
  expect(submitButton).toBeEnabled();
});
