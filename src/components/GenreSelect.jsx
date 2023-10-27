import React from "react";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

import PropTypes from "prop-types";

function GenreSelect(props) {
  const { allGenres } = props;

  const handleOptionChange = (event) => {
    props.handleGenreChanges(event.target.value);
  };

  return (
    <div>
      <ButtonGroup>
        {allGenres.map((genre, idx) => (
          <ToggleButton
            key={idx}
            id={`genre-${idx}`}
            type="radio"
            variant={genre.variant}
            name="genre"
            value={genre.name}
            onChange={handleOptionChange}
          >
            {genre.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
}

GenreSelect.propTypes = {
  allGenres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
      variant: PropTypes.string,
    })
  )
};

export default GenreSelect;
