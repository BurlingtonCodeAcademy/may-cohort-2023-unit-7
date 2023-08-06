import React from "react";

// In rfc parameters, here we are using object destructuring to dive into props values directly from their keys in the rfc versus using props.key.
export default function CounterHardMode({ count, setCount }) {
    
  function countDown() {
    setCount(count - 1);
  }

  function countUp() {
    setCount(count + 1);
  }
  return (
    <div className="counter">
      <button onClick={countDown}>-</button>
      <span>{count}</span>
      <button onClick={countUp}>+</button>
    </div>
  );
}
