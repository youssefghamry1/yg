import React, { useState } from 'react';
import { ArrowLeft, Clock, Calendar, Tag, Layers, Briefcase, Share2, Check } from 'lucide-react';
import { Article, Service, Project } from '../types';

interface ArticleDetailViewProps {
  article: Article;
  onBack: () => void;
  onSelectService?: (service: Service) => void;
  onSelectProject?: (project: Project) => void;
  allServices: Service[];
  allProjects: Project[];
}

export const ArticleDetailView: React.FC<ArticleDetailViewProps> = ({
  article,
  onBack,
  onSelectService,
  onSelectProject,
  allServices,
  allProjects,
}) => {
  const [copied, setCopied] = useState(false);

  // Find linked services and projects
  const linkedServices = allServices.filter(
    (s) => article.relatedServices?.includes(s.slug) || article.relatedServices?.includes(s.id)
  );
  const linkedProjects = allProjects.filter(
    (p) => article.relatedProjects?.includes(p.slug) || article.relatedProjects?.includes(p.id)
  );

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <article className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8 animate-fade-in relative z-10 text-slate-200">
      {/* Background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-emerald-300/60 mb-8 flex-wrap">
        <button
          onClick={onBack}
          className="hover:text-[#E5C78B] transition-colors flex items-center gap-1.5 cursor-pointer font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Knowledge Hub</span>
        </button>
        <span className="text-emerald-500/30">/</span>
        <span className="text-emerald-300/80">{article.category}</span>
        <span className="text-emerald-500/30">/</span>
        <span className="text-white font-semibold truncate max-w-xs">{article.title}</span>
      </nav>

      {/* Article Header */}
      <header className="glass-panel p-8 sm:p-10 rounded-3xl border border-emerald-500/30 mb-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6A15B]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center gap-2 text-xs text-emerald-300/70 mb-4 flex-wrap">
          <span className="font-bold text-[#E5C78B] uppercase tracking-wider text-[11px] px-2.5 py-1 rounded bg-[#C6A15B]/15 border border-[#C6A15B]/30">
            {article.category}
          </span>
          <span className="text-emerald-500/40" aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span>{article.publishedDate}</span>
          </span>
          <span className="text-emerald-500/40" aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span>{article.readTime}</span>
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5 font-serif">
          {article.title}
        </h1>

        <p className="text-base text-emerald-100/80 leading-relaxed font-normal">
          {article.shortDescription}
        </p>

        {/* Author Byline */}
        <div className="mt-8 pt-6 border-t border-emerald-950/80 flex items-center justify-between text-xs text-emerald-300/70">
          <div>
            <span className="font-bold text-white">Youssef Ghamry</span>
            <span className="text-emerald-300/60"> — Tender & Proposal Specialist</span>
          </div>
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-emerald-500/30 hover:border-[#C6A15B]/60 text-emerald-200 hover:text-[#E5C78B] transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Article Body */}
      <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-emerald-500/20 text-emerald-100/90 leading-relaxed space-y-6 text-sm sm:text-base">
        {article.content.split('\n\n').map((paragraph, idx) => {
          const text = paragraph.trim();
          if (!text) return null;

          if (text.startsWith('### ')) {
            return (
              <h3 key={idx} className="text-lg sm:text-xl font-bold text-[#E5C78B] pt-4 pb-1 font-serif">
                {text.replace('### ', '')}
              </h3>
            );
          }
          if (text.startsWith('## ')) {
            return (
              <h2 key={idx} className="text-xl sm:text-2xl font-bold text-white pt-6 pb-2 border-b border-emerald-950/80 font-serif">
                {text.replace('## ', '')}
              </h2>
            );
          }
          if (text.startsWith('- ') || text.startsWith('1. ') || text.startsWith('2. ') || text.startsWith('3. ') || text.startsWith('4. ')) {
            const lines = text.split('\n');
            return (
              <ul key={idx} className="space-y-2.5 pl-4 list-disc marker:text-[#C6A15B]">
                {lines.map((line, lIdx) => (
                  <li key={lIdx} className="text-emerald-100/90 leading-relaxed">
                    <span dangerouslySetInnerHTML={{ __html: line.replace(/^[-*]|\d+\./, '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>') }} />
                  </li>
                ))}
              </ul>
            );
          }

          return (
            <p
              key={idx}
              className="text-emerald-100/80 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-white">$1</strong>'),
              }}
            />
          );
        })}
      </div>

      {/* Keywords / Tags */}
      {article.keywords && article.keywords.length > 0 && (
        <div className="mt-8 p-6 glass-panel rounded-2xl border border-emerald-500/20">
          <div className="flex items-center gap-3 text-xs flex-wrap">
            <Tag className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span className="font-semibold text-[#E5C78B]">Topics & Keywords:</span>
            <div className="flex flex-wrap gap-2">
              {article.keywords.map((kw, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-full bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 text-[11px]"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Linked Related Services & Projects */}
      {(linkedServices.length > 0 || linkedProjects.length > 0) && (
        <div className="mt-10 pt-8 border-t border-emerald-950/80 space-y-6">
          <h2 className="text-lg font-bold text-white font-serif">Related Services & Case Studies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {linkedServices.map((srv) => (
              <div
                key={srv.id}
                onClick={() => onSelectService && onSelectService(srv)}
                className="p-5 rounded-2xl glass-panel border border-emerald-500/20 hover:border-[#C6A15B]/50 cursor-pointer transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-1.5 text-xs text-[#E5C78B] font-semibold mb-2">
                  <Layers className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>Service</span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5 font-serif">{srv.title}</h3>
                <p className="text-xs text-emerald-200/70 line-clamp-2">{srv.shortDescription}</p>
              </div>
            ))}
            {linkedProjects.map((prj) => (
              <div
                key={prj.id}
                onClick={() => onSelectProject && onSelectProject(prj)}
                className="p-5 rounded-2xl glass-panel border border-emerald-500/20 hover:border-[#C6A15B]/50 cursor-pointer transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold mb-2">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Project Case Study</span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5 font-serif">{prj.title}</h3>
                <p className="text-xs text-emerald-200/70 line-clamp-2">{prj.shortDescription}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Back Button */}
      <div className="mt-10 pt-6 border-t border-emerald-950/80">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-300 hover:text-[#E5C78B] cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles & Knowledge Hub</span>
        </button>
      </div>
    </article>
  );
};
