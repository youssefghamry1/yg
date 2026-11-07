import React, { useState, useMemo } from 'react';
import {
  Award,
  Search,
  Filter,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Building,
  Calendar,
  Layers,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  Briefcase,
  Globe,
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { Certification } from '../types';

interface CertificationsPageProps {
  onSelectCertificate: (cert: Certification) => void;
  onOpenAdmin?: () => void;
  initialLang?: 'en' | 'ar';
}

export const CertificationsPage: React.FC<CertificationsPageProps> = ({
  onSelectCertificate,
  onOpenAdmin,
  initialLang = 'en',
}) => {
  const { certifications } = useData();
  const [lang, setLang] = useState<'en' | 'ar'>(initialLang);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedIssuer, setSelectedIssuer] = useState<string>('all');

  const isRtl = lang === 'ar';

  // Category options
  const categories = useMemo(() => {
    return [
      { id: 'all', labelEn: 'All Credentials', labelAr: 'جميع الاعتمادات' },
      { id: 'Tender QA, IT Audit & Governance', labelEn: 'Tender QA & IT Audit', labelAr: 'ضبط الجودة والامتثال وتدقيق النظم' },
      { id: 'Cloud & IT Infrastructure', labelEn: 'Cloud & Infrastructure', labelAr: 'الحوسبة السحابية والبنية التحتية' },
      { id: 'Web & Front-End Development', labelEn: 'Web & Front-End', labelAr: 'تطوير الويب والواجهات الأمامية' },
      { id: 'Back-End & Databases', labelEn: 'Back-End & Databases', labelAr: 'الخوادم وقواعد البيانات' },
      { id: 'Software Engineering & Programming', labelEn: 'Software Engineering', labelAr: 'هندسة البرمجيات والبرمجة' },
      { id: 'UI/UX Design', labelEn: 'UI/UX Design', labelAr: 'تصميم واجهات وتجربة المستخدم' },
      { id: 'WordPress & CMS Solutions', labelEn: 'WordPress & CMS', labelAr: 'ووردبريس وإدارة المحتوى' },
    ];
  }, []);

  // Unique issuers list
  const issuers = useMemo(() => {
    const list = Array.from(new Set(certifications.map((c) => c.issuer)));
    return ['all', ...list];
  }, [certifications]);

  // Filtered certificates
  const filteredCertificates = useMemo(() => {
    return certifications.filter((cert) => {
      // Category filter
      if (selectedCategory !== 'all' && cert.category !== selectedCategory) {
        return false;
      }
      // Issuer filter
      if (selectedIssuer !== 'all' && cert.issuer !== selectedIssuer) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchTitle = cert.title.toLowerCase().includes(query) || (cert.titleAr && cert.titleAr.toLowerCase().includes(query));
        const matchIssuer = cert.issuer.toLowerCase().includes(query) || (cert.issuerAr && cert.issuerAr.toLowerCase().includes(query));
        const matchSkills = (cert.skills || []).some((s) => s.toLowerCase().includes(query)) || (cert.skillsAr || []).some((s) => s.toLowerCase().includes(query));
        const matchOverview = cert.overviewEn.toLowerCase().includes(query) || (cert.overviewAr && cert.overviewAr.toLowerCase().includes(query));
        const matchId = (cert.credentialId || '').toLowerCase().includes(query);
        return matchTitle || matchIssuer || matchSkills || matchOverview || matchId;
      }
      return true;
    });
  }, [certifications, selectedCategory, selectedIssuer, searchQuery]);

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#050806] text-slate-100 py-12 px-4 sm:px-6 lg:px-8 space-y-16 relative overflow-hidden"
    >
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-10 left-1/4 w-[35rem] h-[35rem] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-96 right-10 w-[30rem] h-[30rem] bg-[#C6A15B]/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Page Top Header & Language Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-emerald-950/80 pb-8">
          <div className="space-y-3 max-w-3xl">
            {/* Kicker badge */}
            <div className="flex items-center gap-2">
              <span className="badge-gold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]"></span>
                <span>{isRtl ? 'اعتمادات ومؤهلات مهنية موثقة' : 'Verified Professional Credentials'}</span>
              </span>
              <span className="badge-emerald">
                <span>{certifications.length} {isRtl ? 'شهادة تخصصية' : 'Accredited Certificates'}</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              {isRtl ? (
                <>
                  الشهادات و<span className="gold-gradient-text">الاعتمادات المهنية</span>
                </>
              ) : (
                <>
                  Certifications & <span className="gold-gradient-text font-serif">Credentials</span>
                </>
              )}
            </h1>

            <p className="text-sm sm:text-base text-emerald-200/80 leading-relaxed">
              {isRtl
                ? 'سجل الاعتمادات والشهادات التخصصية الصادرة عن كبرى الجامعات والشركات العالمية (AWS، جوجل، ميتا، IBM، معهد ITI، وهونغ كونغ للعلوم والتكنولوجيا)، التي تدعم مسيرتي في إدارة وضبط جودة المناقصات، صياغة العروض الفنية، وهندسة البرمجيات.'
                : 'Verified professional certifications and technical credentials authorized by leading global universities and technology leaders (AWS, Google, Meta, IBM, ITI, HKUST, and Yonsei University). Backing my core practice in Tender Proposal Writing, Bid QA & Compliance, and Enterprise IT Engineering.'}
            </p>
          </div>

          {/* Bilingual Switcher Bar */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center bg-[#07130D] border border-[#C6A15B]/40 rounded-xl p-1 text-xs font-semibold shadow-inner">
              <button
                onClick={() => setLang('en')}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  lang === 'en'
                    ? 'bg-gradient-to-r from-[#C6A15B] to-[#E5C78B] text-slate-950 font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                English (EN)
              </button>
              <button
                onClick={() => setLang('ar')}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  lang === 'ar'
                    ? 'bg-gradient-to-r from-[#C6A15B] to-[#E5C78B] text-slate-950 font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                العربية (AR)
              </button>
            </div>
          </div>
        </div>

        {/* Metric Highlights Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#07130D] border border-emerald-500/20 shadow-lg">
            <div className="text-2xl sm:text-3xl font-extrabold gold-gradient-text font-mono tabular-nums">
              27
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              {isRtl ? 'شهادة مهنية معتمدة' : 'Verified Certificates'}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#07130D] border border-emerald-500/20 shadow-lg">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">
              7+
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              {isRtl ? 'جهات ومؤسسات عالمية' : 'Global Issuing Bodies'}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#07130D] border border-emerald-500/20 shadow-lg">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#E5C78B] font-mono tabular-nums">
              100%
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              {isRtl ? 'توثيق رسمي قابل للتحقق' : 'Online Traceability'}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#07130D] border border-emerald-500/20 shadow-lg">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-300 font-mono tabular-nums">
              400+
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              {isRtl ? 'ساعة دراسة وتدريب متخصص' : 'Hours of Rigorous Training'}
            </div>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="space-y-4 p-5 rounded-2xl bg-[#07130D] border border-emerald-950/90 shadow-xl">
          {/* Search Input Row */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500/70 ${isRtl ? 'right-3.5' : 'left-3.5'}`} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  isRtl
                    ? 'ابحث باسم الشهادة، الجهة المانحة (AWS, Meta, Google, IBM...)، أو المهارة...'
                    : 'Search certificates by title, issuing organization (AWS, Meta, Google...), or skill...'
                }
                className={`w-full py-2.5 bg-[#050806] border border-emerald-900/60 rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#C6A15B] transition-colors ${
                  isRtl ? 'pr-10 pl-4' : 'pl-10 pr-4'
                }`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className={`absolute top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white ${isRtl ? 'left-3' : 'right-3'}`}
                >
                  ✕
                </button>
              )}
            </div>

            {/* Issuer Quick Filter Dropdown */}
            <select
              value={selectedIssuer}
              onChange={(e) => setSelectedIssuer(e.target.value)}
              className="py-2.5 px-3 bg-[#050806] border border-emerald-900/60 rounded-xl text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-[#C6A15B] shrink-0"
              aria-label="Filter by Issuer"
            >
              <option value="all">{isRtl ? 'جميع الجهات المانحة' : 'All Issuing Bodies'}</option>
              {issuers.filter((i) => i !== 'all').map((iss) => (
                <option key={iss} value={iss}>
                  {iss}
                </option>
              ))}
            </select>
          </div>

          {/* Interactive Category Filter Pills (Functional Buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              const count =
                cat.id === 'all'
                  ? certifications.length
                  : certifications.filter((c) => c.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    active
                      ? 'bg-gradient-to-r from-[#C6A15B] to-[#E5C78B] text-slate-950 font-bold shadow-md'
                      : 'bg-[#050806] text-slate-300 hover:text-white hover:bg-[#0B1F16] border border-emerald-950'
                  }`}
                >
                  <span>{isRtl ? cat.labelAr : cat.labelEn}</span>
                  <span className={`ml-1.5 text-[10px] font-mono px-1 rounded ${active ? 'bg-black/20 text-slate-950 font-bold' : 'text-emerald-400'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-400 px-1">
          <span>
            {isRtl ? (
              <>
                عرض <strong className="text-white">{filteredCertificates.length}</strong> من إجمالي{' '}
                <strong className="text-white">{certifications.length}</strong> شهادة معتمدة
              </>
            ) : (
              <>
                Showing <strong className="text-white">{filteredCertificates.length}</strong> of{' '}
                <strong className="text-white">{certifications.length}</strong> verified credentials
              </>
            )}
          </span>

          {(selectedCategory !== 'all' || selectedIssuer !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedIssuer('all');
                setSearchQuery('');
              }}
              className="text-[#E5C78B] hover:text-[#F0D9A2] font-semibold underline text-xs cursor-pointer"
            >
              {isRtl ? 'إعادة ضبط عوامل التصفية' : 'Reset all filters'}
            </button>
          )}
        </div>

        {/* Certificate Cards Grid (3 Columns Desktop, 2 Tablet, 1 Mobile) */}
        {filteredCertificates.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-[#07130D] border border-emerald-950 space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-950/60 border border-emerald-800/40 mx-auto flex items-center justify-center text-emerald-400">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">
              {isRtl ? 'لا توجد شهادات مطابقة لبحثك' : 'No credentials matched your search'}
            </h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              {isRtl
                ? 'جرب البحث بكلمة مفتاحية مختلفة أو إزالة بعض عوامل التصفية.'
                : 'Try adjusting your search terms or resetting category filters.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCertificates.map((cert) => {
              const cardTitle = isRtl ? (cert.titleAr || cert.title) : cert.title;
              const cardIssuer = isRtl ? (cert.issuerAr || cert.issuer) : cert.issuer;
              const cardSummary = isRtl ? (cert.summaryAr || cert.summaryEn) : cert.summaryEn;
              const cardDate = isRtl ? (cert.issueDateAr || cert.issueDate) : cert.issueDate;
              const cardCategory = isRtl ? (cert.categoryAr || cert.category) : cert.category;
              const skillsToShow = (isRtl ? cert.skillsAr : cert.skills) || [];

              return (
                <div
                  key={cert.id}
                  onClick={() => onSelectCertificate(cert)}
                  className="group relative rounded-2xl bg-[#07130D] border border-emerald-500/20 hover:border-[#C6A15B]/60 transition-all duration-300 shadow-xl hover:shadow-[0_20px_45px_rgba(0,0,0,0.8),0_0_30px_rgba(16,185,129,0.15)] flex flex-col justify-between overflow-hidden cursor-pointer hover:-translate-y-1.5"
                >
                  {/* Card Top: Certificate Thumbnail Image */}
                  <div className="space-y-4">
                    <div className="relative aspect-[16/11] w-full bg-[#030604] overflow-hidden border-b border-emerald-950/80">
                      <img
                        src={cert.image}
                        alt={cardTitle}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Dark gradient overlay on thumbnail bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07130D] via-transparent to-transparent opacity-80 pointer-events-none"></div>

                      {/* Category Tag (unboxed clean text) */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-2.5 py-1 text-[10px] font-bold rounded-md bg-[#050806]/85 backdrop-blur-md text-[#E5C78B] border border-[#C6A15B]/30 shadow-md">
                          {cardCategory}
                        </span>
                      </div>

                      {/* Verified Badge */}
                      <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/90 text-emerald-300 text-[10px] font-semibold border border-emerald-500/40">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>{isRtl ? 'موثقة' : 'Verified'}</span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-5 pt-0 space-y-3">
                      {/* Issuer & Date Row */}
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="text-[#C6A15B] font-semibold tracking-wide truncate max-w-[65%]">
                          {cardIssuer}
                        </span>
                        <span className="font-mono text-[11px] text-slate-400 shrink-0">{cardDate}</span>
                      </div>

                      {/* Certificate Title */}
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#E5C78B] transition-colors leading-snug line-clamp-2">
                        {cardTitle}
                      </h3>

                      {/* Professional Summary */}
                      <p className="text-xs text-slate-300/80 leading-relaxed line-clamp-3">
                        {cardSummary}
                      </p>

                      {/* Skills Tags Strip */}
                      {skillsToShow.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {skillsToShow.slice(0, 3).map((sk, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] px-2 py-0.5 rounded bg-[#050806] border border-emerald-900/50 text-emerald-300/90"
                            >
                              {sk}
                            </span>
                          ))}
                          {skillsToShow.length > 3 && (
                            <span className="text-[10px] text-slate-400 self-center">
                              +{skillsToShow.length - 3}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-4 px-5 bg-[#050806]/80 border-t border-emerald-950/80 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-400 font-mono">
                      {cert.credentialId ? `ID: ${cert.credentialId}` : (cert.duration || (isRtl ? 'معتمدة' : 'Verified'))}
                    </span>

                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 font-bold text-xs text-[#E5C78B] group-hover:text-white transition-colors"
                    >
                      <span>{isRtl ? 'معاينة الشهادة والتفاصيل' : 'View Certificate'}</span>
                      <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Banner: Tender & Professional Credibility Context */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#07130D] via-[#0B1F16] to-[#07130D] border border-[#C6A15B]/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="badge-gold">
              {isRtl ? 'التميز الهندسي والاحترافي' : 'Professional Engineering Excellence'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {isRtl
                ? 'كيف تعزز هذه الاعتمادات جودة العروض الفنية والامتثال؟'
                : 'How Do These Credentials Empower Bid QA & Technical Proposals?'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {isRtl
                ? 'إن الجمع بين المعرفة الأكاديمية العميقة في تدقيق النظم (HKUST) وإدارة البنية التحتية (Google) والحوسبة السحابية (AWS) وتطوير الأنظمة وقواعد البيانات (Meta و IBM و ITI) يمكنني من صياغة عروض فنية تتحدث لغة المهندسين بدقة متناهية، وبناء مصفوفات امتثال خالية من العيوب، وتجنب ثغرات الاستبعاد الفني في كبرى المناقصات الحكومية والخاصة.'
                : 'Bridging specialized training in Information Systems Auditing (HKUST), Infrastructure & Systems Administration (Google), Cloud Computing (AWS), and Full-Stack Engineering (Meta, IBM, and ITI) allows me to author technical proposals that speak with engineering authority, construct zero-defect compliance matrices, and eliminate disqualification risks in high-stakes public tenders.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
