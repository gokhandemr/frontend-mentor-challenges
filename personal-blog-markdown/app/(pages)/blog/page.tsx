import ArticleList from '@/app/components/article-list';
import TitleSection from '@/app/components/title-section';
import { getAllPosts } from '@/lib/posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Page',
};

export default function BlogPage() {
  const articles = getAllPosts();

  return (
    <>
      <TitleSection title='My Articles' description='Below are all my recent blog posts. Click on any title to read the full article.' />
      <ArticleList articles={articles} isShowArticleDescription={true} />
    </>
  );
}
