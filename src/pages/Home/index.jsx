import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import { listOfGenres } from "../../lib/constants";
import GenreSelect from "../../components/GenreSelect";
import ResultsSort from "./ResultsSort";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [sortBy, setSortBy] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState(["Action"]);

  const fetchMovies = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const queryParams = new URLSearchParams({
      search: searchTerm,
      searchBy: "title",
      limit: 10,
      offset: 0,
      sortOrder: "desc",
      sortBy: sortBy,
      filter: selectedGenres,
    });

    fetch(
      `${process.env.REACT_APP_API_URL}/movies?${queryParams.toString()}`,

      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.data))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetchMovies();
  });

  const handleSearch = (inputValue) => {
    setSearchTerm(inputValue);
  };

  const handleSort = (selectValue) => {
    setSortBy(selectValue);
  };

  const handleGenreChanges = (optionValue) => {
    setSelectedGenres(optionValue);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${require("../../Header.jpg")})`,
          width: "1280px",
          height: "250px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <label
            style={{
              marginRight: "1020px",
              marginTop: "10px",
              marginLeft: "10px",
              color: "#F65261",
            }}
          >
            netflixroulette
          </label>
          <AddMovie></AddMovie>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <SearchForm handleSearch={handleSearch} />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#888888",
          width: "1280px",
          height: "10px",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <GenreSelect
          allGenres={listOfGenres}
          handleGenreChanges={handleGenreChanges}
        ></GenreSelect>
        <ResultsSort handleSort={handleSort} />
      </div>
      <MovieList movies={movies} />
    </>
  );
}
