import React from "react";

import { listOfGenres } from "../lib/constants";

import GenreSelect from "../components/GenreSelect";

export default {
  title: "GenreSelect",
  component: GenreSelect,
  argTypes: {
    allGenres: { control: "array" },
  },
  tags: ["autodocs"],
};

export const Default = (args) => (
  <GenreSelect {...args} allGenres={listOfGenres} />
);
