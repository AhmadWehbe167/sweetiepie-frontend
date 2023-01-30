import React from "react";
import { render, screen } from "@testing-library/react";
import HeroSection from "../../../../pages/home/hero";

describe("HeroSection component", () => {
  it("renders correctly", () => {
    render(<HeroSection />);
    expect(
      screen.getByText("A Taste Of Heaven In Every Bite!")
    ).toBeInTheDocument();
    expect(screen.getByText("Shop Now")).toBeInTheDocument();
  });
});
