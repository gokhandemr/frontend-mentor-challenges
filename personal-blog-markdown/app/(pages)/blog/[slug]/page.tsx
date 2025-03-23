import { getPost } from '@/lib/posts';
import style from './page.module.css';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: paramsSlug } = await params;
  const post = await getPost(paramsSlug);
  if (!post) return notFound();

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function SingleBlog({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: paramsSlug } = await params;
  const post = await getPost(paramsSlug);
  if (!post) return notFound();

  const dateFormatter = (date: string) => {
    const time = new Date(date);
    return time.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <article className={style.container}>
        <h1 className={style.title}>{post.title}</h1>
        <span className={style.date}>Published {dateFormatter(post.date)}</span>
        <div className={style.contentHtml} dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }} />
      </article>
    </>
  );
}
