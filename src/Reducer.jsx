import { Button, Container, Heading, Input } from "@chakra-ui/react";
import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
}

const initialState = 10;

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [value, setValue] = useState(0);
  return (
    <Container>
      <Heading as={"h2"} p={"5"}>
        {state}
      </Heading>
      <Input
        type={"number"}
        placeholder={"Input Here"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        color={"black"}
        onClick={() => dispatch({ type: "INCREMENT", payload: value })}
      >
        Increment
      </Button>
      <Button
        color={"black"}
        onClick={() => dispatch({ type: "DECREMENT", payload: value })}
      >
        Decrement
      </Button>
    </Container>
  );
};

export default Reducer;
