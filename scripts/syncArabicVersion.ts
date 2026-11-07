/// <reference types="node" />
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CATEGORIES, CategoryDef, ServiceDef } from './servicesData.js';
import { generateRemainingServices } from './generate_all.js';
import { getServiceVisuals } from './serviceVisuals.js';
import { escapeHtml } from './renderTemplates.js';
import { generateEnglishArticleSvgs } from './enArticlesCatalog.js';
import { ArArticleItem, ArArticleSection } from './arArticlesTypes.js';
import {
  AR_ARTICLE_TRACKS,
  normalizeArTrackKey,
  buildAll132ArabicArticles
} from './arArticlesCatalog.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

/**
 * Strict guard: ONLY allow writing inside /ar/** or /public/sitemap.xml
 */
function safeWriteAr(absPath: string, content: string): void {
  const rel = path.relative(rootDir, absPath).replace(/\\/g, '/');
  const isAr = rel === 'ar' || rel.startsWith('ar/');
  const isSitemap = rel === 'public/sitemap.xml';
  if (!isAr && !isSitemap) {
    throw new Error(`FORBIDDEN WRITE BLOCKED: Attempted to touch non-Arabic file: ${rel}`);
  }
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, content, 'utf8');
}

const THEME_INIT_SCRIPT = `<script>
      (function() {
        try {
          var saved = localStorage.getItem('theme');
          var prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
          var theme = saved || (prefersLight ? 'light' : 'dark');
          if (theme === 'light') {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
          } else {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
          }
        } catch(e) {}
      })();
    </script>`;

const AR_GOOGLE_FONTS_HTML = `<link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&family=Cinzel:wght@600;700;800&family=JetBrains+Mono:wght@400;600;700&family=Tajawal:wght@400;500;700;800&display=swap" rel="stylesheet" />`;

export type ActiveArNavSection =
  | 'home'
  | 'services'
  | 'cv'
  | 'portfolio'
  | 'tenders'
  | 'certifications'
  | 'articles'
  | 'contact';

export function renderArHeader(
  activeSection: ActiveArNavSection,
  enCounterpartUrl: string,
  allServices: ServiceDef[]
): string {
  const navCls = (sec: ActiveArNavSection) =>
    activeSection === sec ? 'nav-link active px-2.5 py-1.5 rounded-md' : 'nav-link px-2.5 py-1.5 rounded-md';

  const megaMenuCategoriesHtml = CATEGORIES.map((cat) => {
    const catServices = allServices.filter((s) => s.categoryId === cat.id).slice(0, 6);
    const linksHtml = catServices
      .map(
        (s) => `
                    <a href="/ar/services/${s.slug}.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${escapeHtml(s.titleAr)}</span>
                    </a>`
      )
      .join('');

    return `
                <div class="space-y-2 p-3 rounded-xl bg-[#07130D]/70 border border-emerald-950/80 hover:border-emerald-500/30 transition-colors">
                  <div class="flex items-center justify-between gap-2 pb-1.5 border-b border-emerald-950/80">
                    <div class="flex items-center gap-2 min-w-0">
                      <span class="text-base">${cat.icon}</span>
                      <span class="text-xs font-bold text-white tracking-wide truncate">${escapeHtml(cat.nameAr)}</span>
                    </div>
                    <a href="/ar/services/index.html#${cat.id}" class="text-[10px] font-mono text-[#E5C78B] hover:underline shrink-0">عرض</a>
                  </div>
                  <div class="space-y-1">${linksHtml}
                  </div>
                </div>`;
  }).join('');

  const mobileCategoriesHtml = CATEGORIES.map((cat) => {
    const catServices = allServices.filter((s) => s.categoryId === cat.id).slice(0, 4);
    const linksHtml = catServices
      .map(
        (s) =>
          `<a href="/ar/services/${s.slug}.html" class="block py-1 text-emerald-200/80 hover:text-white">${escapeHtml(
            s.titleAr
          )}</a>`
      )
      .join('\n                ');
    return `
            <div class="space-y-1">
              <div class="font-bold text-white flex items-center gap-1.5 text-[11px] text-[#E5C78B]">
                <span>${cat.icon}</span>
                <span>${escapeHtml(cat.nameAr)}</span>
              </div>
              <div class="ms-3 space-y-1">
                ${linksHtml}
              </div>
            </div>`;
  }).join('');

  return `    <!-- شريط التنقل العلوي الفاخر بعرض الشاشة الكامل -->
    <header class="sticky top-0 z-50 glass-panel border-b border-emerald-950/60 bg-[#050806]/95 backdrop-blur-xl">
      <div class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 h-20 flex items-center justify-between gap-4 relative">
        
        <!-- الشعار والهوية المهنية -->
        <a href="/ar/index.html" class="flex items-center gap-3 text-white no-underline group flex-shrink-0">
          <div class="relative w-10 h-10 rounded-full border border-[#C6A15B]/50 p-0.5 bg-[#07130D] group-hover:border-[#E5C78B] transition-colors">
            <img src="/assets/aistudio/image_ef5d64bf.png" alt="شعار يوسف غمري" class="w-full h-full object-cover rounded-full" />
          </div>
          <div>
            <div class="text-sm sm:text-base tracking-wide font-extrabold gold-gradient-text">
              يوسف غمري
            </div>
            <div class="text-[9px] sm:text-[10px] text-emerald-300/75 tracking-tight font-mono">
              مطور Full-Stack | أخصائي مناقصات وعروض فنية
            </div>
          </div>
        </a>

        <!-- التنقل الرئيسي لسطح المكتب: 8 ركائز أساسية -->
        <nav class="hidden lg:flex items-center gap-1.5 xl:gap-3 text-xs font-semibold" aria-label="القائمة الرئيسية">
          <a href="/ar/index.html" class="${navCls('home')}">الرئيسية</a>

          <div class="mega-menu-wrapper static">
            <button
              type="button"
              class="${navCls('services')} flex items-center gap-1.5 mega-menu-trigger group cursor-pointer focus:outline-none"
              aria-haspopup="true"
              aria-expanded="false"
              id="services-menu-trigger"
            >
              <span>الخدمات</span>
              <svg class="w-3.5 h-3.5 text-emerald-400 group-hover:text-[#E5C78B] transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            <div class="mega-menu-dropdown p-6 space-y-4 text-start">
              <div class="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-emerald-950/80">
                <div class="flex items-center gap-2.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#C6A15B] animate-pulse"></span>
                  <span class="text-xs font-bold tracking-wide text-white">
                    دليل الخدمات الهندسية والاستشارات الفنية المتكاملة
                  </span>
                </div>
                <a href="/ar/services/index.html" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#C6A15B]/50 hover:border-[#E5C78B] bg-[#C6A15B]/15 text-xs font-bold text-[#E5C78B] hover:text-white transition-all shadow-sm">
                  <span>استكشف كافة الـ 93 خدمة ←</span>
                </a>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs">${megaMenuCategoriesHtml}
              </div>
            </div>
          </div>

          <a href="/ar/cv/index.html" class="${navCls('cv')}">السيرة الذاتية</a>
          <a href="/ar/portfolio/index.html" class="${navCls('portfolio')}">الأعمال</a>
          <a href="/ar/tenders/awarded-tenders.html" class="${navCls('tenders')}">المناقصات</a>
          <a href="/ar/certifications/index.html" class="${navCls('certifications')}">الشهادات</a>
          <a href="/ar/articles/index.html" class="${navCls('articles')}">المقالات</a>
          <a href="/ar/contact/index.html" class="${navCls('contact')}">تواصل معي</a>
        </nav>

        <!-- أدوات التحكم اليسرى وتبديل اللغة -->
        <div class="flex items-center gap-2.5">
          <a
            href="${enCounterpartUrl}"
            class="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#C6A15B]/40 hover:border-[#E5C78B] bg-[#07130D]/90 text-xs font-bold text-[#E5C78B] hover:text-white transition-all"
            title="التبديل إلى النسخة الإنجليزية"
          >
            <span>🇬🇧</span>
            <span dir="ltr">English (EN)</span>
          </a>

          <a
            href="/ar/contact/index.html"
            class="hidden sm:inline-flex btn-gold text-xs py-2 px-4 font-bold items-center gap-1.5 shadow-md"
          >
            <span>اطلب استشارة فنية</span>
          </a>

          <button
            type="button"
            id="mobile-nav-toggle"
            class="lg:hidden p-2 rounded-xl border border-emerald-800/60 bg-[#07130D] text-[#E5C78B] hover:text-white focus:outline-none cursor-pointer"
            aria-label="فتح القائمة"
            aria-expanded="false"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- قائمة الجوال المنسدلة -->
      <div id="mobile-nav-drawer" class="hidden lg:hidden glass-panel border-t border-emerald-950/80 px-4 py-5 space-y-3.5 max-h-[85vh] overflow-y-auto">
        <a href="/ar/index.html" class="flex items-center gap-2.5 text-xs sm:text-sm ${activeSection === 'home' ? 'text-[#E5C78B] font-bold' : 'text-emerald-200/90'} hover:text-[#E5C78B] py-2 transition-colors">
          <span>🏠</span>
          <span>الرئيسية</span>
        </a>

        <div class="border-y border-emerald-950/70 py-2">
          <button
            type="button"
            class="mobile-accordion-btn w-full flex items-center justify-between text-xs sm:text-sm text-emerald-200/90 hover:text-[#E5C78B] py-1.5 focus:outline-none"
            data-target="mobile-services-accordion"
            aria-expanded="false"
          >
            <span class="flex items-center gap-2.5">
              <span>🌐</span>
              <span>دليل الخدمات (93 خدمة متخصصة)</span>
            </span>
            <svg class="accordion-chevron w-4 h-4 transition-transform duration-200 text-[#E5C78B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div id="mobile-services-accordion" class="mobile-accordion-content space-y-3 ps-2 my-2 border-s-2 border-emerald-900/60 text-xs">
            <div class="pt-1 pb-1">
              <a href="/ar/services/index.html" class="block py-1.5 px-2.5 rounded-lg bg-[#C6A15B]/15 border border-[#C6A15B]/40 text-[#E5C78B] font-bold">
                عرض دليل الخدمات الكامل (93 خدمة) ←
              </a>
            </div>${mobileCategoriesHtml}
          </div>
        </div>

        <a href="/ar/cv/index.html" class="flex items-center gap-2.5 text-xs sm:text-sm ${activeSection === 'cv' ? 'text-[#E5C78B] font-bold' : 'text-emerald-200/90'} hover:text-[#E5C78B] py-2 transition-colors">
          <span>📄</span>
          <span>السيرة الذاتية (CV)</span>
        </a>

        <a href="/ar/portfolio/index.html" class="flex items-center gap-2.5 text-xs sm:text-sm ${activeSection === 'portfolio' ? 'text-[#E5C78B] font-bold' : 'text-emerald-200/90'} hover:text-[#E5C78B] py-2 transition-colors">
          <span>💼</span>
          <span>الأعمال والمشاريع (25 مختارة / +100 مشروع)</span>
        </a>

        <a href="/ar/tenders/awarded-tenders.html" class="flex items-center gap-2.5 text-xs sm:text-sm ${activeSection === 'tenders' ? 'text-[#E5C78B] font-bold' : 'text-emerald-200/90'} hover:text-[#E5C78B] py-2 transition-colors">
          <span>🏛️</span>
          <span>المناقصات الحكومية (+400 خبرة ومشاركة)</span>
        </a>

        <a href="/ar/certifications/index.html" class="flex items-center gap-2.5 text-xs sm:text-sm ${activeSection === 'certifications' ? 'text-[#E5C78B] font-bold' : 'text-emerald-200/90'} hover:text-[#E5C78B] py-2 transition-colors">
          <span>🎓</span>
          <span>الشهادات والاعتمادات المهنية (+27)</span>
        </a>

        <a href="/ar/articles/index.html" class="flex items-center gap-2.5 text-xs sm:text-sm ${activeSection === 'articles' ? 'text-[#E5C78B] font-bold' : 'text-emerald-200/90'} hover:text-[#E5C78B] py-2 transition-colors">
          <span>📚</span>
          <span>مركز المعرفة والمقالات (132 دليلاً)</span>
        </a>

        <a href="/ar/contact/index.html" class="flex items-center gap-2.5 text-xs sm:text-sm ${activeSection === 'contact' ? 'text-[#E5C78B] font-bold' : 'text-emerald-200/90'} hover:text-[#E5C78B] py-2 transition-colors">
          <span>✉️</span>
          <span>تواصل معي واستشارة العروض</span>
        </a>

        <div class="pt-3 border-t border-emerald-950/80 flex items-center justify-between">
          <span class="text-xs text-emerald-400/80">اللغة:</span>
          <a href="${enCounterpartUrl}" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#C6A15B]/50 bg-[#07130D] text-xs font-bold text-[#E5C78B]">
            <span>🇬🇧</span>
            <span dir="ltr">Switch to English (EN)</span>
          </a>
        </div>

        <div class="pt-1">
          <a href="/ar/contact/index.html" class="block w-full py-2.5 px-4 text-center rounded-xl btn-gold text-xs font-bold shadow-md">
            اطلب عرض سعر أو استشارة فنية
          </a>
        </div>
      </div>
    </header>`;
}

export function renderArFooter(enCounterpartUrl: string, totalArticles = 132): string {
  return `    <footer class="border-t border-emerald-950/80 bg-[#050806] py-12 pb-28 lg:pb-12 text-xs text-emerald-300/60 relative z-10">
      <div class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 space-y-8">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full border border-[#C6A15B]/50 p-0.5 bg-[#07130D]">
              <img src="/assets/aistudio/image_ef5d64bf.png" alt="شعار يوسف غمري" class="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <span class="font-extrabold text-white gold-gradient-text tracking-wide">يوسف غمري</span>
              <span class="text-slate-500"> — مطور Full-Stack وأخصائي أول مناقصات وضبط جودة العروض الفنية</span>
            </div>
          </div>

          <div class="flex flex-wrap items-center justify-center gap-5">
            <a href="/ar/index.html" class="hover:text-[#E5C78B] transition-colors">الرئيسية</a>
            <a href="/ar/services/index.html" class="hover:text-[#E5C78B] transition-colors">الخدمات (93)</a>
            <a href="/ar/cv/index.html" class="hover:text-[#E5C78B] transition-colors">السيرة الذاتية</a>
            <a href="/ar/portfolio/index.html" class="hover:text-[#E5C78B] transition-colors">الأعمال (25 / +100)</a>
            <a href="/ar/tenders/awarded-tenders.html" class="hover:text-[#E5C78B] transition-colors">المناقصات (+400)</a>
            <a href="/ar/certifications/index.html" class="hover:text-[#E5C78B] transition-colors">الشهادات (+27)</a>
            <a href="/ar/articles/index.html" class="hover:text-[#E5C78B] transition-colors">المقالات (${totalArticles})</a>
            <a href="/ar/contact/index.html" class="hover:text-white transition-colors">تواصل معي</a>
            <a href="${enCounterpartUrl}" class="text-[#E5C78B] font-bold" dir="ltr">English Edition (EN)</a>
          </div>
        </div>

        <div class="pt-6 border-t border-emerald-950/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>© 2026 يوسف غمري. جميع الحقوق محفوظة. هندسة البرمجيات المتكاملة واستشارات المناقصات الحكومية.</div>
          <div>القاهرة، مصر · المملكة العربية السعودية (منصة اعتماد) ومشاريع دولية عن بُعد</div>
        </div>
      </div>
    </footer>`;
}

// ============================================================================
// 1. FULL-WIDTH ARABIC SERVICES HUB + ALL 93 SERVICE DETAIL PAGES
// ============================================================================
function buildArabicServices(allServices: ServiceDef[], allArticles: ArArticleItem[]): void {
  const articleMap = new Map<string, ArArticleItem>();
  for (const a of allArticles) articleMap.set(a.slug, a);

  const serviceMap = new Map<string, ServiceDef>();
  for (const s of allServices) {
    if (!serviceMap.has(s.slug)) serviceMap.set(s.slug, s);
  }
  const uniqueServices = Array.from(serviceMap.values());

  // 1A. Generate /ar/services/index.html (Full-Width RTL Hub)
  const categoryNavHtml = CATEGORIES.map((cat) => {
    const count = uniqueServices.filter((s) => s.categoryId === cat.id).length;
    return `
              <a href="#${cat.id}" class="flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl bg-[#07130D]/80 border border-emerald-950/80 hover:border-[#C6A15B]/60 text-xs text-slate-200 hover:text-white transition-all group">
                <span class="flex items-center gap-2 truncate">
                  <span>${cat.icon}</span>
                  <span class="truncate font-medium group-hover:text-[#E5C78B] transition-colors">${escapeHtml(cat.nameAr)}</span>
                </span>
                <span class="px-2 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-500/30 text-[10px] font-mono text-emerald-300 shrink-0">${count}</span>
              </a>`;
  }).join('');

  const filterButtonsHtml = CATEGORIES.map((cat) => {
    const count = uniqueServices.filter((s) => s.categoryId === cat.id).length;
    return `<button type="button" data-service-filter="${cat.id}" class="service-hub-filter-btn px-3.5 py-2 rounded-xl border border-emerald-900/80 bg-[#07130D]/90 text-xs font-semibold text-emerald-200/90 hover:border-[#C6A15B]/60 hover:text-white transition-all shrink-0 cursor-pointer">${cat.icon} ${escapeHtml(cat.nameAr)} (${count})</button>`;
  }).join('\n            ');

  const categorySectionsHtml = CATEGORIES.map((cat) => {
    const catServices = uniqueServices.filter((s) => s.categoryId === cat.id);
    const cardsHtml = catServices
      .map((s) => {
        const deliverablesPreview = s.deliverablesAr
          .slice(0, 3)
          .map(
            (d) =>
              `<li class="flex items-start gap-2 text-[11px] text-emerald-200/80"><span class="text-[#C6A15B] mt-0.5">✦</span><span>${escapeHtml(d)}</span></li>`
          )
          .join('');
        const searchBlob = `${s.titleAr} ${s.headlineAr} ${s.overviewAr} ${s.badgeAr} ${cat.nameAr} ${s.titleEn}`.toLowerCase();
        return `
                <article
                  data-service-card="true"
                  data-category="${cat.id}"
                  data-search="${escapeHtml(searchBlob)}"
                  class="p-6 glass-panel rounded-2xl interactive-card border border-emerald-500/20 hover:border-[#C6A15B]/50 flex flex-col justify-between group transition-all"
                >
                  <div class="space-y-3.5">
                    <div class="flex items-center justify-between gap-2">
                      <span class="px-2.5 py-1 rounded-lg bg-emerald-950/80 border border-emerald-500/30 text-[10px] font-mono font-semibold text-[#E5C78B] tracking-wide truncate">
                        ${escapeHtml(s.badgeAr)}
                      </span>
                      <span class="text-base shrink-0">${cat.icon}</span>
                    </div>
                    <h3 class="text-lg font-bold text-white group-hover:text-[#E5C78B] transition-colors leading-snug">
                      <a href="/ar/services/${s.slug}.html" class="hover:underline">${escapeHtml(s.titleAr)}</a>
                    </h3>
                    <p class="text-xs text-slate-300/85 leading-relaxed line-clamp-3">
                      ${escapeHtml(s.overviewAr)}
                    </p>
                    <ul class="space-y-1.5 pt-2 border-t border-emerald-950/70">
                      ${deliverablesPreview}
                    </ul>
                  </div>
                  <div class="pt-5 mt-5 border-t border-emerald-950/80 flex items-center justify-between text-xs">
                    <span class="text-[11px] font-mono text-emerald-400/80">${s.scopeAr.length} محاور تنفيذية</span>
                    <a href="/ar/services/${s.slug}.html" class="font-bold text-[#E5C78B] hover:text-white inline-flex items-center gap-1.5 group-hover:-translate-x-0.5 transition-transform">
                      <span>استكشف الخدمة</span>
                      <svg class="w-3.5 h-3.5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </a>
                  </div>
                </article>`;
      })
      .join('');

    return `
            <section id="${cat.id}" data-service-section="${cat.id}" class="space-y-6 scroll-mt-36">
              <div class="p-6 sm:p-8 rounded-2xl glass-panel border border-emerald-500/25 bg-gradient-to-l from-[#07130D]/95 via-[#050806] to-[#07130D]/90 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div class="space-y-2 max-w-3xl">
                  <div class="inline-flex items-center gap-2 text-xs font-mono tracking-wide text-[#E5C78B]">
                    <span>${cat.icon}</span>
                    <span>مجال ممارسة متخصص · ${catServices.length} خدمة تنفيذية واستشارية</span>
                  </div>
                  <h2 class="text-2xl sm:text-3xl font-extrabold text-white">${escapeHtml(cat.nameAr)}</h2>
                  <p class="text-xs sm:text-sm text-emerald-100/75 leading-relaxed">${escapeHtml(cat.descriptionAr)}</p>
                </div>
                <a href="/ar/contact/index.html" class="btn-ghost-gold text-xs py-2.5 px-5 shrink-0 self-start lg:self-center">
                  <span>اطلب عرضاً فنياً لهذا القطاع ←</span>
                </a>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
                ${cardsHtml}
              </div>
            </section>`;
  }).join('');

  const servicesHubHtml = `<!doctype html>
<html lang="ar" dir="rtl" class="dark">
  <head>
    <meta charset="UTF-8" />
    ${THEME_INIT_SCRIPT}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>دليل الخدمات الهندسية والاستشارية الشامل (93 خدمة متخصصة) | يوسف غمري</title>
    <meta name="description" content="استكشف 93 خدمة متخصصة في تطوير المواقع والمتاجر الإلكترونية، أنظمة ERP وCRM المؤسسية، تطبيقات الجوال، السيو التقني، وإعداد العروض الفنية ومناقصات منصة اعتماد." />
    <link rel="canonical" href="/ar/services/index.html" />
    <link rel="alternate" hreflang="ar" href="/ar/services/index.html" />
    <link rel="alternate" hreflang="en" href="/en/services/index.html" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="دليل الخدمات الهندسية والاستشارية الشامل (93 خدمة) | يوسف غمري" />
    <meta property="og:description" content="هندسة البرمجيات المتكاملة، أنظمة الشركات، تطبيقات الهواتف الذكية، السيو التقني، واستشارات المناقصات الحكومية عبر منصة اعتماد." />
    <meta property="og:image" content="/assets/aistudio/image_ef5d64bf.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="93 خدمة هندسية واستشارية متخصصة | يوسف غمري" />
    <meta name="twitter:description" content="حلول برمجية متكاملة وإعداد عروض فنية ومصفوفات امتثال احترافية للمناقصات الحكومية." />
    ${AR_GOOGLE_FONTS_HTML}
    <link rel="stylesheet" href="/assets/css/style.css" />
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "دليل الخدمات الهندسية والاستشارية الشامل | يوسف غمري",
      "inLanguage": "ar",
      "description": "دليل يضم 93 خدمة متخصصة في تطوير الويب، أنظمة ERP وCRM، تطبيقات الجوال، السيو التقني، وإعداد عروض المناقصات الحكومية.",
      "provider": {
        "@type": "Person",
        "name": "يوسف غمري"
      }
    }
    </script>
  </head>
  <body class="theme-gold selection:bg-emerald-600 selection:text-white bg-[#050806] text-slate-100 min-h-screen">
${renderArHeader('services', '/en/services/index.html', uniqueServices)}

    <!-- واجهة دليل الخدمات بعرض الشاشة الكامل -->
    <section class="border-b border-emerald-950/70 bg-gradient-to-b from-[#07130D]/90 via-[#050806] to-[#050806] relative overflow-hidden">
      <div class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10 lg:py-16">
        <nav class="breadcrumbs flex items-center gap-2 text-xs text-emerald-300/70 mb-6" aria-label="مسار التنقل">
          <a href="/ar/index.html" class="hover:text-[#E5C78B]">الرئيسية</a>
          <span>/</span>
          <span class="text-white font-semibold">دليل الخدمات المتكامل</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
          <div class="lg:col-span-7 space-y-5">
            <div class="flex flex-wrap items-center gap-2.5">
              <span class="badge-gold">
                <span class="w-1.5 h-1.5 rounded-full bg-[#C6A15B] animate-pulse"></span>
                <span>منظومة الخدمات الهندسية والاستشارية الشاملة</span>
              </span>
              <span class="badge-emerald">6 قطاعات تخصصية · ${uniqueServices.length} صفحة خدمة مفصلة</span>
            </div>

            <h1 class="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.2]">
              خدمات الهندسة البرمجية، الأنظمة المؤسسية <span class="gold-gradient-text heading-hover-glow">واستشارات المناقصات</span>
            </h1>

            <p class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-[72ch]">
              تجمع كل خدمة بين الجودة الهندسية للإنتاج الفعلي والانضباط الصارم لمعايير الامتثال في المنافسات الحكومية. تصفح ${uniqueServices.length} خدمة متخصصة مصممة بمخرجات واضحة، ومعماريات مدروسة، ومنهجيات تنفيذ من أربع مراحل، واتفاقيات مستوى خدمة قابلة للقياس.
            </p>

            <div class="flex flex-wrap items-center gap-3.5 pt-2">
              <a href="/ar/contact/index.html" class="btn-gold text-xs py-3 px-6 font-bold">
                <span>اطلب عرض سعر ومقترحاً فنياً</span>
                <svg class="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
              <a href="/ar/portfolio/index.html" class="btn-ghost-gold text-xs py-3 px-5">
                <span>استعراض الأعمال (25 مختارة / +100 مشروع)</span>
              </a>
              <a href="/ar/tenders/awarded-tenders.html" class="btn-emerald text-xs py-3 px-5">
                <span>المناقصات الحكومية (+400 خبرة ومشاركة)</span>
              </a>
            </div>
          </div>

          <div class="lg:col-span-5 grid grid-cols-2 gap-4">
            <div class="p-5 rounded-2xl glass-panel-elevated border border-[#C6A15B]/40 space-y-1.5">
              <div class="text-3xl sm:text-4xl font-extrabold gold-gradient-text font-mono">${uniqueServices.length}</div>
              <div class="text-xs sm:text-sm font-bold text-white">خدمة تخصصية</div>
              <p class="text-[11px] text-emerald-200/70">معمارية ونطاق عمل ومخرجات موثقة لكل خدمة</p>
            </div>
            <div class="p-5 rounded-2xl glass-panel-elevated border border-emerald-500/30 space-y-1.5">
              <div class="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">6</div>
              <div class="text-xs sm:text-sm font-bold text-white">قطاعات ممارسة</div>
              <p class="text-[11px] text-emerald-200/70">الويب، ERP/CRM، الجوال، المناقصات، السيو والاستشارات</p>
            </div>
            <div class="p-5 rounded-2xl glass-panel-elevated border border-emerald-500/30 space-y-1.5">
              <div class="text-3xl sm:text-4xl font-extrabold text-white font-mono">+100</div>
              <div class="text-xs sm:text-sm font-bold text-white">مشروع رقمي منفذ</div>
              <p class="text-[11px] text-emerald-200/70">في السعودية والخليج ومصر وأوروبا وأمريكا</p>
            </div>
            <div class="p-5 rounded-2xl glass-panel-elevated border border-[#C6A15B]/40 space-y-1.5">
              <div class="text-3xl sm:text-4xl font-extrabold gold-gradient-text font-mono">+400</div>
              <div class="text-xs sm:text-sm font-bold text-white">خبرة في المناقصات</div>
              <p class="text-[11px] text-emerald-200/70">إعداد وصياغة وتنسيق ومراجعة امتثال دقيقة</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- شريط البحث اللحظي وتصفية القطاعات المثبت -->
    <div class="sticky top-20 z-30 border-b border-emerald-950/80 bg-[#050806]/95 backdrop-blur-xl">
      <div class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-4 space-y-3">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div class="relative w-full lg:max-w-md">
            <input
              type="search"
              id="services-hub-search"
              placeholder="ابحث في 93 خدمة حسب التقنية، المنصة، المناقصات، ERP، السيو..."
              class="luxury-input text-xs py-2.5 px-4 w-full"
            />
          </div>
          <div id="services-visible-count" class="text-xs font-mono text-emerald-300/90">
            عرض كافة الخدمات المتخصصة (${uniqueServices.length} خدمة عبر 6 قطاعات)
          </div>
        </div>

        <div class="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          <button type="button" data-service-filter="all" class="service-hub-filter-btn px-3.5 py-2 rounded-xl border border-[#C6A15B] bg-[#C6A15B]/20 text-xs font-bold text-white shrink-0 cursor-pointer">
            ✨ كافة القطاعات (${uniqueServices.length})
          </button>
          ${filterButtonsHtml}
        </div>
      </div>
    </div>

    <!-- مساحة العمل الرئيسية بعرض الشاشة الكامل -->
    <main class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10 lg:py-14">
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-start">
        
        <!-- الشريط الجانبي المثبت لتنقل القطاعات والاستشارة المباشرة -->
        <aside class="xl:col-span-3 xl:sticky xl:top-44 space-y-6">
          <div class="p-5 rounded-2xl glass-panel border border-emerald-500/25 space-y-3">
            <div class="text-xs font-bold tracking-wide text-[#E5C78B] font-mono">
              مستكشف قطاعات الخدمات
            </div>
            <nav class="space-y-2" aria-label="تصنيفات الخدمات">${categoryNavHtml}
            </nav>
          </div>

          <div class="p-6 rounded-2xl glass-panel-elevated border border-[#C6A15B]/40 space-y-4">
            <div class="inline-flex items-center gap-2 text-[11px] font-mono tracking-wide text-emerald-300">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>تعاقد واستشارة تقنية مباشرة</span>
            </div>
            <h2 class="text-base font-bold text-white">هل لديك موعد إغلاق مناقصة أو مشروع برمجي قادم؟</h2>
            <p class="text-xs text-slate-300 leading-relaxed">
              شارك نطاق العمل أو كراسة الشروط والمواصفات بموجب التزام كامل بالسرية NDA للحصول على مراجعة معمارية وفنية فورية.
            </p>
            <div class="space-y-2.5 pt-1">
              <a href="/ar/contact/index.html" class="w-full btn-gold text-xs py-2.5 px-4 font-bold justify-center">
                <span>أرسل تفاصيل المشروع أو المناقصة</span>
              </a>
              <a href="https://wa.me/201503292942" target="_blank" rel="noopener noreferrer" class="w-full btn-emerald text-xs py-2.5 px-4 justify-center">
                <span>استشارة مباشرة عبر واتساب</span>
              </a>
            </div>
          </div>
        </aside>

        <!-- شبكة بطاقات الخدمات العريضة (9 أعمدة) -->
        <div class="xl:col-span-9 space-y-16 min-w-0" id="services-domains-wrapper">${categorySectionsHtml}
        </div>

      </div>
    </main>

${renderArFooter('/en/services/index.html', allArticles.length)}

    <script src="/assets/js/main.js"></script>
    <script>
      (function() {
        var searchInput = document.getElementById('services-hub-search');
        var filterBtns = Array.prototype.slice.call(document.querySelectorAll('.service-hub-filter-btn'));
        var cards = Array.prototype.slice.call(document.querySelectorAll('[data-service-card]'));
        var sections = Array.prototype.slice.call(document.querySelectorAll('[data-service-section]'));
        var counter = document.getElementById('services-visible-count');
        var activeCat = 'all';

        function applyFilters() {
          var q = (searchInput && searchInput.value ? searchInput.value : '').trim().toLowerCase();
          var visibleTotal = 0;

          cards.forEach(function(card) {
            var cat = card.getAttribute('data-category') || '';
            var hay = card.getAttribute('data-search') || '';
            var matchCat = activeCat === 'all' || cat === activeCat;
            var matchQ = !q || hay.indexOf(q) !== -1;
            if (matchCat && matchQ) {
              card.classList.remove('hidden');
              visibleTotal++;
            } else {
              card.classList.add('hidden');
            }
          });

          sections.forEach(function(sec) {
            var anyVisible = sec.querySelectorAll('[data-service-card]:not(.hidden)').length > 0;
            if (anyVisible) {
              sec.classList.remove('hidden');
            } else {
              sec.classList.add('hidden');
            }
          });

          if (counter) {
            counter.textContent = 'عرض ' + visibleTotal + ' من أصل ' + cards.length + ' خدمة متخصصة';
          }
        }

        filterBtns.forEach(function(btn) {
          btn.addEventListener('click', function() {
            activeCat = btn.getAttribute('data-service-filter') || 'all';
            filterBtns.forEach(function(b) {
              var isAct = (b.getAttribute('data-service-filter') || 'all') === activeCat;
              b.className = isAct
                ? 'service-hub-filter-btn px-3.5 py-2 rounded-xl border border-[#C6A15B] bg-[#C6A15B]/20 text-xs font-bold text-white shrink-0 cursor-pointer'
                : 'service-hub-filter-btn px-3.5 py-2 rounded-xl border border-emerald-900/80 bg-[#07130D]/90 text-xs font-semibold text-emerald-200/90 hover:border-[#C6A15B]/60 hover:text-white transition-all shrink-0 cursor-pointer';
            });
            applyFilters();
          });
        });

        if (searchInput) {
          searchInput.addEventListener('input', applyFilters);
        }
      })();
    </script>
  </body>
</html>`;

  safeWriteAr(path.join(rootDir, 'ar/services/index.html'), servicesHubHtml);

  // 1B. Generate all 93 Full-Width Individual Arabic Service Detail Pages (/ar/services/<slug>.html)
  for (const s of uniqueServices) {
    const cat: CategoryDef = CATEGORIES.find((c) => c.id === s.categoryId) || CATEGORIES[0];
    const visuals = getServiceVisuals(s.slug, true);
    const enUrl = `/en/services/${s.slug}.html`;

    const siblingServices = uniqueServices
      .filter((other) => other.categoryId === s.categoryId && other.slug !== s.slug)
      .slice(0, 6);

    const relatedServiceObjs = (s.relatedServices || [])
      .map((slug) => serviceMap.get(slug))
      .filter((x): x is ServiceDef => Boolean(x))
      .slice(0, 4);

    if (relatedServiceObjs.length < 4) {
      for (const sib of siblingServices) {
        if (relatedServiceObjs.length >= 4) break;
        if (!relatedServiceObjs.some((r) => r.slug === sib.slug)) {
          relatedServiceObjs.push(sib);
        }
      }
    }

    const relatedArticleObjs = (s.relatedArticles || [])
      .map((slug) => articleMap.get(slug))
      .filter((x): x is ArArticleItem => Boolean(x))
      .slice(0, 4);

    if (relatedArticleObjs.length < 4) {
      for (const fallbackArt of allArticles) {
        if (relatedArticleObjs.length >= 4) break;
        if (!relatedArticleObjs.some((a) => a.slug === fallbackArt.slug)) {
          relatedArticleObjs.push(fallbackArt);
        }
      }
    }

    const techChipsHtml = visuals.techChips
      .map(
        (chip) =>
          `<span class="px-3 py-1 rounded-lg bg-[#07130D] border border-emerald-500/30 text-xs font-mono text-emerald-200" dir="ltr">${escapeHtml(chip)}</span>`
      )
      .join('');

    const kpiBadgesHtml = visuals.kpiBadges
      .map(
        (kpi) => `
                <div class="p-3.5 rounded-xl glass-panel border border-emerald-500/25 text-center space-y-1">
                  <div class="text-base">${kpi.icon}</div>
                  <div class="text-lg font-extrabold text-white font-mono" dir="ltr">${escapeHtml(kpi.value)}</div>
                  <div class="text-[10px] text-emerald-300/80 font-mono">${escapeHtml(kpi.label)}</div>
                </div>`
      )
      .join('');

    const problemsHtml = s.problemsAr
      .map(
        (p) => `
                    <li class="flex items-start gap-3 p-3.5 rounded-xl bg-[#050806]/80 border border-rose-500/20 text-xs sm:text-sm text-slate-200 leading-relaxed">
                      <span class="text-rose-400 font-bold mt-0.5 shrink-0">✕</span>
                      <span>${escapeHtml(p)}</span>
                    </li>`
      )
      .join('');

    const targetsHtml = s.targetAr
      .map(
        (t) => `
                    <li class="flex items-start gap-3 p-3.5 rounded-xl bg-[#050806]/80 border border-emerald-500/25 text-xs sm:text-sm text-slate-200 leading-relaxed">
                      <span class="text-emerald-400 font-bold mt-0.5 shrink-0">✓</span>
                      <span>${escapeHtml(t)}</span>
                    </li>`
      )
      .join('');

    const scopeHtml = s.scopeAr
      .map(
        (item, idx) => `
                <div class="p-6 rounded-2xl glass-panel border border-emerald-500/25 hover:border-[#C6A15B]/50 transition-all space-y-3 flex flex-col justify-between">
                  <div class="space-y-3">
                    <div class="flex items-center justify-between">
                      <span class="w-9 h-9 rounded-xl bg-[#C6A15B]/15 border border-[#C6A15B]/40 flex items-center justify-center text-xs font-mono font-bold text-[#E5C78B]">0${idx + 1}</span>
                      <span class="text-[10px] font-mono text-emerald-400/80">محور نطاق العمل</span>
                    </div>
                    <h3 class="text-base sm:text-lg font-bold text-white">${escapeHtml(item.title)}</h3>
                    <p class="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-[65ch]">${escapeHtml(item.desc)}</p>
                  </div>
                </div>`
      )
      .join('');

    const deliverablesHtml = s.deliverablesAr
      .map(
        (deliv, idx) => `
                <div class="p-4 sm:p-5 rounded-2xl glass-panel border border-emerald-500/20 flex items-start gap-3.5">
                  <span class="w-7 h-7 rounded-lg bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-xs font-mono font-bold text-emerald-300 shrink-0">${idx + 1}</span>
                  <div>
                    <div class="text-xs sm:text-sm font-bold text-white leading-snug">${escapeHtml(deliv)}</div>
                    <div class="text-[11px] text-emerald-300/70 mt-1 font-mono">مخرج تسليم معتمد وموثق</div>
                  </div>
                </div>`
      )
      .join('');

    const workflowHtml = s.workflowAr
      .map(
        (wf) => `
                <div class="p-6 rounded-2xl glass-panel border border-emerald-500/25 relative space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="px-2.5 py-1 rounded-lg bg-[#C6A15B]/20 border border-[#C6A15B]/50 text-xs font-mono font-extrabold text-[#E5C78B]">المرحلة ${escapeHtml(wf.step)}</span>
                    <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                  </div>
                  <h3 class="text-base font-bold text-white">${escapeHtml(wf.title)}</h3>
                  <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${escapeHtml(wf.desc)}</p>
                </div>`
      )
      .join('');

    const benefitsHtml = s.benefitsAr
      .map(
        (b) => `
                <div class="p-6 rounded-2xl glass-panel-elevated border border-[#C6A15B]/35 space-y-2.5">
                  <div class="w-9 h-9 rounded-xl bg-emerald-950/90 border border-emerald-500/30 flex items-center justify-center text-[#E5C78B] font-bold">★</div>
                  <h3 class="text-base sm:text-lg font-bold text-white">${escapeHtml(b.title)}</h3>
                  <p class="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-[65ch]">${escapeHtml(b.desc)}</p>
                </div>`
      )
      .join('');

    const faqsHtml = s.faqsAr
      .map(
        (faq) => `
                <div class="p-6 rounded-2xl glass-panel border border-emerald-500/20 space-y-2.5">
                  <h3 class="text-sm sm:text-base font-bold text-[#E5C78B] leading-snug">${escapeHtml(faq.q)}</h3>
                  <p class="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-[70ch]">${escapeHtml(faq.a)}</p>
                </div>`
      )
      .join('');

    const relatedServicesHtml = relatedServiceObjs
      .map(
        (rs) => `
                <a href="/ar/services/${rs.slug}.html" class="p-5 rounded-2xl glass-panel border border-emerald-500/20 hover:border-[#C6A15B]/50 transition-all flex flex-col justify-between gap-3 group">
                  <div class="space-y-2">
                    <span class="text-[10px] font-mono text-emerald-400">${escapeHtml(rs.badgeAr)}</span>
                    <h4 class="text-sm font-bold text-white group-hover:text-[#E5C78B] transition-colors">${escapeHtml(rs.titleAr)}</h4>
                  </div>
                  <span class="text-xs font-bold text-[#E5C78B]">استكشف الخدمة ←</span>
                </a>`
      )
      .join('');

    const relatedArticlesHtml = relatedArticleObjs
      .map(
        (ra) => `
                <a href="/ar/articles/${ra.slug}.html" class="p-5 rounded-2xl glass-panel border border-emerald-500/20 hover:border-[#C6A15B]/50 transition-all flex flex-col justify-between gap-3 group">
                  <div class="space-y-2">
                    <span class="text-[10px] font-mono text-[#E5C78B]">${escapeHtml(ra.categoryLabel)} · ${escapeHtml(ra.readTime)}</span>
                    <h4 class="text-sm font-bold text-white group-hover:text-[#E5C78B] transition-colors line-clamp-2">${escapeHtml(ra.title)}</h4>
                  </div>
                  <span class="text-xs font-bold text-emerald-300 group-hover:text-white">اقرأ الدليل التقني ←</span>
                </a>`
      )
      .join('');

    const siblingLinksHtml = siblingServices
      .map(
        (sib) => `
                <a href="/ar/services/${sib.slug}.html" class="block px-3 py-2 rounded-xl bg-[#07130D]/70 border border-emerald-950 hover:border-[#C6A15B]/50 text-xs text-slate-200 hover:text-[#E5C78B] transition-colors truncate">
                  ${escapeHtml(sib.titleAr)}
                </a>`
      )
      .join('');

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: '/ar/index.html' },
            { '@type': 'ListItem', position: 2, name: 'دليل الخدمات', item: '/ar/services/index.html' },
            { '@type': 'ListItem', position: 3, name: s.titleAr, item: `/ar/services/${s.slug}.html` }
          ]
        },
        {
          '@type': 'Service',
          name: s.titleAr,
          description: s.overviewAr,
          serviceType: cat.nameAr,
          inLanguage: 'ar',
          provider: {
            '@type': 'Person',
            name: 'يوسف غمري',
            jobTitle: 'مطور Full-Stack وأخصائي مناقصات وعروض فنية'
          },
          areaServed: ['SA', 'AE', 'BH', 'EG', 'QA', 'KW', 'OM', 'US', 'GB', 'DE'],
          availableLanguage: ['ar', 'en']
        },
        ...(s.faqsAr.length > 0
          ? [
              {
                '@type': 'FAQPage',
                mainEntity: s.faqsAr.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a }
                }))
              }
            ]
          : [])
      ]
    };

    const serviceDetailHtml = `<!doctype html>
<html lang="ar" dir="rtl" class="dark">
  <head>
    <meta charset="UTF-8" />
    ${THEME_INIT_SCRIPT}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(s.titleAr)} | يوسف غمري</title>
    <meta name="description" content="${escapeHtml(s.overviewAr)}" />
    <link rel="canonical" href="/ar/services/${s.slug}.html" />
    <link rel="alternate" hreflang="ar" href="/ar/services/${s.slug}.html" />
    <link rel="alternate" hreflang="en" href="${enUrl}" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${escapeHtml(s.titleAr)} | يوسف غمري" />
    <meta property="og:description" content="${escapeHtml(s.overviewAr)}" />
    <meta property="og:image" content="/assets/aistudio/image_ef5d64bf.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(s.titleAr)}" />
    <meta name="twitter:description" content="${escapeHtml(s.overviewAr)}" />
    ${AR_GOOGLE_FONTS_HTML}
    <link rel="stylesheet" href="/assets/css/style.css" />
    <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
    </script>
  </head>
  <body class="theme-gold selection:bg-emerald-600 selection:text-white bg-[#050806] text-slate-100 min-h-screen">
${renderArHeader('services', enUrl, uniqueServices)}

    <!-- واجهة الخدمة التفصيلية بعرض الشاشة الكامل -->
    <section class="border-b border-emerald-950/70 bg-gradient-to-b from-[#07130D]/90 via-[#050806] to-[#050806] relative overflow-hidden">
      <div class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10 lg:py-16">
        <nav class="breadcrumbs flex flex-wrap items-center gap-2 text-xs text-emerald-300/70 mb-6" aria-label="مسار التنقل">
          <a href="/ar/index.html" class="hover:text-[#E5C78B]">الرئيسية</a>
          <span>/</span>
          <a href="/ar/services/index.html" class="hover:text-[#E5C78B]">دليل الخدمات</a>
          <span>/</span>
          <a href="/ar/services/index.html#${cat.id}" class="hover:text-[#E5C78B]">${escapeHtml(cat.nameAr)}</a>
          <span>/</span>
          <span class="text-white font-semibold">${escapeHtml(s.titleAr)}</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
          <!-- العمود الأيمن (7 أعمدة): التموضع المهني ونظرة عامة -->
          <div class="lg:col-span-7 space-y-6">
            <div class="flex flex-wrap items-center gap-2.5">
              <span class="badge-gold">
                <span class="w-1.5 h-1.5 rounded-full bg-[#C6A15B] animate-pulse"></span>
                <span>${escapeHtml(s.badgeAr)}</span>
              </span>
              <span class="badge-emerald">${cat.icon} ${escapeHtml(cat.nameAr)}</span>
            </div>

            <div class="space-y-3">
              <h1 class="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.2]">
                ${escapeHtml(s.titleAr)}
              </h1>
              <p class="text-base sm:text-xl font-bold gold-gradient-text max-w-[68ch]">
                ${escapeHtml(s.headlineAr)}
              </p>
            </div>

            <p class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-[72ch]">
              ${escapeHtml(s.overviewAr)}
            </p>

            <div class="flex flex-wrap items-center gap-2 pt-1">
              ${techChipsHtml}
            </div>

            <div class="flex flex-wrap items-center gap-3.5 pt-2">
              <a href="/ar/contact/index.html" class="btn-gold text-xs py-3 px-6 font-bold">
                <span>اطلب عرض سعر ومقترحاً فنياً</span>
                <svg class="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
              <a href="https://wa.me/201503292942" target="_blank" rel="noopener noreferrer" class="btn-emerald text-xs py-3 px-5">
                <span>استشارة فورية عبر واتساب</span>
              </a>
              <a href="/ar/portfolio/index.html" class="btn-ghost-gold text-xs py-3 px-5">
                <span>استعراض الأعمال المنفذة</span>
              </a>
            </div>
          </div>

          <!-- العمود الأيسر (5 أعمدة): البطاقة البصرية ومؤشرات الأداء -->
          <div class="lg:col-span-5 space-y-4">
            <div class="flex items-center gap-3.5 p-4 rounded-2xl glass-panel border border-emerald-500/25">
              <div class="shrink-0">${visuals.logoSvg}</div>
              <div class="min-w-0">
                <div class="text-sm font-bold text-white truncate">${escapeHtml(visuals.brandName)}</div>
                <div class="text-xs text-emerald-300/80 leading-snug">${escapeHtml(visuals.brandTagline)}</div>
              </div>
            </div>

            ${visuals.heroVisualCardHtml}

            <div class="grid grid-cols-3 gap-3">
              ${kpiBadgesHtml}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- مخطط المعمارية الهندسية بعرض الشاشة الكامل -->
    <section class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-10">
      ${visuals.architectureDiagramHtml}
    </section>

    <!-- مساحة عمل الخدمة من 12 عموداً بعرض الشاشة الكامل -->
    <main class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-12 lg:py-16">
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-start">
        
        <!-- الشريط الجانبي المثبت لفصول الخدمة (3 أعمدة) -->
        <aside class="xl:col-span-3 xl:sticky xl:top-24 space-y-6 order-2 xl:order-1">
          <div class="p-5 rounded-2xl glass-panel border border-emerald-500/25 space-y-3">
            <div class="text-xs font-bold tracking-wide text-[#E5C78B] font-mono">
              مخطط فصول الخدمة
            </div>
            <nav class="space-y-1.5 text-xs" aria-label="أقسام هذه الصفحة">
              <a href="#challenges-fit" class="block px-3 py-2 rounded-lg hover:bg-emerald-950/60 text-slate-300 hover:text-[#E5C78B] transition-colors">1. التحديات والجهات المستهدفة</a>
              <a href="#scope-of-work" class="block px-3 py-2 rounded-lg hover:bg-emerald-950/60 text-slate-300 hover:text-[#E5C78B] transition-colors">2. النطاق التنفيذي الشامل للعمل</a>
              <a href="#deliverables" class="block px-3 py-2 rounded-lg hover:bg-emerald-950/60 text-slate-300 hover:text-[#E5C78B] transition-colors">3. المخرجات والتسليمات الملموسة</a>
              <a href="#workflow" class="block px-3 py-2 rounded-lg hover:bg-emerald-950/60 text-slate-300 hover:text-[#E5C78B] transition-colors">4. منهجية التنفيذ من 4 مراحل</a>
              <a href="#benefits" class="block px-3 py-2 rounded-lg hover:bg-emerald-950/60 text-slate-300 hover:text-[#E5C78B] transition-colors">5. القيمة الاستراتيجية والعائد</a>
              <a href="#service-faqs" class="block px-3 py-2 rounded-lg hover:bg-emerald-950/60 text-slate-300 hover:text-[#E5C78B] transition-colors">6. الأسئلة الشائعة</a>
              <a href="#related-ecosystem" class="block px-3 py-2 rounded-lg hover:bg-emerald-950/60 text-slate-300 hover:text-[#E5C78B] transition-colors">7. خدمات وأدلة تقنية مرتبطة</a>
            </nav>
          </div>

          <div class="p-6 rounded-2xl glass-panel-elevated border border-[#C6A15B]/40 space-y-4">
            <div class="text-xs font-mono tracking-wide text-emerald-300">استشارة محمية باتفاقية NDA</div>
            <h3 class="text-base font-bold text-white">تعاقد مع يوسف غمري</h3>
            <p class="text-xs text-slate-300 leading-relaxed">
              خبرة موثقة ترتكز على أكثر من 100 مشروع رقمي منفذ وأكثر من 400 مناقصة تم إعدادها وصياغتها وتنسيقها ومراجعتها للقطاعين الحكومي والخاص.
            </p>
            <div class="space-y-2">
              <a href="/ar/contact/index.html" class="w-full btn-gold text-xs py-2.5 px-4 font-bold justify-center">اطلب عرض سعر رسمي</a>
              <a href="https://wa.me/201503292942" target="_blank" rel="noopener noreferrer" class="w-full btn-emerald text-xs py-2.5 px-4 justify-center">تواصل مباشر عبر واتساب</a>
            </div>
          </div>

          <div class="p-5 rounded-2xl glass-panel border border-emerald-500/20 space-y-3">
            <div class="text-xs font-bold tracking-wide text-[#E5C78B] font-mono">
              المزيد في ${escapeHtml(cat.nameAr)}
            </div>
            <div class="space-y-1.5">
              ${siblingLinksHtml}
            </div>
          </div>
        </aside>

        <!-- المساحة الرئيسية لتفاصيل الخدمة (9 أعمدة) -->
        <div class="xl:col-span-9 space-y-14 min-w-0 order-1 xl:order-2">
          
          <!-- 1. التحديات مقابل الجهات المستهدفة -->
          <section id="challenges-fit" class="grid grid-cols-1 lg:grid-cols-2 gap-6 scroll-mt-28">
            <div class="p-6 sm:p-8 rounded-2xl glass-panel border border-rose-500/25 space-y-4">
              <div class="text-xs font-mono tracking-wide text-rose-300">معالجة المخاطر والاختناقات</div>
              <h2 class="text-xl sm:text-2xl font-bold text-white">التحديات الجوهرية التي نعالجها جذرياً</h2>
              <ul class="space-y-2.5">${problemsHtml}
              </ul>
            </div>

            <div class="p-6 sm:p-8 rounded-2xl glass-panel border border-emerald-500/25 space-y-4">
              <div class="text-xs font-mono tracking-wide text-emerald-300">ملف العملاء والجهات المستفيدة</div>
              <h2 class="text-xl sm:text-2xl font-bold text-white">لمن صُممت هذه الخدمة خصيصاً؟</h2>
              <ul class="space-y-2.5">${targetsHtml}
              </ul>
            </div>
          </section>

          <!-- 2. النطاق الشامل للعمل -->
          <section id="scope-of-work" class="space-y-6 scroll-mt-28">
            <div class="space-y-2">
              <div class="text-xs font-mono tracking-wide text-[#E5C78B]">التنفيذ الهندسي والتشغيلي</div>
              <h2 class="text-2xl sm:text-3xl font-extrabold text-white">النطاق التفصيلي الشامل للعمل</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-5">${scopeHtml}
            </div>
          </section>

          <!-- 3. المخرجات والتسليمات -->
          <section id="deliverables" class="space-y-6 scroll-mt-28">
            <div class="space-y-2">
              <div class="text-xs font-mono tracking-wide text-emerald-400">حزمة التسليم المعتمدة</div>
              <h2 class="text-2xl sm:text-3xl font-extrabold text-white">المخرجات والتسليمات الملموسة</h2>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">${deliverablesHtml}
            </div>
          </section>

          <!-- 4. منهجية العمل -->
          <section id="workflow" class="space-y-6 scroll-mt-28">
            <div class="space-y-2">
              <div class="text-xs font-mono tracking-wide text-[#E5C78B]">الحوكمة وإيقاع التسليم</div>
              <h2 class="text-2xl sm:text-3xl font-extrabold text-white">منهجية التنفيذ من 4 مراحل</h2>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">${workflowHtml}
            </div>
          </section>

          <!-- 5. القيمة الاستراتيجية -->
          <section id="benefits" class="space-y-6 scroll-mt-28">
            <div class="space-y-2">
              <div class="text-xs font-mono tracking-wide text-emerald-400">العائد التنفيذي على الاستثمار</div>
              <h2 class="text-2xl sm:text-3xl font-extrabold text-white">القيمة الاستراتيجية والنتائج القابلة للقياس</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">${benefitsHtml}
            </div>
          </section>

          <!-- 6. الأسئلة الشائعة -->
          <section id="service-faqs" class="space-y-6 scroll-mt-28">
            <div class="space-y-2">
              <div class="text-xs font-mono tracking-wide text-[#E5C78B]">وضوح تام قبل بدء المشروع</div>
              <h2 class="text-2xl sm:text-3xl font-extrabold text-white">الأسئلة الشائعة حول الخدمة</h2>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">${faqsHtml}
            </div>
          </section>

          <!-- 7. الخدمات والأدلة المرتبطة -->
          <section id="related-ecosystem" class="space-y-8 pt-6 border-t border-emerald-950/80 scroll-mt-28">
            <div class="space-y-4">
              <h2 class="text-xl sm:text-2xl font-bold text-white">خدمات تخصصية مكملة</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">${relatedServicesHtml}
              </div>
            </div>

            <div class="space-y-4">
              <h2 class="text-xl sm:text-2xl font-bold text-white">أدلة هندسية ومعرفية مرتبطة</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">${relatedArticlesHtml}
              </div>
            </div>
          </section>

        </div>

      </div>
    </main>

${renderArFooter(enUrl, allArticles.length)}

    <script src="/assets/js/main.js"></script>
  </body>
</html>`;

    safeWriteAr(path.join(rootDir, 'ar/services', `${s.slug}.html`), serviceDetailHtml);
  }
}

// ============================================================================
// 2. FULL-WIDTH ARABIC ARTICLES HUB + ALL 132 ARTICLE DETAIL PAGES
// ============================================================================
function renderArArticleSectionHtml(sec: ArArticleSection): string {
  if (sec.rawHtml) {
    return `
            <section id="${escapeHtml(sec.id)}" class="p-6 sm:p-8 rounded-2xl glass-panel border border-emerald-500/20 space-y-4 scroll-mt-28">
              <h2 class="text-xl sm:text-2xl font-bold text-white leading-snug">${escapeHtml(sec.heading)}</h2>
              <div class="space-y-4 text-sm sm:text-base text-slate-300 leading-[1.9] content-body">
                ${sec.rawHtml}
              </div>
            </section>`;
  }

  const paragraphsHtml = (sec.paragraphs || [])
    .map(
      (p) =>
        `<p class="text-sm sm:text-base text-slate-300 leading-[1.9]">${escapeHtml(p)}</p>`
    )
    .join('\n              ');

  const comparisonTableHtml = sec.comparisonTable
    ? `
              <div class="overflow-x-auto rounded-xl border border-emerald-500/30 bg-[#050806]/90 my-4">
                ${
                  sec.comparisonTable.caption
                    ? `<div class="px-4 py-2.5 bg-[#07130D] border-b border-emerald-950 text-xs font-bold text-[#E5C78B]">${escapeHtml(sec.comparisonTable.caption)}</div>`
                    : ''
                }
                <table class="w-full text-xs sm:text-sm text-right border-collapse">
                  <thead class="bg-emerald-950/75 text-[#E5C78B]">
                    <tr>
                      ${sec.comparisonTable.headers
                        .map(
                          (h) =>
                            `<th class="p-3.5 border-b border-emerald-800/60 font-bold whitespace-nowrap">${escapeHtml(h)}</th>`
                        )
                        .join('')}
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-emerald-950/80 text-slate-200">
                    ${sec.comparisonTable.rows
                      .map(
                        (row) => `
                    <tr class="hover:bg-emerald-950/30 transition-colors">
                      ${row
                        .map((cell, idx) =>
                          idx === 0
                            ? `<td class="p-3.5 font-bold text-white whitespace-nowrap">${escapeHtml(cell)}</td>`
                            : `<td class="p-3.5 text-slate-300 leading-relaxed">${escapeHtml(cell)}</td>`
                        )
                        .join('')}
                    </tr>`
                      )
                      .join('')}
                  </tbody>
                </table>
              </div>`
    : '';

  const codeBlockHtml = sec.codeBlock
    ? `
              <div class="rounded-xl overflow-hidden border border-emerald-500/35 bg-[#040705] my-4 text-left" dir="ltr">
                <div class="px-4 py-2.5 bg-[#07130D] border-b border-emerald-950 flex items-center justify-between gap-2 text-xs font-mono">
                  <span class="text-[#E5C78B] font-semibold truncate">${escapeHtml(sec.codeBlock.filename)}</span>
                  <span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] uppercase shrink-0">${escapeHtml(sec.codeBlock.language)}</span>
                </div>
                <pre class="p-4 overflow-x-auto text-xs font-mono text-emerald-100/95 leading-relaxed"><code>${escapeHtml(sec.codeBlock.code)}</code></pre>
              </div>`
    : '';

  const takeawaysHtml =
    sec.keyTakeaways && sec.keyTakeaways.length > 0
      ? `
              <div class="p-5 rounded-xl bg-[#07130D]/90 border border-[#C6A15B]/35 space-y-2.5 mt-4">
                <div class="text-xs font-mono font-bold tracking-wide text-[#E5C78B]">أبرز الخلاصات الهندسية</div>
                <ul class="space-y-2">
                  ${sec.keyTakeaways
                    .map(
                      (k) =>
                        `<li class="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-100/90 leading-relaxed"><span class="text-[#E5C78B] mt-0.5 shrink-0">✦</span><span>${escapeHtml(k)}</span></li>`
                    )
                    .join('')}
                </ul>
              </div>`
      : '';

  const checklistTitle =
    sec.checklistTitle || sec.codeOrChecklistTitle || 'قائمة التحقق للإنتاج الفعلي';

  const checklistHtml =
    sec.checklistItems && sec.checklistItems.length > 0
      ? `
              <div class="p-5 rounded-xl bg-[#050806]/90 border border-emerald-500/30 space-y-3 mt-4">
                <div class="text-xs font-mono font-bold tracking-wide text-emerald-400">
                  ✓ ${escapeHtml(checklistTitle)}
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  ${sec.checklistItems
                    .map(
                      (item) =>
                        `<div class="p-3 rounded-lg bg-[#07130D]/80 border border-emerald-950 text-xs text-slate-200 flex items-start gap-2 leading-relaxed"><span class="text-emerald-400 font-bold shrink-0">✓</span><span>${escapeHtml(item)}</span></div>`
                    )
                    .join('')}
                </div>
              </div>`
      : '';

  return `
            <section id="${escapeHtml(sec.id)}" class="p-6 sm:p-8 rounded-2xl glass-panel border border-emerald-500/20 space-y-4 scroll-mt-28">
              <h2 class="text-xl sm:text-2xl font-bold text-white leading-snug">${escapeHtml(sec.heading)}</h2>
              ${paragraphsHtml}
              ${comparisonTableHtml}
              ${codeBlockHtml}
              ${takeawaysHtml}
              ${checklistHtml}
            </section>`;
}

function buildArabicArticles(allArticles: ArArticleItem[], allServices: ServiceDef[]): void {
  const articleMap = new Map<string, ArArticleItem>();
  for (const a of allArticles) articleMap.set(a.slug, a);

  const uniqueServices = Array.from(new Map(allServices.map((s) => [s.slug, s])).values());

  // 2A. Generate /ar/articles/index.html (Full-Width RTL Hub)
  const newlyPublishedArticles = allArticles.filter((a) => Boolean(a.isNewlyPublished));

  const trackCounts = new Map<string, number>();
  for (const t of AR_ARTICLE_TRACKS) {
    trackCounts.set(
      t.key,
      allArticles.filter((a) => normalizeArTrackKey(a.categoryKey) === t.key).length
    );
  }
  const activeTracks = AR_ARTICLE_TRACKS.filter((t) => (trackCounts.get(t.key) || 0) > 0);

  const newlyAddedFilterBtnHtml =
    newlyPublishedArticles.length > 0
      ? `<button type="button" data-article-filter="newly-added" class="article-hub-filter-btn px-3.5 py-2 rounded-xl border border-emerald-500/45 bg-emerald-950/60 text-xs font-bold text-emerald-200 hover:border-[#C6A15B]/70 hover:text-white transition-all shrink-0 cursor-pointer">أُضيف حديثاً (${newlyPublishedArticles.length})</button>`
      : '';

  const filterPillsHtml = activeTracks
    .map((t) => {
      const cnt = trackCounts.get(t.key) || 0;
      return `<button type="button" data-article-filter="${t.key}" class="article-hub-filter-btn px-3.5 py-2 rounded-xl border border-emerald-900/80 bg-[#07130D]/90 text-xs font-semibold text-emerald-200/90 hover:border-[#C6A15B]/60 hover:text-white transition-all shrink-0 cursor-pointer">${t.icon} ${escapeHtml(t.label)} (${cnt})</button>`;
    })
    .join('\n          ');

  const newlyAddedSidebarBtnHtml =
    newlyPublishedArticles.length > 0
      ? `
              <button type="button" data-sidebar-track="newly-added" class="w-full flex items-center justify-between gap-2 px-3.5 py-2 rounded-xl bg-emerald-950/60 border border-[#C6A15B]/45 hover:border-[#E5C78B] text-xs text-white font-semibold transition-all cursor-pointer text-start">
                <span class="truncate">أحدث الإصدارات المنشورة</span>
                <span class="text-[11px] font-mono tabular-nums text-[#E5C78B] shrink-0">${newlyPublishedArticles.length}</span>
              </button>`
      : '';

  const sidebarTracksHtml = activeTracks
    .map((t) => {
      const cnt = trackCounts.get(t.key) || 0;
      return `
              <button type="button" data-sidebar-track="${t.key}" class="w-full flex items-center justify-between gap-2 px-3.5 py-2 rounded-xl bg-[#07130D]/80 border border-emerald-950/80 hover:border-[#C6A15B]/60 text-xs text-slate-200 hover:text-white transition-all cursor-pointer text-start">
                <span class="flex items-center gap-2 truncate">
                  <span>${t.icon}</span>
                  <span class="truncate font-medium">${escapeHtml(t.label)}</span>
                </span>
                <span class="text-[11px] font-mono tabular-nums text-emerald-300 shrink-0">${cnt}</span>
              </button>`;
    })
    .join('');

  const newlyPublishedShowcaseHtml =
    newlyPublishedArticles.length > 0
      ? `
          <!-- واجهة أحدث الأدلة الهندسية المنشورة -->
          <section id="newly-published-showcase" class="mb-10 p-6 sm:p-8 rounded-2xl glass-panel-elevated border border-[#C6A15B]/40 space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-emerald-950/80">
              <div class="space-y-1.5">
                <div class="text-xs font-mono text-[#E5C78B] tracking-wide">
                  أحدث الإصدارات الهندسية المتدرجة · ${newlyPublishedArticles.length} دليلاً تقنياً منشوراً حديثاً
                </div>
                <h2 class="text-xl sm:text-2xl font-bold text-white">
                  أحدث أدلة معمارية JavaScript وTypeScript وPHP وأنظمة إدارة المحتوى
                </h2>
                <p class="text-xs sm:text-sm text-slate-300 max-w-[72ch] leading-relaxed">
                  أدلة هندسية معمقة ومقارنات معمارية مباشرة للإنتاج الفعلي—مؤلفة ومراجعة برمجياً ومدققة وفق معايير السيو التقني (Technical SEO).
                </p>
              </div>
              <button type="button" id="focus-newly-added-btn" class="px-4 py-2 rounded-xl border border-[#C6A15B]/50 bg-[#07130D] hover:border-[#E5C78B] text-xs font-semibold text-[#E5C78B] hover:text-white transition-colors shrink-0 cursor-pointer">
                عرض المضاف حديثاً فقط (${newlyPublishedArticles.length})
              </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
              ${newlyPublishedArticles
                .map((a, idx) => {
                  const pubDate = a.publishedDate || a.updatedDate;
                  const wordsMeta = a.wordCount ? `${a.wordCount.toLocaleString('en-US')} كلمة` : a.readTime;
                  return `
              <a href="/ar/articles/${a.slug}.html" class="group rounded-xl bg-[#07130D]/90 border border-emerald-500/25 hover:border-[#C6A15B]/65 overflow-hidden flex flex-col justify-between transition-all">
                <div>
                  <div class="aspect-[16/9] bg-[#050806] border-b border-emerald-950/80 overflow-hidden">
                    <img src="${escapeHtml(a.featuredSvg)}" alt="${escapeHtml(a.featuredImageAlt || a.title)}" loading="${idx < 6 ? 'eager' : 'lazy'}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div class="p-5 space-y-2.5">
                    <div class="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-emerald-300/90 tabular-nums">
                      <span class="font-bold text-[#E5C78B]">جديد</span>
                      <span aria-hidden="true">·</span>
                      <span>${escapeHtml(a.categoryLabel)}</span>
                      <span aria-hidden="true">·</span>
                      <span dir="ltr">${escapeHtml(pubDate)}</span>
                      <span aria-hidden="true">·</span>
                      <span>${escapeHtml(wordsMeta)}</span>
                    </div>
                    <h3 class="text-sm sm:text-base font-bold text-white group-hover:text-[#E5C78B] transition-colors leading-snug line-clamp-2">
                      ${escapeHtml(a.title)}
                    </h3>
                    <p class="text-xs text-slate-300/85 leading-relaxed line-clamp-2">
                      ${escapeHtml(a.summary)}
                    </p>
                  </div>
                </div>
                <div class="px-5 pb-4 pt-3 border-t border-emerald-950/70 flex items-center justify-between text-xs font-semibold text-[#E5C78B] group-hover:text-white">
                  <span>${escapeHtml(a.readTime)}</span>
                  <span>اقرأ الدليل الكامل ←</span>
                </div>
              </a>`;
                })
                .join('')}
            </div>
          </section>`
      : '';

  const articleCardsHtml = allArticles
    .map((a) => {
      const normalizedKey = normalizeArTrackKey(a.categoryKey);
      const isNew = Boolean(a.isNewlyPublished);
      const searchBlob = `${a.title} ${a.summary} ${a.badge} ${a.categoryLabel} ${a.slug} ${a.primaryKeyword || ''} ${(a.secondaryKeywords || []).join(' ')} ${isNew ? 'جديد مضاف حديثا new latest' : ''}`.toLowerCase();
      const cardImgAlt = a.featuredImageAlt || a.title;
      const pubDate = a.publishedDate || a.updatedDate;
      const metaLineHtml = isNew
        ? `<div class="flex flex-wrap items-center gap-1.5 text-[11px] font-mono tabular-nums">
                    <span class="font-bold text-[#E5C78B]">منشور حديثاً</span>
                    <span class="text-slate-500" aria-hidden="true">·</span>
                    <span class="text-emerald-300" dir="ltr">${escapeHtml(pubDate)}</span>
                    <span class="text-slate-500" aria-hidden="true">·</span>
                    <span class="text-slate-300">${escapeHtml(a.categoryLabel)}</span>
                  </div>`
        : `<div class="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-emerald-400/80 truncate">
                    <span>${escapeHtml(a.categoryLabel)}</span>
                    <span class="text-slate-500" aria-hidden="true">·</span>
                    <span class="truncate">${escapeHtml(a.badge)}</span>
                  </div>`;

      return `
            <article
              data-article-card="true"
              data-track="${escapeHtml(normalizedKey)}"
              data-is-new="${isNew ? 'true' : 'false'}"
              data-search="${escapeHtml(searchBlob)}"
              class="glass-panel rounded-2xl interactive-card border ${isNew ? 'border-[#C6A15B]/45' : 'border-emerald-500/20'} hover:border-[#C6A15B]/65 overflow-hidden flex flex-col justify-between group transition-all"
            >
              <div>
                <a href="/ar/articles/${a.slug}.html" class="block relative aspect-[16/9] bg-[#07130D] border-b border-emerald-950/80 overflow-hidden">
                  <img src="${escapeHtml(a.featuredSvg)}" alt="${escapeHtml(cardImgAlt)}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </a>
                <div class="p-6 space-y-3">
                  ${metaLineHtml}
                  <h2 class="text-base sm:text-lg font-bold text-white group-hover:text-[#E5C78B] transition-colors leading-snug line-clamp-2">
                    <a href="/ar/articles/${a.slug}.html" class="hover:underline">${escapeHtml(a.title)}</a>
                  </h2>
                  <p class="text-xs text-slate-300/85 leading-relaxed line-clamp-3">
                    ${escapeHtml(a.summary)}
                  </p>
                </div>
              </div>

              <div class="px-6 pb-5 pt-4 border-t border-emerald-950/80 flex items-center justify-between text-xs">
                <span class="text-[11px] font-mono text-slate-400 tabular-nums">${escapeHtml(a.readTime)}</span>
                <a href="/ar/articles/${a.slug}.html" class="font-bold text-[#E5C78B] hover:text-white inline-flex items-center gap-1 shrink-0">
                  <span>قراءة الدليل</span>
                  <svg class="w-3.5 h-3.5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </a>
              </div>
            </article>`;
    })
    .join('');

  const articlesHubHtml = `<!doctype html>
<html lang="ar" dir="rtl" class="dark">
  <head>
    <meta charset="UTF-8" />
    ${THEME_INIT_SCRIPT}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>مركز المعرفة الهندسية والمناقصات (${allArticles.length} دليلاً تخصصياً) | يوسف غمري</title>
    <meta name="description" content="استكشف ${allArticles.length} دليلاً هندسياً ومعرفياً في معمارية البرمجيات ومناقصات منصة اعتماد عبر JavaScript وTypeScript وPHP 8.5 وLaravel وSymfony وReact وVue وAngular وNode.js وووردبريس وشوبيفاي وسلة وزد." />
    <link rel="canonical" href="/ar/articles/index.html" />
    <link rel="alternate" hreflang="ar" href="/ar/articles/index.html" />
    <link rel="alternate" hreflang="en" href="/en/articles/index.html" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="مركز المعرفة الهندسية والمناقصات (${allArticles.length} دليلاً) | يوسف غمري" />
    <meta property="og:description" content="${allArticles.length} دليلاً هندسياً ومرجعاً في المناقصات الحكومية عبر ${activeTracks.length} مساراً تقنياً متخصصاً." />
    <meta property="og:image" content="/assets/aistudio/image_ef5d64bf.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${allArticles.length} دليلاً تقنياً واستشارياً | يوسف غمري" />
    <meta name="twitter:description" content="مكتبة معرفية شاملة تغطي بيئات JavaScript وPHP، المناقصات الحكومية عبر منصة اعتماد، أطر الويب الحديثة، والتجارة الإلكترونية." />
    ${AR_GOOGLE_FONTS_HTML}
    <link rel="stylesheet" href="/assets/css/style.css" />
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "مركز المعرفة الهندسية والمناقصات | يوسف غمري",
      "inLanguage": "ar",
      "description": "مكتبة شاملة تضم ${allArticles.length} دليلاً في هندسة البرمجيات والمناقصات الحكومية.",
      "author": {
        "@type": "Person",
        "name": "يوسف غمري"
      }
    }
    </script>
  </head>
  <body class="theme-gold selection:bg-emerald-600 selection:text-white bg-[#050806] text-slate-100 min-h-screen">
${renderArHeader('articles', '/en/articles/index.html', uniqueServices)}

    <!-- واجهة مركز المعرفة بعرض الشاشة الكامل -->
    <section class="border-b border-emerald-950/70 bg-gradient-to-b from-[#07130D]/90 via-[#050806] to-[#050806]">
      <div class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10 lg:py-16">
        <nav class="breadcrumbs flex items-center gap-2 text-xs text-emerald-300/70 mb-6" aria-label="مسار التنقل">
          <a href="/ar/index.html" class="hover:text-[#E5C78B]">الرئيسية</a>
          <span>/</span>
          <span class="text-white font-semibold">مركز المعرفة والمقالات</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
          <div class="lg:col-span-7 space-y-5">
            <div class="text-xs font-mono text-[#E5C78B] tracking-wide">
              المكتبة الهندسية والاستشارية المتخصصة · ${activeTracks.length} مساراً · ${allArticles.length} دليلاً منشوراً (${newlyPublishedArticles.length} مضافاً حديثاً)
            </div>

            <h1 class="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.2]">
              مركز المعرفة الهندسية <span class="gold-gradient-text heading-hover-glow">ومرجع المناقصات</span>
            </h1>

            <p class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-[72ch]">
              مخططات هندسية موثقة، مقارنات معمارية لمنظومتي JavaScript وPHP، أدلة تشخيص أعطال الإنتاج، مراجع الإصدارات الرسمية، واستراتيجيات المناقصات الحكومية عبر منصة اعتماد في React.js وVue.js وAngular وNode.js وTypeScript وPHP 8.5 وLaravel وSymfony وووردبريس ودروبال وشوبيفاي وسلة وزد.
            </p>
          </div>

          <div class="lg:col-span-5 grid grid-cols-2 gap-4">
            <div class="p-5 rounded-2xl glass-panel-elevated border border-[#C6A15B]/40 space-y-1">
              <div class="text-3xl sm:text-4xl font-extrabold gold-gradient-text font-mono tabular-nums">${allArticles.length}</div>
              <div class="text-xs sm:text-sm font-bold text-white">دليلاً منشوراً</div>
              <p class="text-[11px] text-emerald-200/70">${newlyPublishedArticles.length} دليلاً جديداً مدققاً للسيو التقني</p>
            </div>
            <div class="p-5 rounded-2xl glass-panel-elevated border border-emerald-500/30 space-y-1">
              <div class="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono tabular-nums">${activeTracks.length}</div>
              <div class="text-xs sm:text-sm font-bold text-white">مساراً تخصصياً</div>
              <p class="text-[11px] text-emerald-200/70">JS/TS وPHP وCMS ومناقصات اعتماد</p>
            </div>
            <div class="p-5 rounded-2xl glass-panel-elevated border border-emerald-500/30 space-y-1">
              <div class="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">93</div>
              <div class="text-xs sm:text-sm font-bold text-white">خدمة مرتبطة</div>
              <p class="text-[11px] text-emerald-200/70">مسارات تنفيذية واستشارية مباشرة</p>
            </div>
            <div class="p-5 rounded-2xl glass-panel-elevated border border-[#C6A15B]/40 space-y-1">
              <div class="text-3xl sm:text-4xl font-extrabold gold-gradient-text font-mono tabular-nums">+400</div>
              <div class="text-xs sm:text-sm font-bold text-white">خبرة في المناقصات</div>
              <p class="text-[11px] text-emerald-200/70">حوكمة عملية للعروض الفنية والامتثال</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- شريط البحث وتصفية المسارات المثبت بعرض الشاشة -->
    <div class="sticky top-20 z-30 border-b border-emerald-950/80 bg-[#050806]/95 backdrop-blur-xl">
      <div class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-4 space-y-3">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div class="relative w-full lg:max-w-md">
            <input
              type="search"
              id="articles-hub-search"
              placeholder="ابحث في ${allArticles.length} دليلاً: Next.js، Nuxt، Svelte، NestJS، Laravel، Symfony، ووردبريس، سلة، اعتماد..."
              class="luxury-input text-xs py-2.5 px-4 w-full"
            />
          </div>
          <div id="articles-visible-count" class="text-xs font-mono tabular-nums text-emerald-300/90">
            عرض كافة الأدلة الهندسية والاستشارية (${allArticles.length} دليلاً)
          </div>
        </div>

        <div class="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          <button type="button" data-article-filter="all" class="article-hub-filter-btn px-3.5 py-2 rounded-xl border border-[#C6A15B] bg-[#C6A15B]/20 text-xs font-bold text-white shrink-0 cursor-pointer">
            كافة المسارات (${allArticles.length})
          </button>
          ${newlyAddedFilterBtnHtml}
          ${filterPillsHtml}
        </div>
      </div>
    </div>

    <!-- مساحة العمل من 12 عموداً بعرض الشاشة الكامل -->
    <main class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10 lg:py-14">
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-start">
        
        <!-- الشريط الجانبي المثبت للمسارات (3 أعمدة) -->
        <aside class="xl:col-span-3 xl:sticky xl:top-44 space-y-6">
          <div class="p-5 rounded-2xl glass-panel border border-emerald-500/25 space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-[#E5C78B] font-mono">${activeTracks.length} مساراً تخصصياً</span>
              <button type="button" data-sidebar-track="all" class="text-[11px] font-mono text-emerald-400 hover:underline cursor-pointer">إعادة ضبط</button>
            </div>
            <div class="space-y-1.5">${newlyAddedSidebarBtnHtml}${sidebarTracksHtml}
            </div>
          </div>

          <div class="p-6 rounded-2xl glass-panel-elevated border border-[#C6A15B]/40 space-y-3.5">
            <div class="text-xs font-mono text-emerald-300">هل تحتاج تنفيذاً هندسياً متكاملاً؟</div>
            <h2 class="text-base font-bold text-white">من المعمارية التقنية إلى العروض الفنية الفائزة</h2>
            <p class="text-xs text-slate-300 leading-relaxed">
              تصفح 93 خدمة متخصصة أو اطلب استشارة مباشرة حول منصتك الرقمية القادمة أو منافستك الحكومية عبر منصة اعتماد.
            </p>
            <div class="space-y-2 pt-1">
              <a href="/ar/services/index.html" class="w-full btn-gold text-xs py-2.5 px-4 font-bold justify-center">استكشف 93 خدمة متخصصة</a>
              <a href="/ar/contact/index.html" class="w-full btn-ghost-gold text-xs py-2.5 px-4 justify-center">تواصل مع يوسف غمري</a>
            </div>
          </div>
        </aside>

        <!-- شبكة بطاقات المقالات متعددة الأعمدة (9 أعمدة) -->
        <div class="xl:col-span-9 min-w-0">
          ${newlyPublishedShowcaseHtml}

          <div class="flex items-center justify-between pb-4 mb-5 border-b border-emerald-950/70">
            <h2 id="catalog-grid-heading" class="text-base sm:text-lg font-bold text-white">
              الفهرس المعرفي الكامل (${allArticles.length} دليلاً)
            </h2>
            <span class="text-xs font-mono text-slate-400">مرتب بأحدث الإصدارات أولاً</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6" id="articles-cards-grid">${articleCardsHtml}
          </div>

          <div id="articles-empty-state" class="hidden p-12 rounded-2xl glass-panel border border-emerald-500/20 text-center space-y-3 mt-6">
            <div class="text-lg font-bold text-white">لا توجد أدلة مطابقة للبحث</div>
            <p class="text-xs text-slate-400">يرجى مسح كلمة البحث أو العودة إلى خيار «كافة المسارات».</p>
          </div>
        </div>

      </div>
    </main>

${renderArFooter('/en/articles/index.html', allArticles.length)}

    <script src="/assets/js/main.js"></script>
    <script>
      (function() {
        var searchInput = document.getElementById('articles-hub-search');
        var topBtns = Array.prototype.slice.call(document.querySelectorAll('.article-hub-filter-btn'));
        var sideBtns = Array.prototype.slice.call(document.querySelectorAll('[data-sidebar-track]'));
        var cards = Array.prototype.slice.call(document.querySelectorAll('[data-article-card]'));
        var counter = document.getElementById('articles-visible-count');
        var emptyState = document.getElementById('articles-empty-state');
        var showcase = document.getElementById('newly-published-showcase');
        var focusNewBtn = document.getElementById('focus-newly-added-btn');
        var gridHeading = document.getElementById('catalog-grid-heading');
        var activeTrack = 'all';

        try {
          var params = new URLSearchParams(window.location.search);
          var urlTrack = params.get('track');
          if (urlTrack === 'reactjs') urlTrack = 'react';
          if (urlTrack === 'nodejs') urlTrack = 'node';
          if (urlTrack) activeTrack = urlTrack;
        } catch(e) {}

        function syncButtons() {
          topBtns.forEach(function(b) {
            var key = b.getAttribute('data-article-filter') || 'all';
            var isAct = key === activeTrack;
            b.className = isAct
              ? 'article-hub-filter-btn px-3.5 py-2 rounded-xl border border-[#C6A15B] bg-[#C6A15B]/20 text-xs font-bold text-white shrink-0 cursor-pointer'
              : 'article-hub-filter-btn px-3.5 py-2 rounded-xl border border-emerald-900/80 bg-[#07130D]/90 text-xs font-semibold text-emerald-200/90 hover:border-[#C6A15B]/60 hover:text-white transition-all shrink-0 cursor-pointer';
          });
        }

        function applyFilters() {
          var q = (searchInput && searchInput.value ? searchInput.value : '').trim().toLowerCase();
          var visible = 0;
          cards.forEach(function(card) {
            var tr = card.getAttribute('data-track') || '';
            var isNew = card.getAttribute('data-is-new') === 'true';
            var hay = card.getAttribute('data-search') || '';
            var okTrack =
              activeTrack === 'all' ||
              (activeTrack === 'newly-added' ? isNew : tr === activeTrack);
            var okQ = !q || hay.indexOf(q) !== -1;
            if (okTrack && okQ) {
              card.classList.remove('hidden');
              visible++;
            } else {
              card.classList.add('hidden');
            }
          });

          if (showcase) {
            if (activeTrack === 'all' && !q) {
              showcase.classList.remove('hidden');
            } else {
              showcase.classList.add('hidden');
            }
          }

          if (gridHeading) {
            if (activeTrack === 'newly-added') {
              gridHeading.textContent = 'أحدث الأدلة الهندسية المنشورة (' + visible + ' دليلاً)';
            } else if (activeTrack === 'all' && !q) {
              gridHeading.textContent = 'الفهرس المعرفي الكامل (' + cards.length + ' دليلاً)';
            } else {
              gridHeading.textContent = 'نتائج التصفية (' + visible + ' دليلاً مطابقاً)';
            }
          }

          if (counter) {
            counter.textContent = 'عرض ' + visible + ' من أصل ' + cards.length + ' دليلاً تقنياً واستشارياً';
          }
          if (emptyState) {
            if (visible === 0) emptyState.classList.remove('hidden');
            else emptyState.classList.add('hidden');
          }
        }

        topBtns.forEach(function(btn) {
          btn.addEventListener('click', function() {
            activeTrack = btn.getAttribute('data-article-filter') || 'all';
            syncButtons();
            applyFilters();
          });
        });

        sideBtns.forEach(function(btn) {
          btn.addEventListener('click', function() {
            activeTrack = btn.getAttribute('data-sidebar-track') || 'all';
            syncButtons();
            applyFilters();
            window.scrollTo({ top: 280, behavior: 'smooth' });
          });
        });

        if (focusNewBtn) {
          focusNewBtn.addEventListener('click', function() {
            activeTrack = 'newly-added';
            syncButtons();
            applyFilters();
          });
        }

        if (searchInput) {
          searchInput.addEventListener('input', applyFilters);
        }

        syncButtons();
        applyFilters();
      })();
    </script>
  </body>
</html>`;

  safeWriteAr(path.join(rootDir, 'ar/articles/index.html'), articlesHubHtml);

  // 2B. Generate All 132 Full-Width Individual Arabic Article Pages (/ar/articles/<slug>.html)
  for (const a of allArticles) {
    const enExists = fs.existsSync(path.join(rootDir, 'en/articles', `${a.slug}.html`));
    const enUrl = enExists ? `/en/articles/${a.slug}.html` : '/en/articles/index.html';
    const normKey = normalizeArTrackKey(a.categoryKey);

    const tocHtml = a.sections
      .map((sec) => {
        const subItems = (a.tocSubItems || []).filter((s) => s.parentId === sec.id);
        const subHtml =
          subItems.length > 0
            ? `<div class="ms-3 ps-2.5 border-s border-emerald-900/70 space-y-0.5 my-1">
                ${subItems
                  .map(
                    (sub) =>
                      `<a href="#${escapeHtml(sub.id)}" class="block px-2 py-1 rounded text-[11px] text-slate-400 hover:text-[#E5C78B] hover:bg-emerald-950/40 transition-colors leading-snug">${escapeHtml(sub.label)}</a>`
                  )
                  .join('')}
              </div>`
            : '';
        return `
              <a href="#${escapeHtml(sec.id)}" class="block px-3 py-2 rounded-lg hover:bg-emerald-950/60 text-xs font-medium text-slate-200 hover:text-[#E5C78B] transition-colors leading-snug">
                ${escapeHtml(sec.heading)}
              </a>${subHtml}`;
      })
      .join('');

    const introSectionHtml = a.introHtml
      ? `
            <div class="p-6 sm:p-8 rounded-2xl glass-panel-elevated border border-[#C6A15B]/35 space-y-4">
              <div class="text-xs font-mono tracking-wide text-[#E5C78B]">نظرة عامة وسياق المشكلة الهندسية</div>
              <div class="space-y-3 text-sm sm:text-base text-slate-200 leading-[1.9] content-body">
                ${a.introHtml}
              </div>
            </div>`
      : '';

    const sectionsHtml = a.sections.map((sec) => renderArArticleSectionHtml(sec)).join('\n');

    const commonMistakesHtml =
      a.commonMistakes && a.commonMistakes.length > 0
        ? `
            <section id="common-mistakes" class="p-6 sm:p-8 rounded-2xl glass-panel border border-rose-500/30 space-y-5 scroll-mt-28">
              <div class="space-y-1">
                <div class="text-xs font-mono tracking-wide text-rose-300">مخاطر بيئات الإنتاج</div>
                <h2 class="text-xl sm:text-2xl font-bold text-white">أخطاء شائعة يجب تجنبها</h2>
              </div>
              <div class="space-y-3.5">
                ${a.commonMistakes
                  .map(
                    (m) => `
                <div class="p-4 sm:p-5 rounded-xl bg-[#07130D]/90 border border-rose-500/20 space-y-1.5">
                  <h3 class="text-sm sm:text-base font-bold text-rose-200">⚠️ ${escapeHtml(m.title)}</h3>
                  <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${escapeHtml(m.detail)}</p>
                </div>`
                  )
                  .join('')}
              </div>
            </section>`
        : '';

    const faqsSectionHtml =
      a.faqs && a.faqs.length > 0
        ? `
            <section id="article-faqs" class="p-6 sm:p-8 rounded-2xl glass-panel border border-[#C6A15B]/30 space-y-5 scroll-mt-28">
              <div class="space-y-1">
                <div class="text-xs font-mono tracking-wide text-[#E5C78B]">إجابات تقنية موثقة</div>
                <h2 class="text-xl sm:text-2xl font-bold text-white">الأسئلة الشائعة</h2>
              </div>
              <div class="space-y-4">
                ${a.faqs
                  .map(
                    (f) => `
                <div class="p-4 sm:p-5 rounded-xl bg-[#07130D]/85 border border-emerald-950 space-y-2">
                  <h3 class="text-sm sm:text-base font-bold text-[#E5C78B]">${escapeHtml(f.q)}</h3>
                  <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${escapeHtml(f.a)}</p>
                </div>`
                  )
                  .join('')}
              </div>
            </section>`
        : '';

    const conclusionHtml = a.conclusion
      ? `
            <section id="conclusion" class="p-6 sm:p-8 rounded-2xl glass-panel border border-emerald-500/30 space-y-4 scroll-mt-28">
              <div class="text-xs font-mono tracking-wide text-emerald-400">الخلاصة التنفيذية</div>
              <h2 class="text-xl sm:text-2xl font-bold text-white">${escapeHtml(a.conclusion.heading)}</h2>
              ${a.conclusion.paragraphs
                .map((p) => `<p class="text-sm sm:text-base text-slate-300 leading-[1.9]">${escapeHtml(p)}</p>`)
                .join('\n              ')}
            </section>`
      : '';

    const customCtaHtml = a.customCta
      ? `
            <section id="service-cta" class="p-6 sm:p-8 rounded-2xl glass-panel-elevated border-2 border-[#C6A15B]/45 bg-gradient-to-br from-[#07130D] via-[#0B1F16]/85 to-[#050806] space-y-4 scroll-mt-28">
              <div class="text-xs font-mono tracking-wide text-[#E5C78B]">${escapeHtml(a.customCta.badge)}</div>
              <h2 class="text-xl sm:text-2xl font-bold text-white leading-snug">${escapeHtml(a.customCta.heading)}</h2>
              <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">${escapeHtml(a.customCta.body)}</p>
              <div class="flex flex-wrap items-center gap-3 pt-1">
                <a href="${escapeHtml(a.customCta.primaryHref)}" class="btn-gold text-xs py-2.5 px-5 font-bold">${escapeHtml(a.customCta.primaryLabel)} ←</a>
                ${
                  a.customCta.secondaryHref && a.customCta.secondaryLabel
                    ? `<a href="${escapeHtml(a.customCta.secondaryHref)}" class="btn-emerald text-xs py-2.5 px-5">${escapeHtml(a.customCta.secondaryLabel)}</a>`
                    : ''
                }
              </div>
            </section>`
      : '';

    const officialSourcesHtml =
      a.officialSources && a.officialSources.length > 0
        ? `
            <section id="official-references" class="p-6 rounded-2xl glass-panel border border-emerald-900/80 space-y-3 scroll-mt-28">
              <h2 class="text-base sm:text-lg font-bold text-white">المراجع الرسمية والتوثيق المعتمد</h2>
              <ul class="space-y-2 text-xs sm:text-sm">
                ${a.officialSources
                  .map(
                    (src) => `
                <li class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3 rounded-xl bg-[#07130D]/75 border border-emerald-950/90">
                  <a href="${escapeHtml(src.url)}" target="_blank" rel="noopener noreferrer" class="font-semibold text-[#E5C78B] hover:underline break-all" dir="ltr">${escapeHtml(src.title)} ↗</a>
                  <span class="text-[11px] font-mono text-emerald-400/80 shrink-0">${escapeHtml(src.publisher)}</span>
                </li>`
                  )
                  .join('')}
              </ul>
            </section>`
        : '';

    const relatedObjs = (a.relatedArticleSlugs || [])
      .map((slug) => articleMap.get(slug))
      .filter((x): x is ArArticleItem => x !== undefined && x.slug !== a.slug)
      .slice(0, 4);

    if (relatedObjs.length < 4) {
      const sameTrack = allArticles.filter(
        (cand) =>
          cand.slug !== a.slug &&
          normalizeArTrackKey(cand.categoryKey) === normKey &&
          !relatedObjs.some((r) => r.slug === cand.slug)
      );
      for (const cand of sameTrack) {
        if (relatedObjs.length >= 4) break;
        relatedObjs.push(cand);
      }
    }
    if (relatedObjs.length < 4) {
      for (const cand of allArticles) {
        if (relatedObjs.length >= 4) break;
        if (cand.slug !== a.slug && !relatedObjs.some((r) => r.slug === cand.slug)) {
          relatedObjs.push(cand);
        }
      }
    }

    const relatedCardsHtml = relatedObjs
      .map(
        (rel) => `
                <a href="/ar/articles/${rel.slug}.html" class="p-5 rounded-2xl glass-panel border border-emerald-500/20 hover:border-[#C6A15B]/50 transition-all flex flex-col justify-between gap-3 group">
                  <div class="space-y-2">
                    <span class="text-[10px] font-mono text-[#E5C78B]">${escapeHtml(rel.categoryLabel)} · ${escapeHtml(rel.readTime)}</span>
                    <h3 class="text-sm font-bold text-white group-hover:text-[#E5C78B] transition-colors line-clamp-2">${escapeHtml(rel.title)}</h3>
                  </div>
                  <span class="text-xs font-bold text-emerald-300 group-hover:text-white">اقرأ الدليل ←</span>
                </a>`
      )
      .join('');

    const trackPillsHtml = activeTracks
      .map(
        (t) =>
          `<a href="/ar/articles/index.html?track=${t.key}" class="px-2.5 py-1 rounded-lg bg-[#07130D] border border-emerald-950 hover:border-[#C6A15B]/50 text-[11px] text-slate-300 hover:text-[#E5C78B] transition-colors">${t.icon} ${escapeHtml(t.label)}</a>`
      )
      .join('');

    const seoPageTitle = a.seoTitle ? `${a.seoTitle} | يوسف غمري` : `${a.title} | يوسف غمري`;
    const seoMetaDesc = a.metaDescription || a.summary;
    const heroImgAlt = a.featuredImageAlt || a.title;
    const datePub = a.publishedDate || a.updatedDate;
    const allKws = a.primaryKeyword
      ? [a.primaryKeyword, ...(a.secondaryKeywords || [])]
      : undefined;

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: '/ar/index.html' },
            { '@type': 'ListItem', position: 2, name: 'مركز المعرفة', item: '/ar/articles/index.html' },
            {
              '@type': 'ListItem',
              position: 3,
              name: a.categoryLabel,
              item: `/ar/articles/index.html?track=${normKey}`
            },
            { '@type': 'ListItem', position: 4, name: a.title, item: `/ar/articles/${a.slug}.html` }
          ]
        },
        {
          '@type': 'BlogPosting',
          headline: a.title,
          description: seoMetaDesc,
          image: a.featuredSvg,
          datePublished: datePub,
          dateModified: a.updatedDate,
          inLanguage: 'ar',
          articleSection: a.categoryLabel,
          ...(allKws ? { keywords: allKws.join('، ') } : {}),
          ...(a.officialSources ? { citation: a.officialSources.map((s) => s.url) } : {}),
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `/ar/articles/${a.slug}.html`
          },
          author: {
            '@type': 'Person',
            name: 'يوسف غمري',
            jobTitle: 'مطور Full-Stack وأخصائي أول مناقصات وضبط جودة العروض الفنية'
          }
        },
        ...(a.faqs && a.faqs.length > 0
          ? [
              {
                '@type': 'FAQPage',
                mainEntity: a.faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a }
                }))
              }
            ]
          : [])
      ]
    };

    const keywordsMetaTag = allKws
      ? `\n    <meta name="keywords" content="${escapeHtml(allKws.join(', '))}" />`
      : '';

    const articleDetailHtml = `<!doctype html>
<html lang="ar" dir="rtl" class="dark">
  <head>
    <meta charset="UTF-8" />
    ${THEME_INIT_SCRIPT}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(seoPageTitle)}</title>
    <meta name="description" content="${escapeHtml(seoMetaDesc)}" />${keywordsMetaTag}
    <link rel="canonical" href="/ar/articles/${a.slug}.html" />
    <link rel="alternate" hreflang="ar" href="/ar/articles/${a.slug}.html" />
    <link rel="alternate" hreflang="en" href="${enUrl}" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="يوسف غمري" />
    <meta property="og:url" content="/ar/articles/${a.slug}.html" />
    <meta property="og:title" content="${escapeHtml(seoPageTitle)}" />
    <meta property="og:description" content="${escapeHtml(seoMetaDesc)}" />
    <meta property="og:image" content="${escapeHtml(a.featuredSvg)}" />
    <meta property="og:image:alt" content="${escapeHtml(heroImgAlt)}" />
    <meta property="article:published_time" content="${escapeHtml(datePub)}" />
    <meta property="article:modified_time" content="${escapeHtml(a.updatedDate)}" />
    <meta property="article:section" content="${escapeHtml(a.categoryLabel)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(seoPageTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(seoMetaDesc)}" />
    <meta name="twitter:image" content="${escapeHtml(a.featuredSvg)}" />
    <meta name="twitter:image:alt" content="${escapeHtml(heroImgAlt)}" />
    ${AR_GOOGLE_FONTS_HTML}
    <link rel="stylesheet" href="/assets/css/style.css" />
    <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
    </script>
  </head>
  <body class="theme-gold selection:bg-emerald-600 selection:text-white bg-[#050806] text-slate-100 min-h-screen">
${renderArHeader('articles', enUrl, uniqueServices)}

    <!-- ترويسة المقال بعرض الشاشة الكامل -->
    <header class="border-b border-emerald-950/70 bg-gradient-to-b from-[#07130D]/90 via-[#050806] to-[#050806]">
      <div class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10 lg:py-14">
        <nav class="breadcrumbs flex flex-wrap items-center gap-2 text-xs text-emerald-300/70 mb-6" aria-label="مسار التنقل">
          <a href="/ar/index.html" class="hover:text-[#E5C78B]">الرئيسية</a>
          <span>/</span>
          <a href="/ar/articles/index.html" class="hover:text-[#E5C78B]">مركز المعرفة</a>
          <span>/</span>
          <a href="/ar/articles/index.html?track=${escapeHtml(normKey)}" class="hover:text-[#E5C78B]">${escapeHtml(a.categoryLabel)}</a>
          <span>/</span>
          <span class="text-white font-semibold truncate max-w-xs sm:max-w-md">${escapeHtml(a.title)}</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
          <div class="lg:col-span-7 space-y-5">
            <div class="flex flex-wrap items-center gap-2.5 text-xs">
              <span class="badge-gold">
                <span class="w-1.5 h-1.5 rounded-full bg-[#C6A15B]"></span>
                <span>${escapeHtml(a.badge)}</span>
              </span>
              <span class="badge-emerald">⏱️ ${escapeHtml(a.readTime)}</span>
              <span class="px-2.5 py-1 rounded-full bg-[#07130D] border border-emerald-950 text-[11px] font-mono text-slate-300">نُشر في <span dir="ltr">${escapeHtml(datePub)}</span></span>
            </div>

            <h1 class="text-2xl sm:text-4xl xl:text-5xl font-extrabold text-white tracking-tight leading-[1.22]">
              ${escapeHtml(a.title)}
            </h1>

            <p class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-[72ch]">
              ${escapeHtml(a.summary)}
            </p>

            <div class="flex flex-wrap items-center gap-4 pt-2 border-t border-emerald-950/70">
              <div class="flex items-center gap-3">
                <img src="/assets/aistudio/image_ef5d64bf.png" alt="يوسف غمري" class="w-10 h-10 rounded-full border border-[#C6A15B]/50 p-0.5 bg-[#07130D]" />
                <div>
                  <div class="text-xs font-bold text-white">بقلم: يوسف غمري</div>
                  <div class="text-[11px] text-emerald-300/80 font-mono">مطور Full-Stack · خبرة +400 مناقصة</div>
                </div>
              </div>
              <a href="${enUrl}" class="ms-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#07130D] border border-[#C6A15B]/40 text-xs font-bold text-[#E5C78B] hover:text-white transition-colors">
                <span>🇬🇧</span>
                <span>اقرأ النسخة الإنجليزية (EN)</span>
              </a>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="p-3 sm:p-4 rounded-3xl glass-panel-elevated border border-emerald-500/30 shadow-2xl space-y-3">
              <div class="rounded-2xl overflow-hidden bg-[#07130D] border border-emerald-950 aspect-[16/9]">
                <img src="${escapeHtml(a.featuredSvg)}" alt="${escapeHtml(heroImgAlt)}" class="w-full h-full object-cover" />
              </div>
              <div class="flex items-center justify-between px-1 text-[11px] font-mono text-emerald-300/80">
                <span>المسار: ${escapeHtml(a.categoryLabel)}</span>
                <a href="/ar/services/${a.relatedServiceSlug}.html" class="text-[#E5C78B] hover:underline font-bold">الخدمة المرتبطة ←</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- مساحة التحرير والقراءة الهندسية من 3 أعمدة بعرض الشاشة الكامل -->
    <main class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-12 lg:py-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
        
        <!-- الشريط الجانبي الأيمن المثبت: فهرس المحتويات ودليل المسارات (3 أعمدة) -->
        <aside class="lg:col-span-3 lg:sticky lg:top-24 space-y-6 order-2 lg:order-1">
          <div class="p-5 rounded-2xl glass-panel border border-emerald-500/25 space-y-3 max-h-[72vh] overflow-y-auto">
            <div class="text-xs font-bold tracking-wide text-[#E5C78B] font-mono">فهرس محتويات الدليل</div>
            <nav class="space-y-1" aria-label="فهرس المحتويات">${tocHtml}
              ${a.commonMistakes && a.commonMistakes.length > 0 ? `<a href="#common-mistakes" class="block px-3 py-2 rounded-lg hover:bg-emerald-950/60 text-xs font-medium text-slate-200 hover:text-[#E5C78B] transition-colors">أخطاء شائعة يجب تجنبها</a>` : ''}
              ${a.faqs && a.faqs.length > 0 ? `<a href="#article-faqs" class="block px-3 py-2 rounded-lg hover:bg-emerald-950/60 text-xs font-medium text-slate-200 hover:text-[#E5C78B] transition-colors">الأسئلة الشائعة</a>` : ''}
              ${a.conclusion ? `<a href="#conclusion" class="block px-3 py-2 rounded-lg hover:bg-emerald-950/60 text-xs font-medium text-slate-200 hover:text-[#E5C78B] transition-colors">الخلاصة التنفيذية</a>` : ''}
              ${a.officialSources && a.officialSources.length > 0 ? `<a href="#official-references" class="block px-3 py-2 rounded-lg hover:bg-emerald-950/60 text-xs font-medium text-slate-200 hover:text-[#E5C78B] transition-colors">المراجع الرسمية</a>` : ''}
              <a href="#related-guides" class="block px-3 py-2 rounded-lg hover:bg-emerald-950/60 text-xs font-medium text-slate-200 hover:text-[#E5C78B] transition-colors">أدلة تقنية ذات صلة</a>
            </nav>
          </div>

          <div class="p-5 rounded-2xl glass-panel border border-emerald-500/20 space-y-3">
            <div class="text-xs font-bold tracking-wide text-emerald-400 font-mono">تصفح كافة الـ ${activeTracks.length} مساراً</div>
            <div class="flex flex-wrap gap-1.5">
              ${trackPillsHtml}
            </div>
          </div>
        </aside>

        <!-- عمود القراءة الأوسط بطول سطر مثالي (6 أعمدة، max-w-[75ch]) -->
        <article class="lg:col-span-6 min-w-0 order-1 lg:order-2">
          <div class="max-w-[75ch] mx-auto space-y-8">${introSectionHtml}${sectionsHtml}${commonMistakesHtml}${faqsSectionHtml}${conclusionHtml}${customCtaHtml}${officialSourcesHtml}

            <section id="related-guides" class="pt-6 border-t border-emerald-950/80 space-y-4 scroll-mt-28">
              <div class="flex items-center justify-between gap-4">
                <h2 class="text-xl font-bold text-white">أدلة مرتبطة في مسار ${escapeHtml(a.categoryLabel)}</h2>
                <a href="/ar/articles/index.html?track=${escapeHtml(normKey)}" class="text-xs font-bold text-[#E5C78B] hover:underline">عرض المسار ←</a>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">${relatedCardsHtml}
              </div>
            </section>
          </div>
        </article>

        <!-- الشريط الجانبي الأيسر المثبت: الخدمة المرتبطة والاعتمادية (3 أعمدة) -->
        <aside class="lg:col-span-3 lg:sticky lg:top-24 space-y-6 order-3">
          <div class="p-6 rounded-2xl glass-panel-elevated border border-[#C6A15B]/45 space-y-4">
            <div class="text-[11px] font-mono tracking-wide text-[#E5C78B]">الخدمة التنفيذية المرتبطة</div>
            <h2 class="text-base font-bold text-white leading-snug">${escapeHtml(a.relatedServiceTitle)}</h2>
            <p class="text-xs text-slate-300 leading-relaxed">
              هل تحتاج إلى تنفيذ هندسي للإنتاج الفعلي، تشخيص جذري للأعطال، تحسين الأداء، أو صياغة عرض فني ومصفوفة امتثال لهذا المجال؟
            </p>
            <a href="/ar/services/${a.relatedServiceSlug}.html" class="w-full btn-gold text-xs py-2.5 px-4 font-bold justify-center">
              <span>استكشف تفاصيل الخدمة ←</span>
            </a>
            ${
              a.secondaryServiceSlug && a.secondaryServiceTitle
                ? `<a href="/ar/services/${a.secondaryServiceSlug}.html" class="w-full btn-ghost-gold text-xs py-2 px-4 justify-center"><span>${escapeHtml(a.secondaryServiceTitle)}</span></a>`
                : ''
            }
          </div>

          <div class="p-5 rounded-2xl glass-panel border border-emerald-500/25 space-y-3">
            <div class="text-xs font-bold tracking-wide text-emerald-400 font-mono">سجل الاعتمادية الموثق</div>
            <div class="grid grid-cols-2 gap-2.5 text-center">
              <div class="p-3 rounded-xl bg-[#07130D] border border-emerald-950">
                <div class="text-lg font-extrabold gold-gradient-text font-mono">+400</div>
                <div class="text-[10px] text-slate-300">مناقصة معدة ومراجعة</div>
              </div>
              <div class="p-3 rounded-xl bg-[#07130D] border border-emerald-950">
                <div class="text-lg font-extrabold text-white font-mono">+100</div>
                <div class="text-[10px] text-slate-300">مشروع رقمي منفذ</div>
              </div>
              <div class="p-3 rounded-xl bg-[#07130D] border border-emerald-950">
                <div class="text-lg font-extrabold text-emerald-400 font-mono">+60</div>
                <div class="text-[10px] text-slate-300">جهة حكومية وسيادية</div>
              </div>
              <div class="p-3 rounded-xl bg-[#07130D] border border-emerald-950">
                <div class="text-lg font-extrabold text-white font-mono">93</div>
                <div class="text-[10px] text-slate-300">خدمة متخصصة</div>
              </div>
            </div>
          </div>

          <div class="p-5 rounded-2xl glass-panel border border-emerald-500/20 space-y-3">
            <div class="text-xs font-bold text-white">استشارة فنية مباشرة</div>
            <p class="text-[11px] text-slate-300 leading-relaxed">
              تحدث مباشرة مع يوسف غمري حول معمارية منصتك أو متطلبات كراسة الشروط القادمة.
            </p>
            <div class="space-y-2">
              <a href="/ar/contact/index.html" class="w-full btn-ghost-gold text-xs py-2 px-4 justify-center">أرسل استفساراً فنياً</a>
              <a href="https://wa.me/201503292942" target="_blank" rel="noopener noreferrer" class="w-full btn-emerald text-xs py-2 px-4 justify-center">تواصل عبر واتساب</a>
            </div>
          </div>
        </aside>

      </div>
    </main>

${renderArFooter(enUrl, allArticles.length)}

    <script src="/assets/js/main.js"></script>
  </body>
</html>`;

    safeWriteAr(path.join(rootDir, 'ar/articles', `${a.slug}.html`), articleDetailHtml);
  }
}

// ============================================================================
// 3. FULL-WIDTH ARABIC PORTFOLIO PAGE (/ar/portfolio/index.html)
// ============================================================================
const AR_PORTFOLIO_100_NOTICE_HTML = `      <!-- تنويه نطاق سابقة الأعمال (+100 مشروع منفذ) -->
      <div class="p-6 sm:p-8 rounded-3xl glass-panel-elevated border-2 border-[#C6A15B]/45 bg-gradient-to-br from-[#07130D] via-[#0B1F16]/80 to-[#050806] shadow-2xl space-y-3">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C6A15B]/20 border border-[#C6A15B]/50 text-xs font-mono font-bold text-[#E5C78B]">
            <span class="w-2 h-2 rounded-full bg-[#E5C78B] animate-pulse"></span>
            <span>نطاق سابقة الأعمال: +100 مشروع رقمي منفذ</span>
          </div>
          <span class="text-xs font-mono text-emerald-300/90">عرض 25 مشروعاً حياً مختاراً من أصل أكثر من 100 مشروع</span>
        </div>
        <h2 class="text-xl sm:text-2xl font-extrabold text-white">
          أكثر من 100 مشروع منفذ.. <span class="gold-gradient-text">وهذه مجرد لمحة مختارة من أعمالنا</span>
        </h2>
        <p class="text-xs sm:text-sm text-slate-200/90 leading-relaxed max-w-[90ch]">
          تمثل المشاريع المعروضة في هذه الصفحة <strong class="text-white">عينة مختارة ومنتقاة بعناية (25 مشروعاً)</strong> من سجل أعمال فعلي يتجاوز <strong class="text-[#E5C78B]">100 مشروع رقمي متكامل تم تصميمه وتطويره وإطلاقه</strong> عبر بوابات الشركات، المتاجر الإلكترونية، أنظمة المؤسسات (ERP / CRM / POS / الأنظمة الطبية)، وتطبيقات الهواتف الذكية في السعودية والإمارات والبحرين ومصر وأوروبا وأمريكا الشمالية وآسيا.
        </p>
      </div>`;

function buildArabicPortfolioPage(allServices: ServiceDef[], totalArticleCount: number): void {
  const uniqueServices = Array.from(new Map(allServices.map((s) => [s.slug, s])).values());

  const html = `<!doctype html>
<html lang="ar" dir="rtl" class="dark">
  <head>
    <meta charset="UTF-8" />
    ${THEME_INIT_SCRIPT}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>معرض الأعمال والمشاريع المختارة (25 مشروعاً من أصل +100 مشروع منفذ) | يوسف غمري</title>
    <meta name="description" content="أكثر من 100 مشروع رقمي منفذ — استعرض 25 دراسة حالة مختارة في بوابات الشركات، المتاجر الإلكترونية، أنظمة ERP وCRM وPOS، وتطبيقات الجوال من تطوير يوسف غمري." />
    <link rel="canonical" href="/ar/portfolio/index.html" />
    <link rel="alternate" hreflang="ar" href="/ar/portfolio/index.html" />
    <link rel="alternate" hreflang="en" href="/en/portfolio/index.html" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="معرض الأعمال والمشاريع المختارة (+100 مشروع منفذ) | يوسف غمري" />
    <meta property="og:description" content="عينة مختارة تضم 25 مشروعاً حياً من أصل أكثر من 100 مشروع رقمي منفذ في السعودية والخليج ومصر وأوروبا وأمريكا." />
    <meta property="og:image" content="/assets/aistudio/image_ef5d64bf.png" />
    ${AR_GOOGLE_FONTS_HTML}
    <link rel="stylesheet" href="/assets/css/style.css" />
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "معرض الأعمال والمشاريع المختارة | يوسف غمري",
      "inLanguage": "ar",
      "description": "عينة مختارة تضم 25 مشروعاً رقمياً من أصل أكثر من 100 مشروع منفذ عبر قطاعات الويب والتجارة الإلكترونية والأنظمة وتطبيقات الجوال.",
      "creator": {
        "@type": "Person",
        "name": "يوسف غمري",
        "jobTitle": "مطور Full-Stack وأخصائي مناقصات وعروض فنية"
      }
    }
    </script>
  </head>
  <body class="theme-gold selection:bg-emerald-600 selection:text-white bg-[#050806] text-slate-100 min-h-screen">
${renderArHeader('portfolio', '/en/portfolio/index.html', uniqueServices)}

    <main class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10 sm:py-14 space-y-10 relative z-10">
      <nav class="breadcrumbs flex items-center gap-2 text-xs text-emerald-300/70" aria-label="مسار التنقل">
        <a href="/ar/index.html" class="hover:text-[#E5C78B]">الرئيسية</a>
        <span>/</span>
        <span class="text-white font-semibold">معرض الأعمال والمشاريع المختارة</span>
      </nav>

      <!-- واجهة معرض الأعمال -->
      <section class="p-8 sm:p-10 rounded-3xl glass-panel-elevated border border-[#C6A15B]/40 bg-gradient-to-br from-[#07130D] via-[#050806] to-[#0B1F16] shadow-2xl relative overflow-hidden">
        <div class="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
          <div class="space-y-3 max-w-3xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-semibold text-[#E5C78B]">
              <span class="w-2 h-2 rounded-full bg-[#10B981] animate-ping"></span>
              <span>أكثر من 100 مشروع منفذ · عرض 25 دراسة حالة مختارة</span>
            </div>
            <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              معرض الأعمال <span class="gold-gradient-text heading-hover-glow">والمشاريع المختارة</span>
            </h1>
            <p class="text-xs sm:text-sm text-emerald-100/80 leading-relaxed max-w-[75ch]">
              مجموعة منتقاة تضم 25 مشروعاً حياً تمثل سابقة أعمال تمتد لأكثر من 100 حل رقمي منفذ في بوابات الشركات، المتاجر الإلكترونية، الأنظمة الطبية، أنظمة ERP/CRM/POS، وتطبيقات الهواتف الذكية.
            </p>
          </div>

          <!-- أوسمة التغطية الجغرافية الدولية (13 دولة ومنطقة) -->
          <div class="flex flex-wrap items-center gap-2 text-xs">
            <span class="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">🇸🇦 السعودية</span>
            <span class="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">🇦🇪 الإمارات</span>
            <span class="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">🇧🇭 البحرين</span>
            <span class="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">🇪🇬 مصر</span>
            <span class="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">🇺🇸 أمريكا</span>
            <span class="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">🇨🇦 كندا</span>
            <span class="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">🇬🇧 بريطانيا</span>
            <span class="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">🇩🇪 ألمانيا</span>
            <span class="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">🇪🇺 أوروبا</span>
            <span class="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">🇯🇵 اليابان</span>
            <span class="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">🇹🇷 تركيا</span>
            <span class="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">🇮🇳 الهند</span>
            <span class="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">🇧🇩 بنغلاديش</span>
          </div>
        </div>
      </section>

${AR_PORTFOLIO_100_NOTICE_HTML}

      <!-- حاوية محرك المشاريع التفاعلي (تُعرض بواسطة main.js بكافة الـ 25 مشروعاً مختاراً) -->
      <section id="interactive-portfolio-container" class="space-y-8">
      </section>

      <!-- روابط الانتقال السريع السفلى -->
      <section class="p-6 sm:p-8 rounded-3xl glass-panel border border-emerald-950 bg-gradient-to-l from-[#07130D] via-[#050806] to-[#0B1F16] flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-1 text-center md:text-start">
          <h2 class="text-base sm:text-lg font-bold text-white">هل تبحث عن سجل خبرات المناقصات الحكومية أو السيرة الذاتية الكاملة؟</h2>
          <p class="text-xs text-emerald-200/70">
            استكشف خبرة تمتد لأكثر من 400 مناقصة تم إعدادها وصياغتها وتنسيقها ومراجعتها عبر منصة اعتماد والجهات السيادية، أو تصفح السيرة الذاتية الكاملة.
          </p>
        </div>
        <div class="flex flex-wrap items-center gap-3 shrink-0">
          <a href="/ar/tenders/awarded-tenders.html" class="btn-gold text-xs py-2.5 px-4 font-bold flex items-center gap-1.5 shadow-sm">
            <span>المناقصات الحكومية (+400 خبرة ومشاركة) ←</span>
          </a>
          <a href="/ar/cv/index.html" class="btn-ghost-gold text-xs py-2.5 px-4 flex items-center gap-1.5">
            <span>السيرة الذاتية (CV) ←</span>
          </a>
        </div>
      </section>

    </main>

${renderArFooter('/en/portfolio/index.html', totalArticleCount)}

    <script src="/assets/js/main.js"></script>
  </body>
</html>`;

  safeWriteAr(path.join(rootDir, 'ar/portfolio/index.html'), html);
}

// ============================================================================
// 4. UPDATE ARABIC TENDERS (awarded-tenders.html, index.html, case-*.html)
// ============================================================================
const AR_TENDERS_CLARIFICATION_AND_METRICS_HTML = `        <!-- تنويه مهني إلزامي حول سابقة أعمال المناقصات -->
        <div class="p-5 sm:p-6 rounded-2xl bg-amber-500/10 border border-[#C6A15B]/40 text-xs sm:text-sm text-slate-200 leading-relaxed space-y-2">
          <div class="flex items-center gap-2 font-bold text-[#E5C78B]">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span>تنويه مهني حول سابقة أعمال المناقصات:</span>
          </div>
          <p class="text-slate-200/95 max-w-[90ch]">
            المناقصات المعروضة هنا تمثل جزءاً محدوداً ومختاراً فقط من نطاق الخبرة والمشاركات التي تمتد إلى أكثر من 400 مناقصة ومشروع تقني. وقد تم اختيار هذه النماذج لعرض أمثلة تمثيلية من المشاركات والخبرات في إعداد العروض الفنية، تحليل كراسات الشروط، تدقيق الامتثال، وهندسة الحلول المرتبطة بالوزارات والجهات الحكومية والسيادية، ولا تمثل القائمة الكاملة لجميع الأعمال أو تعني ترسية جميع الـ 400+ مناقصة.
          </p>
        </div>

        <!-- لوحة المؤشرات الرقمية الموثقة والمحدثة (+400، +50، +60) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 pt-3">
          <div class="p-6 rounded-2xl glass-panel-elevated border border-[#C6A15B]/45 space-y-2 bg-[#07130D]/80">
            <div class="text-3xl sm:text-4xl font-extrabold text-[#E5C78B] font-mono">+400</div>
            <div class="text-sm sm:text-base font-bold text-white">أكثر من 400 مناقصة تم إعدادها وكتابتها وتنسيقها ومراجعتها</div>
            <p class="text-xs text-slate-300 leading-relaxed">
              تمت كتابة وإعداد وتنسيق ومراجعة أكثر من 400 مناقصة، مع التركيز على صياغة العروض الفنية، تفكيك متطلبات كراسات الشروط RFP، بناء مصفوفات الامتثال، وضمان اكتمال مستندات التقديم.
            </p>
          </div>
          <div class="p-6 rounded-2xl glass-panel-elevated border border-emerald-500/35 space-y-2 bg-[#07130D]/80">
            <div class="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">+50</div>
            <div class="text-sm sm:text-base font-bold text-white">مشروعاً تمت ترسيته من جهات حكومية</div>
            <p class="text-xs text-slate-300 leading-relaxed">
              خبرة موثقة مرتبطة بأكثر من 50 مشروعاً تمت ترسيته من وزارات وهيئات حكومية، ضمن نطاق المشاركات والخبرات في إعداد العروض الفنية والمنافسات.
            </p>
          </div>
          <div class="p-6 rounded-2xl glass-panel-elevated border border-[#C6A15B]/45 space-y-2 bg-[#07130D]/80">
            <div class="text-3xl sm:text-4xl font-extrabold text-[#E5C78B] font-mono">+60</div>
            <div class="text-sm sm:text-base font-bold text-white">جهة حكومية وسيادية</div>
            <p class="text-xs text-slate-300 leading-relaxed">
              خبرة عملية مباشرة في التعامل مع متطلبات ومواصفات كراسات الطرح واشتراطات منصة اعتماد لما يقرب من 60 وزارة وهيئة ومؤسسة حكومية وسيادية.
            </p>
          </div>
        </div>`;

function updateArabicTenders(allServices: ServiceDef[], totalArticleCount: number): void {
  const uniqueServices = Array.from(new Map(allServices.map((s) => [s.slug, s])).values());

  // 4A. Update /ar/tenders/awarded-tenders.html
  const awardedPath = path.join(rootDir, 'ar/tenders/awarded-tenders.html');
  const rawAwarded = fs.readFileSync(awardedPath, 'utf8');

  const idxGrid = rawAwarded.indexOf('id="tenders-grid">');
  let idxConfidential = rawAwarded.indexOf('<!-- Confidentiality & Verification Boundary Notice -->');
  if (idxConfidential === -1) {
    idxConfidential = rawAwarded.indexOf('<!-- إشعار الشفافية');
  }
  let cardsSectionHtml = '';
  if (idxGrid !== -1 && idxConfidential !== -1) {
    const afterOpenTag = rawAwarded.indexOf('>', idxGrid) + 1;
    cardsSectionHtml = rawAwarded.slice(afterOpenTag, idxConfidential);
    cardsSectionHtml = cardsSectionHtml.replace(/<\/div>\s*<\/div>\s*$/, '');
  } else {
    throw new Error('Could not locate #tenders-grid in /ar/tenders/awarded-tenders.html');
  }

  // Repair malformed header badge spans on all 35 cards & standardize to "🏛️ منافسة حكومية"
  cardsSectionHtml = cardsSectionHtml.replace(
    /<div class="flex items-center justify-between gap-2 text-xs">[\s\S]*?(<span class="text-\[10px\] text-emerald-400 font-mono)/g,
    `<div class="flex items-center justify-between gap-2 text-xs">
            <span class="px-2.5 py-1 rounded-lg border text-[11px] flex items-center gap-1.5 border-emerald-500/40 text-emerald-300 bg-emerald-950/60 font-semibold">
              <span>🏛️</span>
              <span>منافسة حكومية</span>
            </span>
            $1`
  );

  const newAwardedHtml = `<!doctype html>
<html lang="ar" dir="rtl" class="dark">
  <head>
    <meta charset="UTF-8" />
    ${THEME_INIT_SCRIPT}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>المناقصات الحكومية والتقنية — أكثر من 400 مناقصة تم إعدادها ومراجعتها | يوسف غمري</title>
    <meta name="description" content="أكثر من 400 مناقصة تم إعدادها وكتابتها وتنسيقها ومراجعتها عبر أكثر من 60 جهة حكومية وسيادية سعودية، تشمل خبرة مرتبطة بأكثر من 50 مشروعاً مرسى. دراسات حالة مختارة عبر منصة اعتماد." />
    <link rel="canonical" href="/ar/tenders/awarded-tenders.html" />
    <link rel="alternate" hreflang="ar" href="/ar/tenders/awarded-tenders.html" />
    <link rel="alternate" hreflang="en" href="/en/tenders/awarded-tenders.html" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="المناقصات الحكومية والتقنية — +400 مناقصة تم إعدادها ومراجعتها | يوسف غمري" />
    <meta property="og:description" content="دراسات حالة مختارة لمنافسات حكومية تمثل سجل خبرة يمتد لأكثر من 400 مناقصة تم إعدادها وصياغتها وتنسيقها ومراجعتها." />
    <meta property="og:image" content="/assets/aistudio/image_ef5d64bf.png" />
    ${AR_GOOGLE_FONTS_HTML}
    <link rel="stylesheet" href="/assets/css/style.css" />
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "المناقصات الحكومية والتقنية — +400 مناقصة تم إعدادها ومراجعتها | يوسف غمري",
      "inLanguage": "ar",
      "description": "دراسات حالة مختارة لمنافسات حكومية سعودية توضح الخبرة في إعداد ومراجعة أكثر من 400 مناقصة وعرض فني.",
      "provider": {
        "@type": "Person",
        "name": "يوسف غمري",
        "jobTitle": "مطور Full-Stack وأخصائي مناقصات وعروض فنية"
      }
    }
    </script>
  </head>
  <body class="theme-gold selection:bg-emerald-600 selection:text-white bg-[#050806] text-slate-100 min-h-screen">
${renderArHeader('tenders', '/en/tenders/awarded-tenders.html', uniqueServices)}

    <main class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10 sm:py-14 space-y-12 relative z-10">
      
      <!-- مسار التنقل -->
      <nav class="breadcrumbs flex items-center gap-2 text-xs text-emerald-300/70" aria-label="مسار التنقل">
        <a href="/ar/index.html" class="hover:text-[#E5C78B]">الرئيسية</a>
        <span>/</span>
        <span class="text-white font-semibold">المناقصات الحكومية والتقنية</span>
      </nav>

      <!-- ترويسة الصفحة -->
      <div class="border-b border-emerald-950/60 pb-8 space-y-5">
        <div class="flex flex-wrap items-center gap-2.5">
          <span class="badge-gold">
            <span class="w-1.5 h-1.5 rounded-full bg-[#C6A15B] animate-pulse"></span>
            <span>+400 مناقصة تم إعدادها وكتابتها وتنسيقها ومراجعتها</span>
          </span>
          <span class="badge-emerald">
            <span>منصة اعتماد · كراسات الشروط والمواصفات الحكومية</span>
          </span>
        </div>

        <h1 class="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-tight">
          المناقصات <span class="gold-gradient-text heading-hover-glow">الحكومية والتقنية</span>
        </h1>
        
        <p class="text-sm sm:text-base text-emerald-200/85 max-w-[80ch] leading-relaxed">
          سجل مهني موثق في إعداد العروض الفنية، مصفوفات الامتثال الخالية من العيوب، حوكمة اتفاقيات مستوى الخدمة (SLA)، وهندسة الحلول التقنية المتوافقة مع كراسات الشروط والمواصفات الرسمية عبر منصة اعتماد والوزارات والهيئات السيادية.
        </p>

${AR_TENDERS_CLARIFICATION_AND_METRICS_HTML}
      </div>

      <!-- حاوية استعراض المناقصات التفاعلية -->
      <div id="tenders-showcase-container" class="space-y-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="relative w-full md:max-w-md">
            <input
              type="text"
              id="tenders-search-box"
              placeholder="ابحث في النماذج المختارة حسب العنوان، الوزارة، الهيئة، أو رقم الكراسة..."
              class="luxury-input text-xs py-3 px-4 w-full"
            />
          </div>
          <div id="tenders-counter" class="text-xs font-mono text-emerald-300/85">
            عرض 35 دراسة حالة مختارة لمنافسات حكومية (من أصل +400 خبرة ومشاركة)
          </div>
        </div>

        <!-- فلاتر التخصصات -->
        <div class="flex flex-wrap items-center gap-2 pt-1" id="tenders-category-filters">
          <button type="button" class="px-3.5 py-2 rounded-lg text-xs font-medium border border-emerald-500/30 bg-emerald-950/60 text-emerald-200 hover:text-white cursor-pointer" data-category="all">كافة التخصصات</button>
          <button type="button" class="px-3.5 py-2 rounded-lg text-xs font-medium border border-emerald-500/30 bg-[#07130D] text-emerald-300/80 hover:text-white cursor-pointer" data-category="infrastructure">البنية التحتية والشبكات</button>
          <button type="button" class="px-3.5 py-2 rounded-lg text-xs font-medium border border-emerald-500/30 bg-[#07130D] text-emerald-300/80 hover:text-white cursor-pointer" data-category="cybersecurity">الأمن السيبراني ومراكز SOC</button>
          <button type="button" class="px-3.5 py-2 rounded-lg text-xs font-medium border border-emerald-500/30 bg-[#07130D] text-emerald-300/80 hover:text-white cursor-pointer" data-category="enterprise-systems">الأنظمة المؤسسية والذكاء الاصطناعي</button>
          <button type="button" class="px-3.5 py-2 rounded-lg text-xs font-medium border border-emerald-500/30 bg-[#07130D] text-emerald-300/80 hover:text-white cursor-pointer" data-category="portals-mobile">البوابات وتطبيقات الجوال</button>
          <button type="button" class="px-3.5 py-2 rounded-lg text-xs font-medium border border-emerald-500/30 bg-[#07130D] text-emerald-300/80 hover:text-white cursor-pointer" data-category="managed-services">الخدمات المدارة وITSM</button>
          <button type="button" class="px-3.5 py-2 rounded-lg text-xs font-medium border border-emerald-500/30 bg-[#07130D] text-emerald-300/80 hover:text-white cursor-pointer" data-category="specialized">الأنظمة الصحية والجيومكانية</button>
        </div>

        <!-- شبكة بطاقات المناقصات من 4 أعمدة بعرض الشاشة الكامل -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="tenders-grid">
${cardsSectionHtml}
        </div>
      </div>

      <!-- إشعار الشفافية والسرية المهنية -->
      <div class="p-6 rounded-2xl glass-panel border border-[#C6A15B]/30 space-y-3 bg-[#07130D]/80">
        <div class="flex items-center gap-2 text-xs font-bold text-[#E5C78B]">
          <span class="text-base">🛡️</span>
          <span>إشعار الشفافية والالتزام بالسرية المهنية</span>
        </div>
        <p class="text-xs text-emerald-200/75 leading-relaxed max-w-[95ch]">
          تستند كافة الأوصاف التقنية في هذه النماذج المختارة إلى كراسات الشروط والمواصفات الرسمية المطروحة عبر منصة اعتماد السعودية والمستندات العامة ذات الصلة. وحرصاً على السرية المهنية والامتثال للأنظمة، لا يتم الإفصاح عن أي جداول تسعير سرية أو معدلات مالية داخلية أو سجلات خاصة بالعملاء.
        </p>
      </div>

    </main>

${renderArFooter('/en/tenders/awarded-tenders.html', totalArticleCount)}

    <script src="/assets/js/tenders-data.js"></script>
    <script src="/assets/js/tenders-showcase.js"></script>
    <script src="/assets/js/main.js"></script>
  </body>
</html>`;

  safeWriteAr(awardedPath, newAwardedHtml);

  // 4B. Update /ar/tenders/index.html
  const tendersIndexHtml = `<!doctype html>
<html lang="ar" dir="rtl" class="dark">
  <head>
    <meta charset="UTF-8" />
    ${THEME_INIT_SCRIPT}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>مركز معرفة المناقصات والعروض الفنية — خبرة +400 مناقصة | يوسف غمري</title>
    <meta name="description" content="أدلة استشارية متخصصة في مناقصات منصة اعتماد السعودية، تحليل كراسات الشروط RFP، صياغة العروض الفنية، مصفوفات الامتثال، وضبط جودة العطاءات بخبرة تتجاوز 400 مناقصة." />
    <link rel="canonical" href="/ar/tenders/index.html" />
    <link rel="alternate" hreflang="ar" href="/ar/tenders/index.html" />
    <link rel="alternate" hreflang="en" href="/en/tenders/index.html" />
    ${AR_GOOGLE_FONTS_HTML}
    <link rel="stylesheet" href="/assets/css/style.css" />
  </head>
  <body class="theme-gold selection:bg-emerald-600 selection:text-white bg-[#050806] text-slate-100 min-h-screen">
${renderArHeader('tenders', '/en/tenders/index.html', uniqueServices)}

    <main class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-12 space-y-14 relative z-10">
      <nav class="breadcrumbs flex items-center gap-2 text-xs text-emerald-300/70" aria-label="مسار التنقل">
        <a href="/ar/index.html" class="hover:text-[#E5C78B]">الرئيسية</a>
        <span>/</span>
        <span class="text-white font-semibold">مركز معرفة المناقصات والعروض الفنية</span>
      </nav>

      <div class="border-b border-emerald-950/60 pb-8 space-y-5">
        <div class="badge-gold">+400 مناقصة تم إعدادها وكتابتها وتنسيقها ومراجعتها</div>
        <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          مركز معرفة المناقصات <span class="gold-gradient-text heading-hover-glow">ودراسات الحالة</span>
        </h1>
        <p class="text-sm sm:text-base text-emerald-200/80 max-w-[78ch] leading-relaxed">
          أدلة تنفيذية ومنهجيات مشتريات تغطي تحليل كراسات الشروط RFP، كتابة العروض الفنية، إعداد مصفوفات الامتثال الصفرية العيوب، حوكمة التقديم عبر منصة اعتماد السعودية، ومعايير التقييم الفني.
        </p>

        <div class="p-6 rounded-2xl glass-panel-elevated border border-[#C6A15B]/45 bg-[#07130D]/85 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div class="space-y-1.5">
            <div class="flex items-center gap-2 text-xs font-bold text-[#E5C78B]">
              <span>🏛️</span>
              <span>+400 مناقصة معدة ومراجعة · +50 ترسية حكومية · +60 جهة حكومية وسيادية</span>
            </div>
            <p class="text-xs text-emerald-200/80 max-w-[80ch]">
              استعرض 35 دراسة حالة مختارة لمنافسات حكومية سعودية توضح المواصفات الفعلية لكراسات الشروط ومصفوفات الامتثال وهندسة الحلول لدى الوزارات والهيئات السيادية.
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-3 shrink-0">
            <a href="/ar/tenders/awarded-tenders.html" class="btn-gold text-xs py-2.5 px-5 font-bold">
              <span>استعراض سجل المناقصات الحكومية ←</span>
            </a>
            <a href="/ar/articles/index.html" class="btn-ghost-gold text-xs py-2.5 px-4">
              <span>كافة الـ ${totalArticleCount} دليلاً تقنياً واستشارياً ←</span>
            </a>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article class="p-6 glass-panel rounded-2xl interactive-card border border-emerald-500/20 flex flex-col justify-between group">
          <div class="space-y-3">
            <div class="flex items-center justify-between text-xs text-emerald-300/70">
              <span class="text-[#E5C78B] font-semibold text-[11px]">أساسيات المناقصات</span>
              <span>7 دقائق قراءة</span>
            </div>
            <h2 class="text-lg font-bold text-white group-hover:text-[#E5C78B] transition-colors">ما هي المناقصة؟ الفروق الجوهرية بين كراسة الشروط RFP وRFQ وRFI</h2>
            <p class="text-xs text-emerald-100/70 leading-relaxed">الفروق النظامية بين وثائق الطرح المختلفة، استخلاص المتطلبات الإلزامية، وتقييم جدوى التقدم للمنافسة.</p>
          </div>
          <div class="pt-5 border-t border-emerald-950/80 mt-5 flex items-center justify-between text-xs">
            <span class="text-emerald-400/60 font-mono text-[11px]">بقلم: يوسف غمري</span>
            <a href="/ar/articles/what-is-a-tender-and-rfp.html" class="font-bold text-[#E5C78B] hover:text-white">اقرأ الدليل ←</a>
          </div>
        </article>

        <article class="p-6 glass-panel rounded-2xl interactive-card border border-emerald-500/20 flex flex-col justify-between group">
          <div class="space-y-3">
            <div class="flex items-center justify-between text-xs text-emerald-300/70">
              <span class="text-[#E5C78B] font-semibold text-[11px]">العروض الفنية</span>
              <span>9 دقائق قراءة</span>
            </div>
            <h2 class="text-lg font-bold text-white group-hover:text-[#E5C78B] transition-colors">كيفية كتابة عرض فني احترافي لمناقصات تقنية المعلومات</h2>
            <p class="text-xs text-emerald-100/70 leading-relaxed">إتقان الملخص التنفيذي، معمارية الحلول، حوكمة المشاريع، وجداول تجزئة العمل لتحقيق أعلى درجات التقييم الفني.</p>
          </div>
          <div class="pt-5 border-t border-emerald-950/80 mt-5 flex items-center justify-between text-xs">
            <span class="text-emerald-400/60 font-mono text-[11px]">بقلم: يوسف غمري</span>
            <a href="/ar/articles/how-to-write-a-technical-proposal.html" class="font-bold text-[#E5C78B] hover:text-white">اقرأ الدليل ←</a>
          </div>
        </article>

        <article class="p-6 glass-panel rounded-2xl interactive-card border border-emerald-500/20 flex flex-col justify-between group">
          <div class="space-y-3">
            <div class="flex items-center justify-between text-xs text-emerald-300/70">
              <span class="text-[#E5C78B] font-semibold text-[11px]">ضبط الجودة والامتثال</span>
              <span>8 دقائق قراءة</span>
            </div>
            <h2 class="text-lg font-bold text-white group-hover:text-[#E5C78B] transition-colors">كيف تعد مصفوفة امتثال خالية من العيوب للمناقصات الحكومية</h2>
            <p class="text-xs text-emerald-100/70 leading-relaxed">مخطط عملي لبناء مصفوفة تتبع جاهزة للجان التقييم تمنع الاستبعاد الفني بسبب سقوط المتطلبات الإلزامية.</p>
          </div>
          <div class="pt-5 border-t border-emerald-950/80 mt-5 flex items-center justify-between text-xs">
            <span class="text-emerald-400/60 font-mono text-[11px]">بقلم: يوسف غمري</span>
            <a href="/ar/articles/how-to-prepare-a-compliance-matrix.html" class="font-bold text-[#E5C78B] hover:text-white">اقرأ الدليل ←</a>
          </div>
        </article>

        <article class="p-6 glass-panel rounded-2xl interactive-card border border-emerald-500/20 flex flex-col justify-between group">
          <div class="space-y-3">
            <div class="flex items-center justify-between text-xs text-emerald-300/70">
              <span class="text-[#E5C78B] font-semibold text-[11px]">المنافسات الحكومية السعودية</span>
              <span>10 دقائق قراءة</span>
            </div>
            <h2 class="text-lg font-bold text-white group-hover:text-[#E5C78B] transition-colors">دليل التقديم على مناقصات منصة اعتماد ونظام المنافسات السعودي</h2>
            <p class="text-xs text-emerald-100/70 leading-relaxed">القواعد الجوهرية لنظام المنافسات والمشتريات الحكومية، بروتوكولات الرفع الإلكتروني، واشتراطات المحتوى المحلي والتأهيل.</p>
          </div>
          <div class="pt-5 border-t border-emerald-950/80 mt-5 flex items-center justify-between text-xs">
            <span class="text-emerald-400/60 font-mono text-[11px]">بقلم: يوسف غمري</span>
            <a href="/ar/articles/saudi-etimad-platform-bidding-guide.html" class="font-bold text-[#E5C78B] hover:text-white">اقرأ الدليل ←</a>
          </div>
        </article>

        <article class="p-6 glass-panel rounded-2xl interactive-card border border-emerald-500/20 flex flex-col justify-between group">
          <div class="space-y-3">
            <div class="flex items-center justify-between text-xs text-emerald-300/70">
              <span class="text-[#E5C78B] font-semibold text-[11px]">استراتيجية العطاءات</span>
              <span>8 دقائق قراءة</span>
            </div>
            <h2 class="text-lg font-bold text-white group-hover:text-[#E5C78B] transition-colors">استراتيجية قرار المشاركة في المناقصات (Bid / No-Bid)</h2>
            <p class="text-xs text-emerald-100/70 leading-relaxed">إطار موضوعي لتقييم شروط التأهيل، طاقة الفريق، والجدوى المالية قبل تخصيص موارد إعداد العرض الفني.</p>
          </div>
          <div class="pt-5 border-t border-emerald-950/80 mt-5 flex items-center justify-between text-xs">
            <span class="text-emerald-400/60 font-mono text-[11px]">بقلم: يوسف غمري</span>
            <a href="/ar/articles/bid-no-bid-assessment-strategy.html" class="font-bold text-[#E5C78B] hover:text-white">اقرأ الدليل ←</a>
          </div>
        </article>

        <article class="p-6 glass-panel rounded-2xl interactive-card border border-emerald-500/20 flex flex-col justify-between group">
          <div class="space-y-3">
            <div class="flex items-center justify-between text-xs text-emerald-300/70">
              <span class="text-[#E5C78B] font-semibold text-[11px]">ضبط الجودة وتفادي الاستبعاد</span>
              <span>7 دقائق قراءة</span>
            </div>
            <h2 class="text-lg font-bold text-white group-hover:text-[#E5C78B] transition-colors">أبرز أسباب استبعاد العروض الفنية في المناقصات وكيفية تفاديها</h2>
            <p class="text-xs text-emerald-100/70 leading-relaxed">مراجعة عملية لأكثر أسباب الرفض شيوعاً—من نقص شهادات الامتثال إلى ورود إشارات مالية داخل المجلد الفني.</p>
          </div>
          <div class="pt-5 border-t border-emerald-950/80 mt-5 flex items-center justify-between text-xs">
            <span class="text-emerald-400/60 font-mono text-[11px]">بقلم: يوسف غمري</span>
            <a href="/ar/articles/avoiding-mandatory-tender-rejection.html" class="font-bold text-[#E5C78B] hover:text-white">اقرأ الدليل ←</a>
          </div>
        </article>
      </div>
    </main>

${renderArFooter('/en/tenders/index.html', totalArticleCount)}

    <script src="/assets/js/main.js"></script>
  </body>
</html>`;

  safeWriteAr(path.join(rootDir, 'ar/tenders/index.html'), tendersIndexHtml);

  // 4C. Update all 35 /ar/tenders/case-*.html pages cleanly
  const arTendersDir = path.join(rootDir, 'ar/tenders');
  const caseFiles = fs
    .readdirSync(arTendersDir)
    .filter((f) => f.startsWith('case-') && f.endsWith('.html'));

  for (const file of caseFiles) {
    const absCase = path.join(arTendersDir, file);
    let html = fs.readFileSync(absCase, 'utf8');
    const enCaseExists = fs.existsSync(path.join(rootDir, 'en/tenders', file));
    const enCaseUrl = enCaseExists ? `/en/tenders/${file}` : '/en/tenders/awarded-tenders.html';

    // Replace everything from <body ...> up to <main ...> with clean header
    const bodyIdx = html.indexOf('<body');
    const mainIdx = html.indexOf('<main');
    if (bodyIdx !== -1 && mainIdx !== -1) {
      const bodyOpenEnd = html.indexOf('>', bodyIdx) + 1;
      html =
        html.slice(0, bodyOpenEnd) +
        '\n' +
        renderArHeader('tenders', enCaseUrl, uniqueServices) +
        '\n\n    ' +
        html.slice(mainIdx);
    }

    // Replace <footer ...>...</body> with clean footer + scripts
    const footerIdx = html.indexOf('<footer');
    const bodyCloseIdx = html.lastIndexOf('</body>');
    if (footerIdx !== -1 && bodyCloseIdx !== -1) {
      html =
        html.slice(0, footerIdx) +
        renderArFooter(enCaseUrl, totalArticleCount) +
        '\n\n    <script src="/assets/js/main.js"></script>\n  ' +
        html.slice(bodyCloseIdx);
    }

    // Upgrade <main class="max-w-5xl ..."> to wide responsive container
    html = html.replace(
      /<main class="max-w-\d*xl mx-auto px-4 sm:px-6 lg:px-8/g,
      '<main class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20'
    );

    // Update breadcrumb label & neutralize status badges
    html = html
      .replace(/>المناقصات والإنجازات<\/a>/g, '>المناقصات الحكومية والتقنية</a>')
      .replace(
        /تم إعداد العرض والتقديم|تمت الترسية بنجاح|تمت الترسية|قيد التقييم الفني/g,
        'منافسة حكومية'
      )
      .replace(/>حالة الترسية<\/span>/g, '>نطاق المشاركة</span>');

    safeWriteAr(absCase, html);
  }
}

// ============================================================================
// 5. UPDATE ARABIC HOMEPAGE (/ar/index.html) & STANDALONE PAGES
// ============================================================================
function updateArabicHomeAndStandalonePages(
  allServices: ServiceDef[],
  totalArticleCount = 132
): void {
  const uniqueServices = Array.from(new Map(allServices.map((s) => [s.slug, s])).values());

  const arIndexPath = path.join(rootDir, 'ar/index.html');
  let homeHtml = fs.readFileSync(arIndexPath, 'utf8');

  // 5A. Replace stacked Header + 4 duplicate <nav class="fixed bottom-0 ..."> on /ar/index.html
  const bodyIdx = homeHtml.indexOf('<body');
  const mainCommentIdx = homeHtml.indexOf('<!-- المحتوى الرئيسي -->');
  if (bodyIdx !== -1 && mainCommentIdx !== -1) {
    const bodyOpenEnd = homeHtml.indexOf('>', bodyIdx) + 1;
    homeHtml =
      homeHtml.slice(0, bodyOpenEnd) +
      '\n' +
      renderArHeader('home', '/index.html', uniqueServices) +
      '\n\n    ' +
      homeHtml.slice(mainCommentIdx);
  }

  // Replace Footer cleanly while keeping tenders-data.js, tenders-showcase.js, main.js
  const footerCommentIdx = homeHtml.indexOf('<!-- تذييل الصفحة الفاخر -->');
  const footerTagIdx = footerCommentIdx !== -1 ? footerCommentIdx : homeHtml.lastIndexOf('<footer');
  const bodyCloseIdx = homeHtml.lastIndexOf('</body>');
  if (footerTagIdx !== -1 && bodyCloseIdx !== -1) {
    homeHtml =
      homeHtml.slice(0, footerTagIdx) +
      renderArFooter('/index.html', totalArticleCount) +
      '\n\n    <script src="/assets/js/tenders-data.js"></script>\n    <script src="/assets/js/tenders-showcase.js"></script>\n    <script src="/assets/js/main.js"></script>\n  ' +
      homeHtml.slice(bodyCloseIdx);
  }

  // Fix duplicate id="tenders" on Section 3 Knowledge Hub -> id="knowledge-hub" FIRST before bulk container upgrade
  homeHtml = homeHtml
    .replace(
      '<section id="tenders" class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">',
      '<section id="knowledge-hub" class="py-20 w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 space-y-12">'
    )
    .replace(
      /<a href="\/ar\/(?:tenders|articles)\/index\.html" class="btn-ghost-gold text-xs">\s*<span>استعراض كافة[^<]*<\/span>/,
      `<a href="/ar/articles/index.html" class="btn-ghost-gold text-xs">\n            <span>استعراض كافة الـ ${totalArticleCount} دليلاً ومقالاً معرفياً</span>`
    );

  // Upgrade remaining max-w-7xl containers across /ar/index.html to full-width max-w-[1920px]
  homeHtml = homeHtml.replace(
    /max-w-7xl mx-auto px-4 sm:px-6 lg:px-8/g,
    'w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20'
  );

  // Update Hero CTA & Metrics on /ar/index.html
  homeHtml = homeHtml
    .replace(
      'أصمم وأطور المواقع الإلكترونية والأنظمة والبرامج وتطبيقات الموبايل. 29+ منصة حية في 15+ دولة.',
      'من الفكرة إلى التنفيذ، أصمم وأطور المواقع المخصصة وأنظمة ERP وتطبيقات الويب والموبايل. أكثر من 100 مشروع رقمي منفذ وخبرة +400 مناقصة تم إعدادها ومراجعتها.'
    )
    .replace(
      '<!-- القسم 4: معرض المشاريع والأعمال المعتمدة (29 مشروعاً) -->',
      '<!-- القسم 4: معرض المشاريع والأعمال المختارة (25 مشروعاً من أصل +100 مشروع منفذ) -->'
    )
    .replace(
      '<span>استعراض الأعمال (29 مشروعاً)</span>',
      '<span>استعراض الأعمال (25 مختارة / +100 مشروع)</span>'
    )
    .replace(
      /<div class="text-2xl lg:text-3xl font-extrabold gold-gradient-text">\+200<\/div>\s*<div class="text-\[11px\] text-emerald-300\/70 font-medium mt-1">مناقصة سعودية وتقنية<\/div>/,
      `<div class="text-2xl lg:text-3xl font-extrabold gold-gradient-text font-mono">+400</div>
                <div class="text-[11px] text-emerald-300/70 font-medium mt-1">مناقصة تم إعدادها ومراجعتها</div>`
    )
    .replace(
      /<div class="text-2xl lg:text-3xl font-extrabold text-white">\+29<\/div>\s*<div class="text-\[11px\] text-emerald-300\/70 font-medium mt-1">مشروع ويب معتمد<\/div>/,
      `<div class="text-2xl lg:text-3xl font-extrabold text-white font-mono">+100</div>
                <div class="text-[11px] text-emerald-300/70 font-medium mt-1">مشروع رقمي منفذ</div>`
    )
    .replace(
      /<div class="text-2xl lg:text-3xl font-extrabold text-white">\+15<\/div>\s*<div class="text-\[11px\] text-emerald-300\/70 font-medium mt-1">دولة حول العالم<\/div>/,
      `<div class="text-2xl lg:text-3xl font-extrabold text-white font-mono">+60</div>
                <div class="text-[11px] text-emerald-300/70 font-medium mt-1">جهة حكومية وسيادية</div>`
    )
    .replace(
      '<span>استعراض دليل الخدمات الكامل (أكثر من 50 خدمة)</span>',
      '<span>استعراض دليل الخدمات الكامل (93 خدمة متخصصة)</span>'
    );

  // Update Section 4 (#portfolio) copy + insert AR_PORTFOLIO_100_NOTICE_HTML
  homeHtml = homeHtml
    .replace(
      '29 مشروعاً معتمداً تشمل مناقصات البنية التحتية السحابية في السعودية، وبوابات الشركات الدولية، والمتاجر الرقمية.',
      '25 مشروعاً حياً مختاراً من أصل أكثر من 100 حل رقمي منفذ عبر بوابات الشركات، المتاجر الإلكترونية، أنظمة ERP/CRM/POS، وتطبيقات الهواتف الذكية.'
    )
    .replace(
      '<span>استعراض صفحة الأعمال والمشاريع (25 مشروعاً) ←</span>',
      '<span>استعراض صفحة الأعمال والمشاريع (25 مختارة / +100 مشروع) ←</span>'
    );

  if (!homeHtml.includes('أكثر من 100 مشروع منفذ..')) {
    homeHtml = homeHtml.replace(
      '<!-- حاوية محرك المشاريع التفاعلي -->',
      `${AR_PORTFOLIO_100_NOTICE_HTML}\n\n          <!-- حاوية محرك المشاريع التفاعلي -->`
    );
  }

  // Upgrade Section 5 (#tenders) header + verified +400 / +50 / +60 metrics banner
  const sec5Start = homeHtml.indexOf(
    '<section id="tenders" class="py-20 border-t border-emerald-950/60 bg-[#07130D]/60">'
  );
  const sec5GridMarker =
    '<!-- شبكة أبرز بطاقات المناقصات (6 منافسات كبرى مع نوافذ تفاعلية) -->';
  const sec5GridIdx = homeHtml.indexOf(sec5GridMarker);
  if (sec5Start !== -1 && sec5GridIdx !== -1) {
    const newSec5Top = `<section id="tenders" class="py-20 border-t border-emerald-950/60 bg-[#07130D]/60">
        <div class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 space-y-10">
          <div id="tenders-experience-section" class="space-y-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div class="space-y-2">
                <div class="text-xs font-semibold tracking-wide text-[#E5C78B] flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#C6A15B] animate-pulse"></span>
                  <span>+400 مناقصة تم إعدادها وكتابتها وتنسيقها ومراجعتها</span>
                </div>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  المناقصات <span class="gold-gradient-text heading-hover-glow">الحكومية والتقنية</span>
                </h2>
                <p class="text-sm text-emerald-200/75 max-w-[75ch] leading-relaxed">
                  نماذج مختارة لمشاركات وخبرات في المنافسات الحكومية والسيادية توضح منهجية صياغة العروض الفنية، تفكيك متطلبات كراسات الشروط RFP، إعداد مصفوفات الامتثال، وحوكمة اتفاقيات مستوى الخدمة عبر منصة اعتماد.
                </p>
              </div>

              <div class="flex items-center gap-3 shrink-0">
                <a href="/ar/tenders/awarded-tenders.html" class="btn-gold text-xs py-2.5 px-5 font-bold flex items-center gap-2">
                  <span>استعراض سجل المناقصات (+400 خبرة ومشاركة)</span>
                  <svg class="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
              </div>
            </div>

${AR_TENDERS_CLARIFICATION_AND_METRICS_HTML}

            `;
    homeHtml = homeHtml.slice(0, sec5Start) + newSec5Top + homeHtml.slice(sec5GridIdx);
  }

  // Neutralize the 6 featured tender cards on /ar/index.html
  homeHtml = homeHtml
    .replace(
      /<span class="px-2\.5 py-1 rounded-lg border text-\[11px\][^"]*">\s*<span>(?:📋|🏆)<\/span>\s*<span>(?:قيد التقييم الفني|تمت الترسية)<\/span>\s*<\/span>/g,
      `<span class="px-2.5 py-1 rounded-lg border text-[11px] border-emerald-500/40 text-emerald-300 bg-emerald-950/60 font-semibold flex items-center gap-1.5">
                      <span>🏛️</span>
                      <span>منافسة حكومية</span>
                    </span>`
    )
    .replace(/>عقد مرسى<\/span>/g, '>بوابات وتطبيقات ذكية</span>')
    .replace(
      '<span>استعراض كافة المناقصات (34 منافسة) مع البحث والتصفية</span>',
      '<span>استعراض كافة دراسات حالة المناقصات المختارة (+400 خبرة ومشاركة)</span>'
    );

  // Update Section 6 (#resume) metric 200+ -> +400
  homeHtml = homeHtml.replace(
    /<div class="text-xl font-extrabold text-\[#E5C78B\] font-mono">200\+<\/div>\s*<div class="font-bold text-white">مناقصة فنية مدروسة ومراجعة<\/div>/,
    `<div class="text-xl font-extrabold text-[#E5C78B] font-mono">+400</div>
              <div class="font-bold text-white">أكثر من 400 مناقصة تم إعدادها وكتابتها وتنسيقها ومراجعتها</div>`
  );

  homeHtml = homeHtml.replace(/youssefghamry\.work@gmail\.com|1YoussefGhamry@gmail\.com/gi, '1youssefghamry@gmail.com');
  safeWriteAr(arIndexPath, homeHtml);

  // 5B. Clean standalone Arabic pages (/ar/cv/index.html, /ar/certifications/index.html, /ar/contact/index.html)
  const standaloneTargets: { rel: string; sec: ActiveArNavSection; enUrl: string }[] = [
    { rel: 'ar/cv/index.html', sec: 'cv', enUrl: '/en/cv/index.html' },
    {
      rel: 'ar/certifications/index.html',
      sec: 'certifications',
      enUrl: '/en/certifications/index.html'
    },
    { rel: 'ar/contact/index.html', sec: 'contact', enUrl: '/en/contact/index.html' }
  ];

  for (const t of standaloneTargets) {
    const abs = path.join(rootDir, t.rel);
    if (!fs.existsSync(abs)) continue;
    let html = fs.readFileSync(abs, 'utf8');

    const bIdx = html.indexOf('<body');
    const mIdx = html.indexOf('<main');
    if (bIdx !== -1 && mIdx !== -1) {
      const bEnd = html.indexOf('>', bIdx) + 1;
      html =
        html.slice(0, bEnd) +
        '\n' +
        renderArHeader(t.sec, t.enUrl, uniqueServices) +
        '\n\n    ' +
        html.slice(mIdx);
    }

    const fIdx = html.lastIndexOf('<footer');
    const bcIdx = html.lastIndexOf('</body>');
    if (fIdx !== -1 && bcIdx !== -1) {
      const afterFooterClose = html.indexOf('</footer>', fIdx);
      const tailScripts =
        afterFooterClose !== -1 ? html.slice(afterFooterClose + '</footer>'.length, bcIdx) : '';
      const hasMainJs = tailScripts.includes('/assets/js/main.js');
      html =
        html.slice(0, fIdx) +
        renderArFooter(t.enUrl, totalArticleCount) +
        '\n' +
        tailScripts +
        (hasMainJs ? '' : '\n    <script src="/assets/js/main.js"></script>\n  ') +
        html.slice(bcIdx);
    }

    // Upgrade <main> container to full-width max-w-[1920px]
    html = html.replace(
      /<main class="max-w-\d*xl mx-auto px-4 sm:px-6 lg:px-8/g,
      '<main class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20'
    );

    if (t.sec === 'cv') {
      html = html
        .replace(/200\+/g, '+400')
        .replace(/\+200/g, '+400')
        .replace(/\(34 منافسة\)/g, '(+400 خبرة ومشاركة)');
    }

    html = html.replace(/youssefghamry\.work@gmail\.com|1YoussefGhamry@gmail\.com/gi, '1youssefghamry@gmail.com');
    safeWriteAr(abs, html);
  }
}

// ============================================================================
// 6. APPEND NEW ARABIC ARTICLE URLS TO /public/sitemap.xml
// ============================================================================
function syncArabicSitemap(allArticles: ArArticleItem[]): void {
  const sitemapPath = path.join(rootDir, 'public/sitemap.xml');
  if (!fs.existsSync(sitemapPath)) return;
  let xml = fs.readFileSync(sitemapPath, 'utf8');
  const additions: string[] = [];

  for (const a of allArticles) {
    const relLoc = `/ar/articles/${a.slug}.html`;
    if (!xml.includes(relLoc)) {
      additions.push(`  <url>
    <loc>https://youssefghamry.com${relLoc}</loc>
    <lastmod>${a.updatedDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`);
    }
  }

  if (additions.length > 0 && xml.includes('</urlset>')) {
    xml = xml.replace('</urlset>', `${additions.join('\n')}\n</urlset>`);
    safeWriteAr(sitemapPath, xml);
  }
}

function main(): void {
  console.log('1. Ensuring all article SVG illustrations exist...');
  generateEnglishArticleSvgs(rootDir);

  console.log('2. Building all 93 services & 132 Arabic technical/tender guides...');
  const allServices = generateRemainingServices();
  const allArabicArticles = buildAll132ArabicArticles(rootDir, allServices);

  console.log(`   -> Loaded ${allArabicArticles.length} Arabic guides (${allArabicArticles.filter((a) => a.isNewlyPublished).length} newly published progressive + ${allArabicArticles.filter((a) => !a.isNewlyPublished).length} base).`);

  console.log('3. Generating Full-Width Arabic Services Hub + 93 Service Detail Pages...');
  buildArabicServices(allServices, allArabicArticles);

  console.log('4. Generating Full-Width Arabic Articles Hub + 132 Article Detail Pages...');
  buildArabicArticles(allArabicArticles, allServices);

  console.log('5. Generating Full-Width Arabic Portfolio Page (/ar/portfolio/index.html)...');
  buildArabicPortfolioPage(allServices, allArabicArticles.length);

  console.log('6. Updating Full-Width Arabic Tenders Hub, Showcase & 35 Case Studies...');
  updateArabicTenders(allServices, allArabicArticles.length);

  console.log('7. Updating Arabic Homepage (/ar/index.html) & Standalone Pages...');
  updateArabicHomeAndStandalonePages(allServices, allArabicArticles.length);

  console.log('8. Syncing /public/sitemap.xml with Arabic article URLs...');
  syncArabicSitemap(allArabicArticles);

  console.log('✅ Arabic synchronization complete!');
}

main();
