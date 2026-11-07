import React, { useState } from 'react';
import {
  Briefcase,
  Search,
  ExternalLink,
  Plus,
  Globe,
  MapPin,
  Layers,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { Project } from '../types';

interface PortfolioPageProps {
  onSelectProject: (project: Project) => void;
  onOpenAdmin: () => void;
  isAr?: boolean;
}

const getCountryFlagEmoji = (code?: string): string => {
  if (!code) return '🌐';
  const flags: Record<string, string> = {
    bh: '🇧🇭',
    sa: '🇸🇦',
    ae: '🇦🇪',
    us: '🇺🇸',
    gb: '🇬🇧',
    de: '🇩🇪',
    ca: '🇨🇦',
    jp: '🇯🇵',
    in: '🇮🇳',
    tr: '🇹🇷',
    eg: '🇪🇬',
    bd: '🇧🇩',
    eu: '🇪🇺',
  };
  return flags[code.toLowerCase()] || '🌐';
};

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onSelectProject,
  onOpenAdmin,
  isAr = true,
}) => {
  const { projects } = useData();
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Explicitly focus on the 25 verified projects (proj-web-1 to proj-web-25)
  const verified25Projects = projects.filter((p) => p.id.startsWith('proj-web-'));

  const regions = [
    { id: 'All', labelAr: 'جميع الدول (25 مشروعاً)', labelEn: 'All Regions (25 Projects)' },
    { id: 'gulf', labelAr: 'الخليج والشرق الأوسط (السعودية، الإمارات، البحرين، مصر)', labelEn: 'Gulf & MENA (KSA, UAE, BH, EG)' },
    { id: 'na', labelAr: 'أمريكا وكندا (US & Canada)', labelEn: 'North America (US & Canada)' },
    { id: 'europe', labelAr: 'أوروبا (بريطانيا، ألمانيا، الاتحاد الأوروبي)', labelEn: 'Europe (UK, Germany, EU)' },
    { id: 'asia', labelAr: 'آسيا (اليابان، الهند، تركيا، بنغلاديش)', labelEn: 'Asia (Japan, India, Turkey, BD)' },
  ];

  const categories = [
    { id: 'All', labelAr: 'جميع الأعمال', labelEn: 'All Work' },
    { id: 'Websites', labelAr: 'المواقع الإلكترونية', labelEn: 'Websites' },
    { id: 'E-Commerce', labelAr: 'المتاجر الإلكترونية', labelEn: 'E-Commerce' },
    { id: 'Web Applications', labelAr: 'تطبيقات الويب', labelEn: 'Web Applications' },
    { id: 'Software & Business Systems', labelAr: 'أنظمة وبرمجيات أعمال', labelEn: 'Software & Business Systems' },
    { id: 'Mobile Applications', labelAr: 'تطبيقات الجوال', labelEn: 'Mobile Applications' },
    { id: 'UI/UX Design', labelAr: 'تصميم واجهات UI/UX', labelEn: 'UI/UX Design' },
    { id: 'Other Digital Solutions', labelAr: 'حلول رقمية أخرى', labelEn: 'Other Digital Solutions' },
  ];

  const filteredProjects = verified25Projects.filter((project) => {
    // 7 Core Category Matcher
    let matchesCategory = false;
    if (selectedCategory === 'All') {
      matchesCategory = true;
    } else if (selectedCategory === 'Websites') {
      matchesCategory =
        project.category === 'Websites' ||
        project.category === 'Web Development Projects' ||
        project.technologies.some((t) => ['WordPress', 'Drupal', 'Web Development', 'Corporate'].some((k) => t.toLowerCase().includes(k.toLowerCase())));
    } else if (selectedCategory === 'E-Commerce') {
      matchesCategory =
        project.category === 'E-Commerce' ||
        project.category === 'E-commerce Websites' ||
        project.role.toLowerCase().includes('commerce') ||
        project.technologies.some((t) => ['commerce', 'salla', 'shopify', 'store', 'cart'].some((k) => t.toLowerCase().includes(k.toLowerCase())));
    } else if (selectedCategory === 'Web Applications') {
      matchesCategory =
        project.category === 'Web Applications' ||
        ['proj-web-1', 'proj-web-12', 'proj-web-14', 'proj-web-16', 'proj-web-20'].includes(project.id) ||
        project.technologies.some((t) => ['react', 'next', 'portal', 'web app'].some((k) => t.toLowerCase().includes(k.toLowerCase())));
    } else if (selectedCategory === 'Software & Business Systems') {
      matchesCategory =
        project.category === 'Software & Business Systems' ||
        project.category === 'Software & ERP Solutions' ||
        ['proj-web-4', 'proj-web-11', 'proj-web-17', 'proj-web-23'].includes(project.id) ||
        project.technologies.some((t) => ['erp', 'pos', 'crm', 'management system'].some((k) => t.toLowerCase().includes(k.toLowerCase())));
    } else if (selectedCategory === 'Mobile Applications') {
      matchesCategory =
        project.category === 'Mobile Applications' ||
        ['proj-web-2', 'proj-web-22'].includes(project.id) ||
        project.shortDescription.toLowerCase().includes('تطبيق') ||
        project.technologies.some((t) => ['mobile', 'app', 'android', 'ios'].some((k) => t.toLowerCase().includes(k.toLowerCase())));
    } else if (selectedCategory === 'UI/UX Design') {
      matchesCategory =
        project.category === 'UI/UX Design' ||
        ['proj-web-21'].includes(project.id) ||
        project.technologies.some((t) => ['ux', 'ui', 'figma', 'design'].some((k) => t.toLowerCase().includes(k.toLowerCase())));
    } else if (selectedCategory === 'Other Digital Solutions') {
      matchesCategory =
        project.category === 'Other Digital Solutions' ||
        project.category === 'Digital Solutions' ||
        project.category === 'SEO Projects' ||
        ['proj-web-24', 'proj-web-25'].includes(project.id) ||
        project.technologies.some((t) => ['seo', 'api', 'analytics', 'traffic'].some((k) => t.toLowerCase().includes(k.toLowerCase())));
    }

    // Region match
    let matchesRegion = true;
    if (selectedRegion === 'gulf') {
      matchesRegion = ['sa', 'ae', 'bh', 'eg'].includes(project.country?.toLowerCase() || '');
    } else if (selectedRegion === 'na') {
      matchesRegion = ['us', 'ca'].includes(project.country?.toLowerCase() || '');
    } else if (selectedRegion === 'europe') {
      matchesRegion = ['gb', 'de', 'eu'].includes(project.country?.toLowerCase() || '');
    } else if (selectedRegion === 'asia') {
      matchesRegion = ['jp', 'in', 'tr', 'bd'].includes(project.country?.toLowerCase() || '');
    }

    // Search match
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(query) ||
      (project.titleAr && project.titleAr.toLowerCase().includes(query)) ||
      (project.domain && project.domain.toLowerCase().includes(query)) ||
      (project.countryName && project.countryName.toLowerCase().includes(query)) ||
      project.shortDescription.toLowerCase().includes(query) ||
      project.technologies.some((t) => t.toLowerCase().includes(query));

    return matchesCategory && matchesRegion && matchesSearch;
  });

  return (
    <div className="w-full max-w-7xl 2xl:max-w-[1720px] mx-auto py-10 px-4 sm:px-6 lg:px-8 xl:px-12 space-y-10 animate-fade-in text-slate-100">
      {/* Page Header */}
      <div className="border-b border-emerald-950/80 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C6A15B]/20 text-[#E5C78B] border border-[#C6A15B]/40 font-cinzel">
              {isAr ? 'سابقة الأعمال والمشاريع المعتمدة' : 'Verified Client Works & Platforms'}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              {isAr ? '25 مشروعاً موثقاً' : '25 Verified Projects'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-cinzel tracking-tight leading-tight">
            الأعمال والمشاريع <span className="gold-gradient-text">التقنية</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            محفظة المشاريع الخمسة والعشرين الرسمية المنجزة للشركات والعلامات التجارية عبر 15 دولة: تشمل متاجر التجارة الإلكترونية، أنظمة تخطيط الموارد ERP، المنصات التعليمية، وحلول السيو التقني.
          </p>
        </div>

        <button
          onClick={onOpenAdmin}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#F0D9A2] via-[#E5C78B] to-[#C6A15B] hover:brightness-110 rounded-xl transition-all cursor-pointer self-start md:self-auto shrink-0 shadow-[0_0_15px_rgba(229,199,139,0.3)]"
        >
          <Plus className="w-3.5 h-3.5 text-slate-950" />
          <span>{isAr ? 'إدارة المشاريع (CMS)' : 'Manage Projects'}</span>
        </button>
      </div>

      {/* Region Filter Buttons */}
      <div className="space-y-3">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          {isAr ? 'تصفية حسب المنطقة الجغرافية:' : 'Filter by Region:'}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {regions.map((reg) => (
            <button
              key={reg.id}
              onClick={() => setSelectedRegion(reg.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedRegion === reg.id
                  ? 'bg-gradient-to-r from-[#F0D9A2] via-[#E5C78B] to-[#C6A15B] text-slate-950 shadow-md'
                  : 'bg-[#07130D] border border-emerald-950 text-slate-300 hover:text-white hover:border-emerald-500/30'
              }`}
            >
              {isAr ? reg.labelAr : reg.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Category Tabs & Search Bar */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-2 border-t border-emerald-950/60">
        <div className="flex flex-wrap items-center gap-1.5 w-full lg:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#0B1F16] text-[#E5C78B] border border-[#C6A15B]/40 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isAr ? cat.labelAr : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-80 shrink-0">
          <Search className="w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isAr ? 'ابحث عن مشروع، دولة، أو تقنية...' : 'Search projects, country, tech...'}
            className="w-full pl-10 pr-4 py-2.5 bg-[#07130D] border border-emerald-500/25 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#E5C78B]"
          />
        </div>
      </div>

      {/* 25 Projects Showcase - Responsive Fluid Multi-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6">
        {filteredProjects.map((project, idx) => {
          const flag = getCountryFlagEmoji(project.country);

          return (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-[#07130D]/90 border border-emerald-950 hover:border-[#E5C78B]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:-translate-y-1"
            >
              {/* Card Top: Country Flag & Category */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xl">{flag}</span>
                    <span className="text-[11px] font-mono text-slate-400">{project.countryName?.split('(')[0] || project.country}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-[#0B1F16] text-[#E5C78B] border border-[#C6A15B]/30">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <div>
                  <h3 className="font-bold text-lg text-white group-hover:text-[#E5C78B] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  {project.titleAr && (
                    <div className="text-xs text-slate-400 font-medium mt-0.5">
                      {project.titleAr}
                    </div>
                  )}
                  {project.domain && (
                    <div className="text-[11px] text-emerald-400 font-mono mt-1 flex items-center gap-1">
                      <Globe className="w-3 h-3" />
                      <span>{project.domain}</span>
                    </div>
                  )}
                </div>

                {/* Short Description */}
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Role Footprint */}
                <div className="p-2.5 rounded-xl bg-[#050806] border border-emerald-950 text-[11px] text-slate-300">
                  <span className="text-[#E5C78B] font-bold">{isAr ? 'الدور المنجز:' : 'Role:'} </span>
                  <span>{project.role}</span>
                </div>

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-[#0B1F16] text-emerald-300/90 border border-emerald-950"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] font-mono text-slate-400 self-center">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer: Detail Modal Trigger and Live URL */}
              <div className="pt-4 mt-4 border-t border-emerald-950/80 flex items-center justify-between text-xs">
                <button
                  onClick={() => onSelectProject(project)}
                  className="font-bold text-[#E5C78B] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>{isAr ? 'عرض التفاصيل والنتائج' : 'View Full Case Study'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-[#050806] border border-emerald-950 text-slate-400 hover:text-white transition-colors"
                    title={isAr ? 'زيارة الموقع الحي' : 'Visit Live Site'}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Projects Count Summary */}
      <div className="pt-6 border-t border-emerald-950/80 text-center text-xs text-slate-400 font-mono">
        {isAr
          ? `عرض ${filteredProjects.length} من إجمالي 25 مشروعاً موثقاً`
          : `Showing ${filteredProjects.length} of 25 verified projects`}
      </div>
    </div>
  );
};
