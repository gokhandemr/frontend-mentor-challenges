'use client';

import { useEditorStore } from '@/zustand-stores/editor-store';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import showPreviewIcon from '@/public/icons/icon-show-preview.svg';
import hidePreviewIcon from '@/public/icons/icon-hide-preview.svg';
import { useThemeStore } from '@/zustand-stores/theme-store';

export default function PreviewPost() {
  const { editingContent, showPreview, setShowPreview } = useEditorStore();
  const { isDarkMode } = useThemeStore();
  const [htmlContent, setHtmlContent] = useState<string>('');

  const markdownToHTML = async () => {
    const file = await unified().use(remarkParse).use(remarkRehype, { allowDangerousHtml: true }).use(rehypeStringify).process(editingContent);
    setHtmlContent(file.value.toString());
  };

  useEffect(() => {
    markdownToHTML();
  }, [editingContent]);

  return (
    <main className={`${showPreview ? 'md:w-full' : 'md:w-[50%] xs:hidden'} !duration-300 md:flex flex-wrap content-start h-full md:max-h-[calc(100dvh-72px)] xs:max-h-[calc(100dvh-56px)] ${isDarkMode ? 'border-(--color-600) bg-(--color-1000) text-(--color-400)' : 'border-(--color-300) text-(--color-500)'}`}>
      <div className={`${isDarkMode && 'bg-(--color-900)'} relative w-full bg-(--color-200)`}>
        <p className='w-full text-[var(--color-500)] text-[14px] tracking-[2px] p-[12px_16px]'>PREVIEW</p>
        <button onClick={() => setShowPreview()} className='absolute right-[14px] top-[16px] hover:sepia-[40]'>
          <Image src={!showPreview ? showPreviewIcon : hidePreviewIcon} alt='preview icon' width={16} height={16} />
        </button>
      </div>
      <div className={`${isDarkMode && 'darkMode'} htmlContent w-full h-[calc(100dvh-72px-45px)] p-[12px_16px] overflow-y-scroll`} dangerouslySetInnerHTML={{ __html: htmlContent || '' }} />
    </main>
  );
}
