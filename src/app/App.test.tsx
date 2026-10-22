import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders HOME", () => {
  const { getByText } = render(<App />);
  expect(getByText("HOME")).toBeTruthy();
});
