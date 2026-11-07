export interface ArticleItem {
  slug: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  category: string;
  categoryName: string;
  date: string;
  readTime: string;
  author: string;
  featuredImage: string;
  imageAlt: string;
  relatedServiceUrl: string;
  relatedServiceName: string;
  intro: string;
  toc: { id: string; text: string }[];
  sections: { id: string; title: string; content: string }[];
  faqs?: { q: string; a: string }[];
}

export interface ArticleDef {
  slug: string;
  category: string;
  categoryEn: string;
  categorySlug: string;
  title: string;
  metaTitle: string;
  description: string;
  readTime: string;
  keywords: string[];
  relatedServiceUrl: string;
  relatedServiceName: string;
  featuredSvg: string;
  featuredAlt: string;
  tableOfContents: string[];
  contentSections: { h2: string; body: string }[];
  faq?: { q: string; a: string }[];
}

export type UnifiedArticle = ArticleItem;
