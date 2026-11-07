import React from 'react';
import {
  FileText,
  Briefcase,
  Layers,
  BookOpen,
  Mail,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Target,
  Cpu,
  Building2,
  FileCheck2,
  Download,
  Sparkles,
  Globe,
  TrendingUp,
  Layout,
  LayoutGrid,
  Smartphone,
  Monitor,
  Palette,
  Server,
  Code2,
  Database,
  Workflow,
  Boxes,
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { Project, Service, Article } from '../types';

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onSelectProject: (project: Project) => void;
  onSelectService: (service: Service) => void;
  onSelectArticle: (article: Article) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProject,
  onSelectService,
  onSelectArticle,
}) => {
  const { profile, projects, services, articles, experiences } = useData();

  const featuredProjects = projects.filter((p) => p.featured && p.status === 'published').slice(0, 6);
  const featuredServices = services.filter((s) => s.featured && s.status === 'published').slice(0, 4);
  const latestArticles = articles.filter((a) => a.status === 'published').slice(0, 3);
  const topExperiences = experiences.slice(0, 3);

  return (
    <div className="space-y-28 py-8 animate-fade-in relative overflow-hidden bg-[#050806] text-slate-100">
      {/* Volumetric Radial Emerald Glows in Background */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-radial-beam pointer-events-none blur-2xl"></div>
      <div className="absolute top-48 left-1/10 w-[500px] h-[500px] bg-emerald-500/10 pointer-events-none rounded-full blur-3xl"></div>

      {/* 1. CINEMATIC 3D HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Identity, Title & CTAs */}
          <div className="lg:col-span-7 space-y-7">
            {/* Elegant Emerald & Gold Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F16]/90 border border-[#C6A15B]/30 shadow-[0_0_15px_rgba(16,185,129,0.15)] text-xs font-semibold text-[#E5C78B] tracking-wider uppercase font-cinzel">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)] animate-pulse"></span>
              <span>Full-Stack Developer</span>
              <span className="text-emerald-800">·</span>
              <span>Web, Software & Mobile Apps</span>
              <span className="text-emerald-800">·</span>
              <span>Tenders & Bid QA</span>
            </div>

            {/* Name with Metallic Gold Accent & Serif Headline */}
            <div className="space-y-3">
              <div className="text-sm sm:text-base font-semibold tracking-wider text-emerald-400 font-mono uppercase">
                {profile.name} — Full-Stack Developer
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-cinzel text-white leading-tight">
                I Design & Build Websites, Software & Mobile Applications
              </h1>
              <p className="text-lg sm:text-xl font-bold font-editorial italic gold-gradient-text leading-snug">
                Full-Stack Developer | Web, Software & Mobile App Developer
              </p>
              <p className="text-xs sm:text-sm font-semibold tracking-wide text-slate-300">
                Web Applications · Enterprise Systems & ERP · Mobile Apps · Cloud & APIs
              </p>
            </div>

            {/* Core Professional Value Proposition */}
            <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
              <p>
                From concept to deployment, I turn ideas into powerful digital products. I design, develop, and build custom websites, business systems, web applications, and mobile apps.
              </p>
              <p className="text-xs sm:text-sm text-emerald-300/90 font-medium border-s-2 border-[#C6A15B] ps-3.5 italic">
                «من الفكرة إلى التنفيذ، أحوّل الأفكار إلى منتجات رقمية متكاملة، بدايةً من تحليل المتطلبات وتصميم تجربة المستخدم، وحتى البرمجة والتطوير والإطلاق.»
              </p>
            </div>

            {/* 4 Required Interactive Buttons with Glow & Depth */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => onNavigate('portfolio')}
                className="inline-flex items-center gap-2.5 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#F0D9A2] via-[#E5C78B] to-[#C6A15B] hover:brightness-110 rounded-xl transition-all cursor-pointer shadow-[0_0_20px_rgba(229,199,139,0.4)] hover:shadow-[0_0_28px_rgba(229,199,139,0.6)] hover:-translate-y-0.5"
              >
                <Briefcase className="w-4 h-4 text-slate-950" />
                <span>Explore My Portfolio</span>
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-2.5 px-5 py-3 text-xs font-semibold text-emerald-300 bg-[#0B1F16]/80 hover:bg-[#0B1F16] border border-emerald-500/30 hover:border-emerald-400 rounded-xl transition-all cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:-translate-y-0.5"
              >
                <Layers className="w-4 h-4 text-emerald-400" />
                <span>View My Services</span>
              </button>

              <button
                onClick={() => onNavigate('cv')}
                className="inline-flex items-center gap-2.5 px-5 py-3 text-xs font-semibold text-slate-200 bg-[#07130D]/90 hover:bg-[#0B1F16] border border-slate-700/60 hover:border-[#C6A15B]/50 rounded-xl transition-all cursor-pointer hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-[#E5C78B]" />
                <span>Download My CV</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-4 py-3 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#C6A15B]" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Quick Credibility Footprint */}
            <div className="pt-4 border-t border-emerald-950/70 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300 font-medium">Full-Stack Web & Mobile Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E5C78B]" />
                <span className="text-slate-300 font-medium">200+ Tenders Prepared at Brains Valley</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300 font-medium">29+ Client Projects across 15+ Countries</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Visual Centerpiece & Executive Glass Console */}
          <div className="lg:col-span-5 relative">
            {/* Glowing 3D Orb / Emblem Container with Floating Tilt Effect */}
            <div className="relative mx-auto max-w-md">
              {/* Backlight halo */}
              <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-3xl transform scale-90 pointer-events-none animate-pulse-glow"></div>

              {/* 3D Orb Card */}
              <div className="relative z-10 glass-panel rounded-3xl p-6 sm:p-8 space-y-6 border border-emerald-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
                {/* 3D Visual Emblem from user attachment */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full overflow-hidden border-2 border-[#C6A15B]/50 shadow-[0_0_40px_rgba(16,185,129,0.35)] animate-float-slow group">
                  <img
                    src="/assets/aistudio/image_ef5d64bf.png"
                    alt="Dark Luxury 3D Emerald Emblem"
                    className="w-full h-full object-cover scale-110 group-hover:scale-120 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050806]/60 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Executive Snapshot Card (Inspired by reference UI in image_1bf11bde.png) */}
                <div className="bg-[#050806]/90 rounded-2xl p-4 sm:p-5 border border-emerald-500/20 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Professional Status:</span>
                    <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      <span>Active & Available</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-emerald-950/80 text-xs">
                    <div className="p-2.5 rounded-lg bg-[#0B1F16]/60 border border-emerald-500/10">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">Tender Records</div>
                      <div className="text-base font-bold text-white font-mono mt-0.5">200+ / 400+</div>
                      <div className="text-[10px] text-emerald-400">Brains Valley & Aamak</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#0B1F16]/60 border border-emerald-500/10">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">Client Systems</div>
                      <div className="text-base font-bold text-[#E5C78B] font-mono mt-0.5">29+ Platforms</div>
                      <div className="text-[10px] text-slate-400">15+ Global Countries</div>
                    </div>
                  </div>

                  {/* Direct Contact Button */}
                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full mt-2 flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-slate-950 bg-gradient-to-r from-[#E5C78B] to-[#C6A15B] hover:brightness-110 rounded-xl transition-all cursor-pointer shadow-sm"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Direct Business Inquiry</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GLOBAL METRICS STATS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 glass-panel rounded-2xl border border-emerald-500/20">
          <div className="text-center sm:text-left p-3">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#E5C78B] font-mono">200+</div>
            <div className="text-xs text-slate-300 font-semibold mt-1">Tenders Prepared & Reviewed</div>
            <div className="text-[11px] text-slate-500">Technology & Government RFPs</div>
          </div>
          <div className="text-center sm:text-left p-3">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">29+</div>
            <div className="text-xs text-slate-300 font-semibold mt-1">Live Web & ERP Systems</div>
            <div className="text-[11px] text-slate-500">Deployed and Maintained</div>
          </div>
          <div className="text-center sm:text-left p-3">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#E5C78B] font-mono">15+</div>
            <div className="text-xs text-slate-300 font-semibold mt-1">Countries & Regional Markets</div>
            <div className="text-[11px] text-slate-500">Saudi Arabia, UAE, US, UK, EU</div>
          </div>
          <div className="text-center sm:text-left p-3">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">100%</div>
            <div className="text-xs text-slate-300 font-semibold mt-1">Traceability & Compliance</div>
            <div className="text-[11px] text-slate-500">Zero-Defect Submission Gate</div>
          </div>
        </div>
      </section>

      {/* 2.5 CORE FULL-STACK CAPABILITIES & PILLARS (10 PILLARS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-3xl mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F16] border border-[#C6A15B]/30 text-xs font-semibold text-[#E5C78B] uppercase tracking-wider font-cinzel">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Full-Stack Engineering & Scope</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-cinzel text-white">
            End-to-End Digital Product Architecture
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            From idea conceptualization and requirement analysis to UI/UX design, full-stack programming, database architecture, and live deployment.
          </p>
          <p className="text-xs sm:text-sm text-emerald-300/90 font-medium border-s-2 border-[#C6A15B] ps-3.5 italic" dir="rtl">
            «أصمم وأطور المواقع، الأنظمة الإدارية، تطبيقات الويب، وبرامج الموبايل وسطح المكتب وفق دورة حياة برمجية متكاملة.»
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {/* 1. Websites */}
          <div className="p-5 glass-panel glass-panel-hover rounded-2xl border border-emerald-500/20 space-y-3 group transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-[#0B1F16] border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:border-[#E5C78B] transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm group-hover:text-[#E5C78B] transition-colors">Websites</h3>
              <div className="text-[11px] text-emerald-400/90 font-arabic font-medium" dir="rtl">المواقع الإلكترونية</div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Informational, corporate portfolios, e-commerce, and specialized digital platforms.
            </p>
            <div className="text-[10px] text-slate-500 font-mono">WordPress · Drupal · Salla</div>
          </div>

          {/* 2. Web Applications */}
          <div className="p-5 glass-panel glass-panel-hover rounded-2xl border border-[#C6A15B]/25 space-y-3 group transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-[#0B1F16] border border-[#C6A15B]/30 flex items-center justify-center text-[#E5C78B] group-hover:scale-110 group-hover:border-emerald-400 transition-all shadow-[0_0_15px_rgba(198,161,91,0.2)]">
              <LayoutGrid className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm group-hover:text-[#E5C78B] transition-colors">Web Applications</h3>
              <div className="text-[11px] text-emerald-400/90 font-arabic font-medium" dir="rtl">تطبيقات الويب</div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Interactive web apps, bespoke SaaS architectures, and real-time operations dashboards.
            </p>
            <div className="text-[10px] text-slate-500 font-mono">React · Next.js · TypeScript</div>
          </div>

          {/* 3. Software & Systems */}
          <div className="p-5 glass-panel glass-panel-hover rounded-2xl border border-emerald-500/20 space-y-3 group transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-[#0B1F16] border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:border-[#E5C78B] transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <Boxes className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm group-hover:text-[#E5C78B] transition-colors">Software & Systems</h3>
              <div className="text-[11px] text-emerald-400/90 font-arabic font-medium" dir="rtl">الأنظمة والبرمجيات</div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Enterprise ERP, CRM, POS, inventory, accounting, and business workflow platforms.
            </p>
            <div className="text-[10px] text-slate-500 font-mono">ERP · CRM · POS Systems</div>
          </div>

          {/* 4. Mobile Applications */}
          <div className="p-5 glass-panel glass-panel-hover rounded-2xl border border-[#C6A15B]/25 space-y-3 group transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-[#0B1F16] border border-[#C6A15B]/30 flex items-center justify-center text-[#E5C78B] group-hover:scale-110 group-hover:border-emerald-400 transition-all shadow-[0_0_15px_rgba(198,161,91,0.2)]">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm group-hover:text-[#E5C78B] transition-colors">Mobile Applications</h3>
              <div className="text-[11px] text-emerald-400/90 font-arabic font-medium" dir="rtl">تطبيقات الجوال</div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Native and cross-platform smartphone mobile applications for Android and iOS.
            </p>
            <div className="text-[10px] text-slate-500 font-mono">Android · iOS · Flutter</div>
          </div>

          {/* 5. Desktop Applications */}
          <div className="p-5 glass-panel glass-panel-hover rounded-2xl border border-emerald-500/20 space-y-3 group transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-[#0B1F16] border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:border-[#E5C78B] transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <Monitor className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm group-hover:text-[#E5C78B] transition-colors">Desktop Apps</h3>
              <div className="text-[11px] text-emerald-400/90 font-arabic font-medium" dir="rtl">برامج سطح المكتب</div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              High-performance desktop software, internal enterprise tooling, and automation utilities.
            </p>
            <div className="text-[10px] text-slate-500 font-mono">Windows · macOS · Linux</div>
          </div>

          {/* 6. UI/UX Design */}
          <div className="p-5 glass-panel glass-panel-hover rounded-2xl border border-[#C6A15B]/25 space-y-3 group transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-[#0B1F16] border border-[#C6A15B]/30 flex items-center justify-center text-[#E5C78B] group-hover:scale-110 group-hover:border-emerald-400 transition-all shadow-[0_0_15px_rgba(198,161,91,0.2)]">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm group-hover:text-[#E5C78B] transition-colors">UI/UX Design</h3>
              <div className="text-[11px] text-emerald-400/90 font-arabic font-medium" dir="rtl">تصميم واجهات وتجربة المستخدم</div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Modern user interface design, user journey mapping, design systems, and wireframing.
            </p>
            <div className="text-[10px] text-slate-500 font-mono">Figma · Prototyping · UX</div>
          </div>

          {/* 7. Backend Development */}
          <div className="p-5 glass-panel glass-panel-hover rounded-2xl border border-emerald-500/20 space-y-3 group transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-[#0B1F16] border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:border-[#E5C78B] transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm group-hover:text-[#E5C78B] transition-colors">Backend Engineering</h3>
              <div className="text-[11px] text-emerald-400/90 font-arabic font-medium" dir="rtl">تطوير الخوادم والمنطق</div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Secure servers, robust business logic, authentication, microservices, and high concurrency.
            </p>
            <div className="text-[10px] text-slate-500 font-mono">Node.js · Express · PHP · Python</div>
          </div>

          {/* 8. Frontend Development */}
          <div className="p-5 glass-panel glass-panel-hover rounded-2xl border border-[#C6A15B]/25 space-y-3 group transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-[#0B1F16] border border-[#C6A15B]/30 flex items-center justify-center text-[#E5C78B] group-hover:scale-110 group-hover:border-emerald-400 transition-all shadow-[0_0_15px_rgba(198,161,91,0.2)]">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm group-hover:text-[#E5C78B] transition-colors">Frontend Development</h3>
              <div className="text-[11px] text-emerald-400/90 font-arabic font-medium" dir="rtl">الواجهات الأمامية التفاعلية</div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Lightning-fast, accessible, responsive client interfaces with 60fps animations.
            </p>
            <div className="text-[10px] text-slate-500 font-mono">React · Tailwind · HTML5/ES6+</div>
          </div>

          {/* 9. Database Development */}
          <div className="p-5 glass-panel glass-panel-hover rounded-2xl border border-emerald-500/20 space-y-3 group transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-[#0B1F16] border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:border-[#E5C78B] transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm group-hover:text-[#E5C78B] transition-colors">Database Engineering</h3>
              <div className="text-[11px] text-emerald-400/90 font-arabic font-medium" dir="rtl">تصميم وإدارة قواعد البيانات</div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Relational and NoSQL schemas, query optimization, indexing, backups, and security.
            </p>
            <div className="text-[10px] text-slate-500 font-mono">PostgreSQL · MySQL · MongoDB</div>
          </div>

          {/* 10. Integration & Automation */}
          <div className="p-5 glass-panel glass-panel-hover rounded-2xl border border-[#C6A15B]/25 space-y-3 group transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-[#0B1F16] border border-[#C6A15B]/30 flex items-center justify-center text-[#E5C78B] group-hover:scale-110 group-hover:border-emerald-400 transition-all shadow-[0_0_15px_rgba(198,161,91,0.2)]">
              <Workflow className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm group-hover:text-[#E5C78B] transition-colors">Integration & Automation</h3>
              <div className="text-[11px] text-emerald-400/90 font-arabic font-medium" dir="rtl">ربط الأنظمة والأتمتة</div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              REST/GraphQL APIs, payment gateways, ERP synchronizations, webhooks, and process automation.
            </p>
            <div className="text-[10px] text-slate-500 font-mono">APIs · Webhooks · Automation</div>
          </div>
        </div>
      </section>

      {/* 3. KEY PROFESSIONAL COMPETENCIES (3D LUXURY GLASS CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-3xl mb-12 space-y-2">
          <div className="text-xs font-semibold text-[#E5C78B] uppercase tracking-wider font-cinzel">
            Domain Competencies
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-editorial text-white">
            Bridging Rigorous Public Procurement & IT Engineering
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
            Combining hands-on software development with tender compliance ensures technical
            commitments are defensible, evaluative, and fully compliant with RFP specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="p-6 glass-panel glass-panel-hover rounded-2xl space-y-3.5 border border-emerald-500/20">
            <div className="w-12 h-12 rounded-xl bg-[#0B1F16] border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-base">Tender Analysis & Decomposition</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Deconstructing complex government RFPs, TORs, and evaluation rubrics to extract
              mandatory qualification gates and eliminate disqualification hazards.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 glass-panel glass-panel-hover rounded-2xl space-y-3.5 border border-[#C6A15B]/25">
            <div className="w-12 h-12 rounded-xl bg-[#0B1F16] border border-[#C6A15B]/30 flex items-center justify-center text-[#E5C78B] shadow-[0_0_15px_rgba(198,161,91,0.2)]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-base">Compliance Matrix & Bid QA</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Building exhaustive requirement traceability matrices that pair each RFP clause with
              verified evidence, eliminating gaps and inconsistencies.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 glass-panel glass-panel-hover rounded-2xl space-y-3.5 border border-emerald-500/20">
            <div className="w-12 h-12 rounded-xl bg-[#0B1F16] border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-base">Saudi Government & Etimad</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Navigating the regulatory framework of Saudi public procurement, Etimad electronic
              submissions, local content standards, and vendor pre-qualification.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 glass-panel glass-panel-hover rounded-2xl space-y-3.5 border border-[#C6A15B]/25">
            <div className="w-12 h-12 rounded-xl bg-[#0B1F16] border border-[#C6A15B]/30 flex items-center justify-center text-[#E5C78B] shadow-[0_0_15px_rgba(198,161,91,0.2)]">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-base">IT Architecture & Pre-Sales</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Translating software engineering architectures (MERN, Python, Next.js, APIs, ERP) into
              structured methodology chapters and credible SLA schedules.
            </p>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PORTFOLIO PROJECTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-semibold text-[#E5C78B] uppercase tracking-wider mb-1 font-cinzel">
              Proven Execution & Case Studies
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-editorial">
              Featured Projects & Tenders
            </h2>
          </div>
          <button
            onClick={() => onNavigate('portfolio')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E5C78B] hover:text-[#F0D9A2] cursor-pointer"
          >
            <span>Explore All 29+ Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="p-6 glass-panel glass-panel-hover rounded-2xl flex flex-col justify-between group cursor-pointer border border-emerald-500/20"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-[#E5C78B] uppercase tracking-wider truncate">
                    {project.category}
                  </span>
                  {project.countryName && (
                    <span className="text-emerald-400 font-medium shrink-0 flex items-center gap-1">
                      <span>{project.countryName.split(' ')[0]}</span>
                    </span>
                  )}
                </div>

                <div className="flex items-start gap-3">
                  {project.icon && (
                    <div className="w-10 h-10 rounded-xl bg-[#0B1F16] border border-emerald-500/25 flex items-center justify-center text-lg shrink-0 shadow-inner">
                      {project.icon}
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold text-white text-base leading-snug group-hover:text-[#F0D9A2] transition-colors">
                      {project.title}
                    </h3>
                    {project.titleAr && project.titleAr !== project.title && (
                      <div className="text-xs text-slate-400 font-medium font-sans" dir="rtl">
                        {project.titleAr}
                      </div>
                    )}
                  </div>
                </div>

                {project.domain && (
                  <div className="text-xs text-emerald-400/80 font-mono flex items-center gap-1">
                    <Globe className="w-3 h-3" />
                    <span>{project.domain}</span>
                  </div>
                )}

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Tech Tags */}
                <div className="pt-2 text-xs text-slate-500 font-medium truncate">
                  {project.technologies.slice(0, 4).join(' · ')}
                </div>

                {/* Verified Results Badge */}
                {project.results && (
                  <div className="p-2.5 bg-emerald-950/40 rounded-lg border border-emerald-500/30 text-xs text-emerald-300 font-medium flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{project.results}</span>
                  </div>
                )}
              </div>

              <div className="pt-5 border-t border-emerald-950/70 flex items-center justify-between text-xs mt-4">
                <span className="font-semibold text-slate-400">{project.role}</span>
                <span className="text-[#E5C78B] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FEATURED SERVICES (DARK LUXURY PRESENTATION) */}
      <section className="bg-gradient-to-b from-[#07130D] to-[#050806] border-y border-emerald-500/20 py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-xs font-semibold text-[#E5C78B] uppercase tracking-wider mb-2 font-cinzel">
                Professional Offerings
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-editorial">
                Specialized Tender & IT Engineering Services
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E5C78B] hover:text-[#F0D9A2] cursor-pointer"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className="p-6 glass-panel glass-panel-hover rounded-2xl flex flex-col justify-between cursor-pointer border border-emerald-500/20 group"
              >
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-[#E5C78B]">
                    {service.categoryTitle}
                  </div>
                  <h3 className="font-bold text-white text-base leading-snug group-hover:text-emerald-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-6 border-t border-emerald-950/70 flex items-center justify-between text-xs mt-4">
                  <span className="text-slate-400 font-medium">
                    {service.deliverables?.length || 0} Core Deliverables
                  </span>
                  <span className="text-[#E5C78B] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>View Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LATEST ARTICLES FROM KNOWLEDGE HUB */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-semibold text-[#E5C78B] uppercase tracking-wider mb-1 font-cinzel">
              Articles & Strategic Insights
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-editorial">
              Knowledge Hub & Procurement Insights
            </h2>
          </div>
          <button
            onClick={() => onNavigate('articles')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E5C78B] hover:text-[#F0D9A2] cursor-pointer"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="p-6 glass-panel glass-panel-hover rounded-2xl flex flex-col justify-between cursor-pointer border border-emerald-500/20 group"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="font-semibold text-[#E5C78B]">{article.category}</span>
                  <span aria-hidden="true" className="text-emerald-800">·</span>
                  <span className="text-slate-400">{article.readTime}</span>
                </div>
                <h3 className="font-bold text-white text-base leading-snug group-hover:text-[#F0D9A2] transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {article.shortDescription}
                </p>
              </div>

              <div className="pt-6 border-t border-emerald-950/70 flex items-center justify-between text-xs mt-4">
                <span className="text-slate-400">{article.publishedDate}</span>
                <span className="text-[#E5C78B] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PROFESSIONAL EXPERIENCE TIMELINE HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-3xl mb-10 space-y-2">
          <div className="text-xs font-semibold text-[#E5C78B] uppercase tracking-wider font-cinzel">
            Career Timeline
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-editorial">
            Professional Experience Highlights
          </h2>
          <p className="text-xs text-slate-400">
            Active concurrent positions at Brains Valley Co. (remote) and Aamak – حلول أماكن (on-site).
          </p>
        </div>

        <div className="space-y-5">
          {topExperiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="p-6 sm:p-7 glass-panel rounded-2xl border border-emerald-500/20 space-y-3 relative overflow-hidden"
            >
              {/* Subtle gold milestone indicator on the side */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-950/70 pb-3">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-white text-base font-cinzel">{exp.company}</h3>
                    {exp.isConcurrent && (
                      <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded">
                        Concurrent Position
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-[#E5C78B] mt-0.5">{exp.position}</p>
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  {exp.period} · {exp.workMode} {exp.location && `· ${exp.location}`}
                </div>
              </div>

              {exp.tenderCountNote && (
                <div className="p-3 bg-[#0B1F16]/90 border border-[#C6A15B]/30 rounded-xl text-xs text-[#F0D9A2] font-medium shadow-xs">
                  {exp.tenderCountNote}
                </div>
              )}

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300 pt-1">
                {exp.responsibilities.slice(0, 4).map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('cv')}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-slate-200 bg-[#0B1F16] border border-emerald-500/30 hover:border-[#C6A15B] rounded-xl transition-all cursor-pointer shadow-sm hover:-translate-y-0.5"
          >
            <span>View Full 10-Position Career History in CV</span>
            <ArrowRight className="w-4 h-4 text-[#E5C78B]" />
          </button>
        </div>
      </section>

      {/* 8. CINEMATIC INQUIRY CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative glass-panel rounded-3xl p-8 sm:p-14 text-center space-y-6 border border-[#C6A15B]/40 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
          {/* Internal ambient emerald glow */}
          <div className="absolute inset-0 bg-radial-emerald pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E5C78B] uppercase tracking-wider font-cinzel">
              <Sparkles className="w-4 h-4 text-[#C6A15B]" />
              <span>High-Value Tender & IT Advisory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-editorial tracking-tight">
              Ready to Win Your Next Technology Tender?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              From comprehensive RFP decomposition to proposal drafting and Red-Team Bid QA on
              Etimad, let's build submissions that score at the top.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
              <button
                onClick={() => onNavigate('contact')}
                className="px-7 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#F0D9A2] via-[#E5C78B] to-[#C6A15B] hover:brightness-110 rounded-xl transition-all cursor-pointer shadow-[0_0_20px_rgba(229,199,139,0.4)]"
              >
                Submit Tender Inquiry
              </button>
              <button
                onClick={() => onNavigate('cv')}
                className="px-6 py-3 text-xs font-semibold text-slate-200 bg-[#07130D] hover:bg-[#0B1F16] border border-emerald-500/30 rounded-xl transition-all cursor-pointer"
              >
                Download Complete Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
