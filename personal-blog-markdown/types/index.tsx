export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  contentHtml?: string;
};

export type ArticlesListTypes = {
  articles: Post[];
  isShowArticleDescription?: boolean;
};

export type TitleSectionTypes = {
  title: string;
  description?: string;
};
