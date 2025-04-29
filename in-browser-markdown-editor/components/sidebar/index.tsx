'use client';
import React, { useEffect } from 'react';
import ThemeSwitcher from './theme-switcher';
import { Post } from './post';
import NewDocumentButton from './new-document-button';
import { useSidebarStore } from '@/zustand-stores/sidebar-store';
import { usePostStore } from '@/zustand-stores/post-store';

export default function Sidebar() {
  const { posts } = usePostStore();
  const { isSidebarOpen } = useSidebarStore();

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      body.classList = isSidebarOpen ? 'sidebar-active' : '';
    }
  }, [isSidebarOpen]);

  return (
    <aside className={`w-[250px] h-[100%] min-h-dvh pt-[27] pl-[24] pr-[24] fixed left-0 top-0 overflow-hidden bg-(--color-900) ${isSidebarOpen ? 'ml-0' : 'ml-[-250px]'}`}>
      <p className='font-bold text-[15px] tracking-[5] p-[8px_30px_8px_0] mb-[24] lg:hidden xs:flex'>MARKDOWN</p>

      <p className='pb-[29] text-[14px] text-(--color-500) font-medium tracking-[2]'>MY DOCUMENTS</p>
      <NewDocumentButton />
      <ul className='flex direct flex-col items-start'>{posts.length > 0 ? posts.map((post, index) => <Post key={index} post={post} />) : <p>No documents..</p>}</ul>
      <ThemeSwitcher />
    </aside>
  );
}
