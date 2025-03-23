import Link from 'next/link';
import style from './index.module.css';
import { ArticlesListTypes } from '@/types';

export default function ArticleList({ articles, isShowArticleDescription }: ArticlesListTypes) {
  const dateFormatter = (date: string) => {
    const time = new Date(date);
    return time.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section className={`${style.container} `}>
      <ul>
        {articles.length > 0 &&
          articles.map(({ slug, title, date, description }, index) => (
            <li key={index}>
              <Link href={'/blog/' + slug}>
                <h5>{title}</h5>
                <span>{dateFormatter(date)}</span>
                {isShowArticleDescription && <p>{description}</p>}
              </Link>
            </li>
          ))}
      </ul>

      {!isShowArticleDescription && (
        <Link href={'/blog'} className={style.showMoreLink}>
          View all articles
        </Link>
      )}
    </section>
  );
}
