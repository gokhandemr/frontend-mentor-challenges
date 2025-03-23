import { getAllPosts } from '@/lib/posts';
import HereSection from './components/hero-section';
import TitleSection from './components/title-section';
import ArticleList from './components/article-list';

export default async function Home() {
  const articles = getAllPosts();

  return (
    <>
      <HereSection />
      <TitleSection title='Latest Articles' />
      <ArticleList articles={articles.slice(0, 5)} />
    </>
  );
}
