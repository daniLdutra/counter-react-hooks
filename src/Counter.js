import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleAddition = () => {
    setCounter(counter + 1);
  };
  const handleSubtraction = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="container">
      <button onClick={handleSubtraction}>-</button>
      <h2>Counter: {counter}</h2>
      <button onClick={handleAddition}>+</button>
    </div>
  );
}

export default Counter;
