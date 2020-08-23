import React from 'react';
import ReactDOM from 'react-dom';
import Button from './q2';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

it("renders without Crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div);
})

it("button has name prop and rendering correctly", () => {
    const { getByTestId } = render(<Button name="Click me please"></Button>)
    expect(getByTestId('myButton')).toHaveTextContent("Click me please")
})

it("renders button snapshot test", () => {
    const { asFragment } = render(<Button />);
    expect(asFragment()).toMatchSnapshot();
});
