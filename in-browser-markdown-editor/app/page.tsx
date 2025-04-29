import MarkdownEditor from '@/components/markdown-editor';
import PreviewPost from '@/components/preview-post';
import React from 'react';

export default function Home() {
  return (
    <>
      <MarkdownEditor />
      <PreviewPost />
    </>
  );
}
