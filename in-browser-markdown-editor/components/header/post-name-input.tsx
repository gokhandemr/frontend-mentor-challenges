import { useEditorStore } from '@/zustand-stores/editor-store';
import { useInputStore } from '@/zustand-stores/input-store';
import React, { useEffect, useRef } from 'react';

export default function PostNameInput() {
  const { editingName, setEditingName, currentPost } = useEditorStore();
  const { inputOpen, setInputOpen } = useInputStore();

  const inputAreaRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setEditingName(currentPost?.name || '');
    setInputOpen(false);
  }, [currentPost]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isOutside = inputAreaRef.current && !inputAreaRef.current.contains(event.target as Node);
      if (isOutside) setInputOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [inputAreaRef]);

  return inputOpen ? (
    <>
      <input ref={inputAreaRef} type='text' value={editingName.replace('.md', '')} onChange={(e) => setEditingName(e.target.value)} className='text-[15px] shadow-[0_1px_white] outline-0 caret-orange-500 pl-[1]' />
      <span className='text-[15px]'>.md</span>
    </>
  ) : (
    <p className='text-[15px]' onClick={() => setInputOpen(true)}>
      {editingName}
    </p>
  );
}
