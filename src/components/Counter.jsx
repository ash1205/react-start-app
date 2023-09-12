import React from 'react';

function Counter({ initialValue }) {
  const [value, setValue] = React.useState(initialValue);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  return (
    <div>
      <p>Counter Value: {value}</p>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;
