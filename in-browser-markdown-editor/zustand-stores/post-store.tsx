import { Post } from '@/types';
import { create } from 'zustand';
import data from '@/data/index.json';

interface usePostStore {
  posts: Post[];
  deletePost: (name: string) => void;
  savePost: (name: string, newPost: Post) => void;
  addPost: (newPost: Post) => void;
}

export const usePostStore = create<usePostStore>((set) => ({
  posts: data,
  addPost: (newPost: Post) => set((state) => ({ posts: [newPost, ...state.posts] })),
  deletePost: (name: string) => set((state) => ({ posts: state.posts.filter((post) => post.name !== name) })),
  savePost: (oldName: string, newPosts: Post) => set((state) => ({ posts: state.posts.map((post) => (post.name === oldName ? newPosts : post)) })),
}));
