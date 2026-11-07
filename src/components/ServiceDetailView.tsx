import React from 'react';
import {
  ArrowLeft,
  CheckCircle,
  HelpCircle,
  Layers,
  ShieldAlert,
  ListChecks,
  ChevronRight,
  Send,
  Sparkles,
  ExternalLink,
  Cpu,
  Workflow,
  CheckCircle2,
} from 'lucide-react';
import { Service, Project } from '../types';
import { ServiceVisualSuite } from './ServiceVisualSuite';

interface ServiceDetailViewProps {
  service: Service;
  onBack: () => void;
  onSelectProject?: (project: Project) => void;
  onInquire: (serviceTitle: string) => void;
  allProjects: Project[];
  isAr?: boolean;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  service,
  onBack,
  onSelectProject,
  onInquire,
  allProjects,
  isAr = true,
}) => {
  // Filter related projects
  const relatedProjects = allProjects.filter((p) => {
    if (service.categoryId === 'tender-proposal' || service.slug.includes('tender')) {
      return (
        p.category === 'Tender Preparation Projects' ||
        p.category === 'Technical Proposal Projects' ||
        p.category === 'Bid QA & Compliance Projects'
      );
    }
    return (
      p.category === 'Web Development Projects' ||
      p.category === 'E-commerce Websites' ||
      p.category === 'Software & ERP Solutions' ||
      p.category === 'Digital Solutions'
    );
  }).slice(0, 4);

  return (
    <div className="w-full max-w-7xl 2xl:max-w-[1680px] mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8 xl:px-12 animate-fade-in text-slate-100 space-y-10">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-400 font-medium" aria-label="Breadcrumb">
        <button
          onClick={onBack}
          className="hover:text-emerald-300 transition-colors flex items-center gap-1 cursor-pointer font-semibold text-[#E5C78B]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{isAr ? 'الخدمات' : 'Services'}</span>
        </button>
        <span className="text-emerald-900">/</span>
        <span className="text-slate-400">{service.categoryTitle}</span>
        <span className="text-emerald-900">/</span>
        <span className="text-white font-semibold truncate">{service.title}</span>
      </nav>

      {/* Hero Header */}
      <div className="border-b border-emerald-950/80 pb-8 space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-[#E5C78B] uppercase tracking-wider font-cinzel px-3 py-1 rounded-full bg-[#C6A15B]/15 border border-[#C6A15B]/30">
            {service.categoryTitle}
          </span>
          <span className="text-xs font-semibold text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30">
            {isAr ? 'خدمة تقنية معتمدة' : 'Verified Enterprise Service'}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-cinzel tracking-tight leading-tight">
          {service.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-4xl">
          {service.fullIntro || service.shortDescription}
        </p>

        {/* CTA Bar */}
        <div className="pt-3 flex flex-wrap items-center gap-3.5">
          <button
            onClick={() => onInquire(service.title)}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#F0D9A2] via-[#E5C78B] to-[#C6A15B] hover:brightness-110 rounded-xl transition-all cursor-pointer shadow-[0_0_15px_rgba(229,199,139,0.35)]"
          >
            <Send className="w-3.5 h-3.5 text-slate-950" />
            <span>{isAr ? 'طلب استشارة وعرض سعر' : 'Request Proposal & Pricing'}</span>
          </button>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 px-5 py-3 text-xs font-semibold text-slate-300 bg-[#0B1F16] hover:bg-[#07130D] border border-emerald-500/25 rounded-xl transition-all cursor-pointer"
          >
            <span>{isAr ? 'تصفح خدمات أخرى' : 'Explore Other Services'}</span>
          </button>
        </div>
      </div>

      {/* RICH VISUAL IDENTITY & OFFICIAL PLATFORM SUITE */}
      <ServiceVisualSuite service={service} isAr={isAr} />

      {/* Grid of Details: Problems Addressed & Scope */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (8 cols): Problems & Scope & Methodology */}
        <div className="lg:col-span-8 space-y-10">
          {/* Critical Challenges & Problems Addressed */}
          {service.problemsAddressed && service.problemsAddressed.length > 0 && (
            <section className="p-6 sm:p-7 rounded-2xl bg-[#07130D]/90 border border-red-500/25 space-y-4">
              <h2 className="text-base font-bold text-red-300 flex items-center gap-2 font-cinzel">
                <ShieldAlert className="w-5 h-5 text-red-400" />
                <span>{isAr ? 'المخاطر والتحديات التي نعالجها' : 'Critical Challenges Addressed'}</span>
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                {service.problemsAddressed.map((prob, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#050806]/80 border border-red-950/60">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>{prob}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Scope of Work */}
          {service.scope && service.scope.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2 font-cinzel">
                <ListChecks className="w-5 h-5 text-emerald-400" />
                <span>{isAr ? 'نطاق العمل ومحاور التنفيذ' : 'Comprehensive Scope of Work'}</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.scope.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#07130D]/90 border border-emerald-950 hover:border-emerald-500/30 transition-colors flex items-start gap-3.5 text-xs sm:text-sm text-slate-300"
                  >
                    <span className="w-7 h-7 rounded-xl bg-emerald-950 text-[#E5C78B] font-mono text-xs font-bold flex items-center justify-center border border-[#E5C78B]/30 shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Methodology Steps */}
          {service.methodology && service.methodology.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2 font-cinzel">
                <Workflow className="w-5 h-5 text-[#E5C78B]" />
                <span>{isAr ? 'منهجية العمل المتبعة' : 'Implementation Methodology'}</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.methodology.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#07130D]/90 border border-emerald-950 space-y-2 hover:border-[#E5C78B]/40 transition-colors"
                  >
                    <div className="text-xs font-mono font-bold text-[#E5C78B] tracking-widest uppercase">
                      STAGE {step.step || String(idx + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-bold text-white text-sm sm:text-base">{step.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Key Deliverables */}
          {service.deliverables && service.deliverables.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2 font-cinzel">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>{isAr ? 'المخرجات والتسليمات المعتمدة' : 'Key Deliverables'}</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#07130D]/80 border border-[#C6A15B]/30 flex items-start gap-3">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column (4 cols): Benefits, FAQs, and Related Projects */}
        <div className="lg:col-span-4 space-y-8">
          {/* Tangible Benefits */}
          {service.benefits && service.benefits.length > 0 && (
            <section className="p-6 rounded-2xl bg-[#07130D]/90 border border-[#C6A15B]/30 space-y-4">
              <h3 className="font-cinzel font-bold text-sm text-[#E5C78B] uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C6A15B]" />
                <span>{isAr ? 'القيمة المضافة والعوائد' : 'Business Value & Returns'}</span>
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">✦</span>
                    <span className="leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* FAQs */}
          {service.faqs && service.faqs.length > 0 && (
            <section className="p-6 rounded-2xl bg-[#07130D]/90 border border-emerald-950 space-y-4">
              <h3 className="font-cinzel font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-400" />
                <span>{isAr ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}</span>
              </h3>
              <div className="space-y-3">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#050806] border border-emerald-950/70 space-y-1.5">
                    <div className="text-xs font-bold text-emerald-200">{faq.question}</div>
                    <div className="text-[11px] text-slate-400 leading-relaxed">{faq.answer}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Related Projects Showcase */}
          {relatedProjects.length > 0 && (
            <section className="p-6 rounded-2xl bg-[#07130D]/90 border border-emerald-950 space-y-4">
              <h3 className="font-cinzel font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-[#E5C78B]" />
                <span>{isAr ? 'سابقة أعمال ومشاريع مرتبطة' : 'Related Projects'}</span>
              </h3>
              <div className="space-y-3">
                {relatedProjects.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => onSelectProject && onSelectProject(p)}
                    className="p-3.5 rounded-xl bg-[#0B1F16]/90 border border-emerald-950 hover:border-[#E5C78B]/50 transition-colors cursor-pointer group"
                  >
                    <div className="text-xs font-bold text-white group-hover:text-[#E5C78B] transition-colors truncate">
                      {p.title}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                      {p.shortDescription}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Quick Inquiry Sticky Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0B1F16] to-[#07130D] border border-[#C6A15B]/50 text-center space-y-3 shadow-xl">
            <h4 className="font-bold text-sm text-white font-cinzel">
              {isAr ? 'جاهز لبدء مشروعك أو مناقصتك؟' : 'Ready to Start Your Project?'}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {isAr
                ? 'تواصل مباشرة للحصول على تحليل تفصيلي للمتطلبات والجدول الزمني.'
                : 'Direct consultation, compliance feasibility study & technical timeline.'}
            </p>
            <button
              onClick={() => onInquire(service.title)}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#F0D9A2] via-[#E5C78B] to-[#C6A15B] hover:brightness-110 shadow-lg cursor-pointer"
            >
              {isAr ? 'طلب استشارة سريعة' : 'Inquire Now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
