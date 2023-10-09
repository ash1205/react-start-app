import React from 'react';
import { useState } from 'react';
import { allGenres } from '../lib/constants';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';



function GenreSelect({ genres, selectedGenre, onSelect }) {
  const [genreValue, setGenreValue] = useState('1');

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

export default GenreSelect;
