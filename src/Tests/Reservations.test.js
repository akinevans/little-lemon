//! to run test, in the terminal type: npm test
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Reservations from "../pages/Reservations";
import "@testing-library/jest-dom/extend-expect";

describe("Reservations Component", () => {
  test("renders the reservation form", () => {
    render(
      <MemoryRouter>
        <Reservations />
      </MemoryRouter>
    );

    // Check if all input fields are rendered
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });

  test("shows alert when form is incomplete", () => {
    render(
      <MemoryRouter>
        <Reservations />
      </MemoryRouter>
    );

    const alertMock = jest.spyOn(window, "alert").mockImplementation();

    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    expect(alertMock).toHaveBeenCalledWith(
      "Please fill out all fields to make a booking."
    );

    alertMock.mockRestore();
  });

  test("navigates to confirmation page when form is complete", () => {
    const navigateMock = jest.fn();

    render(
      <MemoryRouter>
        <Reservations />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Date/i), {
      target: { value: "2023-08-01" },
    });
    fireEvent.change(screen.getByLabelText(/Time/i), {
      target: { value: "14:00" },
    });
    fireEvent.change(screen.getByLabelText(/Number of Guests/i), {
      target: { value: "4" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    expect(navigateMock).toHaveBeenCalledWith("/confirmation-page");
  });
});
