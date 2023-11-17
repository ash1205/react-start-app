import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchForm from "./SearchForm";

const mockHandleSearch = jest.fn();

describe("SearchForm", () => {
  test("renders with default props", () => {
    render(<SearchForm />);

    expect(
      screen.getByPlaceholderText("Search for Movies ...")
    ).toBeInTheDocument();
    expect(screen.getByText("SEARCH")).toBeInTheDocument();
  });

  test("handles input change", () => {
    render(<SearchForm handleSearch={mockHandleSearch} />);

    const inputElement = screen.getByPlaceholderText("Search for Movies ...");
    fireEvent.change(inputElement, { target: { value: "Inception" } });

    expect(inputElement.value).toBe("Inception");
  });

  test("handles search button click", () => {
    render(<SearchForm handleSearch={mockHandleSearch} />);

    const inputElement = screen.getByPlaceholderText("Search for Movies ...");
    fireEvent.change(inputElement, { target: { value: "Inception" } });

    const searchButton = screen.getByText("SEARCH");
    fireEvent.click(searchButton);

    expect(mockHandleSearch).toHaveBeenCalledWith("Inception");
  });
});
