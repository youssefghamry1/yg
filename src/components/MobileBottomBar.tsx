import React, { useState } from 'react';
import {
  Home,
  Layers,
  Briefcase,
  Trophy,
  MoreHorizontal,
  X,
  FileText,
  BookOpen,
  Mail,
  Download,
  Settings,
  MessageCircle,
  ExternalLink,
  ChevronRight,
  Globe,
  CheckCircle2,
  Sparkles,
  HelpCircle,
} from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';
import { ServicesBottomSheet } from './ServicesBottomSheet';

interface MobileBottomBarProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onOpenAdmin: () => void;
  isMoreDrawerOpen: boolean;
  setIsMoreDrawerOpen: (open: boolean) => void;
  isAr?: boolean;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  currentTab,
  onNavigate,
  onOpenAdmin,
  isMoreDrawerOpen,
  setIsMoreDrawerOpen,
  isAr = true,
}) => {
  const [isServicesSheetOpen, setIsServicesSheetOpen] = useState(false);

  const tabs = [
    {
      id: 'home',
      label: isAr ? 'الرئيسية' : 'Home',
      icon: Home,
    },
    {
      id: 'services',
      label: isAr ? 'الخدمات' : 'Services',
      icon: Layers,
    },
    {
      id: 'cv',
      label: isAr ? 'السيرة الذاتية' : 'CV',
      icon: FileText,
    },
    {
      id: 'portfolio',
      label: isAr ? 'الأعمال' : 'Portfolio',
      icon: Briefcase,
    },
    {
      id: 'more',
      label: isAr ? 'المزيد' : 'More',
      icon: MoreHorizontal,
    },
  ];

  const handleTabClick = (id: string) => {
    if (id === 'services') {
      setIsMoreDrawerOpen(false);
      setIsServicesSheetOpen(true);
    } else if (id === 'more') {
      setIsServicesSheetOpen(false);
      setIsMoreDrawerOpen(!isMoreDrawerOpen);
    } else {
      setIsServicesSheetOpen(false);
      setIsMoreDrawerOpen(false);
      onNavigate(id);
    }
  };

  const moreMenuItems = [
    {
      id: 'tenders',
      label: isAr ? 'المناقصات والعطاءات (اعتماد)' : 'Government Tenders (Etimad)',
      sublabel: isAr ? '34 منافسة حكومية وتقنية موثقة' : '34 Verified Government & IT Bids',
      icon: Trophy,
      badge: '34',
      color: 'text-[#E5C78B]',
    },
    {
      id: 'certifications',
      label: isAr ? 'الشهادات والاعتمادات المهنية' : 'Professional Certifications',
      sublabel: isAr ? '27 شهادة معتمدة من AWS، جوجل، IBM، وميتا' : '27 Verified Credentials from AWS, Google, Meta',
      icon: CheckCircle2,
      badge: '27+',
      color: 'text-cyan-400',
    },
    {
      id: 'articles',
      label: isAr ? 'المكتبة المعرفية والمقالات' : 'Knowledge Hub & Articles',
      sublabel: isAr ? '100 مقال متخصص في كراسات الشروط والتقنية' : '100 Technical Guides & Procurement Blueprints',
      icon: BookOpen,
      badge: '100',
      color: 'text-amber-400',
    },
    {
      id: 'contact',
      label: isAr ? 'تواصل معي واستشارة فورية' : 'Contact & Bid Consultation',
      sublabel: isAr ? 'استشارات كراسات الشروط والمشاريع التقنية' : 'Direct Inquiry for Tenders & IT Projects',
      icon: Mail,
      color: 'text-[#F0D9A2]',
    },
  ];

  // Helper function to resolve the counterpart language URL safely
  const getCounterpartUrl = () => {
    const pathname = window.location.pathname;
    const hash = window.location.hash;

    if (isAr) {
      if (pathname === '/ar/' || pathname === '/ar/index.html' || pathname === '/ar') {
        return '/index.html' + hash;
      }
      if (pathname.startsWith('/ar/services/')) {
        const slug = pathname.replace('/ar/services/', '');
        return `/en/services/${slug}` + hash;
      }
      if (pathname.startsWith('/ar/tenders/')) {
        const slug = pathname.replace('/ar/tenders/', '');
        return `/en/tenders/${slug}` + hash;
      }
      if (pathname.startsWith('/ar/certifications/')) {
        return `/en/certifications/index.html` + hash;
      }
      if (pathname.startsWith('/ar/articles/')) {
        const slug = pathname.replace('/ar/articles/', '');
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
        const baseSlug = slug.replace('.html', '');
        if (enArticlesList.includes(baseSlug)) {
          return `/en/articles/${slug}` + hash;
        }
        return '/en/articles/index.html' + hash;
      }
      return pathname.replace('/ar/', '/en/') + hash;
    } else {
      if (pathname === '/' || pathname === '/index.html' || pathname === '') {
        return '/ar/index.html' + hash;
      }
      if (pathname.startsWith('/en/services/')) {
        const slug = pathname.replace('/en/services/', '');
        return `/ar/services/${slug}` + hash;
      }
      if (pathname.startsWith('/en/tenders/')) {
        const slug = pathname.replace('/en/tenders/', '');
        return `/ar/tenders/${slug}` + hash;
      }
      if (pathname.startsWith('/en/certifications/')) {
        return `/ar/certifications/index.html` + hash;
      }
      if (pathname.startsWith('/en/articles/')) {
        const slug = pathname.replace('/en/articles/', '');
        return `/ar/articles/${slug}` + hash;
      }
      return `/ar${pathname}` + hash;
    }
  };

  return (
    <>
      {/* 1. FIXED BOTTOM APP BAR */}
      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#07130D]/95 backdrop-blur-2xl border-t border-emerald-950/80 px-2 pt-1.5 pb-[max(env(safe-area-inset-bottom),10px)] shadow-[0_-8px_30px_rgba(0,0,0,0.7)]"
        aria-label={isAr ? 'شريط التنقل السفلي' : 'Bottom Navigation'}
      >
        <div className="grid grid-cols-5 items-center justify-around gap-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isTabActive =
              tab.id === 'services'
                ? isServicesSheetOpen || currentTab === 'services'
                : tab.id === 'more'
                ? isMoreDrawerOpen
                : currentTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all duration-200 active:scale-95 focus:outline-none cursor-pointer ${
                  isTabActive
                    ? 'text-[#F0D9A2]'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <div
                  className={`relative flex items-center justify-center w-10 h-7 rounded-full transition-all duration-200 ${
                    isTabActive
                      ? 'bg-gradient-to-r from-[#C6A15B]/25 to-[#E5C78B]/20 border border-[#C6A15B]/50 shadow-[0_0_12px_rgba(198,161,91,0.3)]'
                      : ''
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isTabActive
                        ? 'text-[#F0D9A2] stroke-[2.2] scale-105 drop-shadow-[0_0_8px_rgba(229,199,139,0.7)]'
                        : 'text-slate-400 stroke-[1.8]'
                    }`}
                  />
                  {isTabActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#E5C78B] shadow-[0_0_6px_rgba(229,199,139,0.9)]" />
                  )}
                </div>
                <span
                  className={`text-[11px] mt-1 tracking-normal leading-tight font-semibold ${
                    isTabActive ? 'text-white font-bold' : 'text-slate-400'
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* 2. SERVICES SLIDE-UP BOTTOM SHEET (Contains ALL 93 Services) */}
      <ServicesBottomSheet
        isOpen={isServicesSheetOpen}
        onClose={() => setIsServicesSheetOpen(false)}
        isAr={isAr}
        onSelectService={(slug) => {
          setIsServicesSheetOpen(false);
          // Navigate to static service page or tab
          const targetUrl = isAr
            ? `/ar/services/${slug}.html`
            : `/en/services/${slug}.html`;
          window.location.href = targetUrl;
        }}
      />

      {/* 3. MORE APP-LIKE BOTTOM SHEET */}
      {isMoreDrawerOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end bg-black/80 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label={isAr ? 'قائمة المزيد' : 'More Menu'}
        >
          {/* Backdrop Click Dismiss */}
          <div
            className="flex-1 w-full"
            onClick={() => setIsMoreDrawerOpen(false)}
          />

          {/* Drawer Body with Rounded Corners & Safe Drag Handle */}
          <div className="w-full bg-[#07130D] border-t border-[#C6A15B]/50 rounded-t-3xl shadow-2xl p-5 space-y-4 max-h-[85vh] overflow-y-auto pb-[max(env(safe-area-inset-bottom),20px)] animate-slide-up">
            {/* Grab Handle */}
            <div
              className="w-12 h-1.5 bg-emerald-900 rounded-full mx-auto cursor-pointer"
              onClick={() => setIsMoreDrawerOpen(false)}
            />

            {/* Header Lockup */}
            <div className="flex items-center justify-between border-b border-emerald-950/80 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full border border-[#C6A15B]/50 p-0.5 bg-[#07130D]">
                  <img
                    src="/assets/aistudio/image_ef5d64bf.png"
                    alt="Emblem"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-cinzel font-bold text-sm text-white">
                    {isAr ? 'يوسف غمري' : 'Youssef Ghamry'}
                  </h3>
                  <span className="text-[10px] text-emerald-400 font-mono">
                    {isAr ? 'القائمة الرئيسية والتطبيقات' : 'Main Menu & App Tools'}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsMoreDrawerOpen(false)}
                className="p-1.5 rounded-xl bg-[#0B1F16] border border-emerald-900 text-slate-300 hover:text-white"
                aria-label="Close Drawer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Navigation Rows */}
            <div className="space-y-2">
              {moreMenuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsMoreDrawerOpen(false);
                    }}
                    className="w-full p-3.5 rounded-2xl bg-[#0B1F16]/90 border border-emerald-950/90 hover:border-[#C6A15B]/50 flex items-center justify-between transition-all active:scale-[0.98] text-start group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#07130D] border border-emerald-500/20 flex items-center justify-center shrink-0">
                        <Icon className={`w-4 h-4 ${item.color}`} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-[#E5C78B] transition-colors">
                          {item.label}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5">
                          {item.sublabel}
                        </div>
                      </div>
                    </div>
                    {item.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#07130D] text-[#E5C78B] border border-[#C6A15B]/30 font-bold">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Consultation Request CTA */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-950/70 via-[#0B1F16] to-[#07130D] border border-emerald-500/30 flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#E5C78B]" />
                  <span>{isAr ? 'طلب استشارة أو عرض فني' : 'Request Proposal / Consultation'}</span>
                </div>
                <div className="text-[10px] text-slate-400">
                  {isAr ? 'دراسة كراسة الشروط وتقديم الدعم الفني' : 'RFP Analysis & Technical Proposal Drafting'}
                </div>
              </div>
              <button
                onClick={() => {
                  onNavigate('contact');
                  setIsMoreDrawerOpen(false);
                }}
                className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold text-xs shadow-md transition-all active:scale-95"
              >
                {isAr ? 'اطلب الآن' : 'Request'}
              </button>
            </div>

            {/* Smart Language Switcher & WhatsApp Grid */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              {/* Language Switcher moved exclusively into More */}
              <a
                href={getCounterpartUrl()}
                className="py-3 px-3 rounded-2xl bg-[#0B1F16] border border-[#C6A15B]/50 text-xs font-bold text-[#E5C78B] hover:text-white flex items-center justify-center gap-2 hover:border-[#E5C78B] transition-all shadow-sm"
              >
                <Globe className="w-4 h-4 text-[#E5C78B]" />
                <span>{isAr ? 'English (EN)' : 'النسخة العربية (AR)'}</span>
              </a>

              <a
                href="https://wa.me/201503292942"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isAr ? 'واتساب مباشر' : 'WhatsApp'}</span>
              </a>
            </div>

            {/* PWA Install Row */}
            <div className="p-3 rounded-2xl bg-[#0B1F16]/90 border border-emerald-950 flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isAr ? 'تثبيت المنصة كتطبيق' : 'Install as PWA App'}</span>
                </div>
                <div className="text-[10px] text-slate-400">
                  {isAr ? 'شاشة الهاتف الرئيسية' : 'Instant mobile access'}
                </div>
              </div>
              <PWAInstallButton isAr={isAr} />
            </div>

            {/* Admin Studio Trigger */}
            <div className="pt-2 border-t border-emerald-950/80 flex items-center justify-between text-[11px] text-slate-400">
              <span>{isAr ? 'المنصة المهنية المعتمدة' : 'Official Professional Platform'}</span>
              <button
                onClick={() => {
                  onOpenAdmin();
                  setIsMoreDrawerOpen(false);
                }}
                className="text-[#C6A15B] hover:text-[#E5C78B] flex items-center gap-1 font-mono cursor-pointer"
              >
                <Settings className="w-3 h-3" />
                <span>CMS Studio</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
