import { create } from "zustand";

type store = {
  bears: number;
  fish: number;
  increasePopulation: (by: number) => void;
  eatFish: () => void;
  addFish: () => void;
  removeAllBears: () => void;
};

const useBearStore = create<store>((set) => ({
  bears: 0,
  fish: 10,
  increasePopulation: (by: number) => set((state) => ({ bears: state.bears + by })),
  eatFish: () => set((state) => ({ fish: state.fish - 1 })),
  addFish: () => set((state) => ({ fish: state.fish + 1 })),
  removeAllBears: () => set(() => ({ bears: 0 })),
}));

export const useBears = () => useBearStore((state) => state.bears);
export const useFishes = () => useBearStore((state) => state.fish);

// Export action selectors
export const useAddBear = () => useBearStore((state) => state.increasePopulation);
export const useEatFish = () => useBearStore((state) => state.eatFish);
export const useAddFish = () => useBearStore((state) => state.addFish);
export const useRemoveAllBears = () => useBearStore((state) => state.removeAllBears);
