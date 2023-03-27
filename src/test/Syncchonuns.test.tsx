import { render, screen } from "@testing-library/react";
import Demo1 from "../components/Demo1";

test('render component Demo1', () => {
    render(<Demo1 />);
  
    const divElement = screen.getByText(/pleum/i);
    expect(divElement).toBeInTheDocument();
  });