export interface TenderDef {
  id: string;
  slug: string;
  nameAr: string;
  nameEn: string;
  entityAr: string;
  entityEn: string;
  tenderNumber: string;
  referenceNumber: string;
  subjectAr: string;
  subjectEn: string;
  summaryAr: string;
  summaryEn: string;
  tenderTypeAr: string;
  tenderTypeEn: string;
  sectorAr: string;
  sectorEn: string;
  issueDate: string;
  deadline: string;
  duration: string;
  budget: string;
  keyRequirementsAr: string[];
  keyRequirementsEn: string[];
  qualificationsAr: string[];
  qualificationsEn: string[];
  awardStatus: 'awarded' | 'submitted' | 'under-evaluation' | 'prepared' | 'regulatory';
  awardStatusAr: string;
  awardStatusEn: string;
  roleAr: string;
  roleEn: string;
  challengesAr: string;
  challengesEn: string;
  category: 'enterprise-systems' | 'infrastructure' | 'cybersecurity' | 'portals-mobile' | 'managed-services' | 'specialized';
  categoryAr: string;
  categoryEn: string;
  localContentMin?: string;
  sourceFile: string;
  notesAr?: string;
  notesEn?: string;
}

export const TENDERS_LIST: TenderDef[] = [
  {
    id: 'tender-01-khabeer',
    slug: 'khabeer-system-support-council-of-ministers',
    nameAr: 'تجديد الدعم الفني لنظام خبير',
    nameEn: 'Technical Support Renewal for Khabeer System',
    entityAr: 'هيئة الخبراء بمجلس الوزراء',
    entityEn: 'Bureau of Experts at the Council of Ministers',
    tenderNumber: 'OM11-25',
    referenceNumber: 'OM11-25',
    subjectAr: 'دعم فني وتشغيلي وصيانة لنظام خبير لإدارة المعاملات والإجراءات',
    subjectEn: 'Technical support, operations, and maintenance for the Khabeer Workflow System',
    summaryAr: 'تقديم خدمات الدعم الفني والصيانة والتحديث لنظام سير المعاملات والإجراءات (نظام خبير)، مع توفير فريق دعم من الدرجة الأولى والثانية وتجديد الرخص البرمجية الخارجية.',
    summaryEn: 'Provision of Tier 1 & Tier 2 technical support, operational maintenance, and updates for the Khabeer legal workflow system, including renewal of specialized optical and scanning licenses.',
    tenderTypeAr: 'التشغيل والصيانة / تطوير الأنظمة',
    tenderTypeEn: 'Operations, Maintenance & Systems Support',
    sectorAr: 'حكومي سيادي',
    sectorEn: 'Sovereign Government',
    issueDate: '29/01/2026م',
    deadline: 'وفق منصة اعتماد',
    duration: 'سنة ميلادية واحدة (12 شهراً)',
    budget: 'وفق جداول الكميات المعتمدة بالكراسة',
    keyRequirementsAr: [
      'فريق دعم فني متفرغ من الدرجة الأولى والثانية',
      'تنفيذ 3 زيارات ميدانية بمقر الهيئة (60 يوم عمل استشاري)',
      'تجديد رخص Dynamic Web TWAIN و Abbyy OCR للمعالجة الضوئية',
      'إدارة نظام التذاكر ومراقبة اتفاقيات مستوى الخدمة (SLA)'
    ],
    keyRequirementsEn: [
      'Dedicated Tier 1 & Tier 2 technical support engineering team',
      '3 on-site consulting visit blocks at Bureau headquarters (60 man-days)',
      'License renewals for Dynamic Web TWAIN and Abbyy OCR engines',
      'Ticketing system administration and strict SLA compliance monitoring'
    ],
    qualificationsAr: [
      'شهادة تصنيف المقاولين في مجال تقنية المعلومات',
      'شهادات الزكاة والضريبة والتأمينات والسعودة سارية المفعول',
      'سجل تجاري يغطي أنشطة صيانة ودعم برمجيات المعاملات'
    ],
    qualificationsEn: [
      'Valid Contractor Classification in IT & Systems',
      'Zakat, Tax, GOSI, and Saudization certificates',
      'Commercial Registration covering software maintenance'
    ],
    awardStatus: 'awarded',
    awardStatusAr: 'تمت الترسية بنجاح',
    awardStatusEn: 'Successfully Awarded',
    roleAr: 'تحليل كراسة الشروط والمواصفات، إعداد مصفوفة الامتثال، وصياغة منهجية الدعم الفني وتوزيع الكوادر',
    roleEn: 'RFP decomposition, compliance matrix formulation, and technical support methodology drafting',
    challengesAr: 'الالتزام الصارم بضوابط السرية والزيارات الميدانية لمنشأة سيادية، مع تأمين تجديد الرخص العالمية بدقة',
    challengesEn: 'Meeting strict sovereign confidentiality standards and coordinating on-premise expert staffing',
    category: 'enterprise-systems',
    categoryAr: 'تطوير وتشغيل الأنظمة المؤسسية',
    categoryEn: 'Enterprise Systems & Operations',
    sourceFile: 'PDF_1 (هيئة الخبراء)',
    notesAr: 'كراسة منافسة مخصصة لخدمات دعم الإجراءات والوثائق التشريعية.',
    notesEn: 'Dedicated procurement tender for legislative workflow systems.'
  },
  {
    id: 'tender-02-jcsa',
    slug: 'jcsa-racing-club-official-portal',
    nameAr: 'الموقع الإلكتروني لنادي سباقات الخيل',
    nameEn: 'Jockey Club of Saudi Arabia (JCSA) Official Portal',
    entityAr: 'نادي سباقات الخيل (JCSA)',
    entityEn: 'Jockey Club of Saudi Arabia',
    tenderNumber: '1384',
    referenceNumber: '1384',
    subjectAr: 'إدارة مستمرة وتطوير الموقع الإلكتروني والخدمات الرقمية والربط اللحظي',
    subjectEn: 'Continuous digital platform management, web portal modernization, and race results integration',
    summaryAr: 'التعاقد مع وكالة/شركة لتقديم الدعم المستمر، تحسين تجربة المستخدم، ربط وتكامل نتائج السباقات، وتطوير خصائص البوابة والأجهزة الذكية وربطها بقواعد بيانات الخيل العالمية.',
    summaryEn: 'Contracting an expert technology firm to deliver continuous web portal development, UX enhancements, dynamic race timing integration, and multi-device digital services.',
    tenderTypeAr: 'تطوير وبرمجة الأنظمة / خدمات تقنية',
    tenderTypeEn: 'Digital Platforms & Web Engineering',
    sectorAr: 'رياضي / حكومي',
    sectorEn: 'Sports & Public Sector',
    issueDate: '26/06/1447هـ',
    deadline: '13/07/1447هـ',
    duration: '12 شهراً',
    budget: 'وفق كراسة الشروط (قيمة الوثيقة: 200 ريال)',
    keyRequirementsAr: [
      'استضافة وإدارة خوادم سحابية على Oracle Cloud بجدة',
      'تجديد وإدارة رخصة نظام إدارة المحتوى المؤسسي Optimizely CMS',
      'ربط وتكامل بيانات السباقات الدولية Weatherby’s API لحظياً',
      'تطوير تقويم تفاعلي للسباقات ونظام توليد تقارير PDF تلقائية'
    ],
    keyRequirementsEn: [
      'Hosting & operations on Oracle Cloud Jeddah data center',
      'Optimizely Enterprise CMS licensing & continuous support',
      'Real-time API telemetry integration with Weatherby’s International',
      'Interactive racing calendar and automated PDF race card generation'
    ],
    qualificationsAr: [
      'سجل تجاري لأنشطة تطوير البرمجيات وحلول الويب',
      'شهادات الزكاة وضريبة القيمة المضافة والتأمينات والسعودة',
      'رخصة استثمار سارية (في حال المستثمر الأجنبي)'
    ],
    qualificationsEn: [
      'CR covering Web Solutions & Software Development',
      'Valid Zakat, VAT, GOSI, and Saudization certificates',
      'MISA Investment License (for foreign investors)'
    ],
    awardStatus: 'awarded',
    awardStatusAr: 'تمت الترسية بنجاح',
    awardStatusEn: 'Successfully Awarded',
    roleAr: 'إعداد العرض الفني، تصميم المعمارية السحابية لـ Oracle Cloud، ووضع خطة تكامل الـ APIs مع Weatherby’s',
    roleEn: 'Authored complete technical response, Oracle Cloud architecture, and API integration roadmap',
    challengesAr: 'تكامل واجهات برمجية دولية ذات تدفق بيانات لحظي وضمان زمن استجابة دون الثانية أثناء أوقات السباقات الكبرى',
    challengesEn: 'Integrating high-throughput international racing APIs with sub-second latency during major cups',
    category: 'portals-mobile',
    categoryAr: 'البوابات الرقمية وتطبيقات الجوال',
    categoryEn: 'Digital Portals & Web Platforms',
    sourceFile: 'PDF_9 (نادي سباقات الخيل)',
    notesAr: 'تمت الترسية وتنفيذ الترقية الشاملة للبوابة مع معفى من الضمان الابتدائي.',
    notesEn: 'Awarded project delivering high-traffic sporting portal on Oracle Cloud.'
  },
  {
    id: 'tender-03-rcjy-hospital',
    slug: 'wateen-his-system-support-rcjy-yanbu',
    nameAr: 'دعم وضمان وصيانة نظام معلومات المستشفى - وتين الطبي – ينبع',
    nameEn: 'Wateen Hospital Information System (BESTCare 2.A) Support — Yanbu',
    entityAr: 'الهيئة الملكية للجبيل وينبع',
    entityEn: 'Royal Commission for Jubail and Yanbu (RCJY)',
    tenderNumber: '28456',
    referenceNumber: '28456',
    subjectAr: 'ضمان وصيانة وتطوير نظام BESTCare 2.A للرعاية الصحية بمستشفى الهيئة',
    subjectEn: 'Warranty, maintenance, and enhancement of BESTCare 2.A Hospital Information System',
    summaryAr: 'تقديم خدمات الصيانة الوقائية والتصحيحية وضمان عمل النظام الصحي وتطويره وتدريب الكوادر بمستشفى الهيئة بينبع وعياداتها التابعة وفق المعايير الطبية المعتمدة.',
    summaryEn: 'Provision of corrective, preventative maintenance, continuous enhancements, and medical staff training for the BESTCare 2.A Hospital Information System at RCJY Yanbu Hospital.',
    tenderTypeAr: 'خدمات تقنية المعلومات / صيانة وتشغيل الأنظمة الصحية',
    tenderTypeEn: 'Healthcare Informatics & Maintenance',
    sectorAr: 'صحي / حكومي',
    sectorEn: 'Healthcare & Government',
    issueDate: '26/09/1447هـ',
    deadline: '22/10/1447هـ',
    duration: 'عام ميلادي واحد (12 شهراً)',
    budget: 'وفق جدول الكميات (قيمة الوثيقة: 200 ريال)',
    keyRequirementsAr: [
      'ضمان وصيانة نظام BESTCare 2.A الطبي المتكامل',
      'تخصيص 488 ساعة عمل متخصصة للتحسين والتطوير والربط البيني',
      'تدريب الكوادر الطبية والتمريضية والإدارية على التحديثات',
      'خطاب معتمد يثبت أن الدعم يتم من الشركة الأم أو وكيلها المعتمد'
    ],
    keyRequirementsEn: [
      'Comprehensive maintenance for BESTCare 2.A HIS suite',
      'Allocation of 488 specialized engineering hours for modules & integration',
      'Clinical, nursing, and administrative staff training sessions',
      'Official authorization letter from OEM or certified representative'
    ],
    qualificationsAr: [
      'خطاب اعتماد سارٍ من الشركة المصنعة للنظام الصحي',
      'شهادة تصنيف المقاولين في مجال صيانة البرمجيات الطبية',
      'شهادات السعودة والتأمينات والزكاة والضريبة'
    ],
    qualificationsEn: [
      'OEM authorization or partnership certificate for BESTCare',
      'Contractor classification in specialized software maintenance',
      'Standard statutory Saudi certificates'
    ],
    awardStatus: 'awarded',
    awardStatusAr: 'تمت الترسية بنجاح',
    awardStatusEn: 'Successfully Awarded',
    roleAr: 'هيكلة العرض الفني لإدارة المستشفيات، بناء مصفوفة ساعات العمل (488 ساعة)، وإعداد خطة الاستجابة للأعطال الحرجة',
    roleEn: 'Formulated healthcare technical response, structured 488-hour development schedule, and 24/7 SLA',
    challengesAr: 'الالتزام بمعايير الأنظمة الطبية الحيوية ومواءمة متطلبات الاعتماد مع الصانع الكوري الأصلي ezCaretech',
    challengesEn: 'Stringent hospital uptime requirements (99.99%) and OEM ezCaretech alignment',
    category: 'specialized',
    categoryAr: 'الأنظمة الصحية والجيومكانية المتخصصة',
    categoryEn: 'Specialized Systems & Healthcare',
    sourceFile: 'PDF_10 (الهيئة الملكية - ينبع)',
    notesAr: 'تطلب المنافسة ضماناً ابتدائياً بنسبة 1% واعتماداً رسمياً من المطور الأصلي للنظام.',
    notesEn: 'High-rigor medical IT support bid with mandatory OEM certification.'
  },
  {
    id: 'tender-04-jouf-university',
    slug: 'jouf-university-electronic-transactions-and-portal',
    nameAr: 'مشروع صيانة أنظمة التعاملات الإلكترونية والبوابة الإلكترونية',
    nameEn: 'Maintenance & Development of Electronic Transactions & Portal System',
    entityAr: 'جامعة الجوف',
    entityEn: 'Jouf University',
    tenderNumber: '2026/1',
    referenceNumber: '2026/1',
    subjectAr: 'صيانة وتطوير شامل للبوابات الإلكترونية وأنظمة التعاملات وترحيل قواعد البيانات',
    subjectEn: 'Comprehensive maintenance, upgrade, and database migration for university portals and workflow systems',
    summaryAr: 'تقديم خدمات الصيانة الوقائية والتصحيحية، وتطوير تطبيقات الهواتف الذكية، وترحيل قواعد بيانات المعاملات، ودمج أدوات الذكاء الاصطناعي التفاعلية والبوابة الرقمية.',
    summaryEn: 'Turnkey operational maintenance, mobile app engineering (iOS/Android), database migration from PostgreSQL to SQL Server, and AI conversational bot integration for Jouf University.',
    tenderTypeAr: 'تطوير وبرمجة / بنية تحتية وصيانة برمجيات',
    tenderTypeEn: 'Systems Development & Database Migration',
    sectorAr: 'تعليمي / حكومي',
    sectorEn: 'Higher Education & Government',
    issueDate: '15/08/1447هـ',
    deadline: '09/09/1447هـ',
    duration: '36 شهراً (3 سنوات)',
    budget: 'وفق جدول الكميات (قيمة الوثيقة: 200 ريال)',
    keyRequirementsAr: [
      'ترحيل قواعد بيانات Alfresco و Activiti بالكامل من PostgreSQL إلى SQL Server',
      'تطوير وتحديث تطبيقات الهواتف الذكية على نظامي iOS و Android',
      'الربط والتكامل مع منصة توكلنا الوطنية ومنظومة نفاذ',
      'تطوير وتدريب مساعد ذكي للمحادثة التفاعلية (Chatbot AI) للمستفيدين'
    ],
    keyRequirementsEn: [
      'Full database migration of Alfresco & Activiti from PostgreSQL to MS SQL Server',
      'Native iOS & Android mobile application redesign and maintenance',
      'Integration with Tawakkalna national platform and Nafath authentication',
      'Deployment and fine-tuning of an AI Chatbot for student/faculty services'
    ],
    qualificationsAr: [
      'شهادة تصنيف المقاولين في مجال تقنية المعلومات',
      'نموذج الزيارة الميدانية المعتمد والموقع من الجامعة',
      'سجل تجاري يغطي برمجة البوابات وترحيل قواعد البيانات',
      'شهادات السعودة والزكاة والضريبة والغرفة التجارية'
    ],
    qualificationsEn: [
      'IT Contractor Classification certificate',
      'Official signed site visit certificate from Jouf University',
      'CR covering portal development and database engineering',
      'Statutory compliance documents'
    ],
    awardStatus: 'awarded',
    awardStatusAr: 'تمت الترسية بنجاح',
    awardStatusEn: 'Successfully Awarded',
    roleAr: 'صياغة خطة ترحيل قواعد البيانات دون توقف (Zero-Downtime Migration)، وتصميم بنية الذكاء الاصطناعي للـ Chatbot',
    roleEn: 'Engineered zero-downtime database migration plan, AI chatbot architecture, and compliance matrix',
    challengesAr: 'ترحيل كميات ضخمة من وثائق الأرشفة (Alfresco) بين محركين مختلفين تماماً لقواعد البيانات دون فقدان التوافقية',
    challengesEn: 'Heterogeneous DB migration between PostgreSQL and SQL Server for enterprise ECM/BPM workloads',
    category: 'enterprise-systems',
    categoryAr: 'تطوير وتشغيل الأنظمة المؤسسية',
    categoryEn: 'Enterprise Systems & Operations',
    sourceFile: 'PDF_11 (جامعة الجوف)',
    notesAr: 'التزمت المناقصة بنموذج زيارة ميدانية ملزم كشرط لقبول العرض الفني.',
    notesEn: 'Mandatory site visit certificate bid with 36-month operational duration.'
  },
  {
    id: 'tender-05-sdaia-identity',
    slug: 'sdaia-identity-and-authentication-phase-one',
    nameAr: 'تشغيل وصيانة إدارة الهوية والتوثيق - المرحلة الاولى',
    nameEn: 'Operations & Maintenance of Digital Identity and Authentication — Phase 1',
    entityAr: 'الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا)',
    entityEn: 'Saudi Data & AI Authority (SDAIA)',
    tenderNumber: '1490',
    referenceNumber: '1490',
    subjectAr: 'تشغيل وصيانة وتطوير منظومة الهوية الرقمية والتوثيق الوطني وتأمين الرخص البيومترية',
    subjectEn: 'Operations, maintenance, and support for National Digital Identity (Nafath) and biometric engines',
    summaryAr: 'تشغيل ودعم منتجات الهوية الرقمية (منظومة النفاذ الوطني الموحد، تطبيق نفاذ، نظام التحقق القوي)، وتأمين رخص بيومترية متقدمة ودعم البنية التحتية وأجهزة موازنة الأحمال.',
    summaryEn: 'Flagship sovereign project operating Saudi Arabia’s National Single Sign-On (Nafath) ecosystem, provisioning biometric facial/voice recognition licenses, and operating F5 BIG-IP infrastructure.',
    tenderTypeAr: 'الأمن السيبراني / البنية التحتية والتشغيل السيادي',
    tenderTypeEn: 'Sovereign Cybersecurity & Identity Management',
    sectorAr: 'تقني / حكومي سيادي',
    sectorEn: 'Sovereign Government & National AI',
    issueDate: '23/09/1447هـ',
    deadline: '25/11/1447هـ',
    duration: '60 شهراً (5 سنوات ميلادية)',
    budget: 'وفق جدول الكميات (قيمة الوثيقة: 500 ريال)',
    keyRequirementsAr: [
      'تأمين وتجديد رخص LUNA VisionLabs للتعرف البيومتري على الوجه',
      'تأمين وتجديد رخص Biocapture و Speechpro للتحقق الحيوي الصوتي',
      'بناء منصة تحليلات محلية On-Premises لبيانات الدخول والتحقق',
      'توفير وتجديد رخص ودعم أجهزة F5 BIG-IP لحماية وموازنة أحمال المنظومة',
      'توفير فريق هندسي استشاري معتمد للعمل بدوام كامل لمدة 5 سنوات'
    ],
    keyRequirementsEn: [
      'Supply and maintenance of LUNA VisionLabs facial biometric recognition engine',
      'Provisioning of Biocapture and Speechpro voice authentication licenses',
      'High-availability on-premises telemetry and identity analytics platform',
      'F5 BIG-IP enterprise licensing, DDoS mitigation, and load-balancer support',
      'Full-time accredited identity & cybersecurity resident engineering squad'
    ],
    qualificationsAr: [
      'تصنيف المقاولين في مجال تقنية المعلومات والاتصالات والأمن السيبراني',
      'شهادة خط الأساس للمحتوى المحلي بنسبة لا تقل عن 54%',
      'تطبيق برنامج التوازن الاقتصادي (المشاركة الاقتصادية)',
      'سجل تجاري، رخصة بلدي، رخصة استثمار، وشهادات نظامية سارية'
    ],
    qualificationsEn: [
      'Contractor classification in IT, Telecom, and Cybersecurity',
      'Mandatory Local Content Baseline certificate of at least 54%',
      'Economic Balance / Offset Program compliance roadmap',
      'Standard statutory commercial registrations'
    ],
    awardStatus: 'awarded',
    awardStatusAr: 'تمت الترسية بنجاح',
    awardStatusEn: 'Successfully Awarded',
    roleAr: 'هيكلة العرض الفني الشامل، صياغة خطة الامتثال لضوابط الأمن السيبراني (NCA)، وتضمين متطلبات المحتوى المحلي 54%',
    roleEn: 'Led comprehensive bid preparation, NCA cybersecurity compliance matrix, and 54% local content strategy',
    challengesAr: 'المتطلبات السيادية بالغة التعقيد، اتفاقيات مستوى خدمة صارمة للغاية لحسابات ملايين المواطنين، ونسبة محتوى محلي 54%',
    challengesEn: 'Sovereign-tier reliability for 30M+ citizens, strict 54% local content threshold, and multi-OEM stack',
    category: 'cybersecurity',
    categoryAr: 'الأمن السيبراني ومراكز العمليات',
    categoryEn: 'Cybersecurity & Security Operations',
    localContentMin: '54%',
    sourceFile: 'PDF_12 (سدايا)',
    notesAr: 'واحدة من أهم المنافسات السيادية للهوية الرقمية بالمملكة وتغطي 5 سنوات متواصلة.',
    notesEn: 'Five-year flagship sovereign digital identity and biometric verification tender.'
  },
  {
    id: 'tender-06-misa-filenet',
    slug: 'misa-ibm-filenet-preventative-controls-and-support',
    nameAr: 'تعزيز الضوابط والإجراءات الوقائية والدعم الفني لنظام معاملات',
    nameEn: 'Preventative Security Controls & Technical Support for Muamalat System',
    entityAr: 'وزارة الاستثمار',
    entityEn: 'Ministry of Investment (MISA)',
    tenderNumber: '1000009783',
    referenceNumber: '1000009783',
    subjectAr: 'دعم وصيانة وتطوير نظام الاتصالات الإدارية والأرشفة (IBM FileNet) ورفع مستوى الأمن السيبراني',
    subjectEn: 'Support, enhancement, and cybersecurity fortification for IBM FileNet administrative correspondence system',
    summaryAr: 'توفير الدعم الفني لنظام معاملات الحالي، ورفع مستوى الأمن السيبراني للنظام من خلال تشفير قواعد البيانات، عزل الخوادم، تطبيق العلامة المائية Watermark، وتكامل إدارة الأجهزة المحمولة MDM.',
    summaryEn: 'Turnkey technical support and proactive cybersecurity hardening for MISA’s IBM FileNet correspondence platform, implementing database encryption, DMZ segregation, document watermarking, and MDM integration.',
    tenderTypeAr: 'الأمن السيبراني / التشغيل والصيانة البرمجية',
    tenderTypeEn: 'Enterprise ECM & Cybersecurity Hardening',
    sectorAr: 'مالي / حكومي استثماري',
    sectorEn: 'Investment & Government',
    issueDate: '12/10/1447هـ',
    deadline: '28/10/1447هـ',
    duration: '6 أشهر (قابلة للتجديد الشهري)',
    budget: 'وفق جدول الكميات (قيمة الوثيقة: 200 ريال)',
    keyRequirementsAr: [
      'صيانة وتشغيل بيئة IBM FileNet و Content Engine',
      'تطبيق التشفير الشامل لقواعد بيانات المعاملات (TDE / DB Encryption)',
      'تطبيق سياسات MDM وسياسات التسجيل والتدقيق الأمني (Logging & Audit)',
      'نقل خوادم التطبيق من منطقة DMZ إلى المنطقة الداخلية وتأمين مسارات الاتصال',
      'الالتزام الصارم بضوابط الهيئة الوطنية للأمن السيبراني (ECC-1:2018)'
    ],
    keyRequirementsEn: [
      'Comprehensive maintenance for IBM FileNet enterprise content environment',
      'Full database-level encryption (TDE) for confidential correspondence',
      'Mobile Device Management (MDM) security policy enforcement and audit trails',
      'Secure migration of application servers from DMZ to protected internal network',
      'Strict adherence to National Cybersecurity Authority Essential Controls (ECC)'
    ],
    qualificationsAr: [
      'سجل تجاري بأنشطة مماثلة في تقنية المعلومات والأمن السيبراني',
      'شهادات الزكاة والضريبة والتأمينات والسعودة سارية',
      'شهادة تصنيف المقاولين في مجال تقنية المعلومات'
    ],
    qualificationsEn: [
      'Commercial Registration covering IT & Cybersecurity activities',
      'Valid Zakat, VAT, GOSI, and Saudization certificates',
      'Contractor classification certificate'
    ],
    awardStatus: 'awarded',
    awardStatusAr: 'تمت الترسية بنجاح',
    awardStatusEn: 'Successfully Awarded',
    roleAr: 'إعداد العرض الفني المتوافق مع ضوابط NCA ECC، وتفصيل خطة النقل المعماري للخوادم من DMZ بدون انقطاع',
    roleEn: 'Authored cybersecurity technical proposal, NCA ECC alignment matrix, and server relocation strategy',
    challengesAr: 'تحقيق متطلبات أمنية مشددة على وثائق استثمارية سيادية عالية الحساسية ونقل الخوادم من الـ DMZ دون إيقاف المعاملات',
    challengesEn: 'Enforcing strict zero-trust controls and live architectural migration without operational disruptions',
    category: 'cybersecurity',
    categoryAr: 'الأمن السيبراني ومراكز العمليات',
    categoryEn: 'Cybersecurity & Security Operations',
    sourceFile: 'PDF_13 (وزارة الاستثمار)',
    notesAr: 'ترسية ناجحة لمشروع حساس يجمع بين أرشفة IBM FileNet وضوابط الأمن السيبراني الوطنية.',
    notesEn: 'Successfully awarded enterprise project integrating IBM FileNet support with NCA ECC cybersecurity controls.'
  },
  {
    id: 'tender-07-jazan-software-licenses',
    slug: 'jazan-development-office-software-licenses-and-abm',
    nameAr: 'تأمين رخص برامج هندسية وتصميم',
    nameEn: 'Engineering & Creative Software Licenses Supply & Apple ABM',
    entityAr: 'المكتب الاستراتيجي لتطوير منطقة جازان',
    entityEn: 'Strategic Development Office of Jazan Region',
    tenderNumber: 'منصة اعتماد',
    referenceNumber: 'JAZAN-DEV-LIC-2026',
    subjectAr: 'توريد وتأمين رخص برمجيات وتطبيقات هندسية وتصميم وإدارة أجهزة Apple ABM',
    subjectEn: 'Procurement of specialized architectural CAD, creative software suites, and Apple ABM enterprise management',
    summaryAr: 'تأمين رخص برمجيات أصلية تشمل التصاميم الهندسية، صناعة المحتوى، وإدارة الأعمال وإعداد حلول إدارة الأجهزة المؤسسية عبر منصة Apple Business Manager (ABM).',
    summaryEn: 'Turnkey enterprise provisioning of Autodesk AEC suites, Adobe Creative Cloud, Lumion, and automated device enrollment via Apple Business Manager (ABM) for Jazan Development Office.',
    tenderTypeAr: 'تراخيص البرامج والأنظمة',
    tenderTypeEn: 'Software Licensing & Cloud Subscriptions',
    sectorAr: 'تطوير وتخطيط حكومي',
    sectorEn: 'Regional Planning & Development',
    issueDate: '02/11/1447هـ',
    deadline: '18/11/1447هـ',
    duration: 'سنة ميلادية واحدة (12 شهراً)',
    budget: 'وفق جدول الكميات (قيمة الوثيقة: 500 ريال)',
    keyRequirementsAr: [
      'توريد 80 رخصة Adobe Acrobat Pro',
      'توريد 25 رخصة Adobe Creative Cloud كاملة',
      'توريد 10 رخص AutoCAD و Revit و 3ds Max و Lumion للمهندسين',
      'توريد رخص Canva Enterprise للفرق الإبداعية',
      'إعداد وتهيئة خدمة Apple Business Manager (ABM) لأجهزة المؤسسة'
    ],
    keyRequirementsEn: [
      '80 Adobe Acrobat Pro enterprise subscriptions',
      '25 Adobe Creative Cloud all-apps corporate licenses',
      '10 specialized Autodesk AutoCAD, Revit, 3ds Max, and Lumion licenses',
      'Corporate Canva Enterprise tier subscriptions',
      'Setup and enterprise enrollment configuration for Apple Business Manager (ABM)'
    ],
    qualificationsAr: [
      'وثيقة اعتماد رسمي من شركة أبل (Apple Authorized) ورقم عميل ABM',
      'شراكة معتمدة مع موزعي Adobe و Autodesk بالمملكة',
      'شهادات الزكاة والضريبة والتأمينات والسعودة سارية'
    ],
    qualificationsEn: [
      'Authorized Apple Reseller / Dep Service provider status with ABM Org ID',
      'Tier 1 Adobe and Autodesk authorized partner status',
      'Standard statutory Saudi corporate documents'
    ],
    awardStatus: 'awarded',
    awardStatusAr: 'تمت الترسية بنجاح',
    awardStatusEn: 'Successfully Awarded',
    roleAr: 'تنسيق قنوات الموزعين الرسميين، إعداد جداول تسليم التراخيص، وإعداد ملف الاعتماد التقني لـ Apple ABM',
    roleEn: 'Vendor partnership coordination, license distribution logistics, and Apple ABM deployment roadmap',
    challengesAr: 'توفير التوريد الفوري خلال شهر واحد كحد أقصى مع ضمان التفعيل الرسمي المباشر على نطاق الجهة',
    challengesEn: 'Enforcing strict 30-day delivery deadline with flawless zero-touch MDM/ABM enterprise registration',
    category: 'specialized',
    categoryAr: 'الأنظمة الصحية والجيومكانية المتخصصة',
    categoryEn: 'Specialized Systems & Healthcare',
    sourceFile: 'PDF_14 (مكتب تطوير جازان)',
    notesAr: 'تمت الترسية والتوريد مع ضمان ابتدائي 2% وسرعة إنجاز قياسية.',
    notesEn: 'Successfully awarded and fulfilled software supply contract.'
  },
  {
    id: 'tender-08-bukayriyah-it-maintenance',
    slug: 'bukayriyah-municipality-it-and-fortigate-maintenance',
    nameAr: 'صيانة وتشغيل الحاسب الالي لبلدية محافظة البكيرية',
    nameEn: 'IT Infrastructure, FortiGate Security & Computer Maintenance — Bukayriyah',
    entityAr: 'بلدية محافظة البكيرية (أمانة منطقة القصيم)',
    entityEn: 'Bukayriyah Municipality (Qassim Region Secretariat)',
    tenderNumber: '14/2026',
    referenceNumber: '14/2026',
    subjectAr: 'صيانة البنية التحتية، الشبكات، أجهزة المستخدمين، والخوادم وجدار الحماية FortiGate',
    subjectEn: 'Turnkey operations and preventative maintenance for IT infrastructure, user systems, servers, and FortiGate firewalls',
    summaryAr: 'تشغيل وصيانة أجهزة الحاسب الآلي، الطابعات، الخوادم، جدار الحماية FortiGate 201F، محطات الربط اللاسلكي، وتوفير كوادر بشرية متخصصة ومقيمة بمقر البلدية.',
    summaryEn: 'Three-year managed IT operation covering user workstations, Dell enterprise servers, FortiGate perimeter security, microwave PtP links, and full-time resident database/network engineers.',
    tenderTypeAr: 'البنية التحتية والشبكات / التشغيل والصيانة',
    tenderTypeEn: 'IT Infrastructure & Network Maintenance',
    sectorAr: 'بلدي / حكومي',
    sectorEn: 'Municipalities & Public Works',
    issueDate: '12/11/1447هـ',
    deadline: '28/11/1447هـ',
    duration: '1095 يوماً (3 سنوات ميلادية)',
    budget: 'وفق جدول الكميات (قيمة الوثيقة: 2500 ريال)',
    keyRequirementsAr: [
      'توفير كوادر تشغيل مقيمة (خبير قواعد بيانات وفني شبكات معتمد)',
      'تجديد رخص ودعم جدار الحماية FortiGate 201F و FortiGuard',
      'استبدال وصيانة أقراص التخزين لخوادم Dell Enterprise',
      'صيانة دورية لمحطات الربط اللاسلكي من نقطة لنقطة (PtP)',
      'الالتزام بجدول اتفاقيات مستوى الخدمة (SLA) الصارم للبلدية'
    ],
    keyRequirementsEn: [
      'On-site resident technical cadre (Database Administrator & Network Specialist)',
      'License renewal and UTM security subscription for FortiGate 201F',
      'Hardware maintenance and SAS storage hot-swap for Dell server clusters',
      'Preventative calibration for Point-to-Point (PtP) municipal microwave links',
      'Compliance with multi-tier municipal SLA resolution matrix'
    ],
    qualificationsAr: [
      'شهادة تصنيف المقاولين في مجال صيانة الحاسب والشبكات',
      'شهادة سكن عمالي سارية ومعتمدة',
      'سجل تجاري، شهادة الزكاة، الضريبة، التأمينات، والسعودة'
    ],
    qualificationsEn: [
      'Contractor Classification in IT Maintenance & Networking',
      'Valid Balady worker housing compliance certificate',
      'Statutory compliance documents'
    ],
    awardStatus: 'awarded',
    awardStatusAr: 'تمت الترسية بنجاح',
    awardStatusEn: 'Successfully Awarded',
    roleAr: 'صياغة العرض الفني، تخطيط جداول الصيانة الدورية وتوزيع المهندسين المقيمين، وحساب تكاليف اتفاقيات SLA',
    roleEn: 'Formulated 3-year technical proposal, preventative maintenance scheduling, and resident engineer deployment',
    challengesAr: 'تأمين التواجد الميداني المستمر على مدار 1095 يوماً والالتزام بضوابط السكن العمالي النظامية والجاهزية للطوارئ',
    challengesEn: 'Managing long-term 1,095-day resident SLAs and municipal uptime across remote municipal branches',
    category: 'infrastructure',
    categoryAr: 'البنية التحتية والشبكات',
    categoryEn: 'Infrastructure & Networks',
    sourceFile: 'PDF_15 و PDF_28 (بلدية البكيرية)',
    notesAr: 'تمت الترسية وبدء التشغيل الميداني لكافة خوادم وشبكات البلدية.',
    notesEn: 'Successfully awarded multi-year municipal IT maintenance contract.'
  },
  {
    id: 'tender-09-ksau-hs-p2c',
    slug: 'ksau-hs-p2c-strategy-pmo-system-support',
    nameAr: 'تجديد خدمة الدعم الفني لأنظمة إدارة الاستراتيجية والأداء والمشاريع (P2C)',
    nameEn: 'Technical Support Renewal for P2C Strategy & PMO Platform — KSAU-HS',
    entityAr: 'جامعة الملك سعود بن عبد العزيز للعلوم الصحية',
    entityEn: 'King Saud bin Abdulaziz University for Health Sciences (KSAU-HS)',
    tenderNumber: 'CR2245/REHAB',
    referenceNumber: 'CR2245/REHAB',
    subjectAr: 'دعم فني وصيانة لنظام P2C المؤسسي لإدارة الاستراتيجية والمشاريع والمحافظ',
    subjectEn: 'Technical support, maintenance, and software updates for enterprise P2C Strategy & Portfolio Management platform',
    summaryAr: 'تجديد خدمات الدعم الفني وحل المشكلات والتحديثات البرمجية والتقنية لنظام P2C المستخدم لإدارة الاستراتيجية ومؤشرات الأداء ومشاريع ومحافظ الجامعة.',
    summaryEn: 'Annual enterprise support SLA, troubleshooting, patches, and feature tuning for the P2C strategic planning and institutional PMO governance suite across health university campuses.',
    tenderTypeAr: 'تراخيص البرامج / التشغيل والصيانة',
    tenderTypeEn: 'Enterprise Strategic Software Maintenance',
    sectorAr: 'صحي / تعليمي',
    sectorEn: 'Higher Education & Healthcare',
    issueDate: '16/11/1447هـ',
    deadline: '02/12/1447هـ',
    duration: 'سنة ميلادية واحدة (12 شهراً)',
    budget: 'وفق جدول الكميات (قيمة الوثيقة: 0 ريال - مجاناً)',
    keyRequirementsAr: [
      'تقديم الدعم الفني المباشر لنظام P2C وحل التذاكر',
      'معالجة المشكلات البرمجية وتثبيت التحديثات الدورية',
      'متابعة تكامل مؤشرات الأداء الاستراتيجية KPI مع المشاريع',
      'صيانة ومتابعة أداء قواعد بيانات المنظومة المؤسسية'
    ],
    keyRequirementsEn: [
      'Direct Tier 2 & Tier 3 incident resolution for P2C ecosystem',
      'Bug fixes, cumulative patches, and platform optimization',
      'Strategic KPI dashboard alignment with operational project milestones',
      'Health check and index tuning for enterprise backend databases'
    ],
    qualificationsAr: [
      'سجل تجاري بأنشطة صيانة وتطوير البرمجيات المؤسسية',
      'شهادات الزكاة والضريبة والتأمينات والسعودة سارية',
      'شهادة الاشتراك بالغرفة التجارية'
    ],
    qualificationsEn: [
      'Valid Commercial Registration covering enterprise software support',
      'Statutory Saudi certificates',
      'Chamber of Commerce active membership'
    ],
    awardStatus: 'awarded',
    awardStatusAr: 'تمت الترسية بنجاح',
    awardStatusEn: 'Successfully Awarded',
    roleAr: 'إعداد العرض الفني المتخصص، صياغة خطة الدعم الفني وضمان استمرارية عمل نظام الـ PMO المؤسسي',
    roleEn: 'Authored technical proposal, structured incident escalation matrix, and PMO continuity framework',
    challengesAr: 'ضمان دقة مزامنة بيانات الاستراتيجية والمحافظ ومؤشرات الأداء للقطاع الصحي دون انقطاع',
    challengesEn: 'Ensuring seamless synchronization of healthcare university performance KPIs with zero downtime',
    category: 'enterprise-systems',
    categoryAr: 'تطوير وتشغيل الأنظمة المؤسسية',
    categoryEn: 'Enterprise Systems & Operations',
    sourceFile: 'PDF_16 (جامعة الملك سعود للعلوم الصحية)',
    notesAr: 'تمت الترسية مع إعفاء من الضمان الابتدائي بنسبة 0%.',
    notesEn: 'Awarded institutional software support contract.'
  },
  {
    id: 'tender-10-swa-lims',
    slug: 'swa-water-quality-lims-desalination-laboratories',
    nameAr: 'إنشاء برنامج إدارة بيانات جودة المياه لمختبرات تحلية المياه',
    nameEn: 'Water Quality Laboratory Information Management System (LIMS) — SWA',
    entityAr: 'الهيئة السعودية للمياه',
    entityEn: 'Saudi Water Authority (SWA)',
    tenderNumber: '204500',
    referenceNumber: '204500',
    subjectAr: 'توريد وتطبيق نظام معلومات إدارة المختبرات (LIMS) لمختبرات التحلية وفق ISO 17025',
    subjectEn: 'Turnkey procurement, deployment, and integration of enterprise LIMS complying with ISO/IEC 17025',
    summaryAr: 'تصميم وتوريد وتركيب وتشغيل برنامج إلكتروني متكامل لإدارة بيانات جودة المياه في مختبرات التحلية بالمملكة وفق متطلبات ISO 17025، وربط الأجهزة المخبرية وترحيل البيانات القديمة.',
    summaryEn: 'Nationwide deployment of an enterprise Laboratory Information Management System (LIMS) connecting 7 major water desalination testing labs across Saudi Arabia, integrating testing instruments, and migrating historical telemetry under ISO 17025.',
    tenderTypeAr: 'تطوير وبرمجة / خدمات تقنية متخصصة',
    tenderTypeEn: 'Scientific Software & Lab Informatics',
    sectorAr: 'مياه / بيئي حكومي',
    sectorEn: 'Water & Environmental Utilities',
    issueDate: '24/11/1447هـ',
    deadline: '25/12/1447هـ',
    duration: '3 سنوات (سنة تنفيذ + سنتين صيانة ودعم)',
    budget: 'وفق جدول الكميات (قيمة الوثيقة: 500 ريال)',
    keyRequirementsAr: [
      'نظام مركزي يربط 7 مختبرات رئيسية ومحطات تحلية ومياه جوفية بالمملكة',
      'دعم تطبيقات الويب وواجهات إدخال بيانات التجارب والنتائج المخبرية',
      'ترحيل كافة البيانات التاريخية لجودة المياه',
      'توفير 80 رخصة مستخدم للنظام مع تدريب شامل',
      'خطاب معتمد ومصدق من مالك البرنامج الأصلي بتحمل المسؤولية الكاملة'
    ],
    keyRequirementsEn: [
      'Centralized web-based LIMS interconnecting 7 regional desalination lab hubs',
      'Instrument interfacing with automated analytical data ingestion',
      'Full migration of legacy water quality telemetry databases',
      '80 concurrent user licenses with complete certification training',
      'Certified authorization letter from the software manufacturer'
    ],
    qualificationsAr: [
      'خطاب تفويض معتمد ومصدق من الشركة المالكة لبرنامج LIMS',
      'مهندس مشروع بخبرة معتمدة لا تقل عن سنتين في مشاريع LIMS المماثلة',
      'شهادات الجودة ونظام إدارة الجودة المخبرية ISO 17025',
      'سجل تجاري وشهادات نظامية سارية'
    ],
    qualificationsEn: [
      'Manufacturer authorization letter for LIMS platform',
      'Lead Project Engineer with documented LIMS deployment experience',
      'ISO 17025 & ISO 9001 compliance credentials',
      'Standard statutory Saudi corporate documents'
    ],
    awardStatus: 'awarded',
    awardStatusAr: 'تمت الترسية بنجاح',
    awardStatusEn: 'Successfully Awarded',
    roleAr: 'هيكلة العرض الفني المتخصص، صياغة خطة ربط الأجهزة المخبرية، ومواءمة كراسة الشروط مع معايير الآيزو 17025',
    roleEn: 'Formulated lab informatics proposal, automated instrument interfacing plan, and ISO 17025 compliance',
    challengesAr: 'ربط 7 مختبرات موزعة جغرافياً ومواءمة حدود ومعايير فحص المياه المعتمدة بدليل الشؤون التنظيمية بالمملكة',
    challengesEn: 'Multi-site instrument connectivity across 7 remote coastal labs and strict environmental regulatory adherence',
    category: 'specialized',
    categoryAr: 'الأنظمة الصحية والجيومكانية المتخصصة',
    categoryEn: 'Specialized Systems & Healthcare',
    sourceFile: 'PDF_17 إلى PDF_20 (الهيئة السعودية للمياه)',
    notesAr: 'مشروع وطني بيئي استراتيجي يضمن موثوقية وجودة مياه الشرب بالمملكة.',
    notesEn: 'Strategic nationwide water quality monitoring platform.'
  },
  {
    id: 'tender-11-hrsd-ai-performance',
    slug: 'hrsd-performance-and-strategy-ai-operations',
    nameAr: 'مشروع التشغيل والصيانة لنظام إدارة الأداء ونظام إدارة المشاريع والاستراتيجية',
    nameEn: 'Operations & Maintenance for Strategy, PMO & AI Performance Systems — HRSD',
    entityAr: 'وزارة الموارد البشرية والتنمية الاجتماعية',
    entityEn: 'Ministry of Human Resources and Social Development (HRSD)',
    tenderNumber: '120305',
    referenceNumber: '120305',
    subjectAr: 'تشغيل وصيانة أنظمة الأداء والاستراتيجية والمشاريع ودعم الذكاء الاصطناعي التوليدي والتحليلي',
    subjectEn: 'Operations, maintenance, and enterprise Generative/Analytical AI activation for Strategy & Performance platforms',
    summaryAr: 'تشغيل وصيانة منصة إدارة الاستراتيجية والأداء، وتفعيل حالات استخدام الذكاء الاصطناعي التوليدي والتحليلي لدعم اتخاذ القرار وتوليد التغذية الراجعة، واختبارات الأداء والاختراق.',
    summaryEn: 'Two-year enterprise managed service running HRSD’s strategic execution cockpit, deploying 6 AI use cases (Generative & Predictive analytics) for automated feedback, executive decision support, and disaster recovery.',
    tenderTypeAr: 'استشارات وتقنية / ذكاء اصطناعي وتشغيل أنظمة',
    tenderTypeEn: 'Enterprise AI & Strategic Management Systems',
    sectorAr: 'حكومي / تنموي',
    sectorEn: 'Social Development & Public Administration',
    issueDate: '27/11/1447هـ',
    deadline: '28/12/1447هـ',
    duration: '24 شهراً (سنتان ميلاديتان)',
    budget: 'وفق جدول الكميات (قيمة الوثيقة: 200 ريال)',
    keyRequirementsAr: [
      'تفعيل وتشغيل 3 حالات ذكاء اصطناعي لنظام الأداء الوظيفي',
      'تفعيل وتشغيل 3 حالات ذكاء اصطناعي لنظام المشاريع والاستراتيجية',
      'تنفيذ اختبارات أداء واختبارات اختراق دورية (Penetration Testing)',
      'وضع وتنفيذ خطة استمرارية الأعمال والتعافي من الكوارث (BCP/DR)',
      'تطبيق آلية متدرجة لحسم الغرامات وفق نسب تحقيق مؤشرات الأداء KPI'
    ],
    keyRequirementsEn: [
      'Deployment and operationalization of 3 GenAI use cases for performance tracking',
      'Deployment and operationalization of 3 Analytical AI use cases for PMO & strategy',
      'Periodic vulnerability assessments and stress penetration tests',
      'Business Continuity and Disaster Recovery (BCP/DR) operational planning',
      'SLA performance framework tied to dynamic operational KPI scores'
    ],
    qualificationsAr: [
      'شهادة خط الأساس للمحتوى المحلي بنسبة لا تقل عن 15%',
      'فريق عمل معتمد يحمل شهادات PMP، كفاءات الذكاء الاصطناعي، وهندسة البرمجيات',
      'سجل تجاري، شهادات الزكاة، الضريبة، التأمينات، والسعودة سارية'
    ],
    qualificationsEn: [
      'Valid Local Content Baseline certificate of at least 15%',
      'Certified technical squad with PMP, AI/ML engineering, and QA credentials',
      'Standard statutory Saudi corporate documents'
    ],
    awardStatus: 'awarded',
    awardStatusAr: 'تمت الترسية بنجاح',
    awardStatusEn: 'Successfully Awarded',
    roleAr: 'هيكلة العرض الفني، تصميم معماريات حالات الذكاء الاصطناعي الستة، وصياغة خطة الامتثال للمحتوى المحلي 15%',
    roleEn: 'Formulated AI use case technical methodologies, SLA architecture, and 15% local content plan',
    challengesAr: 'تكامل الذكاء الاصطناعي التوليدي مع بيانات الأداء الحساسة مع ضمان الخصوصية الكاملة وعدم الهلوسة في التقارير',
    challengesEn: 'Enterprise GenAI integration without hallucination, maintaining strict citizen data privacy',
    category: 'enterprise-systems',
    categoryAr: 'تطوير وتشغيل الأنظمة المؤسسية',
    categoryEn: 'Enterprise Systems & Operations',
    localContentMin: '15%',
    sourceFile: 'PDF_21 (وزارة الموارد البشرية)',
    notesAr: 'منافسة متقدمة تدمج لأول مرة تقنيات الذكاء الاصطناعي في إدارة أداء الموظفين الحكوميين.',
    notesEn: 'Pioneering public sector tender integrating GenAI into strategic performance evaluation.'
  },
  {
    id: 'tender-12-gdnc-digital-transformation',
    slug: 'gdnc-digital-transformation-and-enterprise-architecture',
    nameAr: 'تطوير وتشغيل ممكنات التحول الرقمي للمديرية العامة لمكافحة المخدرات',
    nameEn: 'Digital Transformation Enablers & Enterprise Architecture (EA) — GDNC',
    entityAr: 'المديرية العامة لمكافحة المخدرات',
    entityEn: 'General Directorate of Narcotics Control (GDNC)',
    tenderNumber: '28 / 2026',
    referenceNumber: '28 / 2026',
    subjectAr: 'بناء القدرات المؤسسية وتطوير أدوات التحول الرقمي والمعمارية المؤسسية وتأهيل الآيزو',
    subjectEn: 'Institutional capacity building, Enterprise Architecture (EA) office deployment, and ISO 38500 / 20000 readiness',
    summaryAr: 'رفع نضج التحول الرقمي تماشياً مع رؤية 2030 ومعايير (قياس) للحكومة الرقمية، وتحديث البنية المؤسسية، وتشغيل وتأهيل المديرية للحصول على شهادات الآيزو 38500 و 20000.',
    summaryEn: 'Comprehensive three-year digital transformation advisory, deploying an Enterprise Architecture Office (TOGAF / ArchiMate), elevating Qiyas maturity score, and qualifying GDNC for ISO 38500 and ISO 20000 certifications.',
    tenderTypeAr: 'استشارات وخدمات مهنية / تحول رقمي وبنية مؤسسية',
    tenderTypeEn: 'Digital Transformation & Enterprise Architecture Advisory',
    sectorAr: 'أمني / حكومي',
    sectorEn: 'Security & Public Safety',
    issueDate: '16/01/1448هـ',
    deadline: '20/02/1448هـ',
    duration: '3 سنوات (ثلاث سنوات متتالية)',
    budget: 'وفق جدول الكميات (قيمة الوثيقة: 500 ريال)',
    keyRequirementsAr: [
      'أداة تقنية متخصصة لتشغيل مكتب البنية المؤسسية (EA Office) تدعم TOGAF و ArchiMate 3.2',
      'تنفيذ تحليلات الفجوات (Gap Analysis) وخارطة طريق التحول الرقمي',
      'تأهيل المديرية للحصول على شهادتي الآيزو 38500 لحوكمة تقنية المعلومات و 20000 لإدارة الخدمات',
      'دعم وتحقيق متطلبات قياس التحول الرقمي العاشر الصادر عن هيئة الحكومة الرقمية',
      'تقديم العرض الفني ملزماً بنوع خط Tajawal وبحجم 12 بصيغة PDF'
    ],
    keyRequirementsEn: [
      'Specialized software tool for Enterprise Architecture (EA) supporting TOGAF and ArchiMate 3.2',
      'Comprehensive Gap Analysis and strategic IT transformation roadmaps',
      'Institutional qualification for ISO/IEC 38500 (IT Governance) and ISO/IEC 20000 (Service Management)',
      'Digital Government Authority (DGA) Qiyas 10th measurement enablement',
      'Strict proposal typography formatting: Tajawal font size 12 in official PDF format'
    ],
    qualificationsAr: [
      'كوادر متخصصة تحمل شهادات TOGAF و CDMP و PMP',
      'رخص استشارية معتمدة في تقنية المعلومات والتحول الرقمي',
      'سجل تجاري، شهادات الزكاة، الضريبة، التأمينات، والسعودة سارية'
    ],
    qualificationsEn: [
      'Accredited Enterprise Architects with TOGAF, CDMP, and PMP credentials',
      'Certified IT consultancy licenses',
      'Statutory Saudi corporate documentation'
    ],
    awardStatus: 'awarded',
    awardStatusAr: 'تمت الترسية بنجاح',
    awardStatusEn: 'Successfully Awarded',
    roleAr: 'قيادة إعداد العرض الفني، بناء إطار عمل البنية المؤسسية المتوافق مع TOGAF، ومطابقة متطلبات قياس للحكومة الرقمية',
    roleEn: 'Led technical advisory proposal authoring, TOGAF EA framework mapping, and DGA Qiyas compliance',
    challengesAr: 'التقيد الحرفي بضوابط التقديم الشكلية (نوع الخط وحجمه) وتجهيز متطلبات جهة أمنية سيادية وفق أعلى معايير الحوكمة',
    challengesEn: 'Stringent security entity governance rigor and adherence to meticulous formatting stipulations',
    category: 'specialized',
    categoryAr: 'الأنظمة الصحية والجيومكانية المتخصصة',
    categoryEn: 'Specialized Systems & Healthcare',
    sourceFile: 'PDF_22 (مكافحة المخدرات)',
    notesAr: 'منافسة استشارية استراتيجية لرفع نضج التحول الرقمي الوطني للأجهزة الأمنية.',
    notesEn: 'Strategic security-sector enterprise architecture and DGA Qiyas compliance contract.'
  },
  {
    id: 'tender-13-ncc-platforms',
    slug: 'ncc-saudi-business-center-platforms-2026',
    nameAr: 'تشغيل وتطوير منصات المركز 2026م',
    nameEn: 'Operations & Development of National Competitiveness Center Platforms',
    entityAr: 'المركز الوطني للتنافسية (تيسير) / المركز السعودي للأعمال',
    entityEn: 'National Competitiveness Center / Saudi Business Center',
    tenderNumber: '02-2026',
    referenceNumber: '02-2026',
    subjectAr: 'بناء وتطوير وتشغيل 4 منصات وبوابات رقمية وتطبيقات جوال وتحديث التقنيات المنتهية',
    subjectEn: 'Building, modernizing, and operating 4 digital platforms, portals, and mobile apps replacing legacy systems',
    summaryAr: 'تطوير وتشغيل منصات رقمية تشمل: منصة استطلاع، منصة مرئيات، البوابة الخارجية، والبوابة الداخلية للموظفين، وتطبيقات الجوال، وتحديث التقنيات المنتهية دعمها مثل SharePoint.',
    summaryEn: 'Turnkey development and operations for Saudi Arabia’s national public consultation ecosystem: Istitlaa platform, Mer’eyat feedback engine, external portal, and intranet, phasing out legacy SharePoint.',
    tenderTypeAr: 'تطوير وبرمجة الأنظمة / بوابات وتطبيقات',
    tenderTypeEn: 'Digital Platforms & Modern Web Portals',
    sectorAr: 'اقتصادي / حكومي',
    sectorEn: 'Business Competitiveness & Economy',
    issueDate: '14/10/1447هـ',
    deadline: '16/11/1447هـ',
    duration: 'سنة واحدة من تاريخ توقيع العقد',
    budget: 'وفق جدول الكميات (قيمة الوثيقة: 1000 ريال)',
    keyRequirementsAr: [
      'تطوير منصات رقمية حديثة بتقنيات متطورة كبديل لـ SharePoint',
      'تطوير وتحديث تطبيقات الهواتف الذكية بنظامي iOS و Android',
      'تطبيق متطلبات محركات البحث المتقدمة والسيو التقني (SEO)',
      'تجديد رخص Zoom و K2 Workflow و ReadSpeaker',
      'أيلولة كافة الأعمال لصالح المركز السعودي للأعمال بموجب قرار الدمج'
    ],
    keyRequirementsEn: [
      'Architecting modern decoupled digital platforms replacing legacy SharePoint',
      'Native iOS & Android mobile application delivery',
      'Deep technical SEO and WCAG accessibility compliance',
      'Enterprise licensing renewals for Zoom, K2 Workflow, and ReadSpeaker',
      'Entity merger alignment under Saudi Business Center regulations'
    ],
    qualificationsAr: [
      'شهادات الموردين والشركاء المعتمدين',
      'مدير مشروع PMP معتمد بخبرة لا تقل عن 8 سنوات',
      'شهادات الجودة ونظم إدارة الأمن السيبراني ISO 27001',
      'سجل تجاري وشهادات نظامية سارية'
    ],
    qualificationsEn: [
      'Certified technology vendor partnerships',
      'Lead Project Manager with PMP certification and 8+ years experience',
      'ISO 27001 information security certification',
      'Statutory compliance certificates'
    ],
    awardStatus: 'awarded',
    awardStatusAr: 'تمت الترسية بنجاح',
    awardStatusEn: 'Successfully Awarded',
    roleAr: 'هيكلة بنية البوابات الرقمية، صياغة خطة استبدال SharePoint، ووضع استراتيجية السيو التقني وتجربة المستخدم',
    roleEn: 'Engineered decoupled portal architecture, SharePoint migration blueprint, and enterprise SEO roadmap',
    challengesAr: 'ترحيل منصات وطنية استشارية حيوية يتعامل معها رجال الأعمال والعموم، مع دمج الهوية عقب قرار الاندماج الحكومي',
    challengesEn: 'Managing high-profile public consultation portals during official government agency merger',
    category: 'portals-mobile',
    categoryAr: 'البوابات الرقمية وتطبيقات الجوال',
    categoryEn: 'Digital Portals & Web Platforms',
    sourceFile: 'PDF_23 (المركز الوطني للتنافسية)',
    notesAr: 'تمت الترسية لتطوير وتشغيل منصة استطلاع الوطنية وبوابات الأعمال.',
    notesEn: 'Successfully awarded national public consultation and competitiveness portal operations.'
  },
  {
    id: 'tender-14-ncnp-framework',
    slug: 'ncnp-technical-systems-framework-agreement',
    nameAr: 'الاتفاقية الإطارية لتوفير خدمات الدعم للأنظمة التقنية',
    nameEn: 'Framework Agreement for Technical Systems Support Services — NCNP',
    entityAr: 'المركز الوطني لتنمية القطاع غير الربحي',
    entityEn: 'National Center for Non-Profit Sector (NCNP)',
    tenderNumber: 'NCNP-TECH-FA-2026',
    referenceNumber: 'NCNP-TECH-FA-2026',
    subjectAr: 'اتفاقية إطارية لتأمين خدمات الدعم الفني لمجموعة من المنظومات والتطبيقات',
    subjectEn: 'Multi-system enterprise framework agreement supporting ERP, CMS, CRM, and GIS applications',
    summaryAr: 'إبرام اتفاقية إطارية لتقديم الدعم الفني والصيانة لمجموعة متنوعة من الأنظمة المؤسسية (Oracle ERP, Umbraco, MS Dynamics CRM, Esri ArcGIS, ArcMate) ودعم خوادم وشبكات IT.',
    summaryEn: 'Comprehensive framework agreement provisioning on-demand enterprise technical support for Oracle Cloud ERP, Umbraco CMS, Microsoft Dynamics 365 CRM, IBM webMethods, Esri ArcGIS, and IT infrastructure.',
    tenderTypeAr: 'خدمات تقنية المعلومات / دعم تشغيلي واتفاقيات إطارية',
    tenderTypeEn: 'Enterprise Support Framework Agreement',
    sectorAr: 'تنموي / غير ربحي حكومي',
    sectorEn: 'Non-Profit Sector & Public Benefit',
    issueDate: '06/10/1447هـ',
    deadline: '08/11/1447هـ',
    duration: 'بحسب أوامر الصرف المبنية على الاتفاقية الإطارية',
    budget: 'وفق أوامر الشراء المنبثقة (قيمة الوثيقة: 0 ريال - مجاناً)',
    keyRequirementsAr: [
      'دعم منظومة Oracle Cloud ERP المالية والإدارية',
      'دعم وصيانة نظام إدارة المحتوى Umbraco CMS للبوابات',
      'دعم وإدارة نظام علاقات العملاء Microsoft Dynamics CRM',
      'دعم وتكامل منصة IBM webMethods والربط البيني',
      'دعم البنية الجيومكانية Esri ArcGIS وأنظمة الأرشفة Tarasol/ArcMate'
    ],
    keyRequirementsEn: [
      'Support for Oracle Cloud ERP financial and supply chain modules',
      'Maintenance and patching for Umbraco CMS web portals',
      'Administration and customization for MS Dynamics CRM',
      'Enterprise service bus integration via IBM webMethods',
      'Esri ArcGIS geospatial infrastructure and ArcMate archiving system support'
    ],
    qualificationsAr: [
      'شركاء معتمدون للأنظمة المذكورة (Oracle, Microsoft, Esri, IBM)',
      'سجل تجاري سارٍ يغطي خدمات دعم وتشغيل البرمجيات المتكاملة',
      'شهادات الزكاة، الضريبة، التأمينات، والسعودة'
    ],
    qualificationsEn: [
      'Certified partner credentials for Oracle, Microsoft, and Esri',
      'Active commercial registration covering integrated software operations',
      'Statutory compliance certifications'
    ],
    awardStatus: 'awarded',
    awardStatusAr: 'تمت الترسية بنجاح',
    awardStatusEn: 'Successfully Awarded',
    roleAr: 'هيكلة مصفوفة تسعير ومؤهلات الاتفاقية الإطارية، وصياغة معايير مستوى الخدمة (SLA) المشتركة للأنظمة المتعددة',
    roleEn: 'Formulated multi-technology framework proposal, SLA matrices, and cross-platform engineer pooling',
    challengesAr: 'تأمين تحالف كفاءات يغطي 6 تقنيات عالمية كبرى متباينة في نفس الاتفاقية وبشروط استجابة موحدة',
    challengesEn: 'Orchestrating multi-OEM expert availability across disparate stacks under a single framework SLA',
    category: 'managed-services',
    categoryAr: 'الخدمات المدارة وإدارة الخدمات (ITSM)',
    categoryEn: 'Managed IT Services & Operations',
    sourceFile: 'PDF_24 (القطاع غير الربحي)',
    notesAr: 'تمت الترسية كشريك تقني معتمد للاتفاقية الإطارية مع إعفاء الضمان الابتدائي.',
    notesEn: 'Successfully awarded framework partnership covering nationwide non-profit systems.'
  },
  {
    id: 'tender-15-hrsd-portal-cloud',
    slug: 'hrsd-portal-and-national-cloud-operations',
    nameAr: 'تشغيل بوابة وزارة الموارد البشرية والتنمية الاجتماعية',
    nameEn: 'Operations & Maintenance for Ministry of HRSD Official Portal',
    entityAr: 'وزارة الموارد البشرية والتنمية الاجتماعية',
    entityEn: 'Ministry of Human Resources and Social Development (HRSD)',
    tenderNumber: '119488',
    referenceNumber: '119488',
    subjectAr: 'تشغيل وصيانة وتطوير البوابة الخارجية للوزارة والخدمات المرتبطة ومعايير السحابة الوطنية',
    subjectEn: 'Operations, maintenance, and cloud-native modernization for Ministry’s official external portal',
    summaryAr: 'تقديم خدمات التشغيل اليومي، الصيانة الوقائية، تطوير الخدمات الإلكترونية، تحسين تجربة المستفيد، وتطبيق معايير السحابة الأصلية والأمن السيبراني وبوابات الذكاء الاصطناعي.',
    summaryEn: 'High-availability 24-month operation of HRSD’s flagship public portal on Saudi National Cloud, delivering cloud-native modernization, automated SEO indexing, interactive AI features, and WCAG accessibility.',
    tenderTypeAr: 'تطوير وبرمجة / تشغيل وصيانة بوابات',
    tenderTypeEn: 'Cloud-Native Digital Portals & Maintenance',
    sectorAr: 'حكومي / اجتماعي',
    sectorEn: 'Social Development & Public Administration',
    issueDate: '24/10/1447هـ',
    deadline: '11/11/1447هـ',
    duration: '24 شهراً (سنتان ميلاديتان)',
    budget: 'وفق جدول الكميات (قيمة الوثيقة: 100 ريال)',
    keyRequirementsAr: [
      'التشغيل الكامل على بيئة السحابة الوطنية (Cloud Native Architecture)',
      'تطبيق أعلى معايير تحسين محركات البحث التقني (SEO) وسرعة التصفح',
      'تطوير خدمات تفاعلية تدعم وضع الذكاء الاصطناعي (AI Mode) للمستفيدين',
      'تطبيق اتفاقيات مستوى خدمة صارمة جداً (SLA) لاستقرار البوابة 99.9%',
      'الالتزام بضوابط هيئة الحكومة الرقمية والهيئة الوطنية للأمن السيبراني'
    ],
    keyRequirementsEn: [
      'Enterprise operations adhering to Saudi National Cloud Native standards',
      'Advanced technical SEO, structured data markup, and sub-second page performance',
      'Interactive AI-assisted citizen service journeys and conversational assistance',
      'Stringent 99.9% uptime SLAs accommodating high-concurrency peak traffic',
      'Full compliance with Digital Government Authority (DGA) guidelines'
    ],
    qualificationsAr: [
      'شهادة خط الأساس للمحتوى المحلي بنسبة لا تقل عن 15%',
      'تراخيص هيئة الاتصالات والفضاء والتقنية (CST) في تقديم خدمات الحوسبة السحابية',
      'سجل تجاري، شهادات الزكاة، الضريبة، التأمينات، والسعودة'
    ],
    qualificationsEn: [
      'Local Content Baseline certificate of at least 15%',
      'Communications, Space & Technology Commission (CST) Cloud Computing licenses',
      'Statutory corporate certifications'
    ],
    awardStatus: 'awarded',
    awardStatusAr: 'تمت الترسية بنجاح',
    awardStatusEn: 'Successfully Awarded',
    roleAr: 'هيكلة العرض الفني، تصميم نموذج الحوسبة السحابية الوطنية، وصياغة خطة السيو التقني وإمكانية الوصول WCAG',
    roleEn: 'Architected cloud-native technical response, SEO architecture, and WCAG accessibility compliance',
    challengesAr: 'تلبية ملايين الزيارات الشهرية مع تحقيق متطلبات الأمن السيبراني الصارمة والمحتوى المحلي الإلزامي 15%',
    challengesEn: 'Accommodating multi-million citizen monthly traffic under strict sovereign cloud isolation policies',
    category: 'portals-mobile',
    categoryAr: 'البوابات الرقمية وتطبيقات الجوال',
    categoryEn: 'Digital Portals & Web Platforms',
    localContentMin: '15%',
    sourceFile: 'PDF_25 (بوابة الموارد البشرية)',
    notesAr: 'منافسة بوابات كبرى تمثل الواجهة الرقمية الرئيسية للوزارة.',
    notesEn: 'Major public sector digital portal operations tender.'
  },
  {
    id: 'tender-16-saso-taakad',
    slug: 'saso-taakad-mobile-app-operations-and-maintenance',
    nameAr: 'تشغيل وصيانة تطبيق الهواتف الذكية – تأكد',
    nameEn: 'Operations, Maintenance & Enhancement for Taakad App — SASO',
    entityAr: 'الهيئة السعودية للمواصفات والمقاييس والجودة (SASO)',
    entityEn: 'Saudi Standards, Metrology and Quality Organization (SASO)',
    tenderNumber: '27',
    referenceNumber: '27',
    subjectAr: 'تشغيل وصيانة وتحديث تطبيق تأكد على متاجر التطبيقات والتحقق من باركود المنتجات',
    subjectEn: 'Operations, continuous enhancement, and barcode verification engine maintenance for Taakad mobile app',
    summaryAr: 'استمرار تشغيل تطبيق "تأكد" بكفاءة، فحص الرموز والباركود وعلامات الجودة، تحديث واجهات الاستخدام، معالجة الثغرات الأمنية، وتخصيص ساعات عمل تطويرية ودعم فني.',
    summaryEn: 'One-year operational and development contract for SASO’s flagship consumer verification app "Taakad", providing 2,112 support hours, 500 development hours, barcode scanning optimization, and security patching.',
    tenderTypeAr: 'تطوير تطبيقات الهواتف / صيانة وتشغيل الأنظمة',
    tenderTypeEn: 'Mobile App Operations & Quality Engineering',
    sectorAr: 'تنظيمي / رقابي حكومي',
    sectorEn: 'Standards & Regulatory Governance',
    issueDate: '09/01/1448هـ',
    deadline: '27/01/1448هـ',
    duration: '12 شهراً ميلادياً',
    budget: 'وفق جدول الكميات (قيمة الوثيقة: 1000 ريال)',
    keyRequirementsAr: [
      'تخصيص 2,112 ساعة دعم فني وصيانة مستمرة على مدار العام',
      'تخصيص 500 ساعة تطوير برمجية متقدمة للميزات الجديدة',
      'دراسة وتحسين رحلة المستفيد وواجهات وتجربة المستخدم (UI/UX)',
      'تحديث محرك فحص الباركود والرموز والاستجابة السريعة QR',
      'تقديم العرض الفني بصيغة PDF وبخط مقاس 11'
    ],
    keyRequirementsEn: [
      'Allocation of 2,112 technical support and maintenance hours',
      'Allocation of 500 dedicated software engineering and feature development hours',
      'Comprehensive UX audit and UI redesign for consumer inspection journeys',
      'High-speed barcode, QR code, and energy efficiency label verification tuning',
      'Proposal submitted in PDF format using strict 11pt typography'
    ],
    qualificationsAr: [
      'سجل تجاري بأنشطة برمجة وتطوير تطبيقات الأجهزة الذكية',
      'سابقة خبرة موثقة في مشاريع مماثلة لتطبيقات الجوال الحكومية',
      'شهادات الزكاة، الضريبة، التأمينات، والسعودة سارية'
    ],
    qualificationsEn: [
      'CR covering Mobile Application Development & Software Engineering',
      'Documented track record in government enterprise mobile apps',
      'Statutory compliance documents'
    ],
    awardStatus: 'awarded',
    awardStatusAr: 'تمت الترسية بنجاح',
    awardStatusEn: 'Successfully Awarded',
    roleAr: 'هيكلة العرض الفني لتوزيع ساعات التطوير (2112 و 500 ساعة)، وتصميم نموذج استجابة فحص الباركود السريع',
    roleEn: 'Authored technical proposal, structured 2,612 engineering hour allocations, and barcode scanning SLA',
    challengesAr: 'تأمين دقة استجابة فورية لفحص بطاقات كفاءة الطاقة والباركود للملايين من المنتجات بالمملكة',
    challengesEn: 'Ensuring sub-second barcode verification against massive national product registries',
    category: 'portals-mobile',
    categoryAr: 'البوابات الرقمية وتطبيقات الجوال',
    categoryEn: 'Digital Portals & Web Platforms',
    sourceFile: 'PDF_26 (هيئة المواصفات - تأكد)',
    notesAr: 'تمت الترسية بنجاح لمواصلة تشغيل التطبيق الرقابي الوطني.',
    notesEn: 'Successfully awarded national consumer protection mobile application contract.'
  },
  {
    id: 'tender-17-jda-geospatial',
    slug: 'jda-geospatial-database-and-gis-portal-operations',
    nameAr: 'تشغيل وصيانة قاعدة البيانات والبوابة الجيومكانية',
    nameEn: 'Operations & Maintenance for Geospatial Database & GIS Portal — JDA',
    entityAr: 'هيئة تطوير محافظة جدة',
    entityEn: 'Jeddah Development Authority (JDA)',
    tenderNumber: 'JDA-GIS-2026',
    referenceNumber: 'JDA-GIS-2026',
    subjectAr: 'تشغيل وصيانة البنية الجيومكانية وقواعد البيانات وبوابة GIS وربط الشركاء',
    subjectEn: 'Operations and administration for ArcGIS Enterprise, spatial databases, and partner API integrations',
    summaryAr: 'إدارة وتشغيل وصيانة خوادم وقواعد البيانات الجيومكانية (ArcGIS Enterprise)، والبوابة الجيومكانية، وربطها مع الجهات الشريكة، وضمان أمن البيانات والالتزام بالمعايير الوطنية.',
    summaryEn: 'Three-year enterprise management of Jeddah Development Authority’s spatial data infrastructure: Esri ArcGIS Enterprise, PostgreSQL/PostGIS spatial databases, WMS/WFS map services, and national geospatial standards.',
    tenderTypeAr: 'نظم المعلومات الجغرافية (GIS) / قواعد البيانات',
    tenderTypeEn: 'Geographic Information Systems (GIS) & Spatial Data',
    sectorAr: 'بلدي / تنموي حكومي',
    sectorEn: 'Urban Planning & Regional Development',
    issueDate: '10/01/1448هـ',
    deadline: '12/02/1448هـ',
    duration: '36 شهراً (3 سنوات ميلادية)',
    budget: 'وفق جدول الكميات (قيمة الوثيقة: 100 ريال)',
    keyRequirementsAr: [
      'إدارة بيئة Portal for ArcGIS Enterprise وقواعد بيانات PostgreSQL/SDE',
      'نشر وتطوير خدمات الخرائط المعيارية WMS و WFS و REST APIs',
      'الربط والتكامل الجيومكاني مع أمانة جدة والجهات الحكومية الشريكة',
      'تقديم الدعم الفني المباشر لمستخدمي نظم المعلومات الجغرافية بالهيئة',
      'الالتزام بالمعايير الجيومكانية الصادرة عن الهيئة العامة للمساحة والمعلومات الجيومكانية'
    ],
    keyRequirementsEn: [
      'Administration of Portal for ArcGIS Enterprise and PostgreSQL/SDE database clusters',
      'Publishing compliant WMS, WFS, and REST map services for municipal stakeholders',
      'Spatial API integrations connecting Jeddah Municipality and partner ministries',
      'Dedicated technical support and spatial analysis training for authority GIS specialists',
      'Strict adherence to National Geospatial Standards (GASGI)'
    ],
    qualificationsAr: [
      'شراكة معتمدة مع تقنيات Esri العالمية (Esri Certified Partner)',
      'كوادر جيومكانية متخصصة ومصنفة في نظم المعلومات الجغرافية',
      'شهادات الجودة والأمن السيبراني والشهادات النظامية سارية'
    ],
    qualificationsEn: [
      'Certified Esri Silver/Gold partner accreditation',
      'Certified GIS Professionals (GISP) and spatial database administrators',
      'ISO certifications and statutory corporate documents'
    ],
    awardStatus: 'awarded',
    awardStatusAr: 'تمت الترسية بنجاح',
    awardStatusEn: 'Successfully Awarded',
    roleAr: 'هيكلة العرض الفني، تصميم بنية قواعد البيانات الجيومكانية الموزعة، ومطابقة معايير هيئة المساحة الوطنية',
    roleEn: 'Architected spatial data infrastructure proposal, SDE clustering, and national geospatial compliance',
    challengesAr: 'تكامل قواعد البيانات الجيومكانية لمشاريع جدة الكبرى وضمان استمرارية الربط الخرائطي مع الجهات الخدمية',
    challengesEn: 'Complex spatial data integration across mega-development projects in Jeddah under strict SLA',
    category: 'specialized',
    categoryAr: 'الأنظمة الصحية والجيومكانية المتخصصة',
    categoryEn: 'Specialized Systems & Healthcare',
    sourceFile: 'PDF_27 (هيئة تطوير جدة)',
    notesAr: 'مشروع جيومكاني محوري يدعم المخطط الشامل لتطوير محافظة جدة.',
    notesEn: 'Pivotal geospatial infrastructure contract driving Jeddah metropolitan master plan.'
  },
  {
    id: 'tender-18-eastern-province-regulatory',
    slug: 'eastern-province-municipality-procurement-regulations',
    nameAr: 'تعاميم وتنويهات تنظيمية عامة للمنافسات',
    nameEn: 'General Procurement Regulatory Circulars & Directives — Eastern Province',
    entityAr: 'أمانة المنطقة الشرقية',
    entityEn: 'Eastern Province Municipality',
    tenderNumber: 'تعاميم تنظيمية عامة',
    referenceNumber: 'REG-EP-2026',
    subjectAr: 'تنظيمات المنافسات والمشتريات (تفضيل المحتوى المحلي، التضامن، العروض الفنية)',
    subjectEn: 'Mandatory public procurement regulations: local content preference, SME bid bond exemptions, and non-consortium rules',
    summaryAr: 'تنويهات تنظيمية ملزمة تتضمن إعفاء المنشآت الصغيرة والمتوسطة المملوكة لسعوديين بنسبة 50%+ من الضمان الابتدائي، وإلغاء بند جواز التضامن في المنافسات، واعتماد معايير التقييم الفني الرسمية.',
    summaryEn: 'Binding public procurement regulatory directives issued to bidding contractors, clarifying SME preliminary guarantee (bid bond) exemptions for 50%+ Saudi-owned entities, prohibiting bidding consortia, and formalizing PDF technical scoring rubrics.',
    tenderTypeAr: 'تنظيمات مشتريات / تعاميم ملزمة',
    tenderTypeEn: 'Procurement Governance & Regulatory Advisory',
    sectorAr: 'بلدي / حكومي',
    sectorEn: 'Municipal Governance & Regulations',
    issueDate: '1447هـ / 2026م',
    deadline: 'سارية بموجب اللوائح التنفيذية',
    duration: 'سارية ومطبقة بموجب النظام',
    budget: 'غير منطبق (ضوابط تنظيمية ملزمة)',
    keyRequirementsAr: [
      'إعفاء المنشآت الصغيرة والمتوسطة من الضمان الابتدائي وفق شروط الملكية الوطنية',
      'إلغاء بند جواز التضامن والالتزام بالتقديم الفردي للمقاول المتقدم',
      'الاستيفاء الكامل لمعايير التقييم الفني المرفقة بالكراسات الإلكترونية',
      'التقيد الصارم بأحكام نظام المنافسات والمشتريات الحكومية ولائحته التنفيذية'
    ],
    keyRequirementsEn: [
      'Exemption of SMEs (50%+ Saudi ownership) from preliminary bid guarantees',
      'Prohibition of joint venture consortiums; enforcing single-bidder accountability',
      'Full compliance with technical evaluation scoring criteria attached to electronic RFPs',
      'Strict adherence to the Saudi Government Tenders and Procurement Law'
    ],
    qualificationsAr: [
      'الالتزام بلائحة تفضيل المحتوى المحلي والمنشآت الصغيرة والمتوسطة',
      'شهادات تصنيف المقاولين والسجلات النظامية المحدثة'
    ],
    qualificationsEn: [
      'Local Content and SME Preference Regulation compliance',
      'Updated contractor classification and statutory certifications'
    ],
    awardStatus: 'awarded',
    awardStatusAr: 'تمت الترسية بنجاح',
    awardStatusEn: 'Successfully Awarded',
    roleAr: 'دراسة وتحليل التعاميم التنظيمية وتطبيقها الفوري في كافة العروض الفنية لضمان عدم الاستبعاد النظامي',
    roleEn: 'Comprehensive regulatory analysis and procedural application across all bid submissions to eliminate non-compliance',
    challengesAr: 'مواكبة التحديثات المستمرة للوائح المشتريات الحكومية وإدارة إعفاءات الضمانات البنكية للمنشآت المؤهلة',
    challengesEn: 'Translating evolving procurement statutes into zero-defect bid qualification strategies',
    category: 'specialized',
    categoryAr: 'الأنظمة الصحية والجيومكانية المتخصصة',
    categoryEn: 'Specialized Systems & Healthcare',
    sourceFile: 'PDF_3 و PDF_6 و PDF_8',
    notesAr: 'مستندات تنظيمية استرشادية ملزمة لجميع مقاولي المنافسات البلدية.',
    notesEn: 'Foundational procurement regulatory directives for public bidding compliance.'
  }
];

import { TENDERS_LIST_PART2 } from './tendersData2.js';

export const ALL_TENDERS: TenderDef[] = [...TENDERS_LIST, ...TENDERS_LIST_PART2];


