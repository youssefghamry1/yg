/// <reference types="node" />
import fs from 'fs';
import path from 'path';
import { ServiceDef } from './servicesData.js';
import { ArArticleItem, ArArticleSection } from './arArticlesTypes.js';
import { AR_PROGRESSIVE_GUIDES_PART1 } from './arProgressiveGuidesPart1.js';
import { AR_PROGRESSIVE_GUIDES_PART2 } from './arProgressiveGuidesPart2.js';
import { buildAll111EnglishArticles } from './enArticlesCatalog.js';
import { WORDPRESS_ARTICLES } from './articlesDataPart1.js';
import { shopifyArticles, opencartArticles } from './articlesDataEcommerce.js';
import { joomlaArticles, drupalArticles } from './articlesDataCms.js';
import { sallaArticles, zidArticles } from './articlesDataSaudi.js';
import { reactArticles, nodeArticles, angularArticles } from './articlesDataTech.js';
import { PLATFORM_ARTICLES } from './articlesData.js';
import { ArticleItem, ArticleDef as LegacyWpArticleDef } from './types.js';

export const AR_ARTICLE_TRACKS: { key: string; label: string; icon: string }[] = [
  { key: 'tenders', label: 'المناقصات ومنصة اعتماد', icon: '🏛️' },
  { key: 'wordpress', label: 'ووردبريس (WordPress)', icon: '🌐' },
  { key: 'shopify', label: 'شوبيفاي (Shopify)', icon: '🛍️' },
  { key: 'drupal', label: 'دروبال (Drupal)', icon: '💧' },
  { key: 'magento', label: 'ماجنتو (Magento)', icon: '🏪' },
  { key: 'joomla', label: 'جوملا (Joomla)', icon: '🧩' },
  { key: 'opencart', label: 'أوبن كارت (OpenCart)', icon: '🛒' },
  { key: 'salla', label: 'منصة سلة (Salla)', icon: '🇸🇦' },
  { key: 'zid', label: 'منصة زد (Zid)', icon: '⚡' },
  { key: 'angular', label: 'أنجولار (Angular)', icon: '🅰️' },
  { key: 'react', label: 'ريأكت (React.js)', icon: '⚛️' },
  { key: 'node', label: 'نود جي إس (Node.js)', icon: '🟢' },
  { key: 'javascript', label: 'منظومة JS وTypeScript', icon: '🟨' },
  { key: 'php', label: 'PHP والأنظمة الخلفية', icon: '🐘' },
  { key: 'ai', label: 'الذكاء الاصطناعي (AI)', icon: '🤖' },
  { key: 'modern-stack', label: 'الويب الحديث والسحابة', icon: '☁️' },
  { key: 'releases', label: 'الإصدارات الرسمية', icon: '🚀' }
];

export function normalizeArTrackKey(rawKey: string): string {
  const k = rawKey.toLowerCase().trim();
  if (k === 'reactjs') return 'react';
  if (k === 'nodejs') return 'node';
  return k;
}

function getArTrackLabel(key: string): string {
  const norm = normalizeArTrackKey(key);
  const found = AR_ARTICLE_TRACKS.find((t) => t.key === norm);
  return found ? found.label : 'الهندسة البرمجية والتقنية';
}

function localizeArReadTime(raw: string | undefined): string {
  if (!raw) return '8 دقائق قراءة';
  if (/[\u0600-\u06FF]/.test(raw)) return raw;
  const numMatch = raw.match(/\d+/);
  const mins = numMatch ? parseInt(numMatch[0], 10) : 8;
  return mins >= 3 && mins <= 10 ? `${mins} دقائق قراءة` : `${mins} دقيقة قراءة`;
}

const SERVICE_SLUG_ALIASES: Record<string, string> = {
  'shopify-store-development': 'shopify-development',
  'drupal-cms-development': 'drupal-development',
  'joomla-cms-development': 'joomla-development',
  'opencart-store-development': 'opencart-development',
  'magento-store-development': 'magento-development'
};

interface TenderGuideArMeta {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  summary: string;
  badge: string;
  readTime: string;
  relatedServiceSlug: string;
  faqs: { q: string; a: string }[];
}

const TENDER_GUIDES_AR_META: Record<string, TenderGuideArMeta> = {
  'what-is-a-tender-and-rfp': {
    slug: 'what-is-a-tender-and-rfp',
    title: 'ما هي المناقصة؟ الفروق الجوهرية بين كراسة الشروط RFP وRFQ وRFI',
    seoTitle: 'ما هي المناقصة؟ الفروق بين كراسة الشروط RFP وRFQ وRFI',
    metaDescription:
      'دليل شامل يشرح مفهوم المناقصات والمنافسات العامة، الفروق الدقيقة بين طلب العروض RFP وطلب عروض الأسعار RFQ وطلب المعلومات RFI، ومكونات كراسة الشروط والمتطلبات الإلزامية.',
    summary:
      'دليل عملي لتفكيك وثائق الطرح الحكومية والتجارية، والتفرقة الدقيقة بين نماذج الطلبات المختلفة (RFP وRFQ وRFI)، وكيفية التعامل مع الشروط الإلزامية لتفادي الاستبعاد المبكر.',
    badge: 'أساسيات المناقصات · كراسات الطرح',
    readTime: '7 دقائق قراءة',
    relatedServiceSlug: 'rfp-analysis-service',
    faqs: [
      {
        q: 'ما الفرق الأساسي بين كراسة الشروط RFP وطلب عروض الأسعار RFQ؟',
        a: 'تُستخدم وثيقة RFQ لتوريد أصناف أو تراخيص قياسية محددة المواصفات مسبقاً ويكون السعر الأقل المطابق هو المعيار الحاسم، بينما تُستخدم كراسة RFP للمشاريع التقنية والاستشارية المعقدة التي تُقيَّم فيها المنهجية الفنية والحل المعماري وفريق العمل بوزن فني مستقل قبل فتح العروض المالية.'
      },
      {
        q: 'هل يترتب على الرد على طلب المعلومات RFI ترسية عقد مباشر؟',
        a: 'لا؛ وثيقة RFI إجراء استطلاعي تهدف منه الجهة الحكومية إلى دراسة قدرات السوق وتقنيات الموردين قبل صياغة كراسة الشروط النهائية RFP، لكن المشاركة الاحترافية فيها تمنح الشركة حضوراً استشارياً مبكراً.'
      },
      {
        q: 'لماذا يجب الفصل التام بين المجلد الفني والمجلد المالي في المنافسات الحكومية؟',
        a: 'لأن لجان فحص العروض تلتزم بتقييم الكفاءة الفنية بحيادية تامة دون التأثر بالأسعار، وأي إشارة لأرقام مالية أو جداول تسعير داخل العرض الفني تُعد مخالفة شكلية جسيمة تؤدي للاستبعاد الفوري.'
      }
    ]
  },
  'how-to-write-a-technical-proposal': {
    slug: 'how-to-write-a-technical-proposal',
    title: 'كيفية كتابة عرض فني احترافي لمناقصات تقنية المعلومات والمشاريع الحكومية',
    seoTitle: 'كيفية كتابة عرض فني احترافي لمناقصات تقنية المعلومات',
    metaDescription:
      'منهجية تنفيذية متكاملة لصياغة العروض الفنية الفائزة في مناقصات تقنية المعلومات: الملخص التنفيذي، المعمارية التقنية، خطة العمل، حوكمة المشروع، ومصفوفة الصلاحيات.',
    summary:
      'خريطة عمل عملية لصياغة الملخص التنفيذي، المعمارية التقنية، خطة التنفيذ المرحلية، اتفاقيات مستوى الخدمة SLA، وهيكل الفريق الفني لكسب أعلى درجات التقييم الفني.',
    badge: 'العروض الفنية · منهجية الفوز',
    readTime: '9 دقائق قراءة',
    relatedServiceSlug: 'tender-proposal-writing',
    faqs: [
      {
        q: 'كيف تُقاس جودة العرض الفني أمام لجان التقييم في المنافسات الحكومية؟',
        a: 'تُقاس بمدى ارتباط كل قسم في العرض بمعايير التقييم المعلنة في الكراسة: فهم نطاق العمل، عمق الحل المعماري والأمني، واقعية الجدول الزمني والمخرجات، كفاءة الكوادر المرشحة، ونضج خطة إدارة المخاطر ونقل المعرفة.'
      },
      {
        q: 'ما الخطأ الأكثر شيوعاً في كتابة الملخص التنفيذي للعرض الفني؟',
        a: 'تحويل الملخص التنفيذي إلى سيرة تعريفية عامة عن الشركة بدلاً من التركيز على تحديات الجهة المستفيدة وأهدافها الاستراتيجية وكيف يحقق الحل المقترح قيمة ملموسة خالية من المخاطر.'
      },
      {
        q: 'ما أهمية تضمين مصفوفة المسؤوليات RACI واتفاقية مستوى الخدمة SLA؟',
        a: 'تُثبت مصفوفة RACI واتفاقية SLA للجنة الفنية أن المتنافس يمتلك حوكمة تشغيلية واضحة تحدد أزمنة الاستجابة والمعالجة والمسؤوليات الدقيقة بين فريق المقاول والجهة الحكومية.'
      }
    ]
  },
  'how-to-prepare-a-compliance-matrix': {
    slug: 'how-to-prepare-a-compliance-matrix',
    title: 'كيف تعد مصفوفة امتثال خالية من العيوب (Compliance Matrix) للمناقصات الحكومية',
    seoTitle: 'إعداد مصفوفة الامتثال للمناقصات الحكومية بدون أخطاء',
    metaDescription:
      'دليل تطبيقي لإعداد مصفوفة الامتثال والتتبع في المناقصات الحكومية وتقنية المعلومات، وربط بنود كراسة الشروط RFP بمواضع الاستجابة داخل العرض الفني لتفادي الاستبعاد.',
    summary:
      'منهجية دقيقة خطوة بخطوة لتحويل بنود كراسة الشروط والمواصفات إلى مصفوفة امتثال وتتبع محكمة تضمن تغطية كل متطلب إلزامي وفني وتسهل مهمة لجنة التقييم.',
    badge: 'ضبط الجودة · مصفوفة الامتثال',
    readTime: '8 دقائق قراءة',
    relatedServiceSlug: 'tender-compliance-matrix',
    faqs: [
      {
        q: 'هل يكفي كتابة كلمة «ملتزم» أمام بنود مصفوفة الامتثال دون توضيح؟',
        a: 'لا يكفي في المنافسات التقنية الاحترافية؛ إذ يجب قرن حالة الامتثال برقم القسم والصفحة داخل العرض الفني مع ملخص تنفيذي يوضح آلية تحقيق المتطلب عملياً.'
      },
      {
        q: 'متى يجب البدء في بناء مصفوفة الامتثال أثناء إعداد العطاء؟',
        a: 'في اليوم الأول فور استلام كراسة الشروط وقبل كتابة أي فصل في العرض الفني، لأن المصفوفة هي الهيكل المرجعي الذي يوزع المهام ويضمن عدم سقوط أي متطلب.'
      },
      {
        q: 'كيف تحمي مصفوفة الامتثال من التناقض بين العرض الفني وجدول الكميات؟',
        a: 'عبر مطابقة كميات التراخيص، سنوات الدعم، وأعداد الكوادر المقيمة الواردة في نطاق العمل وجدول الكميات BOQ مع ما يُكتب في المنهجية الفنية قبل الإغلاق.'
      }
    ]
  },
  'saudi-etimad-platform-bidding-guide': {
    slug: 'saudi-etimad-platform-bidding-guide',
    title: 'دليل التقديم على مناقصات منصة اعتماد ونظام المنافسات والمشتريات الحكومية السعودي',
    seoTitle: 'دليل مناقصات منصة اعتماد ونظام المنافسات الحكومية السعودي',
    metaDescription:
      'مرجع عملي للتقديم على المنافسات الحكومية عبر منصة اعتماد السعودية، اشتراطات نظام المنافسات والمشتريات الحكومية، المحتوى المحلي، الضمانات البنكية، وبروتوكول رفع الملفات.',
    summary:
      'شرح عملي لأحكام نظام المنافسات والمشتريات الحكومية السعودي ولائحته التنفيذية، بروتوكولات رفع العروض الفنية والمالية عبر منصة اعتماد، ومتطلبات المحتوى المحلي والتأهيل.',
    badge: 'السوق السعودي · منصة اعتماد',
    readTime: '10 دقائق قراءة',
    relatedServiceSlug: 'etimad-tender-support',
    faqs: [
      {
        q: 'ما أبرز الوثائق النظامية الواجب التحقق من سريانها قبل التقديم عبر منصة اعتماد؟',
        a: 'السجل التجاري بنشاط مطابق، شهادة الزكاة والضريبة والجمارك، شهادة التأمينات الاجتماعية، شهادة السعودة (نطاقات)، شهادة الغرفة التجارية، ومتطلبات هيئة المحتوى المحلي والضمان الابتدائي عند الاقتضاء.'
      },
      {
        q: 'لماذا يُنصح برفع ملفات العرض على منصة اعتماد قبل موعد الإغلاق بـ 24 ساعة على الأقل؟',
        a: 'لتفادي مخاطر الضغط التقني أو أخطاء التشفير أو أحجام الملفات أو تأخر ربط الضمان البنكي الإلكتروني، حيث يغلق النظام آلياً في الثانية المحددة دون استثناء.'
      },
      {
        q: 'كيف يؤثر المحتوى المحلي في تقييم المنافسات الحكومية السعودية؟',
        a: 'تطبق العديد من المنافسات آليات وزن السعر وخط الأساس ونسب المحتوى المحلي المستهدفة وفق لوائح هيئة المحتوى المحلي والمشتريات الحكومية، مما يجعل توثيقها بدقة عنصراً حاسماً في الترسية.'
      }
    ]
  },
  'bid-no-bid-assessment-strategy': {
    slug: 'bid-no-bid-assessment-strategy',
    title: 'استراتيجية قرار المشاركة في المناقصات (Bid / No-Bid): تعظيم فرص الفوز والربحية',
    seoTitle: 'إطار قرار المشاركة في المناقصات Bid / No-Bid للشركات التقنية',
    metaDescription:
      'منهجية موضوعية لتقييم قرار التقدم للمناقصات (Bid / No-Bid) في شركات التقنية والمقاولات: تحليل شروط التأهيل، المخاطر التعاقدية، التدفقات النقدية، واحتمالية الفوز.',
    summary:
      'كيف تقيّم شركات التقنية والاستشارات شروط التأهيل والقدرة التشغيلية والمخاطر التعاقدية وهوامش الربحية بموضوعية قبل استثمار موارد الفريق في صياغة العرض الفني.',
    badge: 'حوكمة العطاءات · Bid / No-Bid',
    readTime: '8 دقائق قراءة',
    relatedServiceSlug: 'bid-no-bid-support',
    faqs: [
      {
        q: 'ما تكلفة غياب حوكمة قرار Bid / No-Bid داخل شركات التقنية؟',
        a: 'استنزاف وقت المهندسين وكتّاب العروض في منافسات ضعيفة الملاءمة أو محكومة بشروط تأهيل تعجيزية، مما يضعف جودة العروض المقدمة للفرص الاستراتيجية عالية الربحية.'
      },
      {
        q: 'متى يكون قرار الاعتذار المبكر (No-Bid) قراراً استراتيجياً صائباً؟',
        a: 'عند غياب متطلب تأهيل إلزامي قاطع لا يمكن سده بتحالف نظامي، أو وجود غرامات ومخاطر تدفق نقدي غير متوازنة، أو ضيق المهلة الزمنية بما يمنع تقديم عرض فني يليق بسمعة الشركة.'
      },
      {
        q: 'هل يمكن تحويل عائق تأهيلي إلى فرصة مشاركة عبر التحالف أو التعاقد من الباطن؟',
        a: 'نعم، إذا سمحت كراسة الشروط باتفاقيات التضامن أو المقاولين من الباطن المعتمدين، شريطة توثيق توزيع الأدوار وسابقة الأعمال النظامية وفق اشتراطات الجهة الطارحة.'
      }
    ]
  },
  'avoiding-mandatory-tender-rejection': {
    slug: 'avoiding-mandatory-tender-rejection',
    title: 'أبرز أسباب استبعاد العروض الفنية في المناقصات الحكومية وكيفية تفاديها جذرياً',
    seoTitle: 'أسباب استبعاد العروض الفنية في المناقصات وكيفية تجنبها',
    metaDescription:
      'تدقيق عملي لأشهر الأخطاء القاتلة المؤدية لاستبعاد العروض الفنية في المناقصات الحكومية ومنصة اعتماد، وقائمة فحص الجودة النهائية (Bid QA) قبل الإغلاق.',
    summary:
      'تحليل ميداني لأكثر الأخطاء الشكلية والفنية المؤدية للاستبعاد الفوري—من نقص الشهادات الإلزامية وتناقض المدد الزمنية إلى تسرب الإشارات السعرية داخل المجلد الفني.',
    badge: 'مراجعة الجودة · تفادي الاستبعاد',
    readTime: '7 دقائق قراءة',
    relatedServiceSlug: 'bid-quality-assurance',
    faqs: [
      {
        q: 'ما السبب رقم واحد لاستبعاد عروض فنية قوية من الناحية الهندسية؟',
        a: 'مخالفة الشروط الشكلية أو الإلزامية القاطعة، مثل انتهاء صلاحية شهادة نظامية بيوم واحد، أو نقص قيمة/مدة الضمان الابتدائي، أو إغفال توقيع إقرار إلزامي مرفق بالكراسة.'
      },
      {
        q: 'كيف نمنع تسرب أي أرقام مالية إلى ملف العرض الفني قبل الرفع؟',
        a: 'بإجراء فحص مستقل (Red Team / Bid QA) على النسخة النهائية بصيغة PDF والبحث الآلي واليدوي عن العملات والرموز السعرية وجداول الكميات المسعّرة قبل التصدير.'
      },
      {
        q: 'ماذا يحدث إذا اختلف جدول التنفيذ في العرض الفني عن المدة المحددة في الكراسة؟',
        a: 'يُعد ذلك تحفظاً أو عدم التزام بمدة العقد المحددة في كراسة الشروط، وهو سبب مباشر لرفض العرض أو خصم درجات حاسمة في معيار خطة العمل.'
      }
    ]
  }
};

const SKIPPED_WRAPPER_SECTION_IDS = new Set([
  'article-faqs',
  'related-guides',
  'common-mistakes',
  'conclusion',
  'official-references',
  'service-cta'
]);

function extractArabicTenderSectionsFromDisk(rootDir: string, slug: string): ArArticleSection[] {
  const filePath = path.join(rootDir, 'ar/articles', `${slug}.html`);
  if (!fs.existsSync(filePath)) return [];
  const rawHtml = fs.readFileSync(filePath, 'utf8');

  const sectionRegex = /<section\s+id="([^"]+)"[^>]*>([\s\S]*?)<\/section>/g;
  const extracted: ArArticleSection[] = [];
  let match: RegExpExecArray | null;

  while ((match = sectionRegex.exec(rawHtml)) !== null) {
    const secId = match[1].trim();
    if (SKIPPED_WRAPPER_SECTION_IDS.has(secId)) continue;

    let inner = match[2].trim();
    const h2Match = inner.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
    if (!h2Match) continue;

    const headingText = h2Match[1].replace(/<[^>]+>/g, '').trim();
    inner = inner.replace(h2Match[0], '').trim();
    inner = inner.replace(/200\s*مناقصة/g, '400 مناقصة');

    if (headingText && inner) {
      extracted.push({
        id: secId,
        heading: headingText,
        rawHtml: inner
      });
    }
  }

  return extracted;
}

function normalizeLegacyWpDef(a: LegacyWpArticleDef): ArticleItem {
  return {
    slug: a.slug,
    title: a.title,
    metaTitle: a.metaTitle,
    metaDesc: a.description,
    category: 'wordpress',
    categoryName: 'ووردبريس (WordPress)',
    date: '2026-02-15',
    readTime: a.readTime,
    author: 'يوسف غمري',
    featuredImage: a.featuredSvg,
    imageAlt: a.featuredAlt,
    relatedServiceUrl: a.relatedServiceUrl,
    relatedServiceName: a.relatedServiceName,
    intro: `<p>${a.description}</p>`,
    toc: a.contentSections.map((s, idx) => ({ id: `sec-${idx + 1}`, text: s.h2 })),
    sections: a.contentSections.map((s, idx) => ({
      id: `sec-${idx + 1}`,
      title: s.h2,
      content: s.body
    })),
    faqs: a.faq || []
  };
}

export function buildAll132ArabicArticles(
  rootDir: string,
  allServices: ServiceDef[]
): ArArticleItem[] {
  const serviceMap = new Map<string, ServiceDef>();
  for (const s of allServices) {
    if (!serviceMap.has(s.slug)) serviceMap.set(s.slug, s);
  }

  const enBaseList = buildAll111EnglishArticles(rootDir);
  const enBaseMap = new Map(enBaseList.map((a) => [a.slug, a]));

  function resolveService(
    rawUrlOrSlug: string | undefined,
    rawTitleAr: string | undefined,
    fallbackSlug: string
  ): { slug: string; titleAr: string } {
    let candidate = (rawUrlOrSlug || '')
      .replace(/^.*\/services\//, '')
      .replace(/\.html$/, '')
      .trim();
    if (SERVICE_SLUG_ALIASES[candidate]) {
      candidate = SERVICE_SLUG_ALIASES[candidate];
    }
    if (candidate && serviceMap.has(candidate)) {
      const svc = serviceMap.get(candidate)!;
      return { slug: svc.slug, titleAr: rawTitleAr || svc.titleAr };
    }
    const cleanFallback = SERVICE_SLUG_ALIASES[fallbackSlug] || fallbackSlug;
    if (cleanFallback && serviceMap.has(cleanFallback)) {
      const svc = serviceMap.get(cleanFallback)!;
      return { slug: svc.slug, titleAr: svc.titleAr };
    }
    const defaultSvc = serviceMap.get('custom-software-development') || allServices[0];
    return { slug: defaultSvc.slug, titleAr: rawTitleAr || defaultSvc.titleAr };
  }

  function resolveFeaturedImage(candidate: string | undefined, fallbackSvg: string): string {
    if (candidate) {
      const withSlash = candidate.startsWith('/') ? candidate : `/${candidate}`;
      const absCandidate = path.join(rootDir, 'public', withSlash.slice(1));
      if (fs.existsSync(absCandidate)) {
        return withSlash;
      }
    }
    if (fallbackSvg) {
      const withSlash = fallbackSvg.startsWith('/') ? fallbackSvg : `/${fallbackSvg}`;
      const absFallback = path.join(rootDir, 'public', withSlash.slice(1));
      if (fs.existsSync(absFallback)) {
        return withSlash;
      }
    }
    return '/assets/aistudio/image_ef5d64bf.png';
  }

  // 1. Validate & normalize the 20 Newly Published Progressive Arabic Guides
  const rawProgressive = [...AR_PROGRESSIVE_GUIDES_PART1, ...AR_PROGRESSIVE_GUIDES_PART2];
  const progressiveArticles: ArArticleItem[] = rawProgressive.map((item) => {
    const normCat = normalizeArTrackKey(item.categoryKey);
    const primarySvc = resolveService(
      item.relatedServiceSlug,
      item.relatedServiceTitle,
      'custom-software-development'
    );
    let secondarySlug: string | undefined;
    let secondaryTitle: string | undefined;
    if (item.secondaryServiceSlug) {
      const secCandidate = SERVICE_SLUG_ALIASES[item.secondaryServiceSlug] || item.secondaryServiceSlug;
      if (serviceMap.has(secCandidate)) {
        secondarySlug = secCandidate;
        secondaryTitle = item.secondaryServiceTitle || serviceMap.get(secCandidate)!.titleAr;
      }
    }
    return {
      ...item,
      categoryKey: normCat,
      categoryLabel: getArTrackLabel(normCat),
      featuredSvg: resolveFeaturedImage(item.featuredSvg, item.featuredSvg),
      relatedServiceSlug: primarySvc.slug,
      relatedServiceTitle: primarySvc.titleAr,
      secondaryServiceSlug: secondarySlug,
      secondaryServiceTitle: secondaryTitle,
      isNewlyPublished: true
    };
  });

  // 2. Build lookup maps for all legacy Arabic sources
  const unifiedLegacyMap = new Map<string, ArticleItem>();
  for (const wp of WORDPRESS_ARTICLES) {
    unifiedLegacyMap.set(wp.slug, normalizeLegacyWpDef(wp));
  }
  const otherLegacyCollections: ArticleItem[][] = [
    shopifyArticles,
    opencartArticles,
    joomlaArticles,
    drupalArticles,
    sallaArticles,
    zidArticles,
    reactArticles,
    nodeArticles,
    angularArticles
  ];
  for (const coll of otherLegacyCollections) {
    for (const art of coll) {
      unifiedLegacyMap.set(art.slug, art);
    }
  }

  const platformMap = new Map(PLATFORM_ARTICLES.map((p) => [p.slug, p]));

  // 3. Map all 112 Base Articles in exact parity with enBaseList
  const baseArabicArticles: ArArticleItem[] = [];

  for (const enBase of enBaseList) {
    const slug = enBase.slug;
    const normCat = normalizeArTrackKey(enBase.categoryKey);
    const trackLabel = getArTrackLabel(normCat);

    // 3A. 6 Tender Guides
    if (TENDER_GUIDES_AR_META[slug]) {
      const meta = TENDER_GUIDES_AR_META[slug];
      const extractedSections = extractArabicTenderSectionsFromDisk(rootDir, slug);
      const primarySvc = resolveService(meta.relatedServiceSlug, undefined, enBase.relatedServiceSlug);

      baseArabicArticles.push({
        slug,
        categoryKey: 'tenders',
        categoryLabel: trackLabel,
        badge: meta.badge,
        title: meta.title,
        seoTitle: meta.seoTitle,
        metaDescription: meta.metaDescription,
        summary: meta.summary,
        readTime: meta.readTime,
        publishedDate: '2026-01-20',
        updatedDate: '2026-03-01',
        featuredSvg: resolveFeaturedImage(enBase.featuredSvg, enBase.featuredSvg),
        featuredImageAlt: meta.title,
        relatedServiceSlug: primarySvc.slug,
        relatedServiceTitle: primarySvc.titleAr,
        sections:
          extractedSections.length > 0
            ? extractedSections
            : [
                {
                  id: 'overview',
                  heading: meta.title,
                  paragraphs: [meta.summary]
                }
              ],
        faqs: meta.faqs,
        relatedArticleSlugs: enBase.relatedArticleSlugs
      });
      continue;
    }

    // 3B. Unified 90 Specialized Guides (WordPress, Shopify, OpenCart, Joomla, Drupal, Salla, Zid, React, Node, Angular)
    if (unifiedLegacyMap.has(slug)) {
      const item = unifiedLegacyMap.get(slug)!;
      const primarySvc = resolveService(
        item.relatedServiceUrl,
        item.relatedServiceName,
        enBase.relatedServiceSlug
      );

      baseArabicArticles.push({
        slug,
        categoryKey: normCat,
        categoryLabel: trackLabel,
        badge: `${trackLabel} · دليل تطبيقي`,
        title: item.title,
        seoTitle: item.metaTitle || item.title,
        metaDescription: item.metaDesc,
        summary: item.metaDesc,
        readTime: localizeArReadTime(item.readTime),
        publishedDate: item.date || '2026-02-15',
        updatedDate: item.date || '2026-03-01',
        featuredSvg: resolveFeaturedImage(item.featuredImage, enBase.featuredSvg),
        featuredImageAlt: item.imageAlt || item.title,
        relatedServiceSlug: primarySvc.slug,
        relatedServiceTitle: primarySvc.titleAr,
        introHtml: item.intro,
        sections: item.sections.map((sec) => ({
          id: sec.id,
          heading: sec.title,
          rawHtml: sec.content
        })),
        faqs: item.faqs && item.faqs.length > 0 ? item.faqs : [],
        relatedArticleSlugs: enBase.relatedArticleSlugs
      });
      continue;
    }

    // 3C. Platform / Modern Stack / AI / PHP / Magento / Releases Guides from PLATFORM_ARTICLES
    if (platformMap.has(slug)) {
      const p = platformMap.get(slug)!;
      const primarySvc = resolveService(
        p.relatedServices?.[0],
        undefined,
        enBase.relatedServiceSlug
      );
      const secondarySvcSlug = p.relatedServices?.[1];
      const validSecSvc =
        secondarySvcSlug && serviceMap.has(secondarySvcSlug)
          ? serviceMap.get(secondarySvcSlug)!
          : undefined;

      const mappedSections: ArArticleSection[] = p.sectionsAr.map((sec, idx) => ({
        id: `section-${idx + 1}`,
        heading: sec.heading,
        paragraphs: sec.paragraphs,
        keyTakeaways: sec.keyTakeaways,
        ...(idx === p.sectionsAr.length - 1
          ? {
              checklistTitle: 'قائمة التحقق الهندسي قبل الإطلاق الفعلي',
              checklistItems: [
                'مراجعة معمارية النظام وعزل طبقات البيانات ومنطق الأعمال عن الواجهة.',
                'تفعيل سياسات التخزين المؤقت وضبط مؤشرات الأداء Core Web Vitals.',
                'تأمين نقاط الربط البرمجية APIs والتحقق من الصلاحيات وتشفير الجلسات.',
                'ربط خط أنابيب الفحص الآلي CI/CD وخطة التراجع السريع قبل النشر.'
              ]
            }
          : {})
      }));

      baseArabicArticles.push({
        slug,
        categoryKey: normCat,
        categoryLabel: trackLabel,
        badge: p.badgeAr || `${trackLabel} · مرجع هندسي`,
        title: p.titleAr,
        seoTitle: p.titleAr,
        metaDescription: p.summaryAr,
        summary: p.summaryAr,
        readTime: localizeArReadTime(p.readTime),
        publishedDate: '2026-02-10',
        updatedDate: '2026-03-01',
        featuredSvg: resolveFeaturedImage(enBase.featuredSvg, enBase.featuredSvg),
        featuredImageAlt: p.titleAr,
        relatedServiceSlug: primarySvc.slug,
        relatedServiceTitle: primarySvc.titleAr,
        secondaryServiceSlug: validSecSvc?.slug,
        secondaryServiceTitle: validSecSvc?.titleAr,
        sections: mappedSections,
        faqs: [
          {
            q: `متى تكون بنية «${p.titleAr.split('؟')[0]}» الخيار الأنسب لمشروعك؟`,
            a: `${p.summaryAr} ويُنصح باعتمادها عندما تتطلب المنصة قابلية توسع مستدامة، أماناً مؤسسياً، وسهولة صيانة طويلة الأمد.`
          },
          {
            q: 'كيف تؤثر هذه المعمارية في سرعة الأداء وتصدر محركات البحث (Technical SEO)؟',
            a: 'تساعد الهيكلة النظيفة وتقليل الحمل البرمجي وضبط التخزين المؤقت على خفض زمن استجابة الخادم TTFB وتحسين مؤشرات LCP وINP، مما يرفع كفاءة الفهرسة ومعدلات التحويل.'
          },
          {
            q: 'هل يمكن تنفيذ هذا الحل ضمن متطلبات كراسات الشروط الحكومية أو أنظمة الشركات الكبرى؟',
            a: `نعم؛ نقدم عبر خدمة «${primarySvc.titleAr}» تنفيذاً هندسياً متكاملاً متوافقاً مع معايير الأمان واتفاقيات مستوى الخدمة SLA ومصفوفات الامتثال.`
          }
        ],
        relatedArticleSlugs:
          p.relatedArticles && p.relatedArticles.length > 0
            ? p.relatedArticles
            : enBase.relatedArticleSlugs
      });
      continue;
    }
  }

  return [...progressiveArticles, ...baseArabicArticles];
}
