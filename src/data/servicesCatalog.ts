import rawCatalog from './servicesCatalog.json';

export interface CatalogServiceItem {
  slug: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  category: 'tenders' | 'web' | 'erp' | 'mobile' | 'seo' | 'consulting';
  categoryNameAr: string;
  categoryNameEn: string;
  icon: string;
}

export const ALL_SERVICES_CATALOG: CatalogServiceItem[] = rawCatalog as CatalogServiceItem[];

export const SERVICE_CATEGORIES = [
  {
    id: 'all',
    nameAr: 'الكل (93)',
    nameEn: 'All (93)',
    icon: '✨',
  },
  {
    id: 'tenders',
    nameAr: 'المناقصات واعتماد (31)',
    nameEn: 'Tenders & Etimad (31)',
    icon: '🏛️',
  },
  {
    id: 'web',
    nameAr: 'المواقع والمتاجر (24)',
    nameEn: 'Web & E-Commerce (24)',
    icon: '🌐',
  },
  {
    id: 'erp',
    nameAr: 'الأنظمة والبرمجيات (14)',
    nameEn: 'Software & ERP (14)',
    icon: '⚙️',
  },
  {
    id: 'mobile',
    nameAr: 'تطبيقات الجوال (7)',
    nameEn: 'Mobile Apps (7)',
    icon: '📱',
  },
  {
    id: 'seo',
    nameAr: 'السيو والتسويق (12)',
    nameEn: 'SEO & Marketing (12)',
    icon: '🚀',
  },
  {
    id: 'consulting',
    nameAr: 'الاستشارات التقنية (5)',
    nameEn: 'Consulting (5)',
    icon: '💼',
  },
];
