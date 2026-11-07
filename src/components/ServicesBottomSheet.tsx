import React, { useState, useMemo } from 'react';
import { X, Search, Layers, ChevronRight, ExternalLink, ArrowUpRight } from 'lucide-react';
import { ALL_SERVICES_CATALOG, SERVICE_CATEGORIES, CatalogServiceItem } from '../data/servicesCatalog';

interface ServicesBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  isAr?: boolean;
  onSelectService?: (slug: string) => void;
}

export const ServicesBottomSheet: React.FC<ServicesBottomSheetProps> = ({
  isOpen,
  onClose,
  isAr = true,
  onSelectService,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredServices = useMemo(() => {
    return ALL_SERVICES_CATALOG.filter((service) => {
      const matchesCat =
        selectedCategory === 'all' || service.category === selectedCategory;

      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesCat;

      const title = isAr ? service.titleAr.toLowerCase() : service.titleEn.toLowerCase();
      const desc = isAr ? service.descAr.toLowerCase() : service.descEn.toLowerCase();
      const slug = service.slug.toLowerCase();

      return matchesCat && (title.includes(q) || desc.includes(q) || slug.includes(q));
    });
  }, [selectedCategory, searchQuery, isAr]);

  if (!isOpen) return null;

  const handleServiceClick = (service: CatalogServiceItem) => {
    onClose();
    if (onSelectService) {
      onSelectService(service.slug);
    } else {
      // Direct navigation to service static page
      const targetUrl = isAr
        ? `/ar/services/${service.slug}.html`
        : `/en/services/${service.slug}.html`;
      window.location.href = targetUrl;
    }
  };

  return (
    <div
      className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end bg-black/80 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={isAr ? 'قائمة جميع الخدمات' : 'All Services Menu'}
    >
      {/* Backdrop Click Dismiss */}
      <div className="flex-1 w-full" onClick={onClose} />

      {/* Sheet Body Container with Slide-Up */}
      <div className="w-full bg-[#07130D] border-t border-[#C6A15B]/50 rounded-t-3xl shadow-[0_-12px_40px_rgba(0,0,0,0.8)] flex flex-col max-h-[88vh] animate-slide-up pb-[max(env(safe-area-inset-bottom),16px)]">
        {/* Grab Handle */}
        <div className="pt-3 pb-1 flex justify-center cursor-pointer" onClick={onClose}>
          <div className="w-12 h-1.5 bg-emerald-900/80 rounded-full" />
        </div>

        {/* Header Bar */}
        <div className="px-5 py-3 border-b border-emerald-950/80 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C6A15B]/20 to-emerald-500/20 border border-[#C6A15B]/40 flex items-center justify-center text-base">
              🌐
            </div>
            <div>
              <h2 className="font-bold text-sm text-white flex items-center gap-2">
                <span>{isAr ? 'جميع الخدمات المتخصصة' : 'All Specialized Services'}</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#0B1F16] text-[#E5C78B] border border-[#C6A15B]/30 font-bold">
                  93
                </span>
              </h2>
              <p className="text-[10px] text-emerald-400/80 font-mono">
                {isAr
                  ? 'مناقصات اعتماد · تطوير الويب · البرمجيات · السيو'
                  : 'Etimad Bids · Web Dev · ERP · SEO Architecture'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-[#0B1F16] border border-emerald-900 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label={isAr ? 'إغلاق القائمة' : 'Close Menu'}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="px-4 pt-3 pb-2 shrink-0">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isAr ? 'ابحث في 93 خدمة متخصصة...' : 'Search across 93 services...'}
              className="w-full bg-[#0B1F16] border border-emerald-950/90 focus:border-[#C6A15B]/60 rounded-xl px-9 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none transition-colors"
            />
            <Search className={`w-4 h-4 text-slate-400 absolute top-3 ${isAr ? 'right-3' : 'left-3'}`} />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className={`absolute top-2.5 ${isAr ? 'left-3' : 'right-3'} text-slate-400 hover:text-white text-xs`}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills (Horizontal Scroll) */}
        <div className="px-4 pb-2.5 overflow-x-auto no-scrollbar shrink-0 flex items-center gap-1.5 border-b border-emerald-950/60">
          {SERVICE_CATEGORIES.map((cat) => {
            const isCatActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 shrink-0 cursor-pointer ${
                  isCatActive
                    ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-md shadow-emerald-950/40 border border-emerald-500/50'
                    : 'bg-[#0B1F16] text-slate-300 hover:text-white border border-emerald-950 hover:border-emerald-800'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{isAr ? cat.nameAr : cat.nameEn}</span>
              </button>
            );
          })}
        </div>

        {/* Scrollable Services List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2.5 min-h-[260px]">
          {filteredServices.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="text-3xl">🔍</div>
              <p className="text-xs text-slate-400">
                {isAr
                  ? 'لم يتم العثور على خدمات مطابقة للبحث'
                  : 'No services found matching your query'}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-xs text-[#E5C78B] underline font-bold"
              >
                {isAr ? 'عرض جميع الخدمات' : 'View All Services'}
              </button>
            </div>
          ) : (
            filteredServices.map((service) => {
              const title = isAr ? service.titleAr : service.titleEn;
              const desc = isAr ? service.descAr : service.descEn;
              const catName = isAr ? service.categoryNameAr : service.categoryNameEn;

              return (
                <button
                  key={service.slug}
                  onClick={() => handleServiceClick(service)}
                  className="w-full text-start p-3 rounded-2xl bg-[#0B1F16]/95 border border-emerald-950 hover:border-[#C6A15B]/50 transition-all active:scale-[0.99] flex items-center justify-between gap-3 group cursor-pointer shadow-sm"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#07130D] border border-emerald-500/20 flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition-transform">
                      {service.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] font-semibold text-emerald-400 truncate">
                          {catName}
                        </span>
                      </div>
                      <h3 className="text-xs font-bold text-white group-hover:text-[#E5C78B] transition-colors leading-snug line-clamp-2">
                        {title}
                      </h3>
                      {desc && (
                        <p className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                          {desc}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="w-7 h-7 rounded-lg bg-[#07130D] border border-emerald-950 flex items-center justify-center text-slate-400 group-hover:text-[#E5C78B] group-hover:border-[#C6A15B]/40 shrink-0 transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer Quick Action */}
        <div className="p-3 bg-[#07130D] border-t border-emerald-950/80 shrink-0 flex items-center justify-between text-xs">
          <a
            href={isAr ? '/ar/services/index.html' : '/en/services/index.html'}
            className="text-xs font-bold text-[#E5C78B] hover:underline flex items-center gap-1.5"
          >
            <span>{isAr ? 'فتح فهرس الخدمات الكامل (93 صفحة) ←' : 'Open Full Services Catalog (93 Pages) →'}</span>
          </a>
          <button
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-white px-2 py-1"
          >
            {isAr ? 'إغلاق' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
