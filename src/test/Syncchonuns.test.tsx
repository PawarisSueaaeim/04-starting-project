import { render, screen } from "@testing-library/react";
import Demo1 from "../components/Demo1";
import Demo2 from "../components/Demo2";
import Demo3 from "../components/Demo3";

test("render component Demo1", () => {
  render(<Demo1 />);

  const divElement = screen.getByText(/pleum/i);
  expect(divElement).toBeInTheDocument();
});

test("render component Demo2", () => {
  render(<Demo2 />);

  expect(screen.getByTestId("button")).toBeDisabled();
  expect(screen.getByTestId("input")).toBeDisabled();
  expect(screen.getByTestId("button2")).not.toBeDisabled();
});

test("render component Demo3", () => {
  render(<Demo3 />);

  expect(screen.getByTestId("empty")).toBeEmptyDOMElement();
  expect(screen.getByTestId("not-empty")).not.toBeEmptyDOMElement();
  expect(screen.getByTestId("with-whitespace")).not.toBeEmptyDOMElement();
});
