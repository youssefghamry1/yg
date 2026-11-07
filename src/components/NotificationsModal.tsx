import React from 'react';
import { Bell, X, Award, CheckCircle2, ShieldCheck, ExternalLink, MessageCircle } from 'lucide-react';

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: string) => void;
  isAr?: boolean;
}

export const NotificationsModal: React.FC<NotificationsModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  isAr = true,
}) => {
  if (!isOpen) return null;

  const notifications = [
    {
      id: 1,
      title: isAr ? 'ترسية منافسة حكومية جديدة' : 'New Government Tender Award',
      desc: isAr
        ? 'تمت إضافة دراسة حالة ترسية مشروع بوابة جامعة الملك سعود للعلوم الصحية وأنظمة PMO عبر منصة اعتماد.'
        : 'Case study added for KSAU-HS PMO & digital systems tender award via Etimad platform.',
      tag: isAr ? 'مناقصات' : 'Tenders',
      time: isAr ? 'اليوم' : 'Today',
      actionTab: 'tenders',
      icon: Award,
      color: 'text-[#E5C78B]',
      border: 'border-[#C6A15B]/30',
    },
    {
      id: 2,
      title: isAr ? 'سجل امتثال 100% دون استبعاد' : '100% Technical Compliance Rate',
      desc: isAr
        ? 'توثيق مشاركة أكثر من 400 مناقصة وعرض فني بالسوق السعودي بعلامات تقييم كاملة ومصفوفات امتثال خالية من النواقص.'
        : 'Documented 400+ technical bid reviews across Saudi market with zero non-compliance disqualifications.',
      tag: isAr ? 'جودة العطاءات' : 'Bid QA',
      time: isAr ? 'محدث' : 'Verified',
      actionTab: 'tenders',
      icon: ShieldCheck,
      color: 'text-emerald-400',
      border: 'border-emerald-500/30',
    },
    {
      id: 3,
      title: isAr ? 'اعتمادات مهنية موثقة' : '27 Verified Professional Certifications',
      desc: isAr
        ? 'سجل يضم 27 شهادة تخصصية في الحوسبة السحابية (AWS)، إدارة النظم (Google)، وهندسة البرمجيات (IBM و Meta).'
        : 'Official credentials from AWS, Google, IBM, Meta, HKUST, and ITI backing all technical proposal methodologies.',
      tag: isAr ? 'شهادات' : 'Credentials',
      time: isAr ? 'معتمد' : 'Certified',
      actionTab: 'certifications',
      icon: CheckCircle2,
      color: 'text-cyan-400',
      border: 'border-cyan-500/30',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
      <div className="w-full max-w-md rounded-2xl bg-[#07130D] border border-[#C6A15B]/40 shadow-2xl p-5 text-slate-100 space-y-4">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-emerald-950/80 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#C6A15B]/20 flex items-center justify-center text-[#E5C78B]">
              <Bell className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white font-cinzel">
                {isAr ? 'مركز التحديثات والإشعارات' : 'Platform Updates & Alerts'}
              </h3>
              <p className="text-[10px] text-emerald-400/80 font-mono">
                {isAr ? 'آخر المستجدات والإنجازات الموثقة' : 'Latest verified achievements & releases'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notifications List */}
        <div className="space-y-3 max-h-[60vh] overflow-y-auto pe-1">
          {notifications.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => {
                  onNavigate(item.actionTab);
                  onClose();
                }}
                className={`p-3.5 rounded-xl bg-[#0B1F16]/90 border ${item.border} hover:border-[#E5C78B] transition-all cursor-pointer space-y-1.5 group`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${item.color}`} />
                    <span className="font-bold text-xs text-white group-hover:text-[#E5C78B] transition-colors">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#07130D] text-slate-300 border border-emerald-950">
                    {item.time}
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed ps-6">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="pt-2 flex items-center gap-2">
          <a
            href="https://wa.me/201503292942"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isAr ? 'محادثة مباشرة واتساب' : 'Direct WhatsApp'}</span>
          </a>
          <button
            onClick={() => {
              onNavigate('contact');
              onClose();
            }}
            className="py-2 px-3 rounded-xl bg-[#0B1F16] border border-[#C6A15B]/40 text-[#E5C78B] font-bold text-xs hover:border-[#E5C78B] transition-colors"
          >
            {isAr ? 'طلب استشارة' : 'Book Bid Call'}
          </button>
        </div>
      </div>
    </div>
  );
};
