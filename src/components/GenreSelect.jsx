import React from "react";
import { useState } from "react";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

import PropTypes from "prop-types";

function GenreSelect(props) {
  const { allGenres } = props;
  const [genreValue, setGenreValue] = useState("1");

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
            value={genre.value}
            checked={genreValue === genre.value}
            onChange={(event) => setGenreValue(event.currentTarget.value)}
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
