import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Header from "../../components/header";
import 'matchmedia-polyfill';
import 'matchmedia-polyfill/matchMedia.addListener';

describe("Header", () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    cleanup();
    container.remove();
    container = null;
  });

  it("renders the menu icon, logo, and navigation bar", () => {
    const { getByAltText, getByText } = render(<Header />, { container });
    expect(getByAltText("menu icon")).toBeInTheDocument();
    expect(getByText("Sweetie Pies")).toBeInTheDocument();
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Shop")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();
    expect(getByText("Contact")).toBeInTheDocument();
  });

  it("toggles the open state when the menu icon is clicked", () => {
    const { getByAltText, getByText } = render(<Header />, { container });
    fireEvent.click(getByAltText("menu icon"));
    expect(getByText("Sweetie Pies")).toHaveClass("header__logo--invisible");
    fireEvent.click(getByAltText("menu icon"));
    expect(getByText("Sweetie Pies")).not.toHaveClass(
      "header__logo--invisible"
    );
  });
});
