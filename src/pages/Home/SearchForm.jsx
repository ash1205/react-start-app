import React from "react";

import Button from "react-bootstrap/Button";

import PropTypes from "prop-types";

function SearchForm(props) {
  const [inputValue, setInputValue] = React.useState([]);
  const { searchFieldWidth = "medium", searchFieldHeight = "medium" } = props;

  const searchFieldWidthMap = {
    small: "w-25",
    medium: "w-75",
    large: "w-100",
  };

  const searchFieldHeightMap = {
    small: "p-1",
    medium: "p-3",
    large: "p-5",
  };

  const handleSearch = () => {
    props.handleSearch(inputValue);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div
      className={`input-group ${searchFieldWidthMap[searchFieldWidth]} mb-5 mt-3`}
    >
      <input
        type="text"
        className={`form-control ${searchFieldHeightMap[searchFieldHeight]}`}
        placeholder={"Search for Movies ..."}
        onChange={handleInputChange}
      />
      <Button
        style={{
          background: "#F65261",
          color: "white",
        }}
        onClick={handleSearch}
      >
        SEARCH
      </Button>
    </div>
  );
}

SearchForm.propTypes = {
  searchFieldWidth: PropTypes.oneOf(["small", "medium", "large"]),
  searchFieldHeight: PropTypes.oneOf(["small", "medium", "large"]),
  handleSearch: PropTypes.func,
  handleInputChange: PropTypes.func,
};

SearchForm.defaultProps = {
  searchFieldWidth: "medium",
  searchFieldHeight: "medium",
};

export default SearchForm;
