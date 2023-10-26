import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";

function Counter(props) {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0) setValue(value - 1);
  };

  return (
    <div>
      <Button
        variant="danger"
        size="sm"
        style={{ marginRight: "10px" }}
        onClick={() => handleDecrement()}
      >
        +
      </Button>
      <input
        type="text"
        size="1"
        style={{
          fontSize: "12px",
          padding: "2px",
          marginTop: "15px",
          marginBottom: "15px",
        }}
        placeholder={value}
      />
      <Button
        variant="success"
        size="sm"
        style={{ marginLeft: "10px" }}
        onClick={() => handleIncrement()}
      >
        +
      </Button>
    </div>
  );
}

export default Counter;
