import React, { useEffect, useState } from 'react';
import './Counter.css';

const Counter = () => {
  const MAX_VALUE = 1000;
  const MIN_VALUE = 0;
  const initialValue = 1;
  const [counter, setCounter] = useState(initialValue);

  const inputCounterHandler = (value) => {
    if(value > MAX_VALUE || value < MIN_VALUE) {
      return;
    }
    setCounter(value);
  }

  const changeCounterHandler = (value) => {
    if(value === '') {
      value = initialValue;
    } else if (value > MAX_VALUE || value < MIN_VALUE) {
      return;
    }
    setCounter(value);
  }


  return(
    <div className="counter-background">
      <div className="counter">
        <div className="decrement" onClick={() => changeCounterHandler(counter - 1, true )}>-</div>
        <div className="counter-value">
          <input
            type="number"
            className="counter-value"
            onChange={(e) => inputCounterHandler(e.target.value)}
            value={counter}
            required
          />
        </div>
        <div className="increment" onClick={() => changeCounterHandler(counter + 1)}>+</div>
      </div>
    </div>
  );
}

export default Counter;