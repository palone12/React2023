import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>A Simple Counter using UseState Hook</h1>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        on
        onClick={() => {
          if (count !== 0) {
            setCount(count - 1);
          }
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;
