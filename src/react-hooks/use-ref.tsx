import { useEffect, useRef, useState } from "react";

export const UseRefHook = () => {
  const [name, setName] = useState("SG");

  // useRef to store the previous name value, persists across renders without causing re-renders
  const prevName = useRef("");

  // useRef to track render count, initialized to 1, persists without triggering re-renders
  const renderCount = useRef(1);

  // useEffect to increment render count on each render
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  // useEffect to update prevName ref whenever name state changes
  useEffect(() => {
    prevName.current = name;
  }, [name]);

  // useRef to hold a reference to the input DOM element, initialized to null
  const inputRef = useRef<HTMLInputElement>(null);

  // Function to focus the input element using the inputRef
  function focus() {
    inputRef.current?.focus();
  }

  return (
    <>
      <h3>Use Ref Example</h3>

      {/* Input element with ref to access its DOM node, controlled by name state */}
      <input ref={inputRef} type="name" value={name} onChange={(e) => setName(e.target.value)} />
      <p>My Name is {name}</p>

      {/* Display the previous name stored in prevName ref */}
      <p>Before my name was {prevName.current}</p>

      {/* Display the number of renders tracked by renderCount ref */}
      <p>I have rendered: {renderCount.current}</p>

      {/* Button to trigger the focus function */}
      <button onClick={focus}>Focus</button>
    </>
  );
};
