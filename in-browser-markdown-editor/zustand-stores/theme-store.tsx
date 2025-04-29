import { create } from 'zustand';

interface useThemeStore {
  isDarkMode: boolean;
  setIsDarkMode: () => void;
}

export const useThemeStore = create<useThemeStore>((set) => ({
  isDarkMode: true,
  setIsDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));
