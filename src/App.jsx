import './App.css';
import React from 'react';
import Counter from './components/Counter';
import SearchForm from './components/SearchForm';
import GenreSelect from './components/GenreSelect';

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
      <h1>React IMDB App</h1>
      <Counter initialValue={0} />
      <SearchForm initialSearchQuery={initialSearchQuery} onSearch={handleSearch} />
      <GenreSelect
        genres={genres}
        selectedGenre="Action" 
        onSelect={handleGenreSelect}
      />
    </div>
  );
}

export default App;
