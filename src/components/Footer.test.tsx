import { render } from "../utils/test-utils";
import Footer from "./Footer";

test("render the footer", () => {
  const { getByText } = render(<Footer />);
  const text = getByText(
    /© 2023 Vai De Digital. Todos os direitos reservados/i,
  );
  expect(text).toBeInTheDocument();
});
