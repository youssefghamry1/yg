import fs from 'fs';
import path from 'path';

// Helper to escape HTML attributes
function escapeAttr(str: string): string {
  return str.replace(/"/g, '&quot;');
}

export function buildHeaderHTML(lang: 'ar' | 'en', filePath: string): string {
  const isAr = lang === 'ar';
  const isRoot = filePath === 'index.html' || filePath === './index.html' || filePath === 'en/index.html';
  const isArHome = filePath === 'ar/index.html' || filePath === './ar/index.html';
  const isHome = isRoot || isArHome;

  // Determine counterpart URL
  let counterpartUrl = '/index.html';
  if (isRoot) {
    counterpartUrl = '/ar/index.html';
  } else if (isArHome) {
    counterpartUrl = '/index.html';
  } else if (filePath.startsWith('ar/')) {
    const rel = filePath.substring(3);
    counterpartUrl = `/en/${rel}`;
  } else if (filePath.startsWith('en/')) {
    const rel = filePath.substring(3);
    counterpartUrl = `/ar/${rel}`;
  }

  // Determine canonical & alternate URLs for head
  const homeUrl = isAr ? '/ar/index.html' : '/index.html';
  const servicesHubUrl = isAr ? '/ar/services/index.html' : '/en/services/index.html';
  const cvUrl = isAr ? '/ar/cv/index.html' : '/en/cv/index.html';
  const portfolioUrl = isAr ? '/ar/portfolio/index.html' : '/en/portfolio/index.html';
  const tendersUrl = isAr ? '/ar/tenders/awarded-tenders.html' : '/en/tenders/awarded-tenders.html';
  const certsUrl = isAr ? '/ar/certifications/index.html' : '/en/certifications/index.html';
  const articlesUrl = isAr ? '/ar/articles/index.html' : '/en/articles/index.html';
  const contactUrl = isAr ? '/ar/contact/index.html' : '/en/contact/index.html';

  // Active status checks
  const isServicesActive = filePath.includes('/services/');
  const isCvActive = filePath.includes('/cv/');
  const isPortfolioActive = filePath.includes('/portfolio/');
  const isTendersActive = filePath.includes('/tenders/');
  const isCertsActive = filePath.includes('/certifications/');
  const isArticlesActive = filePath.includes('/articles/');
  const isContactActive = filePath.includes('/contact/');
  const isHomeActive = isHome;

  const brandSubtitle = isAr
    ? 'أخصائي مناقصات وعروض فنية ومدقق جودة'
    : 'Tender & Proposal Specialist | Bid QA';

  const servicesPrefix = isAr ? '/ar/services' : '/en/services';

  return `
    <!-- Header Navigation -->
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
              ${brandSubtitle}
            </div>
          </div>
        </a>

        <!-- Desktop Navigation: ALL IMPORTANT SECTIONS -->
        <nav class="hidden lg:flex items-center gap-2 xl:gap-4 text-xs font-medium" aria-label="${isAr ? 'القائمة الرئيسية' : 'Main Navigation'}">
          <!-- 1. Home -->
          <a href="${homeUrl}" class="nav-link ${isHomeActive ? 'active' : ''} px-2 py-1 rounded-md">
            ${isAr ? 'الرئيسية' : 'Home'}
          </a>

          <!-- 2. Services Dropdown / Mega Menu Button -->
          <div class="mega-menu-wrapper static">
            <button 
              type="button" 
              class="nav-link ${isServicesActive ? 'active' : ''} flex items-center gap-1.5 mega-menu-trigger group cursor-pointer px-2 py-1 rounded-md focus:outline-none" 
              aria-haspopup="true" 
              aria-expanded="false"
              id="services-menu-trigger"
            >
              <span>${isAr ? 'الخدمات' : 'Services'}</span>
              <svg class="w-3.5 h-3.5 text-emerald-400 group-hover:text-[#E5C78B] transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            <!-- Mega Menu Dropdown Panel -->
            <div class="mega-menu-dropdown p-6 space-y-4 text-start">
              <!-- Mega Menu Header Bar -->
              <div class="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-emerald-950/80">
                <div class="flex items-center gap-2.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#C6A15B] animate-pulse"></span>
                  <span class="text-xs font-bold uppercase tracking-wider text-white">
                    ${isAr ? 'دليل الخدمات الاستشارية والتقنية المتكاملة' : 'Comprehensive Professional Services Directory'}
                  </span>
                </div>
                <a href="${servicesHubUrl}" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#C6A15B]/50 hover:border-[#E5C78B] bg-[#C6A15B]/15 text-xs font-bold text-[#E5C78B] hover:text-white transition-all shadow-sm">
                  <span>${isAr ? 'دليل جميع الخدمات (94 خدمة) ←' : 'Explore All Services (94 Services) →'}</span>
                </a>
              </div>

              <!-- 6 Category Grid -->
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs">
                
                <!-- Category 1: Web Development -->
                <div class="space-y-2 p-3 rounded-xl bg-[#07130D]/70 border border-emerald-950/80 hover:border-emerald-500/30 transition-colors">
                  <div class="flex items-center gap-2 pb-1.5 border-b border-emerald-950/80">
                    <span class="text-base">🌐</span>
                    <span class="text-xs font-bold text-white tracking-wide truncate">
                      ${isAr ? 'تصميم وتطوير المواقع الإلكترونية' : 'Website Design & Development'}
                    </span>
                  </div>
                  <div class="space-y-1">
                    <a href="${servicesPrefix}/wordpress-development.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'تطوير مواقع ووردبريس' : 'WordPress Development'}</span>
                    </a>
                    <a href="${servicesPrefix}/shopify-development.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'تطوير متاجر شوبيفاي' : 'Shopify Store Development'}</span>
                    </a>
                    <a href="${servicesPrefix}/drupal-development.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'تطوير مواقع دروبال للمؤسسات' : 'Drupal Enterprise Portals'}</span>
                    </a>
                    <a href="${servicesPrefix}/magento-development.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'تطوير متاجر ماجنتو / أدوبي' : 'Magento / Adobe Commerce'}</span>
                    </a>
                    <a href="${servicesPrefix}/salla-store-development.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'تصميم وتطوير متاجر سلة' : 'Salla Store Development'}</span>
                    </a>
                    <a href="${servicesPrefix}/zid-store-development.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'تصميم وتطوير متاجر زد' : 'Zid Store Development'}</span>
                    </a>
                    <a href="${servicesPrefix}/corporate-websites.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'مواقع الشركات والمؤسسات' : 'Corporate Enterprise Portals'}</span>
                    </a>
                    <a href="${servicesPrefix}/technical-seo.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'السيو التقني وسرعة المواقع' : 'Technical SEO & Performance'}</span>
                    </a>
                  </div>
                </div>

                <!-- Category 2: Software & Business Systems -->
                <div class="space-y-2 p-3 rounded-xl bg-[#07130D]/70 border border-emerald-950/80 hover:border-emerald-500/30 transition-colors">
                  <div class="flex items-center gap-2 pb-1.5 border-b border-emerald-950/80">
                    <span class="text-base">⚙️</span>
                    <span class="text-xs font-bold text-white tracking-wide truncate">
                      ${isAr ? 'البرمجيات والأنظمة الإدارية' : 'Software & Enterprise Systems'}
                    </span>
                  </div>
                  <div class="space-y-1">
                    <a href="${servicesPrefix}/erp-system-development.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'أنظمة تخطيط الموارد (ERP)' : 'ERP Systems Implementation'}</span>
                    </a>
                    <a href="${servicesPrefix}/crm-development.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'أنظمة علاقات العملاء (CRM)' : 'CRM Platforms Development'}</span>
                    </a>
                    <a href="${servicesPrefix}/pos-development.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'أنظمة نقاط البيع (POS)' : 'POS Systems Development'}</span>
                    </a>
                    <a href="${servicesPrefix}/hr-systems-development.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'أنظمة الموارد البشرية والرواتب' : 'HR & Payroll Systems'}</span>
                    </a>
                    <a href="${servicesPrefix}/inventory-systems-development.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'أنظمة إدارة المخازن والمستودعات' : 'Inventory Management Systems'}</span>
                    </a>
                    <a href="${servicesPrefix}/custom-software-development.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'تطوير البرمجيات المخصصة' : 'Custom Software Engineering'}</span>
                    </a>
                    <a href="${servicesPrefix}/business-process-automation.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'أتمتة العمليات الإدارية' : 'Business Process Automation'}</span>
                    </a>
                  </div>
                </div>

                <!-- Category 3: Mobile Applications -->
                <div class="space-y-2 p-3 rounded-xl bg-[#07130D]/70 border border-emerald-950/80 hover:border-emerald-500/30 transition-colors">
                  <div class="flex items-center gap-2 pb-1.5 border-b border-emerald-950/80">
                    <span class="text-base">📱</span>
                    <span class="text-xs font-bold text-white tracking-wide truncate">
                      ${isAr ? 'تطوير تطبيقات الجوال الذكية' : 'Mobile Applications Development'}
                    </span>
                  </div>
                  <div class="space-y-1">
                    <a href="${servicesPrefix}/ios-app-development.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'تطوير تطبيقات iOS والآيفون' : 'Native iOS App Development'}</span>
                    </a>
                    <a href="${servicesPrefix}/android-app-development.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'تطوير تطبيقات أندرويد' : 'Native Android Development'}</span>
                    </a>
                    <a href="${servicesPrefix}/cross-platform-app-development.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'تطبيقات Flutter وReact Native' : 'Flutter & React Native Apps'}</span>
                    </a>
                    <a href="${servicesPrefix}/business-mobile-applications.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'تطبيقات الأعمال والشركات' : 'Enterprise Mobile Solutions'}</span>
                    </a>
                    <a href="${servicesPrefix}/ecommerce-mobile-applications.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'تطبيقات المتاجر الإلكترونية' : 'E-Commerce Mobile Apps'}</span>
                    </a>
                    <a href="${servicesPrefix}/mobile-ui-ux-design.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'تصميم واجهات وتجربة المستخدم' : 'Mobile UI/UX Design'}</span>
                    </a>
                  </div>
                </div>

                <!-- Category 4: Digital Marketing & Technical SEO -->
                <div class="space-y-2 p-3 rounded-xl bg-[#07130D]/70 border border-emerald-950/80 hover:border-emerald-500/30 transition-colors">
                  <div class="flex items-center gap-2 pb-1.5 border-b border-emerald-950/80">
                    <span class="text-base">🚀</span>
                    <span class="text-xs font-bold text-white tracking-wide truncate">
                      ${isAr ? 'التسويق الرقمي والسيو التقني' : 'Digital Marketing & Technical SEO'}
                    </span>
                  </div>
                  <div class="space-y-1">
                    <a href="${servicesPrefix}/on-page-seo.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'تحسين السيو الداخلي On-Page' : 'On-Page SEO Optimization'}</span>
                    </a>
                    <a href="${servicesPrefix}/off-page-seo.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'السيو الخارجي وبناء السلطة' : 'Off-Page SEO & Authority'}</span>
                    </a>
                    <a href="${servicesPrefix}/seo-audits.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'التدقيق الشامل لمواقع الويب' : 'Comprehensive SEO Audits'}</span>
                    </a>
                    <a href="${servicesPrefix}/keyword-research.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'بحوث الكلمات المفتاحية والسوق' : 'Keyword & Competitor Research'}</span>
                    </a>
                    <a href="${servicesPrefix}/seo-content-strategy.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'استراتيجية محتوى السيو' : 'SEO Content Strategy'}</span>
                    </a>
                    <a href="${servicesPrefix}/digital-marketing-strategy.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'استراتيجيات التسويق الرقمي' : 'Digital Marketing Strategies'}</span>
                    </a>
                  </div>
                </div>

                <!-- Category 5: Business Development & Solution Consulting -->
                <div class="space-y-2 p-3 rounded-xl bg-[#07130D]/70 border border-emerald-950/80 hover:border-emerald-500/30 transition-colors">
                  <div class="flex items-center gap-2 pb-1.5 border-b border-emerald-950/80">
                    <span class="text-base">💼</span>
                    <span class="text-xs font-bold text-white tracking-wide truncate">
                      ${isAr ? 'تطوير الأعمال وهندسة الحلول' : 'Business Development & Pre-Sales'}
                    </span>
                  </div>
                  <div class="space-y-1">
                    <a href="${servicesPrefix}/business-development-consulting.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'استشارات تطوير الأعمال' : 'Business Development Consulting'}</span>
                    </a>
                    <a href="${servicesPrefix}/it-pre-sales-support.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'استشارات ما قبل البيع IT Pre-Sales' : 'IT Pre-Sales Architecture'}</span>
                    </a>
                    <a href="${servicesPrefix}/solution-consulting.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'هندسة الحلول الرقمية المؤسسية' : 'Enterprise Solution Architecture'}</span>
                    </a>
                    <a href="${servicesPrefix}/opportunity-assessment.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'تقييم ودراسة الفرص التجارية' : 'Opportunity Assessment & Feasibility'}</span>
                    </a>
                    <a href="${servicesPrefix}/bid-no-bid-support.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'حوكمة قرار التقدم للعطاءات' : 'Bid / No-Bid Governance'}</span>
                    </a>
                    <a href="${servicesPrefix}/technical-methodology-development.html" class="mega-menu-link">
                      <span class="bullet w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span class="truncate">${isAr ? 'تطوير المنهجيات الفنية التنفيذية' : 'Technical Methodology Drafting'}</span>
                    </a>
                  </div>
                </div>

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

          <!-- 3. السيرة الذاتية – CV -->
          <a href="${cvUrl}" class="nav-link ${isCvActive ? 'active' : ''} px-2 py-1 rounded-md">
            ${isAr ? 'السيرة الذاتية' : 'CV'}
          </a>

          <!-- 4. الأعمال والمشاريع – Portfolio -->
          <a href="${portfolioUrl}" class="nav-link ${isPortfolioActive ? 'active' : ''} px-2 py-1 rounded-md">
            ${isAr ? 'الأعمال والمشاريع' : 'Portfolio'}
          </a>

          <!-- 5. المناقصات – Tenders -->
          <a href="${tendersUrl}" class="nav-link ${isTendersActive ? 'active' : ''} flex items-center gap-1.5 px-2 py-1 rounded-md">
            <span class="text-[#E5C78B]">🏆</span>
            <span class="font-bold text-white hover:text-[#E5C78B] transition-colors">${isAr ? 'المناقصات' : 'Tenders'}</span>
          </a>

          <!-- 6. الشهادات – Certifications -->
          <a href="${certsUrl}" class="nav-link ${isCertsActive ? 'active' : ''} px-2 py-1 rounded-md">
            ${isAr ? 'الشهادات' : 'Certifications'}
          </a>

          <!-- 7. المقالات – Articles -->
          <a href="${articlesUrl}" class="nav-link ${isArticlesActive ? 'active' : ''} px-2 py-1 rounded-md">
            ${isAr ? 'المقالات' : 'Articles'}
          </a>

          <!-- 8. تواصل معي – Contact -->
          <a href="${contactUrl}" class="nav-link ${isContactActive ? 'active' : ''} px-2 py-1 rounded-md">
            ${isAr ? 'تواصل معي' : 'Contact'}
          </a>
        </nav>

        <!-- Right Side: Exact Language Switcher & Request CTA -->
        <div class="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
          <!-- Exact Language Switcher -->
          <a 
            href="${counterpartUrl}" 
            class="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg border border-[#C6A15B]/40 hover:border-[#E5C78B] bg-[#07130D] text-[11px] sm:text-xs font-semibold text-[#E5C78B] hover:text-white transition-all shadow-sm" 
            title="${isAr ? 'Switch to English version of this page' : 'التبديل إلى النسخة العربية لهذه الصفحة'}"
          >
            <span class="text-sm">${isAr ? '🇬🇧' : '🇸🇦'}</span>
            <span class="hidden xs:inline">${isAr ? 'English (EN)' : 'العربية (AR)'}</span>
            <span class="xs:hidden">${isAr ? 'EN' : 'عربي'}</span>
          </a>

          <!-- Proposal Consultation CTA -->
          <a href="${contactUrl}" class="hidden sm:inline-flex btn-gold text-xs py-2 px-3 sm:px-4 shadow-sm font-bold">
            <span>${isAr ? 'طلب استشارة ومناقصة' : 'Request Proposal'}</span>
          </a>

          <!-- Mobile Nav Toggle -->
          <button 
            id="mobile-nav-toggle" 
            class="lg:hidden p-2 text-emerald-300 hover:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C6A15B]" 
            aria-label="${isAr ? 'فتح القائمة الرئيسية' : 'Toggle Navigation Menu'}" 
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
        
        <!-- 1. Home -->
        <a href="${homeUrl}" class="flex items-center gap-2.5 text-xs sm:text-sm ${isHomeActive ? 'text-[#E5C78B] font-bold' : 'text-emerald-200/90'} hover:text-[#E5C78B] py-2 transition-colors">
          <svg class="w-4 h-4 text-[#C6A15B] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          <span>${isAr ? 'الرئيسية' : 'Home'}</span>
        </a>

        <!-- 2. Services Accordion -->
        <div class="border-y border-emerald-950/70 py-2">
          <button 
            type="button" 
            class="mobile-accordion-btn w-full flex items-center justify-between text-xs sm:text-sm ${isServicesActive ? 'text-[#E5C78B] font-bold' : 'text-emerald-200/90'} hover:text-[#E5C78B] py-1.5 focus:outline-none" 
            data-target="mobile-services-accordion" 
            aria-expanded="false"
          >
            <span class="flex items-center gap-2.5">
              <svg class="w-4 h-4 text-[#C6A15B] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
              <span>${isAr ? 'دليل الخدمات (94 خدمة متخصصة)' : 'Services Directory (94 Services)'}</span>
            </span>
            <svg class="accordion-chevron w-4 h-4 transition-transform duration-200 text-[#E5C78B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          <div id="mobile-services-accordion" class="mobile-accordion-content space-y-3 ps-2 my-2 border-s-2 border-emerald-900/60 text-xs">
            <!-- All Services Hub Link -->
            <div class="pt-1 pb-1">
              <a href="${servicesHubUrl}" class="block py-1.5 px-2.5 rounded-lg bg-[#C6A15B]/15 border border-[#C6A15B]/40 text-[#E5C78B] font-bold">
                ${isAr ? 'عرض دليل جميع الخدمات الـ 94 كاملة ←' : 'View Complete All Services Directory (94 Services) →'}
              </a>
            </div>

            <!-- Sub category 1 -->
            <div class="space-y-1">
              <div class="font-bold text-white flex items-center gap-1.5 text-[11px] text-[#E5C78B]">
                <svg class="w-3.5 h-3.5 text-[#C6A15B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                <span>${isAr ? 'تصميم وتطوير المواقع' : 'Website Development'}</span>
              </div>
              <div class="ms-3 space-y-1">
                <a href="${servicesPrefix}/wordpress-development.html" class="block py-1 text-emerald-200/80 hover:text-white">${isAr ? 'تطوير مواقع ووردبريس' : 'WordPress Development'}</a>
                <a href="${servicesPrefix}/shopify-development.html" class="block py-1 text-emerald-200/80 hover:text-white">${isAr ? 'تطوير متاجر شوبيفاي' : 'Shopify Store Development'}</a>
                <a href="${servicesPrefix}/drupal-development.html" class="block py-1 text-emerald-200/80 hover:text-white">${isAr ? 'تطوير مواقع دروبال للمؤسسات' : 'Drupal Enterprise Portals'}</a>
                <a href="${servicesPrefix}/magento-development.html" class="block py-1 text-emerald-200/80 hover:text-white">${isAr ? 'تطوير متاجر ماجنتو' : 'Magento / Adobe Commerce'}</a>
                <a href="${servicesPrefix}/salla-store-development.html" class="block py-1 text-emerald-200/80 hover:text-white">${isAr ? 'متاجر سلة' : 'Salla Store Development'}</a>
                <a href="${servicesPrefix}/zid-store-development.html" class="block py-1 text-emerald-200/80 hover:text-white">${isAr ? 'متاجر زد' : 'Zid Store Development'}</a>
                <a href="${servicesPrefix}/corporate-websites.html" class="block py-1 text-emerald-200/80 hover:text-white">${isAr ? 'مواقع الشركات والمؤسسات' : 'Corporate Enterprise Portals'}</a>
              </div>
            </div>

            <!-- Sub category 2 -->
            <div class="space-y-1">
              <div class="font-bold text-white flex items-center gap-1.5 text-[11px] text-[#E5C78B]">
                <svg class="w-3.5 h-3.5 text-[#C6A15B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 9 6 6m0-6-6 6"/></svg>
                <span>${isAr ? 'البرمجيات والأنظمة الإدارية' : 'Software & Enterprise Systems'}</span>
              </div>
              <div class="ms-3 space-y-1">
                <a href="${servicesPrefix}/erp-system-development.html" class="block py-1 text-emerald-200/80 hover:text-white">${isAr ? 'تطوير أنظمة ERP' : 'ERP Systems Implementation'}</a>
                <a href="${servicesPrefix}/crm-development.html" class="block py-1 text-emerald-200/80 hover:text-white">${isAr ? 'تطوير أنظمة CRM' : 'CRM Development'}</a>
                <a href="${servicesPrefix}/pos-development.html" class="block py-1 text-emerald-200/80 hover:text-white">${isAr ? 'أنظمة نقاط البيع POS' : 'POS Systems Development'}</a>
                <a href="${servicesPrefix}/custom-software-development.html" class="block py-1 text-emerald-200/80 hover:text-white">${isAr ? 'تطوير البرمجيات المخصصة' : 'Custom Software Engineering'}</a>
              </div>
            </div>

            <!-- Sub category 3 -->
            <div class="space-y-1">
              <div class="font-bold text-white flex items-center gap-1.5 text-[11px] text-[#E5C78B]">
                <svg class="w-3.5 h-3.5 text-[#C6A15B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/></svg>
                <span>${isAr ? 'تطبيقات الجوال' : 'Mobile Applications'}</span>
              </div>
              <div class="ms-3 space-y-1">
                <a href="${servicesPrefix}/ios-app-development.html" class="block py-1 text-emerald-200/80 hover:text-white">${isAr ? 'تطبيقات iOS' : 'Native iOS Development'}</a>
                <a href="${servicesPrefix}/android-app-development.html" class="block py-1 text-emerald-200/80 hover:text-white">${isAr ? 'تطبيقات أندرويد' : 'Native Android Development'}</a>
                <a href="${servicesPrefix}/cross-platform-app-development.html" class="block py-1 text-emerald-200/80 hover:text-white">${isAr ? 'تطبيقات Flutter وReact Native' : 'Flutter & React Native'}</a>
              </div>
            </div>

            <!-- Sub category 4: Marketing & SEO -->
            <div class="space-y-1">
              <div class="font-bold text-white flex items-center gap-1.5 text-[11px] text-[#E5C78B]">
                <svg class="w-3.5 h-3.5 text-[#C6A15B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m4.5 16.5 6-6 4 4 5-5m0 0h-4m4 0v4"/></svg>
                <span>${isAr ? 'التسويق الرقمي والسيو' : 'SEO & Digital Marketing'}</span>
              </div>
              <div class="ms-3 space-y-1">
                <a href="${servicesPrefix}/technical-seo.html" class="block py-1 text-emerald-200/80 hover:text-white">${isAr ? 'السيو التقني وسرعة المواقع' : 'Technical SEO & Performance'}</a>
                <a href="${servicesPrefix}/on-page-seo.html" class="block py-1 text-emerald-200/80 hover:text-white">${isAr ? 'السيو الداخلي On-Page' : 'On-Page SEO'}</a>
                <a href="${servicesPrefix}/off-page-seo.html" class="block py-1 text-emerald-200/80 hover:text-white">${isAr ? 'السيو الخارجي' : 'Off-Page SEO'}</a>
              </div>
            </div>

            <!-- Sub category 5: Business Development -->
            <div class="space-y-1">
              <div class="font-bold text-white flex items-center gap-1.5 text-[11px] text-[#E5C78B]">
                <svg class="w-3.5 h-3.5 text-[#C6A15B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                <span>${isAr ? 'تطوير الأعمال والحلول التقنية' : 'Business Development & Solutions'}</span>
              </div>
              <div class="ms-3 space-y-1">
                <a href="${servicesPrefix}/business-development-consulting.html" class="block py-1 text-emerald-200/80 hover:text-white">${isAr ? 'استشارات تطوير الأعمال' : 'Business Development'}</a>
                <a href="${servicesPrefix}/it-pre-sales-support.html" class="block py-1 text-emerald-200/80 hover:text-white">${isAr ? 'استشارات ما قبل البيع IT' : 'IT Pre-Sales Support'}</a>
                <a href="${servicesPrefix}/solution-consulting.html" class="block py-1 text-emerald-200/80 hover:text-white">${isAr ? 'هندسة الحلول المؤسسية' : 'Enterprise Solutions'}</a>
              </div>
            </div>
          </div>
        </div>

        <!-- 3. CV -->
        <a href="${cvUrl}" class="flex items-center gap-2.5 text-xs sm:text-sm ${isCvActive ? 'text-[#E5C78B] font-bold' : 'text-emerald-200/90'} hover:text-[#E5C78B] py-2 transition-colors">
          <svg class="w-4 h-4 text-emerald-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          <span>${isAr ? 'السيرة الذاتية المهنية (CV)' : 'Curriculum Vitae (CV)'}</span>
        </a>

        <!-- 4. Portfolio & Projects -->
        <a href="${portfolioUrl}" class="flex items-center gap-2.5 text-xs sm:text-sm ${isPortfolioActive ? 'text-[#E5C78B] font-bold' : 'text-emerald-200/90'} hover:text-[#E5C78B] py-2 transition-colors">
          <svg class="w-4 h-4 text-emerald-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          <span>${isAr ? 'الأعمال والمشاريع (25 مشروعًا موثقًا)' : 'Portfolio & Client Projects (25 Projects)'}</span>
        </a>

        <!-- 5. Tenders -->
        <a href="${tendersUrl}" class="flex items-center gap-2.5 text-xs sm:text-sm ${isTendersActive ? 'text-[#E5C78B] font-bold' : 'text-emerald-200/90'} hover:text-[#E5C78B] py-2 transition-colors">
          <svg class="w-4 h-4 text-[#E5C78B] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
          <span class="font-bold text-white">${isAr ? 'المناقصات (34 منافسة)' : 'Tenders (34 Bids)'}</span>
        </a>

        <!-- 6. Certifications -->
        <a href="${certsUrl}" class="flex items-center gap-2.5 text-xs sm:text-sm ${isCertsActive ? 'text-[#E5C78B] font-bold' : 'text-emerald-200/90'} hover:text-[#E5C78B] py-2 transition-colors">
          <svg class="w-4 h-4 text-cyan-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
          <span>${isAr ? 'الشهادات والاعتمادات المهنية' : 'Certifications & Credentials'}</span>
        </a>

        <!-- 7. Articles & Knowledge Hub -->
        <a href="${articlesUrl}" class="flex items-center gap-2.5 text-xs sm:text-sm ${isArticlesActive ? 'text-[#E5C78B] font-bold' : 'text-emerald-200/90'} hover:text-[#E5C78B] py-2 transition-colors">
          <svg class="w-4 h-4 text-[#E5C78B] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          <span>${isAr ? 'المقالات والمعرفة (100 مقال متخصص)' : 'Knowledge Hub & Articles (100 Guides)'}</span>
        </a>

        <!-- 8. Contact -->
        <a href="${contactUrl}" class="flex items-center gap-2.5 text-xs sm:text-sm ${isContactActive ? 'text-[#E5C78B] font-bold' : 'text-emerald-200/90'} hover:text-[#E5C78B] py-2 transition-colors">
          <svg class="w-4 h-4 text-[#F0D9A2] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          <span>${isAr ? 'تواصل معي واستشارة فورية' : 'Contact Me & Bid Inquiry'}</span>
        </a>

        <!-- Language Switcher Row in Drawer -->
        <div class="pt-3 border-t border-emerald-950/80 flex items-center justify-between">
          <span class="text-xs text-emerald-400/80">${isAr ? 'لغة الموقع:' : 'Language:'}</span>
          <a href="${counterpartUrl}" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#C6A15B]/50 bg-[#07130D] text-xs font-bold text-[#E5C78B]">
            <span>${isAr ? '🇬🇧' : '🇸🇦'}</span>
            <span>${isAr ? 'Switch to English' : 'التبديل إلى العربية'}</span>
          </a>
        </div>

        <!-- Direct Consultation CTA in Drawer -->
        <div class="pt-1">
          <a href="${contactUrl}" class="block w-full py-2.5 px-4 text-center rounded-xl btn-gold text-xs font-bold shadow-md">
            ${isAr ? 'طلب استشارة ومناقصة' : 'Request Proposal & Consultation'}
          </a>
        </div>
      </div>
    </header>

    <!-- App-Like Mobile Bottom Navigation Bar (Fixed 5 Destinations) -->
    <nav class="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-[#07130D]/95 backdrop-blur-2xl border-t border-emerald-950/80 px-2 pt-1.5 pb-[max(0.6rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(0,0,0,0.6)]">
      <div class="grid grid-cols-5 items-center justify-around gap-1 text-center">
        <!-- 1. Home -->
        <a href="${homeUrl}" class="group flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all duration-200 active:scale-95 ${isHomeActive ? 'text-[#F0D9A2]' : 'text-slate-400 hover:text-slate-200'}">
          <div class="relative flex items-center justify-center w-10 h-7 rounded-full transition-all duration-200 ${isHomeActive ? 'bg-gradient-to-r from-[#C6A15B]/25 to-[#E5C78B]/20 border border-[#C6A15B]/50 shadow-[0_0_12px_rgba(198,161,91,0.3)]' : ''}">
            <svg class="w-5 h-5 transition-transform duration-200 ${isHomeActive ? 'text-[#F0D9A2] stroke-[2.2] scale-105 drop-shadow-[0_0_8px_rgba(229,199,139,0.7)]' : 'text-slate-400 group-hover:text-slate-200 stroke-[1.8]'}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            ${isHomeActive ? '<span class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#E5C78B] shadow-[0_0_6px_rgba(229,199,139,0.9)]"></span>' : ''}
          </div>
          <span class="text-[11px] mt-1 tracking-normal leading-tight ${isHomeActive ? 'text-white font-bold' : 'text-slate-400 font-semibold group-hover:text-slate-200'}">${isAr ? 'الرئيسية' : 'Home'}</span>
        </a>
        
        <!-- 2. Services -->
        <a href="${servicesHubUrl}" class="group flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all duration-200 active:scale-95 ${isServicesActive ? 'text-[#F0D9A2]' : 'text-slate-400 hover:text-slate-200'}">
          <div class="relative flex items-center justify-center w-10 h-7 rounded-full transition-all duration-200 ${isServicesActive ? 'bg-gradient-to-r from-[#C6A15B]/25 to-[#E5C78B]/20 border border-[#C6A15B]/50 shadow-[0_0_12px_rgba(198,161,91,0.3)]' : ''}">
            <svg class="w-5 h-5 transition-transform duration-200 ${isServicesActive ? 'text-[#F0D9A2] stroke-[2.2] scale-105 drop-shadow-[0_0_8px_rgba(229,199,139,0.7)]' : 'text-slate-400 group-hover:text-slate-200 stroke-[1.8]'}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2"/>
              <polyline points="2 17 12 22 22 17"/>
              <polyline points="2 12 12 17 22 12"/>
            </svg>
            ${isServicesActive ? '<span class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#E5C78B] shadow-[0_0_6px_rgba(229,199,139,0.9)]"></span>' : ''}
          </div>
          <span class="text-[11px] mt-1 tracking-normal leading-tight ${isServicesActive ? 'text-white font-bold' : 'text-slate-400 font-semibold group-hover:text-slate-200'}">${isAr ? 'الخدمات' : 'Services'}</span>
        </a>

        <!-- 3. CV -->
        <a href="${cvUrl}" class="group flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all duration-200 active:scale-95 ${isCvActive ? 'text-[#F0D9A2]' : 'text-slate-400 hover:text-slate-200'}">
          <div class="relative flex items-center justify-center w-10 h-7 rounded-full transition-all duration-200 ${isCvActive ? 'bg-gradient-to-r from-[#C6A15B]/25 to-[#E5C78B]/20 border border-[#C6A15B]/50 shadow-[0_0_12px_rgba(198,161,91,0.3)]' : ''}">
            <svg class="w-5 h-5 transition-transform duration-200 ${isCvActive ? 'text-[#F0D9A2] stroke-[2.2] scale-105 drop-shadow-[0_0_8px_rgba(229,199,139,0.7)]' : 'text-slate-400 group-hover:text-slate-200 stroke-[1.8]'}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
            ${isCvActive ? '<span class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#E5C78B] shadow-[0_0_6px_rgba(229,199,139,0.9)]"></span>' : ''}
          </div>
          <span class="text-[11px] mt-1 tracking-normal leading-tight ${isCvActive ? 'text-white font-bold' : 'text-slate-400 font-semibold group-hover:text-slate-200'}">${isAr ? 'السيرة' : 'CV'}</span>
        </a>

        <!-- 4. Portfolio -->
        <a href="${portfolioUrl}" class="group flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all duration-200 active:scale-95 ${isPortfolioActive ? 'text-[#F0D9A2]' : 'text-slate-400 hover:text-slate-200'}">
          <div class="relative flex items-center justify-center w-10 h-7 rounded-full transition-all duration-200 ${isPortfolioActive ? 'bg-gradient-to-r from-[#C6A15B]/25 to-[#E5C78B]/20 border border-[#C6A15B]/50 shadow-[0_0_12px_rgba(198,161,91,0.3)]' : ''}">
            <svg class="w-5 h-5 transition-transform duration-200 ${isPortfolioActive ? 'text-[#F0D9A2] stroke-[2.2] scale-105 drop-shadow-[0_0_8px_rgba(229,199,139,0.7)]' : 'text-slate-400 group-hover:text-slate-200 stroke-[1.8]'}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
            ${isPortfolioActive ? '<span class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#E5C78B] shadow-[0_0_6px_rgba(229,199,139,0.9)]"></span>' : ''}
          </div>
          <span class="text-[11px] mt-1 tracking-normal leading-tight ${isPortfolioActive ? 'text-white font-bold' : 'text-slate-400 font-semibold group-hover:text-slate-200'}">${isAr ? 'الأعمال' : 'Portfolio'}</span>
        </a>

        <!-- 5. More (Toggles Drawer for Tenders, Certs, Articles, Contact) -->
        <button 
          type="button" 
          onclick="const d = document.getElementById('mobile-nav-drawer'); if(d){ d.classList.toggle('hidden'); window.scrollTo({top: 0, behavior: 'smooth'}); }" 
          class="group flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all duration-200 active:scale-95 text-slate-400 hover:text-slate-200 cursor-pointer"
          aria-label="${isAr ? 'المزيد من الخيارات' : 'More Options'}"
        >
          <div class="relative flex items-center justify-center w-10 h-7 rounded-full transition-all duration-200">
            <svg class="w-5 h-5 transition-transform duration-200 text-slate-400 group-hover:text-slate-200 stroke-[1.8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
            </svg>
          </div>
          <span class="text-[11px] mt-1 tracking-normal leading-tight font-semibold text-slate-400 group-hover:text-slate-200">${isAr ? 'المزيد' : 'More'}</span>
        </button>
      </div>
    </nav>
  `;
}

// Function to update a single HTML file
export function updateHtmlFile(fullPath: string): boolean {
  const content = fs.readFileSync(fullPath, 'utf-8');
  const relPath = path.relative(process.cwd(), fullPath).replace(/\\/g, '/');

  // Determine language
  const isAr = relPath.startsWith('ar/');
  const lang = isAr ? 'ar' : 'en';

  const newHeader = buildHeaderHTML(lang, relPath);

  let updated = content;

  // 1. Replace <header>...</header> or older sticky <nav>
  const headerRegex = /<header[\s\S]*?<\/header>/i;
  const stickyNavRegex = /<nav class="sticky top-0 z-50[\s\S]*?<\/nav>/i;
  if (headerRegex.test(updated)) {
    updated = updated.replace(headerRegex, newHeader.trim());
  } else if (stickyNavRegex.test(updated)) {
    updated = updated.replace(stickyNavRegex, newHeader.trim());
  } else if (updated.includes('<div id="universal-header-placeholder"></div>')) {
    updated = updated.replace('<div id="universal-header-placeholder"></div>', newHeader.trim());
  }

  // 2. Ensure canonical and alternate hreflang tags match exact counterpart
  let counterpartUrl = '/index.html';
  const isRoot = relPath === 'index.html' || relPath === 'en/index.html';
  const isArHome = relPath === 'ar/index.html';

  if (isRoot) {
    counterpartUrl = '/ar/index.html';
  } else if (isArHome) {
    counterpartUrl = '/index.html';
  } else if (relPath.startsWith('ar/')) {
    counterpartUrl = `/en/${relPath.substring(3)}`;
  } else if (relPath.startsWith('en/')) {
    counterpartUrl = `/ar/${relPath.substring(3)}`;
  }

  const currentCanonical = isRoot ? '/index.html' : `/${relPath}`;
  const arAlternate = isRoot ? '/ar/index.html' : (isAr ? `/${relPath}` : counterpartUrl);
  const enAlternate = isRoot ? '/index.html' : (isAr ? counterpartUrl : `/${relPath}`);

  // Replace or update link alternate tags
  // Replace hreflang="ar" and hreflang="en" if present
  updated = updated.replace(/<link[^>]*hreflang=["']ar["'][^>]*>/i, `<link rel="alternate" hreflang="ar" href="${arAlternate}" />`);
  updated = updated.replace(/<link[^>]*hreflang=["']en["'][^>]*>/i, `<link rel="alternate" hreflang="en" href="${enAlternate}" />`);

  fs.writeFileSync(fullPath, updated, 'utf-8');
  return true;
}

// Batch run across all HTML files
function run() {
  const dirs = ['ar', 'en'];
  const allFiles: string[] = ['index.html'];

  function walk(dir: string) {
    const files = fs.readdirSync(dir);
    for (const f of files) {
      const p = path.join(dir, f);
      const stat = fs.statSync(p);
      if (stat.isDirectory()) {
        walk(p);
      } else if (f.endsWith('.html')) {
        allFiles.push(p.replace(/\\/g, '/'));
      }
    }
  }

  dirs.forEach(d => walk(d));

  console.log(`Processing ${allFiles.length} HTML files...`);

  let count = 0;
  for (const f of allFiles) {
    if (fs.existsSync(f)) {
      updateHtmlFile(f);
      count++;
    }
  }

  console.log(`✓ Successfully updated navigation and exact language links across all ${count} pages!`);
}

run();
