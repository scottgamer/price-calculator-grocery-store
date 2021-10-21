import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders the App component", () => {
    render(<App />);
    screen.getByRole("heading", { name: /Grocery Store/i });
  });

  test("lists initial products and values", () => {
    render(<App />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(4);

    const milkLabel = screen.getByLabelText(/Milk/i);
    const breadLabel = screen.getByLabelText(/Bread/i);
    const bananaLabel = screen.getByLabelText(/Banana/i);
    const appleLabel = screen.getByLabelText(/Apple/i);

    expect(milkLabel).toHaveValue(0);
    expect(breadLabel).toHaveValue(0);
    expect(bananaLabel).toHaveValue(0);
    expect(appleLabel).toHaveValue(0);
  });
});
