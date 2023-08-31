import { render, screen } from "../utils/test-utils";
import MainLanding from "./MainLanding";

test("renders main landing component", () => {
  render(
    <MainLanding
      bannerImageURL="https://via.placeholder.com/150"
      introText="test intro text"
      addSectionButtons={true}
    />,
  );
  const imageElement = screen.getByRole("img");
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute(
    "src",
    "https://via.placeholder.com/150",
  );
  const introText = screen.getByText("test intro text");
  expect(introText).toBeInTheDocument();
  const contactButton = screen.getByText("Entre em contato");
  expect(contactButton).toBeInTheDocument();
  const scheduleButton = screen.getByText("Onde estamos");
  expect(scheduleButton).toBeInTheDocument();
});

test("renders main landing component without buttons", () => {
  render(
    <MainLanding
      bannerImageURL="https://via.placeholder.com/150"
      introText="test intro text"
      addSectionButtons={false}
    />,
  );
  const imageElement = screen.getByRole("img");
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute(
    "src",
    "https://via.placeholder.com/150",
  );
  const introText = screen.getByText("test intro text");
  expect(introText).toBeInTheDocument();
  const contactButton = screen.queryByText("Entre em contato");
  expect(contactButton).not.toBeInTheDocument();
  const scheduleButton = screen.queryByText("Onde estamos");
  expect(scheduleButton).not.toBeInTheDocument();
});
