import React from "react";

function SearchForm(props) {
  const [inputValue, setInputValue] = React.useState("");

  const handleSearch = () => {
    props.handleSearch(inputValue);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="input-group w-75 mb-3 h-25">
      <input
        type="text"
        className="form-control h-25 p-3"
        placeholder={"Search for Movies ..."}
        onChange={handleInputChange}
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchForm;
