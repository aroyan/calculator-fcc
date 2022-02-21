import React, { useReducer } from 'react';
import { Button } from '@chakra-ui/react';

export default function HooksReducer() {
  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <Button
        onClick={() => dispatch({ type: 'decrement' })}
        color={'black'}
        m={'5'}
      >
        -
      </Button>
      Count: {state.count}
      <Button
        onClick={() => dispatch({ type: 'increment' })}
        color={'black'}
        m={'4'}
      >
        +
      </Button>
    </div>
  );
}
