import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  ShieldCheck,
  Building2,
  Clock,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { useData } from '../context/DataContext';

interface ContactPageProps {
  initialInquiryType?: string;
  initialSubject?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialInquiryType,
  initialSubject,
}) => {
  const { profile, submitContact } = useData();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState(initialInquiryType || 'Tender & Proposal Services');
  const [subject, setSubject] = useState(initialSubject || '');
  const [message, setMessage] = useState('');
  // Honeypot field for spam protection
  const [companyWebsite, setCompanyWebsite] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialInquiryType) setInquiryType(initialInquiryType);
    if (initialSubject) setSubject(initialSubject);
  }, [initialInquiryType, initialSubject]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Spam honeypot check: real users will leave companyWebsite empty
    if (companyWebsite.trim() !== '') {
      console.warn('Bot detected via honeypot.');
      setIsSubmitted(true);
      return;
    }

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    const res = submitContact({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || undefined,
      inquiryType,
      subject: subject.trim() || `${inquiryType} Inquiry`,
      message: message.trim(),
    });

    if (res.success) {
      setIsSubmitted(true);
      setFeedbackMessage(res.message);
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12 animate-fade-in relative z-10 text-slate-200">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Page Header */}
      <div className="border-b border-emerald-950/60 pb-8">
        <div className="text-xs font-semibold uppercase tracking-widest text-[#E5C78B] mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]"></span>
          <span>Business Inquiries & Engagements</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-serif">
          Contact & <span className="gold-gradient-text">Tender Inquiries</span>
        </h1>
        <p className="text-sm text-emerald-200/70 mt-3 max-w-2xl leading-relaxed">
          Reach out directly to discuss tender document analysis, technical proposal development,
          Bid QA compliance reviews, or full-stack software initiatives.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Contact Cards & Direct Channels */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Direct Info Box */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border border-emerald-500/30 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#C6A15B]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white tracking-tight font-serif">
                Direct Channels
              </h2>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[11px] font-semibold text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Active for Bidding</span>
              </span>
            </div>

            <div className="space-y-4 text-xs">
              {/* Email */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#050806]/60 border border-emerald-500/20">
                <div className="w-9 h-9 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center shrink-0 text-[#E5C78B]">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-emerald-400/70 text-[11px] font-medium uppercase tracking-wider">Direct Email</div>
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-semibold text-white hover:text-[#E5C78B] transition-colors text-xs break-all"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#050806]/60 border border-emerald-500/20">
                <div className="w-9 h-9 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center shrink-0 text-[#E5C78B]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-emerald-400/70 text-[11px] font-medium uppercase tracking-wider">Phone & WhatsApp</div>
                  <a
                    href={`tel:${profile.phone}`}
                    className="font-semibold text-white hover:text-[#E5C78B] transition-colors text-xs"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#050806]/60 border border-emerald-500/20">
                <div className="w-9 h-9 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center shrink-0 text-[#E5C78B]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-emerald-400/70 text-[11px] font-medium uppercase tracking-wider">Base Location</div>
                  <div className="font-semibold text-white text-xs">{profile.location}</div>
                  <div className="text-emerald-300/60 text-[11px] mt-0.5">
                    Available for Remote & Regional Engagements (KSA / Gulf)
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action Button */}
            <div className="pt-2">
              <a
                href={profile.whatsappUrl || `https://wa.me/${profile.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold text-xs transition-all shadow-lg shadow-emerald-950/60 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Operational Protocol & Ethics Box */}
          <div className="p-6 glass-panel rounded-2xl border border-emerald-500/20 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Confidentiality & Non-Disclosure</span>
            </h3>
            <p className="text-xs text-emerald-200/70 leading-relaxed">
              All proprietary tender documentation, pricing schedules, and client specifications
              shared during discovery or bidding are handled with strict non-disclosure compliance.
            </p>
          </div>

          <div className="p-6 glass-panel rounded-2xl border border-emerald-500/20 space-y-2 text-xs text-emerald-200/70">
            <div className="font-bold text-white flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Standard Response Timeline</span>
            </div>
            <p className="leading-relaxed">
              Inquiries regarding upcoming Saudi government or commercial tender deadlines are
              reviewed promptly within 12 to 24 hours.
            </p>
          </div>
        </div>

        {/* Right Column: Working Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel rounded-2xl border border-emerald-500/30 p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <h2 className="text-xl font-bold text-white tracking-tight mb-1 font-serif">
              Send a Business Inquiry
            </h2>
            <p className="text-xs text-emerald-200/60 mb-6">
              Fill in the details below to receive a consultation on your RFP or project needs.
            </p>

            {/* Success state banner */}
            {isSubmitted ? (
              <div className="p-8 bg-emerald-950/40 rounded-2xl border border-emerald-500/40 text-center space-y-4 animate-fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-lg font-bold text-white font-serif">Inquiry Received</h3>
                <p className="text-xs text-emerald-200/80 leading-relaxed max-w-md mx-auto">
                  {feedbackMessage ||
                    'Thank you for reaching out. Your proposal and project inquiry has been recorded and will be reviewed shortly.'}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2.5 text-xs font-semibold text-black bg-gradient-to-r from-[#E5C78B] to-[#C6A15B] rounded-lg hover:brightness-110 transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                {errorMessage && (
                  <div className="p-3 bg-rose-950/60 border border-rose-500/40 rounded-lg text-xs text-rose-200 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Honeypot field (hidden from legitimate humans) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="companyWebsite">Leave empty</label>
                  <input
                    id="companyWebsite"
                    type="text"
                    tabIndex={-1}
                    value={companyWebsite}
                    onChange={(e) => setCompanyWebsite(e.target.value)}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium text-emerald-200/80 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Abdullah Al-Otaibi"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#050806]/80 border border-emerald-500/30 rounded-xl focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] focus:outline-none text-white placeholder-emerald-400/30"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium text-emerald-200/80 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#050806]/80 border border-emerald-500/30 rounded-xl focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] focus:outline-none text-white placeholder-emerald-400/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-medium text-emerald-200/80 mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+966... or +20..."
                      className="w-full px-3.5 py-2.5 text-xs bg-[#050806]/80 border border-emerald-500/30 rounded-xl focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] focus:outline-none text-white placeholder-emerald-400/30"
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label className="block text-xs font-medium text-emerald-200/80 mb-1.5">
                      Inquiry Category *
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#050806] border border-emerald-500/30 rounded-xl focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] focus:outline-none text-white cursor-pointer"
                    >
                      <option value="Tender & Proposal Services">Tender & Proposal Services</option>
                      <option value="Bid QA & Compliance">Bid QA & Compliance</option>
                      <option value="IT Consulting">IT Consulting</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Software Solutions">Software Solutions</option>
                      <option value="Business Development">Business Development</option>
                      <option value="Other Business Inquiries">Other Business Inquiries</option>
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-medium text-emerald-200/80 mb-1.5">
                    Subject / Project Reference
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Technical Proposal Drafting for Etimad IT RFP"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#050806]/80 border border-emerald-500/30 rounded-xl focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] focus:outline-none text-white placeholder-emerald-400/30"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-emerald-200/80 mb-1.5">
                    Message / Project Details *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Please summarize your tender requirements, project scope, and key deadlines..."
                    className="w-full px-3.5 py-2.5 text-xs bg-[#050806]/80 border border-emerald-500/30 rounded-xl focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] focus:outline-none text-white placeholder-emerald-400/30"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-5 text-xs font-semibold text-black bg-gradient-to-r from-[#E5C78B] via-[#C6A15B] to-[#F0D9A2] hover:brightness-110 rounded-xl transition-all cursor-pointer shadow-lg shadow-[#C6A15B]/20"
                  >
                    <Send className="w-4 h-4 text-black stroke-[2.5]" />
                    <span>Submit Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
