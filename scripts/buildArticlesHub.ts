import fs from 'fs';
import path from 'path';

interface ArticleItem {
  slug: string;
  cat: 'tenders' | 'ecommerce' | 'cms' | 'web';
  badgeAr: string;
  badgeEn: string;
  arTitle: string;
  enTitle: string;
  arDesc: string;
  enDesc: string;
  readTime: string;
}

const ARTICLES_DATA: ArticleItem[] = [
  // Tenders & Bidding
  {
    slug: 'what-is-a-tender-and-rfp.html',
    cat: 'tenders',
    badgeAr: 'المناقصات · كراسات الشروط',
    badgeEn: 'Tenders · RFP Fundamentals',
    arTitle: 'ما هي المناقصة؟ الفروق الجوهرية بين كراسة الشروط RFP وRFQ وRFI',
    enTitle: 'What Is a Tender? Core Differences Between RFP, RFQ, and RFI',
    arDesc: 'دليل تأسيسي يشرح مفهوم المناقصات والمنافسات العامة، والفروق الدقيقة بين طلب العروض RFP وطلب عروض الأسعار RFQ وطلب المعلومات RFI، ومكونات كراسة الشروط والمتطلبات الإلزامية.',
    enDesc: 'Foundational guide explaining public and private procurement, crucial distinctions between RFP, RFQ, and RFI, mandatory qualification criteria, and technical document architecture.',
    readTime: '6 min read'
  },
  {
    slug: 'how-to-write-a-technical-proposal.html',
    cat: 'tenders',
    badgeAr: 'العروض الفنية · منهجيات العطاء',
    badgeEn: 'Technical Proposals · Bid Methodology',
    arTitle: 'كيفية كتابة العرض الفني للمناقصات والمنافسات الحكومية والخاصة',
    enTitle: 'How to Write a Winning Technical Proposal for Government Tenders',
    arDesc: 'دليل منهجي لكتابة وتنسيق العروض الفنية الاحترافية: الهيكل النموذجي، صياغة المنهجية الفنية، إعداد خطة العمل وجداول التنفيذ، وهيكلة فرق العمل والامتثال التام لشروط التقييم.',
    enDesc: 'Comprehensive playbook for authoring high-scoring technical proposals: compliant structuring, technical methodology authoring, work breakdown schedules, and staffing plans.',
    readTime: '8 min read'
  },
  {
    slug: 'how-to-prepare-a-compliance-matrix.html',
    cat: 'tenders',
    badgeAr: 'مصفوفات الامتثال · مطابقة الشروط',
    badgeEn: 'Compliance Matrices · RFP Mapping',
    arTitle: 'كيفية إعداد مصفوفة الامتثال (Compliance Matrix) لضمان القبول الفني',
    enTitle: 'How to Prepare a Bulletproof Compliance Matrix for Government RFPs',
    arDesc: 'دليل عملي لبناء مصفوفة الامتثال الفني: استخراج المتطلبات الإلزامية والاختيارية، تتبع نصوص الكراسة، صياغة الإجابات الإيجابية، وتجنب التحفظات التي قد تقود للاستبعاد.',
    enDesc: 'Practical methodology for building end-to-end compliance matrices: requirement extraction, requirement traceability, positive compliance phrasing, and reservation avoidance.',
    readTime: '7 min read'
  },
  {
    slug: 'saudi-etimad-platform-bidding-guide.html',
    cat: 'tenders',
    badgeAr: 'منصة اعتماد · المشتريات السعودية',
    badgeEn: 'Etimad Platform · Saudi Procurement',
    arTitle: 'دليل التقديم على المناقصات الحكومية عبر منصة اعتماد السعودية',
    enTitle: 'Step-by-Step Bidding Guide for the Saudi Etimad Procurement Platform',
    arDesc: 'خطوات وإجراءات التقديم الناجح على المنافسات الحكومية عبر منصة اعتماد: فحص كراسة الشروط، تقديم الاستفسارات الفنية، الضمان البنكي الابتدائي، ونظام المنافسات والمشتريات الحكومية.',
    enDesc: 'Authoritative guide to navigating the Saudi Etimad portal: tender procurement workflows, RFP analysis, initial bid bonds, submission checklists, and Government Tender Law alignment.',
    readTime: '9 min read'
  },
  {
    slug: 'bid-no-bid-assessment-strategy.html',
    cat: 'tenders',
    badgeAr: 'حوكمة العطاءات · تقييم الفرص',
    badgeEn: 'Bid Governance · Opportunity Assessment',
    arTitle: 'منهجية اتخاذ قرار التقدم للمناقصة أو الاعتذار (Bid / No-Bid Strategy)',
    enTitle: 'Bid / No-Bid Decision Framework: Qualifying Winning Opportunities',
    arDesc: 'معايير علمية لحوكمة قرارات المناقصات: تقييم القدرات الفنية والمالية، احتمالية الفوز، تقييم المنافسين، ومعدل العائد على الاستثمار لتوجيه موارد الشركة نحو الفرص الرابحة.',
    enDesc: 'Strategic decision framework for qualifying tender opportunities: technical capability fit, win probability scoring, competitor landscape analysis, and proposal ROI optimization.',
    readTime: '6 min read'
  },
  {
    slug: 'avoiding-mandatory-tender-rejection.html',
    cat: 'tenders',
    badgeAr: 'استبعاد العروض · ضمان الجودة',
    badgeEn: 'Bid Disqualification · QA Assurance',
    arTitle: 'تجنب الاستبعاد الإلزامي في المناقصات: قائمة التحقق وضوابط الجودة',
    enTitle: 'Avoiding Mandatory Tender Disqualification: QA Checklists and Pitfalls',
    arDesc: 'الأسباب الشائعة لاستبعاد العروض الفنية والمالية شكلياً وموضوعياً في المنافسات الحكومية: صلاحية الوثائق النظامية، الضمانات البنكية، شروط المحتوى المحلي، وإجراءات تدقيق Red Team.',
    enDesc: 'Critical analysis of formal and technical tender rejection factors: statutory document expiry, bank guarantee non-conformities, local content baseline failures, and Red Team audits.',
    readTime: '7 min read'
  },

  // CMS & Web Engineering (WordPress & Drupal)
  {
    slug: 'what-is-wordpress.html',
    cat: 'cms',
    badgeAr: 'ووردبريس · بنية المنصة',
    badgeEn: 'WordPress · Platform Architecture',
    arTitle: 'ما هو ووردبريس؟ الدليل الشامل لأشهر نظام إدارة محتوى في العالم',
    enTitle: 'What Is WordPress? Complete Guide to the World’s Leading CMS',
    arDesc: 'دليل تفصيلي يشرح بنية ووردبريس الداخلية، كيفية عمل القوالب والإضافات، هيكلية قاعدة البيانات، وأسباب اعتماده في أكثر من 43% من مواقع الويب عالمياً.',
    enDesc: 'An in-depth exploration of WordPress architecture, core mechanisms, theme and plugin ecosystems, database schema, and why it powers over 43% of the internet.',
    readTime: '7 min read'
  },
  {
    slug: 'wordpress-website-development.html',
    cat: 'cms',
    badgeAr: 'ووردبريس · تطوير القوالب المخصصة',
    badgeEn: 'WordPress · Bespoke Engineering',
    arTitle: 'تطوير مواقع ووردبريس: هندسة القوالب المخصصة مقابل القوالب الجاهزة',
    enTitle: 'WordPress Website Development: Engineering Bespoke Themes vs Commercial Templates',
    arDesc: 'لماذا تفشل القوالب التجارية الجاهزة في تلبية معايير الشركات، وكيف تحقق القوالب المبرمجة خصيصاً سرعات قياسية وأماناً مستداماً فوق 98+ على PageSpeed.',
    enDesc: 'Why commercial marketplace themes fail enterprise standards, and how custom-coded WordPress themes deliver 98+ Google PageSpeed scores, security, and maintainability.',
    readTime: '8 min read'
  },
  {
    slug: 'how-to-choose-a-wordpress-theme.html',
    cat: 'cms',
    badgeAr: 'ووردبريس · اختيار القوالب',
    badgeEn: 'WordPress · Theme Selection',
    arTitle: 'كيفية اختيار قالب ووردبريس المناسب: معايير الأداء والأمان وقابلية التوسع',
    enTitle: 'How to Choose the Right WordPress Theme: Performance, Security, and Scalability',
    arDesc: 'دليل هندسي لاختيار قوالب ووردبريس للمؤسسات: فحص نظافة الكود البرمجي، دعم محررات البلوكات الحديثة، التوافق مع السيو، وتجنب القوالب المنتفخة بالملحقات غير الضرورية.',
    enDesc: 'Engineering guide to vetting WordPress themes: code quality auditing, full-site editing support, SEO compatibility, DOM complexity, and avoiding bloated multi-purpose themes.',
    readTime: '6 min read'
  },
  {
    slug: 'wordpress-speed-optimization.html',
    cat: 'cms',
    badgeAr: 'ووردبريس · تحسين السرعة والأداء',
    badgeEn: 'WordPress · Core Web Vitals',
    arTitle: 'تسريع مواقع ووردبريس: الوصول إلى سرعة تحميل لحظية ودرجة 99+ في Core Web Vitals',
    enTitle: 'WordPress Speed Optimization: Achieving Sub-Second Load Times and 99+ Core Web Vitals',
    arDesc: 'شرح تفصيلي لتسريع ووردبريس الشامل: التخزين المؤقت عبر Redis وOPcache، ضبط خوادم NGINX، تحويل الصور لصيغة WebP، وتأجيل الأكواد المعطلة للرندرة.',
    enDesc: 'Deep-dive into full-stack WordPress performance tuning: Redis object caching, PHP 8.3 OPcache, NGINX microcaching, WebP conversion, and script deferral.',
    readTime: '8 min read'
  },
  {
    slug: 'wordpress-security-and-maintenance.html',
    cat: 'cms',
    badgeAr: 'ووردبريس · الأمان والصيانة',
    badgeEn: 'WordPress · Security & Hardening',
    arTitle: 'أمان وصيانة ووردبريس: بروتوكولات التحصين الأمني وخطط التعافي من الكوارث',
    enTitle: 'WordPress Security and Maintenance: Enterprise Hardening Protocols and Disaster Recovery',
    arDesc: 'دليل شامل لتحصين مواقع ووردبريس ضد هجمات القوة الغاشمة، حقن SQL، ثغرات اليوم الصفر، وضبط النسخ الاحتياطي السحابي المشفر للتعافي الفوري.',
    enDesc: 'Comprehensive guide to hardening WordPress installations against brute force attacks, SQL injections, zero-day exploits, and automating off-site cloud backups.',
    readTime: '7 min read'
  },
  {
    slug: 'wordpress-vs-other-cms.html',
    cat: 'cms',
    badgeAr: 'مقارنات تقنية · ووردبريس مقابل الأنظمة',
    badgeEn: 'Technical Comparisons · CMS Benchmark',
    arTitle: 'مقارنة ووردبريس بأنظمة إدارة المحتوى الأخرى: دروبال، جوملا، والمنصات المنفصلة',
    enTitle: 'WordPress vs Other CMS Platforms: Drupal, Joomla, and Headless Frameworks Compared',
    arDesc: 'مقارنة تقنية محايدة بين ووردبريس، دروبال، شوبيفاي، والأنظمة المنفصلة من حيث التكلفة، الأمان، قابلية التوسع، وسهولة إدارة المحتوى للمؤسسات.',
    enDesc: 'An objective architectural comparison of WordPress, Drupal, Shopify, and headless stacks based on security, total cost of ownership, scalability, and ease of management.',
    readTime: '8 min read'
  },
  {
    slug: 'what-is-drupal.html',
    cat: 'cms',
    badgeAr: 'دروبال · المنظومة المؤسسية',
    badgeEn: 'Drupal · Enterprise Architecture',
    arTitle: 'ما هو دروبال (Drupal)؟ منصة إدارة المحتوى للمؤسسات الحكومية والشركات الكبرى',
    enTitle: 'What Is Drupal? The Enterprise CMS for Governments and Global Organizations',
    arDesc: 'تحليل معماري لنظام دروبال: نموذج الكيانات (Entities)، نظام الصلاحيات المعقد، التوافق مع معايير الأمان الحكومية الصارمة، وقدراته الفائقة في إدارة المواقع المتعددة.',
    enDesc: 'Architectural breakdown of Drupal: robust entity API, enterprise-grade access control, multi-site orchestration, and adherence to sovereign governmental security standards.',
    readTime: '7 min read'
  },
  {
    slug: 'drupal-website-development.html',
    cat: 'cms',
    badgeAr: 'دروبال · تطوير الوحدات والقوالب',
    badgeEn: 'Drupal · Custom Module Engineering',
    arTitle: 'تطوير مواقع دروبال: برمجة الوحدات المخصصة وقوالب Twig والمعمارية المنفصلة',
    enTitle: 'Drupal Website Development: Custom Modules, Twig Theming, and Headless Architecture',
    arDesc: 'منهجيات بناء بوابات دروبال المعقدة: تطوير وحدات مخصصة عبر مكونات Symfony، هندسة واجهات المستخدم بقوالب Twig المنيعة، والربط عبر JSON:API مع تطبيقات الجوال.',
    enDesc: 'Enterprise methodologies for building Drupal portals: Symfony component modules, secure Twig templating, configuration management, and JSON:API headless frontends.',
    readTime: '8 min read'
  },
  {
    slug: 'drupal-for-enterprise-websites.html',
    cat: 'cms',
    badgeAr: 'دروبال · الأنظمة السيادية والمؤسسات',
    badgeEn: 'Drupal · Sovereign & Enterprise Scale',
    arTitle: 'دروبال للمواقع المؤسسية: إدارة الصلاحيات والأمان والامتثال للمعايير الحكومية',
    enTitle: 'Drupal for Enterprise Websites: Role-Based Access Control and Strict Security Compliance',
    arDesc: 'لماذا تفضل الوزارات والجامعات والشركات الضخمة نظام دروبال: التدقيق الأمني، مسارات سير العمل والموافقات المعقدة، والقدرة على معالجة ملايين الزيارات بأمان لا يضاهى.',
    enDesc: 'Why sovereign ministries, public universities, and global enterprises standardize on Drupal: strict security compliance, granular approval workflows, and high-concurrency resilience.',
    readTime: '7 min read'
  },
  {
    slug: 'drupal-vs-wordpress.html',
    cat: 'cms',
    badgeAr: 'مقارنات تقنية · دروبال مقابل ووردبريس',
    badgeEn: 'Technical Comparisons · Drupal vs WordPress',
    arTitle: 'دروبال مقابل ووردبريس: اختيار المنصة المناسبة لحجم ونطاق مشروعك المؤسسي',
    enTitle: 'Drupal vs WordPress: Selecting the Right Platform for Your Enterprise Scale',
    arDesc: 'مقارنة فنية معمقة بين العملاقين: منحنى التعلم، تكلفة التطوير والصيانة، مرونة هيكلة البيانات، وكيف تحدد النظام الأمثل وفق متطلبات الأمان وتدفق البيانات لديك.',
    enDesc: 'Deep architectural comparison between Drupal and WordPress: learning curves, total ownership costs, content modeling flexibility, and selecting based on security and concurrency.',
    readTime: '8 min read'
  },

  // E-Commerce Platforms (Salla, Zid, Shopify, Magento, OpenCart)
  {
    slug: 'what-is-salla.html',
    cat: 'ecommerce',
    badgeAr: 'سلة · التجارة السعودية',
    badgeEn: 'Salla · Saudi E-Commerce Engine',
    arTitle: 'ما هي منصة سلة (Salla)؟ محرك التجارة الإلكترونية الرائد في المملكة العربية السعودية',
    enTitle: 'What Is Salla? The Engine Powering Saudi Arabia’s E-Commerce Boom',
    arDesc: 'دليل شامل لمنصة سلة: الربط المباشر مع مدى وApple Pay وتابي وتمارا، شبكات الشحن السعودية، محرك القوالب Twilight، والامتثال لنظام التجارة الإلكترونية السعودي.',
    enDesc: 'Comprehensive overview of Salla: built-in Mada, Apple Pay, and Tabby integrations, Saudi logistics networks, Twilight theme engine, and compliance with the Saudi E-Commerce Law.',
    readTime: '7 min read'
  },
  {
    slug: 'salla-store-setup-customization.html',
    cat: 'ecommerce',
    badgeAr: 'سلة · التهيئة والربط التقني',
    badgeEn: 'Salla · Store Setup & Integration',
    arTitle: 'تهيئة وتخصيص متجر سلة: الدفع والشحن وسوق التطبيقات والفوترة الإلكترونية',
    enTitle: 'Salla Store Setup and Customization: Payments, Logistics, Apps, and ZATCA Invoicing',
    arDesc: 'خطوات إطلاق متجر سلة احترافي: توثيق المتجر برقم السجل التجاري، ضبط بوابات الدفع والشحن، الربط مع منصة فاتورة (ZATCA)، ودمج أدوات التتبع والتحليل.',
    enDesc: 'End-to-end technical guide to launching a Salla store: commercial registration verification, local payment gateways, ZATCA e-invoicing compliance, and analytics pixels.',
    readTime: '8 min read'
  },
  {
    slug: 'salla-store-design.html',
    cat: 'ecommerce',
    badgeAr: 'سلة · تصميم واجهات Twilight',
    badgeEn: 'Salla · Twilight UI/UX Design',
    arTitle: 'تصميم متاجر سلة: تطوير القوالب المخصصة عبر Twilight وهندسة تجربة المستخدم',
    enTitle: 'Salla Store Design: Custom Twilight Themes and Conversion-Driven UX',
    arDesc: 'كيفية برمجة واجهات حصرية على منصة سلة عبر محرك القوالب Twilight: تخصيص صفحات المنتجات، تبسيط قمع الدفع السريع، وتطوير تجربة تسوق تلائم المستهلك السعودي.',
    enDesc: 'Engineering bespoke storefronts on Salla via the Twilight theme engine: optimized product page layout, friction-free checkout, and mobile-first Arabic UI/UX patterns.',
    readTime: '7 min read'
  },
  {
    slug: 'what-is-zid.html',
    cat: 'ecommerce',
    badgeAr: 'زد · التجزئة الحديثة',
    badgeEn: 'Zid · Modern Retail Ecosystem',
    arTitle: 'ما هي منصة زد (Zid)؟ منصة التجارة الحديثة ومنظومة التجزئة في السعودية',
    enTitle: 'What Is Zid? Modern Retail Platform & Ecosystem in Saudi Arabia',
    arDesc: 'فهم منظومة زد للتجارة المتكاملة: زد باي (Zid Pay)، زد شب (Zid Ship)، وسوق تطبيقات زد، وأسباب اعتماد كبرى شركات التجزئة عليها لربط الفروع بالمتجر الإلكتروني.',
    enDesc: 'Understanding Zid’s unified commerce ecosystem: Zid Pay, Zid Ship, Zid App Market, and why leading Saudi retail chains rely on it for omnichannel retail.',
    readTime: '7 min read'
  },
  {
    slug: 'zid-store-setup-customization.html',
    cat: 'ecommerce',
    badgeAr: 'زد · التهيئة والربط المؤسسي',
    badgeEn: 'Zid · ERP & POS Integration',
    arTitle: 'تهيئة وتخصيص متجر زد: تفعيل زد باي وزد شب والربط مع أنظمة ERP والمخازن',
    enTitle: 'Zid Store Setup and Customization: Zid Pay, Zid Ship, and ERP Integration',
    arDesc: 'خارطة طريق متكاملة لتهيئة متجر زد: تفعيل زد باي للمدفوعات، مزامنة مخزون الفروع المتعددة، تكامل تطبيقات زد، والربط المحاسبي الآلي مع برامج الفوترة.',
    enDesc: 'Complete setup roadmap for Zid: connecting payment solutions, multi-branch inventory sync, Zid App Market extensions, and automated tax accounting.',
    readTime: '8 min read'
  },
  {
    slug: 'zid-store-design.html',
    cat: 'ecommerce',
    badgeAr: 'زد · تصميم الواجهات المخصصة',
    badgeEn: 'Zid · Custom Storefront Design',
    arTitle: 'تصميم متاجر زد: تطوير القوالب المخصصة والتكامل مع الهوية البصرية للعلامات التجارية',
    enTitle: 'Zid Store Design: Custom Theme Development and Brand Identity Integration',
    arDesc: 'بناء واجهات رقمية مخصصة على منصة زد بأكواد CSS وHTML متطورة، قمع شراء سلس، خطوط عربية متناسقة، وتصميم واجهات فاخرة تلائم سلوك المستهلك الخليجي.',
    enDesc: 'Building branded storefronts on Zid with custom CSS/HTML themes, optimized checkout funnels, localized Arabic typography, and engaging banner animations.',
    readTime: '7 min read'
  },
  {
    slug: 'what-is-shopify.html',
    cat: 'ecommerce',
    badgeAr: 'شوبيفاي · التجارة السحابية العالمية',
    badgeEn: 'Shopify · Global SaaS Platform',
    arTitle: 'ما هي منصة شوبيفاي؟ البنية التقنية والإمكانات ونظام التجارة الإلكترونية العالمي',
    enTitle: 'What Is Shopify? Architecture, Capabilities, and Global E-Commerce Ecosystem',
    arDesc: 'تحليل شامل للبنية التحتية لمنصة شوبيفاي السحابية، لغة القوالب Liquid، واجهات الدفع المخصصة، وتكامل بوابات الدفع والشحن العالمية.',
    enDesc: 'An exhaustive analysis of Shopify’s hosted SaaS infrastructure, Liquid templating language, Checkout extensibility, and global payments integration.',
    readTime: '7 min read'
  },
  {
    slug: 'shopify-store-development.html',
    cat: 'ecommerce',
    badgeAr: 'شوبيفاي · تطوير المتاجر الاحترافية',
    badgeEn: 'Shopify · Enterprise Development',
    arTitle: 'تطوير متاجر شوبيفاي: برمجة القوالب بلغة Liquid وتطبيقات المتاجر المخصصة',
    enTitle: 'Shopify Store Development: Liquid Theme Architecture and Custom App Engineering',
    arDesc: 'بناء متاجر شوبيفاي عالية التحويل: هندسة قوالب مخصصة خفيفة بدون إضافات ثقيلة، تكامل Shopify Functions لتسعير مخصص، وربط بوابات الدفع في الشرق الأوسط.',
    enDesc: 'Building high-converting Shopify storefronts: bespoke lightweight Liquid themes, Shopify Functions for customized pricing rules, and Middle East payment routing.',
    readTime: '8 min read'
  },
  {
    slug: 'shopify-store-design.html',
    cat: 'ecommerce',
    badgeAr: 'شوبيفاي · تصميم وتجربة المستخدم',
    badgeEn: 'Shopify · Conversion UX Design',
    arTitle: 'تصميم متجر شوبيفاي: هندسة تجربة المستخدم ورفع معدل التحويل (CRO)',
    enTitle: 'Shopify Store Design: Designing for Maximum Conversion and Mobile UX',
    arDesc: 'مبادئ تصميم متاجر شوبيفاي الحديثة: التنقل الذكي، صفحات منتجات مقنعة تدعم الشراء بنقرة واحدة، التصميم المتجاوب مع الهواتف الذكية، وتكامل وسائل الدفع السريع.',
    enDesc: 'Modern UI/UX design principles for Shopify: frictionless mobile navigation, persuasion-driven product detail pages, sticky add-to-cart, and accelerated 1-click checkouts.',
    readTime: '6 min read'
  },
  {
    slug: 'shopify-store-optimization.html',
    cat: 'ecommerce',
    badgeAr: 'شوبيفاي · تسريع المتجر والسيو',
    badgeEn: 'Shopify · Speed & SEO Tuning',
    arTitle: 'تحسين سرعة وسيو شوبيفاي: تجاوز عوائق الأداء وتصدر محركات البحث',
    enTitle: 'Shopify Speed & SEO Optimization: Overcoming Platform Limits for Top Rankings',
    arDesc: 'تقنيات متقدمة لتسريع شوبيفاي: تقليص أكواد التطبيقات غير المستخدمة، تنظيف DOM، تطبيق البيانات المنظمة Schema، وتحسين بنية عناوين المنتجات لمحركات البحث.',
    enDesc: 'Advanced speed optimization for Shopify: eliminating third-party app bloat, deferring analytics assets, structured JSON-LD product data, and canonical URL hygiene.',
    readTime: '7 min read'
  },
  {
    slug: 'shopify-vs-woocommerce.html',
    cat: 'ecommerce',
    badgeAr: 'مقارنات تقنية · شوبيفاي مقابل ووكوميرس',
    badgeEn: 'Technical Comparisons · Shopify vs WooCommerce',
    arTitle: 'شوبيفاي مقابل ووكوميرس: مقارنة شاملة للتكاليف والأمان والتحكم البرمجي',
    enTitle: 'Shopify vs WooCommerce: The Definitive Enterprise Comparison for 2026',
    arDesc: 'تحليل مقارن بين شوبيفاي السحابي وووكوميرس المفتوح المصدر: رسوم المعاملات، تكاليف الاستضافة والصيانة، استقلالية البيانات، وكيفية اتخاذ القرار الصحيح لتجارتك.',
    enDesc: 'Head-to-head architectural showdown: SaaS simplicity vs open-source sovereignty, gateway transaction fees, maintenance costs, and database scalability.',
    readTime: '8 min read'
  },
  {
    slug: 'what-is-magento.html',
    cat: 'ecommerce',
    badgeAr: 'ماجنتو · التجارة الإلكترونية المعقدة',
    badgeEn: 'Magento · Enterprise Commerce',
    arTitle: 'ما هو ماجنتو (Adobe Commerce)؟ نظام التجارة الإلكترونية الأقوى للشركات الضخمة',
    enTitle: 'What Is Magento (Adobe Commerce)? The Powerhouse for High-Volume Enterprise E-Commerce',
    arDesc: 'استكشاف بنية ماجنتو المتقدمة: معالجة مئات الآلاف من المنتجات والطلبات المتزامنة، دعم قنوات B2B المتطورة، وإدارة العملات والمخازن المتعددة عبر العالم.',
    enDesc: 'Architectural overview of Magento (Adobe Commerce): handling hundreds of thousands of SKUs, complex multi-warehouse inventory, and native B2B quote-and-order capabilities.',
    readTime: '8 min read'
  },
  {
    slug: 'magento-store-development.html',
    cat: 'ecommerce',
    badgeAr: 'ماجنتو · هندسة وتطوير الأنظمة',
    badgeEn: 'Magento · Systems Engineering',
    arTitle: 'تطوير متاجر ماجنتو: المعمارية البرمجية والربط المؤسسي وقابلية التوسع الفائق',
    enTitle: 'Magento Store Development: Architecture, Enterprise ERP Integration, and Extreme Scalability',
    arDesc: 'هندسة متاجر ماجنتو 2: بنية الوحدات البرمجية، التخزين المؤقت عبر Varnish وElasticsearch، تكامل أنظمة ERP العالمية مثل SAP وOracle، وبرمجة الواجهات الهجينة.',
    enDesc: 'Building robust Magento 2 architectures: dependency injection, Varnish Full Page Caching, Elasticsearch catalog indexers, and enterprise ERP integration pipelines.',
    readTime: '9 min read'
  },
  {
    slug: 'magento-ecommerce-optimization.html',
    cat: 'ecommerce',
    badgeAr: 'ماجنتو · ضبط الأداء وقواعد البيانات',
    badgeEn: 'Magento · Performance Tuning',
    arTitle: 'تحسين أداء وسرعة ماجنتو: ضبط خوادم NGINX وقواعد بيانات MySQL وفهرسة الفهارس',
    enTitle: 'Magento Performance Optimization: NGINX, Varnish, Redis, and MySQL Index Tuning',
    arDesc: 'دليل شامل لرفع سرعة ماجنتو وتقليل زمن استجابة الخادم TTFB إلى أقل من 200ms: تهيئة خوادم التخزين المؤقت، أرشفة الجداول الضخمة، وضبط جدولة المهام Cron Jobs.',
    enDesc: 'Full-stack tuning guide for Magento: achieving sub-200ms TTFB via Varnish micro-caching, Redis session locking prevention, flat catalog optimization, and cron schedule hygiene.',
    readTime: '8 min read'
  },
  {
    slug: 'magento-vs-shopify.html',
    cat: 'ecommerce',
    badgeAr: 'مقارنات تقنية · ماجنتو مقابل شوبيفاي',
    badgeEn: 'Technical Comparisons · Magento vs Shopify',
    arTitle: 'ماجنتو مقابل شوبيفاي بلس: مقارنة استراتيجية لكبرى شركات التجارة والتجزئة',
    enTitle: 'Magento vs Shopify Plus: Strategic E-Commerce Platform Selection for Enterprises',
    arDesc: 'مقارنة شاملة بين بيئة ماجنتو المخصصة بالكامل وشوبيفاي بلس السحابي: مرونة التخصيص، التكلفة الإجمالية للملكية (TCO)، البنية التحتية، ونماذج البيع بالجملة والتجزئة.',
    enDesc: 'Executive comparison between full-control Magento infrastructure and turnkey Shopify Plus: customization latitude, total cost of ownership, B2B functionality, and IT maintenance.',
    readTime: '8 min read'
  },
  {
    slug: 'what-is-opencart.html',
    cat: 'ecommerce',
    badgeAr: 'أوبن كارت · التجارة الخفيفة',
    badgeEn: 'OpenCart · Lightweight Architecture',
    arTitle: 'ما هو أوبن كارت (OpenCart)؟ منصة التجارة الإلكترونية الخفيفة بنمط MVC',
    enTitle: 'What Is OpenCart? Lightweight MVC E-Commerce Architecture Explained',
    arDesc: 'نظرة شاملة على بنية أوبن كارت البرمجية: نمط MVC-L الخفيف، استهلاك الموارد المحدود، وسهولة الإطلاق على الخوادم المشتركة والسحابية الاقتصادية.',
    enDesc: 'An architectural overview of OpenCart: lightweight PHP MVC-L pattern, simple database schemas, low resource consumption, and ease of deployment on budget infrastructure.',
    readTime: '6 min read'
  },
  {
    slug: 'opencart-store-development.html',
    cat: 'ecommerce',
    badgeAr: 'أوبن كارت · التطوير والتخصيص',
    badgeEn: 'OpenCart · Bespoke Modules',
    arTitle: 'تطوير متاجر أوبن كارت: برمجة الموديلات المخصصة وتكامل بوابات الدفع والشحن',
    enTitle: 'OpenCart Store Development: Custom Extensions, Payment Gateways, and Shipping Systems',
    arDesc: 'كيفية تطوير وتطويع أوبن كارت للشركات: تعديلات OCMOD المنيعة بدون المساس بالنواة، دمج بوابات الدفع الإقليمية، وتعديل نماذج الفواتير والشحن.',
    enDesc: 'Building custom OpenCart architectures: non-destructive OCMOD overrides, Middle East payment integrations, custom shipping calculators, and admin dashboard customization.',
    readTime: '7 min read'
  },
  {
    slug: 'opencart-vs-other-platforms.html',
    cat: 'ecommerce',
    badgeAr: 'مقارنات تقنية · أوبن كارت مقابل المنصات',
    badgeEn: 'Technical Comparisons · OpenCart vs Others',
    arTitle: 'مقارنة أوبن كارت بالمنصات الأخرى: متى يكون الخيار الأنسب لمشروعك التجاري؟',
    enTitle: 'OpenCart vs Other E-Commerce Platforms: When Is It the Most Cost-Effective Choice?',
    arDesc: 'مقارنة واقعية بين أوبن كارت وووكوميرس وماجنتو وشوبيفاي: التكلفة الأولية، سهولة الإدارة، استهلاك المعالج والذاكرة، والحالات التجارية التي يتفوق فيها أوبن كارت.',
    enDesc: 'Pragmatic evaluation comparing OpenCart with WooCommerce, Magento, and Shopify: initial expenditure, server RAM footprints, and business profiles where OpenCart excels.',
    readTime: '7 min read'
  }
];

export function generateArticlesHubHTML(lang: 'ar' | 'en'): string {
  const isAr = lang === 'ar';
  const pageTitle = isAr
    ? 'مركز المعرفة ودليل المقالات المتخصصة في المناقصات وهندسة الويب والتجارة الإلكترونية | يوسف غمري'
    : 'Knowledge Hub & Technical Articles Directory: Tenders, Web Engineering & E-Commerce | Youssef Ghamry';
  const metaDesc = isAr
    ? 'مكتبة معرفية احترافية تضم 34 مقالاً وبحثاً تخصصياً في إعداد العروض الفنية، منصة اعتماد، مصفوفات الامتثال، هندسة ووردبريس، دروبال، ومتاجر سلة، زد، شوبيفاي، وماجنتو.'
    : 'Comprehensive professional repository of 34 articles and technical blueprints spanning Saudi Etimad bidding, compliance matrices, WordPress engineering, Drupal architecture, and Salla/Zid/Shopify/Magento platforms.';
  const canonicalUrl = isAr ? '/ar/articles/index.html' : '/en/articles/index.html';
  const altArUrl = '/ar/articles/index.html';
  const altEnUrl = '/en/articles/index.html';

  const filterAllLabel = isAr ? 'جميع المقالات (34)' : 'All Articles (34)';
  const filterTendersLabel = isAr ? 'المناقصات ومنصة اعتماد (6)' : 'Saudi Tenders & Etimad (6)';
  const filterEcommerceLabel = isAr ? 'متاجر وتجارة إلكترونية (14)' : 'E-Commerce Platforms (14)';
  const filterCmsLabel = isAr ? 'ووردبريس ودروبال (14)' : 'WordPress & Drupal (14)';

  const searchPlaceholder = isAr ? 'ابحث في المقالات والموضوعات (مثال: اعتماد، ووردبريس، سلة، مصفوفة الامتثال)...' : 'Search articles and blueprints (e.g., Etimad, compliance matrix, WordPress, Salla)...';

  const articlesCardsHtml = ARTICLES_DATA.map((art) => {
    const title = isAr ? art.arTitle : art.enTitle;
    const desc = isAr ? art.arDesc : art.enDesc;
    const badge = isAr ? art.badgeAr : art.badgeEn;
    const linkUrl = isAr ? `/ar/articles/${art.slug}` : `/en/articles/${art.slug}`;
    const categoryBadge = art.cat === 'tenders'
      ? (isAr ? '📜 مناقصات وعروض' : '📜 Tenders & Bids')
      : art.cat === 'ecommerce'
      ? (isAr ? '🛍️ تجارة ومتاجر' : '🛍️ E-Commerce')
      : (isAr ? '🌐 إدارة محتوى وويب' : '🌐 CMS & Web');

    return `
      <article 
        class="article-card p-6 glass-panel rounded-2xl interactive-card border border-emerald-500/20 flex flex-col justify-between group transition-all duration-300"
        data-cat="${art.cat}"
        data-search="${(title + ' ' + desc + ' ' + badge).toLowerCase()}"
      >
        <div class="space-y-4">
          <!-- Badges Bar -->
          <div class="flex items-center justify-between gap-2 text-xs">
            <span class="px-2.5 py-1 rounded-lg border border-emerald-500/30 text-emerald-300 bg-emerald-950/60 text-[11px] font-semibold flex items-center gap-1.5">
              ${categoryBadge}
            </span>
            <span class="text-[11px] text-emerald-400/80 font-mono flex items-center gap-1">
              ⏱️ ${art.readTime}
            </span>
          </div>

          <!-- Micro Badge -->
          <div class="text-[11px] font-medium text-[#E5C78B] font-mono tracking-wide">
            ${badge}
          </div>

          <!-- Title -->
          <h2 class="text-base sm:text-lg font-bold text-white group-hover:text-[#E5C78B] transition-colors leading-snug">
            <a href="${linkUrl}" class="hover:underline">
              ${title}
            </a>
          </h2>

          <!-- Description -->
          <p class="text-xs sm:text-sm text-emerald-100/70 leading-relaxed line-clamp-3">
            ${desc}
          </p>
        </div>

        <div class="pt-5 mt-4 border-t border-emerald-950/80 flex items-center justify-between">
          <span class="text-xs text-emerald-400 font-mono">
            ${isAr ? 'بقلم: يوسف غمري' : 'By Youssef Ghamry'}
          </span>
          <a href="${linkUrl}" class="inline-flex items-center gap-1.5 text-xs font-bold text-[#E5C78B] group-hover:text-white transition-colors">
            <span>${isAr ? 'قراءة المقال الكامل' : 'Read Full Article'}</span>
            <span class="transition-transform group-hover:translate-x-1 ${isAr ? 'group-hover:-translate-x-1' : ''}">${isAr ? '←' : '→'}</span>
          </a>
        </div>
      </article>
    `;
  }).join('\n');

  return `<!doctype html>
<html lang="${lang}" dir="${isAr ? 'rtl' : 'ltr'}" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${pageTitle}</title>
    <meta name="description" content="${metaDesc}" />

    <!-- Canonical & Multilingual Alternate Hreflang Tags -->
    <link rel="canonical" href="${canonicalUrl}" />
    <link rel="alternate" hreflang="ar" href="${altArUrl}" />
    <link rel="alternate" hreflang="en" href="${altEnUrl}" />

    <!-- Open Graph Metadata -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${pageTitle}" />
    <meta property="og:description" content="${metaDesc}" />
    <meta property="og:site_name" content="Youssef Ghamry Official Platform" />
    <meta property="og:image" content="/assets/aistudio/image_ef5d64bf.png" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${pageTitle}" />
    <meta name="twitter:description" content="${metaDesc}" />
    <meta name="twitter:image" content="/assets/aistudio/image_ef5d64bf.png" />

    <!-- Core Stylesheet -->
    <link rel="stylesheet" href="/assets/css/style.css" />

    <!-- Schema.org Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          "name": "${pageTitle}",
          "description": "${metaDesc}",
          "url": "${canonicalUrl}",
          "author": {
            "@type": "Person",
            "name": "Youssef Ghamry (يوسف غمري)",
            "jobTitle": "Tender & Proposal Specialist | Technical Proposal Writer"
          }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "${isAr ? 'الرئيسية' : 'Home'}", "item": "${isAr ? '/ar/index.html' : '/index.html'}" },
            { "@type": "ListItem", "position": 2, "name": "${isAr ? 'مركز المعرفة والمقالات' : 'Knowledge Hub & Articles'}", "item": "${canonicalUrl}" }
          ]
        }
      ]
    }
    </script>
  </head>
  <body class="theme-gold selection:bg-emerald-600 selection:text-white">

    <!-- Standard Header will be inserted by the universal header generator -->
    <div id="universal-header-placeholder"></div>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 relative z-10 w-full">

      <!-- Breadcrumbs -->
      <nav class="breadcrumbs" aria-label="${isAr ? 'مسار التنقل' : 'Breadcrumbs'}">
        <a href="${isAr ? '/ar/index.html' : '/index.html'}">${isAr ? 'الرئيسية' : 'Home'}</a>
        <span>/</span>
        <span class="text-white font-semibold">${isAr ? 'مركز المعرفة ودليل المقالات' : 'Knowledge Hub & Articles'}</span>
      </nav>

      <!-- Hero Header -->
      <header class="border-b border-emerald-950/80 pb-8 space-y-4">
        <div class="flex flex-wrap items-center gap-2">
          <span class="badge-gold">
            <span class="w-1.5 h-1.5 rounded-full bg-[#C6A15B] animate-pulse"></span>
            <span>${isAr ? 'مكتبة المعرفة التقنية والعطاءات' : 'Technical & Procurement Knowledge Hub'}</span>
          </span>
          <span class="badge-emerald">${isAr ? '34 مقالاً ودليلاً هندسياً شاملاً' : '34 Comprehensive Guides & Blueprints'}</span>
        </div>

        <h1 class="text-2xl sm:text-4xl font-extrabold text-white leading-tight ${isAr ? 'font-sans' : 'font-serif'}">
          ${isAr ? 'دليل المقالات والمعرفة التقنية والعطاءات' : 'Knowledge Hub & Technical Articles Directory'}
        </h1>

        <p class="text-sm sm:text-base text-emerald-100/80 max-w-4xl leading-relaxed">
          ${isAr 
            ? 'مستودع معرفي تخصصي يجمع أدلة عملية معمقة في استراتيجيات المناقصات الحكومية (منصة اعتماد)، صياغة العروض الفنية ومصفوفات الامتثال، إلى جانب معمارية ووردبريس ودروبال وتطوير متاجر سلة، زد، شوبيفاي، وماجنتو.' 
            : 'An authoritative knowledge repository compiling practical technical blueprints on Saudi public procurement (Etimad), compliant technical proposal authoring, zero-reservation compliance matrices, enterprise CMS engineering, and modern e-commerce storefront architectures.'}
        </p>

        <!-- Metrics Bar -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4">
          <div class="p-3.5 rounded-xl glass-panel border border-emerald-500/20 text-center">
            <div class="text-xl sm:text-2xl font-extrabold gold-gradient-text font-mono">34</div>
            <div class="text-[11px] text-emerald-200/80">${isAr ? 'مقالاً تخصصياً' : 'Specialized Articles'}</div>
          </div>
          <div class="p-3.5 rounded-xl glass-panel border border-emerald-500/20 text-center">
            <div class="text-xl sm:text-2xl font-extrabold text-emerald-300 font-mono">6</div>
            <div class="text-[11px] text-emerald-200/80">${isAr ? 'أدلة مناقصات واعتماد' : 'Tender & Etimad Guides'}</div>
          </div>
          <div class="p-3.5 rounded-xl glass-panel border border-emerald-500/20 text-center">
            <div class="text-xl sm:text-2xl font-extrabold text-emerald-300 font-mono">14</div>
            <div class="text-[11px] text-emerald-200/80">${isAr ? 'أدلة منصات التجارة' : 'E-Commerce Guides'}</div>
          </div>
          <div class="p-3.5 rounded-xl glass-panel border border-emerald-500/20 text-center">
            <div class="text-xl sm:text-2xl font-extrabold text-emerald-300 font-mono">14</div>
            <div class="text-[11px] text-emerald-200/80">${isAr ? 'أدلة CMS وهندسة الويب' : 'CMS & Web Guides'}</div>
          </div>
        </div>
      </header>

      <!-- Search & Filter Controls -->
      <section class="space-y-4">
        <!-- Search Box -->
        <div class="relative">
          <input 
            type="text" 
            id="articles-search-input" 
            placeholder="${searchPlaceholder}"
            class="w-full px-5 py-3.5 rounded-xl bg-[#07130D] border border-emerald-500/30 text-white placeholder-emerald-400/50 text-sm focus:outline-none focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] transition-all shadow-inner"
          />
          <span class="absolute end-4 top-1/2 -translate-y-1/2 text-emerald-400/60 pointer-events-none text-base">
            🔍
          </span>
        </div>

        <!-- Filter Pills -->
        <div class="flex flex-wrap items-center gap-2" id="articles-filter-pills">
          <button type="button" class="article-filter-btn px-4 py-2 rounded-xl text-xs font-semibold border border-[#C6A15B] text-[#E5C78B] bg-[#C6A15B]/15 transition-all shadow-sm" data-filter="all">
            ${filterAllLabel}
          </button>
          <button type="button" class="article-filter-btn px-4 py-2 rounded-xl text-xs font-semibold border border-emerald-500/30 text-emerald-300 hover:text-white hover:border-emerald-400 bg-[#07130D] transition-all" data-filter="tenders">
            ${filterTendersLabel}
          </button>
          <button type="button" class="article-filter-btn px-4 py-2 rounded-xl text-xs font-semibold border border-emerald-500/30 text-emerald-300 hover:text-white hover:border-emerald-400 bg-[#07130D] transition-all" data-filter="ecommerce">
            ${filterEcommerceLabel}
          </button>
          <button type="button" class="article-filter-btn px-4 py-2 rounded-xl text-xs font-semibold border border-emerald-500/30 text-emerald-300 hover:text-white hover:border-emerald-400 bg-[#07130D] transition-all" data-filter="cms">
            ${filterCmsLabel}
          </button>
        </div>
      </section>

      <!-- Articles Grid -->
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="articles-grid">
        ${articlesCardsHtml}
      </section>

      <!-- Empty State -->
      <div id="articles-empty-state" class="hidden text-center py-16 p-8 glass-panel rounded-2xl border border-emerald-500/20 space-y-4">
        <div class="text-4xl">🔍</div>
        <h3 class="text-lg font-bold text-white">
          ${isAr ? 'لم يتم العثور على مقالات مطابقة' : 'No Matching Articles Found'}
        </h3>
        <p class="text-sm text-emerald-200/70 max-w-md mx-auto">
          ${isAr ? 'جرب البحث بكلمات أخرى أو اختر تصنيفاً مختلفاً لعرض جميع المقالات المتاحة.' : 'Try adjusting your search terms or clearing filters to see all available articles.'}
        </p>
      </div>

    </main>

    <!-- Footer -->
    <footer class="mt-20 border-t border-emerald-950/80 bg-[#050806] py-12 text-center text-xs text-emerald-400/60">
      <div class="max-w-7xl mx-auto px-4 space-y-2">
        <p class="text-emerald-200/80 font-medium">
          ${isAr ? 'يوسف غمري — أخصائي مناقصات وعروض فنية ومدقق جودة وامتثال' : 'Youssef Ghamry — Tender & Proposal Specialist | Bid QA & Compliance'}
        </p>
        <p>© 2026 ${isAr ? 'جميع الحقوق محفوظة' : 'All Rights Reserved'}.</p>
      </div>
    </footer>

    <!-- Client-Side Search & Filter Script -->
    <script>
      (function() {
        const input = document.getElementById('articles-search-input');
        const filterBtns = document.querySelectorAll('.article-filter-btn');
        const cards = document.querySelectorAll('.article-card');
        const emptyState = document.getElementById('articles-empty-state');
        let currentFilter = 'all';

        function filterArticles() {
          const q = (input ? input.value : '').trim().toLowerCase();
          let visibleCount = 0;

          cards.forEach(card => {
            const cat = card.getAttribute('data-cat');
            const searchData = card.getAttribute('data-search') || '';
            const matchesCat = (currentFilter === 'all') || (cat === currentFilter);
            const matchesQuery = !q || searchData.includes(q);

            if (matchesCat && matchesQuery) {
              card.style.display = '';
              visibleCount++;
            } else {
              card.style.display = 'none';
            }
          });

          if (emptyState) {
            emptyState.classList.toggle('hidden', visibleCount > 0);
          }
        }

        if (input) {
          input.addEventListener('input', filterArticles);
        }

        filterBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
              b.classList.remove('border-[#C6A15B]', 'text-[#E5C78B]', 'bg-[#C6A15B]/15', 'shadow-sm');
              b.classList.add('border-emerald-500/30', 'text-emerald-300', 'bg-[#07130D]');
            });
            btn.classList.add('border-[#C6A15B]', 'text-[#E5C78B]', 'bg-[#C6A15B]/15', 'shadow-sm');
            btn.classList.remove('border-emerald-500/30', 'text-emerald-300', 'bg-[#07130D]');

            currentFilter = btn.getAttribute('data-filter') || 'all';
            filterArticles();
          });
        });
      })();
    </script>
    <script src="/assets/js/main.js"></script>
  </body>
</html>`;
}

// Generate the files
const arHtml = generateArticlesHubHTML('ar');
const enHtml = generateArticlesHubHTML('en');

fs.writeFileSync(path.resolve('ar/articles/index.html'), arHtml, 'utf-8');
fs.writeFileSync(path.resolve('en/articles/index.html'), enHtml, 'utf-8');

console.log('✓ Successfully created ar/articles/index.html & en/articles/index.html with all 34 articles!');
