import React, { useState } from 'react';
import {
  Search,
  ExternalLink,
  ShieldCheck,
  Building2,
} from 'lucide-react';

interface TendersPageProps {
  onNavigate: (tab: string) => void;
  isAr?: boolean;
}

export const TendersPage: React.FC<TendersPageProps> = ({ onNavigate, isAr = true }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const tendersData = [
    {
      id: 'ksau-hs-p2c',
      refNumber: '#KSAU-PMO-2025',
      title: 'بوابة جامعة الملك سعود للعلوم الصحية وأنظمة PMO واستراتيجية P2C',
      titleEn: 'KSAU-HS P2C Strategy & PMO Enterprise System Support',
      entity: 'جامعة الملك سعود للعلوم الصحية (KSAU-HS)',
      category: 'أنظمة إدارة المشاريع والمحافظ الرقمية',
      scope: 'إعداد العرض الفني، مصفوفة الامتثال، اتفاقيات مستوى الخدمة SLA، وخطة الترحيل التقني.',
      slug: 'case-ksau-hs-p2c-strategy-pmo-system-support',
    },
    {
      id: 'hrsd-employee-app',
      refNumber: '#HRSD-AI-2025',
      title: 'تطبيق موظف الحكومة الموحد وتقنيات الذكاء الاصطناعي',
      titleEn: 'HRSD Unified Government Employee App & AI Operations',
      entity: 'وزارة الموارد البشرية والتنمية الاجتماعية',
      category: 'تطبيقات الجوال والذكاء الاصطناعي',
      scope: 'صياغة المنهجية التقنية، معمارية الخدمات المصغرة، والامتثال للضوابط الأمنية الوطنية.',
      slug: 'case-hrsd-unified-government-employee-app-and-ai',
    },
    {
      id: 'sdaia-identity',
      refNumber: '#SDAIA-IAM-01',
      title: 'منظومة الهوية الوطنية والتحقق الرقمي - المرحلة الأولى',
      titleEn: 'SDAIA Identity & Authentication Phase One',
      entity: 'الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا)',
      category: 'الأمن السيبراني والهوية الرقمية',
      scope: 'تفكيك كراسة الشروط RFP، مصفوفة امتثال 100%، والتدقيق الفني Red Team.',
      slug: 'case-sdaia-identity-and-authentication-phase-one',
    },
    {
      id: 'ministry-of-energy',
      refNumber: '#MOE-EPM-2025',
      title: 'تطوير وترقية نظام إدارة المشاريع والمحافظ المؤسسية EPM',
      titleEn: 'Ministry of Energy EPM System Upgrade',
      entity: 'وزارة الطاقة',
      category: 'الأنظمة المؤسسية ERP / EPM',
      scope: 'هندسة خطة الانتقال، جداول BOQ الفنية، وتوثيق الكوادر الاستشارية المؤهلة.',
      slug: 'case-ministry-of-energy-epm-system-upgrade',
    },
    {
      id: 'ncc-saudi-business',
      refNumber: '#NCC-SBC-2026',
      title: 'منصات المركز السعودي للأعمال 2026',
      titleEn: 'Saudi Business Center Platforms 2026 (NCC)',
      entity: 'المركز الوطني للتنافسية (NCC)',
      category: 'البوابات الحكومية والتحول الرقمي',
      scope: 'صياغة عرض التكامل الرقمي مع منصات النفاذ الوطني والتجارة الإلكترونية.',
      slug: 'case-ncc-saudi-business-center-platforms-2026',
    },
    {
      id: 'redf-portals',
      refNumber: '#REDF-PORT-24',
      title: 'تطوير وصيانة بوابات وتطبيقات صندوق التنمية العقارية',
      titleEn: 'REDF Portals & Mobile Apps Development & Maintenance',
      entity: 'صندوق التنمية العقارية (REDF)',
      category: 'التطبيقات السحابية وبوابات التمويل',
      scope: 'مصفوفة الامتثال للضوابط التمويلية، حوكمة SLA، واستراتيجية الاختبارات الآلية.',
      slug: 'case-redf-portals-and-mobile-apps-development-maintenance',
    },
    {
      id: 'ncpd-alibaba-cloud',
      refNumber: '#NCPD-DATA-24',
      title: 'منصة إدارة البيانات السحابية بالتعاون مع علي بابا كلاود',
      titleEn: 'NCPD Data Management & Alibaba Cloud Platform',
      entity: 'هيئة رعاية الأشخاص ذوي الإعاقة (NCPD)',
      category: 'الحوسبة السحابية وهندسة البيانات',
      scope: 'معمارية النظم السحابية، معايير الخصوصية الوطنية، ومصفوفة المخاطر.',
      slug: 'case-ncpd-data-management-and-alibaba-cloud-platform',
    },
    {
      id: 'saso-taakad',
      refNumber: '#SASO-MOB-2025',
      title: 'تشغيل وصيانة تطبيق تأكد للهواتف الذكية',
      titleEn: 'SASO Taakad Mobile App Operations & Maintenance',
      entity: 'الهيئة السعودية للمواصفات والمقاييس والجودة (SASO)',
      category: 'تشغيل وصيانة التطبيقات الذكية',
      scope: 'جدول الـ SLA الزمني، الدعم الفني المباشر، وتحديث كود التطبيق لنظامي iOS وAndroid.',
      slug: 'case-saso-taakad-mobile-app-operations-and-maintenance',
    },
    {
      id: 'king-khalid-university',
      refNumber: '#KKU-ITSM-2025',
      title: 'نظام إدارة خدمات تقنية المعلومات ITSM ITIL4',
      titleEn: 'King Khalid University ITSM ITIL4 System',
      entity: 'جامعة الملك خالد',
      category: 'حوكمة تقنية المعلومات ITIL4',
      scope: 'تطبيق إطار ITIL4، مصفوفة المسؤوليات RACI، وتأهيل فريق العمل الجامعي.',
      slug: 'case-king-khalid-university-itsm-itil4-system',
    },
    {
      id: 'sfes-digital-platform',
      refNumber: '#SAR-LIC-2025',
      title: 'المنصة الرقمية المتكاملة والتراخيص غير المحدودة',
      titleEn: 'SFES Integrated Digital Platform & Unlimited Licenses',
      entity: 'المؤسسة العامة للخطوط الحديدية (SAR / SFES)',
      category: 'تراخيص البرمجيات والمنصات المؤسسية',
      scope: 'تحليل شروط التراخيص، مصفوفة الامتثال الفني، وتوريد شهادات الدعم المعتمدة.',
      slug: 'case-sfes-integrated-digital-platform-and-unlimited-licenses',
    },
    {
      id: 'university-of-bisha',
      refNumber: '#UB-SOC-2025',
      title: 'إدارة مركز العمليات الأمنية المدارة SOC وخدمات MDR',
      titleEn: 'University of Bisha Managed SOC & MDR',
      entity: 'جامعة بيشة',
      category: 'الأمن السيبراني والـ SOC',
      scope: 'هندسة خطة الاستجابة للحوادث السيبرانية، ومصفوفة أدوات الرصد والتحليل.',
      slug: 'case-university-of-bisha-managed-soc-and-mdr',
    },
    {
      id: 'misa-ibm-filenet',
      refNumber: '#MISA-ECM-24',
      title: 'دعم وضوابط وقائية لمنظومة IBM FileNet',
      titleEn: 'MISA IBM FileNet Preventative Controls & Support',
      entity: 'وزارة الاستثمار (MISA)',
      category: 'إدارة المحتوى المؤسسي ECM',
      scope: 'خطة الدعم الوقائي، اتفاقيات SLA، والصيانة الدورية لبيئات الإنتاج والاختبار.',
      slug: 'case-misa-ibm-filenet-preventative-controls-and-support',
    },
  ];

  const categories = [
    'all',
    'أنظمة إدارة المشاريع والمحافظ الرقمية',
    'تطبيقات الجوال والذكاء الاصطناعي',
    'الأمن السيبراني والهوية الرقمية',
    'الأنظمة المؤسسية ERP / EPM',
    'البوابات الحكومية والتحول الرقمي',
    'التطبيقات السحابية وبوابات التمويل',
  ];

  const filteredTenders = tendersData.filter((tender) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      tender.title.toLowerCase().includes(query) ||
      tender.titleEn.toLowerCase().includes(query) ||
      tender.entity.toLowerCase().includes(query) ||
      tender.category.toLowerCase().includes(query);

    if (selectedCategory === 'all') return matchesSearch;
    return matchesSearch && tender.category === selectedCategory;
  });

  return (
    <div className="w-full max-w-[1920px] mx-auto py-10 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 space-y-12 animate-fade-in text-slate-100">
      {/* Hero Header */}
      <div className="border-b border-emerald-950/80 pb-8 space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C6A15B]/20 text-[#E5C78B] border border-[#C6A15B]/40">
            مناقصات الحكومة السعودية · منصة اعتماد
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            ضبط الجودة والامتثال الفني (Bid QA)
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          المناقصات
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-4xl leading-relaxed">
          سجل مهني متخصص يوثق الخبرة العملية في دراسة كراسات الشروط، تحليل المتطلبات، صياغة المنهجيات الفنية، ومصفوفات الامتثال لمنافسات الجهات الحكومية والسيادية بالسوق السعودي عبر منصة اعتماد.
        </p>

        {/* التوضيح الرسمي الاحترافي */}
        <div className="p-5 rounded-2xl bg-[#07130D]/90 border border-[#C6A15B]/40 shadow-lg text-xs sm:text-sm text-slate-300 leading-relaxed space-y-1.5">
          <div className="flex items-center gap-2 font-bold text-[#E5C78B]">
            <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
            <span>نطاق الخبرة والمشاركات</span>
          </div>
          <p>
            المناقصات المعروضة هنا تمثل جزءًا محدودًا فقط من نطاق الخبرة والمشاركات التي تمتد إلى أكثر من 400 مناقصة ومشروع تقني. وقد تم اختيار هذه النماذج لعرض أمثلة من المشاركات والخبرات المرتبطة بالجهات والوزارات الحكومية، ولا تمثل القائمة الكاملة لجميع الأعمال التي تمت المشاركة فيها.
          </p>
        </div>

        {/* Updated Authoritative Metrics Banner - Exact User Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-[#07130D]/90 border border-[#C6A15B]/40 shadow-lg space-y-2">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#E5C78B] font-mono">400+</div>
            <div className="text-sm font-bold text-white">مناقصة تم إعدادها وكتابتها وتنسيقها ومراجعتها</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              تمت كتابة وإعداد وتنسيق ومراجعة أكثر من 400 مناقصة، مع التركيز على إعداد العروض الفنية وتحليل المتطلبات ومراجعة مستندات التقديم وضمان اكتمالها.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#07130D]/90 border border-emerald-500/40 shadow-lg space-y-2">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">50+</div>
            <div className="text-sm font-bold text-white">مشروعًا تمت ترسيته من جهات حكومية</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              خبرة مرتبطة بمشاريع تمت ترسيتها من جهات حكومية، ضمن نطاق المشاركات والخبرات في إعداد العروض والمناقصات.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#07130D]/90 border border-[#C6A15B]/40 shadow-lg space-y-2">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#E5C78B] font-mono">60+</div>
            <div className="text-sm font-bold text-white">جهة حكومية وسيادية</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              خبرة في التعامل مع متطلبات ومنافسات جهات حكومية ووزارات وهيئات مختلفة (ما يقرب من 60 جهة حكومية وسيادية).
            </p>
          </div>
        </div>
      </div>

      {/* Search and Category Filters Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:max-w-md">
          <Search className="w-4 h-4 text-emerald-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث عن منافسة، جهة حكومية، أو نطاق..."
            className="w-full pr-10 pl-4 py-3 bg-[#07130D]/90 border border-emerald-500/25 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#E5C78B]"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-[#F0D9A2] via-[#E5C78B] to-[#C6A15B] text-slate-950 shadow-md'
                : 'bg-[#0B1F16] border border-emerald-500/25 text-slate-300 hover:text-white'
            }`}
          >
            جميع المناقصات
          </button>
          {categories
            .filter((c) => c !== 'all')
            .map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 rounded-xl text-xs font-medium transition-all shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#F0D9A2] via-[#E5C78B] to-[#C6A15B] text-slate-950 font-bold shadow-md'
                    : 'bg-[#0B1F16] border border-emerald-500/25 text-slate-300 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
        </div>
      </div>

      {/* Tenders Grid - Full Width Responsive Columns (Clean Cards Without Status Badges) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredTenders.map((tender) => (
          <div
            key={tender.id}
            className="p-6 rounded-2xl bg-[#07130D]/90 border border-emerald-950 hover:border-[#E5C78B]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:-translate-y-1"
          >
            <div className="space-y-3.5">
              {/* Header: Entity & Ref Number */}
              <div className="flex items-center justify-between text-xs gap-2">
                <div className="flex items-center gap-1.5 text-[#E5C78B] font-semibold truncate">
                  <Building2 className="w-3.5 h-3.5 shrink-0 text-[#C6A15B]" />
                  <span className="truncate">{tender.entity}</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-500/30 shrink-0">
                  {tender.refNumber}
                </span>
              </div>

              {/* Title */}
              <div>
                <h3 className="font-bold text-base text-white group-hover:text-[#E5C78B] transition-colors leading-snug">
                  {tender.title}
                </h3>
                <div className="text-xs text-slate-400 font-mono mt-0.5">
                  {tender.titleEn}
                </div>
              </div>

              {/* Field / Service Domain */}
              <div className="text-[11px] text-emerald-300/90 font-medium flex items-center gap-1.5 pt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]"></span>
                <span>المجال: {tender.category}</span>
              </div>

              {/* Scope of Work */}
              <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                {tender.scope}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-emerald-950/80 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-mono">
                كراسة الشروط والمواصفات
              </span>
              <a
                href={`/ar/tenders/${tender.slug}.html`}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#E5C78B] hover:text-white transition-colors"
              >
                <span>تفاصيل المناقصة</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
