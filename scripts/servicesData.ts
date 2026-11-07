export interface ServiceDef {
  slug: string;
  categoryId: string;
  badgeEn: string;
  badgeAr: string;
  titleEn: string;
  titleAr: string;
  headlineEn: string;
  headlineAr: string;
  overviewEn: string;
  overviewAr: string;
  problemsEn: string[];
  problemsAr: string[];
  targetEn: string[];
  targetAr: string[];
  scopeEn: { title: string; desc: string }[];
  scopeAr: { title: string; desc: string }[];
  deliverablesEn: string[];
  deliverablesAr: string[];
  workflowEn: { step: string; title: string; desc: string }[];
  workflowAr: { step: string; title: string; desc: string }[];
  benefitsEn: { title: string; desc: string }[];
  benefitsAr: { title: string; desc: string }[];
  faqsEn: { q: string; a: string }[];
  faqsAr: { q: string; a: string }[];
  relatedServices: string[];
  relatedArticles: string[];
}

export interface CategoryDef {
  id: string;
  nameEn: string;
  nameAr: string;
  icon: string;
  descriptionEn: string;
  descriptionAr: string;
  services: string[]; // slugs
}

export const CATEGORIES: CategoryDef[] = [
  {
    id: 'web-development',
    nameEn: 'Website Design & Development',
    nameAr: 'تصميم وتطوير المواقع الإلكترونية',
    icon: '🌐',
    descriptionEn: 'High-performance corporate portals, headless CMS, e-commerce engines, and web applications built with clean code and sub-second loading.',
    descriptionAr: 'منصات ومواقع إلكترونية فائقة السرعة، بوابات شركات، ومتاجر تجارة إلكترونية مبنية بأكواد برمجية مخصصة وتصميم فاخر متجاوب.',
    services: [
      'wordpress-development', 'shopify-development', 'drupal-development', 'magento-development',
      'opencart-development', 'salla-store-development', 'zid-store-development',
      'corporate-websites', 'business-websites', 'ecommerce-development', 'news-websites',
      'magazine-websites', 'real-estate-websites', 'educational-websites', 'medical-websites',
      'restaurant-websites', 'professional-services-websites', 'technology-websites',
      'portfolio-websites', 'landing-pages-development', 'website-redesign',
      'website-maintenance', 'speed-optimization', 'website-security', 'frontend-development',
      'backend-development', 'api-integration', 'technical-seo', 'responsive-web-design'
    ]
  },
  {
    id: 'software-systems',
    nameEn: 'Software & Business Systems',
    nameAr: 'البرمجيات والأنظمة الإدارية',
    icon: '⚙️',
    descriptionEn: 'Custom enterprise software, ERP/CRM implementations, POS systems, database engineering, and workflow automation for modern business operations.',
    descriptionAr: 'حلول برمجية مخصصة للشركات، أنظمة تخطيط الموارد ERP، إدارة علاقات العملاء CRM، نقاط البيع POS، وهندسة قواعد البيانات وأتمتة العمليات.',
    services: [
      'erp-system-development', 'crm-development', 'pos-development', 'hr-systems-development',
      'inventory-systems-development', 'accounting-systems-development', 'project-management-systems',
      'custom-software-development', 'database-development', 'api-development-integration',
      'business-process-automation'
    ]
  },
  {
    id: 'mobile-applications',
    nameEn: 'Mobile Application Development',
    nameAr: 'تطوير تطبيقات الجوال',
    icon: '📱',
    descriptionEn: 'Native and cross-platform mobile apps for iOS and Android, focusing on seamless UX, enterprise security, and cloud scalability.',
    descriptionAr: 'تطبيقات جوال أصلية وهجينة لنظامي iOS وAndroid بتجربة مستخدم استثنائية، أمان سيبراني، وسرعة استجابة وربط سحابي متكامل.',
    services: [
      'android-app-development', 'ios-app-development', 'cross-platform-app-development',
      'business-mobile-applications', 'ecommerce-mobile-applications', 'mobile-ui-ux-design',
      'mobile-app-maintenance'
    ]
  },
  {
    id: 'tender-services',
    nameEn: 'Tender & Proposal Services',
    nameAr: 'خدمات المناقصات وإعداد العروض',
    icon: '📜',
    descriptionEn: 'End-to-end tender governance, Saudi Etimad procurement compliance, technical proposals, compliance matrices, and Red Team reviews with 0% rejection track record.',
    descriptionAr: 'حوكمة وإعداد ملفات المناقصات، مصفوفات الامتثال، العروض الفنية والمالية، تدقيق Red Team، والامتثال للائحة المشتريات الحكومية ومنصة اعتماد.',
    services: [
      'tender-proposal-writing', 'technical-proposal-preparation', 'financial-proposal-preparation',
      'tender-document-analysis', 'rfp-analysis', 'rfq-analysis', 'rfi-analysis',
      'scope-of-work-analysis', 'tender-requirements-extraction', 'tender-compliance-matrix',
      'tender-quality-assurance', 'technical-compliance-review', 'red-team-proposal-review',
      'tender-gap-analysis', 'bid-no-bid-assessment', 'technical-evaluation-criteria-analysis',
      'qualification-criteria-analysis', 'tender-risk-assessment', 'executive-summary-writing',
      'technical-methodology-development', 'implementation-plan-preparation', 'project-timeline-preparation',
      'deliverables-acceptance-criteria', 'sla-kpi-documentation', 'raci-matrix-preparation',
      'team-structure-documentation', 'company-experience-documentation', 'etimad-tender-support',
      'saudi-government-tenders', 'it-software-tender-consulting'
    ]
  },
  {
    id: 'digital-marketing-seo',
    nameEn: 'Digital Marketing & SEO',
    nameAr: 'التسويق الرقمي وتحسين محركات البحث',
    icon: '🚀',
    descriptionEn: 'Data-driven technical SEO, search engine indexation architecture, keyword mapping, organic growth funnels, and corporate social media planning.',
    descriptionAr: 'استراتيجيات تحسين محركات البحث التقنية SEO، أرشفة وفهرسة المواقع، بحوث الكلمات المفتاحية، وبناء خطط التسويق الرقمي وإدارة الحملات.',
    services: [
      'technical-seo', 'on-page-seo', 'off-page-seo', 'seo-audits', 'keyword-research',
      'seo-content-strategy', 'website-indexing-optimization', 'social-media-management',
      'social-media-content-planning', 'digital-marketing-strategy', 'advertising-campaign-management'
    ]
  },
  {
    id: 'business-consulting',
    nameEn: 'Business Development & Consulting',
    nameAr: 'تطوير الأعمال والاستشارات التقنية',
    icon: '💼',
    descriptionEn: 'Strategic IT pre-sales consulting, solution engineering, RFP bid/no-bid qualification, client roadmaps, and enterprise business process analysis.',
    descriptionAr: 'استشارات ما قبل البيع IT Pre-Sales، دراسة فرص المشاريع، تقييم قرار التقدم للمناقصات، هندسة الحلول الرقمية، وتحليل العمليات المؤسسية.',
    services: [
      'business-development-consulting', 'it-pre-sales-support', 'solution-consulting',
      'opportunity-assessment', 'bid-no-bid-support', 'business-process-analysis'
    ]
  }
];
