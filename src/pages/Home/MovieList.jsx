import React, { useState, useEffect, useRef } from "react";
import { Button, Card, Dropdown } from "react-bootstrap";

import threeDotsIcon from "../../MovieEdit.png";

export default function MovieList({ movies }) {
  const [openDropdowns, setOpenDropdowns] = useState(
    Array(movies.length).fill(false)
  );
  const [menuPosition] = useState({ top: 0, left: 0 });
  const dropdownRef = useRef(null);

  const toggleMenu = (index) => {
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
                toggleMenu(idx);
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
                  top: menuPosition.top + 20 + "px",
                  left: menuPosition.left + 30 + "px",
                }}
                show={openDropdowns[idx]}
                align="end"
                onClose={closeMenu}
              >
                <Dropdown.Menu>
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item>Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}
