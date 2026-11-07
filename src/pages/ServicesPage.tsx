import React, { useState } from 'react';
import {
  Layers,
  ArrowRight,
  CheckCircle2,
  ListChecks,
  Plus,
  Send,
  Sparkles,
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { Service } from '../types';

interface ServicesPageProps {
  onSelectService: (service: Service) => void;
  onInquire: (serviceTitle: string) => void;
  onOpenAdmin: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectService,
  onInquire,
  onOpenAdmin,
}) => {
  const { services } = useData();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services (كافة الخدمات)' },
    { id: 'tender-proposal', label: 'Tender & Proposal Services' },
    { id: 'it-software', label: 'IT & Software Solutions' },
    { id: 'biz-dev', label: 'Business Development & Consulting' },
    { id: 'additional-custom', label: 'Exhibitions & Custom Solutions' },
  ];

  const filteredServices = services.filter((s) => {
    if (s.status !== 'published') return false;
    if (selectedCategory === 'all') return true;
    return s.categoryId === selectedCategory;
  });

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12 animate-fade-in text-slate-100">
      {/* Page Header */}
      <div className="border-b border-emerald-950/80 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="text-xs font-semibold text-[#E5C78B] uppercase tracking-wider mb-1 font-cinzel">
            Specialized Capabilities & Engagement Models
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-editorial tracking-tight">
            Professional Services
          </h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl leading-relaxed font-normal">
            Delivering high-scoring technical proposals, Bid QA audits, full-stack digital platforms,
            and IT pre-sales consulting for organizations competing in Saudi Arabia and the Gulf.
          </p>
        </div>

        <button
          onClick={onOpenAdmin}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#F0D9A2] via-[#E5C78B] to-[#C6A15B] hover:brightness-110 rounded-xl transition-all cursor-pointer self-start md:self-auto shrink-0 shadow-[0_0_15px_rgba(229,199,139,0.3)]"
        >
          <Plus className="w-3.5 h-3.5 text-slate-950" />
          <span>Add Custom Service</span>
        </button>
      </div>

      {/* Category Segmented Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-[#0B1F16] to-[#07130D] text-[#F0D9A2] border border-[#C6A15B] shadow-[0_0_15px_rgba(198,161,91,0.25)]'
                  : 'bg-[#07130D]/70 border border-emerald-500/20 text-slate-300 hover:text-white hover:border-emerald-500/40'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            onClick={() => onSelectService(service)}
            className="p-6 glass-panel glass-panel-hover rounded-2xl flex flex-col justify-between group cursor-pointer border border-emerald-500/20 hover:border-[#C6A15B]/50"
          >
            <div className="space-y-3.5">
              <div className="text-xs font-semibold text-[#E5C78B] uppercase tracking-wider">
                {service.categoryTitle}
              </div>

              <h3 className="text-lg font-bold text-white leading-snug group-hover:text-[#F0D9A2] transition-colors">
                {service.title}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                {service.shortDescription}
              </p>

              {/* Deliverables snippet */}
              {service.deliverables && service.deliverables.length > 0 && (
                <div className="pt-2 border-t border-emerald-950/70 space-y-1.5">
                  <div className="text-[10px] font-bold text-[#E5C78B] uppercase tracking-wider">
                    Core Deliverables:
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1">
                    {service.deliverables.slice(0, 3).map((del, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 truncate">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Card Actions */}
            <div className="pt-6 border-t border-emerald-950/70 flex items-center justify-between text-xs mt-4">
              <span className="font-semibold text-slate-400">Detailed Scope & Methodology</span>
              <span className="text-[#E5C78B] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>View Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Engagement Callout Banner */}
      <div className="p-8 glass-panel rounded-3xl border border-[#C6A15B]/35 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 max-w-xl">
          <div className="text-xs font-semibold text-[#E5C78B] uppercase tracking-wider font-cinzel flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Dedicated RFP Advisory</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white font-editorial">
            Have a specialized tender or urgent deadline?
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            I support time-sensitive RFPs, red-team audits, and bespoke technical methodologies.
            Reach out directly with your RFP documentation for an initial decomposition.
          </p>
        </div>

        <button
          onClick={() => onInquire('General Tender / Technical Service Inquiry')}
          className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#F0D9A2] via-[#E5C78B] to-[#C6A15B] hover:brightness-110 rounded-xl transition-all cursor-pointer shrink-0 shadow-[0_0_15px_rgba(229,199,139,0.3)]"
        >
          <Send className="w-3.5 h-3.5 inline mr-1.5" />
          <span>Inquire About A Service</span>
        </button>
      </div>
    </div>
  );
};
