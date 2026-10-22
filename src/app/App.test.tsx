import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { store } from "./store";

test("renders Hello", () => {
  const { getByText } = render(<App />);

  expect(getByText("Hello")).toBeInTheDocument();
});
