import { useCounterStore } from "./CounterStore";

export const Child = () => {
  const count = useCounterStore((s) => s.count);
  const increment = useCounterStore((s) => s.increment);

  return (
    <>
      <p>Child Count: {count}</p>
      <button onClick={increment}>Increase</button>
    </>
  );
};
