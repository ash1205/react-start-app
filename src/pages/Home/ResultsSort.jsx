import React from "react";
import Form from "react-bootstrap/Form";

import PropTypes from "prop-types";

export default function ResultsSort(props) {
  const { sortFieldWidth = "small", sortFieldHeight = "small" } = props;

  const sortFieldWidthMap = {
    small: "w-25",
    medium: "w-75",
    large: "w-100",
  };

  const sortFieldHeightMap = {
    small: "p-1",
    medium: "p-3",
    large: "p-5",
  };

  const handleSelectChange = (event) => {
    props.handleSort(event.target.value);
  };

  return (
    <Form.Select
      className={`form-select ${sortFieldWidthMap[sortFieldWidth]} ${sortFieldHeightMap[sortFieldHeight]} mb-3`}
      id="dropdown-basic-button"
      title="SortBy"
      onChange={handleSelectChange}
    >
      <option value="title">Title</option>
      <option value="vote_count">Vote Count</option>
      <option value="release_date">Release Date</option>
      <option value="runtime">Runtime</option>
    </Form.Select>
  );
}

ResultsSort.propTypes = {
  sortFieldWidth: PropTypes.oneOf(["small", "medium", "large"]),
  sortFieldHeight: PropTypes.oneOf(["small", "medium", "large"]),
  handleSearch: PropTypes.func,
  handleInputChange: PropTypes.func,
};

ResultsSort.defaultProps = {
  sortFieldWidth: "small",
  sortFieldHeight: "small",
};
