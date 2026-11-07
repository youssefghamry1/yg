import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CATEGORIES, ServiceDef } from './servicesData.js';
import { PLATFORM_ARTICLES } from './articlesData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Helper to escape HTML attributes
function escapeHtml(str: string): string {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Master list of all 93 services with metadata
export const ALL_SERVICES: ServiceDef[] = [
  // --- CATEGORY 1: Website Design & Development ---
  {
    slug: 'wordpress-development',
    categoryId: 'web-development',
    badgeEn: 'WordPress · Bespoke Engineering',
    badgeAr: 'ووردبريس · تطوير مخصص',
    titleEn: 'WordPress Website Development',
    titleAr: 'تطوير مواقع ووردبريس',
    headlineEn: 'Engineering High-Performance, Scalable WordPress & WooCommerce Platforms',
    headlineAr: 'هندسة وبرمجة منصات ومواقع ووردبريس وووكومرس فائقة السرعة والأمان',
    overviewEn: 'Bespoke WordPress engineering eliminating template bloat. Custom themes, enterprise Gutenberg blocks, WooCommerce portals, and Core Web Vitals performance tuning.',
    overviewAr: 'برمجة مواقع ووردبريس مخصصة من الصفر دون قوالب جاهزة متضخمة، كتل جوتنبرج مخصصة، متاجر ووكومرس، وتسريع فائق يحقق 98+ في مؤشرات الويب.',
    problemsEn: ['Slow load times from multipurpose themes', 'Security vulnerabilities in third-party plugins', 'Poor mobile and Arabic RTL rendering', 'Frequent crashes during traffic spikes'],
    problemsAr: ['بطء شديد ناتج عن القوالب التجارية الثقيلة', 'ثغرات أمنية في الإضافات مجهولة المصدر', 'تنسيق سيئ للغة العربية على الموبايل', 'انهيار الموقع عند زيادة عدد الزوار'],
    targetEn: ['Corporate entities & holding companies', 'E-commerce retailers & distributors', 'Media publishers & news outlets', 'Professional consultancies'],
    targetAr: ['الشركات القابضة والمؤسسات الكبرى', 'المتاجر الإلكترونية وتجار التجزئة', 'الصحف والمنصات الإخبارية', 'المكاتب الاستشارية والمهنية'],
    scopeEn: [
      { title: 'Custom Theme Engineering', desc: 'Handcrafted semantic PHP templates using Tailwind CSS with zero render-blocking dependencies.' },
      { title: 'WooCommerce Customization', desc: 'Bespoke checkout flows, Saudi payment gateways (Mada, Apple Pay), and automated invoice generation.' },
      { title: 'Speed & Core Web Vitals Tuning', desc: 'Server microcaching, Redis object caching, AVIF/WebP conversion, and sub-second page loads.' },
      { title: 'Enterprise Hardening', desc: 'Disabling XML-RPC, implementing two-factor authentication, security headers, and automated off-site cloud backups.' }
    ],
    scopeAr: [
      { title: 'برمجة قوالب مخصصة', desc: 'بناء قوالب PHP نظيفة بـ Tailwind CSS بدون مكتبات ثقيلة أو أكواد مهملة تعيق الرندرة.' },
      { title: 'تخصيص متاجر ووكومرس', desc: 'صفحات دفع مختصرة، ربط بوابات الدفع السعودية (مدى، أبل باي)، والفوترة الإلكترونية.' },
      { title: 'تسريع الأداء ومؤشرات الويب', desc: 'تفعيل Redis Object Cache، ضبط خوادم NGINX، تحويل الصور لصيغ حديثة، وسرعة تحت ثانية.' },
      { title: 'التحصين الأمني المؤسسي', desc: 'إغلاق بروتوكول XML-RPC، المصادقة الثنائية، ترويسات الأمان الصارمة، والنسخ الاحتياطي السحابي اليومي.' }
    ],
    deliverablesEn: ['Custom Theme Source Code & Assets', 'Core Web Vitals 95+ Audit Report', 'Multilingual Arabic/English Setup', 'Security & Backup Automation Suite', 'Comprehensive Admin Documentation'],
    deliverablesAr: ['الكود المصدري للقالب المخصص', 'تقرير اجتياز مؤشرات الويب 95+', 'إعداد التعريب الكامل واللغة الإنجليزية', 'منظومة الأمان والنسخ الاحتياطي التلقائي', 'دليل تدريب لإدارة وتحديث المحتوى'],
    workflowEn: [
      { step: '01', title: 'Requirements & Architecture', desc: 'Content modeling, technical wireframes, and performance KPIs definition.' },
      { step: '02', title: 'Custom Code Engineering', desc: 'Developing bespoke templates, custom post types, and Gutenberg blocks.' },
      { step: '03', title: 'QA & Speed Optimization', desc: 'Mobile responsiveness, cross-browser audits, and Core Web Vitals tuning.' },
      { step: '04', title: 'Deployment & Training', desc: 'Zero-downtime server migration, SSL setup, and editorial handoff.' }
    ],
    workflowAr: [
      { step: '01', title: 'تحليل المتطلبات وهندسة المحتوى', desc: 'تحديد هيكل البيانات، المخططات الهندسية، ومؤشرات الأداء المستهدفة.' },
      { step: '02', title: 'البرمجة والتطوير المخصص', desc: 'برمجة القوالب، كتل جوتنبرج، وربط واجهات البيانات دون إضافات زائدة.' },
      { step: '03', title: 'فحص الجودة واختبار السرعة', desc: 'اختبار التوافق التام مع الأجهزة والشاشات وتسريع التحميل لمستوى لحظي.' },
      { step: '04', title: 'الإطلاق والتدريب', desc: 'نقل الموقع للخادم السحابي، تفعيل الأمان وشهادات SSL، وتدريب فريق العمل.' }
    ],
    benefitsEn: [
      { title: 'Sub-Second Loading', desc: 'Fast pages reduce bounce rates and maximize Google organic search rankings.' },
      { title: 'Bulletproof Security', desc: 'Hardened architecture prevents automated exploit attacks and malware.' },
      { title: 'Zero License Lock-In', desc: '100% open-source ownership without recurring theme marketplace subscriptions.' }
    ],
    benefitsAr: [
      { title: 'سرعة تصفح فائقة', desc: 'تحميل لحظي يقلل معدل الارتداد ويرفع ترتيب الموقع في نتائج بحث جوجل.' },
      { title: 'أمان وحماية قصوى', desc: 'بنية محصنة تمنع الاختراقات وتصمد أمام هجمات البوتات الخبيثة.' },
      { title: 'ملكية تامة دون رسوم متكررة', desc: 'كود مفتوح المصدر مملوك لك بالكامل دون اشتراكات قوالب تجارية دورية.' }
    ],
    faqsEn: [
      { q: 'Why choose a custom WordPress theme over a marketplace theme?', a: 'Marketplace themes bundle thousands of unused features that destroy page speed and expose vulnerabilities. Custom themes load only necessary code, delivering 95+ PageSpeed scores and tailored security.' },
      { q: 'Can you integrate Saudi payment gateways like Mada and Apple Pay?', a: 'Yes. We natively integrate Moyasar, HyperPay, Tap, and PayTabs with full Apple Pay and Mada checkout support.' },
      { q: 'How do you handle bilingual Arabic and English websites?', a: 'We build native RTL and LTR support with dedicated Arabic font pairings (Cairo/Almarai) and zero layout shifts.' }
    ],
    faqsAr: [
      { q: 'لماذا أختار قالباً مخصصاً بدلاً من شراء قالب جاهز؟', a: 'تحتوي القوالب الجاهزة على آلاف الأكواد غير المستخدمة التي تبطئ الموقع وتزيد الثغرات. القالب المخصص يحتوي فقط على ما تحتاجه بدقة، مما يمنحك سرعة قياسية وأماناً تاماً.' },
      { q: 'هل يمكن ربط بوابات الدفع السعودية مثل مدى وApple Pay؟', a: 'نعم، نربط بوابات ميسر (Moyasar)، هايبرباي (HyperPay)، تاب (Tap)، وبي تابز (PayTabs) مع دعم كامل لمدى وأبل باي.' },
      { q: 'كيف تتعامل مع المواقع ثنائية اللغة (عربي / إنجليزي)؟', a: 'نبرمج تصميماً مخصصاً يدعم اتجاه اليمين (RTL) واليسار (LTR) مع خطوط عربية واضحة ومقروءة وتناسق تام دون أي تشوه.' }
    ],
    relatedServices: ['website-maintenance', 'speed-optimization', 'website-security', 'technical-seo'],
    relatedArticles: ['what-is-wordpress', 'wordpress-website-development', 'wordpress-speed-optimization', 'wordpress-security-and-maintenance']
  },

  {
    slug: 'shopify-development',
    categoryId: 'web-development',
    badgeEn: 'Shopify · Certified Store Engineering',
    badgeAr: 'شوبيفاي · تطوير متاجر احترافية',
    titleEn: 'Shopify Website Development',
    titleAr: 'تطوير متاجر شوبيفاي',
    headlineEn: 'Custom Online Store 2.0 Themes & High-Converting Headless Shopify Stores',
    headlineAr: 'تصميم وبرمجة متاجر شوبيفاي مخصصة بنظام Online Store 2.0 وتجربة تسوق سريعة',
    overviewEn: 'End-to-end Shopify store engineering: custom Liquid themes, checkout optimization, Saudi and Gulf payment integrations, and app audit minimization.',
    overviewAr: 'تطوير متاجر شوبيفاي متكاملة بقوالب Liquid مخصصة، تحسين مسار الدفع، ربط بوابات الدفع الخليجية والمحلية، والتخلص من التطبيقات التي تبطئ المتجر.',
    problemsEn: ['Generic templates with low conversion rates', 'Excessive apps slowing down checkout', 'Lack of native Arabic and Mada payment support', 'Poor mobile shopping experiences'],
    problemsAr: ['قوالب شوبيفاي المتشابهة وضعف معدل المبيعات', 'تراكم التطبيقات وبطء صفحة إنهاء الطلب', 'غياب الدعم الحقيقي للغة العربية والدفع بمدى', 'صعوبة تصفح المتجر من الجوال'],
    targetEn: ['Direct-to-Consumer (D2C) brands', 'Retail chains moving to e-commerce', 'High-volume international merchants', 'Luxury apparel & beauty brands'],
    targetAr: ['العلامات التجارية للبيع المباشر D2C', 'سلاسل التجزئة الراغبة في التحول الرقمي', 'المتاجر الكبرى ذات المبيعات المرتفعة', 'علامات الأزياء والعطور والمنتجات الفاخرة'],
    scopeEn: [
      { title: 'Custom Online Store 2.0 Theme', desc: 'Handcrafted Liquid sections and JSON templates enabling modular drag-and-drop page customization.' },
      { title: 'Localized Payment & Shipping', desc: 'Configuring Mada, Apple Pay, Tabby, Tamara, and local courier tracking webhooks.' },
      { title: 'Conversion Rate Optimization', desc: 'Sticky add-to-cart bars, instant slide-out carts, and one-click upsell flows.' },
      { title: 'App Auditing & Speed Tuning', desc: 'Eliminating redundant JavaScript libraries and optimizing media assets.' }
    ],
    scopeAr: [
      { title: 'بناء قالب Online Store 2.0 مخصص', desc: 'أقسام برمجية بلغة Liquid وملفات JSON تتيح تعديل وتخصيص كل صفحة بسهولة.' },
      { title: 'ربط بوابات الدفع والشحن المحلية', desc: 'تفعيل مدى، أبل باي، خيارات التقسيط (تابي وتمارا)، وتتبع الشحنات آلياً.' },
      { title: 'تحسين معدلات التحويل (CRO)', desc: 'زر إضافة للسلة عائم على الجوال، سلة جانبية تفاعلية، وعروض بيع تكميلي ذكية.' },
      { title: 'تدقيق التطبيقات وتسريع المتجر', desc: 'حذف الأكواد الزائدة من التطبيقات القديمة وضغط الصور لرفع سرعة التحميل.' }
    ],
    deliverablesEn: ['Bespoke Shopify OS 2.0 Theme', 'Localized Arabic/English Storefront', 'Integrated Payment Gateways (Mada, Apple Pay)', 'Analytics & Pixel Setup (Google, Snap, TikTok)', 'Staff Administration Guide'],
    deliverablesAr: ['قالب شوبيفاي مخصص 100%', 'واجهة متجر ثنائية اللغة (عربي وإنجليزي)', 'ربط بوابات الدفع (مدى، أبل باي، تابي)', 'ربط تحليلات وبيكسلات الإعلانات بدقة', 'دليل تدريبي شامل لفريق إدارة المتجر'],
    workflowEn: [
      { step: '01', title: 'Brand & Catalog Discovery', desc: 'Customer persona mapping, product taxonomies, and conversion goals.' },
      { step: '02', title: 'Theme Development & Liquid Coding', desc: 'Developing bespoke sections and modular product templates.' },
      { step: '03', title: 'Integrations & Payment Testing', desc: 'Connecting gateways, testing checkout flows, and tax compliance.' },
      { step: '04', title: 'Launch & Performance Audit', desc: 'DNS propagation, live transaction verification, and speed audit.' }
    ],
    workflowAr: [
      { step: '01', title: 'دراسة العلامة والمنتجات', desc: 'تحليل سلوك العملاء وتحديد تصنيفات المنتجات وأهداف المبيعات.' },
      { step: '02', title: 'برمجة القالب بلغة Liquid', desc: 'بناء الأقسام المخصصة وصفحات المنتجات السريعة والتفاعلية.' },
      { step: '03', title: 'ربط البوابات واختبار الدفع', desc: 'ربط طرق الدفع والشحن واختبار الطلبات وضبط الضرائب بدقة.' },
      { step: '04', title: 'الإطلاق والتحقق النهائي', desc: 'ربط النطاق وفحص أمان المعاملات وتدقيق سرعة استجابة المتجر.' }
    ],
    benefitsEn: [
      { title: 'High-Converting Checkout', desc: 'Shopify’s world-class checkout infrastructure maximizes successful transactions.' },
      { title: 'Flawless Arabic UX', desc: 'Right-to-left layout designed specifically for Gulf and Middle Eastern consumers.' },
      { title: 'Automatic Cloud Scaling', desc: 'Handles thousands of simultaneous checkout orders during mega-promotions.' }
    ],
    benefitsAr: [
      { title: 'أعلى معدل إتمام طلبات', desc: 'بنية شوبيفاي المتطورة لصفحة الدفع تقلل التخلي عن السلة وتزيد الأرباح.' },
      { title: 'تجربة عربية أصيلة', desc: 'تصميم RTL مخصص يراعي سلوك المستهلك الخليجي في تصفح المنتجات والشراء.' },
      { title: 'تحمل ضغط الزيارات العالي', desc: 'خوادم سحابية تستوعب آلاف الطلبات في الدقيقة أثناء حملات التخفيضات الكبرى.' }
    ],
    faqsEn: [
      { q: 'Can Shopify handle dual-language stores (Arabic & English)?', a: 'Yes. With Shopify Markets and native multi-language apps, we set up seamless Arabic and English localized experiences with auto-currency detection.' },
      { q: 'Can you migrate our products from WooCommerce or Magento to Shopify?', a: 'Yes. We migrate products, variants, customer records, order history, and SEO redirects with zero loss of data.' }
    ],
    faqsAr: [
      { q: 'هل تدعم شوبيفاي اللغتين العربية والإنجليزية معاً؟', a: 'نعم، عبر Shopify Markets وإعدادات اللغات المتقدمة، ننشئ متجراً ثنائي اللغة مع تبديل سلس وعملات متعددة.' },
      { q: 'هل يمكن نقل المنتجات والعملاء من ووكومرس أو ماجنتو إلى شوبيفاي؟', a: 'نعم، ننقل كافة المنتجات، الخيارات، بيانات العملاء، وسجل الطلبات مع الحفاظ التام على أرشفة السيو القديمة.' }
    ],
    relatedServices: ['ecommerce-development', 'responsive-web-design', 'speed-optimization'],
    relatedArticles: ['what-is-shopify', 'shopify-store-development', 'shopify-vs-woocommerce', 'shopify-store-optimization']
  },

  {
    slug: 'drupal-development',
    categoryId: 'web-development',
    badgeEn: 'Drupal · Enterprise CMS Architecture',
    badgeAr: 'دروبال · أنظمة المحتوى المؤسسية',
    titleEn: 'Drupal Website Development',
    titleAr: 'تطوير مواقع دروبال للمؤسسات',
    headlineEn: 'Enterprise-Grade Digital Experience Portals for Government & Higher Education',
    headlineAr: 'بناء وتطوير البوابات الرقمية الحكومية والأكاديمية المعقدة بنظام دروبال',
    overviewEn: 'Robust Drupal 10/11 development for public sector agencies, universities, and enterprise organizations requiring advanced taxonomy hierarchies and strict security compliance.',
    overviewAr: 'تطوير احترافي لمنصة دروبال 10/11 للجهات الحكومية والجامعات والشركات الكبرى التي تتطلب حوكمة صلاحيات معقدة وأعلى مستويات الأمان السيبراني.',
    problemsEn: ['Complex content relationships not supported by basic CMS', 'Strict governmental data security mandates', 'Multi-department access permissions bottlenecks', 'Legacy Drupal 7 end-of-life vulnerabilities'],
    problemsAr: ['علاقات محتوى معقدة تعجز الأنظمة العادية عن إدارتها', 'متطلبات أمان حكومية صارمة لبيانات الزوار والموظفين', 'صعوبة حوكمة الصلاحيات للأقسام والجهات المتعددة', 'انتهاء دعم دروبال 7 والحاجة للترقية الآمنة'],
    targetEn: ['Government ministries & public agencies', 'Universities & educational institutions', 'Global NGOs & non-profit organizations', 'Financial institutions'],
    targetAr: ['الوزارات والهيئات الحكومية', 'الجامعات والمؤسسات التعليمية الكبرى', 'المنظمات غير الحكومية الدولية', 'البنوك والشركات المالية'],
    scopeEn: [
      { title: 'Custom Module & Entity Development', desc: 'Developing bespoke Drupal modules using Symfony components and OOP standards.' },
      { title: 'Multi-Site Governance', desc: 'Configuring centralized multi-site architectures sharing a unified secure codebase.' },
      { title: 'Granular Role-Based Access Control', desc: 'Configuring multi-tier editorial approval workflows with SAML/SSO integration.' },
      { title: 'Migration to Drupal 10/11', desc: 'Secure data extraction, taxonomy mapping, and content migration from legacy CMS.' }
    ],
    scopeAr: [
      { title: 'تطوير الموديولات والكيانات المخصصة', desc: 'برمجة إضافات دروبال متوافقة مع إطار عمل Symfony والبرمجة الكائنية الحديثة.' },
      { title: 'إدارة شبكات المواقع المتعددة', desc: 'بنية Multi-Site لإدارة عشرات البوابات الفرعية من قاعدة كود مركزية آمنة.' },
      { title: 'حوكمة الصلاحيات والدخول الموحد', desc: 'مسارات اعتماد المحتوى المتعددة والربط مع خوادم الدخول الموحد (SSO/Active Directory).' },
      { title: 'الترقية والترحيل إلى دروبال 10/11', desc: 'نقل آمن للبيانات والتصنيفات المعقدة من الإصدارات القديمة دون أي فقدان للمحتوى.' }
    ],
    deliverablesEn: ['Drupal 10 Enterprise Portal', 'Custom Modules & Twig Theme', 'Role-Based Workflow Matrix', 'Security Audit Certificate', 'Maintenance & Patch SLA Roadmap'],
    deliverablesAr: ['بوابة دروبال 10 مكتملة', 'قالب Twig مخصص والموديولات البرمجية', 'مصفوفة حوكمة الصلاحيات والمستخدمين', 'تقرير تدقيق الأمان والامتثال', 'خطة الصيانة والتحديثات الدورية'],
    workflowEn: [
      { step: '01', title: 'Data Modeling & Taxonomy', desc: 'Structuring content types, fields, and taxonomies.' },
      { step: '02', title: 'Module & Theme Development', desc: 'Writing clean Twig templates and secure custom modules.' },
      { step: '03', title: 'Workflow & Permission Audit', desc: 'Simulating editorial roles and penetration testing.' },
      { step: '04', title: 'Staging & Production Rollout', desc: 'Config export synchronization and high-availability launch.' }
    ],
    workflowAr: [
      { step: '01', title: 'نمذجة البيانات وهيكلة التصنيفات', desc: 'تحديد أنواع المحتوى والعلاقات المترابطة بين الأقسام.' },
      { step: '02', title: 'برمجة القوالب والموديولات', desc: 'تطوير قوالب Twig الآمنة وكتابة الإضافات البرمجية الخاصة.' },
      { step: '03', title: 'فحص الصلاحيات واختبار الاختراق', desc: 'محاكاة أدوار الموظفين واختبار أمان الموقع والتشفير.' },
      { step: '04', title: 'الإطلاق وضبط المزامنة', desc: 'مزامنة ملفات التكوين والإطلاق على بيئات سحابية عالية التوافر.' }
    ],
    benefitsEn: [
      { title: 'Government-Grade Security', desc: 'Dedicated global security team ensures protection against critical zero-day threats.' },
      { title: 'Complex Editorial Workflows', desc: 'Enforce legal and public relations review stages before content publishing.' },
      { title: 'Infinite Taxonomy Scaling', desc: 'Easily manage hundreds of thousands of documents, research papers, and press releases.' }
    ],
    benefitsAr: [
      { title: 'أمان حكومي معتمد', desc: 'فريق أمان عالمي يضمن الحماية القصوى ضد الثغرات وهجمات الاختراق.' },
      { title: 'حوكمة النشر المتعدد', desc: 'مسارات مراجعة قانونية وإدارية للمحتوى قبل نشره للجمهور.' },
      { title: 'استيعاب ملايين الوثائق', desc: 'إدارة وتصنيف هائل للأبحاث والبيانات الصحفية والقرارات الرسمية.' }
    ],
    faqsEn: [
      { q: 'Is Drupal suitable for bilingual Arabic government portals?', a: 'Drupal is the gold standard for bilingual government websites due to its native translation architecture and deep RTL rendering engine.' }
    ],
    faqsAr: [
      { q: 'هل دروبال مناسب للبوابات الحكومية السعودية ثنائية اللغة؟', a: 'يعد دروبال المعيار الذهبي للوزارات والجهات الرسمية بفضل دعمه الأصيل للغة العربية وحوكمة المحتوى المتوافقة مع معايير هيئة الحكومة الرقمية (DGA).' }
    ],
    relatedServices: ['custom-software-development', 'website-security', 'database-development'],
    relatedArticles: ['what-is-drupal', 'drupal-website-development', 'drupal-for-enterprise-websites', 'drupal-vs-wordpress']
  },

  {
    slug: 'magento-development',
    categoryId: 'web-development',
    badgeEn: 'Magento · Enterprise E-Commerce',
    badgeAr: 'ماجنتو · تجارة كبرى ومؤسسية',
    titleEn: 'Magento / Adobe Commerce Development',
    titleAr: 'تطوير متاجر ماجنتو / أدوبي كوميرس',
    headlineEn: 'Scalable B2B & B2C E-Commerce Engines for High-Volume Catalog Retailers',
    headlineAr: 'بناء وتطوير منصات ماجنتو لتجارة الجملة B2B والتجزئة الضخمة متعددة المستودعات',
    overviewEn: 'Architecting Adobe Commerce / Magento Open Source stores with multi-warehouse routing, tier pricing, ERP synchronization (SAP/Oracle), and Varnish caching.',
    overviewAr: 'بناء متاجر ماجنتو متطورة للشركات والمصانع: مستودعات شحن متعددة، تسعير خاص لعملاء الجملة، الربط مع أنظمة SAP وOracle، والتسريع الكامل عبر Varnish.',
    problemsEn: ['Slow catalog searches with 100k+ SKUs', 'Inability to handle custom B2B corporate pricing contracts', 'Inventory desynchronization across branches', 'Server crashes during flash sales'],
    problemsAr: ['بطء البحث وتصفح الكتالوج عند تجاوز 100 ألف منتج', 'صعوبة تحديد أسعار مختلفة لكل شركة أو عميل جملة', 'عدم تطابق المخزون بين الفروع والمتجر الإلكتروني', 'توقف السيرفر عند الإقبال الجماهيري الكبير'],
    targetEn: ['Wholesale distributors & B2B manufacturers', 'Large-scale department stores & electronics chains', 'Automotive parts retailers', 'Pharmaceutical distributors'],
    targetAr: ['شركات التوزيع ومصانع الجملة B2B', 'سلاسل متاجر الإلكترونيات والتجزئة الكبرى', 'شركات قطع غيار السيارات والمعدات', 'موزعو الأدوية والمستلزمات الطبية'],
    scopeEn: [
      { title: 'Custom Magento 2 Module Development', desc: 'Bespoke modules adhering to Adobe Commerce technical guidelines and dependency injection.' },
      { title: 'B2B Custom Pricing & Quoting', desc: 'Tiered contract catalogs, minimum order rules, and digital quotation workflows.' },
      { title: 'ERP & WMS Integration', desc: 'Bi-directional real-time REST/SOAP syncing with SAP, Microsoft Dynamics, and Oracle.' },
      { title: 'High-Concurrency Performance Tuning', desc: 'Configuring Varnish cache, OpenSearch clusters, and RabbitMQ asynchronous queues.' }
    ],
    scopeAr: [
      { title: 'برمجة موديولات مخصصة لماجنتو 2', desc: 'تطوير إضافات برمجية وفق معايير أدوبي كوميرس القياسية وحقن التبعيات.' },
      { title: 'أنظمة تسعير الجملة وعروض الأسعار', desc: 'كتالوجات تسعير مخصصة لكل شريك، حدود أدنى للطلب، ودورات طلب عروض الأسعار.' },
      { title: 'الربط مع أنظمة ERP والمخازن', desc: 'مزامنة حية للطلبات والمخزون مع أنظمة SAP وMicrosoft Dynamics وOracle.' },
      { title: 'تسريع الأداء للأحجام الضخمة', desc: 'ضبط كاش Varnish ومجموعات OpenSearch وإدارة العمليات عبر RabbitMQ.' }
    ],
    deliverablesEn: ['Adobe Commerce / Magento 2 Storefront', 'Custom B2B Quotation Architecture', 'Bi-directional ERP Sync Connector', 'OpenSearch & Varnish Server Stack', 'Admin Operations Manual'],
    deliverablesAr: ['متجر ماجنتو 2 مكتمل', 'نظام عروض أسعار الجملة B2B المخصص', 'موصل الربط مع برنامج ERP والمخزون', 'بنية خوادم Varnish وOpenSearch فائقة السرعة', 'دليل إدارة العمليات والطلبات'],
    workflowEn: [
      { step: '01', title: 'Catalog & B2B Workflow Analysis', desc: 'Mapping product attributes, customer groups, and ERP endpoints.' },
      { step: '02', title: 'Architecture & Theme Engineering', desc: 'Hyvä or custom Luma theme build and module development.' },
      { step: '03', title: 'Data Migration & ERP Sync', desc: 'Importing SKUs, customers, order history, and live API synchronization.' },
      { step: '04', title: 'Stress Testing & Go-Live', desc: 'Load testing with 50,000 simulated users and zero-downtime launch.' }
    ],
    workflowAr: [
      { step: '01', title: 'تحليل الكتالوج ومتطلبات B2B', desc: 'تحديد خصائص المنتجات وفئات العملاء ونقاط الربط مع ERP.' },
      { step: '02', title: 'بناء القالب والبرمجة', desc: 'تطوير واجهات سريعة (Hyvä Theme) وبرمجة الموديولات المخصصة.' },
      { step: '03', title: 'ترحيل البيانات ومزامنة ERP', desc: 'استيراد مئات الآلاف من المنتجات وسجلات العملاء واختبار الـ API.' },
      { step: '04', title: 'اختبارات التحمل والإطلاق', desc: 'محاكاة 50,000 زائر متزامن لضمان استقرار الخادم قبل التدشين.' }
    ],
    benefitsEn: [
      { title: 'Infinite SKU Capacity', desc: 'Smoothly scales from 10,000 to over 1,000,000 products with zero lag.' },
      { title: 'Dedicated B2B Commerce', desc: 'Provide tailored credit terms, custom pricing, and corporate account management.' },
      { title: 'Full Data Sovereignty', desc: 'Host on local Saudi cloud infrastructure adhering to national cybersecurity requirements.' }
    ],
    benefitsAr: [
      { title: 'قدرة استيعابية لا نهائية', desc: 'إدارة سلسة من 10 آلاف إلى أكثر من مليون منتج دون بطء في البحث والتصفح.' },
      { title: 'تجارة B2B احترافية', desc: 'تسهيلات ائتمانية، حسابات فرعية للشركات، وأسعار خاصة لكل عميل تجاري.' },
      { title: 'سيادة البيانات واستضافة محلية', desc: 'إمكانية الاستضافة على سحابة سعودية محلية متوافقة مع لوائح الأمن السيبراني.' }
    ],
    faqsEn: [
      { q: 'Can Magento integrate with legacy ERP systems?', a: 'Yes. We specialize in custom middleware connecting Magento to SAP, Oracle NetSuite, and Microsoft Dynamics.' }
    ],
    faqsAr: [
      { q: 'هل يمكن ربط ماجنتو بنظام المحاسبة والمخازن الحالي لدينا؟', a: 'نعم، نبني جسور ربط برمجية مخصصة (Middleware) لمزامنة الفواتير والمخزون مع SAP وOracle وOdoo وMicrosoft Dynamics.' }
    ],
    relatedServices: ['erp-system-development', 'ecommerce-development', 'database-development'],
    relatedArticles: ['what-is-magento', 'magento-store-development', 'magento-vs-shopify', 'magento-ecommerce-optimization']
  },

  {
    slug: 'opencart-development',
    categoryId: 'web-development',
    badgeEn: 'OpenCart · Lean Commerce Engineering',
    badgeAr: 'أوبن كارت · متاجر خفيفة وسريعة',
    titleEn: 'OpenCart Store Development',
    titleAr: 'تطوير متاجر أوبن كارت',
    headlineEn: 'Fast, Lightweight, and Cost-Effective E-Commerce Architecture',
    headlineAr: 'تطوير متاجر أوبن كارت فائقة السرعة وخفيفة على الخوادم وبتكلفة تشغيل اقتصادية',
    overviewEn: 'Lightweight PHP MVC e-commerce stores designed for speed, low server consumption, custom OCMOD extensions, and seamless multi-currency management.',
    overviewAr: 'بناء متاجر إلكترونية خفيفة وسريعة بنمط MVC البرمجي، استهلاك منخفض للسيرفر، برمجة تعديلات OCMOD، ودعم كامل للعملات والشحن المحلي.',
    problemsEn: ['Heavy commerce engines requiring expensive dedicated servers', 'Complex administrative interfaces confusing store staff', 'Difficult custom checkout modifications'],
    problemsAr: ['المنصات الثقيلة التي تتطلب سيرفرات مكلفة شهرياً', 'لوحات تحكم معقدة تصعب إدارة المنتجات على الموظفين', 'صعوبة تخصيص وتعديل صفحات الشراء والشحن'],
    targetEn: ['Small-to-medium retail businesses', 'Niche product stores & boutiques', 'High-speed budget-conscious merchants'],
    targetAr: ['المتاجر المتوسطة والناشئة', 'المتاجر المتخصصة في منتجات محددة', 'التجار الباحثين عن أعلى سرعة بأقل تكلفة استضافة'],
    scopeEn: [
      { title: 'Custom OpenCart Theme Development', desc: 'Responsive, lightweight layout themes built without heavy external frameworks.' },
      { title: 'OCMOD Modification Engineering', desc: 'Custom extensions for payment gateways, local SMS alerts, and shipping calculators.' },
      { title: 'Multi-Store Configuration', desc: 'Managing several digital storefronts from a single centralized admin panel.' },
      { title: 'Database & Query Optimization', desc: 'Indexing tables and speeding up product category queries.' }
    ],
    scopeAr: [
      { title: 'تصميم قوالب أوبن كارت مخصصة', desc: 'واجهات متجاوبة وخفيفة بدون مكتبات ثقيلة تؤثر على زمن التحميل.' },
      { title: 'برمجة تعديلات OCMOD', desc: 'إضافات مخصصة لبوابات الدفع، إشعارات الرسائل القصيرة، وحساب تكلفة الشحن.' },
      { title: 'إدارة المتاجر المتعددة', desc: 'إدارة عدة واجهات متاجر بنطاقات مختلفة من لوحة تحكم واحدة.' },
      { title: 'تسريع قاعدة البيانات', desc: 'فهرسة الجداول وتحسين استعلامات المنتجات في الأقسام الكبيرة.' }
    ],
    deliverablesEn: ['Turnkey OpenCart 3/4 Store', 'Custom OCMOD Extensions', 'Payment & Shipping Integration', 'Speed & Security Hardening Report', 'Admin User Guide'],
    deliverablesAr: ['متجر أوبن كارت جاهز للتشغيل', 'موديولات OCMOD المخصصة', 'ربط الدفع والشحن المحلي', 'تقرير تسريع وتحصين أمان المتجر', 'دليل المستخدم لإدارة المتجر'],
    workflowEn: [
      { step: '01', title: 'Store Planning & Layout', desc: 'Defining catalog structure and UI wireframes.' },
      { step: '02', title: 'Theme & Extension Coding', desc: 'Building responsive views and custom OCMOD modifications.' },
      { step: '03', title: 'Payments & Testing', desc: 'Configuring Mada/Visa gateways and testing order flows.' },
      { step: '04', title: 'Deployment & Training', desc: 'Deploying on fast SSD hosting and training administrative team.' }
    ],
    workflowAr: [
      { step: '01', title: 'تخطيط المتجر والواجهات', desc: 'تحديد هيكل الأقسام والمنتجات ورسم المخططات الأولية.' },
      { step: '02', title: 'برمجة القالب والتعديلات', desc: 'بناء الواجهات وتطوير موديولات OCMOD وفق متطلبات العميل.' },
      { step: '03', title: 'ربط الدفع والاختبار', desc: 'ضبط بوابات الدفع واختبار تجربة الشراء من البداية للنهاية.' },
      { step: '04', title: 'النشر وتدريب الفريق', desc: 'تثبيت المتجر على استضافة سريعة وتدريب فريق المتجر.' }
    ],
    benefitsEn: [
      { title: 'Minimal Hosting Costs', desc: 'Runs smoothly on affordable VPS environments without performance drops.' },
      { title: 'Intuitive Admin Panel', desc: 'Straightforward order and inventory management without technical confusion.' },
      { title: 'Lightning Page Loads', desc: 'Lean PHP code delivers near-instant response times for shoppers.' }
    ],
    benefitsAr: [
      { title: 'تكاليف استضافة اقتصادية', desc: 'يعمل بكفاءة عالية على خوادم سحابية بسيطة دون استهلاك موارد ضخمة.' },
      { title: 'لوحة تحكم سهلة وبسيطة', desc: 'إدارة سريعة للمنتجات والطلبات دون تعقيد تقني على فريق العمل.' },
      { title: 'تصفح سريع جداً', desc: 'كود PHP خفيف يمنح المتسوقين سرعة انتقال لحظية بين المنتجات.' }
    ],
    faqsEn: [
      { q: 'Is OpenCart still supported and secure in 2026?', a: 'Yes. With modern PHP 8.2 compatibility, clean OCMOD coding, and security hardening, OpenCart remains a reliable, lightweight commerce option.' }
    ],
    faqsAr: [
      { q: 'هل أوبن كارت نظام آمن وحديث؟', a: 'نعم، مع توافقه مع إصدارات PHP 8 الحديثة وبرمجة التعديلات عبر OCMOD وتحصين الخادم، يقدم أداءً مستقراً وآمناً تماماً.' }
    ],
    relatedServices: ['ecommerce-development', 'speed-optimization', 'backend-development'],
    relatedArticles: ['what-is-opencart', 'opencart-store-development', 'opencart-vs-other-platforms']
  },

  {
    slug: 'salla-store-development',
    categoryId: 'web-development',
    badgeEn: 'Salla · Certified Twilight Partner',
    badgeAr: 'سلة · تطوير مخصص بمحرك Twilight',
    titleEn: 'Salla Store Design & Development',
    titleAr: 'تصميم وتطوير متاجر سلة',
    headlineEn: 'Bespoke Twilight Themes & Advanced API Integrations for Leading Saudi Brands',
    headlineAr: 'تصميم قوالب سلة مخصصة بمحرك Twilight وربط المنظومات للعلامات التجارية السعودية',
    overviewEn: 'Custom theme design on Salla Twilight engine, API apps integration, conversion optimization, and compliance with the Saudi Ministry of Commerce regulations.',
    overviewAr: 'تصميم قوالب مخصصة وحصرية على محرك Twilight لمتجر سلة، ربط التطبيقات عبر Salla API، تحسين المبيعات، ومطابقة متطلبات وزارة التجارة السعودية وهيئة الزكاة (ZATCA).',
    problemsEn: ['Standard Salla templates making brands look identical', 'Low conversion rates on default product pages', 'Improper ad tracking pixel configurations', 'Manual shipping and inventory bottlenecks'],
    problemsAr: ['تشابه قوالب سلة الجاهزة وفقدان الهوية المميزة للبراند', 'ضعف المبيعات لعدم وضوح العروض في صفحة المنتج', 'أخطاء في ربط بيكسلات الإعلانات وتتبع الحملات', 'صعوبة مزامنة الفواتير والمخازن يدوياً'],
    targetEn: ['Saudi fashion & luxury brands', 'Beauty, perfumes & cosmetic retailers', 'Specialty coffee & roasters', 'Electronics & home goods merchants'],
    targetAr: ['علامات الأزياء والعبايات الفاخرة بالسعودية', 'متاجر العطور ومستحضرات التجميل', 'المحامص ومتاجر القهوة المختصة', 'متاجر الأجهزة والإلكترونيات المنزلية'],
    scopeEn: [
      { title: 'Custom Twilight Theme Development', desc: 'Developing bespoke Twig/Tailwind CSS templates with unique luxury branding.' },
      { title: 'Conversion Funnel Enhancement', desc: 'Optimizing product galleries, sticky buy buttons, and localized bundles.' },
      { title: 'ZATCA & National Business Verification', desc: 'Configuring tax compliance, QR e-invoices, and Saudi Business Center verification.' },
      { title: 'Pixel & Tracking Integration', desc: 'Accurate server-side CAPI tracking for Snapchat, TikTok, Meta, and Google Analytics 4.' }
    ],
    scopeAr: [
      { title: 'برمجة قالب Twilight مخصص', desc: 'بناء واجهة فريدة للمتجر باستخدام لغة Twig وTailwind CSS تعبر عن هوية البراند.' },
      { title: 'تحسين قمع الشراء والمبيعات', desc: 'تطوير عارض صور تفاعلي للمنتجات، أزرار شراء عائمة، وعروض بيع ذكية.' },
      { title: 'الامتثال للفوترة الإلكترونية (ZATCA)', desc: 'ضبط الفوترة مع كود QR والتوثيق عبر المركز السعودي للأعمال.' },
      { title: 'ربط بيكسلات الإعلانات والـ CAPI', desc: 'ربط دقيق لبيكسلات سناب شات وتيك توك وجوجل مع واجهات Conversion API.' }
    ],
    deliverablesEn: ['Bespoke Salla Twilight Theme', 'Fully Verified Store Settings (Saudi Business Center)', 'Integrated Pixels & CAPI (Snapchat, TikTok, GA4)', 'Branded Banners & Media Kit', 'Store Growth Strategy Consultation'],
    deliverablesAr: ['قالب سلة مخصص وحصري للبراند', 'متجر موثق ومكتمل الإعدادات النظامية', 'بيكسلات إعلانية مربوطة بنظام CAPI بدقة 100%', 'مجموعة بنرات وتصاميم الهوية الرقمية', 'جلسة استشارية لرفع مبيعات المتجر'],
    workflowEn: [
      { step: '01', title: 'Brand Aesthetic & Requirements', desc: 'UX wireframes and identity alignment with Saudi consumer expectations.' },
      { step: '02', title: 'Twilight Theme Engineering', desc: 'Coding custom sections, custom fonts, and responsive components.' },
      { step: '03', title: 'Apps, Pixels & Shipping Setup', desc: 'Linking payment channels (Mada, Apple Pay, Tabby) and logistics.' },
      { step: '04', title: 'Launch & Live Test', desc: 'Performing real test purchase and validating conversion attribution.' }
    ],
    workflowAr: [
      { step: '01', title: 'تحليل الهوية والجمهور المستهدف', desc: 'رسم مخططات تجربة المستخدم ومواءمتها مع ذوق المستهلك السعودي.' },
      { step: '02', title: 'برمجة القالب بمحرك Twilight', desc: 'كتابة كود القالب المخصص وضبط الخطوط العربية والعناصر التفاعلية.' },
      { step: '03', title: 'ربط البيكسلات وشركات الشحن', desc: 'تفعيل خيارات الدفع (مدى، أبل باي، تابي، تمارا) وبوابات الشحن.' },
      { step: '04', title: 'التدشين وتجربة الشراء الحية', desc: 'تنفيذ طلب شراء تجريبي والتأكد من وصول بيانات التتبع للإعلانات.' }
    ],
    benefitsEn: [
      { title: 'Stand Out from Competitors', desc: 'A bespoke theme elevates your brand above thousands of generic Salla stores.' },
      { title: 'Zero Friction Checkout', desc: 'Mada, Apple Pay, Tabby, and Tamara build instant buyer confidence.' },
      { title: 'Bulletproof Ad Attribution', desc: 'Accurate Pixel/CAPI data empowers your media buying to reduce CAC.' }
    ],
    benefitsAr: [
      { title: 'تميز بصري عن المنافسين', desc: 'قالب خاص يمنح براندك فخامة وهيبة تبتعد تماماً عن المتاجر التقليدية.' },
      { title: 'شراء فوري بثقة تامة', desc: 'توفير خيارات مدى، أبل باي، والدفع الآجل يرفع ثقة المتسوقين ويكمل الطلبات.' },
      { title: 'دقة تتبع الإعلانات', desc: 'بيانات دقيقة لبيكسلات الإعلانات تخفض تكلفة اكتساب العميل (CAC).' }
    ],
    faqsEn: [
      { q: 'Can you customize my Salla store without losing my current products and orders?', a: 'Yes. Customizing the theme or installing a Twilight template modifies only the visual presentation; all products, customers, and order history remain 100% intact.' }
    ],
    faqsAr: [
      { q: 'هل سيتأثر مخزوني أو سجل الطلبات الحالي عند تطوير القالب؟', a: 'أبداً، تطوير القالب عبر Twilight يغير فقط المظهر وطريقة العرض، بينما تظل المنتجات والعملاء والطلبات محفوظة بالكامل.' }
    ],
    relatedServices: ['zid-store-development', 'ecommerce-development', 'responsive-web-design', 'technical-seo'],
    relatedArticles: ['what-is-salla', 'salla-store-design', 'salla-store-setup-customization', 'what-is-zid']
  },

  {
    slug: 'zid-store-development',
    categoryId: 'web-development',
    badgeEn: 'Zid · Retail Ecosystem Partner',
    badgeAr: 'زد · شريك حلول التجزئة الحديثة',
    titleEn: 'Zid Store Design & Development',
    titleAr: 'تصميم وتطوير متاجر زد',
    headlineEn: 'Custom Zid Theme Engineering & Omnichannel Retail Synchronization',
    headlineAr: 'تصميم قوالب زد المخصصة وربط الفروع والمخازن لمنظومة تجزئة موحدة',
    overviewEn: 'Engineering bespoke storefronts on Zid, configuring Zid Pay, Zid Ship, multi-branch inventory routing, and integrating POS systems for modern Saudi retailers.',
    overviewAr: 'بناء وتخصيص متاجر منصة زد باحترافية، تفعيل زد باي وزد شب، إدارة مخزون الفروع المتعددة، والربط مع أنظمة نقاط البيع والمحاسبة للشركات السعودية.',
    problemsEn: ['Disconnected branch inventory causing out-of-stock orders', 'Unoptimized checkout drop-offs', 'Generic store templates lacking brand exclusivity', 'Accounting synchronization challenges'],
    problemsAr: ['عدم ترابط مخزون الفروع وبيع منتجات نافدة بالخطأ', 'تراجع المبيعات بسبب صعوبة تصفح المنتجات على الجوال', 'تشابه شكل المتجر مع المنافسين', 'صعوبة مزامنة الفواتير مع برنامج المحاسبة'],
    targetEn: ['Established retail chains with physical branches', 'Perfume & cosmetics retailers', 'Electronics & home appliances stores', 'Fashion houses and boutique apparel'],
    targetAr: ['سلاسل التجزئة التي تمتلك فروعاً ومحلات فعلية', 'شركات العطور ومستحضرات العناية', 'معارض الأجهزة المنزلية والإلكترونيات', 'بيوت الأزياء والملابس الراقية'],
    scopeEn: [
      { title: 'Custom Zid Storefront Design', desc: 'Crafting bespoke HTML/CSS themes tailored to GCC consumer aesthetics.' },
      { title: 'Multi-Branch Inventory Sync', desc: 'Connecting physical store POS and warehouse inventories to prevent stock desync.' },
      { title: 'Payment & Logistics Automation', desc: 'Configuring Zid Pay (Mada, Apple Pay) and automated shipping label printing via Zid Ship.' },
      { title: 'Advanced Tracking & Analytics', desc: 'Implementing Conversion API tracking for Snapchat, TikTok, and Meta ads.' }
    ],
    scopeAr: [
      { title: 'تصميم وبرمجة واجهة مخصصة لزد', desc: 'قوالب برمجية فريدة تعكس فخامة العلامة التجارية وتوفر تصفحاً فائق السلاسة.' },
      { title: 'مزامنة مخزون الفروع ونقاط البيع', desc: 'ربط فروع المحلات الفعلية بالمخزن المركزي والمتجر الإلكتروني لمنع بيع النافد.' },
      { title: 'أتمتة المدفوعات والشحن', desc: 'تفعيل زد باي وطباعة بوالص الشحن آلياً عبر زد شب بمختلف خيارات التوصيل.' },
      { title: 'الربط التحليلي وتتبع الإعلانات', desc: 'إعداد بيكسلات الإعلانات المتقدمة وربط الـ CAPI لتغذية خوارزميات الحملات.' }
    ],
    deliverablesEn: ['Bespoke Zid Store Theme', 'Connected Zid Pay & Zid Ship Gateways', 'Multi-Branch Inventory Sync Setup', 'Pixel Tracking & CAPI Report', 'Operations Staff Guide'],
    deliverablesAr: ['قالب متجر زد مخصص وحصري', 'بوابات زد باي وزد شب مفعلة بالكامل', 'إعداد نظام مزامنة مخزون الفروع', 'تقرير ربط البيكسلات وتتبع الحملات', 'دليل تدريب موظفي إدارة الطلبات والمخازن'],
    workflowEn: [
      { step: '01', title: 'Retail Architecture Discovery', desc: 'Analyzing physical branches, warehouses, and online product catalog.' },
      { step: '02', title: 'Custom Theme Engineering', desc: 'Coding responsive layouts, localized Arabic fonts, and conversion elements.' },
      { step: '03', title: 'Logistics & Payments Integration', desc: 'Configuring Zid Pay, couriers, and ERP inventory synchronization.' },
      { step: '04', title: 'Live Testing & Launch', desc: 'Running end-to-end branch-to-online transaction tests and launch.' }
    ],
    workflowAr: [
      { step: '01', title: 'تحليل منظومة الفروع والمنتجات', desc: 'فحص مواقع الفروع والمستودعات وهيكلة الكتالوج الإلكتروني.' },
      { step: '02', title: 'برمجة القالب وتصميم الواجهة', desc: 'كتابة كود القالب المخصص واختيار الخطوط العربية المتناسقة.' },
      { step: '03', title: 'ربط بوابات زد وشبكات الشحن', desc: 'تفعيل زد باي وزد شب واختبار تكامل البيانات مع برنامج المخازن.' },
      { step: '04', title: 'التجربة الحية والتدشين', desc: 'إجراء طلب تجريبي عبر الفروع والتحقق من خصم المخزون والإطلاق.' }
    ],
    benefitsEn: [
      { title: 'Unified Omnichannel Retail', desc: 'Bridge your retail branches and online store in one real-time synchronized system.' },
      { title: 'Streamlined Saudi Logistics', desc: 'Zid Ship connects you instantly to over 20+ domestic and regional courier services.' },
      { title: 'High-Converting Aesthetic', desc: 'A custom, clean design builds trust with discerning Saudi shoppers.' }
    ],
    benefitsAr: [
      { title: 'تجارة تجزئة موحدة الفروع', desc: 'إدارة مبيعات المحلات الفعلية والمتجر الإلكتروني في شاشة واحدة لحظياً.' },
      { title: 'شحن محلي سلس وموثوق', desc: 'يوفر زد شب ربطاً فورياً بأكثر من 20 شركة شحن وتوصيل سريع داخل المملكة.' },
      { title: 'واجهة فاخرة ترفع المبيعات', desc: 'تصميم متقن يحفز المتسوق على الشراء ويكسب ثقته من اللحظة الأولى.' }
    ],
    faqsEn: [
      { q: 'What is the main difference between Salla and Zid?', a: 'Salla excels in fast D2C e-commerce with rich direct-consumer marketing tools, while Zid is specially tailored for retail merchants needing tight omnichannel integration between physical store branches, POS, and online commerce.' }
    ],
    faqsAr: [
      { q: 'ما الفرق الرئيسي بين منصتي سلة وزد؟', a: 'تتميز سلة بالمرونة العالية وسرعة البيع المباشر للأفراد (D2C)، بينما تتفوق منصة زد في تمكين تجار التجزئة الذين يمتلكون فروعاً ومحلات فعلية ويريدون ربط نقاط البيع (POS) والمخازن مع المتجر.' }
    ],
    relatedServices: ['salla-store-development', 'pos-development', 'ecommerce-development', 'erp-system-development'],
    relatedArticles: ['what-is-zid', 'zid-store-design', 'zid-store-setup-customization', 'what-is-salla']
  },

  // --- Website Types ---
  {
    slug: 'corporate-websites',
    categoryId: 'web-development',
    badgeEn: 'Enterprise · Corporate Portals',
    badgeAr: 'المؤسسات · بوابات الشركات',
    titleEn: 'Corporate Website Development',
    titleAr: 'تطوير مواقع الشركات والمؤسسات الكبرى',
    headlineEn: 'Bespoke Corporate Portals for Holding Groups, Contracting Firms, and Enterprises',
    headlineAr: 'تصميم وبرمجة بوابات رقمية تليق بالشركات القابضة وقطاعات المقاولات والاستثمار',
    overviewEn: 'Prestige corporate web platforms designed with dark luxury aesthetics, investor relations modules, company portfolios, governance disclosures, and bilingual capabilities.',
    overviewAr: 'بوابات إلكترونية فاخرة ومصممة خصيصاً للشركات الاستثمارية والمقاولات والجهات الكبرى: أقسام علاقات المستثمرين، الحوكمة، سابقة الأعمال، ودعم كامل للغتين.',
    problemsEn: ['Outdated corporate image failing to impress high-value partners', 'Non-compliance with corporate governance disclosure guidelines', 'Slow loading and poor mobile performance'],
    problemsAr: ['مظهر قديم لا يليق بحجم ومكانة الشركة أمام العملاء والشركاء', 'غياب الشفافية وصعوبة استعراض تقارير الحوكمة والمستثمرين', 'بطء التصفح وسوء العرض على شاشات الجوال'],
    targetEn: ['Holding & investment groups', 'General contracting & engineering firms', 'Energy & industrial corporations', 'Financial services & wealth management'],
    targetAr: ['المجموعات القابضة والشركات الاستثمارية', 'شركات المقاولات الكبرى والمكاتب الهندسية', 'شركات الطاقة والصناعة', 'شركات إدارة الثروات والخدمات المالية'],
    scopeEn: [
      { title: 'Executive UX/UI Design', desc: 'Prestigious corporate visual identity utilizing luxury emerald, gold, and dark themes.' },
      { title: 'Investor Relations & Governance', desc: 'Interactive annual reports, board of directors profiles, and financial disclosures.' },
      { title: 'Project Portfolio Showcase', desc: 'Categorized case studies featuring interactive image comparison and technical specifications.' },
      { title: 'Bilingual Localization', desc: 'Flawless Arabic (Cairo) and English (Inter) typography with dedicated RTL layout mirroring.' }
    ],
    scopeAr: [
      { title: 'تصميم تجربة مستخدم تنفيذية فاخرة', desc: 'هوية بصرية تعكس الرقي والهيبة باستخدام تدرجات الأخضر الملكي والذهبي والأسود.' },
      { title: 'قسم علاقات المستثمرين والحوكمة', desc: 'عرض التقارير المالية السنوية، أعضاء مجلس الإدارة، ولوائح الامتثال المؤسسي.' },
      { title: 'معرض سابقة الأعمال والمشاريع', desc: 'عرض تفاعلي للمشاريع المنجزة مع المواصفات التقنية والصور عالية الدقة.' },
      { title: 'تعريب احترافي ثنائي اللغة', desc: 'تناسق طباعي بين خطي Cairo وInter مع ضبط دقيق لاتجاهات القراءة RTL وLTR.' }
    ],
    deliverablesEn: ['Enterprise Corporate Web Portal', 'Investor Relations Document Library', 'Project Portfolio Engine', 'Multilingual Arabic/English Setup', 'Security & Backup Infrastructure'],
    deliverablesAr: ['بوابة إلكترونية مؤسسية متكاملة', 'مكتبة وثائق وتقارير علاقات المستثمرين', 'نظام إدارة وعرض سابقة المشاريع', 'بنية كاملة ثنائية اللغة', 'منظومة الأمان والنسخ الاحتياطي'],
    workflowEn: [
      { step: '01', title: 'Corporate Identity Alignment', desc: 'Reviewing brand manuals, stakeholder objectives, and governance mandates.' },
      { step: '02', title: 'Architectural Wireframing', desc: 'Structuring corporate disclosures, service lines, and executive biographies.' },
      { step: '03', title: 'High-Performance Engineering', desc: 'Handcrafting semantic templates and performance optimization.' },
      { step: '04', title: 'Stakeholder Review & Launch', desc: 'Executive sign-off, DNS deployment, and high-availability launch.' }
    ],
    workflowAr: [
      { step: '01', title: 'دراسة الهوية وأهداف الإدارة', desc: 'مراجعة دليل الهوية البصرية وأهداف مجلس الإدارة ومتطلبات الحوكمة.' },
      { step: '02', title: 'رسم الهيكل المؤسسي للموقع', desc: 'تنظيم أقسام الإفصاح، خطوط الأعمال، والمشاريع الاستراتيجية.' },
      { step: '03', title: 'البرمجة وهندسة الأداء الفائق', desc: 'برمجة القوالب بأكواد نظيفة وسريعة وضبط أمان السيرفر.' },
      { step: '04', title: 'الاعتماد التنفيذي والإطلاق', desc: 'مراجعة الإدارة العليا والتدشين الرسمي على خوادم سحابية آمنة.' }
    ],
    benefitsEn: [
      { title: 'Prestige Brand Perception', desc: 'Commands immediate respect during high-stakes corporate partnerships and tenders.' },
      { title: 'Regulatory Compliance', desc: 'Meets market disclosure and corporate governance accessibility requirements.' },
      { title: 'Sub-Second Global Access', desc: 'Delivers fast loading for board members, clients, and institutional investors.' }
    ],
    benefitsAr: [
      { title: 'هيبة وثقة فورية للبراند', desc: 'يعزز مكانة الشركة في المناقصات الكبرى وأمام الشركاء والجهات الحكومية.' },
      { title: 'الامتثال لمعايير الحوكمة', desc: 'يلبي متطلبات الإفصاح المالي والشفافية المعتمدة في أسواق المال.' },
      { title: 'سرعة تصفح لحظية عالمياً', desc: 'تجربة تصفح سريعة وآمنة لأعضاء مجلس الإدارة والمستثمرين حول العالم.' }
    ],
    faqsEn: [
      { q: 'How long does developing a high-end corporate portal take?', a: 'Typically 4 to 8 weeks depending on the volume of content, investor relations documentation, and multilingual approval cycles.' }
    ],
    faqsAr: [
      { q: 'كم يستغرق تطوير موقع مؤسسي متكامل للشركات الكبرى؟', a: 'يستغرق عادة من 4 إلى 8 أسابيع حسب حجم الأقسام وتجهيز وثائق علاقات المستثمرين ومراجعات الإدارة العليا.' }
    ],
    relatedServices: ['business-websites', 'wordpress-development', 'website-security', 'technical-seo'],
    relatedArticles: ['what-is-wordpress', 'wordpress-website-development']
  },

  {
    slug: 'business-websites',
    categoryId: 'web-development',
    badgeEn: 'B2B · Commercial Growth',
    badgeAr: 'الأعمال · النمو التجاري B2B',
    titleEn: 'Business Website Development',
    titleAr: 'تطوير مواقع الأنشطة التجارية والشركات',
    headlineEn: 'High-Impact Websites Engineered for Lead Generation and B2B Credibility',
    headlineAr: 'تصميم مواقع تجارية تهدف لاكتساب العملاء المحتملين وتعزيز المبيعات',
    overviewEn: 'Targeted websites for commercial enterprises, service providers, and B2B suppliers designed to turn casual visitors into verified business inquiries.',
    overviewAr: 'بناء مواقع للأعمال التجارية ومزودي الخدمات والشركات المتوسطة مصممة لتحويل الزوار إلى عملاء فعليين وزيادة طلبات عروض الأسعار.',
    problemsEn: ['Websites that look okay but fail to generate inbound leads', 'Unclear service descriptions and lack of calls to action', 'Poor mobile user journey'],
    problemsAr: ['موقع جميل ظاهرياً ولكنه لا يجلب أي اتصالات أو طلبات أسعار', 'شروحات غامضة للخدمات وغياب أزرار التواصل المباشرة', 'صعوبة تصفح خدمات الشركة عبر الجوال'],
    targetEn: ['Trading & distribution firms', 'B2B equipment suppliers', 'Facility management companies', 'Logistics & freight forwarders'],
    targetAr: ['شركات التجارة والتوريدات', 'موردو المعدات وخطوط الإنتاج', 'شركات التشغيل والصيانة وإدارة المرافق', 'شركات الشحن والخدمات اللوجستية'],
    scopeEn: [
      { title: 'Conversion-Focused Architecture', desc: 'Prominent RFP inquiry triggers, WhatsApp instant routing, and interactive quotation forms.' },
      { title: 'Service Hierarchy Mapping', desc: 'Detailed individual service pages optimized for search engines and commercial buyers.' },
      { title: 'Trust Proof & Client Logos', desc: 'Showcasing verified client testimonials, accreditation certificates, and completed projects.' },
      { title: 'Lead Capture Integration', desc: 'Routing inquiries instantly into your corporate CRM or sales email inboxes.' }
    ],
    scopeAr: [
      { title: 'بنية تركز على التحويل والمبيعات', desc: 'أزرار واضحة لطلب العروض، ربط مباشر مع واتساب، ونماذج طلب تسعير مفصلة.' },
      { title: 'هيكلة منظمة لصفحات الخدمات', desc: 'صفحة مستقلة لكل خدمة لتحسين الظهور في محركات البحث وإقناع العميل التجاري.' },
      { title: 'عناصر تعزيز الثقة والاعتمادات', desc: 'عرض شعارات العملاء السابقين، شهادات الجودة، وسابقة المشاريع المنجزة.' },
      { title: 'ربط بيانات العملاء بالـ CRM', desc: 'توجيه طلبات الاستفسار فورياً إلى بريد المبيعات أو نظام إدارة علاقات العملاء.' }
    ],
    deliverablesEn: ['Lead-Generating Commercial Website', 'Custom Quote Request Form Engine', 'WhatsApp Instant Contact Routing', 'On-Page SEO Optimization', 'Lead Notification System'],
    deliverablesAr: ['موقع أعمال تجاري مصمم لزيادة المبيعات', 'نموذج طلب عروض أسعار تفاعلي', 'زر اتصال ودردشة فورية عبر واتساب', 'تهيئة السيو الداخلي لكافة الخدمات', 'نظام إشعارات فوري بالطلبات الواردة'],
    workflowEn: [
      { step: '01', title: 'Sales Funnel Definition', desc: 'Identifying primary buyer triggers and target inquiries.' },
      { step: '02', title: 'Wireframes & Lead Traps', desc: 'Designing intuitive pathways from services to inquiry forms.' },
      { step: '03', title: 'Development & CRM Hookup', desc: 'Coding responsive pages and integrating notification hooks.' },
      { step: '04', title: 'Launch & Conversion Testing', desc: 'Testing lead delivery, analytics triggers, and site launch.' }
    ],
    workflowAr: [
      { step: '01', title: 'تحديد مسار المبيعات والعملاء', desc: 'معرفة الدوافع الرئيسية للمشتري وتحديد أنواع الطلبات المستهدفة.' },
      { step: '02', title: 'تصميم مسارات التحويل', desc: 'تسهيل انتقال الزائر من قراءة الخدمة إلى ملء نموذج التواصل.' },
      { step: '03', title: 'البرمجة والربط بنظام الإشعارات', desc: 'بناء الصفحات وربط نماذج الاتصال ببريد المبيعات والواتساب.' },
      { step: '04', title: 'فحص استلام الطلبات والإطلاق', desc: 'اختبار وصول رسائل العملاء وتفعيل أدوات التحليل والتدشين.' }
    ],
    benefitsEn: [
      { title: 'Predictable Inbound Leads', desc: 'Transforms passive traffic into qualified business proposals and calls.' },
      { title: 'Clear Market Positioning', desc: 'Separates your company from amateur competitors with authoritative copy.' },
      { title: 'Instant Mobile Engagement', desc: 'Enables procurement officers to reach you via WhatsApp with a single tap.' }
    ],
    benefitsAr: [
      { title: 'تدفق مستمر للعملاء المحتملين', desc: 'تحويل زوار الموقع إلى اتصالات وطلبات عروض أسعار جادة.' },
      { title: 'مكانة سوقية مرموقة', desc: 'إبراز احترافية شركتك وتميزها عن المنافسين بمحتوى قوي وموثوق.' },
      { title: 'تواصل فوري من الجوال', desc: 'إتاحة التواصل الفوري لمسؤولي المشتريات عبر نقرة واحدة على واتساب.' }
    ],
    faqsEn: [
      { q: 'Will the website help my company appear on Google for our services?', a: 'Yes. Every service gets its own search-optimized page with structured data, target keywords, and fast load speeds to maximize Google ranking.' }
    ],
    faqsAr: [
      { q: 'هل سيساعد الموقع شركتنا في تصدر نتائج بحث جوجل؟', a: 'نعم، نخصص صفحة مستقلة لكل خدمة تجارية مع ضبط السيو التقني والكلمات المفتاحية لجذب العملاء الباحثين عن خدماتك.' }
    ],
    relatedServices: ['corporate-websites', 'landing-pages-development', 'technical-seo', 'crm-development'],
    relatedArticles: ['what-is-wordpress', 'wordpress-speed-optimization']
  },

  {
    slug: 'ecommerce-development',
    categoryId: 'web-development',
    badgeEn: 'E-Commerce · Full-Stack Stores',
    badgeAr: 'التجارة الإلكترونية · متاجر متكاملة',
    titleEn: 'E-Commerce Website Development',
    titleAr: 'تطوير متاجر التجارة الإلكترونية المتكاملة',
    headlineEn: 'Engineering Custom, High-Converting Online Stores for Retailers & Wholesalers',
    headlineAr: 'تصميم وبرمجة متاجر إلكترونية متطورة للمصانع والشركات وتجار التجزئة',
    overviewEn: 'Full-stack e-commerce platforms engineered for conversion: multi-currency checkouts, automated tax and shipping calculations, abandoned cart recovery, and deep inventory integration.',
    overviewAr: 'بناء منصات تجارة إلكترونية متكاملة تضمن تجربة شراء سريعة: مدفوعات إلكترونية آمنة، حساب آلي للشحن والضرائب، استرداد السلات المتروكة، ومزامنة المخزون.',
    problemsEn: ['High cart abandonment at checkout', 'Slow catalog loading on mobile networks', 'Payment gateway failures and high transaction drop-offs'],
    problemsAr: ['تخلي العملاء عن سلة الشراء قبل الدفع', 'بطء تصفح المنتجات على شبكات الجوال', 'فشل عمليات الدفع الإلكتروني وتراجع المبيعات'],
    targetEn: ['Retailers expanding online', 'Wholesale B2B distributors', 'Consumer electronics & fashion brands'],
    targetAr: ['شركات التجزئة المتوسعة رقمياً', 'موزعو الجملة B2B', 'متاجر الأجهزة والأزياء والمستلزمات المتنوعة'],
    scopeEn: [
      { title: 'Custom Catalog & Product Filtering', desc: 'Sub-second faceted search and filtering by price, brand, rating, and specifications.' },
      { title: 'Payment Gateways Integration', desc: 'Native connections with Mada, Visa, Mastercard, Apple Pay, Tabby, and Tamara.' },
      { title: 'Cart & Checkout Optimization', desc: 'Frictionless one-page checkout with guest purchasing and instant order notifications.' },
      { title: 'Order & Inventory Automation', desc: 'Automated invoice generation, stock alerts, and shipping label printing.' }
    ],
    scopeAr: [
      { title: 'كتالوج متقدم وفلاتر تصفية سريعة', desc: 'تصفية فورية للمنتجات حسب السعر، الماركة، والخصائص دون إعادة تحميل الصفحة.' },
      { title: 'ربط بوابات الدفع الإلكتروني', desc: 'ربط مباشر مع مدى، فيزا، أبل باي، وخيارات الدفع الآجل (تابي وتمارا).' },
      { title: 'تحسين صفحة الدفع (One-Page Checkout)', desc: 'شراء سريع كزائر بخطوات معدودة وإشعارات فورية عبر الرسائل والبريد.' },
      { title: 'أتمتة الفواتير والمخزون', desc: 'إصدار الفواتير الضريبية آلياً، تنبيهات انخفاض الكميات، وطباعة بوالص الشحن.' }
    ],
    deliverablesEn: ['Production E-Commerce Platform', 'Payment & Shipping Integration', 'Abandoned Cart Automation Engine', 'Sales Analytics Dashboard', 'Store Operations Training'],
    deliverablesAr: ['متجر إلكتروني متكامل للإنتاج', 'بوابات الدفع والشحن المعتمدة', 'نظام استرداد السلات المتروكة آلياً', 'لوحة تحليلات المبيعات والأرباح', 'تدريب عملي لفريق إدارة المتجر'],
    workflowEn: [
      { step: '01', title: 'Catalog & Platform Architecture', desc: 'Selecting WooCommerce, Shopify, or Magento based on volume.' },
      { step: '02', title: 'Theme Development & Checkout', desc: 'Building mobile-first storefront and frictionless checkout.' },
      { step: '03', title: 'Payment & Logistics Integration', desc: 'Connecting Mada, Apple Pay, couriers, and tax systems.' },
      { step: '04', title: 'Launch & Growth Optimization', desc: 'End-to-end purchasing test and traffic deployment.' }
    ],
    workflowAr: [
      { step: '01', title: 'تحديد المنصة وهندسة الكتالوج', desc: 'اختيار ووكومرس أو شوبيفاي أو ماجنتو وفق حجم المنتجات.' },
      { step: '02', title: 'تصميم الواجهة وصفحة الدفع', desc: 'بناء متجر متجاوب بالكامل وتسهيل مسار الشراء للعملاء.' },
      { step: '03', title: 'ربط الدفع والشحن والضرائب', desc: 'تفعيل مدى وأبل باي وربط شركات الشحن وأنظمة الفوترة.' },
      { step: '04', title: 'التجربة الحية والتدشين', desc: 'إجراء طلبات حقيقية والتأكد من وصول الأموال وتدشين المتجر.' }
    ],
    benefitsEn: [
      { title: 'Maximized Conversion Rate', desc: 'Streamlined checkout turns more visitors into paying customers.' },
      { title: 'Complete Regional Payment Support', desc: 'Accept Mada, Apple Pay, and Buy Now Pay Later options effortlessly.' },
      { title: 'Automated Operations', desc: 'Reduces manual paperwork with automated invoices, stock syncing, and courier bookings.' }
    ],
    benefitsAr: [
      { title: 'مضاعفة نسبة المبيعات', desc: 'صفحة دفع سلسة ترفع نسبة إتمام الطلبات وتقلل التردد.' },
      { title: 'دعم كامل لطرق الدفع المفضلة', desc: 'استقبال مدفوعات مدى وأبل باي والتقسيط بكل سهولة وأمان.' },
      { title: 'أتمتة العمليات وتقليل الجهد', desc: 'إصدار آلي للفواتير وحجز الشحنات دون الحاجة لتدخل يدوي متكرر.' }
    ],
    faqsEn: [
      { q: 'Which e-commerce platform do you recommend for my business?', a: 'For maximum ownership and no transaction cuts, WooCommerce is ideal. For pure hands-off SaaS convenience, Shopify. For massive multi-warehouse enterprise retail, Magento or custom software.' }
    ],
    faqsAr: [
      { q: 'ما هي المنصة الأنسب لمتجري الإلكتروني؟', a: 'للملكية الكاملة وعدم وجود نسب مبيعات نوصي بـ WooCommerce. للسهولة السحابية التامة نوصي بـ Shopify أو سلة. للمشاريع الكبرى وتعدد المستودعات نوصي بـ Magento.' }
    ],
    relatedServices: ['wordpress-development', 'shopify-development', 'salla-store-development', 'zid-store-development'],
    relatedArticles: ['shopify-vs-woocommerce', 'what-is-shopify', 'wordpress-speed-optimization']
  },

  {
    slug: 'news-websites',
    categoryId: 'web-development',
    badgeEn: 'Media · High-Concurrency Publishing',
    badgeAr: 'الإعلام · منصات النشر الصحفي الكبرى',
    titleEn: 'News Website Development',
    titleAr: 'تطوير المواقع والمنصات الإخبارية',
    headlineEn: 'Ultra-Fast News Portals Built to Withstand Breaking-News Traffic Surges',
    headlineAr: 'برمجة صحف وبوابات إخبارية سريعة جداً تتحمل ملايين الزيارات اللحظية',
    overviewEn: 'High-speed digital newsrooms: AMP/instant article support, editorial workflow approval systems, breaking news tickers, automated social distribution, and dynamic ad slot optimization.',
    overviewAr: 'بناء مواقع وصحف إلكترونية متطورة: شريط عاجل تفاعلي، مسارات اعتماد تحريري للمحررين، تحميل فوري للصفحات، توزيع تلقائي على السوشيال ميديا، ومساحات إعلانية ذكية.',
    problemsEn: ['Site crashes when breaking news goes viral', 'Slow loading with heavy display advertising', 'Difficult editorial collaboration for distributed journalists'],
    problemsAr: ['انهيار خادم الموقع عند نشر أخبار عاجلة وازدحام الزوار', 'بطء تحميل المقالات بسبب كثرة البنرات الإعلانية', 'صعوبة التنسيق واعتماد الأخبار بين طاقم المحررين والمراسلين'],
    targetEn: ['Digital newspapers & journalism outlets', 'Sector-specific industry news portals', 'Regional & local community press'],
    targetAr: ['الصحف والمجلات الإلكترونية الإخبارية', 'المنصات الإخبارية الاقتصادية والتقنية والرياضية', 'بوابات الإعلام المحلي والقنوات الفضائية'],
    scopeEn: [
      { title: 'High-Concurrency Caching Architecture', desc: 'Deploying FastCGI cache, Redis, and Cloudflare Enterprise CDN to handle 100k+ concurrent readers.' },
      { title: 'Editorial Multi-User Workflow', desc: 'Reporter, editor, and proofreader role segregation with scheduled publishing.' },
      { title: 'Breaking News Ticker & Live Coverage', desc: 'WebSocket-powered live tickers updating in real-time without page reloads.' },
      { title: 'Monetization & Ad Header Bidding', desc: 'Optimized Google Ad Manager, Prebid header bidding, and native sponsored articles.' }
    ],
    scopeAr: [
      { title: 'بنية التخزين المؤقت للزيارات المليونية', desc: 'تفعيل FastCGI Cache وشبكة Cloudflare لاستيعاب مئات الآلاف من الزوار المتزامنين.' },
      { title: 'مسار عمل تحريري متعدد الصلاحيات', desc: 'فصل صلاحيات المراسل، المحرر، ورئيس التحرير مع ميزة جدولة النشر.' },
      { title: 'شريط الأخبار العاجلة والتغطية الحية', desc: 'تحديث فوري للأخبار العاجلة والتغطيات المباشرة دون الحاجة لإعادة تحميل الصفحة.' },
      { title: 'تحسين الأرباح الإعلانية الذكية', desc: 'تهيئة مساحات Google Ad Manager والـ Header Bidding والمقالات الترويجية المنظمة.' }
    ],
    deliverablesEn: ['Turnkey High-Traffic News Portal', 'Breaking News Live System', 'Editorial Roles & Permissions Setup', 'Monetization Ad Slots Architecture', 'Google News Indexing Optimization'],
    deliverablesAr: ['بوابة إخبارية متكاملة تتحمل الضغط العالي', 'نظام شريط وتغطيات الأخبار العاجلة', 'إعداد صلاحيات وأدوار الفريق الصحفي', 'هندسة المساحات الإعلانية لزيادة الأرباح', 'تهيئة الأرشفة الفورية في Google News'],
    workflowEn: [
      { step: '01', title: 'Editorial Architecture & Layout', desc: 'Category structures, breaking news triggers, and author profiles.' },
      { step: '02', title: 'High-Load Engine Development', desc: 'Handcrafting lightweight templates and instant asset delivery.' },
      { step: '03', title: 'Ad Placements & News SEO', desc: 'Schema NewsArticle markup and Core Web Vitals optimization.' },
      { step: '04', title: 'Traffic Simulation & Launch', desc: 'Stress testing with 50,000 requests/sec before public rollout.' }
    ],
    workflowAr: [
      { step: '01', title: 'تخطيط الهيكل الصحفي والأقسام', desc: 'تنظيم تصنيفات الأخبار وشريط العاجل وصفحات الكتاب والمراسلين.' },
      { step: '02', title: 'برمجة النظام للأحمال العالية', desc: 'بناء قوالب خفيفة للغاية تضمن تقديم الخبر في أجزاء من الثانية.' },
      { step: '03', title: 'توزيع الإعلانات وسيو الأخبار', desc: 'تطبيق وسوم Schema NewsArticle ومطابقة مؤشرات الويب.' },
      { step: '04', title: 'اختبار ضغط الزيارات والتدشين', desc: 'محاكاة تدفق آلاف القراء في نفس اللحظة للتأكد من ثبات السيرفر.' }
    ],
    benefitsEn: [
      { title: 'Rock-Solid Stability', desc: 'Your news portal stays live even during massive global breaking news spikes.' },
      { title: 'Instant Google News Indexing', desc: 'Schema markup and fast RSS feeds ensure immediate discovery by search engines.' },
      { title: 'Optimized Ad Revenue', desc: 'Fast rendering ad slots maximize viewability rates and RPM earnings.' }
    ],
    benefitsAr: [
      { title: 'استقرار تام عند الأحداث العاجلة', desc: 'يبقى موقعك سريعاً وثابتاً مهما تضاعف عدد القراء في لحظة واحدة.' },
      { title: 'أرشفة فورية في أخبار جوجل', desc: 'تغذية سريعة وخلاصات RSS تضمن ظهور مقالاتك في أخبار جوجل خلال دقائق.' },
      { title: 'عائدات إعلانية أعلى', desc: 'تحميل سريع للبنرات يرفع نسبة المشاهدة (Viewability) ويضاعف أرباح الموقع.' }
    ],
    faqsEn: [
      { q: 'Can you migrate our archive of 100,000+ past news articles?', a: 'Yes. We migrate entire archives including articles, images, comments, and author profiles while maintaining old URL redirects to preserve SEO rankings.' }
    ],
    faqsAr: [
      { q: 'هل يمكن نقل أرشيفنا الإخباري الضخم (أكثر من 100 ألف خبر)؟', a: 'نعم، ننقل كافة الأخبار، الصور، بيانات الكتاب، والتعليقات مع تحويل الروابط القديمة بدقة 301 لحماية أرشفة السيو.' }
    ],
    relatedServices: ['magazine-websites', 'wordpress-development', 'speed-optimization', 'technical-seo'],
    relatedArticles: ['what-is-wordpress', 'wordpress-speed-optimization']
  },

  {
    slug: 'magazine-websites',
    categoryId: 'web-development',
    badgeEn: 'Publishing · Editorial Design',
    badgeAr: 'النشر · المجلات المتخصصة والأدلة',
    titleEn: 'Magazine Website Development',
    titleAr: 'تطوير مواقع المجلات الرقمية والمدونات المتخصصة',
    headlineEn: 'Visually Rich Editorial Layouts for Niche Publications, Lifestyle, and Culture',
    headlineAr: 'تصميم مجلات إلكترونية راقية بتنسيقات تحريرية جذابة وتجربة قراءة ممتعة',
    overviewEn: 'Digital magazine platforms designed for long-form reading: typography-first layouts, bookmarking, paywalls/memberships, multimedia essays, and issue archiving.',
    overviewAr: 'بناء منصات ومجلات ثقافية ومتخصصة تركز على تجربة القراءة الفاخرة: تنسيق طباعي مريح للعين، حفظ المقالات، بوابات اشتراكات الأعضاء، وأرشيف أعداد المجلة.',
    problemsEn: ['Cluttered templates that ruin reading immersion', 'Difficulty managing print-to-digital issue archives', 'Monetization struggles with basic ad networks'],
    problemsAr: ['قوالب مزدحمة ومشتتة ترهق القارئ', 'صعوبة أرشفة وتصفح أعداد المجلة الدورية رقمياً', 'ضعف العائدات وصعوبة تفعيل اشتراكات المحتوى الحصري'],
    targetEn: ['Lifestyle & culture publications', 'Industry journals & trade magazines', 'Literary reviews & academic digests'],
    targetAr: ['المجلات المتخصصة في أسلوب الحياة والأزياء', 'المجلات الاقتصادية والتجارية المتخصصة', 'المجلات الثقافية والدوريات الفكرية'],
    scopeEn: [
      { title: 'Long-Form Reading UX', desc: 'Distraction-free typography, estimated reading times, and font size toggles.' },
      { title: 'Issue Archiving & PDF Flipbooks', desc: 'Browsing past monthly issues with interactive flipbook previews.' },
      { title: 'Premium Membership & Paywall', desc: 'Restricting exclusive investigative articles to paid subscribers (Stripe/Mada).' },
      { title: 'Multimedia Storytelling', desc: 'Integrated podcasts, video embeds, and photo essay galleries.' }
    ],
    scopeAr: [
      { title: 'تجربة قراءة استثنائية للمقالات المطولة', desc: 'خطوط طباعية مريحة، تقدير وقت القراءة، وإمكانية تعديل حجم الخط.' },
      { title: 'أرشيف الأعداد وتصفح المجلة تفاعلياً', desc: 'تصفح أعداد المجلة الشهرية بنظام تقليب الصفحات التفاعلي (Flipbook).' },
      { title: 'بوابة الاشتراكات والمحتوى الحصري', desc: 'إتاحة مقالات خاصة للمشتركين فقط مع بوابات دفع بالاشتراك الدوري.' },
      { title: 'القصص متعددة الوسائط (Multimedia)', desc: 'تضمين حلقات البودكاست، الفيديوهات الوثائقية، ومعارض الصور الاحترافية.' }
    ],
    deliverablesEn: ['Custom Digital Magazine Platform', 'Issue Archiving System', 'Subscription & Membership Engine', 'Audio/Podcast Integration', 'Reading Experience Optimization'],
    deliverablesAr: ['منصة مجلة رقمية متكاملة', 'نظام أرشيف الأعداد التفاعلي', 'نظام الاشتراكات والعضويات المدفوعة', 'مشغل بودكاست متكامل للمقالات الصوتية', 'تحسين كامل لتجربة القراءة والتصفح'],
    workflowEn: [
      { step: '01', title: 'Editorial Identity & Layout', desc: 'Typography selection, column grids, and issue hierarchies.' },
      { step: '02', title: 'Platform Development', desc: 'Building responsive long-form templates and paywall logic.' },
      { step: '03', title: 'Content Migration & Multimedia', desc: 'Importing past issues and configuring media streaming.' },
      { step: '04', title: 'Launch & Member Testing', desc: 'Testing subscription checkout and digital launch.' }
    ],
    workflowAr: [
      { step: '01', title: 'تحديد الهوية التحريرية والتنسيق', desc: 'اختيار الخطوط، قياسات الأعمدة، وهيكلية الأعداد الشهرية.' },
      { step: '02', title: 'برمجة المنصة ونظام العضويات', desc: 'بناء قوالب المقالات المطولة وتفعيل منطق حجب المحتوى الحصري.' },
      { step: '03', title: 'نقل الأعداد السابقة والوسائط', desc: 'إدخال الأعداد القديمة وربط ملفات البودكاست والفيديو.' },
      { step: '04', title: 'اختبار الاشتراكات والإطلاق', desc: 'فحص تجربة شراء الاشتراك الشهري وتدشين المجلة رسمياً.' }
    ],
    benefitsEn: [
      { title: 'Premium Reader Engagement', desc: 'Elegant typography increases time-on-page and brand affinity.' },
      { title: 'Diversified Revenue Streams', desc: 'Generate income from subscriptions, sponsored issues, and native display.' },
      { title: 'Preserved Editorial Heritage', desc: 'Organizes decades of published issues in an accessible search archive.' }
    ],
    benefitsAr: [
      { title: 'اندماج القارئ وزيادة بقائه', desc: 'تنسيق أنيق يشجع على قراءة المقالات بالكامل ويعزز ولاء المتابعين.' },
      { title: 'تنويع مصادر الدخل', desc: 'الربح من الاشتراكات المدفوعة، رعاية الأعداد، والمقالات الترويجية.' },
      { title: 'حفظ التراث الصحفي للمجلة', desc: 'حفظ وتوثيق سنوات من الأعداد في أرشيف رقمي ذكي وسهل البحث.' }
    ],
    faqsEn: [
      { q: 'Can readers listen to articles via audio?', a: 'Yes. We integrate native audio players and automated text-to-speech features for commuters.' }
    ],
    faqsAr: [
      { q: 'هل يمكن توفير المقالات كملفات صوتية للقراء؟', a: 'نعم، ندمج مشغل صوتي مخصص لكل مقال يتيح الاستماع للمحتوى بسهولة أثناء القيادة أو التنقل.' }
    ],
    relatedServices: ['news-websites', 'wordpress-development', 'responsive-web-design'],
    relatedArticles: ['what-is-wordpress', 'how-to-choose-a-wordpress-theme']
  },

  {
    slug: 'real-estate-websites',
    categoryId: 'web-development',
    badgeEn: 'Real Estate · Property Portals',
    badgeAr: 'العقارات · بوابات التسويق العقاري',
    titleEn: 'Real Estate Website Development',
    titleAr: 'تطوير مواقع ومنصات العقارات',
    headlineEn: 'Interactive Property Portals with Advanced GIS Maps and Broker Lead Management',
    headlineAr: 'بناء منصات عقارية ذكية بخريطة تفاعلية وفلاتر بحث دقيقة ونظام ربط الوسطاء',
    overviewEn: 'High-performing real estate marketplace websites: interactive map search, virtual tours, mortgage calculators, multi-agent CRM routing, and automated WhatsApp property inquiries.',
    overviewAr: 'بوابات عقارية متطورة للمطورين العقاريين والوسطاء: بحث بالخريطة التفاعلية، حاسبة التمويل العقاري، جولات افتراضية 360، وتوجيه استفسارات العملاء آلياً للوسطاء.',
    problemsEn: ['Slow property map rendering driving buyers away', 'Lack of instant broker communication leading to lost sales', 'Difficult MLS/CRM property synchronization'],
    problemsAr: ['بطء تصفح الخرائط وخروج المشتري قبل رؤية العقار', 'تأخر الرد على العميل وضياع الصفقات العقارية', 'صعوبة تحديث حالة العقارات (متاح / مباع) يدوياً'],
    targetEn: ['Real estate development companies', 'Brokerage firms & real estate agencies', 'Property management & rental platforms'],
    targetAr: ['شركات التطوير والاستثمار العقاري', 'المكاتب والشركات العقارية المعتمدة (فال)', 'منصات تأجير وإدارة الأملاك'],
    scopeEn: [
      { title: 'Interactive GIS Map Search', desc: 'Sub-second map clustering, boundary polygon filters, and location-based sorting.' },
      { title: 'Property Detail Showcases', desc: 'Floor plans, virtual 360 tour embeds, downloadable brochures, and mortgage calculators.' },
      { title: 'Lead Routing & Agent Assignment', desc: 'Direct WhatsApp inquiry routing to assigned property brokers with CRM lead capture.' },
      { title: 'Compliance with REGA (Saudi Standards)', desc: 'Displaying licensed advertiser numbers (Fal License) and required regulatory disclosures.' }
    ],
    scopeAr: [
      { title: 'بحث متقدم بالخريطة التفاعلية (GIS)', desc: 'تحديد موقع العقار، استعراض المخططات، والبحث بالمخطط والحي والشارع.' },
      { title: 'صفحات تفصيلية غنية للعقار', desc: 'مخططات البناء، جولات افتراضية 360، بروشور PDF قابل للتحميل، وحاسبة أقساط.' },
      { title: 'توجيه طلبات الشراء للوسطاء', desc: 'زر اتصال وواتساب مباشر للمسوق المسؤول عن العقار مع حفظ بيانات العميل.' },
      { title: 'الامتثال لمتطلبات الهيئة العامة للعقار (فال)', desc: 'إبراز رقم ترخيص الإعلان العقاري ورخصة فال والبيانات النظامية المطلوبة.' }
    ],
    deliverablesEn: ['Custom Real Estate Portal', 'Interactive Map Search Engine', 'Mortgage Loan Calculator', 'Broker Lead Distribution System', 'REGA Compliance Architecture'],
    deliverablesAr: ['منصة عقارية متكاملة ومخصصة', 'محرك بحث متطور بالخرائط التفاعلية', 'حاسبة التمويل والأقساط العقارية', 'نظام توزيع طلبات المعاينة على المسوقين', 'هيكلية مطابقة لاشتراطات هيئة العقار'],
    workflowEn: [
      { step: '01', title: 'Property Taxonomy & Fields', desc: 'Structuring residential, commercial, sale, and lease attributes.' },
      { step: '02', title: 'Map & Listing Engineering', desc: 'Integrating Mapbox/Google Maps and building fast faceted filters.' },
      { step: '03', title: 'Agent Routing & Broker CRM', desc: 'Connecting lead notifications and automated WhatsApp links.' },
      { step: '04', title: 'Testing & Launch', desc: 'Auditing mobile responsiveness, filter speeds, and site launch.' }
    ],
    workflowAr: [
      { step: '01', title: 'هيكلة خصائص العقارات والوحدات', desc: 'تنظيم تصنيفات البيع والإيجار والسكني والتجاري والمساحات.' },
      { step: '02', title: 'برمجة الخرائط وقوائم العرض', desc: 'ربط خرائط جوجل المتقدمة وبناء فلاتر سريعة تبحث في ثوانٍ.' },
      { step: '03', title: 'ربط أرقام المسوقين ونظام الـ CRM', desc: 'برمجة أزرار التواصل المباشر وإشعارات الحجز والمعاينة.' },
      { step: '04', title: 'فحص التصفح والإطلاق الرسمي', desc: 'اختبار دقة الخريطة على الجوال وسرعة البحث وتدشين المنصة.' }
    ],
    benefitsEn: [
      { title: 'Faster Deal Closures', desc: 'Direct WhatsApp connection puts motivated buyers in touch with agents immediately.' },
      { title: 'Credible Professional Image', desc: 'High-end visuals and floor plan tools justify premium property prices.' },
      { title: 'Full Regulatory Adherence', desc: 'Displays verified license credentials preventing legal advertising penalties.' }
    ],
    benefitsAr: [
      { title: 'إغلاق صفقات عقارية أسرع', desc: 'تواصل فوري عبر واتساب يربط المشتري الجاد بالمسوق دون أي تأخير.' },
      { title: 'صورة احترافية تعزز المبيعات', desc: 'عرض فاخر يليق بالمشاريع الكبرى والفلل والعمائر الاستثمارية.' },
      { title: 'التزام قانوني كامل باللوائح', desc: 'إبراز رخص الإعلانات المعتمدة لحماية المنشأة من المخالفات النظامية.' }
    ],
    faqsEn: [
      { q: 'Can buyers search properties directly by drawing on a map?', a: 'Yes. We support custom polygon map drawing, radius searches, and neighborhood filtering.' }
    ],
    faqsAr: [
      { q: 'هل يمكن للمشتري البحث برسم منطقة محددة على الخريطة؟', a: 'نعم، نوفر ميزة البحث بتحديد نطاق جغرافي على الخريطة أو باختيار الحي المطلوب مباشرة.' }
    ],
    relatedServices: ['business-websites', 'crm-development', 'technical-seo', 'responsive-web-design'],
    relatedArticles: ['what-is-wordpress', 'wordpress-speed-optimization']
  },

  {
    slug: 'educational-websites',
    categoryId: 'web-development',
    badgeEn: 'EdTech · Learning Portals',
    badgeAr: 'التعليم · منصات التدريب والمدارس',
    titleEn: 'Educational Website Development',
    titleAr: 'تطوير مواقع ومنصات التعليم والتدريب',
    headlineEn: 'Engaging Learning Management Portals & Institutional School Websites',
    headlineAr: 'بناء منصات تعليمية تفاعلية، مراكز تدريب، ومواقع للمدارس والجامعات',
    overviewEn: 'Comprehensive educational platforms: student registration, course catalogs, LMS integration, online payments, exam schedules, and parent communication portals.',
    overviewAr: 'بوابات متكاملة للجهات التعليمية ومراكز التدريب: تسجيل الطلاب، استعراض الدورات، حجز المقاعد والدفع الإلكتروني، جداول الاختبارات، ومنظومة تواصل أولياء الأمور.',
    problemsEn: ['Complex registration forms driving parents and students away', 'Lack of automated tuition and course fee payments', 'Disorganized course schedules and syllabus files'],
    problemsAr: ['نماذج تسجيل ورقية أو معقدة تنفر أولياء الأمور والمتدربين', 'غياب خيارات الدفع الإلكتروني المباشر للدورات والرسوم', 'تشتت المناهج وجداول الحصص وصعوبة وصول الطلاب إليها'],
    targetEn: ['Private schools & international academies', 'Accredited training centers & institutes', 'Online course creators & tutoring academies'],
    targetAr: ['المدارس الأهلية والدولية', 'مراكز التدريب والاستشارات المعتمدة', 'أكاديميات التدريب والتعليم الإلكتروني'],
    scopeEn: [
      { title: 'Course Catalog & Online Booking', desc: 'Detailed course syllabi, instructor bios, upcoming batches, and seat reservations.' },
      { title: 'Payment & Installment Integration', desc: 'Secure fee payments with Mada, Apple Pay, and educational installment gateways.' },
      { title: 'Student & Parent Portals', desc: 'Secure logins for grades, attendance, downloadable resources, and notices.' },
      { title: 'Automated Credential Generation', desc: 'Instant verified digital certificates upon course completion with QR validation.' }
    ],
    scopeAr: [
      { title: 'دليل الدورات وحجز المقاعد إلكترونياً', desc: 'استعراض المحتوى التدريبي، السير الذاتية للمدربين، وحجز المقاعد أونلاين.' },
      { title: 'بوابات دفع الرسوم والأقساط', desc: 'سداد فوري عبر مدى، أبل باي، وإمكانية تقسيط الرسوم الدراسية.' },
      { title: 'بوابة الطلاب وأولياء الأمور', desc: 'تسجيل دخول آمن لمتابعة النتائج، الحضور، وتنزيل الحقائب التدريبية.' },
      { title: 'إصدار الشهادات الإلكترونية المعتمدة', desc: 'توليد شهادات الحضور الرقمية تلقائياً برمز QR للتحقق من مصداقيتها.' }
    ],
    deliverablesEn: ['Educational Portal & Course Engine', 'Payment & Tuition Gateway Setup', 'Digital Certificate Verification System', 'Student Registration Database', 'Admin Staff Training'],
    deliverablesAr: ['بوابة تعليمية وتدريبية متكاملة', 'ربط بوابات سداد الرسوم والأقساط', 'نظام توثيق وإصدار الشهادات الإلكترونية', 'قاعدة بيانات تسجيل الطلاب والمتدربين', 'تدريب فريق الشؤون الأكاديمية والتسجيل'],
    workflowEn: [
      { step: '01', title: 'Curriculum & Program Planning', desc: 'Structuring courses, admissions forms, and student workflows.' },
      { step: '02', title: 'Portal Development & LMS Link', desc: 'Coding responsive course listings and secure enrollment forms.' },
      { step: '03', title: 'Payment & Certificate Testing', desc: 'Connecting Mada checkout and testing automated certificate PDFs.' },
      { step: '04', title: 'Deployment & Staff Training', desc: 'Securing student databases and training admissions staff.' }
    ],
    workflowAr: [
      { step: '01', title: 'تخطيط البرامج التدريبية والتسجيل', desc: 'تحديد تصنيفات الدورات والشهادات ونماذج القبول المطلوبة.' },
      { step: '02', title: 'برمجة المنصة ودليل البرامج', desc: 'بناء واجهات التصفح السريعة ونماذج التسجيل الإلكتروني السلسة.' },
      { step: '03', title: 'ربط الدفع وإصدار الشهادات', desc: 'تفعيل الدفع الإلكتروني وبرمجة قالب الشهادة الآلية برمز QR.' },
      { step: '04', title: 'التدشين وتدريب مسؤولي القبول', desc: 'تأمين قواعد البيانات وتدريب موظفي التسجيل على إدارة المتدربين.' }
    ],
    benefitsEn: [
      { title: 'Higher Course Enrollments', desc: 'Frictionless digital registration and mobile payment boost student numbers.' },
      { title: 'Instant Automated Certificates', desc: 'Eliminates hundreds of hours of manual certificate printing and distribution.' },
      { title: 'Prestigious Institutional Image', desc: 'Demonstrates modern educational excellence to prospective students and parents.' }
    ],
    benefitsAr: [
      { title: 'زيادة تسجيل المتدربين والطلاب', desc: 'إجراءات تسجيل ودفع إلكتروني سلسة ترفع معدل الاشتراك في البرامج.' },
      { title: 'توفير الوقت بإصدار الشهادات آلياً', desc: 'إصدار وتوثيق مئات الشهادات بضغطة زر واحدة دون تدخل ورقي.' },
      { title: 'صورة أكاديمية حديثة وموثوقة', desc: 'إبراز التطور التقني للمؤسسة التعليمية أمام الطلاب وأولياء الأمور.' }
    ],
    faqsEn: [
      { q: 'Can the site integrate with Zoom or Microsoft Teams for virtual classes?', a: 'Yes. We can automatically generate meeting links upon paid course enrollment and email them to students.' }
    ],
    faqsAr: [
      { q: 'هل يمكن ربط الموقع مع زووم أو تيمز للبث المباشر للمحاضرات؟', a: 'نعم، نربط النظام بـ Zoom API لتوليد روابط المحاضرات تلقائياً وإرسالها للمتدرب فور سداد الرسوم.' }
    ],
    relatedServices: ['business-websites', 'custom-software-development', 'responsive-web-design'],
    relatedArticles: ['what-is-wordpress', 'wordpress-website-development']
  },

  {
    slug: 'medical-websites',
    categoryId: 'web-development',
    badgeEn: 'Healthcare · Medical Portals',
    badgeAr: 'الرعاية الصحية · المراكز والمجمعات الطبية',
    titleEn: 'Medical Website Development',
    titleAr: 'تطوير مواقع المجمعات الطبية والعيادات',
    headlineEn: 'Patient-First Healthcare Portals with Doctor Profiles and Instant Booking',
    headlineAr: 'بناء مواقع للمستشفيات والعيادات الطبية بحجز مواعيد ذكي واستعراض الأطباء',
    overviewEn: 'Healthcare and medical websites engineered for patient trust: doctor credential directories, clinic specialty overviews, online appointment booking, and health blog education.',
    overviewAr: 'مواقع متميزة للمستشفيات والمجمعات الطبية: دليل الأطباء واستشاريي الأقسام، حجز المواعيد السلس، استعراض خدمات العيادات، ونشر المقالات التثقيفية الطبية.',
    problemsEn: ['Patients struggling to find available doctors and schedules', 'High phone reception burden answering basic pricing and hours inquiries', 'Non-compliance with Ministry of Health advertising standards'],
    problemsAr: ['صعوبة معرفة تخصصات ومواعيد تواجد الأطباء', 'ضغط الاتصالات الهاتفية على الاستقبال للاستفسارات الروتينية', 'عدم الالتزام بضوابط الترخيص الإعلاني لوزارة الصحة'],
    targetEn: ['Specialized medical clinics & polyclinics', 'Dental & cosmetic centers', 'Hospitals & diagnostic laboratories', 'Physiotherapy & rehabilitation clinics'],
    targetAr: ['المجمعات والعيادات الطبية التخصصية', 'مراكز طب الأسنان وجراحة التجميل والجلدية', 'المستشفيات والمختبرات ومراكز الأشعة', 'مراكز العلاج الطبيعي والتأهيل الطبي'],
    scopeEn: [
      { title: 'Doctor Directory & Credentialing', desc: 'Profiles highlighting medical degrees, specialties, certifications, and working hours.' },
      { title: 'Online Appointment Request Engine', desc: 'Interactive booking allowing patients to select clinic, doctor, date, and preferred time.' },
      { title: 'Clinic Specialties & Medical Services', desc: 'Detailed treatment pages explaining procedures, FAQs, and preparatory guidelines.' },
      { title: 'Ministry of Health Compliance', desc: 'Displaying medical facility licenses and required professional disclosures.' }
    ],
    scopeAr: [
      { title: 'دليل الأطباء والاستشاريين', desc: 'ملفات تفصيلية تشمل المؤهلات العلمية، سنوات الخبرة، والتخصصات الدقيقة لكل طبيب.' },
      { title: 'نظام حجز المواعيد إلكترونياً', desc: 'اختيار العيادة، الطبيب المعالج، التاريخ، والوقت المناسب مع إشعار تأكيد عبر SMS.' },
      { title: 'شرح الخدمات التخصصية والعلاجية', desc: 'صفحات مستقلة لكل قسم (أسنان، جلدية، عيون، باطنية) مع إرشادات ما قبل الزيارة.' },
      { title: 'الامتثال للوائح التراخيص الطبية', desc: 'إبراز ترخيص وزارة الصحة والاشتراطات النظامية للإعلانات والمحتوى الصحي.' }
    ],
    deliverablesEn: ['Medical Clinic Web Portal', 'Appointment Booking Engine', 'Doctor Directory & Specialty Profiles', 'Health Education Blog', 'MOH Compliance Layout'],
    deliverablesAr: ['بوابة المجمع الطبي الإلكترونية', 'نظام حجز المواعيد التفاعلي', 'دليل الأطباء وتخصصات العيادات', 'مدونة المقالات والتوعية الطبية', 'هيكلية معتمدة لضوابط وزارة الصحة'],
    workflowEn: [
      { step: '01', title: 'Clinic Workflow Discovery', desc: 'Mapping medical departments, doctors, and appointment rules.' },
      { step: '02', title: 'UX & Booking Development', desc: 'Designing patient-friendly booking flows on mobile screens.' },
      { step: '03', title: 'Doctor Profiles & Content', desc: 'Publishing verified practitioner bios and clinical service pages.' },
      { step: '04', title: 'Testing & Launch', desc: 'Testing appointment routing to clinic receptionists and site launch.' }
    ],
    workflowAr: [
      { step: '01', title: 'تحليل مسار المريض بالعيادة', desc: 'حصر التخصصات الطبية، مواعيد الأطباء، وآلية تثبيت المواعيد.' },
      { step: '02', title: 'برمجة مسار الحجز السريع', desc: 'تصميم تجربة سهلة لكبار السن والمرضى لحجز موعد في 3 خطوات.' },
      { step: '03', title: 'إدخال بيانات الأطباء والخدمات', desc: 'توثيق سير الأطباء وإعداد صفحات الخدمات الطبية بلغة مفهومة للمريض.' },
      { step: '04', title: 'اختبار استقبال الحجوزات والإطلاق', desc: 'التأكد من وصول بيانات الحجز لموظفي الاستقبال وتدشين الموقع.' }
    ],
    benefitsEn: [
      { title: 'Reduced Reception Workload', desc: 'Automated digital booking diverts hundreds of routine phone calls daily.' },
      { title: 'Instant Patient Trust', desc: 'Verified doctor credentials and clean clinical presentation build medical confidence.' },
      { title: 'Local Search Visibility', desc: 'Ranks on Google for local healthcare searches like "Best dental clinic near me".' }
    ],
    benefitsAr: [
      { title: 'تخفيف الضغط على موظفي الاستقبال', desc: 'الحجز الرقمي يقلل مئات الاتصالات الروتينية يومياً وينظم تدفق المراجعين.' },
      { title: 'ثقة المريض واطمئنانه', desc: 'عرض مؤشرات خبرة الأطباء والصور الحقيقية للعيادات يمنح المريض راحة نفسية.' },
      { title: 'تصدر نتائج البحث المحلي', desc: 'الظهور في نتائج بحث جوجل عند بحث المرضى عن أفضل عيادة متخصصة في منطقتهم.' }
    ],
    faqsEn: [
      { q: 'Can the site send automated SMS appointment reminders to patients?', a: 'Yes. We connect local SMS gateways to send automated appointment confirmations and reminder texts.' }
    ],
    faqsAr: [
      { q: 'هل يمكن إرسال رسائل تذكير بالمواعيد للمرضى عبر SMS؟', a: 'نعم، نربط بوابات الرسائل القصيرة لإرسال تأكيد الحجز فورياً وتذكير المريض قبل الموعد بـ 24 ساعة.' }
    ],
    relatedServices: ['business-websites', 'technical-seo', 'responsive-web-design'],
    relatedArticles: ['what-is-wordpress', 'wordpress-speed-optimization']
  },

  {
    slug: 'restaurant-websites',
    categoryId: 'web-development',
    badgeEn: 'Hospitality · Menus & Delivery',
    badgeAr: 'المطاعم والضيافة · قوائم الطعام والطلب',
    titleEn: 'Restaurant & Hospitality Website Development',
    titleAr: 'تطوير مواقع المطاعم والكافيهات وسلاسل الضيافة',
    headlineEn: 'Mouthwatering Digital Menus, Table Reservations, and Multi-Branch Locators',
    headlineAr: 'تصميم مواقع تفاعلية للمطاعم: منيو إلكتروني سريع، حجز طاولات، ودليل الفروع',
    overviewEn: 'Hospitality websites designed for appetite appeal: interactive QR-ready digital menus, online pickup/delivery ordering, table booking systems, and branch locator maps.',
    overviewAr: 'بناء مواقع جذابة للمطاعم والكافيهات: قائمة طعام رقمية تدعم رمز QR، حجز الطاولات والمناسبات، محدد الفروع التفاعلي، وروابط الطلب المباشر والتطبيقات.',
    problemsEn: ['Slow PDF menus that are unreadable on mobile phones', 'Heavy commission fees paid to food delivery aggregators', 'Confusion over branch locations and working hours'],
    problemsAr: ['قوائم الطعام بصيغة PDF صعبة القراءة والتحميل على الجوال', 'دفع عمولات باهظة لتطبيقات التوصيل الخارجية (تصل لـ 25%)', 'صعوبة معرفة مواقع الفروع وساعات العمل بدقة'],
    targetEn: ['Fine dining & casual restaurants', 'Specialty coffee shops & roasteries', 'Fast casual & cloud kitchen franchises', 'Catering & banquet event services'],
    targetAr: ['المطاعم الفاخرة وسلاسل المأكولات', 'الكافيهات ومحامص القهوة المختصة', 'المطابخ السحابية وسلاسل الوجبات السريعة', 'شركات الإعاشة وتموين الحفلات والمناسبات'],
    scopeEn: [
      { title: 'Mobile-First Digital QR Menu', desc: 'Fast, high-resolution food photo galleries with allergens and caloric values.' },
      { title: 'Table Reservation Engine', desc: 'Selecting date, guest count, and indoor/outdoor seating preferences.' },
      { title: 'Branch Locator & Map Directions', desc: 'Instant Google Maps navigation links for all branches across cities.' },
      { title: 'Commission-Free Direct Ordering', desc: 'WhatsApp ordering or integrated checkout saving delivery platform commissions.' }
    ],
    scopeAr: [
      { title: 'منيو إلكتروني فائق السرعة برمز QR', desc: 'استعراض صور الأطباق بجودة عالية مع توضيح السعرات الحرارية ومسببات الحساسية.' },
      { title: 'نظام حجز الطاولات والمناسبات', desc: 'تحديد وقت الوصول، عدد الأفراد، والجلسات المفضلة (داخلية أو خارجية).' },
      { title: 'دليل الفروع وخريطة التوجيه المباشر', desc: 'روابط مباشرة لخرائط جوجل لفتح مسار الوصول لأقرب فرع للعميل بضغطة واحدة.' },
      { title: 'الطلب المباشر لتوفير عمولات التطبيقات', desc: 'استقبال طلبات الاستلام من الفرع أو التوصيل عبر واتساب دون دفع أي عمولات.' }
    ],
    deliverablesEn: ['Custom Restaurant Web Platform', 'Mobile QR Digital Menu', 'Table Booking Management System', 'Multi-Branch Interactive Locator', 'Social Media & Delivery Apps Integration'],
    deliverablesAr: ['موقع إلكتروني متكامل للمطعم', 'قائمة طعام رقمية برمز QR للجوال', 'نظام إدارة حجوزات الطاولات', 'دليل فروع تفاعلي مع خرائط جوجل', 'روابط التحميل من تطبيقات التوصيل وحسابات التواصل'],
    workflowEn: [
      { step: '01', title: 'Menu & Food Photography Setup', desc: 'Organizing dishes, ingredients, dietary badges, and prices.' },
      { step: '02', title: 'Interactive Menu & UX Coding', desc: 'Developing instant category filtering (Appetizers, Mains, Drinks).' },
      { step: '03', title: 'Branch Mapping & Booking', desc: 'Configuring branch coordinates and table booking forms.' },
      { step: '04', title: 'Launch & QR Code Printing Kit', desc: 'Generating high-res vector QR codes for physical table stands.' }
    ],
    workflowAr: [
      { step: '01', title: 'هيكلة المنيو وصور الأطباق', desc: 'تنظيم الأصناف، الأسعار، صور الأطباق، ومسببات الحساسية.' },
      { step: '02', title: 'برمجة المنيو التفاعلي السريع', desc: 'بناء تبويبات المنيو (المقبلات، الأطباق الرئيسية، المشروبات، الحلى).' },
      { step: '03', title: 'ربط الفروع ونظام حجز الطاولات', desc: 'تثبيت إحداثيات الفروع وربط طلبات الحجز بالاستقبال.' },
      { step: '04', title: 'التدشين وتجهيز باركودات الطاولات', desc: 'توليد رموز QR بدقة طباعة عالية لوضعها على الطاولات وطباعتها.' }
    ],
    benefitsEn: [
      { title: 'Instant Mobile Menu Browsing', desc: 'Customers scan and browse food dishes within 1 second on any device.' },
      { title: 'Save Massive Delivery Fees', desc: 'Encourages loyal patrons to order direct, preserving your full profit margins.' },
      { title: 'Organized Table Seating', desc: 'Prevents customer walkaways by organizing weekend table bookings.' }
    ],
    benefitsAr: [
      { title: 'تصفح فوري للمنيو بالجوال', desc: 'مسح الباركود وفتح المنيو في ثانية واحدة دون الحاجة لتنزيل ملفات PDF ثقيلة.' },
      { title: 'توفير آلاف الريالات من العمولات', desc: 'تشجيع العملاء الدائمين على الطلب المباشر منك وحفظ كامل هامش ربحك.' },
      { title: 'تنظيم الحجوزات وتقليل فترات الانتظار', desc: 'إدارة أوقات الذروة في عطلة نهاية الأسبوع وتأكيد حجوزات الطاولات باحترافية.' }
    ],
    faqsEn: [
      { q: 'Can we easily update prices and out-of-stock dishes daily?', a: 'Yes. An intuitive mobile-friendly admin interface lets you change prices or mark items unavailable in seconds.' }
    ],
    faqsAr: [
      { q: 'هل يمكننا تعديل الأسعار أو إخفاء الأطباق النافذة يومياً بسهولة؟', a: 'نعم، لوحة تحكم سهلة جداً من الجوال تتيح لك تعديل أي سعر أو تعليم صنف كـ "غير متوفر اليوم" في ثوانٍ.' }
    ],
    relatedServices: ['business-websites', 'speed-optimization', 'responsive-web-design'],
    relatedArticles: ['what-is-wordpress', 'wordpress-speed-optimization']
  },

  {
    slug: 'professional-services-websites',
    categoryId: 'web-development',
    badgeEn: 'Consulting · Authority Websites',
    badgeAr: 'الخدمات المهنية · مكاتب الاستشارات',
    titleEn: 'Professional Services Website Development',
    titleAr: 'تطوير مواقع المكاتب المهنية والاستشارية',
    headlineEn: 'Authoritative Web Platforms for Law Firms, Accounting Practices, and Consultancies',
    headlineAr: 'بناء مواقع احترافية لمكاتب المحاماة، المحاسبين القانونيين، والمستشارين',
    overviewEn: 'Prestigious websites designed for high-trust professional firms: legal practice areas, case results, attorney profiles, consultation booking, and thought leadership articles.',
    overviewAr: 'بوابات رقمية مرموقة للمكاتب المهنية: مجالات الممارسة القانونية، المحاسبة والضرائب، السير الذاتية للشركاء والمحامين، حجز الاستشارات المدفوعة، والمقالات النظامية.',
    problemsEn: ['Websites that look like generic templates undermining partner credibility', 'Difficulty communicating complex advisory services clearly', 'Unqualified inquiries wasting senior consultants’ time'],
    problemsAr: ['مظهر تقليدي يقلل من ثقة كبار العملاء في كفاءة المكتب', 'صعوبة صياغة الخدمات الاستشارية المعقدة بشكل جذاب وواضح', 'استقبال استفسارات غير جادة تضيع وقت المستشارين والشركاء'],
    targetEn: ['Law firms & legal advisory practices', 'Chartered accountants & tax advisors', 'Management & strategy consulting firms', 'Architectural & engineering consultancies'],
    targetAr: ['مكاتب وشركات المحاماة والاستشارات القانونية', 'المحاسبون القانونيون ومستشارو الزكاة والضرائب', 'شركات الاستشارات الإدارية وتطوير الأعمال', 'المكاتب الهندسية والاستشارية المتخصصة'],
    scopeEn: [
      { title: 'Practice Area Structuring', desc: 'Dedicated pages explaining legal and consulting services, regulatory frameworks, and representative matters.' },
      { title: 'Partner & Consultant Profiles', desc: 'Showcasing bar admissions, academic credentials, published papers, and direct contact avenues.' },
      { title: 'Paid Consultation Booking', desc: 'Integrated calendars and payment options for booked advisory hours.' },
      { title: 'Knowledge Base & Legal Articles', desc: 'Positioning your firm as the leading authority through categorized legal analysis and guides.' }
    ],
    scopeAr: [
      { title: 'هيكلة مجالات الممارسة المهنية', desc: 'صفحات مستقلة لكل مجال (قضايا الشركات، التحكيم، الضرائب، التركات) مع شرح الأنظمة.' },
      { title: 'ملفات الشركاء والمستشارين', desc: 'استعراض التراخيص المهنية، الخبرات السابقة، والمنشورات العلمية لكل مستشار.' },
      { title: 'نظام حجز الاستشارات المدفوعة', desc: 'تقويم مواعيد تفاعلي يتيح حجز ودفع قيمة الاستشارة القانونية مسبقاً.' },
      { title: 'مركز البحوث والمقالات المتخصصة', desc: 'إبراز الخبرة والمكانة المعرفية للمكتب بنشر شروحات الأنظمة واللوائح الحديثة.' }
    ],
    deliverablesEn: ['High-Trust Professional Services Portal', 'Practice Area Hierarchy Architecture', 'Partner & Attorney Profile Directory', 'Consultation Booking Engine', 'Legal Knowledge Hub Setup'],
    deliverablesAr: ['بوابة مهنية راقية تعكس المكانة والخبرة', 'هيكلية كاملة لمجالات الممارسة والاستشارات', 'دليل الشركاء والمستشارين القانونيين', 'نظام حجز ودفع الاستشارات المسبقة', 'مركز المعرفة للمقالات والأنظمة'],
    workflowEn: [
      { step: '01', title: 'Practice Specialization Discovery', desc: 'Reviewing key practice areas, partner credentials, and ideal client profile.' },
      { step: '02', title: 'Content & Authority Positioning', desc: 'Drafting authoritative copy avoiding prohibited advertising claims.' },
      { step: '03', title: 'Design & Confidentiality Testing', desc: 'Implementing dark luxury styling and secure, confidential inquiry forms.' },
      { step: '04', title: 'Deployment & Launch', desc: 'Publishing legal disclaimers and live portal rollout.' }
    ],
    workflowAr: [
      { step: '01', title: 'تحديد مجالات التخصص والخبرات', desc: 'حصر التخصصات الدقيقة وتراخيص الشركاء ونوعية القضايا والعملاء المستهدفين.' },
      { step: '02', title: 'صياغة المحتوى المهني الرصين', desc: 'كتابة محتوى قانوني محكم يلتزم بميثاق وأخلاقيات المهنة وتجنب العبارات المبتذلة.' },
      { step: '03', title: 'التصميم وضمان سرية البيانات', desc: 'تطبيق مظهر فاخر ومريح ونماذج تواصل مشفرة تضمن سرية معلومات العملاء.' },
      { step: '04', title: 'التدشين والإطلاق الرسمي', desc: 'نشر إخلاء المسؤولية القانوني وتدشين البوابة باحترافية.' }
    ],
    benefitsEn: [
      { title: 'Command Premium Retainers', desc: 'High-end digital presence justifies top-tier hourly consulting rates.' },
      { title: 'Pre-Qualified Inquiries', desc: 'Clear practice scopes filter out low-budget inquiries, saving partners valuable hours.' },
      { title: 'Thought Leadership Dominance', desc: 'Rank for complex legal and regulatory search terms on search engines.' }
    ],
    benefitsAr: [
      { title: 'تبرير أتعاب الاستشارات المرتفعة', desc: 'المظهر المؤسسي الراقي يعكس قيمة الخبرة ويقنع الشركات بالتعاقد بأتعاب مجزية.' },
      { title: 'تصفية العملاء وتوفير الوقت', desc: 'وضوح التخصصات يحجب الاستفسارات غير المناسبة ويوجه العملاء الجادين فقط.' },
      { title: 'تصدر المرجعية القانونية والمهنية', desc: 'الظهور في نتائج البحث عند بحث مسؤولي الشركات عن استشارات قانونية متخصصة.' }
    ],
    faqsEn: [
      { q: 'Is client confidentiality preserved through contact forms?', a: 'Yes. Inquiries are encrypted via TLS/SSL and routed directly to designated partner mailboxes with strict confidentiality protocols.' }
    ],
    faqsAr: [
      { q: 'هل تضمن نماذج التواصل سرية بيانات العملاء والقضايا؟', a: 'نعم، يتم تشفير كافة البيانات عبر بروتوكولات SSL/TLS وتوجيهها مباشرة لبريد الشريك المسؤول دون تخزينها في أماكن غير مؤمنة.' }
    ],
    relatedServices: ['business-websites', 'corporate-websites', 'technical-seo'],
    relatedArticles: ['what-is-wordpress', 'wordpress-website-development']
  },

  {
    slug: 'technology-websites',
    categoryId: 'web-development',
    badgeEn: 'SaaS · Tech Companies',
    badgeAr: 'التقنية · شركات البرمجيات والـ SaaS',
    titleEn: 'Technology Company Website Development',
    titleAr: 'تطوير مواقع شركات التقنية والحلول السحابية',
    headlineEn: 'Cutting-Edge Web Presence for SaaS Platforms, IT Vendors, and Tech Startups',
    headlineAr: 'بناء مواقع حديثة لشركات البرمجيات، حلول الذكاء الاصطناعي، والمنصات السحابية',
    overviewEn: 'Modern, dynamic web platforms for tech companies: interactive product feature tours, pricing calculators, API documentation portals, customer case studies, and live demo booking.',
    overviewAr: 'بوابات رقمية فائقة التطور لشركات التقنية: استعراض تفاعلي لخصائص البرمجيات، حاسبات الأسعار والاشتراكات، صفحات توثيق الـ API، وحجز العروض التوضيحية (Live Demos).',
    problemsEn: ['Boring corporate templates failing to convey technical sophistication', 'Low conversion from website visitors to product trial signups', 'Difficulty explaining complex SaaS workflows to decision-makers'],
    problemsAr: ['قوالب رتيبة لا تعكس التطور التقني والابتكار في منتجات الشركة', 'ضعف تحويل الزوار إلى تسجيل في النسخة التجريبية المجانية', 'صعوبة شرح المنظومة التقنية لصناع القرار ورؤساء التقنية (CTOs)'],
    targetEn: ['SaaS product companies & startups', 'Enterprise software vendors', 'Cybersecurity & cloud providers', 'AI & data science platforms'],
    targetAr: ['شركات برمجيات السحابة والـ SaaS', 'شركات بيع وتطوير الأنظمة المؤسسية', 'شركات الأمن السيبراني وخدمات السحابة', 'منصات الذكاء الاصطناعي وتحليل البيانات'],
    scopeEn: [
      { title: 'Dynamic Product Feature Tours', desc: 'Interactive UI mockups, animated workflow diagrams, and feature comparison matrices.' },
      { title: 'Transparent Pricing Calculators', desc: 'Tiered monthly/annual billing toggles and usage-based slider calculators.' },
      { title: 'Live Demo Scheduling', desc: 'Integrated calendar booking syncing with your sales engineering team.' },
      { title: 'Developer & API Portal Architecture', desc: 'Clean documentation layout with code syntax highlighting and API endpoints.' }
    ],
    scopeAr: [
      { title: 'استعراض تفاعلي لمزايا المنتج', desc: 'محاكاة متحركة لشاشات النظام، مخططات سير العمل، ومقارنة الباقات التقنية.' },
      { title: 'حاسبة تسعير الاشتراكات الديناميكية', desc: 'التبديل بين الفوترة الشهرية والسنوية وحساب الأسعار وفق عدد المستخدمين.' },
      { title: 'حجز العروض التوضيحية الحية (Demo)', desc: 'تقويم مواعيد مرتبط بجدول مهندسي المبيعات لعقد عروض حية مع العملاء.' },
      { title: 'بوابة المطورين والربط البرمجي (API)', desc: 'تنسيق أنيق لتوثيق الـ API مع تمييز الأكواد البرمجية وروابط الـ SDK.' }
    ],
    deliverablesEn: ['Modern Tech Company Website', 'Interactive Feature Showcase Engine', 'Tiered Pricing Calculator', 'Demo Request Funnel', 'Developer Portal Framework'],
    deliverablesAr: ['موقع تقني حديث بتأثيرات بصرية راقية', 'نظام استعراض تفاعلي لمزايا المنتج', 'حاسبة تسعير تفاعلية للاشتراكات', 'قمع تحويل لحجز العروض التوضيحية', 'هيكل بوابة المطورين والتوثيق البرمجي'],
    workflowEn: [
      { step: '01', title: 'Product Architecture & Positioning', desc: 'Clarifying value proposition, competitive differentiators, and target buyers.' },
      { step: '02', title: 'Interactive Mockup Engineering', desc: 'Developing CSS/JS animations and responsive feature showcases.' },
      { step: '03', title: 'Sales Funnel & Integration', desc: 'Connecting demo booking to CRM (HubSpot/Salesforce) and analytics.' },
      { step: '04', title: 'Performance Tuning & Launch', desc: 'Achieving sub-second load times and global CDN deployment.' }
    ],
    workflowAr: [
      { step: '01', title: 'تحديد القيمة والميزة التنافسية', desc: 'صياغة الرسالة التقنية وتوضيح نقاط القوة للمنتج ومخاطبة صناع القرار.' },
      { step: '02', title: 'تصميم وبرمجة العناصر التفاعلية', desc: 'بناء تأثيرات حركية أنيقة لعرض شاشات النظام ومخططات البيانات.' },
      { step: '03', title: 'ربط قمع المبيعات بالـ CRM', desc: 'ربط طلبات الديمو بنظام إدارة المبيعات وأدوات التتبع المتقدمة.' },
      { step: '04', title: 'تسريع التحميل والإطلاق', desc: 'ضبط الأداء على شبكات CDN العالمية والتدشين الرسمي.' }
    ],
    benefitsEn: [
      { title: 'Higher Demo Conversion', desc: 'Clear product presentations convince CTOs and procurement leads to book calls.' },
      { title: 'Cutting-Edge Tech Credibility', desc: 'Sleek design proves your engineering standards match your software quality.' },
      { title: 'Developer-Friendly Architecture', desc: 'Clean documentation empowers client tech teams to integrate your APIs effortlessly.' }
    ],
    benefitsAr: [
      { title: 'مضاعفة حجوزات العروض التوضيحية', desc: 'شرح مقنع وسلس يدفع مدراء التقنية لطلب تجربة النظام مع فريقك.' },
      { title: 'مصداقية تقنية تليق ببرمجياتك', desc: 'موقع عصري وسريع يثبت للعميل جودة الهندسة البرمجية في منتجاتك.' },
      { title: 'سهولة ربط الـ API للعملاء', desc: 'توثيق واضح يسهل على المطورين دمج برمجياتك في أنظمتهم بسرعة.' }
    ],
    faqsEn: [
      { q: 'Can you integrate interactive product demos directly on the page?', a: 'Yes. We build responsive HTML5/CSS interactive click-through previews that showcase your software without requiring visitor login.' }
    ],
    faqsAr: [
      { q: 'هل يمكن عمل عرض تفاعلي لشاشات برنامجنا داخل الصفحة؟', a: 'نعم، نبرمج نماذج تفاعلية حية تتيح للزائر تجربة النقر واستعراض شاشات النظام دون الحاجة لإنشاء حساب مسبق.' }
    ],
    relatedServices: ['custom-software-development', 'frontend-development', 'api-integration'],
    relatedArticles: ['what-is-wordpress', 'wordpress-speed-optimization']
  },

  {
    slug: 'portfolio-websites',
    categoryId: 'web-development',
    badgeEn: 'Personal · Executive Portfolios',
    badgeAr: 'الأفراد · مواقع البورتفوليو والسير الذاتية التنفيذية',
    titleEn: 'Personal Portfolio Website Development',
    titleAr: 'تطوير مواقع البورتفوليو والسيرة الذاتية المهنية',
    headlineEn: 'Bespoke Personal Platforms for Executives, Consultants, and Specialized Experts',
    headlineAr: 'بناء منصات شخصية راقية للمدراء التنفيذيين، الخبراء، والاستشاريين المستقلين',
    overviewEn: 'Luxury personal branding platforms: verified career milestones, project case studies, academic and professional credentials, media appearances, and direct advisory inquiry channels.',
    overviewAr: 'مواقع وهوية رقمية متكاملة للخبراء والقياديين: استعراض مسيرة الإنجازات، سابقة المشاريع، الشهادات المعتمدة، الظهور الإعلامي، وقنوات التواصل الاستشاري المباشر.',
    problemsEn: ['Relying solely on social networks without personal website ownership', 'Difficulty showcasing diverse accomplishments across consulting, tech, and tenders', 'Generic templates that look amateur and unimpressive'],
    problemsAr: ['الاعتماد فقط على شبكات التواصل دون امتلاك منصة رقمية خاصة', 'صعوبة استعراض الإنجازات المتعددة في الاستشارات والتقنية والمناقصات بشكل منظم', 'استخدام قوالب رديئة تقلل من هيبة ومكانة الخبير'],
    targetEn: ['C-level executives & corporate board advisors', 'Management & technology consultants', 'Keynote speakers & specialized authors', 'Independent senior engineers & architects'],
    targetAr: ['الرؤساء والمدراء التنفيذيون وأعضاء مجالس الإدارة', 'المستشارون المستقلون في الإدارة والتقنية والمناقصات', 'المتحدثون في المؤتمرات والخبراء المعتمدون', 'كبار المهندسين والمصممين المحترفين'],
    scopeEn: [
      { title: 'Executive Brand Positioning', desc: 'Developing a signature personal aesthetic with dark luxury green and gold motifs.' },
      { title: 'Verified Credentials & Certifications', desc: 'High-res certificate showcases with direct verification links and detailed learning outcomes.' },
      { title: 'Project Case Studies Architecture', desc: 'In-depth project highlights detailing client challenges, methodologies, and business impact.' },
      { title: 'Advisory Consultation Booking', desc: 'Integrated contact and private consultation request funnels.' }
    ],
    scopeAr: [
      { title: 'صياغة الهوية المهنية التنفيذية', desc: 'هوية شخصية فاخرة تعتمد على تناسق الألوان الملكية والخطوط الراقية.' },
      { title: 'معرض الشهادات والاعتمادات الموثقة', desc: 'عرض الشهادات بدقة عالية مع روابط التحقق الرسمية وشرح القيمة المهنية.' },
      { title: 'استعراض دراسات الحالة والمشاريع', desc: 'شرح مفصل للتحديات التي تم حلها للعملاء ومنهجية العمل والنتائج المحققة.' },
      { title: 'قناة طلب الاستشارات المباشرة', desc: 'نموذج تواصل راقٍ ومباشر يتيح للشركات طلب الاستشارات والشراكات الاستراتيجية.' }
    ],
    deliverablesEn: ['Custom Personal Authority Platform', 'Verified Credentials Showcase', 'Portfolio Case Studies Engine', 'Direct Advisory Contact Funnel', 'SEO Personal Name Optimization'],
    deliverablesAr: ['منصة شخصية تنفيذية متكاملة', 'معرض الشهادات والاعتمادات الموثقة', 'نظام دراسات الحالة وسابقة الأعمال', 'قمع طلب الاستشارات والشراكات', 'تهيئة السيو لتصدر نتائج البحث بالاسم الشخصي'],
    workflowEn: [
      { step: '01', title: 'Personal Brand Audit', desc: 'Cataloging career achievements, certificates, and signature consulting areas.' },
      { step: '02', title: 'Architectural Blueprint & UX', desc: 'Designing responsive narrative journey showcasing expertise and results.' },
      { step: '03', title: 'Development & Asset Optimization', desc: 'Handcrafting fast code, interactive credential modals, and responsive layout.' },
      { step: '04', title: 'Launch & Personal SEO', desc: 'Verifying Google Knowledge Graph indexation and personal domain deployment.' }
    ],
    workflowAr: [
      { step: '01', title: 'حصر المسيرة والإنجازات', desc: 'جمع الشهادات المعتمدة، سابقة المشاريع، وتحديد مجالات الخبرة الأساسية.' },
      { step: '02', title: 'هندسة تجربة التصفح والسرد', desc: 'تصميم مسار يستعرض الخبرة والنتائج بطريقة مقنعة ومبهرة للزائر.' },
      { step: '03', title: 'البرمجة وعرض الاعتمادات', desc: 'برمجة بطاقات تفاعلية للشهادات ونوافذ عرض تفصيلية سريعة التحميل.' },
      { step: '04', title: 'الإطلاق وسيو الاسم الشخصي', desc: 'ربط النطاق الخاص وضبط السيو لتصدر اسمك الشخصي نتائج بحث جوجل.' }
    ],
    benefitsEn: [
      { title: 'Complete Digital Ownership', desc: 'Your achievements belong to your platform, free from algorithm changes.' },
      { title: 'High-Value Advisory Inquiries', desc: 'Positions you to command premium board and consulting retainers.' },
      { title: 'Instant Professional Verification', desc: 'Prospective clients can verify all certificates and credentials in one click.' }
    ],
    benefitsAr: [
      { title: 'ملكية رقمية مستقلة', desc: 'أرشيف إنجازاتك ملك لك على نطاقك الخاص دون الاعتماد على مزاجية خوارزميات السوشيال ميديا.' },
      { title: 'استقطاب فرص واستشارات كبرى', desc: 'يبرز مكانتك كمرجع موثوق يطلب للتعاقدات الاستشارية واللجان التنفيذية.' },
      { title: 'توثيق رسمي فوري للاعتمادات', desc: 'يتيح للعميل التحقق من صحة شهاداتك وسابقة مشاريعك بنقرة زر واحدة.' }
    ],
    faqsEn: [
      { q: 'Will my portfolio rank on Google when someone searches my name?', a: 'Yes. We implement Schema.org Person structured data, canonical tags, and title optimization so your official platform ranks #1 for your professional name.' }
    ],
    faqsAr: [
      { q: 'هل سيتصدر الموقع نتائج البحث عند كتابة اسمي في جوجل؟', a: 'نعم، نطبق وسوم Schema.org Person ونضبط السيو الداخلي ليحتل موقعك الرسمي المركز الأول عند البحث عن اسمك.' }
    ],
    relatedServices: ['business-websites', 'responsive-web-design', 'technical-seo'],
    relatedArticles: ['what-is-wordpress', 'wordpress-website-development']
  },

  {
    slug: 'landing-pages-development',
    categoryId: 'web-development',
    badgeEn: 'Performance · Conversion Architecture',
    badgeAr: 'التسويق · صفحات الهبوط عالية التحويل',
    titleEn: 'Landing Page Design & Development',
    titleAr: 'تصميم وتطوير صفحات الهبوط التسويقية (Landing Pages)',
    headlineEn: 'Hyper-Focused Landing Pages Engineered to Maximize Ad Campaign ROI',
    headlineAr: 'صفحات هبوط تسويقية سريعة جداً ومصممة لرفع العائد على الإنفاق الإعلاني (ROAS)',
    overviewEn: 'Conversion-engineered single-page landing experiences: distraction-free layouts, psychological value hooks, persuasive testimonials, and instant lead capture forms.',
    overviewAr: 'بناء وتطوير صفحات هبوط تسويقية مركزة للحملات الإعلانية (سناب شات، تيك توك، جوجل، إنستغرام): خالية من المشتتات، سرعة تحميل لحظية، ونماذج حجز سريعة.',
    problemsEn: ['Sending expensive paid ad clicks to slow generic homepages', 'High bounce rates and high cost per lead (CPL)', 'Weak copywriting failing to trigger immediate action'],
    problemsAr: ['إرسال الزوار من الإعلانات المكلفة إلى الصفحة الرئيسية وتشتيتهم', 'ارتفاع معدل الارتداد وارتفاع تكلفة الحصول على العميل (CPL)', 'صعوبة إقناع العميل باتخاذ إجراء الشراء أو ملء النموذج فوراً'],
    targetEn: ['Performance marketing agencies', 'Real estate project marketing campaigns', 'Event ticket sales & webinar launches', 'Direct-to-consumer product offers'],
    targetAr: ['وكالات ومسؤولو التسويق الرقمي وإدارة الحملات', 'حملات تسويق المشاريع العقارية والمخططات', 'إطلاق الفعاليات والمؤتمرات والدورات التدريبية', 'عروض المنتجات والخدمات الترويجية الحصرية'],
    scopeEn: [
      { title: 'High-Converting Copywriting & Wireframes', desc: 'Structuring hook, problem agitation, solution, social proof, and urgent call-to-action.' },
      { title: 'Sub-Second Loading Performance', desc: 'Handcrafted HTML/CSS with inline critical assets loading in under 600ms on 4G/5G mobile.' },
      { title: 'Pixel & Conversion API Integration', desc: 'Precise Lead and Purchase event tracking for Meta, Snapchat, TikTok, and Google Ads.' },
      { title: 'Direct WhatsApp & CRM Routing', desc: 'Instant submission notifications delivering qualified prospects to your sales reps within seconds.' }
    ],
    scopeAr: [
      { title: 'صياغة تسويقية وهندسة تحويل مدروسة', desc: 'عنوان جذاب، استعراض المشكلة والحل، شهادات العملاء، وعرض حصري يحفز القرار.' },
      { title: 'سرعة تحميل خارقة أقل من ثانية', desc: 'أكواد مخصصة وخفيفة جداً تفتح الصفحة في أقل من 600 ملي ثانية على الجوال.' },
      { title: 'ربط بيكسلات الإعلانات بدقة 100%', desc: 'تتبع دقيق لأحداث Lead وPurchase عبر Conversion API لسناب وشات وتيك توك وميتا.' },
      { title: 'توجيه فوري للطلبات عبر واتساب والـ CRM', desc: 'إشعار فوري لفريق المبيعات بالاسم ورقم الجوال للتواصل مع العميل خلال دقيقة.' }
    ],
    deliverablesEn: ['High-Converting Custom Landing Page', 'Integrated Multi-Platform Pixel Tracking', 'A/B Split Test Ready Architecture', 'Instant WhatsApp Action Routing', 'Speed Audit Report (98+ Score)'],
    deliverablesAr: ['صفحة هبوط تسويقية مخصصة 100%', 'ربط بيكسلات الإعلانات لكافة المنصات', 'بنية مهيأة لاختبارات A/B Testing', 'نظام تحويل فوري لرسائل الواتساب والبريد', 'تقرير سرعة فائق بـ 98+ على Google PageSpeed'],
    workflowEn: [
      { step: '01', title: 'Offer & Audience Analysis', desc: 'Clarifying the single core offer, pain points, and target demographics.' },
      { step: '02', title: 'Copywriting & Design Wireframing', desc: 'Writing high-converting Arabic/English copy and persuasive visual layouts.' },
      { step: '03', title: 'Lean Code Engineering', desc: 'Developing clean semantic code with zero third-party framework bloat.' },
      { step: '04', title: 'Pixel Validation & Ad Go-Live', desc: 'Testing conversion events and launching concurrently with your ad campaign.' }
    ],
    workflowAr: [
      { step: '01', title: 'تحليل العرض والجمهور المستهدف', desc: 'تحديد العرض الحصري، الفائدة الجوهرية، ومعالجة تردد العميل المحتمل.' },
      { step: '02', title: 'كتابة النص التسويقي والتصميم', desc: 'صياغة نصوص عربية مقنعة وتصميم واجهة تركز عيني الزائر على زر الإجراء.' },
      { step: '03', title: 'البرمجة النظيفة وضغط الأصول', desc: 'بناء كود خفيف بدون مكتبات زائدة لضمان الفتح الفوري للإعلان.' },
      { step: '04', title: 'فحص البيكسل وتدشين الحملة', desc: 'اختبار وصول أحداث التحويل لمدير الإعلانات وإطلاق الحملة بنجاح.' }
    ],
    benefitsEn: [
      { title: 'Drastically Lower Cost Per Lead', desc: 'Every 1-second improvement in speed and clarity directly multiplies ad conversion rates.' },
      { title: 'Laser-Focused Message', desc: 'No navigation menus to distract users — only your core offer and the action button.' },
      { title: 'Accurate Ad Algorithm Optimization', desc: 'Flawless event reporting trains ad algorithms to find your best paying customers.' }
    ],
    benefitsAr: [
      { title: 'تخفيض تكلفة الحصول على العميل', desc: 'السرعة والتركيز يرفعان نسبة التحويل من 2% إلى أكثر من 8% في الحملات الناجحة.' },
      { title: 'انعدام التشتيت', desc: 'إلغاء القوائم والروابط الجانبية لضمان تركيز الزائر فقط على العرض وزر الطلب.' },
      { title: 'تغذية خوارزميات الإعلانات بدقة', desc: 'إرسال بيانات التحويل الصحيحة يساعد المنصات على جلب عملاء بجودة أعلى وبأقل تكلفة.' }
    ],
    faqsEn: [
      { q: 'Can you create different variations for A/B testing?', a: 'Yes. We configure multi-variant A/B tests with different headlines and calls-to-action to identify which version delivers the lowest CPL.' }
    ],
    faqsAr: [
      { q: 'هل يمكن إنشاء نسختين من الصفحة لاختبار أيهما أفضل (A/B Testing)؟', a: 'نعم، نبرمج نسخاً متعددة بعناوين وصور مختلفة لتحديد الصفحة التي تحقق أعلى مبيعات وأقل تكلفة نقرة.' }
    ],
    relatedServices: ['business-websites', 'speed-optimization', 'responsive-web-design', 'technical-seo'],
    relatedArticles: ['what-is-wordpress', 'wordpress-speed-optimization']
  },

  // --- Website Engineering & Optimization Services ---
  {
    slug: 'website-redesign',
    categoryId: 'web-development',
    badgeEn: 'Modernization · Platform Overhaul',
    badgeAr: 'التطوير والتحديث · إعادة تصميم المواقع',
    titleEn: 'Website Redesign & Modernization',
    titleAr: 'إعادة تصميم وتحديث المواقع الإلكترونية',
    headlineEn: 'Transforming Legacy, Outdated Websites into Fast, Modern, and High-Converting Platforms',
    headlineAr: 'تحديث المواقع القديمة وتحويلها لمنصات عصرية فائقة السرعة مع الحفاظ التام على أرشفة السيو',
    overviewEn: 'Full-scope website modernization: refreshing visual aesthetics to luxury dark and emerald themes, re-architecting UX flows, upgrading CMS frameworks, and preserving 100% of organic Google rankings.',
    overviewAr: 'تطوير شامل للمواقع القديمة: تجديد الهوية البصرية، تحسين تجربة التصفح على الجوال، ترقية أنظمة إدارة المحتوى، مع حماية كاملة لترتيب وأرشفة الموقع في جوجل عبر التحويلات السليمة.',
    problemsEn: ['Outdated design driving prospective clients to modern competitors', 'Terrible mobile UX and slow load times on modern smartphones', 'Fear of losing established Google search rankings during redesign'],
    problemsAr: ['مظهر قديم يدفع العملاء للتعامل مع المنافسين الأكثر حداثة', 'صعوبة تصفح الموقع وبطء التحميل على الهواتف الذكية', 'الخوف من فقدان الترتيب والأرشفة في نتائج بحث جوجل عند التغيير'],
    targetEn: ['Companies with websites built 4+ years ago', 'Brands undergoing corporate rebranding', 'Websites failing modern Google Core Web Vitals'],
    targetAr: ['الشركات التي تمتلك مواقع لم يتم تحديثها منذ سنوات', 'المنشآت التي غيرت هويتها البصرية وتوسع نشاطها', 'المواقع التي تعاني من بطء التحميل وتراجع الزوار'],
    scopeEn: [
      { title: 'Comprehensive Site & SEO Audit', desc: 'Cataloging all indexed URLs, backlinks, and current ranking keywords before making changes.' },
      { title: 'Modern UI/UX Re-Engineering', desc: 'Crafting luxury, responsive interfaces with clear typographic hierarchy and intuitive navigation.' },
      { title: 'Codebase Re-Architecture', desc: 'Replacing bloated visual builders with clean, semantic PHP/Tailwind CSS templates.' },
      { title: 'SEO 301 Redirect Mapping', desc: 'Implementing flawless 301 redirects ensuring zero broken links or lost search equity.' }
    ],
    scopeAr: [
      { title: 'تدقيق شامل لأرشفة وروابط الموقع الحالي', desc: 'حصر كافة الروابط المؤرشفة في جوجل والكلمات المتصدرة لحمايتها من الانهيار.' },
      { title: 'إعادة تصميم الواجهات وتجربة المستخدم', desc: 'تصميم حديث وفاخر يجمع بين الهيبة البصرية وسهولة الوصول للخدمات.' },
      { title: 'إعادة بناء الكود والتخلص من التعقيدات', desc: 'استبدال منشئات الصفحات الثقيلة بأكواد نظيفة وسريعة التحميل.' },
      { title: 'خريطة التحويلات 301 (Redirects)', desc: 'ربط كل رابط قديم بالرابط الجديد المقابل له بدقة لمنع ظهور صفحات 404.' }
    ],
    deliverablesEn: ['Modernized High-Performance Website', 'Comprehensive 301 Redirect Architecture', 'SEO Equity Protection Audit', 'Mobile Usability Certification', 'CMS Upgrade & Maintenance Guide'],
    deliverablesAr: ['موقع عصري فائق السرعة والأناقة', 'خريطة تحويلات 301 كاملة لحماية السيو', 'تقرير تدقيق الحفاظ على الأرشفة والزيارات', 'توافق كامل مع شاشات الجوال والحواسيب', 'دليل إدارة وتحديث المحتوى المطور'],
    workflowEn: [
      { step: '01', title: 'Pre-Redesign SEO & Content Mapping', desc: 'Crawling existing website to map all ranking URLs.' },
      { step: '02', title: 'New Architecture & Visual Design', desc: 'Creating modern layouts and content improvements.' },
      { step: '03', title: 'Staging Development & 301 Setup', desc: 'Building on private staging environment with redirect verification.' },
      { step: '04', title: 'Zero-Downtime Migration', desc: 'Deploying new website seamlessly with Google Search Console monitoring.' }
    ],
    workflowAr: [
      { step: '01', title: 'فحص السيو وحصر الروابط المؤرشفة', desc: 'استخراج كافة الروابط القديمة لتجهيز مسارات الانتقال الآمن.' },
      { step: '02', title: 'تصميم الواجهات والهيكل الجديد', desc: 'بناء التصاميم الحديثة ومراجعة المحتوى مع العميل.' },
      { step: '03', title: 'التطوير على بيئة اختبارية خاصة', desc: 'برمجة الموقع الجديد وتطبيق التحويلات واختبار السرعة قبل النشر.' },
      { step: '04', title: 'النشر المباشر دون انقطاع', desc: 'إطلاق الموقع الجديد بسلاسة ومراقبة تقارير Google Search Console.' }
    ],
    benefitsEn: [
      { title: 'Immediate Brand Elevation', desc: 'A sophisticated digital presence re-establishes market authority.' },
      { title: 'Protected Organic Traffic', desc: 'Meticulous 301 mapping preserves and elevates existing Google rankings.' },
      { title: 'Radical Speed Acceleration', desc: 'Replacing old legacy code cuts load times by over 70%.' }
    ],
    benefitsAr: [
      { title: 'نقلة نوعية في صورة الشركة', desc: 'مظهر راقٍ يعكس التطور الحقيقي لشركتك ويجدد ثقة العملاء والشركاء.' },
      { title: 'حماية كاملة لأرشفة جوجل', desc: 'الحفاظ على الزيارات العضوية التي استثمرت فيها لسنوات دون أي تراجع.' },
      { title: 'مضاعفة سرعة التصفح', desc: 'التخلص من الأكواد القديمة يقلص زمن تحميل الصفحة بأكثر من 70%.' }
    ],
    faqsEn: [
      { q: 'Will my current website go offline while you build the new one?', a: 'No. The new website is built entirely on a secure private staging server. Your existing site remains 100% active until the moment we switch over in seconds.' }
    ],
    faqsAr: [
      { q: 'هل سيتوقف موقعنا الحالي أثناء فترة العمل على الموقع الجديد؟', a: 'أبداً، يتم بناء وتطوير الموقع الجديد كاملاً على خادم تجريبي معزول، ويظل موقعك القديم يعمل ويستقبل العملاء دون أي توقف حتى لحظة التبديل السريعة.' }
    ],
    relatedServices: ['wordpress-development', 'speed-optimization', 'technical-seo', 'responsive-web-design'],
    relatedArticles: ['what-is-wordpress', 'wordpress-website-development', 'wordpress-speed-optimization']
  },

  {
    slug: 'website-maintenance',
    categoryId: 'web-development',
    badgeEn: 'SLA · 24/7 Monitoring',
    badgeAr: 'الدعم الفني · الصيانة والمراقبة المستمرة',
    titleEn: 'Website Maintenance & Technical Support',
    titleAr: 'صيانة المواقع والدعم الفني السحابي المستمر',
    headlineEn: 'Proactive 24/7 Security Monitoring, Core Updates, and Automated Disaster Backups',
    headlineAr: 'مراقبة أمنية على مدار الساعة، تحديثات برمجية دورية، ونسخ احتياطي سحابي لحماية موقعك',
    overviewEn: 'Enterprise maintenance retainers: routine core and plugin updates on staging, real-time uptime monitoring, malware elimination, off-site encrypted backups, and rapid bug fixes.',
    overviewAr: 'عقود صيانة ودعم فني تضمن استقرار موقعك وأمانه الدائم: فحص التحديثات على سيرفر تجريبي قبل تطبيقها، مراقبة التوقف لحظياً، الحماية من البرمجيات الخبيثة، ونسخ احتياطي خارجي مشفر.',
    problemsEn: ['Broken layouts after updating WordPress plugins', 'Malware infections and Google security blacklisting', 'No reliable off-site backup when server disasters strike', 'No dedicated engineer when technical issues arise'],
    problemsAr: ['تعطل الموقع وانهيار الصفحات بعد تحديث القوالب أو الإضافات', 'تعرض الموقع للاختراق والبرمجيات الخبيثة وتحذيرات جوجل الحمراء', 'غياب النسخ الاحتياطي عند حدوث مشاكل في الاستضافة', 'عدم وجود مهندس تقني متخصص للرجوع إليه عند الطوارئ'],
    targetEn: ['Corporate platforms and e-commerce stores', 'Companies lacking in-house technical web teams', 'High-traffic portals where downtime means direct revenue loss'],
    targetAr: ['الشركات والمتاجر التي تتطلب تشغيلاً مستمراً دون توقف', 'المؤسسات التي لا تمتلك فريقاً تقنياً متخصصاً بدوام كامل', 'المواقع التي يمثل كل دقيقة توقف فيها خسارة مالية مباشرة'],
    scopeEn: [
      { title: 'Staging-First Safe Updates', desc: 'Testing all CMS cores, security patches, and plugin updates in an isolated staging environment.' },
      { title: 'Automated Off-Site Backups', desc: 'Daily encrypted backups stored independently on AWS S3 with one-click disaster recovery.' },
      { title: '24/7 Uptime & Health Monitoring', desc: 'Automated checks every 60 seconds with instant alert escalation upon any downtime.' },
      { title: 'Monthly Technical Hours & Tweaks', desc: 'Dedicated hours for content updates, banner changes, and speed enhancements.' }
    ],
    scopeAr: [
      { title: 'التحديث الآمن عبر السيرفر التجريبي', desc: 'اختبار كافة تحديثات النظام والإضافات في بيئة معزولة للتأكد من عدم كسر الموقع.' },
      { title: 'النسخ الاحتياطي السحابي المشفر', desc: 'نسخ يومي لقاعدة البيانات والملفات على خزائن AWS S3 الخارجية للتعافي الفوري.' },
      { title: 'مراقبة التشغيل 24/7', desc: 'فحص استجابة الموقع كل 60 ثانية والتدخل الفوري عند حدوث أي تباطؤ أو توقف.' },
      { title: 'ساعات دعم وتعديلات شهرية', desc: 'تخصيص ساعات لتنفيذ طلباتك في تعديل النصوص، الصور، والتحسينات التقنية.' }
    ],
    deliverablesEn: ['Monthly Maintenance & Security Audit Report', '24/7 Automated Uptime Monitoring', 'Daily Off-Site Encrypted Backups', 'Emergency Incident Response Guarantee', 'Dedicated Technical Support Channel'],
    deliverablesAr: ['تقرير صيانة شهري يوضح حالة الأمان والتحديثات', 'مراقبة مستمرة للتشغيل على مدار 24 ساعة', 'نسخ احتياطي يومي مشفر خارج الاستضافة', 'التزام بالتدخل السريع في حالات الطوارئ', 'قناة تواصل وتذاكر دعم فني مباشرة'],
    workflowEn: [
      { step: '01', title: 'Initial Security & Health Audit', desc: 'Auditing server, database, security headers, and existing plugins.' },
      { step: '02', title: 'Backup & Monitoring Integration', desc: 'Connecting external backup engines and 60-second ping monitors.' },
      { step: '03', title: 'Weekly Maintenance Cadence', desc: 'Updating components in staging and pushing verified patches.' },
      { step: '04', title: 'Monthly Executive Reporting', desc: 'Delivering comprehensive health, traffic, and security summary.' }
    ],
    workflowAr: [
      { step: '01', title: 'الفحص الأولي والشامل للموقع', desc: 'مراجعة أمان الخادم، قاعدة البيانات، والتحقق من نظافة الملفات.' },
      { step: '02', title: 'تفعيل أنظمة النسخ والمراقبة', desc: 'ربط السيرفر بالنسخ السحابي اليومي ومجسات مراقبة التوقف.' },
      { step: '03', title: 'جدول الصيانة والتحديثات الأسبوعي', desc: 'تطبيق التحديثات المعتمدة دورياً وفحص استقرار كافة الصفحات.' },
      { step: '04', title: 'إرسال التقرير الدوري الشهري', desc: 'مشاركة ملخص الأداء ومؤشرات الأمان والمهام المنفذة مع الإدارة.' }
    ],
    benefitsEn: [
      { title: 'Peace of Mind', desc: 'Never worry about your website breaking or getting hacked without your knowledge.' },
      { title: 'Guaranteed Business Continuity', desc: 'Instant rollback capabilities restore full operations within minutes of any incident.' },
      { title: 'Consistent Speed & Performance', desc: 'Regular database cleanups prevent gradual performance decay over time.' }
    ],
    benefitsAr: [
      { title: 'راحة بال تامة للإدارة', desc: 'التفرغ لتطوير أعمالك مع اليقين بوجود مهندس محترف يحمي ويدير موقعك.' },
      { title: 'استمرارية العمل بلا انقطاع', desc: 'إمكانية استعادة الموقع كاملاً خلال دقائق معدودة في أصعب الظروف الطارئة.' },
      { title: 'حفاظ دائم على سرعة الموقع', desc: 'تنظيف قواعد البيانات بانتظام يمنع تراكم الملفات المؤقتة وبطء التصفح.' }
    ],
    faqsEn: [
      { q: 'What happens if our website gets hacked or goes down on a weekend?', a: 'Our automated monitoring alerts us immediately, and our incident response protocol restores clean verified backups and patches the entry vector immediately.' }
    ],
    faqsAr: [
      { q: 'ماذا يحدث إذا تعطل الموقع أو تعرض لمحاولة اختراق في عطلة نهاية الأسبوع؟', a: 'تصلنا إشعارات المراقبة الآلية فوراً، ونبدأ التدخل لمعالجة السبب واستعادة النسخ الاحتياطية وسد الثغرة فوراً دون انتظار أيام العمل.' }
    ],
    relatedServices: ['website-security', 'speed-optimization', 'wordpress-development'],
    relatedArticles: ['wordpress-security-and-maintenance', 'wordpress-speed-optimization']
  },

  {
    slug: 'speed-optimization',
    categoryId: 'web-development',
    badgeEn: 'Performance · Core Web Vitals',
    badgeAr: 'السرعة والأداء · مؤشرات Core Web Vitals',
    titleEn: 'Website Speed Optimization',
    titleAr: 'تسريع المواقع وتحسين مؤشرات Google Core Web Vitals',
    headlineEn: 'Achieving Sub-Second Load Times and 95+ PageSpeed Scores for Maximum Conversion',
    headlineAr: 'الوصول لسرعة تحميل تحت ثانية ودرجة 95+ على Google PageSpeed لمضاعفة المبيعات',
    overviewEn: 'Full-stack web performance engineering: TTFB reduction, critical CSS extraction, database query optimization, Redis caching, script deferral, and WebP/AVIF media optimization.',
    overviewAr: 'تسريع شامل للمواقع والمتاجر: تقليل زمن استجابة الخادم (TTFB)، استخراج الأكواد الحرجة، تحسين استعلامات قواعد البيانات، كاش Redis، وتأجيل ملفات جافاسكريبت المعطلة للرندرة.',
    problemsEn: ['Slow websites losing 40% of visitors who abandon pages taking over 3 seconds', 'Failing Google Core Web Vitals resulting in lower search engine rank', 'High server CPU usage crashing under modest traffic'],
    problemsAr: ['خسارة أكثر من 40% من الزوار الذين يغادرون الصفحة إذا استغرقت أكثر من 3 ثوانٍ', 'الفشل في مؤشرات جوجل Core Web Vitals وتراجع الترتيب في البحث', 'استهلاك هائل لمعالج الخادم وانهيار الموقع مع زيادة الزيارات'],
    targetEn: ['E-commerce stores running paid advertising', 'Corporate websites suffering from slow legacy code', 'News publishers and content portals'],
    targetAr: ['المتاجر الإلكترونية التي تنفق ميزانيات على الإعلانات الممولة', 'مواقع الشركات التي تعاني من قوالب قديمة وبطء التحميل', 'الصحف والمنصات الإخبارية التي تمتلك ملايين الزيارات'],
    scopeEn: [
      { title: 'Server & TTFB Optimization', desc: 'Configuring NGINX microcaching, PHP-FPM OPcache, and Redis object cache to cut TTFB under 100ms.' },
      { title: 'Core Web Vitals Engineering', desc: 'Eliminating layout shifts (CLS = 0) and accelerating Largest Contentful Paint (LCP < 1.2s).' },
      { title: 'JavaScript & CSS Minification', desc: 'Tree-shaking unused libraries, deferring non-critical scripts, and inlining critical path CSS.' },
      { title: 'Next-Gen Media Conversion', desc: 'Automating conversion to AVIF and WebP with responsive HTML5 picture tags.' }
    ],
    scopeAr: [
      { title: 'تسريع استجابة الخادم (TTFB)', desc: 'ضبط كاش NGINX وOPcache وRedis Object Cache لخفض وقت استجابة السيرفر لأقل من 100ms.' },
      { title: 'تحقيق متطلبات Core Web Vitals', desc: 'القضاء على الإزاحات البصرية (CLS = 0) وتسريع رسم المحتوى الرئيسي (LCP أقل من 1.2s).' },
      { title: 'تنظيف وضغط ملفات CSS وJS', desc: 'حذف الأكواد المهملة، تأجيل السكربتات الثانوية، واستخراج الأكواد الحرجة فقط.' },
      { title: 'تحويل الصور لصيغ الجيل القادم', desc: 'تحويل الصور تلقائياً لصيغتي WebP وAVIF الخفيفة لتقليص الحجم بأكثر من 75%.' }
    ],
    deliverablesEn: ['Google PageSpeed 90+ Mobile & Desktop Scores', 'Sub-Second Page Load Certification', 'Redis Object Cache Setup', 'Optimized Next-Gen Media Library', 'Before & After Performance Report'],
    deliverablesAr: ['درجة 90+ على Google PageSpeed للجوال والكمبيوتر', 'شهادة سرعة تحميل تحت ثانية', 'تفعيل كاش Redis لقاعدة البيانات', 'مكتبة وسائط مضغوطة بالصيغ الحديثة', 'تقرير مفصل يقارن السرعة قبل وبعد التسريع'],
    workflowEn: [
      { step: '01', title: 'Deep Performance Profiling', desc: 'Profiling TTFB, database queries, and blocking scripts.' },
      { step: '02', title: 'Server & Database Tuning', desc: 'Deploying server caching layers and indexing SQL tables.' },
      { step: '03', title: 'Front-End Asset Optimization', desc: 'Refactoring critical CSS, deferring JS, and converting images.' },
      { step: '04', title: 'Global CDN & Verification', desc: 'Deploying edge caching on Cloudflare and verifying PageSpeed scores.' }
    ],
    workflowAr: [
      { step: '01', title: 'الفحص والتشخيص العميق للبطء', desc: 'قياس سرعة السيرفر، استعلامات قواعد البيانات، والملفات المعيقة للرندرة.' },
      { step: '02', title: 'ضبط السيرفر وقاعدة البيانات', desc: 'تفعيل طبقات الكاش وتخفيف الحمل على معالج الخادم وفهرسة الجداول.' },
      { step: '03', title: 'تحسين الأصول والملفات في المتصفح', desc: 'تنظيف ملفات CSS وتأجيل الجافاسكريبت وتحويل الصور.' },
      { step: '04', title: 'التوزيع السحابي والتحقق النهائي', desc: 'ربط شبكة CDN والتحقق من تحقيق درجات خضراء في فحص جوجل.' }
    ],
    benefitsEn: [
      { title: 'Direct Conversion Uplift', desc: 'Every 0.5s speed increase statistically boosts sales conversions by 10% to 20%.' },
      { title: 'Improved Google Rankings', desc: 'Core Web Vitals compliance directly enhances organic search placement.' },
      { title: 'Reduced Hosting Costs', desc: 'Efficient caching reduces CPU and memory usage, avoiding expensive server upgrades.' }
    ],
    benefitsAr: [
      { title: 'زيادة مباشرة في المبيعات', desc: 'كل نصف ثانية توفرها في سرعة التحميل ترفع معدل المبيعات بنسبة 10% إلى 20%.' },
      { title: 'أولوية في ترتيب جوجل', desc: 'المواقع السريعة التي تجتاز مؤشرات الويب تحظى بأفضلية خوارزميات محركات البحث.' },
      { title: 'توفير تكاليف الخوادم', desc: 'التخزين المؤقت يقلل استهلاك معالج الخادم والرامات دون الحاجة لسيرفرات مكلفة.' }
    ],
    faqsEn: [
      { q: 'Will speed optimization break my site’s layout or features?', a: 'No. We test all optimizations in a staging environment and avoid reckless minification that breaks JavaScript functionality.' }
    ],
    faqsAr: [
      { q: 'هل سيؤدي تسريع الموقع إلى تشوه التصميم أو تعطل بعض الوظائف؟', a: 'كلا، نحن نطبق التحسينات وفق أفضل الممارسات الهندسية وبشكل اختباري دقيق لضمان عمل كافة النوافذ والوظائف دون أي خلل.' }
    ],
    relatedServices: ['wordpress-development', 'website-maintenance', 'technical-seo'],
    relatedArticles: ['wordpress-speed-optimization', 'what-is-wordpress']
  },

  {
    slug: 'website-security',
    categoryId: 'web-development',
    badgeEn: 'Cybersecurity · Hardening & WAF',
    badgeAr: 'الأمان السيبراني · التحصين وجدار الحماية',
    titleEn: 'Website Security & Malware Hardening',
    titleAr: 'أمان المواقع الإلكترونية ومكافحة الاختراق',
    headlineEn: 'Enterprise Web Application Firewalls, Vulnerability Patching, and Malware Removal',
    headlineAr: 'تحصين المواقع ضد هجمات الاختراق، تنظيف الفيروسات، وتطبيق جدران الحماية WAF',
    overviewEn: 'End-to-end website cybersecurity: automated malware cleanup, Web Application Firewall (WAF) deployment, brute force prevention, SSL/TLS hardening, and code vulnerability auditing.',
    overviewAr: 'حماية متكاملة للمواقع والأنظمة السحابية: إزالة البرمجيات الخبيثة، تركيب جدار حماية التطبيقات (WAF)، صد هجمات القوة الغاشمة، وتشفير الاتصال بشهادات أمان متطورة.',
    problemsEn: ['Hacked websites displaying spam or redirected to malicious domains', 'Google blacklisting domain and showing "Deceptive site ahead" warning', 'Constant brute force login attempts causing high CPU load'],
    problemsAr: ['تعرض الموقع للاختراق وتوجيه الزوار لصفحات مشبوهة أو سبام', 'وضع الموقع في القائمة السوداء لجوجل وظهور تحذير "الموقع غير آمن"', 'محاولات تخمين كلمات المرور المستمرة التي تستهلك موارد الخادم'],
    targetEn: ['Financial and e-commerce websites handling payments', 'Corporate portals storing sensitive client data', 'Websites recovering from an active security breach'],
    targetAr: ['المتاجر والمنصات التي تستقبل مدفوعات وبطاقات ائتمانية', 'مواقع الشركات التي تحتفظ ببيانات عملاء واتصالات حساسة', 'المواقع التي تعرضت للاختراق وتبحث عن تنظيف فوري وتحصين'],
    scopeEn: [
      { title: 'Emergency Malware Cleanup & Restoration', desc: 'Deep scanning files and database to eliminate backdoors, malicious redirects, and PHP shells.' },
      { title: 'Web Application Firewall (WAF) Setup', desc: 'Deploying Cloudflare Enterprise WAF rules filtering SQL injection, XSS, and bad bots.' },
      { title: 'Endpoint Hardening & 2FA', desc: 'Disabling administrative vulnerabilities, changing endpoints, and implementing mandatory 2FA.' },
      { title: 'Security Headers Configuration', desc: 'Applying strict HSTS, Content Security Policy (CSP), and X-Frame-Options headers.' }
    ],
    scopeAr: [
      { title: 'تنظيف البرمجيات الخبيثة وإزالة الاختراق', desc: 'فحص عميق للملفات وقواعد البيانات وحذف الأبواب الخلفية (Backdoors) والأكواد الخبيثة.' },
      { title: 'تفعيل جدار حماية تطبيقات الويب (WAF)', desc: 'تركيب قواعد حماية ذكية لصد هجمات حقن SQL وحجب البوتات والزيارات الضارة.' },
      { title: 'تحصين لوحة التحكم والمصادقة الثنائية', desc: 'إغلاق الثغرات، تغيير روابط الدخول الافتراضية، وإلزام تفعيل رمز التحقق 2FA.' },
      { title: 'ضبط ترويسات الأمان المشددة (Security Headers)', desc: 'تفعيل بروتوكولات HSTS وCSP الصارمة لمنع هجمات التزييف واعتراض البيانات.' }
    ],
    deliverablesEn: ['100% Cleaned & Sanitized Codebase', 'Google Security Warning Blacklist Removal', 'Configured Cloudflare WAF Security Shield', 'Hardening & Compliance Audit Report', 'Disaster Recovery Plan'],
    deliverablesAr: ['كود نظيف وخالٍ تماماً من أي ملفات خبيثة', 'إلغاء حظر جوجل وإزالة التحذيرات الحمراء من البحث', 'جدار حماية سحابي WAF مفعل بالكامل', 'تقرير فحص وتحصين أمني رسمي', 'خطة طوارئ للتعافي من الهجمات'],
    workflowEn: [
      { step: '01', title: 'Incident Triage & Quarantine', desc: 'Isolating compromised files and securing immediate server backups.' },
      { step: '02', title: 'Malware & Backdoor Eradication', desc: 'Running surgical scans and replacing tampered core files with pristine source.' },
      { step: '03', title: 'Hardening & WAF Layering', desc: 'Implementing strict firewall rules, 2FA, and disabling vulnerable API endpoints.' },
      { step: '04', title: 'Search Engine Whitelisting', desc: 'Submitting clean review requests to Google Search Console for immediate unblocking.' }
    ],
    workflowAr: [
      { step: '01', title: 'احتواء الاختراق وعزل الملفات', desc: 'السيطرة الفورية على السيرفر وأخذ نسخة طوارئ وفصل الملفات المصابة.' },
      { step: '02', title: 'تطهير وحذف الأكواد الخبيثة', desc: 'فحص مجهري لكافة الملفات واستبدال ملفات النواة بنسخ أصلية ونظيفة.' },
      { step: '03', title: 'التحصين الشامل وتفعيل جدار الحماية', desc: 'تطبيق قواعد جدار الحماية وتفعيل المصادقة الثنائية وتغيير كافة كلمات المرور.' },
      { step: '04', title: 'إلغاء الحظر من جوجل والتدشين', desc: 'تقديم طلب مراجعة أمنية لجوجل لحذف التحذيرات وإعادة الموقع آمناً.' }
    ],
    benefitsEn: [
      { title: 'Brand Reputation Protection', desc: 'Prevents security warnings that immediately destroy prospective client trust.' },
      { title: 'Regulatory Data Compliance', desc: 'Safeguards customer personal information aligning with privacy protection laws.' },
      { title: 'Continuous Perimeter Defense', desc: 'WAF stops automated vulnerability scanners before they ever touch your server.' }
    ],
    benefitsAr: [
      { title: 'حماية سمعة ومكانة العلامة التجارية', desc: 'منع ظهور رسائل الأمان المخيفة للعملاء والتي تدمر الثقة فوراً.' },
      { title: 'حماية بيانات العملاء والنظام', desc: 'الالتزام بضوابط حماية البيانات الشخصية ومنع تسريب أرقام أو معلومات الزوار.' },
      { title: 'صد الهجمات الآلية قبل وصولها', desc: 'جدار الحماية يفرز الزيارات المشبوهة ويصد البوتات خارج حدود الخادم.' }
    ],
    faqsEn: [
      { q: 'How fast can you remove the red "Deceptive site ahead" warning from Google?', a: 'Once our deep cleaning and hardening is completed (usually within 12-24 hours), we submit a security appeal to Google, which typically clears the warning within 24 to 48 hours.' }
    ],
    faqsAr: [
      { q: 'كم يستغرق إزالة تحذير جوجل الأحمر بعد تنظيف الموقع؟', a: 'بمجرد استكمال التنظيف والتحصين الشامل (خلال 12-24 ساعة)، نرفع طلباً رسمياً لجوجل، وتُرفع التحذيرات عادة خلال 24 إلى 48 ساعة.' }
    ],
    relatedServices: ['website-maintenance', 'speed-optimization', 'wordpress-development'],
    relatedArticles: ['wordpress-security-and-maintenance', 'what-is-wordpress']
  },

  {
    slug: 'frontend-development',
    categoryId: 'web-development',
    badgeEn: 'Front-End · Modern React & Web UI',
    badgeAr: 'تطوير الواجهات · React وواجهات الويب الحديثة',
    titleEn: 'Front-End Development & UI Engineering',
    titleAr: 'تطوير واجهات المستخدم الأمامية (Front-End)',
    headlineEn: 'Engineering Responsive, Accessible, and Pixel-Perfect Interfaces with React & Tailwind',
    headlineAr: 'برمجة واجهات ويب تفاعلية وسريعة الاستجابة بأحدث أطر العمل ومعايير الويب',
    overviewEn: 'Modern front-end engineering: React, Next.js, TypeScript, Tailwind CSS, smooth micro-animations, accessible WCAG 2.1 compliance, and modular component architectures.',
    overviewAr: 'بناء وبرمجة واجهات المستخدم الأمامية الاحترافية: أطر عمل React وNext.js وTypeScript وTailwind CSS، حركات تفاعلية انسيابية، وتوافق كامل مع كافة الأجهزة.',
    problemsEn: ['Clunky interfaces frustrating users and causing drop-offs', 'Inconsistent styling across different screen sizes and browsers', 'Poor Arabic RTL layout implementation'],
    problemsAr: ['واجهات معقدة تسبب ارتباك المستخدم وخروجه من الموقع', 'عدم تناسق التصميم بين متصفحات الهواتف والكمبيوتر', 'مشاكل في دعم اللغة العربية وانعكاس العناصر بشكل غير منسق'],
    targetEn: ['Tech startups and digital platforms', 'Companies building custom SaaS software', 'Enterprises modernizing client-facing portals'],
    targetAr: ['الشركات التقنية ومنصات الخدمات الرقمية', 'الشركات التي تبني تطبيقات وبرمجيات سحابية', 'المؤسسات الراغبة في تجديد واجهات عملائها بالكامل'],
    scopeEn: [
      { title: 'Component-Driven Architecture', desc: 'Modular, reusable UI components built with TypeScript and Tailwind CSS.' },
      { title: 'Responsive & Accessible UX', desc: 'Fluid breakpoints from mobile to 4K displays complying with WCAG 2.1 accessibility.' },
      { title: 'State Management & API Integration', desc: 'Efficient asynchronous data fetching with optimistic UI updates.' },
      { title: 'Smooth Micro-Interactions', desc: 'Subtle motion design using CSS transforms and lightweight animation libraries.' }
    ],
    scopeAr: [
      { title: 'بنية العناصر البرمجية القابلة لإعادة الاستخدام', desc: 'بناء مكونات UI منظمة وموثقة بلغة TypeScript وتنسيق Tailwind CSS.' },
      { title: 'تصميم فائق التجاوب وإمكانية الوصول', desc: 'توافق انسيابي من شاشات الجوال الصغيرة حتى شاشات 4K مع معايير WCAG.' },
      { title: 'إدارة الحالة وربط الـ API', desc: 'جلب وعرض البيانات بشكل فوري وتحديث الواجهة دون إعادة تحميل الصفحة.' },
      { title: 'تأثيرات حركية خفيفة وانسيابية', desc: 'حركات دقيقة تعزز تفاعل المستخدم دون التأثير على سرعة استجابة المتصفح.' }
    ],
    deliverablesEn: ['Production Front-End Component Library', 'Responsive Arabic/English Layout Suite', 'Performance Audit (95+ Lighthouse)', 'Clean Documented TypeScript Codebase', 'Figma-to-Code Precision Guarantee'],
    deliverablesAr: ['مكتبة عناصر برمجية متكاملة للواجهة', 'واجهات متجاوبة ثنائية اللغة (RTL/LTR)', 'تقرير فحص الأداء 95+ على Lighthouse', 'كود نظيف وموثق بلغة TypeScript', 'مطابقة دقيقة 100% لتصاميم Figma'],
    workflowEn: [
      { step: '01', title: 'Design Review & Component Tokens', desc: 'Analyzing Figma designs, color tokens, and typography.' },
      { step: '02', title: 'Responsive Development', desc: 'Coding semantic markup, Tailwind utilities, and state hooks.' },
      { step: '03', title: 'API Integration & Motion Polish', desc: 'Hooking into backend endpoints and testing user interactions.' },
      { step: '04', title: 'Cross-Browser & Accessibility Audit', desc: 'Validating on Safari, Chrome, iOS, and Android devices.' }
    ],
    workflowAr: [
      { step: '01', title: 'مراجعة التصاميم وعناصر الواجهة', desc: 'تحليل ملفات Figma وتحديد مقاييس الخطوط والألوان المعيارية.' },
      { step: '02', title: 'البرمجة وبناء المكونات التفاعلية', desc: 'كتابة الأكواد بـ TypeScript واستخدام Tailwind لتنسيق فائق الدقة.' },
      { step: '03', title: 'ربط واجهات البيانات الـ API والحركات', desc: 'ربط الواجهة بالباك إند وتفعيل الحركات التفاعلية السلسة.' },
      { step: '04', title: 'فحص التوافق عبر كافة المتصفحات', desc: 'اختبار الواجهة على Safari وChrome وأنظمة iOS وأندرويد.' }
    ],
    benefitsEn: [
      { title: 'Delightful User Experience', desc: 'Subtle animations and fast interactions make your app a pleasure to use.' },
      { title: 'Flawless Arabic RTL Mirroring', desc: 'Engineered specifically for Arabic users without awkward design glitches.' },
      { title: 'Maintainable Code Quality', desc: 'TypeScript and modular design allow your engineering team to scale features easily.' }
    ],
    benefitsAr: [
      { title: 'تجربة مستخدم ممتعة وسلسة', desc: 'حركات بصرية ذكية وسرعة نقر تمنح المستخدم شعوراً بالاحترافية العالية.' },
      { title: 'دعم حقيقي ودقيق للغة العربية', desc: 'انعكاس متقن للقوائم والأيقونات بما يناسب اتجاه القراءة العربي.' },
      { title: 'كود معياري يسهل تطويره', desc: 'تنظيم ممتاز للملفات يسهل على أي فريق برمجي إضافة مزايا جديدة مستقبلاً.' }
    ],
    faqsEn: [
      { q: 'Can you convert our existing Figma designs into clean React code?', a: 'Yes. We deliver 100% pixel-perfect Figma to React/Tailwind code matching spacing, typography, and interactive hover states.' }
    ],
    faqsAr: [
      { q: 'هل يمكنكم تحويل تصاميم Figma الخاصة بنا إلى كود React نظيف؟', a: 'نعم، نحول ملفات Figma إلى كود React وTailwind بدقة 100% مع التزام تام بالمسافات والألوان وحالات التفاعل.' }
    ],
    relatedServices: ['backend-development', 'responsive-web-design', 'custom-software-development'],
    relatedArticles: ['what-is-wordpress', 'wordpress-website-development']
  },

  {
    slug: 'backend-development',
    categoryId: 'web-development',
    badgeEn: 'Back-End · APIs & Cloud Architecture',
    badgeAr: 'الأنظمة الخلفية · الـ API وقواعد البيانات',
    titleEn: 'Back-End Development & Server Architecture',
    titleAr: 'تطوير الأنظمة الخلفية وقواعد البيانات (Back-End)',
    headlineEn: 'Scalable REST/GraphQL APIs, Microservices, and Secure Cloud Database Architecture',
    headlineAr: 'برمجة واجهات برمجة التطبيقات (APIs)، الخوادم السحابية، وقواعد البيانات الآمنة',
    overviewEn: 'Robust server-side engineering: Node.js, Python, PHP, RESTful & GraphQL APIs, relational (PostgreSQL, MySQL) and NoSQL databases, message queues, and cloud security.',
    overviewAr: 'بناء وتطوير الأنظمة الخلفية للشركات: Node.js وPython وPHP، واجهات برمجة التطبيقات RESTful وGraphQL، قواعد بيانات MySQL وPostgreSQL، وطوابير المهام السحابية.',
    problemsEn: ['Slow database queries dragging the entire platform down', 'Unreliable APIs that fail under concurrent requests', 'Security vulnerabilities in authentication and data handling'],
    problemsAr: ['استعلامات قواعد بيانات بطيئة تسبب تجميد النظام بالكامل', 'واجهات API غير مستقرة تنهار عند زيادة عدد الطلبات المتزامنة', 'ثغرات أمنية في المصادقة ونقل البيانات والتحقق من المستخدمين'],
    targetEn: ['SaaS platforms requiring robust APIs', 'Mobile applications needing cloud backends', 'Enterprises integrating disparate software systems'],
    targetAr: ['المنصات السحابية ومشاريع الـ SaaS', 'تطبيقات الجوال التي تحتاج سيرفرات خلفية سريعة وآمنة', 'المؤسسات التي ترغب في ربط أنظمتها الداخلية ببعضها'],
    scopeEn: [
      { title: 'RESTful & GraphQL API Engineering', desc: 'Secure, documented endpoints with rate limiting, token authentication (JWT/OAuth), and validation.' },
      { title: 'Relational Database Optimization', desc: 'Schema normalization, indexing, query profiling, and connection pooling.' },
      { title: 'Asynchronous Task Processing', desc: 'Offloading background jobs, emails, and reporting via Redis and RabbitMQ.' },
      { title: 'Cloud Infrastructure & Microservices', desc: 'Docker containerization, NGINX reverse proxies, and automated deployment pipelines.' }
    ],
    scopeAr: [
      { title: 'برمجة واجهات RESTful وGraphQL APIs', desc: 'بناء نقاط اتصال آمنة وموثقة مع التحقق من الهوية (JWT/OAuth) وتحديد معدل الطلبات.' },
      { title: 'تصميم وتحسين قواعد البيانات', desc: 'هندسة الجداول والعلاقات، الفهرسة المتقدمة، وتحسين استعلامات الاسترجاع والفرز.' },
      { title: 'معالجة المهام غير المتزامنة (Queues)', desc: 'إدارة إرسال الإيميلات وتوليد التقارير في الخلفية عبر Redis وRabbitMQ.' },
      { title: 'البنية التحتية السحابية والحاويات', desc: 'نشر الأنظمة عبر Docker وحاويات معزولة مع خوادم NGINX للتحكم في التدفق.' }
    ],
    deliverablesEn: ['Production-Grade Back-End Architecture', 'Complete Interactive Swagger/OpenAPI Documentation', 'Optimized Database Schema & Migration Scripts', 'Automated Unit & Integration Test Suite', 'Deployment & Server Administration Guide'],
    deliverablesAr: ['بنية برمجية خلفية متكاملة وآمنة', 'توثيق تفاعلي كامل لواجهات الـ API عبر Swagger', 'مخطط قاعدة البيانات وسكربتات الترحيل الآلي', 'اختبارات برمجية شاملة للوظائف والربط', 'دليل إدارة الخوادم والنشر السحابي'],
    workflowEn: [
      { step: '01', title: 'Data Schema & API Design', desc: 'Modeling relational entities, authentication protocols, and endpoint contracts.' },
      { step: '02', title: 'Core Logic & Security Implementation', desc: 'Coding controllers, authorization middleware, and business logic.' },
      { step: '03', title: 'Database Indexing & Caching', desc: 'Configuring Redis caches and query profiling under concurrency.' },
      { step: '04', title: 'Containerization & Cloud Launch', desc: 'Dockerizing the application, setting up CI/CD, and live deployment.' }
    ],
    workflowAr: [
      { step: '01', title: 'تصميم هيكل البيانات والـ API', desc: 'رسم مخطط الكيانات والعلاقات، واختيار بروتوكولات الأمان والمصادقة.' },
      { step: '02', title: 'برمجة المنطق والوسائط البرمجية', desc: 'كتابة منطق العمل، فحص الصلاحيات، والتحقق الصارم من مدخلات المستخدم.' },
      { step: '03', title: 'فهرسة قواعد البيانات والتخزين المؤقت', desc: 'تفعيل كاش Redis وفحص سرعة استجابة الاستعلامات تحت الضغط.' },
      { step: '04', title: 'الحاويات والنشر السحابي', desc: 'تغليف النظام في حاويات Docker وإعداد خطوط النشر الآلي والتدشين.' }
    ],
    benefitsEn: [
      { title: 'Rock-Solid Scalability', desc: 'Engineered to handle exponential growth in users without architectural redesign.' },
      { title: 'Enterprise-Grade Security', desc: 'Comprehensive protection against injection, data leaks, and unauthorized access.' },
      { title: 'Seamless Client Support', desc: 'Powers web portals, iOS, and Android mobile apps from a single unified backend.' }
    ],
    benefitsAr: [
      { title: 'قابلية توسع هائلة', desc: 'بنية هندسية تستوعب النمو المتسارع في أعداد المستخدمين دون الحاجة لإعادة البناء.' },
      { title: 'حماية وأمان مؤسسي صارم', desc: 'تحصين كامل ضد الثغرات وتشفير البيانات الحساسة أثناء النقل والتخزين.' },
      { title: 'خدمة كافة المنصات', desc: 'سيرفر خلفي موحد يغذي موقع الويب وتطبيقات الأندرويد والـ iOS بكفاءة تامة.' }
    ],
    faqsEn: [
      { q: 'Which backend technology stack do you recommend for high scale?', a: 'For I/O-intensive real-time applications, Node.js/TypeScript with PostgreSQL and Redis. For data-intensive and ML workflows, Python with FastAPI. For corporate platforms, PHP 8+ with modern frameworks.' }
    ],
    faqsAr: [
      { q: 'ما هي التقنية الأنسب لنظامنا الخلفي؟', a: 'للتطبيقات السريعة واللحظية نوصي بـ Node.js/TypeScript مع PostgreSQL. للمشاريع المؤسسية وخدمات الويب نوصي بـ PHP 8 الحديثة. لمعالجة البيانات والذكاء الاصطناعي نوصي بـ Python وFastAPI.' }
    ],
    relatedServices: ['frontend-development', 'custom-software-development', 'database-development', 'api-integration'],
    relatedArticles: ['what-is-wordpress', 'wordpress-speed-optimization']
  },

  {
    slug: 'api-integration',
    categoryId: 'web-development',
    badgeEn: 'Integration · Middleware & Webhooks',
    badgeAr: 'التكامل · الربط البرمجي وواجهات الـ API',
    titleEn: 'API Integration & Middleware Development',
    titleAr: 'الربط البرمجي وتكامل الأنظمة وواجهات API',
    headlineEn: 'Connecting Disparate Software, Payment Gateways, ERPs, and Cloud Services',
    headlineAr: 'ربط ومكاملة الأنظمة والبرامج المختلفة وبوابات الدفع والمخازن في منظومة موحدة',
    overviewEn: 'Custom API integration services: connecting payment gateways (Mada, Apple Pay, Stripe), CRM/ERP systems (Salesforce, SAP, Zoho), SMS gateways, shipping couriers, and building reliable webhook event handlers.',
    overviewAr: 'خدمات الربط البرمجي المتكامل: ربط بوابات الدفع الإلكتروني، مزامنة أنظمة إدارة العملاء والـ ERP، بوابات الرسائل القصيرة، شركات الشحن والخدمات اللوجستية، وبرمجة أحداث Webhooks.',
    problemsEn: ['Manual data entry between disconnected software wasting hundreds of employee hours', 'Failed webhook notifications causing missed client orders', 'Lack of error logging leading to silent data synchronization failures'],
    problemsAr: ['إدخال البيانات يدوياً بين البرامج المختلفة وتكرار الأخطاء البشرية', 'فقدان إشعارات الطلبات لعدم استقرار أحداث الـ Webhooks', 'غياب سجلات الأخطاء وصعوبة تتبع أين توقفت عملية الربط'],
    targetEn: ['E-commerce merchants integrating logistics and accounting', 'Enterprises synchronizing customer data across departments', 'Companies linking custom websites to proprietary databases'],
    targetAr: ['المتاجر الإلكترونية الراغبة في أتمتة الشحن والفواتير والمخازن', 'الشركات التي تريد توحيد بيانات العملاء بين أقسام المبيعات والمحاسبة', 'المؤسسات التي ترغب في ربط موقعها بأنظمة برمجية داخلية'],
    scopeEn: [
      { title: 'Payment Gateway Connectors', desc: 'Implementing direct REST API integrations with Mada, Apple Pay, HyperPay, and Moyasar.' },
      { title: 'ERP & CRM Bi-Directional Sync', desc: 'Syncing contacts, invoices, deals, and inventory with Zoho, SAP, Odoo, and Salesforce.' },
      { title: 'Shipping & Logistics Automation', desc: 'Automating airway bill generation and live tracking updates via DHL, Aramex, and SMSA APIs.' },
      { title: 'Resilient Webhook & Queue Processing', desc: 'Building fault-tolerant webhook listeners with automatic retry logic and audit logs.' }
    ],
    scopeAr: [
      { title: 'موصلات بوابات الدفع الإلكتروني', desc: 'ربط مباشر مع بوابات الدفع (مدى، أبل باي، ميسر، هايبرباي) ومعالجة العمليات بأمان.' },
      { title: 'مزامنة ثنائية الاتجاه مع ERP وCRM', desc: 'نقل حركي للفواتير، العملاء، والمخزون مع أنظمة أودو، زوهو، ساب، وسيلزفورس.' },
      { title: 'أتمتة الشحن واللوجستيات', desc: 'إصدار بوالص الشحن وتتبع الشحنات لحظياً عبر APIs شركات الشحن (أرامكس، سمسا، سبل).' },
      { title: 'معالجة Webhooks المستقرة', desc: 'برمجة مستقبلات إشعارات آمنة تعيد المحاولة تلقائياً وتمنع تكرار أو فقدان البيانات.' }
    ],
    deliverablesEn: ['Custom API Integration Middleware', 'Automated Data Synchronization Architecture', 'Audit Logging & Error Alerting Dashboard', 'End-to-End Testing Documentation', 'API Maintenance & Credentials Security Guide'],
    deliverablesAr: ['برمجية وسيطة (Middleware) للربط والتكامل', 'نظام مزامنة البيانات التلقائي بين البرامج', 'لوحة مراقبة وتنبيهات الأخطاء اللحظية', 'توثيق شامل لسيناريوهات الفحص والربط', 'دليل صيانة وأمان مفاتيح الربط البرمجي'],
    workflowEn: [
      { step: '01', title: 'Endpoint & Payload Discovery', desc: 'Reviewing API specifications, rate limits, and authentication keys.' },
      { step: '02', title: 'Middleware & Logic Coding', desc: 'Building data mapping transformations and secure connectors.' },
      { step: '03', title: 'Edge Case & Failure Testing', desc: 'Simulating network timeouts, payload errors, and rate limit triggers.' },
      { step: '04', title: 'Production Rollout & Monitoring', desc: 'Activating live data pipelines with continuous health logging.' }
    ],
    workflowAr: [
      { step: '01', title: 'دراسة وثائق الـ API ونقاط الاتصال', desc: 'فحص شروط الربط، حدود الطلبات المسموحة، ومفاتيح المصادقة والتشفير.' },
      { step: '02', title: 'برمجة الوسيط وتحويل البيانات', desc: 'بناء المنطق البرمجي لمواءمة صيغ البيانات بين النظامين بدقة.' },
      { step: '03', title: 'اختبار حالات الخطأ وانقطاع الاتصال', desc: 'محاكاة انقطاع الإنترنت أو بطء الاستجابة لضمان إعادة المحاولة آلياً.' },
      { step: '04', title: 'الإطلاق المباشر والمراقبة', desc: 'تشغيل الربط الفعلي ومتابعة سجلات نقل البيانات على مدار الساعة.' }
    ],
    benefitsEn: [
      { title: 'Eliminate Manual Overhead', desc: 'Save hundreds of staff hours by automating data transfer across corporate systems.' },
      { title: 'Zero Data Discrepancies', desc: 'Bi-directional synchronization ensures real-time accuracy across all software.' },
      { title: 'Instant Customer Gratification', desc: 'Automated receipts, tracking codes, and access links delivered within seconds.' }
    ],
    benefitsAr: [
      { title: 'التخلص النهائي من الإدخال اليدوي', desc: 'توفير مئات ساعات العمل للموظفين ومنع الأخطاء البشرية في نقل البيانات.' },
      { title: 'تطابق تام وموثوق للبيانات', desc: 'مزامنة لحظية تجعل أرقام المخزون والمبيعات مطابقة في كافة الأنظمة فوراً.' },
      { title: 'خدمة فورية تنال رضا العملاء', desc: 'إصدار بوالص الشحن وتأكيد الطلبات وإرسال الفواتير للعميل في ثوانٍ معدودة.' }
    ],
    faqsEn: [
      { q: 'What happens if a third-party API service goes down?', a: 'Our middleware queues failed requests in Redis and executes automated retries with exponential backoff once the third-party service recovers, guaranteeing zero lost transactions.' }
    ],
    faqsAr: [
      { q: 'ماذا يحدث إذا توقف سيرفر الخدمة الخارجية عن العمل مؤقتاً؟', a: 'يحتفظ نظامنا الوسيط بالطلبات في طابور انتظار آمن (Redis Queue) ويعيد إرسالها تلقائياً فور عودة الخدمة للعمل دون فقدان أي بيانات.' }
    ],
    relatedServices: ['backend-development', 'custom-software-development', 'erp-system-development'],
    relatedArticles: ['what-is-wordpress', 'wordpress-speed-optimization']
  },

  {
    slug: 'technical-seo',
    categoryId: 'web-development',
    badgeEn: 'SEO · Crawlability & Indexing',
    badgeAr: 'السيو · الفهرسة والأرشفة التقنية',
    titleEn: 'Technical SEO & Search Architecture',
    titleAr: 'السيو التقني وهندسة أرشفة محركات البحث',
    headlineEn: 'Deep Technical Search Engine Optimization for Maximum Organic Indexation',
    headlineAr: 'تحسين بنية الموقع التقنية لتصدر نتائج بحث جوجل وفهرسة الصفحات بدون أخطاء',
    overviewEn: 'Technical SEO architecture: resolving crawl budget waste, schema structured data, canonicalization, hreflang multilingual routing, XML sitemaps, and Core Web Vitals optimization.',
    overviewAr: 'خدمات السيو التقني المتقدمة: تصحيح أخطاء الفهرسة، ترميز البيانات المنظمة (Schema.org JSON-LD)، ضبط وسوم الـ Canonical والـ Hreflang، وتحسين ميزانية الزحف لملايين الصفحات.',
    problemsEn: ['Pages not indexing on Google despite publishing quality content', 'Duplicate content penalties from poor URL parameters and canonicals', 'Crawl budget wasted on internal filter loops and broken 404 links'],
    problemsAr: ['عدم ظهور الصفحات في جوجل رغم جودة المحتوى المكتوب', 'عقوبات المحتوى المكرر بسبب غياب وسوم Canonical السليمة', 'إهدار ميزانية زحف عناكب جوجل في روابط تصفية معطلة وصفحات 404'],
    targetEn: ['E-commerce stores with faceted filters', 'News and media portals with massive archives', 'Corporate sites operating multilingual versions (AR/EN)'],
    targetAr: ['المتاجر الكبرى ذات الفلاتر وتصنيفات المنتجات المتعددة', 'المواقع الإخبارية والمجلات ذات الأرشيف الضخم', 'مواقع الشركات والمؤسسات ثنائية اللغة (عربي وإنجليزي)'],
    scopeEn: [
      { title: 'Crawl Budget & Architecture Audit', desc: 'Pruning low-value URLs, fixing broken redirect chains, and optimizing robots.txt.' },
      { title: 'Schema.org JSON-LD Structured Data', desc: 'Implementing Organization, Service, Product, FAQ, and BreadcrumbList schemas.' },
      { title: 'Multilingual Hreflang Mapping', desc: 'Configuring precise bidirectional hreflang tags for Arabic and English regional audiences.' },
      { title: 'Core Web Vitals Remediation', desc: 'Optimizing LCP, INP, and CLS scores directly for Google ranking signals.' }
    ],
    scopeAr: [
      { title: 'تدقيق بنية الزحف والروابط', desc: 'إصلاح سلاسل التحويلات الخاطئة، معالجة صفحات 404، وضبط ملف robots.txt بذكاء.' },
      { title: 'البيانات المنظمة (Schema.org JSON-LD)', desc: 'تطبيق ترميز المنتجات والخدمات والأسئلة الشائعة ومسارات التنقل للظهور بنتائج مميزة.' },
      { title: 'ضبط وسوم اللغات (Hreflang Tags)', desc: 'توجيه محركات البحث للنسخة المناسبة للمستخدم حسب لغته ومنطقته الجغرافية.' },
      { title: 'علاج مؤشرات Core Web Vitals', desc: 'تحسين مؤشرات سرعة التفاعل والاستقرار البصري لرفع تقييم الموقع في خوارزميات جوجل.' }
    ],
    deliverablesEn: ['Comprehensive Technical SEO Audit Report', 'Schema.org JSON-LD Implementation', 'Optimized Robots.txt & Dynamic XML Sitemap', 'Hreflang Multilingual Configuration', 'Google Search Console Clean Health Certificate'],
    deliverablesAr: ['تقرير تدقيق السيو التقني الشامل', 'تطبيق وتوثيق وسوم البيانات المنظمة Schema', 'ملف robots.txt وخريطة sitemap ديناميكية', 'إعداد كامل لوسوم اللغات المتعددة Hreflang', 'معالجة كافة تحذيرات وأخطاء Google Search Console'],
    workflowEn: [
      { step: '01', title: 'Deep Technical Crawl', desc: 'Simulating search engine crawlers with Screaming Frog across all pages.' },
      { step: '02', title: 'Issue Prioritization & Schema Code', desc: 'Writing customized JSON-LD structured data and fixing canonical tags.' },
      { step: '03', title: 'Server & Sitemap Configuration', desc: 'Updating robots directives and regenerating XML sitemaps.' },
      { step: '04', title: 'Search Console Validation', desc: 'Submitting fixes to Google Search Console and monitoring re-indexing.' }
    ],
    workflowAr: [
      { step: '01', title: 'الفحص التقني الشامل لعناكب الزحف', desc: 'فحص الموقع بأدوات احترافية لاكتشاف كافة الأخطاء والروابط المكسورة.' },
      { step: '02', title: 'كتابة وسوم Schema وتصحيح الروابط', desc: 'برمجة وسوم البيانات المنظمة وضبط الروابط الأساسية وتفادي التكرار.' },
      { step: '03', title: 'ضبط خرائط الموقع وملفات التوجيه', desc: 'تحديث ملف robots وخريطة sitemap.xml لتوجيه العناكب للصفحات الهامة فقط.' },
      { step: '04', title: 'التحقق عبر Search Console', desc: 'طلب إعادة فحص الروابط من جوجل ومتابعة تحسن الأرشفة في النتائج.' }
    ],
    benefitsEn: [
      { title: 'Faster Page Indexation', desc: 'New articles and products appear on Google search results within hours instead of weeks.' },
      { title: 'Rich Snippets in Search', desc: 'Stars, FAQs, and pricing data appear directly in search results, doubling click-through rates.' },
      { title: 'Protected Organic Visibility', desc: 'Shields your platform from algorithmic penalties caused by duplicate content.' }
    ],
    benefitsAr: [
      { title: 'أرشفة فورية للمحتوى والمنتجات', desc: 'ظهور مقالاتك ومنتجاتك الجديدة في نتائج بحث جوجل خلال ساعات قليلة.' },
      { title: 'نتائج بحث غنية ومميزة (Rich Snippets)', desc: 'ظهور الأسعار، التقييمات، والأسئلة الشائعة في جوجل، مما يضاعف النقرات.' },
      { title: 'حماية الموقع من خوارزميات العقاب', desc: 'تحصين موقعك ضد عقوبات المحتوى المكرر وأخطاء الفهرسة الفنية.' }
    ],
    faqsEn: [
      { q: 'What is the difference between On-Page SEO and Technical SEO?', a: 'On-Page SEO focuses on keywords, headings, and textual content. Technical SEO focuses on the underlying infrastructure: server response, code cleanliness, indexing directives, schema markup, and site architecture.' }
    ],
    faqsAr: [
      { q: 'ما الفرق بين السيو التقني (Technical SEO) وسيو المحتوى (On-Page SEO)؟', a: 'يركز سيو المحتوى على الكلمات المفتاحية وصياغة المقالات، بينما يركز السيو التقني على بنية الموقع التحتية: سرعة الخادم، ترميز Schema، خريطة الموقع، وتوجيه عناكب جوجل لفهرسة الصفحات بدون عوائق.' }
    ],
    relatedServices: ['wordpress-development', 'speed-optimization', 'seo-audits'],
    relatedArticles: ['wordpress-speed-optimization', 'what-is-wordpress']
  },

  {
    slug: 'responsive-web-design',
    categoryId: 'web-development',
    badgeEn: 'UI/UX · Fluid Cross-Platform',
    badgeAr: 'التصميم المتجاوب · لكافة الأجهزة',
    titleEn: 'Responsive Website Design & Mobile Optimization',
    titleAr: 'تصميم المواقع المتجاوبة وتحسين تجربة الجوال',
    headlineEn: 'Flawless Visual Presentation Across Smartphones, Tablets, Laptops, and 4K Displays',
    headlineAr: 'تصميم وتنسيق واجهات ويب انسيابية تتألق بدقة على جميع الشاشات والأجهزة الذكية',
    overviewEn: 'Mobile-first responsive design: fluid typographic scaling, adaptive touch-friendly UI elements, responsive SVG icons, zero layout shifts, and dedicated Arabic RTL layout mirroring.',
    overviewAr: 'تصميم مواقع انسيابية تركز على مستخدم الهاتف أولاً: خطوط متناسقة تتكيف مع حجم الشاشة، أزرار مريحة للمس، أيقونات متجهة فائقة الوضوح، ودعم أصيل ومتقن للغة العربية.',
    problemsEn: ['Websites looking broken or distorted on mobile screens', 'Tiny text forcing users to pinch and zoom frustratingly', 'Horizontal scrollbars ruining the browsing experience'],
    problemsAr: ['تشوه مظهر الموقع وأقسامه على شاشات الجوال', 'نصوص صغيرة تضطر الزائر للتكبير والتقريب المرهق', 'ظهور أشرطة تمرير أفقية مزعجة تعيق قراءة المحتوى'],
    targetEn: ['Any business or portal with over 50% mobile visitors', 'Retail e-commerce brands targeting smartphone shoppers', 'Corporate websites presenting credentials to mobile executives'],
    targetAr: ['كافة الأنشطة التي يتجاوز زوارها من الجوال 50%', 'المتاجر الإلكترونية التي تستهدف المتسوقين عبر الهواتف', 'الشركات التي يتصفح مدراؤها الموقع عبر الأجهزة الذكية والأيباد'],
    scopeEn: [
      { title: 'Mobile-First Fluid Grid System', desc: 'Building dynamic layouts using CSS Grid and Flexbox adapting smoothly to any resolution.' },
      { title: 'Adaptive Typography Scaling', desc: 'Utilizing CSS clamp() functions ensuring headings and body copy remain legible everywhere.' },
      { title: 'Touch-Target & Navigation Optimization', desc: 'Thumb-friendly touch targets (min 48px), sticky action bars, and smooth drawer menus.' },
      { title: 'High-DPI Retina Media Optimization', desc: 'Serving vector SVGs and responsive srcset imagery tailored to device pixel density.' }
    ],
    scopeAr: [
      { title: 'شبكة تصميم انسيابية (Fluid Grid)', desc: 'بناء تخطيطات مرنة باستخدام CSS Grid وFlexbox تتكيف مع أي مقاس شاشة تلقائياً.' },
      { title: 'أحجام خطوط ذكية ومتكيفة', desc: 'استخدام دوال التكيف البرمجية لضمان قراءة مريحة للنصوص دون الحاجة للتكبير.' },
      { title: 'أزرار وقوائم مخصصة للمس بالأصابع', desc: 'مساحات نقر مريحة (48px كحد أدنى) وقوائم جانبية ناعمة تفتح وتغلق بسلاسة.' },
      { title: 'وسائط متكيفة لشاشات Retina الفائقة', desc: 'استخدام أيقونات SVG وصور متعددة المقاسات (srcset) تعرض بأعلى وضوح دون ثقل.' }
    ],
    deliverablesEn: ['100% Mobile-Friendly Certified Design', 'Cross-Device Compatibility Suite (iOS, Android, Windows, Mac)', 'Touch-Optimized Interactive Elements', 'Native Arabic RTL Layout Configuration', 'Google Mobile-Friendly Test Pass Guarantee'],
    deliverablesAr: ['تصميم معتمد ومتوافق 100% مع الهواتف الذكية', 'فحص شامل على أنظمة iOS وأندرويد والكمبيوتر', 'عناصر تفاعلية مريحة للمس بالأصابع', 'ضبط دقيق لانعكاس الواجهة العربية RTL', 'اجتياز رسمي لاختبارات توافق الجوال من جوجل'],
    workflowEn: [
      { step: '01', title: 'Breakpoints & Device Mapping', desc: 'Defining responsive layout behavior across mobile, tablet, and desktop.' },
      { step: '02', title: 'Fluid CSS Engineering', desc: 'Coding responsive styles using modern Tailwind CSS utilities and custom media queries.' },
      { step: '03', title: 'Touch & Interaction Testing', desc: 'Auditing thumb reachability, gesture responsiveness, and form inputs.' },
      { step: '04', title: 'Multi-Device Validation & Launch', desc: 'Testing on physical iPhones, iPads, Galaxy phones, and desktop screens.' }
    ],
    workflowAr: [
      { step: '01', title: 'تحديد نقاط التجاوب والمقاسات', desc: 'تحديد سلوك وترتيب الأقسام على الجوال والتابلت والشاشات الكبيرة.' },
      { step: '02', title: 'البرمجة بالأكواد الانسيابية', desc: 'كتابة أكواد CSS متطورة تضمن مرونة تامة دون أي تكسر في التصميم.' },
      { step: '03', title: 'اختبار تجربة النقر واللمس', desc: 'فحص سهولة النقر، ملء النماذج، وانسيابية القوائم المنبثقة بالأصابع.' },
      { step: '04', title: 'الفحص على أجهزة حقيقية والإطلاق', desc: 'اختبار الموقع على مختلف أجهزة آيفون، جالاكسي، أيباد، ولابتوب.' }
    ],
    benefitsEn: [
      { title: 'Captures 100% of Mobile Audience', desc: 'Ensures mobile visitors convert just as effectively as desktop users.' },
      { title: 'Favored by Google Mobile-First Indexing', desc: 'Directly supports higher search engine rankings under Google’s mobile evaluation.' },
      { title: 'Superior Brand Elegance', desc: 'A clean, modern interface builds instant authority and credibility.' }
    ],
    benefitsAr: [
      { title: 'استثمار كامل لزوار الجوال', desc: 'ضمان تحويل المتصفحين من الهواتف إلى مشترين وعملاء بنفس كفاءة الكمبيوتر.' },
      { title: 'أولوية قصوى لدى خوارزميات جوجل', desc: 'موقعك يتوافق مع معيار Mobile-First Indexing الذي يفضله جوجل في الترتيب.' },
      { title: 'أناقة وفخامة تجذب العميل', desc: 'مظهر متناسق يعكس احترافية شركتك ويرفع من قيمة علامتك التجارية.' }
    ],
    faqsEn: [
      { q: 'Will my website look good on ultra-wide 4K desktop screens?', a: 'Yes. We implement maximum container widths and smart scaling so large monitors display balanced, elegant layouts without awkward stretching.' }
    ],
    faqsAr: [
      { q: 'هل سيبدو الموقع جميلاً على شاشات الكمبيوتر الكبيرة و4K؟', a: 'نعم، نحدد مساحات عرض قصوى ذكية تمنع تمدد العناصر بشكل مشوه، وتحافظ على توازن وجمال التصميم على أي شاشة.' }
    ],
    relatedServices: ['frontend-development', 'wordpress-development', 'speed-optimization'],
    relatedArticles: ['what-is-wordpress', 'how-to-choose-a-wordpress-theme']
  }
];

// Helper to fill remaining services with high-quality domain content programmatically
// Categories: software-systems, mobile-applications, tender-services, digital-marketing-seo, business-consulting
export function generateRemainingServices(): ServiceDef[] {
  const result: ServiceDef[] = [...ALL_SERVICES];

  const categoryDefaults: Record<string, { badgeEn: string; badgeAr: string }> = {
    'software-systems': { badgeEn: 'Enterprise · Software Architecture', badgeAr: 'الأنظمة المؤسسية · هندسة البرمجيات' },
    'mobile-applications': { badgeEn: 'Mobile · iOS & Android Engineering', badgeAr: 'تطبيقات الجوال · هندسة iOS وأندرويد' },
    'tender-services': { badgeEn: 'Tenders · Saudi Procurement & QA', badgeAr: 'المناقصات · حوكمة وضمان جودة العروض' },
    'digital-marketing-seo': { badgeEn: 'Growth · Data-Driven Marketing', badgeAr: 'التسويق الرقمي · استراتيجيات النمو المبنية على البيانات' },
    'business-consulting': { badgeEn: 'Consulting · Strategic Pre-Sales', badgeAr: 'الاستشارات · تطوير الأعمال وما قبل البيع' }
  };

  // List of remaining services
  const remainingDefs: Partial<ServiceDef>[] = [
    // --- CATEGORY 2: Software & Business Systems ---
    {
      slug: 'erp-system-development',
      categoryId: 'software-systems',
      titleEn: 'ERP System Development & Implementation',
      titleAr: 'تطوير وتطبيق أنظمة تخطيط الموارد المؤسسية (ERP)',
      headlineEn: 'Unified Enterprise Resource Planning Tailored for GCC Operations',
      headlineAr: 'بناء وتخصيص أنظمة ERP موحدة لإدارة العمليات والمخازن والمالية للشركات',
      overviewEn: 'Custom ERP engineering connecting accounting, human resources, supply chain, inventory, and sales into one unified, ZATCA-compliant enterprise software architecture.',
      overviewAr: 'تطوير وتخصيص أنظمة تخطيط موارد المؤسسات ERP: ربط الحسابات، الموارد البشرية، المخازن، سلاسل الإمداد، والمبيعات في نظام موحد متوافق مع هيئة الزكاة والضريبة (ZATCA).'
    },
    {
      slug: 'crm-development',
      categoryId: 'software-systems',
      titleEn: 'CRM Development & Sales Pipeline Engineering',
      titleAr: 'تطوير أنظمة إدارة علاقات العملاء (CRM)',
      headlineEn: 'Custom CRM Platforms to Automate Sales Pipelines and Client Retainers',
      headlineAr: 'بناء أنظمة CRM مخصصة لمتابعة مسارات المبيعات والعملاء وزيادة إغلاق الصفقات',
      overviewEn: 'Custom CRM development tracking lead lifecycles, automated proposal follow-ups, quotation generation, and deep communication history across sales teams.',
      overviewAr: 'بناء وتخصيص أنظمة إدارة علاقات العملاء CRM: متابعة العملاء المحتملين، أتمتة إرسال العروض ومتابعتها، سجل تفاعلات المبيعات، وتقارير أداء الفريق اللحظية.'
    },
    {
      slug: 'pos-development',
      categoryId: 'software-systems',
      titleEn: 'Point of Sale (POS) Systems Development',
      titleAr: 'تطوير أنظمة نقاط البيع والكاشير (POS)',
      headlineEn: 'Cloud & Offline-Ready POS Systems Compliant with Saudi ZATCA E-Invoicing',
      headlineAr: 'برمجة أنظمة نقاط بيع سحابية متوافقة مع الفوترة الإلكترونية السعودية (فاتورة)',
      overviewEn: 'Fast, secure retail and restaurant POS systems supporting barcode scanning, thermal printers, cash drawers, Mada payment terminals, and offline transaction buffering.',
      overviewAr: 'أنظمة نقاط بيع متطورة للمتاجر والمطاعم: طباعة الإيصالات، قراءة الباركود، الربط مع أجهزة مدى، والعمل دون إنترنت مع مزامنة المبيعات تلقائياً عند عودة الاتصال.'
    },
    {
      slug: 'hr-systems-development',
      categoryId: 'software-systems',
      titleEn: 'HR Management & Payroll Systems Development',
      titleAr: 'تطوير أنظمة الموارد البشرية والرواتب (HRMS)',
      headlineEn: 'Automated Payroll, Attendance, and Employee Lifecycle Governance',
      headlineAr: 'أتمتة إدارة شؤون الموظفين، مسيرات الرواتب (حماية الأجور WPS)، والإجازات',
      overviewEn: 'Custom HR platforms automating Saudi labor law compliance, Qiwa/Muqeem integration, Wage Protection System (WPS) payroll files, biometric attendance, and leave tracking.',
      overviewAr: 'بناء أنظمة موارد بشرية متوافقة مع نظام العمل السعودي: مسيرات الرواتب المتوافقة مع نظام حماية الأجور (WPS)، ربط البصمة، تتبع الإجازات، وتوثيق ملفات الموظفين إلكترونياً.'
    },
    {
      slug: 'inventory-systems-development',
      categoryId: 'software-systems',
      titleEn: 'Inventory & Warehouse Management Systems (WMS)',
      titleAr: 'تطوير أنظمة إدارة المخازن والمستودعات (WMS)',
      headlineEn: 'Multi-Warehouse Inventory Tracking with Real-Time Barcode & Serial Auditing',
      headlineAr: 'إدارة المستودعات وسلاسل الإمداد وتتبع حركة الأصناف بالأرقام التسلسلية والباركود',
      overviewEn: 'Cloud WMS platforms managing multi-location stock movements, FIFO/LIFO tracking, low-stock threshold alerts, batch expiry monitoring, and dispatch order routing.',
      overviewAr: 'أنظمة ذكية لإدارة المستودعات المتعددة: تتبع حركات الوارد والمنصرف، إدارة تواريخ الصلاحية والدفعات، تنبيهات نفاد المخزون، وأتمتة أذونات الصرف والتحويل بين الفروع.'
    },
    {
      slug: 'accounting-systems-development',
      categoryId: 'software-systems',
      titleEn: 'Accounting & Financial Software Development',
      titleAr: 'تطوير الأنظمة المحاسبية والمالية للشركات',
      headlineEn: 'Double-Entry Accounting & ZATCA Phase 2 E-Invoicing Compliance',
      headlineAr: 'برمجيات المحاسبة المؤسسية، قيود اليومية، والربط مع منظومة الفوترة الإلكترونية',
      overviewEn: 'Enterprise accounting software: general ledgers, accounts payable/receivable, automated bank reconciliation, financial statements (P&L, Balance Sheet), and ZATCA Phase 2 XML integration.',
      overviewAr: 'أنظمة محاسبية متكاملة: دفتر الأستاذ العام، ميزان المراجعة، الفواتير والسندات، القوائم المالية، والربط المباشر مع منصة (فاتورة) لهيئة الزكاة والضريبة والجمارك.'
    },
    {
      slug: 'project-management-systems',
      categoryId: 'software-systems',
      titleEn: 'Project Management & Task Tracking Systems',
      titleAr: 'تطوير أنظمة إدارة المشاريع والمهام المؤسسية',
      headlineEn: 'Collaborative Gantt, Kanban, and Milestone Tracking for Engineering Teams',
      headlineAr: 'منصات متابعة مشاريع المقاولات والتقنية وجداول التنفيذ ومؤشرات الإنجاز KPIs',
      overviewEn: 'Custom project governance platforms: task assignment, Gantt charts, milestone tracking, resource allocation, time logging, and automated client progress reporting.',
      overviewAr: 'أنظمة إدارة المشاريع: مخططات جانت التفاعلية، تتبع نسب الإنجاز، تخصيص الموارد والميزانيات، متابعة مهام الفريق، وإصدار تقارير دورية للإدارة والعملاء.'
    },
    {
      slug: 'custom-software-development',
      categoryId: 'software-systems',
      titleEn: 'Custom Software Development & Engineering',
      titleAr: 'تطوير البرمجيات والحلول الرقمية المخصصة',
      headlineEn: 'Architecting Tailored Digital Solutions for Unique Enterprise Business Models',
      headlineAr: 'تصميم وبرمجة أنظمة وحلول رقمية حصرية تلبي نماذج الأعمال الخاصة للمؤسسات',
      overviewEn: 'Bespoke software engineering built from scratch using modern web stacks: translating complex organizational logic into intuitive, secure, and cloud-native software platforms.',
      overviewAr: 'برمجة وتطوير حلول برمجية مخصصة من الصفر: تحويل العمليات الإدارية والتشغيلية الفريدة لمنشأتك إلى منصات برمجية سحابية متطورة توفر الوقت والجهد.'
    },
    {
      slug: 'database-development',
      categoryId: 'software-systems',
      titleEn: 'Database Architecture, Development & Tuning',
      titleAr: 'تصميم وهندسة قواعد البيانات وتحسين الأداء',
      headlineEn: 'High-Concurrency PostgreSQL, MySQL, and Redis Database Engineering',
      headlineAr: 'بناء وتأمين قواعد البيانات المؤسسية وفهرستها لاستيعاب ملايين السجلات بسرعة',
      overviewEn: 'Relational and NoSQL database architecture: schema normalization, query profiling, index optimization, connection pooling, automated replication, and failover clustering.',
      overviewAr: 'هندسة قواعد البيانات (PostgreSQL, MySQL): تحسين سرعة الاستعلامات، معالجة بطء استرجاع البيانات، النسخ المتطابق (Replication)، وتأمين البيانات من التلف والاختراق.'
    },
    {
      slug: 'api-development-integration',
      categoryId: 'software-systems',
      titleEn: 'API Development & Enterprise System Integration',
      titleAr: 'تطوير واجهات برمجة التطبيقات وربط الأنظمة المؤسسية',
      headlineEn: 'Building Secure REST and GraphQL Endpoints for B2B Data Exchange',
      headlineAr: 'برمجة واجهات APIs متطورة لتبادل البيانات وربط التطبيقات بالأنظمة المركزية',
      overviewEn: 'Standardized API development enabling seamless data exchange between web apps, mobile clients, and legacy ERPs with military-grade token authentication and rate limiting.',
      overviewAr: 'تطوير واجهات برمجة التطبيقات الآمنة لربط التطبيقات والمواقع بالخوادم المركزية، مع توثيق تقني متكامل وحماية مشددة للمعلومات المتبادلة.'
    },
    {
      slug: 'business-process-automation',
      categoryId: 'software-systems',
      titleEn: 'Business Process Automation (BPA) & Workflow Systems',
      titleAr: 'أتمتة العمليات الإدارية والتشغيلية (BPA)',
      headlineEn: 'Eliminating Redundant Manual Tasks with Intelligent Automated Workflows',
      headlineAr: 'أتمتة دورات الموافقات وسير العمل الداخلي لتقليل الهدر البشري وتسريع الإنجاز',
      overviewEn: 'Automating multi-step corporate workflows: document approval chains, automated invoice notifications, lead routing, and robotic process orchestration across cloud tools.',
      overviewAr: 'بناء مسارات أتمتة ذكية للشركات: دورات اعتماد الفواتير والطلبات، الإشعارات التلقائية للموظفين، وتكامل البرامج لإنجاز المعاملات دون تدخل بشري روتيني.'
    },

    // --- CATEGORY 3: Mobile Applications ---
    {
      slug: 'android-app-development',
      categoryId: 'mobile-applications',
      titleEn: 'Native Android Application Development',
      titleAr: 'تطوير وبرمجة تطبيقات الأندرويد الأصلية (Android)',
      headlineEn: 'High-Performance Kotlin Android Applications for Consumer & Enterprise Use',
      headlineAr: 'برمجة تطبيقات أندرويد فائقة السرعة بلغة Kotlin مع التوافق التام مع متجر Google Play',
      overviewEn: 'Native Android app engineering utilizing Kotlin, Jetpack Compose, Material 3 design, background services, offline SQLite caching, and Google Play Store deployment.',
      overviewAr: 'تطوير تطبيقات أندرويد أصلية (Native) بلغة Kotlin الحديثة: واجهات Material 3 تفاعلية، إشعارات فورية، دعم العمل بدون إنترنت، والامتثال لمتطلبات متجر جوجل بلاي.'
    },
    {
      slug: 'ios-app-development',
      categoryId: 'mobile-applications',
      titleEn: 'Native iOS Application Development',
      titleAr: 'تطوير وبرمجة تطبيقات الآيفون والآيباد (iOS)',
      headlineEn: 'Fluid, High-End Swift & SwiftUI iOS Applications Built for Apple Ecosystems',
      headlineAr: 'برمجة تطبيقات iOS فاخرة وسريعة بلغة Swift متوافقة مع أجهزة آبل ومتجر App Store',
      overviewEn: 'Native iOS application development utilizing Swift, SwiftUI, Apple Pay integration, push notifications, Face ID authentication, and Apple App Store review compliance.',
      overviewAr: 'بناء تطبيقات آيفون أصلية بلغة Swift وSwiftUI: دعم أبل باي، تسجيل الدخول ببصمة الوجه (Face ID)، إشعارات Push لحظية، والالتزام بمعايير النشر الصارمة لشركة آبل.'
    },
    {
      slug: 'cross-platform-app-development',
      categoryId: 'mobile-applications',
      titleEn: 'Cross-Platform Mobile App Development (Flutter & React Native)',
      titleAr: 'تطوير التطبيقات الهجينة متعددة المنصات (Flutter وReact Native)',
      headlineEn: 'Single Codebase Delivering Native-Level Experience on Both iOS & Android',
      headlineAr: 'بناء تطبيق موحد يعمل بكفاءة تامة على أجهزة آيفون وأندرويد بأقل تكلفة ووقت',
      overviewEn: 'Cost-effective cross-platform engineering with Flutter and React Native: shared business logic, high-performance rendering engines, and simultaneous releases on App Store and Google Play.',
      overviewAr: 'تطوير تطبيقات الجوال بكود برمجي موحد عبر Flutter وReact Native: توفير تكاليف التطوير، سرعة في التحديثات، وأداء ممتاز لا يختلف عن التطبيقات الأصلية.'
    },
    {
      slug: 'business-mobile-applications',
      categoryId: 'mobile-applications',
      titleEn: 'Business & Enterprise Mobile Applications',
      titleAr: 'تطوير تطبيقات الجوال لقطاع الأعمال والشركات',
      headlineEn: 'Mobile Field Operations, Employee Portals, and Executive Dashboards',
      headlineAr: 'تطبيقات جوال مخصصة للمناديب، فرق العمل الميدانية، ومتابعة العمليات لحظياً',
      overviewEn: 'Enterprise mobile applications: field service tracking, delivery driver navigation, warehouse barcode scanning, mobile approvals for executives, and secure VPN connections.',
      overviewAr: 'تطبيقات مخصصة لفرق العمل الميدانية: تتبع المناديب، مسح الشحنات في المستودعات، لوحات تحكم للمدراء، واعتماد المعاملات الإدارية والمشتريات من الجوال مباشرة.'
    },
    {
      slug: 'ecommerce-mobile-applications',
      categoryId: 'mobile-applications',
      titleEn: 'E-Commerce Mobile Application Development',
      titleAr: 'تطوير تطبيقات المتاجر الإلكترونية والتسوق',
      headlineEn: 'Fast Shopping Mobile Apps Integrated with Mada, Apple Pay, and Push Notifications',
      headlineAr: 'تطبيقات تسوق ذكية للهواتف ترفع ولاء العملاء وتضاعف معدلات الشراء المتكرر',
      overviewEn: 'Dedicated retail shopping apps: personalized product recommendations, one-tap Apple Pay and Mada checkout, order tracking, and push notification marketing campaigns.',
      overviewAr: 'تحويل متجرك الإلكتروني إلى تطبيق جوال سريع: دفع بنقرة واحدة، إشعارات ترويجية مباشرة على شاشة العميل بالعروض، وتجربة تصفح أسرع بمراحل من المتصفح.'
    },
    {
      slug: 'mobile-ui-ux-design',
      categoryId: 'mobile-applications',
      titleEn: 'Mobile UI/UX Design & Prototyping',
      titleAr: 'تصميم واجهات وتجربة مستخدم تطبيقات الجوال (UI/UX)',
      headlineEn: 'Intuitive, Thumb-Friendly Mobile Prototypes Grounded in User Research',
      headlineAr: 'تصميم واجهات تطبيقات تفاعلية على Figma تضمن سهولة الاستخدام والانسيابية',
      overviewEn: 'Mobile design architecture: user personas, interactive clickable Figma prototypes, Arabic RTL design guidelines, component design systems, and usability testing.',
      overviewAr: 'تصميم تجربة مستخدم وتصاميم واجهات لتطبيقات الهواتف: نماذج تفاعلية قابلة للنقر على Figma، مراعاة حركة إبهام اليد، وتصميم عناصر تزيد من تفاعل وبقاء المستخدم.'
    },
    {
      slug: 'mobile-app-maintenance',
      categoryId: 'mobile-applications',
      titleEn: 'Mobile Application Maintenance & SLA Support',
      titleAr: 'صيانة وتحديث تطبيقات الجوال والدعم المستمر',
      headlineEn: 'Continuous OS Compatibility, Bug Patching, and Store Version Submissions',
      headlineAr: 'تحديث التطبيقات لتوافق إصدارات iOS وAndroid الجديدة وحل المشكلات التقنية',
      overviewEn: 'Proactive mobile app support: updating SDK dependencies, addressing new iOS/Android OS version requirements, crash analytics monitoring, and API synchronization.',
      overviewAr: 'خدمات الصيانة الدورية لتطبيقات الجوال: تحديث الحزم البرمجية لتوافق أحدث إصدارات آبل وجوجل، مراقبة وحل أخطاء التوقف (Crashes)، وتحديثات الأمان الدورية.'
    },

    // --- CATEGORY 4: Tender & Proposal Services ---
    {
      slug: 'tender-proposal-writing',
      categoryId: 'tender-services',
      titleEn: 'Tender & Technical Proposal Writing',
      titleAr: 'إعداد وكتابة العروض الفنية للمناقصات',
      headlineEn: 'Winning Technical Bids Tailored to Government & Corporate RFP Criteria',
      headlineAr: 'صياغة عروض فنية تنافسية متكاملة تحقق أعلى الدرجات في لجان التقييم الفني',
      overviewEn: 'Comprehensive proposal writing for technology, infrastructure, and consulting tenders: technical methodologies, staffing plans, risk management, and executive summaries.',
      overviewAr: 'إعداد وكتابة العروض الفنية التنافسية لمناقصات التقنية والمقاولات: صياغة المنهجية الفنية، خطط التنفيذ، هياكل فرق العمل، وضمان استيفاء كافة كراسات الشروط.'
    },
    {
      slug: 'technical-proposal-preparation',
      categoryId: 'tender-services',
      titleEn: 'Technical Proposal Preparation & Engineering',
      titleAr: 'إعداد وتجهيز ملفات العرض الفني التخصصية',
      headlineEn: 'Deep Technical Architecture and Methodologies Aligned with RFP Specifications',
      headlineAr: 'بناء المنهجيات الفنية المعمقة وتجهيز الملاحق الهندسية الداعمة للعطاء',
      overviewEn: 'Authoring specialized technical narratives, system architecture blueprints, deployment roadmaps, and SLA frameworks that prove execution capability to tender committees.',
      overviewAr: 'إعداد الأقسام التخصصية في العرض الفني: المخططات الهندسية، معايير الأمن والسرية، مسارات تنفيذ المشروع، وإثبات الكفاءة الفنية للجنة الفحص والعطاءات.'
    },
    {
      slug: 'financial-proposal-preparation',
      categoryId: 'tender-services',
      titleEn: 'Financial Proposal & BOQ Preparation',
      titleAr: 'إعداد العروض المالية وجداول الكميات والأسعار (BOQ)',
      headlineEn: 'Precise Cost Breakdown and Compliant Pricing Schedules for Tenders',
      headlineAr: 'تسعير دقيق وجداول كميات متوافقة تضمن الربحية والتنافسية دون أخطاء حسابية',
      overviewEn: 'Structuring compliant financial proposals: Bill of Quantities (BOQ) validation, unit pricing breakdowns, cash flow curves, and total cost of ownership presentations.',
      overviewAr: 'إعداد العروض المالية للمناقصات: تدقيق جداول الكميات والأسعار، تفصيل التكاليف المباشرة وغير المباشرة، وحساب هوامش الربح لتفادي أي استبعاد مالي.'
    },
    {
      slug: 'tender-document-analysis',
      categoryId: 'tender-services',
      titleEn: 'Tender Document & RFP In-Depth Analysis',
      titleAr: 'تحليل وثائق وكراسات الشروط للمناقصات (RFP)',
      headlineEn: 'Deconstructing Complex Tender Portfolios to Extract Every Mandatory Condition',
      headlineAr: 'التفكيك والتحليل الدقيق لكراسة الشروط والمواصفات لاستخراج الشروط الإلزامية',
      overviewEn: 'Rigorous analysis of RFP documents: identifying disqualification traps, extracting mandatory scope items, clarifying ambiguity, and preparing vendor inquiry requests.',
      overviewAr: 'قراءة وتحليل كراسات الشروط الحكومية والخاصة: استخراج الشروط الإلزامية التي يترتب على إغفالها الاستبعاد، وتجهيز خطابات الاستفسار الفني للجهة المالكة.'
    },
    {
      slug: 'rfp-analysis',
      categoryId: 'tender-services',
      titleEn: 'RFP (Request for Proposal) Breakdown & Strategy',
      titleAr: 'تحليل طلبات تقديم العروض (RFP Analysis)',
      headlineEn: 'Systematic Evaluation of Client Objectives, Scope, and Evaluation Rubrics',
      headlineAr: 'تحليل معايير التقييم وأهداف العميل وتحديد نقاط القوة التنافسية للعرض',
      overviewEn: 'Deep-dive evaluation of RFP requirements: mapping scope items against company capabilities, identifying scoring weightings, and formulating winning differentiators.',
      overviewAr: 'دراسة وتحليل وثائق الـ RFP وتفكيك متطلبات المشروع، وتحديد أوزان درجات التقييم الفني لصياغة ردود تحقق الدرجة الكاملة في كل معيار.'
    },
    {
      slug: 'rfq-analysis',
      categoryId: 'tender-services',
      titleEn: 'RFQ (Request for Quotation) Rapid Assessment',
      titleAr: 'تحليل طلبات عروض الأسعار (RFQ Analysis)',
      headlineEn: 'Fast-Track Specifications Matching and Pricing Frameworks for Commercial RFQs',
      headlineAr: 'مطابقة المواصفات الفنية السريعة وإعداد عروض الأسعار لطلبات الشراء العاجلة',
      overviewEn: 'Accelerated RFQ response workflows: validating product specifications, delivery lead times, supplier commitments, and structured commercial quotation letters.',
      overviewAr: 'إعداد الردود الفنية والمالية السريعة على طلبات عروض الأسعار (RFQ): مطابقة المواصفات القياسية، جداول التوريد والتسليم، وتجهيز العرض خلال أوقات قياسية.'
    },
    {
      slug: 'rfi-analysis',
      categoryId: 'tender-services',
      titleEn: 'RFI (Request for Information) Positioning Strategy',
      titleAr: 'إعداد طلبات إبداء الاهتمام والمعلومات (RFI)',
      headlineEn: 'Pre-Tender Vendor Positioning and Solutions Capability Statements',
      headlineAr: 'بناء ملفات القدرات والتأهيل المسبق للتأثير الإيجابي على صياغة كراسة الشروط',
      overviewEn: 'Formulating strategic RFI responses: demonstrating vendor maturity, guiding prospective client specifications, and securing shortlisting for forthcoming tenders.',
      overviewAr: 'إعداد ردود استراتيجية على طلبات جمع المعلومات (RFI): استعراض خبرات وقدرات المنشأة للتأهيل المسبق والمساهمة في رسم المواصفات قبل طرح المناقصة رسمياً.'
    },
    {
      slug: 'scope-of-work-analysis',
      categoryId: 'tender-services',
      titleEn: 'Scope of Work (SOW) Analysis & Gap Identification',
      titleAr: 'تحليل نطاق العمل (SOW) وتحديد الفجوات التعاقدية',
      headlineEn: 'Clarifying Ambiguities, Dependencies, and Hidden Responsibilities in SOWs',
      headlineAr: 'تحديد المسؤوليات والالتزامات الدقيقة ومنع المفاجآت أو التكاليف غير المحسوبة',
      overviewEn: 'Comprehensive breakdown of Scope of Work clauses: clarifying deliverables boundaries, out-of-scope assumptions, third-party dependencies, and contractual liabilities.',
      overviewAr: 'تحليل بنود نطاق العمل (SOW) وتحديد ما يقع على عاتق المقاول وما يقع على الجهة، ووضع الافتراضات الفنية التي تحمي الشركة قانونياً ومالياً أثناء التنفيذ.'
    },
    {
      slug: 'tender-requirements-extraction',
      categoryId: 'tender-services',
      titleEn: 'Tender Requirements Extraction & Traceability',
      titleAr: 'استخراج متطلبات المناقصة وجدولة الالتزامات',
      headlineEn: 'Zero-Leakage Requirements Inventory Extracted from Multi-Volume RFPs',
      headlineAr: 'حصر وفهرسة كافة المتطلبات والشروط لضمان تغطيتها بنسبة 100% في ملف العرض',
      overviewEn: 'Creating complete requirements registries: assigning ownership across technical, legal, and commercial teams, ensuring every single clause receives a compliant response.',
      overviewAr: 'استخراج وتصنيف جميع المتطلبات من كراسة الشروط في سجل موحد، وتوزيعها على مسؤولي الفرق لضمان عدم إغفال أي شرط أو مستند إلزامي.'
    },
    {
      slug: 'tender-compliance-matrix',
      categoryId: 'tender-services',
      titleEn: 'Tender Compliance Matrix Preparation',
      titleAr: 'إعداد مصفوفة الامتثال للمناقصات (Compliance Matrix)',
      headlineEn: 'Zero-Defect Clause-by-Clause Compliance Traceability Matrices',
      headlineAr: 'بناء مصفوفة امتثال شاملة بنداً ببند لتسهيل فحص العرض وضمان القبول التام',
      overviewEn: 'Authoring definitive compliance matrices: cross-referencing RFP clauses against proposal chapters, demonstrating 100% full compliance with verified proof references.',
      overviewAr: 'إعداد مصفوفة الامتثال الفني الدقيقة: جدول تقاطعي يربط كل بند في كراسة الشروط برقم الصفحة والفقرة في عرضك الفني لإثبات الاستيفاء التام للجنة الفحص.'
    },
    {
      slug: 'tender-quality-assurance',
      categoryId: 'tender-services',
      titleEn: 'Tender Quality Assurance (QA) & Audit',
      titleAr: 'ضمان جودة وتدقيق ملفات المناقصات (Tender QA)',
      headlineEn: 'Rigorous Multi-Tier Quality Audits Preventing Disqualification & Rejections',
      headlineAr: 'تدقيق شامل لملفات العرض الفني والمالي لمنع أي أخطاء شكلية أو استبعاد إلزامي',
      overviewEn: 'Independent quality assurance review: validating formatting, cross-checking signatures, verifying bank guarantee wording, and inspecting mandatory documentation checklists.',
      overviewAr: 'مراجعة وتدقيق جودة ملفات العطاء بالكامل: فحص سلامة الخطابات والضمان البنكي، اكتمال التواقيع والأختام، والتحقق من سلامة الترقيم لتفادي أي استبعاد إجرائي.'
    },
    {
      slug: 'technical-compliance-review',
      categoryId: 'tender-services',
      titleEn: 'Technical Compliance Review & Gap Audits',
      titleAr: 'مراجعة الامتثال الفني وتدقيق الفجوات',
      headlineEn: 'Pre-Submission Technical Verification Against Every RFP Specification',
      headlineAr: 'فحص مطابقة الحلول التقنية المقترحة مع المواصفات الفنية المطلوبة في الكراسة',
      overviewEn: 'Critical technical review ensuring that proposed technologies, architectures, and methodologies strictly satisfy the performance standards specified in the tender.',
      overviewAr: 'مراجعة هندسية دقيقة للعرض الفني ومطابقة مواصفات الأجهزة والبرمجيات مع متطلبات الكراسة للتأكد من عدم وجود أي تحفظ فني يضعف تقييم العطاء.'
    },
    {
      slug: 'red-team-proposal-review',
      categoryId: 'tender-services',
      titleEn: 'Red Team Proposal Review & Scoring Simulation',
      titleAr: 'مراجعة العروض بفريق Red Team ومحاكاة لجان التقييم',
      headlineEn: 'Simulated Tender Evaluation Committee Review to Maximize Scoring',
      headlineAr: 'محاكاة واقعية لاجتماعات لجان التقييم لاكتشاف نقاط الضعف ورفع الدرجات',
      overviewEn: 'Objective Red Team review mimicking the buyer’s tender evaluation committee: scoring proposals against published criteria, identifying weak sections, and polishing arguments.',
      overviewAr: 'مراجعة حيادية صارمة تحاكي تقييم لجان فحص العروض: تقييم العرض وفق درجات المعايير، رصد الثغرات ونقاط الضعف، وإعادة صياغتها لضمان تصدر التقييم.'
    },
    {
      slug: 'tender-gap-analysis',
      categoryId: 'tender-services',
      titleEn: 'Tender Gap Analysis & Remediation Strategy',
      titleAr: 'تحليل الفجوات في متطلبات المناقصة وخطة معالجتها',
      headlineEn: 'Pinpointing Missing Certifications, Profiles, and Capabilities Before Deadline',
      headlineAr: 'اكتشاف النواقص والشهادات المطلوبة مبكراً وسد الفجوات بالتحالفات والبدائل',
      overviewEn: 'Early-stage gap identification: identifying missing vendor certifications, team qualifications, or technical components, and formulating joint-venture or mitigation plans.',
      overviewAr: 'تحديد الفجوات بين إمكانيات شركتك وشروط الكراسة في وقت مبكر: اقتراح التحالفات الاستراتيجية (Consortium) أو توفير البدائل الفنية المعتمدة قبل موعد التسليم.'
    },
    {
      slug: 'bid-no-bid-assessment',
      categoryId: 'tender-services',
      titleEn: 'Bid / No-Bid Strategic Assessment & Feasibility',
      titleAr: 'تقييم قرار التقدم للمناقصة (Bid / No-Bid Assessment)',
      headlineEn: 'Data-Driven Win Probability and Commercial Viability Analysis',
      headlineAr: 'دراسة جدوى المناقصة وحساب احتمالية الفوز لتفادي إهدار موارد الشركة',
      overviewEn: 'Objective decision matrix assessing customer relationship, competitive landscape, technical alignment, delivery risk, and profit margins to determine whether to bid.',
      overviewAr: 'نموذج تقييم علمي لاتخاذ قرار التقدم للمناقصة من عدمه: تقييم فرص الفوز، هوامش الربحية، المخاطر التشغيلية، وحماية موارد الشركة من المناقصات الخاسرة.'
    },
    {
      slug: 'technical-evaluation-criteria-analysis',
      categoryId: 'tender-services',
      titleEn: 'Technical Evaluation Criteria Analysis & Point Optimization',
      titleAr: 'تحليل معايير التقييم الفني وهندسة حصد النقاط',
      headlineEn: 'Structuring Proposal Content to Capture Maximum Points Across Evaluation Rubrics',
      headlineAr: 'صياغة العرض الفني بما يضمن الحصول على أعلى الدرجات في كل معيار تقييم',
      overviewEn: 'Analyzing technical scoring matrices: reverse-engineering proposal sections to align directly with scoring rubrics and ensuring evaluators award maximum marks.',
      overviewAr: 'تحليل دقيق لأوزان درجات التقييم الفني: توجيه فصول العرض الفني للإجابة المباشرة على بنود استمارة التقييم مما يسهل على المقيم منحك الدرجة الكاملة.'
    },
    {
      slug: 'qualification-criteria-analysis',
      categoryId: 'tender-services',
      titleEn: 'Qualification & Mandatory Criteria Analysis',
      titleAr: 'تحليل شروط التأهيل والمعايير الإلزامية للمناقصات',
      headlineEn: 'Verifying Compliance with Turnovers, Classifications, and Experience Thresholds',
      headlineAr: 'تدقيق شروط التأهيل المالي والفني والتصنيف وسابقة الأعمال لمنع الاستبعاد',
      overviewEn: 'Auditing mandatory qualification requirements: financial turnover thresholds, contractor classifications, minimum project experience values, and key personnel certifications.',
      overviewAr: 'فحص استيفاء شروط التأهيل المسبق: الحدود الدنيا للإيرادات المالية، درجة تصنيف المقاولين، سنوات الخبرة، وشهادات الكوادر المطلوبة بدقة تامة.'
    },
    {
      slug: 'tender-risk-assessment',
      categoryId: 'tender-services',
      titleEn: 'Tender Risk Assessment & Mitigation Planning',
      titleAr: 'تقييم مخاطر المناقصات وإعداد خطط الحد منها',
      headlineEn: 'Proactive Identification of Contractual, Operational, and Financial Tender Risks',
      headlineAr: 'تحديد المخاطر التشغيلية والمالية والتعاقدية وصياغة خطة السيطرة عليها',
      overviewEn: 'Contractual and delivery risk assessments: analyzing penalty clauses, liquidated damages, payment milestone delays, currency risks, and preparing mitigation narratives.',
      overviewAr: 'إعداد مصفوفة إدارة المخاطر للمشروع: حصر مخاطر التوريد، غرامات التأخير، تقلبات الأسعار، وصياغة خطة استباقية لمعالجتها لتعزيز ثقة العميل.'
    },
    {
      slug: 'executive-summary-writing',
      categoryId: 'tender-services',
      titleEn: 'Executive Summary Writing for Tenders & Proposals',
      titleAr: 'صياغة الملخص التنفيذي للعروض والمناقصات',
      headlineEn: 'High-Impact Opening Summaries That Win the Minds of Executive Decision-Makers',
      headlineAr: 'كتابة ملخص تنفيذي مقنع يبرز القيمة التنافسية ويخاطب صناع القرار والقياديين',
      overviewEn: 'Authoring persuasive executive summaries: articulating core value propositions, direct strategic alignment with the client’s vision, and clear reasons to select your firm.',
      overviewAr: 'صياغة الملخص التنفيذي الاحترافي: تلخيص الحلول الفنية والمالية بأسلوب جذاب يقنع لجان البت والقيادات العليا باختيار شركتك خلال دقائق من القراءة.'
    },
    {
      slug: 'technical-methodology-development',
      categoryId: 'tender-services',
      titleEn: 'Technical Methodology Development',
      titleAr: 'تطوير وصياغة المنهجية الفنية للتنفيذ',
      headlineEn: 'Robust Implementation Frameworks Demonstrating Operational Excellence',
      headlineAr: 'بناء منهجية عمل هندسية تفصيلية تثبت جاهزية الشركة وقدرتها على التنفيذ',
      overviewEn: 'Developing bespoke project execution methodologies: agile, waterfall, or hybrid frameworks, quality control procedures, governance models, and delivery roadmaps.',
      overviewAr: 'صياغة المنهجية الفنية الشاملة لتنفيذ المشروع: مراحل العمل، آليات ضمان الجودة، أدوات إدارة ومتابعة الأداء، ومخططات توضح سير العمليات بدقة.'
    },
    {
      slug: 'implementation-plan-preparation',
      categoryId: 'tender-services',
      titleEn: 'Implementation Plan & Project Execution Roadmap',
      titleAr: 'إعداد خطة التنفيذ والمسار الزمني للمشروع',
      headlineEn: 'Detailed Phasing, Resource Allocation, and Milestone Delivery Schedules',
      headlineAr: 'تجهيز خطة تنفيذ تفصيلية تشمل المراحل ونقاط التفتيش والتسليمات المرحلية',
      overviewEn: 'Structuring comprehensive implementation plans: phase breakdowns, mobilization schedules, milestone handovers, and dependencies mapped into clear execution narratives.',
      overviewAr: 'بناء خطة التنفيذ الميداني للمشروع: خطة التجهيز والحشد (Mobilization)، مراحل التنفيذ، نقاط الاعتماد المرحلية، وآليات تسليم المخرجات للجهة المالكة.'
    },
    {
      slug: 'project-timeline-preparation',
      categoryId: 'tender-services',
      titleEn: 'Project Timeline & Work Breakdown Structure (WBS)',
      titleAr: 'إعداد الجدول الزمني وهيكل تفكيك العمل (WBS)',
      headlineEn: 'Gantt Charts and Critical Path Analysis Demonstrating Realistic Timelines',
      headlineAr: 'جداول زمنية تفصيلية ومخططات جانت وحساب المسار الحرج (Critical Path)',
      overviewEn: 'Developing professional project schedules: Work Breakdown Structure (WBS) dictionaries, Gantt charts, critical path calculations, and contingency buffers.',
      overviewAr: 'إعداد الجدول الزمني للمشروع وفق منهجيات إدارة المشاريع: تفكيك الأعمال (WBS)، تحديد المسار الحرج (CPM)، ومخططات زمنية تثبت واقعية المدة المقترحة.'
    },
    {
      slug: 'deliverables-acceptance-criteria',
      categoryId: 'tender-services',
      titleEn: 'Deliverables & Acceptance Criteria Documentation',
      titleAr: 'توثيق المخرجات ومعايير الاستلام والفحص',
      headlineEn: 'Clear Objective Quality Acceptance Benchmarks Protecting Both Parties',
      headlineAr: 'تحديد مخرجات المشروع بدقة وصياغة معايير القبول والاستلام لمنع الخلافات',
      overviewEn: 'Documenting clear project deliverables: defining tangible acceptance criteria, testing protocols, review cycle durations, and sign-off handover mechanisms.',
      overviewAr: 'توثيق قائمة مخرجات المشروع بدقة: تحديد شروط ومعايير الفحص والاستلام، نماذج الاعتماد، وآليات التعامل مع الملاحظات بما يضمن سرعة تحصيل المستخلصات.'
    },
    {
      slug: 'sla-kpi-documentation',
      categoryId: 'tender-services',
      titleEn: 'SLA (Service Level Agreement) & KPI Documentation',
      titleAr: 'توثيق اتفاقيات مستوى الخدمة ومؤشرات الأداء (SLA & KPIs)',
      headlineEn: 'Clear Metrics, Response Times, and Penalty Governance Frameworks',
      headlineAr: 'صياغة اتفاقيات مستوى الخدمة وأوقات الاستجابة ومؤشرات قياس الأداء بدقة',
      overviewEn: 'Structuring enterprise SLAs and KPIs: defining ticket severity tiers, response and resolution times, uptime percentages, and transparent performance dashboards.',
      overviewAr: 'صياغة اتفاقيات مستوى الخدمة (SLA): تحديد مستويات الأعطال، أوقات الاستجابة والإصلاح، نسب التوافر، ومؤشرات قياس الأداء (KPIs) المتوافقة مع متطلبات الكراسة.'
    },
    {
      slug: 'raci-matrix-preparation',
      categoryId: 'tender-services',
      titleEn: 'RACI Matrix Preparation & Responsibility Governance',
      titleAr: 'إعداد مصفوفة المسؤوليات (RACI Matrix)',
      headlineEn: 'Unambiguous Accountability Across Client, Vendor, and Subcontractor Teams',
      headlineAr: 'تحديد المسؤوليات والأدوار بين فريق العمل والجهة المالكة لمنع التضارب',
      overviewEn: 'Creating comprehensive RACI matrices: designating who is Responsible, Accountable, Consulted, and Informed for every single project activity and deliverable.',
      overviewAr: 'بناء مصفوفة RACI لجميع أنشطة المشروع: توضيح من هو المسؤول عن التنفيذ، من يعتمد المخرج، من يُستشار، ومن يُبلغ، لضمان حوكمة إدارية واضحة.'
    },
    {
      slug: 'team-structure-documentation',
      categoryId: 'tender-services',
      titleEn: 'Project Team Structure & CV Documentation',
      titleAr: 'هيكلة فريق العمل وتوثيق السير الذاتية المهنية',
      headlineEn: 'Demonstrating Key Personnel Qualification Matching RFP Requirements',
      headlineAr: 'تنظيم الهيكل التنظيمي للمشروع وتجهيز السير الذاتية والشهادات وفق الشروط',
      overviewEn: 'Documenting team qualifications: project organizational charts, role descriptions, and tailoring expert CVs to highlight exact mandatory certifications and experience years.',
      overviewAr: 'إعداد الهيكل التنظيمي لفريق المشروع: رسم المخطط الهيكلي، وتنسيق السير الذاتية للمهندسين والاستشاريين وإبراز الشهادات والخبرات المطابقة لشروط الكراسة.'
    },
    {
      slug: 'company-experience-documentation',
      categoryId: 'tender-services',
      titleEn: 'Company Experience & Track Record Documentation',
      titleAr: 'توثيق سابقة الأعمال والخبرات المؤسسية المشابهة',
      headlineEn: 'Compelling Case Studies and Completion Certificates Proving Proven Capability',
      headlineAr: 'صياغة وإبراز سابقة المشاريع المنجزة وشهادات الإنجاز وحسن التنفيذ باحترافية',
      overviewEn: 'Curating authoritative project track records: selecting relevant past projects, presenting quantifiable scale metrics, and formatting client completion certificates.',
      overviewAr: 'توثيق سابقة أعمال الشركة: اختيار المشاريع المشابهة لطبيعة المناقصة، توضيح القيمة وحجم الإنجاز، وإرفاق شهادات إتمام الأعمال المعتمدة لتعزيز ثقة اللجنة.'
    },
    {
      slug: 'etimad-tender-support',
      categoryId: 'tender-services',
      titleEn: 'Saudi Etimad Platform Bidding & Submission Support',
      titleAr: 'دعم وتقديم المناقصات عبر منصة اعتماد السعودية',
      headlineEn: 'End-to-End Governance for Saudi Government Tenders on Etimad Portal',
      headlineAr: 'إدارة متكاملة لعمليات التقديم والرفع الفني والمالي عبر منصة اعتماد الحكومية',
      overviewEn: 'Specialized support for Saudi government procurement on Etimad: tender purchasing, electronic inquiries, digital proposal packaging, bank guarantee verification, and bid opening tracking.',
      overviewAr: 'إدارة وتنسيق التقديم على المناقصات الحكومية السعودية عبر منصة اعتماد: شراء الكراسة، رفع الاستفسارات، تجهيز الملفات الرقمية، فحص الضمان، ومتابعة فتح المظاريف.'
    },
    {
      slug: 'saudi-government-tenders',
      categoryId: 'tender-services',
      titleEn: 'Saudi Government Tenders Compliance & Documentation',
      titleAr: 'امتثال وثائق المناقصات الحكومية السعودية (نظام المشتريات الحكومية)',
      headlineEn: 'Aligning Proposals with the Saudi Government Tenders & Procurement Law',
      headlineAr: 'مطابقة العروض مع نظام المناقصات والمشتريات الحكومية ولائحته التنفيذية',
      overviewEn: 'Full alignment with the Saudi Government Tenders and Procurement Law: local content requirements, mandatory list compliance, small and medium enterprises preferences, and standard contract formats.',
      overviewAr: 'مواءمة العروض مع نظام المناقصات والمشتريات الحكومية ولائحته التنفيذية: متطلبات المحتوى المحلي، القائمة الإلزامية للمنتجات الوطنية، وأفضليات المنشآت الصغيرة والمتوسطة.'
    },
    {
      slug: 'it-software-tender-consulting',
      categoryId: 'tender-services',
      titleEn: 'IT & Software Tender Consulting Services',
      titleAr: 'استشارات مناقصات مشاريع تقنية المعلومات والبرمجيات',
      headlineEn: 'Specialized Technical Advisory for High-Value Digital Transformation RFPs',
      headlineAr: 'استشارات متخصصة لمناقصات التحول الرقمي، البنية التحتية السحابية، والبرمجيات',
      overviewEn: 'Expert guidance on large IT and software tenders: architecture solutioning, cloud hosting sizing, cybersecurity compliance (NCA standards), and vendor selection advisory.',
      overviewAr: 'استشارات فنية متقدمة لمناقصات قطاع التقنية والتحول الرقمي: هندسة الحلول السحابية، معايير الأمن السيبراني (NCA)، وتحديد المواصفات لضمان الفوز بالمشروع.'
    },

    // --- CATEGORY 5: Digital Marketing & SEO ---
    {
      slug: 'on-page-seo',
      categoryId: 'digital-marketing-seo',
      titleEn: 'On-Page SEO Optimization',
      titleAr: 'تحسين السيو الداخلي للمحتوى والصفحات (On-Page SEO)',
      headlineEn: 'Aligning Content, Headings, and Internal Links with Search Intent',
      headlineAr: 'تهيئة محتوى الصفحات والعناوين والروابط الداخلية لتصدر نتائج البحث العضوية',
      overviewEn: 'Comprehensive on-page optimization: keyword mapping, title and meta description crafting, heading hierarchy (H1-H6), internal linking architecture, and image alt text optimization.',
      overviewAr: 'تحسين المحتوى الداخلي للمواقع: استهداف الكلمات المفتاحية بدقة، صياغة العناوين والوصف الجذاب للنقر، توزيع العناوين الفرعية، وتطوير شبكة الروابط الداخلية.'
    },
    {
      slug: 'off-page-seo',
      categoryId: 'digital-marketing-seo',
      titleEn: 'Off-Page SEO & Authority Building',
      titleAr: 'السيو الخارجي وبناء السلطة والمصداقية (Off-Page SEO)',
      headlineEn: 'High-Quality Backlink Acquisition and Digital Brand Authority Building',
      headlineAr: 'بناء الروابط الخلفية القوية وتنمية موثوقية النطاق (Domain Authority)',
      overviewEn: 'Strategic off-page SEO: digital PR campaigns, authoritative editorial mentions, brand citation building, and disavowing toxic spam backlinks to elevate domain rank.',
      overviewAr: 'استراتيجيات السيو الخارجي وبناء الروابط الخلفية: العلاقات العامة الرقمية، النشر في المنصات الموثوقة، وتوثيق استشهادات العلامة التجارية لرفع ترتيب الموقع.'
    },
    {
      slug: 'seo-audits',
      categoryId: 'digital-marketing-seo',
      titleEn: 'Comprehensive SEO Audits & Health Inspections',
      titleAr: 'التدقيق الشامل لمواقع الويب وفحص صحة السيو (SEO Audits)',
      headlineEn: 'Detailed Forensic Diagnosis of Every Technical and Content Barrier Holding Back Traffic',
      headlineAr: 'تشخيص دقيق لكافة العوائق التقنية ومشاكل المحتوى التي تعطل نمو زيارات الموقع',
      overviewEn: 'Exhaustive site audits: analyzing crawlability, mobile responsiveness, Core Web Vitals, duplicate content, thin pages, indexing errors, and delivering actionable fix checklists.',
      overviewAr: 'فحص مجهري متكامل للموقع: تحليل أخطاء الزحف والفهرسة، سرعة الصفحات، فحص جودة المحتوى، وتقديم تقرير مفصل بخطة عمل واضحة لعلاج كافة المشاكل.'
    },
    {
      slug: 'keyword-research',
      categoryId: 'digital-marketing-seo',
      titleEn: 'Keyword Research & Search Intent Mapping',
      titleAr: 'بحوث الكلمات المفتاحية وتحليل نية البحث للمستخدمين',
      headlineEn: 'Uncovering High-Value Commercial Search Queries That Drive Paying Customers',
      headlineAr: 'اكتشاف الكلمات المفتاحية التجارية التي يبحث بها العملاء المستعدون للشراء',
      overviewEn: 'Data-driven search query research: identifying commercial and transactional keywords, analyzing competitor rankings, search volumes, and mapping keywords to dedicated service pages.',
      overviewAr: 'دراسة متقدمة لسلوك البحث في مجالك: استخراج الكلمات التجارية الأكثر بحثاً، تحليل كلمات المنافسين، وتوزيعها على صفحات الموقع لجذب عملاء جادين.'
    },
    {
      slug: 'seo-content-strategy',
      categoryId: 'digital-marketing-seo',
      titleEn: 'SEO Content Strategy & Topic Clustering',
      titleAr: 'استراتيجية محتوى السيو وبناء المجموعات الموضوعية (Topic Clusters)',
      headlineEn: 'Establishing Dominant Topical Authority Through Comprehensive Content Hubs',
      headlineAr: 'بناء استراتيجية محتوى متكاملة تجعل موقعك المرجع الأول لمحركات البحث في تخصصك',
      overviewEn: 'Designing authoritative content architectures: pillar pages, supporting topic clusters, educational articles, and editorial calendars that drive sustained organic growth.',
      overviewAr: 'بناء هيكل المحتوى التثقيفي: الصفحات المرجعية الأساسية (Pillar Pages)، المقالات الداعمة، وجدول نشر دوري يستهدف بناء سلطة موضوعية كاملة أمام جوجل.'
    },
    {
      slug: 'website-indexing-optimization',
      categoryId: 'digital-marketing-seo',
      titleEn: 'Website Indexing & Google Search Console Optimization',
      titleAr: 'تحسين أرشفة وفهرسة المواقع في Google Search Console',
      headlineEn: 'Resolving Discovered - Currently Not Indexed and Crawl Errors Fast',
      headlineAr: 'حل مشكلات الروابط المستبعدة وغير المؤرشفة وتسريع فهرسة صفحات الموقع',
      overviewEn: 'Direct Google Search Console remediation: resolving indexing exclusions, fixing soft 404s, diagnosing JavaScript rendering barriers, and automating XML sitemap submissions.',
      overviewAr: 'علاج مشكلات الفهرسة في Google Search Console: معالجة الصفحات المستبعدة، صفحات الخطأ، وتسهيل قراءة نصوص جافاسكريبت لضمان أرشفة كامل صفحات الموقع.'
    },
    {
      slug: 'social-media-management',
      categoryId: 'digital-marketing-seo',
      titleEn: 'Corporate Social Media Management',
      titleAr: 'إدارة حسابات التواصل الاجتماعي للشركات والمؤسسات',
      headlineEn: 'Engaging, Authoritative Brand Presence Across LinkedIn, X, and Instagram',
      headlineAr: 'إدارة وتنمية الحسابات المؤسسية بصناع محتوى محترف وتفاعل مستمر مع الجمهور',
      overviewEn: 'Full-service social media management: content writing, executive thought leadership on LinkedIn, community engagement, brand monitoring, and monthly growth analytics.',
      overviewAr: 'إدارة الحسابات الرقمية للمؤسسات: كتابة المنشورات المهنية، بناء حضور تنفيذي قوي على لينكد إن ومنصة إكس، التفاعل مع المتابعين، ورفع الوعي بالعلامة التجارية.'
    },
    {
      slug: 'social-media-content-planning',
      categoryId: 'digital-marketing-seo',
      titleEn: 'Social Media Content Planning & Editorial Calendars',
      titleAr: 'تخطيط المحتوى الرقمي والجداول التحريرية لمنصات التواصل',
      headlineEn: 'Strategic Visual and Textual Content Roadmaps Aligned with Business Milestones',
      headlineAr: 'إعداد خطط المحتوى الشهرية والتقويم التحريري لضمان النشر المستمر والمنظم',
      overviewEn: 'Developing structured editorial calendars: thematic pillars, campaign-specific assets, video script outlines, and scheduled posting roadmaps optimized for each network.',
      overviewAr: 'تصميم جداول النشر الشهرية: تحديد ركائز المحتوى (تثقيفي، ترويجي، تفاعلي)، كتابة نصوص البوستات، وأفكار التصاميم والفيديوهات لضمان ظهور متواصل ومؤثر.'
    },
    {
      slug: 'digital-marketing-strategy',
      categoryId: 'digital-marketing-seo',
      titleEn: 'Integrated Digital Marketing Strategy',
      titleAr: 'بناء استراتيجيات التسويق الرقمي المتكاملة',
      headlineEn: 'Omnichannel Growth Roadmaps Combining SEO, Content, and Paid Acquisition',
      headlineAr: 'رسم خطط تسويق رقمي شاملة تجمع بين تحسين السيو، الإعلانات، وصناعة المحتوى',
      overviewEn: 'Holistic digital marketing planning: customer persona definition, competitor gap analysis, multi-channel budget allocation, and clear KPI dashboards for executive leadership.',
      overviewAr: 'تطوير استراتيجية تسويق رقمي متكاملة: دراسة رحلة العميل، تحديد القنوات الأكثر ربحية، توزيع الميزانيات الإعلانية، وقياس العائد على الاستثمار التسويقي (ROI).'
    },
    {
      slug: 'advertising-campaign-management',
      categoryId: 'digital-marketing-seo',
      titleEn: 'Paid Advertising Campaign Management (PPC & Paid Social)',
      titleAr: 'إدارة الحملات الإعلانية الممولة (PPC & Paid Social)',
      headlineEn: 'High-ROI Ad Campaigns on Google Ads, Snapchat, TikTok, and Meta',
      headlineAr: 'إدارة احترافية للإعلانات الممولة على جوجل وسناب شات وتيك توك لتحقيق أعلى مبيعات',
      overviewEn: 'Data-driven paid media execution: Google Search & Performance Max ads, targeted Snapchat/TikTok campaigns, continuous A/B creative testing, and ROAS optimization.',
      overviewAr: 'إدارة الحملات الإعلانية المدفوعة: إعلانات بحث جوجل (Google Search Ads)، حملات سناب شات وتيك توك، استهداف دقيق للجمهور، وتحسين مستمر لتقليل تكلفة الشراء.'
    },

    // --- CATEGORY 6: Business Development & Consulting ---
    {
      slug: 'business-development-consulting',
      categoryId: 'business-consulting',
      titleEn: 'Business Development Consulting & Market Expansion',
      titleAr: 'استشارات تطوير الأعمال والتوسع التجاري',
      headlineEn: 'Strategic Growth Advisory for Technology, Contracting, and Professional Services',
      headlineAr: 'استشارات استراتيجية لتوسيع الحصة السوقية وزيادة المبيعات والعقود للشركات',
      overviewEn: 'Strategic advisory for corporate expansion: market entry assessments into the Saudi and GCC markets, B2B partner ecosystems, sales enablement, and commercial positioning.',
      overviewAr: 'استشارات نمو وتطوير الأعمال: دراسة فرص التوسع في السوق السعودي والخليجي، بناء التحالفات التجارية، تطوير استراتيجيات المبيعات، وتأهيل الشركات للمشاريع الكبرى.'
    },
    {
      slug: 'it-pre-sales-support',
      categoryId: 'business-consulting',
      titleEn: 'IT Pre-Sales Consulting & Solution Engineering',
      titleAr: 'استشارات ما قبل البيع لقطاع التقنية (IT Pre-Sales)',
      headlineEn: 'Bridging Business Requirements and Technical Architecture to Close Enterprise Deals',
      headlineAr: 'هندسة الحلول التقنية وتقديم العروض التوضيحية لإقناع العملاء وإغلاق الصفقات',
      overviewEn: 'Dedicated IT pre-sales engineering: client discovery workshops, scoping technical architectures, authoring commercial Statements of Work (SOW), and delivering client demonstrations.',
      overviewAr: 'دعم فرق المبيعات بالاستشارات الهندسية: حضور اجتماعات العملاء، فهم المتطلبات التقنية، تصميم الحلول المقترحة، وإعداد نطاق العمل الدقيق لإغلاق الصفقات الكبرى.'
    },
    {
      slug: 'solution-consulting',
      categoryId: 'business-consulting',
      titleEn: 'Enterprise Solution Consulting & Digital Architecture',
      titleAr: 'استشارات هندسة الحلول الرقمية المؤسسية',
      headlineEn: 'Evaluating and Designing Modern Software Ecosystems Aligned with Corporate Strategy',
      headlineAr: 'تقييم وتصميم البنى التقنية والأنظمة السحابية الداعمة للأهداف الاستراتيجية',
      overviewEn: 'Guiding corporate decision-makers through technology modernization: vendor selection, build vs buy assessments, cloud migration strategies, and enterprise software architecture.',
      overviewAr: 'مساعدة الإدارات العليا في اختيار وتصميم الأنظمة التقنية المناسبة: المفاضلة بين شراء البرمجيات أو بنائها، خطط التحول السحابي، والتأكد من توافق الأنظمة مع أهداف النمو.'
    },
    {
      slug: 'opportunity-assessment',
      categoryId: 'business-consulting',
      titleEn: 'Commercial Opportunity Assessment & Feasibility Studies',
      titleAr: 'دراسة وتقييم الفرص التجارية والمشاريع الاستثمارية',
      headlineEn: 'Data-Driven Validation of New Market Ventures, RFPs, and Commercial Contracts',
      headlineAr: 'تحليل دقيق للفرص والمشاريع قبل الاستثمار لحساب الجدوى والعائد المالي المتوقع',
      overviewEn: 'Comprehensive commercial opportunity assessment: market size evaluation, competitor benchmarking, cost vs revenue modeling, regulatory risk profiling, and go/no-go recommendations.',
      overviewAr: 'دراسة وتقييم الفرص والمناقصات الكبرى: دراسة حجم السوق، تحليل المنافسين، حساب التكاليف المتوقعة مقابل الأرباح، وتقديم تقرير حاسم للإدارة للمضي قدماً أو الاعتذار.'
    },
    {
      slug: 'bid-no-bid-support',
      categoryId: 'business-consulting',
      titleEn: 'Strategic Bid / No-Bid Governance Support',
      titleAr: 'حوكمة وتوجيه قرار التقدم للعطاءات (Bid / No-Bid)',
      headlineEn: 'Protecting Corporate Resources by Qualifying Tenders with Rigorous Win Metrics',
      headlineAr: 'حماية موارد الشركة بتطبيق معايير علمية صارمة للموافقة على المناقصات ذات الجدوى',
      overviewEn: 'Implementing formal Bid/No-Bid governance: establishing executive scoring frameworks, analyzing competitive positioning, and eliminating low-margin, high-risk tender pursuits.',
      overviewAr: 'وضع وتطبيق سياسات حوكمة التقدم للمناقصات: تدريب فرق العمل على تقييم العطاءات، حجب المناقصات غير المجدية، والتركيز على الفرص التي تمتلك فيها الشركة ميزة تنافسية حقيقية.'
    },
    {
      slug: 'business-process-analysis',
      categoryId: 'business-consulting',
      titleEn: 'Business Process Analysis & Operational Mapping',
      titleAr: 'تحليل وتوثيق العمليات المؤسسية وهندستها (BPM)',
      headlineEn: 'Eliminating Operational Bottlenecks Through Rigorous Process Optimization',
      headlineAr: 'رسم وتحليل مسارات العمل واكتشاف نقاط الهدر لتحسين الكفاءة والإنتاجية',
      overviewEn: 'End-to-end business process re-engineering: process flow diagramming (BPMN), bottleneck identification, organizational role clarification, and preparation for digital automation.',
      overviewAr: 'إعادة هندسة العمليات الإدارية والتشغيلية: رسم مخططات تدفق الإجراءات (BPMN)، حصر نقاط التأخير والازدواجية، وإعداد وتوثيق أدلة السياسات والإجراءات المعيارية للشركة.'
    }
  ];

  // Populate remaining services with rich standard data
  for (const def of remainingDefs) {
    if (result.some(s => s.slug === def.slug)) {
      continue; // already defined
    }
    const cat = categoryDefaults[def.categoryId!] || { badgeEn: 'Professional Service', badgeAr: 'خدمة احترافية' };
    const fullService: ServiceDef = {
      slug: def.slug!,
      categoryId: def.categoryId!,
      badgeEn: cat.badgeEn,
      badgeAr: cat.badgeAr,
      titleEn: def.titleEn!,
      titleAr: def.titleAr!,
      headlineEn: def.headlineEn!,
      headlineAr: def.headlineAr!,
      overviewEn: def.overviewEn!,
      overviewAr: def.overviewAr!,
      problemsEn: [
        'Unclear technical specifications causing delays and cost overruns',
        'Lack of specialized in-house expertise leading to compliance risks',
        'Inefficient manual processes draining senior team productivity',
        'Difficulty demonstrating proven capability to procurement committees'
      ],
      problemsAr: [
        'غموض المتطلبات الفنية مما يسبب تأخير الإنجاز وزيادة التكاليف',
        'غياب الخبرة المتخصصة محلياً مما يوقع المنشأة في مخاطر عدم الامتثال',
        'الاعتماد على الإجراءات اليدوية البطيئة واستنزاف وقت الإدارة',
        'صعوبة إثبات الكفاءة الفنية والتميز أمام لجان الفحص والعملاء'
      ],
      targetEn: [
        'Corporate enterprises and growth companies',
        'Government contractors and service vendors',
        'Technology startups and system integrators',
        'Executive decision-makers and procurement leads'
      ],
      targetAr: [
        'الشركات والمؤسسات الطامحة للنمو والتوسع',
        'المقاولون ومزودو الخدمات للقطاعين الحكومي والخاص',
        'الشركات التقنية ومطورو الحلول الرقمية',
        'المدراء التنفيذيون ومسؤولو المشتريات وتطوير الأعمال'
      ],
      scopeEn: [
        { title: 'Needs Assessment & Scope Definition', desc: 'Detailed discovery sessions identifying objectives, constraints, and baseline requirements.' },
        { title: 'Technical Architecture & Solutioning', desc: 'Developing customized frameworks, documented workflows, and structured specifications.' },
        { title: 'Implementation & Quality Assurance', desc: 'Executing deliverables with rigorous quality control, reviews, and compliance checkpoints.' },
        { title: 'Handover & Knowledge Transfer', desc: 'Comprehensive documentation, operational guidelines, and executive team debriefing.' }
      ],
      scopeAr: [
        { title: 'دراسة وتحليل الاحتياجات بدقة', desc: 'جلسات استشارية لتحديد الأهداف والاشتراطات الفنية والنظامية للمشروع.' },
        { title: 'بناء الحلول والمنهجيات المخصصة', desc: 'تصميم مسارات العمل وتوثيق المواصفات والمعايير التنفيذية بدقة عالية.' },
        { title: 'التنفيذ وضمان الجودة والمطابقة', desc: 'إعداد وتجهيز المخرجات مع تطبيق أعلى معايير التدقيق والامتثال.' },
        { title: 'التسليم النهائي ونقل المعرفة', desc: 'تسليم الوثائق والملفات المكتملة وتدريب وتوجيه فريق العمل الداخلي.' }
      ],
      deliverablesEn: [
        'Complete Professional Deliverables Package',
        'Quality Assurance & Compliance Verification Report',
        'Executive Summary & Operational Roadmap',
        'Detailed Documentation & Best Practices Guide',
        'Dedicated Technical & Advisory Support'
      ],
      deliverablesAr: [
        'حزمة المخرجات والوثائق المهنية المعتمدة',
        'تقرير ضمان الجودة والامتثال للمواصفات',
        'الملخص التنفيذي وخارطة الطريق التشغيلية',
        'دليل الإرشادات وأفضل الممارسات الموثقة',
        'جلسات دعم استشاري ومتابعة فنية متخصصة'
      ],
      workflowEn: [
        { step: '01', title: 'Discovery & Requirements', desc: 'Reviewing initial brief, constraints, and success metrics.' },
        { step: '02', title: 'Strategy & Solution Design', desc: 'Drafting structured methodologies, architectures, and draft deliverables.' },
        { step: '03', title: 'Execution & Quality Audit', desc: 'Developing final outputs and running multi-tier quality checks.' },
        { step: '04', title: 'Final Delivery & Sign-Off', desc: 'Delivering production assets, executive presentation, and support.' }
      ],
      workflowAr: [
        { step: '01', title: 'تحليل المتطلبات والهدف', desc: 'دراسة المتطلبات وتحديد مؤشرات النجاح والاشتراطات الإلزامية.' },
        { step: '02', title: 'إعداد الخطة وتصميم الحلول', desc: 'بناء مسودات العمل، المنهجيات الفنية، ومراجعتها مع العميل.' },
        { step: '03', title: 'التنفيذ والتدقيق المتقدم', desc: 'صياغة المخرجات النهائية وتطبيق فحص الجودة الشامل بنداً ببند.' },
        { step: '04', title: 'التسليم والاعتماد النهائي', desc: 'تسليم الملفات الرسمية وتقديم التوصيات والدعم المستمر.' }
      ],
      benefitsEn: [
        { title: 'Guaranteed Quality & Compliance', desc: 'Built to strict industry standards eliminating rejection and operational risks.' },
        { title: 'Accelerated Time to Market', desc: 'Structured execution saves weeks of internal trial and error.' },
        { title: 'Command Higher Win Rates', desc: 'Elevates your company’s professional image during high-stakes evaluations.' }
      ],
      benefitsAr: [
        { title: 'جودة معتمدة وامتثال تام', desc: 'مخرجات متوافقة مع الأنظمة والمعايير القياسية لمنع أي مخاطر أو استبعاد.' },
        { title: 'توفير الوقت وتسريع الإنجاز', desc: 'منهجية واضحة تختصر أسابيع من التخبط والمحاولات العشوائية.' },
        { title: 'رفع نسب الفوز والقبول', desc: 'تعزيز ثقة لجان الفحص والعملاء في قدرات منشأتك الاحترافية.' }
      ],
      faqsEn: [
        { q: 'How does your service integrate with our internal team?', a: 'We work as an extension of your leadership and technical staff, collaborating through clear milestone reviews and structured handoffs.' },
        { q: 'Is client confidentiality protected?', a: 'Yes. All engagements are safeguarded by strict mutual non-disclosure agreements (NDAs) and encrypted data management.' }
      ],
      faqsAr: [
        { q: 'كيف يتم التنسيق والعمل مع فريقنا الداخلي؟', a: 'نعمل كشريك استشاري وامتداد لفريقك، من خلال اجتماعات متابعة واضحة ونماذج مراجعة معتمدة لكل مرحلة.' },
        { q: 'هل تضمنون سرية بيانات ومعلومات الشركة؟', a: 'نعم، نلتزم باتفاقيات سرية المعلومات (NDA) الصارمة وتشفير كافة الوثائق والملفات المتبادلة.' }
      ],
      relatedServices: ['tender-proposal-writing', 'tender-compliance-matrix', 'business-development-consulting', 'technical-seo'],
      relatedArticles: ['what-is-wordpress', 'wordpress-speed-optimization']
    };
    result.push(fullService);
  }

  return result;
}
