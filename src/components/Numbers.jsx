import React, { useReducer } from "react";

const HANDLE_NUMBER = "HANDLE_NUMBER";

const reducer = (state, action) => {
  switch (action.type) {
    case HANDLE_NUMBER:
      return {
        prev: state.prev + prev,
      };
  }
};

export default function Numbers() {
  const [state, dispatch] = useReducer(reducer, {
    prev: 0,
    curr: 0,
    formula: "",
  });

  function handleNumber(e) {
    dispatch({ type: HANDLE_NUMBER });
  }
  return (
    <>
      <p>Previous state is : {state.prev}</p>
      <p>Current state is : {state.curr}</p>
      <p>Formula is : {state.formula}</p>
      <button>1</button>
      <button>2</button>
      <button>3</button>
    </>
  );
}
