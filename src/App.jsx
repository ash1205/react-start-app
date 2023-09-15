import "./App.css";
import React from "react";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import MovieList from "./components/MovieList";

function App() {
  return (
    <>
      <Header />
      <Container className=" p-4">
        <SearchForm />
        <MovieList />
      </Container>
    </>
  );
}

export default App;
