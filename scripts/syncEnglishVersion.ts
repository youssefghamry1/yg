/// <reference types="node" />
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CATEGORIES, CategoryDef, ServiceDef } from './servicesData.js';
import { generateRemainingServices } from './generate_all.js';
import { getServiceVisuals } from './serviceVisuals.js';
import { escapeHtml } from './renderTemplates.js';
import {
  generateEnglishArticleSvgs,
  buildAll111EnglishArticles,
  EnArticleItem,
  EnArticleSection
} from './enArticlesCatalog.js';
import { getPublishedProgressiveArticles } from './progressiveEditorialCms.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

/**
 * Strict guard: NEVER allow writing or touching any file inside /ar/
 */
function safeWriteEn(absPath: string, content: string): void {
  const rel = path.relative(rootDir, absPath).replace(/\\/g, '/');
  if (rel === 'ar' || rel.startsWith('ar/') || rel.includes('/ar/')) {
    throw new Error(`FORBIDDEN WRITE BLOCKED: Attempted to touch Arabic file: ${rel}`);
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

const GOOGLE_FONTS_HTML = `<link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />`;

export type ActiveNavSection =
  | 'home'
  | 'services'
  | 'cv'
  | 'portfolio'
  | 'tenders'
  | 'certifications'
  | 'articles'
  | 'contact';

const SOURCE_RECORD_EN_MAP: Array<[string, string]> = [
  ['Source Record: PDF_15 و PDF_28 (بلدية البكيرية)', 'Source Record: PDF_15 & PDF_28 (Al-Bukayriyah Municipality)'],
  ['Source Record: PDF 17 (هيئة تطوير الشرقية)', 'Source Record: PDF 17 (Eastern Province Development Authority)'],
  ['Source Record: PDF_3 و PDF_6 و PDF_8', 'Source Record: PDF_3, PDF_6 & PDF_8'],
  ['Source Record: PDF_22 (مكافحة المخدرات)', 'Source Record: PDF_22 (General Directorate of Narcotics Control)'],
  ['Source Record: PDF_21 (وزارة الموارد البشرية)', 'Source Record: PDF_21 (Ministry of Human Resources & Social Development)'],
  ['Source Record: PDF_25 (بوابة الموارد البشرية)', 'Source Record: PDF_25 (HRSD Digital Portal)'],
  ['Source Record: PDF 5 (تطبيق الموظف الموحد)', 'Source Record: PDF 5 (Unified Government Employee App)'],
  ['Source Record: PDF_14 (مكتب تطوير جازان)', 'Source Record: PDF_14 (Jazan Region Development Office)'],
  ['Source Record: PDF_9 (نادي سباقات الخيل)', 'Source Record: PDF_9 (Jockey Club of Saudi Arabia)'],
  ['Source Record: PDF_27 (هيئة تطوير جدة)', 'Source Record: PDF_27 (Jeddah Development Authority)'],
  ['Source Record: PDF 19 (هيئة تطوير جدة فحص تقني)', 'Source Record: PDF 19 (Jeddah Development Authority Technical Audit)'],
  ['Source Record: PDF_11 (جامعة الجوف)', 'Source Record: PDF_11 (Jouf University)'],
  ['Source Record: PDF_1 (هيئة الخبراء)', 'Source Record: PDF_1 (Bureau of Experts at the Council of Ministers)'],
  ['Source Record: PDF 13 (جامعة الملك خالد ITSM)', 'Source Record: PDF 13 (King Khalid University ITSM)'],
  ['Source Record: PDF_16 (جامعة الملك سعود للعلوم الصحية)', 'Source Record: PDF_16 (King Saud bin Abdulaziz University for Health Sciences)'],
  ['Source Record: PDF 6 (قطاع الثروة الحيوانية والسمكية)', 'Source Record: PDF 6 (Livestock & Fisheries Sector)'],
  ['Source Record: PDF 3 (وزارة الطاقة)', 'Source Record: PDF 3 (Ministry of Energy)'],
  ['Source Record: PDF 20 (وزارة الحج والعمرة)', 'Source Record: PDF 20 (Ministry of Hajj & Umrah)'],
  ['Source Record: PDF_13 (وزارة الاستثمار)', 'Source Record: PDF_13 (Ministry of Investment — MISA)'],
  ['Source Record: PDF_23 (المركز الوطني للتنافسية)', 'Source Record: PDF_23 (National Competitiveness Center)'],
  ['Source Record: PDF 4 (الالتزام البيئي)', 'Source Record: PDF 4 (National Center for Environmental Compliance)'],
  ['Source Record: PDF_24 (القطاع غير الربحي)', 'Source Record: PDF_24 (National Center for Non-Profit Sector)'],
  ['Source Record: PDF 2 (مركز النخيل والتمور)', 'Source Record: PDF 2 (National Center for Palms & Dates)'],
  ['Source Record: PDF 22 (صندوق التنمية العقارية)', 'Source Record: PDF 22 (Real Estate Development Fund — REDF)'],
  ['Source Record: PDF_26 (هيئة المواصفات - تأكد)', 'Source Record: PDF_26 (SASO — Taakad App)'],
  ['Source Record: PDF 23 (الحرس الوطني)', 'Source Record: PDF 23 (Ministry of National Guard)'],
  ['Source Record: PDF_12 (سدايا)', 'Source Record: PDF_12 (SDAIA)'],
  ['Source Record: PDF 1 (سدايا MIFON)', 'Source Record: PDF 1 (SDAIA — MIFON)'],
  ['Source Record: PDF 5 + PDF 10 (الأمن البيئي - لاسلكي)', 'Source Record: PDF 5 & PDF 10 (Special Forces for Environmental Security — Wireless)'],
  ['Source Record: PDF 21 (الأمن البيئي منصة متكاملة)', 'Source Record: PDF 21 (Special Forces for Environmental Security — Integrated Platform)'],
  ['Source Record: PDF 8 + PDF 9 + PDF 11 + PDF 12 + PDF 15 (الأمن البيئي CCTV)', 'Source Record: PDF 8, 9, 11, 12 & 15 (Special Forces for Environmental Security — CCTV)'],
  ['Source Record: PDF 14 (الهيئة السعودية للمياه)', 'Source Record: PDF 14 (Saudi Water Authority)'],
  ['Source Record: PDF_17 إلى PDF_20 (الهيئة السعودية للمياه)', 'Source Record: PDF_17 to PDF_20 (Saudi Water Authority)'],
  ['Source Record: PDF 18 (جامعة بيشة SOC)', 'Source Record: PDF 18 (University of Bisha — SOC)'],
  ['Source Record: PDF_10 (الهيئة الملكية - ينبع)', 'Source Record: PDF_10 (Royal Commission — Yanbu)']
];

function localizeDurationString(text: string): string {
  let out = text;
  for (const [arSrc, enSrc] of SOURCE_RECORD_EN_MAP) {
    out = out.split(arSrc).join(enSrc);
  }
  return out
    .replace(/محتوى محلي\s*(\d+%)/g, '$1 Local Content')
    .replace(/#منصة اعتماد/g, '#Etimad Platform')
    .replace(/#تعاميم تنظيمية عامة/g, '#Regulatory Circulars')
    .replace(/2026\/م\/79248/g, '2026/M/79248')
    .replace(/>منصة اعتماد</g, '>Etimad Platform<')
    .replace(/Reference Number:<\/strong>\s*منصة اعتماد/g, 'Reference Number:</strong> Etimad Platform')
    .replace(/Reference Number:<\/strong>\s*تعاميم تنظيمية عامة/g, 'Reference Number:</strong> General Regulatory Circulars')
    .replace(/1447هـ\s*\/\s*2026م/g, '1447 AH / 2026')
    .replace(/(\d{2}\/\d{2}\/\d{4})\s*هـ/g, '$1 AH')
    .replace(/(\d{4})\s*هـ/g, '$1 AH')
    .replace(/سنة ميلادية واحدة\s*\(12\s*شهراً?\)/g, '12 Months (1 Calendar Year)')
    .replace(/عام ميلادي واحد\s*\(12\s*(?:شهراً?|Months)\)/g, '12 Months (1 Calendar Year)')
    .replace(/سنتان ميلاديتان\s*\(24\s*شهراً?\)/g, '24 Months (2 Calendar Years)')
    .replace(/24\s*(?:شهراً?|Months)\s*ميلادياً?\s*\(سنتان\)/g, '24 Months (2 Calendar Years)')
    .replace(/24\s*(?:شهراً?|Months)\s*\(سنتان ميلاديتان\)/g, '24 Months (2 Calendar Years)')
    .replace(/24\s*(?:شهراً?|Months)\s*\(تشغيل وتطوير\)\s*و\s*36\s*(?:شهراً?|Months)\s*\(صيانة ودعم\)/g, '24 Months (Dev & Ops) + 36 Months (Maintenance & Support)')
    .replace(/ثلاث سنوات ميلادية\s*\(36\s*شهراً?\)/g, '36 Months (3 Calendar Years)')
    .replace(/أربع سنوات ميلادية\s*\(48\s*شهراً?\)/g, '48 Months (4 Calendar Years)')
    .replace(/خمس سنوات ميلادية\s*\(60\s*شهراً?\)/g, '60 Months (5 Calendar Years)')
    .replace(/60\s*(?:شهراً?|Months)\s*\(5\s*(?:سنوات|Years)\s*ميلادية\)/g, '60 Months (5 Calendar Years)')
    .replace(/36\s*(?:شهراً?|Months)\s*\(3\s*(?:سنوات|Years)\s*ميلادية\)/g, '36 Months (3 Calendar Years)')
    .replace(/1095\s*(?:يوماً?|Days)\s*\(3\s*(?:سنوات|Years)\s*ميلادية\)/g, '1,095 Days (3 Calendar Years)')
    .replace(/6\s*(?:أشهر|Months)\s*\(قابلة للتجديد الشهري\)/g, '6 Months (Monthly Renewable)')
    .replace(/3\s*(?:سنوات|Years)\s*\(سنة تنفيذ\s*\+\s*سنتين صيانة ودعم\)/g, '3 Years (1 Yr Implementation + 2 Yrs O&M)')
    .replace(/3\s*(?:سنوات|Years)\s*\(ثلاث سنوات متتالية\)/g, '3 Consecutive Years')
    .replace(/سنة واحدة من تاريخ توقيع العقد/g, '1 Year from Contract Signing')
    .replace(/بحسب أوامر الصرف المبنية على الاتفاقية الإطارية/g, 'Per Framework Agreement Work Orders')
    .replace(/سارية ومطبقة بموجب النظام/g, 'Active Statutory Regulation')
    .replace(/سنتان\s*\(24\s*شهراً?\)/g, '24 Months')
    .replace(/ثلاث سنوات\s*\(36\s*شهراً?\)/g, '36 Months')
    .replace(/سنة واحدة\s*\(12\s*شهراً?\)/g, '12 Months')
    .replace(/(\d+)\s*Months\s*ميلادياً?/g, '$1 Months')
    .replace(/(\d+)\s*Months\s*ميلادية/g, '$1 Months')
    .replace(/(\d+)\s*شهراً?\s*ميلادياً?/g, '$1 Months')
    .replace(/(\d+)\s*أشهر\s*ميلادية/g, '$1 Months')
    .replace(/(\d+)\s*شهراً/g, '$1 Months')
    .replace(/(\d+)\s*شهرًا/g, '$1 Months')
    .replace(/(\d+)\s*شهر/g, '$1 Months')
    .replace(/(\d+)\s*أشهر/g, '$1 Months')
    .replace(/(\d+)\s*سنوات/g, '$1 Years')
    .replace(/(\d+)\s*يوماً/g, '$1 Days')
    .replace(/(\d+)\s*يوم/g, '$1 Days')
    .replace(/(\d{2}\/\d{2}\/\d{4})م/g, '$1')
    .replace(/(\d{4}-\d{2}-\d{2})م/g, '$1')
    .replace(/غير محدد بالكراسة/g, 'Per RFP Schedule')
    .replace(/حسب جدول الكميات/g, 'Per BOQ Schedule');
}

function renderEnHeader(
  activeSection: ActiveNavSection,
  arCounterpartUrl: string,
  allServices: ServiceDef[]
): string {
  const navCls = (sec: ActiveNavSection) =>
    activeSection === sec ? 'nav-link active px-2.5 py-1.5 rounded-md' : 'nav-link px-2.5 py-1.5 rounded-md';

  const megaMenuCategoriesHtml = CATEGORIES.map((cat) => {
    const catServices = allServices.filter((s) => s.categoryId === cat.id).slice(0, 6);
    const linksHtml = catServices
      .map(
        (s) => `
                    <a href="/en/services/${s.slug}.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${escapeHtml(s.titleEn)}</span>
                    </a>`
      )
      .join('');

    return `
                <div class="space-y-2 p-3 rounded-xl bg-[#07130D]/70 border border-emerald-950/80 hover:border-emerald-500/30 transition-colors">
                  <div class="flex items-center justify-between gap-2 pb-1.5 border-b border-emerald-950/80">
                    <div class="flex items-center gap-2 min-w-0">
                      <span class="text-base">${cat.icon}</span>
                      <span class="text-xs font-bold text-white tracking-wide truncate">${escapeHtml(cat.nameEn)}</span>
                    </div>
                    <a href="/en/services/index.html#${cat.id}" class="text-[10px] font-mono text-[#E5C78B] hover:underline shrink-0">View</a>
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
          `<a href="/en/services/${s.slug}.html" class="block py-1 text-emerald-200/80 hover:text-white">${escapeHtml(
            s.titleEn
          )}</a>`
      )
      .join('\n                ');
    return `
            <div class="space-y-1">
              <div class="font-bold text-white flex items-center gap-1.5 text-[11px] text-[#E5C78B]">
                <span>${cat.icon}</span>
                <span>${escapeHtml(cat.nameEn)}</span>
              </div>
              <div class="ms-3 space-y-1">
                ${linksHtml}
              </div>
            </div>`;
  }).join('');

  return `    <!-- Global Full-Width Luxury Header Navigation -->
    <header class="sticky top-0 z-50 glass-panel border-b border-emerald-950/60 bg-[#050806]/95 backdrop-blur-xl">
      <div class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 h-20 flex items-center justify-between gap-4 relative">
        
        <!-- Brand Logo / Emblem -->
        <a href="/index.html" class="flex items-center gap-3 text-white no-underline group flex-shrink-0">
          <div class="relative w-10 h-10 rounded-full border border-[#C6A15B]/50 p-0.5 bg-[#07130D] group-hover:border-[#E5C78B] transition-colors">
            <img src="/assets/aistudio/image_ef5d64bf.png" alt="Youssef Ghamry Emblem" class="w-full h-full object-cover rounded-full" />
          </div>
          <div>
            <div class="font-cinzel text-sm sm:text-base tracking-wider font-bold gold-gradient-text uppercase">
              Youssef Ghamry
            </div>
            <div class="text-[9px] sm:text-[10px] text-emerald-300/70 tracking-tight sm:tracking-widest uppercase font-mono">
              Full-Stack Developer | Tender &amp; Bid QA
            </div>
          </div>
        </a>

        <!-- Desktop Navigation: 8 Core Pillars -->
        <nav class="hidden lg:flex items-center gap-1.5 xl:gap-3 text-xs font-medium" aria-label="Main Navigation">
          <a href="/index.html" class="${navCls('home')}">Home</a>

          <div class="mega-menu-wrapper static">
            <button
              type="button"
              class="${navCls('services')} flex items-center gap-1.5 mega-menu-trigger group cursor-pointer focus:outline-none"
              aria-haspopup="true"
              aria-expanded="false"
              id="services-menu-trigger"
            >
              <span>Services</span>
              <svg class="w-3.5 h-3.5 text-emerald-400 group-hover:text-[#E5C78B] transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            <div class="mega-menu-dropdown p-6 space-y-4 text-start">
              <div class="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-emerald-950/80">
                <div class="flex items-center gap-2.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#C6A15B] animate-pulse"></span>
                  <span class="text-xs font-bold uppercase tracking-wider text-white">
                    Comprehensive Engineering &amp; Tender Services Directory
                  </span>
                </div>
                <a href="/en/services/index.html" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#C6A15B]/50 hover:border-[#E5C78B] bg-[#C6A15B]/15 text-xs font-bold text-[#E5C78B] hover:text-white transition-all shadow-sm">
                  <span>Explore All 93 Services →</span>
                </a>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs">${megaMenuCategoriesHtml}
              </div>
            </div>
          </div>

          <a href="/en/cv/index.html" class="${navCls('cv')}">CV</a>
          <a href="/en/portfolio/index.html" class="${navCls('portfolio')}">Portfolio</a>
          <a href="/en/tenders/awarded-tenders.html" class="${navCls('tenders')}">Tenders</a>
          <a href="/en/certifications/index.html" class="${navCls('certifications')}">Certifications</a>
          <a href="/en/articles/index.html" class="${navCls('articles')}">Articles</a>
          <a href="/en/contact/index.html" class="${navCls('contact')}">Contact</a>
        </nav>

        <!-- Right Controls -->
        <div class="flex items-center gap-2.5">
          <a
            href="${arCounterpartUrl}"
            class="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#C6A15B]/40 hover:border-[#E5C78B] bg-[#07130D]/90 text-xs font-bold text-[#E5C78B] hover:text-white transition-all"
            title="Switch to Arabic"
          >
            <span>🇸🇦</span>
            <span>Arabic (AR)</span>
          </a>

          <a
            href="/en/contact/index.html"
            class="hidden sm:inline-flex btn-gold text-xs py-2 px-4 font-bold items-center gap-1.5 shadow-md"
          >
            <span>Request Consultation</span>
          </a>

          <button
            type="button"
            id="mobile-menu-btn"
            class="lg:hidden p-2 rounded-xl border border-emerald-800/60 bg-[#07130D] text-[#E5C78B] hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
            aria-expanded="false"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div id="mobile-nav-drawer" class="hidden lg:hidden glass-panel border-t border-emerald-950/80 px-4 py-5 space-y-3.5 max-h-[85vh] overflow-y-auto">
        <a href="/index.html" class="flex items-center gap-2.5 text-xs sm:text-sm ${activeSection === 'home' ? 'text-[#E5C78B] font-bold' : 'text-emerald-200/90'} hover:text-[#E5C78B] py-2 transition-colors">
          <span>🏠</span>
          <span>Home</span>
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
              <span>Services Directory (93 Services)</span>
            </span>
            <svg class="accordion-chevron w-4 h-4 transition-transform duration-200 text-[#E5C78B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div id="mobile-services-accordion" class="mobile-accordion-content space-y-3 ps-2 my-2 border-s-2 border-emerald-900/60 text-xs">
            <div class="pt-1 pb-1">
              <a href="/en/services/index.html" class="block py-1.5 px-2.5 rounded-lg bg-[#C6A15B]/15 border border-[#C6A15B]/40 text-[#E5C78B] font-bold">
                View Complete Services Directory (93 Services) →
              </a>
            </div>${mobileCategoriesHtml}
          </div>
        </div>

        <a href="/en/cv/index.html" class="flex items-center gap-2.5 text-xs sm:text-sm ${activeSection === 'cv' ? 'text-[#E5C78B] font-bold' : 'text-emerald-200/90'} hover:text-[#E5C78B] py-2 transition-colors">
          <span>📄</span>
          <span>Curriculum Vitae (CV)</span>
        </a>

        <a href="/en/portfolio/index.html" class="flex items-center gap-2.5 text-xs sm:text-sm ${activeSection === 'portfolio' ? 'text-[#E5C78B] font-bold' : 'text-emerald-200/90'} hover:text-[#E5C78B] py-2 transition-colors">
          <span>💼</span>
          <span>Portfolio (25 Selected / 100+ Projects)</span>
        </a>

        <a href="/en/tenders/awarded-tenders.html" class="flex items-center gap-2.5 text-xs sm:text-sm ${activeSection === 'tenders' ? 'text-[#E5C78B] font-bold' : 'text-emerald-200/90'} hover:text-[#E5C78B] py-2 transition-colors">
          <span>🏛️</span>
          <span>Government Tenders (400+ Experience)</span>
        </a>

        <a href="/en/certifications/index.html" class="flex items-center gap-2.5 text-xs sm:text-sm ${activeSection === 'certifications' ? 'text-[#E5C78B] font-bold' : 'text-emerald-200/90'} hover:text-[#E5C78B] py-2 transition-colors">
          <span>🎓</span>
          <span>Certifications &amp; Credentials (27+)</span>
        </a>

        <a href="/en/articles/index.html" class="flex items-center gap-2.5 text-xs sm:text-sm ${activeSection === 'articles' ? 'text-[#E5C78B] font-bold' : 'text-emerald-200/90'} hover:text-[#E5C78B] py-2 transition-colors">
          <span>📚</span>
          <span>Knowledge Hub &amp; Articles (132 Guides)</span>
        </a>

        <a href="/en/contact/index.html" class="flex items-center gap-2.5 text-xs sm:text-sm ${activeSection === 'contact' ? 'text-[#E5C78B] font-bold' : 'text-emerald-200/90'} hover:text-[#E5C78B] py-2 transition-colors">
          <span>✉️</span>
          <span>Contact &amp; Proposal Inquiry</span>
        </a>

        <div class="pt-3 border-t border-emerald-950/80 flex items-center justify-between">
          <span class="text-xs text-emerald-400/80">Language:</span>
          <a href="${arCounterpartUrl}" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#C6A15B]/50 bg-[#07130D] text-xs font-bold text-[#E5C78B]">
            <span>🇸🇦</span>
            <span>Switch to Arabic (AR)</span>
          </a>
        </div>

        <div class="pt-1">
          <a href="/en/contact/index.html" class="block w-full py-2.5 px-4 text-center rounded-xl btn-gold text-xs font-bold shadow-md">
            Request Proposal &amp; Consultation
          </a>
        </div>
      </div>
    </header>`;
}

function renderEnFooter(arCounterpartUrl: string): string {
  return `    <footer class="border-t border-emerald-950/80 bg-[#050806] py-12 pb-28 lg:pb-12 text-xs text-emerald-300/60 relative z-10">
      <div class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 space-y-8">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full border border-[#C6A15B]/50 p-0.5 bg-[#07130D]">
              <img src="/assets/aistudio/image_ef5d64bf.png" alt="Youssef Ghamry Emblem" class="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <span class="font-cinzel font-bold text-white gold-gradient-text tracking-wider">YOUSSEF GHAMRY</span>
              <span class="text-slate-500"> — Full-Stack Developer &amp; Senior Bid QA Specialist</span>
            </div>
          </div>

          <div class="flex flex-wrap items-center justify-center gap-5">
            <a href="/index.html" class="hover:text-[#E5C78B] transition-colors">Home</a>
            <a href="/en/services/index.html" class="hover:text-[#E5C78B] transition-colors">Services (93)</a>
            <a href="/en/cv/index.html" class="hover:text-[#E5C78B] transition-colors">CV</a>
            <a href="/en/portfolio/index.html" class="hover:text-[#E5C78B] transition-colors">Portfolio (25 / 100+)</a>
            <a href="/en/tenders/awarded-tenders.html" class="hover:text-[#E5C78B] transition-colors">Tenders (400+)</a>
            <a href="/en/certifications/index.html" class="hover:text-[#E5C78B] transition-colors">Certifications (27+)</a>
            <a href="/en/articles/index.html" class="hover:text-[#E5C78B] transition-colors">Articles (132)</a>
            <a href="/en/contact/index.html" class="hover:text-white transition-colors">Contact</a>
            <a href="${arCounterpartUrl}" class="text-[#E5C78B] font-bold">Arabic Edition (AR)</a>
          </div>
        </div>

        <div class="pt-6 border-t border-emerald-950/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>© 2026 Youssef Ghamry. All rights reserved. Full-Stack Digital Engineering &amp; Government Tender Advisory.</div>
          <div>Cairo, Egypt · Saudi Arabia (Etimad) &amp; Global Remote Engagements</div>
        </div>
      </div>
    </footer>`;
}

// ============================================================================
// 1. FULL-WIDTH ENGLISH SERVICES HUB + ALL 93 SERVICE DETAIL PAGES
// ============================================================================
function buildEnglishServices(allServices: ServiceDef[], allArticles: EnArticleItem[]): void {
  const articleMap = new Map<string, EnArticleItem>();
  for (const a of allArticles) articleMap.set(a.slug, a);

  const serviceMap = new Map<string, ServiceDef>();
  for (const s of allServices) {
    if (!serviceMap.has(s.slug)) serviceMap.set(s.slug, s);
  }
  const uniqueServices = Array.from(serviceMap.values());

  // 1A. Generate /en/services/index.html (Full-Width Hub)
  const categoryNavHtml = CATEGORIES.map((cat) => {
    const count = uniqueServices.filter((s) => s.categoryId === cat.id).length;
    return `
              <a href="#${cat.id}" class="flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl bg-[#07130D]/80 border border-emerald-950/80 hover:border-[#C6A15B]/60 text-xs text-slate-200 hover:text-white transition-all group">
                <span class="flex items-center gap-2 truncate">
                  <span>${cat.icon}</span>
                  <span class="truncate font-medium group-hover:text-[#E5C78B] transition-colors">${escapeHtml(cat.nameEn)}</span>
                </span>
                <span class="px-2 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-500/30 text-[10px] font-mono text-emerald-300 shrink-0">${count}</span>
              </a>`;
  }).join('');

  const filterButtonsHtml = CATEGORIES.map((cat) => {
    const count = uniqueServices.filter((s) => s.categoryId === cat.id).length;
    return `<button type="button" data-service-filter="${cat.id}" class="service-hub-filter-btn px-3.5 py-2 rounded-xl border border-emerald-900/80 bg-[#07130D]/90 text-xs font-semibold text-emerald-200/90 hover:border-[#C6A15B]/60 hover:text-white transition-all cursor-pointer">${cat.icon} ${escapeHtml(cat.nameEn)} (${count})</button>`;
  }).join('\n            ');

  const categorySectionsHtml = CATEGORIES.map((cat) => {
    const catServices = uniqueServices.filter((s) => s.categoryId === cat.id);
    const cardsHtml = catServices
      .map((s) => {
        const deliverablesPreview = s.deliverablesEn
          .slice(0, 3)
          .map(
            (d) =>
              `<li class="flex items-start gap-2 text-[11px] text-emerald-200/80"><span class="text-[#C6A15B] mt-0.5">✦</span><span>${escapeHtml(d)}</span></li>`
          )
          .join('');
        const searchBlob = `${s.titleEn} ${s.headlineEn} ${s.overviewEn} ${s.badgeEn} ${cat.nameEn}`.toLowerCase();
        return `
                <article
                  data-service-card="true"
                  data-category="${cat.id}"
                  data-search="${escapeHtml(searchBlob)}"
                  class="p-6 glass-panel rounded-2xl interactive-card border border-emerald-500/20 hover:border-[#C6A15B]/50 flex flex-col justify-between group transition-all"
                >
                  <div class="space-y-3.5">
                    <div class="flex items-center justify-between gap-2">
                      <span class="px-2.5 py-1 rounded-lg bg-emerald-950/80 border border-emerald-500/30 text-[10px] font-mono font-semibold text-[#E5C78B] uppercase tracking-wider truncate">
                        ${escapeHtml(s.badgeEn)}
                      </span>
                      <span class="text-base shrink-0">${cat.icon}</span>
                    </div>
                    <h3 class="text-lg font-bold text-white font-serif group-hover:text-[#E5C78B] transition-colors leading-snug">
                      <a href="/en/services/${s.slug}.html" class="hover:underline">${escapeHtml(s.titleEn)}</a>
                    </h3>
                    <p class="text-xs text-slate-300/85 leading-relaxed line-clamp-3">
                      ${escapeHtml(s.overviewEn)}
                    </p>
                    <ul class="space-y-1.5 pt-2 border-t border-emerald-950/70">
                      ${deliverablesPreview}
                    </ul>
                  </div>
                  <div class="pt-5 mt-5 border-t border-emerald-950/80 flex items-center justify-between text-xs">
                    <span class="text-[11px] font-mono text-emerald-400/80">${s.scopeEn.length} Execution Pillars</span>
                    <a href="/en/services/${s.slug}.html" class="font-bold text-[#E5C78B] hover:text-white inline-flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform">
                      <span>Explore Service</span>
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </a>
                  </div>
                </article>`;
      })
      .join('');

    return `
            <section id="${cat.id}" data-service-section="${cat.id}" class="space-y-6 scroll-mt-36">
              <div class="p-6 sm:p-8 rounded-2xl glass-panel border border-emerald-500/25 bg-gradient-to-r from-[#07130D]/95 via-[#050806] to-[#07130D]/90 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div class="space-y-2 max-w-3xl">
                  <div class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E5C78B]">
                    <span>${cat.icon}</span>
                    <span>Practice Domain · ${catServices.length} Specialized Services</span>
                  </div>
                  <h2 class="text-2xl sm:text-3xl font-extrabold text-white font-serif">${escapeHtml(cat.nameEn)}</h2>
                  <p class="text-xs sm:text-sm text-emerald-100/75 leading-relaxed">${escapeHtml(cat.descriptionEn)}</p>
                </div>
                <a href="/en/contact/index.html" class="btn-ghost-gold text-xs py-2.5 px-5 shrink-0 self-start lg:self-center">
                  <span>Request Domain Proposal →</span>
                </a>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
                ${cardsHtml}
              </div>
            </section>`;
  }).join('');

  const servicesHubHtml = `<!doctype html>
<html lang="en" dir="ltr" class="dark">
  <head>
    <meta charset="UTF-8" />
    ${THEME_INIT_SCRIPT}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Comprehensive Services Directory (93 Specialized Services) | Youssef Ghamry</title>
    <meta name="description" content="Explore 93 specialized full-stack web engineering, enterprise ERP/CRM software, mobile app development, technical SEO, and Saudi Etimad tender consulting services by Youssef Ghamry." />
    <link rel="canonical" href="/en/services/index.html" />
    <link rel="alternate" hreflang="en" href="/en/services/index.html" />
    <link rel="alternate" hreflang="ar" href="/ar/services/index.html" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Comprehensive Services Directory (93 Services) | Youssef Ghamry" />
    <meta property="og:description" content="Full-stack web development, custom enterprise software, mobile apps, technical SEO, and zero-defect Saudi government tender consulting." />
    <meta property="og:image" content="/assets/aistudio/image_ef5d64bf.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="93 Specialized Engineering & Tender Services | Youssef Ghamry" />
    <meta name="twitter:description" content="End-to-end digital engineering and government RFP proposal services." />
    ${GOOGLE_FONTS_HTML}
    <link rel="stylesheet" href="/assets/css/style.css" />
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Comprehensive Engineering & Tender Services Directory | Youssef Ghamry",
      "description": "Catalog of 93 specialized services across web development, enterprise ERP/CRM systems, mobile apps, technical SEO, and government tender proposals.",
      "provider": {
        "@type": "Person",
        "name": "Youssef Ghamry"
      }
    }
    </script>
  </head>
  <body class="theme-gold selection:bg-emerald-600 selection:text-white bg-[#050806] text-slate-100 min-h-screen">
${renderEnHeader('services', '/ar/services/index.html', uniqueServices)}

    <!-- Full-Width Hero Section -->
    <section class="border-b border-emerald-950/70 bg-gradient-to-b from-[#07130D]/90 via-[#050806] to-[#050806] relative overflow-hidden">
      <div class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10 lg:py-16">
        <nav class="breadcrumbs flex items-center gap-2 text-xs text-emerald-300/70 mb-6" aria-label="Breadcrumb">
          <a href="/index.html" class="hover:text-[#E5C78B]">Home</a>
          <span>/</span>
          <span class="text-white font-semibold">Services Directory</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
          <div class="lg:col-span-7 space-y-5">
            <div class="flex flex-wrap items-center gap-2.5">
              <span class="badge-gold">
                <span class="w-1.5 h-1.5 rounded-full bg-[#C6A15B] animate-pulse"></span>
                <span>Full-Spectrum Practice Catalog</span>
              </span>
              <span class="badge-emerald">6 Domains · ${uniqueServices.length} Dedicated Service Pages</span>
            </div>

            <h1 class="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight font-serif leading-[1.12]">
              Engineering, Software &amp; <span class="gold-gradient-text heading-hover-glow">Tender Advisory Services</span>
            </h1>

            <p class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-[72ch]">
              Every engagement combines production-grade software engineering with disciplined government tender compliance. Browse ${uniqueServices.length} specialized services structured with clear deliverables, architectures, execution workflows, and measurable SLAs.
            </p>

            <div class="flex flex-wrap items-center gap-3.5 pt-2">
              <a href="/en/contact/index.html" class="btn-gold text-xs py-3 px-6 font-bold">
                <span>Request Custom Proposal</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
              <a href="/en/portfolio/index.html" class="btn-ghost-gold text-xs py-3 px-5">
                <span>View Portfolio (25 Selected / 100+ Projects)</span>
              </a>
              <a href="/en/tenders/awarded-tenders.html" class="btn-emerald text-xs py-3 px-5">
                <span>Government Tenders (400+ Experience)</span>
              </a>
            </div>
          </div>

          <div class="lg:col-span-5 grid grid-cols-2 gap-4">
            <div class="p-5 rounded-2xl glass-panel-elevated border border-[#C6A15B]/40 space-y-1.5">
              <div class="text-3xl sm:text-4xl font-extrabold gold-gradient-text font-mono">${uniqueServices.length}</div>
              <div class="text-xs sm:text-sm font-bold text-white">Specialized Services</div>
              <p class="text-[11px] text-emerald-200/70">Dedicated architecture, scope &amp; deliverables per service</p>
            </div>
            <div class="p-5 rounded-2xl glass-panel-elevated border border-emerald-500/30 space-y-1.5">
              <div class="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">6</div>
              <div class="text-xs sm:text-sm font-bold text-white">Practice Domains</div>
              <p class="text-[11px] text-emerald-200/70">Web, ERP/CRM, Mobile, Tenders, SEO &amp; Consulting</p>
            </div>
            <div class="p-5 rounded-2xl glass-panel-elevated border border-emerald-500/30 space-y-1.5">
              <div class="text-3xl sm:text-4xl font-extrabold text-white font-mono">100+</div>
              <div class="text-xs sm:text-sm font-bold text-white">Delivered Projects</div>
              <p class="text-[11px] text-emerald-200/70">Across Saudi Arabia, GCC, Europe &amp; North America</p>
            </div>
            <div class="p-5 rounded-2xl glass-panel-elevated border border-[#C6A15B]/40 space-y-1.5">
              <div class="text-3xl sm:text-4xl font-extrabold gold-gradient-text font-mono">400+</div>
              <div class="text-xs sm:text-sm font-bold text-white">Tenders Experience</div>
              <p class="text-[11px] text-emerald-200/70">Prepared, written, formatted &amp; compliance-reviewed</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sticky Full-Width Search & Domain Filter Bar -->
    <div class="sticky top-20 z-30 border-b border-emerald-950/80 bg-[#050806]/95 backdrop-blur-xl">
      <div class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-4 space-y-3">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div class="relative w-full lg:max-w-md">
            <input
              type="search"
              id="services-hub-search"
              placeholder="Search 93 services by technology, platform, RFP, ERP, SEO..."
              class="luxury-input text-xs py-2.5 px-4 w-full"
            />
          </div>
          <div id="services-visible-count" class="text-xs font-mono text-emerald-300/90">
            Showing all ${uniqueServices.length} specialized services across 6 domains
          </div>
        </div>

        <div class="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          <button type="button" data-service-filter="all" class="service-hub-filter-btn px-3.5 py-2 rounded-xl border border-[#C6A15B] bg-[#C6A15B]/20 text-xs font-bold text-white shrink-0 cursor-pointer">
            ✨ All Domains (${uniqueServices.length})
          </button>
          ${filterButtonsHtml}
        </div>
      </div>
    </div>

    <!-- Main Full-Width Multi-Column Workspace -->
    <main class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10 lg:py-14">
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-start">
        
        <!-- Left Sticky Domain Navigator & Advisory Rail -->
        <aside class="xl:col-span-3 xl:sticky xl:top-44 space-y-6">
          <div class="p-5 rounded-2xl glass-panel border border-emerald-500/25 space-y-3">
            <div class="text-xs font-bold uppercase tracking-wider text-[#E5C78B] font-mono">
              Practice Domain Navigator
            </div>
            <nav class="space-y-2" aria-label="Service Categories">${categoryNavHtml}
            </nav>
          </div>

          <div class="p-6 rounded-2xl glass-panel-elevated border border-[#C6A15B]/40 space-y-4">
            <div class="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-emerald-300">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Direct Technical Engagement</span>
            </div>
            <h2 class="text-base font-bold text-white font-serif">Have an Upcoming RFP Deadline or Software Build?</h2>
            <p class="text-xs text-slate-300 leading-relaxed">
              Share your scope of work or tender booklet under strict NDA for an immediate architectural and compliance review.
            </p>
            <div class="space-y-2.5 pt-1">
              <a href="/en/contact/index.html" class="w-full btn-gold text-xs py-2.5 px-4 font-bold justify-center">
                <span>Send Scope / RFP Inquiry</span>
              </a>
              <a href="https://wa.me/201503292942" target="_blank" rel="noopener noreferrer" class="w-full btn-emerald text-xs py-2.5 px-4 justify-center">
                <span>Direct WhatsApp Consultation</span>
              </a>
            </div>
          </div>
        </aside>

        <!-- Right 9-Column Wide Services Grid -->
        <div class="xl:col-span-9 space-y-16 min-w-0" id="services-domains-wrapper">${categorySectionsHtml}
        </div>

      </div>
    </main>

${renderEnFooter('/ar/services/index.html')}

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
            counter.textContent = 'Showing ' + visibleTotal + ' of ' + cards.length + ' specialized services';
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

  safeWriteEn(path.join(rootDir, 'en/services/index.html'), servicesHubHtml);

  // 1B. Generate all 93 Full-Width Individual Service Detail Pages (/en/services/<slug>.html)
  for (const s of uniqueServices) {
    const cat: CategoryDef =
      CATEGORIES.find((c) => c.id === s.categoryId) || CATEGORIES[0];
    const visuals = getServiceVisuals(s.slug, false);
    const arServiceExists = fs.existsSync(path.join(rootDir, 'ar/services', `${s.slug}.html`));
    const arUrl = arServiceExists ? `/ar/services/${s.slug}.html` : '/ar/services/index.html';

    const siblingServices = uniqueServices
      .filter((other) => other.categoryId === s.categoryId && other.slug !== s.slug)
      .slice(0, 6);

    const relatedServiceObjs = (s.relatedServices || [])
      .map((slug) => serviceMap.get(slug))
      .filter((x): x is ServiceDef => Boolean(x))
      .slice(0, 4);

    const relatedArticleObjs = (s.relatedArticles || [])
      .map((slug) => articleMap.get(slug))
      .filter((x): x is EnArticleItem => Boolean(x))
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
          `<span class="px-3 py-1 rounded-lg bg-[#07130D] border border-emerald-500/30 text-xs font-mono text-emerald-200">${escapeHtml(chip)}</span>`
      )
      .join('');

    const kpiBadgesHtml = visuals.kpiBadges
      .map(
        (kpi) => `
                <div class="p-3.5 rounded-xl glass-panel border border-emerald-500/25 text-center space-y-1">
                  <div class="text-base">${kpi.icon}</div>
                  <div class="text-lg font-extrabold text-white font-mono">${escapeHtml(kpi.value)}</div>
                  <div class="text-[10px] text-emerald-300/80 uppercase font-mono">${escapeHtml(kpi.label)}</div>
                </div>`
      )
      .join('');

    const problemsHtml = s.problemsEn
      .map(
        (p) => `
                    <li class="flex items-start gap-3 p-3.5 rounded-xl bg-[#050806]/80 border border-rose-500/20 text-xs sm:text-sm text-slate-200 leading-relaxed">
                      <span class="text-rose-400 font-bold mt-0.5 shrink-0">✕</span>
                      <span>${escapeHtml(p)}</span>
                    </li>`
      )
      .join('');

    const targetsHtml = s.targetEn
      .map(
        (t) => `
                    <li class="flex items-start gap-3 p-3.5 rounded-xl bg-[#050806]/80 border border-emerald-500/25 text-xs sm:text-sm text-slate-200 leading-relaxed">
                      <span class="text-emerald-400 font-bold mt-0.5 shrink-0">✓</span>
                      <span>${escapeHtml(t)}</span>
                    </li>`
      )
      .join('');

    const scopeHtml = s.scopeEn
      .map(
        (item, idx) => `
                <div class="p-6 rounded-2xl glass-panel border border-emerald-500/25 hover:border-[#C6A15B]/50 transition-all space-y-3 flex flex-col justify-between">
                  <div class="space-y-3">
                    <div class="flex items-center justify-between">
                      <span class="w-9 h-9 rounded-xl bg-[#C6A15B]/15 border border-[#C6A15B]/40 flex items-center justify-center text-xs font-mono font-bold text-[#E5C78B]">0${idx + 1}</span>
                      <span class="text-[10px] font-mono uppercase tracking-wider text-emerald-400/80">Scope Pillar</span>
                    </div>
                    <h3 class="text-base sm:text-lg font-bold text-white font-serif">${escapeHtml(item.title)}</h3>
                    <p class="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-[65ch]">${escapeHtml(item.desc)}</p>
                  </div>
                </div>`
      )
      .join('');

    const deliverablesHtml = s.deliverablesEn
      .map(
        (deliv, idx) => `
                <div class="p-4 sm:p-5 rounded-2xl glass-panel border border-emerald-500/20 flex items-start gap-3.5">
                  <span class="w-7 h-7 rounded-lg bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-xs font-mono font-bold text-emerald-300 shrink-0">${idx + 1}</span>
                  <div>
                    <div class="text-xs sm:text-sm font-bold text-white leading-snug">${escapeHtml(deliv)}</div>
                    <div class="text-[11px] text-emerald-300/70 mt-1 font-mono">Verified Production Deliverable</div>
                  </div>
                </div>`
      )
      .join('');

    const workflowHtml = s.workflowEn
      .map(
        (wf) => `
                <div class="p-6 rounded-2xl glass-panel border border-emerald-500/25 relative space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="px-2.5 py-1 rounded-lg bg-[#C6A15B]/20 border border-[#C6A15B]/50 text-xs font-mono font-extrabold text-[#E5C78B]">STEP ${escapeHtml(wf.step)}</span>
                    <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                  </div>
                  <h3 class="text-base font-bold text-white font-serif">${escapeHtml(wf.title)}</h3>
                  <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${escapeHtml(wf.desc)}</p>
                </div>`
      )
      .join('');

    const benefitsHtml = s.benefitsEn
      .map(
        (b) => `
                <div class="p-6 rounded-2xl glass-panel-elevated border border-[#C6A15B]/35 space-y-2.5">
                  <div class="w-9 h-9 rounded-xl bg-emerald-950/90 border border-emerald-500/30 flex items-center justify-center text-[#E5C78B] font-bold">★</div>
                  <h3 class="text-base sm:text-lg font-bold text-white font-serif">${escapeHtml(b.title)}</h3>
                  <p class="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-[65ch]">${escapeHtml(b.desc)}</p>
                </div>`
      )
      .join('');

    const faqsHtml = s.faqsEn
      .map(
        (faq) => `
                <div class="p-6 rounded-2xl glass-panel border border-emerald-500/20 space-y-2.5">
                  <h3 class="text-sm sm:text-base font-bold text-[#E5C78B] font-serif leading-snug">${escapeHtml(faq.q)}</h3>
                  <p class="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-[70ch]">${escapeHtml(faq.a)}</p>
                </div>`
      )
      .join('');

    const relatedServicesHtml = relatedServiceObjs
      .map(
        (rs) => `
                <a href="/en/services/${rs.slug}.html" class="p-5 rounded-2xl glass-panel border border-emerald-500/20 hover:border-[#C6A15B]/50 transition-all flex flex-col justify-between gap-3 group">
                  <div class="space-y-2">
                    <span class="text-[10px] font-mono uppercase tracking-wider text-emerald-400">${escapeHtml(rs.badgeEn)}</span>
                    <h4 class="text-sm font-bold text-white group-hover:text-[#E5C78B] transition-colors">${escapeHtml(rs.titleEn)}</h4>
                  </div>
                  <span class="text-xs font-bold text-[#E5C78B]">Explore Service →</span>
                </a>`
      )
      .join('');

    const relatedArticlesHtml = relatedArticleObjs
      .map(
        (ra) => `
                <a href="/en/articles/${ra.slug}.html" class="p-5 rounded-2xl glass-panel border border-emerald-500/20 hover:border-[#C6A15B]/50 transition-all flex flex-col justify-between gap-3 group">
                  <div class="space-y-2">
                    <span class="text-[10px] font-mono uppercase tracking-wider text-[#E5C78B]">${escapeHtml(ra.categoryLabel)} · ${escapeHtml(ra.readTime)}</span>
                    <h4 class="text-sm font-bold text-white group-hover:text-[#E5C78B] transition-colors line-clamp-2">${escapeHtml(ra.title)}</h4>
                  </div>
                  <span class="text-xs font-bold text-emerald-300 group-hover:text-white">Read Technical Guide →</span>
                </a>`
      )
      .join('');

    const siblingLinksHtml = siblingServices
      .map(
        (sib) => `
                <a href="/en/services/${sib.slug}.html" class="block px-3 py-2 rounded-xl bg-[#07130D]/70 border border-emerald-950 hover:border-[#C6A15B]/50 text-xs text-slate-200 hover:text-[#E5C78B] transition-colors truncate">
                  ${escapeHtml(sib.titleEn)}
                </a>`
      )
      .join('');

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: '/index.html' },
            { '@type': 'ListItem', position: 2, name: 'Services Directory', item: '/en/services/index.html' },
            { '@type': 'ListItem', position: 3, name: s.titleEn, item: `/en/services/${s.slug}.html` }
          ]
        },
        {
          '@type': 'Service',
          name: s.titleEn,
          description: s.overviewEn,
          serviceType: cat.nameEn,
          provider: {
            '@type': 'Person',
            name: 'Youssef Ghamry',
            jobTitle: 'Full-Stack Developer & Tender Proposal Specialist'
          },
          areaServed: ['SA', 'AE', 'BH', 'EG', 'QA', 'KW', 'OM', 'US', 'GB', 'DE'],
          availableLanguage: ['en', 'ar']
        },
        ...(s.faqsEn.length > 0
          ? [
              {
                '@type': 'FAQPage',
                mainEntity: s.faqsEn.map((f) => ({
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
<html lang="en" dir="ltr" class="dark">
  <head>
    <meta charset="UTF-8" />
    ${THEME_INIT_SCRIPT}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(s.titleEn)} | Youssef Ghamry</title>
    <meta name="description" content="${escapeHtml(s.overviewEn)}" />
    <link rel="canonical" href="/en/services/${s.slug}.html" />
    <link rel="alternate" hreflang="en" href="/en/services/${s.slug}.html" />
    <link rel="alternate" hreflang="ar" href="${arUrl}" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${escapeHtml(s.titleEn)} | Youssef Ghamry" />
    <meta property="og:description" content="${escapeHtml(s.overviewEn)}" />
    <meta property="og:image" content="/assets/aistudio/image_ef5d64bf.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(s.titleEn)}" />
    <meta name="twitter:description" content="${escapeHtml(s.overviewEn)}" />
    ${GOOGLE_FONTS_HTML}
    <link rel="stylesheet" href="/assets/css/style.css" />
    <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
    </script>
  </head>
  <body class="theme-gold selection:bg-emerald-600 selection:text-white bg-[#050806] text-slate-100 min-h-screen">
${renderEnHeader('services', arUrl, uniqueServices)}

    <!-- Full-Width Service Hero Split -->
    <section class="border-b border-emerald-950/70 bg-gradient-to-b from-[#07130D]/90 via-[#050806] to-[#050806] relative overflow-hidden">
      <div class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10 lg:py-16">
        <nav class="breadcrumbs flex flex-wrap items-center gap-2 text-xs text-emerald-300/70 mb-6" aria-label="Breadcrumb">
          <a href="/index.html" class="hover:text-[#E5C78B]">Home</a>
          <span>/</span>
          <a href="/en/services/index.html" class="hover:text-[#E5C78B]">Services Directory</a>
          <span>/</span>
          <a href="/en/services/index.html#${cat.id}" class="hover:text-[#E5C78B]">${escapeHtml(cat.nameEn)}</a>
          <span>/</span>
          <span class="text-white font-semibold">${escapeHtml(s.titleEn)}</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
          <!-- Left 7 Columns: Core Positioning &Readable Overview -->
          <div class="lg:col-span-7 space-y-6">
            <div class="flex flex-wrap items-center gap-2.5">
              <span class="badge-gold">
                <span class="w-1.5 h-1.5 rounded-full bg-[#C6A15B] animate-pulse"></span>
                <span>${escapeHtml(s.badgeEn)}</span>
              </span>
              <span class="badge-emerald">${cat.icon} ${escapeHtml(cat.nameEn)}</span>
            </div>

            <div class="space-y-3">
              <h1 class="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight font-serif leading-[1.12]">
                ${escapeHtml(s.titleEn)}
              </h1>
              <p class="text-base sm:text-xl font-bold gold-gradient-text font-serif max-w-[68ch]">
                ${escapeHtml(s.headlineEn)}
              </p>
            </div>

            <p class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-[72ch]">
              ${escapeHtml(s.overviewEn)}
            </p>

            <div class="flex flex-wrap items-center gap-2 pt-1">
              ${techChipsHtml}
            </div>

            <div class="flex flex-wrap items-center gap-3.5 pt-2">
              <a href="/en/contact/index.html" class="btn-gold text-xs py-3 px-6 font-bold">
                <span>Request Service Proposal</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
              <a href="https://wa.me/201503292942" target="_blank" rel="noopener noreferrer" class="btn-emerald text-xs py-3 px-5">
                <span>Direct WhatsApp Consultation</span>
              </a>
              <a href="/en/portfolio/index.html" class="btn-ghost-gold text-xs py-3 px-5">
                <span>View Delivered Work</span>
              </a>
            </div>
          </div>

          <!-- Right 5 Columns: Interactive Telemetry & Visual Card -->
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

    <!-- Full-Width Architecture Diagram Band -->
    <section class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-10">
      ${visuals.architectureDiagramHtml}
    </section>

    <!-- Full-Width 12-Column Service Workspace -->
    <main class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-12 lg:py-16">
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-start">
        
        <!-- Left Sticky Blueprint Sidebar (3 Cols) -->
        <aside class="xl:col-span-3 xl:sticky xl:top-24 space-y-6 order-2 xl:order-1">
          <div class="p-5 rounded-2xl glass-panel border border-emerald-500/25 space-y-3">
            <div class="text-xs font-bold uppercase tracking-wider text-[#E5C78B] font-mono">
              Service Blueprint Sections
            </div>
            <nav class="space-y-1.5 text-xs" aria-label="On This Page">
              <a href="#challenges-fit" class="block px-3 py-2 rounded-lg hover:bg-emerald-950/60 text-slate-300 hover:text-[#E5C78B] transition-colors">1. Challenges &amp; Client Fit</a>
              <a href="#scope-of-work" class="block px-3 py-2 rounded-lg hover:bg-emerald-950/60 text-slate-300 hover:text-[#E5C78B] transition-colors">2. Comprehensive Scope of Work</a>
              <a href="#deliverables" class="block px-3 py-2 rounded-lg hover:bg-emerald-950/60 text-slate-300 hover:text-[#E5C78B] transition-colors">3. Concrete Deliverables</a>
              <a href="#workflow" class="block px-3 py-2 rounded-lg hover:bg-emerald-950/60 text-slate-300 hover:text-[#E5C78B] transition-colors">4. 4-Phase Execution Workflow</a>
              <a href="#benefits" class="block px-3 py-2 rounded-lg hover:bg-emerald-950/60 text-slate-300 hover:text-[#E5C78B] transition-colors">5. Strategic Value &amp; Impact</a>
              <a href="#service-faqs" class="block px-3 py-2 rounded-lg hover:bg-emerald-950/60 text-slate-300 hover:text-[#E5C78B] transition-colors">6. Frequently Asked Questions</a>
              <a href="#related-ecosystem" class="block px-3 py-2 rounded-lg hover:bg-emerald-950/60 text-slate-300 hover:text-[#E5C78B] transition-colors">7. Related Services &amp; Guides</a>
            </nav>
          </div>

          <div class="p-6 rounded-2xl glass-panel-elevated border border-[#C6A15B]/40 space-y-4">
            <div class="text-xs font-mono uppercase tracking-wider text-emerald-300">NDA-Protected Advisory</div>
            <h3 class="text-base font-bold text-white font-serif">Engage Youssef Ghamry</h3>
            <p class="text-xs text-slate-300 leading-relaxed">
              Backed by 100+ delivered digital projects and 400+ tenders prepared, written, formatted &amp; reviewed across government and enterprise sectors.
            </p>
            <div class="space-y-2">
              <a href="/en/contact/index.html" class="w-full btn-gold text-xs py-2.5 px-4 font-bold justify-center">Request Formal Quote</a>
              <a href="https://wa.me/201503292942" target="_blank" rel="noopener noreferrer" class="w-full btn-emerald text-xs py-2.5 px-4 justify-center">WhatsApp Direct</a>
            </div>
          </div>

          <div class="p-5 rounded-2xl glass-panel border border-emerald-500/20 space-y-3">
            <div class="text-xs font-bold uppercase tracking-wider text-[#E5C78B] font-mono">
              More in ${escapeHtml(cat.nameEn)}
            </div>
            <div class="space-y-1.5">
              ${siblingLinksHtml}
            </div>
          </div>
        </aside>

        <!-- Main 9-Column Multi-Grid Canvas -->
        <div class="xl:col-span-9 space-y-14 min-w-0 order-1 xl:order-2">
          
          <!-- 1. Challenges vs Target Clients -->
          <section id="challenges-fit" class="grid grid-cols-1 lg:grid-cols-2 gap-6 scroll-mt-28">
            <div class="p-6 sm:p-8 rounded-2xl glass-panel border border-rose-500/25 space-y-4">
              <div class="text-xs font-mono uppercase tracking-wider text-rose-300">Risk &amp; Bottleneck Mitigation</div>
              <h2 class="text-xl sm:text-2xl font-bold text-white font-serif">Critical Challenges We Eliminate</h2>
              <ul class="space-y-2.5">${problemsHtml}
              </ul>
            </div>

            <div class="p-6 sm:p-8 rounded-2xl glass-panel border border-emerald-500/25 space-y-4">
              <div class="text-xs font-mono uppercase tracking-wider text-emerald-300">Ideal Engagement Profile</div>
              <h2 class="text-xl sm:text-2xl font-bold text-white font-serif">Who This Service Is Engineered For</h2>
              <ul class="space-y-2.5">${targetsHtml}
              </ul>
            </div>
          </section>

          <!-- 2. Scope of Work -->
          <section id="scope-of-work" class="space-y-6 scroll-mt-28">
            <div class="space-y-2">
              <div class="text-xs font-mono uppercase tracking-widest text-[#E5C78B]">Technical &amp; Operational Execution</div>
              <h2 class="text-2xl sm:text-3xl font-extrabold text-white font-serif">Comprehensive Scope of Work</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-5">${scopeHtml}
            </div>
          </section>

          <!-- 3. Concrete Deliverables -->
          <section id="deliverables" class="space-y-6 scroll-mt-28">
            <div class="space-y-2">
              <div class="text-xs font-mono uppercase tracking-widest text-emerald-400">Tangible Handover Package</div>
              <h2 class="text-2xl sm:text-3xl font-extrabold text-white font-serif">Concrete Deliverables &amp; Outputs</h2>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">${deliverablesHtml}
            </div>
          </section>

          <!-- 4. Execution Workflow -->
          <section id="workflow" class="space-y-6 scroll-mt-28">
            <div class="space-y-2">
              <div class="text-xs font-mono uppercase tracking-widest text-[#E5C78B]">Governance &amp; Delivery Cadence</div>
              <h2 class="text-2xl sm:text-3xl font-extrabold text-white font-serif">4-Phase Execution Methodology</h2>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">${workflowHtml}
            </div>
          </section>

          <!-- 5. Strategic Benefits -->
          <section id="benefits" class="space-y-6 scroll-mt-28">
            <div class="space-y-2">
              <div class="text-xs font-mono uppercase tracking-widest text-emerald-400">Executive ROI</div>
              <h2 class="text-2xl sm:text-3xl font-extrabold text-white font-serif">Strategic Value &amp; Measurable Outcomes</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">${benefitsHtml}
            </div>
          </section>

          <!-- 6. FAQs -->
          <section id="service-faqs" class="space-y-6 scroll-mt-28">
            <div class="space-y-2">
              <div class="text-xs font-mono uppercase tracking-widest text-[#E5C78B]">Clarity Before Kickoff</div>
              <h2 class="text-2xl sm:text-3xl font-extrabold text-white font-serif">Frequently Asked Questions</h2>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">${faqsHtml}
            </div>
          </section>

          <!-- 7. Related Services & Articles -->
          <section id="related-ecosystem" class="space-y-8 pt-6 border-t border-emerald-950/80 scroll-mt-28">
            <div class="space-y-4">
              <h2 class="text-xl sm:text-2xl font-bold text-white font-serif">Complementary Practice Services</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">${relatedServicesHtml}
              </div>
            </div>

            <div class="space-y-4">
              <h2 class="text-xl sm:text-2xl font-bold text-white font-serif">Related Technical &amp; Procurement Guides</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">${relatedArticlesHtml}
              </div>
            </div>
          </section>

        </div>

      </div>
    </main>

${renderEnFooter(arUrl)}

    <script src="/assets/js/main.js"></script>
  </body>
</html>`;

    safeWriteEn(path.join(rootDir, 'en/services', `${s.slug}.html`), serviceDetailHtml);
  }
}

// ============================================================================
// 2. FULL-WIDTH ENGLISH ARTICLES HUB + ALL 111 ARTICLE DETAIL PAGES
// ============================================================================
const ARTICLE_TRACKS: { key: string; label: string; icon: string }[] = [
  { key: 'tenders', label: 'Tenders & Etimad', icon: '🏛️' },
  { key: 'wordpress', label: 'WordPress', icon: '🌐' },
  { key: 'shopify', label: 'Shopify', icon: '🛍️' },
  { key: 'drupal', label: 'Drupal', icon: '💧' },
  { key: 'magento', label: 'Magento', icon: '🏪' },
  { key: 'joomla', label: 'Joomla', icon: '🧩' },
  { key: 'opencart', label: 'OpenCart', icon: '🛒' },
  { key: 'salla', label: 'Salla', icon: '🇸🇦' },
  { key: 'zid', label: 'Zid', icon: '⚡' },
  { key: 'angular', label: 'Angular', icon: '🅰️' },
  { key: 'react', label: 'React.js', icon: '⚛️' },
  { key: 'node', label: 'Node.js', icon: '🟢' },
  { key: 'javascript', label: 'JS & TS Ecosystem', icon: '🟨' },
  { key: 'php', label: 'PHP & Backend', icon: '🐘' },
  { key: 'ai', label: 'Artificial Intelligence', icon: '🤖' },
  { key: 'modern-stack', label: 'Modern Web & Cloud', icon: '☁️' },
  { key: 'releases', label: 'Official Releases', icon: '🚀' }
];

function normalizeTrackKey(rawKey: string): string {
  if (rawKey === 'reactjs') return 'react';
  if (rawKey === 'nodejs') return 'node';
  return rawKey;
}

function renderArticleSectionHtml(sec: EnArticleSection): string {
  if (sec.rawHtml) {
    return `
            <section id="${escapeHtml(sec.id)}" class="p-6 sm:p-8 rounded-2xl glass-panel border border-emerald-500/20 space-y-4 scroll-mt-28">
              <h2 class="text-xl sm:text-2xl font-bold text-white font-serif leading-snug">${escapeHtml(sec.heading)}</h2>
              <div class="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                ${sec.rawHtml}
              </div>
            </section>`;
  }

  const paragraphsHtml = (sec.paragraphs || [])
    .map(
      (p) =>
        `<p class="text-sm sm:text-base text-slate-300 leading-[1.85]">${escapeHtml(p)}</p>`
    )
    .join('\n              ');

  const takeawaysHtml =
    sec.keyTakeaways && sec.keyTakeaways.length > 0
      ? `
              <div class="p-5 rounded-xl bg-[#07130D]/90 border border-[#C6A15B]/35 space-y-2.5 mt-4">
                <div class="text-xs font-mono font-bold uppercase tracking-wider text-[#E5C78B]">Key Engineering Takeaways</div>
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

  const checklistHtml =
    sec.checklistItems && sec.checklistItems.length > 0
      ? `
              <div class="p-5 rounded-xl bg-[#050806]/90 border border-emerald-500/30 space-y-3 mt-4">
                <div class="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  ✓ ${escapeHtml(sec.codeOrChecklistTitle || 'Production Verification Checklist')}
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
              <h2 class="text-xl sm:text-2xl font-bold text-white font-serif leading-snug">${escapeHtml(sec.heading)}</h2>
              ${paragraphsHtml}
              ${takeawaysHtml}
              ${checklistHtml}
            </section>`;
}

function buildEnglishArticles(
  allArticles: EnArticleItem[],
  allServices: ServiceDef[],
  onlySlugsToWrite?: Set<string>
): void {
  const articleMap = new Map<string, EnArticleItem>();
  for (const a of allArticles) articleMap.set(a.slug, a);

  const uniqueServices = Array.from(new Map(allServices.map((s) => [s.slug, s])).values());

  // 2A. Generate /en/articles/index.html (Full-Width Hub for Published Articles Only)
  const newlyPublishedArticles = allArticles.filter((a) => Boolean(a.isNewlyPublished));

  const trackCounts = new Map<string, number>();
  for (const t of ARTICLE_TRACKS) {
    trackCounts.set(
      t.key,
      allArticles.filter((a) => normalizeTrackKey(a.categoryKey) === t.key).length
    );
  }
  const activeTracks = ARTICLE_TRACKS.filter((t) => (trackCounts.get(t.key) || 0) > 0);

  const newlyAddedFilterBtnHtml =
    newlyPublishedArticles.length > 0
      ? `<button type="button" data-article-filter="newly-added" class="article-hub-filter-btn px-3.5 py-2 rounded-xl border border-emerald-500/45 bg-emerald-950/60 text-xs font-bold text-emerald-200 hover:border-[#C6A15B]/70 hover:text-white transition-all shrink-0 cursor-pointer">Newly Added (${newlyPublishedArticles.length})</button>`
      : '';

  const filterPillsHtml = activeTracks.map((t) => {
    const cnt = trackCounts.get(t.key) || 0;
    return `<button type="button" data-article-filter="${t.key}" class="article-hub-filter-btn px-3.5 py-2 rounded-xl border border-emerald-900/80 bg-[#07130D]/90 text-xs font-semibold text-emerald-200/90 hover:border-[#C6A15B]/60 hover:text-white transition-all shrink-0 cursor-pointer">${t.icon} ${escapeHtml(t.label)} (${cnt})</button>`;
  }).join('\n          ');

  const newlyAddedSidebarBtnHtml =
    newlyPublishedArticles.length > 0
      ? `
              <button type="button" data-sidebar-track="newly-added" class="w-full flex items-center justify-between gap-2 px-3.5 py-2 rounded-xl bg-emerald-950/60 border border-[#C6A15B]/45 hover:border-[#E5C78B] text-xs text-white font-semibold transition-all cursor-pointer text-start">
                <span class="truncate">Newly Published Releases</span>
                <span class="text-[11px] font-mono tabular-nums text-[#E5C78B] shrink-0">${newlyPublishedArticles.length}</span>
              </button>`
      : '';

  const sidebarTracksHtml = activeTracks.map((t) => {
    const cnt = trackCounts.get(t.key) || 0;
    return `
              <button type="button" data-sidebar-track="${t.key}" class="w-full flex items-center justify-between gap-2 px-3.5 py-2 rounded-xl bg-[#07130D]/80 border border-emerald-950/80 hover:border-[#C6A15B]/60 text-xs text-slate-200 hover:text-white transition-all cursor-pointer text-start">
                <span class="flex items-center gap-2 truncate">
                  <span>${t.icon}</span>
                  <span class="truncate font-medium">${escapeHtml(t.label)}</span>
                </span>
                <span class="text-[11px] font-mono tabular-nums text-emerald-300 shrink-0">${cnt}</span>
              </button>`;
  }).join('');

  const newlyPublishedShowcaseHtml =
    newlyPublishedArticles.length > 0
      ? `
          <!-- Newly Published Engineering Guides Spotlight -->
          <section id="newly-published-showcase" class="mb-10 p-6 sm:p-8 rounded-2xl glass-panel-elevated border border-[#C6A15B]/40 space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-emerald-950/80">
              <div class="space-y-1.5">
                <div class="text-xs font-mono text-[#E5C78B] tracking-wide">
                  Latest Progressive Releases · ${newlyPublishedArticles.length} Newly Published Guides
                </div>
                <h2 class="text-xl sm:text-2xl font-bold text-white font-serif">
                  Newly Published JavaScript, PHP &amp; CMS Architecture Guides
                </h2>
                <p class="text-xs sm:text-sm text-slate-300 max-w-[72ch] leading-relaxed">
                  In-depth production engineering guides and head-to-head architecture comparisons—each sequentially authored, code-verified, and Technical-SEO audited.
                </p>
              </div>
              <button type="button" id="focus-newly-added-btn" class="px-4 py-2 rounded-xl border border-[#C6A15B]/50 bg-[#07130D] hover:border-[#E5C78B] text-xs font-semibold text-[#E5C78B] hover:text-white transition-colors shrink-0 cursor-pointer">
                Filter Newly Added Only (${newlyPublishedArticles.length})
              </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
              ${newlyPublishedArticles
                .map((a, idx) => {
                  const pubDate = a.publishedDate || a.updatedDate;
                  const wordsMeta = a.wordCount ? `${a.wordCount.toLocaleString()} words` : a.readTime;
                  return `
              <a href="/en/articles/${a.slug}.html" class="group rounded-xl bg-[#07130D]/90 border border-emerald-500/25 hover:border-[#C6A15B]/65 overflow-hidden flex flex-col justify-between transition-all">
                <div>
                  <div class="aspect-[16/9] bg-[#050806] border-b border-emerald-950/80 overflow-hidden">
                    <img src="${a.featuredSvg}" alt="${escapeHtml(a.featuredImageAlt || a.title)}" loading="${idx < 6 ? 'eager' : 'lazy'}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div class="p-5 space-y-2.5">
                    <div class="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-emerald-300/90 tabular-nums">
                      <span class="font-bold text-[#E5C78B]">NEW</span>
                      <span aria-hidden="true">·</span>
                      <span>${escapeHtml(a.categoryLabel)}</span>
                      <span aria-hidden="true">·</span>
                      <span>${escapeHtml(pubDate)}</span>
                      <span aria-hidden="true">·</span>
                      <span>${escapeHtml(wordsMeta)}</span>
                    </div>
                    <h3 class="text-sm sm:text-base font-bold text-white font-serif group-hover:text-[#E5C78B] transition-colors leading-snug line-clamp-2">
                      ${escapeHtml(a.title)}
                    </h3>
                    <p class="text-xs text-slate-300/85 leading-relaxed line-clamp-2">
                      ${escapeHtml(a.summary)}
                    </p>
                  </div>
                </div>
                <div class="px-5 pb-4 pt-3 border-t border-emerald-950/70 flex items-center justify-between text-xs font-semibold text-[#E5C78B] group-hover:text-white">
                  <span>${escapeHtml(a.readTime)}</span>
                  <span>Read Full Guide →</span>
                </div>
              </a>`;
                })
                .join('')}
            </div>
          </section>`
      : '';

  const articleCardsHtml = allArticles
    .map((a) => {
      const normalizedKey = normalizeTrackKey(a.categoryKey);
      const isNew = Boolean(a.isNewlyPublished);
      const searchBlob = `${a.title} ${a.summary} ${a.badge} ${a.categoryLabel} ${a.slug} ${a.primaryKeyword || ''} ${(a.secondaryKeywords || []).join(' ')} ${isNew ? 'new newly added latest progressive' : ''}`.toLowerCase();
      const cardImgAlt = a.featuredImageAlt || a.title;
      const pubDate = a.publishedDate || a.updatedDate;
      const metaLineHtml = isNew
        ? `<div class="flex flex-wrap items-center gap-1.5 text-[11px] font-mono tabular-nums">
                    <span class="font-bold text-[#E5C78B]">Newly Published</span>
                    <span class="text-slate-500" aria-hidden="true">·</span>
                    <span class="text-emerald-300">${escapeHtml(pubDate)}</span>
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
                <a href="/en/articles/${a.slug}.html" class="block relative aspect-[16/9] bg-[#07130D] border-b border-emerald-950/80 overflow-hidden">
                  <img src="${a.featuredSvg}" alt="${escapeHtml(cardImgAlt)}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </a>
                <div class="p-6 space-y-3">
                  ${metaLineHtml}
                  <h2 class="text-base sm:text-lg font-bold text-white font-serif group-hover:text-[#E5C78B] transition-colors leading-snug line-clamp-2">
                    <a href="/en/articles/${a.slug}.html" class="hover:underline">${escapeHtml(a.title)}</a>
                  </h2>
                  <p class="text-xs text-slate-300/85 leading-relaxed line-clamp-3">
                    ${escapeHtml(a.summary)}
                  </p>
                </div>
              </div>

              <div class="px-6 pb-5 pt-4 border-t border-emerald-950/80 flex items-center justify-between text-xs">
                <span class="text-[11px] font-mono text-slate-400 tabular-nums">${escapeHtml(a.readTime)}</span>
                <a href="/en/articles/${a.slug}.html" class="font-bold text-[#E5C78B] hover:text-white inline-flex items-center gap-1 shrink-0">
                  <span>Read Guide</span>
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </a>
              </div>
            </article>`;
    })
    .join('');

  const articlesHubHtml = `<!doctype html>
<html lang="en" dir="ltr" class="dark">
  <head>
    <meta charset="UTF-8" />
    ${THEME_INIT_SCRIPT}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Technical Engineering &amp; Tender Knowledge Hub (${allArticles.length} Guides) | Youssef Ghamry</title>
    <meta name="description" content="Explore ${allArticles.length} authoritative technical engineering and Saudi Etimad tender guides across JavaScript, TypeScript, PHP 8.5, Laravel, Symfony, React.js, Vue.js, Angular, Node.js, WordPress, Drupal, and Shopify." />
    <link rel="canonical" href="/en/articles/index.html" />
    <link rel="alternate" hreflang="en" href="/en/articles/index.html" />
    <link rel="alternate" hreflang="ar" href="/ar/articles/index.html" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Technical Engineering &amp; Tender Knowledge Hub (${allArticles.length} Guides) | Youssef Ghamry" />
    <meta property="og:description" content="${allArticles.length} specialized engineering blueprints and procurement compliance guides across ${activeTracks.length} technology tracks." />
    <meta property="og:image" content="/assets/aistudio/image_ef5d64bf.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${allArticles.length} Technical &amp; Tender Guides | Youssef Ghamry" />
    <meta name="twitter:description" content="In-depth guides covering JavaScript &amp; PHP ecosystems, Saudi government tenders, modern web frameworks, headless CMS, and enterprise e-commerce." />
    ${GOOGLE_FONTS_HTML}
    <link rel="stylesheet" href="/assets/css/style.css" />
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Technical Engineering & Tender Knowledge Hub | Youssef Ghamry",
      "description": "Comprehensive library of ${allArticles.length} technical engineering and government tender guides.",
      "author": {
        "@type": "Person",
        "name": "Youssef Ghamry"
      }
    }
    </script>
  </head>
  <body class="theme-gold selection:bg-emerald-600 selection:text-white bg-[#050806] text-slate-100 min-h-screen">
${renderEnHeader('articles', '/ar/articles/index.html', uniqueServices)}

    <!-- Full-Width Hero Section -->
    <section class="border-b border-emerald-950/70 bg-gradient-to-b from-[#07130D]/90 via-[#050806] to-[#050806]">
      <div class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10 lg:py-16">
        <nav class="breadcrumbs flex items-center gap-2 text-xs text-emerald-300/70 mb-6" aria-label="Breadcrumb">
          <a href="/index.html" class="hover:text-[#E5C78B]">Home</a>
          <span>/</span>
          <span class="text-white font-semibold">Knowledge Hub &amp; Articles</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
          <div class="lg:col-span-7 space-y-5">
            <div class="text-xs font-mono text-[#E5C78B] tracking-wide">
              Specialized Engineering &amp; Procurement Library · ${activeTracks.length} Tracks · ${allArticles.length} Published Guides (${newlyPublishedArticles.length} Newly Added)
            </div>

            <h1 class="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight font-serif leading-[1.12]">
              Technical Architecture &amp; <span class="gold-gradient-text heading-hover-glow">Tender Knowledge Hub</span>
            </h1>

            <p class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-[72ch]">
              Authoritative engineering blueprints, JavaScript &amp; PHP ecosystem comparisons, production troubleshooting runbooks, official release guides, and Saudi Etimad tender strategies across React.js, Vue.js, Angular, Node.js, TypeScript, PHP 8.5, Laravel, Symfony, WordPress, Drupal, Joomla, and Shopify.
            </p>
          </div>

          <div class="lg:col-span-5 grid grid-cols-2 gap-4">
            <div class="p-5 rounded-2xl glass-panel-elevated border border-[#C6A15B]/40 space-y-1">
              <div class="text-3xl sm:text-4xl font-extrabold gold-gradient-text font-mono tabular-nums">${allArticles.length}</div>
              <div class="text-xs sm:text-sm font-bold text-white">Published Guides</div>
              <p class="text-[11px] text-emerald-200/70">${newlyPublishedArticles.length} newly added &amp; SEO-audited</p>
            </div>
            <div class="p-5 rounded-2xl glass-panel-elevated border border-emerald-500/30 space-y-1">
              <div class="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono tabular-nums">${activeTracks.length}</div>
              <div class="text-xs sm:text-sm font-bold text-white">Technology Tracks</div>
              <p class="text-[11px] text-emerald-200/70">JS/TS, PHP, CMS &amp; Etimad RFPs</p>
            </div>
            <div class="p-5 rounded-2xl glass-panel-elevated border border-emerald-500/30 space-y-1">
              <div class="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">93</div>
              <div class="text-xs sm:text-sm font-bold text-white">Connected Services</div>
              <p class="text-[11px] text-emerald-200/70">Direct implementation pathways</p>
            </div>
            <div class="p-5 rounded-2xl glass-panel-elevated border border-[#C6A15B]/40 space-y-1">
              <div class="text-3xl sm:text-4xl font-extrabold gold-gradient-text font-mono tabular-nums">400+</div>
              <div class="text-xs sm:text-sm font-bold text-white">Tenders Experience</div>
              <p class="text-[11px] text-emerald-200/70">Real-world procurement governance</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sticky Full-Width Search & Track Filter Bar -->
    <div class="sticky top-20 z-30 border-b border-emerald-950/80 bg-[#050806]/95 backdrop-blur-xl">
      <div class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-4 space-y-3">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div class="relative w-full lg:max-w-md">
            <input
              type="search"
              id="articles-hub-search"
              placeholder="Search ${allArticles.length} guides by Next.js, Nuxt, Svelte, Shadcn, NestJS, Zustand, Vitest, Vite, tRPC, Laravel, Symfony, Doctrine, Pest..."
              class="luxury-input text-xs py-2.5 px-4 w-full"
            />
          </div>
          <div id="articles-visible-count" class="text-xs font-mono tabular-nums text-emerald-300/90">
            Showing all ${allArticles.length} technical &amp; tender guides
          </div>
        </div>

        <div class="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          <button type="button" data-article-filter="all" class="article-hub-filter-btn px-3.5 py-2 rounded-xl border border-[#C6A15B] bg-[#C6A15B]/20 text-xs font-bold text-white shrink-0 cursor-pointer">
            All Tracks (${allArticles.length})
          </button>
          ${newlyAddedFilterBtnHtml}
          ${filterPillsHtml}
        </div>
      </div>
    </div>

    <!-- Full-Width 12-Column Workspace -->
    <main class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10 lg:py-14">
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-start">
        
        <!-- Left Sticky Track Navigator (3 Cols) -->
        <aside class="xl:col-span-3 xl:sticky xl:top-44 space-y-6">
          <div class="p-5 rounded-2xl glass-panel border border-emerald-500/25 space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-[#E5C78B] font-mono">${activeTracks.length} Specialized Tracks</span>
              <button type="button" data-sidebar-track="all" class="text-[11px] font-mono text-emerald-400 hover:underline cursor-pointer">Reset</button>
            </div>
            <div class="space-y-1.5">${newlyAddedSidebarBtnHtml}${sidebarTracksHtml}
            </div>
          </div>

          <div class="p-6 rounded-2xl glass-panel-elevated border border-[#C6A15B]/40 space-y-3.5">
            <div class="text-xs font-mono text-emerald-300">Need Turnkey Execution?</div>
            <h2 class="text-base font-bold text-white font-serif">From Technical Architecture to Winning Tender Proposals</h2>
            <p class="text-xs text-slate-300 leading-relaxed">
              Explore our 93 specialized services or request a direct consultation on your upcoming platform or Saudi Etimad bid.
            </p>
            <div class="space-y-2 pt-1">
              <a href="/en/services/index.html" class="w-full btn-gold text-xs py-2.5 px-4 font-bold justify-center">Explore 93 Services</a>
              <a href="/en/contact/index.html" class="w-full btn-ghost-gold text-xs py-2.5 px-4 justify-center">Contact Youssef Ghamry</a>
            </div>
          </div>
        </aside>

        <!-- Right 9-Column Responsive Multi-Column Cards Grid -->
        <div class="xl:col-span-9 min-w-0">
          ${newlyPublishedShowcaseHtml}

          <div class="flex items-center justify-between pb-4 mb-5 border-b border-emerald-950/70">
            <h2 id="catalog-grid-heading" class="text-base sm:text-lg font-bold text-white font-serif">
              Complete Knowledge Catalog (${allArticles.length} Guides)
            </h2>
            <span class="text-xs font-mono text-slate-400">Sorted with newest releases first</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6" id="articles-cards-grid">${articleCardsHtml}
          </div>

          <div id="articles-empty-state" class="hidden p-12 rounded-2xl glass-panel border border-emerald-500/20 text-center space-y-3 mt-6">
            <div class="text-lg font-bold text-white font-serif">No matching guides found</div>
            <p class="text-xs text-slate-400">Try clearing your search query or switching back to All Tracks.</p>
          </div>
        </div>

      </div>
    </main>

${renderEnFooter('/ar/articles/index.html')}

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

        // Support ?track=<key> deep links from article pages (including legacy aliases)
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
              gridHeading.textContent = 'Newly Published Engineering Guides (' + visible + ')';
            } else if (activeTrack === 'all' && !q) {
              gridHeading.textContent = 'Complete Knowledge Catalog (' + cards.length + ' Guides)';
            } else {
              gridHeading.textContent = 'Filtered Guides (' + visible + ' Matching)';
            }
          }

          if (counter) {
            counter.textContent = 'Showing ' + visible + ' of ' + cards.length + ' technical & tender guides';
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

  safeWriteEn(path.join(rootDir, 'en/articles/index.html'), articlesHubHtml);

  // 2B. Generate Full-Width Individual Article Pages (/en/articles/<slug>.html)
  for (const a of allArticles) {
    if (onlySlugsToWrite && !onlySlugsToWrite.has(a.slug)) {
      continue;
    }

    const arExists = fs.existsSync(path.join(rootDir, 'ar/articles', `${a.slug}.html`));
    const arUrl = arExists ? `/ar/articles/${a.slug}.html` : '/ar/articles/index.html';

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
              <div class="text-xs font-mono uppercase tracking-wider text-[#E5C78B]">Overview &amp; Problem Context</div>
              ${a.introHtml}
            </div>`
      : '';

    const sectionsHtml = a.sections.map((sec) => renderArticleSectionHtml(sec)).join('\n');

    const commonMistakesHtml =
      a.commonMistakes && a.commonMistakes.length > 0
        ? `
            <section id="common-mistakes" class="p-6 sm:p-8 rounded-2xl glass-panel border border-rose-500/30 space-y-5 scroll-mt-28">
              <div class="space-y-1">
                <div class="text-xs font-mono uppercase tracking-widest text-rose-300">Production Pitfalls</div>
                <h2 class="text-xl sm:text-2xl font-bold text-white font-serif">Common Mistakes to Avoid</h2>
              </div>
              <div class="space-y-3.5">
                ${a.commonMistakes
                  .map(
                    (m) => `
                <div class="p-4 sm:p-5 rounded-xl bg-[#07130D]/90 border border-rose-500/20 space-y-1.5">
                  <h3 class="text-sm sm:text-base font-bold text-rose-200 font-serif">⚠️ ${escapeHtml(m.title)}</h3>
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
                <div class="text-xs font-mono uppercase tracking-widest text-[#E5C78B]">Technical Q&amp;A</div>
                <h2 class="text-xl sm:text-2xl font-bold text-white font-serif">Frequently Asked Questions</h2>
              </div>
              <div class="space-y-4">
                ${a.faqs
                  .map(
                    (f) => `
                <div class="p-4 sm:p-5 rounded-xl bg-[#07130D]/85 border border-emerald-950 space-y-2">
                  <h3 class="text-sm sm:text-base font-bold text-[#E5C78B] font-serif">${escapeHtml(f.q)}</h3>
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
              <div class="text-xs font-mono uppercase tracking-widest text-emerald-400">Executive Takeaway</div>
              <h2 class="text-xl sm:text-2xl font-bold text-white font-serif">${escapeHtml(a.conclusion.heading)}</h2>
              ${a.conclusion.paragraphs
                .map((p) => `<p class="text-sm sm:text-base text-slate-300 leading-[1.85]">${escapeHtml(p)}</p>`)
                .join('\n              ')}
            </section>`
      : '';

    const customCtaHtml = a.customCta
      ? `
            <section id="service-cta" class="p-6 sm:p-8 rounded-2xl glass-panel-elevated border-2 border-[#C6A15B]/45 bg-gradient-to-br from-[#07130D] via-[#0B1F16]/85 to-[#050806] space-y-4 scroll-mt-28">
              <div class="text-xs font-mono uppercase tracking-wider text-[#E5C78B]">${escapeHtml(a.customCta.badge)}</div>
              <h2 class="text-xl sm:text-2xl font-bold text-white font-serif leading-snug">${escapeHtml(a.customCta.heading)}</h2>
              <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">${escapeHtml(a.customCta.body)}</p>
              <div class="flex flex-wrap items-center gap-3 pt-1">
                <a href="${escapeHtml(a.customCta.primaryHref)}" class="btn-gold text-xs py-2.5 px-5 font-bold">${escapeHtml(a.customCta.primaryLabel)} →</a>
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
              <h2 class="text-base sm:text-lg font-bold text-white font-serif">Official Documentation &amp; References</h2>
              <ul class="space-y-2 text-xs sm:text-sm">
                ${a.officialSources
                  .map(
                    (src) => `
                <li class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3 rounded-xl bg-[#07130D]/75 border border-emerald-950/90">
                  <a href="${escapeHtml(src.url)}" target="_blank" rel="noopener noreferrer" class="font-semibold text-[#E5C78B] hover:underline break-all">${escapeHtml(src.title)} ↗</a>
                  <span class="text-[11px] font-mono text-emerald-400/80 shrink-0">${escapeHtml(src.publisher)}</span>
                </li>`
                  )
                  .join('')}
              </ul>
            </section>`
        : '';

    const relatedObjs = (a.relatedArticleSlugs || [])
      .map((slug) => articleMap.get(slug))
      .filter((x): x is EnArticleItem => Boolean(x))
      .slice(0, 4);

    const relatedCardsHtml = relatedObjs
      .map(
        (rel) => `
                <a href="/en/articles/${rel.slug}.html" class="p-5 rounded-2xl glass-panel border border-emerald-500/20 hover:border-[#C6A15B]/50 transition-all flex flex-col justify-between gap-3 group">
                  <div class="space-y-2">
                    <span class="text-[10px] font-mono uppercase tracking-wider text-[#E5C78B]">${escapeHtml(rel.categoryLabel)} · ${escapeHtml(rel.readTime)}</span>
                    <h3 class="text-sm font-bold text-white group-hover:text-[#E5C78B] transition-colors line-clamp-2">${escapeHtml(rel.title)}</h3>
                  </div>
                  <span class="text-xs font-bold text-emerald-300 group-hover:text-white">Read Guide →</span>
                </a>`
      )
      .join('');

    const trackPillsHtml = activeTracks.map(
      (t) =>
        `<a href="/en/articles/index.html?track=${t.key}" class="px-2.5 py-1 rounded-lg bg-[#07130D] border border-emerald-950 hover:border-[#C6A15B]/50 text-[11px] text-slate-300 hover:text-[#E5C78B] transition-colors">${t.icon} ${escapeHtml(t.label)}</a>`
    ).join('');

    const seoPageTitle = a.seoTitle ? `${a.seoTitle} | Youssef Ghamry` : `${a.title} | Youssef Ghamry`;
    const seoMetaDesc = a.metaDescription || a.summary;
    const heroImgAlt = a.featuredImageAlt || `${a.title} Architecture Diagram`;
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
            { '@type': 'ListItem', position: 1, name: 'Home', item: '/index.html' },
            { '@type': 'ListItem', position: 2, name: 'Knowledge Hub', item: '/en/articles/index.html' },
            { '@type': 'ListItem', position: 3, name: a.categoryLabel, item: `/en/articles/index.html?track=${a.categoryKey}` },
            { '@type': 'ListItem', position: 4, name: a.title, item: `/en/articles/${a.slug}.html` }
          ]
        },
        {
          '@type': 'BlogPosting',
          headline: a.title,
          description: seoMetaDesc,
          image: a.featuredSvg,
          datePublished: datePub,
          dateModified: a.updatedDate,
          inLanguage: 'en',
          articleSection: a.categoryLabel,
          ...(allKws ? { keywords: allKws.join(', ') } : {}),
          ...(a.officialSources
            ? { citation: a.officialSources.map((s) => s.url) }
            : {}),
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `/en/articles/${a.slug}.html`
          },
          author: {
            '@type': 'Person',
            name: 'Youssef Ghamry',
            jobTitle: 'Full-Stack Developer & Senior Bid QA Specialist'
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
<html lang="en" dir="ltr" class="dark">
  <head>
    <meta charset="UTF-8" />
    ${THEME_INIT_SCRIPT}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(seoPageTitle)}</title>
    <meta name="description" content="${escapeHtml(seoMetaDesc)}" />${keywordsMetaTag}
    <link rel="canonical" href="/en/articles/${a.slug}.html" />
    <link rel="alternate" hreflang="en" href="/en/articles/${a.slug}.html" />
    <link rel="alternate" hreflang="ar" href="${arUrl}" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="Youssef Ghamry" />
    <meta property="og:url" content="/en/articles/${a.slug}.html" />
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
    ${GOOGLE_FONTS_HTML}
    <link rel="stylesheet" href="/assets/css/style.css" />
    <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
    </script>
  </head>
  <body class="theme-gold selection:bg-emerald-600 selection:text-white bg-[#050806] text-slate-100 min-h-screen">
${renderEnHeader('articles', arUrl, uniqueServices)}

    <!-- Full-Width Article Hero Split -->
    <header class="border-b border-emerald-950/70 bg-gradient-to-b from-[#07130D]/90 via-[#050806] to-[#050806]">
      <div class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10 lg:py-14">
        <nav class="breadcrumbs flex flex-wrap items-center gap-2 text-xs text-emerald-300/70 mb-6" aria-label="Breadcrumb">
          <a href="/index.html" class="hover:text-[#E5C78B]">Home</a>
          <span>/</span>
          <a href="/en/articles/index.html" class="hover:text-[#E5C78B]">Knowledge Hub</a>
          <span>/</span>
          <a href="/en/articles/index.html?track=${escapeHtml(a.categoryKey)}" class="hover:text-[#E5C78B]">${escapeHtml(a.categoryLabel)}</a>
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
              <span class="px-2.5 py-1 rounded-full bg-[#07130D] border border-emerald-950 text-[11px] font-mono text-slate-300">Published ${escapeHtml(datePub)}</span>
            </div>

            <h1 class="text-2xl sm:text-4xl xl:text-5xl font-extrabold text-white tracking-tight font-serif leading-[1.15]">
              ${escapeHtml(a.title)}
            </h1>

            <p class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-[72ch]">
              ${escapeHtml(a.summary)}
            </p>

            <div class="flex flex-wrap items-center gap-4 pt-2 border-t border-emerald-950/70">
              <div class="flex items-center gap-3">
                <img src="/assets/aistudio/image_ef5d64bf.png" alt="Youssef Ghamry" class="w-10 h-10 rounded-full border border-[#C6A15B]/50 p-0.5 bg-[#07130D]" />
                <div>
                  <div class="text-xs font-bold text-white">By Youssef Ghamry</div>
                  <div class="text-[11px] text-emerald-300/80 font-mono">Full-Stack Developer · 400+ Tenders Experience</div>
                </div>
              </div>
              <a href="${arUrl}" class="ms-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#07130D] border border-[#C6A15B]/40 text-xs font-bold text-[#E5C78B] hover:text-white transition-colors">
                <span>🇸🇦</span>
                <span>Read Arabic Edition</span>
              </a>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="p-3 sm:p-4 rounded-3xl glass-panel-elevated border border-emerald-500/30 shadow-2xl space-y-3">
              <div class="rounded-2xl overflow-hidden bg-[#07130D] border border-emerald-950 aspect-[16/9]">
                <img src="${escapeHtml(a.featuredSvg)}" alt="${escapeHtml(heroImgAlt)}" class="w-full h-full object-cover" />
              </div>
              <div class="flex items-center justify-between px-1 text-[11px] font-mono text-emerald-300/80">
                <span>Track: ${escapeHtml(a.categoryLabel)}</span>
                <a href="/en/services/${a.relatedServiceSlug}.html" class="text-[#E5C78B] hover:underline font-bold">Connected Service →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Full-Width 3-Column Editorial & Technical Workspace -->
    <main class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-12 lg:py-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
        
        <!-- Left Sticky Sidebar: Table of Contents & Track Directory (3 Cols) -->
        <aside class="lg:col-span-3 lg:sticky lg:top-24 space-y-6 order-2 lg:order-1">
          <div class="p-5 rounded-2xl glass-panel border border-emerald-500/25 space-y-3 max-h-[72vh] overflow-y-auto">
            <div class="text-xs font-bold uppercase tracking-wider text-[#E5C78B] font-mono">Table of Contents</div>
            <nav class="space-y-1" aria-label="Table of Contents">${tocHtml}
              ${a.commonMistakes && a.commonMistakes.length > 0 ? `<a href="#common-mistakes" class="block px-3 py-2 rounded-lg hover:bg-emerald-950/60 text-xs font-medium text-slate-200 hover:text-[#E5C78B] transition-colors">Common Mistakes to Avoid</a>` : ''}
              ${a.faqs && a.faqs.length > 0 ? `<a href="#article-faqs" class="block px-3 py-2 rounded-lg hover:bg-emerald-950/60 text-xs font-medium text-slate-200 hover:text-[#E5C78B] transition-colors">Frequently Asked Questions</a>` : ''}
              ${a.conclusion ? `<a href="#conclusion" class="block px-3 py-2 rounded-lg hover:bg-emerald-950/60 text-xs font-medium text-slate-200 hover:text-[#E5C78B] transition-colors">Conclusion &amp; Summary</a>` : ''}
              ${a.officialSources && a.officialSources.length > 0 ? `<a href="#official-references" class="block px-3 py-2 rounded-lg hover:bg-emerald-950/60 text-xs font-medium text-slate-200 hover:text-[#E5C78B] transition-colors">Official References</a>` : ''}
              <a href="#related-guides" class="block px-3 py-2 rounded-lg hover:bg-emerald-950/60 text-xs font-medium text-slate-200 hover:text-[#E5C78B] transition-colors">Related Technical Guides</a>
            </nav>
          </div>

          <div class="p-5 rounded-2xl glass-panel border border-emerald-500/20 space-y-3">
            <div class="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">Browse All ${activeTracks.length} Tracks</div>
            <div class="flex flex-wrap gap-1.5">
              ${trackPillsHtml}
            </div>
          </div>
        </aside>

        <!-- Center Optimal-Line-Length Prose Column (6 Cols, max-w-[75ch] inside) -->
        <article class="lg:col-span-6 min-w-0 order-1 lg:order-2">
          <div class="max-w-[75ch] mx-auto space-y-8">${introSectionHtml}${sectionsHtml}${commonMistakesHtml}${faqsSectionHtml}${conclusionHtml}${customCtaHtml}${officialSourcesHtml}

            <section id="related-guides" class="pt-6 border-t border-emerald-950/80 space-y-4 scroll-mt-28">
              <div class="flex items-center justify-between gap-4">
                <h2 class="text-xl font-bold text-white font-serif">Related Guides in ${escapeHtml(a.categoryLabel)}</h2>
                <a href="/en/articles/index.html?track=${escapeHtml(a.categoryKey)}" class="text-xs font-bold text-[#E5C78B] hover:underline">View Track →</a>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">${relatedCardsHtml}
              </div>
            </section>
          </div>
        </article>

        <!-- Right Sticky Sidebar: Connected Service & Direct Consultation (3 Cols) -->
        <aside class="lg:col-span-3 lg:sticky lg:top-24 space-y-6 order-3">
          <div class="p-6 rounded-2xl glass-panel-elevated border border-[#C6A15B]/45 space-y-4">
            <div class="text-[11px] font-mono uppercase tracking-wider text-[#E5C78B]">Connected Practice Service</div>
            <h2 class="text-base font-bold text-white font-serif leading-snug">${escapeHtml(a.relatedServiceTitle)}</h2>
            <p class="text-xs text-slate-300 leading-relaxed">
              Need production implementation, root-cause diagnostics, performance hardening, or compliant technical proposal drafting for this domain?
            </p>
            <a href="/en/services/${a.relatedServiceSlug}.html" class="w-full btn-gold text-xs py-2.5 px-4 font-bold justify-center">
              <span>Explore Service Blueprint →</span>
            </a>
            ${
              a.secondaryServiceSlug && a.secondaryServiceTitle
                ? `<a href="/en/services/${a.secondaryServiceSlug}.html" class="w-full btn-ghost-gold text-xs py-2 px-4 justify-center"><span>${escapeHtml(a.secondaryServiceTitle)}</span></a>`
                : ''
            }
          </div>

          <div class="p-5 rounded-2xl glass-panel border border-emerald-500/25 space-y-3">
            <div class="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">Verified Authority</div>
            <div class="grid grid-cols-2 gap-2.5 text-center">
              <div class="p-3 rounded-xl bg-[#07130D] border border-emerald-950">
                <div class="text-lg font-extrabold gold-gradient-text font-mono">400+</div>
                <div class="text-[10px] text-slate-300">Tenders Prepared &amp; Reviewed</div>
              </div>
              <div class="p-3 rounded-xl bg-[#07130D] border border-emerald-950">
                <div class="text-lg font-extrabold text-emerald-400 font-mono">100+</div>
                <div class="text-[10px] text-slate-300">Delivered Digital Projects</div>
              </div>
            </div>
            <a href="/en/contact/index.html" class="w-full btn-emerald text-xs py-2.5 px-4 justify-center">
              <span>Request Consultation</span>
            </a>
          </div>
        </aside>

      </div>
    </main>

${renderEnFooter(arUrl)}

    <script src="/assets/js/main.js"></script>
  </body>
</html>`;

    safeWriteEn(path.join(rootDir, 'en/articles', `${a.slug}.html`), articleDetailHtml);
  }
}

// ============================================================================
// 3. PORTFOLIO PAGE (/en/portfolio/index.html) WITH MANDATORY 100+ NOTICE
// ============================================================================
const PORTFOLIO_100_NOTICE_HTML = `      <!-- Prominent Mandatory Portfolio Scope Notice (100+ Total Projects / 25 Selected) -->
      <div class="p-6 sm:p-8 rounded-3xl glass-panel-elevated border-2 border-[#C6A15B]/50 bg-gradient-to-r from-[#07130D] via-[#0B1F16]/90 to-[#07130D] shadow-[0_12px_40px_rgba(198,161,91,0.14)] space-y-3">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C6A15B]/20 border border-[#C6A15B]/50 text-xs font-mono font-bold text-[#E5C78B]">
            <span class="w-2 h-2 rounded-full bg-[#E5C78B] animate-pulse"></span>
            <span>PORTFOLIO SCOPE &amp; TRACK RECORD</span>
          </div>
          <div class="flex items-center gap-2 text-xs font-mono">
            <span class="px-3 py-1 rounded-lg bg-[#050806]/80 border border-emerald-500/30 text-emerald-300 font-bold">100+ Total Delivered Projects</span>
            <span class="px-3 py-1 rounded-lg bg-[#050806]/80 border border-[#C6A15B]/40 text-[#E5C78B] font-bold">25 Selected Showcase</span>
          </div>
        </div>
        <h2 class="text-xl sm:text-3xl font-extrabold text-white font-serif tracking-tight">
          More Than 100 Projects. Just a Glimpse of Our Work.
        </h2>
        <p class="text-xs sm:text-base text-slate-200 leading-relaxed max-w-[85ch]">
          The projects showcased in this portfolio represent only a small selection of our work. We have worked on more than 100 projects across different industries and digital solutions. The 25 projects featured here are selected examples that offer a glimpse into our experience and capabilities, not a complete record of our work.
        </p>
      </div>`;

function buildEnglishPortfolioPage(allServices: ServiceDef[]): void {
  const uniqueServices = Array.from(new Map(allServices.map((s) => [s.slug, s])).values());

  const html = `<!doctype html>
<html lang="en" dir="ltr" class="dark">
  <head>
    <meta charset="UTF-8" />
    ${THEME_INIT_SCRIPT}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio &amp; Selected Client Projects (25 Featured / 100+ Delivered) | Youssef Ghamry</title>
    <meta name="description" content="Explore 25 selected live client projects from more than 100 delivered digital solutions across Saudi Arabia, UAE, Bahrain, Egypt, USA, Canada, UK, Germany, Europe, and Asia." />
    <link rel="canonical" href="/en/portfolio/index.html" />
    <link rel="alternate" hreflang="ar" href="/ar/portfolio/index.html" />
    <link rel="alternate" hreflang="en" href="/en/portfolio/index.html" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Portfolio &amp; Client Projects — More Than 100 Projects | Youssef Ghamry" />
    <meta property="og:description" content="More Than 100 Projects. Just a Glimpse of Our Work. Explore 25 selected production platforms across 13+ countries and regions." />
    <meta property="og:image" content="/assets/aistudio/image_5875d793.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Portfolio &amp; Client Projects | Youssef Ghamry" />
    <meta name="twitter:description" content="25 selected examples from more than 100 projects delivered across corporate portals, e-commerce, ERP/CRM, POS, and mobile apps." />
    ${GOOGLE_FONTS_HTML}
    <link rel="stylesheet" href="/assets/css/style.css" />
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Portfolio & Client Projects | Youssef Ghamry",
      "description": "25 selected live projects representing a glimpse of more than 100 digital projects delivered by Youssef Ghamry.",
      "author": {
        "@type": "Person",
        "name": "Youssef Ghamry"
      }
    }
    </script>
  </head>
  <body class="theme-gold selection:bg-emerald-600 selection:text-white font-sans bg-[#050806] text-slate-100 min-h-screen">
${renderEnHeader('portfolio', '/ar/portfolio/index.html', uniqueServices)}

    <main class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10 sm:py-16 space-y-10">
      
      <!-- Page Header Banner -->
      <section class="space-y-5 border-b border-emerald-950/80 pb-8">
        <nav class="breadcrumbs flex items-center gap-2 text-xs text-emerald-300/70" aria-label="Breadcrumb">
          <a href="/index.html" class="hover:text-[#E5C78B]">Home</a>
          <span>/</span>
          <span class="text-white font-semibold">Portfolio &amp; Selected Projects</span>
        </nav>

        <div class="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
          <div class="space-y-3">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-xs font-semibold text-[#E5C78B]">
              <span class="w-2 h-2 rounded-full bg-[#10B981] animate-ping"></span>
              <span>Verified Production Systems · 25 Featured of 100+ Delivered</span>
            </div>
            <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Selected Projects &amp; <span class="gold-gradient-text heading-hover-glow">Client Work</span>
            </h1>
            <p class="text-xs sm:text-base text-emerald-200/80 max-w-[75ch] leading-relaxed">
              Verified commercial platforms, e-commerce stores, ERP/CRM/POS implementations, mobile applications, and digital growth ecosystems delivered across MENA, Europe, North America, and Asia.
            </p>
          </div>

          <!-- All 13 Verified Region Badges from web.html -->
          <div class="flex flex-wrap items-center gap-2 text-xs max-w-2xl">
            <span class="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">🇸🇦 Saudi Arabia</span>
            <span class="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">🇦🇪 UAE</span>
            <span class="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">🇧🇭 Bahrain</span>
            <span class="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">🇪🇬 Egypt</span>
            <span class="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">🇺🇸 USA</span>
            <span class="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">🇨🇦 Canada</span>
            <span class="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">🇬🇧 UK</span>
            <span class="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">🇩🇪 Germany</span>
            <span class="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">🇪🇺 Europe</span>
            <span class="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">🇯🇵 Japan</span>
            <span class="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">🇹🇷 Turkey</span>
            <span class="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">🇮🇳 India</span>
            <span class="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">🇧🇩 Bangladesh</span>
          </div>
        </div>
      </section>

${PORTFOLIO_100_NOTICE_HTML}

      <!-- Interactive Portfolio Engine Container (Rendered by main.js with all 25 verified web.html projects) -->
      <section id="interactive-portfolio-container" class="space-y-8">
      </section>

      <!-- Bottom Cross-Links -->
      <section class="p-6 sm:p-8 rounded-3xl glass-panel border border-emerald-950 bg-gradient-to-r from-[#07130D] via-[#050806] to-[#0B1F16] flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-1 text-center md:text-start">
          <h2 class="text-base sm:text-lg font-bold text-white font-serif">Looking for Government Tenders Track Record or Full CV?</h2>
          <p class="text-xs text-emerald-200/70">
            Explore 400+ Tenders Prepared, Written, Formatted &amp; Reviewed across Saudi Etimad and sovereign entities, or view the complete CV.
          </p>
        </div>
        <div class="flex flex-wrap items-center gap-3 shrink-0">
          <a href="/en/tenders/awarded-tenders.html" class="btn-gold text-xs py-2.5 px-4 font-bold flex items-center gap-1.5 shadow-sm">
            <span>Government Tenders (400+ Experience) →</span>
          </a>
          <a href="/en/cv/index.html" class="btn-ghost-gold text-xs py-2.5 px-4 flex items-center gap-1.5">
            <span>Curriculum Vitae (CV) →</span>
          </a>
        </div>
      </section>

    </main>

${renderEnFooter('/ar/portfolio/index.html')}

    <script src="/assets/js/main.js"></script>
  </body>
</html>`;

  safeWriteEn(path.join(rootDir, 'en/portfolio/index.html'), html);
}

// ============================================================================
// 4. UPDATE ENGLISH TENDERS (awarded-tenders.html, index.html, case-*.html)
// ============================================================================
const TENDERS_CLARIFICATION_AND_METRICS_HTML = `        <!-- Mandatory Professional Clarification on Tenders Track Record -->
        <div class="p-5 sm:p-6 rounded-2xl bg-amber-500/10 border border-[#C6A15B]/40 text-xs sm:text-sm text-slate-200 leading-relaxed space-y-2">
          <div class="flex items-center gap-2 font-bold text-[#E5C78B]">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span>Professional Clarification on Tenders Track Record:</span>
          </div>
          <p class="text-slate-200/95 max-w-[90ch]">
            The tenders showcased here represent only a limited selection from a broader body of experience spanning more than 400 tenders and technical projects. These examples were selected to illustrate representative proposal preparation, technical writing, compliance auditing, and solution architecture engagements linked to government ministries and sovereign authorities, and do not represent a complete list of all engagements or imply that all 400+ tenders were awarded.
          </p>
        </div>

        <!-- Synchronized Verified Metrics Banner (400+, 50+, 60+) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 pt-3">
          <div class="p-6 rounded-2xl glass-panel-elevated border border-[#C6A15B]/45 space-y-2 bg-[#07130D]/80">
            <div class="text-3xl sm:text-4xl font-extrabold text-[#E5C78B] font-mono">400+</div>
            <div class="text-sm sm:text-base font-bold text-white">400+ Tenders Prepared, Written, Formatted &amp; Reviewed</div>
            <p class="text-xs text-slate-300 leading-relaxed">
              Prepared, written, formatted, and quality-reviewed more than 400 tenders, focusing on technical proposal authoring, RFP requirements decomposition, compliance matrices, and submission completeness.
            </p>
          </div>
          <div class="p-6 rounded-2xl glass-panel-elevated border border-emerald-500/35 space-y-2 bg-[#07130D]/80">
            <div class="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">50+</div>
            <div class="text-sm sm:text-base font-bold text-white">Projects Awarded by Government Entities</div>
            <p class="text-xs text-slate-300 leading-relaxed">
              Verified experience linked to 50+ projects awarded by government ministries and public-sector authorities within the scope of bid preparation and technical proposal engagements.
            </p>
          </div>
          <div class="p-6 rounded-2xl glass-panel-elevated border border-[#C6A15B]/45 space-y-2 bg-[#07130D]/80">
            <div class="text-3xl sm:text-4xl font-extrabold text-[#E5C78B] font-mono">60+</div>
            <div class="text-sm sm:text-base font-bold text-white">Government &amp; Sovereign Entities</div>
            <p class="text-xs text-slate-300 leading-relaxed">
              Hands-on experience addressing procurement specifications, RFPs, and Etimad compliance requirements across nearly 60 government ministries, authorities, and sovereign institutions.
            </p>
          </div>
        </div>`;

function updateEnglishTenders(allServices: ServiceDef[]): void {
  const uniqueServices = Array.from(new Map(allServices.map((s) => [s.slug, s])).values());

  // 4A. Update /en/tenders/awarded-tenders.html
  const awardedPath = path.join(rootDir, 'en/tenders/awarded-tenders.html');
  const rawAwarded = fs.readFileSync(awardedPath, 'utf8');

  // Extract #tenders-grid inner cards block cleanly
  const gridStartMarker = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="tenders-grid">';
  const gridAltStartMarker = 'id="tenders-grid">';
  let cardsSectionHtml = '';
  const idxGrid = rawAwarded.indexOf(gridAltStartMarker);
  const idxConfidential = rawAwarded.indexOf('<!-- Confidentiality & Verification Boundary Notice -->');
  if (idxGrid !== -1 && idxConfidential !== -1) {
    const afterOpenTag = rawAwarded.indexOf('>', idxGrid) + 1;
    cardsSectionHtml = rawAwarded.slice(afterOpenTag, idxConfidential);
    // Strip the closing </div></div> right before Confidentiality notice
    cardsSectionHtml = cardsSectionHtml.replace(/<\/div>\s*<\/div>\s*$/, '');
  } else {
    throw new Error('Could not locate #tenders-grid in /en/tenders/awarded-tenders.html');
  }

  // Neutralize per-card status badges -> Government Tender (matching Arabic منافسة حكومية)
  cardsSectionHtml = cardsSectionHtml.replace(
    /<span class="px-2\.5 py-1 rounded-lg border text-\[11px\][^"]*">\s*<span>(?:📋|🏆|⏳)<\/span>\s*<span>(?:Proposal Prepared &amp; Submitted|Proposal Prepared & Submitted|Successfully Awarded|Under Technical Evaluation)<\/span>\s*<\/span>/g,
    `<span class="px-2.5 py-1 rounded-lg border text-[11px] flex items-center gap-1.5 border-emerald-500/40 text-emerald-300 bg-emerald-950/60 font-semibold">
              <span>🏛️</span>
              <span>Government Tender</span>
            </span>`
  );

  // Localize all stray Arabic duration strings in tender cards
  cardsSectionHtml = localizeDurationString(cardsSectionHtml);

  const newAwardedHtml = `<!doctype html>
<html lang="en" dir="ltr" class="dark">
  <head>
    <meta charset="UTF-8" />
    ${THEME_INIT_SCRIPT}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Government &amp; Technical Tenders — 400+ Tenders Prepared, Written, Formatted &amp; Reviewed | Youssef Ghamry</title>
    <meta name="description" content="400+ Tenders Prepared, Written, Formatted & Reviewed across 60+ Saudi government and sovereign entities, including 50+ projects awarded by government entities. Selected Etimad RFP case studies." />
    <link rel="canonical" href="/en/tenders/awarded-tenders.html" />
    <link rel="alternate" hreflang="en" href="/en/tenders/awarded-tenders.html" />
    <link rel="alternate" hreflang="ar" href="/ar/tenders/awarded-tenders.html" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Government &amp; Technical Tenders — 400+ Tenders Prepared, Written, Formatted &amp; Reviewed | Youssef Ghamry" />
    <meta property="og:description" content="Selected government RFP case studies representing a broader track record of 400+ tenders prepared, written, formatted, and reviewed across 60+ government entities." />
    <meta property="og:image" content="/assets/aistudio/image_ef5d64bf.png" />
    ${GOOGLE_FONTS_HTML}
    <link rel="stylesheet" href="/assets/css/style.css" />
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Government & Technical Tenders — 400+ Tenders Prepared, Written, Formatted & Reviewed | Youssef Ghamry",
      "description": "Selected Saudi government tender case studies illustrating experience across 400+ tenders prepared, written, formatted, and reviewed.",
      "provider": {
        "@type": "Person",
        "name": "Youssef Ghamry",
        "jobTitle": "Full-Stack Developer & Tender Proposal Specialist"
      }
    }
    </script>
  </head>
  <body class="theme-gold selection:bg-emerald-600 selection:text-white bg-[#050806] text-slate-100 min-h-screen">
${renderEnHeader('tenders', '/ar/tenders/awarded-tenders.html', uniqueServices)}

    <main class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10 sm:py-14 space-y-12 relative z-10">
      
      <!-- Breadcrumbs -->
      <nav class="breadcrumbs flex items-center gap-2 text-xs text-emerald-300/70" aria-label="Breadcrumb">
        <a href="/index.html" class="hover:text-[#E5C78B]">Home</a>
        <span>/</span>
        <span class="text-white font-semibold">Government &amp; Technical Tenders</span>
      </nav>

      <!-- Section Hero Header -->
      <div class="border-b border-emerald-950/60 pb-8 space-y-5">
        <div class="flex flex-wrap items-center gap-2.5">
          <span class="badge-gold">
            <span class="w-1.5 h-1.5 rounded-full bg-[#C6A15B] animate-pulse"></span>
            <span>400+ Tenders Prepared, Written, Formatted &amp; Reviewed</span>
          </span>
          <span class="badge-emerald">
            <span>Etimad Platform · Official Government RFP Specifications</span>
          </span>
        </div>

        <h1 class="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight font-serif leading-tight">
          Government &amp; <span class="gold-gradient-text heading-hover-glow">Technical Tenders</span>
        </h1>
        
        <p class="text-sm sm:text-base text-emerald-200/85 max-w-[80ch] leading-relaxed">
          Documented professional track record in preparing technical proposals, zero-defect compliance matrices, SLA governance frameworks, and solution architectures aligned with official Saudi Etimad RFP specifications across ministries and sovereign authorities.
        </p>

${TENDERS_CLARIFICATION_AND_METRICS_HTML}
      </div>

      <!-- Interactive Tenders Showcase Container -->
      <div id="tenders-showcase-container" class="space-y-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="relative w-full md:max-w-md">
            <input
              type="text"
              id="tenders-search-box"
              placeholder="Search selected case studies by title, ministry, authority, or reference..."
              class="luxury-input text-xs py-3 px-4 w-full"
            />
          </div>
          <div id="tenders-counter" class="text-xs font-mono text-emerald-300/85">
            Displaying 35 Selected Government Tender Case Studies (from 400+ Total Experience)
          </div>
        </div>

        <!-- Category Filters (Status filters removed in parity with Arabic) -->
        <div class="flex flex-wrap items-center gap-2 pt-1" id="tenders-category-filters">
          <button type="button" class="px-3.5 py-2 rounded-lg text-xs font-medium border border-emerald-500/30 bg-emerald-950/60 text-emerald-200 hover:text-white cursor-pointer" data-category="all">All Disciplines</button>
          <button type="button" class="px-3.5 py-2 rounded-lg text-xs font-medium border border-emerald-500/30 bg-[#07130D] text-emerald-300/80 hover:text-white cursor-pointer" data-category="infrastructure">Infrastructure &amp; Networks</button>
          <button type="button" class="px-3.5 py-2 rounded-lg text-xs font-medium border border-emerald-500/30 bg-[#07130D] text-emerald-300/80 hover:text-white cursor-pointer" data-category="cybersecurity">Cybersecurity &amp; SOC</button>
          <button type="button" class="px-3.5 py-2 rounded-lg text-xs font-medium border border-emerald-500/30 bg-[#07130D] text-emerald-300/80 hover:text-white cursor-pointer" data-category="enterprise-systems">Enterprise Systems &amp; AI</button>
          <button type="button" class="px-3.5 py-2 rounded-lg text-xs font-medium border border-emerald-500/30 bg-[#07130D] text-emerald-300/80 hover:text-white cursor-pointer" data-category="portals-mobile">Portals &amp; Mobile Apps</button>
          <button type="button" class="px-3.5 py-2 rounded-lg text-xs font-medium border border-emerald-500/30 bg-[#07130D] text-emerald-300/80 hover:text-white cursor-pointer" data-category="managed-services">Managed Services &amp; ITSM</button>
          <button type="button" class="px-3.5 py-2 rounded-lg text-xs font-medium border border-emerald-500/30 bg-[#07130D] text-emerald-300/80 hover:text-white cursor-pointer" data-category="specialized">Specialized &amp; Healthcare</button>
        </div>

        <!-- Full-Width 4-Column Responsive Tenders Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="tenders-grid">
${cardsSectionHtml}
        </div>
      </div>

      <!-- Confidentiality & Verification Boundary Notice -->
      <div class="p-6 rounded-2xl glass-panel border border-[#C6A15B]/30 space-y-3 bg-[#07130D]/80">
        <div class="flex items-center gap-2 text-xs font-bold text-[#E5C78B]">
          <span class="text-base">🛡️</span>
          <span>Professional Confidentiality &amp; Verification Notice</span>
        </div>
        <p class="text-xs text-emerald-200/75 leading-relaxed max-w-[95ch]">
          All technical descriptions in these selected examples are derived from official RFP tender books published on the Saudi Etimad platform and publicly accessible procurement specifications. No confidential pricing schedules, proprietary vendor rates, or sensitive internal records are disclosed.
        </p>
      </div>

    </main>

${renderEnFooter('/ar/tenders/awarded-tenders.html')}

    <script src="/assets/js/tenders-data.js"></script>
    <script src="/assets/js/tenders-showcase.js"></script>
    <script src="/assets/js/main.js"></script>
  </body>
</html>`;

  safeWriteEn(awardedPath, newAwardedHtml);

  // 4B. Update /en/tenders/index.html
  const tendersIndexHtml = `<!doctype html>
<html lang="en" dir="ltr" class="dark">
  <head>
    <meta charset="UTF-8" />
    ${THEME_INIT_SCRIPT}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tender &amp; Proposal Knowledge Hub — 400+ Tenders Experience | Youssef Ghamry</title>
    <meta name="description" content="Authoritative guides on Saudi Etimad government tenders, RFP decomposition, technical proposal writing, compliance matrices, and Bid QA—backed by 400+ tenders prepared, written, formatted & reviewed." />
    <link rel="canonical" href="/en/tenders/index.html" />
    <link rel="alternate" hreflang="en" href="/en/tenders/index.html" />
    <link rel="alternate" hreflang="ar" href="/ar/tenders/index.html" />
    ${GOOGLE_FONTS_HTML}
    <link rel="stylesheet" href="/assets/css/style.css" />
  </head>
  <body class="theme-gold selection:bg-emerald-600 selection:text-white bg-[#050806] text-slate-100 min-h-screen">
${renderEnHeader('tenders', '/ar/tenders/index.html', uniqueServices)}

    <main class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-12 space-y-14 relative z-10">
      <nav class="breadcrumbs flex items-center gap-2 text-xs text-emerald-300/70" aria-label="Breadcrumb">
        <a href="/index.html" class="hover:text-[#E5C78B]">Home</a>
        <span>/</span>
        <span class="text-white font-semibold">Tender &amp; Proposal Hub</span>
      </nav>

      <div class="border-b border-emerald-950/60 pb-8 space-y-5">
        <div class="badge-gold">400+ Tenders Prepared, Written, Formatted &amp; Reviewed</div>
        <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
          Tender &amp; Proposal <span class="gold-gradient-text heading-hover-glow">Knowledge &amp; Case Hub</span>
        </h1>
        <p class="text-sm sm:text-base text-emerald-200/80 max-w-[78ch] leading-relaxed">
          Executive guides and procurement methodologies covering RFP analysis, technical proposal authoring, zero-defect compliance matrices, Saudi Etimad submission governance, and bid evaluation scoring.
        </p>

        <div class="p-6 rounded-2xl glass-panel-elevated border border-[#C6A15B]/45 bg-[#07130D]/85 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div class="space-y-1.5">
            <div class="flex items-center gap-2 text-xs font-bold text-[#E5C78B]">
              <span>🏛️</span>
              <span>400+ Tenders Prepared, Written, Formatted &amp; Reviewed · 50+ Government Awards · 60+ Entities</span>
            </div>
            <p class="text-xs text-emerald-200/80 max-w-[80ch]">
              Explore 35 selected Saudi government tender case studies illustrating real RFP specifications, compliance matrices, and solution engineering across ministries and sovereign authorities.
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-3 shrink-0">
            <a href="/en/tenders/awarded-tenders.html" class="btn-gold text-xs py-2.5 px-5 font-bold">
              <span>Explore Government Tenders Showcase →</span>
            </a>
            <a href="/en/articles/index.html" class="btn-ghost-gold text-xs py-2.5 px-4">
              <span>All 132 Technical &amp; Tender Guides →</span>
            </a>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article class="p-6 glass-panel rounded-2xl interactive-card border border-emerald-500/20 flex flex-col justify-between group">
          <div class="space-y-3">
            <div class="flex items-center justify-between text-xs text-emerald-300/70">
              <span class="text-[#E5C78B] font-semibold uppercase tracking-wider text-[11px]">Tender Fundamentals</span>
              <span>5 min read</span>
            </div>
            <h2 class="text-lg font-bold text-white font-serif group-hover:text-[#E5C78B] transition-colors">What Is a Tender? Understanding RFPs, RFQs, and RFIs</h2>
            <p class="text-xs text-emerald-100/70 leading-relaxed">Essential distinctions between procurement solicitation types, evaluating mandatory requirements, and establishing bid viability.</p>
          </div>
          <div class="pt-5 border-t border-emerald-950/80 mt-5 flex items-center justify-between text-xs">
            <span class="text-emerald-400/60 font-mono text-[11px]">By Youssef Ghamry</span>
            <a href="/en/articles/what-is-a-tender-and-rfp.html" class="font-bold text-[#E5C78B] hover:text-white">Read Guide →</a>
          </div>
        </article>

        <article class="p-6 glass-panel rounded-2xl interactive-card border border-emerald-500/20 flex flex-col justify-between group">
          <div class="space-y-3">
            <div class="flex items-center justify-between text-xs text-emerald-300/70">
              <span class="text-[#E5C78B] font-semibold uppercase tracking-wider text-[11px]">Technical Proposal</span>
              <span>8 min read</span>
            </div>
            <h2 class="text-lg font-bold text-white font-serif group-hover:text-[#E5C78B] transition-colors">How to Write a Professional Technical Proposal for IT Tenders</h2>
            <p class="text-xs text-emerald-100/70 leading-relaxed">Mastering executive summaries, solution architectures, project governance, and work breakdowns that maximize technical evaluation scores.</p>
          </div>
          <div class="pt-5 border-t border-emerald-950/80 mt-5 flex items-center justify-between text-xs">
            <span class="text-emerald-400/60 font-mono text-[11px]">By Youssef Ghamry</span>
            <a href="/en/articles/how-to-write-a-technical-proposal.html" class="font-bold text-[#E5C78B] hover:text-white">Read Guide →</a>
          </div>
        </article>

        <article class="p-6 glass-panel rounded-2xl interactive-card border border-emerald-500/20 flex flex-col justify-between group">
          <div class="space-y-3">
            <div class="flex items-center justify-between text-xs text-emerald-300/70">
              <span class="text-[#E5C78B] font-semibold uppercase tracking-wider text-[11px]">Tender QA &amp; Compliance</span>
              <span>6 min read</span>
            </div>
            <h2 class="text-lg font-bold text-white font-serif group-hover:text-[#E5C78B] transition-colors">How to Prepare a Zero-Defect Tender Compliance Matrix</h2>
            <p class="text-xs text-emerald-100/70 leading-relaxed">Practical blueprint for building an evaluation-ready traceability matrix that eliminates fatal non-compliance disqualifications.</p>
          </div>
          <div class="pt-5 border-t border-emerald-950/80 mt-5 flex items-center justify-between text-xs">
            <span class="text-emerald-400/60 font-mono text-[11px]">By Youssef Ghamry</span>
            <a href="/en/articles/how-to-prepare-a-compliance-matrix.html" class="font-bold text-[#E5C78B] hover:text-white">Read Guide →</a>
          </div>
        </article>

        <article class="p-6 glass-panel rounded-2xl interactive-card border border-emerald-500/20 flex flex-col justify-between group">
          <div class="space-y-3">
            <div class="flex items-center justify-between text-xs text-emerald-300/70">
              <span class="text-[#E5C78B] font-semibold uppercase tracking-wider text-[11px]">Saudi Government Tenders</span>
              <span>9 min read</span>
            </div>
            <h2 class="text-lg font-bold text-white font-serif group-hover:text-[#E5C78B] transition-colors">Navigating the Saudi Etimad Platform &amp; Procurement Law</h2>
            <p class="text-xs text-emerald-100/70 leading-relaxed">Essential rules under the Saudi Government Tenders and Procurement Law, electronic submission protocols, and qualification scoring.</p>
          </div>
          <div class="pt-5 border-t border-emerald-950/80 mt-5 flex items-center justify-between text-xs">
            <span class="text-emerald-400/60 font-mono text-[11px]">By Youssef Ghamry</span>
            <a href="/en/articles/saudi-etimad-platform-bidding-guide.html" class="font-bold text-[#E5C78B] hover:text-white">Read Guide →</a>
          </div>
        </article>

        <article class="p-6 glass-panel rounded-2xl interactive-card border border-emerald-500/20 flex flex-col justify-between group">
          <div class="space-y-3">
            <div class="flex items-center justify-between text-xs text-emerald-300/70">
              <span class="text-[#E5C78B] font-semibold uppercase tracking-wider text-[11px]">Tender Strategy</span>
              <span>7 min read</span>
            </div>
            <h2 class="text-lg font-bold text-white font-serif group-hover:text-[#E5C78B] transition-colors">Bid / No-Bid Decision Framework: Maximizing Win Probability</h2>
            <p class="text-xs text-emerald-100/70 leading-relaxed">Objective framework to evaluate qualification bars, team capacity, and commercial viability before allocating proposal resources.</p>
          </div>
          <div class="pt-5 border-t border-emerald-950/80 mt-5 flex items-center justify-between text-xs">
            <span class="text-emerald-400/60 font-mono text-[11px]">By Youssef Ghamry</span>
            <a href="/en/articles/bid-no-bid-assessment-strategy.html" class="font-bold text-[#E5C78B] hover:text-white">Read Guide →</a>
          </div>
        </article>

        <article class="p-6 glass-panel rounded-2xl interactive-card border border-emerald-500/20 flex flex-col justify-between group">
          <div class="space-y-3">
            <div class="flex items-center justify-between text-xs text-emerald-300/70">
              <span class="text-[#E5C78B] font-semibold uppercase tracking-wider text-[11px]">Bid Disqualification QA</span>
              <span>6 min read</span>
            </div>
            <h2 class="text-lg font-bold text-white font-serif group-hover:text-[#E5C78B] transition-colors">Fatal Proposal Flaws: Top Reasons Technical Offers Are Disqualified</h2>
            <p class="text-xs text-emerald-100/70 leading-relaxed">Real-world audit of frequent rejection causes—from missing compliance certificates to pricing references inside technical volumes.</p>
          </div>
          <div class="pt-5 border-t border-emerald-950/80 mt-5 flex items-center justify-between text-xs">
            <span class="text-emerald-400/60 font-mono text-[11px]">By Youssef Ghamry</span>
            <a href="/en/articles/avoiding-mandatory-tender-rejection.html" class="font-bold text-[#E5C78B] hover:text-white">Read Guide →</a>
          </div>
        </article>
      </div>
    </main>

${renderEnFooter('/ar/tenders/index.html')}

    <script src="/assets/js/main.js"></script>
  </body>
</html>`;

  safeWriteEn(path.join(rootDir, 'en/tenders/index.html'), tendersIndexHtml);

  // 4C. Update all 35 /en/tenders/case-*.html pages cleanly
  const enTendersDir = path.join(rootDir, 'en/tenders');
  const caseFiles = fs
    .readdirSync(enTendersDir)
    .filter((f) => f.startsWith('case-') && f.endsWith('.html'));

  for (const file of caseFiles) {
    const absCase = path.join(enTendersDir, file);
    let html = fs.readFileSync(absCase, 'utf8');
    const arCaseExists = fs.existsSync(path.join(rootDir, 'ar/tenders', file));
    const arCaseUrl = arCaseExists ? `/ar/tenders/${file}` : '/ar/tenders/awarded-tenders.html';

    // Replace everything from <body ...> up to <main ...> with clean header
    const bodyIdx = html.indexOf('<body');
    const mainIdx = html.indexOf('<main');
    if (bodyIdx !== -1 && mainIdx !== -1) {
      const bodyOpenEnd = html.indexOf('>', bodyIdx) + 1;
      html =
        html.slice(0, bodyOpenEnd) +
        '\n' +
        renderEnHeader('tenders', arCaseUrl, uniqueServices) +
        '\n\n    ' +
        html.slice(mainIdx);
    }

    // Replace <footer ...>...</body> with clean footer + scripts
    const footerIdx = html.indexOf('<footer');
    const bodyCloseIdx = html.lastIndexOf('</body>');
    if (footerIdx !== -1 && bodyCloseIdx !== -1) {
      html =
        html.slice(0, footerIdx) +
        renderEnFooter(arCaseUrl) +
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
      .replace(/>Awarded Tenders<\/a>/g, '>Government &amp; Technical Tenders</a>')
      .replace(
        /Proposal Prepared &amp; Submitted|Proposal Prepared & Submitted|Successfully Awarded|Under Technical Evaluation/g,
        'Government Tender'
      )
      .replace(/>Award Status<\/span>/g, '>Engagement Scope</span>');

    html = localizeDurationString(html);

    safeWriteEn(absCase, html);
  }
}

// ============================================================================
// 5. UPDATE ENGLISH HOMEPAGE (/index.html & /en/index.html) & CLEAN OTHER EN PAGES
// ============================================================================
function updateEnglishHomeAndStandalonePages(allServices: ServiceDef[], totalArticleCount = 117): void {
  const uniqueServices = Array.from(new Map(allServices.map((s) => [s.slug, s])).values());

  const rootIndexPath = path.join(rootDir, 'index.html');
  let homeHtml = fs.readFileSync(rootIndexPath, 'utf8');

  // 5A. Replace stacked Header + 3 duplicate <nav class="fixed bottom-0 ..."> on /index.html
  const bodyIdx = homeHtml.indexOf('<body');
  const mainIdx = homeHtml.indexOf('<!-- Main Content Container -->');
  if (bodyIdx !== -1 && mainIdx !== -1) {
    const bodyOpenEnd = homeHtml.indexOf('>', bodyIdx) + 1;
    homeHtml =
      homeHtml.slice(0, bodyOpenEnd) +
      '\n' +
      renderEnHeader('home', '/ar/index.html', uniqueServices) +
      '\n\n    ' +
      homeHtml.slice(mainIdx);
  }

  // Replace Footer cleanly while keeping tenders-data.js, tenders-showcase.js, main.js
  const footerIdx = homeHtml.indexOf('<!-- Luxury Footer -->');
  const bodyCloseIdx = homeHtml.lastIndexOf('</body>');
  if (footerIdx !== -1 && bodyCloseIdx !== -1) {
    homeHtml =
      homeHtml.slice(0, footerIdx) +
      renderEnFooter('/ar/index.html') +
      '\n\n    <script src="/assets/js/tenders-data.js"></script>\n    <script src="/assets/js/tenders-showcase.js"></script>\n    <script src="/assets/js/main.js"></script>\n  ' +
      homeHtml.slice(bodyCloseIdx);
  }

  // Update Hero CTA & Metrics on /index.html
  homeHtml = homeHtml
    .replace(
      '29+ live client deployments across 15+ countries.',
      '100+ delivered digital projects and 400+ tenders prepared, written, formatted & reviewed.'
    )
    .replace('<span>View Portfolio (29 Projects)</span>', '<span>View Portfolio (25 Selected / 100+ Projects)</span>')
    .replace(
      /<div class="text-2xl lg:text-3xl font-extrabold gold-gradient-text font-serif">200\+<\/div>\s*<div class="text-\[11px\] text-emerald-300\/70 font-medium mt-1">Saudi & IT Tenders<\/div>/,
      `<div class="text-2xl lg:text-3xl font-extrabold gold-gradient-text font-serif">400+</div>
                <div class="text-[11px] text-emerald-300/70 font-medium mt-1">Tenders Prepared &amp; Reviewed</div>`
    )
    .replace(
      /<div class="text-2xl lg:text-3xl font-extrabold text-white font-serif">29\+<\/div>\s*<div class="text-\[11px\] text-emerald-300\/70 font-medium mt-1">Client Deployments<\/div>/,
      `<div class="text-2xl lg:text-3xl font-extrabold text-white font-serif">100+</div>
                <div class="text-[11px] text-emerald-300/70 font-medium mt-1">Delivered Digital Projects</div>`
    )
    .replace(
      /<div class="text-2xl lg:text-3xl font-extrabold text-white font-serif">15\+<\/div>\s*<div class="text-\[11px\] text-emerald-300\/70 font-medium mt-1">Global Countries<\/div>/,
      `<div class="text-2xl lg:text-3xl font-extrabold text-white font-serif">60+</div>
                <div class="text-[11px] text-emerald-300/70 font-medium mt-1">Government &amp; Sovereign Entities</div>`
    )
    .replace('<span>View Full 50+ Services Catalog</span>', '<span>View Full 93 Services Catalog</span>');

  // Fix duplicate id="tenders" on Section 3 Knowledge Hub -> id="knowledge-hub" and link to /en/articles/index.html
  homeHtml = homeHtml
    .replace(
      '<section id="tenders" class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">',
      '<section id="knowledge-hub" class="py-20 w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 space-y-12">'
    )
    .replace(
      /<a href="\/(?:en\/tenders\/index|en\/articles\/index)\.html" class="btn-ghost-gold text-xs">\s*<span>Explore All (?:\d+\s+)?Knowledge Articles<\/span>/,
      `<a href="/en/articles/index.html" class="btn-ghost-gold text-xs">\n            <span>Explore All ${totalArticleCount} Knowledge Articles</span>`
    );

  // Update Section 4 (#portfolio) on /index.html with wide container, 25 selected / 100+ notice
  homeHtml = homeHtml
    .replace(
      '<section id="portfolio" class="py-20 border-t border-emerald-950/60 bg-[#07130D]/40">\n        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">',
      '<section id="portfolio" class="py-20 border-t border-emerald-950/60 bg-[#07130D]/40">\n        <div class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 space-y-10">'
    )
    .replace(
      '29 verified projects spanning public-sector Saudi tender submissions, international corporate platforms, e-commerce stores, and custom software.',
      '25 selected live projects from more than 100 delivered digital solutions across corporate platforms, e-commerce stores, ERP/CRM/POS systems, and mobile apps.'
    );

  if (!homeHtml.includes('More Than 100 Projects. Just a Glimpse of Our Work.')) {
    homeHtml = homeHtml.replace(
      '<!-- Interactive Portfolio Engine Container -->',
      `${PORTFOLIO_100_NOTICE_HTML}\n\n          <!-- Interactive Portfolio Engine Container -->`
    );
  }

  // Replace Section 5 (#tenders) header + stats banner + neutralize featured card status pills
  const sec5Start = homeHtml.indexOf('<section id="tenders" class="py-20 border-t border-emerald-950/60 bg-[#050806]/90">');
  const sec5GridMarker = '<!-- Featured Tenders Grid (6 Top Flagship Cards with Instant Modal Triggers) -->';
  const sec5GridIdx = homeHtml.indexOf(sec5GridMarker);
  if (sec5Start !== -1 && sec5GridIdx !== -1) {
    const newSec5Top = `<section id="tenders" class="py-20 border-t border-emerald-950/60 bg-[#050806]/90">
        <div class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 space-y-10">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div class="space-y-2">
                <div class="text-xs font-semibold uppercase tracking-widest text-[#E5C78B] flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#C6A15B] animate-pulse"></span>
                  <span>400+ Tenders Prepared, Written, Formatted &amp; Reviewed</span>
                </div>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-serif">
                  Government &amp; <span class="gold-gradient-text heading-hover-glow">Technical Tenders</span>
                </h2>
                <p class="text-sm text-emerald-200/75 max-w-[75ch] leading-relaxed">
                  Selected government and sovereign tender engagements illustrating technical proposal authoring, RFP requirements decomposition, zero-defect compliance matrices, and SLA governance under Saudi Etimad specifications.
                </p>
              </div>

              <div class="flex items-center gap-3 shrink-0">
                <a href="/en/tenders/awarded-tenders.html" class="btn-gold text-xs py-2.5 px-5 font-bold flex items-center gap-2">
                  <span>Explore Tenders Showcase (400+ Experience)</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
              </div>
            </div>

${TENDERS_CLARIFICATION_AND_METRICS_HTML}

            `;
    homeHtml = homeHtml.slice(0, sec5Start) + newSec5Top + homeHtml.slice(sec5GridIdx);
  }

  // Neutralize the 6 featured tender cards on /index.html
  homeHtml = homeHtml
    .replace(
      /<span class="px-2\.5 py-1 rounded-lg border text-\[11px\][^"]*">\s*<span>(?:📋|🏆)<\/span>\s*<span>(?:Under Evaluation|Successfully Awarded)<\/span>\s*<\/span>/g,
      `<span class="px-2.5 py-1 rounded-lg border text-[11px] border-emerald-500/40 text-emerald-300 bg-emerald-950/60 font-semibold flex items-center gap-1.5">
                      <span>🏛️</span>
                      <span>Government Tender</span>
                    </span>`
    )
    .replace(/>Awarded Contract<\/span>/g, '>Mobile &amp; Portal Ops</span>')
    .replace(
      '<span>View Full 34+ Tenders Portfolio with Search & Filters</span>',
      '<span>Explore All Selected Government Tender Case Studies (400+ Experience)</span>'
    );

  // Update Section 6 (#resume) metric 200+ -> 400+
  homeHtml = homeHtml.replace(
    /<div class="text-xl font-extrabold text-\[#E5C78B\] font-mono">200\+<\/div>\s*<div class="font-bold text-white">Evaluated & Reviewed Bids<\/div>/,
    `<div class="text-xl font-extrabold text-[#E5C78B] font-mono">400+</div>
              <div class="font-bold text-white">400+ Tenders Prepared, Written, Formatted &amp; Reviewed</div>`
  );

  homeHtml = homeHtml
    .replace(/>Articles \(\d+\)<\/a>/g, `>Articles (${totalArticleCount})</a>`)
    .replace(/>العربية \(RTL\)<\/a>/g, '>Arabic (AR)</a>')
    .replace(/youssefghamry\.work@gmail\.com|1YoussefGhamry@gmail\.com/gi, '1youssefghamry@gmail.com');

  safeWriteEn(rootIndexPath, homeHtml);

  // Sync /en/index.html cleanly with canonical /en/index.html
  const enIndexHtml = homeHtml.replace(
    '<link rel="canonical" href="/index.html" />',
    '<link rel="canonical" href="/en/index.html" />'
  );
  safeWriteEn(path.join(rootDir, 'en/index.html'), enIndexHtml);

  // Clean standalone English pages (/en/cv/index.html, /en/certifications/index.html, /en/contact/index.html)
  const standaloneTargets: { rel: string; sec: ActiveNavSection; arUrl: string }[] = [
    { rel: 'en/cv/index.html', sec: 'cv', arUrl: '/ar/cv/index.html' },
    { rel: 'en/certifications/index.html', sec: 'certifications', arUrl: '/ar/certifications/index.html' },
    { rel: 'en/contact/index.html', sec: 'contact', arUrl: '/ar/contact/index.html' }
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
        renderEnHeader(t.sec, t.arUrl, uniqueServices) +
        '\n\n    ' +
        html.slice(mIdx);
    }
    const fIdx = html.indexOf('<footer');
    const bcIdx = html.lastIndexOf('</body>');
    if (fIdx !== -1 && bcIdx !== -1) {
      // Preserve any inline scripts between </footer> and </body> except duplicate main.js
      const afterFooterClose = html.indexOf('</footer>', fIdx);
      const tailScripts =
        afterFooterClose !== -1 ? html.slice(afterFooterClose + '</footer>'.length, bcIdx) : '';
      const hasMainJs = tailScripts.includes('/assets/js/main.js');
      html =
        html.slice(0, fIdx) +
        renderEnFooter(t.arUrl) +
        '\n' +
        tailScripts +
        (hasMainJs ? '' : '\n    <script src="/assets/js/main.js"></script>\n  ') +
        html.slice(bcIdx);
    }
    // Update any outdated 200+ tenders mention on English CV snapshot if present
    if (t.sec === 'cv') {
      html = html.replace(/200\+\s*Saudi &amp; Regional Tenders/g, '400+ Tenders Prepared &amp; Reviewed');
    }
    // Strip unused Arabic fields from inline CERTIFICATES_DATA on English certifications page
    if (t.sec === 'certifications') {
      html = html.replace(
        /const CERTIFICATES_DATA = (\[[\s\S]*?\]);/,
        (_match, jsonArr) => {
          try {
            const parsed = JSON.parse(jsonArr) as Array<Record<string, unknown>>;
            const cleaned = parsed.map((obj) => {
              const copy: Record<string, unknown> = {};
              for (const [k, v] of Object.entries(obj)) {
                if (!k.endsWith('Ar')) copy[k] = v;
              }
              return copy;
            });
            return `const CERTIFICATES_DATA = ${JSON.stringify(cleaned)};`;
          } catch {
            return _match;
          }
        }
      );
    }
    html = html.replace(/youssefghamry\.work@gmail\.com|1YoussefGhamry@gmail\.com/gi, '1youssefghamry@gmail.com');
    safeWriteEn(abs, html);
  }
}

// ============================================================================
// 6. APPEND NEW ENGLISH ARTICLE URLS TO /public/sitemap.xml (WITHOUT TOUCHING /ar/)
// ============================================================================
function syncEnglishSitemap(allArticles: EnArticleItem[]): void {
  const sitemapPath = path.join(rootDir, 'public/sitemap.xml');
  if (!fs.existsSync(sitemapPath)) return;
  let xml = fs.readFileSync(sitemapPath, 'utf8');
  const additions: string[] = [];

  for (const a of allArticles) {
    const relLoc = `/en/articles/${a.slug}.html`;
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
    safeWriteEn(sitemapPath, xml);
  }
}

// ============================================================================
// MAIN ORCHESTRATOR
// ============================================================================
export function publishProgressiveEnglishArticlesOnly(): {
  legacyCount: number;
  progressivePublishedSlugs: string[];
  totalPublishedCount: number;
} {
  const legacyArticles = buildAll111EnglishArticles(rootDir);
  const legacySlugs = new Set(legacyArticles.map((a) => a.slug));
  const publishedProgressive = getPublishedProgressiveArticles(rootDir, legacySlugs);
  const progressiveSlugs = new Set(publishedProgressive.map((a) => a.slug));

  const allPublishedArticles = [...publishedProgressive, ...legacyArticles];
  const allServices = generateRemainingServices();

  // Write ONLY newly published progressive article HTML files + refresh Hub, English Home count & Sitemap
  buildEnglishArticles(allPublishedArticles, allServices, progressiveSlugs);
  updateEnglishHomeAndStandalonePages(allServices, allPublishedArticles.length);
  syncEnglishSitemap(allPublishedArticles);

  return {
    legacyCount: legacyArticles.length,
    progressivePublishedSlugs: Array.from(progressiveSlugs),
    totalPublishedCount: allPublishedArticles.length
  };
}

function main(): void {
  const isProgressiveOnly = process.argv.includes('--progressive-only');
  if (isProgressiveOnly) {
    console.log('Running Progressive Content Publisher (English Only — Existing Articles Untouched)...');
    const res = publishProgressiveEnglishArticlesOnly();
    console.log(
      `✅ Published ${res.progressivePublishedSlugs.length} progressive guide(s) [${res.progressivePublishedSlugs.join(', ')}]. Total live English guides: ${res.totalPublishedCount} (${res.legacyCount} existing preserved + ${res.progressivePublishedSlugs.length} newly published).`
    );
    return;
  }

  console.log('1. Generating English SVG architecture illustrations...');
  generateEnglishArticleSvgs(rootDir);

  console.log('2. Building existing English articles + audited Published progressive articles...');
  const legacyArticles = buildAll111EnglishArticles(rootDir);
  const legacySlugs = new Set(legacyArticles.map((a) => a.slug));
  const publishedProgressive = getPublishedProgressiveArticles(rootDir, legacySlugs);
  const allArticles = [...publishedProgressive, ...legacyArticles];
  console.log(
    `   -> Loaded ${legacyArticles.length} existing + ${publishedProgressive.length} published progressive = ${allArticles.length} total English articles.`
  );

  console.log('3. Loading all 93 specialized services...');
  const allServices = generateRemainingServices();
  const uniqueServiceCount = new Set(allServices.map((s) => s.slug)).size;
  console.log(`   -> Loaded ${uniqueServiceCount} unique services.`);

  console.log('4. Rendering Full-Width English Services Hub + 93 Service Detail Pages...');
  buildEnglishServices(allServices, allArticles);

  console.log('5. Rendering Full-Width English Articles Hub + Article Detail Pages...');
  buildEnglishArticles(allArticles, allServices);

  console.log('6. Rendering Full-Width English Portfolio Page (25 web.html projects + 100+ Notice)...');
  buildEnglishPortfolioPage(allServices);

  console.log('7. Updating English Tenders (400+ phrase, 50+/60+ metrics, neutral badges, case studies)...');
  updateEnglishTenders(allServices);

  console.log('8. Updating English Homepage (/index.html & /en/index.html) & standalone EN pages...');
  updateEnglishHomeAndStandalonePages(allServices, allArticles.length);

  console.log('9. Updating /public/sitemap.xml with newly synced English article URLs...');
  syncEnglishSitemap(allArticles);

  console.log('✅ English Version Enhancement & Synchronization completed with ZERO changes to /ar/!');
}

const isDirectExecution =
  process.argv[1] && path.resolve(process.argv[1]) === path.resolve(__filename);
if (isDirectExecution) {
  main();
}

