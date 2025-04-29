import Image from 'next/image';
import documentIcon from '@/public/icons/icon-document.svg';
import React from 'react';
import { Post as PostType } from '@/types';
import { useEditorStore } from '@/zustand-stores/editor-store';

export const Post = React.memo(({ post }: { post: PostType }) => {
  const { setCurrentPost } = useEditorStore();

  const handleClick = () => {
    setCurrentPost(post);
  };

  return (
    <li className='flex items-center justify-center mb-[26px]'>
      <Image src={documentIcon} alt={post.name || 'icon'} unoptimized width={14} height={16} className='mr-[16px]' />
      <div>
        <p className='text-[13px] text-(--color-500)'>{post.createdAt}</p>
        <button onClick={handleClick} className='text-[15px] text-(--color-100) hover:text-(--orange) cursor-pointer'>
          {post.name?.replace('.md', '')}.md
        </button>
      </div>
    </li>
  );
});
