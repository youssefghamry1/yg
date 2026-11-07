import fs from 'fs';
import path from 'path';

const servicesCatalog = JSON.parse(fs.readFileSync('src/data/servicesCatalog.json', 'utf8'));

const mainJsPath = path.resolve('public/assets/js/main.js');
let mainJs = fs.readFileSync(mainJsPath, 'utf8');

// 1. Update DOMContentLoaded to include initGlobalMobileAppNavigation()
if (!mainJs.includes('initGlobalMobileAppNavigation();')) {
  mainJs = mainJs.replace(
    /document\.addEventListener\('DOMContentLoaded',\s*\(\)\s*=>\s*\{([\s\S]*?)\}\);/,
    (match, inner) => {
      return `document.addEventListener('DOMContentLoaded', () => {${inner}  initGlobalMobileAppNavigation();\n});`;
    }
  );
}

// 2. Update initBackToTopButton to hide on mobile (< 768px)
const oldBackToTop = `function initBackToTopButton() {
  if (document.getElementById('back-to-top-btn')) return;

  const btn = document.createElement('button');
  btn.id = 'back-to-top-btn';
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Back to top');
  btn.className = 'fixed bottom-6 right-6 z-50 p-3 rounded-full glass-panel-elevated border border-[#C6A15B]/40 text-[#E5C78B] shadow-2xl opacity-0 pointer-events-none transition-all duration-300 hover:scale-110 hover:border-[#E5C78B]';
  btn.innerHTML = \`
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>
  \`;

  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.remove('opacity-0', 'pointer-events-none');
      btn.classList.add('opacity-100', 'pointer-events-auto');
    } else {
      btn.classList.add('opacity-0', 'pointer-events-none');
      btn.classList.remove('opacity-100', 'pointer-events-auto');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}`;

const newBackToTop = `function initBackToTopButton() {
  if (document.getElementById('back-to-top-btn')) return;

  const btn = document.createElement('button');
  btn.id = 'back-to-top-btn';
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Back to top');
  // Hidden on mobile, flex only on desktop md:
  btn.className = 'hidden md:flex items-center justify-center fixed bottom-6 right-6 z-50 p-3 rounded-full glass-panel-elevated border border-[#C6A15B]/40 text-[#E5C78B] shadow-2xl opacity-0 pointer-events-none transition-all duration-300 hover:scale-110 hover:border-[#E5C78B]';
  btn.innerHTML = \`
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>
  \`;

  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    // Strict mobile guard - never show on mobile screens (< 768px)
    if (window.innerWidth < 768) {
      btn.classList.add('opacity-0', 'pointer-events-none');
      btn.classList.remove('opacity-100', 'pointer-events-auto');
      return;
    }

    if (window.scrollY > 400) {
      btn.classList.remove('opacity-0', 'pointer-events-none');
      btn.classList.add('opacity-100', 'pointer-events-auto');
    } else {
      btn.classList.add('opacity-0', 'pointer-events-none');
      btn.classList.remove('opacity-100', 'pointer-events-auto');
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      btn.classList.add('opacity-0', 'pointer-events-none');
      btn.classList.remove('opacity-100', 'pointer-events-auto');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}`;

if (mainJs.includes(oldBackToTop)) {
  mainJs = mainJs.replace(oldBackToTop, newBackToTop);
}

// 3. Define the Global Mobile Navigation System
const globalNavCode = `
/* -------------------------------------------------------------
 * 10. GLOBAL MOBILE APP NAVIGATION & BOTTOM SHEETS ENGINE
 * App-Like Fixed Bottom Bar + Slide-Up Bottom Sheets
 * Present on ALL Pages: Arabic & English
 * ------------------------------------------------------------- */
const ALL_SITE_SERVICES = ${JSON.stringify(servicesCatalog)};

function initGlobalMobileAppNavigation() {
  if (document.getElementById('global-mobile-bottom-nav')) return;

  const isAr = document.documentElement.lang === 'ar' || window.location.pathname.startsWith('/ar');
  const pathname = window.location.pathname;
  const hash = window.location.hash || '';

  // Ensure body has safe bottom padding on mobile
  if (window.innerWidth < 1024) {
    document.body.style.paddingBottom = 'calc(80px + env(safe-area-inset-bottom, 12px))';
  }

  // 1. Hide mobile top bar language switchers (< 1024px)
  document.querySelectorAll('header a[href*="/en/index.html"], header a[href*="/ar/index.html"], .mobile-lang-btn, [data-mobile-lang-switch]').forEach(el => {
    if (el.closest('.lg\\\\:hidden') || window.innerWidth < 1024) {
      el.classList.add('hidden');
    }
  });

  // 2. Identify active tab
  let activeTab = 'home';
  if (pathname.includes('/services/')) {
    activeTab = 'services';
  } else if (pathname.includes('/tenders/')) {
    activeTab = 'tenders';
  } else if (hash.includes('portfolio') || pathname.includes('/portfolio')) {
    activeTab = 'portfolio';
  } else if (
    pathname.includes('/articles/') ||
    pathname.includes('/certifications/') ||
    hash.includes('resume') ||
    hash.includes('contact')
  ) {
    activeTab = 'more';
  } else if (
    pathname === '/' ||
    pathname === '/index.html' ||
    pathname === '/ar/' ||
    pathname === '/ar/index.html'
  ) {
    activeTab = 'home';
  }

  // 3. Resolve Counterpart URL safely
  function getCounterpartUrl() {
    const search = window.location.search || '';
    if (isAr) {
      if (pathname === '/ar/' || pathname === '/ar/index.html' || pathname === '/ar') {
        return '/index.html' + search + hash;
      }
      if (pathname.startsWith('/ar/services/')) {
        const slug = pathname.replace('/ar/services/', '');
        return '/en/services/' + slug + search + hash;
      }
      if (pathname.startsWith('/ar/tenders/')) {
        const slug = pathname.replace('/ar/tenders/', '');
        return '/en/tenders/' + slug + search + hash;
      }
      if (pathname.startsWith('/ar/certifications/')) {
        return '/en/certifications/index.html' + search + hash;
      }
      if (pathname.startsWith('/ar/articles/')) {
        const slug = pathname.replace('/ar/articles/', '').replace('.html', '');
        const enArticlesList = [
          'what-is-wordpress', 'wordpress-website-development', 'wordpress-speed-optimization',
          'wordpress-security-and-maintenance', 'how-to-choose-a-wordpress-theme', 'wordpress-vs-other-cms',
          'what-is-shopify', 'shopify-store-development', 'shopify-store-design',
          'shopify-store-optimization', 'shopify-vs-woocommerce', 'magento-store-development',
          'magento-ecommerce-optimization', 'magento-vs-shopify', 'what-is-magento',
          'salla-store-setup-customization', 'salla-store-design', 'what-is-salla',
          'zid-store-setup-customization', 'zid-store-design', 'what-is-zid',
          'opencart-store-development', 'opencart-vs-other-platforms', 'what-is-opencart',
          'drupal-website-development', 'drupal-for-enterprise-websites', 'drupal-vs-wordpress',
          'what-is-drupal', 'saudi-etimad-platform-bidding-guide', 'how-to-write-a-technical-proposal',
          'how-to-prepare-a-compliance-matrix', 'bid-no-bid-assessment-strategy',
          'avoiding-mandatory-tender-rejection', 'what-is-a-tender-and-rfp'
        ];
        if (enArticlesList.includes(slug)) {
          return '/en/articles/' + slug + '.html' + search + hash;
        }
        return '/en/articles/index.html' + search + hash;
      }
      return pathname.replace('/ar/', '/en/') + search + hash;
    } else {
      if (pathname === '/' || pathname === '/index.html' || pathname === '') {
        return '/ar/index.html' + search + hash;
      }
      if (pathname.startsWith('/en/services/')) {
        const slug = pathname.replace('/en/services/', '');
        return '/ar/services/' + slug + search + hash;
      }
      if (pathname.startsWith('/en/tenders/')) {
        const slug = pathname.replace('/en/tenders/', '');
        return '/ar/tenders/' + slug + search + hash;
      }
      if (pathname.startsWith('/en/certifications/')) {
        return '/ar/certifications/index.html' + search + hash;
      }
      if (pathname.startsWith('/en/articles/')) {
        const slug = pathname.replace('/en/articles/', '');
        return '/ar/articles/' + slug + search + hash;
      }
      return '/ar' + pathname + search + hash;
    }
  }

  // 4. Fixed Bottom App Navigation Bar
  const nav = document.createElement('nav');
  nav.id = 'global-mobile-bottom-nav';
  nav.className = 'lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#07130D]/95 backdrop-blur-2xl border-t border-emerald-950/80 px-2 pt-1.5 pb-[max(env(safe-area-inset-bottom),10px)] shadow-[0_-8px_30px_rgba(0,0,0,0.7)]';
  nav.setAttribute('aria-label', isAr ? 'شريط التنقل السفلي' : 'Bottom Navigation');

  const tabsConfig = [
    {
      id: 'home',
      label: isAr ? 'الرئيسية' : 'Home',
      href: isAr ? '/ar/index.html' : '/index.html',
      isLink: true,
      svg: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>'
    },
    {
      id: 'services',
      label: isAr ? 'الخدمات' : 'Services',
      isLink: false,
      svg: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>'
    },
    {
      id: 'portfolio',
      label: isAr ? 'الأعمال' : 'Portfolio',
      href: isAr ? '/ar/index.html#portfolio' : '/index.html#portfolio',
      isLink: true,
      svg: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'
    },
    {
      id: 'tenders',
      label: isAr ? 'المناقصات' : 'Tenders',
      href: isAr ? '/ar/tenders/index.html' : '/en/tenders/index.html',
      isLink: true,
      svg: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>'
    },
    {
      id: 'more',
      label: isAr ? 'المزيد' : 'More',
      isLink: false,
      svg: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/></svg>'
    }
  ];

  let itemsHtml = '<div class="grid grid-cols-5 items-center justify-around gap-1">';
  tabsConfig.forEach(t => {
    const isActive = t.id === activeTab;
    const activeIconWrapper = isActive ? 'bg-gradient-to-r from-[#C6A15B]/25 to-[#E5C78B]/20 border border-[#C6A15B]/50 shadow-[0_0_12px_rgba(198,161,91,0.3)]' : '';
    const activeText = isActive ? 'text-white font-bold' : 'text-slate-400';
    const activeIconClass = isActive ? 'text-[#F0D9A2] stroke-[2.2] scale-105 drop-shadow-[0_0_8px_rgba(229,199,139,0.7)]' : 'text-slate-400 stroke-[1.8]';
    const dot = isActive ? '<span class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#E5C78B] shadow-[0_0_6px_rgba(229,199,139,0.9)]"></span>' : '';

    if (t.isLink) {
      itemsHtml += \`
        <a href="\${t.href}" class="flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all duration-200 active:scale-95 focus:outline-none cursor-pointer \${isActive ? 'text-[#F0D9A2]' : 'text-slate-400 hover:text-slate-200'}">
          <div class="relative flex items-center justify-center w-10 h-7 rounded-full transition-all duration-200 \${activeIconWrapper}">
            <div class="\${activeIconClass}">\${t.svg}</div>
            \${dot}
          </div>
          <span class="text-[11px] mt-1 tracking-normal leading-tight font-semibold \${activeText}">\${t.label}</span>
        </a>
      \`;
    } else {
      itemsHtml += \`
        <button type="button" id="global-btn-tab-\${t.id}" class="flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all duration-200 active:scale-95 focus:outline-none cursor-pointer \${isActive ? 'text-[#F0D9A2]' : 'text-slate-400 hover:text-slate-200'}">
          <div class="relative flex items-center justify-center w-10 h-7 rounded-full transition-all duration-200 \${activeIconWrapper}">
            <div class="\${activeIconClass}">\${t.svg}</div>
            \${dot}
          </div>
          <span class="text-[11px] mt-1 tracking-normal leading-tight font-semibold \${activeText}">\${t.label}</span>
        </button>
      \`;
    }
  });
  itemsHtml += '</div>';
  nav.innerHTML = itemsHtml;
  document.body.appendChild(nav);

  // 5. Build Slide-Up Services Bottom Sheet
  const servicesSheet = document.createElement('div');
  servicesSheet.id = 'global-services-sheet';
  servicesSheet.className = 'lg:hidden fixed inset-0 z-50 flex flex-col justify-end bg-black/80 backdrop-blur-md hidden animate-fade-in';
  servicesSheet.innerHTML = \`
    <div class="flex-1 w-full" id="close-services-backdrop"></div>
    <div class="w-full bg-[#07130D] border-t border-[#C6A15B]/50 rounded-t-3xl shadow-[0_-12px_40px_rgba(0,0,0,0.8)] flex flex-col max-h-[88vh] animate-slide-up pb-[max(env(safe-area-inset-bottom),16px)]">
      
      <!-- Grab Handle -->
      <div class="pt-3 pb-1 flex justify-center cursor-pointer" id="close-services-handle">
        <div class="w-12 h-1.5 bg-emerald-900/80 rounded-full"></div>
      </div>

      <!-- Header Bar -->
      <div class="px-5 py-3 border-b border-emerald-950/80 flex items-center justify-between shrink-0">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C6A15B]/20 to-emerald-500/20 border border-[#C6A15B]/40 flex items-center justify-center text-base">
            🌐
          </div>
          <div>
            <h2 class="font-bold text-sm text-white flex items-center gap-2">
              <span>\${isAr ? 'جميع الخدمات المتخصصة' : 'All Specialized Services'}</span>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#0B1F16] text-[#E5C78B] border border-[#C6A15B]/30 font-bold">
                93
              </span>
            </h2>
            <p class="text-[10px] text-emerald-400/80 font-mono">
              \${isAr ? 'المناقصات · تطوير الويب · البرمجيات · السيو' : 'Etimad Tenders · Web Dev · ERP · SEO Architecture'}
            </p>
          </div>
        </div>

        <button id="close-services-btn" class="w-8 h-8 rounded-xl bg-[#0B1F16] border border-emerald-900 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer" aria-label="Close">
          ✕
        </button>
      </div>

      <!-- Search Input -->
      <div class="px-4 pt-3 pb-2 shrink-0">
        <div class="relative">
          <input
            type="text"
            id="services-sheet-search"
            placeholder="\${isAr ? 'ابحث في 93 خدمة متخصصة...' : 'Search across 93 services...'}"
            class="w-full bg-[#0B1F16] border border-emerald-950/90 focus:border-[#C6A15B]/60 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none transition-colors"
          />
        </div>
      </div>

      <!-- Category Filter Pills -->
      <div class="px-4 pb-2.5 overflow-x-auto no-scrollbar shrink-0 flex items-center gap-1.5 border-b border-emerald-950/60" id="services-categories-container">
        <!-- Rendered via JS -->
      </div>

      <!-- Scrollable Services List -->
      <div class="flex-1 overflow-y-auto p-4 space-y-2.5 min-h-[260px]" id="services-list-container">
        <!-- Rendered via JS -->
      </div>

      <!-- Footer Quick Action -->
      <div class="p-3 bg-[#07130D] border-t border-emerald-950/80 shrink-0 flex items-center justify-between text-xs">
        <a href="\${isAr ? '/ar/services/index.html' : '/en/services/index.html'}" class="text-xs font-bold text-[#E5C78B] hover:underline flex items-center gap-1.5">
          <span>\${isAr ? 'فتح فهرس الخدمات الكامل (93 صفحة) ←' : 'Open Full Services Catalog (93 Pages) →'}</span>
        </a>
        <button id="close-services-footer-btn" class="text-xs text-slate-400 hover:text-white px-2 py-1">
          \${isAr ? 'إغلاق' : 'Close'}
        </button>
      </div>

    </div>
  \`;
  document.body.appendChild(servicesSheet);

  // 6. Build Slide-Up More Bottom Sheet
  const moreSheet = document.createElement('div');
  moreSheet.id = 'global-more-sheet';
  moreSheet.className = 'lg:hidden fixed inset-0 z-50 flex flex-col justify-end bg-black/80 backdrop-blur-sm hidden animate-fade-in';
  moreSheet.innerHTML = \`
    <div class="flex-1 w-full" id="close-more-backdrop"></div>
    <div class="w-full bg-[#07130D] border-t border-[#C6A15B]/50 rounded-t-3xl shadow-2xl p-5 space-y-4 max-h-[85vh] overflow-y-auto pb-[max(env(safe-area-inset-bottom),20px)] animate-slide-up">
      
      <!-- Grab Handle -->
      <div class="w-12 h-1.5 bg-emerald-900 rounded-full mx-auto cursor-pointer" id="close-more-handle"></div>

      <!-- Header Lockup -->
      <div class="flex items-center justify-between border-b border-emerald-950/80 pb-3">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-full border border-[#C6A15B]/50 p-0.5 bg-[#07130D]">
            <img src="/assets/aistudio/image_ef5d64bf.png" alt="Emblem" class="w-full h-full object-cover rounded-full" />
          </div>
          <div>
            <h3 class="font-cinzel font-bold text-sm text-white">
              \${isAr ? 'يوسف غمري' : 'Youssef Ghamry'}
            </h3>
            <span class="text-[10px] text-emerald-400 font-mono">
              \${isAr ? 'القائمة الرئيسية والتطبيقات' : 'Main Menu & App Tools'}
            </span>
          </div>
        </div>
        <button id="close-more-btn" class="p-1.5 rounded-xl bg-[#0B1F16] border border-emerald-900 text-slate-300 hover:text-white" aria-label="Close Drawer">
          ✕
        </button>
      </div>

      <!-- Navigation Rows -->
      <div class="space-y-2">
        
        <!-- CV Link -->
        <a href="\${isAr ? '/ar/index.html#resume' : '/index.html#resume'}" class="w-full p-3.5 rounded-2xl bg-[#0B1F16]/90 border border-emerald-950/90 hover:border-[#C6A15B]/50 flex items-center justify-between transition-all active:scale-[0.98] text-start group cursor-pointer">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-[#07130D] border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400">
              📄
            </div>
            <div>
              <div class="text-xs font-bold text-white group-hover:text-[#E5C78B] transition-colors">
                \${isAr ? 'السيرة الذاتية المهنية' : 'Curriculum Vitae (CV)'}
              </div>
              <div class="text-[10px] text-slate-400 mt-0.5">
                \${isAr ? 'سجل الخبرات والمسار المهني الموثق' : 'Full Career Journey & Technical Background'}
              </div>
            </div>
          </div>
          <span class="text-xs text-slate-400">→</span>
        </a>

        <!-- Contact Link -->
        <a href="\${isAr ? '/ar/index.html#contact' : '/index.html#contact'}" class="w-full p-3.5 rounded-2xl bg-[#0B1F16]/90 border border-emerald-950/90 hover:border-[#C6A15B]/50 flex items-center justify-between transition-all active:scale-[0.98] text-start group cursor-pointer">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-[#07130D] border border-emerald-500/20 flex items-center justify-center shrink-0 text-[#F0D9A2]">
              ✉️
            </div>
            <div>
              <div class="text-xs font-bold text-white group-hover:text-[#E5C78B] transition-colors">
                \${isAr ? 'تواصل معنا واستشارة فورية' : 'Contact & Bid Consultation'}
              </div>
              <div class="text-[10px] text-slate-400 mt-0.5">
                \${isAr ? 'استشارات كراسات الشروط والمشاريع التقنية' : 'Direct Inquiry for Tenders & IT Projects'}
              </div>
            </div>
          </div>
          <span class="text-xs text-slate-400">→</span>
        </a>

        <!-- Certifications Link -->
        <a href="\${isAr ? '/ar/certifications/index.html' : '/en/certifications/index.html'}" class="w-full p-3.5 rounded-2xl bg-[#0B1F16]/90 border border-emerald-950/90 hover:border-[#C6A15B]/50 flex items-center justify-between transition-all active:scale-[0.98] text-start group cursor-pointer">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-[#07130D] border border-emerald-500/20 flex items-center justify-center shrink-0 text-cyan-400">
              🏅
            </div>
            <div>
              <div class="text-xs font-bold text-white group-hover:text-[#E5C78B] transition-colors">
                \${isAr ? 'الشهادات والاعتمادات المهنية' : 'Professional Certifications'}
              </div>
              <div class="text-[10px] text-slate-400 mt-0.5">
                \${isAr ? '27 شهادة معتمدة من AWS، جوجل، IBM، وميتا' : '27 Verified Credentials from AWS, Google, Meta'}
              </div>
            </div>
          </div>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#07130D] text-[#E5C78B] border border-[#C6A15B]/30 font-bold">
            27+
          </span>
        </a>

        <!-- Articles Hub Link -->
        <a href="\${isAr ? '/ar/articles/index.html' : '/en/articles/index.html'}" class="w-full p-3.5 rounded-2xl bg-[#0B1F16]/90 border border-emerald-950/90 hover:border-[#C6A15B]/50 flex items-center justify-between transition-all active:scale-[0.98] text-start group cursor-pointer">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-[#07130D] border border-emerald-500/20 flex items-center justify-center shrink-0 text-[#E5C78B]">
              📚
            </div>
            <div>
              <div class="text-xs font-bold text-white group-hover:text-[#E5C78B] transition-colors">
                \${isAr ? 'المكتبة المعرفية والمقالات' : 'Knowledge Hub & Articles'}
              </div>
              <div class="text-[10px] text-slate-400 mt-0.5">
                \${isAr ? '100 مقال متخصص في كراسات الشروط والتقنية' : '100 Technical Guides & Procurement Blueprints'}
              </div>
            </div>
          </div>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#07130D] text-[#E5C78B] border border-[#C6A15B]/30 font-bold">
            100
          </span>
        </a>

      </div>

      <!-- Consultation CTA Banner -->
      <div class="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-950/70 via-[#0B1F16] to-[#07130D] border border-emerald-500/30 flex items-center justify-between">
        <div class="space-y-0.5">
          <div class="text-xs font-bold text-white flex items-center gap-1.5">
            <span>✨</span>
            <span>\${isAr ? 'طلب استشارة أو عرض فني' : 'Request Proposal / Consultation'}</span>
          </div>
          <div class="text-[10px] text-slate-400">
            \${isAr ? 'دراسة كراسة الشروط وتقديم الدعم الفني' : 'RFP Analysis & Technical Proposal Drafting'}
          </div>
        </div>
        <a href="\${isAr ? '/ar/index.html#contact' : '/index.html#contact'}" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold text-xs shadow-md transition-all active:scale-95">
          \${isAr ? 'اطلب الآن' : 'Request'}
        </a>
      </div>

      <!-- Language & WhatsApp Grid -->
      <div class="grid grid-cols-2 gap-2.5 pt-1">
        <a href="\${getCounterpartUrl()}" class="py-3 px-3 rounded-2xl bg-[#0B1F16] border border-[#C6A15B]/50 text-xs font-bold text-[#E5C78B] hover:text-white flex items-center justify-center gap-2 hover:border-[#E5C78B] transition-all shadow-sm">
          <span>🌐</span>
          <span>\${isAr ? 'English (EN)' : 'النسخة العربية (AR)'}</span>
        </a>

        <a href="https://wa.me/201503292942" target="_blank" rel="noopener noreferrer" class="py-3 px-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white flex items-center justify-center gap-2 transition-colors shadow-sm">
          <span>💬</span>
          <span>\${isAr ? 'واتساب مباشر' : 'WhatsApp'}</span>
        </a>
      </div>

      <!-- Footer Info -->
      <div class="pt-2 border-t border-emerald-950/80 flex items-center justify-between text-[11px] text-slate-400">
        <span>\${isAr ? 'المنصة المهنية المعتمدة' : 'Official Professional Platform'}</span>
        <span class="text-emerald-400 font-mono text-[10px]">v3.2 Production</span>
      </div>

    </div>
  \`;
  document.body.appendChild(moreSheet);

  // 7. Services Sheet Logic (Search & Categories)
  const categoriesConfig = [
    { id: 'all', nameAr: 'الكل (93)', nameEn: 'All (93)', icon: '✨' },
    { id: 'tenders', nameAr: 'المناقصات (31)', nameEn: 'Tenders (31)', icon: '🏛️' },
    { id: 'web', nameAr: 'المواقع والمتاجر (24)', nameEn: 'Web (24)', icon: '🌐' },
    { id: 'erp', nameAr: 'الأنظمة والبرمجيات (14)', nameEn: 'ERP & Software (14)', icon: '⚙️' },
    { id: 'mobile', nameAr: 'تطبيقات الجوال (7)', nameEn: 'Mobile (7)', icon: '📱' },
    { id: 'seo', nameAr: 'السيو والتسويق (12)', nameEn: 'SEO (12)', icon: '🚀' },
    { id: 'consulting', nameAr: 'الاستشارات التقنية (5)', nameEn: 'Consulting (5)', icon: '💼' }
  ];

  let currentCategory = 'all';
  let currentSearch = '';

  const catContainer = document.getElementById('services-categories-container');
  const listContainer = document.getElementById('services-list-container');
  const searchInput = document.getElementById('services-sheet-search');

  function renderCategories() {
    catContainer.innerHTML = categoriesConfig.map(cat => {
      const active = currentCategory === cat.id;
      const cls = active
        ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-md shadow-emerald-950/40 border border-emerald-500/50'
        : 'bg-[#0B1F16] text-slate-300 hover:text-white border border-emerald-950 hover:border-emerald-800';
      return \`<button type="button" data-cat-id="\${cat.id}" class="px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 cursor-pointer \${cls}">
        <span>\${cat.icon}</span>
        <span>\${isAr ? cat.nameAr : cat.nameEn}</span>
      </button>\`;
    }).join('');

    catContainer.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        currentCategory = btn.getAttribute('data-cat-id');
        renderCategories();
        renderServicesList();
      });
    });
  }

  function renderServicesList() {
    const q = currentSearch.trim().toLowerCase();
    const filtered = ALL_SITE_SERVICES.filter(s => {
      const matchesCat = (currentCategory === 'all' || s.category === currentCategory);
      if (!matchesCat) return false;
      if (!q) return true;
      const title = isAr ? s.titleAr.toLowerCase() : s.titleEn.toLowerCase();
      const desc = isAr ? s.descAr.toLowerCase() : s.descEn.toLowerCase();
      const slug = s.slug.toLowerCase();
      return title.includes(q) || desc.includes(q) || slug.includes(q);
    });

    if (filtered.length === 0) {
      listContainer.innerHTML = \`
        <div class="text-center py-10 space-y-2">
          <div class="text-2xl">🔍</div>
          <p class="text-xs text-slate-400">\${isAr ? 'لا توجد خدمات مطابقة للبحث' : 'No services found'}</p>
        </div>
      \`;
      return;
    }

    listContainer.innerHTML = filtered.map(s => {
      const title = isAr ? s.titleAr : s.titleEn;
      const desc = isAr ? s.descAr : s.descEn;
      const catName = isAr ? s.categoryNameAr : s.categoryNameEn;
      const targetUrl = isAr ? ('/ar/services/' + s.slug + '.html') : ('/en/services/' + s.slug + '.html');

      return \`
        <a href="\${targetUrl}" class="w-full text-start p-3 rounded-2xl bg-[#0B1F16]/95 border border-emerald-950 hover:border-[#C6A15B]/50 transition-all active:scale-[0.99] flex items-center justify-between gap-3 group cursor-pointer shadow-sm">
          <div class="flex items-start gap-3 min-w-0">
            <div class="w-10 h-10 rounded-xl bg-[#07130D] border border-emerald-500/20 flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition-transform">
              \${s.icon}
            </div>
            <div class="min-w-0 flex-1">
              <span class="text-[10px] font-semibold text-emerald-400 truncate block mb-0.5">\${catName}</span>
              <h3 class="text-xs font-bold text-white group-hover:text-[#E5C78B] transition-colors leading-snug line-clamp-2">
                \${title}
              </h3>
              \${desc ? ('<p class="text-[10px] text-slate-400 line-clamp-1 mt-0.5">' + desc + '</p>') : ''}
            </div>
          </div>
          <div class="w-7 h-7 rounded-lg bg-[#07130D] border border-emerald-950 flex items-center justify-center text-slate-400 group-hover:text-[#E5C78B] shrink-0">
            ↗
          </div>
        </a>
      \`;
    }).join('');
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      renderServicesList();
    });
  }

  renderCategories();
  renderServicesList();

  // 8. Open / Close Bottom Sheets Handlers
  function openServicesSheet() {
    moreSheet.classList.add('hidden');
    servicesSheet.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeServicesSheet() {
    servicesSheet.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function openMoreSheet() {
    servicesSheet.classList.add('hidden');
    moreSheet.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMoreSheet() {
    moreSheet.classList.add('hidden');
    document.body.style.overflow = '';
  }

  const btnServices = document.getElementById('global-btn-tab-services');
  if (btnServices) btnServices.addEventListener('click', openServicesSheet);

  const btnMore = document.getElementById('global-btn-tab-more');
  if (btnMore) btnMore.addEventListener('click', openMoreSheet);

  // Close triggers
  ['close-services-backdrop', 'close-services-handle', 'close-services-btn', 'close-services-footer-btn'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', closeServicesSheet);
  });

  ['close-more-backdrop', 'close-more-handle', 'close-more-btn'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', closeMoreSheet);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeServicesSheet();
      closeMoreSheet();
    }
  });
}
`;

if (!mainJs.includes('function initGlobalMobileAppNavigation()')) {
  mainJs += '\n' + globalNavCode + '\n';
}

fs.writeFileSync(mainJsPath, mainJs, 'utf8');
console.log('Successfully updated public/assets/js/main.js with global navigation and mobile responsiveness!');
