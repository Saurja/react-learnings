import { useReducer } from "react";

// Define action types as a union for better type safety
type ActionType = "increment" | "decrement";

// Define state type
interface CounterState {
  count: number;
}

// Define action type
interface CounterAction {
  type: ActionType;
}

// Action constants
const ACTIONS: Record<string, ActionType> = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

// Reducer function with typed state and action
function reducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// Rename component to avoid hook-like naming
export const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 } as CounterState);

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  return (
    <>
      <h3>Counter with useReducer</h3>
      <button onClick={decrement} aria-label="Decrement counter">
        -
      </button>
      <span>{state.count}</span>
      <button onClick={increment} aria-label="Increment counter">
        +
      </button>
    </>
  );
};
