import React from 'react';
import {
  ShieldCheck,
  Cpu,
  Building2,
  FileText,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Layers,
  Sparkles,
} from 'lucide-react';
import { useData } from '../context/DataContext';

interface AboutPageProps {
  onNavigate: (tab: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { profile } = useData();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-16 animate-fade-in text-slate-200">
      {/* Page Title & Intro */}
      <header className="border-b border-emerald-950/80 pb-8 space-y-3">
        <div className="text-xs font-semibold text-[#E5C78B] uppercase tracking-wider font-cinzel">
          Professional Biography & Positioning
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-editorial tracking-tight">
          About Youssef Ghamry
        </h1>
        <p className="text-base sm:text-lg text-emerald-400 font-bold leading-relaxed">
          Full-Stack Developer | Web, Software & Mobile App Developer
        </p>
        <p className="text-xs sm:text-sm text-slate-300 font-medium">
          Web Applications · Enterprise Systems & ERP · Mobile Apps · Cloud & APIs · Tenders & Bid QA
        </p>
      </header>

      {/* 1. Professional Background */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2 font-cinzel">
          <FileText className="w-5 h-5 text-[#C6A15B]" />
          <span>Professional Background</span>
        </h2>
        <div className="prose prose-invert max-w-none text-sm sm:text-base leading-relaxed space-y-4 text-slate-300">
          <p>{profile.aboutBackground}</p>
          <p>
            Operating at the intersection of full-stack software development, business procurement, and
            technical compliance, I build complete digital products and ensure organizations competing for major public and private
            technology tenders present submissions that are technically robust, fully compliant, and
            strategically persuasive.
          </p>
        </div>
      </section>

      {/* 2. Full-Stack Product Lifecycle & Engineering Philosophy */}
      <section className="space-y-4 glass-panel p-6 sm:p-7 rounded-2xl border border-emerald-500/20">
        <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2 font-cinzel">
          <Cpu className="w-5 h-5 text-emerald-400" />
          <span>End-to-End Product Lifecycle & Engineering Philosophy</span>
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          As a Full-Stack Developer, my approach extends beyond writing code to commanding the entire digital product lifecycle. I bridge the gap between business requirements and technical execution across every stage:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2 text-xs text-slate-300">
          <div className="p-3 rounded-xl bg-[#0B1F16]/70 border border-emerald-500/15 space-y-1">
            <div className="font-bold text-white flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>1. Discovery & Needs Analysis</span>
            </div>
            <div className="text-[11px] text-slate-400">Understanding business goals, decomposing requirements, user journeys, and functional specifications.</div>
          </div>
          <div className="p-3 rounded-xl bg-[#0B1F16]/70 border border-emerald-500/15 space-y-1">
            <div className="font-bold text-white flex items-center gap-1.5 text-[#E5C78B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5C78B]"></span>
              <span>2. UI/UX Design & Prototyping</span>
            </div>
            <div className="text-[11px] text-slate-400">Crafting intuitive, accessible user interfaces, responsive design systems, and clickable wireframes.</div>
          </div>
          <div className="p-3 rounded-xl bg-[#0B1F16]/70 border border-emerald-500/15 space-y-1">
            <div className="font-bold text-white flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>3. Full-Stack Programming</span>
            </div>
            <div className="text-[11px] text-slate-400">Developing responsive frontends (React, Next.js) and high-concurrency backends (Node.js, Express, PHP, Python).</div>
          </div>
          <div className="p-3 rounded-xl bg-[#0B1F16]/70 border border-emerald-500/15 space-y-1">
            <div className="font-bold text-white flex items-center gap-1.5 text-[#E5C78B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5C78B]"></span>
              <span>4. Database Architecture & APIs</span>
            </div>
            <div className="text-[11px] text-slate-400">Designing relational/NoSQL schemas, query optimization, REST/GraphQL APIs, and webhooks.</div>
          </div>
          <div className="p-3 rounded-xl bg-[#0B1F16]/70 border border-emerald-500/15 space-y-1">
            <div className="font-bold text-white flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>5. Quality Assurance & Testing</span>
            </div>
            <div className="text-[11px] text-slate-400">Cross-device compatibility, performance audits, security hardening, and compliance verification.</div>
          </div>
          <div className="p-3 rounded-xl bg-[#0B1F16]/70 border border-emerald-500/15 space-y-1">
            <div className="font-bold text-white flex items-center gap-1.5 text-[#E5C78B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5C78B]"></span>
              <span>6. Cloud Deployment & Support</span>
            </div>
            <div className="text-[11px] text-slate-400">CI/CD pipelines, DNS management, server provisioning, monitoring, and ongoing maintenance.</div>
          </div>
        </div>
      </section>

      {/* 3. Career Journey */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2 font-cinzel">
          <TrendingUp className="w-5 h-5 text-emerald-400" />
          <span>Career Journey & Evolution</span>
        </h2>
        <div className="prose prose-invert max-w-none text-sm sm:text-base leading-relaxed space-y-4 text-slate-300">
          <p>{profile.careerJourney}</p>
          <p>
            Having engineered web solutions, ERP systems, and mobile-friendly platforms across
            29+ client deployments, I bring first-hand technical credibility to every system build and tender proposal.
            Instead of treating technical requirements as abstract boilerplate, I understand the
            practical implications of API architectures, data schemas, deployment environments, and
            service level commitments.
          </p>
        </div>
      </section>

      {/* 3. Tender Preparation & Technical Proposal Writing */}
      <section className="space-y-4 glass-panel p-6 sm:p-7 rounded-2xl border border-emerald-500/20">
        <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2 font-cinzel">
          <Layers className="w-5 h-5 text-[#E5C78B]" />
          <span>Tender Preparation & Technical Proposal Writing</span>
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          {profile.tenderExperienceDetails}
        </p>
        <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-400">
          <div className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
            <span>Executive Summary & Strategic Value Proposition formulation.</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
            <span>Work Breakdown Structures (WBS) & Implementation Roadmaps.</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
            <span>Service Level Agreements (SLAs), KPIs, and Escalation Matrices.</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
            <span>Staffing Profiles, RACI Governance, and Team Qualification Packs.</span>
          </div>
        </div>
      </section>

      {/* 4. Bid QA & Compliance Specialization */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2 font-cinzel">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <span>Bid QA & Compliance Specialization</span>
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-300">
          {profile.bidQAExperienceDetails}
        </p>
        <p className="text-sm leading-relaxed text-slate-400">
          My review process acts as an adversarial Red-Team check. I evaluate the submission package
          strictly through the perspective of a demanding evaluation committee, flagging ambiguous
          commitments, formatting non-conformities, and potential non-compliance liabilities before the
          package is sealed.
        </p>
      </section>

      {/* 5. Saudi Government & Private Sector Tenders (Etimad) */}
      <section className="space-y-4 glass-panel p-6 sm:p-8 rounded-2xl border border-[#C6A15B]/30">
        <h2 className="text-lg sm:text-xl font-bold text-[#E5C78B] tracking-tight flex items-center gap-2 font-cinzel">
          <Building2 className="w-5 h-5 text-[#C6A15B]" />
          <span>Saudi Government & Private-Sector Tenders (Etimad)</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {profile.saudiTenderDetails}
        </p>
        <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
          <div className="p-3.5 bg-[#0B1F16]/90 rounded-xl border border-emerald-500/20">
            <div className="font-bold text-[#E5C78B] mb-1">Etimad Platform</div>
            <p className="text-slate-400">
              Electronic submission protocols, inquiry periods, technical envelope rules, and portal
              packaging.
            </p>
          </div>
          <div className="p-3.5 bg-[#0B1F16]/90 rounded-xl border border-emerald-500/20">
            <div className="font-bold text-[#E5C78B] mb-1">Mandatory Gates</div>
            <p className="text-slate-400">
              Zero-tolerance compliance with legal, financial, and qualification threshold
              documentation.
            </p>
          </div>
          <div className="p-3.5 bg-[#0B1F16]/90 rounded-xl border border-emerald-500/20">
            <div className="font-bold text-[#E5C78B] mb-1">Local Content</div>
            <p className="text-slate-400">
              Alignment with Saudi local content regulations, workforce localization, and
              accreditation standards.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Technical Background in IT & Software Development */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2 font-cinzel">
          <Cpu className="w-5 h-5 text-emerald-400" />
          <span>Technical Background in IT & Software Development</span>
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-300">
          {profile.itBackgroundDetails}
        </p>
        <p className="text-sm leading-relaxed text-slate-400">
          Holding a Bachelor’s in Management Information Systems (MIS) from Zoser University alongside
          comprehensive certifications in Back-End Development (Meta), Front-End Engineering (Meta &
          NIIT), and MERN Stack (ITI), I possess technical fluency across:
        </p>
        <div className="flex flex-wrap gap-2 text-xs font-medium">
          {[
            'Python / Django',
            'Node.js / Express',
            'React.js / Next.js',
            'SQL & MySQL',
            'MongoDB',
            'REST APIs & Architecture',
            'Git Version Control',
            'Technical SEO & Core Web Vitals',
            'ERP & CRM Solutions',
          ].map((tech, idx) => (
            <span key={idx} className="px-3 py-1.5 bg-[#0B1F16] text-[#E5C78B] rounded-lg border border-emerald-500/25">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* 7. Business Development Experience */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2 font-cinzel">
          <Briefcase className="w-5 h-5 text-[#C6A15B]" />
          <span>Business Development & Pre-Sales</span>
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-300">
          {profile.businessDevDetails}
        </p>
      </section>

      {/* 8. Professional Approach & 5-Phase Working Methodology */}
      <section className="space-y-6 pt-6 border-t border-emerald-950/80">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight font-cinzel">
            Professional Approach & 5-Phase Working Methodology
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Systematic proposal lifecycle ensuring accuracy, compliance, and on-time portal
            submission.
          </p>
        </div>

        <div className="space-y-3.5">
          {[
            {
              phase: 'Phase 01',
              title: 'Deep Tender Decomposition & Matrix Extraction',
              desc: 'Line-by-line analysis of RFP, TOR, conditions of contract, and BOQ. Establishing the initial requirement traceability log and clarification queries.',
            },
            {
              phase: 'Phase 02',
              title: 'Stakeholder Collaboration & Solution Architecture',
              desc: 'Engaging delivery leads, technical architects, and management to define project methodology, resource allocations, and defensible technical answers.',
            },
            {
              phase: 'Phase 03',
              title: 'Technical Drafting & Methodology Formulation',
              desc: 'Authoring executive summaries, detailed work plans, SLA commitments, project governance, and risk mitigation frameworks aligned with evaluation rubrics.',
            },
            {
              phase: 'Phase 04',
              title: 'Independent Bid QA & Red-Team Compliance Audit',
              desc: 'Rigorous pre-submission audit against mandatory gates. Verification of cross-references, company credentials, team CVs, and elimination of discrepancies.',
            },
            {
              phase: 'Phase 05',
              title: 'Secure Submission Package Assembly & Portal Upload',
              desc: 'Packaging all technical envelopes and supporting exhibits under strict document version control for timely submission via Etimad or target procurement portals.',
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className="p-5 glass-panel rounded-2xl border border-emerald-500/20 flex flex-col sm:flex-row sm:items-start gap-4 hover:border-[#C6A15B]/40 transition-colors"
            >
              <span className="font-mono text-xs font-bold text-[#E5C78B] sm:w-20 shrink-0">
                {step.phase}
              </span>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation CTA */}
      <div className="pt-8 border-t border-emerald-950/80 flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={() => onNavigate('cv')}
          className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-slate-200 bg-[#0B1F16] hover:bg-[#07130D] rounded-xl cursor-pointer border border-emerald-500/30"
        >
          <FileText className="w-4 h-4 text-[#E5C78B]" />
          <span>Review Complete CV & Resume</span>
        </button>

        <button
          onClick={() => onNavigate('contact')}
          className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#F0D9A2] via-[#E5C78B] to-[#C6A15B] hover:brightness-110 rounded-xl cursor-pointer shadow-sm"
        >
          <span>Get in Touch for Tender Inquiries</span>
          <ArrowRight className="w-4 h-4 text-slate-950" />
        </button>
      </div>
    </div>
  );
};
