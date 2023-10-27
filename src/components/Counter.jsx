import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";

import PropTypes from "prop-types";

function Counter(props) {
  const { counterWidth, counterHeight } = props;

  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0) setValue(value - 1);
  };

  const counterWidthMap = {
    small: "5px",
    medium: "35px",
    large: "50px",
  };

  const counterHeightMap = {
    small: "5px",
    medium: "35px",
    large: "50px",
  };

  return (
    <div className="w-25">
      <Button
        variant="danger"
        size="1"
        style={{
          marginRight: "10px",
          width: counterWidthMap[counterWidth],
          height: counterHeightMap[counterHeight],
          textAlign: "center",
        }}
        onClick={() => handleDecrement()}
      >
        -
      </Button>
      <input
        className="form-control d-inline w-25"
        type="text"
        size="1"
        style={{
          fontSize: "12px",
          padding: "2px",
          marginTop: "25px",
          marginBottom: "15px",
          width: counterWidthMap[counterWidth],
          height: counterHeightMap[counterHeight],
          textAlign: "center",
        }}
        placeholder={value}
      />
      <Button
        variant="success"
        size="1"
        style={{
          marginLeft: "10px",
          width: counterWidthMap[counterWidth],
          height: counterHeightMap[counterHeight],
          textAlign: "center",
        }}
        onClick={() => handleIncrement()}
      >
        +
      </Button>
    </div>
  );
}

Counter.propTypes = {
  counterWidth: PropTypes.oneOf(["small", "medium", "large"]),
  counterHeight: PropTypes.oneOf(["small", "medium", "large"]),
  handleIncrement: PropTypes.func,
  handleDecrement: PropTypes.func,
};

export default Counter;
