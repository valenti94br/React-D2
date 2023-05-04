import React, { useState } from "react";
import Counter from './components/Counter/Counter'

const Counter = (props) => {
  const init = props.init || 0
  const numTwo = props.byTwo || 1
  const [counter, setCount] = useState(init)
  const increment = () => {
    setCount(counter + numTwo);
  };
  const decrement = () => {
    setCount(counter - numTwo);
  };
  return (
    <div>
      <p>CounterFunctional: {counter}</p>
      <button onClick={increment}>Increment</button>
      {
        counter > 0 ? <button onClick={decrement}>Decrement</button> : <button onClick={decrement} disabled>Decrement</button>
      }

    </div>
  )
}

export default Counter