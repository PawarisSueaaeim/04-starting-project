import { render, screen } from "@testing-library/react";
import Demo1 from "../components/Demo1";
import Demo2 from "../components/Demo2";
import Demo3 from "../components/Demo3";
import Demo4 from "../components/Demo4";
import Demo5 from "../components/Demo5";
import Demo6 from "../components/Demo6";

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

test("render component Demo4", () => {
  render(<Demo4 />);

  const ancestor = screen.getByTestId("ancestor");
  const descendant = screen.getByTestId("descendant");
  const nonExistantElement = screen.getByTestId("does-not-exist");

  expect(ancestor).toContainElement(descendant);
  expect(descendant).not.toContainElement(ancestor);
  expect(ancestor).not.toContainElement(nonExistantElement);
});

test("render component Demo5", () => {
  render(<Demo5 />);

  const textInput = screen.getByTestId("input-text");
  const numberInput = screen.getByTestId("input-number");
  const emptyInput = screen.getByTestId("input-empty");
  const selectInput = screen.getByTestId("select-number");

  expect(textInput).toHaveValue("text");
  expect(numberInput).toHaveValue(5);
  expect(emptyInput).not.toHaveValue();
  expect(selectInput).toHaveValue(["second", "third"]);
});

test("render component Demo6", () => {
  render(<Demo6 />);

  const listElement = screen.getAllByTestId("li").length;
 
  expect(listElement).toBe(2);
  expect(screen.getByText(/pleum 20 male/i)).toBeInTheDocument();
  expect(screen.getByText(/mauris 22 female/i)).toBeInTheDocument();
});
