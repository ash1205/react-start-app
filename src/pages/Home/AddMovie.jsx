import { useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddMovie() {
  const [show, setShow] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genres = ["Drama", "Action", "Comedy"];
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

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          style={{
            background: "#232323",
            color: "#FFFFFF",
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
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>TITLE</Form.Label>
                  <Form.Control
                    placeholder="Tile"
                    style={{
                      background: "#323232",
                    }}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>RELEASE DATE</Form.Label>
                  <DatePicker
                    className="form-control"
                    selected={startDate} // Use a state variable to manage the selected date
                    onChange={handleDateChange} // Define a function to handle date changes
                    dateFormat="MM/dd/yyyy" // You can customize the date format
                    isClearable // Add a clear button
                    placeholderText="Select Date"
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
                    style={{
                      background: "#323232",
                    }}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>RATING</Form.Label>
                  <Form.Control
                    placeholder="7.8"
                    style={{
                      background: "#323232",
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={7}>
                <Form.Group className="mb-3" controlId="formGroupGenres">
                  <Form.Label>GENRE</Form.Label>
                  <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="genre-dropdown">
                      Select Genre
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {genres.map((genre) => (
                        <Form.Check
                          key={genre}
                          type="checkbox"
                          label={genre}
                          checked={selectedGenres.includes(genre)}
                          onChange={() => handleGenreChange(genre)}
                        />
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>RUNTIME</Form.Label>
                  <Form.Control
                    placeholder="minutes"
                    style={{
                      background: "#323232",
                    }}
                  />
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
                    style={{
                      background: "#323232",
                    }}
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
}

export default AddMovie;
