import React from "react";
import { render, fireEvent } from "@testing-library/react";
import GenreSelect from "./GenreSelect";

const mockHandleGenreChanges = jest.fn();

const mockGenres = [
  { name: "Action", value: "action", variant: "primary" },
  { name: "Comedy", value: "comedy", variant: "success" },
];

describe("GenreSelect Component", () => {
  it("renders correctly", () => {
    const { container } = render(
      <GenreSelect allGenres={mockGenres} handleGenreChanges={mockHandleGenreChanges} />
    );
    expect(container).toMatchSnapshot();
  });

  it("calls handleGenreChanges when a genre is selected", () => {
    const { getByLabelText } = render(
      <GenreSelect allGenres={mockGenres} handleGenreChanges={mockHandleGenreChanges} />
    );

    fireEvent.click(getByLabelText("Action"));

    expect(mockHandleGenreChanges).toHaveBeenCalledWith("Action");
  });

});
