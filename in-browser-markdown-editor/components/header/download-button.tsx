import { useEditorStore } from '@/zustand-stores/editor-store';
import React from 'react';
import downloadIcon from '@/public/icons/icon-download.svg';
import Image from 'next/image';

export default function DownloadButton() {
  const { currentPost } = useEditorStore();

  const handleClick = () => {
    if (!currentPost?.content) return alert('No registered file found!');

    const encodedData = encodeURIComponent(currentPost.content);
    const dataUri = `data:text/markdown;charset=utf-8,${encodedData}`;

    const a = document.createElement('a');
    a.href = dataUri;
    a.download = `${currentPost.name || 'untitled'}.md`;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <button onClick={handleClick} title='Markdown olarak indir' className='p-2 mr-[12] hover:opacity-80 transition'>
      <Image src={downloadIcon} alt='download icon' width={18} height={20} className='hover:sepia-[40]' />
    </button>
  );
}
