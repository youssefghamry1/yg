import React from 'react';
import {
  X,
  CheckCircle2,
  Target,
  Cpu,
  ExternalLink,
  Globe,
  Sparkles,
  MapPin,
  Send,
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire?: (projectTitle: string) => void;
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

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  if (!project) return null;

  const flagEmoji = getCountryFlagEmoji(project.country);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div
        className="bg-white rounded-xl shadow-2xl max-w-3xl w-full overflow-hidden border border-slate-200 relative max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-200 flex items-start justify-between bg-slate-50/70">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider">
              <span>{project.category}</span>
              {project.countryName && (
                <>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-700 flex items-center gap-1 font-medium">
                    <span>{flagEmoji}</span>
                    <span>{project.countryName}</span>
                  </span>
                </>
              )}
            </div>

            <div className="flex items-center gap-3 pt-1">
              {project.icon && (
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-xl shadow-xs shrink-0">
                  {project.icon}
                </div>
              )}
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  {project.title}
                </h2>
                {project.titleAr && project.titleAr !== project.title && (
                  <p className="text-sm font-semibold text-slate-600 font-sans" dir="rtl">
                    {project.titleAr}
                  </p>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-md transition-colors cursor-pointer shrink-0"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1 text-sm text-slate-600">
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 py-3 px-4 bg-slate-50 rounded-lg border border-slate-200 text-xs">
            <div>
              <span className="text-slate-500 font-medium">Role: </span>
              <span className="text-slate-900 font-semibold">{project.role}</span>
            </div>
            {project.domain && (
              <div className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-slate-500 font-medium">Domain: </span>
                <span className="text-slate-900 font-mono font-semibold">{project.domain}</span>
              </div>
            )}
            {project.countryName && (
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-slate-500 font-medium">Country: </span>
                <span className="text-slate-900 font-semibold">{project.countryName}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">
              Case Study & Scope of Work
            </h3>
            <p className="text-slate-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
              {project.fullDescription || project.shortDescription}
            </p>
          </div>

          {/* Highlights (if any from web portfolio) */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Key Execution Highlights & Solutions</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.highlights.map((h, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/60 space-y-1"
                  >
                    <div className="text-xs font-bold text-slate-900">{h.title}</div>
                    <p className="text-xs text-slate-600 leading-relaxed">{h.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Objectives (if available) */}
          {project.objectives && project.objectives.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Target className="w-4 h-4 text-slate-700" />
                <span>Project Objectives & Deliverables</span>
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-700 pl-4 list-disc marker:text-amber-500">
                {project.objectives.map((obj, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {obj}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies & Platforms */}
          {project.technologies && project.technologies.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-slate-700" />
                <span>Technologies & Platforms Utilized</span>
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-slate-700 font-medium py-1 px-2.5 bg-slate-100 rounded border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Results when verified */}
          {project.results && (
            <div className="p-4 bg-emerald-50/70 rounded-lg border border-emerald-200/80">
              <h3 className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Verified Deliverables & Performance Outcomes</span>
              </h3>
              <p className="text-xs text-emerald-950 font-medium leading-relaxed">
                {project.results}
              </p>
            </div>
          )}

          {/* Live Link Button */}
          {(project.url || project.domain) && (
            <div className="pt-2">
              <a
                href={project.url || `https://${project.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-xs rounded-md shadow-xs transition-colors"
              >
                <Globe className="w-4 h-4 text-slate-900" />
                <span>Visit Live Website ({project.domain || project.url?.replace(/^https?:\/\//, '')})</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-900" />
              </a>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
          >
            Close
          </button>
          {onInquire && (
            <button
              onClick={() => {
                onInquire(project.title);
                onClose();
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors cursor-pointer shadow-sm"
            >
              <Send className="w-3.5 h-3.5 text-amber-400" />
              <span>Inquire About Similar Project</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
