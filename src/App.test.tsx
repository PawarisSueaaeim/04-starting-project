import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Demo1 from './components/Demo1';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('render component Demo1', () => {
  render(<Demo1 />);

  const divElement = screen.getByText(/pleum/i);
  expect(divElement).toBeInTheDocument();
});
