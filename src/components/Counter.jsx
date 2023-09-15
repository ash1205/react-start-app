import React from 'react';
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function Counter({ initialValue }) {
  const [value, setValue] = React.useState(initialValue);
  const [radioValue, setRadioValue] = useState('1');
  const counters = [
    { name: 'Decrement', value: '1', variant:'outline-primary' },
    { name: 'Increment', value: '2', variant:'outline-warning' },
  ];

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  return (
    <div>
      <p>Counter Value: {value}</p>
      {/* <Button variant='danger' onClick={handleDecrement} >Decrement</Button>
      <Button variant='success'onClick={handleIncrement}>Increment</Button> */}
      <ButtonGroup>
        {counters.map((counter, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={counter.variant}
            name="radio"
            value={counter.value}
            checked={radioValue === counter.value}
            onChange={(event) => setRadioValue(event.currentTarget.value)}
          >
            {counter.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
}

export default Counter;
