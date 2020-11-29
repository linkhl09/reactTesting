import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Checkbox from "../checkbox";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(
      <Checkbox labelActive="Active" labelInactive="Inactive" />,
      container
    );
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Testing Checkbox component", () => {
  it("Defaults to Inactive label", () => {
    const label = container.querySelector("label");
    expect(label.textContent).toBe("Inactive");
  });
});
