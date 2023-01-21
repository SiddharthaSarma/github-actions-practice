import React from "react";
import renderer from "react-test-renderer";
import App from "../App";

test("basic test", () => {
  const component = renderer.create(<App />);
  expect(component.toJSON()).toMatchSnapshot();
});
 
test("handle button", () => {
  const component = renderer.create(<App />);
  expect(component.root.findByType('button').children.length).toBe(2);
});