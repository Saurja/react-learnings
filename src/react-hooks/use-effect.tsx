import { useEffect, useState } from "react";

export const UseEffectHook = () => {
  const [name, setName] = useState<string>("TG");
  const [age, setAge] = useState<number>(24);
  const changeName = () => setName(() => "SG");
  const changeAge = () =>
    setAge(() => {
      console.log(`Setting age wont trigger effect as it is not the part of the deps array`);
      return 23;
    });

  const [width, setWidth] = useState(window.innerWidth);

  const changeWidth = () => {
    setWidth(() => window.innerWidth);
  };

  useEffect(() => {
    console.log(`This component has been mounted!`);
    console.log(`Name change detected, This is again trigged when values change`);

    window.addEventListener("resize", changeWidth);

    return () => {
      console.log(`Effect cleanup (name changed or component unmounted)`);

      window.removeEventListener("resize", changeWidth);
    };
  }, [name]);

  return (
    <>
      <h3>Use Effect Example</h3>
      <p>Check the console to see the life cycle</p>
      Hello, {name} 👋, Years: {age}
      <br />
      <span>Name variable is in deps array </span>
      <button onClick={changeName}>Change Name</button> <br />
      <span>Age variable is in not deps array </span>
      <button onClick={changeAge}>Change Age</button> <br />
      <p>Screen width: {width}</p>
    </>
  );
};
