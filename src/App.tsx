import { useState } from "react";
import "./App.css";
import { UseEffectHook } from "./react-hooks/use-effect";
import { UseStateHook } from "./react-hooks/use-state";
import { UseMemoHook } from "./react-hooks/use-memo";
import { UseRefHook } from "./react-hooks/use-ref";
import { CreateContextHook } from "./react-hooks/use-context/context-parent";
import { UseReducerHook } from "./react-hooks/use-reducer";

function App() {
  const [showEffectExample, setShowEffectExample] = useState<boolean>(true);
  const changeShowEffect = () => setShowEffectExample((state) => !state);

  return (
    <>
      <h1>Hooks Example</h1>
      <UseStateHook></UseStateHook>
      <hr />
      <button onClick={changeShowEffect}>{!showEffectExample ? "Show" : "Hide"} Component</button>
      {showEffectExample ? <UseEffectHook /> : <p>Component Hidden</p>}
      <hr />
      <UseMemoHook></UseMemoHook>
      <hr />
      <UseRefHook></UseRefHook>
      <hr />
      <CreateContextHook></CreateContextHook>
      <hr />
      <UseReducerHook></UseReducerHook>
    </>
  );
}

export default App;
