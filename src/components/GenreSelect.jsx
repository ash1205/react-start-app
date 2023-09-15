import React from 'react';
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';



function GenreSelect({ genres, selectedGenre, onSelect }) {
  const [radioValue, setRadioValue] = useState('1');

    return (
      <div>
      <ButtonGroup>
        {genres.map((genre, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={genre.variant}
            name="radio"
            value={genre.value}
            checked={radioValue === genre.value}
            //onChange={(event) => setRadioValue(event.currentTarget.value)}
          >
            {genre.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      </div>
    );
  }

export default GenreSelect;
