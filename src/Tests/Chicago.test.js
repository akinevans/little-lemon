// Chicago.test.js

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Chicago from "./Chicago";

describe("Chicago component", () => {
  it("renders the component correctly", () => {
    const { getByText, getByAltText } = render(<Chicago />);
    const screen = Screen;
    // Check for the presence of main titles
    expect(screen.getByText("Little Lemon")).toBeInTheDocument();
    expect(screen("Chicago")).toBeInTheDocument();

    // Check for the presence of the article text
    expect(screen.getByText(/Welcome to Little Lemon/i)).toBeInTheDocument();
    expect(
      screen.getByText(/our creamy hummus and freshly baked pita/i)
    ).toBeInTheDocument();

    // Check for the presence of the images with correct alt texts
    expect(
      screen.getByAltText("two chefs working in the kitchen")
    ).toBeInTheDocument();
    expect(
      screen.getByAltText("two chefs laughing in the kitchen")
    ).toBeInTheDocument();
  });
});
