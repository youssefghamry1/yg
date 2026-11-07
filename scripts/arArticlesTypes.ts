export interface ArCodeBlock {
  filename: string;
  language: string;
  code: string;
}

export interface ArComparisonTable {
  caption: string;
  headers: string[];
  rows: string[][];
}

export interface ArArticleSection {
  id: string;
  heading: string;
  paragraphs?: string[];
  rawHtml?: string;
  keyTakeaways?: string[];
  codeOrChecklistTitle?: string;
  checklistTitle?: string;
  checklistItems?: string[];
  codeBlock?: ArCodeBlock;
  comparisonTable?: ArComparisonTable;
}

export interface ArArticleItem {
  slug: string;
  categoryKey: string;
  categoryLabel: string;
  badge: string;
  title: string;
  seoTitle?: string;
  metaDescription?: string;
  summary: string;
  readTime: string;
  publishedDate?: string;
  updatedDate: string;
  featuredSvg: string;
  featuredImageAlt?: string;
  relatedServiceSlug: string;
  relatedServiceTitle: string;
  secondaryServiceSlug?: string;
  secondaryServiceTitle?: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  introHtml?: string;
  tocSubItems?: { parentId: string; id: string; label: string }[];
  sections: ArArticleSection[];
  commonMistakes?: { title: string; detail: string }[];
  faqs: { q: string; a: string }[];
  conclusion?: { heading: string; paragraphs: string[] };
  customCta?: {
    badge: string;
    heading: string;
    body: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
  officialSources?: { title: string; url: string; publisher: string }[];
  relatedArticleSlugs: string[];
  isNewlyPublished?: boolean;
  wordCount?: number;
}
