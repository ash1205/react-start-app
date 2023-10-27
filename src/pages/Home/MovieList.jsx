import React from "react";
import { Button, Card } from "react-bootstrap";

export default function MovieList({ movies }) {
  return (
    <div className="d-flex flex-row gap-4 flex-wrap">
      {movies.map((movie, idx) => (
        <Card style={{ width: "15rem" }} key={idx}>
          <Card.Img src={movie.poster_path} variant="top" alt="..." />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.genres}</Card.Text>
            <Card.Text>{movie.release_date}</Card.Text>
            <Button variant="primary">Book now</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
