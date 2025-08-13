import { create } from "zustand";

export const useCounterStore = create<{ count: number; increment: () => void }>((set) => ({
  count: 0,
  increment: () => set((s) => ({ count: s.count + 1 })),
}));
