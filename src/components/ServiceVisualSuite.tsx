import React from 'react';
import {
  Layers,
  ShieldCheck,
  Zap,
  Cpu,
  Database,
  Smartphone,
  Globe,
  Server,
  Code2,
  Workflow,
  Sparkles,
  Award,
  CheckCircle2,
  Lock,
  BarChart3,
  Flame,
  Gauge,
  Box,
} from 'lucide-react';
import { Service } from '../types';

interface ServiceVisualSuiteProps {
  service: Service;
  isAr?: boolean;
}

export const ServiceVisualSuite: React.FC<ServiceVisualSuiteProps> = ({ service, isAr = false }) => {
  const slug = service.slug;

  // Render official SVG logos & tailored infographics
  const renderVisuals = () => {
    // 1. WORDPRESS
    if (slug === 'wordpress-development' || slug.includes('wordpress')) {
      return (
        <div className="space-y-6">
          {/* Header Brand Bar */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#07130D] to-[#0B1F16] border border-[#21759B]/50 shadow-[0_10px_35px_rgba(33,117,155,0.2)] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#07130D] border-2 border-[#21759B] p-2 flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#21759B" strokeWidth="3"/>
                  <path d="M50 8C26.8 8 8 26.8 8 50c0 8.3 2.4 16 6.6 22.6l23.5-64.4c-1.3-.1-2.5-.2-3.8-.2v-2.9h15.2v2.9c-2.4 0-4.9.3-4.9 2.5 0 .7.3 1.6.6 2.5l14 41 8.5-25.5-6.1-16.6c-2-5.5-4-6.4-7.5-6.6V8.1h20.7v2.9c-2.8.2-4.9 1.5-4.9 3.5 0 .8.2 1.6.6 2.5l13.6 37.3 3.8-12.7c2.6-8.5 3.7-14.7 3.7-19.9 0-7.3-2.6-11.2-5.9-13.8C83.9 18.2 68.2 8 50 8z" fill="#21759B"/>
                  <path d="M50 5C25.1 5 5 25.1 5 50s20.1 45 45 45 45-20.1 45-45S74.9 5 50 5zm-33.8 45c0-6.1 1.6-11.8 4.5-16.7L42.2 80c-15.6-3.8-26-17.7-26-30zm33.8 41.5c-4.4 0-8.5-.9-12.3-2.6l14.4-41.9 14.8 40.5c-5 2.6-10.7 4-16.9 4zm3.9-63.5c4.7 0 9.2.9 13.3 2.6l-8.6 24.9-8.4-24.3c1.2-.2 2.5-.3 3.7-.3v-2.9zm17.4 8.7c3.4 5 5.5 11 5.5 17.5 0 11.2-5.7 21-14.4 26.8l17.4-50.1c-.3-.4-6.1-5.1-8.5 5.8z" fill="#0073AA"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-extrabold text-white font-cinzel">WordPress & WooCommerce</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#21759B]/20 text-[#21759B] border border-[#21759B]/40">
                    Official Open Source CMS
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {isAr ? 'هندسة القوالب البرمجية المخصصة 100% ومتاجر ووكومرس فائقة السرعة مع كاش Redis وتوافق الجوال' : 'Bespoke Theme Architecture, Custom Gutenberg Blocks & High-Speed WooCommerce'}
                </p>
              </div>
            </div>

            {/* Live Benchmarks Grid */}
            <div className="grid grid-cols-3 gap-3 shrink-0 text-center font-mono">
              <div className="p-3 rounded-xl bg-[#050806]/90 border border-[#21759B]/30">
                <div className="text-[10px] text-slate-400">PageSpeed</div>
                <div className="text-base font-bold text-emerald-400">99/100</div>
              </div>
              <div className="p-3 rounded-xl bg-[#050806]/90 border border-[#21759B]/30">
                <div className="text-[10px] text-slate-400">TTFB</div>
                <div className="text-base font-bold text-[#E5C78B]">&lt;180ms</div>
              </div>
              <div className="p-3 rounded-xl bg-[#050806]/90 border border-[#21759B]/30">
                <div className="text-[10px] text-slate-400">Security</div>
                <div className="text-base font-bold text-emerald-400">WAF+2FA</div>
              </div>
            </div>
          </div>

          {/* WordPress Infographic: Architecture & Workflow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#07130D]/90 border border-emerald-500/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#21759B]/20 border border-[#21759B]/40 flex items-center justify-center text-[#21759B]">
                <Code2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">{isAr ? '01. كتل Gutenberg وتصميم نظيف' : '01. Bespoke Theme & Gutenberg'}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isAr ? 'بناء قوالب من الصفر دون قوالب جاهزة ثقيلة تسبب بطء التصفح أو تعارض الإضافات.' : 'Handcrafted modular components with zero bloated page builders for peak Core Web Vitals.'}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#07130D]/90 border border-emerald-500/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#21759B]/20 border border-[#21759B]/40 flex items-center justify-center text-[#21759B]">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">{isAr ? '02. تسريع قواعد البيانات وRedis' : '02. Database & Redis Object Cache'}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isAr ? 'فهرسة استعلامات MySQL المتقدمة ودمج Redis Object Caching لتحمل عشرات آلاف الزوار.' : 'High-concurrency query optimization and Redis memory caching for instant response times.'}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#07130D]/90 border border-emerald-500/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#21759B]/20 border border-[#21759B]/40 flex items-center justify-center text-[#21759B]">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">{isAr ? '03. التحصين الأمني المؤسسي' : '03. Enterprise Security Hardening'}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isAr ? 'إغلاق منافذ XML-RPC، تأمين واجهات REST API، عزل الملفات، والنسخ الاحتياطي المشفر اليومي.' : 'Zero-trust headers, disabled XML-RPC attacks, automated malware isolation, and encrypted backups.'}
              </p>
            </div>
          </div>
        </div>
      );
    }

    // 2. SHOPIFY
    if (slug === 'shopify-development' || slug.includes('shopify')) {
      return (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#07130D] to-[#0B1F16] border border-[#96BF48]/50 shadow-[0_10px_35px_rgba(150,191,72,0.2)] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#07130D] border-2 border-[#96BF48] p-2 flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M81.2 24.3c-.3-.2-.8-.2-1.1 0L69.5 28c-1.5-4.4-4.8-8-9.4-10.2l-2.6-1.2c-.8-.4-1.7-.1-2.1.7L46.8 32.7l-9.8-3.1c-1.3-.4-2.7.3-3.1 1.6L20.2 74.5c-.3.9-.1 1.9.5 2.5l26.4 20.6c.6.5 1.4.7 2.2.6l40.3-6.5c1-.2 1.7-1 1.8-2l6.2-59.8c.1-1-.4-2-1.4-2.4l-15-3.2z" fill="#95BF47"/>
                  <path d="M60.1 17.8c-4.6-2.2-10-1.8-14.2 1.2-4.2 2.9-6.6 7.7-6.5 12.8l26.7 8.5c-.2-9.7-1.4-19.8-6-22.5z" fill="#5E8E3E"/>
                  <path d="M49.2 44.5l-4.5 13.8c-.3 1-.1 2 .6 2.7l13.5 10.6c.7.6 1.7.7 2.5.3l18.4-9.3-30.5-18.1z" fill="#FFFFFF"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-extrabold text-white font-cinzel">Shopify & Shopify Plus</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#96BF48]/20 text-[#96BF48] border border-[#96BF48]/40">
                    Online Store 2.0
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {isAr ? 'تطوير قوالب Liquid الحديثة، وتخصيص إتمام الطلب Checkout Extensibility، وتكامل بوابات الدفع الخليجية' : 'Online Store 2.0 Liquid Themes, Custom Checkout Extensibility & High AOV Architecture'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 shrink-0 text-center font-mono">
              <div className="p-3 rounded-xl bg-[#050806]/90 border border-[#96BF48]/30">
                <div className="text-[10px] text-slate-400">Checkout</div>
                <div className="text-base font-bold text-emerald-400">1-Page</div>
              </div>
              <div className="p-3 rounded-xl bg-[#050806]/90 border border-[#96BF48]/30">
                <div className="text-[10px] text-slate-400">Conversion</div>
                <div className="text-base font-bold text-[#E5C78B]">+38%</div>
              </div>
              <div className="p-3 rounded-xl bg-[#050806]/90 border border-[#96BF48]/30">
                <div className="text-[10px] text-slate-400">Payments</div>
                <div className="text-base font-bold text-emerald-400">Mada+Apple</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#07130D]/90 border border-emerald-500/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#96BF48]/20 border border-[#96BF48]/40 flex items-center justify-center text-[#96BF48]">
                <Box className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">{isAr ? '01. كتل وأقسام ديناميكية' : '01. Dynamic Sections & Blocks'}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isAr ? 'إمكانية تعديل وترتيب كافة أقسام المتجر من لوحة تحكم شوبيفاي دون الحاجة لمطور.' : 'Empower non-technical teams to customize landing pages, announcements, and product grids instantly.'}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#07130D]/90 border border-emerald-500/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#96BF48]/20 border border-[#96BF48]/40 flex items-center justify-center text-[#96BF48]">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">{isAr ? '02. تخصيص تجربة الدفع والشحن' : '02. Checkout & Payment Engines'}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isAr ? 'تكامل فوري مع مدى، Apple Pay، تابي، وتمارا، وخيارات الشحن المحلي والدولي.' : 'Native integration with GCC local payment gateways (Mada, Apple Pay, Tabby, Tamara) with custom delivery validation.'}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#07130D]/90 border border-emerald-500/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#96BF48]/20 border border-[#96BF48]/40 flex items-center justify-center text-[#96BF48]">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">{isAr ? '03. استراتيجية رفع متوسط السلة' : '03. AOV & Upsell Architecture'}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isAr ? 'محركات الاقتراحات الذكية، وعروض الحزم، ومحفزات الشحن المجاني في سلة التسوق.' : 'Smart slide-out cart drawers with in-cart upselling, tiered discounts, and free shipping progress bars.'}
              </p>
            </div>
          </div>
        </div>
      );
    }

    // 3. SALLA
    if (slug === 'salla-store-development' || slug.includes('salla')) {
      return (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#07130D] to-[#0B1F16] border border-[#004956]/60 shadow-[0_10px_35px_rgba(0,73,86,0.3)] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#004956] border-2 border-emerald-400 p-2 flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" rx="20" fill="#004956"/>
                  <path d="M25 35h50M35 35c0 15 7 28 15 28s15-13 15-28M42 63l-7 15h30l-7-15" stroke="#22C55E" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-extrabold text-white font-cinzel">منصة سلة (Salla Platform)</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                    Salla Partner
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {isAr ? 'تصميم قوالب توايلايت (Twilight) المخصصة والربط مع هيئة الزكاة والضريبة والجمارك ZATCA' : 'Bespoke Salla Twilight Theme Engineering & ZATCA Phase-2 Integration'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 shrink-0 text-center font-mono">
              <div className="p-3 rounded-xl bg-[#050806]/90 border border-emerald-500/30">
                <div className="text-[10px] text-slate-400">ZATCA</div>
                <div className="text-base font-bold text-emerald-400">Phase 2</div>
              </div>
              <div className="p-3 rounded-xl bg-[#050806]/90 border border-emerald-500/30">
                <div className="text-[10px] text-slate-400">Framework</div>
                <div className="text-base font-bold text-[#E5C78B]">Twilight</div>
              </div>
              <div className="p-3 rounded-xl bg-[#050806]/90 border border-emerald-500/30">
                <div className="text-[10px] text-slate-400">Conversion</div>
                <div className="text-base font-bold text-emerald-400">+42%</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#07130D]/90 border border-emerald-500/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">{isAr ? '01. ثيمات توايلايت المخصصة' : '01. Twilight Custom Themes'}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isAr ? 'تطوير واجهات فريدة متوافقة بالكامل مع لغة تصميم سلة وهويتك التجارية دون تشابه مع المنافسين.' : 'Unique brand styling built on Salla Twilight engine with bespoke CSS/JS and mobile-first micro-interactions.'}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#07130D]/90 border border-emerald-500/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">{isAr ? '02. الفوترة الإلكترونية والامتثال' : '02. ZATCA Compliance'}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isAr ? 'توافق تام مع متطلبات المرحلة الثانية للفوترة الإلكترونية وضبط ضريبة القيمة المضافة.' : 'Certified integration with Saudi ZATCA electronic invoicing guidelines with automated barcode and tax breakdowns.'}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#07130D]/90 border border-emerald-500/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Gauge className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">{isAr ? '03. تطبيقات سلة والشحن السريع' : '03. Salla Apps & Logistics'}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isAr ? 'تفعيل بوالص الشحن الآلية (أرامكس، سمسا، سبل) وربط أنظمة الـ ERP والمخازن.' : 'Automated shipping manifests, live tracking, and bidirectional inventory sync with enterprise accounting tools.'}
              </p>
            </div>
          </div>
        </div>
      );
    }

    // 4. ZID
    if (slug === 'zid-store-development' || slug.includes('zid')) {
      return (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#07130D] to-[#0B1F16] border border-[#7B2CBF]/60 shadow-[0_10px_35px_rgba(123,44,191,0.25)] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#07130D] border-2 border-[#7B2CBF] p-2 flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" rx="20" fill="#07130D"/>
                  <path d="M25 28h50l-35 44h35" stroke="#7B2CBF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="70" cy="30" r="5" fill="#E5C78B"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-extrabold text-white font-cinzel">منصة زد للتجارة الحديثة (Zid)</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#7B2CBF]/20 text-[#A855F7] border border-[#7B2CBF]/40">
                    Zid App Market
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {isAr ? 'حلول التجارة التجزئية المتكاملة، وتزامن الفروع ونقاط البيع POS، وتطوير ثيمات احترافية' : 'Modern Retail Architecture, Multi-Branch POS Integration & Custom Zid Themes'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 shrink-0 text-center font-mono">
              <div className="p-3 rounded-xl bg-[#050806]/90 border border-[#7B2CBF]/30">
                <div className="text-[10px] text-slate-400">Branches</div>
                <div className="text-base font-bold text-[#A855F7]">Multi-Store</div>
              </div>
              <div className="p-3 rounded-xl bg-[#050806]/90 border border-[#7B2CBF]/30">
                <div className="text-[10px] text-slate-400">Zid Pay</div>
                <div className="text-base font-bold text-emerald-400">Instant</div>
              </div>
              <div className="p-3 rounded-xl bg-[#050806]/90 border border-[#7B2CBF]/30">
                <div className="text-[10px] text-slate-400">Zid Ship</div>
                <div className="text-base font-bold text-[#E5C78B]">Automated</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#07130D]/90 border border-emerald-500/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#7B2CBF]/20 border border-[#7B2CBF]/40 flex items-center justify-center text-[#A855F7]">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">{isAr ? '01. ثيمات زد العصرية' : '01. Bespoke Zid Layouts'}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isAr ? 'تخصيص ثيمات متجر زد بما يبرز تفاصيل المنتجات ويسهل التصفح والشراء عبر الجوال.' : 'High-impact mobile storefronts engineered for retail brands with custom filters and fast search.'}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#07130D]/90 border border-emerald-500/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#7B2CBF]/20 border border-[#7B2CBF]/40 flex items-center justify-center text-[#A855F7]">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">{isAr ? '02. ربط الفروع ونقاط البيع' : '02. Multi-Branch Inventory'}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isAr ? 'مزامنة المخزون بين الفروع الفعلية والمتجر الإلكتروني لحظياً لتفادي نفاد المنتجات.' : 'Real-time synchronization between physical retail branches, warehouse shelves, and online catalog.'}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#07130D]/90 border border-emerald-500/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#7B2CBF]/20 border border-[#7B2CBF]/40 flex items-center justify-center text-[#A855F7]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">{isAr ? '03. تكامل زد باي وزد شب' : '03. Zid Pay & Zid Ship'}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isAr ? 'تفعيل بوابات الدفع الوطنية وربط شركات الشحن بنقرة واحدة لتحسين دورة تنفيذ الطلبات.' : 'Direct integration with unified payment processing and automated logistics dispatch across Saudi Arabia.'}
              </p>
            </div>
          </div>
        </div>
      );
    }

    // 5. DRUPAL
    if (slug === 'drupal-development' || slug.includes('drupal')) {
      return (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#07130D] to-[#0B1F16] border border-[#0678BE]/50 shadow-[0_10px_35px_rgba(6,120,190,0.2)] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#07130D] border-2 border-[#0678BE] p-2 flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 8C35 25 22 45 22 62c0 16 12.5 28 28 28s28-12 28-28c0-17-13-37-28-54z" fill="#0678BE"/>
                  <path d="M50 25c-8 12-16 26-16 38 0 9 7 16 16 16s16-7 16-16c0-12-8-26-16-38z" fill="#00A651"/>
                  <circle cx="43" cy="52" r="5" fill="#FFFFFF"/>
                  <circle cx="57" cy="52" r="5" fill="#FFFFFF"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-extrabold text-white font-cinzel">Drupal Enterprise Portals</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#0678BE]/20 text-[#0678BE] border border-[#0678BE]/40">
                    Drupal 10 / 11
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {isAr ? 'البوابات الحكومية والمؤسسية المعقدة، معمارية Headless Decoupled، وأعلى معايير الأمان العالمية' : 'Enterprise Government Portals, Decoupled Headless Architecture & Top Security Standard'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 shrink-0 text-center font-mono">
              <div className="p-3 rounded-xl bg-[#050806]/90 border border-[#0678BE]/30">
                <div className="text-[10px] text-slate-400">Security</div>
                <div className="text-base font-bold text-emerald-400">Military-Grade</div>
              </div>
              <div className="p-3 rounded-xl bg-[#050806]/90 border border-[#0678BE]/30">
                <div className="text-[10px] text-slate-400">API</div>
                <div className="text-base font-bold text-[#E5C78B]">GraphQL</div>
              </div>
              <div className="p-3 rounded-xl bg-[#050806]/90 border border-[#0678BE]/30">
                <div className="text-[10px] text-slate-400">RBAC</div>
                <div className="text-base font-bold text-emerald-400">Granular</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#07130D]/90 border border-emerald-500/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0678BE]/20 border border-[#0678BE]/40 flex items-center justify-center text-[#0678BE]">
                <Server className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">{isAr ? '01. صوامع المحتوى وإدارة الصلاحيات' : '01. Advanced Taxonomy & Workflows'}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isAr ? 'حوكمة النشر الإداري بمستويات اعتماد متعددة ومطابقة معايير التحول الرقمي الحكومي.' : 'Multi-tier editorial workflows, granular permission matrices, and centralized content publishing.'}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#07130D]/90 border border-emerald-500/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0678BE]/20 border border-[#0678BE]/40 flex items-center justify-center text-[#0678BE]">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">{isAr ? '02. معمارية Headless مفصولة' : '02. Headless Decoupled Architecture'}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isAr ? 'ربط خلفية دروبال مع واجهات React أو Next.js لتقديم تجربة تصفح سريعة كالتطبيقات.' : 'Decoupled Drupal backend powering Next.js / React micro-frontends via JSON:API and GraphQL.'}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#07130D]/90 border border-emerald-500/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0678BE]/20 border border-[#0678BE]/40 flex items-center justify-center text-[#0678BE]">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">{isAr ? '03. أمان البنية السيادية' : '03. Sovereign Level Hardening'}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isAr ? 'التزام تام بضوابط الهيئة الوطنية للأمن السيبراني NCA والامتثال السحابي المحلي.' : 'Strict alignment with National Cybersecurity Authority (NCA) controls and local hosting mandates.'}
              </p>
            </div>
          </div>
        </div>
      );
    }

    // 6. ERP / SOFTWARE SYSTEMS
    if (slug.includes('erp') || slug.includes('software') || slug.includes('crm') || slug.includes('pos')) {
      return (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#07130D] to-[#0B1F16] border border-[#C6A15B]/50 shadow-[0_10px_35px_rgba(198,161,91,0.2)] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#07130D] border-2 border-[#C6A15B] p-2 flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" rx="20" fill="#07130D"/>
                  <circle cx="50" cy="50" r="28" stroke="#C6A15B" strokeWidth="4" strokeDasharray="6 4"/>
                  <circle cx="50" cy="22" r="8" fill="#10B981"/>
                  <circle cx="74" cy="62" r="8" fill="#E5C78B"/>
                  <circle cx="26" cy="62" r="8" fill="#3B82F6"/>
                  <path d="M50 22L74 62H26L50 22z" stroke="#C6A15B" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-extrabold text-white font-cinzel">Enterprise ERP & Software Solutions</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#C6A15B]/20 text-[#E5C78B] border border-[#C6A15B]/40">
                    Modular ERP
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {isAr ? 'تخطيط الموارد المؤسسية، أنظمة الحسابات، إدارة المخازن WMS، وسلاسل الإمداد ونقاط البيع' : 'Modular Enterprise Resource Planning, Accounting, Warehouse (WMS) & Supply Chain Engineering'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 shrink-0 text-center font-mono">
              <div className="p-3 rounded-xl bg-[#050806]/90 border border-[#C6A15B]/30">
                <div className="text-[10px] text-slate-400">Modules</div>
                <div className="text-base font-bold text-[#E5C78B]">All-In-One</div>
              </div>
              <div className="p-3 rounded-xl bg-[#050806]/90 border border-[#C6A15B]/30">
                <div className="text-[10px] text-slate-400">Audit Trail</div>
                <div className="text-base font-bold text-emerald-400">100%</div>
              </div>
              <div className="p-3 rounded-xl bg-[#050806]/90 border border-[#C6A15B]/30">
                <div className="text-[10px] text-slate-400">API Sync</div>
                <div className="text-base font-bold text-emerald-400">Realtime</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#07130D]/90 border border-emerald-500/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C6A15B]/20 border border-[#C6A15B]/40 flex items-center justify-center text-[#E5C78B]">
                <Workflow className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">{isAr ? '01. أتمتة دورة العمليات الإدارية' : '01. Workflow Automation'}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isAr ? 'ربط المبيعات بالمخازن والمحاسبة والفوترة دون أي تدخل يدوي يسبب أخطاء بشرية.' : 'Seamless end-to-end trigger workflows: sales quotations turn into invoices and warehouse picklists automatically.'}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#07130D]/90 border border-emerald-500/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C6A15B]/20 border border-[#C6A15B]/40 flex items-center justify-center text-[#E5C78B]">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">{isAr ? '02. قواعد بيانات آمنة وسريعة' : '02. Relational Architecture'}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isAr ? 'هندسة قواعد بيانات PostgreSQL / MySQL مع نسخ متزامن وسجل تدقيق شامل للعمليات.' : 'ACID-compliant PostgreSQL database structures with multi-tenant partitioning and real-time audit logs.'}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#07130D]/90 border border-emerald-500/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C6A15B]/20 border border-[#C6A15B]/40 flex items-center justify-center text-[#E5C78B]">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">{isAr ? '03. لوحات تحليلات ومؤشرات لحظية' : '03. Real-Time KPI Dashboards'}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isAr ? 'تقارير الأرباح والخسائر، تتبع المخزون والتدفقات النقدية بدقة متناهية.' : 'Executive telemetry, cash flow forecasting, inventory aging metrics, and departmental performance gauges.'}
              </p>
            </div>
          </div>
        </div>
      );
    }

    // 7. MOBILE APPLICATIONS (IOS & ANDROID)
    if (slug.includes('android') || slug.includes('ios') || slug.includes('mobile')) {
      return (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#07130D] to-[#0B1F16] border border-emerald-500/50 shadow-[0_10px_35px_rgba(16,185,129,0.2)] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#07130D] border-2 border-emerald-400 p-2 flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" rx="20" fill="#07130D"/>
                  <rect x="28" y="15" width="44" height="70" rx="10" stroke="#10B981" strokeWidth="4"/>
                  <line x1="42" y1="22" x2="58" y2="22" stroke="#E5C78B" strokeWidth="3" strokeLinecap="round"/>
                  <circle cx="50" cy="74" r="4" fill="#10B981"/>
                  <path d="M36 34h28M36 44h20M36 54h24" stroke="#E5C78B" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-extrabold text-white font-cinzel">Mobile Apps (iOS & Android)</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                    Native & Flutter
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {isAr ? 'تطبيقات الجوال للشركات والمتاجر الإلكترونية، تجربة مستخدم سلسة، وربط خلفي سحابي متين' : 'Native Swift / Kotlin & High-Performance Flutter Cross-Platform Architecture'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 shrink-0 text-center font-mono">
              <div className="p-3 rounded-xl bg-[#050806]/90 border border-emerald-500/30">
                <div className="text-[10px] text-slate-400">Stores</div>
                <div className="text-base font-bold text-emerald-400">App Store+Play</div>
              </div>
              <div className="p-3 rounded-xl bg-[#050806]/90 border border-emerald-500/30">
                <div className="text-[10px] text-slate-400">Frame Rate</div>
                <div className="text-base font-bold text-[#E5C78B]">60/120 FPS</div>
              </div>
              <div className="p-3 rounded-xl bg-[#050806]/90 border border-emerald-500/30">
                <div className="text-[10px] text-slate-400">Offline</div>
                <div className="text-base font-bold text-emerald-400">Sync</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#07130D]/90 border border-emerald-500/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">{isAr ? '01. تصميم مريح للإبهام' : '01. Thumb-Zone Ergonomics'}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isAr ? 'توزيع عناصر التحكم والأزرار في متناول الإبهام لسهولة الاستخدام بيد واحدة.' : 'Engineered strictly for one-handed operation with bottom navigation and generous touch hitboxes.'}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#07130D]/90 border border-emerald-500/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">{isAr ? '02. إشعارات فورية وتفاعل مستمر' : '02. Push Notifications & Sync'}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isAr ? 'إرسال إشعارات العروض وتحديثات الطلبات مع دعم العمل في وضع عدم الاتصال.' : 'Firebase Cloud Messaging integration with background sync and offline SQLite caching.'}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#07130D]/90 border border-emerald-500/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">{isAr ? '03. بوابات الدفع البيومترية' : '03. Biometric Security & Apple Pay'}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isAr ? 'تسجيل دخول بالبصمة والوجه (Face ID)، والدفع الفوري الآمن بنقرة واحدة.' : 'Hardware keychain encryption, biometric authentication (Face ID / Fingerprint), and native Apple Pay.'}
              </p>
            </div>
          </div>
        </div>
      );
    }

    // 8. TENDER & TECHNICAL PROPOSAL SERVICES
    if (slug.includes('tender') || slug.includes('proposal') || slug.includes('compliance') || slug.includes('etimad')) {
      return (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#07130D] to-[#0B1F16] border border-[#C6A15B]/60 shadow-[0_10px_35px_rgba(198,161,91,0.25)] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#07130D] border-2 border-[#C6A15B] p-2 flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" rx="20" fill="#07130D"/>
                  <path d="M30 20h30l16 16v44a4 4 0 01-4 4H30a4 4 0 01-4-4V24a4 4 0 014-4z" stroke="#C6A15B" strokeWidth="4"/>
                  <path d="M60 20v16h16" stroke="#C6A15B" strokeWidth="4"/>
                  <path d="M38 48h24M38 58h24M38 68h14" stroke="#E5C78B" strokeWidth="3" strokeLinecap="round"/>
                  <circle cx="68" cy="68" r="8" fill="#10B981"/>
                  <path d="M65 68l2 2 4-4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-extrabold text-white font-cinzel">منظومة المناقصات والعروض الفنية</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#C6A15B]/20 text-[#E5C78B] border border-[#C6A15B]/40">
                    منصة اعتماد & RFP
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {isAr ? 'تفكيك كراسات الشروط، مصفوفات الامتثال، المنهجيات الفنية، وحوكمة الجودة مع صفر استبعاد فني' : 'RFP Decomposition, Technical Methodology, Compliance Matrices & Red Team Bid QA with 0% Rejection'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 shrink-0 text-center font-mono">
              <div className="p-3 rounded-xl bg-[#050806]/90 border border-[#C6A15B]/30">
                <div className="text-[10px] text-slate-400">Compliance</div>
                <div className="text-base font-bold text-emerald-400">100%</div>
              </div>
              <div className="p-3 rounded-xl bg-[#050806]/90 border border-[#C6A15B]/30">
                <div className="text-[10px] text-slate-400">Rejection</div>
                <div className="text-base font-bold text-emerald-400">0%</div>
              </div>
              <div className="p-3 rounded-xl bg-[#050806]/90 border border-[#C6A15B]/30">
                <div className="text-[10px] text-slate-400">Exposure</div>
                <div className="text-base font-bold text-[#E5C78B]">400+ Tenders</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#07130D]/90 border border-emerald-500/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C6A15B]/20 border border-[#C6A15B]/40 flex items-center justify-center text-[#E5C78B]">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">{isAr ? '01. مصفوفة الامتثال الصارم' : '01. Bid Compliance Matrix'}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isAr ? 'تتبع كل بند في كراسة الشروط وربطه بالصفحة الدقيقة في العرض الفني لضمان العلامة الكاملة.' : 'Line-by-line requirement extraction mapping clauses to exact technical evidence and delivery commitments.'}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#07130D]/90 border border-emerald-500/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C6A15B]/20 border border-[#C6A15B]/40 flex items-center justify-center text-[#E5C78B]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">{isAr ? '02. تدقيق Red Team قبل الإرسال' : '02. Red Team Bid QA Audit'}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isAr ? 'فحص العرض بمنظور لجنة التقييم لاستبعاد أي تناقض بين العرض الفني والعرض المالي.' : 'Rigorous independent scoring simulation eliminating non-compliances and packaging oversights prior to submission.'}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#07130D]/90 border border-emerald-500/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C6A15B]/20 border border-[#C6A15B]/40 flex items-center justify-center text-[#E5C78B]">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">{isAr ? '03. اتفاقيات الخدمة SLA وحوكمة المشروع' : '03. SLA, Governance & KPIs'}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isAr ? 'صياغة مؤشرات الأداء وجداول التسليمات ومصفوفة المسؤوليات RACI لضمان الترسية.' : 'Measurable Service Level Agreements, escalation paths, and WBS milestones tailored to government expectations.'}
              </p>
            </div>
          </div>
        </div>
      );
    }

    // DEFAULT / GENERIC TECHNICAL SERVICE VISUAL
    return (
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#07130D] to-[#0B1F16] border border-emerald-500/40 shadow-[0_10px_35px_rgba(16,185,129,0.15)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#07130D] border-2 border-emerald-400 p-2 flex items-center justify-center shrink-0 shadow-lg">
              <Cpu className="w-8 h-8 text-emerald-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-extrabold text-white font-cinzel">{service.title}</span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  {service.categoryTitle}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {service.shortDescription}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 shrink-0 text-center font-mono">
            <div className="p-3 rounded-xl bg-[#050806]/90 border border-emerald-500/30">
              <div className="text-[10px] text-slate-400">Quality</div>
              <div className="text-base font-bold text-emerald-400">Enterprise</div>
            </div>
            <div className="p-3 rounded-xl bg-[#050806]/90 border border-emerald-500/30">
              <div className="text-[10px] text-slate-400">SLA</div>
              <div className="text-base font-bold text-[#E5C78B]">Guaranteed</div>
            </div>
            <div className="p-3 rounded-xl bg-[#050806]/90 border border-emerald-500/30">
              <div className="text-[10px] text-slate-400">Support</div>
              <div className="text-base font-bold text-emerald-400">Dedicated</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full my-6">
      {renderVisuals()}
    </div>
  );
};
