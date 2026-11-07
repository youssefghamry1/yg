/**
 * Bespoke Vector SVG Logos for All 35 Saudi Government & Enterprise Tender Entities
 * Styled with Saudi Green, Sovereign Gold, Emerald, and Deep Velvet Dark Glass aesthetics.
 */

export interface EntityLogoDef {
  tenderId: string;
  entityKey: string;
  nameAr: string;
  nameEn: string;
  shortCode: string;
  primaryColor: string;
  glowColor: string;
  svg: string;
}

export const ENTITY_LOGOS: Record<string, EntityLogoDef> = {
  // 1. هيئة الخبراء بمجلس الوزراء
  'tender-01-khabeer': {
    tenderId: 'tender-01-khabeer',
    entityKey: 'council-of-ministers',
    nameAr: 'هيئة الخبراء بمجلس الوزراء',
    nameEn: 'Bureau of Experts at the Council of Ministers',
    shortCode: 'BOE',
    primaryColor: '#C6A15B',
    glowColor: 'rgba(198, 161, 91, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#C6A15B" stroke-width="2.5"/>
      <circle cx="50" cy="50" r="43" fill="#050806" stroke="#10B981" stroke-width="1" stroke-dasharray="3 3"/>
      <!-- Sovereign Scales & Palm -->
      <path d="M50 20v48M34 28h32" stroke="#E5C78B" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M34 28l-8 16h16l-8-16zM66 28l-8 16h16l-8-16z" fill="#C6A15B" fill-opacity="0.25" stroke="#E5C78B" stroke-width="1.8"/>
      <!-- Base and Emblem Ring -->
      <path d="M38 68h24M44 68l6-6 6 6" stroke="#10B981" stroke-width="2" stroke-linecap="round"/>
      <circle cx="50" cy="22" r="3" fill="#E5C78B"/>
    </svg>`
  },

  // 2. نادي سباقات الخيل (JCSA)
  'tender-02-jcsa': {
    tenderId: 'tender-02-jcsa',
    entityKey: 'jcsa',
    nameAr: 'نادي سباقات الخيل',
    nameEn: 'Jockey Club of Saudi Arabia (JCSA)',
    shortCode: 'JCSA',
    primaryColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#10B981" stroke-width="2.5"/>
      <!-- Thoroughbred Horse Silhouette & Horseshoe -->
      <path d="M30 70c0-22 14-38 36-38 6 0 12 3 16 8l-6 6c-3-3-6-5-10-5-16 0-26 12-26 29h-10z" fill="#E5C78B"/>
      <path d="M42 32c4-8 12-14 22-14 12 0 20 8 20 18 0 7-4 13-10 16l-3-6c4-2 6-6 6-10 0-6-5-11-13-11-7 0-12 4-15 9l-7-2z" fill="#10B981"/>
      <circle cx="50" cy="74" r="3" fill="#C6A15B"/>
    </svg>`
  },

  // 3. الهيئة الملكية للجبيل وينبع
  'tender-03-rcjy-hospital': {
    tenderId: 'tender-03-rcjy-hospital',
    entityKey: 'rcjy',
    nameAr: 'الهيئة الملكية للجبيل وينبع',
    nameEn: 'Royal Commission for Jubail & Yanbu',
    shortCode: 'RCJY',
    primaryColor: '#3B82F6',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#3B82F6" stroke-width="2.5"/>
      <!-- Industrial Cog & Health Caduceus Cross -->
      <rect x="44" y="24" width="12" height="52" rx="3" fill="#3B82F6" fill-opacity="0.3" stroke="#60A5FA" stroke-width="2"/>
      <rect x="24" y="44" width="52" height="12" rx="3" fill="#3B82F6" fill-opacity="0.3" stroke="#60A5FA" stroke-width="2"/>
      <circle cx="50" cy="50" r="14" fill="#07130D" stroke="#E5C78B" stroke-width="2.5"/>
      <path d="M50 41v18M41 50h18" stroke="#E5C78B" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`
  },

  // 4. جامعة الجوف
  'tender-04-jouf-university': {
    tenderId: 'tender-04-jouf-university',
    entityKey: 'jouf-university',
    nameAr: 'جامعة الجوف',
    nameEn: 'Jouf University',
    shortCode: 'JU',
    primaryColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#10B981" stroke-width="2.5"/>
      <!-- Academic Cap & Open Book -->
      <path d="M50 24L20 38l30 14 30-14-30-14z" fill="#064E3B" stroke="#34D399" stroke-width="2"/>
      <path d="M30 46v16c0 10 9 18 20 18s20-8 20-18V46" stroke="#E5C78B" stroke-width="2.5" fill="none"/>
      <path d="M78 40v20" stroke="#34D399" stroke-width="2" stroke-linecap="round"/>
      <circle cx="78" cy="62" r="2.5" fill="#E5C78B"/>
    </svg>`
  },

  // 5. الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا) - الهوية الرقمية
  'tender-05-sdaia-identity': {
    tenderId: 'tender-05-sdaia-identity',
    entityKey: 'sdaia',
    nameAr: 'الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا)',
    nameEn: 'Saudi Data & AI Authority (SDAIA)',
    shortCode: 'SDAIA',
    primaryColor: '#8B5CF6',
    glowColor: 'rgba(139, 92, 246, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#8B5CF6" stroke-width="2.5"/>
      <!-- Neural AI Nodes & Fingerprint Biometrics -->
      <circle cx="50" cy="50" r="24" stroke="#A78BFA" stroke-width="2" stroke-dasharray="4 3"/>
      <circle cx="50" cy="50" r="14" stroke="#10B981" stroke-width="2"/>
      <circle cx="50" cy="50" r="5" fill="#E5C78B"/>
      <path d="M50 20v10M50 70v10M20 50h10M70 50h10M29 29l7 7M64 64l7 7M29 71l7-7M64 36l7-7" stroke="#A78BFA" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },

  // 6. وزارة الاستثمار (MISA)
  'tender-06-misa-filenet': {
    tenderId: 'tender-06-misa-filenet',
    entityKey: 'misa',
    nameAr: 'وزارة الاستثمار',
    nameEn: 'Ministry of Investment (MISA)',
    shortCode: 'MISA',
    primaryColor: '#059669',
    glowColor: 'rgba(5, 150, 105, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#059669" stroke-width="2.5"/>
      <!-- Ascending Growth Arrows & Vault -->
      <path d="M26 68l16-20 12 10 20-28" stroke="#10B981" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M62 30h12v12" stroke="#E5C78B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="74" cy="30" r="4" fill="#E5C78B"/>
      <path d="M24 74h52" stroke="#047857" stroke-width="2"/>
    </svg>`
  },

  // 7. المكتب الاستراتيجي لتطوير منطقة جازان
  'tender-07-jazan-software-licenses': {
    tenderId: 'tender-07-jazan-software-licenses',
    entityKey: 'jazan-office',
    nameAr: 'المكتب الاستراتيجي لتطوير منطقة جازان',
    nameEn: 'Strategic Development Office of Jazan',
    shortCode: 'SDOJ',
    primaryColor: '#0284C7',
    glowColor: 'rgba(2, 132, 199, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#0284C7" stroke-width="2.5"/>
      <!-- Mountain & Red Sea Coastal Waves -->
      <path d="M22 66L42 36l12 16 14-22 18 36H22z" fill="#0369A1" fill-opacity="0.3" stroke="#38BDF8" stroke-width="2"/>
      <path d="M20 72c10-4 20 4 30 0s20-4 30 0" stroke="#E5C78B" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="68" cy="30" r="4" fill="#FBBF24"/>
    </svg>`
  },

  // 8. بلدية محافظة البكيرية - أمانة القصيم
  'tender-08-bukayriyah-it-maintenance': {
    tenderId: 'tender-08-bukayriyah-it-maintenance',
    entityKey: 'bukayriyah',
    nameAr: 'بلدية محافظة البكيرية (أمانة القصيم)',
    nameEn: 'Bukayriyah Municipality (Qassim Region)',
    shortCode: 'BMUN',
    primaryColor: '#16A34A',
    glowColor: 'rgba(22, 163, 74, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#16A34A" stroke-width="2.5"/>
      <!-- Civic Municipal Fortress & Date Palm -->
      <path d="M30 68V42l20-14 20 14v26H30z" fill="#14532D" fill-opacity="0.4" stroke="#4ADE80" stroke-width="2"/>
      <path d="M50 36v32M42 48c4-4 8-4 8 0M58 48c-4-4-8-4-8 0" stroke="#E5C78B" stroke-width="2" stroke-linecap="round"/>
      <rect x="46" y="56" width="8" height="12" fill="#E5C78B"/>
    </svg>`
  },

  // 9. جامعة الملك سعود بن عبد العزيز للعلوم الصحية
  'tender-09-ksau-hs-p2c': {
    tenderId: 'tender-09-ksau-hs-p2c',
    entityKey: 'ksau-hs',
    nameAr: 'جامعة الملك سعود للعلوم الصحية',
    nameEn: 'King Saud bin Abdulaziz University (KSAU-HS)',
    shortCode: 'KSAU-HS',
    primaryColor: '#E11D48',
    glowColor: 'rgba(225, 29, 72, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#E11D48" stroke-width="2.5"/>
      <!-- Medical Staff of Asclepius & Academic Laurel -->
      <path d="M50 20v60" stroke="#E5C78B" stroke-width="3" stroke-linecap="round"/>
      <path d="M40 32c10-6 16 0 10 10s-10 6 0 16 16 0 10 10" stroke="#FB7185" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <circle cx="50" cy="18" r="4" fill="#E5C78B"/>
      <path d="M30 62c6 10 14 14 20 14s14-4 20-14" stroke="#10B981" stroke-width="2" fill="none"/>
    </svg>`
  },

  // 10. الهيئة السعودية للمياه (LIMS)
  'tender-10-swa-lims': {
    tenderId: 'tender-10-swa-lims',
    entityKey: 'swa',
    nameAr: 'الهيئة السعودية للمياه',
    nameEn: 'Saudi Water Authority (SWA)',
    shortCode: 'SWA',
    primaryColor: '#06B6D4',
    glowColor: 'rgba(6, 182, 212, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#06B6D4" stroke-width="2.5"/>
      <!-- Water Droplet with Desalination Rings -->
      <path d="M50 20C50 20 30 46 30 60a20 20 0 0 0 40 0c0-14-20-40-20-40z" fill="#0891B2" fill-opacity="0.35" stroke="#22D3EE" stroke-width="2.5"/>
      <path d="M38 60a12 12 0 0 0 24 0" stroke="#E5C78B" stroke-width="2" stroke-linecap="round"/>
      <circle cx="50" cy="54" r="3" fill="#E5C78B"/>
    </svg>`
  },

  // 11. وزارة الموارد البشرية والتنمية الاجتماعية (الذكاء الاصطناعي وإدارة الأداء)
  'tender-11-hrsd-ai-performance': {
    tenderId: 'tender-11-hrsd-ai-performance',
    entityKey: 'hrsd',
    nameAr: 'وزارة الموارد البشرية والتنمية الاجتماعية',
    nameEn: 'Ministry of HRSD (AI Performance)',
    shortCode: 'HRSD',
    primaryColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#10B981" stroke-width="2.5"/>
      <!-- Interconnected Human Potential & Strategic Growth -->
      <circle cx="36" cy="38" r="8" fill="#10B981"/>
      <circle cx="64" cy="38" r="8" fill="#E5C78B"/>
      <path d="M22 66c0-10 8-16 18-16s18 6 18 16" stroke="#10B981" stroke-width="2.5" fill="none"/>
      <path d="M48 66c0-10 8-16 18-16s18 6 18 16" stroke="#E5C78B" stroke-width="2.5" fill="none"/>
      <path d="M50 22l4 6-4 6-4-6z" fill="#E5C78B"/>
    </svg>`
  },

  // 12. المديرية العامة لمكافحة المخدرات
  'tender-12-gdnc-digital-transformation': {
    tenderId: 'tender-12-gdnc-digital-transformation',
    entityKey: 'gdnc',
    nameAr: 'المديرية العامة لمكافحة المخدرات',
    nameEn: 'General Directorate of Narcotics Control (GDNC)',
    shortCode: 'GDNC',
    primaryColor: '#D97706',
    glowColor: 'rgba(217, 119, 6, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#D97706" stroke-width="2.5"/>
      <!-- Security Shield & Vigilant Falcon Eye -->
      <path d="M50 20L26 32v24c0 18 24 28 24 28s24-10 24-28V32L50 20z" fill="#78350F" fill-opacity="0.3" stroke="#F59E0B" stroke-width="2.5"/>
      <path d="M38 48c6-6 18-6 24 0-6 6-18 6-24 0z" fill="#07130D" stroke="#E5C78B" stroke-width="2"/>
      <circle cx="50" cy="48" r="4" fill="#F59E0B"/>
    </svg>`
  },

  // 13. المركز الوطني للتنافسية (تيسير) / المركز السعودي للأعمال
  'tender-13-ncc-platforms': {
    tenderId: 'tender-13-ncc-platforms',
    entityKey: 'ncc-taysir',
    nameAr: 'المركز الوطني للتنافسية / المركز السعودي للأعمال',
    nameEn: 'National Competitiveness Center / SBC',
    shortCode: 'NCC',
    primaryColor: '#F59E0B',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#F59E0B" stroke-width="2.5"/>
      <!-- Dynamic Competitiveness Gauge & Business Arrows -->
      <path d="M26 62A28 28 0 1 1 74 62" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" fill="none"/>
      <path d="M50 50l14-16" stroke="#E5C78B" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="50" cy="50" r="6" fill="#10B981"/>
      <path d="M22 68h56" stroke="#10B981" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },

  // 14. المركز الوطني لتنمية القطاع غير الربحي
  'tender-14-ncnp-framework': {
    tenderId: 'tender-14-ncnp-framework',
    entityKey: 'ncnp',
    nameAr: 'المركز الوطني لتنمية القطاع غير الربحي',
    nameEn: 'National Center for Non-Profit Sector (NCNP)',
    shortCode: 'NCNP',
    primaryColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#10B981" stroke-width="2.5"/>
      <!-- Giving Hands & Heart / Sustainable Development -->
      <path d="M50 68c-14-12-22-20-22-30 0-8 6-14 14-14 5 0 9 3 11 7 2-4 6-7 11-7 8 0 14 6 14 14 0 10-8 18-22 30z" fill="#065F46" stroke="#34D399" stroke-width="2.5"/>
      <circle cx="50" cy="45" r="4" fill="#E5C78B"/>
    </svg>`
  },

  // 15. وزارة الموارد البشرية والتنمية الاجتماعية (البوابة السحابية)
  'tender-15-hrsd-portal-cloud': {
    tenderId: 'tender-15-hrsd-portal-cloud',
    entityKey: 'hrsd-cloud',
    nameAr: 'بوابة وزارة الموارد البشرية (Cloud-Native)',
    nameEn: 'Ministry of HRSD Portal (Cloud-Native)',
    shortCode: 'HRSD-P',
    primaryColor: '#0EA5E9',
    glowColor: 'rgba(14, 165, 233, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#0EA5E9" stroke-width="2.5"/>
      <!-- Cloud Architecture & Portal Interface -->
      <path d="M35 62h32a14 14 0 0 0 4-27 18 18 0 0 0-34-4 13 13 0 0 0-2 26z" fill="#0369A1" fill-opacity="0.3" stroke="#38BDF8" stroke-width="2.5"/>
      <path d="M42 50l8-8 8 8M50 42v18" stroke="#E5C78B" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`
  },

  // 16. الهيئة السعودية للمواصفات والمقاييس والجودة (تطبيق تأكد)
  'tender-16-saso-taakad': {
    tenderId: 'tender-16-saso-taakad',
    entityKey: 'saso',
    nameAr: 'الهيئة السعودية للمواصفات والمقاييس (تأكد)',
    nameEn: 'Saudi Standards & Metrology (SASO - Taakad)',
    shortCode: 'SASO',
    primaryColor: '#22C55E',
    glowColor: 'rgba(34, 197, 94, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#22C55E" stroke-width="2.5"/>
      <!-- Quality Badge & Barcode Scan Checkmark -->
      <path d="M50 18l8 6 10-2 4 9 9 4-2 10 6 8-6 8 2 10-9 4-4 9-10-2-8 6-8-6-10 2-4-9-9-4 2-10-6-8 6-8-2-10 9-4 4-9 10 2z" fill="#14532D" fill-opacity="0.3" stroke="#4ADE80" stroke-width="1.8"/>
      <path d="M36 50l10 10 20-22" stroke="#E5C78B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },

  // 17. هيئة تطوير محافظة جدة (البوابة الجيومكانية)
  'tender-17-jda-geospatial': {
    tenderId: 'tender-17-jda-geospatial',
    entityKey: 'jda',
    nameAr: 'هيئة تطوير محافظة جدة',
    nameEn: 'Jeddah Development Authority (GIS)',
    shortCode: 'JDA',
    primaryColor: '#06B6D4',
    glowColor: 'rgba(6, 182, 212, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#06B6D4" stroke-width="2.5"/>
      <!-- Historic Jeddah Gateway & Geospatial Coordinate Ring -->
      <path d="M28 70V44a22 22 0 0 1 44 0v26" stroke="#22D3EE" stroke-width="3" fill="none"/>
      <circle cx="50" cy="44" r="8" fill="#07130D" stroke="#E5C78B" stroke-width="2"/>
      <path d="M50 20v8M50 64v8M20 50h8M72 50h8" stroke="#E5C78B" stroke-width="2"/>
    </svg>`
  },

  // 18. أمانة المنطقة الشرقية
  'tender-18-eastern-province-regulatory': {
    tenderId: 'tender-18-eastern-province-regulatory',
    entityKey: 'eastern-province',
    nameAr: 'أمانة المنطقة الشرقية',
    nameEn: 'Eastern Province Municipality',
    shortCode: 'EPMUN',
    primaryColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#10B981" stroke-width="2.5"/>
      <!-- Gulf Wave & Municipal Regulatory Crown -->
      <path d="M24 64c12-6 24 6 36 0s16-4 16 0" stroke="#34D399" stroke-width="3" stroke-linecap="round"/>
      <path d="M28 44l12-14 10 8 10-8 12 14v16H28V44z" fill="#064E3B" stroke="#E5C78B" stroke-width="2"/>
      <circle cx="50" cy="36" r="3" fill="#E5C78B"/>
    </svg>`
  },

  // 19. الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا) - شبكة الألياف الوطنية MIFON3
  'tender-19-sdaia-mifon3': {
    tenderId: 'tender-19-sdaia-mifon3',
    entityKey: 'sdaia-fiber',
    nameAr: 'الهيئة السعودية للبيانات والذكاء الاصطناعي (MIFON3)',
    nameEn: 'SDAIA National Fiber Network (MIFON3)',
    shortCode: 'MIFON3',
    primaryColor: '#8B5CF6',
    glowColor: 'rgba(139, 92, 246, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#8B5CF6" stroke-width="2.5"/>
      <!-- DWDM High-Speed Fiber Rings & Optical Core -->
      <circle cx="50" cy="50" r="30" stroke="#A78BFA" stroke-width="1.5" stroke-dasharray="6 4"/>
      <circle cx="50" cy="50" r="18" stroke="#10B981" stroke-width="2.5"/>
      <path d="M20 50h60M50 20v60" stroke="#E5C78B" stroke-width="2"/>
      <circle cx="50" cy="50" r="6" fill="#E5C78B"/>
    </svg>`
  },

  // 20. المركز الوطني للنخيل والتمور
  'tender-20-ncpd-data-platform': {
    tenderId: 'tender-20-ncpd-data-platform',
    entityKey: 'ncpd',
    nameAr: 'المركز الوطني للنخيل والتمور',
    nameEn: 'National Center for Palms & Dates (NCPD)',
    shortCode: 'NCPD',
    primaryColor: '#E5C78B',
    glowColor: 'rgba(229, 199, 139, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#E5C78B" stroke-width="2.5"/>
      <!-- Golden Royal Date Palm -->
      <path d="M50 36v38M44 74h12" stroke="#C6A15B" stroke-width="3" stroke-linecap="round"/>
      <path d="M50 36c-12-16-24-4-24 4s14 6 24-4zM50 36c12-16 24-4 24 4s-14 6-24-4z" fill="#C6A15B" fill-opacity="0.3" stroke="#E5C78B" stroke-width="2"/>
      <path d="M50 42c-10-8-18 2-18 8s10 4 18-8zM50 42c10-8 18 2 18 8s-10 4-18-8z" fill="#10B981" fill-opacity="0.4" stroke="#34D399" stroke-width="1.8"/>
    </svg>`
  },

  // 21. وزارة الطاقة (نظام EPM)
  'tender-21-moe-epm': {
    tenderId: 'tender-21-moe-epm',
    entityKey: 'moe-energy',
    nameAr: 'وزارة الطاقة',
    nameEn: 'Ministry of Energy (EPM Suite)',
    shortCode: 'MOE',
    primaryColor: '#F59E0B',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#F59E0B" stroke-width="2.5"/>
      <!-- Energy Flame & Orbital Atom -->
      <ellipse cx="50" cy="50" rx="28" ry="12" stroke="#FBBF24" stroke-width="2" transform="rotate(-30 50 50)"/>
      <ellipse cx="50" cy="50" rx="28" ry="12" stroke="#10B981" stroke-width="2" transform="rotate(30 50 50)"/>
      <path d="M50 32c4 8 10 12 10 18a10 10 0 0 1-20 0c0-6 6-10 10-18z" fill="#D97706" stroke="#E5C78B" stroke-width="2"/>
    </svg>`
  },

  // 22. المركز الوطني للرقابة على الالتزام البيئي
  'tender-22-ncec-it-maintenance': {
    tenderId: 'tender-22-ncec-it-maintenance',
    entityKey: 'ncec',
    nameAr: 'المركز الوطني للرقابة على الالتزام البيئي',
    nameEn: 'National Center for Environmental Compliance',
    shortCode: 'NCEC',
    primaryColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#10B981" stroke-width="2.5"/>
      <!-- Ecological Leaf Shield & Clean Monitoring Rings -->
      <path d="M30 40c0-10 12-18 20-18s20 8 20 18-10 28-20 36C40 68 30 50 30 40z" fill="#064E3B" stroke="#34D399" stroke-width="2.5"/>
      <path d="M50 22v48M50 40l10-8M50 50l-10-6" stroke="#E5C78B" stroke-width="2"/>
    </svg>`
  },

  // 23. وزارة الموارد البشرية والتنمية الاجتماعية (تطبيق الموظف الحكومي الموحد)
  'tender-23-hrsd-employee-app': {
    tenderId: 'tender-23-hrsd-employee-app',
    entityKey: 'hrsd-app',
    nameAr: 'وزارة الموارد البشرية (تطبيق الموظف الموحد)',
    nameEn: 'HRSD Unified Government Employee App',
    shortCode: 'HRSD-APP',
    primaryColor: '#6366F1',
    glowColor: 'rgba(99, 102, 241, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#6366F1" stroke-width="2.5"/>
      <!-- Mobile Smartphone Frame & Employee Badge -->
      <rect x="34" y="20" width="32" height="60" rx="8" fill="#1E1B4B" stroke="#818CF8" stroke-width="2.5"/>
      <circle cx="50" cy="38" r="6" fill="#E5C78B"/>
      <path d="M42 54c0-6 4-8 8-8s8 2 8 8" stroke="#E5C78B" stroke-width="2" fill="none"/>
      <line x1="46" y1="72" x2="54" y2="72" stroke="#818CF8" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`
  },

  // 24. البرنامج الوطني لتطوير قطاع الثروة الحيوانية والسمكية
  'tender-24-livestock-it-managed-services': {
    tenderId: 'tender-24-livestock-it-managed-services',
    entityKey: 'livestock-fisheries',
    nameAr: 'البرنامج الوطني للثروة الحيوانية والسمكية',
    nameEn: 'National Livestock & Fisheries Development',
    shortCode: 'NLFP',
    primaryColor: '#0D9488',
    glowColor: 'rgba(13, 148, 136, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#0D9488" stroke-width="2.5"/>
      <!-- Marine Fish Arc & Livestock Contour -->
      <path d="M26 48c14-12 34-12 48 0-14 12-34 12-48 0z" fill="#134E4A" stroke="#2DD4BF" stroke-width="2.5"/>
      <circle cx="62" cy="48" r="3" fill="#E5C78B"/>
      <path d="M26 48l-8-6v12l8-6z" fill="#2DD4BF"/>
      <path d="M30 68c8 4 16 2 20-4" stroke="#E5C78B" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },

  // 25. القوات الخاصة للأمن البيئي (شبكة الاتصالات P25)
  'tender-25-sfes-wireless-p25': {
    tenderId: 'tender-25-sfes-wireless-p25',
    entityKey: 'sfes-p25',
    nameAr: 'القوات الخاصة للأمن البيئي (شبكة P25)',
    nameEn: 'Special Forces for Environmental Security (P25)',
    shortCode: 'SFES-P25',
    primaryColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#10B981" stroke-width="2.5"/>
      <!-- Tactical Security Falcon & P25 Radio Waves -->
      <path d="M50 20L24 34v20c0 18 26 28 26 28s26-10 26-28V34L50 20z" fill="#064E3B" stroke="#34D399" stroke-width="2.5"/>
      <path d="M36 50a14 14 0 0 1 28 0" stroke="#E5C78B" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <path d="M42 54a8 8 0 0 1 16 0" stroke="#E5C78B" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <circle cx="50" cy="58" r="3" fill="#E5C78B"/>
    </svg>`
  },

  // 26. القوات الخاصة للأمن البيئي (منظومة كاميرات المراقبة CCTV)
  'tender-26-sfes-cctv': {
    tenderId: 'tender-26-sfes-cctv',
    entityKey: 'sfes-cctv',
    nameAr: 'القوات الخاصة للأمن البيئي (كاميرات CCTV)',
    nameEn: 'SFES Tactical Security Cameras (CCTV)',
    shortCode: 'SFES-CCTV',
    primaryColor: '#E11D48',
    glowColor: 'rgba(225, 29, 72, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#E11D48" stroke-width="2.5"/>
      <!-- CCTV Security Lens & Crosshairs -->
      <rect x="26" y="34" width="38" height="24" rx="4" fill="#881337" fill-opacity="0.4" stroke="#FB7185" stroke-width="2.5"/>
      <path d="M64 42l16-8v24l-16-8v-8z" fill="#FB7185"/>
      <circle cx="45" cy="46" r="6" fill="#07130D" stroke="#E5C78B" stroke-width="2"/>
      <circle cx="45" cy="46" r="2" fill="#E5C78B"/>
    </svg>`
  },

  // 27. جامعة الملك خالد (نظام ITSM)
  'tender-27-kku-itsm-itil4': {
    tenderId: 'tender-27-kku-itsm-itil4',
    entityKey: 'kku',
    nameAr: 'جامعة الملك خالد',
    nameEn: 'King Khalid University (KKU ITSM)',
    shortCode: 'KKU',
    primaryColor: '#2563EB',
    glowColor: 'rgba(37, 99, 235, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#2563EB" stroke-width="2.5"/>
      <!-- Asir Mountain Peaks & ITIL IT Management Network -->
      <path d="M20 68L40 38l14 18 16-24 18 36H20z" fill="#1E3A8A" fill-opacity="0.4" stroke="#60A5FA" stroke-width="2.5"/>
      <circle cx="50" cy="30" r="4" fill="#E5C78B"/>
      <path d="M34 56h32" stroke="#E5C78B" stroke-width="2"/>
    </svg>`
  },

  // 28. الهيئة السعودية للمياه (قنوات التواصل الرقمي)
  'tender-28-swa-digital-channels': {
    tenderId: 'tender-28-swa-digital-channels',
    entityKey: 'swa-digital',
    nameAr: 'الهيئة السعودية للمياه (التواصل الرقمي)',
    nameEn: 'Saudi Water Authority (Digital Channels)',
    shortCode: 'SWA-DIG',
    primaryColor: '#0284C7',
    glowColor: 'rgba(2, 132, 199, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#0284C7" stroke-width="2.5"/>
      <!-- Chat Bubbles & Digital Hydro Stream -->
      <path d="M30 38a16 16 0 0 1 28-10 16 16 0 0 1 6 22l4 10-10-3a16 16 0 0 1-28-19z" fill="#0369A1" fill-opacity="0.3" stroke="#38BDF8" stroke-width="2.5"/>
      <path d="M42 42h16M42 48h10" stroke="#E5C78B" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="50" cy="70" r="3" fill="#38BDF8"/>
    </svg>`
  },

  // 29. جامعة بيشة (مركز عمليات الأمن السيبراني المدار SOC/MDR)
  'tender-29-bisha-soc-mdr': {
    tenderId: 'tender-29-bisha-soc-mdr',
    entityKey: 'bisha-soc',
    nameAr: 'جامعة بيشة (مركز SOC/MDR السيبراني)',
    nameEn: 'University of Bisha (Cybersecurity SOC)',
    shortCode: 'UB-SOC',
    primaryColor: '#84CC16',
    glowColor: 'rgba(132, 204, 22, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#84CC16" stroke-width="2.5"/>
      <!-- Cybersecurity Radar Sweeping Reticle & Palm -->
      <circle cx="50" cy="50" r="28" stroke="#A3E635" stroke-width="1.8" stroke-dasharray="4 4"/>
      <circle cx="50" cy="50" r="16" stroke="#84CC16" stroke-width="2"/>
      <line x1="50" y1="22" x2="50" y2="78" stroke="#E5C78B" stroke-width="1.8"/>
      <line x1="22" y1="50" x2="78" y2="50" stroke="#E5C78B" stroke-width="1.8"/>
      <path d="M50 50L68 32" stroke="#A3E635" stroke-width="3" stroke-linecap="round"/>
      <circle cx="50" cy="50" r="4" fill="#E5C78B"/>
    </svg>`
  },

  // 30. هيئة تطوير المنطقة الشرقية (البوابات الرقمية)
  'tender-30-eastern-province-development-portals': {
    tenderId: 'tender-30-eastern-province-development-portals',
    entityKey: 'epda',
    nameAr: 'هيئة تطوير المنطقة الشرقية',
    nameEn: 'Eastern Province Development Authority (EPDA)',
    shortCode: 'EPDA',
    primaryColor: '#0D9488',
    glowColor: 'rgba(13, 148, 136, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#0D9488" stroke-width="2.5"/>
      <!-- King Fahd Causeway Bridge Suspension Cables -->
      <path d="M22 66h56" stroke="#2DD4BF" stroke-width="3" stroke-linecap="round"/>
      <path d="M36 66V32M64 66V32" stroke="#E5C78B" stroke-width="3"/>
      <path d="M24 66l12-34 28 34M50 42l14-10 14 34" stroke="#2DD4BF" stroke-width="1.8"/>
      <circle cx="50" cy="24" r="3" fill="#E5C78B"/>
    </svg>`
  },

  // 31. هيئة تطوير محافظة جدة (التدقيق البرمجي)
  'tender-31-jda-it-audit': {
    tenderId: 'tender-31-jda-it-audit',
    entityKey: 'jda-audit',
    nameAr: 'هيئة تطوير محافظة جدة (التدقيق والمراجعة)',
    nameEn: 'JDA Enterprise IT Audit & Compliance',
    shortCode: 'JDA-AUD',
    primaryColor: '#EAB308',
    glowColor: 'rgba(234, 179, 8, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#EAB308" stroke-width="2.5"/>
      <!-- Inspection Magnifier & Code Matrix -->
      <circle cx="44" cy="44" r="16" fill="#713F12" fill-opacity="0.3" stroke="#FACC15" stroke-width="2.5"/>
      <path d="M56 56l16 16" stroke="#E5C78B" stroke-width="4" stroke-linecap="round"/>
      <path d="M38 44l4 4 8-8" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },

  // 32. وزارة الحج والعمرة
  'tender-32-hajj-strategy-tasks-pmo': {
    tenderId: 'tender-32-hajj-strategy-tasks-pmo',
    entityKey: 'hajj-umrah',
    nameAr: 'وزارة الحج والعمرة',
    nameEn: 'Ministry of Hajj and Umrah (PMO)',
    shortCode: 'HAJJ',
    primaryColor: '#C6A15B',
    glowColor: 'rgba(198, 161, 91, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#C6A15B" stroke-width="2.5"/>
      <!-- Holy Kaaba Contour & Crescent Moon -->
      <rect x="36" y="36" width="28" height="28" rx="2" fill="#000000" stroke="#E5C78B" stroke-width="2.5"/>
      <path d="M36 44h28" stroke="#C6A15B" stroke-width="2.5"/>
      <path d="M50 20a8 8 0 0 1 8 8 8 8 0 0 1-5 7 6 6 0 0 0-3-15z" fill="#E5C78B"/>
    </svg>`
  },

  // 33. القوات الخاصة للأمن البيئي (منصة العمليات الميدانية)
  'tender-33-sfes-integrated-operations-platform': {
    tenderId: 'tender-33-sfes-integrated-operations-platform',
    entityKey: 'sfes-ops',
    nameAr: 'القوات الخاصة للأمن البيئي (منصة العمليات)',
    nameEn: 'SFES Command & Tactical Field Operations',
    shortCode: 'SFES-OPS',
    primaryColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#10B981" stroke-width="2.5"/>
      <!-- Unified Command Cockpit Radar & Security Grid -->
      <polygon points="50,22 76,36 76,64 50,78 24,64 24,36" fill="#064E3B" fill-opacity="0.3" stroke="#34D399" stroke-width="2.5"/>
      <path d="M50 22v56M24 36l52 28M24 64l52-28" stroke="#E5C78B" stroke-width="1.8"/>
      <circle cx="50" cy="50" r="5" fill="#E5C78B"/>
    </svg>`
  },

  // 34. صندوق التنمية العقارية (REDF)
  'tender-34-redf-portals-mobile': {
    tenderId: 'tender-34-redf-portals-mobile',
    entityKey: 'redf',
    nameAr: 'صندوق التنمية العقارية',
    nameEn: 'Real Estate Development Fund (REDF)',
    shortCode: 'REDF',
    primaryColor: '#0284C7',
    glowColor: 'rgba(2, 132, 199, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#0284C7" stroke-width="2.5"/>
      <!-- Modern Housing Roof Silhouette & Golden Key of Home -->
      <path d="M24 50L50 26l26 24v24H24V50z" fill="#0C4A6E" fill-opacity="0.4" stroke="#38BDF8" stroke-width="2.5"/>
      <path d="M44 74v-14h12v14" fill="#07130D" stroke="#E5C78B" stroke-width="2"/>
      <circle cx="50" cy="40" r="4" fill="#E5C78B"/>
    </svg>`
  },

  // 35. وزارة الحرس الوطني
  'tender-35-sng-admission-systems': {
    tenderId: 'tender-35-sng-admission-systems',
    entityKey: 'mng',
    nameAr: 'وزارة الحرس الوطني',
    nameEn: 'Ministry of National Guard (MNG)',
    shortCode: 'MNG',
    primaryColor: '#059669',
    glowColor: 'rgba(5, 150, 105, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#059669" stroke-width="2.5"/>
      <!-- Sovereign Military Eagle Crest & Crossed Arabian Swords -->
      <path d="M30 68l20-20 20 20M50 48v22" stroke="#E5C78B" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M32 40l18-18 18 18" stroke="#10B981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="50" cy="36" r="5" fill="#E5C78B"/>
      <path d="M26 72h48" stroke="#047857" stroke-width="2"/>
    </svg>`
  }
};

/**
 * Retrieve logo definition or fallback for any tender ID or entity key
 */
export function getEntityLogo(tenderId: string): EntityLogoDef {
  if (ENTITY_LOGOS[tenderId]) {
    return ENTITY_LOGOS[tenderId];
  }
  // Generic fallback
  return {
    tenderId,
    entityKey: 'saudi-government',
    nameAr: 'جهة حكومية سعودية',
    nameEn: 'Saudi Government Entity',
    shortCode: 'GOV',
    primaryColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#07130D" stroke="#C6A15B" stroke-width="2.5"/>
      <path d="M50 24L26 38v10h48V38L50 24z" fill="#C6A15B" fill-opacity="0.3" stroke="#E5C78B" stroke-width="2"/>
      <path d="M34 48v18M44 48v18M56 48v18M66 48v18M28 66h44" stroke="#10B981" stroke-width="2"/>
    </svg>`
  };
}
