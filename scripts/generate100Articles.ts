import fs from 'fs';
import path from 'path';
import { WORDPRESS_ARTICLES } from './articlesDataPart1';
import { shopifyArticles, opencartArticles } from './articlesDataEcommerce';
import { joomlaArticles, drupalArticles } from './articlesDataCms';
import { sallaArticles, zidArticles } from './articlesDataSaudi';
import { reactArticles, nodeArticles, angularArticles } from './articlesDataTech';

import { UnifiedArticle } from './types';

// Convert WORDPRESS_ARTICLES to UnifiedArticle
const normalizedWordpress: UnifiedArticle[] = WORDPRESS_ARTICLES.map((wp: any) => ({
  slug: wp.slug,
  title: wp.title,
  metaTitle: wp.metaTitle || wp.title,
  metaDesc: wp.description,
  category: 'wordpress',
  categoryName: 'ووردبريس (WordPress)',
  date: '2025-02-14',
  readTime: wp.readTime || '8 دقائق',
  author: 'يوسف الغمري',
  featuredImage: 'assets/images/articles/wordpress-guide.svg',
  imageAlt: wp.featuredAlt || wp.title,
  relatedServiceUrl: wp.relatedServiceUrl || '/ar/services/wordpress-development.html',
  relatedServiceName: wp.relatedServiceName || 'تطوير مواقع ووردبريس',
  intro: wp.description,
  toc: (wp.tableOfContents || []).map((t: string, idx: number) => ({
    id: `wp-sec-${idx + 1}`,
    text: t
  })),
  sections: (wp.contentSections || []).map((sec: any, idx: number) => ({
    id: `wp-sec-${idx + 1}`,
    title: sec.h2,
    content: sec.body
  })),
  faqs: wp.faq || []
}));

export const allArticles: UnifiedArticle[] = [
  ...normalizedWordpress,
  ...shopifyArticles,
  ...joomlaArticles,
  ...drupalArticles,
  ...opencartArticles,
  ...sallaArticles,
  ...zidArticles,
  ...reactArticles,
  ...nodeArticles,
  ...angularArticles
];

console.log(`Total loaded articles: ${allArticles.length}`);

const categoryMap: Record<string, { label: string; count: number }> = {
  wordpress: { label: 'ووردبريس (WordPress)', count: 0 },
  shopify: { label: 'شوبيفاي (Shopify)', count: 0 },
  joomla: { label: 'جوملا (Joomla)', count: 0 },
  drupal: { label: 'دوروبال (Drupal)', count: 0 },
  opencart: { label: 'أوبن كارت (OpenCart)', count: 0 },
  salla: { label: 'سلة (Salla)', count: 0 },
  zid: { label: 'زد (Zid)', count: 0 },
  react: { label: 'ريأكت (React.js)', count: 0 },
  node: { label: 'نود جي إس (Node.js)', count: 0 },
  angular: { label: 'أنجولار (Angular)', count: 0 }
};

allArticles.forEach(a => {
  if (categoryMap[a.category]) {
    categoryMap[a.category].count++;
  }
});

console.log('Category breakdown:');
Object.entries(categoryMap).forEach(([k, v]) => {
  console.log(`  - ${k}: ${v.count} (${v.label})`);
});

// Ensure SVG images exist in public/assets/images/articles/
const imagesDir = path.resolve(process.cwd(), 'public/assets/images/articles');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

function generateSvgIcon(category: string, title: string): string {
  const colors: Record<string, { bg1: string; bg2: string; accent: string; label: string }> = {
    wordpress: { bg1: '#0f172a', bg2: '#0284c7', accent: '#38bdf8', label: 'WordPress' },
    shopify: { bg1: '#064e3b', bg2: '#059669', accent: '#34d399', label: 'Shopify' },
    joomla: { bg1: '#1e1b4b', bg2: '#4338ca', accent: '#818cf8', label: 'Joomla' },
    drupal: { bg1: '#082f49', bg2: '#0284c7', accent: '#38bdf8', label: 'Drupal' },
    opencart: { bg1: '#042f2e', bg2: '#0d9488', accent: '#2dd4bf', label: 'OpenCart' },
    salla: { bg1: '#064e3b', bg2: '#047857', accent: '#10b981', label: 'Salla' },
    zid: { bg1: '#1c1917', bg2: '#78350f', accent: '#fbbf24', label: 'Zid' },
    react: { bg1: '#082f49', bg2: '#0284c7', accent: '#61dafb', label: 'React.js' },
    node: { bg1: '#052e16', bg2: '#15803d', accent: '#4ade80', label: 'Node.js' },
    angular: { bg1: '#4c0519', bg2: '#be123c', accent: '#f43f5e', label: 'Angular' }
  };

  const conf = colors[category] || { bg1: '#090d0b', bg2: '#10b981', accent: '#C6A15B', label: 'Tech' };

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="grad_${category}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${conf.bg1}" />
      <stop offset="100%" stop-color="#050806" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E5C78B" />
      <stop offset="100%" stop-color="#C6A15B" />
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#grad_${category})" />
  <circle cx="400" cy="225" r="180" fill="${conf.accent}" opacity="0.08" />
  <circle cx="400" cy="225" r="120" fill="none" stroke="${conf.accent}" stroke-width="2" stroke-dasharray="6,6" opacity="0.4" />
  <rect x="40" y="40" width="720" height="370" rx="16" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
  
  <rect x="70" y="70" width="140" height="34" rx="17" fill="rgba(255,255,255,0.05)" stroke="url(#goldGrad)" stroke-width="1" />
  <text x="140" y="92" fill="#E5C78B" font-family="system-ui, sans-serif" font-size="14" font-weight="700" text-anchor="middle">${conf.label}</text>
  
  <text x="400" y="220" fill="#FFFFFF" font-family="system-ui, 'Cairo', 'Tajawal', sans-serif" font-size="28" font-weight="800" text-anchor="middle" direction="rtl">${title.slice(0, 45)}...</text>
  <text x="400" y="265" fill="#94a3b8" font-family="system-ui, 'Cairo', sans-serif" font-size="16" text-anchor="middle" direction="rtl">دليل تقني متخصص | م. يوسف الغمري</text>
  
  <circle cx="400" cy="330" r="28" fill="${conf.accent}" opacity="0.2" />
  <text x="400" y="337" fill="${conf.accent}" font-family="system-ui" font-size="20" font-weight="bold" text-anchor="middle">&lt;/&gt;</text>
</svg>`;
}

// Generate all SVGs
const categories = ['wordpress', 'shopify', 'joomla', 'drupal', 'opencart', 'salla', 'zid', 'react', 'node', 'angular'];
categories.forEach(cat => {
  const filePath = path.join(imagesDir, `${cat}-guide.svg`);
  fs.writeFileSync(filePath, generateSvgIcon(cat, categoryMap[cat]?.label || cat));
});

// Template generator for single article HTML
function renderArticleHtml(article: UnifiedArticle): string {
  const schemaArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': article.title,
    'description': article.metaDesc,
    'image': `https://youssef-ghamry.dev/${article.featuredImage}`,
    'author': {
      '@type': 'Person',
      'name': article.author,
      'jobTitle': 'Senior Software Engineer & Bid Management Consultant',
      'url': 'https://youssef-ghamry.dev/ar/'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'يوسف الغمري',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://youssef-ghamry.dev/assets/images/logo.png'
      }
    },
    'datePublished': article.date,
    'dateModified': article.date,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://youssef-ghamry.dev/ar/articles/${article.slug}.html`
    }
  };

  const schemaFaq = article.faqs && article.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': article.faqs.map(f => ({
      '@type': 'Question',
      'name': f.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': f.a
      }
    }))
  } : null;

  const schemaBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'الرئيسية',
        'item': 'https://youssef-ghamry.dev/ar/'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'المقالات المتخصصة',
        'item': 'https://youssef-ghamry.dev/ar/articles/'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': article.title,
        'item': `https://youssef-ghamry.dev/ar/articles/${article.slug}.html`
      }
    ]
  };

  return `<!DOCTYPE html>
<html lang="ar" dir="rtl" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${article.metaTitle}</title>
  <meta name="description" content="${article.metaDesc}">
  <link rel="canonical" href="https://youssef-ghamry.dev/ar/articles/${article.slug}.html">
  
  <!-- Open Graph -->
  <meta property="og:locale" content="ar_AR">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${article.metaTitle}">
  <meta property="og:description" content="${article.metaDesc}">
  <meta property="og:url" content="https://youssef-ghamry.dev/ar/articles/${article.slug}.html">
  <meta property="og:site_name" content="يوسف الغمري | استشارات وحلول رقمية">
  <meta property="og:image" content="https://youssef-ghamry.dev/${article.featuredImage}">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${article.metaTitle}">
  <meta name="twitter:description" content="${article.metaDesc}">
  <meta name="twitter:image" content="https://youssef-ghamry.dev/${article.featuredImage}">

  <!-- CSS -->
  <link rel="stylesheet" href="/assets/css/style.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&family=Tajawal:wght@400;500;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  ${JSON.stringify(schemaArticle, null, 2)}
  </script>
  <script type="application/ld+json">
  ${JSON.stringify(schemaBreadcrumbs, null, 2)}
  </script>
  ${schemaFaq ? `<script type="application/ld+json">\n  ${JSON.stringify(schemaFaq, null, 2)}\n  </script>` : ''}
</head>
<body class="bg-[#050806] text-zinc-100 font-['Cairo',sans-serif] min-h-screen antialiased selection:bg-emerald-500/30 selection:text-emerald-300">

  <!-- Navigation Bar (Full Width) -->
  <nav class="sticky top-0 z-50 bg-[#050806]/90 backdrop-blur-md border-b border-emerald-500/10">
    <div class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 h-20 flex items-center justify-between">
      <a href="/ar/" class="flex items-center gap-3 group">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-amber-500/20 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-400 group-hover:border-emerald-400 transition-colors">
          YG
        </div>
        <div class="flex flex-col">
          <span class="font-black text-lg text-white group-hover:text-emerald-400 transition-colors">يوسف الغمري</span>
          <span class="text-xs text-[#C6A15B]">استشارات ومشاريع رقمية</span>
        </div>
      </a>

      <div class="hidden md:flex items-center gap-8">
        <a href="/ar/" class="text-sm font-semibold text-zinc-300 hover:text-emerald-400 transition-colors">الرئيسية</a>
        <a href="/ar/services/" class="text-sm font-semibold text-zinc-300 hover:text-emerald-400 transition-colors">الخدمات</a>
        <a href="/ar/tenders/" class="text-sm font-semibold text-zinc-300 hover:text-emerald-400 transition-colors">المناقصات</a>
        <a href="/ar/articles/" class="text-sm font-semibold text-emerald-400">المقالات (100)</a>
        <a href="/ar/portfolio/" class="text-sm font-semibold text-zinc-300 hover:text-emerald-400 transition-colors">الأعمال</a>
        <a href="/ar/contact.html" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-900/20 transition-all hover:-translate-y-0.5">
          <span>طلب استشارة</span>
          <svg class="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </a>
      </div>
    </div>
  </nav>

  <!-- Breadcrumbs Bar -->
  <div class="w-full bg-zinc-950/60 border-b border-zinc-800/60 py-3">
    <div class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 text-xs text-zinc-400 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
      <a href="/ar/" class="hover:text-emerald-400 transition-colors">الرئيسية</a>
      <span>/</span>
      <a href="/ar/articles/" class="hover:text-emerald-400 transition-colors">المقالات</a>
      <span>/</span>
      <span class="text-emerald-400 font-semibold">${article.categoryName}</span>
      <span>/</span>
      <span class="text-zinc-500 truncate max-w-xs">${article.title}</span>
    </div>
  </div>

  <!-- Main Content Layout (Full Width Extended) -->
  <main class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10 lg:py-16">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
      
      <!-- Article Main Column (Span 8) -->
      <article class="lg:col-span-8 space-y-8">
        
        <!-- Header & Meta -->
        <header class="space-y-4">
          <div class="flex flex-wrap items-center gap-3">
            <span class="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              ${article.categoryName}
            </span>
            <span class="text-xs text-zinc-400 flex items-center gap-1.5">
              <svg class="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              وقت القراءة: ${article.readTime}
            </span>
            <span class="text-xs text-zinc-400 flex items-center gap-1.5">
              <svg class="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              تاريخ النشر: ${article.date}
            </span>
            <span class="text-xs text-zinc-400 flex items-center gap-1.5">
              <svg class="w-4 h-4 text-[#C6A15B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
              الكاتب: ${article.author}
            </span>
          </div>

          <h1 class="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
            ${article.title}
          </h1>

          <p class="text-base sm:text-lg text-zinc-300 leading-relaxed bg-zinc-900/40 p-4 sm:p-6 rounded-2xl border border-zinc-800/80">
            ${article.intro}
          </p>
        </header>

        <!-- Featured Image -->
        <div class="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl aspect-[16/9] w-full">
          <img src="/${article.featuredImage}" alt="${article.imageAlt}" class="w-full h-full object-cover">
        </div>

        <!-- Mobile Table of Contents (Accordion) -->
        <div class="block lg:hidden bg-zinc-900/70 border border-zinc-800 rounded-2xl p-5">
          <details class="group">
            <summary class="flex items-center justify-between font-bold text-white cursor-pointer list-none">
              <span class="flex items-center gap-2">
                <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/></svg>
                فهرس محتويات المقال
              </span>
              <svg class="w-5 h-5 text-zinc-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </summary>
            <ul class="mt-4 space-y-2.5 text-sm text-zinc-300 border-t border-zinc-800 pt-3">
              ${article.toc.map(item => `<li><a href="#${item.id}" class="hover:text-emerald-400 block transition-colors">${item.text}</a></li>`).join('')}
            </ul>
          </details>
        </div>

        <!-- Article Body Sections -->
        <div class="prose prose-invert max-w-none space-y-10">
          ${article.sections.map(sec => `
            <section id="${sec.id}" class="space-y-4 pt-4 scroll-mt-24">
              <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 border-r-4 border-emerald-500 pr-3">
                ${sec.title}
              </h2>
              <div class="text-zinc-300 leading-relaxed space-y-4">
                ${sec.content}
              </div>
            </section>
          `).join('')}
        </div>

        <!-- FAQs Section -->
        ${article.faqs && article.faqs.length > 0 ? `
          <section id="faq" class="space-y-4 pt-8 border-t border-zinc-800 scroll-mt-24">
            <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 border-r-4 border-[#C6A15B] pr-3">
              أسئلة شائعة وإجابات الخبراء
            </h2>
            <div class="space-y-3">
              ${article.faqs.map(faq => `
                <details class="group bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-4 transition-colors hover:border-emerald-500/30">
                  <summary class="font-bold text-white cursor-pointer list-none flex items-center justify-between">
                    <span class="text-sm sm:text-base">${faq.q}</span>
                    <svg class="w-5 h-5 text-zinc-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                  </summary>
                  <p class="mt-3 text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60 pt-3">
                    ${faq.a}
                  </p>
                </details>
              `).join('')}
            </div>
          </section>
        ` : ''}

        <!-- Related Service CTA Banner -->
        <div class="bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-amber-950/20 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div class="space-y-2 text-center sm:text-right">
            <span class="text-xs font-bold uppercase tracking-wider text-[#C6A15B]">الخدمة المرتبطة بالمقال</span>
            <h3 class="text-xl sm:text-2xl font-extrabold text-white">${article.relatedServiceName}</h3>
            <p class="text-xs sm:text-sm text-zinc-400 max-w-lg">
              هل ترغب في تطبيق هذه الحلول لمشروعك بأعلى كفاءة؟ فريقنا الهندسي جاهز للتنفيذ والإشراف.
            </p>
          </div>
          <a href="${article.relatedServiceUrl}" class="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-900/30 transition-all hover:scale-105 whitespace-nowrap flex-shrink-0">
            استكشف تفاصيل الخدمة
          </a>
        </div>

        <!-- Author Card -->
        <div class="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-amber-500 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 shadow-lg">
            ي
          </div>
          <div class="space-y-2 text-center sm:text-right">
            <div class="flex flex-col sm:flex-row sm:items-center gap-2">
              <h4 class="font-extrabold text-lg text-white">م. يوسف الغمري</h4>
              <span class="text-xs text-[#C6A15B] font-semibold bg-[#C6A15B]/10 px-2.5 py-0.5 rounded-full border border-[#C6A15B]/20 w-fit mx-auto sm:mx-0">مستشار مناقصات وهندسة برمجيات</span>
            </div>
            <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              مهندس برمجيات ومستشار إدارة مناقصات وعطاءات حكومية. خبرة تتجاوز 400 مناقصة ومشروع تقني مع الجهات الحكومية والشركات الكبرى، متخصص في بناء الحلول الرقمية والهندسة السحابية.
            </p>
          </div>
        </div>

      </article>

      <!-- Sidebar Column (Span 4) -->
      <aside class="lg:col-span-4 space-y-6">
        
        <!-- Desktop Sticky Table of Contents -->
        <div class="hidden lg:block sticky top-28 bg-zinc-900/70 border border-zinc-800/80 rounded-2xl p-6 backdrop-blur-md">
          <h3 class="font-black text-white text-base mb-4 flex items-center gap-2">
            <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/></svg>
            جدول المحتويات
          </h3>
          <nav class="space-y-2 text-xs font-medium text-zinc-300">
            ${article.toc.map(item => `
              <a href="#${item.id}" class="block py-1.5 px-3 rounded-lg hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors border-r-2 border-transparent hover:border-emerald-400">
                ${item.text}
              </a>
            `).join('')}
            ${article.faqs && article.faqs.length > 0 ? `
              <a href="#faq" class="block py-1.5 px-3 rounded-lg hover:bg-amber-500/10 hover:text-[#C6A15B] transition-colors border-r-2 border-transparent hover:border-[#C6A15B]">
                أسئلة شائعة حول المقال
              </a>
            ` : ''}
          </nav>

          <!-- Fast Contact Widget -->
          <div class="mt-8 pt-6 border-t border-zinc-800/80 space-y-3">
            <div class="text-xs font-bold text-emerald-400">تحتاج استشارة مخصصة؟</div>
            <p class="text-[11px] text-zinc-400">
              تواصل مباشرة لمناقشة متطلبات مشروعك، تدقيق العروض الفنية، أو بناء بنية برمجية متطورة.
            </p>
            <a href="https://wa.me/201016766487" target="_blank" rel="noopener noreferrer" class="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors">
              <span>محادثة واتساب مباشرة</span>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.073.043.419-.101.824z"/></svg>
            </a>
          </div>
        </div>

      </aside>

    </div>
  </main>

  <!-- Footer (Full Width) -->
  <footer class="w-full bg-zinc-950 border-t border-zinc-800/80 py-12 mt-20">
    <div class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center font-bold text-emerald-400 text-xs">YG</div>
        <span class="text-sm font-semibold text-zinc-300">يوسف الغمري © 2025. جميع الحقوق محفوظة.</span>
      </div>
      <div class="flex items-center gap-6 text-xs text-zinc-400">
        <a href="/ar/" class="hover:text-emerald-400">الرئيسية</a>
        <a href="/ar/services/" class="hover:text-emerald-400">الخدمات</a>
        <a href="/ar/tenders/" class="hover:text-emerald-400">المناقصات</a>
        <a href="/ar/articles/" class="hover:text-emerald-400">المقالات (100)</a>
        <a href="/ar/contact.html" class="hover:text-emerald-400">اتصل بنا</a>
      </div>
    </div>
  </footer>

</body>
</html>`;
}

// Generate all 100 HTML files
const articlesDir = path.resolve(process.cwd(), 'ar/articles');
if (!fs.existsSync(articlesDir)) {
  fs.mkdirSync(articlesDir, { recursive: true });
}

let generatedCount = 0;
allArticles.forEach(art => {
  const filePath = path.join(articlesDir, `${art.slug}.html`);
  fs.writeFileSync(filePath, renderArticleHtml(art), 'utf-8');
  generatedCount++;
});

console.log(`Successfully generated ${generatedCount} article HTML files in ar/articles/!`);

// Generate ar/articles/index.html with full width layout, 10 categories tabs, search filter, and cards
function renderArticlesIndexHtml(): string {
  return `<!DOCTYPE html>
<html lang="ar" dir="rtl" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>المكتبة المعرفية والمقالات التقنية (100 مقال متخصص) | يوسف الغمري</title>
  <meta name="description" content="مكتبة رقمية شاملة تضم 100 مقال تقني متخصص في أنظمة إدارة المحتوى، التجارة الإلكترونية، تطوير الواجهات، وهندسة البرمجيات والمناقصات التقنية.">
  <link rel="canonical" href="https://youssef-ghamry.dev/ar/articles/">

  <!-- Open Graph -->
  <meta property="og:locale" content="ar_AR">
  <meta property="og:type" content="website">
  <meta property="og:title" content="المكتبة المعرفية والمقالات التقنية (100 مقال) | يوسف الغمري">
  <meta property="og:description" content="100 مقال تقني متخصص في ووردبريس، شوبيفاي، سلة، زد، جوملا، دوروبال، أوبن كارت، ريأكت، نود جي إس، وأنجولار.">
  <meta property="og:url" content="https://youssef-ghamry.dev/ar/articles/">

  <!-- CSS -->
  <link rel="stylesheet" href="/assets/css/style.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&family=Tajawal:wght@400;500;700;800&display=swap" rel="stylesheet">
</head>
<body class="bg-[#050806] text-zinc-100 font-['Cairo',sans-serif] min-h-screen antialiased selection:bg-emerald-500/30 selection:text-emerald-300">

  <!-- Header (Full Width) -->
  <nav class="sticky top-0 z-50 bg-[#050806]/90 backdrop-blur-md border-b border-emerald-500/10">
    <div class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 h-20 flex items-center justify-between">
      <a href="/ar/" class="flex items-center gap-3 group">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-amber-500/20 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-400 group-hover:border-emerald-400 transition-colors">
          YG
        </div>
        <div class="flex flex-col">
          <span class="font-black text-lg text-white group-hover:text-emerald-400 transition-colors">يوسف الغمري</span>
          <span class="text-xs text-[#C6A15B]">استشارات ومشاريع رقمية</span>
        </div>
      </a>

      <div class="hidden md:flex items-center gap-8">
        <a href="/ar/" class="text-sm font-semibold text-zinc-300 hover:text-emerald-400 transition-colors">الرئيسية</a>
        <a href="/ar/services/" class="text-sm font-semibold text-zinc-300 hover:text-emerald-400 transition-colors">الخدمات</a>
        <a href="/ar/tenders/" class="text-sm font-semibold text-zinc-300 hover:text-emerald-400 transition-colors">المناقصات</a>
        <a href="/ar/articles/" class="text-sm font-semibold text-emerald-400">المقالات (100)</a>
        <a href="/ar/portfolio/" class="text-sm font-semibold text-zinc-300 hover:text-emerald-400 transition-colors">الأعمال</a>
        <a href="/ar/contact.html" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-900/20 transition-all hover:-translate-y-0.5">
          <span>طلب استشارة</span>
          <svg class="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </a>
      </div>
    </div>
  </nav>

  <!-- Hero Section (Full Width) -->
  <section class="w-full bg-gradient-to-b from-emerald-950/20 via-[#050806] to-[#050806] py-16 lg:py-24 border-b border-zinc-800/80">
    <div class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 text-center space-y-6">
      
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
        <span>مكتبة المعرفة التقنية والهندسية</span>
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
        <span class="text-[#C6A15B]">100 مقال متخصص</span>
      </div>

      <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl mx-auto">
        دليلك الهندسي الشامل في <span class="bg-gradient-to-r from-emerald-400 to-[#E5C78B] bg-clip-text text-transparent">البرمجيات والتجارة الرقمية</span>
      </h1>

      <p class="text-base sm:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
        أدلة عملية معمقة تغطي 10 تخصصات تقنية كبرى (10 مقالات لكل تخصص): ووردبريس، شوبيفاي، سلة، زد، جوملا، دوروبال، أوبن كارت، ريأكت، نود جي إس، وأنجولار.
      </p>

      <!-- Live Search & Filter Bar -->
      <div class="max-w-2xl mx-auto pt-4">
        <div class="relative">
          <input type="text" id="articleSearchInput" placeholder="ابحث في 100 مقال (مثال: أمان، شوبيفاي، سلة، ريأكت، SEO...)" 
            class="w-full py-4 pr-12 pl-4 rounded-2xl bg-zinc-900/90 border border-zinc-700/80 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 text-sm shadow-xl transition-all">
          <svg class="w-6 h-6 text-zinc-500 absolute right-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </div>
      </div>

    </div>
  </section>

  <!-- Category Filter Tabs (Full Width Fluid) -->
  <section class="w-full bg-zinc-950 border-b border-zinc-800/80 sticky top-20 z-40">
    <div class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-3 overflow-x-auto no-scrollbar flex items-center gap-2 whitespace-nowrap">
      <button onclick="filterCategory('all')" data-cat="all" class="category-btn active px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 text-white transition-all shadow-md">
        الكل (100)
      </button>
      ${categories.map(cat => `
        <button onclick="filterCategory('${cat}')" data-cat="${cat}" class="category-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 hover:border-zinc-700 transition-all">
          ${categoryMap[cat]?.label || cat} (${categoryMap[cat]?.count || 10})
        </button>
      `).join('')}
    </div>
  </section>

  <!-- Articles Grid (Full Width 100% Responsive Grid) -->
  <main class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-12 lg:py-16">
    
    <div class="flex items-center justify-between mb-8 pb-4 border-b border-zinc-800/80">
      <div class="text-sm font-bold text-zinc-400">
        المعروض: <span id="displayedCount" class="text-emerald-400 font-extrabold text-base">100</span> مقالاً
      </div>
      <div class="text-xs text-zinc-500">
        يتم التحديث والتطوير دورياً
      </div>
    </div>

    <div id="articlesGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
      ${allArticles.map(art => `
        <article class="article-card group flex flex-col bg-zinc-900/50 hover:bg-zinc-900/90 border border-zinc-800/80 hover:border-emerald-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/20" data-category="${art.category}" data-title="${art.title.toLowerCase()}" data-desc="${art.metaDesc.toLowerCase()}">
          
          <!-- Image -->
          <a href="/ar/articles/${art.slug}.html" class="block aspect-[16/9] w-full overflow-hidden bg-zinc-950 relative">
            <img src="/${art.featuredImage}" alt="${art.imageAlt}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <span class="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-black/70 backdrop-blur-md text-emerald-400 border border-emerald-500/20">
              ${art.categoryName}
            </span>
          </a>

          <!-- Content -->
          <div class="p-5 flex flex-col flex-grow justify-between space-y-4">
            <div class="space-y-2.5">
              <div class="flex items-center gap-2 text-[11px] text-zinc-400">
                <span>${art.date}</span>
                <span>•</span>
                <span>${art.readTime}</span>
              </div>
              <h2 class="text-base font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2 leading-snug">
                <a href="/ar/articles/${art.slug}.html">${art.title}</a>
              </h2>
              <p class="text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                ${art.metaDesc}
              </p>
            </div>

            <div class="pt-3 border-t border-zinc-800/60 flex items-center justify-between">
              <a href="/ar/articles/${art.slug}.html" class="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 group/link">
                <span>قراءة المقال</span>
                <svg class="w-3.5 h-3.5 rotate-180 group-hover/link:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
              <span class="text-[10px] text-zinc-500">${art.author}</span>
            </div>
          </div>

        </article>
      `).join('')}
    </div>

    <!-- Empty State -->
    <div id="noResultsState" class="hidden text-center py-20 space-y-4">
      <div class="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto text-zinc-500">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      </div>
      <h3 class="text-xl font-bold text-white">لم يتم العثور على مقالات مطابقة</h3>
      <p class="text-xs text-zinc-400">جرب البحث بكلمات أخرى أو اختر تصنيفاً مختلفاً من الأعلى.</p>
    </div>

  </main>

  <!-- Footer (Full Width) -->
  <footer class="w-full bg-zinc-950 border-t border-zinc-800/80 py-12 mt-20">
    <div class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center font-bold text-emerald-400 text-xs">YG</div>
        <span class="text-sm font-semibold text-zinc-300">يوسف الغمري © 2025. جميع الحقوق محفوظة.</span>
      </div>
      <div class="flex items-center gap-6 text-xs text-zinc-400">
        <a href="/ar/" class="hover:text-emerald-400">الرئيسية</a>
        <a href="/ar/services/" class="hover:text-emerald-400">الخدمات</a>
        <a href="/ar/tenders/" class="hover:text-emerald-400">المناقصات</a>
        <a href="/ar/articles/" class="hover:text-emerald-400">المقالات (100)</a>
        <a href="/ar/contact.html" class="hover:text-emerald-400">اتصل بنا</a>
      </div>
    </div>
  </footer>

  <!-- Filter & Search JavaScript -->
  <script>
    let activeCat = 'all';
    const searchInput = document.getElementById('articleSearchInput');
    const articles = document.querySelectorAll('.article-card');
    const displayedCount = document.getElementById('displayedCount');
    const noResults = document.getElementById('noResultsState');
    const filterButtons = document.querySelectorAll('.category-btn');

    function updateView() {
      const query = searchInput.value.trim().toLowerCase();
      let count = 0;

      articles.forEach(card => {
        const cat = card.getAttribute('data-category');
        const title = card.getAttribute('data-title') || '';
        const desc = card.getAttribute('data-desc') || '';

        const matchesCat = (activeCat === 'all' || cat === activeCat);
        const matchesQuery = !query || title.includes(query) || desc.includes(query);

        if (matchesCat && matchesQuery) {
          card.style.display = 'flex';
          count++;
        } else {
          card.style.display = 'none';
        }
      });

      displayedCount.textContent = count;
      if (count === 0) {
        noResults.classList.remove('hidden');
      } else {
        noResults.classList.add('hidden');
      }
    }

    function filterCategory(cat) {
      activeCat = cat;
      filterButtons.forEach(btn => {
        if (btn.getAttribute('data-cat') === cat) {
          btn.className = 'category-btn active px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 text-white transition-all shadow-md';
        } else {
          btn.className = 'category-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 hover:border-zinc-700 transition-all';
        }
      });
      updateView();
    }

    searchInput.addEventListener('input', updateView);
  </script>

</body>
</html>`;
}

fs.writeFileSync(path.join(articlesDir, 'index.html'), renderArticlesIndexHtml(), 'utf-8');
console.log('Successfully generated ar/articles/index.html with full width layout and live search!');

// Also export all100Articles.json / .ts for SPA consumption
const spaDataDir = path.resolve(process.cwd(), 'src/data');
if (!fs.existsSync(spaDataDir)) {
  fs.mkdirSync(spaDataDir, { recursive: true });
}

const tsContent = `// Auto-generated 100 articles library
export interface ArticleSummary {
  slug: string;
  title: string;
  metaDesc: string;
  category: string;
  categoryName: string;
  date: string;
  readTime: string;
  author: string;
  featuredImage: string;
}

export const all100Articles: ArticleSummary[] = ${JSON.stringify(
  allArticles.map(a => ({
    slug: a.slug,
    title: a.title,
    metaDesc: a.metaDesc,
    category: a.category,
    categoryName: a.categoryName,
    date: a.date,
    readTime: a.readTime,
    author: a.author,
    featuredImage: a.featuredImage
  })),
  null,
  2
)};
`;

fs.writeFileSync(path.join(spaDataDir, 'all100Articles.ts'), tsContent, 'utf-8');
console.log('Successfully wrote src/data/all100Articles.ts for SPA parity!');
