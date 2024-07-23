import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Loader from "../../components/Loader";

test("renders without crashing", () => {
  const { container } = render(<Loader />);
  expect(container).toBeInTheDocument();
});

test("matches snapshot", () => {
  const { asFragment } = render(<Loader />);
  expect(asFragment()).toMatchSnapshot();
});
