import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import CommentBox from "../CommentBox";

it("shows a comment box", () => {
  const wrapped = shallow(<App />);
  console.log({ hmmmmmm: wrapped.find(CommentBox).length });
  expect(wrapped.find(CommentBox).length).toEqual(1);
});
