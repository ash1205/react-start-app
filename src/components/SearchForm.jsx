import React from "react";

function SearchForm() {
  const [inputValue, setInputValue] = React.useState("");

  const handleSearch = (query) => {
    console.log(`Search query: ${query}`);
  };

  const handleGenreSelect = (genre) => {
    console.log(`Selected genre: ${genre}`);
  };

  //const initialSearchQuery = "Search for movies...";

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // const handleSearch = () => {
  //   onSearch(inputValue);
  // };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch(inputValue);
    }
  };

  return (
    <div className="input-group w-75 mb-3 h-25">
      <input
        type="text"
        className="form-control h-25 p-3"
        placeholder={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchForm;
