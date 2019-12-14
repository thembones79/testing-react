import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

/*
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  //expect(div.innerHTML).toContain("Hi there!");
});
*/

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  expect(div.innerHTML).toContain("Hi there!");

  ReactDOM.unmountComponentAtNode(div);
});
