import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Settings, Sparkles } from 'lucide-react';
import { useData } from '../context/DataContext';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab, onOpenAdmin }) => {
  const { profile } = useData();

  return (
    <footer className="bg-[#050806] text-slate-400 border-t border-emerald-500/20 text-sm relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-emerald-500/5 blur-3xl pointer-events-none"></div>

      {/* Upper Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Identity & Positioning */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 rounded-xl bg-[#0B1F16] border border-[#C6A15B]/40 flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                <img
                  src="/assets/aistudio/image_ef5d64bf.png"
                  alt="YG 3D Emblem"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <div>
                <h3 className="font-cinzel font-bold text-white text-lg tracking-wider">
                  {profile.name}
                </h3>
                <p className="text-xs text-[#E5C78B]">
                  Tender Proposal Writer · Bid QA & Compliance Specialist
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Specialized in government and private technology tenders across the Saudi market.
              Translating complex software architectures and procurement mandates into compliant,
              high-scoring technical proposals.
            </p>

            <div className="pt-2 flex flex-wrap gap-y-2.5 gap-x-5 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <a href={`tel:${profile.phone}`} className="hover:text-[#F0D9A2] transition-colors">
                  {profile.phone}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <a href={`mailto:${profile.email}`} className="hover:text-[#F0D9A2] transition-colors">
                  {profile.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-[#E5C78B] uppercase tracking-wider mb-4 flex items-center gap-1.5 font-cinzel">
              <Sparkles className="w-3 h-3 text-[#C6A15B]" />
              <span>Navigation</span>
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => {
                    setCurrentTab('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-emerald-300 transition-colors cursor-pointer text-slate-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentTab('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-emerald-300 transition-colors cursor-pointer text-slate-300"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentTab('cv');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-emerald-300 transition-colors cursor-pointer text-slate-300"
                >
                  Professional CV & Resume
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentTab('portfolio');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-emerald-300 transition-colors cursor-pointer text-slate-300"
                >
                  Portfolio (29+ Projects)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentTab('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-emerald-300 transition-colors cursor-pointer text-slate-300"
                >
                  Professional Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentTab('certifications');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-emerald-300 transition-colors cursor-pointer text-[#E5C78B] font-semibold"
                >
                  Certifications & Credentials (27+)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentTab('articles');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-emerald-300 transition-colors cursor-pointer text-slate-300"
                >
                  Knowledge Hub & Articles
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentTab('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-emerald-300 transition-colors cursor-pointer text-slate-300"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Key Domains */}
          <div>
            <h4 className="text-xs font-bold text-[#E5C78B] uppercase tracking-wider mb-4 font-cinzel">
              Specialized Domains
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="hover:text-emerald-300 transition-colors">Tender & RFP Analysis</li>
              <li className="hover:text-emerald-300 transition-colors">Technical Proposal Writing</li>
              <li className="hover:text-emerald-300 transition-colors">Compliance Matrix Preparation</li>
              <li className="hover:text-emerald-300 transition-colors">Bid QA & Red-Team Audits</li>
              <li className="hover:text-emerald-300 transition-colors">Saudi Government Tenders (Etimad)</li>
              <li className="hover:text-emerald-300 transition-colors">Full-Stack Web Engineering</li>
              <li className="hover:text-emerald-300 transition-colors">Technical SEO & Web Vitals</li>
              <li className="hover:text-emerald-300 transition-colors">IT Pre-Sales & Business Dev</li>
            </ul>
          </div>

          {/* Col 5: Direct Actions & CMS */}
          <div>
            <h4 className="text-xs font-bold text-[#E5C78B] uppercase tracking-wider mb-4 font-cinzel">
              Client & CMS Tools
            </h4>
            <div className="space-y-3">
              <button
                onClick={() => {
                  setCurrentTab('cv');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-semibold text-slate-200 bg-[#0B1F16]/80 hover:bg-[#0B1F16] rounded-lg border border-emerald-500/25 transition-all cursor-pointer hover:border-emerald-400/50"
              >
                <span>Download / Print CV</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E5C78B]" />
              </button>

              <button
                onClick={() => {
                  setCurrentTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-[#E5C78B] to-[#C6A15B] hover:brightness-110 rounded-lg transition-all cursor-pointer shadow-sm"
              >
                <span>Submit Tender Inquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-950" />
              </button>

              <button
                onClick={onOpenAdmin}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-semibold text-[#F0D9A2] bg-[#07130D] hover:bg-[#0B1F16] rounded-lg border border-[#C6A15B]/30 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-1.5">
                  <Settings className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>Admin Content Studio</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C6A15B]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-emerald-950/60 py-6 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="text-[#E5C78B] font-medium">Dark Luxury Experience</span>
            <span>·</span>
            <span>Etimad & KSA Public Procurement</span>
            <span>·</span>
            <span>IT Architecture & Bid QA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
