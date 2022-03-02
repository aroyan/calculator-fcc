import React, { useReducer } from "react";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const initialCount = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return count;
  }
};

export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialCount);
  return (
    <div>
      <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
    </div>
  );
}
