import React, { useState, useEffect, useRef } from "react";
import { Button, Card, Dropdown, Modal, Form, Row, Col } from "react-bootstrap";
import { listOfGenres } from "../../lib/constants";
import MyDatePicker from "./MyDatePicker";

import threeDotsIcon from "../../MovieEdit.png";

export default function MovieList({ movies }) {
  const [modalInfo, setModalInfo] = useState({ show: false, movieIndex: 0 });
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setModalInfo({ show: false, movieIndex: 0 });
  };
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [openDropdowns, setOpenDropdowns] = useState(
    Array(movies.length).fill(false)
  );
  const dropdownRef = useRef(null);

  const handleGenreChange = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const toggleMenu = (index, event) => {
    const updatedOpenDropdowns = [...openDropdowns];
    updatedOpenDropdowns[index] = !updatedOpenDropdowns[index];

    if (updatedOpenDropdowns[index]) {
      for (let i = 0; i < updatedOpenDropdowns.length; i++) {
        if (i !== index) {
          updatedOpenDropdowns[i] = false;
        }
      }
    }

    setOpenDropdowns(updatedOpenDropdowns);
  };

  const closeMenu = () => {
    setOpenDropdowns(Array(movies.length).fill(false));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  });

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const getModalContent = (movieIndex) => {
    setShow(true);
    setModalInfo({ show: true, movieIndex });
  };

  function formatDate(inputDate) {
    const date = new Date(inputDate);
    console.log("Date Before format : ", date);
    if (isNaN(date.getTime())) {
      return inputDate;
    }
  
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    const formattedDate = `${month}/${day}/${year}`;
    console.log("Date After format : ", formattedDate);
    return formattedDate;
  }

  return (
    <div className="d-flex flex-row gap-4 flex-wrap">
      {movies.map((movie, idx) => (
        <Card style={{ width: "14rem", position: "relative" }} key={idx}>
          <div className="position-relative">
            <Card.Img src={movie.poster_path} variant="top" alt="..." />
            <img
              src={threeDotsIcon}
              alt="Three Dots"
              className="three-dots-icon"
              onClick={(event) => {
                toggleMenu(idx, event);
                stopPropagation(event);
              }}
              style={{
                position: "absolute",
                top: "8%",
                left: "88%",
                transform: "translate(-50%, -50%)",
                cursor: "pointer",
              }}
            />
          </div>
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.genres}</Card.Text>
            <Card.Text>{movie.release_date}</Card.Text>
            <Button variant="primary">Book now</Button>
          </Card.Body>
          {openDropdowns[idx] && (
            <div ref={dropdownRef}>
              <Dropdown
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                }}
                show={openDropdowns[idx]}
                align="end"
                onClose={closeMenu}
              >
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => getModalContent(idx)}>
                    Edit
                  </Dropdown.Item>
                  <Dropdown.Item>Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          )}
        </Card>
      ))}
      {modalInfo.show && (
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
                  <Form.Group className="mb-3" controlId="formMovieTitle">
                    <Form.Label>TITLE</Form.Label>
                    <Form.Control
                      placeholder="Tile"
                      value={movies[modalInfo.movieIndex].title}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formMovieReleaseDate">
                    <Form.Label>RELEASE DATE</Form.Label>
                    <MyDatePicker
                      //startDate={formatDate(movies[modalInfo.movieIndex].release_date)}
                      style={{ position: "relative", width: "500px" }}
                    ></MyDatePicker>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={7}>
                  <Form.Group className="mb-3" controlId="formMovieURL">
                    <Form.Label>MOVIE URL</Form.Label>
                    <Form.Control
                      placeholder="https://"
                      value={movies[modalInfo.movieIndex].poster_path}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formMovieRating">
                    <Form.Label>RATING</Form.Label>
                    <Form.Control
                      placeholder="7.8"
                      value={movies[modalInfo.movieIndex].vote_average}
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
                  <Form.Group className="mb-3" controlId="formMovieRunTime">
                    <Form.Label>RUNTIME</Form.Label>
                    <Form.Control
                      placeholder="minutes"
                      value={movies[modalInfo.movieIndex].runtime}
                    />
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
                      value={movies[modalInfo.movieIndex].overview}
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
      )}
    </div>
  );
}
