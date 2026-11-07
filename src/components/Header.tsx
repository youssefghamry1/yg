import React, { useState } from 'react';
import {
  FileText,
  Briefcase,
  Layers,
  BookOpen,
  Mail,
  Home,
  Award,
  CheckCircle2,
  Globe,
  ChevronDown,
  Settings,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { useData } from '../context/DataContext';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onOpenAdmin: () => void;
  isAr?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  onOpenAdmin,
  isAr = true,
}) => {
  const { profile, adminMode } = useData();
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setCurrentTab(id);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Purely technical services categories - strictly NO tenders, NO portfolio, NO certificates here
  const serviceCategories = [
    {
      title: isAr ? 'تصميم وتطوير المواقع والمتاجر' : 'Web & E-Commerce Development',
      icon: '🌐',
      services: [
        { name: isAr ? 'تطوير مواقع ووردبريس' : 'WordPress Development', slug: 'wordpress-development' },
        { name: isAr ? 'تطوير متاجر شوبيفاي' : 'Shopify Store Development', slug: 'shopify-development' },
        { name: isAr ? 'تطوير مواقع دروبال للمؤسسات' : 'Drupal Enterprise Portals', slug: 'drupal-development' },
        { name: isAr ? 'تطوير متاجر ماجنتو / أدوبي' : 'Magento / Adobe Commerce', slug: 'magento-development' },
        { name: isAr ? 'تصميم وتطوير متاجر سلة' : 'Salla Store Development', slug: 'salla-store-development' },
        { name: isAr ? 'تصميم وتطوير متاجر زد' : 'Zid Store Development', slug: 'zid-store-development' },
        { name: isAr ? 'تطوير متاجر أوبن كارت' : 'OpenCart Store Development', slug: 'opencart-development' },
      ],
    },
    {
      title: isAr ? 'البرمجيات والأنظمة الإدارية' : 'Software & ERP Systems',
      icon: '⚙️',
      services: [
        { name: isAr ? 'أنظمة تخطيط الموارد ERP' : 'ERP System Engineering', slug: 'erp-system-development' },
        { name: isAr ? 'أنظمة علاقات العملاء CRM' : 'CRM Systems Development', slug: 'crm-development' },
        { name: isAr ? 'أنظمة نقاط البيع POS' : 'Point of Sale (POS) Systems', slug: 'pos-development' },
        { name: isAr ? 'أنظمة الموارد البشرية والرواتب' : 'HR & Payroll Systems', slug: 'hr-systems-development' },
        { name: isAr ? 'أنظمة إدارة المخازن WMS' : 'Warehouse Systems (WMS)', slug: 'inventory-systems-development' },
        { name: isAr ? 'تطوير البرمجيات المخصصة' : 'Custom Software Engineering', slug: 'custom-software-development' },
        { name: isAr ? 'أتمتة العمليات الإدارية' : 'Business Process Automation', slug: 'business-process-automation' },
      ],
    },
    {
      title: isAr ? 'تطوير تطبيقات الجوال' : 'Mobile Application Development',
      icon: '📱',
      services: [
        { name: isAr ? 'تطوير تطبيقات iOS والآيفون' : 'Native iOS Development', slug: 'ios-app-development' },
        { name: isAr ? 'تطوير تطبيقات أندرويد' : 'Native Android Development', slug: 'android-app-development' },
        { name: isAr ? 'تطبيقات Flutter وReact Native' : 'Cross-Platform Mobile Apps', slug: 'cross-platform-app-development' },
        { name: isAr ? 'تطبيقات الأعمال والشركات' : 'Enterprise Mobile Solutions', slug: 'business-mobile-applications' },
        { name: isAr ? 'تطبيقات المتاجر الإلكترونية' : 'E-Commerce Mobile Apps', slug: 'ecommerce-mobile-applications' },
        { name: isAr ? 'تصميم واجهات وتجربة المستخدم UI/UX' : 'Mobile UI/UX Design', slug: 'mobile-ui-ux-design' },
      ],
    },
    {
      title: isAr ? 'التسويق الرقمي والسيو التقني' : 'Technical SEO & Digital Growth',
      icon: '🚀',
      services: [
        { name: isAr ? 'السيو التقني وسرعة المواقع' : 'Technical SEO Architecture', slug: 'technical-seo' },
        { name: isAr ? 'تحسين محركات البحث الداخلي On-Page' : 'On-Page SEO Optimization', slug: 'on-page-seo' },
        { name: isAr ? 'تسريع المواقع Core Web Vitals' : 'PageSpeed Optimization', slug: 'speed-optimization' },
        { name: isAr ? 'تحسين الأرشفة والفهرسة' : 'Indexing & Crawl Optimization', slug: 'website-indexing-optimization' },
        { name: isAr ? 'استراتيجية محتوى السيو' : 'SEO Content Strategy', slug: 'seo-content-strategy' },
      ],
    },
    {
      title: isAr ? 'المناقصات والعطاءات الحكومية (اعتماد)' : 'Government Tenders & Etimad Bids',
      icon: '🏛️',
      services: [
        { name: isAr ? 'دعم مناقصات منصة اعتماد' : 'Etimad Tender Support', slug: 'etimad-tender-support' },
        { name: isAr ? 'إعداد وصياغة العروض الفنية' : 'Technical Proposal Preparation', slug: 'technical-proposal-preparation' },
        { name: isAr ? 'مصفوفة الامتثال والمطابقة' : 'Tender Compliance Matrix', slug: 'tender-compliance-matrix' },
        { name: isAr ? 'المراجعة الصارمة Red Team' : 'Red Team Proposal Review', slug: 'red-team-proposal-review' },
        { name: isAr ? 'تحليل كراسات الشروط والمواصفات' : 'Tender Document Analysis', slug: 'tender-document-analysis' },
        { name: isAr ? 'تقييم قرار التقدم Bid/No-Bid' : 'Bid / No-Bid Assessment', slug: 'bid-no-bid-assessment' },
      ],
    },
    {
      title: isAr ? 'تطوير الأعمال والاستشارات التقنية' : 'Business Development & IT Consulting',
      icon: '💼',
      services: [
        { name: isAr ? 'استشارات ما قبل البيع IT Pre-Sales' : 'IT Pre-Sales Consulting', slug: 'it-pre-sales-support' },
        { name: isAr ? 'استشارات تطوير الأعمال' : 'Business Development Consulting', slug: 'business-development-consulting' },
        { name: isAr ? 'هندسة الحلول الرقمية' : 'Digital Solution Consulting', slug: 'solution-consulting' },
        { name: isAr ? 'تحليل العمليات التشغيلية' : 'Business Process Analysis', slug: 'business-process-analysis' },
        { name: isAr ? 'تقييم دراسات الجدوى والفرص' : 'Opportunity Assessment', slug: 'opportunity-assessment' },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#050806]/95 backdrop-blur-xl border-b border-emerald-950/80 shadow-md">
      {/* Top Luxury Kicker Bar for Desktop */}
      <div className="hidden lg:block bg-[#07130D] text-slate-300 text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-emerald-950/80">
        <div className="w-full max-w-7xl 2xl:max-w-[1700px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
            <span className="font-semibold text-slate-200 tracking-wide">{profile.name}</span>
            <span className="text-emerald-800">·</span>
            <span className="text-slate-400 truncate">
              {isAr
                ? 'مطور Full-Stack · مواقع وأنظمة وتطبيقات جوال · إعداد العروض الفنية وضبط جودة المناقصات'
                : 'Full-Stack Developer · Web, Software & Mobile Apps · Technical Proposals & Bid QA'}
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs shrink-0">
            <span className="text-slate-400">{profile.location}</span>
            <button
              onClick={onOpenAdmin}
              className="flex items-center gap-1.5 text-[#E5C78B] hover:text-[#F0D9A2] transition-colors cursor-pointer font-medium"
              title="Content Management Studio"
            >
              <Settings className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>{adminMode ? 'CMS Active' : 'CMS Studio'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="w-full max-w-7xl 2xl:max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity with 3D Emblem */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 text-left group cursor-pointer focus-visible:outline-none shrink-0"
          >
            <div className="relative w-11 h-11 rounded-full border border-[#C6A15B]/50 p-0.5 bg-[#07130D] group-hover:border-[#E5C78B] transition-colors shrink-0 shadow-[0_0_15px_rgba(198,161,91,0.2)]">
              <img
                src="/assets/aistudio/image_ef5d64bf.png"
                alt="شعار يوسف غمري"
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <div className="font-cinzel font-bold text-white text-base sm:text-lg tracking-wider gold-gradient-text uppercase leading-none">
                {isAr ? 'يوسف غمري' : 'Youssef Ghamry'}
              </div>
              <div className="text-[10px] text-emerald-300/90 font-mono tracking-tight uppercase mt-1">
                {isAr ? 'مطور Full-Stack · مواقع وأنظمة وتطبيقات' : 'Full-Stack Developer | Web, Apps & Systems'}
              </div>
            </div>
          </button>

          {/* Desktop Navigation: EXACT 8 INDEPENDENT SECTIONS + LANGUAGE SWITCHER */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-semibold" aria-label="Main Navigation">
            {/* 1. الرئيسية (Home) */}
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                currentTab === 'home'
                  ? 'text-[#F0D9A2] bg-[#0B1F16] border border-[#C6A15B]/40'
                  : 'text-slate-300 hover:text-white hover:bg-[#07130D]'
              }`}
            >
              {isAr ? 'الرئيسية' : 'Home'}
            </button>

            {/* 2. الخدمات (Services) with Mega Menu Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('services')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                  currentTab === 'services' || servicesDropdownOpen
                    ? 'text-[#F0D9A2] bg-[#0B1F16] border border-[#C6A15B]/40'
                    : 'text-slate-300 hover:text-white hover:bg-[#07130D]'
                }`}
                aria-haspopup="true"
                aria-expanded={servicesDropdownOpen}
              >
                <span>{isAr ? 'الخدمات' : 'Services'}</span>
                <ChevronDown className="w-3.5 h-3.5 text-emerald-400" />
              </button>

              {/* Mega Menu Dropdown Panel - Strictly Services Only */}
              {servicesDropdownOpen && (
                <div className="absolute top-full right-0 xl:right-auto xl:left-1/2 xl:-translate-x-1/2 w-[880px] p-6 mt-1 rounded-2xl bg-[#07130D]/98 border border-[#C6A15B]/40 shadow-2xl backdrop-blur-2xl z-50 text-start animate-fade-in space-y-4">
                  <div className="flex items-center justify-between border-b border-emerald-950/80 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#C6A15B] animate-pulse" />
                      <span className="text-xs font-bold uppercase tracking-wider text-white">
                        {isAr ? 'دليل الخدمات التقنية والاستشارية المتكاملة' : 'Professional Technical Services Catalog'}
                      </span>
                    </div>
                    <button
                      onClick={() => handleNavClick('services')}
                      className="text-xs font-bold text-[#E5C78B] hover:text-white transition-colors cursor-pointer"
                    >
                      {isAr ? 'عرض دليل الخدمات الكامل ←' : 'View All Services →'}
                    </button>
                  </div>

                  {/* Pure Services Categories Grid */}
                  <div className="grid grid-cols-3 gap-4 text-xs">
                    {serviceCategories.map((cat, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[#0B1F16]/90 border border-emerald-950 hover:border-emerald-500/30 transition-colors space-y-2"
                      >
                        <div className="flex items-center gap-2 pb-1.5 border-b border-emerald-950 text-white font-bold text-xs truncate">
                          <span>{cat.icon}</span>
                          <span className="truncate">{cat.title}</span>
                        </div>
                        <div className="space-y-1">
                          {cat.services.slice(0, 5).map((srv) => (
                            <button
                              key={srv.slug}
                              onClick={() => {
                                window.location.hash = `services/${srv.slug}`;
                                setServicesDropdownOpen(false);
                              }}
                              className="w-full text-start flex items-center gap-1.5 py-0.5 text-slate-300 hover:text-[#E5C78B] transition-colors truncate cursor-pointer text-[11px]"
                            >
                              <span className="w-1 h-1 rounded-full bg-emerald-500/60 shrink-0" />
                              <span className="truncate">{srv.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-emerald-950/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span>
                      {isAr
                        ? '✨ حلول برمجية وهندسية متكاملة للشركات والجهات الحكومية'
                        : '✨ Comprehensive software architecture & enterprise digital solutions'}
                    </span>
                    <button
                      onClick={() => handleNavClick('services')}
                      className="text-[#E5C78B] font-bold hover:underline cursor-pointer"
                    >
                      {isAr ? 'تصفح جميع الخدمات' : 'Explore All Services'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 3. السيرة الذاتية (CV) - INDEPENDENT LINK */}
            <button
              onClick={() => handleNavClick('cv')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                currentTab === 'cv'
                  ? 'text-[#F0D9A2] bg-[#0B1F16] border border-[#C6A15B]/40'
                  : 'text-slate-300 hover:text-white hover:bg-[#07130D]'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>{isAr ? 'السيرة الذاتية' : 'CV'}</span>
            </button>

            {/* 4. الأعمال والمشاريع (Portfolio) - INDEPENDENT LINK */}
            <button
              onClick={() => handleNavClick('portfolio')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                currentTab === 'portfolio'
                  ? 'text-[#F0D9A2] bg-[#0B1F16] border border-[#C6A15B]/40'
                  : 'text-slate-300 hover:text-white hover:bg-[#07130D]'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
              <span>{isAr ? 'الأعمال والمشاريع' : 'Portfolio'}</span>
            </button>

            {/* 5. المناقصات (Tenders) - INDEPENDENT LINK */}
            <button
              onClick={() => handleNavClick('tenders')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                currentTab === 'tenders'
                  ? 'text-[#F0D9A2] bg-[#0B1F16] border border-[#C6A15B]/40'
                  : 'text-slate-300 hover:text-white hover:bg-[#07130D]'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-[#E5C78B]" />
              <span className="font-bold text-[#E5C78B] hover:text-white transition-colors">
                {isAr ? 'المناقصات' : 'Tenders'}
              </span>
            </button>

            {/* 6. الشهادات (Certifications) - INDEPENDENT LINK */}
            <button
              onClick={() => handleNavClick('certifications')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                currentTab === 'certifications'
                  ? 'text-[#F0D9A2] bg-[#0B1F16] border border-[#C6A15B]/40'
                  : 'text-slate-300 hover:text-white hover:bg-[#07130D]'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isAr ? 'الشهادات' : 'Certifications'}</span>
            </button>

            {/* 7. المقالات (Articles) - INDEPENDENT LINK */}
            <button
              onClick={() => handleNavClick('articles')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                currentTab === 'articles'
                  ? 'text-[#F0D9A2] bg-[#0B1F16] border border-[#C6A15B]/40'
                  : 'text-slate-300 hover:text-white hover:bg-[#07130D]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>{isAr ? 'المقالات' : 'Articles'}</span>
            </button>

            {/* 8. تواصل معي (Contact) - INDEPENDENT LINK */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                currentTab === 'contact'
                  ? 'text-[#F0D9A2] bg-[#0B1F16] border border-[#C6A15B]/40'
                  : 'text-slate-300 hover:text-white hover:bg-[#07130D]'
              }`}
            >
              <Mail className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>{isAr ? 'تواصل معي' : 'Contact'}</span>
            </button>

            {/* 9. مبدل اللغة (Language Switcher) */}
            <a
              href={isAr ? '/en/index.html' : '/ar/index.html'}
              className="ms-2 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#C6A15B]/50 hover:border-[#E5C78B] bg-[#07130D] text-[11px] font-bold text-[#E5C78B] hover:text-white transition-all shadow-sm"
              title={isAr ? 'Switch to English' : 'التحويل للغة العربية'}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{isAr ? 'English (EN)' : 'النسخة العربية'}</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
