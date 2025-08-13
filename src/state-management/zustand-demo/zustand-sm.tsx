import { useCounterStore } from "./CounterStore";
import { Child } from "./zustand-child";

export const ParentZustandDemo = () => {
  const count = useCounterStore((s) => s.count);
  const increment = useCounterStore((s) => s.increment);

  return (
    <>
      <h3>Zustand Demo for state management</h3>
      <p>Parent Count: {count}</p>
      <button onClick={increment}>Increase</button>

      <br />
      <Child></Child>
      <Child></Child>
    </>
  );
};
