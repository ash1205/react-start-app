import React, { useState } from "react";
import SearchForm from "./SearchForm";
import MovieList from "./MovieList";
import { allMovies } from "../../lib/constants";
import { listOfGenres } from "../../lib/constants";
import GenreSelect from "../../components/GenreSelect";
import Counter from "../../components/Counter";

export default function Home() {
  const [movies, setMovies] = useState(allMovies);

  const handleSearch = (inputValue) => {
    const filteredMovies = allMovies.filter((movie) =>
      movie.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setMovies(filteredMovies);
  };

  return (
    <>
      <SearchForm handleSearch={handleSearch} />
      <GenreSelect allGenres={listOfGenres}></GenreSelect>
      <Counter></Counter>
      <MovieList movies={movies} />
    </>
  );
}
