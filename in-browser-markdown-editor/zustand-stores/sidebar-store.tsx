import { create } from 'zustand';

interface useSidebarStore {
  isSidebarOpen: boolean;
  setIsSidebarOpen: () => void;
}

export const useSidebarStore = create<useSidebarStore>((set) => ({
  isSidebarOpen: false,
  setIsSidebarOpen: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));
