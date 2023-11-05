import React, { useState, useRef } from "react";
import { Button, Card, Dropdown } from "react-bootstrap";

import threeDotsIcon from "../../MovieEdit.png";

export default function MovieList({ movies }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    if (dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      setMenuPosition({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  };

  return (
    <div className="d-flex flex-row gap-4 flex-wrap">
      {movies.map((movie, idx) => (
        <Card style={{ width: "14rem", position: "relative" }} key={idx}>
          <div className="position-relative">
            <Card.Img src={movie.poster_path} variant="top" alt="..." />

            {/* Small three dots image (clickable) */}
            <img
              src={threeDotsIcon}
              alt="Three Dots"
              className="three-dots-icon"
              onClick={toggleMenu}
              style={{
                position: "absolute",
                top: "8%",
                left: "88%",
                transform: "translate(-50%, -50%)",
                cursor: "pointer",
              }}
            />

            {/* Custom dropdown menu */}
            {isMenuOpen && (
              <div
                className="custom-dropdown-menu"
                style={{
                  top: menuPosition.top + "px",
                  left: menuPosition.left + "px",
                  zIndex: 1000, // Ensure it's above the card
                }}
              >
                <Dropdown
                  show={true}
                  ref={dropdownRef}
                  style={{
                    display: "block",
                  }}
                >
                  <Dropdown.Toggle
                    variant="light"
                    id="custom-dropdown-toggle"
                    style={{ display: "none" }}
                  >
                    <i className="fas fa-ellipsis-h"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Action</Dropdown.Item>
                    <Dropdown.Item>Another action</Dropdown.Item>
                    <Dropdown.Item>Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            )}
          </div>
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
