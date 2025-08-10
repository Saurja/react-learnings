import { useEffect, useMemo, useState } from "react";

export const UseMemoHook = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // useMemo is a React hook that memoizes (caches) the result of a computation to optimize performance
  // It prevents expensive calculations from running on every render unless dependencies change
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  // useMemo to memoize the themeStyles object, recalculates only when 'dark' changes
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: !dark ? "black" : "white",
    };
  }, [dark]);

  // useEffect to log when themeStyles changes
  useEffect(() => {
    console.log(`Theme changed`);
  }, [themeStyles]);

  return (
    <>
      <h3>Use Memo Example</h3>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark((prev) => !prev)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
};

function slowFunction(num: number) {
  console.log("Calling Slow Function...");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
