import { create } from 'zustand';

interface useInputStore {
  inputOpen: boolean;
  setInputOpen: (value: boolean) => void;
}

export const useInputStore = create<useInputStore>((set) => ({
  inputOpen: false,
  setInputOpen: (value: boolean) => set({ inputOpen: value }),
}));
