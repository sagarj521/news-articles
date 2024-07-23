import { render, screen } from "@testing-library/react";
import App from "../../App";

test("renders app title", () => {
  render(<App />);
  const linkElement = screen.getByText(/NY Times Most Popular Articles/i);
  expect(linkElement).toBeInTheDocument();
});

test("matches snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
