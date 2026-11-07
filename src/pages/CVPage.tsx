import React, { useState } from 'react';
import {
  Download,
  Eye,
  Mail,
  Phone,
  MapPin,
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  Globe,
  Layers,
  Sparkles,
  ExternalLink,
  X,
  CheckCircle2,
  ShieldCheck,
  Building,
  ArrowRight,
} from 'lucide-react';
import { useData } from '../context/DataContext';

interface CVPageProps {
  onNavigate?: (tab: string) => void;
  isAr?: boolean;
}

export const CVPage: React.FC<CVPageProps> = ({ onNavigate, isAr = true }) => {
  const {
    profile,
    experiences,
    education,
    skillGroups,
    toolCategories,
    languages,
  } = useData();

  const [pdfPreviewOpen, setPdfPreviewOpen] = useState(false);

  const officialPdfUrl = '/assets/aistudio/youssef_ghamry_bid_e01f8769.pdf';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8 animate-fade-in text-slate-100">
      {/* Action Bar (hidden on print) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 glass-panel rounded-2xl border border-[#C6A15B]/40 shadow-2xl no-print bg-[#07130D]/90 backdrop-blur-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C6A15B] animate-pulse"></span>
            <div className="text-xs font-bold text-[#E5C78B] uppercase tracking-widest font-cinzel">
              {isAr ? 'السيرة الذاتية المهنية الرسمية' : 'Official Professional Curriculum Vitae'}
            </div>
          </div>
          <p className="text-xs text-slate-300">
            {isAr
              ? 'السيرة الذاتية الرسمية للمطور يوسف غمري: مطور Full-Stack، كاتب عروض فنية، ومدقق جودة مناقصات.'
              : 'Official documented resume of Youssef Ghamry: Full-Stack Developer, Technical Proposal Writer, and Bid QA Specialist.'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Direct Download PDF */}
          <a
            href={officialPdfUrl}
            download="Youssef_Ghamry_CV.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#F0D9A2] via-[#E5C78B] to-[#C6A15B] hover:brightness-110 rounded-xl transition-all shadow-[0_0_15px_rgba(229,199,139,0.35)] cursor-pointer"
          >
            <Download className="w-4 h-4 text-slate-950" />
            <span>{isAr ? 'تحميل السيرة الذاتية PDF' : 'Download PDF'}</span>
          </a>

          {/* Interactive In-App PDF Preview */}
          <button
            type="button"
            onClick={() => setPdfPreviewOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-emerald-300 hover:text-white bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/30 rounded-xl transition-all cursor-pointer"
          >
            <Eye className="w-4 h-4 text-[#E5C78B]" />
            <span>{isAr ? 'معاينة المستند الأصلي' : 'Preview Original PDF'}</span>
          </button>

          {/* Print A4 */}
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-slate-300 hover:text-white bg-black/40 hover:bg-black/60 border border-slate-700/60 rounded-xl transition-all cursor-pointer"
          >
            <FileText className="w-4 h-4 text-slate-400" />
            <span>{isAr ? 'طباعة A4' : 'Print A4'}</span>
          </button>
        </div>
      </div>

      {/* CV Paper Sheet Container - Clean, Documented, Pure Resume */}
      <div className="glass-panel rounded-3xl border border-emerald-500/25 shadow-2xl p-6 sm:p-10 md:p-14 space-y-10 cv-sheet text-slate-200 bg-[#050806]/95">
        
        {/* CV Header: Personal Info & Titles */}
        <div className="border-b border-emerald-950/80 pb-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C6A15B]/15 border border-[#C6A15B]/40 text-[#E5C78B] text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{isAr ? 'سيرة ذاتية رسمية معتمدة وموثقة' : 'Verified Official Curriculum Vitae'}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-cinzel tracking-tight uppercase">
                {isAr ? 'يوسف غمري' : profile.name}
              </h1>
              <p className="text-base sm:text-lg font-bold text-[#E5C78B] font-editorial italic tracking-wide">
                {isAr
                  ? 'مطور Full-Stack | كاتب عروض فنية للمناقصات | ضبط الجودة وتطوير الأعمال'
                  : 'Full-Stack Developer | Tender Proposal Writer | Bid QA & Compliance'}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-emerald-400 font-mono">
                {isAr
                  ? 'هندسة برمجيات الويب، الأنظمة المؤسسية، وتطبيقات الجوال'
                  : 'Web Engineering, Enterprise Systems, and Mobile Applications Architecture'}
              </p>
            </div>

            {/* Contact Details */}
            <div className="text-xs text-slate-300 space-y-2 md:text-right shrink-0 p-4 rounded-2xl bg-[#07130D]/80 border border-emerald-950/80">
              <div className="flex md:justify-end items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E5C78B]" />
                <span className="font-medium text-white">{isAr ? 'القاهرة، مصر (متاح للتعاقد عن بُعد وحضورياً بالسعودية والخليج)' : profile.location}</span>
              </div>
              <div className="flex md:justify-end items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <a href={`tel:${profile.phone}`} className="hover:text-[#F0D9A2] font-mono text-emerald-200" dir="ltr">
                  {profile.phone}
                </a>
              </div>
              <div className="flex md:justify-end items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400" />
                <a href={`mailto:${profile.email}`} className="hover:text-[#F0D9A2] font-mono text-emerald-200">
                  {profile.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 1. ABOUT ME / Professional Summary */}
        <section className="space-y-3">
          <div className="flex items-center justify-between border-b border-emerald-950/80 pb-2">
            <h2 className="text-xs font-bold text-[#E5C78B] uppercase tracking-wider flex items-center gap-2 font-cinzel">
              <FileText className="w-4 h-4 text-[#C6A15B]" />
              <span>{isAr ? 'النبذة المهنية والشخصية (Professional Summary)' : 'About Me / Professional Profile'}</span>
            </h2>
            <span className="text-[10px] font-mono text-emerald-400/80 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">
              {isAr ? 'خبرة عملية متكاملة' : 'Full-Lifecycle Practitioner'}
            </span>
          </div>
          <div className="p-5 sm:p-6 rounded-2xl bg-[#07130D]/70 border border-emerald-500/20 leading-relaxed text-slate-200 text-xs sm:text-sm text-justify space-y-3">
            <p className="leading-relaxed">
              {isAr
                ? 'متخصص في تطوير البرمجيات الشاملة (Full-Stack Developer) وإعداد العروض الفنية للمناقصات وضبط الجودة وتطوير الأعمال، مع خلفية تقنية هندسية متخصصة في دعم مناقصات قطاع التقنية والتحول الرقمي في المملكة العربية السعودية. ساهمت في شركة برينز فالي (Brains Valley Co) في إعداد ومراجعة وتدقيق أكثر من 200 مناقصة تقنية وحكومية، مع دمج الخبرة البرمجية بالمهارات المتقدمة في تفكيك كراسات الشروط (RFPs)، مطابقة المتطلبات الإلزامية، مراجعة الامتثال، وضمان الجودة الشاملة.'
                : 'I specialize in full-stack web and systems engineering, tender preparation, quality assurance, and business development, backed by deep hands-on expertise supporting technology-sector tenders in Saudi Arabia. At Brains Valley Co., I contributed to the preparation, technical decomposition, and quality review of over 200 tenders, combining software architecture knowledge with rigorous requirement matching, compliance matrix management, gap analysis, and competitive proposal drafting.'}
            </p>
            <p className="leading-relaxed text-emerald-300/90 font-medium">
              {isAr
                ? 'أتميز بالقدرة على الإشراف على دورة حياة المنتج الرقمي بالكامل: من تحليل كراسة الشروط وفهم متطلبات العميل، وتصميم واجهات وتجربة المستخدم (UI/UX)، وهندسة المنطق البرمجي وقواعد البيانات، وحتى النشر السحابي ومراقبة مؤشرات الأداء والأمان.'
                : 'Skilled across the entire digital product lifecycle: requirement analysis, UI/UX prototyping, full-stack programming, relational/NoSQL database architecture, API orchestration, and reliable cloud deployments with strict security standards.'}
            </p>
          </div>
        </section>

        {/* 2. Skills & Core Competencies */}
        <section className="space-y-4">
          <h2 className="text-xs font-bold text-[#E5C78B] uppercase tracking-wider border-b border-emerald-950/80 pb-2 flex items-center gap-2 font-cinzel">
            <Layers className="w-4 h-4 text-[#C6A15B]" />
            <span>{isAr ? 'المهارات والكفاءات المهنية (Skills & Competencies)' : 'Skills & Core Competencies'}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Core Competencies */}
            <div className="space-y-3 p-5 rounded-2xl bg-[#07130D]/80 border border-emerald-500/25">
              <div className="flex items-center gap-2 pb-2 border-b border-emerald-950">
                <span className="text-sm">🎯</span>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider font-cinzel">
                  {isAr ? 'الكفاءات الاستشارية والمناقصات' : 'Proposal & Tender Competencies'}
                </h3>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#E5C78B] mt-0.5">✦</span>
                  <span>{isAr ? 'صياغة وتحرير العروض الفنية (Technical Proposals)' : 'Technical Proposal Writing & Editing'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E5C78B] mt-0.5">✦</span>
                  <span>{isAr ? 'تفكيك وتحليل كراسات الشروط RFP / RFQ / TOR' : 'RFP / RFQ & Tender Analysis'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E5C78B] mt-0.5">✦</span>
                  <span>{isAr ? 'مصفوفة الامتثال وتتبع المتطلبات 100%' : 'Compliance Matrix & Requirement Traceability'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E5C78B] mt-0.5">✦</span>
                  <span>{isAr ? 'تدقيق وضبط جودة العطاءات (Red Team Bid QA)' : 'Proposal Quality Assurance (QA) & Audit'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E5C78B] mt-0.5">✦</span>
                  <span>{isAr ? 'تقييم قرار التقدم للمنافسات (Bid/No-Bid)' : 'Bid / No-Bid Assessment'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E5C78B] mt-0.5">✦</span>
                  <span>{isAr ? 'استشارات ما قبل البيع وهندسة الحلول IT Pre-Sales' : 'IT Pre-Sales & Solution Design'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E5C78B] mt-0.5">✦</span>
                  <span>{isAr ? 'أنظمة المنافسات والمشتريات الحكومية ومنصة اعتماد' : 'Saudi Government Tenders & Procurement Law'}</span>
                </li>
              </ul>
            </div>

            {/* Platforms & Tools */}
            <div className="space-y-3 p-5 rounded-2xl bg-[#07130D]/80 border border-emerald-500/25">
              <div className="flex items-center gap-2 pb-2 border-b border-emerald-950">
                <span className="text-sm">🛠️</span>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider font-cinzel">
                  {isAr ? 'المنصات والأدوات التنفيذية' : 'Platforms & Management Tools'}
                </h3>
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                <div>
                  <div className="font-semibold text-emerald-400">{isAr ? 'بوابات المشتريات الحكومية:' : 'Procurement Portals:'}</div>
                  <p className="text-slate-300 mt-0.5">Etimad Platform, Saudi Government Procurement Portals</p>
                </div>
                <div>
                  <div className="font-semibold text-emerald-400">{isAr ? 'حزمة التوثيق المتقدمة:' : 'Office & Documentation:'}</div>
                  <p className="text-slate-300 mt-0.5">MS Office Suite (Advanced Word, Excel, PowerPoint, Visio)</p>
                </div>
                <div>
                  <div className="font-semibold text-emerald-400">{isAr ? 'إدارة الوثائق والنسخ:' : 'Document & Version Control:'}</div>
                  <p className="text-slate-300 mt-0.5">Document Version Control Systems, Git, Notion</p>
                </div>
                <div>
                  <div className="font-semibold text-emerald-400">{isAr ? 'التصميم والنمذجة الأولية:' : 'Design & Prototyping:'}</div>
                  <p className="text-slate-300 mt-0.5">Figma, Adobe XD, Canva</p>
                </div>
                <div>
                  <div className="font-semibold text-emerald-400">{isAr ? 'الأنظمة المؤسسية والسحابية:' : 'Enterprise ERP & Cloud:'}</div>
                  <p className="text-slate-300 mt-0.5">Odoo ERP, Zoho, Hostinger, GoDaddy, Namecheap</p>
                </div>
              </div>
            </div>

            {/* Technical Domain Knowledge */}
            <div className="space-y-3 p-5 rounded-2xl bg-[#07130D]/80 border border-emerald-500/25">
              <div className="flex items-center gap-2 pb-2 border-b border-emerald-950">
                <span className="text-sm">🌐</span>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider font-cinzel">
                  {isAr ? 'المعرفة الهندسية والتقنية' : 'Technical Domain Knowledge'}
                </h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#E5C78B] mt-0.5">✦</span>
                  <span>{isAr ? 'البنية التحتية والشبكات IT Infrastructure' : 'IT Infrastructure & Networking'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E5C78B] mt-0.5">✦</span>
                  <span>{isAr ? 'معايير الأمن السيبراني وحماية البيانات NCA' : 'Cybersecurity & Security Standards'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E5C78B] mt-0.5">✦</span>
                  <span>{isAr ? 'الحلول السحابية والخدمات المدارة Cloud Solutions' : 'Cloud Solutions & Managed Services'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E5C78B] mt-0.5">✦</span>
                  <span>{isAr ? 'التحول الرقمي وهندسة البرمجيات المؤسسية' : 'Digital Transformation & Enterprise Solutions'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E5C78B] mt-0.5">✦</span>
                  <span>{isAr ? 'اتفاقيات مستوى الخدمة ومؤشرات الأداء SLAs / KPIs' : 'SLAs, KPIs, & Project Governance Models'}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Full Development Tech Stack Matrix */}
          <div className="p-5 rounded-2xl bg-[#07130D]/80 border border-[#C6A15B]/30 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm">💻</span>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider font-cinzel">
                  {isAr ? 'المكدس البرمجي وأدوات التطوير (Full-Stack Engineering Stack)' : 'Full-Stack Engineering Tech Stack'}
                </h3>
              </div>
              <span className="text-[10px] text-[#E5C78B] font-mono">Frontend · Backend · DB · CMS</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 text-center text-xs">
              {[
                'ReactJS',
                'Next.js',
                'TypeScript',
                'JavaScript (ES6+)',
                'HTML5 & CSS3',
                'Node.js',
                'Express.js',
                'PHP',
                'WordPress',
                'Salla & Zid',
                'Shopify',
                'MySQL',
                'MongoDB',
                'SQL Server',
                'Vue.js',
                'Angular',
                'Tailwind CSS',
                'RESTful APIs & GraphQL',
              ].map((tech, idx) => (
                <div key={idx} className="p-2 rounded-xl bg-[#0B1F16]/60 border border-emerald-500/20 text-emerald-200 font-medium truncate">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Professional Experience (Chronological Record) */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-emerald-950/80 pb-2">
            <h2 className="text-xs font-bold text-[#E5C78B] uppercase tracking-wider flex items-center gap-2 font-cinzel">
              <Briefcase className="w-4 h-4 text-[#C6A15B]" />
              <span>{isAr ? 'الخبرات المهنية وسجل العمل (Work Experience)' : 'Professional Work Experience'}</span>
            </h2>
            <span className="text-xs font-mono text-slate-400">
              {experiences.length} {isAr ? 'مناصب موثقة' : 'Documented Positions'}
            </span>
          </div>

          <div className="space-y-6">
            {/* Featured Active Role: Brains Valley Co */}
            <div className="p-6 rounded-2xl bg-[#07130D] border-2 border-[#C6A15B]/50 shadow-xl space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-emerald-950">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Building className="w-4 h-4 text-[#C6A15B]" />
                    <h3 className="font-extrabold text-white text-lg font-cinzel">
                      {isAr ? 'شركة برينز فالي (Brains Valley Co)' : 'Brains Valley Co'}
                    </h3>
                    <span className="text-[10px] bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 px-2.5 py-0.5 rounded-full font-mono uppercase font-bold">
                      {isAr ? 'الوظيفة الحالية النشطة' : 'Current Active Role'}
                    </span>
                  </div>
                  <div className="text-sm font-bold text-[#E5C78B]">
                    {isAr
                      ? 'كاتب عروض مناقصات | ضبط جودة العطاءات | تطوير الأعمال'
                      : 'Tender Proposal Writer | Tender QA | Business Development'}
                  </div>
                </div>
                <div className="text-xs text-slate-300 font-mono sm:text-right shrink-0">
                  <div className="text-emerald-400 font-bold">{isAr ? 'يناير 2026 – حتى الآن' : '2026 January / Present'}</div>
                  <div className="text-slate-400">{isAr ? 'السوق السعودي والخليجي · عن بُعد' : 'Saudi Market & Enterprise Bids · Remote'}</div>
                </div>
              </div>

              {/* Milestone Banner */}
              <div className="p-3.5 bg-emerald-950/40 border border-[#C6A15B]/30 rounded-xl text-xs text-[#F0D9A2] flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#E5C78B] shrink-0" />
                <span>
                  <strong>{isAr ? 'إنجاز مهني موثق: ' : 'Documented Milestone: '}</strong>
                  {isAr
                    ? 'المساهمة في إعداد ومراجعة وتدقيق أكثر من 200 مناقصة في برينز فالي، ودمج الخبرة التقنية العميقة بتحليل كراسات الشروط ومطابقة المتطلبات والامتثال الفني لمنصة اعتماد.'
                    : 'Contributed to the preparation and review of over 200 tenders at Brains Valley Co, combining technical expertise with requirement matching, compliance review, and Bid QA.'}
                </span>
              </div>

              {/* 4 Core Pillars Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-xl bg-[#0B1F16]/50 border border-emerald-500/20 space-y-2">
                  <div className="font-bold text-xs text-white flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-950 text-[#E5C78B] font-mono text-[10px] font-bold flex items-center justify-center border border-[#E5C78B]/30">01</span>
                    <span>{isAr ? 'تحليل كراسات الشروط وتقييم العطاءات' : 'RFP/RFQ Analysis & Tender Evaluation'}</span>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                    <li>{isAr ? 'تحليل كراسات الشروط والمواصفات المعقدة ووثائق TOR للمشاريع الحكومية والخاصة بالسعودية.' : 'Analyzed complex RFPs, RFQs, and TORs for government and private sector projects in Saudi Arabia.'}</li>
                    <li>{isAr ? 'تنفيذ تقييمات التقدم للعطاءات (Bid/No-Bid) بالتنسيق مع فرق المبيعات والتنفيذ.' : 'Conducted technical Bid/No-Bid assessments evaluating risks, resource availability, and feasibility.'}</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#0B1F16]/50 border border-emerald-500/20 space-y-2">
                  <div className="font-bold text-xs text-white flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-950 text-[#E5C78B] font-mono text-[10px] font-bold flex items-center justify-center border border-[#E5C78B]/30">02</span>
                    <span>{isAr ? 'إعداد وصياغة العروض الفنية' : 'Technical Proposal Development'}</span>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                    <li>{isAr ? 'صياغة عروض فنية محكمة تشمل الملخص التنفيذي، المنهجيات الفنية، نطاق العمل، ومعمارية الحلول.' : 'Authored comprehensive technical proposals including executive summaries, methodologies, and architectures.'}</li>
                    <li>{isAr ? 'تغطية مجالات البنية التحتية، الشبكات، الأمن السيبراني، الحلول السحابية، والتحول الرقمي.' : 'Developed proposal content across IT Infrastructure, Cybersecurity, Cloud, and Digital Transformation.'}</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#0B1F16]/50 border border-emerald-500/20 space-y-2">
                  <div className="font-bold text-xs text-white flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-950 text-[#E5C78B] font-mono text-[10px] font-bold flex items-center justify-center border border-[#E5C78B]/30">03</span>
                    <span>{isAr ? 'الامتثال وضمان الجودة (Bid QA)' : 'Compliance & Quality Assurance (QA)'}</span>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                    <li>{isAr ? 'بناء وتحديث مصفوفات الامتثال التفصيلية لضمان المطابقة الكاملة لكل بند من بنود الطرح.' : 'Developed and maintained detailed Compliance Matrices ensuring strict requirement traceability.'}</li>
                    <li>{isAr ? 'إجراء مراجعات تدقيق الجودة الصارمة لمنع التناقضات وحذف الأخطاء التنسيقية والفنية.' : 'Performed rigorous quality reviews to ensure consistency across scopes, timelines, and specifications.'}</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#0B1F16]/50 border border-emerald-500/20 space-y-2">
                  <div className="font-bold text-xs text-white flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-950 text-[#E5C78B] font-mono text-[10px] font-bold flex items-center justify-center border border-[#E5C78B]/30">04</span>
                    <span>{isAr ? 'إدارة التقديم عبر منصة اعتماد' : 'Tender & Submission Management'}</span>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                    <li>{isAr ? 'تجهيز وتنظيم حزم التقديم الفنية المتكاملة وضبط إصدارات الوثائق بدقة.' : 'Prepared and organized complete technical submission packages with strict document version control.'}</li>
                    <li>{isAr ? 'إدارة وتنفيذ عمليات الرفع عبر منصة اعتماد وبوابات المشتريات الحكومية بالمملكة.' : 'Managed proposal submissions via Etimad and government procurement portals in compliance with regulations.'}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Remaining Historical Positions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experiences
                .filter((exp) => exp.id !== 'exp-brains-valley')
                .map((exp) => (
                  <div key={exp.id} className="p-5 rounded-2xl bg-[#07130D]/80 border border-emerald-500/20 space-y-3 flex flex-col justify-between hover:border-emerald-500/40 transition-colors">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-bold text-white text-sm font-cinzel">{exp.company}</h3>
                          <div className="text-xs font-semibold text-[#E5C78B]">{exp.position}</div>
                        </div>
                        <span className="text-[11px] text-emerald-400 font-mono text-right shrink-0">
                          {exp.period}
                        </span>
                      </div>
                      
                      {exp.responsibilities && exp.responsibilities.length > 0 && (
                        <ul className="space-y-1.5 pl-3 border-l-2 border-emerald-900/60 text-xs text-slate-300 leading-relaxed">
                          {exp.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx}>{resp}</li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="text-[11px] text-slate-400 pt-2 border-t border-emerald-950 flex items-center justify-between">
                      <span>{isAr ? 'نمط العمل:' : 'Work Mode:'} {exp.workMode}</span>
                      {exp.location && <span>{exp.location}</span>}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* 4. Education (Zoser University) */}
        <section className="space-y-3">
          <h2 className="text-xs font-bold text-[#E5C78B] uppercase tracking-wider border-b border-emerald-950/80 pb-2 flex items-center gap-2 font-cinzel">
            <GraduationCap className="w-4 h-4 text-[#C6A15B]" />
            <span>{isAr ? 'المؤهلات التعليمية والأكاديمية (Education)' : 'Education & Academic Credentials'}</span>
          </h2>

          <div className="p-6 rounded-2xl bg-[#07130D]/90 border border-emerald-500/25 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-emerald-950">
              <div>
                <h3 className="text-base font-bold text-white font-cinzel">
                  {isAr ? 'بكالوريوس نظم المعلومات الإدارية (MIS)' : education.degree}
                </h3>
                <div className="text-xs font-semibold text-[#E5C78B]">
                  {isAr ? 'جامعة زوسر (Zoser University)' : education.institution}
                </div>
              </div>
              <span className="text-xs text-emerald-400 font-mono font-bold bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
                {education.period}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
              {isAr
                ? 'دراسة جامعية تخصصية متكاملة تجمع بين علوم الحاسب وهندسة البرمجيات وإدارة الأعمال: هياكل البيانات والخوارزميات، نظم قواعد البيانات، الذكاء الاصطناعي والنظم الخبيرة، شبكات الحاسب، أمن المعلومات، وتحليل وتصميم النظم ودعم اتخاذ القرار المؤسسي.'
                : education.summary}
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold text-white block mb-2 font-cinzel">
                {isAr ? 'المجالات الأكاديمية التخصصية:' : 'Core Academic Disciplines:'}
              </span>
              <div className="flex flex-wrap gap-2">
                {education.topics.map((t, idx) => (
                  <span key={idx} className="text-[11px] px-2.5 py-1 rounded-lg bg-[#0B1F16] border border-emerald-500/20 text-emerald-300 font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Professional Credentials (Summary List in CV style - NO image gallery) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-emerald-950/80 pb-2">
            <h2 className="text-xs font-bold text-[#E5C78B] uppercase tracking-wider flex items-center gap-2 font-cinzel">
              <Award className="w-4 h-4 text-[#C6A15B]" />
              <span>{isAr ? 'الشهادات والاعتمادات المهنية الموجزة' : 'Professional Certifications (Summary)'}</span>
            </h2>
            {onNavigate ? (
              <button
                type="button"
                onClick={() => onNavigate('certifications')}
                className="text-xs font-bold text-[#E5C78B] hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span>{isAr ? 'عرض معرض الشهادات الكامل (27+ شهادة) ←' : 'View Full Credentials Gallery (27+) →'}</span>
              </button>
            ) : (
              <a
                href={isAr ? '/ar/certifications/index.html' : '/en/certifications/index.html'}
                className="text-xs font-bold text-[#E5C78B] hover:text-white flex items-center gap-1"
              >
                <span>{isAr ? 'عرض معرض الشهادات الكامل (27+ شهادة) ←' : 'View Full Credentials Gallery (27+) →'}</span>
              </a>
            )}
          </div>

          <div className="p-5 rounded-2xl bg-[#07130D]/80 border border-emerald-500/20 space-y-3">
            <p className="text-xs text-slate-300">
              {isAr
                ? 'قائمة بأبرز الشهادات المهنية المعتمدة دولياً الداعمة للمسيرة الهندسية والاستشارية:'
                : 'Summary list of internationally recognized credentials backing software and tender engineering:'}
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-200">
              <li className="flex items-center gap-2 p-2 rounded-lg bg-[#0B1F16]/60 border border-emerald-500/15">
                <CheckCircle2 className="w-4 h-4 text-[#E5C78B] shrink-0" />
                <span><strong>Meta Back-End Developer</strong> — Python, Django, MySQL, REST APIs</span>
              </li>
              <li className="flex items-center gap-2 p-2 rounded-lg bg-[#0B1F16]/60 border border-emerald-500/15">
                <CheckCircle2 className="w-4 h-4 text-[#E5C78B] shrink-0" />
                <span><strong>Meta Front-End Developer</strong> — React.js, JavaScript (ES6+), HTML5/CSS3</span>
              </li>
              <li className="flex items-center gap-2 p-2 rounded-lg bg-[#0B1F16]/60 border border-emerald-500/15">
                <CheckCircle2 className="w-4 h-4 text-[#E5C78B] shrink-0" />
                <span><strong>NIIT Front-End Specialist</strong> — Advanced React & Component Architecture</span>
              </li>
              <li className="flex items-center gap-2 p-2 rounded-lg bg-[#0B1F16]/60 border border-emerald-500/15">
                <CheckCircle2 className="w-4 h-4 text-[#E5C78B] shrink-0" />
                <span><strong>Meta Principles of UX/UI Design</strong> — Figma, User Research & WCAG</span>
              </li>
              <li className="flex items-center gap-2 p-2 rounded-lg bg-[#0B1F16]/60 border border-emerald-500/15">
                <CheckCircle2 className="w-4 h-4 text-[#E5C78B] shrink-0" />
                <span><strong>Mahara-Tech ITI MERN Stack</strong> — MongoDB, Express, React, Node.js</span>
              </li>
              <li className="flex items-center gap-2 p-2 rounded-lg bg-[#0B1F16]/60 border border-emerald-500/15">
                <CheckCircle2 className="w-4 h-4 text-[#E5C78B] shrink-0" />
                <span><strong>AWS Cloud Technical Essentials</strong> — Amazon Web Services Architecture</span>
              </li>
              <li className="flex items-center gap-2 p-2 rounded-lg bg-[#0B1F16]/60 border border-emerald-500/15">
                <CheckCircle2 className="w-4 h-4 text-[#E5C78B] shrink-0" />
                <span><strong>Google System Administration</strong> — IT Infrastructure & OS Services</span>
              </li>
              <li className="flex items-center gap-2 p-2 rounded-lg bg-[#0B1F16]/60 border border-emerald-500/15">
                <CheckCircle2 className="w-4 h-4 text-[#E5C78B] shrink-0" />
                <span><strong>HKUST Information Systems Auditing</strong> — IT Controls & Assurance</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 6. Languages */}
        <section className="space-y-3">
          <h2 className="text-xs font-bold text-[#E5C78B] uppercase tracking-wider border-b border-emerald-950/80 pb-2 flex items-center gap-2 font-cinzel">
            <Globe className="w-4 h-4 text-[#C6A15B]" />
            <span>{isAr ? 'اللغات (Languages)' : 'Languages'}</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-[#07130D]/80 rounded-xl border border-emerald-500/20 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-white font-cinzel">{isAr ? 'اللغة العربية (Arabic)' : 'Arabic (العربية)'}</span>
                <div className="text-xs text-slate-300 mt-0.5">{isAr ? 'اللغة الأم (Native Proficiency)' : 'Native / Primary Language'}</div>
              </div>
              <CheckCircle2 className="w-4 h-4 text-[#E5C78B]" />
            </div>

            <div className="p-4 bg-[#07130D]/80 rounded-xl border border-emerald-500/20 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-white font-cinzel">{isAr ? 'اللغة الإنجليزية (English)' : 'English (الإنجليزية)'}</span>
                <div className="text-xs text-slate-300 mt-0.5">{isAr ? 'كفاءة مهنية كاملة (Professional Working Proficiency)' : 'Professional Working Proficiency'}</div>
              </div>
              <CheckCircle2 className="w-4 h-4 text-[#E5C78B]" />
            </div>
          </div>
        </section>

        {/* Sheet Footer */}
        <div className="pt-6 border-t border-emerald-950/80 text-[11px] text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>{isAr ? 'يوسف غمري · السيرة الذاتية المهنية الرسمية · القاهرة، مصر' : 'Youssef Ghamry · Verified Official CV · Cairo, Egypt'}</span>
          <div className="flex items-center gap-4">
            <a href={`mailto:${profile.email}`} className="text-[#E5C78B] hover:underline">
              {profile.email}
            </a>
            <span>·</span>
            <a href={`tel:${profile.phone}`} className="text-emerald-400 hover:underline" dir="ltr">
              {profile.phone}
            </a>
          </div>
        </div>
      </div>

      {/* PDF PREVIEW MODAL */}
      {pdfPreviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in no-print">
          <div className="relative w-full max-w-5xl h-[90vh] bg-[#07130D] rounded-3xl border border-[#C6A15B]/50 shadow-2xl flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-950 bg-[#050806]">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#E5C78B]" />
                <span className="font-bold text-sm text-white font-cinzel">
                  {isAr ? 'معاينة السيرة الذاتية الأصلية (PDF)' : 'Official CV Document (PDF Preview)'}
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <a
                  href={officialPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#C6A15B]/40 text-xs font-semibold text-[#E5C78B] hover:text-white"
                >
                  <span>{isAr ? 'فتح في تبويب مستقل' : 'Open in Tab'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={officialPdfUrl}
                  download="Youssef_Ghamry_CV.pdf"
                  className="btn-gold text-xs py-1.5 px-3 font-bold"
                >
                  {isAr ? 'تحميل' : 'Download'}
                </a>
                <button
                  type="button"
                  onClick={() => setPdfPreviewOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Embedded PDF */}
            <div className="flex-1 w-full bg-slate-900/60 p-2">
              <iframe
                src={`${officialPdfUrl}#toolbar=1&navpanes=0`}
                title="Youssef Ghamry Official CV PDF"
                className="w-full h-full rounded-xl border border-emerald-950"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
