import React from 'react';
import { usePostStore } from '@/zustand-stores/post-store';
import { useEditorStore } from '@/zustand-stores/editor-store';

export default function NewDocumentButton() {
  const { setCurrentPost } = useEditorStore();
  const { addPost } = usePostStore();
  const date = new Date();

  const newPost = { createdAt: `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth()).padStart(2, '0')}-${date.getFullYear()}`, name: 'untitled-document.md', content: '' };

  const handleClick = () => {
    addPost(newPost);
    setCurrentPost(newPost);
  };

  return (
    <button onClick={handleClick} className='bg-(--orange) w-[202] h-[40] text-[15px] rounded-sm mb-[24] hover:bg-(--orange-hover) cursor-pointer'>
      + New Document
    </button>
  );
}
