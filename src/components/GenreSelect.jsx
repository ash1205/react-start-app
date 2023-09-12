import React from 'react';

function GenreSelect({ genres, selectedGenre, onSelect }) {
    return (
      <div>
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => onSelect(genre)}
            className={genre === selectedGenre ? 'selected' : ''}
          >
            {genre}
          </button>
        ))}
      </div>
    );
  }

export default GenreSelect;
