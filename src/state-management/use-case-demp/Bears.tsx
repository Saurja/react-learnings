import { BearAxn } from "./Actions";
import { useBears, useFishes } from "./bearStore";

export const BearsPage = () => {
  const bears = useBears();
  const fishes = useFishes();
  return (
    <>
      <h3>Bears and Fishes Store!</h3>
      <p>We have {bears} Bears!</p>
      <p>We have {fishes} Fish!</p>
      <BearAxn />
    </>
  );
};
