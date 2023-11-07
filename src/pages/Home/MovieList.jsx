import React, { useState } from "react";
import { Button, Card, Modal, Form, Row, Col, Dropdown } from "react-bootstrap";

import { listOfGenres } from "../../lib/constants";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import threeDotsIcon from "../../MovieEdit.png";

export default function MovieList({ movies }) {
  const [modalInfo] = useState({ show: false, movieIndex: 0 });
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  const [show, setShow] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const handleClose = () => setShow(false);

  const openModal = (movie, position) => {
    if (showModal) {
      closeModal();
    }
    setSelectedMovie(movie);
    setModalPosition(position);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const handleGenreChange = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const getModalContent = () => {
    const movie = movies[modalInfo.movieIndex];
    const handleShow = () => setShow(true);

    return (
      <div>
        <Dropdown.Item eventKey="1" onClick={handleShow}>
          Edit
        </Dropdown.Item>
        <Dropdown.Item eventKey="2">Delete</Dropdown.Item>

        <Modal size="lg" show={show} onHide={handleClose} backdrop="static">
          <Modal.Header
            closeButton
            style={{
              fontSize: "12px",
              height: "50px",
            }}
          >
            <Modal.Title>EDIT MOVIE</Modal.Title>
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
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>TITLE</Form.Label>
                    <Form.Control placeholder="Tile" value={movie.title} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>RELEASE DATE</Form.Label>
                    <DatePicker
                      className="form-control"
                      selected={startDate}
                      onChange={handleDateChange}
                      dateFormat="MM/dd/yyyy"
                      isClearable
                      placeholderText="Select Date"
                      value={movie.release_date}
                      style={{
                        background: "#323232",
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={7}>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>MOVIE URL</Form.Label>
                    <Form.Control
                      placeholder="https://"
                      value={movie.poster_path}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>RATING</Form.Label>
                    <Form.Control
                      placeholder="7.8"
                      value={movie.vote_average}
                    />
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
                            key={genre.value}
                            type="checkbox"
                            label={genre.name}
                            checked={selectedGenres.includes(genre.value)}
                            onChange={() => handleGenreChange(genre.value)}
                          />
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>RUNTIME</Form.Label>
                    <Form.Control placeholder="minutes" value={movie.runtime} />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>OVERVIEW</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Movie description"
                      value={movie.overview}
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
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  };

  return (
    <div className="d-flex flex-row gap-4 flex-wrap">
      {movies.map((movie, idx) => (
        <Card style={{ width: "14rem", position: "relative" }} key={idx}>
          <div className="position-relative">
            <Card.Img src={movie.poster_path} variant="top" alt="..." />
            <div
              className="three-dots-icon"
              style={{
                position: "absolute",
                top: "8%",
                left: "88%",
                transform: "translate(-50%, -50%)",
                cursor: "pointer",
              }}
              onClick={(e) => openModal(movie, { x: e.clientX, y: e.clientY })}
            >
              <img src={threeDotsIcon} alt="Three Dots" />
            </div>
          </div>
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.genres}</Card.Text>
            <Card.Text>{movie.release_date}</Card.Text>
            <Button variant="primary">Book now</Button>
          </Card.Body>
        </Card>
      ))}

      <Modal
        backdrop="static"
        show={showModal}
        onHide={closeModal}
        style={{
          position: "absolute",
          left: modalPosition.x + "px",
          top: modalPosition.y + "px",
          width: "10rem",
        }}
      >
        {selectedMovie && (
          <Modal.Header
            closeButton
            style={{
              fontSize: "8px",
              height: "1rem",
            }}
          ></Modal.Header>
        )}
        <Modal.Body>{selectedMovie && getModalContent()}</Modal.Body>
      </Modal>
    </div>
  );
}
