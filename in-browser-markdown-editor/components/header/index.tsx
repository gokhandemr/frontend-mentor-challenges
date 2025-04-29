'use client';

import Image from 'next/image';
import documentIcon from '@/public/icons/icon-document.svg';
import SidebarToggleButton from './sidebar-toggle-button';
import DeleteButton from './delete-button';
import SaveButton from './save-button';
import PostNameInput from './post-name-input';
import React, { useEffect } from 'react';
import { useSidebarStore } from '@/zustand-stores/sidebar-store';
import { usePostStore } from '@/zustand-stores/post-store';
import { useEditorStore } from '@/zustand-stores/editor-store';
import DeleteModal from './delete-modal';
import DownloadButton from './download-button';

export const Header = React.memo(() => {
  const { setCurrentPost } = useEditorStore();
  const { posts } = usePostStore();

  useEffect(() => {
    setCurrentPost(posts[0]);
  }, []);

  return (
    <header className='w-full md:h-[72px] bg-(--color-800) flex items-center justify-between xs:h-[56]'>
      <div className='h-[100%] flex items-center'>
        <SidebarToggleButton />
        <p className='font-bold text-[15px] tracking-[5] p-[8px_30px_8px_0] mr-[24] border-r border-(--color-600) border-solid lg:flex xs:hidden'>MARKDOWN</p>

        <div className='flex items-center'>
          <Image src={documentIcon} alt='document icon' width={14} height={16} className='w-[14] h-[16] mr-[16]' />
          <div>
            <p className='text-[13px] text-(--color-500) md:flex xs:hidden'>Document Name</p>
            <PostNameInput />
          </div>
        </div>
      </div>

      <div className='mr-[16] flex items-center'>
        <DownloadButton />
        <DeleteButton />
        <SaveButton />
      </div>

      <DeleteModal />
    </header>
  );
});
