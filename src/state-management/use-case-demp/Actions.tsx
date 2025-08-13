import { useAddBear, useAddFish, useEatFish, useRemoveAllBears } from "./bearStore";

export const BearAxn = () => {
  const addBear = useAddBear();
  const eatFish = useEatFish();
  const addFish = useAddFish();
  const removeAllBears = useRemoveAllBears();

  return (
    <>
      <button onClick={() => addBear(1)}>Add a Bear</button>
      <button onClick={eatFish}>Eat Fish</button>
      <button onClick={addFish}>Add Fish</button>
      <button onClick={removeAllBears}>Remove All Bears</button>{" "}
    </>
  );
};
