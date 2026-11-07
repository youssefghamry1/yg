import React, { useEffect, useState, useRef } from 'react';
import {
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2,
  Calendar,
  Building,
  Award,
  Clock,
  CheckCircle2,
  Layers,
  Sparkles,
  ShieldCheck,
  Globe,
  FileCheck,
} from 'lucide-react';
import { Certification } from '../types';

interface CertificateModalProps {
  certificate: Certification | null;
  allCertificates: Certification[];
  onClose: () => void;
  onSelectCertificate: (cert: Certification) => void;
  initialLang?: 'en' | 'ar';
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  allCertificates,
  onClose,
  onSelectCertificate,
  initialLang = 'en',
}) => {
  const [lang, setLang] = useState<'en' | 'ar'>(initialLang);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isFullscreenImage, setIsFullscreenImage] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const isRtl = lang === 'ar';

  useEffect(() => {
    setLang(initialLang);
  }, [initialLang]);

  // Reset zoom on certificate change
  useEffect(() => {
    setZoomLevel(1);
    setIsFullscreenImage(false);
  }, [certificate?.id]);

  // Keyboard navigation & escape key listener
  useEffect(() => {
    if (!certificate) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullscreenImage) {
          setIsFullscreenImage(false);
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowRight') {
        navigateNext();
      } else if (e.key === 'ArrowLeft') {
        navigatePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock background scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [certificate, allCertificates, isFullscreenImage]);

  if (!certificate) return null;

  const currentIndex = allCertificates.findIndex((c) => c.id === certificate.id);
  const totalCount = allCertificates.length;

  const navigatePrev = () => {
    if (currentIndex > 0) {
      onSelectCertificate(allCertificates[currentIndex - 1]);
    } else {
      // Loop to end
      onSelectCertificate(allCertificates[totalCount - 1]);
    }
  };

  const navigateNext = () => {
    if (currentIndex < totalCount - 1) {
      onSelectCertificate(allCertificates[currentIndex + 1]);
    } else {
      // Loop to start
      onSelectCertificate(allCertificates[0]);
    }
  };

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.min(prev + 0.35, 2.75));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.max(prev - 0.35, 0.75));
  };

  const handleZoomReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(1);
  };

  const title = isRtl ? (certificate.titleAr || certificate.title) : certificate.title;
  const issuer = isRtl ? (certificate.issuerAr || certificate.issuer) : certificate.issuer;
  const overview = isRtl ? (certificate.overviewAr || certificate.overviewEn) : certificate.overviewEn;
  const learnedList = isRtl ? (certificate.learnedAr || certificate.learnedEn || []) : (certificate.learnedEn || []);
  const skillsList = isRtl ? (certificate.skillsAr || certificate.skills || []) : (certificate.skills || []);
  const practicalValue = isRtl ? (certificate.practicalValueAr || certificate.practicalValueEn) : certificate.practicalValueEn;
  const relevanceList = isRtl ? (certificate.relevanceProfileAr || certificate.relevanceProfileEn || []) : (certificate.relevanceProfileEn || []);
  const summary = isRtl ? (certificate.summaryAr || certificate.summaryEn) : certificate.summaryEn;
  const date = isRtl ? (certificate.issueDateAr || certificate.issueDate) : certificate.issueDate;
  const duration = isRtl ? (certificate.durationAr || certificate.duration) : certificate.duration;
  const category = isRtl ? (certificate.categoryAr || certificate.category) : certificate.category;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-[#050806]/90 backdrop-blur-2xl transition-all duration-300 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Modal Dialog Container */}
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        dir={isRtl ? 'rtl' : 'ltr'}
        className="relative w-full max-w-6xl my-auto bg-[#07130D] border border-[#C6A15B]/40 rounded-2xl md:rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.85),0_0_40px_rgba(16,185,129,0.15)] overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#0B1F16]/95 border-b border-emerald-950/80 shrink-0">
          {/* Left: Credential Badge & Position */}
          <div className="flex items-center gap-3">
            <span className="badge-gold text-xs flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>{category}</span>
            </span>
            <span className="text-xs font-mono text-emerald-400/80 hidden sm:inline">
              {currentIndex + 1} / {totalCount}
            </span>
          </div>

          {/* Right Controls: Language Switch, Fullscreen Image, Navigation, Close */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#050806] border border-emerald-950 rounded-lg p-0.5 text-xs font-semibold">
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  lang === 'en'
                    ? 'bg-[#C6A15B] text-slate-950 shadow-sm font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="English details"
              >
                EN
              </button>
              <button
                onClick={() => setLang('ar')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  lang === 'ar'
                    ? 'bg-[#C6A15B] text-slate-950 shadow-sm font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="التفاصيل بالعربية"
              >
                العربية
              </button>
            </div>

            {/* Prev & Next controls */}
            <div className="flex items-center gap-1 border-l border-r border-emerald-950/80 px-2 mx-1">
              <button
                onClick={navigatePrev}
                className="p-1.5 rounded-lg text-slate-400 hover:text-[#E5C78B] hover:bg-[#0B1F16] transition-colors cursor-pointer"
                title={isRtl ? 'الشهادة السابقة (السهم الأيسر)' : 'Previous Certificate (Left Arrow)'}
                aria-label="Previous"
              >
                <ChevronLeft className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
              <button
                onClick={navigateNext}
                className="p-1.5 rounded-lg text-slate-400 hover:text-[#E5C78B] hover:bg-[#0B1F16] transition-colors cursor-pointer"
                title={isRtl ? 'الشهادة التالية (السهم الأيمن)' : 'Next Certificate (Right Arrow)'}
                aria-label="Next"
              >
                <ChevronRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-red-950/40 border border-transparent hover:border-red-500/30 transition-all cursor-pointer"
              title={isRtl ? 'إغلاق (Esc)' : 'Close modal (Esc)'}
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-8">
          {/* Certificate Image Stage with Zoom Controls */}
          <div className="space-y-3">
            <div className="relative rounded-2xl bg-[#030604] border border-[#C6A15B]/30 overflow-hidden shadow-2xl group">
              {/* Image Toolbar Floating */}
              <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 bg-[#050806]/85 backdrop-blur-md border border-emerald-950/80 rounded-xl p-1 shadow-lg opacity-90 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={handleZoomIn}
                  className="p-1.5 rounded-lg text-slate-300 hover:text-[#E5C78B] hover:bg-[#0B1F16] transition-colors cursor-pointer"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={handleZoomOut}
                  className="p-1.5 rounded-lg text-slate-300 hover:text-[#E5C78B] hover:bg-[#0B1F16] transition-colors cursor-pointer"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={handleZoomReset}
                  className="p-1.5 rounded-lg text-slate-300 hover:text-[#E5C78B] hover:bg-[#0B1F16] transition-colors cursor-pointer"
                  title="Reset Zoom"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <span className="text-[10px] font-mono text-emerald-400 px-1">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  onClick={() => setIsFullscreenImage(!isFullscreenImage)}
                  className="p-1.5 rounded-lg text-slate-300 hover:text-[#E5C78B] hover:bg-[#0B1F16] transition-colors cursor-pointer"
                  title="Toggle Full View"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Verified Ribbon */}
              <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-3 py-1 bg-emerald-950/90 border border-emerald-500/40 rounded-full text-[11px] text-emerald-300 font-semibold shadow-md">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{isRtl ? 'شهادة رسمية معتمدة' : 'Verified Credential'}</span>
              </div>

              {/* Certificate Image Frame */}
              <div
                className={`w-full flex items-center justify-center p-2 sm:p-4 md:p-6 transition-all duration-300 overflow-auto ${
                  isFullscreenImage ? 'min-h-[70vh] bg-black/90' : 'max-h-[520px] bg-gradient-to-b from-[#050806] to-[#0B1F16]'
                }`}
              >
                <img
                  src={certificate.image}
                  alt={title}
                  style={{
                    transform: `scale(${zoomLevel})`,
                    transformOrigin: 'center center',
                    transition: 'transform 0.2s ease-out',
                  }}
                  className="max-h-[460px] w-auto max-w-full object-contain rounded-lg shadow-2xl select-none"
                  draggable={false}
                />
              </div>

              {/* Bottom Image Caption Bar */}
              <div className="px-4 py-2 bg-[#050806]/95 border-t border-emerald-950/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
                <span className="truncate">
                  {isRtl ? 'المستلم المعتمد:' : 'Certified Recipient:'}{' '}
                  <strong className="text-slate-200">{certificate.recipientName}</strong>
                </span>
                {certificate.verificationUrl && (
                  <a
                    href={certificate.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#E5C78B] hover:text-[#F0D9A2] font-semibold underline decoration-[#C6A15B]/50 transition-colors"
                  >
                    <span>{isRtl ? 'التحقق من صحة الاعتماد أونلاين' : 'Verify Online via Issuer'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Title & Organization Hero Lockup */}
          <div className="border-b border-emerald-950/70 pb-6 space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#E5C78B]">
              <span className="font-semibold uppercase tracking-wider">{issuer}</span>
              {certificate.trainingProvider && (
                <>
                  <span className="text-emerald-700">·</span>
                  <span className="text-slate-400">{certificate.trainingProvider}</span>
                </>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
              {title}
            </h2>

            {/* Quick Metadata Pill Strip */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B1F16] border border-emerald-900/60">
                <Calendar className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>
                  {isRtl ? 'تاريخ المنح:' : 'Issued:'} <strong>{date}</strong>
                </span>
              </div>

              {duration && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B1F16] border border-emerald-900/60">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>
                    {isRtl ? 'المدة:' : 'Duration:'} <strong>{duration}</strong>
                  </span>
                </div>
              )}

              {certificate.credentialId && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B1F16] border border-emerald-900/60">
                  <FileCheck className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>
                    {isRtl ? 'رمز الاعتماد:' : 'Credential ID:'}{' '}
                    <code className="text-emerald-300 font-mono text-[11px]">{certificate.credentialId}</code>
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Main Professional Analysis Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 8 Cols: Overview, Learning, Practical Value */}
            <div className="lg:col-span-8 space-y-6">
              {/* Section A: Overview */}
              <div className="p-6 rounded-2xl bg-[#0B1F16]/60 border border-emerald-500/20 space-y-3">
                <h3 className="text-base font-bold text-[#E5C78B] flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#C6A15B]" />
                  <span>{isRtl ? 'نظرة عامة على الشهادة' : 'Certificate Overview'}</span>
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">{overview}</p>
              </div>

              {/* Section B: What Was Learned */}
              {learnedList.length > 0 && (
                <div className="p-6 rounded-2xl bg-[#0B1F16]/60 border border-emerald-500/20 space-y-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{isRtl ? 'ما تم تعلمه واكتسابه من تدريب' : 'What Was Learned'}</span>
                  </h3>
                  <ul className="space-y-2.5 pt-1">
                    {learnedList.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B] mt-2 shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Section D: Practical Professional Value */}
              <div className="p-6 rounded-2xl bg-[#0B1F16]/60 border border-emerald-500/20 space-y-3">
                <h3 className="text-base font-bold text-[#E5C78B] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C6A15B]" />
                  <span>{isRtl ? 'القيمة المهنية والتطبيقية' : 'Practical Professional Value'}</span>
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">{practicalValue}</p>
              </div>

              {/* Section F: Professional Summary */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-[#0B1F16]/60 border border-emerald-500/30">
                <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
                  {isRtl ? 'الخلاصة المهنية' : 'Professional Summary'}
                </div>
                <p className="text-xs sm:text-sm text-slate-200 font-medium italic leading-relaxed">
                  "{summary}"
                </p>
              </div>
            </div>

            {/* Right 4 Cols: Skills, Relevance, Verification Card */}
            <div className="lg:col-span-4 space-y-6">
              {/* Section C: Acquired Skills */}
              <div className="p-5 rounded-2xl bg-[#0B1F16]/80 border border-emerald-950 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#E5C78B] flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>{isRtl ? 'المهارات والكفاءات المكتسبة' : 'Acquired Competencies'}</span>
                </h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {skillsList.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs rounded-lg bg-[#050806] border border-emerald-800/40 text-emerald-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Section E: Relevance to Professional Profile */}
              {relevanceList.length > 0 && (
                <div className="p-5 rounded-2xl bg-[#0B1F16]/80 border border-emerald-950 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{isRtl ? 'الصلة بالتخصص والمسار المهني' : 'Profile Relevance'}</span>
                  </h4>
                  <ul className="space-y-2 pt-1 text-xs text-slate-300">
                    {relevanceList.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#C6A15B] font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Official Verification Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0B1F16] to-[#07130D] border border-[#C6A15B]/40 space-y-3.5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#C6A15B]/20 flex items-center justify-center text-[#E5C78B]">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      {isRtl ? 'التحقق الرسمي والاعتماد' : 'Official Verification'}
                    </div>
                    <div className="text-[10px] text-slate-400">{issuer}</div>
                  </div>
                </div>

                <div className="text-xs text-slate-300 space-y-1.5 pt-1 border-t border-emerald-950/80">
                  <div className="flex justify-between">
                    <span className="text-slate-400">{isRtl ? 'الجهة المانحة:' : 'Issuer:'}</span>
                    <span className="text-slate-200 font-semibold">{issuer}</span>
                  </div>
                  {certificate.credentialId && (
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">{isRtl ? 'رقم الاعتماد:' : 'ID:'}</span>
                      <span className="text-emerald-300 font-mono text-[11px]">{certificate.credentialId}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-slate-400">{isRtl ? 'صلاحية الشهادة:' : 'Validity:'}</span>
                    <span className="text-emerald-400 font-semibold">{isRtl ? 'دائمة وموثقة مدى الحياة' : 'Lifetime Credential'}</span>
                  </div>
                </div>

                {certificate.verificationUrl && (
                  <a
                    href={certificate.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#C6A15B] to-[#E5C78B] text-slate-950 font-bold text-xs hover:brightness-110 transition-all shadow-md"
                  >
                    <span>{isRtl ? 'التحقق من الشهادة على المنصة الرسمية' : 'Verify on Official Platform'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer Navigation */}
        <div className="px-6 py-3.5 bg-[#0B1F16]/95 border-t border-emerald-950/80 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <button
            onClick={navigatePrev}
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#E5C78B] font-medium transition-colors cursor-pointer"
          >
            <ChevronLeft className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            <span>{isRtl ? 'الشهادة السابقة' : 'Previous Certificate'}</span>
          </button>

          <span className="font-mono text-emerald-400/70">
            {currentIndex + 1} of {totalCount}
          </span>

          <button
            onClick={navigateNext}
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#E5C78B] font-medium transition-colors cursor-pointer"
          >
            <span>{isRtl ? 'الشهادة التالية' : 'Next Certificate'}</span>
            <ChevronRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
};
