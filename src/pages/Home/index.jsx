import React, { useState } from "react";
import SearchForm from "./SearchForm";
import MovieList from "./MovieList";
import { allMovies } from "../../lib/constants";

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
      <MovieList movies={movies} />
    </>
  );
}
