import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CATEGORIES, ServiceDef } from './servicesData.js';
import { PLATFORM_ARTICLES, ArticleDef } from './articlesData.js';
import { generateRemainingServices } from './generate_all.js';
import { renderHeader, renderFooter, escapeHtml } from './renderTemplates.js';
import { getServiceVisuals } from './serviceVisuals.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const allServices: ServiceDef[] = generateRemainingServices();

// =========================================================================
// 1. RENDER SERVICE PAGE HTML
// =========================================================================
function renderServicePageHtml(service: ServiceDef, lang: 'en' | 'ar'): string {
  const isAr = lang === 'ar';
  const title = isAr ? service.titleAr : service.titleEn;
  const headline = isAr ? service.headlineAr : service.headlineEn;
  const overview = isAr ? service.overviewAr : service.overviewEn;
  const badge = isAr ? service.badgeAr : service.badgeEn;
  const canonicalPath = isAr ? `/ar/services/${service.slug}.html` : `/en/services/${service.slug}.html`;
  const enUrl = `/en/services/${service.slug}.html`;
  const arUrl = `/ar/services/${service.slug}.html`;

  const headerHtml = renderHeader(lang, canonicalPath, allServices);
  const footerHtml = renderFooter(lang);
  const visuals = getServiceVisuals(service.slug, isAr);

  // Category info
  const category = CATEGORIES.find((c) => c.id === service.categoryId);
  const catName = category ? (isAr ? category.nameAr : category.nameEn) : (isAr ? 'الخدمات' : 'Services');

  // Breadcrumbs
  const homeUrl = isAr ? '/ar/index.html' : '/index.html';
  const servicesUrl = isAr ? '/ar/services/index.html' : '/en/services/index.html';

  // Problems
  const problemsList = isAr ? service.problemsAr : service.problemsEn;
  const problemsHtml = problemsList
    .map((p) => `
      <li class="flex items-start gap-3 p-3.5 rounded-xl bg-[#07130D]/80 border border-red-500/20 text-xs sm:text-sm text-slate-200">
        <span class="text-red-400 mt-0.5 text-sm">✕</span>
        <span>${escapeHtml(p)}</span>
      </li>
    `)
    .join('');

  // Target audience
  const targetList = isAr ? service.targetAr : service.targetEn;
  const targetHtml = targetList
    .map((t) => `
      <div class="p-3.5 rounded-xl bg-[#07130D]/80 border border-emerald-500/20 flex items-center gap-3 text-xs sm:text-sm text-emerald-200">
        <span class="text-[#E5C78B]">✦</span>
        <span>${escapeHtml(t)}</span>
      </div>
    `)
    .join('');

  // Scope
  const scopeList = isAr ? service.scopeAr : service.scopeEn;
  const scopeHtml = scopeList
    .map((s, idx) => `
      <div class="p-5 rounded-2xl bg-[#07130D]/90 border border-emerald-500/25 space-y-2 hover:border-[#E5C78B]/50 transition-colors">
        <div class="flex items-center gap-2">
          <span class="w-6 h-6 rounded-full bg-emerald-950 text-[#E5C78B] font-mono text-xs font-bold flex items-center justify-center border border-[#E5C78B]/30">0${idx + 1}</span>
          <h3 class="font-bold text-sm sm:text-base text-white">${escapeHtml(s.title)}</h3>
        </div>
        <p class="text-xs sm:text-sm text-emerald-100/75 leading-relaxed">${escapeHtml(s.desc)}</p>
      </div>
    `)
    .join('');

  // Deliverables
  const deliverablesList = isAr ? service.deliverablesAr : service.deliverablesEn;
  const deliverablesHtml = deliverablesList
    .map((d) => `
      <div class="p-4 rounded-xl bg-[#050806]/90 border border-[#C6A15B]/30 flex items-start gap-3">
        <span class="text-emerald-400 font-bold text-base mt-0.5">✓</span>
        <span class="text-xs sm:text-sm font-medium text-slate-200">${escapeHtml(d)}</span>
      </div>
    `)
    .join('');

  // Workflow
  const workflowList = isAr ? service.workflowAr : service.workflowEn;
  const workflowHtml = workflowList
    .map((w) => `
      <div class="relative p-5 rounded-2xl bg-[#07130D]/90 border border-emerald-500/20 space-y-2">
        <div class="text-[#E5C78B] font-mono font-bold text-sm tracking-widest">${w.step}</div>
        <h4 class="font-bold text-white text-sm sm:text-base">${escapeHtml(w.title)}</h4>
        <p class="text-xs sm:text-sm text-emerald-200/70 leading-relaxed">${escapeHtml(w.desc)}</p>
      </div>
    `)
    .join('');

  // Benefits
  const benefitsList = isAr ? service.benefitsAr : service.benefitsEn;
  const benefitsHtml = benefitsList
    .map((b) => `
      <div class="p-5 rounded-2xl bg-[#0B1F16]/50 border border-emerald-500/25 space-y-2">
        <h4 class="font-bold text-[#E5C78B] text-sm sm:text-base flex items-center gap-2">
          <span>★</span>
          <span>${escapeHtml(b.title)}</span>
        </h4>
        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${escapeHtml(b.desc)}</p>
      </div>
    `)
    .join('');

  // FAQs
  const faqsList = isAr ? service.faqsAr : service.faqsEn;
  const faqsHtml = faqsList
    .map((f, i) => `
      <div class="border border-emerald-950/80 rounded-xl p-4 bg-[#07130D]/70 space-y-2">
        <div class="font-bold text-sm sm:text-base text-white flex items-start gap-2">
          <span class="text-[#E5C78B]">Q:</span>
          <span>${escapeHtml(f.q)}</span>
        </div>
        <p class="text-xs sm:text-sm text-emerald-200/80 leading-relaxed ps-5">${escapeHtml(f.a)}</p>
      </div>
    `)
    .join('');

  // Related Services
  const relatedServicesList = allServices.filter((s) => service.relatedServices.includes(s.slug) && s.slug !== service.slug).slice(0, 4);
  const relatedServicesHtml = relatedServicesList
    .map((s) => {
      const sTitle = isAr ? s.titleAr : s.titleEn;
      const sOverview = isAr ? s.overviewAr : s.overviewEn;
      const sUrl = isAr ? `/ar/services/${s.slug}.html` : `/en/services/${s.slug}.html`;
      return `
        <a href="${sUrl}" class="p-4 rounded-xl bg-[#07130D]/90 border border-emerald-500/20 hover:border-[#E5C78B] transition-all block group">
          <div class="text-xs text-[#E5C78B] font-mono mb-1">${isAr ? s.badgeAr : s.badgeEn}</div>
          <h4 class="text-sm font-bold text-white group-hover:text-[#E5C78B] transition-colors mb-2">${escapeHtml(sTitle)}</h4>
          <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed">${escapeHtml(sOverview)}</p>
          <div class="mt-3 text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
            <span>${isAr ? 'عرض تفاصيل الخدمة ←' : 'Explore Service →'}</span>
          </div>
        </a>
      `;
    })
    .join('');

  // Related Articles
  const relatedArticlesList = PLATFORM_ARTICLES.filter((a) => service.relatedArticles.includes(a.slug)).slice(0, 3);
  const relatedArticlesHtml = relatedArticlesList
    .map((a) => {
      const aTitle = isAr ? a.titleAr : a.titleEn;
      const aSummary = isAr ? a.summaryAr : a.summaryEn;
      const aUrl = isAr ? `/ar/articles/${a.slug}.html` : `/en/articles/${a.slug}.html`;
      return `
        <a href="${aUrl}" class="p-4 rounded-xl bg-[#050806]/90 border border-emerald-950/80 hover:border-emerald-500/40 transition-colors block group">
          <div class="flex items-center gap-2 text-[10px] text-emerald-400 font-mono mb-1">
            <span>📖</span>
            <span>${a.readTime}</span>
          </div>
          <h4 class="text-sm font-bold text-white group-hover:text-[#E5C78B] transition-colors mb-1">${escapeHtml(aTitle)}</h4>
          <p class="text-xs text-emerald-200/70 line-clamp-2 leading-relaxed">${escapeHtml(aSummary)}</p>
        </a>
      `;
    })
    .join('');

  // Schema.org
  const schemaJson = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: isAr ? 'الرئيسية' : 'Home', item: homeUrl },
          { '@type': 'ListItem', position: 2, name: isAr ? 'دليل الخدمات' : 'Services Directory', item: servicesUrl },
          { '@type': 'ListItem', position: 3, name: title, item: canonicalPath }
        ]
      },
      {
        '@type': 'Service',
        name: title,
        description: overview,
        serviceType: catName,
        provider: {
          '@type': 'Person',
          name: isAr ? 'يوسف غمري' : 'Youssef Ghamry',
          jobTitle: isAr ? 'أخصائي مناقصات واستشارات برمجية' : 'Tender & Proposal Specialist | Web Engineer'
        },
        areaServed: ['SA', 'EG', 'AE', 'QA', 'BH', 'OM', 'KW'],
        availableLanguage: ['ar', 'en']
      }
    ]
  }, null, 2);

  return `<!doctype html>
<html lang="${lang}" dir="${isAr ? 'rtl' : 'ltr'}" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)} | ${isAr ? 'يوسف غمري' : 'Youssef Ghamry'}</title>
    <meta name="description" content="${escapeHtml(overview)}" />

    <link rel="canonical" href="${canonicalPath}" />
    <link rel="alternate" hreflang="en" href="${enUrl}" />
    <link rel="alternate" hreflang="ar" href="${arUrl}" />

    <meta property="og:type" content="article" />
    <meta property="og:title" content="${escapeHtml(title)} | ${isAr ? 'يوسف غمري' : 'Youssef Ghamry'}" />
    <meta property="og:description" content="${escapeHtml(overview)}" />
    <meta property="og:image" content="/assets/aistudio/image_ef5d64bf.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(overview)}" />

    <link rel="stylesheet" href="/assets/css/style.css" />

    <script type="application/ld+json">
${schemaJson}
    </script>
  </head>
  <body class="theme-gold selection:bg-emerald-600 selection:text-white">

    ${headerHtml}

    <main class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 relative z-10">
      
      <!-- Breadcrumbs -->
      <nav class="breadcrumbs flex items-center gap-2 text-xs text-emerald-400" aria-label="Breadcrumb">
        <a href="${homeUrl}" class="hover:text-[#E5C78B]">${isAr ? 'الرئيسية' : 'Home'}</a>
        <span>/</span>
        <a href="${servicesUrl}" class="hover:text-[#E5C78B]">${isAr ? 'دليل الخدمات' : 'Services Directory'}</a>
        <span>/</span>
        <span class="text-white font-semibold truncate">${escapeHtml(title)}</span>
      </nav>

      <!-- Bespoke Hero Header with Platform Logo, Tech Stack & 3D Interactive Card -->
      <header class="relative p-6 sm:p-10 rounded-3xl border border-emerald-500/30 overflow-hidden space-y-8" style="background: radial-gradient(circle at ${isAr ? '90%' : '10%'} 20%, ${visuals.glowColor} 0%, rgba(7, 19, 13, 0.95) 75%);">
        
        <!-- Ambient decorative background mesh -->
        <div class="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <!-- Left/Main Column: Badges, Title, Overview, Tech Stack -->
          <div class="lg:col-span-7 space-y-5 text-start">
            
            <div class="flex flex-wrap items-center gap-3">
              <div class="p-2 rounded-2xl bg-[#07130D] border border-emerald-500/30 shadow-lg flex-shrink-0">
                ${visuals.logoSvg}
              </div>
              <div class="space-y-1">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="badge-emerald">${escapeHtml(badge)}</span>
                  <span class="badge-gold">${escapeHtml(catName)}</span>
                </div>
                <div class="text-xs font-mono font-bold text-[#E5C78B] tracking-wider uppercase">
                  ${escapeHtml(visuals.brandName)}
                </div>
              </div>
            </div>

            <h1 class="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-serif leading-tight">
              ${escapeHtml(title)}
            </h1>

            <p class="text-base sm:text-lg font-medium leading-relaxed" style="color: ${visuals.accentColor};">
              ${escapeHtml(headline)}
            </p>

            <p class="text-sm sm:text-base text-emerald-100/85 leading-relaxed font-normal">
              ${escapeHtml(overview)}
            </p>

            <!-- Tech Stack Chips -->
            <div class="pt-2">
              <span class="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                ${isAr ? 'التقنيات والأدوات المعمارية المستخدمة:' : 'Architectural Tech Stack & Standards:'}
              </span>
              <div class="flex flex-wrap gap-2">
                ${visuals.techChips.map(chip => `
                  <span class="text-xs px-3 py-1 rounded-lg bg-[#050806]/90 border border-emerald-500/30 text-emerald-200 font-mono flex items-center gap-1.5 shadow-sm">
                    <span class="w-1.5 h-1.5 rounded-full" style="background-color: ${visuals.accentColor};"></span>
                    <span>${escapeHtml(chip)}</span>
                  </span>
                `).join('')}
              </div>
            </div>

            <!-- CTA Action Buttons -->
            <div class="pt-3 flex flex-wrap items-center gap-3">
              <a href="${isAr ? '/ar/index.html#contact' : '/index.html#contact'}" class="btn-gold py-2.5 px-6 text-xs font-bold shadow-lg">
                <span>${isAr ? 'طلب استشارة ومواصفات المشروع' : 'Request Technical Proposal'}</span>
              </a>
              <a href="${servicesUrl}" class="btn-ghost-gold py-2.5 px-5 text-xs font-semibold">
                <span>${isAr ? 'دليل جميع الخدمات (94)' : 'All 94 Services'}</span>
              </a>
            </div>

          </div>

          <!-- Right/Secondary Column: 3D Perspective Card & Live Operational KPIs -->
          <div class="lg:col-span-5 space-y-4">
            ${visuals.heroVisualCardHtml}

            <!-- 3 Standout KPI Badges -->
            <div class="grid grid-cols-3 gap-2 text-center">
              ${visuals.kpiBadges.map(kpi => `
                <div class="p-2.5 rounded-xl bg-[#050806]/90 border border-emerald-500/20 space-y-0.5">
                  <div class="text-sm">${kpi.icon}</div>
                  <div class="text-xs font-bold text-white font-mono">${escapeHtml(kpi.value)}</div>
                  <div class="text-[9px] text-slate-400 leading-tight">${escapeHtml(kpi.label)}</div>
                </div>
              `).join('')}
            </div>
          </div>

        </div>

      </header>

      ${visuals.architectureDiagramHtml ? visuals.architectureDiagramHtml : ''}

      <!-- Challenges & Target Fit -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-4 p-6 rounded-2xl bg-[#0B1F16]/40 border border-emerald-500/20">
          <h2 class="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <span class="text-red-400">⚠</span>
            <span>${isAr ? 'المشكلات والتحديات التي نعالجها' : 'Problems & Challenges We Solve'}</span>
          </h2>
          <ul class="space-y-2.5 list-none p-0 m-0">
            ${problemsHtml}
          </ul>
        </div>

        <div class="space-y-4 p-6 rounded-2xl bg-[#0B1F16]/40 border border-emerald-500/20">
          <h2 class="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <span class="text-[#E5C78B]">🎯</span>
            <span>${isAr ? 'لمن نوجه هذه الخدمة؟ (العملاء المستهدفون)' : 'Who This Service Is Engineered For'}</span>
          </h2>
          <div class="space-y-2.5">
            ${targetHtml}
          </div>
        </div>
      </section>

      <!-- Detailed Scope of Work -->
      <section class="space-y-6">
        <div class="border-b border-emerald-950/60 pb-3 flex items-center justify-between">
          <div>
            <span class="text-xs font-mono uppercase tracking-wider text-[#E5C78B]">${isAr ? 'نطاق العمل التفصيلي' : 'Comprehensive Scope'}</span>
            <h2 class="text-xl sm:text-2xl font-bold text-white mt-1">${isAr ? 'ما تشمله الخدمة خطوة بخطوة' : 'What We Deliver Under This Service'}</h2>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${scopeHtml}
        </div>
      </section>

      <!-- Key Deliverables -->
      <section class="space-y-6 p-6 sm:p-8 rounded-3xl bg-[#07130D]/90 border border-[#C6A15B]/30">
        <div>
          <span class="text-xs font-mono uppercase tracking-wider text-[#E5C78B]">${isAr ? 'المخرجات النهائية' : 'Concrete Tangible Deliverables'}</span>
          <h2 class="text-xl sm:text-2xl font-bold text-white mt-1">${isAr ? 'المستندات والمخرجات التي تستلمها' : 'What You Receive Upon Completion'}</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          ${deliverablesHtml}
        </div>
      </section>

      <!-- Methodology Workflow -->
      <section class="space-y-6">
        <div>
          <span class="text-xs font-mono uppercase tracking-wider text-emerald-400">${isAr ? 'منهجية التنفيذ' : 'Execution Methodology'}</span>
          <h2 class="text-xl sm:text-2xl font-bold text-white mt-1">${isAr ? 'سير العمل ومراحل الإنجاز' : 'How We Execute From Start to Finish'}</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          ${workflowHtml}
        </div>
      </section>

      <!-- Business Benefits -->
      <section class="space-y-6">
        <div>
          <span class="text-xs font-mono uppercase tracking-wider text-[#E5C78B]">${isAr ? 'القيمة والعائد التجاري' : 'Strategic Business Value'}</span>
          <h2 class="text-xl sm:text-2xl font-bold text-white mt-1">${isAr ? 'مزايا الاستثمار في هذه الخدمة' : 'Key Competitive Advantages'}</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          ${benefitsHtml}
        </div>
      </section>

      <!-- FAQs -->
      <section class="space-y-6">
        <div>
          <span class="text-xs font-mono uppercase tracking-wider text-emerald-400">${isAr ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}</span>
          <h2 class="text-xl sm:text-2xl font-bold text-white mt-1">${isAr ? 'أهم الاستفسارات حول الخدمة' : 'Common Inquiries About This Offering'}</h2>
        </div>
        <div class="space-y-3">
          ${faqsHtml}
        </div>
      </section>

      ${relatedArticlesHtml ? `
      <!-- Educational Articles Connection -->
      <section class="space-y-6 border-t border-emerald-950/80 pt-8">
        <div>
          <span class="text-xs font-mono uppercase tracking-wider text-[#E5C78B]">${isAr ? 'مقالات وأدلة تعليمية مرتبطة' : 'Educational Guides & Articles'}</span>
          <h2 class="text-xl sm:text-2xl font-bold text-white mt-1">${isAr ? 'تعمق في فهم التقنيات والمنهجيات' : 'Deep-Dive Knowledge Resources'}</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          ${relatedArticlesHtml}
        </div>
      </section>
      ` : ''}

      ${relatedServicesHtml ? `
      <!-- Related Services Grid -->
      <section class="space-y-6 border-t border-emerald-950/80 pt-8">
        <div>
          <span class="text-xs font-mono uppercase tracking-wider text-emerald-400">${isAr ? 'خدمات مكملة وذات صلة' : 'Complementary Services'}</span>
          <h2 class="text-xl sm:text-2xl font-bold text-white mt-1">${isAr ? 'خدمات قد تحتاجها لمنظومة متكاملة' : 'Related Specialized Solutions'}</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          ${relatedServicesHtml}
        </div>
      </section>
      ` : ''}

      <!-- High-Conversion Contact CTA Box -->
      <section class="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#07130D] via-[#0B1F16] to-[#050806] border border-[#C6A15B]/50 shadow-2xl text-center space-y-6">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C6A15B]/15 border border-[#C6A15B]/40 text-[#E5C78B] text-xs font-semibold">
          <span>💼</span>
          <span>${isAr ? 'جاهز لبدء مشروعك أو استشارتك؟' : 'Ready to Launch Your Project or RFP?'}</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-white font-serif max-w-2xl mx-auto leading-tight">
          ${isAr ? 'احصل على دراسة متخصصة وعرض فني مالي مفصل لمنشأتك' : 'Request a Tailored Technical Proposal & Consultation'}
        </h2>
        <p class="text-xs sm:text-sm text-emerald-200/80 max-w-xl mx-auto leading-relaxed">
          ${isAr 
            ? 'تواصل معي مباشرة لمناقشة كراسة الشروط أو متطلبات الموقع البرمجي والأنظمة، وسأزودك بخطة عمل وجدول زمني محدد.'
            : 'Get in touch directly to review your RFP specifications or web development scope. Receive a detailed roadmap and milestone timeline.'}
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a href="${isAr ? '/ar/index.html#contact' : '/index.html#contact'}" class="btn-gold py-3 px-8 text-sm font-bold shadow-lg">
            <span>${isAr ? 'طلب استشارة ومناقشة المشروع' : 'Book a Consultation Now'}</span>
          </a>
          <a href="https://wa.me/201503292942" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-emerald-500/40 hover:border-emerald-400 bg-[#07130D] text-xs font-bold text-white transition-colors">
            <span>💬</span>
            <span>WhatsApp (+201503292942)</span>
          </a>
        </div>
      </section>

    </main>

    ${footerHtml}

    <script src="/assets/js/main.js"></script>
  </body>
</html>`;
}

// =========================================================================
// 2. RENDER ARTICLE PAGE HTML
// =========================================================================
function renderArticlePageHtml(article: ArticleDef, lang: 'en' | 'ar'): string {
  const isAr = lang === 'ar';
  const title = isAr ? article.titleAr : article.titleEn;
  const summary = isAr ? article.summaryAr : article.summaryEn;
  const badge = isAr ? article.badgeAr : article.badgeEn;
  const canonicalPath = isAr ? `/ar/articles/${article.slug}.html` : `/en/articles/${article.slug}.html`;
  const enUrl = `/en/articles/${article.slug}.html`;
  const arUrl = `/ar/articles/${article.slug}.html`;

  const headerHtml = renderHeader(lang, canonicalPath, allServices);
  const footerHtml = renderFooter(lang);

  const homeUrl = isAr ? '/ar/index.html' : '/index.html';
  const articlesIndexUrl = isAr ? '/ar/articles/index.html' : '/en/articles/index.html';

  const sectionsList = isAr ? article.sectionsAr : article.sectionsEn;
  const sectionsHtml = sectionsList
    .map((sec) => `
      <section class="space-y-4">
        <h2 class="text-xl sm:text-2xl font-bold text-white font-serif border-b border-emerald-950/60 pb-2">
          ${escapeHtml(sec.heading)}
        </h2>
        ${sec.paragraphs.map((p) => `<p class="text-sm sm:text-base text-emerald-100/80 leading-relaxed font-normal">${escapeHtml(p)}</p>`).join('')}
        ${sec.keyTakeaways ? `
          <div class="content-callout my-5">
            <div class="font-bold text-[#E5C78B] text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>💡</span>
              <span>${isAr ? 'الخلاصة والنتائج الجوهرية:' : 'Key Architectural Takeaways:'}</span>
            </div>
            <ul class="space-y-1.5 list-none p-0 m-0">
              ${sec.keyTakeaways.map((k) => `
                <li class="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                  <span class="text-emerald-400">✓</span>
                  <span>${escapeHtml(k)}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        ` : ''}
      </section>
    `)
    .join('');

  // Related Services Links
  const relatedServicesList = allServices.filter((s) => article.relatedServices.includes(s.slug)).slice(0, 3);
  const relatedServicesHtml = relatedServicesList
    .map((s) => {
      const sTitle = isAr ? s.titleAr : s.titleEn;
      const sUrl = isAr ? `/ar/services/${s.slug}.html` : `/en/services/${s.slug}.html`;
      return `
        <a href="${sUrl}" class="p-4 rounded-xl bg-[#07130D]/80 border border-emerald-500/25 hover:border-[#E5C78B] transition-all block group">
          <div class="text-[10px] text-[#E5C78B] font-mono mb-1">${isAr ? s.badgeAr : s.badgeEn}</div>
          <h4 class="text-sm font-bold text-white group-hover:text-[#E5C78B] transition-colors">${escapeHtml(sTitle)}</h4>
        </a>
      `;
    })
    .join('');

  // Related Articles Links
  const relatedArticlesList = PLATFORM_ARTICLES.filter((a) => article.relatedArticles.includes(a.slug) && a.slug !== article.slug).slice(0, 3);
  const relatedArticlesHtml = relatedArticlesList
    .map((a) => {
      const aTitle = isAr ? a.titleAr : a.titleEn;
      const aUrl = isAr ? `/ar/articles/${a.slug}.html` : `/en/articles/${a.slug}.html`;
      return `
        <a href="${aUrl}" class="p-4 rounded-xl bg-[#050806]/80 border border-emerald-950/80 hover:border-emerald-500/40 transition-colors block group">
          <div class="text-[10px] text-emerald-400 font-mono mb-1">${a.readTime}</div>
          <h4 class="text-sm font-bold text-white group-hover:text-[#E5C78B] transition-colors">${escapeHtml(aTitle)}</h4>
        </a>
      `;
    })
    .join('');

  const schemaJson = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: summary,
    inLanguage: lang,
    author: {
      '@type': 'Person',
      name: isAr ? 'يوسف غمري' : 'Youssef Ghamry',
      jobTitle: isAr ? 'أخصائي مناقصات واستشارات برمجية' : 'Tender Specialist & Web Engineer'
    },
    publisher: {
      '@type': 'Person',
      name: isAr ? 'يوسف غمري' : 'Youssef Ghamry'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalPath
    }
  }, null, 2);

  return `<!doctype html>
<html lang="${lang}" dir="${isAr ? 'rtl' : 'ltr'}" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)} | ${isAr ? 'يوسف غمري' : 'Youssef Ghamry'}</title>
    <meta name="description" content="${escapeHtml(summary)}" />

    <link rel="canonical" href="${canonicalPath}" />
    <link rel="alternate" hreflang="en" href="${enUrl}" />
    <link rel="alternate" hreflang="ar" href="${arUrl}" />

    <meta property="og:type" content="article" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(summary)}" />
    <meta property="og:image" content="/assets/aistudio/image_ef5d64bf.png" />
    <meta name="twitter:card" content="summary_large_image" />

    <link rel="stylesheet" href="/assets/css/style.css" />

    <script type="application/ld+json">
${schemaJson}
    </script>
  </head>
  <body class="theme-gold selection:bg-emerald-600 selection:text-white">

    ${headerHtml}

    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 relative z-10">
      
      <!-- Breadcrumbs -->
      <nav class="breadcrumbs flex items-center gap-2 text-xs text-emerald-400" aria-label="Breadcrumb">
        <a href="${homeUrl}" class="hover:text-[#E5C78B]">${isAr ? 'الرئيسية' : 'Home'}</a>
        <span>/</span>
        <a href="${articlesIndexUrl}" class="hover:text-[#E5C78B]">${isAr ? 'مركز المعرفة والمقالات' : 'Knowledge Hub'}</a>
        <span>/</span>
        <span class="text-white font-semibold truncate">${escapeHtml(title)}</span>
      </nav>

      <!-- Article Header -->
      <header class="border-b border-emerald-950/70 pb-6 space-y-3">
        <div class="flex items-center gap-3 text-xs">
          <span class="badge-emerald">${escapeHtml(badge)}</span>
          <span class="text-slate-400 font-mono">${article.readTime}</span>
        </div>
        <h1 class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-serif leading-tight">
          ${escapeHtml(title)}
        </h1>
        <div class="p-4 rounded-xl bg-[#07130D]/80 border border-emerald-500/20 text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
          <strong class="text-[#E5C78B] block mb-1 font-mono uppercase tracking-wider">${isAr ? 'الملخص التنفيذي للمقال:' : 'Executive Summary:'}</strong>
          ${escapeHtml(summary)}
        </div>
      </header>

      <!-- Article Content -->
      <article class="space-y-8">
        ${sectionsHtml}
      </article>

      ${relatedServicesHtml ? `
      <!-- Connected Services -->
      <section class="space-y-4 border-t border-emerald-950/80 pt-8">
        <div class="text-xs font-mono uppercase tracking-wider text-[#E5C78B]">${isAr ? 'خدمات برمجية ذات صلة بالمقال' : 'Related Services'}</div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          ${relatedServicesHtml}
        </div>
      </section>
      ` : ''}

      ${relatedArticlesHtml ? `
      <!-- Connected Articles -->
      <section class="space-y-4 border-t border-emerald-950/80 pt-8">
        <div class="text-xs font-mono uppercase tracking-wider text-emerald-400">${isAr ? 'مقالات إضافية مقترحة' : 'Further Reading'}</div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          ${relatedArticlesHtml}
        </div>
      </section>
      ` : ''}

      <!-- Author Box -->
      <section class="p-6 rounded-2xl bg-[#07130D] border border-[#C6A15B]/30 flex flex-col sm:flex-row items-center gap-4">
        <div class="w-16 h-16 rounded-full border border-[#C6A15B]/60 p-0.5 bg-[#050806] shrink-0">
          <img src="/assets/aistudio/image_ef5d64bf.png" alt="Youssef Ghamry" class="w-full h-full object-cover rounded-full" />
        </div>
        <div class="space-y-1 text-center sm:text-start">
          <h3 class="font-bold text-white text-base">${isAr ? 'يوسف غمري' : 'Youssef Ghamry'}</h3>
          <p class="text-xs text-emerald-300/80">
            ${isAr 
              ? 'أخصائي مناقصات وعروض فنية ومدقق جودة، مهندس حلول ويب وأنظمة برمجية سحابية. حاصل على 27 اعتماداً مهنياً دولياً.'
              : 'Tender & Proposal Specialist, Bid QA Lead, and Full-Stack Web Engineer with 27 verified professional credentials.'}
          </p>
        </div>
      </section>

    </main>

    ${footerHtml}

    <script src="/assets/js/main.js"></script>
  </body>
</html>`;
}

// =========================================================================
// 3. RENDER CENTRAL SERVICES DIRECTORY (/en/services/index.html & /ar/services/index.html)
// =========================================================================
function renderServicesDirectoryHtml(lang: 'en' | 'ar'): string {
  const isAr = lang === 'ar';
  const canonicalPath = isAr ? '/ar/services/index.html' : '/en/services/index.html';
  const enUrl = '/en/services/index.html';
  const arUrl = '/ar/services/index.html';

  const headerHtml = renderHeader(lang, canonicalPath, allServices);
  const footerHtml = renderFooter(lang);

  // Category filter tabs
  const filterTabsHtml = `
    <button class="service-dir-filter active" data-filter="all">
      ${isAr ? 'جميع الخدمات (90+)' : 'All Services (90+)'}
    </button>
    ${CATEGORIES.map((cat) => `
      <button class="service-dir-filter" data-filter="${cat.id}">
        <span>${cat.icon}</span>
        <span>${isAr ? cat.nameAr : cat.nameEn}</span>
      </button>
    `).join('')}
  `;

  // Render each category section
  const categoriesSectionsHtml = CATEGORIES.map((cat) => {
    const catName = isAr ? cat.nameAr : cat.nameEn;
    const catDesc = isAr ? cat.descriptionAr : cat.descriptionEn;
    const catServices = allServices.filter((s) => s.categoryId === cat.id);

    const servicesCardsHtml = catServices.map((s) => {
      const sTitle = isAr ? s.titleAr : s.titleEn;
      const sOverview = isAr ? s.overviewAr : s.overviewEn;
      const sBadge = isAr ? s.badgeAr : s.badgeEn;
      const sUrl = isAr ? `/ar/services/${s.slug}.html` : `/en/services/${s.slug}.html`;
      const visuals = getServiceVisuals(s.slug, isAr);
      const smallLogo = visuals.logoSvg.replace('w-14 h-14', 'w-7 h-7');

      return `
        <article class="service-dir-card p-6 rounded-2xl bg-[#07130D]/90 border border-emerald-500/20 hover:border-[#E5C78B] interactive-card transition-all flex flex-col justify-between group space-y-4" data-category="${cat.id}">
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div class="p-1.5 rounded-lg bg-[#050806] border border-emerald-500/30 shrink-0">
                  ${smallLogo}
                </div>
                <span class="text-[11px] font-mono text-[#E5C78B] font-semibold tracking-wide">${escapeHtml(sBadge)}</span>
              </div>
              <span class="text-[10px] text-slate-500 font-mono">${s.slug}</span>
            </div>
            <h3 class="text-base sm:text-lg font-bold text-white group-hover:text-[#E5C78B] transition-colors font-serif leading-snug">
              <a href="${sUrl}" class="hover:underline">${escapeHtml(sTitle)}</a>
            </h3>
            <p class="text-xs sm:text-sm text-emerald-100/75 leading-relaxed line-clamp-3">
              ${escapeHtml(sOverview)}
            </p>
            <div class="flex flex-wrap gap-1.5 pt-1">
              ${visuals.techChips.slice(0, 3).map(chip => `
                <span class="text-[10px] px-2 py-0.5 rounded-md bg-[#050806] border border-emerald-500/20 text-emerald-300 font-mono">
                  ${escapeHtml(chip)}
                </span>
              `).join('')}
            </div>
          </div>

          <div class="pt-4 border-t border-emerald-950/70 flex items-center justify-between">
            <a href="${sUrl}" class="text-xs font-bold text-emerald-400 group-hover:text-[#E5C78B] flex items-center gap-1.5 transition-colors">
              <span>${isAr ? 'عرض التفاصيل الكاملة ←' : 'Explore Service Scope →'}</span>
            </a>
            <span class="text-[11px] text-slate-400 font-mono">${visuals.kpiBadges[0] ? visuals.kpiBadges[0].value : (isAr ? 'خدمة مخصصة' : 'Custom')}</span>
          </div>
        </article>
      `;
    }).join('');

    return `
      <section id="${cat.id}" class="category-block space-y-6 pt-8 border-t border-emerald-950/80" data-cat-id="${cat.id}">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div class="space-y-1.5 max-w-2xl">
            <div class="text-xs font-mono uppercase tracking-wider text-[#E5C78B] flex items-center gap-2">
              <span class="text-lg">${cat.icon}</span>
              <span>${escapeHtml(catName)}</span>
              <span class="text-emerald-500">(${catServices.length} ${isAr ? 'خدمة' : 'Services'})</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-white font-serif tracking-tight">
              ${escapeHtml(catName)}
            </h2>
            <p class="text-xs sm:text-sm text-emerald-200/80 leading-relaxed">
              ${escapeHtml(catDesc)}
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          ${servicesCardsHtml}
        </div>
      </section>
    `;
  }).join('');

  return `<!doctype html>
<html lang="${lang}" dir="${isAr ? 'rtl' : 'ltr'}" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${isAr ? 'دليل الخدمات الشامل (90+ خدمة) | يوسف غمري' : 'Professional Services Directory (90+ Services) | Youssef Ghamry'}</title>
    <meta name="description" content="${isAr 
      ? 'دليل الخدمات الاحترافي ليوسف غمري: تصميم وتطوير المواقع، الأنظمة المؤسسية ERP، تطبيقات الجوال، خدمات المناقصات والعروض الفنية، والسيو التقني.'
      : 'Comprehensive directory of 90+ professional services across Website Development, Enterprise ERP Systems, Mobile Apps, Saudi Etimad Tenders, and Technical SEO.'}" />

    <link rel="canonical" href="${canonicalPath}" />
    <link rel="alternate" hreflang="en" href="${enUrl}" />
    <link rel="alternate" hreflang="ar" href="${arUrl}" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="${isAr ? 'دليل الخدمات الشامل | يوسف غمري' : 'Professional Services Directory | Youssef Ghamry'}" />
    <meta property="og:description" content="${isAr ? 'دليل متكامل يضم أكثر من 90 خدمة تخصصية في المناقصات والويب والأنظمة.' : 'Comprehensive catalog of 90+ specialized services in tenders, web engineering, and software.'}" />
    <meta property="og:image" content="/assets/aistudio/image_ef5d64bf.png" />

    <link rel="stylesheet" href="/assets/css/style.css" />

    <style>
      .service-dir-filter {
        padding: 0.5rem 1rem;
        border-radius: 9999px;
        background: rgba(7, 19, 13, 0.85);
        border: 1px solid rgba(16, 185, 129, 0.25);
        color: #94A3B8;
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        white-space: nowrap;
      }
      .service-dir-filter:hover, .service-dir-filter.active {
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.3) 0%, rgba(198, 161, 91, 0.25) 100%);
        border-color: #E5C78B;
        color: #FFFFFF;
        box-shadow: 0 4px 15px rgba(16, 185, 129, 0.2);
      }
    </style>
  </head>
  <body class="theme-gold selection:bg-emerald-600 selection:text-white">

    ${headerHtml}

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 relative z-10">
      
      <!-- Breadcrumb -->
      <nav class="breadcrumbs flex items-center gap-2 text-xs text-emerald-400" aria-label="Breadcrumb">
        <a href="${isAr ? '/ar/index.html' : '/index.html'}" class="hover:text-[#E5C78B]">${isAr ? 'الرئيسية' : 'Home'}</a>
        <span>/</span>
        <span class="text-white font-semibold">${isAr ? 'دليل الخدمات' : 'Services Directory'}</span>
      </nav>

      <!-- Page Header -->
      <header class="border-b border-emerald-950/70 pb-8 space-y-4">
        <div class="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#E5C78B]">
          <span class="w-2 h-2 rounded-full bg-[#C6A15B] animate-pulse"></span>
          <span>${isAr ? 'المنظومة المهنية الشاملة' : 'Complete Professional Capability Catalog'}</span>
        </div>
        <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif leading-tight">
          ${isAr ? 'دليل الخدمات' : 'Services'} <span class="gold-gradient-text">${isAr ? 'المهنية والمؤسسية' : 'Directory'}</span>
        </h1>
        <p class="text-sm sm:text-base text-emerald-200/80 max-w-3xl leading-relaxed">
          ${isAr 
            ? 'تصفح أكثر من 90 خدمة احترافية موزعة على 6 قطاعات رئيسية: تصميم وتطوير المواقع، البرمجيات والأنظمة الإدارية، تطبيقات الجوال، خدمات المناقصات والعروض الفنية، التسويق الرقمي والسيو، وتطوير الأعمال والاستشارات التقنية.'
            : 'Explore over 90 specialized professional services organized across 6 core pillars: Website Design & Development, Software & Business Systems, Mobile Applications, Tender & Proposal Services, Digital Marketing & SEO, and Business Development & Consulting.'}
        </p>

        <!-- Metrics Banner -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
          <div class="p-4 rounded-xl bg-[#07130D]/80 border border-emerald-500/20 text-center">
            <div class="font-cinzel text-xl sm:text-2xl font-bold gold-gradient-text">6</div>
            <div class="text-[11px] text-slate-400 uppercase tracking-wider font-mono">${isAr ? 'قطاعات رئيسية' : 'Core Domains'}</div>
          </div>
          <div class="p-4 rounded-xl bg-[#07130D]/80 border border-emerald-500/20 text-center">
            <div class="font-cinzel text-xl sm:text-2xl font-bold text-emerald-400">90+</div>
            <div class="text-[11px] text-slate-400 uppercase tracking-wider font-mono">${isAr ? 'خدمة مخصصة' : 'Specialized Services'}</div>
          </div>
          <div class="p-4 rounded-xl bg-[#07130D]/80 border border-emerald-500/20 text-center">
            <div class="font-cinzel text-xl sm:text-2xl font-bold gold-gradient-text">100%</div>
            <div class="text-[11px] text-slate-400 uppercase tracking-wider font-mono">${isAr ? 'أكواد وحلول مخصصة' : 'Custom Built'}</div>
          </div>
          <div class="p-4 rounded-xl bg-[#07130D]/80 border border-emerald-500/20 text-center">
            <div class="font-cinzel text-xl sm:text-2xl font-bold text-[#E5C78B]">0%</div>
            <div class="text-[11px] text-slate-400 uppercase tracking-wider font-mono">${isAr ? 'استبعاد في المناقصات' : 'Tender Rejections'}</div>
          </div>
        </div>
      </header>

      <!-- Instant Search & Category Filter Bar -->
      <section class="space-y-4">
        <!-- Live Search Input -->
        <div class="relative max-w-xl">
          <input 
            type="text" 
            id="service-search-input" 
            placeholder="${isAr ? 'ابحث عن أي خدمة بالاسم، التقنية، أو الكلمة المفتاحية...' : 'Search services by name, technology, or keywords...'}" 
            class="luxury-input ps-10 text-sm"
          />
          <span class="absolute top-1/2 -translate-y-1/2 ${isAr ? 'right-3.5' : 'left-3.5'} text-slate-400 text-sm">🔍</span>
        </div>

        <!-- Filter Buttons Container -->
        <div class="flex flex-wrap items-center gap-2 pt-2 overflow-x-auto pb-1" id="category-filters-container">
          ${filterTabsHtml}
        </div>
      </section>

      <!-- Category Blocks with Services Cards -->
      <div id="services-container" class="space-y-12">
        ${categoriesSectionsHtml}
      </div>

      <!-- Bottom Consultation CTA -->
      <section class="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#07130D] via-[#0B1F16] to-[#050806] border border-[#C6A15B]/50 shadow-2xl text-center space-y-6">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-white font-serif max-w-2xl mx-auto leading-tight">
          ${isAr ? 'هل تحتاج إلى باقة مخصصة تجمع أكثر من خدمة؟' : 'Need a Tailored Multidisciplinary Package?'}
        </h2>
        <p class="text-xs sm:text-sm text-emerald-200/80 max-w-xl mx-auto leading-relaxed">
          ${isAr 
            ? 'نقدم حلولاً متكاملة تجمع بين إعداد كراسات المناقصات، مصفوفات الامتثال، وتطوير الأنظمة البرمجية والبوابات السحابية في عقد تنفيذي موحد.'
            : 'We architect cross-functional solutions blending tender compliance, custom web portals, and enterprise ERP systems under unified SLAs.'}
        </p>
        <div class="pt-2">
          <a href="${isAr ? '/ar/index.html#contact' : '/index.html#contact'}" class="btn-gold py-3 px-8 text-sm font-bold shadow-lg">
            <span>${isAr ? 'طلب استشارة مخصصة الآن' : 'Schedule Executive Consultation'}</span>
          </a>
        </div>
      </section>

    </main>

    ${footerHtml}

    <script src="/assets/js/main.js"></script>
    <script>
      // Client-side instant search & category filtering
      document.addEventListener('DOMContentLoaded', () => {
        const searchInput = document.getElementById('service-search-input');
        const filterBtns = document.querySelectorAll('.service-dir-filter');
        const cards = document.querySelectorAll('.service-dir-card');
        const categoryBlocks = document.querySelectorAll('.category-block');

        let activeCategory = 'all';

        function applyFilter() {
          const query = (searchInput.value || '').trim().toLowerCase();

          categoryBlocks.forEach((block) => {
            const catId = block.getAttribute('data-cat-id');
            const blockMatchesCategory = (activeCategory === 'all' || activeCategory === catId);

            let visibleCardsInBlock = 0;
            const blockCards = block.querySelectorAll('.service-dir-card');

            blockCards.forEach((card) => {
              const text = card.textContent.toLowerCase();
              const matchesSearch = !query || text.includes(query);

              if (blockMatchesCategory && matchesSearch) {
                card.style.display = 'flex';
                visibleCardsInBlock++;
              } else {
                card.style.display = 'none';
              }
            });

            if (blockMatchesCategory && visibleCardsInBlock > 0) {
              block.style.display = 'block';
            } else {
              block.style.display = 'none';
            }
          });
        }

        searchInput.addEventListener('input', applyFilter);

        filterBtns.forEach((btn) => {
          btn.addEventListener('click', () => {
            filterBtns.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.getAttribute('data-filter') || 'all';
            applyFilter();
          });
        });
      });
    </script>
  </body>
</html>`;
}

// =========================================================================
// 4. MAIN BUILD EXECUTION
// =========================================================================
export async function buildAll() {
  console.log(`Starting generation of all services, platform articles, and directories...`);

  // 1. Ensure directories exist
  const enServicesDir = path.resolve(rootDir, 'en/services');
  const arServicesDir = path.resolve(rootDir, 'ar/services');
  const enArticlesDir = path.resolve(rootDir, 'en/articles');
  const arArticlesDir = path.resolve(rootDir, 'ar/articles');

  [enServicesDir, arServicesDir, enArticlesDir, arArticlesDir].forEach((dir) => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  });

  // 2. Build Service Pages (EN & AR)
  let serviceCount = 0;
  for (const s of allServices) {
    const enHtml = renderServicePageHtml(s, 'en');
    const arHtml = renderServicePageHtml(s, 'ar');

    fs.writeFileSync(path.resolve(enServicesDir, `${s.slug}.html`), enHtml, 'utf-8');
    fs.writeFileSync(path.resolve(arServicesDir, `${s.slug}.html`), arHtml, 'utf-8');
    serviceCount++;
  }
  console.log(`Generated ${serviceCount} services in both EN and AR.`);

  // 3. Build Platform Articles (EN & AR)
  let articleCount = 0;
  for (const a of PLATFORM_ARTICLES) {
    const enHtml = renderArticlePageHtml(a, 'en');
    const arHtml = renderArticlePageHtml(a, 'ar');

    fs.writeFileSync(path.resolve(enArticlesDir, `${a.slug}.html`), enHtml, 'utf-8');
    fs.writeFileSync(path.resolve(arArticlesDir, `${a.slug}.html`), arHtml, 'utf-8');
    articleCount++;
  }
  console.log(`Generated ${articleCount} platform articles in both EN and AR.`);

  // 4. Build Central Services Directory
  const enDirectoryHtml = renderServicesDirectoryHtml('en');
  const arDirectoryHtml = renderServicesDirectoryHtml('ar');
  fs.writeFileSync(path.resolve(enServicesDir, 'index.html'), enDirectoryHtml, 'utf-8');
  fs.writeFileSync(path.resolve(arServicesDir, 'index.html'), arDirectoryHtml, 'utf-8');
  console.log(`Generated central Services Directory in both EN and AR.`);

  // 5. Update index.html and ar/index.html headers to strictly match the 5 primary items + mega menu
  updateMainPagesHeaders();

  // 6. Update sitemap.xml
  updateSitemapXml();

  console.log('Build completed successfully!');
}

function updateMainPagesHeaders() {
  const indexEnPath = path.resolve(rootDir, 'index.html');
  const enIndexSubPath = path.resolve(rootDir, 'en/index.html');
  const indexArPath = path.resolve(rootDir, 'ar/index.html');
  const enCertPath = path.resolve(rootDir, 'en/certifications/index.html');
  const arCertPath = path.resolve(rootDir, 'ar/certifications/index.html');
  const enArticlesPath = path.resolve(rootDir, 'en/articles/index.html');
  const arArticlesPath = path.resolve(rootDir, 'ar/articles/index.html');
  const enTendersPath = path.resolve(rootDir, 'en/tenders/awarded-tenders.html');
  const arTendersPath = path.resolve(rootDir, 'ar/tenders/awarded-tenders.html');

  const enHeaderHome = renderHeader('en', '/index.html', allServices);
  const arHeaderHome = renderHeader('ar', '/ar/index.html', allServices);
  const enHeaderCerts = renderHeader('en', '/en/certifications/index.html', allServices);
  const arHeaderCerts = renderHeader('ar', '/ar/certifications/index.html', allServices);
  const enHeaderArticles = renderHeader('en', '/en/articles/index.html', allServices);
  const arHeaderArticles = renderHeader('ar', '/ar/articles/index.html', allServices);
  const enHeaderTenders = renderHeader('en', '/en/tenders/awarded-tenders.html', allServices);
  const arHeaderTenders = renderHeader('ar', '/ar/tenders/awarded-tenders.html', allServices);

  const targets = [
    { p: indexEnPath, h: enHeaderHome, name: 'index.html' },
    { p: enIndexSubPath, h: enHeaderHome, name: 'en/index.html' },
    { p: indexArPath, h: arHeaderHome, name: 'ar/index.html' },
    { p: enCertPath, h: enHeaderCerts, name: 'en/certifications/index.html' },
    { p: arCertPath, h: arHeaderCerts, name: 'ar/certifications/index.html' },
    { p: enArticlesPath, h: enHeaderArticles, name: 'en/articles/index.html' },
    { p: arArticlesPath, h: arHeaderArticles, name: 'ar/articles/index.html' },
    { p: enTendersPath, h: enHeaderTenders, name: 'en/tenders/awarded-tenders.html' },
    { p: arTendersPath, h: arHeaderTenders, name: 'ar/tenders/awarded-tenders.html' },
  ];

  targets.forEach(({ p, h, name }) => {
    if (fs.existsSync(p)) {
      let content = fs.readFileSync(p, 'utf-8');
      content = content.replace(/<header[\s\S]*?<\/header>/i, h.trim());
      fs.writeFileSync(p, content, 'utf-8');
      console.log(`Updated ${name} with synchronized 8-item header & mega menu.`);
    }
  });
}

function updateSitemapXml() {
  const sitemapPath = path.resolve(rootDir, 'public/sitemap.xml');
  const baseUrl = 'https://ais-dev-uvhoaspsjjjctvitvfuxq3-243677589093.europe-west3.run.app';

  const urls: { locEn: string; locAr: string; priority: string; changefreq: string }[] = [];

  // Homepages
  urls.push({
    locEn: `${baseUrl}/index.html`,
    locAr: `${baseUrl}/ar/index.html`,
    priority: '1.0',
    changefreq: 'daily'
  });

  // Services Directory
  urls.push({
    locEn: `${baseUrl}/en/services/index.html`,
    locAr: `${baseUrl}/ar/services/index.html`,
    priority: '0.95',
    changefreq: 'weekly'
  });

  // Certifications
  urls.push({
    locEn: `${baseUrl}/en/certifications/index.html`,
    locAr: `${baseUrl}/ar/certifications/index.html`,
    priority: '0.9',
    changefreq: 'weekly'
  });

  // Articles Index
  urls.push({
    locEn: `${baseUrl}/en/articles/index.html`,
    locAr: `${baseUrl}/ar/articles/index.html`,
    priority: '0.85',
    changefreq: 'weekly'
  });

  // All Services
  for (const s of allServices) {
    urls.push({
      locEn: `${baseUrl}/en/services/${s.slug}.html`,
      locAr: `${baseUrl}/ar/services/${s.slug}.html`,
      priority: '0.85',
      changefreq: 'monthly'
    });
  }

  // All Platform Articles
  for (const a of PLATFORM_ARTICLES) {
    urls.push({
      locEn: `${baseUrl}/en/articles/${a.slug}.html`,
      locAr: `${baseUrl}/ar/articles/${a.slug}.html`,
      priority: '0.8',
      changefreq: 'monthly'
    });
  }

  // Generate XML
  const xmlEntries = urls.map(u => `  <url>
    <loc>${u.locEn}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${u.locEn}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${u.locAr}" />
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>
  <url>
    <loc>${u.locAr}</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="${u.locAr}" />
    <xhtml:link rel="alternate" hreflang="en" href="${u.locEn}" />
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n\n');

  const fullXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">

${xmlEntries}

</urlset>
`;

  fs.writeFileSync(sitemapPath, fullXml, 'utf-8');
  console.log(`Generated sitemap.xml with ${urls.length * 2} bilingual URLs.`);
}

// Run build directly if invoked as script
buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
