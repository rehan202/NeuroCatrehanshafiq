import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

it("renders App snapshot test", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
