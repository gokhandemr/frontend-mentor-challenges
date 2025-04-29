import { useEditorStore } from '@/zustand-stores/editor-store';
import { useInputStore } from '@/zustand-stores/input-store';
import { usePostStore } from '@/zustand-stores/post-store';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import saveIcon from '@/public/icons/icon-save.svg';

export default function SaveButton() {
  const { editingName, editingContent, currentPost, setCurrentPost } = useEditorStore();
  const { setInputOpen } = useInputStore();
  const { savePost } = usePostStore();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const oldName = currentPost?.name || '';

  const handleClick = () => {
    const newPost = {
      createdAt: currentPost?.createdAt,
      name: editingName.includes('.md') ? editingName : `${editingName}.md`,
      content: editingContent,
    };
    savePost(oldName, newPost);
    setCurrentPost(newPost);
    setInputOpen(false);
  };

  useEffect(() => {
    if (!currentPost) return;
    if (!buttonRef.current) return;
    if (editingContent !== currentPost.content || editingName.replace('.md', '') !== currentPost.name?.replace('.md', '')) {
      buttonRef.current.classList.add('active');
    } else {
      buttonRef.current.classList.remove('active');
    }
  }, [editingContent, editingName, currentPost]);

  return (
    <button ref={buttonRef} onClick={handleClick} className='md:w-[152] xs:w-[40px] md:h-[48] xs:h-[40px] bg-(--orange) flex items-center justify-center rounded-[4] hover:bg-(--orange-hover) relative md:text-[15px] xs:text-[0px]'>
      <Image src={saveIcon} alt='save icon' width={16} height={16} className='md:mr-[8] xs:m-0' />
      Save Changes
    </button>
  );
}
