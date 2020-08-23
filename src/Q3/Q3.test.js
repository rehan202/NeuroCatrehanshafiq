import React from 'react';
import ReactDOM from 'react-dom';
import Textbox from './q3';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

it("renders without Crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Textbox></Textbox>, div);

})

it("renders Textbox snapshot test", () => {
    const { asFragment } = render(<Textbox />);
    expect(asFragment()).toMatchSnapshot();
});
