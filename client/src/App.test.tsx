import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

jest.mock("./pages/Dashboard", () => () => (
  <div data-testid="mock-dashboard" />
));

describe("App Component", () => {
  it("should render the Dashboard component", () => {
    render(<App />);
    const dashboardElement = screen.getByTestId("mock-dashboard");
    expect(dashboardElement).toBeInTheDocument();
  });
});
