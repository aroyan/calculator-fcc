import { Button, Input } from "@chakra-ui/react";
import React, { useReducer } from "react";

const initialTodos = { todo: [] };
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state.todo, todo };
  }
};

export default function TodoReducer() {
  const [state, dispatch] = useReducer(reducer, initialTodos);
  return (
    <div>
      <Input type="text" />
      <Button
        color={"blue"}
        bg={"orange"}
        onClick={() => dispatch({ type: "ADD_TODO" })}
      >
        Submit
      </Button>
    </div>
  );
}
