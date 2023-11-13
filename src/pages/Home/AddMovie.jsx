import { useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { listOfGenres } from "../../lib/constants";

import calandarIcon from "../../CalendarIcon.png";
import MyDatePicker from "./MyDatePicker";

function AddMovie() {
  const [show, setShow] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [startDate, setStartDate] = useState(null);

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleGenreChange = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const addMovie = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      title: "La La Land",
      tagline: "Here's to the fools who dream.",
      vote_average: 7.9,
      vote_count: 6782,
      release_date: "2016-12-29",
      poster_path:
        "https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg",
      overview:
        "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
      budget: 30000000,
      revenue: 445435700,
      runtime: 128,
      genres: ["Comedy", "Drama", "Romance"],
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:4000/movies", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className={`input-group mb-3 mt-3`}>
      <Button
        variant="dark"
        onClick={handleShow}
        style={{
          background: "black",
          color: "#F65261",
        }}
      >
        + ADD MOVIE
      </Button>

      <Modal size="lg" show={show} onHide={handleClose} backdrop="static">
        <Modal.Header
          closeButton
          style={{
            fontSize: "12px",
            height: "50px",
          }}
        >
          <Modal.Title>ADD MOVIE</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            background: "black",
            color: "#F65261",
          }}
        >
          <Form>
            <Row>
              <Col xs={7}>
                <Form.Group className="mb-3" controlId="formMovieTitle">
                  <Form.Label>TITLE</Form.Label>
                  <Form.Control placeholder="Tile" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formMovieReleaseDate">
                  <Form.Label>RELEASE DATE</Form.Label>
                  <div style={{ position: "relative", width: "200px" }}>
                    <MyDatePicker
                      style={{ position: "relative", width: "500px" }}
                    ></MyDatePicker>
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={7}>
                <Form.Group className="mb-3" controlId="formMovieURL">
                  <Form.Label>MOVIE URL</Form.Label>
                  <Form.Control placeholder="https://" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formMovieRating">
                  <Form.Label>RATING</Form.Label>
                  <Form.Control placeholder="7.8" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={7}>
                <Form.Group className="mb-3" controlId="formMovieGenres">
                  <Form.Label>GENRE</Form.Label>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="secondary"
                      id="genre-dropdown"
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        paddingRight: "20px",
                        backgroundColor: "white",
                        color: "black",
                      }}
                    >
                      Select Genre
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{
                        width: "100%",
                      }}
                    >
                      {listOfGenres.map((genre) => (
                        <Form.Check
                          aria-label="option 1"
                          key={genre.value}
                          type="checkbox"
                          label={genre.name}
                          checked={selectedGenres.includes(genre.value)}
                          onChange={() => handleGenreChange(genre.value)}
                          style={{
                            marginLeft: "10px",
                          }}
                        />
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formMovieRunTime">
                  <Form.Label>RUNTIME</Form.Label>
                  <Form.Control placeholder="minutes" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formMovieOverview">
                  <Form.Label>OVERVIEW</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Movie description"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer
          style={{
            background: "#232323",
            color: "#FFFFFF",
          }}
        >
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addMovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddMovie;
