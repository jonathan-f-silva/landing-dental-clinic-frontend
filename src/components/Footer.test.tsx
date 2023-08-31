import { render } from "../utils/test-utils";
import Footer from "./Footer";

test("render the footer", () => {
  const { getByText } = render(<Footer text="footer test text" />);
  const text = getByText(/footer test text/i);
  expect(text).toBeInTheDocument();
});
