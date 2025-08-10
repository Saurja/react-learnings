import { useState } from "react";

export const UseStateHook = () => {
  // const [count, setCount] = useState(3);

  // When passing the initial state in a function it is not rerendered on change
  const [count, setCount] = useState(() => 3);

  // Hooks should be mentioned at top of the functional components
  // React Hooks must be called in the same order this will fail if uncommented
  // if (true) {
  //   useState();
  // }

  const increaseCount = () => setCount((count: number) => count + 1);
  const decreaseCount = () => setCount((count: number) => count - 1);

  // Object as initial state
  const [person, setPerson] = useState({ name: "S", age: 0 });
  const changePerson = () =>
    setPerson((prevState) => {
      return { ...prevState, age: prevState.age + 1 };
    });

  return (
    <>
      <h3>Use State Example</h3>
      <p>Click to increase count and then decrease it</p>
      <button onClick={increaseCount}>{count}</button>
      <button onClick={decreaseCount}>-</button>
      <p>Set Object new</p>
      Name:{person.name} Age: {person.age}
      <br />
      <button onClick={changePerson}>AgeUp !</button>
    </>
  );
};
