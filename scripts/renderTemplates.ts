import { CATEGORIES } from './servicesData.js';
import { ServiceDef } from './servicesData.js';
import { ArticleDef } from './articlesData.js';

export function escapeHtml(str: string): string {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function renderHeader(lang: 'en' | 'ar', currentPath: string, allServices: ServiceDef[]): string {
  const isAr = lang === 'ar';
  const homeUrl = isAr ? '/ar/index.html' : '/index.html';
  const servicesUrl = isAr ? '/ar/services/index.html' : '/en/services/index.html';
  const tendersUrl = isAr ? '/ar/tenders/awarded-tenders.html' : '/en/tenders/awarded-tenders.html';
  const portfolioUrl = isAr ? '/ar/index.html#portfolio' : '/index.html#portfolio';
  const certsUrl = isAr ? '/ar/certifications/index.html' : '/en/certifications/index.html';
  const articlesUrl = isAr ? '/ar/articles/index.html' : '/en/articles/index.html';
  const cvUrl = isAr ? '/ar/index.html#resume' : '/index.html#resume';
  const contactUrl = isAr ? '/ar/index.html#contact' : '/index.html#contact';

  // Toggle url with precision
  let langToggleUrl = isAr ? '/index.html' : '/ar/index.html';
  if (currentPath.includes('/services/')) {
    const filename = currentPath.split('/').pop() || 'index.html';
    langToggleUrl = isAr ? `/en/services/${filename}` : `/ar/services/${filename}`;
  } else if (currentPath.includes('/articles/')) {
    const filename = currentPath.split('/').pop() || 'index.html';
    langToggleUrl = isAr ? `/en/articles/${filename}` : `/ar/articles/${filename}`;
  } else if (currentPath.includes('/certifications/')) {
    langToggleUrl = isAr ? '/en/certifications/index.html' : '/ar/certifications/index.html';
  } else if (currentPath.includes('/tenders/')) {
    langToggleUrl = isAr ? '/en/tenders/awarded-tenders.html' : '/ar/tenders/awarded-tenders.html';
  }

  // Purely technical services categories - excluding tenders, projects, certs per user specification
  const serviceCategoriesOnly = CATEGORIES.filter((c) => c.id !== 'tender-services');

  // Mega menu columns (5 purely technical service categories)
  const megaMenuCategoriesHtml = serviceCategoriesOnly.map((cat) => {
    const catName = isAr ? cat.nameAr : cat.nameEn;
    const catServices = allServices.filter((s) => s.categoryId === cat.id).slice(0, 5); // top 5 highlighted

    const serviceLinks = catServices
      .map((s) => {
        const title = isAr ? s.titleAr : s.titleEn;
        const sUrl = isAr ? `/ar/services/${s.slug}.html` : `/en/services/${s.slug}.html`;
        return `
          <a href="${sUrl}" class="mega-menu-link">
            <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60 transition-all"></span>
            <span class="truncate">${escapeHtml(title)}</span>
          </a>
        `;
      })
      .join('');

    return `
      <div class="space-y-2 p-3 rounded-xl bg-[#07130D]/70 border border-emerald-950/80 hover:border-emerald-500/30 transition-colors">
        <div class="flex items-center gap-2 pb-1.5 border-b border-emerald-950/80">
          <span class="text-base">${cat.icon}</span>
          <span class="text-xs font-bold text-white tracking-wide truncate">${escapeHtml(catName)}</span>
        </div>
        <div class="space-y-1">
          ${serviceLinks}
        </div>
      </div>
    `;
  }).join('');

  // Mobile accordion content
  const mobileAccordionCategoriesHtml = CATEGORIES.map((cat) => {
    const catName = isAr ? cat.nameAr : cat.nameEn;
    const catServices = allServices.filter((s) => s.categoryId === cat.id).slice(0, 4);

    const serviceLinks = catServices
      .map((s) => {
        const title = isAr ? s.titleAr : s.titleEn;
        const sUrl = isAr ? `/ar/services/${s.slug}.html` : `/en/services/${s.slug}.html`;
        return `
          <a href="${sUrl}" class="block text-xs text-emerald-300/80 hover:text-[#E5C78B] py-1 ps-2 border-s border-emerald-900/60">
            ${escapeHtml(title)}
          </a>
        `;
      })
      .join('');

    return `
      <div class="space-y-1.5">
        <div class="text-xs font-bold text-[#E5C78B] flex items-center gap-1.5">
          <span>${cat.icon}</span>
          <span>${escapeHtml(catName)}</span>
        </div>
        <div class="space-y-1 ms-4">
          ${serviceLinks}
        </div>
      </div>
    `;
  }).join('');

  return `
    <header class="sticky top-0 z-50 glass-panel border-b border-emerald-950/60 bg-[#050806]/95 backdrop-blur-xl">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
        
        <!-- Brand Logo / Emblem -->
        <a href="${homeUrl}" class="flex items-center gap-3 text-white no-underline group flex-shrink-0">
          <div class="relative w-10 h-10 rounded-full border border-[#C6A15B]/50 p-0.5 bg-[#07130D] group-hover:border-[#E5C78B] transition-colors">
            <img src="/assets/aistudio/image_ef5d64bf.png" alt="${isAr ? 'شعار يوسف غمري' : 'Youssef Ghamry Emblem'}" class="w-full h-full object-cover rounded-full" />
          </div>
          <div>
            <div class="font-cinzel text-sm sm:text-base tracking-wider font-bold gold-gradient-text uppercase">
              ${isAr ? 'يوسف غمري' : 'Youssef Ghamry'}
            </div>
            <div class="text-[9px] sm:text-[10px] text-emerald-300/70 tracking-tight sm:tracking-widest uppercase font-mono">
              ${isAr ? 'أخصائي مناقصات وعروض فنية ومدقق جودة' : 'Tender & Proposal Specialist | Bid QA'}
            </div>
          </div>
        </a>

        <!-- Desktop Navigation: ALL 8 CORE PILLARS IN EXACT PARITY -->
        <nav class="hidden lg:flex items-center gap-2 xl:gap-3 text-xs font-medium" aria-label="${isAr ? 'القائمة الرئيسية' : 'Main Navigation'}">
          <!-- 1. Home -->
          <a href="${homeUrl}" class="nav-link px-2 py-1 rounded-md">${isAr ? 'الرئيسية' : 'Home'}</a>

          <!-- 2. Services (with Mega Menu Dropdown) -->
          <div class="mega-menu-wrapper static">
            <a href="${servicesUrl}" class="nav-link flex items-center gap-1 mega-menu-trigger group cursor-pointer px-2 py-1 rounded-md" aria-haspopup="true">
              <span>${isAr ? 'الخدمات' : 'Services'}</span>
              <svg class="w-3.5 h-3.5 text-emerald-400 group-hover:text-[#E5C78B] transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>

            <!-- Mega Menu Dropdown Panel -->
            <div class="mega-menu-dropdown p-6 space-y-4 text-start">
              <div class="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-emerald-950/80">
                <div class="flex items-center gap-2.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#C6A15B] animate-pulse"></span>
                  <span class="text-xs font-bold uppercase tracking-wider text-white">
                    ${isAr ? 'دليل الخدمات المؤسسية المتكامل (90+ خدمة)' : 'Comprehensive Professional Services Directory (90+ Services)'}
                  </span>
                </div>
                <a href="${servicesUrl}" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#C6A15B]/50 hover:border-[#E5C78B] bg-[#C6A15B]/15 text-xs font-bold text-[#E5C78B] hover:text-white transition-all shadow-sm">
                  <span>${isAr ? 'عرض دليل الخدمات الكامل (94 خدمة) ←' : 'Explore All Services (94 Services) →'}</span>
                </a>
              </div>

              <!-- 6 Category Grid -->
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs">
                ${megaMenuCategoriesHtml}
              </div>

              <!-- Mega Menu Footer -->
              <div class="pt-3 border-t border-emerald-950/80 flex items-center justify-between text-[11px] text-emerald-400/80">
                <span>${isAr ? '✨ تغطية شاملة لكراسات الشروط والمواصفات في منصة اعتماد والقطاع الخاص' : '✨ Full compliance with Saudi Etimad procurement frameworks & enterprise standards'}</span>
                <a href="${contactUrl}" class="text-[#E5C78B] hover:text-white font-semibold transition-colors">
                  ${isAr ? 'استشارة فورية لمناقصتك ←' : 'Get Bid Consultation →'}
                </a>
              </div>
            </div>
          </div>

          <!-- 3. Awarded Tenders & Bid Experience -->
          <a href="${tendersUrl}" class="nav-link flex items-center gap-1 px-2 py-1 rounded-md">
            <span class="text-[#E5C78B]">🏆</span>
            <span class="font-bold text-white hover:text-[#E5C78B] transition-colors">${isAr ? 'المناقصات والإنجازات' : 'Awarded Tenders'}</span>
          </a>

          <!-- 4. Portfolio & Projects -->
          <a href="${portfolioUrl}" class="nav-link px-2 py-1 rounded-md">${isAr ? 'الأعمال والمشاريع' : 'Portfolio'}</a>

          <!-- 5. Certifications -->
          <a href="${certsUrl}" class="nav-link px-2 py-1 rounded-md">${isAr ? 'الشهادات والاعتمادات' : 'Certifications'}</a>

          <!-- 6. Articles & Knowledge Hub -->
          <a href="${articlesUrl}" class="nav-link px-2 py-1 rounded-md">${isAr ? 'المقالات والمعرفة' : 'Knowledge Hub'}</a>

          <!-- 7. CV -->
          <a href="${cvUrl}" class="nav-link px-2 py-1 rounded-md">${isAr ? 'السيرة الذاتية' : 'CV / Resume'}</a>

          <!-- 8. Contact -->
          <a href="${contactUrl}" class="nav-link px-2 py-1 rounded-md">${isAr ? 'تواصل معنا' : 'Contact'}</a>
        </nav>

        <!-- Right Side: Language Switcher & Request CTA -->
        <div class="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
          <!-- Language Switcher -->
          <a 
            href="${langToggleUrl}" 
            class="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg border border-[#C6A15B]/40 hover:border-[#E5C78B] bg-[#07130D] text-[11px] sm:text-xs font-semibold text-[#E5C78B] hover:text-white transition-all shadow-sm" 
            title="${isAr ? 'Switch to English version of this page' : 'التبديل إلى النسخة العربية لهذه الصفحة'}"
          >
            <span class="text-sm">${isAr ? '🇬🇧' : '🇸🇦'}</span>
            <span class="hidden xs:inline">${isAr ? 'English (EN)' : 'العربية (AR)'}</span>
            <span class="xs:hidden">${isAr ? 'EN' : 'عربي'}</span>
          </a>

          <a href="${contactUrl}" class="hidden sm:inline-flex btn-gold text-xs py-2 px-3 sm:px-4 shadow-sm font-bold">
            <span>${isAr ? 'طلب استشارة ومناقصة' : 'Request Proposal'}</span>
          </a>

          <!-- Mobile Nav Toggle -->
          <button id="mobile-nav-toggle" class="lg:hidden p-2 text-emerald-300 hover:text-white rounded-lg focus:outline-none" aria-label="${isAr ? 'فتح القائمة' : 'Toggle Mobile Menu'}" aria-expanded="false">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div id="mobile-nav-drawer" class="hidden lg:hidden glass-panel border-t border-emerald-950/80 px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
        <!-- 1. Home -->
        <a href="${homeUrl}" class="block text-sm text-emerald-200 hover:text-[#E5C78B] py-1.5 font-medium">${isAr ? 'الرئيسية' : 'Home'}</a>

        <!-- 2. Services Accordion -->
        <div class="border-y border-emerald-950/60 py-2">
          <button class="mobile-accordion-btn w-full flex items-center justify-between text-sm text-emerald-200 hover:text-[#E5C78B] py-1.5 font-bold" data-target="mobile-services-accordion" aria-expanded="false">
            <span>${isAr ? 'الخدمات (دليل 90+ خدمة)' : 'Services Directory (90+ Services)'}</span>
            <svg class="accordion-chevron w-4 h-4 transition-transform duration-200 text-[#E5C78B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          <div id="mobile-services-accordion" class="mobile-accordion-content space-y-3 ps-2 my-2 border-s-2 border-emerald-900/60">
            ${mobileAccordionCategoriesHtml}
            <div class="pt-2">
              <a href="${servicesUrl}" class="block text-xs font-bold text-[#E5C78B] hover:text-white py-1">
                ${isAr ? '← تصفح دليل الخدمات الكامل (90+ خدمة)' : '→ Browse Complete Services Directory (90+)'}
              </a>
            </div>
          </div>
        </div>

        <!-- 3. Awarded Tenders -->
        <a href="${tendersUrl}" class="flex items-center gap-1.5 text-sm font-bold text-white hover:text-[#E5C78B] py-1.5">
          <span class="text-[#E5C78B]">🏆</span>
          <span>${isAr ? 'المناقصات والإنجازات' : 'Awarded Tenders'}</span>
        </a>

        <!-- 4. Portfolio & Projects -->
        <a href="${portfolioUrl}" class="block text-sm text-emerald-200 hover:text-[#E5C78B] py-1.5 font-medium">${isAr ? 'الأعمال والمشاريع' : 'Portfolio'}</a>

        <!-- 5. Certifications -->
        <a href="${certsUrl}" class="block text-sm text-emerald-200 hover:text-[#E5C78B] py-1.5 font-medium">${isAr ? 'الشهادات والاعتمادات' : 'Certifications'}</a>

        <!-- 6. Articles & Knowledge Hub -->
        <a href="${articlesUrl}" class="block text-sm text-emerald-200 hover:text-[#E5C78B] py-1.5 font-medium">${isAr ? 'المقالات والمعرفة' : 'Knowledge Hub'}</a>

        <!-- 7. CV -->
        <a href="${cvUrl}" class="block text-sm text-emerald-200 hover:text-[#E5C78B] py-1.5 font-medium">${isAr ? 'السيرة الذاتية' : 'CV / Resume'}</a>

        <!-- 8. Contact -->
        <a href="${contactUrl}" class="block text-sm text-[#E5C78B] hover:text-white py-1.5 font-bold">${isAr ? 'التواصل معنا' : 'Contact'}</a>

        <!-- Mobile Language Switcher Link -->
        <div class="pt-3 border-t border-emerald-950/80 flex items-center justify-between text-xs">
          <span class="text-emerald-400">${isAr ? 'اللغة الحالية:' : 'Language:'}</span>
          <a href="${langToggleUrl}" class="text-[#E5C78B] font-bold">
            ${isAr ? 'English (LTR)' : 'العربية (RTL)'}
          </a>
        </div>
      </div>
    </header>
  `;
}

export function renderFooter(lang: 'en' | 'ar'): string {
  const isAr = lang === 'ar';
  const homeUrl = isAr ? '/ar/index.html' : '/index.html';
  const servicesUrl = isAr ? '/ar/services/index.html' : '/en/services/index.html';
  const portfolioUrl = isAr ? '/ar/index.html#portfolio' : '/index.html#portfolio';
  const cvUrl = isAr ? '/ar/index.html#resume' : '/index.html#resume';
  const contactUrl = isAr ? '/ar/index.html#contact' : '/index.html#contact';
  const certsUrl = isAr ? '/ar/certifications/index.html' : '/en/certifications/index.html';
  const tendersUrl = isAr ? '/ar/tenders/index.html' : '/en/tenders/index.html';

  return `
    <footer class="border-t border-emerald-950/80 bg-[#050806] py-12 text-xs text-emerald-300/60 relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full border border-[#C6A15B]/50 p-0.5 bg-[#07130D]">
              <img src="/assets/aistudio/image_ef5d64bf.png" alt="Emblem" class="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <span class="font-cinzel font-bold text-white gold-gradient-text tracking-wider">
                ${isAr ? 'يوسف غمري' : 'YOUSSEF GHAMRY'}
              </span>
              <span class="text-slate-500">
                ${isAr ? ' — أخصائي مناقصات واستشارات برمجية' : ' — Tender Specialist & Web Engineer'}
              </span>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-6">
            <a href="${homeUrl}" class="hover:text-[#E5C78B] transition-colors">${isAr ? 'الرئيسية' : 'Home'}</a>
            <a href="${servicesUrl}" class="hover:text-[#E5C78B] text-[#E5C78B] font-semibold transition-colors">${isAr ? 'دليل الخدمات' : 'Services Directory'}</a>
            <a href="${tendersUrl}" class="hover:text-[#E5C78B] transition-colors">${isAr ? 'مركز المعرفة للمناقصات' : 'Knowledge Hub'}</a>
            <a href="${certsUrl}" class="hover:text-[#E5C78B] transition-colors">${isAr ? 'الشهادات والاعتمادات (27+)' : 'Certifications (27+)'}</a>
            <a href="${portfolioUrl}" class="hover:text-[#E5C78B] transition-colors">${isAr ? 'الأعمال والمشاريع' : 'Portfolio'}</a>
            <a href="${cvUrl}" class="hover:text-[#E5C78B] transition-colors">${isAr ? 'السيرة الذاتية' : 'CV'}</a>
            <a href="${contactUrl}" class="hover:text-white transition-colors">${isAr ? 'تواصل معي' : 'Contact'}</a>
          </div>
        </div>

        <div class="pt-6 border-t border-emerald-950/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            ${isAr ? '© 2026 يوسف غمري. جميع الحقوق محفوظة. استشارات المناقصات وحلول التقنية.' : '© 2026 Youssef Ghamry. All rights reserved. Professional Tender Consulting & Technology Solutions.'}
          </div>
          <div>
            ${isAr ? 'القاهرة، مصر · خدمات استشارية متخصصة للسوق السعودي ودول الخليج' : 'Cairo, Egypt · KSA & GCC Regional Remote Engagements'}
          </div>
        </div>

      </div>
    </footer>
  `;
}
