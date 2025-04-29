'use client';
import { useEditorStore } from '@/zustand-stores/editor-store';
import { useThemeStore } from '@/zustand-stores/theme-store';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import showPreviewIcon from '@/public/icons/icon-show-preview.svg';
import hidePreviewIcon from '@/public/icons/icon-hide-preview.svg';

export default function MarkdownEditor() {
  const { currentPost, editingContent, setEditingContent, showPreview, setShowPreview } = useEditorStore();
  const { isDarkMode } = useThemeStore();
  const markdownRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setEditingContent(currentPost?.content || '');
  }, [currentPost]);

  useEffect(() => {
    setTimeout(() => {
      if (!markdownRef.current) return;
      markdownRef.current.style.display = showPreview ? 'none' : '';
    }, 200);
  }, [showPreview]);

  return (
    <section ref={markdownRef} className={`${showPreview ? 'md:w-[0] xs:hidden' : 'md:w-[50%]'} xs:w-[100%] ${isDarkMode ? 'border-(--color-600) bg-(--color-1000) text-(--color-400)' : 'border-(--color-300) text-(--color-700)'} md:flex flex-wrap content-start h-full border-r border-solid relative`}>
      <p className={`${isDarkMode && 'bg-(--color-900)'} w-full bg-(--color-200) text-(--color-500) text-[14px] tracking-[2px] p-[12px_16px]`}>MARKDOWN</p>
      <button onClick={() => setShowPreview()} className='md:hidden xs:flex absolute right-[14px] top-[16px] hover:sepia-[40]'>
        <Image src={!showPreview ? showPreviewIcon : hidePreviewIcon} alt='preview icon' width={16} height={16} />
      </button>
      <textarea value={editingContent} onChange={(e) => setEditingContent(e.target.value)} className='w-full h-[calc(100dvh-72px-45px)] p-[8px_16px] resize-none outline-0 text-[14px]' />
    </section>
  );
}
