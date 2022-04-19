import React, { useReducer } from "react";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return { count };
  }
}

export default function FormReduce() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleAdd = () => {
    dispatch({ type: INCREMENT });
  };

  const handleMinus = () => {
    dispatch({ type: DECREMENT });
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>{state.count}</h2>
      <button onClick={handleAdd}>Increment</button>
      <button onClick={handleMinus}>Decrement</button>
    </>
  );
}
