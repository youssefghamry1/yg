/**
 * Service Visuals Engine - Bespoke Platform Logos, 3D Hero Cards & Architectural Illustrations
 * Provides complete visual parity between English and Arabic versions with RTL localization.
 */

export interface ServiceVisualData {
  brandName: string;
  brandTagline: string;
  accentColor: string;
  glowColor: string;
  logoSvg: string;
  techChips: string[];
  kpiBadges: { label: string; value: string; icon: string }[];
  heroVisualCardHtml: string;
  architectureDiagramHtml: string;
}

export function getServiceVisuals(slug: string, isAr: boolean): ServiceVisualData {
  // 1. WORDPRESS
  if (slug === 'wordpress-development') {
    return {
      brandName: isAr ? 'ووردبريس (WordPress & WooCommerce)' : 'WordPress & WooCommerce',
      brandTagline: isAr ? 'هندسة القوالب البرمجية المخصصة ومتاجر ووكومرس فائقة السرعة' : 'Bespoke Theme Architecture & High-Performance WooCommerce',
      accentColor: '#21759B',
      glowColor: 'rgba(33, 117, 155, 0.45)',
      logoSvg: `<svg class="w-14 h-14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#21759B" stroke-width="3"/>
        <path d="M50 5C25.1 5 5 25.1 5 50s20.1 45 45 45 45-20.1 45-45S74.9 5 50 5zm-33.8 45c0-6.1 1.6-11.8 4.5-16.7L42.2 80c-15.6-3.8-26-17.7-26-30zm33.8 41.5c-4.4 0-8.5-.9-12.3-2.6l14.4-41.9 14.8 40.5c-5 2.6-10.7 4-16.9 4zm3.9-63.5c4.7 0 9.2.9 13.3 2.6l-8.6 24.9-8.4-24.3c1.2-.2 2.5-.3 3.7-.3v-2.9zm17.4 8.7c3.4 5 5.5 11 5.5 17.5 0 11.2-5.7 21-14.4 26.8l17.4-50.1c-.3-.4-6.1-5.1-8.5 5.8z" fill="#0073AA"/>
        <path d="M50 8C26.8 8 8 26.8 8 50c0 8.3 2.4 16 6.6 22.6l23.5-64.4c-1.3-.1-2.5-.2-3.8-.2v-2.9h15.2v2.9c-2.4 0-4.9.3-4.9 2.5 0 .7.3 1.6.6 2.5l14 41 8.5-25.5-6.1-16.6c-2-5.5-4-6.4-7.5-6.6V8.1h20.7v2.9c-2.8.2-4.9 1.5-4.9 3.5 0 .8.2 1.6.6 2.5l13.6 37.3 3.8-12.7c2.6-8.5 3.7-14.7 3.7-19.9 0-7.3-2.6-11.2-5.9-13.8C83.9 18.2 68.2 8 50 8z" fill="#21759B"/>
      </svg>`,
      techChips: isAr
        ? ['PHP 8.3 المعياري', 'كتل جوتنبرج مخصصة', 'ووكومرس المتقدم', 'تخزين مؤقت Redis', 'قوالب Tailwind CSS']
        : ['PHP 8.3 Native', 'Custom Gutenberg Blocks', 'Advanced WooCommerce', 'Redis Object Cache', 'Tailwind CSS Themes'],
      kpiBadges: [
        { label: isAr ? 'سرعة Google PageSpeed' : 'PageSpeed Score', value: '99/100', icon: '⚡' },
        { label: isAr ? 'استجابة الخادم TTFB' : 'Server TTFB', value: '< 200ms', icon: '⏱️' },
        { label: isAr ? 'أمان وحماية ضد الهجمات' : 'Security Hardening', value: 'WAF & 2FA', icon: '🛡️' }
      ],
      heroVisualCardHtml: `
        <div class="relative p-6 rounded-2xl glass-panel-elevated border border-[#21759B]/50 shadow-[0_15px_40px_rgba(33,117,155,0.25)] space-y-4">
          <div class="flex items-center justify-between border-b border-emerald-950/80 pb-3">
            <div class="flex items-center gap-2.5">
              <span class="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
              <span class="text-xs font-mono font-bold text-white tracking-wider">WP-CORE-ENGINE v6.7</span>
            </div>
            <span class="text-[11px] px-2 py-0.5 rounded-full bg-[#21759B]/20 text-[#21759B] border border-[#21759B]/40 font-mono font-semibold">
              ${isAr ? 'قالب مخصص 100%' : 'Bespoke Theme'}
            </span>
          </div>
          <div class="grid grid-cols-2 gap-3 text-xs">
            <div class="p-3 rounded-xl bg-[#07130D]/90 border border-emerald-500/20">
              <span class="text-emerald-400/80 text-[10px] uppercase font-mono block">${isAr ? 'مؤشر أداء الويب LCP' : 'Core Web Vitals LCP'}</span>
              <span class="text-lg font-bold text-white font-mono">0.68s</span>
              <span class="text-[10px] text-emerald-400 block">${isAr ? '✓ اجتياز فائق للسرعة' : '✓ Good / Green'}</span>
            </div>
            <div class="p-3 rounded-xl bg-[#07130D]/90 border border-emerald-500/20">
              <span class="text-[#E5C78B]/80 text-[10px] uppercase font-mono block">${isAr ? 'استعلامات قاعدة البيانات' : 'DB Queries'}</span>
              <span class="text-lg font-bold text-white font-mono">18 / 1.2MB</span>
              <span class="text-[10px] text-[#E5C78B] block">${isAr ? 'بدون حمل إضافي' : 'Optimized Payload'}</span>
            </div>
          </div>
          <div class="p-3 rounded-xl bg-[#050806]/90 border border-[#21759B]/30 flex items-center justify-between text-xs">
            <span class="text-slate-300">${isAr ? 'بوابات الدفع: مدى، Apple Pay، تابي' : 'Payments: Mada, Apple Pay, Tabby'}</span>
            <span class="text-emerald-400 font-bold">✓ Active</span>
          </div>
        </div>
      `,
      architectureDiagramHtml: `
        <div class="p-6 rounded-2xl glass-panel border border-[#21759B]/30 space-y-4">
          <h3 class="text-sm font-bold text-[#E5C78B] font-serif uppercase tracking-wider flex items-center gap-2">
            <span>⚙️</span>
            <span>${isAr ? 'الهندسة المعمارية لمنظومة ووردبريس الاحترافية' : 'Bespoke WordPress System Architecture'}</span>
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div class="p-3 rounded-xl bg-[#07130D]/80 border border-emerald-500/20 space-y-1">
              <div class="font-bold text-white">${isAr ? 'طبقة الواجهة والتعريب' : 'Frontend & Localization'}</div>
              <p class="text-[11px] text-slate-300">${isAr ? 'كتل Gutenberg مخصصة مع دعم كامل لاتجاه اليمين RTL وخطوط Cairo/Inter.' : 'Custom Gutenberg blocks with native RTL support and zero layout shifts.'}</p>
            </div>
            <div class="p-3 rounded-xl bg-[#07130D]/80 border border-emerald-500/20 space-y-1">
              <div class="font-bold text-white">${isAr ? 'طبقة التخزين والتسريع' : 'Caching & Edge CDN'}</div>
              <p class="text-[11px] text-slate-300">${isAr ? 'كاش كائنات Redis مع Cloudflare Edge وضغط فوري للصور بصيغ WebP/AVIF.' : 'Redis object caching with Cloudflare Edge and automatic AVIF/WebP conversion.'}</p>
            </div>
            <div class="p-3 rounded-xl bg-[#07130D]/80 border border-emerald-500/20 space-y-1">
              <div class="font-bold text-white">${isAr ? 'طبقة التحصين المؤسسي' : 'Enterprise Hardening'}</div>
              <p class="text-[11px] text-slate-300">${isAr ? 'جدار ناري WAF، تعطيل ثغرات REST/XML-RPC، ونسخ احتياطي سحابي تلقائي.' : 'WAF firewall, disabled XML-RPC endpoints, and automated encrypted cloud backups.'}</p>
            </div>
          </div>
        </div>
      `
    };
  }

  // 2. SHOPIFY
  if (slug === 'shopify-development') {
    return {
      brandName: isAr ? 'شوبيفاي (Shopify Partner)' : 'Shopify & Shopify Plus',
      brandTagline: isAr ? 'تطوير متاجر شوبيفاي بنظام Online Store 2.0 ومعدلات تحويل مرتفعة' : 'Online Store 2.0 Theme Engineering & Conversion Optimization',
      accentColor: '#96BF48',
      glowColor: 'rgba(150, 191, 72, 0.45)',
      logoSvg: `<svg class="w-14 h-14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#96BF48" stroke-width="3"/>
        <path d="M68.5 24.5c-.3-.2-.8-.2-1.1 0-.3.1-1.6.8-2.6 1.3-1.6.8-5.5 2.7-5.5 2.7l-4.1-10.1c-.2-.5-.6-.8-1.2-.8h-.4c-.5.1-.9.4-1.1.9l-5.6 13.9-9.1 4.5c-.7.3-1.1 1-1 1.7.1.7.6 1.3 1.3 1.5l26.2 6.5c.3.1.6 0 .8-.2.2-.2.3-.5.2-.8l-1.9-20.6z" fill="#96BF48"/>
        <path d="M54.4 18.4l-4.1 10.1 8.5-4.2-4.4-5.9z" fill="#5E8E3E"/>
        <path d="M50.3 28.5L34.1 36.6l24.4 6 1.8-18.4-10-4.2z" fill="#7AB55C"/>
        <path d="M43.9 44.5c-4.8 2.2-7.6 5.8-7.6 10.1 0 7.4 8.7 10.1 14.2 11.8 4.2 1.3 5.4 2.4 5.4 4.1 0 2.3-2.6 3.6-5.8 3.6-5.2 0-8.9-2.7-8.9-2.7l-1.8 5.7s4 2.8 10.7 2.8c7.4 0 12.3-4.1 12.3-10.3 0-7.3-8.2-10-14.4-12-3.8-1.2-5.1-2.1-5.1-3.7 0-1.7 1.8-3 4.9-3 4.1 0 7 1.9 7 1.9l1.7-5.5s-3.5-2.8-12.6-2.8z" fill="#FFFFFF"/>
      </svg>`,
      techChips: isAr
        ? ['شوبيفاي OS 2.0', 'برمجة أقسام Liquid', 'بوابات الدفع (مدى/أبل باي)', 'ربط الفوترة والزكاة ZATCA', 'سلة جانبية تفاعلية']
        : ['Shopify OS 2.0', 'Custom Liquid Sections', 'Mada & Apple Pay', 'ZATCA Phase 2 Invoicing', 'Slide-Out Ajax Cart'],
      kpiBadges: [
        { label: isAr ? 'معدل التحويل (CR)' : 'Conversion Rate', value: '+35%', icon: '📈' },
        { label: isAr ? 'سرعة صفحة الدفع' : 'Checkout Speed', value: '1.2s', icon: '⚡' },
        { label: isAr ? 'جاهزية السوق السعودي' : 'Saudi Market Fit', value: '100%', icon: '🇸🇦' }
      ],
      heroVisualCardHtml: `
        <div class="relative p-6 rounded-2xl glass-panel-elevated border border-[#96BF48]/50 shadow-[0_15px_40px_rgba(150,191,72,0.25)] space-y-4">
          <div class="flex items-center justify-between border-b border-emerald-950/80 pb-3">
            <div class="flex items-center gap-2.5">
              <span class="w-3 h-3 rounded-full bg-[#96BF48] animate-pulse"></span>
              <span class="text-xs font-mono font-bold text-white tracking-wider">SHOPIFY-OS2.0-COMMERCE</span>
            </div>
            <span class="text-[11px] px-2 py-0.5 rounded-full bg-[#96BF48]/20 text-[#96BF48] border border-[#96BF48]/40 font-mono font-semibold">
              ${isAr ? 'معتمد شوبيفاي' : 'Certified Store'}
            </span>
          </div>
          <div class="grid grid-cols-2 gap-3 text-xs">
            <div class="p-3 rounded-xl bg-[#07130D]/90 border border-emerald-500/20">
              <span class="text-[#96BF48] text-[10px] uppercase font-mono block">${isAr ? 'صفحة المنتج السريعة' : 'PDP Mobile Speed'}</span>
              <span class="text-lg font-bold text-white font-mono">0.82s</span>
              <span class="text-[10px] text-emerald-400 block">${isAr ? 'تحميل فوري للأقسام' : 'Instant Render'}</span>
            </div>
            <div class="p-3 rounded-xl bg-[#07130D]/90 border border-emerald-500/20">
              <span class="text-[#E5C78B] text-[10px] uppercase font-mono block">${isAr ? 'تقليل التخلي عن السلة' : 'Abandoned Cart SLA'}</span>
              <span class="text-lg font-bold text-white font-mono">-42%</span>
              <span class="text-[10px] text-[#E5C78B] block">${isAr ? 'دفع بخطوة واحدة' : 'One-Click Flow'}</span>
            </div>
          </div>
          <div class="p-3 rounded-xl bg-[#050806]/90 border border-[#96BF48]/30 flex items-center justify-between text-xs">
            <span class="text-slate-300">${isAr ? 'دعم مدى، Apple Pay، تمارا، تابي' : 'Gateways: Mada, Tabby, Tamara, Apple Pay'}</span>
            <span class="text-emerald-400 font-bold">✓ Ready</span>
          </div>
        </div>
      `,
      architectureDiagramHtml: `
        <div class="p-6 rounded-2xl glass-panel border border-[#96BF48]/30 space-y-4">
          <h3 class="text-sm font-bold text-[#E5C78B] font-serif uppercase tracking-wider flex items-center gap-2">
            <span>🛍️</span>
            <span>${isAr ? 'منظومة شوبيفاي المتكاملة للتجارة الإلكترونية والنمو' : 'High-Growth Shopify Commerce Architecture'}</span>
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div class="p-3 rounded-xl bg-[#07130D]/80 border border-emerald-500/20 space-y-1">
              <div class="font-bold text-white">${isAr ? 'قالب Liquid نقي' : 'Clean Liquid Theme'}</div>
              <p class="text-[11px] text-slate-300">${isAr ? 'أقسام برمجية معيارية قابلة للسحب والإفلات بدون الاعتماد على تطبيقات تبطئ المتجر.' : 'Modular JSON & Liquid sections with minimal third-party apps for blazing speed.'}</p>
            </div>
            <div class="p-3 rounded-xl bg-[#07130D]/80 border border-emerald-500/20 space-y-1">
              <div class="font-bold text-white">${isAr ? 'تكامل محلي للخليج' : 'Gulf Localization'}</div>
              <p class="text-[11px] text-slate-300">${isAr ? 'ربط آلي مع شركات الشحن المحلية وبوابات الدفع وفوترة إلكترونية متوافقة مع الأنظمة.' : 'Native Saudi payment routing, local courier webhooks, and automated ZATCA invoicing.'}</p>
            </div>
            <div class="p-3 rounded-xl bg-[#07130D]/80 border border-emerald-500/20 space-y-1">
              <div class="font-bold text-white">${isAr ? 'هندسة زيادة المبيعات' : 'Conversion Engineering'}</div>
              <p class="text-[11px] text-slate-300">${isAr ? 'شريط شراء عائم، سلة مشتريات منبثقة، وتوصيات منتجات ذكية ترفع متوسط قيمة الطلب.' : 'Sticky mobile add-to-cart, slide-out drawer, and algorithmic cross-sell suggestions.'}</p>
            </div>
          </div>
        </div>
      `
    };
  }

  // 3. DRUPAL
  if (slug === 'drupal-development') {
    return {
      brandName: isAr ? 'دروبال المؤسسي (Drupal Enterprise)' : 'Drupal Enterprise Portals',
      brandTagline: isAr ? 'بوابات المنظمات والجهات الحكومية الكبرى ذات الأمان والامتثال المتقدم' : 'High-Security Enterprise CMS & Government Digital Experience',
      accentColor: '#0678BE',
      glowColor: 'rgba(6, 120, 190, 0.45)',
      logoSvg: `<svg class="w-14 h-14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#0678BE" stroke-width="3"/>
        <path d="M50 15C49 16.5 28 46.5 28 62.5c0 12.1 9.9 22 22 22s22-9.9 22-22C72 46.5 51 16.5 50 15zm0 63c-8.8 0-16-7.2-16-16 0-9.2 11.2-28.5 16-36.5 4.8 8 16 27.3 16 36.5 0 8.8-7.2 16-16 16z" fill="#0678BE"/>
        <path d="M43 65c-2.8 0-5-2.2-5-5 0-3.9 5-11 5-11s5 7.1 5 11c0 2.8-2.2 5-5 5z" fill="#FFFFFF"/>
      </svg>`,
      techChips: isAr
        ? ['دروبال 10/11', 'صلاحيات وصول دقيقة RBAC', 'عمارة معزولة Decoupled', 'تكامل واجهات JSON:API', 'أمان حكومي صارم']
        : ['Drupal 10/11', 'Granular RBAC Roles', 'Decoupled Headless', 'JSON:API Integrations', 'Government-Grade Security'],
      kpiBadges: [
        { label: isAr ? 'معايير الأمان ISO/OWASP' : 'Security Standards', value: 'A+ Compliant', icon: '🛡️' },
        { label: isAr ? 'إدارة المحتوى المتقدم' : 'Multi-Site Governance', value: 'Enterprise', icon: '🏛️' },
        { label: isAr ? 'توافق البوابات الحكومية' : 'Gov Portal Ready', value: '100%', icon: '🇸🇦' }
      ],
      heroVisualCardHtml: `
        <div class="relative p-6 rounded-2xl glass-panel-elevated border border-[#0678BE]/50 shadow-[0_15px_40px_rgba(6,120,190,0.25)] space-y-4">
          <div class="flex items-center justify-between border-b border-emerald-950/80 pb-3">
            <div class="flex items-center gap-2.5">
              <span class="w-3 h-3 rounded-full bg-[#0678BE] animate-pulse"></span>
              <span class="text-xs font-mono font-bold text-white tracking-wider">DRUPAL-ENTERPRISE-CORE</span>
            </div>
            <span class="text-[11px] px-2 py-0.5 rounded-full bg-[#0678BE]/20 text-[#0678BE] border border-[#0678BE]/40 font-mono font-semibold">
              ${isAr ? 'أمان مؤسسي A+' : 'Gov Tier 1'}
            </span>
          </div>
          <div class="grid grid-cols-2 gap-3 text-xs">
            <div class="p-3 rounded-xl bg-[#07130D]/90 border border-emerald-500/20">
              <span class="text-[#0678BE] text-[10px] uppercase font-mono block">${isAr ? 'عزل الصلاحيات RBAC' : 'Permission Granularity'}</span>
              <span class="text-lg font-bold text-white font-mono">128 Roles</span>
              <span class="text-[10px] text-emerald-400 block">${isAr ? 'فصل تام للمسؤوليات' : 'Strict Segregation'}</span>
            </div>
            <div class="p-3 rounded-xl bg-[#07130D]/90 border border-emerald-500/20">
              <span class="text-[#E5C78B] text-[10px] uppercase font-mono block">${isAr ? 'إدارة المواقع المتعددة' : 'Multi-Domain Support'}</span>
              <span class="text-lg font-bold text-white font-mono">1 Core / N Sites</span>
              <span class="text-[10px] text-[#E5C78B] block">${isAr ? 'قاعدة أكواد موحدة' : 'Centralized Upgrades'}</span>
            </div>
          </div>
        </div>
      `,
      architectureDiagramHtml: ''
    };
  }

  // 4. MAGENTO
  if (slug === 'magento-development') {
    return {
      brandName: isAr ? 'ماجنتو / أدوبي كوميرس (Magento)' : 'Magento & Adobe Commerce',
      brandTagline: isAr ? 'منصات التجارة الإلكترونية الضخمة لقطاع التجزئة والجملة B2B / B2C' : 'Enterprise High-Volume E-Commerce & B2B/B2C Portals',
      accentColor: '#EE672F',
      glowColor: 'rgba(238, 103, 47, 0.45)',
      logoSvg: `<svg class="w-14 h-14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#EE672F" stroke-width="3"/>
        <path d="M50 18L24 33v34l10-5.8V38.8L50 29.5l16 9.3v22.4l10 5.8V33L50 18z" fill="#EE672F"/>
        <path d="M50 43.5l-8 4.6v17.4l8 4.6 8-4.6V48.1l-8-4.6z" fill="#FFFFFF"/>
      </svg>`,
      techChips: isAr
        ? ['أدوبي كوميرس', 'محرك البحث Elasticsearch', 'تعدد المخازن والمستودعات', 'بوابات B2B بالجملة', 'ربط أنظمة SAP/Oracle']
        : ['Adobe Commerce', 'Elasticsearch / OpenSearch', 'Multi-Source Inventory', 'B2B Wholesale Portals', 'ERP & SAP Sync'],
      kpiBadges: [
        { label: isAr ? 'معالجة الكتالوجات الكبرى' : 'SKU Scalability', value: '500,000+ SKUs', icon: '📦' },
        { label: isAr ? 'تزامن الطلبات اللحظي' : 'Order Throughput', value: '10K / min', icon: '⚡' },
        { label: isAr ? 'بوابة شركات B2B' : 'B2B Credit Limits', value: 'Enterprise', icon: '💼' }
      ],
      heroVisualCardHtml: `
        <div class="relative p-6 rounded-2xl glass-panel-elevated border border-[#EE672F]/50 shadow-[0_15px_40px_rgba(238,103,47,0.25)] space-y-4">
          <div class="flex items-center justify-between border-b border-emerald-950/80 pb-3">
            <div class="flex items-center gap-2.5">
              <span class="w-3 h-3 rounded-full bg-[#EE672F] animate-pulse"></span>
              <span class="text-xs font-mono font-bold text-white tracking-wider">MAGENTO-COMMERCE-CLUSTER</span>
            </div>
            <span class="text-[11px] px-2 py-0.5 rounded-full bg-[#EE672F]/20 text-[#EE672F] border border-[#EE672F]/40 font-mono font-semibold">
              ${isAr ? 'عمارة كبرى B2B' : 'Enterprise B2B'}
            </span>
          </div>
          <div class="grid grid-cols-2 gap-3 text-xs">
            <div class="p-3 rounded-xl bg-[#07130D]/90 border border-emerald-500/20">
              <span class="text-[#EE672F] text-[10px] uppercase font-mono block">${isAr ? 'فهرسة المنتجات والبحث' : 'Search & Indexing'}</span>
              <span class="text-lg font-bold text-white font-mono">ElasticSearch 8</span>
              <span class="text-[10px] text-emerald-400 block">${isAr ? 'بحث لحظي تحت 0.1 ثانية' : 'Sub-100ms Search'}</span>
            </div>
            <div class="p-3 rounded-xl bg-[#07130D]/90 border border-emerald-500/20">
              <span class="text-[#E5C78B] text-[10px] uppercase font-mono block">${isAr ? 'إدارة المستودعات MSI' : 'Multi-Source Inventory'}</span>
              <span class="text-lg font-bold text-white font-mono">12 Branches</span>
              <span class="text-[10px] text-[#E5C78B] block">${isAr ? 'تخصيص آلي للشحنات' : 'Smart Routing'}</span>
            </div>
          </div>
        </div>
      `,
      architectureDiagramHtml: ''
    };
  }

  // 5. SALLA
  if (slug === 'salla-store-development') {
    return {
      brandName: isAr ? 'منصة سلة (Salla Partner)' : 'Salla Store Architecture',
      brandTagline: isAr ? 'تصميم وبرمجة وتخصيص متاجر سلة للمتاجر السعودية والخليجية' : 'Custom Salla Twilight Development & Conversion Optimization',
      accentColor: '#7E3AF2',
      glowColor: 'rgba(126, 58, 242, 0.45)',
      logoSvg: `<svg class="w-14 h-14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#7E3AF2" stroke-width="3"/>
        <path d="M28 32h8l7 26h22l6-18H40" stroke="#00D5A5" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="45" cy="68" r="4" fill="#7E3AF2"/>
        <circle cx="63" cy="68" r="4" fill="#7E3AF2"/>
        <path d="M38 42h26" stroke="#7E3AF2" stroke-width="3" stroke-linecap="round"/>
      </svg>`,
      techChips: isAr
        ? ['محرك سلة Twilight SDK', 'قوالب CSS مخصصة', 'الربط مع الفوترة ZATCA', 'بوابات مدى وأبل باي', 'تطبيقات سلة المعتمدة']
        : ['Salla Twilight SDK', 'Custom CSS Architecture', 'ZATCA Phase 2 Invoicing', 'Mada / Tabby / Tamara', 'Salla App Integrations'],
      kpiBadges: [
        { label: isAr ? 'توافق تام مع معايير سلة' : 'Salla Platform Standard', value: '100% Verified', icon: '🇸🇦' },
        { label: isAr ? 'سرعة التصفح على الجوال' : 'Mobile Experience', value: 'Lightning', icon: '📱' },
        { label: isAr ? 'جاهزية الفاتورة الضريبية' : 'Tax & ZATCA Invoicing', value: 'Compliant', icon: '🧾' }
      ],
      heroVisualCardHtml: `
        <div class="relative p-6 rounded-2xl glass-panel-elevated border border-[#7E3AF2]/50 shadow-[0_15px_40px_rgba(126,58,242,0.25)] space-y-4">
          <div class="flex items-center justify-between border-b border-emerald-950/80 pb-3">
            <div class="flex items-center gap-2.5">
              <span class="w-3 h-3 rounded-full bg-[#00D5A5] animate-pulse"></span>
              <span class="text-xs font-mono font-bold text-white tracking-wider">SALLA-TWILIGHT-CUSTOM</span>
            </div>
            <span class="text-[11px] px-2 py-0.5 rounded-full bg-[#7E3AF2]/20 text-[#00D5A5] border border-[#00D5A5]/40 font-mono font-semibold">
              ${isAr ? 'شريك سلة تقني' : 'Twilight Certified'}
            </span>
          </div>
          <div class="grid grid-cols-2 gap-3 text-xs">
            <div class="p-3 rounded-xl bg-[#07130D]/90 border border-emerald-500/20">
              <span class="text-[#00D5A5] text-[10px] uppercase font-mono block">${isAr ? 'بوابات الدفع الفورية' : 'Payment Integrations'}</span>
              <span class="text-base font-bold text-white font-mono">Mada · Apple Pay</span>
              <span class="text-[10px] text-emerald-400 block">${isAr ? 'تقسيط تابي وتمارا' : 'Tabby & Tamara'}</span>
            </div>
            <div class="p-3 rounded-xl bg-[#07130D]/90 border border-emerald-500/20">
              <span class="text-[#E5C78B] text-[10px] uppercase font-mono block">${isAr ? 'الربط اللوجستي' : 'Shipping Webhooks'}</span>
              <span class="text-base font-bold text-white font-mono">Aramex · SMSA</span>
              <span class="text-[10px] text-[#E5C78B] block">${isAr ? 'تتبع لحظي بوليصة' : 'Automated AWB'}</span>
            </div>
          </div>
        </div>
      `,
      architectureDiagramHtml: ''
    };
  }

  // 6. ZID
  if (slug === 'zid-store-development') {
    return {
      brandName: isAr ? 'منصة زد (Zid Retail)' : 'Zid Modern Retail Commerce',
      brandTagline: isAr ? 'تطوير متاجر التجزئة الحديثة المتكاملة مع الفروع وأنظمة نقاط البيع' : 'Modern Omnichannel Retail on Zid Commerce Platform',
      accentColor: '#845EC2',
      glowColor: 'rgba(132, 94, 194, 0.45)',
      logoSvg: `<svg class="w-14 h-14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#845EC2" stroke-width="3"/>
        <path d="M30 35h40l-28 30h28" stroke="#845EC2" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="68" cy="35" r="4" fill="#FF6F91"/>
      </svg>`,
      techChips: isAr
        ? ['منظومة زد المتكاملة', 'ربط نقاط البيع POS', 'إدارة سلاسل التجزئة', 'حلول الدفع الموحدة', 'تكاملات زد شيب']
        : ['Zid Ecosystem', 'Omnichannel POS Sync', 'Retail Inventory Routing', 'Unified Zid Pay', 'Zid Ship Logistics'],
      kpiBadges: [
        { label: isAr ? 'تكامل المخزون مع الفروع' : 'Omnichannel Sync', value: '100% Real-Time', icon: '🏪' },
        { label: isAr ? 'دعم حلول التجزئة الكبرى' : 'Retail Ready', value: 'Scalable', icon: '🛍️' },
        { label: isAr ? 'تجربة مستخدم فاخرة' : 'Bespoke UX', value: 'Elite', icon: '✨' }
      ],
      heroVisualCardHtml: `
        <div class="relative p-6 rounded-2xl glass-panel-elevated border border-[#845EC2]/50 shadow-[0_15px_40px_rgba(132,94,194,0.25)] space-y-4">
          <div class="flex items-center justify-between border-b border-emerald-950/80 pb-3">
            <div class="flex items-center gap-2.5">
              <span class="w-3 h-3 rounded-full bg-[#845EC2] animate-pulse"></span>
              <span class="text-xs font-mono font-bold text-white tracking-wider">ZID-OMNICHANNEL-SUITE</span>
            </div>
            <span class="text-[11px] px-2 py-0.5 rounded-full bg-[#845EC2]/20 text-[#845EC2] border border-[#845EC2]/40 font-mono font-semibold">
              ${isAr ? 'تجزئة موحدة' : 'Retail Unified'}
            </span>
          </div>
          <div class="grid grid-cols-2 gap-3 text-xs">
            <div class="p-3 rounded-xl bg-[#07130D]/90 border border-emerald-500/20">
              <span class="text-[#845EC2] text-[10px] uppercase font-mono block">${isAr ? 'تزامن نقاط البيع POS' : 'POS Branch Sync'}</span>
              <span class="text-base font-bold text-white font-mono">Live Sync</span>
              <span class="text-[10px] text-emerald-400 block">${isAr ? 'مخزون موحد للفروع' : 'Unified Stock'}</span>
            </div>
            <div class="p-3 rounded-xl bg-[#07130D]/90 border border-emerald-500/20">
              <span class="text-[#E5C78B] text-[10px] uppercase font-mono block">${isAr ? 'دعم الدفع المحلي' : 'Payment Gateways'}</span>
              <span class="text-base font-bold text-white font-mono">Zid Pay</span>
              <span class="text-[10px] text-[#E5C78B] block">${isAr ? 'مدى وأبل باي فوري' : 'Zero Friction'}</span>
            </div>
          </div>
        </div>
      `,
      architectureDiagramHtml: ''
    };
  }

  // 7. OPENCART
  if (slug === 'opencart-development') {
    return {
      brandName: isAr ? 'أوبن كارت (OpenCart)' : 'OpenCart Architecture',
      brandTagline: isAr ? 'تطوير متاجر برمجية خفيفة وقابلة للتوسع بملكية كاملة بدون رسوم دورية' : 'Lightweight Modular E-Commerce with 100% Open Source Ownership',
      accentColor: '#229ac8',
      glowColor: 'rgba(34, 154, 200, 0.45)',
      logoSvg: `<svg class="w-14 h-14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#229ac8" stroke-width="3"/>
        <path d="M25 30h12l8 32h26l8-22H42" stroke="#229ac8" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="48" cy="70" r="4" fill="#229ac8"/>
        <circle cx="70" cy="70" r="4" fill="#229ac8"/>
      </svg>`,
      techChips: isAr
        ? ['OpenCart 4 المعياري', 'بنية معيارية OCMod', 'تعدد المتاجر والعملات', 'بوابات دفع مخصصة', 'سرعة استجابة فائقة']
        : ['OpenCart 4 Native', 'Modular OCMod / VQMod', 'Multi-Store Architecture', 'Custom Gateways', 'Low Resource Footprint'],
      kpiBadges: [
        { label: isAr ? 'ملكية الكود والمصدر' : 'Source Code Ownership', value: '100% Free', icon: '🔓' },
        { label: isAr ? 'استهلاك موارد الخادم' : 'Server Resource Usage', value: 'Ultra Low', icon: '⚡' },
        { label: isAr ? 'رسوم اشتراك متكررة' : 'Recurring Platform Fees', value: '$0 / Month', icon: '💰' }
      ],
      heroVisualCardHtml: `
        <div class="relative p-6 rounded-2xl glass-panel-elevated border border-[#229ac8]/50 shadow-[0_15px_40px_rgba(34,154,200,0.25)] space-y-4">
          <div class="flex items-center justify-between border-b border-emerald-950/80 pb-3">
            <div class="flex items-center gap-2.5">
              <span class="w-3 h-3 rounded-full bg-[#229ac8] animate-pulse"></span>
              <span class="text-xs font-mono font-bold text-white tracking-wider">OPENCART-MODULAR-CORE</span>
            </div>
            <span class="text-[11px] px-2 py-0.5 rounded-full bg-[#229ac8]/20 text-[#229ac8] border border-[#229ac8]/40 font-mono font-semibold">
              ${isAr ? 'بدون رسوم دورية' : 'Zero SaaS Fees'}
            </span>
          </div>
          <div class="grid grid-cols-2 gap-3 text-xs">
            <div class="p-3 rounded-xl bg-[#07130D]/90 border border-emerald-500/20">
              <span class="text-[#229ac8] text-[10px] uppercase font-mono block">${isAr ? 'تعدد المتاجر Multi-Store' : 'Multi-Store Setup'}</span>
              <span class="text-base font-bold text-white font-mono">1 DB / N Stores</span>
              <span class="text-[10px] text-emerald-400 block">${isAr ? 'لوحة تحكم مركزية' : 'Unified Admin'}</span>
            </div>
            <div class="p-3 rounded-xl bg-[#07130D]/90 border border-emerald-500/20">
              <span class="text-[#E5C78B] text-[10px] uppercase font-mono block">${isAr ? 'سرعة التصفح' : 'Load Time'}</span>
              <span class="text-base font-bold text-white font-mono">0.65s</span>
              <span class="text-[10px] text-[#E5C78B] block">${isAr ? 'خفيف على الخادم' : 'High Throughput'}</span>
            </div>
          </div>
        </div>
      `,
      architectureDiagramHtml: ''
    };
  }

  // 8. MOBILE APPS (iOS, Android, Cross-Platform)
  if (slug.includes('app-development') || slug.includes('mobile-applications')) {
    const isIOS = slug.includes('ios');
    const isAndroid = slug.includes('android');
    return {
      brandName: isIOS
        ? (isAr ? 'تطبيقات iOS وApple' : 'Native iOS & Apple Ecosystem')
        : isAndroid
        ? (isAr ? 'تطبيقات أندرويد (Google Android)' : 'Native Android Development')
        : (isAr ? 'تطبيقات الجوال الذكية (iOS & Android)' : 'Cross-Platform Mobile Apps (Flutter & React Native)'),
      brandTagline: isAr ? 'تطبيقات جوال سريعة، مؤمنة، بتجربة مستخدم فاخرة متوافقة مع متجر التطبيقات' : 'High-Performance Mobile Apps Built with Swift, Kotlin, and Modern Cross-Platform Engines',
      accentColor: isIOS ? '#A2AAAD' : isAndroid ? '#3DDC84' : '#02569B',
      glowColor: isIOS ? 'rgba(162, 170, 173, 0.45)' : isAndroid ? 'rgba(61, 220, 132, 0.45)' : 'rgba(2, 86, 155, 0.45)',
      logoSvg: isIOS
        ? `<svg class="w-14 h-14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#A2AAAD" stroke-width="3"/>
            <path d="M57.6 30.5c2.3-2.9 3.9-6.9 3.5-11-3.4.2-7.4 2.3-9.8 5.1-2.1 2.5-4 6.5-3.5 10.5 3.8.3 7.5-1.8 9.8-4.6zM61.1 44.5c-4.8-.3-8.8 2.8-11.1 2.8-2.3 0-5.8-2.6-9.6-2.6-4.9 0-9.5 2.9-12 7.4-5.2 9-1.3 22.3 3.6 29.5 2.4 3.5 5.3 7.4 9.1 7.2 3.6-.2 5-2.3 9.4-2.3 4.3 0 5.6 2.3 9.4 2.2 3.9-.1 6.4-3.5 8.8-7 2.8-4 3.9-8 4-8.2-.1-.1-7.7-3-7.8-11.8-.1-7.4 6-10.9 6.3-11.1-3.5-5.1-8.8-5.8-10.1-6.1z" fill="#FFFFFF"/>
          </svg>`
        : isAndroid
        ? `<svg class="w-14 h-14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#3DDC84" stroke-width="3"/>
            <path d="M36 28l-5-9c-.3-.5-.9-.7-1.4-.4-.5.3-.7.9-.4 1.4l5.2 9.3C27.9 33.1 23 41.5 23 51h54c0-9.5-4.9-17.9-11.4-21.7L70.8 20c.3-.5.1-1.1-.4-1.4-.5-.3-1.1-.1-1.4.4l-5 9C59.9 26.7 55.1 26 50 26s-9.9.7-14 2zM37 42c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm26 0c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zM23 55v21c0 2.2 1.8 4 4 4h4v11c0 2.2 1.8 4 4 4s4-1.8 4-4V80h22v11c0 2.2 1.8 4 4 4s4-1.8 4-4V80h4c2.2 0 4-1.8 4-4V55H23z" fill="#3DDC84"/>
          </svg>`
        : `<svg class="w-14 h-14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#02569B" stroke-width="3"/>
            <path d="M50 18L32 50l10 18 26-26-18-24z" fill="#02569B"/>
            <path d="M50 82L68 50l-10-18-26 26 18 24z" fill="#00B0FF"/>
          </svg>`,
      techChips: isIOS
        ? (isAr ? ['سويفت Swift 6', 'واجهات SwiftUI', 'تخزين آمن Keychain', 'إشعارات APNs', 'اعتماد Apple App Store'] : ['Swift 6 Native', 'SwiftUI Architecture', 'Keychain Security', 'APNs Push Notifications', 'App Store Guidelines'])
        : isAndroid
        ? (isAr ? ['كوتلن Kotlin', 'Jetpack Compose', 'تصميم Material 3', 'أمان بيومتري Biometric', 'نشر Google Play'] : ['Kotlin Modern', 'Jetpack Compose', 'Material 3 Design', 'Biometric Security', 'Google Play Deployments'])
        : (isAr ? ['فلاتر Flutter 3', 'ريأكت نيتف React Native', 'كود مصدري موحد', 'أداء 60fps أصلي', 'ربط واجهات REST/GraphQL'] : ['Flutter 3 Engine', 'React Native Modern', 'Single Codebase', '60fps Native Feel', 'REST/GraphQL Sync']),
      kpiBadges: [
        { label: isAr ? 'أداء الشاشة ومعدل الإطارات' : 'UI Frame Rate', value: '60 / 120 fps', icon: '⚡' },
        { label: isAr ? 'اعتماد المتجر الرسمي' : 'Store Acceptance', value: '100% Pass', icon: '📲' },
        { label: isAr ? 'العمل بدون إنترنت' : 'Offline Capability', value: 'Local Cache', icon: '💾' }
      ],
      heroVisualCardHtml: `
        <div class="relative p-6 rounded-2xl glass-panel-elevated border border-emerald-500/40 shadow-[0_15px_40px_rgba(16,185,129,0.2)] space-y-4">
          <div class="flex items-center justify-between border-b border-emerald-950/80 pb-3">
            <div class="flex items-center gap-2.5">
              <span class="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
              <span class="text-xs font-mono font-bold text-white tracking-wider">MOBILE-APP-FRAMEWORK</span>
            </div>
            <span class="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono font-semibold">
              ${isAr ? 'نظام معتمد' : 'Production Grade'}
            </span>
          </div>
          <div class="grid grid-cols-2 gap-3 text-xs">
            <div class="p-3 rounded-xl bg-[#07130D]/90 border border-emerald-500/20">
              <span class="text-emerald-400 text-[10px] uppercase font-mono block">${isAr ? 'زمن الاستجابة' : 'Touch Response'}</span>
              <span class="text-base font-bold text-white font-mono">&lt; 16ms</span>
              <span class="text-[10px] text-emerald-400 block">${isAr ? 'سلاسة فائقة 60fps' : 'Zero Stutter'}</span>
            </div>
            <div class="p-3 rounded-xl bg-[#07130D]/90 border border-emerald-500/20">
              <span class="text-[#E5C78B] text-[10px] uppercase font-mono block">${isAr ? 'المصادقة الأمنية' : 'Security Layer'}</span>
              <span class="text-base font-bold text-white font-mono">FaceID / TouchID</span>
              <span class="text-[10px] text-[#E5C78B] block">${isAr ? 'تشفير العتاد' : 'Hardware Enclave'}</span>
            </div>
          </div>
        </div>
      `,
      architectureDiagramHtml: ''
    };
  }

  // 9. ERP / CRM / SOFTWARE SYSTEMS
  if (slug.includes('erp') || slug.includes('crm') || slug.includes('pos') || slug.includes('hr-systems') || slug.includes('inventory') || slug.includes('software')) {
    return {
      brandName: isAr ? 'الأنظمة والبرمجيات المؤسسية (ERP & Business Systems)' : 'Enterprise Software & ERP Solutions',
      brandTagline: isAr ? 'حلول برمجية متقدمة لأتمتة العمليات، إدارة الموارد، الفوترة، وربط الفروع' : 'Scalable Enterprise Resource Planning, CRM Pipelines & Cloud Database Engineering',
      accentColor: '#10B981',
      glowColor: 'rgba(16, 185, 129, 0.45)',
      logoSvg: `<svg class="w-14 h-14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#10B981" stroke-width="3"/>
        <rect x="25" y="25" width="20" height="20" rx="4" fill="#064E3B" stroke="#10B981" stroke-width="2"/>
        <rect x="55" y="25" width="20" height="20" rx="4" fill="#064E3B" stroke="#10B981" stroke-width="2"/>
        <rect x="25" y="55" width="20" height="20" rx="4" fill="#064E3B" stroke="#10B981" stroke-width="2"/>
        <rect x="55" y="55" width="20" height="20" rx="4" fill="#064E3B" stroke="#10B981" stroke-width="2"/>
        <path d="M45 35h10M45 65h10M35 45v10M65 45v10" stroke="#E5C78B" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,
      techChips: isAr
        ? ['تخطيط الموارد ERP', 'قواعد بيانات PostgreSQL', 'فوترة إلكترونية ZATCA', 'أتمتة العمليات وتدفق البيانات', 'تقارير مالية ولوحات تحكم']
        : ['ERP Resource Planning', 'PostgreSQL Relational DB', 'ZATCA E-Invoicing Phase 2', 'Automated Workflows', 'Financial BI Dashboards'],
      kpiBadges: [
        { label: isAr ? 'دقة البيانات والتقارير' : 'Reporting Accuracy', value: '100% Real-Time', icon: '📊' },
        { label: isAr ? 'كفاءة تشغيل العمليات' : 'Workflow Efficiency', value: '+65%', icon: '⚙️' },
        { label: isAr ? 'الامتثال للأنظمة المالية' : 'Regulatory Compliance', value: 'Audited', icon: '📜' }
      ],
      heroVisualCardHtml: `
        <div class="relative p-6 rounded-2xl glass-panel-elevated border border-emerald-500/40 shadow-[0_15px_40px_rgba(16,185,129,0.2)] space-y-4">
          <div class="flex items-center justify-between border-b border-emerald-950/80 pb-3">
            <div class="flex items-center gap-2.5">
              <span class="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
              <span class="text-xs font-mono font-bold text-white tracking-wider">ENTERPRISE-CORE-SUITE</span>
            </div>
            <span class="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono font-semibold">
              ${isAr ? 'نظام متكامل' : 'High Security'}
            </span>
          </div>
          <div class="grid grid-cols-2 gap-3 text-xs">
            <div class="p-3 rounded-xl bg-[#07130D]/90 border border-emerald-500/20">
              <span class="text-emerald-400 text-[10px] uppercase font-mono block">${isAr ? 'قاعدة البيانات المركزية' : 'Relational DB'}</span>
              <span class="text-base font-bold text-white font-mono">PostgreSQL / ACID</span>
              <span class="text-[10px] text-emerald-400 block">${isAr ? 'سلامة المعاملات المالية' : 'Zero Loss Guarantee'}</span>
            </div>
            <div class="p-3 rounded-xl bg-[#07130D]/90 border border-emerald-500/20">
              <span class="text-[#E5C78B] text-[10px] uppercase font-mono block">${isAr ? 'الفوترة المعتمدة' : 'Compliance'}</span>
              <span class="text-base font-bold text-white font-mono">ZATCA Phase 2</span>
              <span class="text-[10px] text-[#E5C78B] block">${isAr ? 'تشفير QR وفاتورة ضريبية' : 'XML & Cryptographic Stamp'}</span>
            </div>
          </div>
        </div>
      `,
      architectureDiagramHtml: ''
    };
  }

  // 10. TENDER PROPOSALS & SAUDI ETIMAD
  if (slug.includes('tender') || slug.includes('proposal') || slug.includes('etimad') || slug.includes('rfp') || slug.includes('bid')) {
    return {
      brandName: isAr ? 'المناقصات الحكومية والعروض الفنية (Saudi Etimad & Tenders)' : 'Tender Proposals & Saudi Etimad Procurement',
      brandTagline: isAr ? 'إعداد العروض الفنية الاحترافية، مصفوفات الامتثال 100%، وتدقيق Red Team بدون استبعاد فني' : 'Zero-Defect Technical Proposals, Compliance Matrices & Government Tender Governance',
      accentColor: '#C6A15B',
      glowColor: 'rgba(198, 161, 91, 0.45)',
      logoSvg: `<svg class="w-14 h-14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#C6A15B" stroke-width="3"/>
        <path d="M35 25h30c2.2 0 4 1.8 4 4v42c0 2.2-1.8 4-4 4H35c-2.2 0-4-1.8-4-4V29c0-2.2 1.8-4 4-4z" fill="#0B1F16" stroke="#E5C78B" stroke-width="2.5"/>
        <path d="M40 37h20M40 45h20M40 53h14" stroke="#C6A15B" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M60 62l5 5 10-10" stroke="#10B981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      techChips: isAr
        ? ['نظام المنافسات والمشتريات السعودي', 'منصة اعتماد الحكومية Etimad', 'مصفوفة الامتثال 100%', 'تدقيق الفريق الأحمر Red Team', 'منهجيات التنفيذ الفنية']
        : ['Saudi GTPL Procurement Law', 'Saudi Etimad Platform', '100% Traceable Compliance Matrix', 'Red Team Bid QA Audit', 'Technical Methodology Architecture'],
      kpiBadges: [
        { label: isAr ? 'سجل تفادي الاستبعاد الفني' : 'Technical Disqualification Rate', value: isAr ? '0% استبعاد شكلي' : '0.0% Rejection', icon: '🏆' },
        { label: isAr ? 'استيفاء بنود كراسة الشروط' : 'RFP Requirements Coverage', value: isAr ? '100% استيفاء كامل' : '100% Full Pass', icon: '📋' },
        { label: isAr ? 'خبرة مناقصات معتمدة' : 'Verified Bidding Experience', value: isAr ? '+400 مناقصة' : '400+ Tenders', icon: '🇸🇦' }
      ],
      heroVisualCardHtml: `
        <div class="relative p-6 rounded-2xl glass-panel-elevated border border-[#C6A15B]/50 shadow-[0_15px_40px_rgba(198,161,91,0.25)] space-y-4">
          <div class="flex items-center justify-between border-b border-emerald-950/80 pb-3">
            <div class="flex items-center gap-2.5">
              <span class="w-3 h-3 rounded-full bg-[#E5C78B] animate-pulse"></span>
              <span class="text-xs font-mono font-bold text-white tracking-wider">ETIMAD-GOV-COMPLIANCE</span>
            </div>
            <span class="text-[11px] px-2 py-0.5 rounded-full bg-[#C6A15B]/20 text-[#E5C78B] border border-[#C6A15B]/40 font-mono font-semibold">
              ${isAr ? 'مطابقة معتمدة 100%' : '100% Compliant'}
            </span>
          </div>
          <div class="grid grid-cols-2 gap-3 text-xs">
            <div class="p-3 rounded-xl bg-[#07130D]/90 border border-emerald-500/20">
              <span class="text-[#E5C78B] text-[10px] uppercase font-mono block">${isAr ? 'مصفوفة الامتثال الفني' : 'Compliance Traceability'}</span>
              <span class="text-base font-bold text-white font-mono">145 / 145 Clauses</span>
              <span class="text-[10px] text-emerald-400 block">${isAr ? 'بدون أي تحفظ أو نقص' : 'Zero Ambiguity'}</span>
            </div>
            <div class="p-3 rounded-xl bg-[#07130D]/90 border border-emerald-500/20">
              <span class="text-emerald-400 text-[10px] uppercase font-mono block">${isAr ? 'تدقيق الجودة الميداني' : 'Pre-Submission Review'}</span>
              <span class="text-base font-bold text-white font-mono">Red Team Audit</span>
              <span class="text-[10px] text-emerald-400 block">${isAr ? 'تقييم محايد وفق المعايير' : 'Top Quartile Score'}</span>
            </div>
          </div>
        </div>
      `,
      architectureDiagramHtml: ''
    };
  }

  // 11. TECHNICAL SEO & SPEED OPTIMIZATION
  if (slug === 'technical-seo' || slug === 'speed-optimization' || slug === 'seo-audits') {
    return {
      brandName: isAr ? 'السيو التقني ومؤشرات الأداء (Core Web Vitals & SEO)' : 'Google Technical SEO & Core Web Vitals',
      brandTagline: isAr ? 'هندسة الفهرسة المتقدمة، تحسين سرعة التحميل، وبنية البيانات المنظمة' : 'Lighthouse 100/100 Tuning, Schema.org Markup & Organic Search Dominance',
      accentColor: '#10B981',
      glowColor: 'rgba(16, 185, 129, 0.45)',
      logoSvg: `<svg class="w-14 h-14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#10B981" stroke-width="3"/>
        <path d="M50 22v6M28 50h-6M78 50h-6M34 34l5 5M66 34l-5 5" stroke="#E5C78B" stroke-width="3" stroke-linecap="round"/>
        <path d="M50 50l12-14" stroke="#10B981" stroke-width="3.5" stroke-linecap="round"/>
        <circle cx="50" cy="50" r="5" fill="#E5C78B"/>
        <path d="M26 68a28 28 0 0148 0" stroke="#10B981" stroke-width="3" stroke-linecap="round"/>
      </svg>`,
      techChips: isAr
        ? ['مؤشرات الويب الأساسية LCP/INP', 'ترميز Schema.org المنظم', 'فهرسة صفحات الجوال Google Mobile', 'ملفات Sitemap & Robots', 'توزيع شبكات Cloudflare Edge']
        : ['Core Web Vitals LCP/INP', 'Schema.org JSON-LD', 'Mobile-First Indexing', 'Dynamic XML Sitemaps', 'Cloudflare Edge Caching'],
      kpiBadges: [
        { label: isAr ? 'مؤشر أداء Google PageSpeed' : 'PageSpeed Mobile', value: '98-100/100', icon: '⚡' },
        { label: isAr ? 'زمن الاستجابة التفاعلية INP' : 'Interaction INP', value: '< 50ms', icon: '⏱️' },
        { label: isAr ? 'مؤشر استقرار التنسيق CLS' : 'Layout Stability CLS', value: '0.00', icon: '🎯' }
      ],
      heroVisualCardHtml: `
        <div class="relative p-6 rounded-2xl glass-panel-elevated border border-emerald-500/40 shadow-[0_15px_40px_rgba(16,185,129,0.25)] space-y-4">
          <div class="flex items-center justify-between border-b border-emerald-950/80 pb-3">
            <div class="flex items-center gap-2.5">
              <span class="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
              <span class="text-xs font-mono font-bold text-white tracking-wider">LIGHTHOUSE-AUDIT-VERIFIED</span>
            </div>
            <span class="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-mono font-semibold">
              ${isAr ? 'درجة كاملة 100%' : '100% Score'}
            </span>
          </div>
          <div class="grid grid-cols-2 gap-3 text-xs">
            <div class="p-3 rounded-xl bg-[#07130D]/90 border border-emerald-500/20">
              <span class="text-emerald-400 text-[10px] uppercase font-mono block">${isAr ? 'زمن تحميل المحتوى LCP' : 'Largest Contentful Paint'}</span>
              <span class="text-lg font-bold text-white font-mono">0.65s</span>
              <span class="text-[10px] text-emerald-400 block">${isAr ? 'أخضر فائق السرعة' : 'Top 1% Global Web'}</span>
            </div>
            <div class="p-3 rounded-xl bg-[#07130D]/90 border border-emerald-500/20">
              <span class="text-[#E5C78B] text-[10px] uppercase font-mono block">${isAr ? 'البيانات المنظمة Schema' : 'Structured Data'}</span>
              <span class="text-lg font-bold text-white font-mono">Valid JSON-LD</span>
              <span class="text-[10px] text-[#E5C78B] block">${isAr ? 'ظهور مميز في جوجل' : 'Rich Snippets Active'}</span>
            </div>
          </div>
        </div>
      `,
      architectureDiagramHtml: ''
    };
  }

  // 12. CORPORATE & BUSINESS WEBSITES
  if (slug === 'corporate-websites' || slug === 'business-websites') {
    return {
      brandName: isAr ? 'بوابات الشركات والمجموعات القابضة' : 'Corporate Enterprise Portals',
      brandTagline: isAr ? 'تصميم بوابات مؤسسية راقية تعكس المكانة القيادية للمنشأة وتدعم المستثمرين' : 'High-Stakes Corporate Platforms for Holdings, Contracting & Investment Groups',
      accentColor: '#C6A15B',
      glowColor: 'rgba(198, 161, 91, 0.45)',
      logoSvg: `<svg class="w-14 h-14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#C6A15B" stroke-width="3"/>
        <path d="M26 75V35l24-15 24 15v40H26z" stroke="#E5C78B" stroke-width="2.5" fill="#0B1F16"/>
        <rect x="36" y="45" width="8" height="8" rx="1" fill="#C6A15B"/>
        <rect x="56" y="45" width="8" height="8" rx="1" fill="#C6A15B"/>
        <rect x="36" y="58" width="8" height="8" rx="1" fill="#C6A15B"/>
        <rect x="56" y="58" width="8" height="8" rx="1" fill="#C6A15B"/>
      </svg>`,
      techChips: isAr
        ? ['واجهات ثنائية اللغة RTL/LTR', 'حماية مؤسسية مشددة', 'علاقات المستثمرين والحوكمة', 'أداء خادم فائق السرعة', 'أكواد مخصصة نظيفة']
        : ['Bilingual Arabic/English RTL', 'Enterprise Governance Hub', 'Investor Relations Modules', 'Sub-second Edge CDN', 'Clean Semantic Architecture'],
      kpiBadges: [
        { label: isAr ? 'الانطباع والهوية الرقمية' : 'Brand Authority', value: 'Tier 1 Prestige', icon: '🏛️' },
        { label: isAr ? 'جاهزية علاقات المستثمرين' : 'Investor Relations', value: 'Compliant', icon: '💼' },
        { label: isAr ? 'الامتثال للمحتوى ثنائي اللغة' : 'Bilingual Precision', value: '100% Arabic/EN', icon: '🌐' }
      ],
      heroVisualCardHtml: `
        <div class="relative p-6 rounded-2xl glass-panel-elevated border border-[#C6A15B]/50 shadow-[0_15px_40px_rgba(198,161,91,0.25)] space-y-4">
          <div class="flex items-center justify-between border-b border-emerald-950/80 pb-3">
            <div class="flex items-center gap-2.5">
              <span class="w-3 h-3 rounded-full bg-[#E5C78B] animate-pulse"></span>
              <span class="text-xs font-mono font-bold text-white tracking-wider">ENTERPRISE-CORPORATE-SUITE</span>
            </div>
            <span class="text-[11px] px-2 py-0.5 rounded-full bg-[#C6A15B]/20 text-[#E5C78B] border border-[#C6A15B]/40 font-mono font-semibold">
              ${isAr ? 'بوابة شركات قابضة' : 'Holding Group'}
            </span>
          </div>
          <div class="grid grid-cols-2 gap-3 text-xs">
            <div class="p-3 rounded-xl bg-[#07130D]/90 border border-emerald-500/20">
              <span class="text-[#E5C78B] text-[10px] uppercase font-mono block">${isAr ? 'دعم الهوية الثنائية' : 'Bilingual Engine'}</span>
              <span class="text-base font-bold text-white font-mono">AR (RTL) / EN (LTR)</span>
              <span class="text-[10px] text-emerald-400 block">${isAr ? 'خطوط عربية فاخرة' : 'Zero Shift'}</span>
            </div>
            <div class="p-3 rounded-xl bg-[#07130D]/90 border border-emerald-500/20">
              <span class="text-emerald-400 text-[10px] uppercase font-mono block">${isAr ? 'الأمان المؤسسي' : 'Security Posture'}</span>
              <span class="text-base font-bold text-white font-mono">TLS 1.3 / Strict CSP</span>
              <span class="text-[10px] text-emerald-400 block">${isAr ? 'شهادة SSL وحماية متطورة' : 'Zero Vulnerability'}</span>
            </div>
          </div>
        </div>
      `,
      architectureDiagramHtml: ''
    };
  }

  // 13. TENDER COMPLIANCE MATRIX SPECIFIC
  if (slug === 'tender-compliance-matrix') {
    return {
      brandName: isAr ? 'مصفوفة الامتثال الفني للمناقصات (Compliance Matrix)' : '100% Traceable Tender Compliance Matrix',
      brandTagline: isAr ? 'توثيق دقيق بنداً ببند لكراسة الشروط والمواصفات لضمان القبول الكامل وتفادي الاستبعاد' : 'Clause-by-Clause Requirement Mapping for Guaranteed Evaluation Scores',
      accentColor: '#C6A15B',
      glowColor: 'rgba(198, 161, 91, 0.45)',
      logoSvg: `<svg class="w-14 h-14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#C6A15B" stroke-width="3"/>
        <path d="M28 28h44v44H28z" stroke="#E5C78B" stroke-width="2.5" fill="#0B1F16"/>
        <path d="M28 42h44M28 56h44M42 28v44M56 28v44" stroke="#C6A15B" stroke-width="1.5"/>
        <path d="M33 35l4 4 6-6M47 49l4 4 6-6M61 63l4 4 6-6" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      techChips: isAr
        ? ['تتبع كامل 100% للمتطلبات', 'فهرسة كراسة الشروط RFP', 'تحديد المتطلبات الإلزامية M', 'توثيق وثائق الإثبات والمرفقات', 'مراجعة التدقيق المزدوج QA']
        : ['100% Requirement Traceability', 'RFP Clause Cross-Referencing', 'Mandatory vs Scored Weighting', 'Documentary Evidence Linking', 'Dual-Auditor Verification'],
      kpiBadges: [
        { label: isAr ? 'معدل التغطية الفنية' : 'Requirement Coverage', value: '100% Zero-Defect', icon: '📋' },
        { label: isAr ? 'سجل الاستبعاد الشكلي' : 'Disqualification Track Record', value: '0% Rejection', icon: '🛡️' },
        { label: isAr ? 'سهولة تقييم اللجنة' : 'Committee Audit Ease', value: 'Direct Page Mapping', icon: '🔎' }
      ],
      heroVisualCardHtml: `
        <div class="relative p-6 rounded-2xl glass-panel-elevated border border-[#C6A15B]/50 shadow-[0_15px_40px_rgba(198,161,91,0.25)] space-y-4">
          <div class="flex items-center justify-between border-b border-emerald-950/80 pb-3">
            <div class="flex items-center gap-2.5">
              <span class="w-3 h-3 rounded-full bg-[#10B981] animate-pulse"></span>
              <span class="text-xs font-mono font-bold text-white tracking-wider">COMPLIANCE-MATRIX-ENGINE</span>
            </div>
            <span class="text-[11px] px-2 py-0.5 rounded-full bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40 font-mono font-semibold">
              ${isAr ? 'استيفاء 100%' : '100% Compliant'}
            </span>
          </div>
          <div class="grid grid-cols-2 gap-3 text-xs">
            <div class="p-3 rounded-xl bg-[#07130D]/90 border border-emerald-500/20">
              <span class="text-[#E5C78B] text-[10px] uppercase font-mono block">${isAr ? 'البنود الإلزامية بالكراسة' : 'Mandatory RFP Clauses'}</span>
              <span class="text-base font-bold text-white font-mono">145 / 145 Complied</span>
              <span class="text-[10px] text-emerald-400 block">${isAr ? 'مع الإشارة لصفحات العرض' : 'Direct Page References'}</span>
            </div>
            <div class="p-3 rounded-xl bg-[#07130D]/90 border border-emerald-500/20">
              <span class="text-emerald-400 text-[10px] uppercase font-mono block">${isAr ? 'حالة التحفظات الفنية' : 'Technical Reservations'}</span>
              <span class="text-base font-bold text-white font-mono">0 Reservations</span>
              <span class="text-[10px] text-emerald-400 block">${isAr ? 'أمان قانوني وفني تام' : 'Full Conformance'}</span>
            </div>
          </div>
        </div>
      `,
      architectureDiagramHtml: ''
    };
  }

  // 14. DEFAULT / WEB / MARKETING
  return {
    brandName: isAr ? 'الحلول الرقمية والاستشارات (Digital Solutions & SEO)' : 'Specialized Engineering & Digital Strategy',
    brandTagline: isAr ? 'حلول تقنية متقدمة تلبي أعلى معايير الجودة والأداء والنتائج الملموسة' : 'High-Performance Architecture Engineered for Measurable Business Growth',
    accentColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.45)',
    logoSvg: `<svg class="w-14 h-14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#10B981" stroke-width="3"/>
      <path d="M30 65l12-16 12 8 16-22" stroke="#E5C78B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="70" cy="35" r="4" fill="#10B981"/>
    </svg>`,
    techChips: isAr
      ? ['السيو التقني المتقدم', 'تحسين Core Web Vitals', 'البيانات المنظمة Schema.org', 'استراتيجيات التحويل', 'أداء عالي السرعة']
      : ['Technical SEO Audit', 'Core Web Vitals 95+', 'Structured Schema.org', 'Conversion Optimization', 'Edge Infrastructure'],
    kpiBadges: [
      { label: isAr ? 'مؤشرات الأداء القياسية' : 'Performance Benchmark', value: '98+ Score', icon: '⚡' },
      { label: isAr ? 'أمان وجودة التنفيذ' : 'Quality Assurance', value: 'Production Grade', icon: '🛡️' },
      { label: isAr ? 'النتائج التجارية' : 'Business Value', value: 'High ROI', icon: '📈' }
    ],
    heroVisualCardHtml: `
      <div class="relative p-6 rounded-2xl glass-panel-elevated border border-emerald-500/40 shadow-[0_15px_40px_rgba(16,185,129,0.2)] space-y-4">
        <div class="flex items-center justify-between border-b border-emerald-950/80 pb-3">
          <div class="flex items-center gap-2.5">
            <span class="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
            <span class="text-xs font-mono font-bold text-white tracking-wider">ENGINEERING-STANDARD</span>
          </div>
          <span class="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono font-semibold">
            ${isAr ? 'معايير عالمية' : 'Verified Quality'}
          </span>
        </div>
        <div class="grid grid-cols-2 gap-3 text-xs">
          <div class="p-3 rounded-xl bg-[#07130D]/90 border border-emerald-500/20">
            <span class="text-emerald-400 text-[10px] uppercase font-mono block">${isAr ? 'مؤشر الجودة الفنية' : 'Quality Metric'}</span>
            <span class="text-base font-bold text-white font-mono">99 / 100</span>
            <span class="text-[10px] text-emerald-400 block">${isAr ? 'كود نقي بدون أخطاء' : 'Zero Defect'}</span>
          </div>
          <div class="p-3 rounded-xl bg-[#07130D]/90 border border-emerald-500/20">
            <span class="text-[#E5C78B] text-[10px] uppercase font-mono block">${isAr ? 'التوافق والجاهزية' : 'Compatibility'}</span>
            <span class="text-base font-bold text-white font-mono">RTL & LTR</span>
            <span class="text-[10px] text-[#E5C78B] block">${isAr ? 'تناسق كامل على الهواتف' : 'Mobile Responsive'}</span>
          </div>
        </div>
      </div>
    `,
    architectureDiagramHtml: ''
  };
}
