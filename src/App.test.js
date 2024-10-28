import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import '@testing-library/jest-dom';

// Mock images to prevent import errors
jest.mock("../src/images/background.png", () => "background.png");
jest.mock("../src/images/car.png", () => "car.png");
jest.mock("../src/images/monacobackground.png", () => "monacobackground.png");
jest.mock("../src/images/middle.png", () => "middle.png");
jest.mock("../src/images/gradient.png", () => "gradient.png");
jest.mock("../src/images/reversedgradient.png", () => "reversedgradient.png");
jest.mock("../src/images/cardimage1.png", () => "cardimage1.png");
jest.mock("../src/images/cardimage2.png", () => "cardimage2.png");
jest.mock("../src/images/cardimage3.png", () => "cardimage3.png");
jest.mock("../src/images/calendar.svg", () => "calendar.svg");
jest.mock("../src/images/flag.svg", () => "flag.svg");
jest.mock("../src/images/play.svg", () => "play.svg");
jest.mock("../src/images/graph.svg", () => "graph.svg");

describe("App Component (Without Parallax)", () => {
  test("renders Monaco Grand Prix heading", () => {
    render(<App />);
    expect(screen.getByText("Monaco Grand Prix")).toBeInTheDocument();
  });

  test("renders Oracle In Practice heading", () => {
    render(<App />);
    expect(screen.getByText("Oracle In Practice")).toBeInTheDocument();
  });

  test("conditionally renders date and place information", () => {
    render(<App />);
    
    // Check for date and location info
    expect(screen.getByText("24 – 27 NOV 2023")).toBeInTheDocument();
    expect(screen.getByText("Monaco")).toBeInTheDocument();
  });
});
