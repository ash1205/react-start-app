import React from "react";
import { Button, Card } from "react-bootstrap";
import { movies } from "../lib/constants";

export default function MovieList() {
  return (
    <div className="d-flex flex-row gap-4 flex-wrap">
      {movies.map((movie) => (
        <Card style={{ width: "15rem" }}>
          <Card.Img src={movie.poster} variant="top" alt="..." />
          <Card.Body>
            <Card.Title>{movie.name}</Card.Title>
            <Card.Text>{movie.genre}</Card.Text>
            <Button variant="primary">Book now</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
