/**
 * Youssef Ghamry - Official Platform & Professional Portfolio
 * High-Performance Interactive Architecture:
 * - Organic Ribbon & Worm Cursor with Gold/Emerald Trail
 * - Dynamic Executive Portrait & Progressive Suit Theme Engine
 * - Interactive 25+ Client Projects Portfolio with Category Filtering & Instant Search
 * - Interactive Project Details Modal with Case Study Highlights & External Live Link
 * - Enhanced Contact Form with Direct WhatsApp Routing & Zero-Alert Validation
 * - Responsive Mobile Drawer with Auto-Close & Backdrop Dismissal
 * - Floating Back-to-Top Luxury Button
 */

// Original Arabic Portfolio Projects (Preserved untouched for Arabic RTL version)
const AR_PORTFOLIO_PROJECTS = [
  {
    id: 'bahrain-finder',
    nameAr: 'بحرين فايندر (Bahrain Finder)',
    nameEn: 'Bahrain Finder Real Estate Portal',
    domain: 'bahrainfinder.bh',
    country: 'bh',
    countryNameAr: 'مملكة البحرين',
    countryNameEn: 'Bahrain',
    category: 'portals',
    categoryNameAr: 'مواقع ومنصات كبرى',
    categoryNameEn: 'Websites & Platforms',
    descriptionAr: 'منصة رقمية عقارية متكاملة تتيح اكتشاف وشراء وبيع العقارات في البحرين. تطوير الموقع بنظام إدارة محتوى متقدم، خريطة تفاعلية، محرك بحث مخصص، وإدارة علاقات العملاء CRM.',
    descriptionEn: 'Comprehensive national real estate marketplace in Bahrain. Built with customized CMS, interactive GIS maps, advanced property search filters, and integrated CRM.',
    services: ['website', 'marketing', 'crm', 'branding'],
    servicesListAr: ['تطوير موقع ويب', 'نظام CRM للعقارات', 'تسويق رقمي', 'خرائط تفاعلية'],
    servicesListEn: ['Portal Development', 'Real Estate CRM', 'Digital Strategy', 'GIS Mapping'],
    logo: '🏢',
    roleAr: 'مطور ويب رئيسي ومهندس حلول',
    roleEn: 'Lead Web Engineer & Solutions Architect',
    statusAr: 'منصة حية وفعالة',
    statusEn: 'Live Production System',
    highlightsAr: [
      { title: 'نمو حركة الزيارات 300%', text: 'تحقيق نمو استثنائي في الزوار خلال 6 أشهر بفضل السيو التقني وهندسة المحتوى.' },
      { title: 'نظام CRM مخصص', text: 'ربط الوسطاء والعملاء بنظام إشعارات فوري ومتابعة الصفقات العقارية.' },
      { title: 'بحث عقاري سريع', text: 'تصفية العقارات بالحي والمساحة والسعر مع خرائط تفاعلية دقيقة.' }
    ],
    highlightsEn: [
      { title: '+300% Organic Growth', text: 'Achieved exponential traffic increase within 6 months via technical SEO and indexation.' },
      { title: 'Custom Broker CRM', text: 'Seamless lead routing connecting brokers and buyers with automated SMS/email alerts.' },
      { title: 'Interactive GIS Search', text: 'Sub-second faceted property search powered by interactive polygon map boundaries.' }
    ]
  },
  {
    id: 'bscenter',
    nameAr: 'مركز الأداء المتوازن للتدريب (BSC Center)',
    nameEn: 'Balanced Scorecard Training Center',
    domain: 'bscenter.org/ar',
    country: 'sa',
    countryNameAr: 'المملكة العربية السعودية',
    countryNameEn: 'Saudi Arabia',
    category: 'portals',
    categoryNameAr: 'مواقع ومنصات كبرى',
    categoryNameEn: 'Websites & Platforms',
    descriptionAr: 'مركز تدريب واستشارات إدارية معتمد بالمملكة. تم تطوير منصة تعليمية تفاعلية، نظام حجز دورات ودفع إلكتروني مع بوابات الدفع المحلية (مدى وApple Pay)، ونظام CRM.',
    descriptionEn: 'Accredited Saudi corporate training portal. Developed interactive course management, automated seat registration, Mada/Apple Pay checkout, and lead tracking.',
    services: ['website', 'app', 'marketing', 'crm'],
    servicesListAr: ['منصة تدريب تفاعلية', 'بوابات دفع سعودية', 'تسويق تعليمي', 'نظام إدارة المتدربين'],
    servicesListEn: ['LMS Platform', 'Saudi Payment Gateways', 'EdTech Marketing', 'Trainee CRM'],
    logo: '🎓',
    roleAr: 'تطوير الويب وهندسة السيو',
    roleEn: 'Full-Stack Web & SEO Engineer',
    statusAr: 'منصة حية وفعالة',
    statusEn: 'Live Production System',
    highlightsAr: [
      { title: 'بوابات الدفع السعودية', text: 'تكامل آمن وسلس مع مدى وفيزا وبطاقات الائتمان المحلية.' },
      { title: 'زيادة الاشتراكات 150%', text: 'تحسين مسار الحجز الإلكتروني وتقليل معدل التخلي عن السلة.' },
      { title: 'شهادات إلكترونية آلية', text: 'إصدار وتوثيق شهادات الحضور للمتدربين تلقائياً عبر النظام.' }
    ],
    highlightsEn: [
      { title: 'Mada & Apple Pay Checkout', text: 'Secure, low-friction payment flows aligned with Saudi regulatory standards.' },
      { title: '150% Enrollment Surge', text: 'Streamlined corporate booking funnel reducing cart abandonment.' },
      { title: 'Automated Certification', text: 'Instant verified credential generation upon course completion.' }
    ]
  },
  {
    id: 'bayt-al-saha',
    nameAr: 'منصة بيت الصحة الطبية (Bayt Al-Saha)',
    nameEn: 'Bayt Al-Saha Medical Healthcare Center',
    domain: 'baytalsaha.com',
    country: 'sa',
    countryNameAr: 'المملكة العربية السعودية',
    countryNameEn: 'Saudi Arabia',
    category: 'medical',
    categoryNameAr: 'القطاع الطبي والرعاية',
    categoryNameEn: 'Healthcare & Medical',
    descriptionAr: 'بوابة طبية وصحية متطورة بالمملكة تقدم خدمات حجز المواعيد والعيادات التخصصية، استشارات طبية منزلية، واستمارات تسجيل المرضى المتوافقة مع معايير وزارة الصحة.',
    descriptionEn: 'Advanced medical healthcare portal in Saudi Arabia featuring clinic booking, home visit dispatch, medical department showcases, and HIPAA/MOH compliant intake.',
    services: ['website', 'medical', 'seo', 'booking'],
    servicesListAr: ['تطوير ووردبريس مخصص', 'نظام حجوزات طبية', 'سيو عيادات', 'تكامل واتساب الطبي'],
    servicesListEn: ['Custom WordPress', 'Medical Appointment Booking', 'Healthcare Schema', 'Direct WhatsApp Routing'],
    logo: '🩺',
    roleAr: 'مطور ويب رئيسي وأخصائي سيو',
    roleEn: 'Lead Web Engineer & Technical SEO',
    statusAr: 'منصة حية وفعالة',
    statusEn: 'Live Production System',
    highlightsAr: [
      { title: 'حجوزات فورية سلسة', text: 'نظام حجز مواعيد للأطباء والاستشاريين مع تذكيرات آلية بالرسائل.' },
      { title: 'سيو طبي متقدم', text: 'تصدر الكلمات المفتاحية التخصصية في الرياض وجدة على محرك بحث جوجل.' },
      { title: 'تجربة مستخدم سريعة', text: 'سرعة تحميل فائقة وتوافق كامل مع شاشات الهواتف الذكية.' }
    ],
    highlightsEn: [
      { title: 'Frictionless Clinic Intake', text: 'Automated doctor consultation scheduling with instant WhatsApp confirmations.' },
      { title: 'Medical Schema SEO', text: 'High-ranking SERP placement for specialized clinical procedures across KSA.' },
      { title: 'Sub-second Load Times', text: 'Optimized Core Web Vitals with 95+ mobile performance score.' }
    ]
  },
  {
    id: 'safwan-clinic',
    nameAr: 'عيادات صفوان الطبية (Safwan Clinic)',
    nameEn: 'Safwan Specialized Medical Clinic',
    domain: 'safwanclinic.com',
    country: 'sa',
    countryNameAr: 'المملكة العربية السعودية',
    countryNameEn: 'Saudi Arabia',
    category: 'medical',
    categoryNameAr: 'القطاع الطبي والرعاية',
    categoryNameEn: 'Healthcare & Medical',
    descriptionAr: 'موقع عيادات طبية متخصصة يشمل ملفات الأطباء، دليل العلاجات التخصصية، حجز الاستشارات، وتهيئة السيو المحلي للمرضى بالسعودية.',
    descriptionEn: 'Specialized clinic platform featuring practitioner directories, treatment pricing catalogs, consultation calendars, and localized regional search optimization.',
    services: ['website', 'seo', 'booking'],
    servicesListAr: ['تصميم عيادات فاخر', 'جدولة مواعيد الأطباء', 'سيو محلي سعودي'],
    servicesListEn: ['Medical Brand Design', 'Doctor Scheduling System', 'Local KSA SEO'],
    logo: '🏥',
    roleAr: 'مطور ويب وخبير تحسين محركات البحث',
    roleEn: 'Web Developer & SEO Specialist',
    statusAr: 'منصة حية وفعالة',
    statusEn: 'Live Production System',
    highlightsAr: [
      { title: 'واجهة عربية راقية', text: 'تصميم أنيق بخط كايرو مع درجات الزمرد والأبيض المريح للعين.' },
      { title: 'ملفات الأطباء والخبرات', text: 'عرض خبرات وشهادات الاستشاريين والتخصصات الفرعية بوضوح.' },
      { title: 'حجز واستفسار مباشر', text: 'ربط مباشر مع فريق خدمة العملاء والاستقبال عبر واتساب الموحد.' }
    ],
    highlightsEn: [
      { title: 'Bespoke Arabic Typography', text: 'Refined Cairo font hierarchy with reassuring medical color palette.' },
      { title: 'Practitioner Credentials', text: 'Dedicated doctor profiles highlighting fellowship certifications.' },
      { title: 'Integrated Reception Routing', text: 'One-touch consultation inquiry connecting to clinic front desk.' }
    ]
  },
  {
    id: 'dakhil-contracting',
    nameAr: 'شركة الدخيل للمقاولات (Dakhil Contracting)',
    nameEn: 'Dakhil General Contracting Company',
    domain: 'dakhilcontracting.com',
    country: 'sa',
    countryNameAr: 'المملكة العربية السعودية',
    countryNameEn: 'Saudi Arabia',
    category: 'portals',
    categoryNameAr: 'مواقع ومنصات كبرى',
    categoryNameEn: 'Websites & Platforms',
    descriptionAr: 'منصة مؤسسية فاخرة لشركة مقاولات وإنشاءات عامة كبرى بالسعودية، تستعرض المشاريع المنجزة، المعدات الثقيلة، شهادات التصنيف والتأهيل لمناقصات القطاع الحكومي.',
    descriptionEn: 'Corporate platform for an established Saudi civil engineering contractor. Showcases heavy machinery fleets, project credentials, and government prequalification indices.',
    services: ['website', 'branding', 'seo'],
    servicesListAr: ['موقع شركات مقاولات', 'كتالوج مشاريع وتأهيل', 'إبراز تصنيف المقاولين'],
    servicesListEn: ['Corporate Contractor Portal', 'Project Case Studies', 'Tender Prequalification Assets'],
    logo: '🏗️',
    roleAr: 'مهندس الويب والهوية الرقمية',
    roleEn: 'Web Engineer & Brand Specialist',
    statusAr: 'منصة حية وفعالة',
    statusEn: 'Live Production System',
    highlightsAr: [
      { title: 'استعراض مشاريع المقاولات', text: 'معرض بصري متقدم للمشاريع الإنشائية المنجزة وقيد التنفيذ.' },
      { title: 'ملف التأهيل للمناقصات', text: 'إبراز رخص وزارة البلديات والإسكان وشهادات السلامة والتصنيف.' },
      { title: 'تصميم مؤسسي فخم', text: 'هوية بصرية توحي بالثقة والصلابة الهندسية للعملاء والجهات الحكومية.' }
    ],
    highlightsEn: [
      { title: 'Civil Project Portfolio', text: 'High-resolution project gallery detailing infrastructure milestones.' },
      { title: 'Tender Prequalification Hub', text: 'Prominent display of MOMRA certification and ISO safety credentials.' },
      { title: 'Executive Engineering Polish', text: 'Dark luxury corporate branding inspiring trust among procurement directors.' }
    ]
  },
  {
    id: 'dr-amr-saeed',
    nameAr: 'مركز الدكتور عمرو سعيد (Dr. Amr Saeed)',
    nameEn: 'Dr. Amr Saeed Consultant Center',
    domain: 'dramrsaeed.com',
    country: 'eg',
    countryNameAr: 'جمهورية مصر العربية',
    countryNameEn: 'Egypt',
    category: 'medical',
    categoryNameAr: 'القطاع الطبي والرعاية',
    categoryNameEn: 'Healthcare & Medical',
    descriptionAr: 'موقع طبي استشاري فاخر يعرض الحالات الناجحة، المقالات الطبية الموثقة، ومسار حجز الاستشارات والعمليات التخصصية للمرضى من مصر والخليج.',
    descriptionEn: 'Specialized consultant surgeon portal detailing patient testimonials, clinical case studies, and cross-border consultation inquiries for Gulf patients.',
    services: ['website', 'medical', 'seo'],
    servicesListAr: ['موقع استشاري تخصصي', 'نظام المقالات الطبية', 'تحويل استشارات الخليج'],
    servicesListEn: ['Medical Practice Portal', 'Clinical Articles Hub', 'Cross-Border Inquiries'],
    logo: '👨‍⚕️',
    roleAr: 'مطور ويب وسيو تقني',
    roleEn: 'Web & Technical SEO Engineer',
    statusAr: 'منصة حية وفعالة',
    statusEn: 'Live Production System',
    highlightsAr: [
      { title: 'حالات علاجية موثقة', text: 'عرض صور قبل وبعد وشهادات المرضى وفق الضوابط الأخلاقية الطبية.' },
      { title: 'استشارات مرضى الخليج', text: 'قنوات تواصل سريعة لاستقبال وترتيب مواعيد الزوار من السعودية والإمارات.' },
      { title: 'تصدر الكلمات الجراحية', text: 'أداء ممتاز في السيو والمقالات المرجعية على محرك بحث جوجل.' }
    ],
    highlightsEn: [
      { title: 'Documented Case Results', text: 'Ethical presentation of surgical case histories and verified patient reviews.' },
      { title: 'GCC Patient Concierge', text: 'Dedicated inbound channels for international patients visiting Cairo.' },
      { title: 'Surgical Authority SEO', text: 'Top rankings for specialized medical search queries.' }
    ]
  },
  {
    id: 'equalite-foods',
    nameAr: 'إيكوالايت فودز (Equalite Foods)',
    nameEn: 'Equalite Foods Organic Marketplace',
    domain: 'equalitefoods.com',
    country: 'in',
    countryNameAr: 'الهند',
    countryNameEn: 'India',
    category: 'ecommerce',
    categoryNameAr: 'المتاجر الإلكترونية',
    categoryNameEn: 'E-Commerce & Stores',
    descriptionAr: 'متجر إلكتروني متكامل لشركة أغذية عضوية وصحية، يشمل نظام إدارة طلبات متطور، وتطبيق ولاء للعملاء مع خيارات شحن متعددة.',
    descriptionEn: 'Full-featured direct-to-consumer organic foods e-commerce store with real-time inventory tracking, nutritional index, and loyalty rewards.',
    services: ['website', 'sales', 'marketing', 'crm'],
    servicesListAr: ['متجر إلكتروني سريع', 'إدارة طلبات ومخزون', 'بوابات دفع دولية', 'برنامج ولاء'],
    servicesListEn: ['E-Commerce Storefront', 'Order & Inventory Hub', 'International Checkout', 'Loyalty Rewards'],
    logo: '🥗',
    roleAr: 'هندسة المتجر وتجربة المستخدم',
    roleEn: 'E-Commerce Engineer & UX Architect',
    statusAr: 'منصة حية وفعالة',
    statusEn: 'Live Production System',
    highlightsAr: [
      { title: 'متجر إلكتروني سريع', text: 'تجربة تسوق سلسة مع سلة شراء خفيفة ودفع بخطوة واحدة.' },
      { title: 'معلومات غذائية مفصلة', text: 'جداول القيم الغذائية والمكونات العضوية لكل منتج بأسلوب جذاب.' },
      { title: 'إدارة المخزون والتوصيل', text: 'نظام آلي لتتبع الطلبات والتنسيق مع شركات الشحن والتوصيل.' }
    ],
    highlightsEn: [
      { title: 'One-Click Fast Checkout', text: 'Frictionless purchasing funnel engineered for high mobile conversion.' },
      { title: 'Nutritional Transparency', text: 'Clear dietary facts, certifications, and organic authenticity badges.' },
      { title: 'Automated Shipping Pipeline', text: 'Direct carrier integration for automated dispatch and tracking numbers.' }
    ]
  },
  {
    id: 'dost-ziraat',
    nameAr: 'دوست زراعت إيشليتميلاري (Dost Ziraat)',
    nameEn: 'Dost Ziraat Agriculture & Farm ERP',
    domain: 'dostziraat.com',
    country: 'tr',
    countryNameAr: 'تركيا',
    countryNameEn: 'Turkey',
    category: 'erp',
    categoryNameAr: 'أنظمة المؤسسات وERP',
    categoryNameEn: 'ERP & Enterprise Systems',
    descriptionAr: 'نظام إدارة مزارع وثروة حيوانية مخصص (ERP) مع موقع تعريفي ولوحة تحكم متطورة لمتابعة المحاصيل والتكاليف وخطوط التوزيع.',
    descriptionEn: 'Custom agricultural ERP and corporate portal tracking crop lifecycles, livestock telemetry, supply logistics, and farm financials.',
    services: ['erp', 'website', 'marketing', 'app'],
    servicesListAr: ['نظام ERP زراعي', 'موقع تعريفي متعدد اللغات', 'لوحة تحليلات تكاليف'],
    servicesListEn: ['Agri-ERP System', 'Multilingual Web Portal', 'Financial Analytics Cockpit'],
    logo: '🚜',
    roleAr: 'مهندس أنظمة ERP وتطوير ويب',
    roleEn: 'ERP Systems Architect & Web Lead',
    statusAr: 'منصة حية وفعالة',
    statusEn: 'Live Production System',
    highlightsAr: [
      { title: 'نظام ERP مخصص', text: 'متابعة دورات إنتاج المحاصيل والمدخلات الزراعية والتكاليف بدقة.' },
      { title: 'تحليل البيانات والمحاصيل', text: 'مؤشرات أداء بيانية لدعم قرارات التوزيع والتصدير الذكي.' },
      { title: 'واجهة متعددة اللغات', text: 'دعم التركية والإنجليزية للتواصل مع المستوردين والشركاء الدوليين.' }
    ],
    highlightsEn: [
      { title: 'Custom Farm Resource ERP', text: 'End-to-end telemetry tracking harvest stages, seed inventory, and labor cost.' },
      { title: 'Yield Analytics Dashboard', text: 'Predictive production reporting optimizing export packaging.' },
      { title: 'Bilingual Export Presence', text: 'Seamless Turkish and English interfaces tailored for international partners.' }
    ]
  },
  {
    id: 'sumi-limited',
    nameAr: 'سومي ليمتد اليابانية (SUMI LIMITED)',
    nameEn: 'SUMI Limited Luxury Japanese Furniture',
    domain: 'sumi.fillinglife.co/en/',
    country: 'jp',
    countryNameAr: 'اليابان',
    countryNameEn: 'Japan',
    category: 'ecommerce',
    categoryNameAr: 'المتاجر الإلكترونية',
    categoryNameEn: 'E-Commerce & Stores',
    descriptionAr: 'متجر فاخر للعلامة اليابانية الراقية للأثاث والتصميم الداخلي، يركز على الفخامة وتجربة تسوق بصرية متميزة مع عروض فنية للأثاث الحرفي.',
    descriptionEn: 'Artisanal Japanese luxury furniture digital showroom and boutique e-commerce. Focused on minimalist aesthetics, fine joinery showcases, and high-ticket sales.',
    services: ['website', 'sales', 'marketing', 'branding'],
    servicesListAr: ['متجر أثاث فاخر', 'هوية يابانية راقية', 'إدارة طلبات التصنيع'],
    servicesListEn: ['Luxury Furniture Store', 'Minimalist Branding', 'Custom Order Pipeline'],
    logo: '🪑',
    roleAr: 'مهندس المتجر وتصميم التجربة الفاخرة',
    roleEn: 'Digital Boutique Architect & UX Specialist',
    statusAr: 'منصة حية وفعالة',
    statusEn: 'Live Production System',
    highlightsAr: [
      { title: 'تصميم ياباني مينيمالي', text: 'بساطة بصرية فائقة تعكس فخامة الخشب الياباني والحرفية الدقيقة.' },
      { title: 'معرض بصري فوتوغرافي', text: 'استعراض القطع الفنية بدقة فائقة من جميع الزوايا الإنشائية.' },
      { title: 'استهداف النخبة والمصممين', text: 'مسار مبيعات مخصص للمهندسين المعماريين وشركات التصميم الداخلي.' }
    ],
    highlightsEn: [
      { title: 'Zen Minimalist Aesthetics', text: 'Spacious editorial layouts honoring traditional Japanese wood craftsmanship.' },
      { title: 'High-Resolution Visual Assets', text: 'Macro texture photography spotlighting hand-carved joinery details.' },
      { title: 'Architect & Trade Gateway', text: 'Bespoke specification request funnel for luxury interior designers.' }
    ]
  },
  {
    id: 'mbm-brillen',
    nameAr: 'إم بي إم بريلين الألمانية (MBM Brillen)',
    nameEn: 'MBM Brillen German Luxury Eyewear',
    domain: 'mbm-brillen.de',
    country: 'de',
    countryNameAr: 'ألمانيا',
    countryNameEn: 'Germany',
    category: 'ecommerce',
    categoryNameAr: 'المتاجر الإلكترونية',
    categoryNameEn: 'E-Commerce & Stores',
    descriptionAr: 'متجر ألماني متخصص في النظارات الفاخرة، تم تزويده بنظام إدارة علاقات العملاء، وتجربة تصفح سلسة لإطارات النظارات والعدسات الطبية والشمسية.',
    descriptionEn: 'German boutique eyewear platform with frame cataloging, prescription parameter selection, and international distribution logistics.',
    services: ['website', 'sales', 'crm', 'branding'],
    servicesListAr: ['متجر نظارات تخصصي', 'إدارة المقاسات والعدسات', 'سوق ألماني وأوروبي'],
    servicesListEn: ['Specialized Optical Store', 'Lens Fitting Configurator', 'EU Distribution Flow'],
    logo: '👓',
    roleAr: 'مطور التجارة الإلكترونية وسلسلة البيع',
    roleEn: 'E-Commerce Engineer & Sales Architect',
    statusAr: 'منصة حية وفعالة',
    statusEn: 'Live Production System',
    highlightsAr: [
      { title: 'دقة ألمانية متناهية', text: 'نظام تصنيف وتصفية دقيق لإطارات النظارات حسب مقاس الوجه والعدسات.' },
      { title: 'تكامل الشحن الأوروبي', text: 'ربط بوابات الدفع الأوروبية وشركات الشحن السريع في ألمانيا والاتحاد الأوروبي.' },
      { title: 'نمو المبيعات الدولية', text: 'توسيع نطاق المبيعات بنسبة 200% بفضل تجربة التسوق الموثوقة.' }
    ],
    highlightsEn: [
      { title: 'Precision Frame Selector', text: 'Faceted filtering by bridge width, temple length, and facial ergonomics.' },
      { title: 'European Logistics Integration', text: 'Seamless DHL/UPS tracking and Euro payment gateway fulfillment.' },
      { title: '200% Annual Sales Growth', text: 'Accelerated cross-border European orders through responsive checkout.' }
    ]
  },
  {
    id: 'apex-scaffolding',
    nameAr: 'أبيكس سكافولدينج (Apex Scaffolding UAE)',
    nameEn: 'Apex Scaffolding Heavy Industrial Contracting',
    domain: 'apexscaffoldinguae.com',
    country: 'ae',
    countryNameAr: 'دولة الإمارات العربية المتحدة',
    countryNameEn: 'United Arab Emirates',
    category: 'erp',
    categoryNameAr: 'أنظمة المؤسسات وERP',
    categoryNameEn: 'ERP & Enterprise Systems',
    descriptionAr: 'نظام متكامل لإدارة موارد المقاولات والسقالات الصناعية (ERP)، وكتالوج منتجات B2B للمشاريع الإنشائية الكبرى في دبي وأبوظبي.',
    descriptionEn: 'Heavy scaffolding enterprise ERP and B2B industrial catalog for mega civil construction and oil & gas projects in Dubai and Abu Dhabi.',
    services: ['erp', 'website', 'sales', 'crm'],
    servicesListAr: ['نظام ERP للمقاولات', 'إدارة أسطول السقالات', 'مبيعات الشركات B2B'],
    servicesListEn: ['Contractor ERP System', 'Heavy Asset Fleet Tracking', 'B2B Procurement Funnel'],
    logo: '🏗️',
    roleAr: 'هندسة الويب وأنظمة المؤسسات',
    roleEn: 'Web Systems & ERP Architect',
    statusAr: 'منصة حية وفعالة',
    statusEn: 'Live Production System',
    highlightsAr: [
      { title: 'نظام ERP مخصص للإنشاءات', text: 'تتبع حركة تأجير السقالات والمخزون في مواقع العمل والمشاريع.' },
      { title: 'مبيعات B2B للشركات الكبرى', text: 'نظام طلب عروض أسعار فوري يسرّع إبرام العقود الصناعية الكبرى.' },
      { title: 'معايير أمان موثقة', text: 'عرض شهادات الجودة والسلامة البريطانية والدولية بوضوح للشركات الاستشارية.' }
    ],
    highlightsEn: [
      { title: 'Heavy Asset Rental Tracking', text: 'Live inventory telemetry across active high-rise construction job sites.' },
      { title: 'Rapid RFQ Generator', text: 'Fast-track engineering quotation requests for commercial general contractors.' },
      { title: 'Verified Safety Accreditations', text: 'Interactive showcase of British Standards (BS) scaffolding certifications.' }
    ]
  },
  {
    id: 'apex-power',
    nameAr: 'أبيكس باور كونسبتس (Apex Power Concepts)',
    nameEn: 'Apex Power Concepts Renewable Solar Systems',
    domain: 'apexpowerconcepts.com',
    country: 'ae',
    countryNameAr: 'دولة الإمارات العربية المتحدة',
    countryNameEn: 'United Arab Emirates',
    category: 'portals',
    categoryNameAr: 'مواقع ومنصات كبرى',
    categoryNameEn: 'Websites & Platforms',
    descriptionAr: 'منصة متخصصة في حلول الطاقة الشمسية والبطاريات الذكية مع حاسبة تفاعلية لحساب استهلاك الطاقة والعائد المالي على الاستثمار (ROI).',
    descriptionEn: 'Solar engineering platform featuring an interactive photovoltaic capacity calculator, inverter sizing tools, and clean-energy ROI projections.',
    services: ['erp', 'website', 'sales', 'marketing'],
    servicesListAr: ['حاسبة طاقة شمسية', 'كتالوج أنظمة الطاقة', 'مبيعات المشاريع السكنية والتجارية'],
    servicesListEn: ['Solar Sizing Calculator', 'Inverter Hardware Catalog', 'Clean Tech Sales Funnel'],
    logo: '☀️',
    roleAr: 'مطور الويب وحلول الحساب التفاعلي',
    roleEn: 'Full-Stack Developer & Calculation Engine',
    statusAr: 'منصة حية وفعالة',
    statusEn: 'Live Production System',
    highlightsAr: [
      { title: 'حاسبة الطاقة الذكية', text: 'أداة تفاعلية تمكّن العميل من حساب عدد الألواح والبطاريات المطلوبة لاحتياجاته.' },
      { title: 'كتالوج معدات متقدم', text: 'عرض المواصفات الفنية للعاكسات والبطاريات بمقارنات تفصيلية.' },
      { title: 'استقطاب المشاريع التجارية', text: 'استراتيجية محتوى عززت من الفوز بمشاريع طاقة نظيفة للمزارع والمستودعات.' }
    ],
    highlightsEn: [
      { title: 'Photovoltaic Sizing Tool', text: 'Custom client calculator determining panel wattage, battery banks, and payback period.' },
      { title: 'Industrial Inverter Spec Sheets', text: 'Structured comparative hardware catalog with downloadable CAD specs.' },
      { title: 'Commercial Contract Acquisition', text: 'Targeted technical content winning off-grid farm and warehouse installations.' }
    ]
  },
  {
    id: 'neuroglow',
    nameAr: 'عيادات نيوروغلو الأمريكية (NEUROGLOW Clinic)',
    nameEn: 'NEUROGLOW Specialized Medical Clinic (USA)',
    domain: 'neuroglow.com',
    country: 'us',
    countryNameAr: 'الولايات المتحدة الأمريكية',
    countryNameEn: 'United States',
    category: 'medical',
    categoryNameAr: 'القطاع الطبي والرعاية',
    categoryNameEn: 'Healthcare & Medical',
    descriptionAr: 'عيادة طبية أمريكية متقدمة في تكساس. تم تطوير نظام حجز مواعيد ذكي متكامل مع التقويم الطبي، وموقع طبي يعرض البروتوكولات العلاجية.',
    descriptionEn: 'High-end American wellness clinic portal based in Texas. Features calendar-synced patient scheduling, HIPAA-conscious intake, and clinical protocols.',
    services: ['website', 'crm', 'marketing', 'booking'],
    servicesListAr: ['منصة طبية أمريكية', 'حجوزات ذكية متزامنة', 'سيو عيادات محلي في تكساس'],
    servicesListEn: ['US Clinical Platform', 'Calendar-Synced Scheduling', 'Texas Local Medical SEO'],
    logo: '🧠',
    roleAr: 'مهندس الويب والتكامل الطبي',
    roleEn: 'Web Architect & Clinical System Integrator',
    statusAr: 'منصة حية وفعالة',
    statusEn: 'Live Production System',
    highlightsAr: [
      { title: 'نمو الحجوزات 180%', text: 'تكامل الحجز الآلي قلل من المكالمات المفقودة وزاد معدل تأكيد المرضى بنسبة 180%.' },
      { title: 'تقليل المواعيد الملغاة', text: 'نظام تذكير آلي بالرسائل النصية والبريد أدى لانخفاض المواعيد غير المحضورة.' },
      { title: 'سيو طبي تخصصي', text: 'الظهور في المراكز الأولى لخدمات العيادة في دالاس وأوستن وتكساس.' }
    ],
    highlightsEn: [
      { title: '+180% Confirmed Bookings', text: 'Automated booking workflow eliminating phone tag and boosting client intake.' },
      { title: 'Low No-Show Rate', text: 'Automated SMS calendar reminders drastically reducing missed appointment slots.' },
      { title: 'Regional Medical Authority', text: 'Ranked #1 for specialized therapy treatment terms across Texas metro areas.' }
    ]
  },
  {
    id: 'ruifier',
    nameAr: 'رويفير لندن للمجوهرات (Ruifier London)',
    nameEn: 'Ruifier London Luxury Fine Jewelry',
    domain: 'ruifier.com',
    country: 'gb',
    countryNameAr: 'المملكة المتحدة',
    countryNameEn: 'United Kingdom',
    category: 'ecommerce',
    categoryNameAr: 'المتاجر الإلكترونية',
    categoryNameEn: 'E-Commerce & Stores',
    descriptionAr: 'متجر مجوهرات بريطاني فاخر يعرض القطع المصنوعة من الذهب والألماس بطريقة سينمائية وتجربة تسوق راقية للنخبة في لندن والعالم.',
    descriptionEn: 'British luxury fine jewelry brand storefront based in London. Showcases 18ct gold, diamonds, and bespoke jewelry collections with high-end shopping experience.',
    services: ['website', 'sales', 'marketing', 'branding'],
    servicesListAr: ['متجر مجوهرات راقي', 'هوية فاخرة في لندن', 'إدارة شحن المجوهرات الثمينة'],
    servicesListEn: ['Fine Jewelry Storefront', 'London Luxury Branding', 'Secure High-Value Shipping'],
    logo: '💎',
    roleAr: 'مهندس التجارة الفاخرة وتجربة المستخدم',
    roleEn: 'Luxury E-Commerce & UX Specialist',
    statusAr: 'منصة حية وفعالة',
    statusEn: 'Live Production System',
    highlightsAr: [
      { title: 'عرض تفاصيل الألماس', text: 'تقريب فائق الدقة لإظهار نقاء الأحجار الكريمة وصياغة الذهب الفاخر.' },
      { title: 'تجربة تسوق آمنة للمجوهرات', text: 'بوابات دفع مشفرة وتأمين شحن القطع الثمينة حول العالم.' },
      { title: 'حملات تسويق للنخبة', text: 'استهداف كبار الشخصيات ومحبي التصاميم الفريدة في بريطانيا والخليج.' }
    ],
    highlightsEn: [
      { title: 'Macro Gemstone Zoom', text: 'Ultra high-definition close-up rendering displaying diamond clarity and 18ct gold luster.' },
      { title: 'Insured Global Checkout', text: 'High-security payment processing and armored transit integration for worldwide delivery.' },
      { title: 'Elite Market Positioning', text: 'High-fashion editorial campaigns converting discerning jewelry collectors.' }
    ]
  },
  {
    id: 'absher-bh',
    nameAr: 'أبشر لتخليص المعاملات (Absher Bahrain)',
    nameEn: 'Absher Government Services Bahrain',
    domain: 'absherbh.com',
    country: 'bh',
    countryNameAr: 'مملكة البحرين',
    countryNameEn: 'Bahrain',
    category: 'portals',
    categoryNameAr: 'مواقع ومنصات كبرى',
    categoryNameEn: 'Websites & Platforms',
    descriptionAr: 'منصة حكومية وتجارية لتخليص المعاملات وتأسيس الشركات، مزودة بنظام تتبع المعاملات وإدارة المستندات الرقمية.',
    descriptionEn: 'Bahrain business concierge and government clearance portal. Features live document tracking, corporate setup flows, and automated milestone updates.',
    services: ['website', 'erp', 'crm'],
    servicesListAr: ['منصة معاملات إلكترونية', 'تتبع المستندات آلياً', 'خدمات تأسيس الأعمال'],
    servicesListEn: ['Service Tracking Portal', 'Document Workflow ERP', 'Corporate Setup Gateway'],
    logo: '📄',
    roleAr: 'تطوير المنصة وهندسة الأنظمة',
    roleEn: 'Portal Engineer & Systems Lead',
    statusAr: 'منصة حية وفعالة',
    statusEn: 'Live Production System',
    highlightsAr: [
      { title: 'تتبع المعاملات لحظياً', text: 'تمكين العميل من معرفة حالة معاملته لدى الجهات الحكومية برقم الطلب.' },
      { title: 'إدارة المستندات الذكية', text: 'أرشفة إلكترونية آمنة تقلل من ضياع الأوراق وتسرّع زمن الإنجاز.' },
      { title: 'سيو خدمات تأسيس الشركات', text: 'تصدر نتائج البحث للمستثمرين الراغبين في تأسيس أعمال في المنامة.' }
    ],
    highlightsEn: [
      { title: 'Live Case Tracking', text: 'Transparent milestone lookup by tracking code for ministry submissions.' },
      { title: 'Encrypted Document Vault', text: 'Secure document management preventing administrative backlogs.' },
      { title: 'FDI Bahrain Placement', text: 'Primary search ranking for foreign investors incorporating companies in Manama.' }
    ]
  },
  {
    id: 'cool-edu',
    nameAr: 'كول إيديو للمنصات التعليمية (Cool Edu)',
    nameEn: 'Cool Edu Interactive Virtual Learning',
    domain: 'classes5.cooledu.info',
    country: 'eg',
    countryNameAr: 'جمهورية مصر العربية',
    countryNameEn: 'Egypt',
    category: 'portals',
    categoryNameAr: 'مواقع ومنصات كبرى',
    categoryNameEn: 'Websites & Platforms',
    descriptionAr: 'منصة تعليمية متطورة تدير الفصول الافتراضية، واختبارات الطلاب، وجداول المحاضرات لآلاف الطلاب والمعلمين.',
    descriptionEn: 'Virtual education platform serving thousands of students and teachers with interactive live classrooms, online exams, and attendance telemetry.',
    services: ['website', 'app', 'crm'],
    servicesListAr: ['منصة LMS متقدمة', 'فصول تفاعلية مباشرة', 'تقارير تقدم الطلاب'],
    servicesListEn: ['Scalable LMS Platform', 'Interactive Classrooms', 'Student Progress Metrics'],
    logo: '📚',
    roleAr: 'مهندس المنصة والأنظمة التفاعلية',
    roleEn: 'LMS Platform & Cloud Engineer',
    statusAr: 'منصة حية وفعالة',
    statusEn: 'Live Production System',
    highlightsAr: [
      { title: 'تحمل ضغط آلاف الطلاب', text: 'بنية تحتية سريعة تتحمل اختبارات متزامنة لعشرات الآلاف دون توقف.' },
      { title: 'تقارير أداء ذكية', text: 'لوحة قيادة لأولياء الأمور والمعلمين لمتابعة درجات الاختبارات ونسب الحضور.' },
      { title: 'تفاعل مرن وبسيط', text: 'واجهة استخدام تناسب جميع الأعمار على الهواتف والأجهزة اللوحية.' }
    ],
    highlightsEn: [
      { title: 'Concurrency at Scale', text: 'Cloud infrastructure engineered to handle thousands of concurrent test submissions without lag.' },
      { title: 'Parent & Teacher Cockpit', text: 'Comprehensive gradebook and quiz performance breakdown.' },
      { title: 'Mobile-Optimized Learning', text: 'Intuitive responsive interface accommodating young learners across any tablet.' }
    ]
  },
  {
    id: 'gadget-bd',
    nameAr: 'جادجيت بي دي (Gadget BD)',
    nameEn: 'Gadget BD',
    domain: 'gadgetbd.com',
    country: 'bd',
    countryNameAr: 'بنغلاديش',
    countryNameEn: '🇧🇩 Bangladesh',
    category: 'ecommerce',
    categoryNameAr: 'المتاجر الإلكترونية',
    categoryNameEn: 'Consumer Electronics E-Commerce',
    descriptionAr: 'بناء متجر إلكتروني فائق السرعة وسهل التصفح متخصص في إكسسوارات أبل والأجهزة الذكية، مدعوم بمحرك عروض ترويجية آلي، وحملات تسويق رقمي موجهة، وتطبيق تسوق للهواتف الذكية.',
    descriptionEn: 'Engineered a high-speed, easy-to-navigate e-commerce store specializing in Apple accessories, paired with an automated promotions engine, deal-driven digital marketing, and a mobile shopping application.',
    services: ['website', 'sales', 'marketing', 'app'],
    servicesListAr: ['متجر إلكتروني فائق السرعة', 'محرك عروض وخصومات آلي', 'تطبيق تسوق للجوال', 'تسويق رقمي للأداء'],
    servicesListEn: ['High-Speed Storefront', 'Promotions & Sales Engine', 'Mobile Shopping App', 'Performance Marketing'],
    logo: '📱',
    roleAr: 'تطوير المتاجر الإلكترونية وتطبيقات التجارة عبر الجوال',
    roleEn: 'E-Commerce Performance & Mobile Commerce',
    statusAr: 'مشروع مختار في معرض الأعمال',
    statusEn: 'Selected Portfolio Project',
    highlightsAr: [
      { title: 'تصفح وشراء فائق السرعة', text: 'هندسة واجهة متجر عالية الأداء رفعت سرعة التصفح ومعدلات إتمام الدفع الإلكتروني.' },
      { title: 'محرك عروض ديناميكي', text: 'نظام ترويجي متطور لإدارة العروض الخاطفة والباقات والخصومات الموقوتة.' },
      { title: 'استقطاب المتسوقين المستهدفين', text: 'مسارات تسويقية ترويجية تستهدف الباحثين عن الإلكترونيات وإكسسوارات الأجهزة الذكية.' }
    ],
    highlightsEn: [
      { title: 'High-Velocity Browsing', text: 'Performance-tuned storefront architecture improving browsing speed and checkout conversion rates.' },
      { title: 'Dynamic Offers Engine', text: 'Advanced promotional system managing flash sales, bundles, and time-limited discounts.' },
      { title: 'Deal-Focused Acquisition', text: 'Promotional marketing funnels capturing high-intent electronics and accessory shoppers.' }
    ]
  },
  {
    id: 'crown-turf',
    nameAr: 'كراون تيرف (Crown Turf)',
    nameEn: 'Crown Turf',
    domain: 'crownturf.ca',
    country: 'ca',
    countryNameAr: 'كندا',
    countryNameEn: '🇨🇦 Canada',
    category: 'portals',
    categoryNameAr: 'مواقع ومنصات كبرى',
    categoryNameEn: 'Landscaping & Estimation Platform',
    descriptionAr: 'تطوير منصة مؤسسية وتسويقية شاملة لشركة كندية متخصصة في العشب الصناعي وتنسيق المساحات، تتضمن نظام حجز معاينات قياس ميدانية، وحاسبة تفاعلية للمساحات والتكلفة، وتسويقاً محلياً مستهدفاً.',
    descriptionEn: 'Developed a comprehensive corporate and sales web platform for a Canadian artificial turf company, featuring an on-site measurement booking workflow, interactive area/cost calculator, and geo-targeted local Canadian marketing.',
    services: ['website', 'sales', 'marketing'],
    servicesListAr: ['منصة شركات ومبيعات', 'حاسبة تفاعلية للمساحات والتكلفة', 'نظام حجز معاينات', 'سيو وتسويق محلي بكندا'],
    servicesListEn: ['Corporate & Sales Website', 'Interactive Cost Calculator', 'Measurement Booking', 'Local Geo-Marketing'],
    logo: '🏡',
    roleAr: 'تطوير المنصة وأدوات التقدير التفاعلية',
    roleEn: 'Web Platform & Interactive Estimation Tools',
    statusAr: 'مشروع مختار في معرض الأعمال',
    statusEn: 'Selected Portfolio Project',
    highlightsAr: [
      { title: 'حاسبة مساحات وتكلفة تفاعلية', text: 'أداة تقدير ذاتية تحسب أبعاد العشب المطلوبة والتكلفة التقديرية للتركيب تلقائياً.' },
      { title: 'معرض مشاريع منجزة', text: 'عرض منظم للمشاريع السكنية والتجارية يبرز متانة المنتج وجودة التنفيذ.' },
      { title: 'استهداف جغرافي محلي بكندا', text: 'حملات سيو وتسويق إقليمي تولد طلبات تركيب مؤهلة عبر المقاطعات الكندية.' }
    ],
    highlightsEn: [
      { title: 'Interactive Area Calculator', text: 'Self-service estimation tool calculating required turf dimensions and projected installation cost automatically.' },
      { title: 'Installation Project Gallery', text: 'Structured residential and commercial showcase highlighting turf durability and finish quality.' },
      { title: 'Geo-Targeted Canadian SEO', text: 'Localized regional marketing campaigns generating qualified installation leads across Canadian provinces.' }
    ]
  },
  {
    id: 'osma-cosmetics',
    nameAr: 'أوسما كوزمتكس (Osma Cosmetics)',
    nameEn: 'Osma Cosmetics',
    domain: 'osmacosmetics.com',
    country: 'ae',
    countryNameAr: 'الإمارات العربية المتحدة',
    countryNameEn: '🇦🇪 United Arab Emirates',
    category: 'ecommerce',
    categoryNameAr: 'المتاجر الإلكترونية',
    categoryNameEn: 'Beauty & Cosmetics E-Commerce',
    descriptionAr: 'إنشاء متجر إلكتروني متكامل لمستحضرات التجميل، مزود بمحرك توصيات ذكي حسب نوع البشرة، واستراتيجية تسويق رقمي لقطاع الجمال، وتطبيق عناية مخصص يوفر تجربة تسوق راقية.',
    descriptionEn: 'Created a complete beauty e-commerce storefront, smart skin-type product recommendation engine, cosmetics marketing strategy, and skincare companion app designed with a refined, engaging beauty shopping experience.',
    services: ['website', 'sales', 'marketing', 'app', 'branding'],
    servicesListAr: ['متجر تجميل إلكتروني', 'محرك توصية ذكي للبشرة', 'تطبيق عناية بالجوال', 'تسويق رقمي وهوية بصرية'],
    servicesListEn: ['Beauty E-Commerce', 'Product Recommendation Engine', 'Skincare Mobile App', 'Beauty Marketing', 'Brand Identity'],
    logo: '💄',
    roleAr: 'تطوير المتجر وأنظمة التخصيص والهوية الرقمية',
    roleEn: 'Beauty E-Commerce, Personalization & Branding',
    statusAr: 'مشروع مختار في معرض الأعمال',
    statusEn: 'Selected Portfolio Project',
    highlightsAr: [
      { title: 'توصيات ذكية للمنتجات', text: 'محرك مطابقة يقترح مستحضرات التجميل وروتين العناية الملائم لنوع البشرة وأهداف العميلة.' },
      { title: 'تجربة مستخدم فاخرة', text: 'تصميم عرض بصري متقن يسهّل اكتشاف المنتجات ومقارنة المكونات.' },
      { title: 'حملات تسويقية مستهدفة بالإمارات', text: 'حملات رقمية رفعت التفاعل ومعدلات تكرار الشراء في السوق الإماراتي.' }
    ],
    highlightsEn: [
      { title: 'Smart Product Recommendations', text: 'Intelligent matching engine suggesting cosmetics and skincare routines tailored to skin type and goals.' },
      { title: 'Refined Beauty UX', text: 'Visual merchandising and storefront design crafted specifically for modern cosmetics discovery.' },
      { title: 'Targeted Beauty Campaigns', text: 'Audience-focused digital campaigns driving high engagement and repeat skincare purchases in the UAE.' }
    ]
  },
  {
    id: 'national-food-industries',
    nameAr: 'الشركة الوطنية للصناعات الغذائية (NFI Dubai)',
    nameEn: 'National Food Industries',
    domain: 'nfidubai.com',
    country: 'ae',
    countryNameAr: 'الإمارات العربية المتحدة',
    countryNameEn: '🇦🇪 United Arab Emirates',
    category: 'erp',
    categoryNameAr: 'أنظمة المؤسسات وERP',
    categoryNameEn: 'FMCG Manufacturing & Supply ERP',
    descriptionAr: 'تطوير منصة مؤسسية ونظام ERP لإدارة المنتجات وسلاسل الإمداد، مع حملات تسويقية للعلامات الغذائية وبرنامج ولاء للموزعين والعملاء لمصنع أغذية رائد في دبي.',
    descriptionEn: 'Developed a corporate web platform, product and supply management ERP, snack-brand marketing campaigns, and a customer/distributor loyalty program for a Dubai food manufacturer—strengthening market share and repeat orders.',
    services: ['website', 'erp', 'marketing', 'crm'],
    servicesListAr: ['منصة مؤسسية للصناعات الغذائية', 'نظام ERP للإمداد والمنتجات', 'برنامج ولاء وCRM', 'تسويق رقمي لقطاع الأغذية'],
    servicesListEn: ['Corporate Web Platform', 'Supply Chain & Product ERP', 'Loyalty & CRM Program', 'FMCG Digital Marketing'],
    logo: '🍿',
    roleAr: 'هندسة البوابة المؤسسية ونظام الإمداد والولاء',
    roleEn: 'Corporate Web, Supply ERP & Loyalty Systems',
    statusAr: 'مشروع مختار في معرض الأعمال',
    statusEn: 'Selected Portfolio Project',
    highlightsAr: [
      { title: 'تحسين سلاسل الإمداد والتوزيع', text: 'منظومة متكاملة لإدارة المنتجات وخطوط التوزيع رفعت كفاءة التوريد وقللت الهدر.' },
      { title: 'نمو تكرار الطلبات بنسبة 40%', text: 'برنامج مكافآت وولاء عزز ارتباط الموزعين والعملاء وزاد وتيرة الشراء المتكرر.' },
      { title: 'حملات إعلانية واسعة الانتشار', text: 'حملات رقمية متعددة القنوات وسّعت الحصة السوقية للعلامة في الإمارات والمنطقة.' }
    ],
    highlightsEn: [
      { title: 'Supply Chain Optimization', text: 'Integrated product and distribution management workflow improving delivery efficiency and reducing waste.' },
      { title: 'Customer Loyalty (+40% Repeat)', text: 'Rewards and retention program that increased repeat purchasing frequency by 40%.' },
      { title: 'Creative Brand Campaigns', text: 'Multi-channel FMCG digital campaigns expanding regional brand awareness across the UAE.' }
    ]
  },
  {
    id: 'hidn-ander',
    nameAr: 'هيدن آندر للأزياء الأوروبية (Hidn-Ander)',
    nameEn: 'Hidn-Ander',
    domain: 'hidnander.com',
    country: 'eu',
    countryNameAr: 'الاتحاد الأوروبي',
    countryNameEn: '🇪🇺 Europe',
    category: 'ecommerce',
    categoryNameAr: 'المتاجر الإلكترونية',
    categoryNameEn: 'Contemporary Fashion E-Commerce',
    descriptionAr: 'تطوير منصة تجارة إلكترونية أوروبية عصرية للأزياء، تضم نظام إدارة كتالوج متعدد الخصائص، ومسارات شحن عابرة للدول الأوروبية، وتطبيق تسوق للهواتف الذكية.',
    descriptionEn: 'Developed a sleek European fashion e-commerce platform featuring advanced multi-attribute catalog management, fashion storytelling campaigns, pan-European shipping workflows, and a mobile shopping app.',
    services: ['website', 'sales', 'marketing', 'app'],
    servicesListAr: ['متجر أزياء إلكتروني', 'كتالوج متعدد المقاسات والألوان', 'شحن أوروبي متكامل', 'تطبيق أزياء للجوال'],
    servicesListEn: ['Fashion E-Commerce', 'Multi-Attribute Catalog', 'Pan-European Logistics', 'Mobile Fashion App'],
    logo: '👗',
    roleAr: 'تطوير متجر الأزياء ومنظومة الشحن الأوروبي',
    roleEn: 'Fashion E-Commerce & Pan-European Fulfillment',
    statusAr: 'مشروع مختار في معرض الأعمال',
    statusEn: 'Selected Portfolio Project',
    highlightsAr: [
      { title: 'فلترة فورية متعددة الخصائص', text: 'تصفح سلس مع تصفية لحظية حسب الفئة والمقاس والقصة واللون.' },
      { title: 'منظومة شحن لعموم أوروبا', text: 'ربط قواعد الشحن والضرائب وتتبع الشحنات عبر مختلف دول الاتحاد الأوروبي.' },
      { title: 'سرد بصري للمجموعات الموسمية', text: 'استراتيجية محتوى بصري (Lookbook) تبرز الهوية الإبداعية للمجموعات الحديثة.' }
    ],
    highlightsEn: [
      { title: 'Faceted Fashion Discovery', text: 'Intuitive product browser with instant filtering across garment category, size, fit, and colorway.' },
      { title: 'Pan-European Shipping', text: 'Integrated multi-country European shipping rules, duties handling, and carrier tracking.' },
      { title: 'Visual Lookbook Marketing', text: 'Editorial visual content strategy showcasing authentic styling and seasonal collections.' }
    ]
  },
  {
    id: 'hijab-hive',
    nameAr: 'حجاب هايف (Hijab Hive)',
    nameEn: 'Hijab Hive',
    domain: 'hijabhive.com',
    country: 'gb',
    countryNameAr: 'المملكة المتحدة',
    countryNameEn: '🇬🇧 United Kingdom',
    category: 'ecommerce',
    categoryNameAr: 'المتاجر الإلكترونية',
    categoryNameEn: 'Modest Fashion E-Commerce',
    descriptionAr: 'بناء متجر إلكتروني متخصص في الأزياء المحتشمة بالمملكة المتحدة، مزود بنظام دقيق لمعاينة درجات الألوان والخامات، وتسويق مجتمعي، وتطبيق تسوق مخصص للجوال.',
    descriptionEn: 'Built a dedicated UK modest-fashion online store equipped with a true-to-life color and fabric management system, community-driven digital marketing, and a mobile shopping application tailored to customer preferences.',
    services: ['website', 'sales', 'marketing', 'app'],
    servicesListAr: ['متجر أزياء محتشمة', 'معاينة دقيقة للألوان والخامات', 'تطبيق تسوق للجوال', 'تسويق رقمي مجتمعي'],
    servicesListEn: ['Modest Fashion Store', 'Color & Fabric Swatch Engine', 'Mobile Shopping App', 'Community Marketing'],
    logo: '🧕',
    roleAr: 'تطوير المتجر وتجربة عرض المنتجات',
    roleEn: 'E-Commerce Storefront & Merchandising UX',
    statusAr: 'مشروع مختار في معرض الأعمال',
    statusEn: 'Selected Portfolio Project',
    highlightsAr: [
      { title: 'مكتبة ألوان معيارية دقيقة', text: 'نظام عينات لونية معايرة يساعد المتسوقات على اختيار الدرجة اللونية المطابقة بثقة.' },
      { title: 'تصنيف حسب الخامة والمناسبة', text: 'تنظيم ذكي للمنتجات حسب وزن القماش وملمسه وأبعاده والاستخدام اليومي أو الرسمي.' },
      { title: 'نمو مجتمعي في بريطانيا', text: 'استراتيجية محتوى وتفاعل مجتمعي حققت معدلات احتفاظ عالية بالعميلات في المملكة المتحدة.' }
    ],
    highlightsEn: [
      { title: 'Precision Color Library', text: 'Calibrated visual color-swatch system helping shoppers select exact shade matches with confidence.' },
      { title: 'Fabric & Occasion Taxonomy', text: 'Structured catalog filtering by textile weight, texture, dimensions, and everyday vs. formal wear.' },
      { title: 'Community-Led Brand Growth', text: 'Authentic community engagement and content marketing building strong customer retention in the UK.' }
    ]
  },
  {
    id: 'miss-spa',
    nameAr: 'مس سبا للعناية بالبشرة (Miss Spa)',
    nameEn: 'Miss Spa',
    domain: 'miss-spa.com',
    country: 'us',
    countryNameAr: 'الولايات المتحدة',
    countryNameEn: '🇺🇸 United States',
    category: 'ecommerce',
    categoryNameAr: 'المتاجر الإلكترونية',
    categoryNameEn: 'Skincare E-Commerce & Guided Care',
    descriptionAr: 'تطوير متجر إلكتروني أمريكي لمنتجات العناية بالبشرة، يضم محرك توصية حسب مشكلات البشرة، ومركزاً تثقيفياً لروتين العناية اليومي، وتطبيق جوال تفاعلي.',
    descriptionEn: 'Delivered a vibrant US skincare e-commerce store featuring a skin-concern recommendation engine, educational skincare routine hub, daily care mobile app, and retention-focused beauty marketing.',
    services: ['website', 'sales', 'marketing', 'app', 'branding'],
    servicesListAr: ['متجر عناية بالبشرة', 'محرك توصية حسب البشرة', 'تطبيق روتين العناية اليومي', 'مركز محتوى تثقيفي'],
    servicesListEn: ['Skincare E-Commerce', 'Skin-Type Recommendation Engine', 'Daily Care Mobile App', 'Educational Beauty Hub', 'Brand Identity'],
    logo: '🎭',
    roleAr: 'تطوير المتجر وأنظمة التخصيص وتجربة العلامة',
    roleEn: 'E-Commerce Personalization & Brand Experience',
    statusAr: 'مشروع مختار في معرض الأعمال',
    statusEn: 'Selected Portfolio Project',
    highlightsAr: [
      { title: 'مطابقة ذكية لمشكلات البشرة', text: 'أداة إرشادية ترشح المنتجات والعلاجات المناسبة لنوع البشرة واحتياجاتها.' },
      { title: 'مركز تعليمي لروتين العناية', text: 'أدلة تطبيقية وشروحات خطوة بخطوة عززت الزيارات العضوية من محركات البحث.' },
      { title: 'مسارات احتفاظ وتكرار الشراء', text: 'تسويق مؤتمت يدعم استمرارية روتين العناية ويرفع القيمة الدائمة للعميل.' }
    ],
    highlightsEn: [
      { title: 'Skin-Concern Matcher', text: 'Guided product recommendation engine matching treatments to skin type and targeted facial care needs.' },
      { title: 'Skincare Education Hub', text: 'Integrated step-by-step tutorials and daily skincare routine guides driving organic discovery.' },
      { title: 'Personalized Retention Flows', text: 'Customer-centric lifecycle marketing nurturing long-term skincare habits and repeat orders.' }
    ]
  },
  {
    id: 'lovinah',
    nameAr: 'لوفينا للعناية الفاخرة (Lovinah)',
    nameEn: 'Lovinah',
    domain: 'lovinah.com',
    country: 'us',
    countryNameAr: 'الولايات المتحدة',
    countryNameEn: '🇺🇸 United States',
    category: 'ecommerce',
    categoryNameAr: 'المتاجر الإلكترونية',
    categoryNameEn: 'Luxury Botanical Skincare Store',
    descriptionAr: 'هندسة متجر عالمي فاخر لمستحضرات العناية النباتية بالبشرة، يتضمن مستشار تجميل افتراضياً تفاعلياً، ومنظومة شحن دولي متعدد الوجهات، وتطبيق عناية متكامل.',
    descriptionEn: 'Engineered a luxury global skincare storefront featuring an interactive virtual beauty advisor, international multi-destination fulfillment, science-backed ingredient storytelling, and a holistic skincare companion app.',
    services: ['website', 'sales', 'marketing', 'app', 'branding'],
    servicesListAr: ['متجر عناية فاخر', 'مستشار بشرة افتراضي', 'شحن ودفع دولي', 'تطبيق عناية وهوية فاخرة'],
    servicesListEn: ['Luxury Skincare Store', 'Virtual Skin Advisor', 'Global E-Commerce Shipping', 'Skincare App', 'Luxury Brand Positioning'],
    logo: '✨',
    roleAr: 'تطوير المتجر العالمي الفاخر والمستشار التفاعلي',
    roleEn: 'Global Luxury E-Commerce & Interactive Advisory',
    statusAr: 'مشروع مختار في معرض الأعمال',
    statusEn: 'Selected Portfolio Project',
    highlightsAr: [
      { title: 'مستشار عناية افتراضي تفاعلي', text: 'تقييم تفاعلي يحلل احتياجات البشرة ويقترح برنامج عناية مخصصاً لكل عميلة.' },
      { title: 'منظومة بيع وشحن عالمية', text: 'بوابة دفع وشحن دولي تخدم الأسواق العالمية بعملات وخيارات توصيل متعددة.' },
      { title: 'عرض علمي للمكونات النباتية', text: 'تصميم تحريري فاخر يبرز التركيبات النشطة والفعالية المثبتة علمياً.' }
    ],
    highlightsEn: [
      { title: 'Virtual Skincare Advisor', text: 'Interactive skin assessment workflow analyzing user concerns and curating personalized regimens.' },
      { title: 'Worldwide Fulfillment', text: 'Global e-commerce checkout and cross-border shipping architecture serving international markets.' },
      { title: 'Science-Backed Positioning', text: 'Editorial presentation highlighting active botanical formulations and clinical skincare efficacy.' }
    ]
  },
  {
    id: 'sport-uniform',
    nameAr: 'سبورت يونيفورم للزي الرياضي (Sport Uniform)',
    nameEn: 'Sport Uniform',
    domain: 'sportuniform.com',
    country: 'us',
    countryNameAr: 'الولايات المتحدة',
    countryNameEn: '🇺🇸 United States',
    category: 'ecommerce',
    categoryNameAr: 'المتاجر الإلكترونية',
    categoryNameEn: 'Custom Teamwear & Configurator',
    descriptionAr: 'بناء منصة تجارة إلكترونية متخصصة في الملابس الرياضية، مزودة بأداة تفاعلية لتصميم وتخصيص الأطقم الرياضية، ونظام طلبات الجملة للأندية والمدارس.',
    descriptionEn: 'Built a specialized athletic apparel e-commerce platform featuring an interactive custom uniform design tool, bulk team/school roster ordering workflows, and sports club marketing campaigns.',
    services: ['website', 'sales', 'marketing', 'branding'],
    servicesListAr: ['أداة تخصيص وتصميم الأطقم', 'متجر ملابس رياضية', 'نظام طلبات الجملة للفرق', 'تسويق للأندية والمدارس'],
    servicesListEn: ['Custom Uniform Configurator', 'Athletic E-Commerce Store', 'Team & School Bulk Orders', 'Sports Brand Marketing'],
    logo: '⚽',
    roleAr: 'تطوير أداة التخصيص التفاعلية ومتجر الجملة والتجزئة',
    roleEn: 'Interactive Product Configurator & B2B/B2C Store',
    statusAr: 'مشروع مختار في معرض الأعمال',
    statusEn: 'Selected Portfolio Project',
    highlightsAr: [
      { title: 'مصمم قمصان وأطقم تفاعلي', text: 'أداة تخصيص تتيح للفرق اختيار الألوان والشعارات وأسماء وأرقام اللاعبين مباشرة.' },
      { title: 'بوابة طلبات الأندية والمدارس', text: 'مسار مبسط لإدخال قوائم المقاسات والكميات الكبيرة للأندية والدوريات الرياضية.' },
      { title: 'تسويق متخصص للقطاع الرياضي', text: 'حملات موجهة تبرز جودة الأقمشة الرياضية وسرعة التصنيع والتوريد.' }
    ],
    highlightsEn: [
      { title: 'Custom Jersey Designer', text: 'Interactive customization tool allowing teams to personalize colors, crests, player names, and numbers.' },
      { title: 'Team & School Order Portal', text: 'Streamlined bulk roster sizing and procurement workflow built for athletic clubs, leagues, and schools.' },
      { title: 'Performance Apparel Branding', text: 'Targeted sports marketing emphasizing fabric durability, athletic fit, and fast team turnaround.' }
    ]
  },
  {
    id: 'tech-group',
    nameAr: 'تك جروب للأنظمة البرمجية (Tech Group)',
    nameEn: 'Tech Group',
    domain: 'techgroup.co',
    country: 'us',
    countryNameAr: 'الولايات المتحدة',
    countryNameEn: '🇺🇸 United States',
    category: 'erp',
    categoryNameAr: 'أنظمة المؤسسات وERP',
    categoryNameEn: 'Software Project ERP & B2B Portal',
    descriptionAr: 'تسليم نظام ERP مخصص لإدارة المشاريع البرمجية، وبوابة تقنية مؤسسية، واستراتيجية تسويق B2B للشركات، وتطبيق تعاون للعملاء يركز على تكامل الأنظمة.',
    descriptionEn: 'Delivered a custom software project management ERP, corporate technology portal, enterprise B2B marketing strategy, and a client collaboration application focused on systems integration and engineering delivery.',
    services: ['website', 'erp', 'marketing', 'crm'],
    servicesListAr: ['بوابة تقنية مؤسسية', 'نظام ERP للمشاريع البرمجية', 'بوابة عملاء وCRM', 'تسويق مؤسسي B2B'],
    servicesListEn: ['Corporate Tech Portal', 'Software Project ERP', 'Client Portal & CRM', 'Enterprise B2B Marketing'],
    logo: '💻',
    roleAr: 'هندسة البوابة المؤسسية ونظام ERP لإدارة المشاريع',
    roleEn: 'Enterprise Portal & Project Management ERP',
    statusAr: 'مشروع مختار في معرض الأعمال',
    statusEn: 'Selected Portfolio Project',
    highlightsAr: [
      { title: 'نظام ERP لهندسة البرمجيات', text: 'منصة متكاملة لتتبع مراحل التنفيذ (Sprints) والمهام ومعالجة التذاكر ومواعيد التسليم.' },
      { title: 'تكامل الأنظمة المؤسسية', text: 'بناء طبقات ربط برمجية (Middleware & APIs) توحد منصات الأعمال المختلفة.' },
      { title: 'تموضع تسويقي لقطاع B2B', text: 'رسائل مؤسسية ومسارات استقطاب موجهة لصناع القرار التقني في الشركات الكبرى.' }
    ],
    highlightsEn: [
      { title: 'Software Engineering ERP', text: 'Integrated project management platform tracking sprints, tasks, issue resolution, and delivery milestones.' },
      { title: 'Multi-System Integration', text: 'Enterprise middleware and API integration connecting diverse operational business platforms.' },
      { title: 'B2B Enterprise Positioning', text: 'Strategic corporate messaging and lead generation tailored to enterprise technology decision-makers.' }
    ]
  },
  {
    id: 'green-farm',
    nameAr: 'جرين فارم للمنتجات العضوية (Green Farm)',
    nameEn: 'Green Farm',
    domain: 'greenfarm.org',
    country: 'ca',
    countryNameAr: 'كندا',
    countryNameEn: '🇨🇦 Canada',
    category: 'erp',
    categoryNameAr: 'أنظمة المؤسسات وERP',
    categoryNameEn: 'Organic Farm ERP & Direct-to-Home Store',
    descriptionAr: 'إنشاء نظام ERP لإدارة المزارع العضوية، ومتجر إلكتروني للبيع المباشر من المزرعة للمستهلك، وتطبيق طلبات يركز على المنتجات الطازجة والاستدامة البيئية.',
    descriptionEn: 'Created an organic farm management ERP, direct farm-to-consumer e-commerce store, sustainable produce marketing strategy, and a customer ordering app prioritizing freshness and environmental stewardship.',
    services: ['website', 'erp', 'sales', 'marketing'],
    servicesListAr: ['متجر بيع مباشر للمستهلك', 'نظام ERP للمزارع العضوية', 'إدارة توصيل المحاصيل', 'تسويق المنتجات المستدامة'],
    servicesListEn: ['Direct-to-Consumer Store', 'Organic Farm ERP', 'Farm-to-Home Logistics', 'Sustainability Marketing'],
    logo: '🌱',
    roleAr: 'هندسة نظام المزارع ومتجر التوصيل المباشر',
    roleEn: 'Agri-ERP & Direct Farm-to-Table E-Commerce',
    statusAr: 'مشروع مختار في معرض الأعمال',
    statusEn: 'Selected Portfolio Project',
    highlightsAr: [
      { title: 'تتبع الإنتاج من البذرة للحصاد', text: 'نظام ERP عضوي يراقب جداول الزراعة وشهادات الجودة وكميات المحاصيل.' },
      { title: 'توصيل مباشر من المزرعة للمنزل', text: 'نظام اشتراكات وتوجيه مسارات توصيل محلية ينقل المحاصيل الطازجة مباشرة للأسر.' },
      { title: 'إبراز الاستدامة الزراعية', text: 'محتوى تسويقي يعكس ممارسات الزراعة المتجددة وجودة المنتجات الكندية المحلية.' }
    ],
    highlightsEn: [
      { title: 'Seed-to-Harvest Organic ERP', text: 'End-to-end organic production tracking monitoring planting schedules, certifications, and harvest yields.' },
      { title: 'Farm-to-Home Delivery', text: 'Direct consumer subscription and local route delivery system bringing fresh harvests straight to households.' },
      { title: 'Sustainability Storytelling', text: 'Authentic eco-conscious marketing highlighting regenerative farming and local Canadian produce.' }
    ]
  },
  {
    id: 'digital-marketing-pro',
    nameAr: 'ديجيتال ماركتنج برو (Digital Marketing Pro)',
    nameEn: 'Digital Marketing Pro',
    domain: 'dmpro.net',
    country: 'ae',
    countryNameAr: 'الإمارات العربية المتحدة',
    countryNameEn: '🇦🇪 United Arab Emirates',
    category: 'erp',
    categoryNameAr: 'أنظمة المؤسسات وERP',
    categoryNameEn: 'Campaign Analytics & Agency CRM',
    descriptionAr: 'تطوير منصة CRM وإدارة حملات متعددة القنوات، وموقع مؤسسي للوكالة، وبوابة تقارير أداء للعملاء تركز على قياس العائد الفعلي على الاستثمار التسويقي.',
    descriptionEn: 'Engineered a multi-channel campaign management and CRM platform, agency corporate website, B2B client acquisition strategy, and a client reporting portal focused on measurable marketing ROI.',
    services: ['website', 'crm', 'marketing', 'branding'],
    servicesListAr: ['منصة وكالة رقمية', 'نظام CRM وتحليلات الحملات', 'بوابة تقارير العملاء', 'تطوير الهوية المؤسسية'],
    servicesListEn: ['Agency Web Platform', 'Campaign Analytics CRM', 'Client Reporting Portal', 'Agency Brand Positioning'],
    logo: '📈',
    roleAr: 'هندسة نظام CRM وبوابة التحليلات والموقع المؤسسي',
    roleEn: 'Campaign CRM, Analytics Portal & Web Engineering',
    statusAr: 'مشروع مختار في معرض الأعمال',
    statusEn: 'Selected Portfolio Project',
    highlightsAr: [
      { title: 'تحليلات العائد على الإنفاق الإعلاني', text: 'لوحة تقارير مركزية تتبع الإنفاق الإعلاني والتحويلات والعائد لكل قناة تسويقية.' },
      { title: 'تقسيم واستهداف دقيق للجمهور', text: 'مسارات عمل مبنية على البيانات لتحسين الاستحواذ المدفوع وتأهيل العملاء المحتملين.' },
      { title: 'بوابة وكالة مبنية على النتائج', text: 'موقع عالي التحويل يستعرض مؤشرات الأداء الشفافة وقصص نمو العملاء الموثقة.' }
    ],
    highlightsEn: [
      { title: 'Campaign ROI Analytics', text: 'Centralized performance reporting system tracking multi-channel ad spend, conversions, and client ROI.' },
      { title: 'Precision Audience Targeting', text: 'Data-driven segmentation workflows optimizing paid acquisition and lead qualification.' },
      { title: 'Outcome-Driven Agency Hub', text: 'High-converting agency portal built around transparent KPIs and documented client growth.' }
    ]
  },
  {
    id: 'fitness-world',
    nameAr: 'فتنس وورلد للتدريب الرقمي (Fitness World)',
    nameEn: 'Fitness World',
    domain: 'fitnessworld.com',
    country: 'us',
    countryNameAr: 'الولايات المتحدة',
    countryNameEn: '🇺🇸 United States',
    category: 'web-apps',
    categoryNameAr: 'تطبيقات الويب والجوال',
    categoryNameEn: 'Digital Coaching & Fitness Platform',
    descriptionAr: 'بناء منصة تدريب ولياقة رقمية متكاملة، ونظام لتتبع التمارين والإنجازات، وتطبيق جوال مرافق للتدريب والتغذية يعزز التزام المشتركين.',
    descriptionEn: 'Built an all-in-one digital fitness training platform, workout and milestone tracking system, health-focused acquisition strategy, and a mobile training and nutrition companion app.',
    services: ['website', 'app', 'marketing', 'crm'],
    servicesListAr: ['منصة تدريب رياضي', 'تطبيق تمارين وتغذية', 'نظام متابعة المشتركين CRM', 'تسويق صحي ورياضي'],
    servicesListEn: ['Fitness Coaching Portal', 'Workout & Nutrition App', 'Member Retention CRM', 'Health & Fitness Marketing'],
    logo: '🏋️',
    roleAr: 'تطوير منصة اللياقة وتطبيق التدريب ونظام CRM',
    roleEn: 'Fitness Platform, Mobile Coaching & Member CRM',
    statusAr: 'مشروع مختار في معرض الأعمال',
    statusEn: 'Selected Portfolio Project',
    highlightsAr: [
      { title: 'تتبع التمارين والأرقام القياسية', text: 'سجلات تدريب تفاعلية ترصد تطور التمارين ومستوى الأداء الأسبوعي لكل مشترك.' },
      { title: 'خطط تغذية متكاملة', text: 'نظام تخطيط وجبات مهيكل ومرتبط مباشرة بالبرنامج التدريبي الخاص بكل عضو.' },
      { title: 'محرك تحفيز واستمرارية', text: 'متابعة دورية مع المدربين وسلاسل إنجاز رفعت معدلات الالتزام طويل الأمد.' }
    ],
    highlightsEn: [
      { title: 'Workout & Milestone Tracking', text: 'Interactive training logs monitoring exercise progression, personal records, and weekly performance.' },
      { title: 'Integrated Nutrition Plans', text: 'Structured meal-planning system synchronized directly with each member’s training program.' },
      { title: 'Motivation & Retention Engine', text: 'Goal streaks, coach check-ins, and accountability workflows boosting long-term member consistency.' }
    ]
  }
];

// All 25 Verified Projects Imported & Synchronized from web.html (English Version)
const EN_PORTFOLIO_PROJECTS = [
  {
    id: 'bahrain-finder',
    nameEn: 'Bahrain Finder',
    domain: 'bahrainfinder.bh',
    country: 'bh',
    countryNameEn: '🇧🇭 Bahrain',
    categoryNameEn: 'Real Estate Digital Platform',
    descriptionEn: 'An integrated digital real estate platform for discovering, buying, and selling properties across Bahrain. Delivered a custom content management system, interactive property map, advanced faceted search engine, integrated client/broker CRM, and comprehensive digital marketing strategy.',
    services: ['website', 'marketing', 'crm', 'branding'],
    servicesListEn: ['Website Development', 'Digital Marketing', 'CRM System', 'Brand Development'],
    logo: '🏢',
    roleEn: 'Full-Stack Web, CRM & Digital Strategy',
    statusEn: 'Selected Portfolio Project',
    highlightsEn: [
      { title: 'Marketing Growth (+300%)', text: 'Increased platform traffic by 300% within 6 months through a structured digital marketing and search strategy.' },
      { title: 'Custom Technical Platform', text: 'Engineered a bespoke real estate CMS with an advanced administrative dashboard for listings and leads.' },
      { title: 'Integrated Client CRM', text: 'Implemented an end-to-end CRM workflow to track inquiries, elevate user experience, and accelerate property sales.' }
    ]
  },
  {
    id: 'bscenter',
    nameEn: 'Balanced Scorecard Center',
    domain: 'bscenter.org/ar',
    country: 'sa',
    countryNameEn: '🇸🇦 Saudi Arabia',
    categoryNameEn: 'Training & Consulting Platform',
    descriptionEn: 'Specialized training and management consulting center in Saudi Arabia. Delivered an interactive educational web portal, online course booking and payment gateway integration, educational marketing strategy, and a dedicated mobile learning application—contributing to a 150% first-year revenue and enrollment increase.',
    services: ['website', 'app', 'marketing', 'crm'],
    servicesListEn: ['Interactive Web Portal', 'Mobile Application', 'Educational Marketing', 'Trainee CRM'],
    logo: '🎓',
    roleEn: 'Web Portal, Mobile App & EdTech Growth',
    statusEn: 'Selected Portfolio Project',
    highlightsEn: [
      { title: 'Student Mobile Application', text: 'Built a dedicated smartphone app enabling remote learning, lesson tracking, and direct trainer interaction.' },
      { title: 'Online Course Booking', text: 'Integrated course registration system with secure electronic checkout and local Saudi payment gateways.' },
      { title: '+150% Enrollment Growth', text: 'Targeted educational campaigns increased course enrollments by 150% across Saudi Arabia and GCC states.' }
    ]
  },
  {
    id: 'equalite-foods',
    nameEn: 'Equalite Foods',
    domain: 'equalitefoods.com',
    country: 'in',
    countryNameEn: '🇮🇳 India',
    categoryNameEn: 'Health & Organic E-Commerce',
    descriptionEn: 'Developed a full-featured e-commerce storefront, order management workflow, health-focused product marketing strategy, and customer loyalty experience for a healthy and organic food brand—designed around nutritional clarity and effortless checkout.',
    services: ['website', 'sales', 'marketing', 'crm'],
    servicesListEn: ['E-Commerce Website', 'Sales & Order System', 'Digital Marketing', 'Customer Loyalty CRM'],
    logo: '🥗',
    roleEn: 'E-Commerce Architecture & Conversion UX',
    statusEn: 'Selected Portfolio Project',
    highlightsEn: [
      { title: 'Fast Multi-Payment Store', text: 'Engineered a fast, intuitive online store supporting multiple payment options and streamlined ordering.' },
      { title: 'Nutritional Product Design', text: 'Clean visual presentation reflecting organic product quality alongside detailed nutritional profiles.' },
      { title: 'Health-Focused Marketing', text: 'Targeted digital marketing campaigns highlighting nutritional value to attract health-conscious buyers.' }
    ]
  },
  {
    id: 'dost-ziraat',
    nameEn: 'Dost Ziraat',
    domain: 'dostziraat.com',
    country: 'tr',
    countryNameEn: '🇹🇷 Turkey',
    categoryNameEn: 'Agriculture & Livestock ERP',
    descriptionEn: 'Delivered an integrated farm and livestock management system (ERP), corporate web portal, agricultural product marketing strategy, and crop-monitoring application designed to optimize production efficiency and distribution operations.',
    services: ['erp', 'website', 'marketing', 'app'],
    servicesListEn: ['Farm ERP System', 'Corporate Website', 'Crop Monitoring App', 'Agricultural Marketing'],
    logo: '🚜',
    roleEn: 'ERP Systems & Web Engineering',
    statusEn: 'Selected Portfolio Project',
    highlightsEn: [
      { title: 'Custom Farm ERP', text: 'Tailored agricultural ERP tracking crops, livestock lifecycles, and operational production costs.' },
      { title: 'Production Data Analytics', text: 'Decision-support analytics dashboards optimizing harvest planning and supply distribution.' },
      { title: 'Sustainable Agri-Marketing', text: 'Digital positioning strategy emphasizing agricultural quality, traceability, and sustainability.' }
    ]
  },
  {
    id: 'sumi-limited',
    nameEn: 'SUMI LIMITED',
    domain: 'sumi.fillinglife.co/en/',
    country: 'jp',
    countryNameEn: '🇯🇵 Japan',
    categoryNameEn: 'Luxury Furniture E-Commerce',
    descriptionEn: 'Built an artistic digital showroom and e-commerce storefront for a luxury Japanese furniture brand, complete with custom order management, targeted high-end marketing, and an interactive 3D product visualization experience.',
    services: ['website', 'sales', 'marketing', 'branding'],
    servicesListEn: ['Luxury E-Commerce', 'Order & Sales System', '3D Showcase UX', 'Luxury Brand Identity'],
    logo: '🪑',
    roleEn: 'Luxury Digital Showroom & E-Commerce',
    statusEn: 'Selected Portfolio Project',
    highlightsEn: [
      { title: 'Interactive 3D Visualization', text: '3D product viewing experience enabling clients to inspect fine joinery and preview placement virtually.' },
      { title: 'Refined Luxury Aesthetics', text: 'Minimalist Japanese editorial design reflecting fine craftsmanship and premium brand positioning.' },
      { title: 'High-End Audience Targeting', text: 'Tailored digital strategy reaching luxury homeowners, architects, and interior design studios.' }
    ]
  },
  {
    id: 'mbm-brillen',
    nameEn: 'MBM Brillen',
    domain: 'mbm-brillen.de',
    country: 'de',
    countryNameEn: '🇩🇪 Germany',
    categoryNameEn: 'Luxury Eyewear E-Commerce & AR',
    descriptionEn: 'Partnered with a German luxury eyewear brand to build an integrated online store, CRM platform, international sales strategy, and an augmented-reality virtual frame try-on app—helping expand international online sales.',
    services: ['website', 'sales', 'crm', 'app', 'branding'],
    servicesListEn: ['E-Commerce Storefront', 'AR Virtual Try-On App', 'CRM & Multi-Store Sync', 'International Sales', 'Brand Identity'],
    logo: '👓',
    roleEn: 'E-Commerce, CRM & Interactive App Solutions',
    statusEn: 'Selected Portfolio Project',
    highlightsEn: [
      { title: 'AR Virtual Try-On', text: 'Interactive smartphone camera try-on capability allowing customers to preview eyewear frames before purchase.' },
      { title: '+200% Online Sales Growth', text: 'International digital sales strategy drove a 200% increase in online revenue within one year.' },
      { title: 'Multi-Location Inventory Sync', text: 'Unified inventory and order management across multiple retail outlets and regional warehouses.' }
    ]
  },
  {
    id: 'gadget-bd',
    nameEn: 'Gadget BD',
    domain: 'gadgetbd.com',
    country: 'bd',
    countryNameEn: '🇧🇩 Bangladesh',
    categoryNameEn: 'Consumer Electronics E-Commerce',
    descriptionEn: 'Engineered a high-speed, easy-to-navigate e-commerce store specializing in Apple accessories, paired with an automated promotions engine, deal-driven digital marketing, and a mobile shopping application.',
    services: ['website', 'sales', 'marketing', 'app'],
    servicesListEn: ['High-Speed Storefront', 'Promotions & Sales Engine', 'Mobile Shopping App', 'Performance Marketing'],
    logo: '📱',
    roleEn: 'E-Commerce Performance & Mobile Commerce',
    statusEn: 'Selected Portfolio Project',
    highlightsEn: [
      { title: 'High-Velocity Browsing', text: 'Performance-tuned storefront architecture improving browsing speed and checkout conversion rates.' },
      { title: 'Dynamic Offers Engine', text: 'Advanced promotional system managing flash sales, bundles, and time-limited discounts.' },
      { title: 'Deal-Focused Acquisition', text: 'Promotional marketing funnels capturing high-intent electronics and accessory shoppers.' }
    ]
  },
  {
    id: 'crown-turf',
    nameEn: 'Crown Turf',
    domain: 'crownturf.ca',
    country: 'ca',
    countryNameEn: '🇨🇦 Canada',
    categoryNameEn: 'Landscaping & Estimation Platform',
    descriptionEn: 'Developed a comprehensive corporate and sales web platform for a Canadian artificial turf company, featuring an on-site measurement booking workflow, interactive area/cost calculator, and geo-targeted local Canadian marketing.',
    services: ['website', 'sales', 'marketing'],
    servicesListEn: ['Corporate & Sales Website', 'Interactive Cost Calculator', 'Measurement Booking', 'Local Geo-Marketing'],
    logo: '🏡',
    roleEn: 'Web Platform & Interactive Estimation Tools',
    statusEn: 'Selected Portfolio Project',
    highlightsEn: [
      { title: 'Interactive Area Calculator', text: 'Self-service estimation tool calculating required turf dimensions and projected installation cost automatically.' },
      { title: 'Installation Project Gallery', text: 'Structured residential and commercial showcase highlighting turf durability and finish quality.' },
      { title: 'Geo-Targeted Canadian SEO', text: 'Localized regional marketing campaigns generating qualified installation leads across Canadian provinces.' }
    ]
  },
  {
    id: 'neuroglow',
    nameEn: 'NEUROGLOW',
    domain: 'neuroglow.com',
    country: 'us',
    countryNameEn: '🇺🇸 United States',
    categoryNameEn: 'Specialized Medical Clinic Platform',
    descriptionEn: 'Delivered an advanced patient appointment scheduling system, clinical website with an educational medical blog, compliant healthcare marketing strategy, and a patient follow-up application—increasing confirmed bookings by 180%.',
    services: ['website', 'app', 'crm', 'marketing'],
    servicesListEn: ['Medical Clinic Portal', 'Smart Booking & CRM', 'Patient Follow-Up App', 'Healthcare Marketing'],
    logo: '🏥',
    roleEn: 'Clinical Web Platform, Booking & Patient CRM',
    statusEn: 'Selected Portfolio Project',
    highlightsEn: [
      { title: 'Smart Calendar Booking (+180%)', text: 'Calendar-synced appointment system with automated reminders that reduced no-shows and grew bookings by 180%.' },
      { title: 'Patient Care Companion App', text: 'Dedicated follow-up application tracking patient progress, treatment outcomes, and care guidance.' },
      { title: 'Compliant Medical Marketing', text: 'Specialized healthcare digital strategy aligned with clinical advertising regulations.' }
    ]
  },
  {
    id: 'absher-bh',
    nameEn: 'Absher',
    domain: 'absherbh.com',
    country: 'bh',
    countryNameEn: '🇧🇭 Bahrain',
    categoryNameEn: 'Government Services & Clearance ERP',
    descriptionEn: 'Built an end-to-end transaction management platform, public service portal, service marketing strategy, and staff operations application for a government transaction clearance firm in Bahrain—reducing turnaround times and paperwork errors.',
    services: ['website', 'erp', 'crm', 'app'],
    servicesListEn: ['Services Web Portal', 'Transaction Workflow ERP', 'Client Tracking CRM', 'Staff Operations App'],
    logo: '📄',
    roleEn: 'Service Portal & Workflow ERP Engineering',
    statusEn: 'Selected Portfolio Project',
    highlightsEn: [
      { title: 'End-to-End Case Tracking', text: 'Integrated transaction lifecycle tracking from intake to completion with automated client notifications.' },
      { title: 'Smart Document Management', text: 'Structured digital document generation and archiving that minimizes manual paperwork errors.' },
      { title: 'Turnaround Time Analytics', text: 'Operational SLA monitoring measuring processing duration per transaction and improving staff productivity.' }
    ]
  },
  {
    id: 'osma-cosmetics',
    nameEn: 'Osma Cosmetics',
    domain: 'osmacosmetics.com',
    country: 'ae',
    countryNameEn: '🇦🇪 United Arab Emirates',
    categoryNameEn: 'Beauty & Cosmetics E-Commerce',
    descriptionEn: 'Created a complete beauty e-commerce storefront, smart skin-type product recommendation engine, cosmetics marketing strategy, and skincare companion app designed with a refined, engaging beauty shopping experience.',
    services: ['website', 'sales', 'marketing', 'app', 'branding'],
    servicesListEn: ['Beauty E-Commerce', 'Product Recommendation Engine', 'Skincare Mobile App', 'Beauty Marketing', 'Brand Identity'],
    logo: '💄',
    roleEn: 'Beauty E-Commerce, Personalization & Branding',
    statusEn: 'Selected Portfolio Project',
    highlightsEn: [
      { title: 'Smart Product Recommendations', text: 'Intelligent matching engine suggesting cosmetics and skincare routines tailored to skin type and goals.' },
      { title: 'Refined Beauty UX', text: 'Visual merchandising and storefront design crafted specifically for modern cosmetics discovery.' },
      { title: 'Targeted Beauty Campaigns', text: 'Audience-focused digital campaigns driving high engagement and repeat skincare purchases in the UAE.' }
    ]
  },
  {
    id: 'national-food-industries',
    nameEn: 'National Food Industries',
    domain: 'nfidubai.com',
    country: 'ae',
    countryNameEn: '🇦🇪 United Arab Emirates',
    categoryNameEn: 'FMCG Manufacturing & Supply ERP',
    descriptionEn: 'Developed a corporate web platform, product and supply management ERP, snack-brand marketing campaigns, and a customer/distributor loyalty program for a Dubai food manufacturer—strengthening market share and repeat orders.',
    services: ['website', 'erp', 'marketing', 'crm'],
    servicesListEn: ['Corporate Web Platform', 'Supply Chain & Product ERP', 'Loyalty & CRM Program', 'FMCG Digital Marketing'],
    logo: '🍿',
    roleEn: 'Corporate Web, Supply ERP & Loyalty Systems',
    statusEn: 'Selected Portfolio Project',
    highlightsEn: [
      { title: 'Supply Chain Optimization', text: 'Integrated product and distribution management workflow improving delivery efficiency and reducing waste.' },
      { title: 'Customer Loyalty (+40% Repeat)', text: 'Rewards and retention program that increased repeat purchasing frequency by 40%.' },
      { title: 'Creative Brand Campaigns', text: 'Multi-channel FMCG digital campaigns expanding regional brand awareness across the UAE.' }
    ]
  },
  {
    id: 'apex-scaffolding',
    nameEn: 'Apex Scaffolding',
    domain: 'apexscaffoldinguae.com',
    country: 'ae',
    countryNameEn: '🇦🇪 United Arab Emirates',
    categoryNameEn: 'Industrial Construction ERP & POS',
    descriptionEn: 'Engineered an integrated construction project management ERP, corporate portal with an interactive B2B equipment catalog, enterprise sales strategy, and a direct branch/site Point-of-Sale (POS) system for a leading UAE scaffolding company.',
    services: ['erp', 'website', 'sales', 'pos', 'crm'],
    servicesListEn: ['Construction ERP', 'Interactive B2B Catalog', 'Branch POS System', 'B2B Sales & CRM'],
    logo: '🏗️',
    roleEn: 'Enterprise ERP, POS & B2B Portal Architect',
    statusEn: 'Selected Portfolio Project',
    highlightsEn: [
      { title: 'Integrated Construction ERP', text: 'Custom enterprise resource planning tailored for scaffolding fleet rentals, inventory, and project sites.' },
      { title: 'Direct Branch POS System', text: 'Advanced point-of-sale terminal system managing direct equipment sales and rentals across branches.' },
      { title: 'Enterprise & Gov B2B Sales', text: 'Structured B2B quotation and sales pipeline expanding contracts with major contractors and public entities.' }
    ]
  },
  {
    id: 'apex-power',
    nameEn: 'Apex Power Concepts',
    domain: 'apexpowerconcepts.com',
    country: 'ae',
    countryNameEn: '🇦🇪 United Arab Emirates',
    categoryNameEn: 'Solar Energy ERP & ROI Platform',
    descriptionEn: 'Built a solar project management system, corporate website with an interactive energy-savings and ROI calculator, commercial/residential sales funnel, and a real-time solar performance monitoring application.',
    services: ['erp', 'website', 'sales', 'app', 'marketing'],
    servicesListEn: ['Solar Project ERP', 'Interactive Energy Calculator', 'Live Solar Monitoring App', 'Commercial B2B Sales', 'Clean-Tech Marketing'],
    logo: '☀️',
    roleEn: 'Solar ERP, Web Calculator & Telemetry App',
    statusEn: 'Selected Portfolio Project',
    highlightsEn: [
      { title: 'Real-Time Energy Monitoring', text: 'Application tracking live photovoltaic generation performance and system telemetry.' },
      { title: 'Interactive Solar ROI Calculator', text: 'Client-facing sizing tool estimating energy savings, system capacity, and financial payback periods.' },
      { title: 'Commercial & Residential Funnel', text: 'Targeted clean-energy sales positioning for commercial facilities, warehouses, and residential compounds.' }
    ]
  },
  {
    id: 'ruifier',
    nameEn: 'Ruifier',
    domain: 'ruifier.com',
    country: 'gb',
    countryNameEn: '🇬🇧 United Kingdom',
    categoryNameEn: 'Luxury Fine Jewelry E-Commerce',
    descriptionEn: 'Crafted a luxury online boutique for a British fine jewelry house in London, integrating high-precision 3D jewelry inspection, bespoke collector marketing, and a dedicated mobile shopping experience.',
    services: ['website', 'sales', 'marketing', 'app', 'branding'],
    servicesListEn: ['Luxury Jewelry Boutique', '3D Gemstone Viewer', 'Mobile Shopping App', 'Collector Marketing', 'Luxury Branding'],
    logo: '💎',
    roleEn: 'Luxury E-Commerce, 3D Showcase & Brand UX',
    statusEn: 'Selected Portfolio Project',
    highlightsEn: [
      { title: '3D Fine Detail Inspection', text: 'Interactive 3D visualization and high-magnification zoom showcasing gemstone clarity and gold craftsmanship.' },
      { title: 'Bespoke Luxury Experience', text: 'Editorial storefront architecture reflecting London fine-jewelry heritage and secure worldwide checkout.' },
      { title: 'Discerning Collector Outreach', text: 'High-end digital positioning tailored to luxury jewelry clientele in the UK and internationally.' }
    ]
  },
  {
    id: 'hidn-ander',
    nameEn: 'Hidn-Ander',
    domain: 'hidnander.com',
    country: 'eu',
    countryNameEn: '🇪🇺 Europe',
    categoryNameEn: 'Contemporary Fashion E-Commerce',
    descriptionEn: 'Developed a sleek European fashion e-commerce platform featuring advanced multi-attribute catalog management, fashion storytelling campaigns, pan-European shipping workflows, and a mobile shopping app.',
    services: ['website', 'sales', 'marketing', 'app'],
    servicesListEn: ['Fashion E-Commerce', 'Multi-Attribute Catalog', 'Pan-European Logistics', 'Mobile Fashion App'],
    logo: '👗',
    roleEn: 'Fashion E-Commerce & Pan-European Fulfillment',
    statusEn: 'Selected Portfolio Project',
    highlightsEn: [
      { title: 'Faceted Fashion Discovery', text: 'Intuitive product browser with instant filtering across garment category, size, fit, and colorway.' },
      { title: 'Pan-European Shipping', text: 'Integrated multi-country European shipping rules, duties handling, and carrier tracking.' },
      { title: 'Visual Lookbook Marketing', text: 'Editorial visual content strategy showcasing authentic styling and seasonal collections.' }
    ]
  },
  {
    id: 'hijab-hive',
    nameEn: 'Hijab Hive',
    domain: 'hijabhive.com',
    country: 'gb',
    countryNameEn: '🇬🇧 United Kingdom',
    categoryNameEn: 'Modest Fashion E-Commerce',
    descriptionEn: 'Built a dedicated UK modest-fashion online store equipped with a true-to-life color and fabric management system, community-driven digital marketing, and a mobile shopping application tailored to customer preferences.',
    services: ['website', 'sales', 'marketing', 'app'],
    servicesListEn: ['Modest Fashion Store', 'Color & Fabric Swatch Engine', 'Mobile Shopping App', 'Community Marketing'],
    logo: '🧕',
    roleEn: 'E-Commerce Storefront & Merchandising UX',
    statusEn: 'Selected Portfolio Project',
    highlightsEn: [
      { title: 'Precision Color Library', text: 'Calibrated visual color-swatch system helping shoppers select exact shade matches with confidence.' },
      { title: 'Fabric & Occasion Taxonomy', text: 'Structured catalog filtering by textile weight, texture, dimensions, and everyday vs. formal wear.' },
      { title: 'Community-Led Brand Growth', text: 'Authentic community engagement and content marketing building strong customer retention in the UK.' }
    ]
  },
  {
    id: 'miss-spa',
    nameEn: 'Miss Spa',
    domain: 'miss-spa.com',
    country: 'us',
    countryNameEn: '🇺🇸 United States',
    categoryNameEn: 'Skincare E-Commerce & Guided Care',
    descriptionEn: 'Delivered a vibrant US skincare e-commerce store featuring a skin-concern recommendation engine, educational skincare routine hub, daily care mobile app, and retention-focused beauty marketing.',
    services: ['website', 'sales', 'marketing', 'app', 'branding'],
    servicesListEn: ['Skincare E-Commerce', 'Skin-Type Recommendation Engine', 'Daily Care Mobile App', 'Educational Beauty Hub', 'Brand Identity'],
    logo: '🎭',
    roleEn: 'E-Commerce Personalization & Brand Experience',
    statusEn: 'Selected Portfolio Project',
    highlightsEn: [
      { title: 'Skin-Concern Matcher', text: 'Guided product recommendation engine matching treatments to skin type and targeted facial care needs.' },
      { title: 'Skincare Education Hub', text: 'Integrated step-by-step tutorials and daily skincare routine guides driving organic discovery.' },
      { title: 'Personalized Retention Flows', text: 'Customer-centric lifecycle marketing nurturing long-term skincare habits and repeat orders.' }
    ]
  },
  {
    id: 'lovinah',
    nameEn: 'Lovinah',
    domain: 'lovinah.com',
    country: 'us',
    countryNameEn: '🇺🇸 United States',
    categoryNameEn: 'Luxury Botanical Skincare Store',
    descriptionEn: 'Engineered a luxury global skincare storefront featuring an interactive virtual beauty advisor, international multi-destination fulfillment, science-backed ingredient storytelling, and a holistic skincare companion app.',
    services: ['website', 'sales', 'marketing', 'app', 'branding'],
    servicesListEn: ['Luxury Skincare Store', 'Virtual Skin Advisor', 'Global E-Commerce Shipping', 'Skincare App', 'Luxury Brand Positioning'],
    logo: '✨',
    roleEn: 'Global Luxury E-Commerce & Interactive Advisory',
    statusEn: 'Selected Portfolio Project',
    highlightsEn: [
      { title: 'Virtual Skincare Advisor', text: 'Interactive skin assessment workflow analyzing user concerns and curating personalized regimens.' },
      { title: 'Worldwide Fulfillment', text: 'Global e-commerce checkout and cross-border shipping architecture serving international markets.' },
      { title: 'Science-Backed Positioning', text: 'Editorial presentation highlighting active botanical formulations and clinical skincare efficacy.' }
    ]
  },
  {
    id: 'sport-uniform',
    nameEn: 'Sport Uniform',
    domain: 'sportuniform.com',
    country: 'us',
    countryNameEn: '🇺🇸 United States',
    categoryNameEn: 'Custom Teamwear & Configurator',
    descriptionEn: 'Built a specialized athletic apparel e-commerce platform featuring an interactive custom uniform design tool, bulk team/school roster ordering workflows, and sports club marketing campaigns.',
    services: ['website', 'sales', 'marketing', 'branding'],
    servicesListEn: ['Custom Uniform Configurator', 'Athletic E-Commerce Store', 'Team & School Bulk Orders', 'Sports Brand Marketing'],
    logo: '⚽',
    roleEn: 'Interactive Product Configurator & B2B/B2C Store',
    statusEn: 'Selected Portfolio Project',
    highlightsEn: [
      { title: 'Custom Jersey Designer', text: 'Interactive customization tool allowing teams to personalize colors, crests, player names, and numbers.' },
      { title: 'Team & School Order Portal', text: 'Streamlined bulk roster sizing and procurement workflow built for athletic clubs, leagues, and schools.' },
      { title: 'Performance Apparel Branding', text: 'Targeted sports marketing emphasizing fabric durability, athletic fit, and fast team turnaround.' }
    ]
  },
  {
    id: 'cool-edu',
    nameEn: 'Cool Edu',
    domain: 'classes5.cooledu.info',
    country: 'eg',
    countryNameEn: '🇪🇬 Egypt',
    categoryNameEn: 'Interactive Virtual Learning (LMS)',
    descriptionEn: 'Developed an integrated online learning community and LMS platform featuring live virtual classrooms, automated student progress reporting, educational marketing workflows, and a mobile learning application.',
    services: ['website', 'app', 'marketing', 'crm'],
    servicesListEn: ['LMS Web Platform', 'Virtual Classrooms', 'Student Mobile App', 'Academic Progress CRM'],
    logo: '📚',
    roleEn: 'LMS Architecture & Interactive Classroom Systems',
    statusEn: 'Selected Portfolio Project',
    highlightsEn: [
      { title: 'Live Virtual Classrooms', text: 'Integrated virtual classroom environment equipped with interactive teaching and participation tools.' },
      { title: 'Student Progress Analytics', text: 'Automated tracking of coursework completion, quiz scores, and detailed academic performance reports.' },
      { title: 'Collaborative Learning Hub', text: 'Interactive educational community features connecting instructors, students, and parents seamlessly.' }
    ]
  },
  {
    id: 'tech-group',
    nameEn: 'Tech Group',
    domain: 'techgroup.co',
    country: 'us',
    countryNameEn: '🇺🇸 United States',
    categoryNameEn: 'Software Project ERP & B2B Portal',
    descriptionEn: 'Delivered a custom software project management ERP, corporate technology portal, enterprise B2B marketing strategy, and a client collaboration application focused on systems integration and engineering delivery.',
    services: ['website', 'erp', 'marketing', 'crm'],
    servicesListEn: ['Corporate Tech Portal', 'Software Project ERP', 'Client Portal & CRM', 'Enterprise B2B Marketing'],
    logo: '💻',
    roleEn: 'Enterprise Portal & Project Management ERP',
    statusEn: 'Selected Portfolio Project',
    highlightsEn: [
      { title: 'Software Engineering ERP', text: 'Integrated project management platform tracking sprints, tasks, issue resolution, and delivery milestones.' },
      { title: 'Multi-System Integration', text: 'Enterprise middleware and API integration connecting diverse operational business platforms.' },
      { title: 'B2B Enterprise Positioning', text: 'Strategic corporate messaging and lead generation tailored to enterprise technology decision-makers.' }
    ]
  },
  {
    id: 'green-farm',
    nameEn: 'Green Farm',
    domain: 'greenfarm.org',
    country: 'ca',
    countryNameEn: '🇨🇦 Canada',
    categoryNameEn: 'Organic Farm ERP & Direct-to-Home Store',
    descriptionEn: 'Created an organic farm management ERP, direct farm-to-consumer e-commerce store, sustainable produce marketing strategy, and a customer ordering app prioritizing freshness and environmental stewardship.',
    services: ['website', 'erp', 'sales', 'marketing'],
    servicesListEn: ['Direct-to-Consumer Store', 'Organic Farm ERP', 'Farm-to-Home Logistics', 'Sustainability Marketing'],
    logo: '🌱',
    roleEn: 'Agri-ERP & Direct Farm-to-Table E-Commerce',
    statusEn: 'Selected Portfolio Project',
    highlightsEn: [
      { title: 'Seed-to-Harvest Organic ERP', text: 'End-to-end organic production tracking monitoring planting schedules, certifications, and harvest yields.' },
      { title: 'Farm-to-Home Delivery', text: 'Direct consumer subscription and local route delivery system bringing fresh harvests straight to households.' },
      { title: 'Sustainability Storytelling', text: 'Authentic eco-conscious marketing highlighting regenerative farming and local Canadian produce.' }
    ]
  },
  {
    id: 'digital-marketing-pro',
    nameEn: 'Digital Marketing Pro',
    domain: 'dmpro.net',
    country: 'ae',
    countryNameEn: '🇦🇪 United Arab Emirates',
    categoryNameEn: 'Campaign Analytics & Agency CRM',
    descriptionEn: 'Engineered a multi-channel campaign management and CRM platform, agency corporate website, B2B client acquisition strategy, and a client reporting portal focused on measurable marketing ROI.',
    services: ['website', 'crm', 'marketing', 'branding'],
    servicesListEn: ['Agency Web Platform', 'Campaign Analytics CRM', 'Client Reporting Portal', 'Agency Brand Positioning'],
    logo: '📈',
    roleEn: 'Campaign CRM, Analytics Portal & Web Engineering',
    statusEn: 'Selected Portfolio Project',
    highlightsEn: [
      { title: 'Campaign ROI Analytics', text: 'Centralized performance reporting system tracking multi-channel ad spend, conversions, and client ROI.' },
      { title: 'Precision Audience Targeting', text: 'Data-driven segmentation workflows optimizing paid acquisition and lead qualification.' },
      { title: 'Outcome-Driven Agency Hub', text: 'High-converting agency portal built around transparent KPIs and documented client growth.' }
    ]
  },
  {
    id: 'fitness-world',
    nameEn: 'Fitness World',
    domain: 'fitnessworld.com',
    country: 'us',
    countryNameEn: '🇺🇸 United States',
    categoryNameEn: 'Digital Coaching & Fitness Platform',
    descriptionEn: 'Built an all-in-one digital fitness training platform, workout and milestone tracking system, health-focused acquisition strategy, and a mobile training and nutrition companion app.',
    services: ['website', 'app', 'marketing', 'crm'],
    servicesListEn: ['Fitness Coaching Portal', 'Workout & Nutrition App', 'Member Retention CRM', 'Health & Fitness Marketing'],
    logo: '🏋️',
    roleEn: 'Fitness Platform, Mobile Coaching & Member CRM',
    statusEn: 'Selected Portfolio Project',
    highlightsEn: [
      { title: 'Workout & Milestone Tracking', text: 'Interactive training logs monitoring exercise progression, personal records, and weekly performance.' },
      { title: 'Integrated Nutrition Plans', text: 'Structured meal-planning system synchronized directly with each member’s training program.' },
      { title: 'Motivation & Retention Engine', text: 'Goal streaks, coach check-ins, and accountability workflows boosting long-term member consistency.' }
    ]
  },
  {
    id: 'bayt-al-saha',
    nameEn: 'Bayt Al-Saha Medical Healthcare Center',
    domain: 'baytalsaha.com',
    country: 'sa',
    countryNameEn: '🇸🇦 Saudi Arabia',
    categoryNameEn: 'Healthcare & Medical Portal',
    descriptionEn: 'Advanced medical healthcare portal in Saudi Arabia featuring clinic booking, home visit dispatch, medical department showcases, and MOH-compliant patient intake.',
    services: ['website', 'crm', 'marketing'],
    servicesListEn: ['Custom Medical Portal', 'Medical Appointment Booking', 'Healthcare Schema SEO', 'Direct WhatsApp Routing'],
    logo: '🩺',
    roleEn: 'Lead Web Engineer & Technical SEO',
    statusEn: 'Live Production System',
    highlightsEn: [
      { title: 'Frictionless Clinic Intake', text: 'Automated doctor consultation scheduling with instant WhatsApp confirmations.' },
      { title: 'Medical Schema SEO', text: 'High-ranking SERP placement for specialized clinical procedures across KSA.' },
      { title: 'Sub-second Load Times', text: 'Optimized Core Web Vitals with 95+ mobile performance score.' }
    ]
  },
  {
    id: 'safwan-clinic',
    nameEn: 'Safwan Specialized Medical Clinic',
    domain: 'safwanclinic.com',
    country: 'sa',
    countryNameEn: '🇸🇦 Saudi Arabia',
    categoryNameEn: 'Specialized Medical Clinic',
    descriptionEn: 'Specialized clinic platform featuring practitioner directories, treatment pricing catalogs, consultation calendars, and localized regional search optimization in Saudi Arabia.',
    services: ['website', 'crm', 'marketing'],
    servicesListEn: ['Medical Brand Design', 'Doctor Scheduling System', 'Local KSA SEO'],
    logo: '🏥',
    roleEn: 'Web Developer & SEO Specialist',
    statusEn: 'Live Production System',
    highlightsEn: [
      { title: 'Bespoke Medical Typography', text: 'Refined typographic hierarchy with reassuring clinical design language.' },
      { title: 'Practitioner Credentials', text: 'Dedicated doctor profiles highlighting fellowship certifications.' },
      { title: 'Integrated Reception Routing', text: 'One-touch consultation inquiry connecting to clinic front desk.' }
    ]
  },
  {
    id: 'dakhil-contracting',
    nameEn: 'Dakhil General Contracting Company',
    domain: 'dakhilcontracting.com',
    country: 'sa',
    countryNameEn: '🇸🇦 Saudi Arabia',
    categoryNameEn: 'Corporate Contracting & Prequalification',
    descriptionEn: 'Corporate platform for an established Saudi civil engineering contractor showcasing heavy machinery fleets, project credentials, and government tender prequalification indices.',
    services: ['website', 'branding', 'marketing'],
    servicesListEn: ['Corporate Contractor Portal', 'Project Case Studies', 'Tender Prequalification Assets'],
    logo: '🏗️',
    roleEn: 'Web Engineer & Brand Specialist',
    statusEn: 'Live Production System',
    highlightsEn: [
      { title: 'Civil Project Portfolio', text: 'High-resolution project gallery detailing infrastructure milestones.' },
      { title: 'Tender Prequalification Hub', text: 'Prominent display of MOMRA certification and ISO safety credentials.' },
      { title: 'Executive Engineering Polish', text: 'Dark luxury corporate branding inspiring trust among procurement directors.' }
    ]
  },
  {
    id: 'dr-amr-saeed',
    nameEn: 'Dr. Amr Saeed Consultant Center',
    domain: 'dramrsaeed.com',
    country: 'eg',
    countryNameEn: '🇪🇬 Egypt',
    categoryNameEn: 'Consultant Medical Practice Portal',
    descriptionEn: 'Specialized consultant medical portal detailing verified patient testimonials, clinical educational articles, and cross-border consultation workflows for GCC patients.',
    services: ['website', 'crm', 'marketing'],
    servicesListEn: ['Medical Practice Portal', 'Clinical Articles Hub', 'Cross-Border Inquiries'],
    logo: '👨‍⚕️',
    roleEn: 'Web & Technical SEO Engineer',
    statusEn: 'Live Production System',
    highlightsEn: [
      { title: 'Documented Case Results', text: 'Ethical presentation of clinical case histories and verified patient reviews.' },
      { title: 'GCC Patient Concierge', text: 'Dedicated inbound channels for international patients visiting Cairo.' },
      { title: 'Medical Authority SEO', text: 'Top rankings for specialized medical search queries.' }
    ]
  }
];

// Arabic Service categories for filter tabs
const AR_SERVICE_FILTERS = [
  { id: 'all', nameAr: 'جميع الأعمال المختارة (29)', nameEn: 'All Selected Projects (29)' },
  { id: 'websites', nameAr: 'المواقع الإلكترونية', nameEn: 'Websites' },
  { id: 'ecommerce', nameAr: 'المتاجر الإلكترونية', nameEn: 'E-Commerce' },
  { id: 'web-apps', nameAr: 'تطبيقات الويب', nameEn: 'Web Applications' },
  { id: 'software-systems', nameAr: 'أنظمة وبرمجيات أعمال', nameEn: 'Software & Business Systems' },
  { id: 'mobile-apps', nameAr: 'تطبيقات الجوال', nameEn: 'Mobile Applications' },
  { id: 'ui-ux', nameAr: 'تصميم واجهات UI/UX', nameEn: 'UI/UX Design' },
  { id: 'other-solutions', nameAr: 'حلول رقمية ومناقصات', nameEn: 'Other Digital Solutions' }
];

// English Service categories aligned with all 29 selected projects
const EN_SERVICE_FILTERS = [
  { id: 'all', nameEn: 'All Selected Projects (29)' },
  { id: 'website', nameEn: 'Websites & Portals' },
  { id: 'sales', nameEn: 'E-Commerce & Sales Systems' },
  { id: 'erp', nameEn: 'ERP Systems' },
  { id: 'crm', nameEn: 'CRM Systems' },
  { id: 'pos', nameEn: 'POS Systems' },
  { id: 'app', nameEn: 'Mobile Applications' },
  { id: 'marketing', nameEn: 'Digital Marketing' },
  { id: 'branding', nameEn: 'Brand Development' }
];

/* -------------------------------------------------------------
 * 0. CLEAN THEME STABILITY (DARK MODE EXCLUSIVE)
 * ------------------------------------------------------------- */
(function enforceDarkLuxuryTheme() {
  try {
    localStorage.removeItem('theme');
  } catch (e) {}
  if (document.documentElement) {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  init3DAnimatedBackground();
  initCustomCursor();
  initPortraitThemeTransition();
  initCard3DTilt();
  initMobileNav();
  initContactForm();
  initInteractivePortfolio();
  initBackToTopButton();
  initGlobalMobileAppNavigation();
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const swPath = (window.location.pathname.startsWith('/yg') ? '/yg' : '') + '/sw.js';
    navigator.serviceWorker.register(swPath).catch(() => {});
  });
}

/* -------------------------------------------------------------
 * 1. ORGANIC GLOWING RIBBON / WORM CURSOR
 * ------------------------------------------------------------- */
function initCustomCursor() {
  if (
    window.matchMedia('(hover: none) and (pointer: coarse)').matches ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return; // Touch device & reduced-motion guard
  }

  const existingContainer = document.getElementById('custom-cursor-container');
  if (existingContainer) existingContainer.remove();

  const container = document.createElement('div');
  container.id = 'custom-cursor-container';
  document.body.appendChild(container);

  const head = document.createElement('div');
  head.className = 'cursor-head';
  container.appendChild(head);

  const TRAIL_COUNT = 8;
  const trailSegments = [];
  for (let i = 0; i < TRAIL_COUNT; i++) {
    const seg = document.createElement('div');
    seg.className = 'cursor-trail';
    const size = Math.max(3, 11 - i * 1.1);
    seg.style.width = `${size}px`;
    seg.style.height = `${size}px`;
    seg.style.background = i % 2 === 0 ? 'rgba(229, 199, 139, 0.45)' : 'rgba(16, 185, 129, 0.55)';
    seg.style.boxShadow = `0 0 ${8 - i * 0.7}px rgba(16, 185, 129, 0.6)`;
    container.appendChild(seg);
    trailSegments.push({ el: seg, x: window.innerWidth / 2, y: window.innerHeight / 2 });
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let headX = mouseX;
  let headY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const interactiveSelector = 'a, button, input, textarea, select, .interactive-card, .portfolio-filter-btn, [data-project-id]';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelector)) {
      head.classList.add('cursor-expanding');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelector)) {
      head.classList.remove('cursor-expanding');
    }
  });

  function renderCursor() {
    headX += (mouseX - headX) * 0.25;
    headY += (mouseY - headY) * 0.25;
    head.style.left = `${headX}px`;
    head.style.top = `${headY}px`;

    let prevX = headX;
    let prevY = headY;

    trailSegments.forEach((seg, idx) => {
      seg.x += (prevX - seg.x) * (0.35 - idx * 0.02);
      seg.y += (prevY - seg.y) * (0.35 - idx * 0.02);
      seg.el.style.left = `${seg.x}px`;
      seg.el.style.top = `${seg.y}px`;
      prevX = seg.x;
      prevY = seg.y;
    });

    requestAnimationFrame(renderCursor);
  }

  requestAnimationFrame(renderCursor);
}

/* -------------------------------------------------------------
 * 2. DYNAMIC SUIT COLOR THEME & EXECUTIVE PORTRAIT
 * ------------------------------------------------------------- */
function initPortraitThemeTransition() {
  const isRTL = document.documentElement.dir === 'rtl' || document.documentElement.lang === 'ar';
  const themes = [
    { id: 'theme-charcoal', nameEn: 'Charcoal Black', nameAr: 'أسود فحمي', suit: '#1E293B', glow: 'rgba(148, 163, 184, 0.35)' },
    { id: 'theme-forest', nameEn: 'Dark Forest', nameAr: 'أخضر داكن', suit: '#064E3B', glow: 'rgba(5, 150, 105, 0.45)' },
    { id: 'theme-emerald', nameEn: 'Deep Emerald', nameAr: 'زمردي عميق', suit: '#047857', glow: 'rgba(16, 185, 129, 0.5)' },
    { id: 'theme-bright-emerald', nameEn: 'Bright Emerald', nameAr: 'زمردي ساطع', suit: '#059669', glow: 'rgba(110, 231, 183, 0.55)' },
    { id: 'theme-gold', nameEn: 'Metallic Gold', nameAr: 'الذهب الملكي', suit: '#C6A15B', glow: 'rgba(198, 161, 91, 0.5)' },
    { id: 'theme-yellow', nameEn: 'Warm Yellow', nameAr: 'ذهبي دافئ', suit: '#EAB308', glow: 'rgba(251, 191, 36, 0.45)' },
  ];

  let currentIdx = 4; // Default to Metallic Gold
  const root = document.documentElement;

  function applyTheme(idx) {
    themes.forEach((t) => {
      root.classList.remove(t.id);
      document.body.classList.remove(t.id);
    });
    const active = themes[idx];
    root.classList.add(active.id);
    document.body.classList.add(active.id);

    const suitLayer = document.getElementById('portrait-suit-glow');
    if (suitLayer) {
      suitLayer.style.boxShadow = `0 0 45px ${active.glow}, inset 0 0 30px ${active.glow}`;
      suitLayer.style.borderColor = active.suit;
    }

    const themeLabel = document.getElementById('active-theme-name');
    if (themeLabel) {
      themeLabel.textContent = isRTL ? active.nameAr : active.nameEn;
    }

    document.querySelectorAll('[data-theme-select]').forEach((btn) => {
      if (btn.getAttribute('data-theme-select') === active.id) {
        btn.classList.add('ring-2', 'ring-white', 'scale-110');
      } else {
        btn.classList.remove('ring-2', 'ring-white', 'scale-110');
      }
    });
  }

  applyTheme(currentIdx);

  document.querySelectorAll('[data-theme-select]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const themeId = btn.getAttribute('data-theme-select');
      const foundIdx = themes.findIndex((t) => t.id === themeId);
      if (foundIdx !== -1) {
        currentIdx = foundIdx;
        applyTheme(currentIdx);
      }
    });
  });

  const cycleBtn = document.getElementById('cycle-portrait-color');
  if (cycleBtn) {
    cycleBtn.addEventListener('click', () => {
      currentIdx = (currentIdx + 1) % themes.length;
      applyTheme(currentIdx);
    });
  }
}

/* -------------------------------------------------------------
 * 3. 3D CARD HOVER TILT
 * ------------------------------------------------------------- */
function initCard3DTilt() {
  const cards = document.querySelectorAll('.interactive-card');
  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

/* -------------------------------------------------------------
 * 4. MOBILE NAVIGATION DRAWER
 * ------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-nav-toggle') || document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-nav-drawer');
  if (!toggleBtn || !drawer) return;

  function closeDrawer() {
    drawer.classList.add('hidden');
    toggleBtn.setAttribute('aria-expanded', 'false');
  }

  function openDrawer() {
    drawer.classList.remove('hidden');
    toggleBtn.setAttribute('aria-expanded', 'true');
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isHidden = drawer.classList.contains('hidden');
    if (isHidden) {
      openDrawer();
    } else {
      closeDrawer();
    }
  });

  // Auto-close when clicking any link inside drawer (except accordion triggers)
  drawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Mobile Accordion Toggles
  drawer.querySelectorAll('.mobile-accordion-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const targetId = btn.getAttribute('data-target');
      const content = targetId ? document.getElementById(targetId) : btn.nextElementSibling;
      const chevron = btn.querySelector('.accordion-chevron');
      if (content) {
        const isOpen = content.classList.contains('is-open');
        content.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', String(!isOpen));
        if (chevron) {
          chevron.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
        }
      }
    });
  });

  // Dismiss on outside click
  document.addEventListener('click', (e) => {
    if (!drawer.contains(e.target) && !toggleBtn.contains(e.target) && !drawer.classList.contains('hidden')) {
      closeDrawer();
    }
  });

  // Dismiss on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !drawer.classList.contains('hidden')) {
      closeDrawer();
    }
  });

  // Mega Menu Hover / Click / Keyboard / Outside Click Support
  const megaMenuWrappers = document.querySelectorAll('.mega-menu-wrapper');
  megaMenuWrappers.forEach((wrapper) => {
    const trigger = wrapper.querySelector('.mega-menu-trigger');
    const dropdown = wrapper.querySelector('.mega-menu-dropdown');
    if (!trigger || !dropdown) return;

    let hoverTimer = null;

    // Desktop hover with debounce to prevent accidental dismissal
    wrapper.addEventListener('mouseenter', () => {
      if (window.innerWidth >= 1024) {
        if (hoverTimer) clearTimeout(hoverTimer);
        dropdown.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });

    wrapper.addEventListener('mouseleave', () => {
      if (window.innerWidth >= 1024) {
        hoverTimer = setTimeout(() => {
          dropdown.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
        }, 180);
      }
    });

    // Click / touch toggle
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (hoverTimer) clearTimeout(hoverTimer);
      const isOpen = dropdown.classList.contains('is-open');
      
      // Close other open mega menus if any
      document.querySelectorAll('.mega-menu-dropdown.is-open').forEach((d) => {
        if (d !== dropdown) {
          d.classList.remove('is-open');
          const otherTrigger = d.closest('.mega-menu-wrapper')?.querySelector('.mega-menu-trigger');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        }
      });

      dropdown.classList.toggle('is-open', !isOpen);
      trigger.setAttribute('aria-expanded', String(!isOpen));
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!wrapper.contains(e.target)) {
        if (hoverTimer) clearTimeout(hoverTimer);
        dropdown.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (hoverTimer) clearTimeout(hoverTimer);
        dropdown.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

/* -------------------------------------------------------------
 * 5. INTERACTIVE 25+ PROJECTS PORTFOLIO ENGINE
 * ------------------------------------------------------------- */
function initInteractivePortfolio() {
  const portfolioContainer = document.getElementById('interactive-portfolio-container');
  if (!portfolioContainer) return;

  const isRTL = document.documentElement.dir === 'rtl' || document.documentElement.lang === 'ar';
  const activeProjects = isRTL ? AR_PORTFOLIO_PROJECTS : EN_PORTFOLIO_PROJECTS;
  const activeFilters = isRTL ? AR_SERVICE_FILTERS : EN_SERVICE_FILTERS;
  let activeFilter = 'all';
  let searchQuery = '';

  // Render controls: Tabs & Search Input
  const controlsWrapper = document.createElement('div');
  controlsWrapper.className = 'space-y-6 mb-10';

  // Search input & counter bar
  const searchRow = document.createElement('div');
  searchRow.className = 'flex flex-col sm:flex-row items-center justify-between gap-4';
  
  const searchInputWrapper = document.createElement('div');
  searchInputWrapper.className = 'relative w-full sm:max-w-md';
  searchInputWrapper.innerHTML = `
    <div class="absolute inset-y-0 ${isRTL ? 'right-0 pr-3.5' : 'left-0 pl-3.5'} flex items-center pointer-events-none text-emerald-400">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
    </div>
    <input type="text" id="portfolio-search-input" placeholder="${isRTL ? `ابحث في ${activeProjects.length} مشروعاً مختاراً بالاسم أو النطاق أو الدولة أو الخدمة...` : `Search ${activeProjects.length} selected projects by name, domain, country, or service...`}" class="luxury-input ${isRTL ? 'pr-10' : 'pl-10'} text-xs py-2.5" />
  `;

  const counterEl = document.createElement('div');
  counterEl.className = 'text-xs text-emerald-300/80 font-mono flex items-center gap-2';
  counterEl.id = 'portfolio-active-count';

  searchRow.appendChild(searchInputWrapper);
  searchRow.appendChild(counterEl);
  controlsWrapper.appendChild(searchRow);

  // Filter Buttons Row
  const filterRow = document.createElement('div');
  filterRow.className = 'flex flex-wrap items-center gap-2';
  
  activeFilters.forEach((filter) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `portfolio-filter-btn ${filter.id === 'all' ? 'active' : ''}`;
    btn.setAttribute('data-filter-id', filter.id);
    btn.textContent = isRTL ? filter.nameAr : filter.nameEn;
    
    btn.addEventListener('click', () => {
      filterRow.querySelectorAll('.portfolio-filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = filter.id;
      renderProjects();
    });

    filterRow.appendChild(btn);
  });
  controlsWrapper.appendChild(filterRow);

  portfolioContainer.prepend(controlsWrapper);

  // Projects Grid Element
  const grid = document.createElement('div');
  grid.id = 'portfolio-cards-grid';
  grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
  portfolioContainer.appendChild(grid);

  // Setup Modal Container
  setupProjectModal(isRTL);

  // Filter & Search Function
  function renderProjects() {
    grid.innerHTML = '';
    const q = searchQuery.toLowerCase().trim();

    const filtered = activeProjects.filter((p) => {
      let categoryMatch = false;
      if (isRTL) {
        if (activeFilter === 'all') {
          categoryMatch = true;
        } else if (activeFilter === 'websites') {
          categoryMatch = p.category === 'portals' || p.category === 'websites' || p.services?.includes('website');
        } else if (activeFilter === 'ecommerce') {
          categoryMatch = p.category === 'ecommerce' || p.services?.includes('ecommerce') || p.services?.includes('store') || p.services?.includes('sales');
        } else if (activeFilter === 'web-apps') {
          categoryMatch = p.category === 'medical' || p.category === 'web-apps' || p.services?.includes('booking') || p.services?.includes('app');
        } else if (activeFilter === 'software-systems') {
          categoryMatch = p.category === 'erp' || p.category === 'software-systems' || p.services?.includes('erp') || p.services?.includes('crm') || p.services?.includes('pos');
        } else if (activeFilter === 'mobile-apps') {
          categoryMatch = p.services?.includes('mobile') || p.services?.includes('app') || (p.descriptionEn && p.descriptionEn.toLowerCase().includes('mobile'));
        } else if (activeFilter === 'ui-ux') {
          categoryMatch = p.services?.includes('design') || p.services?.includes('ui') || p.services?.includes('branding') || (p.descriptionEn && p.descriptionEn.toLowerCase().includes('design'));
        } else if (activeFilter === 'other-solutions') {
          categoryMatch = p.category === 'tenders' || p.category === 'other-solutions' || p.services?.includes('tenders') || p.services?.includes('seo') || p.services?.includes('marketing') || p.services?.includes('qa');
        }
      } else {
        categoryMatch = activeFilter === 'all' || (Array.isArray(p.services) && p.services.includes(activeFilter));
      }
      if (!categoryMatch) return false;

      // Search match
      if (!q) return true;
      const haystack = [
        p.nameAr || '',
        p.nameEn || '',
        p.domain || '',
        p.countryNameAr || '',
        p.countryNameEn || '',
        p.descriptionAr || '',
        p.descriptionEn || '',
        p.categoryNameAr || '',
        p.categoryNameEn || '',
        ...(p.servicesListEn || [])
      ].join(' ').toLowerCase();

      return haystack.includes(q);
    });

    // Update counter
    counterEl.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
      <span>${isRTL ? `عرض ${filtered.length} من ${activeProjects.length} مشروعاً مختاراً (من أصل +100 مشروع منفذ)` : `Showing ${filtered.length} of ${activeProjects.length} selected projects (100+ total delivered)`}</span>
    `;

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full py-16 text-center glass-panel rounded-2xl border border-emerald-500/20 space-y-3">
          <div class="text-3xl">🔍</div>
          <div class="text-base font-bold text-white">${isRTL ? 'لا توجد مشاريع مطابقة للبحث' : 'No matching projects found'}</div>
          <div class="text-xs text-emerald-300/70">${isRTL ? 'يرجى تجربة كلمات بحث أخرى أو اختيار تصنيف مختلف.' : 'Try adjusting your search query or select another category filter.'}</div>
        </div>
      `;
      return;
    }

    filtered.forEach((p) => {
      const card = document.createElement('div');
      card.className = 'p-6 glass-panel rounded-2xl interactive-card border border-emerald-500/20 flex flex-col justify-between group cursor-pointer';
      card.setAttribute('data-project-id', p.id);

      const title = isRTL ? p.nameAr : p.nameEn;
      const desc = isRTL ? p.descriptionAr : p.descriptionEn;
      const categoryLabel = isRTL ? p.categoryNameAr : p.categoryNameEn;
      const countryLabel = isRTL ? p.countryNameAr : p.countryNameEn;
      const roleLabel = isRTL ? p.roleAr : p.roleEn;
      const statusLabel = isRTL ? p.statusAr : p.statusEn;

      card.innerHTML = `
        <div class="space-y-3.5">
          <div class="flex items-center justify-between text-xs">
            <span class="text-[#E5C78B] font-semibold flex items-center gap-1 text-[11px]">
              <span>${p.logo}</span>
              <span>${countryLabel}</span>
            </span>
            <span class="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-mono text-[10px]">
              ${p.domain}
            </span>
          </div>

          <h3 class="text-base font-bold text-white font-serif group-hover:text-[#E5C78B] transition-colors leading-snug">
            ${title}
          </h3>

          <p class="text-xs text-emerald-100/70 leading-relaxed line-clamp-3">
            ${desc}
          </p>

          <div class="flex flex-wrap gap-1.5 pt-1">
            ${(isRTL ? p.servicesListAr : p.servicesListEn).slice(0, 3).map((s) => `
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-black/40 border border-emerald-950 text-emerald-300 font-mono">
                ${s}
              </span>
            `).join('')}
          </div>
        </div>

        <div class="pt-4 border-t border-emerald-950/80 mt-4 text-xs flex items-center justify-between">
          <span class="text-emerald-400/80 font-mono text-[11px]">${statusLabel}</span>
          <span class="text-[#E5C78B] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1 text-xs">
            <span>${isRTL ? 'التفاصيل' : 'Details'}</span>
            <svg class="w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </span>
        </div>
      `;

      card.addEventListener('click', () => {
        openProjectModal(p, isRTL);
      });

      grid.appendChild(card);
    });

    initCard3DTilt();
  }

  // Live search event
  const searchInput = document.getElementById('portfolio-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProjects();
    });
  }

  // Initial render
  renderProjects();
}

/* -------------------------------------------------------------
 * 6. PROJECT DETAILS MODAL
 * ------------------------------------------------------------- */
function setupProjectModal(isRTL) {
  if (document.getElementById('project-details-modal')) return;

  const modal = document.createElement('div');
  modal.id = 'project-details-modal';
  modal.className = 'fixed inset-0 z-[1000] hidden items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto';
  
  modal.innerHTML = `
    <div class="relative w-full max-w-2xl glass-panel-elevated rounded-3xl border border-emerald-500/30 p-6 sm:p-8 space-y-6 ${isRTL ? 'text-right' : 'text-left'} my-8 shadow-2xl animate-fade-in" id="project-modal-card">
      <button type="button" id="close-project-modal" class="absolute top-5 ${isRTL ? 'left-5' : 'right-5'} p-2 rounded-full text-slate-400 hover:text-white bg-black/40 hover:bg-black/80 transition-colors" aria-label="Close modal">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>

      <div class="space-y-2">
        <div class="flex items-center gap-2 text-xs font-semibold text-[#E5C78B]">
          <span id="modal-project-logo" class="text-2xl"></span>
          <span id="modal-project-country"></span>
          <span>·</span>
          <span id="modal-project-category" class="text-emerald-300 font-mono"></span>
        </div>
        <h2 id="modal-project-title" class="text-2xl sm:text-3xl font-extrabold text-white font-serif leading-tight"></h2>
        <div class="flex items-center gap-3 pt-1">
          <a id="modal-project-link" href="#" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-mono underline hover:text-[#E5C78B]">
            <span id="modal-project-domain"></span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
          <span id="modal-project-status" class="badge-emerald text-[10px]"></span>
        </div>
      </div>

      <div class="space-y-2">
        <h4 class="text-xs uppercase font-mono tracking-wider text-[#E5C78B] font-bold">${isRTL ? 'نظرة عامة على المشروع' : 'Project Overview'}</h4>
        <p id="modal-project-description" class="text-sm text-emerald-100/80 leading-relaxed"></p>
      </div>

      <div class="space-y-3">
        <h4 class="text-xs uppercase font-mono tracking-wider text-[#E5C78B] font-bold">${isRTL ? 'أبرز الإنجازات والنتائج' : 'Key Highlights & Achievements'}</h4>
        <div id="modal-project-highlights" class="grid grid-cols-1 sm:grid-cols-2 gap-3"></div>
      </div>

      <div class="space-y-2">
        <h4 class="text-xs uppercase font-mono tracking-wider text-[#E5C78B] font-bold">${isRTL ? 'الخدمات والتقنيات المقدمة' : 'Delivered Services & Technologies'}</h4>
        <div id="modal-project-services" class="flex flex-wrap gap-2"></div>
      </div>

      <div class="pt-4 border-t border-emerald-950/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="text-xs text-emerald-300/60 font-mono" id="modal-project-role"></div>
        <a href="${document.getElementById('contact') ? '#contact' : (((window.location.pathname.startsWith('/yg') ? '/yg' : '')) + (isRTL ? '/ar/contact/index.html' : '/en/contact/index.html'))}" id="modal-contact-cta" class="btn-gold text-xs py-2 px-5 w-full sm:w-auto text-center">
          <span>${isRTL ? 'طلب استشارة مماثلة' : 'Request Similar Consultation'}</span>
        </a>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const closeBtn = document.getElementById('close-project-modal');
  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  const ctaBtn = document.getElementById('modal-contact-cta');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
      closeModal();
    });
  }

  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }
}

function openProjectModal(project, isRTL) {
  const modal = document.getElementById('project-details-modal');
  if (!modal) return;

  document.getElementById('modal-project-logo').textContent = project.logo;
  document.getElementById('modal-project-country').textContent = isRTL ? project.countryNameAr : project.countryNameEn;
  document.getElementById('modal-project-category').textContent = isRTL ? project.categoryNameAr : project.categoryNameEn;
  document.getElementById('modal-project-title').textContent = isRTL ? project.nameAr : project.nameEn;
  document.getElementById('modal-project-domain').textContent = project.domain;
  document.getElementById('modal-project-link').href = project.domain.startsWith('http') ? project.domain : `https://${project.domain}`;
  document.getElementById('modal-project-status').textContent = isRTL ? project.statusAr : project.statusEn;
  document.getElementById('modal-project-description').textContent = isRTL ? project.descriptionAr : project.descriptionEn;
  document.getElementById('modal-project-role').textContent = `${isRTL ? 'الدور: ' : 'Role: '}${isRTL ? project.roleAr : project.roleEn}`;

  // Highlights
  const highlightsContainer = document.getElementById('modal-project-highlights');
  highlightsContainer.innerHTML = '';
  const highlights = isRTL ? project.highlightsAr : project.highlightsEn;
  highlights.forEach((h) => {
    const item = document.createElement('div');
    item.className = 'p-3 rounded-xl bg-black/40 border border-emerald-950 space-y-1';
    item.innerHTML = `
      <div class="text-xs font-bold text-white flex items-center gap-1.5">
        <span class="w-1.5 h-1.5 rounded-full bg-[#E5C78B]"></span>
        <span>${h.title}</span>
      </div>
      <div class="text-[11px] text-emerald-200/70 leading-relaxed">${h.text}</div>
    `;
    highlightsContainer.appendChild(item);
  });

  // Services tags
  const servicesContainer = document.getElementById('modal-project-services');
  servicesContainer.innerHTML = '';
  const services = isRTL ? project.servicesListAr : project.servicesListEn;
  services.forEach((s) => {
    const tag = document.createElement('span');
    tag.className = 'text-xs px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-mono';
    tag.textContent = s;
    servicesContainer.appendChild(tag);
  });

  // Modal Alignment
  const card = document.getElementById('project-modal-card');
  if (isRTL) {
    card.classList.remove('text-left');
    card.classList.add('text-right');
  } else {
    card.classList.remove('text-right');
    card.classList.add('text-left');
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

/* -------------------------------------------------------------
 * 7. CONTACT FORM HANDLER WITH ZERO-ALERT & DIRECT WHATSAPP
 * ------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('business-inquiry-form');
  if (!form) return;

  const isRTL = document.documentElement.dir === 'rtl' || document.documentElement.lang === 'ar';
  
  // Ensure error message banner exists
  let errorBanner = document.getElementById('form-error-message');
  if (!errorBanner) {
    errorBanner = document.createElement('div');
    errorBanner.id = 'form-error-message';
    errorBanner.className = 'hidden p-3.5 rounded-xl bg-red-950/60 border border-red-500/50 text-red-200 text-xs leading-relaxed space-y-1 mb-4';
    form.prepend(errorBanner);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Honeypot spam protection
    const honeypot = form.querySelector('[name="company_website"]');
    if (honeypot && honeypot.value.trim() !== '') {
      console.warn('Bot submission blocked.');
      return;
    }

    const name = form.querySelector('[name="name"]')?.value.trim() || '';
    const email = form.querySelector('[name="email"]')?.value.trim() || '';
    const phone = form.querySelector('[name="phone"]')?.value.trim() || '';
    const inquiryType = form.querySelector('[name="inquiry_type"]')?.value || 'Tender / RFP Consultation';
    const subject = form.querySelector('[name="subject"]')?.value.trim() || '';
    const message = form.querySelector('[name="message"]')?.value.trim() || '';

    // Validation without window.alert
    if (!name || !email || !message) {
      errorBanner.innerHTML = `
        <div class="font-bold flex items-center gap-1.5">
          <svg class="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <span>${isRTL ? 'يرجى استكمال الحقول المطلوبة' : 'Please complete the required fields'}</span>
        </div>
        <div>${isRTL ? 'الاسم، البريد الإلكتروني، وتفاصيل الرسالة مطلوبة لإرسال استفسارك.' : 'Your Name, Email, and Project details are required to submit an inquiry.'}</div>
      `;
      errorBanner.classList.remove('hidden');
      return;
    }

    errorBanner.classList.add('hidden');

    const inquiryId = 'YG-' + Date.now().toString().slice(-6);

    // Save locally with defensive try/catch
    try {
      const parsed = JSON.parse(localStorage.getItem('yg_inquiries') || '[]');
      const stored = Array.isArray(parsed) ? parsed : [];
      stored.push({
        id: inquiryId,
        name,
        email,
        phone,
        inquiryType,
        subject: subject || `${inquiryType} Inquiry`,
        message,
        createdAt: new Date().toISOString(),
      });
      localStorage.setItem('yg_inquiries', JSON.stringify(stored));
    } catch (storageErr) {
      // Storage unavailable or malformed; proceed smoothly to WhatsApp/confirmation
    }

    // Construct localized WhatsApp prefilled message
    const waText = encodeURIComponent(
      isRTL
        ? `مرحباً أستاذ يوسف غمري،\n\nلقد أرسلت استفساراً عبر منصتكم الرسمية (رقم المرجع: ${inquiryId}).\nالاسم: ${name}\nالبريد الإلكتروني: ${email}\nالجوال: ${phone}\nنوع الطلب: ${inquiryType}\n\nملخص المشروع:\n${message}`
        : `Hello Youssef Ghamry,\n\nI submitted an inquiry via your platform (Ref: ${inquiryId}).\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nTopic: ${inquiryType}\n\nProject Brief:\n${message}`
    );
    const waUrl = `https://wa.me/201503292942?text=${waText}`;

    const successBox = document.getElementById('form-success-message');
    if (successBox) {
      successBox.innerHTML = `
        <div class="p-6 glass-panel-elevated rounded-2xl border border-emerald-500/40 text-center space-y-4">
          <div class="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>
          <div class="space-y-1">
            <h3 class="text-lg font-bold text-white font-serif">${isRTL ? 'تم استلام استفسارك بنجاح' : 'Inquiry Received Successfully'}</h3>
            <p class="text-xs text-emerald-200/80">${isRTL ? `رقم المرجع الخاص بك: <span class="font-mono text-[#E5C78B] font-bold">${inquiryId}</span>. سيتم مراجعة طلبك والتواصل معك خلال 24 ساعة.` : `Reference Number: <span class="font-mono text-[#E5C78B] font-bold">${inquiryId}</span>. Your request has been queued for immediate review.`}</p>
          </div>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-gold text-xs py-2.5 px-4 w-full sm:w-auto flex items-center justify-center gap-2">
              <span>💬</span>
              <span>${isRTL ? 'متابعة فورية عبر واتساب' : 'Direct Follow-Up via WhatsApp'}</span>
            </a>
            <button type="button" id="reset-inquiry-btn" class="btn-ghost-gold text-xs py-2 px-4 w-full sm:w-auto">
              <span>${isRTL ? 'إرسال استفسار جديد' : 'Send Another Inquiry'}</span>
            </button>
          </div>
        </div>
      `;
      successBox.classList.remove('hidden');
      form.classList.add('hidden');

      const resetBtn = document.getElementById('reset-inquiry-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          form.reset();
          successBox.classList.add('hidden');
          form.classList.remove('hidden');
        });
      }
    }
  });
}

/* -------------------------------------------------------------
 * 8. FLOATING BACK TO TOP BUTTON
 * ------------------------------------------------------------- */
function initBackToTopButton() {
  if (document.getElementById('back-to-top-btn')) return;

  const btn = document.createElement('button');
  btn.id = 'back-to-top-btn';
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Back to top');
  // Hidden on mobile, flex only on desktop md:
  btn.className = 'hidden md:flex items-center justify-center fixed bottom-6 right-6 z-50 p-3 rounded-full glass-panel-elevated border border-[#C6A15B]/40 text-[#E5C78B] shadow-2xl opacity-0 pointer-events-none transition-all duration-300 hover:scale-110 hover:border-[#E5C78B]';
  btn.innerHTML = `
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>
  `;

  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    // Strict mobile guard - never show on mobile screens (< 768px)
    if (window.innerWidth < 768) {
      btn.classList.add('opacity-0', 'pointer-events-none');
      btn.classList.remove('opacity-100', 'pointer-events-auto');
      return;
    }

    if (window.scrollY > 400) {
      btn.classList.remove('opacity-0', 'pointer-events-none');
      btn.classList.add('opacity-100', 'pointer-events-auto');
    } else {
      btn.classList.add('opacity-0', 'pointer-events-none');
      btn.classList.remove('opacity-100', 'pointer-events-auto');
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      btn.classList.add('opacity-0', 'pointer-events-none');
      btn.classList.remove('opacity-100', 'pointer-events-auto');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* -------------------------------------------------------------
 * 9. HIGH-PERFORMANCE 3D ANIMATED BACKGROUND ENGINE
 * - 3D Translucent Spherical Bubbles with Realistic Specular Lighting
 * - Dynamic Aurora Gradient Ambient Layers
 * - 3D Wireframe Polyhedra with Real Perspective Projection
 * - Floating Constellation Particles with Dynamic Web Filaments
 * - Smooth Mouse Parallax & Gentle Proximity Repulsion
 * - Battery & Reduced-Motion Conscious Engine (Pauses when hidden)
 * ------------------------------------------------------------- */
function init3DAnimatedBackground() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Inject or verify Aurora Ambient Light Layer
  let aurora = document.getElementById('bg-aurora-glow');
  if (!aurora) {
    aurora = document.createElement('div');
    aurora.id = 'bg-aurora-glow';
    aurora.setAttribute('aria-hidden', 'true');
    aurora.innerHTML = `
      <div class="aurora-blob-1"></div>
      <div class="aurora-blob-2"></div>
      <div class="aurora-blob-3"></div>
    `;
    document.body.prepend(aurora);
  }

  // 2. Inject or verify 3D Canvas Layer
  let canvas = document.getElementById('bg-3d-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'bg-3d-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    canvas.className = 'fixed inset-0 pointer-events-none z-0';
    if (aurora && aurora.nextSibling) {
      document.body.insertBefore(canvas, aurora.nextSibling);
    } else {
      document.body.prepend(canvas);
    }
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Viewport & DPI management
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);
  let dpr = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();

  window.addEventListener('resize', () => {
    resize();
  }, { passive: true });

  // Mouse & Parallax tracking with smooth damping
  let mouse = { x: width * 0.5, y: height * 0.4, targetX: width * 0.5, targetY: height * 0.4, active: false };
  window.addEventListener('mousemove', (e) => {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
    mouse.active = true;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse.active = false;
  });

  const isMobile = width < 768;

  // -----------------------------------------------------------
  // A. 3D SPHERICAL BUBBLES
  // -----------------------------------------------------------
  const BUBBLE_COUNT = isMobile ? 12 : 24;
  const bubbles = [];

  const BUBBLE_PALETTES = [
    // Emerald Luxury
    {
      core: 'rgba(16, 185, 129, 0.28)',
      mid: 'rgba(5, 150, 105, 0.16)',
      edge: 'rgba(6, 78, 59, 0.05)',
      rim: 'rgba(110, 231, 183, 0.45)',
      specular: 'rgba(255, 255, 255, 0.65)',
      ambient: 'rgba(16, 185, 129, 0.2)'
    },
    // Metallic Champagne Gold
    {
      core: 'rgba(229, 199, 139, 0.32)',
      mid: 'rgba(198, 161, 91, 0.18)',
      edge: 'rgba(140, 110, 50, 0.06)',
      rim: 'rgba(240, 217, 162, 0.5)',
      specular: 'rgba(255, 255, 255, 0.75)',
      ambient: 'rgba(229, 199, 139, 0.22)'
    },
    // Deep Forest Glow
    {
      core: 'rgba(4, 120, 87, 0.22)',
      mid: 'rgba(6, 78, 59, 0.14)',
      edge: 'rgba(7, 19, 13, 0.04)',
      rim: 'rgba(52, 211, 153, 0.35)',
      specular: 'rgba(255, 255, 255, 0.55)',
      ambient: 'rgba(16, 185, 129, 0.15)'
    }
  ];

  for (let i = 0; i < BUBBLE_COUNT; i++) {
    const depth = 0.4 + Math.random() * 0.8; // z-depth factor (0.4 = far, 1.2 = close)
    bubbles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      baseRadius: 18 + Math.random() * (isMobile ? 36 : 60),
      depth: depth,
      vx: (Math.random() - 0.5) * 0.35 * depth,
      vy: -(0.25 + Math.random() * 0.55) * depth, // gentle upward drift
      wobbleSpeed: 0.008 + Math.random() * 0.015,
      wobbleAmp: 1.2 + Math.random() * 2.5,
      phase: Math.random() * Math.PI * 2,
      palette: BUBBLE_PALETTES[i % BUBBLE_PALETTES.length],
      pushX: 0,
      pushY: 0
    });
  }

  // -----------------------------------------------------------
  // B. 3D ROTATING POLYHEDRA (OCTAHEDRA / GEMSTONES)
  // -----------------------------------------------------------
  const POLY_COUNT = isMobile ? 3 : 6;
  const polyhedra = [];

  // Base 3D Octahedron vertices
  const OCTA_VERTICES = [
    [0, 1, 0],   // Top
    [0, -1, 0],  // Bottom
    [1, 0, 0],   // Right
    [-1, 0, 0],  // Left
    [0, 0, 1],   // Front
    [0, 0, -1]   // Back
  ];

  const OCTA_EDGES = [
    [0, 2], [0, 3], [0, 4], [0, 5],
    [1, 2], [1, 3], [1, 4], [1, 5],
    [2, 4], [4, 3], [3, 5], [5, 2]
  ];

  for (let i = 0; i < POLY_COUNT; i++) {
    polyhedra.push({
      x: (width * (i + 1)) / (POLY_COUNT + 1) + (Math.random() - 0.5) * 100,
      y: Math.random() * height,
      size: (isMobile ? 24 : 38) + Math.random() * (isMobile ? 20 : 36),
      rotX: Math.random() * Math.PI * 2,
      rotY: Math.random() * Math.PI * 2,
      rotZ: Math.random() * Math.PI * 2,
      vRotX: (Math.random() - 0.5) * 0.008,
      vRotY: 0.006 + Math.random() * 0.01,
      vRotZ: (Math.random() - 0.5) * 0.006,
      driftY: -(0.12 + Math.random() * 0.25),
      color: i % 2 === 0 ? 'rgba(198, 161, 91, ' : 'rgba(16, 185, 129, ',
      glowColor: i % 2 === 0 ? '#E5C78B' : '#6EE7B7'
    });
  }

  // -----------------------------------------------------------
  // C. FLOATING CONSTELLATION PARTICLES
  // -----------------------------------------------------------
  const PARTICLE_COUNT = isMobile ? 20 : 45;
  const particles = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: 1 + Math.random() * 2,
      baseAlpha: 0.25 + Math.random() * 0.45,
      color: i % 3 === 0 ? '#E5C78B' : '#10B981'
    });
  }

  // Camera parallax offsets
  let camX = 0;
  let camY = 0;
  let animTime = 0;
  let isRunning = true;

  // Tab visibility toggle
  document.addEventListener('visibilitychange', () => {
    isRunning = !document.hidden;
    if (isRunning) requestAnimationFrame(render);
  });

  function render(time) {
    if (!isRunning) return;

    animTime += 1;

    // Smooth mouse interpolation
    mouse.x += (mouse.targetX - mouse.x) * 0.08;
    mouse.y += (mouse.targetY - mouse.y) * 0.08;

    // Calculate subtle camera tilt
    const targetCamX = (mouse.x - width * 0.5) * 0.035;
    const targetCamY = (mouse.y - height * 0.5) * 0.035;
    camX += (targetCamX - camX) * 0.05;
    camY += (targetCamY - camY) * 0.05;

    ctx.clearRect(0, 0, width, height);

    // ---------------------------------------------------------
    // 1. RENDER CONSTELLATION NETWORK
    // ---------------------------------------------------------
    const connectDist = isMobile ? 75 : 95;
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      if (!prefersReduced) {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around bounds
        if (p.x < -20) p.x = width + 20;
        else if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        else if (p.y > height + 20) p.y = -20;
      }

      const drawX = p.x + camX * 0.3;
      const drawY = p.y + camY * 0.3;

      // Draw particle dot
      ctx.beginPath();
      ctx.arc(drawX, drawY, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.baseAlpha;
      ctx.fill();

      // Connect neighbor particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < connectDist) {
          const alpha = (1 - dist / connectDist) * 0.22;
          ctx.beginPath();
          ctx.moveTo(drawX, drawY);
          ctx.lineTo(p2.x + camX * 0.3, p2.y + camY * 0.3);
          ctx.strokeStyle = p.color === '#E5C78B' ? 'rgba(229, 199, 139, ' + alpha + ')' : 'rgba(16, 185, 129, ' + alpha + ')';
          ctx.lineWidth = 0.8;
          ctx.globalAlpha = 1;
          ctx.stroke();
        }
      }

      // Connect to mouse if active and near
      if (mouse.active) {
        const mdx = drawX - mouse.x;
        const mdy = drawY - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 120) {
          const mAlpha = (1 - mdist / 120) * 0.35;
          ctx.beginPath();
          ctx.moveTo(drawX, drawY);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = 'rgba(229, 199, 139, ' + mAlpha + ')';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    // ---------------------------------------------------------
    // 2. RENDER 3D ROTATING POLYHEDRA
    // ---------------------------------------------------------
    polyhedra.forEach((poly) => {
      if (!prefersReduced) {
        poly.rotX += poly.vRotX;
        poly.rotY += poly.vRotY;
        poly.rotZ += poly.vRotZ;
        poly.y += poly.driftY;
        if (poly.y < -120) {
          poly.y = height + 120;
          poly.x = Math.random() * width;
        }
      }

      const pCenterX = poly.x + camX * 0.7;
      const pCenterY = poly.y + camY * 0.7;

      // 3D Rotation matrices
      const cosX = Math.cos(poly.rotX), sinX = Math.sin(poly.rotX);
      const cosY = Math.cos(poly.rotY), sinY = Math.sin(poly.rotY);
      const cosZ = Math.cos(poly.rotZ), sinZ = Math.sin(poly.rotZ);

      const fov = 320;
      const projected = OCTA_VERTICES.map(([vx, vy, vz]) => {
        // Scale by poly size
        let x = vx * poly.size;
        let y = vy * poly.size;
        let z = vz * poly.size;

        // Rotate Y
        let x1 = x * cosY + z * sinY;
        let y1 = y;
        let z1 = -x * sinY + z * cosY;

        // Rotate X
        let x2 = x1;
        let y2 = y1 * cosX - z1 * sinX;
        let z2 = y1 * sinX + z1 * cosX;

        // Rotate Z
        let x3 = x2 * cosZ - y2 * sinZ;
        let y3 = x2 * sinZ + y2 * cosZ;
        let z3 = z2;

        // Perspective projection
        const scale = fov / (fov + z3 + 80);
        return {
          x: pCenterX + x3 * scale,
          y: pCenterY + y3 * scale,
          scale: scale,
          z: z3
        };
      });

      // Draw wireframe edges with 3D depth-based alpha
      OCTA_EDGES.forEach(([i1, i2]) => {
        const v1 = projected[i1];
        const v2 = projected[i2];
        const avgScale = (v1.scale + v2.scale) * 0.5;
        const edgeAlpha = Math.max(0.12, Math.min(0.45, 0.28 * avgScale));

        ctx.beginPath();
        ctx.moveTo(v1.x, v1.y);
        ctx.lineTo(v2.x, v2.y);
        ctx.strokeStyle = poly.color + edgeAlpha + ')';
        ctx.lineWidth = 1.1 * avgScale;
        ctx.stroke();
      });

      // Draw glowing vertices nodes
      projected.forEach((pv) => {
        ctx.beginPath();
        ctx.arc(pv.x, pv.y, 2 * pv.scale, 0, Math.PI * 2);
        ctx.fillStyle = poly.glowColor;
        ctx.globalAlpha = Math.min(0.65, 0.45 * pv.scale);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
    });

    // ---------------------------------------------------------
    // 3. RENDER 3D TRANSLUCENT BUBBLES
    // ---------------------------------------------------------
    bubbles.forEach((b) => {
      if (!prefersReduced) {
        // Vertical and sinusoidal drift
        b.y += b.vy;
        b.x += b.vx + Math.sin(animTime * b.wobbleSpeed + b.phase) * b.wobbleAmp * 0.2;

        // Mouse proximity repulsion
        if (mouse.active) {
          const dx = b.x - mouse.x;
          const dy = b.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxRepelDist = 140;
          if (dist < maxRepelDist && dist > 1) {
            const force = (1 - dist / maxRepelDist) * 1.8;
            b.pushX += (dx / dist) * force;
            b.pushY += (dy / dist) * force;
          }
        }

        // Apply and damp push
        b.x += b.pushX;
        b.y += b.pushY;
        b.pushX *= 0.92;
        b.pushY *= 0.92;

        // Wrap around bounds
        const wrapPad = b.baseRadius * 2 + 50;
        if (b.y < -wrapPad) {
          b.y = height + wrapPad;
          b.x = Math.random() * width;
        } else if (b.y > height + wrapPad) {
          b.y = -wrapPad;
        }
        if (b.x < -wrapPad) b.x = width + wrapPad;
        else if (b.x > width + wrapPad) b.x = -wrapPad;
      }

      // Parallax-adjusted position based on z-depth
      const r = b.baseRadius * b.depth;
      const bx = b.x + camX * b.depth;
      const by = b.y + camY * b.depth;

      // Outer gentle ambient glow
      ctx.beginPath();
      ctx.arc(bx, by, r * 1.15, 0, Math.PI * 2);
      ctx.fillStyle = b.palette.ambient;
      ctx.globalAlpha = 0.35 * b.depth;
      ctx.fill();

      // Main 3D spherical radial gradient
      // Light source offset to top-left (-0.35 * r)
      const lightX = bx - r * 0.32;
      const lightY = by - r * 0.32;
      const grad = ctx.createRadialGradient(lightX, lightY, r * 0.08, bx, by, r);
      grad.addColorStop(0, b.palette.core);
      grad.addColorStop(0.55, b.palette.mid);
      grad.addColorStop(0.9, b.palette.edge);
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.beginPath();
      ctx.arc(bx, by, r, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.globalAlpha = Math.min(0.9, 0.7 * b.depth);
      ctx.fill();

      // Delicate luminous rim stroke
      ctx.beginPath();
      ctx.arc(bx, by, r, 0, Math.PI * 2);
      ctx.strokeStyle = b.palette.rim;
      ctx.lineWidth = 1.2 * b.depth;
      ctx.globalAlpha = 0.6 * b.depth;
      ctx.stroke();

      // Primary Specular Reflection (Glint) at top-left
      ctx.beginPath();
      ctx.ellipse(lightX, lightY, r * 0.28, r * 0.16, -Math.PI / 4, 0, Math.PI * 2);
      ctx.fillStyle = b.palette.specular;
      ctx.globalAlpha = 0.75 * b.depth;
      ctx.fill();

      // Secondary ambient crescent highlight at bottom-right (spherical reflection)
      ctx.beginPath();
      ctx.arc(bx + r * 0.25, by + r * 0.25, r * 0.22, 0, Math.PI * 2);
      ctx.fillStyle = b.palette.rim;
      ctx.globalAlpha = 0.2 * b.depth;
      ctx.fill();

      ctx.globalAlpha = 1;
    });

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}


/* -------------------------------------------------------------
 * 10. GLOBAL MOBILE APP NAVIGATION & BOTTOM SHEETS ENGINE
 * App-Like Fixed Bottom Bar + Slide-Up Bottom Sheets
 * Present on ALL Pages: Arabic & English
 * ------------------------------------------------------------- */
const ALL_SITE_SERVICES = [{"slug":"accounting-systems-development","titleAr":"تطوير الأنظمة المحاسبية والمالية للشركات","titleEn":"Accounting & Financial Software Development","descAr":"أنظمة محاسبية متكاملة: دفتر الأستاذ العام، ميزان المراجعة، الفواتير والسندات، القوائم المالية، والربط المباشر مع منصة (فاتورة) لهيئة الزكاة والضريبة والجمارك.","descEn":"Enterprise accounting software: general ledgers, accounts payable/receivable, automated bank reconciliation, financial statements (P&L, Balance Sheet), and ZATCA Phase 2 XML integration.","category":"erp","categoryNameAr":"البرمجيات والأنظمة الإدارية","categoryNameEn":"Software & Enterprise Systems","icon":"⚙️"},{"slug":"advertising-campaign-management","titleAr":"إدارة الحملات الإعلانية الممولة (PPC & Paid Social)","titleEn":"Paid Advertising Campaign Management (PPC & Paid Social)","descAr":"إدارة الحملات الإعلانية المدفوعة: إعلانات بحث جوجل (Google Search Ads)، حملات سناب شات وتيك توك، استهداف دقيق للجمهور، وتحسين مستمر لتقليل تكلفة الشراء.","descEn":"Data-driven paid media execution: Google Search & Performance Max ads, targeted Snapchat/TikTok campaigns, continuous A/B creative testing, and ROAS optimization.","category":"seo","categoryNameAr":"السيو والتسويق الرقمي","categoryNameEn":"SEO & Digital Marketing","icon":"🚀"},{"slug":"android-app-development","titleAr":"تطوير وبرمجة تطبيقات الأندرويد الأصلية (Android)","titleEn":"Native Android Application Development","descAr":"تطوير تطبيقات أندرويد أصلية (Native) بلغة Kotlin الحديثة: واجهات Material 3 تفاعلية، إشعارات فورية، دعم العمل بدون إنترنت، والامتثال لمتطلبات متجر جوجل بلاي.","descEn":"Native Android app engineering utilizing Kotlin, Jetpack Compose, Material 3 design, background services, offline SQLite caching, and Google Play Store deployment.","category":"mobile","categoryNameAr":"تطبيقات الهواتف الذكية","categoryNameEn":"Mobile Applications","icon":"📱"},{"slug":"api-development-integration","titleAr":"تطوير واجهات برمجة التطبيقات وربط الأنظمة المؤسسية","titleEn":"API Development & Enterprise System Integration","descAr":"تطوير واجهات برمجة التطبيقات الآمنة لربط التطبيقات والمواقع بالخوادم المركزية، مع توثيق تقني متكامل وحماية مشددة للمعلومات المتبادلة.","descEn":"Standardized API development enabling seamless data exchange between web apps, mobile clients, and legacy ERPs with military-grade token authentication and rate limiting.","category":"erp","categoryNameAr":"البرمجيات والأنظمة الإدارية","categoryNameEn":"Software & Enterprise Systems","icon":"⚙️"},{"slug":"api-integration","titleAr":"الربط البرمجي وتكامل الأنظمة وواجهات API","titleEn":"API Integration & Middleware Development","descAr":"خدمات الربط البرمجي المتكامل: ربط بوابات الدفع الإلكتروني، مزامنة أنظمة إدارة العملاء والـ ERP، بوابات الرسائل القصيرة، شركات الشحن والخدمات اللوجستية، وبرمجة أحداث Webhooks.","descEn":"Custom API integration services: connecting payment gateways (Mada, Apple Pay, Stripe), CRM/ERP systems (Salesforce, SAP, Zoho), SMS gateways, shipping couriers, and building reliable webhook event handlers.","category":"erp","categoryNameAr":"البرمجيات والأنظمة الإدارية","categoryNameEn":"Software & Enterprise Systems","icon":"⚙️"},{"slug":"backend-development","titleAr":"تطوير الأنظمة الخلفية وقواعد البيانات (Back-End)","titleEn":"Back-End Development & Server Architecture","descAr":"بناء وتطوير الأنظمة الخلفية للشركات: Node.js وPython وPHP، واجهات برمجة التطبيقات RESTful وGraphQL، قواعد بيانات MySQL وPostgreSQL، وطوابير المهام السحابية.","descEn":"Robust server-side engineering: Node.js, Python, PHP, RESTful & GraphQL APIs, relational (PostgreSQL, MySQL) and NoSQL databases, message queues, and cloud security.","category":"erp","categoryNameAr":"البرمجيات والأنظمة الإدارية","categoryNameEn":"Software & Enterprise Systems","icon":"⚙️"},{"slug":"bid-no-bid-assessment","titleAr":"تقييم قرار التقدم للمناقصة (Bid / No-Bid Assessment)","titleEn":"Bid / No-Bid Strategic Assessment & Feasibility","descAr":"نموذج تقييم علمي لاتخاذ قرار التقدم للمناقصة من عدمه: تقييم فرص الفوز، هوامش الربحية، المخاطر التشغيلية، وحماية موارد الشركة من المناقصات الخاسرة.","descEn":"Objective decision matrix assessing customer relationship, competitive landscape, technical alignment, delivery risk, and profit margins to determine whether to bid.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"bid-no-bid-support","titleAr":"حوكمة وتوجيه قرار التقدم للعطاءات (Bid / No-Bid)","titleEn":"Strategic Bid / No-Bid Governance Support","descAr":"وضع وتطبيق سياسات حوكمة التقدم للمناقصات: تدريب فرق العمل على تقييم العطاءات، حجب المناقصات غير المجدية، والتركيز على الفرص التي تمتلك فيها الشركة ميزة تنافسية حقيقية.","descEn":"Implementing formal Bid/No-Bid governance: establishing executive scoring frameworks, analyzing competitive positioning, and eliminating low-margin, high-risk tender pursuits.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"business-development-consulting","titleAr":"استشارات تطوير الأعمال والتوسع التجاري","titleEn":"Business Development Consulting & Market Expansion","descAr":"استشارات نمو وتطوير الأعمال: دراسة فرص التوسع في السوق السعودي والخليجي، بناء التحالفات التجارية، تطوير استراتيجيات المبيعات، وتأهيل الشركات للمشاريع الكبرى.","descEn":"Strategic advisory for corporate expansion: market entry assessments into the Saudi and GCC markets, B2B partner ecosystems, sales enablement, and commercial positioning.","category":"consulting","categoryNameAr":"تطوير الأعمال والاستشارات التقنية","categoryNameEn":"Business Development & IT Consulting","icon":"💼"},{"slug":"business-mobile-applications","titleAr":"تطوير تطبيقات الجوال لقطاع الأعمال والشركات","titleEn":"Business & Enterprise Mobile Applications","descAr":"تطبيقات مخصصة لفرق العمل الميدانية: تتبع المناديب، مسح الشحنات في المستودعات، لوحات تحكم للمدراء، واعتماد المعاملات الإدارية والمشتريات من الجوال مباشرة.","descEn":"Enterprise mobile applications: field service tracking, delivery driver navigation, warehouse barcode scanning, mobile approvals for executives, and secure VPN connections.","category":"mobile","categoryNameAr":"تطبيقات الهواتف الذكية","categoryNameEn":"Mobile Applications","icon":"📱"},{"slug":"business-process-analysis","titleAr":"تحليل وتوثيق العمليات المؤسسية وهندستها (BPM)","titleEn":"Business Process Analysis & Operational Mapping","descAr":"إعادة هندسة العمليات الإدارية والتشغيلية: رسم مخططات تدفق الإجراءات (BPMN)، حصر نقاط التأخير والازدواجية، وإعداد وتوثيق أدلة السياسات والإجراءات المعيارية للشركة.","descEn":"End-to-end business process re-engineering: process flow diagramming (BPMN), bottleneck identification, organizational role clarification, and preparation for digital automation.","category":"consulting","categoryNameAr":"تطوير الأعمال والاستشارات التقنية","categoryNameEn":"Business Development & IT Consulting","icon":"💼"},{"slug":"business-process-automation","titleAr":"أتمتة العمليات الإدارية والتشغيلية (BPA)","titleEn":"Business Process Automation (BPA) & Workflow Systems","descAr":"بناء مسارات أتمتة ذكية للشركات: دورات اعتماد الفواتير والطلبات، الإشعارات التلقائية للموظفين، وتكامل البرامج لإنجاز المعاملات دون تدخل بشري روتيني.","descEn":"Automating multi-step corporate workflows: document approval chains, automated invoice notifications, lead routing, and robotic process orchestration across cloud tools.","category":"erp","categoryNameAr":"البرمجيات والأنظمة الإدارية","categoryNameEn":"Software & Enterprise Systems","icon":"⚙️"},{"slug":"business-websites","titleAr":"تطوير مواقع الأنشطة التجارية والشركات","titleEn":"Business Website Development","descAr":"بناء مواقع للأعمال التجارية ومزودي الخدمات والشركات المتوسطة مصممة لتحويل الزوار إلى عملاء فعليين وزيادة طلبات عروض الأسعار.","descEn":"Targeted websites for commercial enterprises, service providers, and B2B suppliers designed to turn casual visitors into verified business inquiries.","category":"web","categoryNameAr":"تصميم وتطوير المواقع والمتاجر","categoryNameEn":"Web & E-Commerce Development","icon":"🌐"},{"slug":"company-experience-documentation","titleAr":"توثيق سابقة الأعمال والخبرات المؤسسية المشابهة","titleEn":"Company Experience & Track Record Documentation","descAr":"توثيق سابقة أعمال الشركة: اختيار المشاريع المشابهة لطبيعة المناقصة، توضيح القيمة وحجم الإنجاز، وإرفاق شهادات إتمام الأعمال المعتمدة لتعزيز ثقة اللجنة.","descEn":"Curating authoritative project track records: selecting relevant past projects, presenting quantifiable scale metrics, and formatting client completion certificates.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"corporate-websites","titleAr":"تطوير مواقع الشركات والمؤسسات الكبرى","titleEn":"Corporate Website Development","descAr":"بوابات إلكترونية فاخرة ومصممة خصيصاً للشركات الاستثمارية والمقاولات والجهات الكبرى: أقسام علاقات المستثمرين، الحوكمة، سابقة الأعمال، ودعم كامل للغتين.","descEn":"Prestige corporate web platforms designed with dark luxury aesthetics, investor relations modules, company portfolios, governance disclosures, and bilingual capabilities.","category":"web","categoryNameAr":"تصميم وتطوير المواقع والمتاجر","categoryNameEn":"Web & E-Commerce Development","icon":"🌐"},{"slug":"crm-development","titleAr":"تطوير أنظمة إدارة علاقات العملاء (CRM)","titleEn":"CRM Development & Sales Pipeline Engineering","descAr":"بناء وتخصيص أنظمة إدارة علاقات العملاء CRM: متابعة العملاء المحتملين، أتمتة إرسال العروض ومتابعتها، سجل تفاعلات المبيعات، وتقارير أداء الفريق اللحظية.","descEn":"Custom CRM development tracking lead lifecycles, automated proposal follow-ups, quotation generation, and deep communication history across sales teams.","category":"erp","categoryNameAr":"البرمجيات والأنظمة الإدارية","categoryNameEn":"Software & Enterprise Systems","icon":"⚙️"},{"slug":"cross-platform-app-development","titleAr":"تطوير التطبيقات الهجينة متعددة المنصات (Flutter وReact Native)","titleEn":"Cross-Platform Mobile App Development (Flutter & React Native)","descAr":"تطوير تطبيقات الجوال بكود برمجي موحد عبر Flutter وReact Native: توفير تكاليف التطوير، سرعة في التحديثات، وأداء ممتاز لا يختلف عن التطبيقات الأصلية.","descEn":"Cost-effective cross-platform engineering with Flutter and React Native: shared business logic, high-performance rendering engines, and simultaneous releases on App Store and Google Play.","category":"mobile","categoryNameAr":"تطبيقات الهواتف الذكية","categoryNameEn":"Mobile Applications","icon":"📱"},{"slug":"custom-software-development","titleAr":"تطوير البرمجيات والحلول الرقمية المخصصة","titleEn":"Custom Software Development & Engineering","descAr":"برمجة وتطوير حلول برمجية مخصصة من الصفر: تحويل العمليات الإدارية والتشغيلية الفريدة لمنشأتك إلى منصات برمجية سحابية متطورة توفر الوقت والجهد.","descEn":"Bespoke software engineering built from scratch using modern web stacks: translating complex organizational logic into intuitive, secure, and cloud-native software platforms.","category":"erp","categoryNameAr":"البرمجيات والأنظمة الإدارية","categoryNameEn":"Software & Enterprise Systems","icon":"⚙️"},{"slug":"database-development","titleAr":"تصميم وهندسة قواعد البيانات وتحسين الأداء","titleEn":"Database Architecture, Development & Tuning","descAr":"هندسة قواعد البيانات (PostgreSQL, MySQL): تحسين سرعة الاستعلامات، معالجة بطء استرجاع البيانات، النسخ المتطابق (Replication)، وتأمين البيانات من التلف والاختراق.","descEn":"Relational and NoSQL database architecture: schema normalization, query profiling, index optimization, connection pooling, automated replication, and failover clustering.","category":"erp","categoryNameAr":"البرمجيات والأنظمة الإدارية","categoryNameEn":"Software & Enterprise Systems","icon":"⚙️"},{"slug":"deliverables-acceptance-criteria","titleAr":"توثيق المخرجات ومعايير الاستلام والفحص","titleEn":"Deliverables & Acceptance Criteria Documentation","descAr":"توثيق قائمة مخرجات المشروع بدقة: تحديد شروط ومعايير الفحص والاستلام، نماذج الاعتماد، وآليات التعامل مع الملاحظات بما يضمن سرعة تحصيل المستخلصات.","descEn":"Documenting clear project deliverables: defining tangible acceptance criteria, testing protocols, review cycle durations, and sign-off handover mechanisms.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"digital-marketing-strategy","titleAr":"بناء استراتيجيات التسويق الرقمي المتكاملة","titleEn":"Integrated Digital Marketing Strategy","descAr":"تطوير استراتيجية تسويق رقمي متكاملة: دراسة رحلة العميل، تحديد القنوات الأكثر ربحية، توزيع الميزانيات الإعلانية، وقياس العائد على الاستثمار التسويقي (ROI).","descEn":"Holistic digital marketing planning: customer persona definition, competitor gap analysis, multi-channel budget allocation, and clear KPI dashboards for executive leadership.","category":"seo","categoryNameAr":"السيو والتسويق الرقمي","categoryNameEn":"SEO & Digital Marketing","icon":"🚀"},{"slug":"drupal-development","titleAr":"تطوير مواقع دروبال للمؤسسات","titleEn":"Drupal Website Development","descAr":"تطوير احترافي لمنصة دروبال 10/11 للجهات الحكومية والجامعات والشركات الكبرى التي تتطلب حوكمة صلاحيات معقدة وأعلى مستويات الأمان السيبراني.","descEn":"Robust Drupal 10/11 development for public sector agencies, universities, and enterprise organizations requiring advanced taxonomy hierarchies and strict security compliance.","category":"web","categoryNameAr":"تصميم وتطوير المواقع والمتاجر","categoryNameEn":"Web & E-Commerce Development","icon":"🌐"},{"slug":"ecommerce-development","titleAr":"تطوير متاجر التجارة الإلكترونية المتكاملة","titleEn":"E-Commerce Website Development","descAr":"بناء منصات تجارة إلكترونية متكاملة تضمن تجربة شراء سريعة: مدفوعات إلكترونية آمنة، حساب آلي للشحن والضرائب، استرداد السلات المتروكة، ومزامنة المخزون.","descEn":"Full-stack e-commerce platforms engineered for conversion: multi-currency checkouts, automated tax and shipping calculations, abandoned cart recovery, and deep inventory integration.","category":"web","categoryNameAr":"تصميم وتطوير المواقع والمتاجر","categoryNameEn":"Web & E-Commerce Development","icon":"🌐"},{"slug":"ecommerce-mobile-applications","titleAr":"تطوير تطبيقات المتاجر الإلكترونية والتسوق","titleEn":"E-Commerce Mobile Application Development","descAr":"تحويل متجرك الإلكتروني إلى تطبيق جوال سريع: دفع بنقرة واحدة، إشعارات ترويجية مباشرة على شاشة العميل بالعروض، وتجربة تصفح أسرع بمراحل من المتصفح.","descEn":"Dedicated retail shopping apps: personalized product recommendations, one-tap Apple Pay and Mada checkout, order tracking, and push notification marketing campaigns.","category":"mobile","categoryNameAr":"تطبيقات الهواتف الذكية","categoryNameEn":"Mobile Applications","icon":"📱"},{"slug":"educational-websites","titleAr":"تطوير مواقع ومنصات التعليم والتدريب","titleEn":"Educational Website Development","descAr":"بوابات متكاملة للجهات التعليمية ومراكز التدريب: تسجيل الطلاب، استعراض الدورات، حجز المقاعد والدفع الإلكتروني، جداول الاختبارات، ومنظومة تواصل أولياء الأمور.","descEn":"Comprehensive educational platforms: student registration, course catalogs, LMS integration, online payments, exam schedules, and parent communication portals.","category":"web","categoryNameAr":"تصميم وتطوير المواقع والمتاجر","categoryNameEn":"Web & E-Commerce Development","icon":"🌐"},{"slug":"erp-system-development","titleAr":"تطوير وتطبيق أنظمة تخطيط الموارد المؤسسية (ERP)","titleEn":"ERP System Development & Implementation","descAr":"تطوير وتخصيص أنظمة تخطيط موارد المؤسسات ERP: ربط الحسابات، الموارد البشرية، المخازن، سلاسل الإمداد، والمبيعات في نظام موحد متوافق مع هيئة الزكاة والضريبة (ZATCA).","descEn":"Custom ERP engineering connecting accounting, human resources, supply chain, inventory, and sales into one unified, ZATCA-compliant enterprise software architecture.","category":"erp","categoryNameAr":"البرمجيات والأنظمة الإدارية","categoryNameEn":"Software & Enterprise Systems","icon":"⚙️"},{"slug":"etimad-tender-support","titleAr":"دعم وتقديم المناقصات عبر منصة اعتماد السعودية","titleEn":"Saudi Etimad Platform Bidding & Submission Support","descAr":"إدارة وتنسيق التقديم على المناقصات الحكومية السعودية عبر منصة اعتماد: شراء الكراسة، رفع الاستفسارات، تجهيز الملفات الرقمية، فحص الضمان، ومتابعة فتح المظاريف.","descEn":"Specialized support for Saudi government procurement on Etimad: tender purchasing, electronic inquiries, digital proposal packaging, bank guarantee verification, and bid opening tracking.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"executive-summary-writing","titleAr":"صياغة الملخص التنفيذي للعروض والمناقصات","titleEn":"Executive Summary Writing for Tenders & Proposals","descAr":"صياغة الملخص التنفيذي الاحترافي: تلخيص الحلول الفنية والمالية بأسلوب جذاب يقنع لجان البت والقيادات العليا باختيار شركتك خلال دقائق من القراءة.","descEn":"Authoring persuasive executive summaries: articulating core value propositions, direct strategic alignment with the client’s vision, and clear reasons to select your firm.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"financial-proposal-preparation","titleAr":"إعداد العروض المالية وجداول الكميات والأسعار (BOQ)","titleEn":"Financial Proposal & BOQ Preparation","descAr":"إعداد العروض المالية للمناقصات: تدقيق جداول الكميات والأسعار، تفصيل التكاليف المباشرة وغير المباشرة، وحساب هوامش الربح لتفادي أي استبعاد مالي.","descEn":"Structuring compliant financial proposals: Bill of Quantities (BOQ) validation, unit pricing breakdowns, cash flow curves, and total cost of ownership presentations.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"frontend-development","titleAr":"تطوير واجهات المستخدم الأمامية (Front-End)","titleEn":"Front-End Development & UI Engineering","descAr":"بناء وبرمجة واجهات المستخدم الأمامية الاحترافية: أطر عمل React وNext.js وTypeScript وTailwind CSS، حركات تفاعلية انسيابية، وتوافق كامل مع كافة الأجهزة.","descEn":"Modern front-end engineering: React, Next.js, TypeScript, Tailwind CSS, smooth micro-animations, accessible WCAG 2.1 compliance, and modular component architectures.","category":"erp","categoryNameAr":"البرمجيات والأنظمة الإدارية","categoryNameEn":"Software & Enterprise Systems","icon":"⚙️"},{"slug":"hr-systems-development","titleAr":"تطوير أنظمة الموارد البشرية والرواتب (HRMS)","titleEn":"HR Management & Payroll Systems Development","descAr":"بناء أنظمة موارد بشرية متوافقة مع نظام العمل السعودي: مسيرات الرواتب المتوافقة مع نظام حماية الأجور (WPS)، ربط البصمة، تتبع الإجازات، وتوثيق ملفات الموظفين إلكترونياً.","descEn":"Custom HR platforms automating Saudi labor law compliance, Qiwa/Muqeem integration, Wage Protection System (WPS) payroll files, biometric attendance, and leave tracking.","category":"erp","categoryNameAr":"البرمجيات والأنظمة الإدارية","categoryNameEn":"Software & Enterprise Systems","icon":"⚙️"},{"slug":"implementation-plan-preparation","titleAr":"إعداد خطة التنفيذ والمسار الزمني للمشروع","titleEn":"Implementation Plan & Project Execution Roadmap","descAr":"بناء خطة التنفيذ الميداني للمشروع: خطة التجهيز والحشد (Mobilization)، مراحل التنفيذ، نقاط الاعتماد المرحلية، وآليات تسليم المخرجات للجهة المالكة.","descEn":"Structuring comprehensive implementation plans: phase breakdowns, mobilization schedules, milestone handovers, and dependencies mapped into clear execution narratives.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"inventory-systems-development","titleAr":"تطوير أنظمة إدارة المخازن والمستودعات (WMS)","titleEn":"Inventory & Warehouse Management Systems (WMS)","descAr":"أنظمة ذكية لإدارة المستودعات المتعددة: تتبع حركات الوارد والمنصرف، إدارة تواريخ الصلاحية والدفعات، تنبيهات نفاد المخزون، وأتمتة أذونات الصرف والتحويل بين الفروع.","descEn":"Cloud WMS platforms managing multi-location stock movements, FIFO/LIFO tracking, low-stock threshold alerts, batch expiry monitoring, and dispatch order routing.","category":"erp","categoryNameAr":"البرمجيات والأنظمة الإدارية","categoryNameEn":"Software & Enterprise Systems","icon":"⚙️"},{"slug":"ios-app-development","titleAr":"تطوير وبرمجة تطبيقات الآيفون والآيباد (iOS)","titleEn":"Native iOS Application Development","descAr":"بناء تطبيقات آيفون أصلية بلغة Swift وSwiftUI: دعم أبل باي، تسجيل الدخول ببصمة الوجه (Face ID)، إشعارات Push لحظية، والالتزام بمعايير النشر الصارمة لشركة آبل.","descEn":"Native iOS application development utilizing Swift, SwiftUI, Apple Pay integration, push notifications, Face ID authentication, and Apple App Store review compliance.","category":"mobile","categoryNameAr":"تطبيقات الهواتف الذكية","categoryNameEn":"Mobile Applications","icon":"📱"},{"slug":"it-pre-sales-support","titleAr":"استشارات ما قبل البيع لقطاع التقنية (IT Pre-Sales)","titleEn":"IT Pre-Sales Consulting & Solution Engineering","descAr":"دعم فرق المبيعات بالاستشارات الهندسية: حضور اجتماعات العملاء، فهم المتطلبات التقنية، تصميم الحلول المقترحة، وإعداد نطاق العمل الدقيق لإغلاق الصفقات الكبرى.","descEn":"Dedicated IT pre-sales engineering: client discovery workshops, scoping technical architectures, authoring commercial Statements of Work (SOW), and delivering client demonstrations.","category":"consulting","categoryNameAr":"تطوير الأعمال والاستشارات التقنية","categoryNameEn":"Business Development & IT Consulting","icon":"💼"},{"slug":"it-software-tender-consulting","titleAr":"استشارات مناقصات مشاريع تقنية المعلومات والبرمجيات","titleEn":"IT & Software Tender Consulting Services","descAr":"استشارات فنية متقدمة لمناقصات قطاع التقنية والتحول الرقمي: هندسة الحلول السحابية، معايير الأمن السيبراني (NCA)، وتحديد المواصفات لضمان الفوز بالمشروع.","descEn":"Expert guidance on large IT and software tenders: architecture solutioning, cloud hosting sizing, cybersecurity compliance (NCA standards), and vendor selection advisory.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"keyword-research","titleAr":"بحوث الكلمات المفتاحية وتحليل نية البحث للمستخدمين","titleEn":"Keyword Research & Search Intent Mapping","descAr":"دراسة متقدمة لسلوك البحث في مجالك: استخراج الكلمات التجارية الأكثر بحثاً، تحليل كلمات المنافسين، وتوزيعها على صفحات الموقع لجذب عملاء جادين.","descEn":"Data-driven search query research: identifying commercial and transactional keywords, analyzing competitor rankings, search volumes, and mapping keywords to dedicated service pages.","category":"seo","categoryNameAr":"السيو والتسويق الرقمي","categoryNameEn":"SEO & Digital Marketing","icon":"🚀"},{"slug":"landing-pages-development","titleAr":"تصميم وتطوير صفحات الهبوط التسويقية (Landing Pages)","titleEn":"Landing Page Design & Development","descAr":"بناء وتطوير صفحات هبوط تسويقية مركزة للحملات الإعلانية (سناب شات، تيك توك، جوجل، إنستغرام): خالية من المشتتات، سرعة تحميل لحظية، ونماذج حجز سريعة.","descEn":"Conversion-engineered single-page landing experiences: distraction-free layouts, psychological value hooks, persuasive testimonials, and instant lead capture forms.","category":"web","categoryNameAr":"تصميم وتطوير المواقع والمتاجر","categoryNameEn":"Web & E-Commerce Development","icon":"🌐"},{"slug":"magazine-websites","titleAr":"تطوير مواقع المجلات الرقمية والمدونات المتخصصة","titleEn":"Magazine Website Development","descAr":"بناء منصات ومجلات ثقافية ومتخصصة تركز على تجربة القراءة الفاخرة: تنسيق طباعي مريح للعين، حفظ المقالات، بوابات اشتراكات الأعضاء، وأرشيف أعداد المجلة.","descEn":"Digital magazine platforms designed for long-form reading: typography-first layouts, bookmarking, paywalls/memberships, multimedia essays, and issue archiving.","category":"web","categoryNameAr":"تصميم وتطوير المواقع والمتاجر","categoryNameEn":"Web & E-Commerce Development","icon":"🌐"},{"slug":"magento-development","titleAr":"تطوير متاجر ماجنتو / أدوبي كوميرس","titleEn":"Magento / Adobe Commerce Development","descAr":"بناء متاجر ماجنتو متطورة للشركات والمصانع: مستودعات شحن متعددة، تسعير خاص لعملاء الجملة، الربط مع أنظمة SAP وOracle، والتسريع الكامل عبر Varnish.","descEn":"Architecting Adobe Commerce / Magento Open Source stores with multi-warehouse routing, tier pricing, ERP synchronization (SAP/Oracle), and Varnish caching.","category":"web","categoryNameAr":"تصميم وتطوير المواقع والمتاجر","categoryNameEn":"Web & E-Commerce Development","icon":"🌐"},{"slug":"medical-websites","titleAr":"تطوير مواقع المجمعات الطبية والعيادات","titleEn":"Medical Website Development","descAr":"مواقع متميزة للمستشفيات والمجمعات الطبية: دليل الأطباء واستشاريي الأقسام، حجز المواعيد السلس، استعراض خدمات العيادات، ونشر المقالات التثقيفية الطبية.","descEn":"Healthcare and medical websites engineered for patient trust: doctor credential directories, clinic specialty overviews, online appointment booking, and health blog education.","category":"web","categoryNameAr":"تصميم وتطوير المواقع والمتاجر","categoryNameEn":"Web & E-Commerce Development","icon":"🌐"},{"slug":"mobile-app-maintenance","titleAr":"صيانة وتحديث تطبيقات الجوال والدعم المستمر","titleEn":"Mobile Application Maintenance & SLA Support","descAr":"خدمات الصيانة الدورية لتطبيقات الجوال: تحديث الحزم البرمجية لتوافق أحدث إصدارات آبل وجوجل، مراقبة وحل أخطاء التوقف (Crashes)، وتحديثات الأمان الدورية.","descEn":"Proactive mobile app support: updating SDK dependencies, addressing new iOS/Android OS version requirements, crash analytics monitoring, and API synchronization.","category":"mobile","categoryNameAr":"تطبيقات الهواتف الذكية","categoryNameEn":"Mobile Applications","icon":"📱"},{"slug":"mobile-ui-ux-design","titleAr":"تصميم واجهات وتجربة مستخدم تطبيقات الجوال (UI/UX)","titleEn":"Mobile UI/UX Design & Prototyping","descAr":"تصميم تجربة مستخدم وتصاميم واجهات لتطبيقات الهواتف: نماذج تفاعلية قابلة للنقر على Figma، مراعاة حركة إبهام اليد، وتصميم عناصر تزيد من تفاعل وبقاء المستخدم.","descEn":"Mobile design architecture: user personas, interactive clickable Figma prototypes, Arabic RTL design guidelines, component design systems, and usability testing.","category":"mobile","categoryNameAr":"تطبيقات الهواتف الذكية","categoryNameEn":"Mobile Applications","icon":"📱"},{"slug":"news-websites","titleAr":"تطوير المواقع والمنصات الإخبارية","titleEn":"News Website Development","descAr":"بناء مواقع وصحف إلكترونية متطورة: شريط عاجل تفاعلي، مسارات اعتماد تحريري للمحررين، تحميل فوري للصفحات، توزيع تلقائي على السوشيال ميديا، ومساحات إعلانية ذكية.","descEn":"High-speed digital newsrooms: AMP/instant article support, editorial workflow approval systems, breaking news tickers, automated social distribution, and dynamic ad slot optimization.","category":"web","categoryNameAr":"تصميم وتطوير المواقع والمتاجر","categoryNameEn":"Web & E-Commerce Development","icon":"🌐"},{"slug":"off-page-seo","titleAr":"السيو الخارجي وبناء السلطة والمصداقية (Off-Page SEO)","titleEn":"Off-Page SEO & Authority Building","descAr":"استراتيجيات السيو الخارجي وبناء الروابط الخلفية: العلاقات العامة الرقمية، النشر في المنصات الموثوقة، وتوثيق استشهادات العلامة التجارية لرفع ترتيب الموقع.","descEn":"Strategic off-page SEO: digital PR campaigns, authoritative editorial mentions, brand citation building, and disavowing toxic spam backlinks to elevate domain rank.","category":"seo","categoryNameAr":"السيو والتسويق الرقمي","categoryNameEn":"SEO & Digital Marketing","icon":"🚀"},{"slug":"on-page-seo","titleAr":"تحسين السيو الداخلي للمحتوى والصفحات (On-Page SEO)","titleEn":"On-Page SEO Optimization","descAr":"تحسين المحتوى الداخلي للمواقع: استهداف الكلمات المفتاحية بدقة، صياغة العناوين والوصف الجذاب للنقر، توزيع العناوين الفرعية، وتطوير شبكة الروابط الداخلية.","descEn":"Comprehensive on-page optimization: keyword mapping, title and meta description crafting, heading hierarchy (H1-H6), internal linking architecture, and image alt text optimization.","category":"seo","categoryNameAr":"السيو والتسويق الرقمي","categoryNameEn":"SEO & Digital Marketing","icon":"🚀"},{"slug":"opencart-development","titleAr":"تطوير متاجر أوبن كارت","titleEn":"OpenCart Store Development","descAr":"بناء متاجر إلكترونية خفيفة وسريعة بنمط MVC البرمجي، استهلاك منخفض للسيرفر، برمجة تعديلات OCMOD، ودعم كامل للعملات والشحن المحلي.","descEn":"Lightweight PHP MVC e-commerce stores designed for speed, low server consumption, custom OCMOD extensions, and seamless multi-currency management.","category":"web","categoryNameAr":"تصميم وتطوير المواقع والمتاجر","categoryNameEn":"Web & E-Commerce Development","icon":"🌐"},{"slug":"opportunity-assessment","titleAr":"دراسة وتقييم الفرص التجارية والمشاريع الاستثمارية","titleEn":"Commercial Opportunity Assessment & Feasibility Studies","descAr":"دراسة وتقييم الفرص والمناقصات الكبرى: دراسة حجم السوق، تحليل المنافسين، حساب التكاليف المتوقعة مقابل الأرباح، وتقديم تقرير حاسم للإدارة للمضي قدماً أو الاعتذار.","descEn":"Comprehensive commercial opportunity assessment: market size evaluation, competitor benchmarking, cost vs revenue modeling, regulatory risk profiling, and go/no-go recommendations.","category":"consulting","categoryNameAr":"تطوير الأعمال والاستشارات التقنية","categoryNameEn":"Business Development & IT Consulting","icon":"💼"},{"slug":"portfolio-websites","titleAr":"تطوير مواقع البورتفوليو والسيرة الذاتية المهنية","titleEn":"Personal Portfolio Website Development","descAr":"مواقع وهوية رقمية متكاملة للخبراء والقياديين: استعراض مسيرة الإنجازات، سابقة المشاريع، الشهادات المعتمدة، الظهور الإعلامي، وقنوات التواصل الاستشاري المباشر.","descEn":"Luxury personal branding platforms: verified career milestones, project case studies, academic and professional credentials, media appearances, and direct advisory inquiry channels.","category":"web","categoryNameAr":"تصميم وتطوير المواقع والمتاجر","categoryNameEn":"Web & E-Commerce Development","icon":"🌐"},{"slug":"pos-development","titleAr":"تطوير أنظمة نقاط البيع والكاشير (POS)","titleEn":"Point of Sale (POS) Systems Development","descAr":"أنظمة نقاط بيع متطورة للمتاجر والمطاعم: طباعة الإيصالات، قراءة الباركود، الربط مع أجهزة مدى، والعمل دون إنترنت مع مزامنة المبيعات تلقائياً عند عودة الاتصال.","descEn":"Fast, secure retail and restaurant POS systems supporting barcode scanning, thermal printers, cash drawers, Mada payment terminals, and offline transaction buffering.","category":"erp","categoryNameAr":"البرمجيات والأنظمة الإدارية","categoryNameEn":"Software & Enterprise Systems","icon":"⚙️"},{"slug":"professional-services-websites","titleAr":"تطوير مواقع المكاتب المهنية والاستشارية","titleEn":"Professional Services Website Development","descAr":"بوابات رقمية مرموقة للمكاتب المهنية: مجالات الممارسة القانونية، المحاسبة والضرائب، السير الذاتية للشركاء والمحامين، حجز الاستشارات المدفوعة، والمقالات النظامية.","descEn":"Prestigious websites designed for high-trust professional firms: legal practice areas, case results, attorney profiles, consultation booking, and thought leadership articles.","category":"web","categoryNameAr":"تصميم وتطوير المواقع والمتاجر","categoryNameEn":"Web & E-Commerce Development","icon":"🌐"},{"slug":"project-management-systems","titleAr":"تطوير أنظمة إدارة المشاريع والمهام المؤسسية","titleEn":"Project Management & Task Tracking Systems","descAr":"أنظمة إدارة المشاريع: مخططات جانت التفاعلية، تتبع نسب الإنجاز، تخصيص الموارد والميزانيات، متابعة مهام الفريق، وإصدار تقارير دورية للإدارة والعملاء.","descEn":"Custom project governance platforms: task assignment, Gantt charts, milestone tracking, resource allocation, time logging, and automated client progress reporting.","category":"erp","categoryNameAr":"البرمجيات والأنظمة الإدارية","categoryNameEn":"Software & Enterprise Systems","icon":"⚙️"},{"slug":"project-timeline-preparation","titleAr":"إعداد الجدول الزمني وهيكل تفكيك العمل (WBS)","titleEn":"Project Timeline & Work Breakdown Structure (WBS)","descAr":"إعداد الجدول الزمني للمشروع وفق منهجيات إدارة المشاريع: تفكيك الأعمال (WBS)، تحديد المسار الحرج (CPM)، ومخططات زمنية تثبت واقعية المدة المقترحة.","descEn":"Developing professional project schedules: Work Breakdown Structure (WBS) dictionaries, Gantt charts, critical path calculations, and contingency buffers.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"qualification-criteria-analysis","titleAr":"تحليل شروط التأهيل والمعايير الإلزامية للمناقصات","titleEn":"Qualification & Mandatory Criteria Analysis","descAr":"فحص استيفاء شروط التأهيل المسبق: الحدود الدنيا للإيرادات المالية، درجة تصنيف المقاولين، سنوات الخبرة، وشهادات الكوادر المطلوبة بدقة تامة.","descEn":"Auditing mandatory qualification requirements: financial turnover thresholds, contractor classifications, minimum project experience values, and key personnel certifications.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"raci-matrix-preparation","titleAr":"إعداد مصفوفة المسؤوليات (RACI Matrix)","titleEn":"RACI Matrix Preparation & Responsibility Governance","descAr":"بناء مصفوفة RACI لجميع أنشطة المشروع: توضيح من هو المسؤول عن التنفيذ، من يعتمد المخرج، من يُستشار، ومن يُبلغ، لضمان حوكمة إدارية واضحة.","descEn":"Creating comprehensive RACI matrices: designating who is Responsible, Accountable, Consulted, and Informed for every single project activity and deliverable.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"real-estate-websites","titleAr":"تطوير مواقع ومنصات العقارات","titleEn":"Real Estate Website Development","descAr":"بوابات عقارية متطورة للمطورين العقاريين والوسطاء: بحث بالخريطة التفاعلية، حاسبة التمويل العقاري، جولات افتراضية 360، وتوجيه استفسارات العملاء آلياً للوسطاء.","descEn":"High-performing real estate marketplace websites: interactive map search, virtual tours, mortgage calculators, multi-agent CRM routing, and automated WhatsApp property inquiries.","category":"web","categoryNameAr":"تصميم وتطوير المواقع والمتاجر","categoryNameEn":"Web & E-Commerce Development","icon":"🌐"},{"slug":"red-team-proposal-review","titleAr":"مراجعة العروض بفريق Red Team ومحاكاة لجان التقييم","titleEn":"Red Team Proposal Review & Scoring Simulation","descAr":"مراجعة حيادية صارمة تحاكي تقييم لجان فحص العروض: تقييم العرض وفق درجات المعايير، رصد الثغرات ونقاط الضعف، وإعادة صياغتها لضمان تصدر التقييم.","descEn":"Objective Red Team review mimicking the buyer’s tender evaluation committee: scoring proposals against published criteria, identifying weak sections, and polishing arguments.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"responsive-web-design","titleAr":"تصميم المواقع المتجاوبة وتحسين تجربة الجوال","titleEn":"Responsive Website Design & Mobile Optimization","descAr":"تصميم مواقع انسيابية تركز على مستخدم الهاتف أولاً: خطوط متناسقة تتكيف مع حجم الشاشة، أزرار مريحة للمس، أيقونات متجهة فائقة الوضوح، ودعم أصيل ومتقن للغة العربية.","descEn":"Mobile-first responsive design: fluid typographic scaling, adaptive touch-friendly UI elements, responsive SVG icons, zero layout shifts, and dedicated Arabic RTL layout mirroring.","category":"web","categoryNameAr":"تصميم وتطوير المواقع والمتاجر","categoryNameEn":"Web & E-Commerce Development","icon":"🌐"},{"slug":"restaurant-websites","titleAr":"تطوير مواقع المطاعم والكافيهات وسلاسل الضيافة","titleEn":"Restaurant & Hospitality Website Development","descAr":"بناء مواقع جذابة للمطاعم والكافيهات: قائمة طعام رقمية تدعم رمز QR، حجز الطاولات والمناسبات، محدد الفروع التفاعلي، وروابط الطلب المباشر والتطبيقات.","descEn":"Hospitality websites designed for appetite appeal: interactive QR-ready digital menus, online pickup/delivery ordering, table booking systems, and branch locator maps.","category":"web","categoryNameAr":"تصميم وتطوير المواقع والمتاجر","categoryNameEn":"Web & E-Commerce Development","icon":"🌐"},{"slug":"rfi-analysis","titleAr":"إعداد طلبات إبداء الاهتمام والمعلومات (RFI)","titleEn":"RFI (Request for Information) Positioning Strategy","descAr":"إعداد ردود استراتيجية على طلبات جمع المعلومات (RFI): استعراض خبرات وقدرات المنشأة للتأهيل المسبق والمساهمة في رسم المواصفات قبل طرح المناقصة رسمياً.","descEn":"Formulating strategic RFI responses: demonstrating vendor maturity, guiding prospective client specifications, and securing shortlisting for forthcoming tenders.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"rfp-analysis","titleAr":"تحليل طلبات تقديم العروض (RFP Analysis)","titleEn":"RFP (Request for Proposal) Breakdown & Strategy","descAr":"دراسة وتحليل وثائق الـ RFP وتفكيك متطلبات المشروع، وتحديد أوزان درجات التقييم الفني لصياغة ردود تحقق الدرجة الكاملة في كل معيار.","descEn":"Deep-dive evaluation of RFP requirements: mapping scope items against company capabilities, identifying scoring weightings, and formulating winning differentiators.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"rfq-analysis","titleAr":"تحليل طلبات عروض الأسعار (RFQ Analysis)","titleEn":"RFQ (Request for Quotation) Rapid Assessment","descAr":"إعداد الردود الفنية والمالية السريعة على طلبات عروض الأسعار (RFQ): مطابقة المواصفات القياسية، جداول التوريد والتسليم، وتجهيز العرض خلال أوقات قياسية.","descEn":"Accelerated RFQ response workflows: validating product specifications, delivery lead times, supplier commitments, and structured commercial quotation letters.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"salla-store-development","titleAr":"تصميم وتطوير متاجر سلة","titleEn":"Salla Store Design & Development","descAr":"تصميم قوالب مخصصة وحصرية على محرك Twilight لمتجر سلة، ربط التطبيقات عبر Salla API، تحسين المبيعات، ومطابقة متطلبات وزارة التجارة السعودية وهيئة الزكاة (ZATCA).","descEn":"Custom theme design on Salla Twilight engine, API apps integration, conversion optimization, and compliance with the Saudi Ministry of Commerce regulations.","category":"web","categoryNameAr":"تصميم وتطوير المواقع والمتاجر","categoryNameEn":"Web & E-Commerce Development","icon":"🌐"},{"slug":"saudi-government-tenders","titleAr":"امتثال وثائق المناقصات الحكومية السعودية (نظام المشتريات الحكومية)","titleEn":"Saudi Government Tenders Compliance & Documentation","descAr":"مواءمة العروض مع نظام المناقصات والمشتريات الحكومية ولائحته التنفيذية: متطلبات المحتوى المحلي، القائمة الإلزامية للمنتجات الوطنية، وأفضليات المنشآت الصغيرة والمتوسطة.","descEn":"Full alignment with the Saudi Government Tenders and Procurement Law: local content requirements, mandatory list compliance, small and medium enterprises preferences, and standard contract formats.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"scope-of-work-analysis","titleAr":"تحليل نطاق العمل (SOW) وتحديد الفجوات التعاقدية","titleEn":"Scope of Work (SOW) Analysis & Gap Identification","descAr":"تحليل بنود نطاق العمل (SOW) وتحديد ما يقع على عاتق المقاول وما يقع على الجهة، ووضع الافتراضات الفنية التي تحمي الشركة قانونياً ومالياً أثناء التنفيذ.","descEn":"Comprehensive breakdown of Scope of Work clauses: clarifying deliverables boundaries, out-of-scope assumptions, third-party dependencies, and contractual liabilities.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"seo-audits","titleAr":"التدقيق الشامل لمواقع الويب وفحص صحة السيو (SEO Audits)","titleEn":"Comprehensive SEO Audits & Health Inspections","descAr":"فحص مجهري متكامل للموقع: تحليل أخطاء الزحف والفهرسة، سرعة الصفحات، فحص جودة المحتوى، وتقديم تقرير مفصل بخطة عمل واضحة لعلاج كافة المشاكل.","descEn":"Exhaustive site audits: analyzing crawlability, mobile responsiveness, Core Web Vitals, duplicate content, thin pages, indexing errors, and delivering actionable fix checklists.","category":"seo","categoryNameAr":"السيو والتسويق الرقمي","categoryNameEn":"SEO & Digital Marketing","icon":"🚀"},{"slug":"seo-content-strategy","titleAr":"استراتيجية محتوى السيو وبناء المجموعات الموضوعية (Topic Clusters)","titleEn":"SEO Content Strategy & Topic Clustering","descAr":"بناء هيكل المحتوى التثقيفي: الصفحات المرجعية الأساسية (Pillar Pages)، المقالات الداعمة، وجدول نشر دوري يستهدف بناء سلطة موضوعية كاملة أمام جوجل.","descEn":"Designing authoritative content architectures: pillar pages, supporting topic clusters, educational articles, and editorial calendars that drive sustained organic growth.","category":"seo","categoryNameAr":"السيو والتسويق الرقمي","categoryNameEn":"SEO & Digital Marketing","icon":"🚀"},{"slug":"shopify-development","titleAr":"تطوير متاجر شوبيفاي","titleEn":"Shopify Website Development","descAr":"تطوير متاجر شوبيفاي متكاملة بقوالب Liquid مخصصة، تحسين مسار الدفع، ربط بوابات الدفع الخليجية والمحلية، والتخلص من التطبيقات التي تبطئ المتجر.","descEn":"End-to-end Shopify store engineering: custom Liquid themes, checkout optimization, Saudi and Gulf payment integrations, and app audit minimization.","category":"web","categoryNameAr":"تصميم وتطوير المواقع والمتاجر","categoryNameEn":"Web & E-Commerce Development","icon":"🌐"},{"slug":"sla-kpi-documentation","titleAr":"توثيق اتفاقيات مستوى الخدمة ومؤشرات الأداء (SLA & KPIs)","titleEn":"SLA (Service Level Agreement) & KPI Documentation","descAr":"صياغة اتفاقيات مستوى الخدمة (SLA): تحديد مستويات الأعطال، أوقات الاستجابة والإصلاح، نسب التوافر، ومؤشرات قياس الأداء (KPIs) المتوافقة مع متطلبات الكراسة.","descEn":"Structuring enterprise SLAs and KPIs: defining ticket severity tiers, response and resolution times, uptime percentages, and transparent performance dashboards.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"social-media-content-planning","titleAr":"تخطيط المحتوى الرقمي والجداول التحريرية لمنصات التواصل","titleEn":"Social Media Content Planning & Editorial Calendars","descAr":"تصميم جداول النشر الشهرية: تحديد ركائز المحتوى (تثقيفي، ترويجي، تفاعلي)، كتابة نصوص البوستات، وأفكار التصاميم والفيديوهات لضمان ظهور متواصل ومؤثر.","descEn":"Developing structured editorial calendars: thematic pillars, campaign-specific assets, video script outlines, and scheduled posting roadmaps optimized for each network.","category":"seo","categoryNameAr":"السيو والتسويق الرقمي","categoryNameEn":"SEO & Digital Marketing","icon":"🚀"},{"slug":"social-media-management","titleAr":"إدارة حسابات التواصل الاجتماعي للشركات والمؤسسات","titleEn":"Corporate Social Media Management","descAr":"إدارة الحسابات الرقمية للمؤسسات: كتابة المنشورات المهنية، بناء حضور تنفيذي قوي على لينكد إن ومنصة إكس، التفاعل مع المتابعين، ورفع الوعي بالعلامة التجارية.","descEn":"Full-service social media management: content writing, executive thought leadership on LinkedIn, community engagement, brand monitoring, and monthly growth analytics.","category":"seo","categoryNameAr":"السيو والتسويق الرقمي","categoryNameEn":"SEO & Digital Marketing","icon":"🚀"},{"slug":"solution-consulting","titleAr":"استشارات هندسة الحلول الرقمية المؤسسية","titleEn":"Enterprise Solution Consulting & Digital Architecture","descAr":"مساعدة الإدارات العليا في اختيار وتصميم الأنظمة التقنية المناسبة: المفاضلة بين شراء البرمجيات أو بنائها، خطط التحول السحابي، والتأكد من توافق الأنظمة مع أهداف النمو.","descEn":"Guiding corporate decision-makers through technology modernization: vendor selection, build vs buy assessments, cloud migration strategies, and enterprise software architecture.","category":"consulting","categoryNameAr":"تطوير الأعمال والاستشارات التقنية","categoryNameEn":"Business Development & IT Consulting","icon":"💼"},{"slug":"speed-optimization","titleAr":"تسريع المواقع وتحسين مؤشرات Google Core Web Vitals","titleEn":"Website Speed Optimization","descAr":"تسريع شامل للمواقع والمتاجر: تقليل زمن استجابة الخادم (TTFB)، استخراج الأكواد الحرجة، تحسين استعلامات قواعد البيانات، كاش Redis، وتأجيل ملفات جافاسكريبت المعطلة للرندرة.","descEn":"Full-stack web performance engineering: TTFB reduction, critical CSS extraction, database query optimization, Redis caching, script deferral, and WebP/AVIF media optimization.","category":"seo","categoryNameAr":"السيو والتسويق الرقمي","categoryNameEn":"SEO & Digital Marketing","icon":"🚀"},{"slug":"team-structure-documentation","titleAr":"هيكلة فريق العمل وتوثيق السير الذاتية المهنية","titleEn":"Project Team Structure & CV Documentation","descAr":"إعداد الهيكل التنظيمي لفريق المشروع: رسم المخطط الهيكلي، وتنسيق السير الذاتية للمهندسين والاستشاريين وإبراز الشهادات والخبرات المطابقة لشروط الكراسة.","descEn":"Documenting team qualifications: project organizational charts, role descriptions, and tailoring expert CVs to highlight exact mandatory certifications and experience years.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"technical-compliance-review","titleAr":"مراجعة الامتثال الفني وتدقيق الفجوات","titleEn":"Technical Compliance Review & Gap Audits","descAr":"مراجعة هندسية دقيقة للعرض الفني ومطابقة مواصفات الأجهزة والبرمجيات مع متطلبات الكراسة للتأكد من عدم وجود أي تحفظ فني يضعف تقييم العطاء.","descEn":"Critical technical review ensuring that proposed technologies, architectures, and methodologies strictly satisfy the performance standards specified in the tender.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"technical-evaluation-criteria-analysis","titleAr":"تحليل معايير التقييم الفني وهندسة حصد النقاط","titleEn":"Technical Evaluation Criteria Analysis & Point Optimization","descAr":"تحليل دقيق لأوزان درجات التقييم الفني: توجيه فصول العرض الفني للإجابة المباشرة على بنود استمارة التقييم مما يسهل على المقيم منحك الدرجة الكاملة.","descEn":"Analyzing technical scoring matrices: reverse-engineering proposal sections to align directly with scoring rubrics and ensuring evaluators award maximum marks.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"technical-methodology-development","titleAr":"تطوير وصياغة المنهجية الفنية للتنفيذ","titleEn":"Technical Methodology Development","descAr":"صياغة المنهجية الفنية الشاملة لتنفيذ المشروع: مراحل العمل، آليات ضمان الجودة، أدوات إدارة ومتابعة الأداء، ومخططات توضح سير العمليات بدقة.","descEn":"Developing bespoke project execution methodologies: agile, waterfall, or hybrid frameworks, quality control procedures, governance models, and delivery roadmaps.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"technical-proposal-preparation","titleAr":"إعداد وتجهيز ملفات العرض الفني التخصصية","titleEn":"Technical Proposal Preparation & Engineering","descAr":"إعداد الأقسام التخصصية في العرض الفني: المخططات الهندسية، معايير الأمن والسرية، مسارات تنفيذ المشروع، وإثبات الكفاءة الفنية للجنة الفحص والعطاءات.","descEn":"Authoring specialized technical narratives, system architecture blueprints, deployment roadmaps, and SLA frameworks that prove execution capability to tender committees.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"technical-seo","titleAr":"السيو التقني وهندسة أرشفة محركات البحث","titleEn":"Technical SEO & Search Architecture","descAr":"خدمات السيو التقني المتقدمة: تصحيح أخطاء الفهرسة، ترميز البيانات المنظمة (Schema.org JSON-LD)، ضبط وسوم الـ Canonical والـ Hreflang، وتحسين ميزانية الزحف لملايين الصفحات.","descEn":"Technical SEO architecture: resolving crawl budget waste, schema structured data, canonicalization, hreflang multilingual routing, XML sitemaps, and Core Web Vitals optimization.","category":"seo","categoryNameAr":"السيو والتسويق الرقمي","categoryNameEn":"SEO & Digital Marketing","icon":"🚀"},{"slug":"technology-websites","titleAr":"تطوير مواقع شركات التقنية والحلول السحابية","titleEn":"Technology Company Website Development","descAr":"بوابات رقمية فائقة التطور لشركات التقنية: استعراض تفاعلي لخصائص البرمجيات، حاسبات الأسعار والاشتراكات، صفحات توثيق الـ API، وحجز العروض التوضيحية (Live Demos).","descEn":"Modern, dynamic web platforms for tech companies: interactive product feature tours, pricing calculators, API documentation portals, customer case studies, and live demo booking.","category":"web","categoryNameAr":"تصميم وتطوير المواقع والمتاجر","categoryNameEn":"Web & E-Commerce Development","icon":"🌐"},{"slug":"tender-compliance-matrix","titleAr":"إعداد مصفوفة الامتثال للمناقصات (Compliance Matrix)","titleEn":"Tender Compliance Matrix Preparation","descAr":"إعداد مصفوفة الامتثال الفني الدقيقة: جدول تقاطعي يربط كل بند في كراسة الشروط برقم الصفحة والفقرة في عرضك الفني لإثبات الاستيفاء التام للجنة الفحص.","descEn":"Authoring definitive compliance matrices: cross-referencing RFP clauses against proposal chapters, demonstrating 100% full compliance with verified proof references.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"tender-document-analysis","titleAr":"تحليل وثائق وكراسات الشروط للمناقصات (RFP)","titleEn":"Tender Document & RFP In-Depth Analysis","descAr":"قراءة وتحليل كراسات الشروط الحكومية والخاصة: استخراج الشروط الإلزامية التي يترتب على إغفالها الاستبعاد، وتجهيز خطابات الاستفسار الفني للجهة المالكة.","descEn":"Rigorous analysis of RFP documents: identifying disqualification traps, extracting mandatory scope items, clarifying ambiguity, and preparing vendor inquiry requests.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"tender-gap-analysis","titleAr":"تحليل الفجوات في متطلبات المناقصة وخطة معالجتها","titleEn":"Tender Gap Analysis & Remediation Strategy","descAr":"تحديد الفجوات بين إمكانيات شركتك وشروط الكراسة في وقت مبكر: اقتراح التحالفات الاستراتيجية (Consortium) أو توفير البدائل الفنية المعتمدة قبل موعد التسليم.","descEn":"Early-stage gap identification: identifying missing vendor certifications, team qualifications, or technical components, and formulating joint-venture or mitigation plans.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"tender-proposal-writing","titleAr":"إعداد وكتابة العروض الفنية للمناقصات","titleEn":"Tender & Technical Proposal Writing","descAr":"إعداد وكتابة العروض الفنية التنافسية لمناقصات التقنية والمقاولات: صياغة المنهجية الفنية، خطط التنفيذ، هياكل فرق العمل، وضمان استيفاء كافة كراسات الشروط.","descEn":"Comprehensive proposal writing for technology, infrastructure, and consulting tenders: technical methodologies, staffing plans, risk management, and executive summaries.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"tender-quality-assurance","titleAr":"ضمان جودة وتدقيق ملفات المناقصات (Tender QA)","titleEn":"Tender Quality Assurance (QA) & Audit","descAr":"مراجعة وتدقيق جودة ملفات العطاء بالكامل: فحص سلامة الخطابات والضمان البنكي، اكتمال التواقيع والأختام، والتحقق من سلامة الترقيم لتفادي أي استبعاد إجرائي.","descEn":"Independent quality assurance review: validating formatting, cross-checking signatures, verifying bank guarantee wording, and inspecting mandatory documentation checklists.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"tender-requirements-extraction","titleAr":"استخراج متطلبات المناقصة وجدولة الالتزامات","titleEn":"Tender Requirements Extraction & Traceability","descAr":"استخراج وتصنيف جميع المتطلبات من كراسة الشروط في سجل موحد، وتوزيعها على مسؤولي الفرق لضمان عدم إغفال أي شرط أو مستند إلزامي.","descEn":"Creating complete requirements registries: assigning ownership across technical, legal, and commercial teams, ensuring every single clause receives a compliant response.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"tender-risk-assessment","titleAr":"تقييم مخاطر المناقصات وإعداد خطط الحد منها","titleEn":"Tender Risk Assessment & Mitigation Planning","descAr":"إعداد مصفوفة إدارة المخاطر للمشروع: حصر مخاطر التوريد، غرامات التأخير، تقلبات الأسعار، وصياغة خطة استباقية لمعالجتها لتعزيز ثقة العميل.","descEn":"Contractual and delivery risk assessments: analyzing penalty clauses, liquidated damages, payment milestone delays, currency risks, and preparing mitigation narratives.","category":"tenders","categoryNameAr":"المناقصات والعروض الفنية (اعتماد)","categoryNameEn":"Tenders & Government Procurement","icon":"🏛️"},{"slug":"website-indexing-optimization","titleAr":"تحسين أرشفة وفهرسة المواقع في Google Search Console","titleEn":"Website Indexing & Google Search Console Optimization","descAr":"علاج مشكلات الفهرسة في Google Search Console: معالجة الصفحات المستبعدة، صفحات الخطأ، وتسهيل قراءة نصوص جافاسكريبت لضمان أرشفة كامل صفحات الموقع.","descEn":"Direct Google Search Console remediation: resolving indexing exclusions, fixing soft 404s, diagnosing JavaScript rendering barriers, and automating XML sitemap submissions.","category":"seo","categoryNameAr":"السيو والتسويق الرقمي","categoryNameEn":"SEO & Digital Marketing","icon":"🚀"},{"slug":"website-maintenance","titleAr":"صيانة المواقع والدعم الفني السحابي المستمر","titleEn":"Website Maintenance & Technical Support","descAr":"عقود صيانة ودعم فني تضمن استقرار موقعك وأمانه الدائم: فحص التحديثات على سيرفر تجريبي قبل تطبيقها، مراقبة التوقف لحظياً، الحماية من البرمجيات الخبيثة، ونسخ احتياطي خارجي مشفر.","descEn":"Enterprise maintenance retainers: routine core and plugin updates on staging, real-time uptime monitoring, malware elimination, off-site encrypted backups, and rapid bug fixes.","category":"web","categoryNameAr":"تصميم وتطوير المواقع والمتاجر","categoryNameEn":"Web & E-Commerce Development","icon":"🌐"},{"slug":"website-redesign","titleAr":"إعادة تصميم وتحديث المواقع الإلكترونية","titleEn":"Website Redesign & Modernization","descAr":"تطوير شامل للمواقع القديمة: تجديد الهوية البصرية، تحسين تجربة التصفح على الجوال، ترقية أنظمة إدارة المحتوى، مع حماية كاملة لترتيب وأرشفة الموقع في جوجل عبر التحويلات السليمة.","descEn":"Full-scope website modernization: refreshing visual aesthetics to luxury dark and emerald themes, re-architecting UX flows, upgrading CMS frameworks, and preserving 100% of organic Google rankings.","category":"web","categoryNameAr":"تصميم وتطوير المواقع والمتاجر","categoryNameEn":"Web & E-Commerce Development","icon":"🌐"},{"slug":"website-security","titleAr":"أمان المواقع الإلكترونية ومكافحة الاختراق","titleEn":"Website Security & Malware Hardening","descAr":"حماية متكاملة للمواقع والأنظمة السحابية: إزالة البرمجيات الخبيثة، تركيب جدار حماية التطبيقات (WAF)، صد هجمات القوة الغاشمة، وتشفير الاتصال بشهادات أمان متطورة.","descEn":"End-to-end website cybersecurity: automated malware cleanup, Web Application Firewall (WAF) deployment, brute force prevention, SSL/TLS hardening, and code vulnerability auditing.","category":"web","categoryNameAr":"تصميم وتطوير المواقع والمتاجر","categoryNameEn":"Web & E-Commerce Development","icon":"🌐"},{"slug":"wordpress-development","titleAr":"تطوير مواقع ووردبريس","titleEn":"WordPress Website Development","descAr":"برمجة مواقع ووردبريس مخصصة من الصفر دون قوالب جاهزة متضخمة، كتل جوتنبرج مخصصة، متاجر ووكومرس، وتسريع فائق يحقق 98+ في مؤشرات الويب.","descEn":"Bespoke WordPress engineering eliminating template bloat. Custom themes, enterprise Gutenberg blocks, WooCommerce portals, and Core Web Vitals performance tuning.","category":"web","categoryNameAr":"تصميم وتطوير المواقع والمتاجر","categoryNameEn":"Web & E-Commerce Development","icon":"🌐"},{"slug":"zid-store-development","titleAr":"تصميم وتطوير متاجر زد","titleEn":"Zid Store Design & Development","descAr":"بناء وتخصيص متاجر منصة زد باحترافية، تفعيل زد باي وزد شب، إدارة مخزون الفروع المتعددة، والربط مع أنظمة نقاط البيع والمحاسبة للشركات السعودية.","descEn":"Engineering bespoke storefronts on Zid, configuring Zid Pay, Zid Ship, multi-branch inventory routing, and integrating POS systems for modern Saudi retailers.","category":"web","categoryNameAr":"تصميم وتطوير المواقع والمتاجر","categoryNameEn":"Web & E-Commerce Development","icon":"🌐"}];

function initGlobalMobileAppNavigation() {
  if (document.getElementById('global-mobile-bottom-nav')) return;

  const BASE_PREFIX = window.location.pathname.startsWith('/yg') ? '/yg' : '';
  const fullPathname = window.location.pathname;
  const isAr = document.documentElement.lang === 'ar' || fullPathname.startsWith(BASE_PREFIX + '/ar');
  const pathname = BASE_PREFIX ? (fullPathname.replace(/^\/yg/, '') || '/') : fullPathname;
  const hash = window.location.hash || '';

  // Remove any legacy hardcoded bottom bars on English pages to prevent duplicate mobile nav bars
  if (!isAr) {
    document.querySelectorAll('nav.fixed.bottom-0:not(#global-mobile-bottom-nav)').forEach(el => el.remove());
  }

  // Ensure body has safe bottom padding on mobile
  if (window.innerWidth < 1024) {
    document.body.style.paddingBottom = 'calc(80px + env(safe-area-inset-bottom, 12px))';
  }

  // 1. Hide mobile top bar language switchers (< 1024px)
  document.querySelectorAll('header a[href*="/en/index.html"], header a[href*="/ar/index.html"], .mobile-lang-btn, [data-mobile-lang-switch]').forEach(el => {
    if (el.closest('.lg\\:hidden') || window.innerWidth < 1024) {
      el.classList.add('hidden');
    }
  });

  // 2. Identify active tab
  let activeTab = 'home';
  if (pathname.includes('/services/')) {
    activeTab = 'services';
  } else if (!isAr && pathname.includes('/cv/')) {
    activeTab = 'cv';
  } else if (pathname.includes('/tenders/')) {
    activeTab = isAr ? 'tenders' : 'more';
  } else if (hash.includes('portfolio') || pathname.includes('/portfolio')) {
    activeTab = 'portfolio';
  } else if (
    pathname.includes('/articles/') ||
    pathname.includes('/certifications/') ||
    pathname.includes('/contact/') ||
    hash.includes('resume') ||
    hash.includes('contact')
  ) {
    activeTab = 'more';
  } else if (
    pathname === '/' ||
    pathname === '/index.html' ||
    pathname === '/en/' ||
    pathname === '/en/index.html' ||
    pathname === '/ar/' ||
    pathname === '/ar/index.html'
  ) {
    activeTab = 'home';
  }

  // 3. Resolve Counterpart URL safely
  function getCounterpartUrl() {
    const search = window.location.search || '';
    if (isAr) {
      if (pathname === '/ar/' || pathname === '/ar/index.html' || pathname === '/ar') {
        return BASE_PREFIX + '/index.html' + search + hash;
      }
      if (pathname.startsWith('/ar/services/')) {
        const slug = pathname.replace('/ar/services/', '');
        return BASE_PREFIX + '/en/services/' + slug + search + hash;
      }
      if (pathname.startsWith('/ar/tenders/')) {
        const slug = pathname.replace('/ar/tenders/', '');
        return BASE_PREFIX + '/en/tenders/' + slug + search + hash;
      }
      if (pathname.startsWith('/ar/certifications/')) {
        return BASE_PREFIX + '/en/certifications/index.html' + search + hash;
      }
      if (pathname.startsWith('/ar/articles/')) {
        const slug = pathname.replace('/ar/articles/', '');
        return BASE_PREFIX + '/en/articles/' + (slug || 'index.html') + search + hash;
      }
      return BASE_PREFIX + pathname.replace('/ar/', '/en/') + search + hash;
    } else {
      if (pathname === '/' || pathname === '/index.html' || pathname === '/en/' || pathname === '/en/index.html' || pathname === '') {
        return BASE_PREFIX + '/ar/index.html' + search + hash;
      }
      if (pathname.startsWith('/en/services/')) {
        const slug = pathname.replace('/en/services/', '');
        return BASE_PREFIX + '/ar/services/' + slug + search + hash;
      }
      if (pathname.startsWith('/en/tenders/')) {
        const slug = pathname.replace('/en/tenders/', '');
        return BASE_PREFIX + '/ar/tenders/' + slug + search + hash;
      }
      if (pathname.startsWith('/en/certifications/')) {
        return BASE_PREFIX + '/ar/certifications/index.html' + search + hash;
      }
      if (pathname.startsWith('/en/articles/')) {
        const slug = pathname.replace('/en/articles/', '');
        return BASE_PREFIX + '/ar/articles/' + slug + search + hash;
      }
      return BASE_PREFIX + '/ar' + pathname + search + hash;
    }
  }

  // 4. Fixed Bottom App Navigation Bar
  const nav = document.createElement('nav');
  nav.id = 'global-mobile-bottom-nav';
  nav.className = 'lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#07130D]/95 backdrop-blur-2xl border-t border-emerald-950/80 px-2 pt-1.5 pb-[max(env(safe-area-inset-bottom),10px)] shadow-[0_-8px_30px_rgba(0,0,0,0.7)]';
  nav.setAttribute('aria-label', isAr ? 'شريط التنقل السفلي' : 'Bottom Navigation');

  const tabsConfig = [
    {
      id: 'home',
      label: isAr ? 'الرئيسية' : 'Home',
      href: BASE_PREFIX + (isAr ? '/ar/index.html' : '/index.html'),
      isLink: true,
      svg: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>'
    },
    {
      id: 'services',
      label: isAr ? 'الخدمات' : 'Services',
      isLink: false,
      svg: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>'
    },
    {
      id: 'cv',
      label: isAr ? 'السيرة' : 'CV',
      href: BASE_PREFIX + (isAr ? '/ar/cv/index.html' : '/en/cv/index.html'),
      isLink: true,
      svg: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>'
    },
    {
      id: 'portfolio',
      label: isAr ? 'الأعمال' : 'Portfolio',
      href: BASE_PREFIX + (isAr ? '/ar/portfolio/index.html' : '/en/portfolio/index.html'),
      isLink: true,
      svg: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'
    },
    {
      id: 'more',
      label: isAr ? 'المزيد' : 'More',
      isLink: false,
      svg: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/></svg>'
    }
  ];

  let itemsHtml = '<div class="grid grid-cols-5 items-center justify-around gap-1">';
  tabsConfig.forEach(t => {
    const isActive = t.id === activeTab;
    const activeIconWrapper = isActive ? 'bg-gradient-to-r from-[#C6A15B]/25 to-[#E5C78B]/20 border border-[#C6A15B]/50 shadow-[0_0_12px_rgba(198,161,91,0.3)]' : '';
    const activeText = isActive ? 'text-white font-bold' : 'text-slate-400';
    const activeIconClass = isActive ? 'text-[#F0D9A2] stroke-[2.2] scale-105 drop-shadow-[0_0_8px_rgba(229,199,139,0.7)]' : 'text-slate-400 stroke-[1.8]';
    const dot = isActive ? '<span class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#E5C78B] shadow-[0_0_6px_rgba(229,199,139,0.9)]"></span>' : '';

    if (t.isLink) {
      itemsHtml += `
        <a href="${t.href}" class="flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all duration-200 active:scale-95 focus:outline-none cursor-pointer ${isActive ? 'text-[#F0D9A2]' : 'text-slate-400 hover:text-slate-200'}">
          <div class="relative flex items-center justify-center w-10 h-7 rounded-full transition-all duration-200 ${activeIconWrapper}">
            <div class="${activeIconClass}">${t.svg}</div>
            ${dot}
          </div>
          <span class="text-[11px] mt-1 tracking-normal leading-tight font-semibold ${activeText}">${t.label}</span>
        </a>
      `;
    } else {
      itemsHtml += `
        <button type="button" id="global-btn-tab-${t.id}" class="flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all duration-200 active:scale-95 focus:outline-none cursor-pointer ${isActive ? 'text-[#F0D9A2]' : 'text-slate-400 hover:text-slate-200'}">
          <div class="relative flex items-center justify-center w-10 h-7 rounded-full transition-all duration-200 ${activeIconWrapper}">
            <div class="${activeIconClass}">${t.svg}</div>
            ${dot}
          </div>
          <span class="text-[11px] mt-1 tracking-normal leading-tight font-semibold ${activeText}">${t.label}</span>
        </button>
      `;
    }
  });
  itemsHtml += '</div>';
  nav.innerHTML = itemsHtml;
  document.body.appendChild(nav);

  // 5. Build Slide-Up Services Bottom Sheet
  const servicesSheet = document.createElement('div');
  servicesSheet.id = 'global-services-sheet';
  servicesSheet.className = 'lg:hidden fixed inset-0 z-50 flex flex-col justify-end bg-black/80 backdrop-blur-md hidden animate-fade-in';
  servicesSheet.innerHTML = `
    <div class="flex-1 w-full" id="close-services-backdrop"></div>
    <div class="w-full bg-[#07130D] border-t border-[#C6A15B]/50 rounded-t-3xl shadow-[0_-12px_40px_rgba(0,0,0,0.8)] flex flex-col max-h-[88vh] animate-slide-up pb-[max(env(safe-area-inset-bottom),16px)]">
      
      <!-- Grab Handle -->
      <div class="pt-3 pb-1 flex justify-center cursor-pointer" id="close-services-handle">
        <div class="w-12 h-1.5 bg-emerald-900/80 rounded-full"></div>
      </div>

      <!-- Header Bar -->
      <div class="px-5 py-3 border-b border-emerald-950/80 flex items-center justify-between shrink-0">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C6A15B]/20 to-emerald-500/20 border border-[#C6A15B]/40 flex items-center justify-center text-base">
            🌐
          </div>
          <div>
            <h2 class="font-bold text-sm text-white flex items-center gap-2">
              <span>${isAr ? 'جميع الخدمات المتخصصة' : 'All Specialized Services'}</span>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#0B1F16] text-[#E5C78B] border border-[#C6A15B]/30 font-bold">
                93
              </span>
            </h2>
            <p class="text-[10px] text-emerald-400/80 font-mono">
              ${isAr ? 'المناقصات · تطوير الويب · البرمجيات · السيو' : 'Etimad Tenders · Web Dev · ERP · SEO Architecture'}
            </p>
          </div>
        </div>

        <button id="close-services-btn" class="w-8 h-8 rounded-xl bg-[#0B1F16] border border-emerald-900 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer" aria-label="Close">
          ✕
        </button>
      </div>

      <!-- Search Input -->
      <div class="px-4 pt-3 pb-2 shrink-0">
        <div class="relative">
          <input
            type="text"
            id="services-sheet-search"
            placeholder="${isAr ? 'ابحث في 93 خدمة متخصصة...' : 'Search across 93 services...'}"
            class="w-full bg-[#0B1F16] border border-emerald-950/90 focus:border-[#C6A15B]/60 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none transition-colors"
          />
        </div>
      </div>

      <!-- Category Filter Pills -->
      <div class="px-4 pb-2.5 overflow-x-auto no-scrollbar shrink-0 flex items-center gap-1.5 border-b border-emerald-950/60" id="services-categories-container">
        <!-- Rendered via JS -->
      </div>

      <!-- Scrollable Services List -->
      <div class="flex-1 overflow-y-auto p-4 space-y-2.5 min-h-[260px]" id="services-list-container">
        <!-- Rendered via JS -->
      </div>

      <!-- Footer Quick Action -->
      <div class="p-3 bg-[#07130D] border-t border-emerald-950/80 shrink-0 flex items-center justify-between text-xs">
        <a href="${BASE_PREFIX}${isAr ? '/ar/services/index.html' : '/en/services/index.html'}" class="text-xs font-bold text-[#E5C78B] hover:underline flex items-center gap-1.5">
          <span>${isAr ? 'فتح فهرس الخدمات الكامل (93 صفحة) ←' : 'Open Full Services Catalog (93 Pages) →'}</span>
        </a>
        <button id="close-services-footer-btn" class="text-xs text-slate-400 hover:text-white px-2 py-1">
          ${isAr ? 'إغلاق' : 'Close'}
        </button>
      </div>

    </div>
  `;
  document.body.appendChild(servicesSheet);

  // 6. Build Slide-Up More Bottom Sheet
  const moreSheet = document.createElement('div');
  moreSheet.id = 'global-more-sheet';
  moreSheet.className = 'lg:hidden fixed inset-0 z-50 flex flex-col justify-end bg-black/80 backdrop-blur-sm hidden animate-fade-in';
  moreSheet.innerHTML = `
    <div class="flex-1 w-full" id="close-more-backdrop"></div>
    <div class="w-full bg-[#07130D] border-t border-[#C6A15B]/50 rounded-t-3xl shadow-2xl p-5 space-y-4 max-h-[85vh] overflow-y-auto pb-[max(env(safe-area-inset-bottom),20px)] animate-slide-up">
      
      <!-- Grab Handle -->
      <div class="w-12 h-1.5 bg-emerald-900 rounded-full mx-auto cursor-pointer" id="close-more-handle"></div>

      <!-- Header Lockup -->
      <div class="flex items-center justify-between border-b border-emerald-950/80 pb-3">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-full border border-[#C6A15B]/50 p-0.5 bg-[#07130D]">
            <img src="${BASE_PREFIX}/assets/aistudio/image_ef5d64bf.png" alt="Emblem" class="w-full h-full object-cover rounded-full" />
          </div>
          <div>
            <h3 class="font-cinzel font-bold text-sm text-white">
              ${isAr ? 'يوسف غمري' : 'Youssef Ghamry'}
            </h3>
            <span class="text-[10px] text-emerald-400 font-mono">
              ${isAr ? 'القائمة الرئيسية والتطبيقات' : 'Main Menu & App Tools'}
            </span>
          </div>
        </div>
        <button id="close-more-btn" class="p-1.5 rounded-xl bg-[#0B1F16] border border-emerald-900 text-slate-300 hover:text-white" aria-label="Close Drawer">
          ✕
        </button>
      </div>

      <!-- Navigation Rows -->
      <div class="space-y-2">
        
        <!-- Tenders Link -->
        <a href="${BASE_PREFIX}${isAr ? '/ar/tenders/awarded-tenders.html' : '/en/tenders/awarded-tenders.html'}" class="w-full p-3.5 rounded-2xl bg-[#0B1F16]/90 border border-emerald-950/90 hover:border-[#C6A15B]/50 flex items-center justify-between transition-all active:scale-[0.98] text-start group cursor-pointer">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-[#07130D] border border-emerald-500/20 flex items-center justify-center shrink-0 text-[#E5C78B]">
              🏆
            </div>
            <div>
              <div class="text-xs font-bold text-white group-hover:text-[#E5C78B] transition-colors">
                ${isAr ? 'المناقصات والعطاءات الحكومية' : 'Government & Technical Tenders'}
              </div>
              <div class="text-[10px] text-slate-400 mt-0.5">
                ${isAr ? 'أكثر من 400 مناقصة تم إعدادها وصياغتها وتنسيقها ومراجعتها' : '400+ Tenders Prepared, Written, Formatted & Reviewed'}
              </div>
            </div>
          </div>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#07130D] text-[#E5C78B] border border-[#C6A15B]/30 font-bold">
            ${isAr ? '+400' : '400+'}
          </span>
        </a>

        <!-- Certifications Link -->
        <a href="${BASE_PREFIX}${isAr ? '/ar/certifications/index.html' : '/en/certifications/index.html'}" class="w-full p-3.5 rounded-2xl bg-[#0B1F16]/90 border border-emerald-950/90 hover:border-[#C6A15B]/50 flex items-center justify-between transition-all active:scale-[0.98] text-start group cursor-pointer">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-[#07130D] border border-emerald-500/20 flex items-center justify-center shrink-0 text-cyan-400">
              🏅
            </div>
            <div>
              <div class="text-xs font-bold text-white group-hover:text-[#E5C78B] transition-colors">
                ${isAr ? 'الشهادات والاعتمادات المهنية' : 'Professional Certifications'}
              </div>
              <div class="text-[10px] text-slate-400 mt-0.5">
                ${isAr ? '27 شهادة معتمدة من AWS، جوجل، IBM، وميتا' : '27 Verified Credentials from AWS, Google, Meta'}
              </div>
            </div>
          </div>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#07130D] text-[#E5C78B] border border-[#C6A15B]/30 font-bold">
            27+
          </span>
        </a>

        <!-- Articles Hub Link -->
        <a href="${BASE_PREFIX}${isAr ? '/ar/articles/index.html' : '/en/articles/index.html'}" class="w-full p-3.5 rounded-2xl bg-[#0B1F16]/90 border border-emerald-950/90 hover:border-[#C6A15B]/50 flex items-center justify-between transition-all active:scale-[0.98] text-start group cursor-pointer">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-[#07130D] border border-emerald-500/20 flex items-center justify-center shrink-0 text-[#E5C78B]">
              📚
            </div>
            <div>
              <div class="text-xs font-bold text-white group-hover:text-[#E5C78B] transition-colors">
                ${isAr ? 'المكتبة المعرفية والمقالات' : 'Knowledge Hub & Articles'}
              </div>
              <div class="text-[10px] text-slate-400 mt-0.5">
                ${isAr ? '132 دليلاً هندسياً ومقالاً تخصصياً في التقنية والمناقصات' : '132 Technical Guides & Procurement Blueprints'}
              </div>
            </div>
          </div>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#07130D] text-[#E5C78B] border border-[#C6A15B]/30 font-bold">
            132
          </span>
        </a>

        <!-- Contact Link -->
        <a href="${BASE_PREFIX}${isAr ? '/ar/contact/index.html' : '/en/contact/index.html'}" class="w-full p-3.5 rounded-2xl bg-[#0B1F16]/90 border border-emerald-950/90 hover:border-[#C6A15B]/50 flex items-center justify-between transition-all active:scale-[0.98] text-start group cursor-pointer">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-[#07130D] border border-emerald-500/20 flex items-center justify-center shrink-0 text-[#F0D9A2]">
              ✉️
            </div>
            <div>
              <div class="text-xs font-bold text-white group-hover:text-[#E5C78B] transition-colors">
                ${isAr ? 'تواصل معي واستشارة فورية' : 'Contact Me & Bid Consultation'}
              </div>
              <div class="text-[10px] text-slate-400 mt-0.5">
                ${isAr ? 'استشارات كراسات الشروط والمشاريع التقنية' : 'Direct Inquiry for Tenders & IT Projects'}
              </div>
            </div>
          </div>
          <span class="text-xs text-slate-400">→</span>
        </a>

      </div>

      <!-- Consultation CTA Banner -->
      <div class="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-950/70 via-[#0B1F16] to-[#07130D] border border-emerald-500/30 flex items-center justify-between">
        <div class="space-y-0.5">
          <div class="text-xs font-bold text-white flex items-center gap-1.5">
            <span>✨</span>
            <span>${isAr ? 'طلب استشارة أو عرض فني' : 'Request Proposal / Consultation'}</span>
          </div>
          <div class="text-[10px] text-slate-400">
            ${isAr ? 'دراسة كراسة الشروط وتقديم الدعم الفني' : 'RFP Analysis & Technical Proposal Drafting'}
          </div>
        </div>
        <a href="${isAr ? '/ar/contact/index.html' : '/en/contact/index.html'}" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold text-xs shadow-md transition-all active:scale-95">
          ${isAr ? 'اطلب الآن' : 'Request'}
        </a>
      </div>

      <!-- Language & WhatsApp Grid -->
      <div class="grid grid-cols-2 gap-2.5 pt-1">
        <a href="${getCounterpartUrl()}" class="py-3 px-3 rounded-2xl bg-[#0B1F16] border border-[#C6A15B]/50 text-xs font-bold text-[#E5C78B] hover:text-white flex items-center justify-center gap-2 hover:border-[#E5C78B] transition-all shadow-sm">
          <span>🌐</span>
          <span>${isAr ? 'English (EN)' : 'Arabic Edition (AR)'}</span>
        </a>

        <a href="https://wa.me/201503292942" target="_blank" rel="noopener noreferrer" class="py-3 px-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white flex items-center justify-center gap-2 transition-colors shadow-sm">
          <span>💬</span>
          <span>${isAr ? 'واتساب مباشر' : 'WhatsApp'}</span>
        </a>
      </div>

      <!-- Footer Info -->
      <div class="pt-2 border-t border-emerald-950/80 flex items-center justify-between text-[11px] text-slate-400">
        <span>${isAr ? 'المنصة المهنية المعتمدة' : 'Official Professional Platform'}</span>
        <span class="text-emerald-400 font-mono text-[10px]">v3.2 Production</span>
      </div>

    </div>
  `;
  document.body.appendChild(moreSheet);

  // 7. Services Sheet Logic (Search & Categories)
  const categoriesConfig = [
    { id: 'all', nameAr: 'الكل (93)', nameEn: 'All (93)', icon: '✨' },
    { id: 'tenders', nameAr: 'المناقصات (31)', nameEn: 'Tenders (31)', icon: '🏛️' },
    { id: 'web', nameAr: 'المواقع والمتاجر (24)', nameEn: 'Web (24)', icon: '🌐' },
    { id: 'erp', nameAr: 'الأنظمة والبرمجيات (14)', nameEn: 'ERP & Software (14)', icon: '⚙️' },
    { id: 'mobile', nameAr: 'تطبيقات الجوال (7)', nameEn: 'Mobile (7)', icon: '📱' },
    { id: 'seo', nameAr: 'السيو والتسويق (12)', nameEn: 'SEO (12)', icon: '🚀' },
    { id: 'consulting', nameAr: 'الاستشارات التقنية (5)', nameEn: 'Consulting (5)', icon: '💼' }
  ];

  let currentCategory = 'all';
  let currentSearch = '';

  const catContainer = document.getElementById('services-categories-container');
  const listContainer = document.getElementById('services-list-container');
  const searchInput = document.getElementById('services-sheet-search');

  function renderCategories() {
    catContainer.innerHTML = categoriesConfig.map(cat => {
      const active = currentCategory === cat.id;
      const cls = active
        ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-md shadow-emerald-950/40 border border-emerald-500/50'
        : 'bg-[#0B1F16] text-slate-300 hover:text-white border border-emerald-950 hover:border-emerald-800';
      return `<button type="button" data-cat-id="${cat.id}" class="px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${cls}">
        <span>${cat.icon}</span>
        <span>${isAr ? cat.nameAr : cat.nameEn}</span>
      </button>`;
    }).join('');

    catContainer.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        currentCategory = btn.getAttribute('data-cat-id');
        renderCategories();
        renderServicesList();
      });
    });
  }

  function renderServicesList() {
    const q = currentSearch.trim().toLowerCase();
    const filtered = ALL_SITE_SERVICES.filter(s => {
      const matchesCat = (currentCategory === 'all' || s.category === currentCategory);
      if (!matchesCat) return false;
      if (!q) return true;
      const title = isAr ? s.titleAr.toLowerCase() : s.titleEn.toLowerCase();
      const desc = isAr ? s.descAr.toLowerCase() : s.descEn.toLowerCase();
      const slug = s.slug.toLowerCase();
      return title.includes(q) || desc.includes(q) || slug.includes(q);
    });

    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div class="text-center py-10 space-y-2">
          <div class="text-2xl">🔍</div>
          <p class="text-xs text-slate-400">${isAr ? 'لا توجد خدمات مطابقة للبحث' : 'No services found'}</p>
        </div>
      `;
      return;
    }

    const esc = (str) => String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

    listContainer.innerHTML = filtered.map(s => {
      const title = esc(isAr ? s.titleAr : s.titleEn);
      const desc = esc(isAr ? s.descAr : s.descEn);
      const catName = esc(isAr ? s.categoryNameAr : s.categoryNameEn);
      const targetUrl = (BASE_PREFIX || '') + (isAr ? ('/ar/services/' + s.slug + '.html') : ('/en/services/' + s.slug + '.html'));

      return `
        <a href="${targetUrl}" class="w-full text-start p-3 rounded-2xl bg-[#0B1F16]/95 border border-emerald-950 hover:border-[#C6A15B]/50 transition-all active:scale-[0.99] flex items-center justify-between gap-3 group cursor-pointer shadow-sm">
          <div class="flex items-start gap-3 min-w-0">
            <div class="w-10 h-10 rounded-xl bg-[#07130D] border border-emerald-500/20 flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition-transform">
              ${s.icon}
            </div>
            <div class="min-w-0 flex-1">
              <span class="text-[10px] font-semibold text-emerald-400 truncate block mb-0.5">${catName}</span>
              <h3 class="text-xs font-bold text-white group-hover:text-[#E5C78B] transition-colors leading-snug line-clamp-2">
                ${title}
              </h3>
              ${desc ? ('<p class="text-[10px] text-slate-400 line-clamp-1 mt-0.5">' + desc + '</p>') : ''}
            </div>
          </div>
          <div class="w-7 h-7 rounded-lg bg-[#07130D] border border-emerald-950 flex items-center justify-center text-slate-400 group-hover:text-[#E5C78B] shrink-0">
            ↗
          </div>
        </a>
      `;
    }).join('');
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      renderServicesList();
    });
  }

  renderCategories();
  renderServicesList();

  // 8. Open / Close Bottom Sheets Handlers
  function openServicesSheet() {
    moreSheet.classList.add('hidden');
    servicesSheet.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeServicesSheet() {
    servicesSheet.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function openMoreSheet() {
    servicesSheet.classList.add('hidden');
    moreSheet.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMoreSheet() {
    moreSheet.classList.add('hidden');
    document.body.style.overflow = '';
  }

  const btnServices = document.getElementById('global-btn-tab-services');
  if (btnServices) btnServices.addEventListener('click', openServicesSheet);

  const btnMore = document.getElementById('global-btn-tab-more');
  if (btnMore) btnMore.addEventListener('click', openMoreSheet);

  // Close triggers
  ['close-services-backdrop', 'close-services-handle', 'close-services-btn', 'close-services-footer-btn'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', closeServicesSheet);
  });

  ['close-more-backdrop', 'close-more-handle', 'close-more-btn'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', closeMoreSheet);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeServicesSheet();
      closeMoreSheet();
    }
  });
}

