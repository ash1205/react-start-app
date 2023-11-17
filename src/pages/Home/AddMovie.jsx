import React, { useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { listOfGenres } from "../../lib/constants";

import MyDatePicker from "./MyDatePicker";

function AddMovie() {
  const [show, setShow] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    releaseDate: "",
    movieURL: "",
    rating: "",
    runtime: "",
    overview: "",
  });
  const [validated, setValidated] = useState(false);

  const handleClose = () => {
    setShow(false);
    setValidated(false);
  };

  const handleShow = () => setShow(true);

  const handleGenreChange = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const addMovie = () => {
    const form = document.getElementById("movieForm");
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_URL}/movies`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    handleClose();
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
          <Form
            id="movieForm"
            noValidate
            validated={validated}
            onSubmit={(e) => e.preventDefault()}
          >
            <Row>
              <Col xs={7}>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Label>TITLE</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a movie title.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="releaseDate">
                  <Form.Label>RELEASE DATE</Form.Label>
                  <div style={{ position: "relative", width: "200px" }}>
                    <MyDatePicker
                      onChange={(date) =>
                        setFormData({ ...formData, releaseDate: date })
                      }
                    ></MyDatePicker>
                  </div>
                  <Form.Control.Feedback type="invalid">
                    Please provide a movie release date.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={7}>
                <Form.Group className="mb-3" controlId="movieURL">
                  <Form.Label>MOVIE URL</Form.Label>
                  <Form.Control
                    type="url"
                    placeholder="https://"
                    value={formData.movieURL}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a movie URL.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="rating">
                  <Form.Label>RATING</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="7.8"
                    value={formData.rating}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a movie rating.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={7}>
                <Form.Group className="mb-3" controlId="genres">
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
                  <Form.Control.Feedback type="invalid">
                    Please select at least one movie genre.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="runtime">
                  <Form.Label>RUNTIME</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="minutes"
                    value={formData.runtime}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a movie runtime.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="overview">
                  <Form.Label>OVERVIEW</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Movie description"
                    value={formData.overview}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a movie overview.
                  </Form.Control.Feedback>
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
