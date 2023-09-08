import './App.css';
import React from 'react';
import Counter from './counterComponent';
import SearchForm from './searchFormComponent';
import GenreSelect from './genreSelectComponent';

function App() {
  const handleSearch = (query) => {
    console.log(`Search query: ${query}`);
  };

  const handleGenreSelect = (genre) => {
    console.log(`Selected genre: ${genre}`);
  };

  const genres = ['Action', 'Comedy', 'Drama', 'Science Fiction', 'Thriller'];
  const initialSearchQuery = 'Your initial search query';

  return (
    <div className="App">
      <Counter initialValue={0} />
      <SearchForm initialSearchQuery={initialSearchQuery} onSearch={handleSearch} />
      <GenreSelect
        genres={genres}
        selectedGenre="Action" // Replace with your initially selected genre
        onSelect={handleGenreSelect}
      />
    </div>
  );
}

export default App;
