import { Post } from '@/types';
import { create } from 'zustand';

interface useEditorStore {
  // Current Post
  currentPost: Post | null;
  setCurrentPost: (content: Post) => void;
  // Current Editing Values
  editingName: string;
  setEditingName: (newName: string) => void;
  editingContent: string;
  setEditingContent: (newContent: string) => void;
  deleteModalOpen: boolean;
  setDeleteModalOpen: (value: boolean) => void;
  // Preview
  showPreview: boolean;
  setShowPreview: () => void;
}

export const useEditorStore = create<useEditorStore>((set) => ({
  // Current Post
  currentPost: null,
  setCurrentPost: (newPost: Post) => set({ currentPost: newPost }),
  // Current Editing Values
  editingName: '',
  setEditingName: (newName: string) => set({ editingName: newName.replace(' ', '-') }), // boşlukları tireye çevirir kebab-case
  editingContent: '',
  setEditingContent: (newContent: string) => set({ editingContent: newContent }), // boşlukları tireye çevirir kebab-case
  deleteModalOpen: false,
  setDeleteModalOpen: (value: boolean) => set({ deleteModalOpen: value }),
  showPreview: false,
  setShowPreview: () => set((state) => ({ showPreview: !state.showPreview })),
}));
