import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ALL_TENDERS, TenderDef } from './tendersData.js';
import { generateRemainingServices } from './generate_all.js';
import { renderHeader, renderFooter, escapeHtml } from './renderTemplates.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const allServices = generateRemainingServices();

// =========================================================================
// 1. RENDER MAIN AWARDED TENDERS DIRECTORY PAGE
// =========================================================================
function renderAwardedTendersHubHtml(lang: 'en' | 'ar'): string {
  const isAr = lang === 'ar';
  const pageTitle = isAr
    ? 'المناقصات التي عملت عليها والإنجازات | سابقة أعمال المنافسات الحكومية | يوسف غمري'
    : 'Awarded Tenders & Bid Experience Portfolio | Saudi Government RFPs | Youssef Ghamry';
  
  const pageDescription = isAr
    ? 'استعراض شامل لسابقة أعمال المناقصات الحكومية السعودية، العروض الفنية الفائزة، مصفوفات الامتثال، ومشاريع سدايا، وزارة الطاقة، والموارد البشرية.'
    : 'Comprehensive case-study portfolio of Saudi government tender submissions, awarded enterprise bids, compliance matrices, and digital transformation projects.';

  const canonicalUrl = isAr ? '/ar/tenders/awarded-tenders.html' : '/en/tenders/awarded-tenders.html';
  const altLangUrl = isAr ? '/en/tenders/awarded-tenders.html' : '/ar/tenders/awarded-tenders.html';

  const headerHtml = renderHeader(lang, canonicalUrl, allServices);
  const footerHtml = renderFooter(lang);

  const totalTenders = ALL_TENDERS.filter(t => t.awardStatus !== 'regulatory').length;
  const awardedCount = ALL_TENDERS.filter(t => t.awardStatus === 'awarded').length;
  const entitiesCount = new Set(ALL_TENDERS.map(t => t.entityAr)).size;

  return `<!doctype html>
<html lang="${lang}" dir="${isAr ? 'rtl' : 'ltr'}" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(pageTitle)}</title>
    <meta name="description" content="${escapeHtml(pageDescription)}" />
    
    <link rel="canonical" href="${canonicalUrl}" />
    <link rel="alternate" hreflang="${lang}" href="${canonicalUrl}" />
    <link rel="alternate" hreflang="${isAr ? 'en' : 'ar'}" href="${altLangUrl}" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escapeHtml(pageTitle)}" />
    <meta property="og:description" content="${escapeHtml(pageDescription)}" />
    <meta property="og:image" content="/assets/aistudio/image_ef5d64bf.png" />

    <link rel="stylesheet" href="/assets/css/style.css" />
    ${isAr ? '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800;900&display=swap" rel="stylesheet">' : ''}

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "${escapeHtml(pageTitle)}",
      "description": "${escapeHtml(pageDescription)}",
      "provider": {
        "@type": "Person",
        "name": "Youssef Ghamry",
        "jobTitle": "Tender & Proposal Specialist"
      }
    }
    </script>
  </head>
  <body class="theme-gold selection:bg-emerald-600 selection:text-white ${isAr ? 'font-sans' : ''}">

    ${headerHtml}

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 relative z-10">
      
      <!-- Breadcrumbs -->
      <nav class="breadcrumbs flex items-center gap-2 text-xs text-emerald-300/70" aria-label="Breadcrumb">
        <a href="${isAr ? '/ar/index.html' : '/index.html'}" class="hover:text-[#E5C78B]">${isAr ? 'الرئيسية' : 'Home'}</a>
        <span>/</span>
        <a href="${isAr ? '/ar/index.html#portfolio' : '/index.html#portfolio'}" class="hover:text-[#E5C78B]">${isAr ? 'الأعمال والمشاريع' : 'Portfolio & Projects'}</a>
        <span>/</span>
        <span class="text-white font-semibold">${isAr ? 'المناقصات التي عملت عليها والإنجازات' : 'Awarded Tenders & Bid Experience'}</span>
      </nav>

      <!-- Section Hero Header -->
      <div class="border-b border-emerald-950/60 pb-8 space-y-4">
        <div class="flex flex-wrap items-center gap-2.5">
          <span class="badge-gold">
            <span class="w-1.5 h-1.5 rounded-full bg-[#C6A15B] animate-pulse"></span>
            <span>${isAr ? 'محفظة سابقة أعمال المنافسات الحكومية' : 'Government Tenders & Bid Experience'}</span>
          </span>
          <span class="badge-emerald">
            <span>${isAr ? 'منصة اعتماد · كراسات الشروط والمواصفات' : 'Etimad Platform · Verified RFP Specifications'}</span>
          </span>
        </div>

        <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight ${isAr ? 'font-sans' : 'font-serif'} leading-tight">
          ${isAr ? 'المناقصات التي عملت عليها <span class="gold-gradient-text heading-hover-glow">والإنجازات</span>' : 'Awarded Tenders & <span class="gold-gradient-text heading-hover-glow">Bid Experience</span>'}
        </h1>
        
        <p class="text-sm sm:text-base text-emerald-200/80 max-w-3xl leading-relaxed">
          ${isAr 
            ? 'سجل مهني موثق يستعرض المنافسات الحكومية والسيادية التي ساهمت شخصياً في إعداد عروضها الفنية، مصفوفات الامتثال، اتفاقيات مستوى الخدمة (SLA)، وهندسة الحلول التقنية وفق كراسات الشروط والمواصفات الرسمية عبر منصة اعتماد.'
            : 'A verified professional case-study portfolio showcasing real government and sovereign tenders where I personally spearheaded technical proposal authoring, zero-defect compliance matrices, SLA architecture, and solution engineering under official Saudi Etimad specifications.'
          }
        </p>

        <!-- Metrics Banner -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          <div class="p-4 rounded-2xl glass-panel border border-emerald-500/25 space-y-1">
            <div class="text-2xl sm:text-3xl font-extrabold text-[#E5C78B] font-mono">${totalTenders}</div>
            <div class="text-xs text-emerald-300/80">${isAr ? 'منافسة تقنية موثقة' : 'Documented RFP Bids'}</div>
          </div>
          <div class="p-4 rounded-2xl glass-panel border border-emerald-500/25 space-y-1">
            <div class="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">${awardedCount}</div>
            <div class="text-xs text-emerald-300/80">${isAr ? 'مشاريع تمت ترسيتها' : 'Successfully Awarded'}</div>
          </div>
          <div class="p-4 rounded-2xl glass-panel border border-emerald-500/25 space-y-1">
            <div class="text-2xl sm:text-3xl font-extrabold text-[#E5C78B] font-mono">${entitiesCount}+</div>
            <div class="text-xs text-emerald-300/80">${isAr ? 'جهات حكومية وسيادية' : 'Government Entities'}</div>
          </div>
          <div class="p-4 rounded-2xl glass-panel border border-emerald-500/25 space-y-1">
            <div class="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">100%</div>
            <div class="text-xs text-emerald-300/80">${isAr ? 'مطابقة معايير الامتثال' : 'Zero-Defect Traceability'}</div>
          </div>
        </div>
      </div>

      <!-- Interactive Tenders Engine Container -->
      <div id="tenders-showcase-container" class="space-y-8">
        <!-- Rendered by client script tenders-showcase.js -->
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="relative w-full md:max-w-md">
            <input 
              type="text" 
              id="tenders-search-box" 
              placeholder="${isAr ? 'ابحث عن منافسة، جهة حكومية، أو رقم كراسة...' : 'Search by tender title, contracting entity, or number...'}" 
              class="luxury-input text-xs py-3 px-4 w-full"
            />
          </div>
          <div id="tenders-counter" class="text-xs font-mono text-emerald-300/80">
            ${isAr ? `عرض ${ALL_TENDERS.length} منافسة` : `Displaying ${ALL_TENDERS.length} Tenders`}
          </div>
        </div>

        <!-- Filter Tabs -->
        <div class="flex flex-wrap items-center gap-2" id="tenders-status-filters">
          <button type="button" class="portfolio-filter-btn active" data-status="all">${isAr ? 'جميع المناقصات' : 'All Tenders'}</button>
          <button type="button" class="portfolio-filter-btn" data-status="awarded">${isAr ? '🏆 تمت الترسية' : '🏆 Successfully Awarded'}</button>
          <button type="button" class="portfolio-filter-btn" data-status="under-evaluation">${isAr ? '⏳ قيد التقييم الفني' : '⏳ Under Technical Evaluation'}</button>
          <button type="button" class="portfolio-filter-btn" data-status="prepared">${isAr ? '📋 تم إعداد العرض والتقديم' : '📋 Proposal Prepared & Submitted'}</button>
        </div>

        <!-- Category Filters -->
        <div class="flex flex-wrap items-center gap-2 pt-1" id="tenders-category-filters">
          <button type="button" class="px-3 py-1.5 rounded-lg text-xs font-medium border border-emerald-500/30 bg-emerald-950/60 text-emerald-200 hover:text-white" data-category="all">${isAr ? 'كافة التخصصات' : 'All Disciplines'}</button>
          <button type="button" class="px-3 py-1.5 rounded-lg text-xs font-medium border border-emerald-500/30 bg-[#07130D] text-emerald-300/80 hover:text-white" data-category="infrastructure">${isAr ? 'البنية التحتية والشبكات' : 'Infrastructure & Networks'}</button>
          <button type="button" class="px-3 py-1.5 rounded-lg text-xs font-medium border border-emerald-500/30 bg-[#07130D] text-emerald-300/80 hover:text-white" data-category="cybersecurity">${isAr ? 'الأمن السيبراني ومراكز SOC' : 'Cybersecurity & SOC'}</button>
          <button type="button" class="px-3 py-1.5 rounded-lg text-xs font-medium border border-emerald-500/30 bg-[#07130D] text-emerald-300/80 hover:text-white" data-category="enterprise-systems">${isAr ? 'الأنظمة المؤسسية والذكاء الاصطناعي' : 'Enterprise Systems & AI'}</button>
          <button type="button" class="px-3 py-1.5 rounded-lg text-xs font-medium border border-emerald-500/30 bg-[#07130D] text-emerald-300/80 hover:text-white" data-category="portals-mobile">${isAr ? 'البوابات وتطبيقات الجوال' : 'Portals & Mobile Apps'}</button>
          <button type="button" class="px-3 py-1.5 rounded-lg text-xs font-medium border border-emerald-500/30 bg-[#07130D] text-emerald-300/80 hover:text-white" data-category="managed-services">${isAr ? 'الخدمات المدارة وITSM' : 'Managed Services & ITSM'}</button>
          <button type="button" class="px-3 py-1.5 rounded-lg text-xs font-medium border border-emerald-500/30 bg-[#07130D] text-emerald-300/80 hover:text-white" data-category="specialized">${isAr ? 'الأنظمة الصحية والجيومكانية' : 'Specialized & Healthcare'}</button>
        </div>

        <!-- Tenders Cards Grid (Pre-rendered for SEO + Enhanced by JS) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="tenders-grid">
          ${renderTenderCardsHtml(ALL_TENDERS, lang)}
        </div>
      </div>

      <!-- Confidentiality & Verification Boundary Notice -->
      <div class="p-6 rounded-2xl glass-panel border border-[#C6A15B]/30 space-y-3 bg-[#07130D]/80">
        <div class="flex items-center gap-2 text-xs font-bold text-[#E5C78B]">
          <span class="text-base">🛡️</span>
          <span>${isAr ? 'إشعار الشفافية والالتزام بالسرية المهنية' : 'Professional Confidentiality & Verification Notice'}</span>
        </div>
        <p class="text-xs text-emerald-200/70 leading-relaxed">
          ${isAr
            ? 'تستند كافة المعلومات الواردة في هذا السجل إلى كراسات الشروط والمواصفات الرسمية المطروحة عبر منصة اعتماد والمستندات العامة ذات الصلة. حرصاً على السرية المهنية والامتثال للأنظمة، لا يتضمن هذا العرض أي معادلات تسعير داخلية أو بيانات مالية حساسة أو أسرار تجارية للمقاولين. تصنيف الترسية محدد وفق البيانات الموثقة.'
            : 'All information in this portfolio is derived from official RFP tender books published on the Saudi Etimad platform and publicly accessible procurement documents. To uphold strict professional non-disclosure standards, no proprietary pricing formulas, confidential financials, or sensitive internal data are disclosed. Award classifications adhere strictly to documented outcomes.'
          }
        </p>
      </div>

    </main>

    ${footerHtml}

    <!-- External Client Data Script -->
    <script src="/assets/js/tenders-data.js"></script>
    <script src="/assets/js/tenders-showcase.js"></script>
    <script src="/assets/js/main.js"></script>
  </body>
</html>`;
}

// =========================================================================
// 2. RENDER PRE-POPULATED TENDER CARDS
// =========================================================================
function renderTenderCardsHtml(tenders: TenderDef[], lang: 'en' | 'ar'): string {
  const isAr = lang === 'ar';

  return tenders.map((t) => {
    const title = isAr ? t.nameAr : t.nameEn;
    const entity = isAr ? t.entityAr : t.entityEn;
    const category = isAr ? t.categoryAr : t.categoryEn;
    const summary = isAr ? t.summaryAr : t.summaryEn;
    const statusText = isAr ? t.awardStatusAr : t.awardStatusEn;
    const caseStudyUrl = isAr ? `/ar/tenders/case-${t.slug}.html` : `/en/tenders/case-${t.slug}.html`;

    const statusBadgeClass = t.awardStatus === 'awarded'
      ? 'border-[#C6A15B] text-[#E5C78B] bg-[#C6A15B]/15 font-bold'
      : t.awardStatus === 'under-evaluation'
      ? 'border-emerald-500/40 text-emerald-300 bg-emerald-950/60'
      : 'border-slate-500/40 text-slate-300 bg-black/40';

    return `
      <article 
        class="tender-card p-6 glass-panel rounded-2xl interactive-card border border-emerald-500/20 flex flex-col justify-between group"
        data-tender-id="${t.id}"
        data-status="${t.awardStatus}"
        data-category="${t.category}"
        data-entity="${escapeHtml(entity)}"
      >
        <div class="space-y-4">
          <!-- Card Header Badges -->
          <div class="flex items-center justify-between gap-2 text-xs">
            <span class="px-2.5 py-1 rounded-lg border text-[11px] flex items-center gap-1.5 ${statusBadgeClass}">
              <span>${t.awardStatus === 'awarded' ? '🏆' : '📋'}</span>
              <span>${escapeHtml(statusText)}</span>
            </span>
            <span class="text-[10px] text-emerald-400 font-mono px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-500/30">
              #${escapeHtml(t.tenderNumber)}
            </span>
          </div>

          <!-- Contracting Authority -->
          <div class="text-xs font-semibold text-[#E5C78B] flex items-center gap-1.5">
            <span>🏛️</span>
            <span class="truncate">${escapeHtml(entity)}</span>
          </div>

          <!-- Tender Title -->
          <h2 class="text-base font-bold text-white ${isAr ? 'font-sans' : 'font-serif'} group-hover:text-[#E5C78B] transition-colors leading-snug line-clamp-2">
            ${escapeHtml(title)}
          </h2>

          <!-- Scope Summary -->
          <p class="text-xs text-emerald-100/70 leading-relaxed line-clamp-3">
            ${escapeHtml(summary)}
          </p>

          <!-- Key Requirement Tags -->
          <div class="flex flex-wrap gap-1.5 pt-1">
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-black/40 border border-emerald-950 text-emerald-300 font-mono">
              ⏱️ ${escapeHtml(t.duration)}
            </span>
            ${t.localContentMin ? `
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 font-mono">
                🇸🇦 محتوى محلي ${t.localContentMin}
              </span>
            ` : ''}
          </div>
        </div>

        <!-- Card Footer Actions -->
        <div class="pt-5 border-t border-emerald-950/80 mt-5 flex items-center justify-between text-xs">
          <button 
            type="button" 
            class="text-xs font-bold text-[#E5C78B] hover:text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform open-tender-modal-btn"
            data-tender-id="${t.id}"
          >
            <span>${isAr ? 'عرض دراسة الحالة' : 'View Case Study'}</span>
            <svg class="w-3.5 h-3.5 ${isAr ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </button>

          <a href="${caseStudyUrl}" class="text-[11px] text-emerald-400/80 hover:text-white underline">
            ${isAr ? 'صفحة مخصصة' : 'Dedicated Page'}
          </a>
        </div>
      </article>
    `;
  }).join('');
}

// =========================================================================
// 3. RENDER INDIVIDUAL CRAWLABLE CASE STUDY PAGE
// =========================================================================
function renderTenderCaseStudyHtml(t: TenderDef, lang: 'en' | 'ar'): string {
  const isAr = lang === 'ar';
  const title = isAr ? t.nameAr : t.nameEn;
  const entity = isAr ? t.entityAr : t.entityEn;
  const subject = isAr ? t.subjectAr : t.subjectEn;
  const summary = isAr ? t.summaryAr : t.summaryEn;
  const role = isAr ? t.roleAr : t.roleEn;
  const challenges = isAr ? t.challengesAr : t.challengesEn;
  const statusText = isAr ? t.awardStatusAr : t.awardStatusEn;
  const tenderType = isAr ? t.tenderTypeAr : t.tenderTypeEn;
  const sector = isAr ? t.sectorAr : t.sectorEn;

  const canonicalUrl = isAr ? `/ar/tenders/case-${t.slug}.html` : `/en/tenders/case-${t.slug}.html`;
  const altLangUrl = isAr ? `/en/tenders/case-${t.slug}.html` : `/ar/tenders/case-${t.slug}.html`;
  const hubUrl = isAr ? '/ar/tenders/awarded-tenders.html' : '/en/tenders/awarded-tenders.html';

  const headerHtml = renderHeader(lang, canonicalUrl, allServices);
  const footerHtml = renderFooter(lang);

  const keyReqList = isAr ? t.keyRequirementsAr : t.keyRequirementsEn;
  const qualList = isAr ? t.qualificationsAr : t.qualificationsEn;

  return `<!doctype html>
<html lang="${lang}" dir="${isAr ? 'rtl' : 'ltr'}" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)} | ${escapeHtml(entity)} | ${isAr ? 'دراسة حالة المنافسة' : 'Tender Case Study'} | Youssef Ghamry</title>
    <meta name="description" content="${escapeHtml(summary)}" />
    
    <link rel="canonical" href="${canonicalUrl}" />
    <link rel="alternate" hreflang="${lang}" href="${canonicalUrl}" />
    <link rel="alternate" hreflang="${isAr ? 'en' : 'ar'}" href="${altLangUrl}" />

    <meta property="og:type" content="article" />
    <meta property="og:title" content="${escapeHtml(title)} | ${escapeHtml(entity)}" />
    <meta property="og:description" content="${escapeHtml(summary)}" />
    <meta property="og:image" content="/assets/aistudio/image_ef5d64bf.png" />

    <link rel="stylesheet" href="/assets/css/style.css" />
    ${isAr ? '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800;900&display=swap" rel="stylesheet">' : ''}

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "${escapeHtml(title)}",
      "description": "${escapeHtml(summary)}",
      "author": {
        "@type": "Person",
        "name": "Youssef Ghamry"
      }
    }
    </script>
  </head>
  <body class="theme-gold selection:bg-emerald-600 selection:text-white ${isAr ? 'font-sans' : ''}">

    ${headerHtml}

    <main class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 relative z-10">
      
      <!-- Breadcrumbs -->
      <nav class="breadcrumbs flex items-center gap-2 text-xs text-emerald-300/70" aria-label="Breadcrumb">
        <a href="${isAr ? '/ar/index.html' : '/index.html'}" class="hover:text-[#E5C78B]">${isAr ? 'الرئيسية' : 'Home'}</a>
        <span>/</span>
        <a href="${hubUrl}" class="hover:text-[#E5C78B]">${isAr ? 'المناقصات والإنجازات' : 'Awarded Tenders'}</a>
        <span>/</span>
        <span class="text-white font-semibold truncate max-w-xs">${escapeHtml(title)}</span>
      </nav>

      <!-- Case Study Hero -->
      <div class="border-b border-emerald-950/60 pb-8 space-y-4">
        <div class="flex flex-wrap items-center gap-2.5">
          <span class="badge-gold">
            <span>🏛️ ${escapeHtml(entity)}</span>
          </span>
          <span class="badge-emerald">
            <span>#${escapeHtml(t.tenderNumber)}</span>
          </span>
          <span class="px-3 py-1 rounded-full text-xs font-mono font-bold ${t.awardStatus === 'awarded' ? 'bg-[#C6A15B]/20 text-[#E5C78B] border border-[#C6A15B]' : 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30'}">
            ${escapeHtml(statusText)}
          </span>
        </div>

        <h1 class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight ${isAr ? 'font-sans' : 'font-serif'} leading-snug">
          ${escapeHtml(title)}
        </h1>

        <p class="text-sm sm:text-base text-emerald-200/80 leading-relaxed max-w-3xl">
          ${escapeHtml(subject)}
        </p>

        <!-- Quick Facts Pill Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs font-mono">
          <div class="p-3 rounded-xl bg-[#07130D] border border-emerald-950">
            <span class="text-emerald-400/70 block text-[10px] uppercase">${isAr ? 'القطاع' : 'Sector'}</span>
            <span class="text-white font-bold">${escapeHtml(sector)}</span>
          </div>
          <div class="p-3 rounded-xl bg-[#07130D] border border-emerald-950">
            <span class="text-emerald-400/70 block text-[10px] uppercase">${isAr ? 'مدة التنفيذ' : 'Duration'}</span>
            <span class="text-white font-bold">${escapeHtml(t.duration)}</span>
          </div>
          <div class="p-3 rounded-xl bg-[#07130D] border border-emerald-950">
            <span class="text-emerald-400/70 block text-[10px] uppercase">${isAr ? 'تاريخ الطرح' : 'Issue Date'}</span>
            <span class="text-white font-bold">${escapeHtml(t.issueDate)}</span>
          </div>
          <div class="p-3 rounded-xl bg-[#07130D] border border-emerald-950">
            <span class="text-emerald-400/70 block text-[10px] uppercase">${isAr ? 'حالة الترسية' : 'Award Status'}</span>
            <span class="text-[#E5C78B] font-bold">${escapeHtml(statusText)}</span>
          </div>
        </div>
      </div>

      <!-- Structured 8 Sections of Case Study -->
      <div class="space-y-10 text-sm">
        
        <!-- Section A: Overview -->
        <section class="p-6 sm:p-8 rounded-2xl glass-panel border border-emerald-500/20 space-y-4">
          <h2 class="text-lg font-bold text-white flex items-center gap-2 text-gold-glow">
            <span class="text-xl">📌</span>
            <span>${isAr ? '1. نظرة عامة على المنافسة والجهة المالكة' : '1. Tender Overview & Contracting Authority'}</span>
          </h2>
          <div class="space-y-3 text-emerald-100/80 leading-relaxed">
            <p>${escapeHtml(summary)}</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-2">
              <div><strong class="text-white">${isAr ? 'الجهة المالكة:' : 'Contracting Entity:'}</strong> ${escapeHtml(entity)}</div>
              <div><strong class="text-white">${isAr ? 'نوع المنافسة:' : 'Procurement Type:'}</strong> ${escapeHtml(tenderType)}</div>
              <div><strong class="text-white">${isAr ? 'الرقم المرجعي:' : 'Reference Number:'}</strong> ${escapeHtml(t.referenceNumber)}</div>
              <div><strong class="text-white">${isAr ? 'الدولة والمنصة:' : 'Country & Platform:'}</strong> ${isAr ? 'المملكة العربية السعودية · منصة اعتماد' : 'Kingdom of Saudi Arabia · Etimad Platform'}</div>
            </div>
          </div>
        </section>

        <!-- Section B: Scope & Objectives -->
        <section class="p-6 sm:p-8 rounded-2xl glass-panel border border-emerald-500/20 space-y-4">
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <span class="text-xl">🎯</span>
            <span>${isAr ? '2. نطاق العمل والأهداف التشغيلية' : '2. Project Scope & Operational Objectives'}</span>
          </h2>
          <div class="space-y-3 text-emerald-100/80 leading-relaxed">
            <p>${escapeHtml(subject)}</p>
            <p>${escapeHtml(summary)}</p>
          </div>
        </section>

        <!-- Section C: Technical & Operational Requirements -->
        <section class="p-6 sm:p-8 rounded-2xl glass-panel border border-emerald-500/20 space-y-4">
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <span class="text-xl">⚙️</span>
            <span>${isAr ? '3. أبرز المتطلبات الفنية والتشغيلية' : '3. Technical & Operational Specifications'}</span>
          </h2>
          <ul class="space-y-2.5">
            ${keyReqList.map(req => `
              <li class="flex items-start gap-3 p-3 rounded-xl bg-[#07130D]/80 border border-emerald-950 text-xs sm:text-sm text-emerald-200">
                <span class="text-[#E5C78B] mt-0.5">✦</span>
                <span>${escapeHtml(req)}</span>
              </li>
            `).join('')}
          </ul>
        </section>

        <!-- Section D: Professional Contribution -->
        <section class="p-6 sm:p-8 rounded-2xl glass-panel border border-[#C6A15B]/30 space-y-4 bg-[#07130D]/60">
          <h2 class="text-lg font-bold text-[#E5C78B] flex items-center gap-2">
            <span class="text-xl">💼</span>
            <span>${isAr ? '4. دوري ومساهمتي المهنية في إعداد العرض' : '4. Professional Contribution & Bid Engineering Role'}</span>
          </h2>
          <p class="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-medium">
            ${escapeHtml(role)}
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
            <div class="p-3 rounded-xl bg-black/40 border border-emerald-950 space-y-1">
              <span class="font-bold text-white block">${isAr ? 'مصفوفة الامتثال' : 'Compliance Matrix'}</span>
              <span class="text-emerald-300/70">${isAr ? 'مطابقة متطلبات الكراسة 100% بدون تحفظات' : 'Zero-defect mapping of all mandatory items'}</span>
            </div>
            <div class="p-3 rounded-xl bg-black/40 border border-emerald-950 space-y-1">
              <span class="font-bold text-white block">${isAr ? 'اتفاقيات SLA' : 'SLA Architecture'}</span>
              <span class="text-emerald-300/70">${isAr ? 'صياغة أزمنة الاستجابة ومؤشرات الأداء' : 'Rigorous incident response and resolution timeframes'}</span>
            </div>
            <div class="p-3 rounded-xl bg-black/40 border border-emerald-950 space-y-1">
              <span class="font-bold text-white block">${isAr ? 'تدقيق الجودة Red Team' : 'Red Team Bid QA'}</span>
              <span class="text-emerald-300/70">${isAr ? 'مراجعة استباقية لمنع أسباب الاستبعاد الفني' : 'Eliminating fatal technical proposal deficiencies'}</span>
            </div>
          </div>
        </section>

        <!-- Section E: Challenges & Solutions -->
        <section class="p-6 sm:p-8 rounded-2xl glass-panel border border-emerald-500/20 space-y-4">
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <span class="text-xl">⚡</span>
            <span>${isAr ? '5. أبرز التحديات الفنية والحلول المبتكرة' : '5. Key Challenges & Engineered Solutions'}</span>
          </h2>
          <p class="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
            ${escapeHtml(challenges)}
          </p>
        </section>

        <!-- Section F: Qualifications & Certifications Addressed -->
        <section class="p-6 sm:p-8 rounded-2xl glass-panel border border-emerald-500/20 space-y-4">
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <span class="text-xl">📜</span>
            <span>${isAr ? '6. المؤهلات والشهادات والاعتمادات المستوفاة' : '6. Mandatory Qualifications & Certifications Addressed'}</span>
          </h2>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${qualList.map(q => `
              <li class="flex items-center gap-2 p-3 rounded-xl bg-[#07130D] border border-emerald-950 text-xs text-emerald-200">
                <span class="text-emerald-400">✓</span>
                <span>${escapeHtml(q)}</span>
              </li>
            `).join('')}
          </ul>
        </section>

        <!-- Section G: Outcome & Verified Status -->
        <section class="p-6 sm:p-8 rounded-2xl glass-panel border border-emerald-500/20 space-y-4">
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <span class="text-xl">🏁</span>
            <span>${isAr ? '7. النتيجة وحالة الترسية الموثقة' : '7. Documented Outcome & Award Status'}</span>
          </h2>
          <div class="space-y-2 text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
            <div class="flex items-center gap-2">
              <span class="font-bold text-white">${isAr ? 'الحالة الموثقة:' : 'Verified Status:'}</span>
              <span class="badge-gold font-bold">${escapeHtml(statusText)}</span>
            </div>
            <p>${escapeHtml((isAr ? t.notesAr : t.notesEn) || '')}</p>
            <div class="text-[11px] text-emerald-400/60 font-mono pt-2">
              ${isAr ? 'المستند المصدري:' : 'Source Record:'} ${escapeHtml(t.sourceFile)}
            </div>
          </div>
        </section>

        <!-- Section H: Demonstrated Competencies -->
        <section class="p-6 sm:p-8 rounded-2xl glass-panel border border-emerald-500/20 space-y-4">
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <span class="text-xl">💡</span>
            <span>${isAr ? '8. الدروس المستفادة والجدارات المهنية المثبتة' : '8. Key Lessons & Demonstrated Competencies'}</span>
          </h2>
          <div class="text-xs sm:text-sm text-emerald-100/80 leading-relaxed space-y-2">
            <p>
              ${isAr
                ? 'إثبات القدرة العملية على فك شفرات كراسات الشروط والمواصفات المعقدة بالمملكة، وتكييف العروض الفنية مع اشتراطات نظام المنافسات والمشتريات الحكومية، وضوابط الأمن السيبراني، ومتطلبات المحتوى المحلي بدقة تامة.'
                : 'Demonstrated mastery in decoding sophisticated Saudi government RFPs, aligning bid methodologies with procurement statutes, National Cybersecurity Authority controls, and local content thresholds.'
              }
            </p>
          </div>
        </section>

      </div>

      <!-- Action Footer CTA -->
      <div class="p-8 rounded-3xl glass-panel border border-[#C6A15B]/40 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#07130D] via-[#0B1F17] to-[#07130D]">
        <div class="space-y-1 text-center sm:text-left">
          <h3 class="text-base sm:text-lg font-bold text-white font-serif">
            ${isAr ? 'هل تستعد لتقديم عرض فني لمنافسة حكومية؟' : 'Preparing a Technical Bid for Saudi Government Tenders?'}
          </h3>
          <p class="text-xs text-emerald-200/70">
            ${isAr ? 'احصل على استشارة متخصصة في تحليل الكراسة، صياغة مصفوفة الامتثال، وضمان جودة العرض الفني.' : 'Engage specialist expertise for RFP decomposition, zero-defect compliance matrices, and Red Team bid audits.'}
          </p>
        </div>

        <div class="flex items-center gap-3 shrink-0">
          <a href="${hubUrl}" class="btn-ghost-gold text-xs py-2 px-4">
            <span>${isAr ? 'جميع المناقصات' : 'All Tenders'}</span>
          </a>
          <a href="${isAr ? '/ar/index.html#contact' : '/index.html#contact'}" class="btn-gold text-xs py-2.5 px-5">
            <span>${isAr ? 'طلب استشارة مناقصة' : 'Request Consultation'}</span>
          </a>
        </div>
      </div>

    </main>

    ${footerHtml}

    <script src="/assets/js/main.js"></script>
  </body>
</html>`;
}

// =========================================================================
// 4. MAIN BUILD EXECUTION
// =========================================================================
export function buildAllTendersPages(): void {
  const enTendersDir = path.resolve(rootDir, 'en/tenders');
  const arTendersDir = path.resolve(rootDir, 'ar/tenders');

  if (!fs.existsSync(enTendersDir)) fs.mkdirSync(enTendersDir, { recursive: true });
  if (!fs.existsSync(arTendersDir)) fs.mkdirSync(arTendersDir, { recursive: true });

  // 1. Build main hub pages
  fs.writeFileSync(path.resolve(enTendersDir, 'awarded-tenders.html'), renderAwardedTendersHubHtml('en'), 'utf-8');
  fs.writeFileSync(path.resolve(arTendersDir, 'awarded-tenders.html'), renderAwardedTendersHubHtml('ar'), 'utf-8');
  console.log('✓ Main Awarded Tenders hub pages written: en/tenders/awarded-tenders.html & ar/tenders/awarded-tenders.html');

  // 2. Build individual crawlable case study pages
  let count = 0;
  for (const t of ALL_TENDERS) {
    fs.writeFileSync(path.resolve(enTendersDir, `case-${t.slug}.html`), renderTenderCaseStudyHtml(t, 'en'), 'utf-8');
    fs.writeFileSync(path.resolve(arTendersDir, `case-${t.slug}.html`), renderTenderCaseStudyHtml(t, 'ar'), 'utf-8');
    count += 2;
  }
  console.log(`✓ Built ${count} individual crawlable case study pages in EN and AR.`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  buildAllTendersPages();
}
