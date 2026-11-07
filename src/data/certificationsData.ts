import { Certification } from '../types';

export const ALL_CERTIFICATIONS: Certification[] = [
  // 1. AWS Cloud Technical Essentials
  {
    id: 'aws-cloud-technical-essentials',
    title: 'AWS Cloud Technical Essentials',
    titleAr: 'أساسيات الحوسبة السحابية التقنية من أمازون (AWS Cloud Technical Essentials)',
    issuer: 'Amazon Web Services (AWS)',
    issuerAr: 'أمازون لخدمات الويب (AWS)',
    provider: 'Coursera',
    providerAr: 'كورسيرا',
    trainingProvider: 'AWS Training and Certification',
    recipientName: 'Youssef Syed Ghamry Syed',
    issueDate: 'June 25, 2023',
    issueDateAr: '25 يونيو 2023',
    credentialId: 'N2WMAVEXZ85L',
    verificationUrl: 'https://coursera.org/verify/N2WMAVEXZ85L',
    duration: 'Approx. 16 Hours (4 Course Modules)',
    durationAr: 'حوالي 16 ساعة تدريبية (4 وحدات تخصصية)',
    image: '/assets/certificates/aws_cloud_technical_essentials.png',
    category: 'Cloud & IT Infrastructure',
    categoryAr: 'الحوسبة السحابية والبنية التحتية',
    certificateType: 'Professional Course Certificate',
    certificateTypeAr: 'شهادة مساق تخصصي معتمد',
    overviewEn:
      'Official technical certification authorized by Amazon Web Services (AWS) covering fundamental cloud computing concepts, core AWS infrastructure, security principles, and architectural best practices.',
    overviewAr:
      'شهادة تقنية معتمدة رسمياً من شركة أمازون لخدمات الويب (AWS) تغطي المفاهيم الجوهرية للحوسبة السحابية، البنية التحتية الأساسية لخدمات AWS، ضوابط الأمان والامتثال، وأفضل ممارسات البنى المعمارية السحابية.',
    learnedEn: [
      'Core AWS compute services including Amazon EC2 instances, AWS Lambda serverless functions, and container management.',
      'AWS storage solutions: Amazon S3 object storage, Amazon EBS block storage, and Amazon EFS shared file systems.',
      'Cloud database services including Amazon RDS relational databases, Amazon DynamoDB NoSQL, and caching layers.',
      'Networking and content delivery: Amazon VPC, subnets, route tables, security groups, and AWS Identity & Access Management (IAM).',
      'High availability, fault tolerance, multi-AZ architectures, and auto-scaling principles.',
    ],
    learnedAr: [
      'خدمات الحوسبة السحابية الأساسية: خوادم Amazon EC2 الافتراضية، الحوسبة بدون خوادم AWS Lambda، وإدارة الحاويات.',
      'حلول التخزين السحابي: التخزين كائني التوجه Amazon S3، أقراص التخزين الكتلية Amazon EBS، ونظام الملفات المشتركة Amazon EFS.',
      'خدمات قواعد البيانات السحابية: Amazon RDS لقواعد البيانات العلائقية، و Amazon DynamoDB لقواعد بيانات NoSQL.',
      'الشبكات السحابية والأمان: سحابة Amazon VPC الخاصة، والشبكات الفرعية Subnets، وجدران الحماية، وإدارة الهويات والصلاحيات IAM.',
      'معايير التوافرية العالية (High Availability)، وقابلية التوسع التلقائي Auto-scaling، وتصميم الحلول المقاومة للأعطال.',
    ],
    skills: ['AWS Cloud', 'Amazon EC2', 'Amazon S3', 'Amazon RDS', 'Amazon VPC', 'IAM Security', 'Cloud Architecture', 'Serverless'],
    skillsAr: ['حوسبة أمازون السحابية AWS', 'خوادم EC2', 'تخزين S3', 'قواعد بيانات RDS', 'شبكات VPC', 'أمان وصلاحيات IAM', 'البنى المعمارية السحابية'],
    practicalValueEn:
      'Enables the technical design, sizing, and validation of cloud-native infrastructure proposals, cost-optimization models, and SLA-compliant cloud deployment roadmaps for modern digital solutions.',
    practicalValueAr:
      'تتيح الصياغة والتحقق الهندسي الدقيق لمواصفات البنى التحتية السحابية، وتحديد أحجام الموارد، ونماذج تحسين التكاليف، وخطط النشر المتوافقة مع اتفاقيات مستوى الخدمة (SLAs) في العروض التقنية.',
    relevanceProfileEn: [
      'IT Solutions Architecture & Cloud Sizing',
      'Technical Proposal Writing for Cloud Migration Bids',
      'Tender QA & Compliance for Hosting Specifications',
      'Enterprise Web Infrastructure Planning',
    ],
    relevanceProfileAr: [
      'هندسة حلول تقنية المعلومات وتحديد أحجام السحابة',
      'صياغة العروض الفنية لمشاريع التحول السحابي',
      'ضبط جودة ومطابقة كراسات الشروط لاستضافات السحابة',
      'تخطيط البنى التحتية لمواقع وبوابات المنشآت',
    ],
    summaryEn:
      'Authoritative AWS certification validating foundational cloud engineering, multi-tier architectural design, and secure infrastructure deployment.',
    summaryAr:
      'اعتماد رسمي من أمازون يثبت الكفاءة الهندسية في تصميم البنى السحابية متعددة الطبقات وإدارة الموارد والبنية التحتية الآمنة.',
    programCoverage: [
      'Compute, storage, database, and networking services on AWS',
      'IAM security, policy boundaries, and access control',
      'Monitoring, scaling, and fault-tolerant architecture',
    ],
    featured: true,
    status: 'published',
  },

  // 2. Information Systems Auditing, Controls and Assurance (HKUST)
  {
    id: 'hkust-is-auditing-controls-assurance',
    title: 'Information Systems Auditing, Controls and Assurance',
    titleAr: 'تدقيق نظم المعلومات وضوابط الرقابة وضمان الجودة (HKUST)',
    issuer: 'The Hong Kong University of Science and Technology (HKUST)',
    issuerAr: 'جامعة هونغ كونغ للعلوم والتكنولوجيا (HKUST)',
    provider: 'Coursera',
    providerAr: 'كورسيرا',
    trainingProvider: 'HKUST Business School / Information Systems Department',
    recipientName: 'Youssef Syed Ghamry Syed',
    issueDate: 'May 6, 2021',
    issueDateAr: '6 مايو 2021',
    credentialId: '3REEUUAF5T5L',
    verificationUrl: 'https://coursera.org/verify/3REEUUAF5T5L',
    duration: 'Approx. 8 Hours (Academic Course Modules)',
    durationAr: 'حوالي 8 ساعات تدريبية (وحدات أكاديمية متخصصة)',
    image: '/assets/certificates/information_systems_auditing__controls_and_assurance.png',
    category: 'Tender QA, IT Audit & Governance',
    categoryAr: 'ضبط الجودة والامتثال وتدقيق النظم',
    certificateType: 'Academic Specialization Certificate',
    certificateTypeAr: 'شهادة تخصص أكاديمي معتمد',
    overviewEn:
      'Specialized course authorized by The Hong Kong University of Science and Technology covering IS audit standards, IT governance frameworks, internal control mechanisms, risk assessment, and information security assurance.',
    overviewAr:
      'مساق تخصصي معتمد من جامعة هونغ كونغ للعلوم والتكنولوجيا يغطي معايير تدقيق نظم المعلومات، أطر حوكمة تقنية المعلومات، آليات الرقابة وضوابط الجودة الداخلية، تقييم المخاطر، وضمان أمن وحصانة النظم.',
    learnedEn: [
      'Foundations of information systems auditing and assurance methodologies.',
      'Internal controls classification: preventive, detective, and corrective controls.',
      'IT governance frameworks, risk assessment matrices, and regulatory compliance standards.',
      'Audit evidence collection, audit trails, sampling techniques, and working paper documentation.',
      'Information security controls, access management, and business continuity planning.',
    ],
    learnedAr: [
      'أسس ومنهجيات تدقيق نظم المعلومات وضمان موثوقية العمليات التقنية.',
      'تصنيف وتطبيق ضوابط الرقابة الداخلية: الوقائية، والاستكشافية، والتصحيحية.',
      'أطر حوكمة تقنية المعلومات، ومصفوفات تقييم المخاطر، ومطابقة المعايير التنظيمية.',
      'منهجية جمع أدلة التدقيق، وتتبع سجلات التدقيق (Audit Trails)، وتوثيق أوراق العمل.',
      'ضوابط أمن المعلومات، وإدارة الصلاحيات، واستمرارية الأعمال وخطط التعافي.',
    ],
    skills: ['IS Auditing', 'IT Governance', 'Quality Assurance', 'Compliance Verification', 'Risk Assessment', 'Internal Controls', 'Audit Trails'],
    skillsAr: ['تدقيق نظم المعلومات', 'حوكمة تقنية المعلومات', 'ضمان الجودة والامتثال', 'تقييم المخاطر', 'ضوابط الرقابة الداخلية', 'سجلات التدقيق'],
    practicalValueEn:
      'Provides the methodological rigor required for zero-defect tender compliance matrix development, Red Team reviews, gap analysis, and auditing proposal documents against strict procurement requirements.',
    practicalValueAr:
      'توفر الأساس المنهجي والتدقيقي الصارم اللازم لبناء مصفوفات الامتثال الخالية من العيوب، وتنفيذ مراجعات الفرق الحمراء (Red Team)، وتحليل الفجوات في كراسات الشروط والمواصفات الحكومية.',
    relevanceProfileEn: [
      'Tender QA & Zero-Defect Compliance Matrix Preparation',
      'Red Team Bid Review & Disqualification Prevention',
      'RFP Requirement Decomposition & Traceability Audits',
      'IT Governance & Quality Management Deliverables',
    ],
    relevanceProfileAr: [
      'إعداد مصفوفات الامتثال وضبط جودة العطاءات',
      'المراجعة الحمراء للعروض الفنية وتفادي الاستبعاد',
      'تحليل وتفكيك كراسات الشروط وتتبع متطلبات التقييم',
      'حوكمة المشاريع التقنية وضمان جودة المخرجات',
    ],
    summaryEn:
      'Prestigious university credential establishing foundational expertise in IT audit, risk control systems, and rigorous compliance assurance.',
    summaryAr:
      'اعتماد جامعي مرموق يثبت الكفاءة المنهجية في تدقيق النظم وضوابط الامتثال والرقابة الداخلية على الوثائق والمشاريع التقنية.',
    programCoverage: [
      'Information systems audit process and control environments',
      'Risk-based auditing and compliance verification',
      'Business continuity, disaster recovery, and data security controls',
    ],
    featured: true,
    status: 'published',
  },

  // 3. System Administration and IT Infrastructure Services (Google)
  {
    id: 'google-system-admin-infrastructure',
    title: 'System Administration and IT Infrastructure Services',
    titleAr: 'إدارة النظم وخدمات البنية التحتية لتقنية المعلومات (Google)',
    issuer: 'Google',
    issuerAr: 'شركة جوجل (Google)',
    provider: 'Coursera',
    providerAr: 'كورسيرا',
    trainingProvider: 'Google Career Certificates',
    recipientName: 'Youssef Syed Ghamry Syed',
    issueDate: 'May 20, 2022',
    issueDateAr: '20 مايو 2022',
    credentialId: 'YQJR64XYLLMB',
    verificationUrl: 'https://coursera.org/verify/YQJR64XYLLMB',
    duration: 'Approx. 26 Hours (Comprehensive Professional Track)',
    durationAr: 'حوالي 26 ساعة تدريبية (مسار مهني شامل)',
    image: '/assets/certificates/system_administration_and_it_infrastructure_services.png',
    category: 'Cloud & IT Infrastructure',
    categoryAr: 'الحوسبة السحابية والبنية التحتية',
    certificateType: 'Google Professional Certificate Course',
    certificateTypeAr: 'شهادة مساق مهني معتمد من جوجل',
    overviewEn:
      'Professional infrastructure certification authorized by Google covering the operational duties of systems administrators: server hardware, directory services, cloud infrastructure, backup strategies, and disaster recovery.',
    overviewAr:
      'شهادة بنية تحتية احترافية معتمدة من جوجل تغطي المهام التشغيلية لمديري النظم: خوادم الأنظمة، خدمات الدليل (Directory Services)، البنى التحتية السحابية والمحلية، خطط النسخ الاحتياطي، والتعافي من الكوارث.',
    learnedEn: [
      'Configuring and maintaining multi-user operating systems, centralized directory services, and network shares.',
      'Active Directory, OpenLDAP, domain policies, and role-based access management.',
      'Server infrastructure setup, DNS/DHCP network configurations, and storage volume management.',
      'Disaster recovery planning, business continuity, automated backups, and system redundancy.',
      'Server troubleshooting methodologies and IT operational best practices.',
    ],
    learnedAr: [
      'تهيئة وإدارة أنظمة التشغيل متعددة المستخدمين وخدمات الدليل المركزية والمشاركات الشبكية.',
      'إدارة Active Directory و OpenLDAP وسياسات النطاق وإدارة الصلاحيات القائمة على الأدوار (RBAC).',
      'إعداد خوادم البنية التحتية، إعدادات خوادم DNS و DHCP، وإدارة وسائط وأحجام التخزين.',
      'تخطيط التعافي من الكوارث (DRP)، واستمرارية الأعمال، والنسخ الاحتياطي الآلي وأنظمة التكرار.',
      'منهجيات استكشاف الأخطاء وإصلاحها في الخوادم وأفضل الممارسات التشغيلية لتقنية المعلومات.',
    ],
    skills: ['System Administration', 'Active Directory', 'IT Infrastructure', 'DNS / DHCP', 'Backup & Disaster Recovery', 'Directory Services', 'Server Operations'],
    skillsAr: ['إدارة النظم', 'Active Directory', 'البنية التحتية للتقنية', 'خدمات DNS و DHCP', 'النسخ الاحتياطي والتعافي من الكوارث', 'تشغيل الخوادم'],
    practicalValueEn:
      'Directly supports the formulation of robust operational plans, maintenance workflows, server architecture sections, and disaster recovery strategies in government and enterprise IT bids.',
    practicalValueAr:
      'تدعم صياغة خطط التشغيل والصيانة (O&M)، وخطط استمرارية الأعمال والتعافي من الكوارث، وتوصيف متطلبات إدارة الخوادم في العروض الفنية لمناقصات القطاع الحكومي والخاص.',
    relevanceProfileEn: [
      'IT Proposals & Infrastructure Operations Narrative',
      'Service Level Agreements (SLAs) & Disaster Recovery Formulations',
      'Tender QA on Hardware & Hosting Mandatory Requirements',
      'Server & Network Topology Validation',
    ],
    relevanceProfileAr: [
      'صياغة خطط التشغيل والصيانة في العروض الفنية',
      'توصيف اتفاقيات مستوى الخدمة (SLAs) والتعافي من الكوارث',
      'مطابقة شروط كراسات المناقصات لمواصفات الاستضافة والشبكات',
      'هندسة ومراجعة المخططات الهندسية للخوادم',
    ],
    summaryEn:
      'Rigorous Google credential confirming mastery over enterprise systems administration, network services, and resilient IT infrastructure.',
    summaryAr:
      'اعتماد رسمي من جوجل يؤكد الإتقان العملي لإدارة النظم المؤسسية، وخدمات الشبكات، وحلول البنية التحتية عالية المرونة.',
    programCoverage: [
      'Organizational infrastructure and directory services',
      'Data storage, backup redundancy, and disaster recovery',
      'IT systems troubleshooting and operational maintenance',
    ],
    featured: true,
    status: 'published',
  },

  // 4. Introduction to Software Engineering (IBM - With Honors)
  {
    id: 'ibm-software-engineering',
    title: 'Introduction to Software Engineering (Completed with Honors)',
    titleAr: 'مقدمة في هندسة البرمجيات (مع مرتبة الشرف - IBM)',
    issuer: 'IBM',
    issuerAr: 'شركة آي بي إم (IBM)',
    provider: 'Coursera',
    providerAr: 'كورسيرا',
    trainingProvider: 'IBM Developer Skills Network / Skill Up Technologies',
    recipientName: 'Youssef Syed Ghamry Syed',
    issueDate: 'June 18, 2023',
    issueDateAr: '18 يونيو 2023',
    credentialId: 'QDYVLWG3U6B2',
    verificationUrl: 'https://coursera.org/verify/QDYVLWG3U6B2',
    duration: 'Approx. 14 Hours (Honors Track)',
    durationAr: 'حوالي 14 ساعة تدريبية (مسار مرتبة الشرف)',
    image: '/assets/certificates/introduction_to_software_engineering.png',
    category: 'Software Engineering & Programming',
    categoryAr: 'هندسة البرمجيات والبرمجة',
    certificateType: 'IBM Professional Honors Certificate',
    certificateTypeAr: 'شهادة مساق مهني مع مرتبة الشرف من IBM',
    overviewEn:
      'Prestigious software engineering credential authorized by IBM (awarded with Honors), detailing modern Software Development Life Cycle (SDLC) models, Agile/Scrum methodologies, cloud architecture, and software design principles.',
    overviewAr:
      'شهادة تخصصية مرموقة في هندسة البرمجيات معتمدة من شركة IBM (ممنوحة بمرتبة الشرف)، تفصل نماذج دورة حياة تطوير البرمجيات (SDLC)، منهجيات أجايل وسكروم (Agile / Scrum)، والمعمارية البرمجية السحابية.',
    learnedEn: [
      'Comprehensive Software Development Life Cycle (SDLC): Waterfall, Agile, Scrum, and DevOps practices.',
      'Requirement gathering, user stories, software specification documentation, and architectural patterns.',
      'Software modularity, design principles (SOLID, DRY), and code quality assurance.',
      'Application deployment architectures: microservices vs monolithic, containers, and cloud environments.',
      'Software testing strategies: unit testing, integration testing, system testing, and acceptance criteria.',
    ],
    learnedAr: [
      'دورة حياة تطوير البرمجيات الشاملة (SDLC): الشلال (Waterfall)، أجايل (Agile)، سكروم (Scrum)، وممارسات DevOps.',
      'جمع المتطلبات، صياغة قصص المستخدمين، إعداد وثائق المواصفات البرمجية، والأنماط المعمارية.',
      'مبادئ جودة الكود البرمجي وتصميم الأنظمة المعيارية (SOLID, DRY) وضمان الجودة.',
      'معماريات نشر التطبيقات: البنى الموزعة Microservices مقابل النظم الموحدة Monolith، وإدارة الحاويات.',
      'استراتيجيات اختبار البرمجيات: الاختبارات الوظيفية، واختبارات التكامل، واختبارات قبول المستخدم (UAT).',
    ],
    skills: ['Software Engineering', 'SDLC', 'Agile / Scrum', 'Software Architecture', 'DevOps', 'Quality Assurance', 'Testing Methodologies'],
    skillsAr: ['هندسة البرمجيات', 'دورة حياة تطوير النظم SDLC', 'منهجيات أجايل وسكروم', 'المعمارية البرمجية', 'ضمان جودة البرمجيات', 'استراتيجيات الاختبار'],
    practicalValueEn:
      'Directly empowers the drafting of comprehensive Technical Methodologies, Work Breakdown Structures (WBS), project governance frameworks, and development sprint plans in software and portal tenders.',
    practicalValueAr:
      'تمكن مباشرة من صياغة المنهجيات الفنية التفصيلية لتنفيذ المشاريع البرمجية، وهيكل تقسيم العمل (WBS)، وحوكمة فرق العمل، وخطة مراحل التطوير في مناقصات المنصات والبوابات الرقمية.',
    relevanceProfileEn: [
      'Technical Methodology Drafting for Software & IT Tenders',
      'Work Breakdown Structure (WBS) & Sprint Milestone Planning',
      'Testing & Quality Assurance Plans Formulation in Bids',
      'Evaluation Criteria Alignment with SDLC Frameworks',
    ],
    relevanceProfileAr: [
      'صياغة المنهجية الفنية الشاملة لمناقصات البرمجيات والحلول الرقمية',
      'تخطيط هيكل تجزئة العمل (WBS) والجداول الزمنية للتسليم',
      'إعداد خطط الفحص والقبول وضمان الجودة البرمجية في العروض',
      'مطابقة شروط كراسات الشروط لمنهجيات التحول الرقمي',
    ],
    summaryEn:
      'Distinguished IBM Honors certification validating advanced comprehension of software lifecycles, Agile execution, and enterprise engineering patterns.',
    summaryAr:
      'شهادة شرفية من IBM تؤكد الفهم العميق لدورات حياة البرمجيات، ومنهجيات أجايل، وتصميم الأنظمة الرقمية عالية الكفاءة.',
    programCoverage: [
      'SDLC phases, methodologies, and engineering workflows',
      'Software architecture, microservices, and design principles',
      'Testing, deployment pipelines, and project delivery frameworks',
    ],
    featured: true,
    status: 'published',
  },

  // 5. Principles of UX/UI Design (Meta)
  {
    id: 'meta-ux-ui-design',
    title: 'Principles of UX/UI Design',
    titleAr: 'مبادئ تصميم واجهات وتجربة المستخدم (Meta)',
    issuer: 'Meta',
    issuerAr: 'شركة ميتا (Meta)',
    provider: 'Coursera',
    providerAr: 'كورسيرا',
    trainingProvider: 'Meta Front-End & Mobile Certification Track',
    recipientName: 'Youssef Syed Ghamry Syed',
    issueDate: 'June 15, 2023',
    issueDateAr: '15 يونيو 2023',
    credentialId: '39BHQVF7NML3',
    verificationUrl: 'https://coursera.org/verify/39BHQVF7NML3',
    duration: 'Approx. 21 Hours (In-depth Specialization Course)',
    durationAr: 'حوالي 21 ساعة تدريبية (مساق تخصصي معمق)',
    image: '/assets/certificates/principles_of_ux-ui_design.png',
    category: 'UI/UX Design',
    categoryAr: 'تصميم واجهات وتجربة المستخدم',
    certificateType: 'Meta Professional Course Certificate',
    certificateTypeAr: 'شهادة مساق مهني معتمد من ميتا',
    overviewEn:
      'Professional design course authorized by Meta focusing on user-centered design methodologies, heuristic evaluation, visual hierarchy, wireframing, usability testing, and accessible digital design systems.',
    overviewAr:
      'مساق احترافي معتمد من شركة ميتا يركز على منهجيات التصميم المتمحور حول المستخدم، التقييم الإرشادي لتجربة الاستخدام (Heuristics)، الهيكلية البصرية، النماذج السلكية (Wireframes)، واختبارات قابلية الاستخدام وسهولة الوصول.',
    learnedEn: [
      'User-centered design processes: research, personas, empathy maps, and user journey mapping.',
      'Information architecture: site mapping, navigation patterns, and user flow optimization.',
      'Wireframing and prototyping using industry design tools (Figma).',
      'Visual design principles: typographic scale, color theory, contrast ratios (WCAG AA), and layout grids.',
      'Usability testing, feedback iteration, and accessibility standards.',
    ],
    learnedAr: [
      'عمليات التصميم المتمحور حول المستخدم: أبحاث المستخدمين، ونماذج الشخصيات (Personas)، وخرائط رحلة العميل.',
      'هندسة المعلومات: هيكلة المواقع، وتصميم أنماط التنقل، وتحسين مسارات تدفق المستخدم (User Flows).',
      'بناء النماذج السلكية والنماذج التفاعلية الأولية باستخدام أدوات التصميم الحديثة مثل Figma.',
      'مبادئ التصميم المرئي: التسلسل الهرمي للخطوط، ونظريات الألوان ونسب التباين المعتمدة (WCAG AA)، والشبكات البصرية.',
      'اختبارات قابلية الاستخدام (Usability Testing)، وتحليل الملاحظات، ومعايير سهولة الوصول لذوي الاحتياجات.',
    ],
    skills: ['UI/UX Design', 'Figma Prototyping', 'User Research', 'Information Architecture', 'Wireframing', 'Accessibility (WCAG)', 'Design Systems'],
    skillsAr: ['تصميم واجهات وتجربة المستخدم', 'النماذج التفاعلية في Figma', 'أبحاث المستخدمين', 'هندسة المعلومات', 'معايير إمكانية الوصول WCAG', 'أنظمة التصميم'],
    practicalValueEn:
      'Provides the design rationale and interactive mockups required for user journey narratives in web portals, mobile app tenders, and front-end interface proposals.',
    practicalValueAr:
      'توفر الأساس المنهجي والنماذج التفاعلية لتوثيق رحلات المستخدم وتصميم واجهات المنصات الحكومية والتطبيقات الذكية في العروض الفنية للمناقصات.',
    relevanceProfileEn: [
      'Proposal UI/UX Architecture & User Journey Documentation',
      'Portal Wireframing & Usability Assurance in IT Bids',
      'Digital Accessibility (WCAG 2.1) Compliance Verification',
      'Front-End Web Development Alignment',
    ],
    relevanceProfileAr: [
      'توثيق تجربة المستخدم وتصميم النماذج الأولية في العروض الفنية',
      'مطابقة اشتراطات سهولة الاستخدام والوصول في كراسات الشروط',
      'ضمان التوافق مع معايير إمكانية الوصول الرقمية العالمية (WCAG)',
      'تكامل التصميم مع تطوير الواجهات الأمامية للويب',
    ],
    summaryEn:
      'Official Meta certification validating user experience research, design system fundamentals, and accessible interface prototyping.',
    summaryAr:
      'شهادة معتمدة من ميتا تثبت إتقان تصميم واجهات المستخدم المبنية على دراسة متطلبات وسلوكيات المستفيدين وأنظمة التصميم المعيارية.',
    programCoverage: [
      'User research, personas, and journey mapping',
      'Information architecture, wireframes, and interactive prototyping',
      'Accessibility standards, visual design, and usability evaluations',
    ],
    featured: true,
    status: 'published',
  },

  // 6. Introduction to TCP/IP (Yonsei University)
  {
    id: 'yonsei-tcp-ip',
    title: 'Introduction to TCP/IP',
    titleAr: 'مقدمة في بروتوكولات شبكات الحاسب والإنترنت TCP/IP',
    issuer: 'Yonsei University',
    issuerAr: 'جامعة يونسي (Yonsei University)',
    provider: 'Coursera',
    providerAr: 'كورسيra',
    trainingProvider: 'Yonsei University Communications & Networking Laboratory',
    recipientName: 'Youssef Syed Ghamry Syed',
    issueDate: 'May 12, 2021',
    issueDateAr: '12 مايو 2021',
    credentialId: 'DGCJPE2RGQ4H',
    verificationUrl: 'https://coursera.org/verify/DGCJPE2RGQ4H',
    duration: 'Approx. 8 Hours (Core Engineering Course)',
    durationAr: 'حوالي 8 ساعات تدريبية (مساق هندسة الشبكات)',
    image: '/assets/certificates/introduction_to_tcp-ip.png',
    category: 'Cloud & IT Infrastructure',
    categoryAr: 'الحوسبة السحابية والبنية التحتية',
    certificateType: 'University Course Certificate',
    certificateTypeAr: 'شهادة مساق جامعي معتمد',
    overviewEn:
      'Academic networking certification authorized by Yonsei University (South Korea) covering internet protocol architecture, TCP/IP protocol suites, IP addressing, routing mechanisms, and network security protocols.',
    overviewAr:
      'شهادة أكاديمية معتمدة في هندسة الشبكات من جامعة يونسي الكورية تغطي المعمارية الأساسية للإنترنت، حزمة بروتوكولات TCP/IP، عنونة IP، آليات التوجيه (Routing)، وبروتوكولات أمن الشبكات.',
    learnedEn: [
      'The 5-layer Internet architecture and 7-layer OSI reference models.',
      'IPv4 and IPv6 addressing schemes, subnetting, CIDR notation, and network address translation (NAT).',
      'Transport layer mechanisms: TCP flow control, congestion control, 3-way handshake, and UDP characteristics.',
      'Routing protocols: RIP, OSPF, BGP, and packet forwarding algorithms.',
      'Network security protocols: SSL/TLS handshakes, IPSec, and DNS architecture.',
    ],
    learnedAr: [
      'معمارية طبقات الإنترنت الخمس والنموذج المرجعي المفتوح للشبكات OSI ذو الطبقات السبع.',
      'أنظمة عنونة بروتوكول الإنترنت IPv4 و IPv6، وتقسيم الشبكات الفرعية Subnetting، وترجمة العناوين NAT.',
      'آليات طبقة النقل: التحكم في التدفق والازدحام لبروتوكول TCP، والمصافحة الثلاثية، وخصائص UDP.',
      'بروتوكولات التوجيه الشبكي: OSPF و BGP وخوارزميات توجيه الحزم.',
      'بروتوكولات حماية وتشفير الشبكات: مصافحة SSL/TLS، وبروتوكول IPSec، وبنية نظام أسماء النطاقات DNS.',
    ],
    skills: ['TCP/IP Suite', 'Network Architecture', 'IPv4 / IPv6 Subnetting', 'Routing Protocols', 'SSL/TLS Security', 'DNS & NAT', 'Network Diagnostics'],
    skillsAr: ['حزمة بروتوكولات TCP/IP', 'هندسة الشبكات', 'عنونة وتقسيم الشبكات', 'بروتوكولات التوجيه', 'تشفير وحماية SSL/TLS', 'خدمات DNS و NAT'],
    practicalValueEn:
      'Essential for reviewing data center, hosting, firewall, and private networking specifications in enterprise IT and cloud tenders.',
    practicalValueAr:
      'أساسية لفحص وتدقيق كراسات الشروط التقنية الخاصة بمراكز البيانات، الاستضافات الخاصة، جدران الحماية، وشبكات الربط الآمنة في المناقصات.',
    relevanceProfileEn: [
      'IT Infrastructure & Enterprise Network Bids',
      'Technical Proposal Drafting for Network Modernization Projects',
      'Compliance Matrix Verification for Network Security Mandates',
      'Cloud VPC & Hybrid Network Topology Engineering',
    ],
    relevanceProfileAr: [
      'صياغة العروض الفنية لمشاريع البنية التحتية والشبكات',
      'مطابقة اشتراطات أمن الشبكات والتشفير في كراسات الشروط',
      'تصميم طوبولوجيا الشبكات السحابية والهجينة',
      'تقييم متطلبات مراكز البيانات والربط البيني',
    ],
    summaryEn:
      'University-level engineering credential establishing a rigorous foundation in TCP/IP protocols, data transmission, and network security.',
    summaryAr:
      'اعتماد جامعي رصين يثبت التمكن النظري والعملي من بروتوكولات الإنترنت، آليات نقل البيانات، وهندسة الشبكات.',
    programCoverage: [
      'Layered network architecture and protocol suites',
      'IP addressing, subnetting, and packet routing protocols',
      'Transport protocols, reliability mechanisms, and network security',
    ],
    featured: false,
    status: 'published',
  },

  // 7. Database Structures and Management with MySQL (Meta)
  {
    id: 'meta-database-structures-mysql',
    title: 'Database Structures and Management with MySQL',
    titleAr: 'هياكل وإدارة قواعد البيانات المتقدمة باستخدام MySQL (Meta)',
    issuer: 'Meta',
    issuerAr: 'شركة ميتا (Meta)',
    provider: 'Coursera',
    providerAr: 'كورسيرا',
    trainingProvider: 'Meta Back-End Developer Track',
    recipientName: 'Youssef Syed Ghamry Syed',
    issueDate: 'June 14, 2023',
    issueDateAr: '14 يونيو 2023',
    credentialId: 'YTAX5AA62NAY',
    verificationUrl: 'https://coursera.org/verify/YTAX5AA62NAY',
    duration: 'Approx. 28 Hours (Advanced Technical Specialization)',
    durationAr: 'حوالي 28 ساعة تدريبية (تخصص تقني متقدم)',
    image: '/assets/certificates/database_structures_and_management_with_mysql.png',
    category: 'Back-End & Databases',
    categoryAr: 'الخوادم وقواعد البيانات',
    certificateType: 'Meta Professional Course Certificate',
    certificateTypeAr: 'شهادة مساق مهني معتمد من ميتا',
    overviewEn:
      'Advanced relational database management certification authorized by Meta, covering complex SQL queries, database schema design, normalization, triggers, stored procedures, transactions, and performance indexing.',
    overviewAr:
      'شهادة تخصصية متقدمة في إدارة قواعد البيانات العلائقية معتمدة من ميتا، تغطي استعلامات SQL المعقدة، تصميم المخططات، التسوية (Normalization)، المحفزات (Triggers)، الإجراءات المخزنة، والمعاملات البنكية (Transactions).',
    learnedEn: [
      'Advanced relational database schema design, entity relationship diagrams (ERD), and 1NF to 3NF normalization.',
      'Complex SQL querying: multi-table JOINs, subqueries, aggregations, and window functions.',
      'Stored procedures, user-defined functions, triggers, and automated database events.',
      'ACID transaction properties, concurrency control, commit/rollback handling, and table locks.',
      'Database performance optimization, query execution plan analysis, and B-tree indexing strategies.',
    ],
    learnedAr: [
      'تصميم مخططات قواعد البيانات العلائقية المتقدمة ومخططات الكيانات (ERD) ومراحل التسوية المعيارية (Normalization).',
      'استعلامات SQL المتقدمة: الربط متعدد الجداول (JOINs)، والاستعلامات الفرعية، والدوال التجميعية.',
      'برمجة الإجراءات المخزنة (Stored Procedures)، والدوال المخصصة، ومحفزات البيانات (Triggers).',
      'خصائص معاملات ACID، والتحكم في التزامن، وإدارة الحفظ والتراجع، وقفل الجداول لمنع تضارب البيانات.',
      'تحسين أداء الاستعلامات، وتحليل خطط التنفيذ (Execution Plans)، واستراتيجيات الفهرسة.',
    ],
    skills: ['MySQL', 'Relational Database Design', 'Complex SQL', 'Stored Procedures', 'Database Normalization', 'ACID Transactions', 'Performance Indexing'],
    skillsAr: ['قواعد بيانات MySQL', 'تصميم قواعد البيانات العلائقية', 'استعلامات SQL المتقدمة', 'الإجراءات المخزنة', 'تسوية قواعد البيانات', 'فهرسة وتحسين الأداء'],
    practicalValueEn:
      'Crucial for structuring enterprise data storage specifications, database sizing calculations, high-volume transactional handling, and data migration roadmaps in IT solutions proposals.',
    practicalValueAr:
      'جوهرية لصياغة مواصفات تخزين البيانات المؤسسية، وحساب أحجام قواعد البيانات وسعات التخزين، وخطط ترحيل البيانات وحماية تكاملها في عروض حلول تقنية المعلومات.',
    relevanceProfileEn: [
      'IT Solutions & Enterprise Database Sizing in Bids',
      'Data Architecture & Migration Technical Methodologies',
      'Tender QA on Data Integrity, ACID, and Performance Criteria',
      'Back-End System Integration & API Data Flow Validation',
    ],
    relevanceProfileAr: [
      'توصيف معمارية وحجم قواعد البيانات في العروض التقنية',
      'صياغة خطط ترحيل البيانات وإدارتها في كراسات الشروط',
      'ضبط الجودة لمتطلبات تكامل البيانات وحصانتها من الضياع',
      'تصميم طبقات الربط بين واجهات البرمجة وقواعد البيانات',
    ],
    summaryEn:
      'Rigorous Meta credential demonstrating advanced mastery in relational database engineering, complex querying, and transactional integrity.',
    summaryAr:
      'اعتماد رسمي من ميتا يؤكد الاحترافية في هندسة قواعد البيانات العلائقية، وكتابة الاستعلامات المتقدمة، وضمان سلامة المعاملات.',
    programCoverage: [
      'Relational modeling, ER diagrams, and database normalization',
      'Complex SQL, views, stored procedures, and triggers',
      'Transaction management, ACID properties, and performance optimization',
    ],
    featured: true,
    status: 'published',
  },

  // 8. Introduction to Databases for Back-End Development (Meta)
  {
    id: 'meta-databases-backend-dev',
    title: 'Introduction to Databases for Back-End Development',
    titleAr: 'مقدمة في قواعد البيانات لتطوير الخوادم والأنظمة الخلفية (Meta)',
    issuer: 'Meta',
    issuerAr: 'شركة ميتا (Meta)',
    provider: 'Coursera',
    providerAr: 'كورسيرا',
    trainingProvider: 'Meta Back-End Developer Track',
    recipientName: 'Youssef Syed Ghamry Syed',
    issueDate: 'October 26, 2022',
    issueDateAr: '26 أكتوبر 2022',
    credentialId: 'EXFN4VGCQNAM',
    verificationUrl: 'https://coursera.org/verify/EXFN4VGCQNAM',
    duration: 'Approx. 24 Hours',
    durationAr: 'حوالي 24 ساعة تدريبية',
    image: '/assets/certificates/introduction_to_databases_for_back-end_development.png',
    category: 'Back-End & Databases',
    categoryAr: 'الخوادم وقواعد البيانات',
    certificateType: 'Meta Professional Course Certificate',
    certificateTypeAr: 'شهادة مساق مهني معتمد من ميتا',
    overviewEn:
      'Foundational database engineering course authorized by Meta, focusing on relational data modeling, fundamental SQL operations, table constraints, and integrating database engines with back-end application layers.',
    overviewAr:
      'مساق هندسي معتمد من ميتا يركز على نمذجة البيانات العلائقية، عمليات لغة SQL الأساسية، قيود الجداول والمفاتيح الأساسية والأجنبية، وربط محركات قواعد البيانات بطبقات التطبيقات الخلفية.',
    learnedEn: [
      'Relational database concepts: tables, records, fields, keys (Primary & Foreign).',
      'SQL Data Definition Language (DDL) and Data Manipulation Language (DML).',
      'Filtering, sorting, grouping data, and applying conditional constraints.',
      'Basic and multi-table joins to relate disparate business entities.',
      'Connecting databases with back-end frameworks and handling persistent data.',
    ],
    learnedAr: [
      'مفاهيم قواعد البيانات العلائقية: الجداول، السجلات، الحقول، والمفاتيح الأساسية والأجنبية.',
      'أوامر تعريف البيانات (DDL) وأوامر معالجة البيانات (DML) بلغة SQL.',
      'تصفية وفرز وتجميع البيانات وتطبيق قيود التحقق.',
      'عمليات ربط الجداول الأساسية لربط الكيانات المختلفة في النظم البرمجية.',
      'ربط محركات قواعد البيانات بأطر العمل الخلفية وحفظ البيانات واسترجاعها.',
    ],
    skills: ['SQL Fundamentals', 'Relational Modeling', 'Data Manipulation', 'Database Constraints', 'Back-End Integration'],
    skillsAr: ['أساسيات SQL', 'النمذجة العلائقية', 'معالجة البيانات', 'قيود الجداول', 'التكامل مع الأنظمة الخلفية'],
    practicalValueEn:
      'Enables structured evaluation and technical proposal writing for data-driven applications, CRM back-ends, and government portal submissions.',
    practicalValueAr:
      'تمكن من التقييم المنظم وصياغة العروض الفنية للأنظمة القائمة على البيانات، وبوابات الأعمال، ومنصات إدارة العلاقات (CRM).',
    relevanceProfileEn: [
      'Technical Proposal Writing for Data-Driven Portals',
      'Database Architecture Validation in RFP Responses',
      'Web Application Engineering & Data Storage Planning',
    ],
    relevanceProfileAr: [
      'صياغة العروض الفنية للبوابات والمنصات التفاعلية',
      'التحقق من كفاءة معمارية قواعد البيانات في وثائق المناقصات',
      'تخطيط هياكل حفظ البيانات في مشاريع تطوير الويب',
    ],
    summaryEn:
      'Essential Meta credential validating database modeling, SQL syntax, and server-side data integration.',
    summaryAr:
      'شهادة معتمدة من ميتا تثبت إتقان نمذجة قواعد البيانات، صياغة استعلامات SQL، وربطها بالخوادم.',
    programCoverage: [
      'Database design, tables, and relationship modeling',
      'SQL CRUD operations, aggregation, and queries',
      'Back-end application database integration',
    ],
    featured: false,
    status: 'published',
  },

  // 9. Introduction to Databases (Meta)
  {
    id: 'meta-introduction-to-databases',
    title: 'Introduction to Databases',
    titleAr: 'مقدمة في أنظمة إدارة قواعد البيانات (Meta)',
    issuer: 'Meta',
    issuerAr: 'شركة ميتا (Meta)',
    provider: 'Coursera',
    providerAr: 'كورسيرا',
    trainingProvider: 'Meta Front-End & Back-End Tracks',
    recipientName: 'Youssef Syed Ghamry Syed',
    issueDate: 'November 30, 2022',
    issueDateAr: '30 نوفمبر 2022',
    credentialId: '3K8YF5ZQ862K',
    verificationUrl: 'https://coursera.org/verify/3K8YF5ZQ862K',
    duration: 'Approx. 20 Hours',
    durationAr: 'حوالي 20 ساعة تدريبية',
    image: '/assets/certificates/introduction_to_databases.png',
    category: 'Back-End & Databases',
    categoryAr: 'الخوادم وقواعد البيانات',
    certificateType: 'Meta Professional Course Certificate',
    certificateTypeAr: 'شهادة مساق مهني معتمد من ميتا',
    overviewEn:
      'Comprehensive introduction to modern database management systems authorized by Meta, covering relational principles, SQL queries, data types, and enterprise data storage strategies.',
    overviewAr:
      'مقدمة شاملة في أنظمة إدارة قواعد البيانات الحديثة معتمدة من ميتا، تغطي المبادئ العلائقية، استعلامات SQL، أنواع البيانات، واستراتيجيات تخزين البيانات للمنشآت.',
    learnedEn: [
      'Overview of Database Management Systems (DBMS) vs spreadsheets.',
      'Relational data concepts, table structures, and schema validation.',
      'Basic CRUD operations: Create, Read, Update, Delete via standard SQL.',
      'Data integrity rules, uniqueness constraints, and primary keys.',
      'Database security principles and role-based access to databases.',
    ],
    learnedAr: [
      'مقارنة أنظمة إدارة قواعد البيانات (DBMS) بجداول البيانات وجدوى استخدامها للشركات.',
      'مفاهيم البيانات العلائقية وهياكل الجداول والتحقق من صحة المخطط.',
      'عمليات إنشاء وقراءة وتحديث وحذف البيانات (CRUD) باستخدام SQL.',
      'قواعد سلامة وتكامل البيانات والقيود الفريدة والمفاتيح الأساسية.',
      'مبادئ أمان قواعد البيانات وحماية وصول المستخدمين المصرح لهم.',
    ],
    skills: ['Database Management', 'SQL CRUD', 'Data Modeling', 'Data Integrity', 'DBMS Concepts'],
    skillsAr: ['إدارة قواعد البيانات', 'استعلامات CRUD', 'نمذجة البيانات', 'سلامة وتكامل البيانات', 'أنظمة DBMS'],
    practicalValueEn:
      'Supports accurate scoping of database requirements and technical compliance matrix checks in enterprise software procurement.',
    practicalValueAr:
      'تدعم التحديد الدقيق لمتطلبات قواعد البيانات والتحقق من بنود مصفوفة الامتثال في كراسات شروط الأنظمة البرمجية.',
    relevanceProfileEn: [
      'Tender Document Analysis for Database Specifications',
      'IT Solutions Architecture & Data Layer Planning',
      'Software Proposal Writing & System Sizing',
    ],
    relevanceProfileAr: [
      'تحليل كراسات الشروط والمواصفات لقواعد البيانات',
      'تخطيط طبقة البيانات في حلول تقنية المعلومات',
      'صياغة العروض الفنية للبرمجيات وتحديد السعات',
    ],
    summaryEn:
      'Solid Meta certification confirming core competencies in relational DBMS concepts, SQL operations, and data integrity.',
    summaryAr:
      'اعتماد معترف به من ميتا يثبت الكفاءة الأساسية في أنظمة قواعد البيانات العلائقية وضمان سلامة البيانات.',
    programCoverage: [
      'Relational database architecture and table design',
      'SQL data manipulation and retrieval operations',
      'Data integrity rules and enterprise storage concepts',
    ],
    featured: false,
    status: 'published',
  },

  // 10. Introduction to Back-End Development (Meta)
  {
    id: 'meta-intro-backend-dev',
    title: 'Introduction to Back-End Development',
    titleAr: 'مقدمة في تطوير الأنظمة والخوادم الخلفية (Meta)',
    issuer: 'Meta',
    issuerAr: 'شركة ميتا (Meta)',
    provider: 'Coursera',
    providerAr: 'كورسيرا',
    trainingProvider: 'Meta Back-End Developer Track',
    recipientName: 'Youssef Syed Ghamry Syed',
    issueDate: 'October 24, 2022',
    issueDateAr: '24 أكتوبر 2022',
    credentialId: 'QVN8QBR5MP4A',
    verificationUrl: 'https://coursera.org/verify/QVN8QBR5MP4A',
    duration: 'Approx. 18 Hours',
    durationAr: 'حوالي 18 ساعة تدريبية',
    image: '/assets/certificates/introduction_to_back-end_development.png',
    category: 'Back-End & Databases',
    categoryAr: 'الخوادم وقواعد البيانات',
    certificateType: 'Meta Professional Course Certificate',
    certificateTypeAr: 'شهادة مساق مهني معتمد من ميتا',
    overviewEn:
      'Authoritative course authorized by Meta detailing the fundamentals of back-end web architecture: web servers, HTTP protocol requests and responses, API design, server-side frameworks, and database communication.',
    overviewAr:
      'مساق متخصص ومعتمد من ميتا يفصل أساسيات معمارية الويب الخلفية: خوادم الويب، بروتوكول HTTP والطلبات والاستجابات، تصميم واجهات برمجة التطبيقات (APIs)، وأطر العمل الخادومية.',
    learnedEn: [
      'How the web works: client-server model, DNS resolution, and TCP/IP request-response lifecycle.',
      'HTTP protocols, status codes, request methods (GET, POST, PUT, DELETE), and headers.',
      'Server-side application architecture and MVC (Model-View-Controller) design patterns.',
      'Building and testing RESTful web services and API endpoints.',
      'Integration between server application logic, business rules, and relational databases.',
    ],
    learnedAr: [
      'آلية عمل شبكة الويب: نموذج العميل والخادم، تحليل أسماء النطاقات DNS، ودورة حياة طلبات HTTP.',
      'بروتوكول HTTP، ورموز الحالة، وطرق الإرسال (GET, POST, PUT, DELETE)، والترويسات.',
      'المعمارية البرمجية للخوادم ونمط التصميم النموذجي MVC.',
      'بناء واختبار خدمات الويب وواجهات برمجة التطبيقات RESTful APIs.',
      'الربط والتكامل بين المنطق البرمجي للخادم وقواعد البيانات.',
    ],
    skills: ['Back-End Architecture', 'REST APIs', 'HTTP Protocols', 'Client-Server Model', 'MVC Pattern', 'Web Services'],
    skillsAr: ['معمارية الخوادم الخلفية', 'واجهات برمجة التطبيقات REST', 'بروتوكول HTTP', 'نموذج العميل والخادم', 'نمط MVC'],
    practicalValueEn:
      'Directly informs the technical drafting of system architecture diagrams, API integration workflows, and server communication flows in software tender responses.',
    practicalValueAr:
      'تفيد بصورة مباشرة في صياغة الرسوم والمخططات المعمارية للأنظمة، وتدفقات الربط والتكامل عبر واجهات APIs، في العروض الفنية لمناقصات البرمجيات.',
    relevanceProfileEn: [
      'Software Architecture & API Integration Proposals',
      'Technical Methodology Drafting for Portal & Enterprise Bids',
      'Bid QA on Web Protocol & Server Specifications',
    ],
    relevanceProfileAr: [
      'صياغة معمارية الأنظمة والتكامل الرقمي في العروض',
      'إعداد المنهجية الفنية لمناقصات البوابات الإلكترونية',
      'ضبط الجودة لمواصفات الخوادم وبروتوكولات الربط',
    ],
    summaryEn:
      'Meta-certified credential validating foundational understanding of back-end infrastructure, HTTP communications, and REST API architectures.',
    summaryAr:
      'شهادة معتمدة من ميتا تؤكد الفهم العميق لمعمارية الخوادم وبروتوكولات الويب وتصميم واجهات البرمجة.',
    programCoverage: [
      'Client-server architecture and internet protocols',
      'RESTful APIs, HTTP requests, and status handling',
      'Server frameworks and database connectivity',
    ],
    featured: false,
    status: 'published',
  },

  // 11. Introduction to Front-End Development (Meta)
  {
    id: 'meta-intro-frontend-dev',
    title: 'Introduction to Front-End Development',
    titleAr: 'مقدمة في تطوير الواجهات الأمامية للويب (Meta)',
    issuer: 'Meta',
    issuerAr: 'شركة ميتا (Meta)',
    provider: 'Coursera',
    providerAr: 'كورسيرا',
    trainingProvider: 'Meta Front-End Developer Track',
    recipientName: 'Youssef Syed Ghamry Syed',
    issueDate: 'October 24, 2022',
    issueDateAr: '24 أكتوبر 2022',
    credentialId: '4C4SU8BWAG9L',
    verificationUrl: 'https://coursera.org/verify/4C4SU8BWAG9L',
    duration: 'Approx. 18 Hours',
    durationAr: 'حوالي 18 ساعة تدريبية',
    image: '/assets/certificates/introduction_to_front-end_development.png',
    category: 'Web & Front-End Development',
    categoryAr: 'تطوير الويب والواجهات الأمامية',
    certificateType: 'Meta Professional Course Certificate',
    certificateTypeAr: 'شهادة مساق مهني معتمد من ميتا',
    overviewEn:
      'Core front-end web engineering certification authorized by Meta, covering modern semantic HTML5, CSS layout principles (Flexbox, Grid), responsive design, and introductory UI component frameworks.',
    overviewAr:
      'شهادة تخصصية في هندسة الواجهات الأمامية معتمدة من ميتا، تغطي تقنيات HTML5 الدلالية، أساليب التخطيط الحديثة في CSS (Flexbox, Grid)، التصميم المتجاوب مع الشاشات، وأطر عمل المكونات المرئية.',
    learnedEn: [
      'Structuring web pages with semantic HTML5 elements for optimal SEO and accessibility.',
      'Styling interfaces with CSS, cascading rules, specificity, and layout systems.',
      'Responsive design techniques using media queries and fluid viewport units.',
      'UI component frameworks (Bootstrap / modern CSS systems) for rapid prototyping.',
      'Cross-browser compatibility testing and web performance optimization.',
    ],
    learnedAr: [
      'هيكلة صفحات الويب باستخدام وسوم HTML5 الدلالية لتحقيق أفضل أداء في محركات البحث وإمكانية الوصول.',
      'تنسيق الواجهات باستخدام CSS وقواعد التتابع وتخطيطات Flexbox و CSS Grid.',
      'تقنيات التصميم المتجاوب مع جميع أحجام الشاشات باستخدام Media Queries.',
      'أطر بناء واجهات المستخدم للتطوير السريع والمتناسق.',
      'فحص التوافقية عبر مختلف المتصفحات وتحسين سرعة استجابة الصفحات.',
    ],
    skills: ['HTML5', 'CSS3', 'Responsive Web Design', 'Flexbox & Grid', 'Front-End Development', 'Web Accessibility'],
    skillsAr: ['HTML5 الدلالية', 'تنسيقات CSS3', 'التصميم المتجاوب مع الشاشات', 'تخطيط Flexbox و Grid', 'تطوير الواجهات الأمامية'],
    practicalValueEn:
      'Supports web portal proposals, digital accessibility standards, and responsive front-end engineering deliverables in public and commercial tenders.',
    practicalValueAr:
      'تدعم إعداد عروض المنصات الرقمية ومواقع الويب الحكومية، وتطبيق معايير التصميم المتجاوب، وضمان سهولة وصول المستخدمين.',
    relevanceProfileEn: [
      'Web Development & Corporate Portal Proposals',
      'Technical SEO & Semantic Markup Architecture',
      'Tender QA on Front-End Responsiveness & Accessibility',
    ],
    relevanceProfileAr: [
      'عروض تطوير المواقع والبوابات الرقمية',
      'تحسين محركات البحث التقني والهيكلة الدلالية',
      'ضبط جودة الواجهات وتوافقها مع الأجهزة الذكية',
    ],
    summaryEn:
      'Meta-certified foundation in responsive web design, semantic HTML5 structure, and cross-platform front-end standards.',
    summaryAr:
      'شهادة معتمدة من ميتا تثبت الإتقان العملي لبناء وتنسيق واجهات الويب الحديثة والمتجاوبة.',
    programCoverage: [
      'Semantic HTML5 structure and SEO accessibility',
      'CSS styling, Flexbox, Grid, and responsive layout',
      'Front-end frameworks and responsive testing',
    ],
    featured: false,
    status: 'published',
  },

  // 12. React Basics (Meta)
  {
    id: 'meta-react-basics',
    title: 'React Basics',
    titleAr: 'أساسيات بناء تطبيقات الويب باستخدام ريأكت (Meta React Basics)',
    issuer: 'Meta',
    issuerAr: 'شركة ميتا (Meta)',
    provider: 'Coursera',
    providerAr: 'كورسيرا',
    trainingProvider: 'Meta Front-End Developer Track',
    recipientName: 'Youssef Syed Ghamry Syed',
    issueDate: 'March 6, 2023',
    issueDateAr: '6 مارس 2023',
    credentialId: 'TLV2PSJZWVXV',
    verificationUrl: 'https://coursera.org/verify/TLV2PSJZWVXV',
    duration: 'Approx. 26 Hours',
    durationAr: 'حوالي 26 ساعة تدريبية',
    image: '/assets/certificates/react_basics.png',
    category: 'Web & Front-End Development',
    categoryAr: 'تطوير الويب والواجهات الأمامية',
    certificateType: 'Meta Professional Course Certificate',
    certificateTypeAr: 'شهادة مساق مهني معتمد من ميتا',
    overviewEn:
      'In-depth React engineering certification authorized by Meta (the creator of React), covering component-driven architecture, JSX, props, state management, event handling, and modern hooks.',
    overviewAr:
      'شهادة هندسية متخصصة في مكتبة React معتمدة رسمياً من شركة ميتا (المطورة لمكتبة React)، تغطي معمارية المكونات المستقلة، بناء واجهات JSX، إدارة الحالة (State & Props)، وخطافات React Hooks الحديثة.',
    learnedEn: [
      'Component-based architecture: functional components, modular UI separation, and reusability.',
      'JSX syntax, component hierarchies, passing data via Props, and conditional rendering.',
      'React state management using the useState hook and managing interactive UI state.',
      'Handling DOM events, user inputs, forms, and controlled components.',
      'Component lifecycles, side effects, and data fetching with the useEffect hook.',
    ],
    learnedAr: [
      'المعمارية القائمة على المكونات (Component-Based): المكونات الوظيفية وإعادة استخدام عناصر الواجهة.',
      'صياغة JSX، التسلسل الهرمي للمكونات، تمرير البيانات عبر Props، والرندرة المشروطة.',
      'إدارة حالة التطبيق باستخدام React State وخطاف useState لإدارة التفاعل اللحظي.',
      'التعامل مع أحداث المتصفح ونماذج الإدخال والمكونات الموجهة (Controlled Components).',
      'دورة حياة المكونات ومعالجة التأثيرات الجانبية وجلب البيانات عبر useEffect.',
    ],
    skills: ['React.js', 'JSX', 'React Hooks', 'Component Architecture', 'State Management', 'Single Page Applications (SPA)'],
    skillsAr: ['مكتبة React.js', 'بناء واجهات JSX', 'React Hooks', 'معمارية المكونات', 'إدارة حالة الواجهات', 'تطبيقات الصفحة الواحدة SPA'],
    practicalValueEn:
      'Directly underpins modern single-page application (SPA) proposals, interactive dashboards, and scalable front-end client solutions in digital tenders.',
    practicalValueAr:
      'تشكل الركيزة الهندسية لاقتراح وتطوير تطبيقات الصفحة الواحدة (SPAs)، ولوحات التحكم التفاعلية، والمنصات الحديثة في العروض الفنية للمشاريع الرقمية.',
    relevanceProfileEn: [
      'Single Page Application (SPA) Technical Proposals',
      'Interactive Dashboard & Frontend Architecture Design',
      'Tender QA for Modern JavaScript Framework Requirements',
      'Web Application Engineering Capabilities',
    ],
    relevanceProfileAr: [
      'صياغة العروض الفنية لتطبيقات الويب الحديثة ولوحات التحكم',
      'تصميم المعمارية البرمجية للواجهات التفاعلية المستقلة',
      'مطابقة شروط كراسات المناقصات لتقنيات جافاسكريبت المتقدمة',
      'بناء الحلول البرمجية عالية السرعة والأداء',
    ],
    summaryEn:
      'Official Meta certification validating component-driven React engineering, modern hooks, and state management.',
    summaryAr:
      'شهادة معتمدة من ميتا تثبت الاحترافية في تطوير تطبيقات الويب التفاعلية باستخدام مكتبة React والمعايير الهندسية المعاصرة.',
    programCoverage: [
      'Component architecture, JSX, and Props data passing',
      'State management, useState, and interactive user inputs',
      'Effects, hooks, and single-page web applications',
    ],
    featured: true,
    status: 'published',
  },

  // 13. Programming with JavaScript (Meta)
  {
    id: 'meta-programming-with-javascript',
    title: 'Programming with JavaScript',
    titleAr: 'البرمجة المتقدمة بلغة جافاسكريبت (Meta)',
    issuer: 'Meta',
    issuerAr: 'شركة ميتا (Meta)',
    provider: 'Coursera',
    providerAr: 'كورسيرا',
    trainingProvider: 'Meta Front-End & Back-End Tracks',
    recipientName: 'Youssef Syed Ghamry Syed',
    issueDate: 'October 27, 2022',
    issueDateAr: '27 أكتوبر 2022',
    credentialId: 'TWNLV6HMS5SF',
    verificationUrl: 'https://coursera.org/verify/TWNLV6HMS5SF',
    duration: 'Approx. 42 Hours (Advanced Comprehensive Track)',
    durationAr: 'حوالي 42 ساعة تدريبية (مسار برمجي شامل ومكثف)',
    image: '/assets/certificates/programming_with_javascript.png',
    category: 'Web & Front-End Development',
    categoryAr: 'تطوير الويب والواجهات الأمامية',
    certificateType: 'Meta Professional Course Certificate',
    certificateTypeAr: 'شهادة مساق مهني معتمد من ميتا',
    overviewEn:
      'Comprehensive software programming course authorized by Meta, covering modern JavaScript algorithms, functional programming, object-oriented concepts, DOM manipulation, asynchronous operations, and automated unit testing using Jest.',
    overviewAr:
      'مساق برمجي متقدم ومعتمد من ميتا يغطي خوارزميات لغة جافاسكريبت الحديثة، البرمجة الوظيفية والكائنية (OOP)، التحكم في شجرة العناصر DOM، البرمجة غير المتزامنة، والاختبارات الآلية للوحدات البرمجية باستخدام Jest.',
    learnedEn: [
      'Core programming paradigms: variables, data types, loops, conditionals, and error handling.',
      'Functional programming: pure functions, higher-order functions, map/filter/reduce arrays.',
      'Object-Oriented Programming (OOP): classes, inheritance, encapsulation, and prototypes.',
      'Browser DOM manipulation, event listeners, and asynchronous JavaScript (Promises, async/await).',
      'Automated software testing and test-driven development (TDD) using the Jest framework.',
    ],
    learnedAr: [
      'مبادئ البرمجة الأساسية: المتغيرات، أنواع البيانات، الحلقات التكرارية، الجمل الشرطية، وإدارة الاستثناءات.',
      'البرمجة الوظيفية: الدوال النقية، دوال الرتبة العليا، ومعالجة المصفوفات عبر map و filter و reduce.',
      'البرمجة كائنية التوجه (OOP): الفئات Classes، الوراثة Inheritance، التغليف، والنماذج الأولية Prototypes.',
      'التحكم في شجرة عناصر المتصفح DOM، ومستمعات الأحداث، والبرمجة غير المتزامنة (Promises, async/await).',
      'كتابة الاختبارات البرمجية الآلية والتطوير الموجه بالاختبارات (TDD) باستخدام إطار عمل Jest.',
    ],
    skills: ['JavaScript (ES6+)', 'Object-Oriented Programming', 'Functional Programming', 'DOM Manipulation', 'Asynchronous JS', 'Unit Testing (Jest)'],
    skillsAr: ['لغة جافاسكريبت الحديثة', 'البرمجة كائنية التوجه OOP', 'البرمجة الوظيفية', 'التحكم في DOM', 'البرمجة غير المتزامنة', 'اختبار البرمجيات Jest'],
    practicalValueEn:
      'Forms the foundation of robust full-stack software logic, client-side business rule execution, interactive web widgets, and automated QA unit test plans in technical bids.',
    practicalValueAr:
      'تشكل الأساس البرمجي الصلب لمنطق التطبيقات المتكاملة، وتطبيق قواعد العمل البرمجية، وتصميم خطط الاختبارات الآلية (Unit Testing) في كراسات المواصفات.',
    relevanceProfileEn: [
      'Software Proposal Writing & Development Methodology',
      'Testing & QA Framework Planning in Technical Bids',
      'Full-Stack Web Engineering Execution',
    ],
    relevanceProfileAr: [
      'صياغة منهجيات التطوير البرمجي في العروض الفنية',
      'إعداد خطط الاختبارات الآلية وضمان جودة الكود البرمجي',
      'التطوير الهندسي المتكامل للمواقع والتطبيقات',
    ],
    summaryEn:
      'In-depth Meta credential confirming mastery over core JavaScript logic, modern ES6+ features, and automated unit testing.',
    summaryAr:
      'اعتماد رسمي من ميتا يؤكد التمكن من منطق لغة جافاسكريبت المتقدم، البرمجة كائنية التوجه، والاختبارات الآلية.',
    programCoverage: [
      'JavaScript syntax, data types, and programmatic logic',
      'OOP, functional programming, and asynchronous operations',
      'DOM interaction and automated unit testing with Jest',
    ],
    featured: true,
    status: 'published',
  },

  // 14. HTML and CSS in depth (Meta)
  {
    id: 'meta-html-css-depth',
    title: 'HTML and CSS in depth',
    titleAr: 'تقنيات HTML و CSS المتقدمة وتنسيق صفحات الويب (Meta)',
    issuer: 'Meta',
    issuerAr: 'شركة ميتا (Meta)',
    provider: 'Coursera',
    providerAr: 'كورسيرا',
    trainingProvider: 'Meta Front-End Developer Track',
    recipientName: 'Youssef Syed Ghamry Syed',
    issueDate: 'October 25, 2022',
    issueDateAr: '25 أكتوبر 2022',
    credentialId: 'GWSH6K6YX25J',
    verificationUrl: 'https://coursera.org/verify/GWSH6K6YX25J',
    duration: 'Approx. 28 Hours',
    durationAr: 'حوالي 28 ساعة تدريبية',
    image: '/assets/certificates/html_and_css_in_depth.png',
    category: 'Web & Front-End Development',
    categoryAr: 'تطوير الويب والواجهات الأمامية',
    certificateType: 'Meta Professional Course Certificate',
    certificateTypeAr: 'شهادة مساق مهني معتمد من ميتا',
    overviewEn:
      'Advanced front-end layout and styling certification authorized by Meta, covering complex CSS Grid and Flexbox layouts, animations, transitions, CSS variables, responsive typography, and cross-browser accessibility compliance.',
    overviewAr:
      'شهادة متقدمة في تنسيق وتخطيط الواجهات الأمامية معتمدة من ميتا، تغطي تقنيات التخطيط المعقدة بشبكات CSS Grid و Flexbox، التحريكات والانتقالات، المتغيرات المخصصة، وتوافق معايير الوصول العالمية.',
    learnedEn: [
      'Advanced layout systems: multi-dimensional CSS Grid layouts and fluid Flexbox containers.',
      'CSS animations, keyframes, transitions, and hardware-accelerated transforms.',
      'CSS custom properties (variables) for theme management and design token systems.',
      'Advanced responsive design: responsive images (srcset, picture), fluid typography, and container queries.',
      'Semantic HTML forms, validation attributes, and accessibility (ARIA roles).',
    ],
    learnedAr: [
      'أنظمة التخطيط المتقدمة: شبكات CSS Grid متعددة الأبعاد وحاويات Flexbox المرنة.',
      'التحريكات البصرية والانتقالات السلسة والتحويلات ثلاثية الأبعاد المدعومة عتادياً.',
      'المتغيرات المخصصة في CSS لإدارة السمات وأنظمة التصميم المتكاملة.',
      'التصميم المتجاوب المتقدم: الصور المتجاوبة (srcset)، والنصوص المتدفقة، واستعلامات الحاويات.',
      'نماذج الإدخال المتقدمة، وخصائص التحقق التلقائي، ودعم قارئات الشاشة (ARIA).',
    ],
    skills: ['Advanced CSS3', 'CSS Grid', 'CSS Animations', 'Design Tokens', 'Web Accessibility (ARIA)', 'Performance Optimization'],
    skillsAr: ['تقنيات CSS3 المتقدمة', 'شبكات CSS Grid', 'تحريكات CSS', 'رموز التصميم والمتغيرات', 'إمكانية الوصول ARIA'],
    practicalValueEn:
      'Enables the precise delivery of pixel-perfect corporate portals, luxury dark-mode interfaces, and high-performance user experiences aligned with international standards.',
    practicalValueAr:
      'تمكن من التنفيذ الدقيق للبوابات الإلكترونية الراقية، والواجهات الفاخرة متعددة السمات، والتجارب الرقمية عالية الأداء المطابقة للمعايير الدولية.',
    relevanceProfileEn: [
      'Front-End Web Engineering & Luxury Portal Development',
      'Technical SEO (Core Web Vitals & Layout Shift Prevention)',
      'Tender QA on Cross-Browser & Multi-Device Compatibility',
    ],
    relevanceProfileAr: [
      'هندسة الواجهات الأمامية للبوابات والمنصات الكبرى',
      'السيو التقني (تحسين مؤشرات أداء الويب Core Web Vitals وتفادي الإزاحة البصرية)',
      'ضبط الجودة لمطابقة التوافقية عبر الأجهزة والمتصفحات',
    ],
    summaryEn:
      'Advanced Meta credential in high-fidelity layout engineering, CSS Grid, animation pipelines, and accessible semantic structures.',
    summaryAr:
      'اعتماد متقدم من ميتا في هندسة التخطيطات البصرية المعقدة، والتحريكات السلسة، والهيكلية الدلالية الميسرة.',
    programCoverage: [
      'Multi-column Grid layouts, Flexbox mechanics, and responsiveness',
      'CSS transitions, keyframe animations, and custom property design systems',
      'HTML forms, ARIA accessibility, and UI performance engineering',
    ],
    featured: false,
    status: 'published',
  },

  // 15. Programming in Python (Meta)
  {
    id: 'meta-programming-in-python',
    title: 'Programming in Python',
    titleAr: 'البرمجة وهياكل البيانات بلغة بايثون (Meta Python)',
    issuer: 'Meta',
    issuerAr: 'شركة ميتا (Meta)',
    provider: 'Coursera',
    providerAr: 'كورسيرا',
    trainingProvider: 'Meta Back-End Developer Track',
    recipientName: 'Youssef Syed Ghamry Syed',
    issueDate: 'October 30, 2022',
    issueDateAr: '30 أكتوبر 2022',
    credentialId: '98JJ45ZDQL3Y',
    verificationUrl: 'https://coursera.org/verify/98JJ45ZDQL3Y',
    duration: 'Approx. 40 Hours (Comprehensive Developer Course)',
    durationAr: 'حوالي 40 ساعة تدريبية (مسار برمجي مكثف)',
    image: '/assets/certificates/programming_in_python.png',
    category: 'Software Engineering & Programming',
    categoryAr: 'هندسة البرمجيات والبرمجة',
    certificateType: 'Meta Professional Course Certificate',
    certificateTypeAr: 'شهادة مساق مهني معتمد من ميتا',
    overviewEn:
      'Comprehensive Python software engineering certification authorized by Meta, covering algorithmic problem solving, built-in data structures, object-oriented programming (OOP), file manipulation, and automated testing with pytest.',
    overviewAr:
      'شهادة معتمدة في هندسة البرمجيات بلغة بايثون من ميتا، تغطي الحل الخوارزمي للمسائل، هياكل البيانات الأساسية والمتقدمة، البرمجة كائنية التوجه (OOP)، معالجة الملفات والبيانات، وكتابة الاختبارات الآلية باستخدام pytest.',
    learnedEn: [
      'Python programming syntax, control flow, functions, and module management.',
      'Core data structures: lists, tuples, sets, dictionaries, and comprehension techniques.',
      'Object-Oriented Programming (OOP) in Python: classes, methods, inheritance, and polymorphism.',
      'File handling (reading, writing, parsing structured data), and exception handling.',
      'Automated testing with pytest and writing reproducible unit test suites.',
    ],
    learnedAr: [
      'بناء البرامج بلغة بايثون، والتحكم في مسار التنفيذ، والدوال، وإدارة الحزم والمكتبات.',
      'هياكل البيانات الأساسية: القوائم (Lists)، الصفوف (Tuples)، المجموعات (Sets)، والقواميس (Dictionaries).',
      'البرمجة كائنية التوجه (OOP): الفئات والوراثة وتعدد الأوجه والكبسلة.',
      'التعامل مع أنظمة الملفات والقراءة والكتابة ومعالجة صيغ البيانات ومعالجة الأخطاء.',
      'كتابة وتطبيق الاختبارات الآلية للوحدات البرمجية باستخدام مكتبة pytest.',
    ],
    skills: ['Python 3', 'Data Structures', 'OOP', 'Pytest Testing', 'File I/O', 'Algorithm Design', 'Software Development'],
    skillsAr: ['لغة بايثون 3', 'هياكل البيانات', 'البرمجة كائنية التوجه', 'اختبارات pytest الآلية', 'تصميم الخوارزميات', 'هندسة البرمجيات'],
    practicalValueEn:
      'Enables technical evaluation of Python-based back-end services, data analysis scripts, automated document processing, and algorithm specifications in tender solutions.',
    practicalValueAr:
      'تمكن من التقييم الفني للخدمات الخلفية المبنية بلغة بايثون، وبرمجيات تحليل البيانات، والتحليل الآلي للمستندات والبيانات في مشاريع المناقصات.',
    relevanceProfileEn: [
      'Software Development & Back-End Solutions Architecture',
      'Automated Data Processing & Tender Analytics',
      'Technical Proposal Writing for Custom Software Bids',
    ],
    relevanceProfileAr: [
      'هندسة البرمجيات وتصميم الحلول الخلفية للأنظمة',
      'أتمتة معالجة البيانات وتحليل المناقصات',
      'صياغة العروض الفنية لمشاريع تطوير البرمجيات المخصصة',
    ],
    summaryEn:
      'Comprehensive Meta certification proving mastery of Python syntax, object-oriented design, data structures, and unit testing.',
    summaryAr:
      'اعتماد تخصصي من ميتا يثبت التمكن من لغة بايثون وهياكل البيانات وتصميم البرمجيات كائنية التوجه واختبارها.',
    programCoverage: [
      'Python programming syntax, functions, and data structures',
      'Object-Oriented Programming, classes, and inheritance',
      'Error handling, file I/O operations, and unit testing with pytest',
    ],
    featured: true,
    status: 'published',
  },

  // 16. Introduction to building Web Pages using HTML5 and CSS3 (NIIT)
  {
    id: 'niit-html5-css3-webpages',
    title: 'Introduction to building Web Pages using HTML5 and CSS3',
    titleAr: 'بناء وتطوير صفحات الويب التفاعلية بتقنيات HTML5 و CSS3 (NIIT)',
    issuer: 'NIIT',
    issuerAr: 'المعهد الوطني لتكنولوجيا المعلومات (NIIT)',
    provider: 'Coursera',
    providerAr: 'كورسيرا',
    trainingProvider: 'NIIT Professional Development',
    recipientName: 'Youssef Syed Ghamry Syed',
    issueDate: 'June 19, 2023',
    issueDateAr: '19 يونيو 2023',
    credentialId: 'CDB32DLEFXZ9',
    verificationUrl: 'https://coursera.org/verify/CDB32DLEFXZ9',
    duration: 'Approx. 12 Hours',
    durationAr: 'حوالي 12 ساعة تدريبية',
    image: '/assets/certificates/introduction_to_building_web_pages_using_html5_and_css3.png',
    category: 'Web & Front-End Development',
    categoryAr: 'تطوير الويب والواجهات الأمامية',
    certificateType: 'Professional Course Certificate',
    certificateTypeAr: 'شهادة مساق تخصصي معتمد',
    overviewEn:
      'Practical web development course authorized by global IT talent developer NIIT, focusing on building standards-compliant web pages, semantic page layout, CSS selectors, typography, and interactive forms.',
    overviewAr:
      'مساق عملي في تطوير الويب معتمد من المعهد الوطني لتكنولوجيا المعلومات (NIIT)، يركز على بناء صفحات ويب مطابقة للمعايير القياسية، التخطيط الدلالي للصفحات، محددات CSS، وتنسيق النماذج التفاعلية.',
    learnedEn: [
      'Standard web architecture: HTML elements, attributes, headings, lists, and tables.',
      'CSS rules: selectors, class and ID hierarchy, box model, and visual styling.',
      'Structuring interactive forms: input types, labels, fieldsets, and validation.',
      'Web typography: font stacks, web fonts, and readable typographical scales.',
      'Page deployment and cross-browser markup validation.',
    ],
    learnedAr: [
      'المعمارية القياسية لصفحات الويب: وسوم HTML، العناوين، القوائم، والجداول المعيارية.',
      'قواعد CSS: المحددات، هرمية الفئات والمعرفات، نموذج الصندوق (Box Model)، والتنسيق المرئي.',
      'بناء نماذج الإدخال التفاعلية: حقول الإدخال، التسميات التوضيحية، والتحقق المبدئي.',
      'الخطوط الرقمية: اختيار الخطوط وقواعد القراءة المريحة على الشاشات.',
      'نشر الصفحات والتحقق من صحة الكود ومطابقته للمعايير القياسية W3C.',
    ],
    skills: ['HTML5', 'CSS3', 'Web Page Authoring', 'Form Design', 'Web Standards'],
    skillsAr: ['تطوير HTML5', 'تنسيقات CSS3', 'هيكلة صفحات الويب', 'تصميم النماذج', 'معايير W3C القياسية'],
    practicalValueEn:
      'Solidifies foundational markup compliance and provides reliable basis for front-end interface quality checks in corporate website projects.',
    practicalValueAr:
      'يدعم التحقق من سلامة البنية البرمجية للصفحات وتطبيق معايير ضبط الجودة لواجهات المواقع المؤسسية.',
    relevanceProfileEn: [
      'Web Development & Corporate Portal Construction',
      'Markup Standards & Cross-Browser Verification',
      'Technical SEO Structure Optimization',
    ],
    relevanceProfileAr: [
      'تطوير وبناء المواقع الإلكترونية للشركات',
      'مطابقة المعايير القياسية وتوافق المتصفحات',
      'تحسين البنية الهيكلية لمحركات البحث',
    ],
    summaryEn:
      'NIIT technical credential verifying practical competence in web page authoring, CSS styling, and standard web page architecture.',
    summaryAr:
      'شهادة معتمدة من NIIT تؤكد الكفاءة العملية في بناء صفحات الويب، وتنسيق الأنماط، ومطابقة المعايير القياسية.',
    programCoverage: [
      'HTML5 page structure, headings, lists, and tables',
      'CSS styling, the box model, and web typography',
      'Interactive form design and standards validation',
    ],
    featured: false,
    status: 'published',
  },

  // 17. Create a Website Using Wordpress: Free Hosting & Sub-domain (Coursera Project Network)
  {
    id: 'coursera-wordpress-free-hosting',
    title: 'Create a Website Using Wordpress: Free Hosting & Sub-domain',
    titleAr: 'إنشاء وإطلاق موقع ووردبريس متكامل وتجهيز الاستضافة والنطاق',
    issuer: 'Coursera Project Network',
    issuerAr: 'شبكة مشاريع كورسيرا الإرشادية',
    provider: 'Coursera',
    providerAr: 'كورسيرا',
    trainingProvider: 'Coursera Project Network Guided Projects',
    recipientName: 'Youssef Syed Ghamry Syed',
    issueDate: 'October 26, 2022',
    issueDateAr: '26 أكتوبر 2022',
    credentialId: 'GCKEKGSWUTT2',
    verificationUrl: 'https://coursera.org/verify/GCKEKGSWUTT2',
    duration: 'Approx. 2 Hours (Hands-on Guided Project)',
    durationAr: 'ساعتان تدريبيتان (مشروع عملي تطبيقي موجه)',
    image: '/assets/certificates/create_a_website_using_wordpress_free_hosting___sub-domain.png',
    category: 'WordPress & CMS Solutions',
    categoryAr: 'ووردبريس وإدارة المحتوى',
    certificateType: 'Guided Project Certificate',
    certificateTypeAr: 'شهادة مشروع عملي موجه',
    overviewEn:
      'Hands-on project authorized by Coursera Project Network focusing on full deployment of WordPress content management systems: hosting configuration, sub-domain binding, theme customization, and essential security plugins.',
    overviewAr:
      'مشروع عملي موجه ومعتمد من شبكة مشاريع كورسيرا يركز على الإطلاق الكامل لنظام إدارة المحتوى ووردبريس: تهيئة بيئة الاستضافة، ربط النطاقات الفرعية، تخصيص القوالب، وتثبيت إضافات الأمان الأساسية.',
    learnedEn: [
      'Setting up WordPress on hosting servers and configuring database credentials.',
      'Configuring DNS settings, sub-domains, and SSL certificates.',
      'WordPress dashboard navigation, settings, permalinks, and page creation.',
      'Theme selection, Gutenberg block editor customization, and mobile-friendly styling.',
      'Essential plugin integration for performance, forms, and security.',
    ],
    learnedAr: [
      'تنصيب ووردبريس على خوادم الاستضافة وتهيئة إعدادات الاتصال بقواعد البيانات.',
      'ضبط إعدادات النطاق DNS، وربط النطاقات الفرعية، وتفعيل شهادات التشفير SSL.',
      'إدارة لوحة تحكم ووردبريس، وضبط الروابط الدائمة (Permalinks)، وبناء الصفحات.',
      'تخصيص القوالب، واستخدام محرر الكتل Gutenberg، وتنسيق العناصر للأجهزة الذكية.',
      'تثبيت وتكامل الإضافات الجوهرية للأمان، والنماذج، وتسريع الأداء.',
    ],
    skills: ['WordPress CMS', 'Web Hosting Setup', 'DNS & Sub-domains', 'Gutenberg Blocks', 'Plugin Integration'],
    skillsAr: ['نظام ووردبريس CMS', 'إعداد الاستضافات', 'إدارة النطاقات DNS', 'محرر Gutenberg', 'تكامل إضافات ووردبريس'],
    practicalValueEn:
      'Enables rapid deployment and accurate cost modeling for CMS portals, corporate websites, and content publishing platforms in commercial proposals.',
    practicalValueAr:
      'تمكن من الإطلاق السريع وتقدير التكاليف الدقيقة لمنصات إدارة المحتوى، ومواقع الشركات، وبوابات النشر في العروض التجارية والفنية.',
    relevanceProfileEn: [
      'WordPress Portal Engineering & Fast Deployment',
      'Hosting & Domain Architecture Planning',
      'Content Management Proposals for SMEs & Organizations',
    ],
    relevanceProfileAr: [
      'هندسة مواقع ووردبريس والنشر الرقمي السريع',
      'تخطيط الاستضافات وربط النطاقات في العروض الفنية',
      'عروض نظم إدارة المحتوى للمؤسسات والشركات',
    ],
    summaryEn:
      'Coursera project credential confirming hands-on competence in WordPress server installation, domain linking, and turnkey CMS setup.',
    summaryAr:
      'شهادة مشروع عملي من كورسيرا تثبت القدرة التطبيقية على تثبيت ووردبريس، وربط النطاقات، وإطلاق المواقع المتكاملة.',
    programCoverage: [
      'WordPress server installation and database connection',
      'Domain binding, SSL setup, and permalink configuration',
      'Theme customization, Gutenberg blocks, and essential plugins',
    ],
    featured: false,
    status: 'published',
  },

  // 18. Computer Network Fundamentals (Mahara-Tech ITI)
  {
    id: 'mahara-tech-network-fundamentals',
    title: 'Computer Network Fundamentals',
    titleAr: 'أساسيات وهندسة شبكات الحاسب الآلي (Mahara-Tech ITI)',
    issuer: 'Mahara-Tech (Information Technology Institute - ITI)',
    issuerAr: 'معهد تكنولوجيا المعلومات (ITI) - منصة مهارة تك',
    provider: 'Information Technology Institute (ITI)',
    providerAr: 'معهد تكنولوجيا المعلومات - وزارة الاتصالات وتكنولوجيا المعلومات بمصر',
    trainingProvider: 'Information Technology Institute Platform (Ministry of Communications and Information Technology, Egypt)',
    recipientName: 'Youssef Sayed ghamry',
    issueDate: 'July 5, 2022',
    issueDateAr: '5 يوليو 2022',
    credentialId: 'xpQlah4oUf',
    verificationUrl: 'https://mahara-tech.gov.eg/',
    duration: '1 Hour (Intensive Specialized Module)',
    durationAr: 'ساعة تدريبية مكثفة (وحدة تخصصية معتمدة)',
    image: '/assets/certificates/computer_network_fundamentals.png',
    category: 'Cloud & IT Infrastructure',
    categoryAr: 'الحوسبة السحابية والبنية التحتية',
    certificateType: 'Governmental Institute Certificate',
    certificateTypeAr: 'شهادة إتمام معتمدة من معهد تكنولوجيا المعلومات ITI',
    overviewEn:
      'Official completion certificate issued by the Information Technology Institute (ITI) under the Ministry of Communications and Information Technology Egypt, validating essential principles of computer networking, topologies, and data communication.',
    overviewAr:
      'شهادة إتمام رسمية صادرة من معهد تكنولوجيا المعلومات (ITI) التابع لوزارة الاتصالات وتكنولوجيا المعلومات بمصر، تثبت استيعاب المبادئ الجوهرية لشبكات الحاسب، طبولوجيا الشبكات، ونقل البيانات.',
    learnedEn: [
      'Fundamentals of computer networks: LAN, WAN, MAN, and PAN architectures.',
      'Network topologies: star, bus, ring, and hybrid configurations.',
      'Networking hardware: routers, switches, access points, cables, and patch panels.',
      'Introduction to packet switching and IP addressing principles.',
      'Network security essentials: firewalls and basic perimeter defenses.',
    ],
    learnedAr: [
      'أسس شبكات الحاسب الآلي وتصنيفاتها: الشبكات المحلية LAN، الواسعة WAN، وشبكات المدن MAN.',
      'طبولوجيا وتخطيطات الشبكات: النجمية (Star)، الخطية (Bus)، الحلقية، والهجينة.',
      'أجهزة ومكونات الشبكات: الموجهات (Routers)، المحولات (Switches)، ونقاط الوصول، ووسائط التوصيل.',
      'مبادئ تبديل الحزم (Packet Switching) وأنظمة العنونة الرقمية.',
      'أساسيات حماية الشبكات وجدران الحماية الرقمية لمنع الاختراق.',
    ],
    skills: ['Computer Networks', 'LAN/WAN', 'Network Topologies', 'Routers & Switches', 'Network Fundamentals'],
    skillsAr: ['شبكات الحاسب الآلي', 'الشبكات المحلية والواسعة', 'طبولوجيا الشبكات', 'أجهزة التوجيه والتحويل', 'أساسيات الاتصالات'],
    practicalValueEn:
      'Verifies fundamental comprehension of corporate IT networking setups when auditing technical tender specifications and infrastructure requirements.',
    practicalValueAr:
      'تثبت الإلمام بالبنية الأساسية للشبكات المؤسسية عند فحص كراسات الشروط التقنية لمشاريع البنية التحتية وربط المكاتب.',
    relevanceProfileEn: [
      'IT Infrastructure Proposal Review & Scoping',
      'Tender QA on Hardware & Networking Requirements',
      'Enterprise Digital Connectivity Solutions',
    ],
    relevanceProfileAr: [
      'مراجعة وتدقيق مواصفات الشبكات في العروض الفنية',
      'ضبط الجودة لمتطلبات التجهيزات العتادية والشبكية',
      'توصيف حلول الربط الرقمي للمنشآت والمكاتب',
    ],
    summaryEn:
      'Government-accredited ITI certificate validating core networking fundamentals, topology concepts, and communication hardware.',
    summaryAr:
      'شهادة حكومية معتمدة من معهد تكنولوجيا المعلومات ITI تؤكد استيعاب أساسيات شبكات الحاسب ومعدات الربط الرقمي.',
    programCoverage: [
      'LAN/WAN classifications, transmission media, and topologies',
      'Active networking equipment: routers, switches, and bridges',
      'Basic IP addressing and network perimeter security concepts',
    ],
    featured: false,
    status: 'published',
  },

  // 19. Modern JavaScript: ES6 and beyond (Mahara-Tech ITI)
  {
    id: 'mahara-tech-es6-beyond',
    title: 'Modern JavaScript: ES6 and beyond',
    titleAr: 'جافاسكريبت الحديثة: معايير ES6 وما بعدها (Mahara-Tech ITI)',
    issuer: 'Mahara-Tech (Information Technology Institute - ITI)',
    issuerAr: 'معهد تكنولوجيا المعلومات (ITI) - منصة مهارة تك',
    provider: 'Information Technology Institute (ITI)',
    providerAr: 'معهد تكنولوجيا المعلومات - وزارة الاتصالات وتكنولوجيا المعلومات بمصر',
    trainingProvider: 'Information Technology Institute Platform',
    recipientName: 'Youssef Sayed ghamry',
    issueDate: 'March 12, 2023',
    issueDateAr: '12 مارس 2023',
    credentialId: 'b6J42yG0qG',
    verificationUrl: 'https://mahara-tech.gov.eg/',
    duration: '3 Hours, 10 Minutes',
    durationAr: '3 ساعات و10 دقائق تدريبية',
    image: '/assets/certificates/es6.png',
    category: 'Web & Front-End Development',
    categoryAr: 'تطوير الويب والواجهات الأمامية',
    certificateType: 'Governmental Institute Certificate',
    certificateTypeAr: 'شهادة إتمام معتمدة من معهد تكنولوجيا المعلومات ITI',
    overviewEn:
      'Advanced front-end JavaScript certification from the Information Technology Institute (ITI) focusing on ECMAScript 6+ innovations: arrow functions, destructuring, promises, classes, modules, and modern asynchronous paradigms.',
    overviewAr:
      'شهادة تخصصية متقدمة في لغة جافاسكريبت من معهد تكنولوجيا المعلومات (ITI) تركز على ابتكارات معايير ECMAScript 6+: الدوال السهمية، تفكيك الكائنات والمصفوفات، الفئات، إدارة الحزم Modules، والبرمجة غير المتزامنة.',
    learnedEn: [
      'Block-scoped variable declarations (let and const) and lexical scoping.',
      'Arrow functions, concise object literals, and enhanced parameter handling (default, rest, spread).',
      'Destructuring assignments for objects and arrays.',
      'JavaScript classes, inheritance, super calls, and static methods.',
      'Asynchronous programming with native Promises, Promise.all, and async/await syntax.',
    ],
    learnedAr: [
      'المتغيرات ذات النطاق الكتلي (let و const) ومفاهيم النطاق المعجمي (Lexical Scoping).',
      'الدوال السهمية (Arrow Functions)، والتعامل المتقدم مع المعاملات (Default, Rest, Spread Operators).',
      'تفكيك الكائنات والمصفوفات (Destructuring) لتبسيط استخراج البيانات.',
      'فئات جافاسكريبت الحديثة، والوراثة البرمجية، والدوال الساكنة.',
      'البرمجة غير المتزامنة المتقدمة باستخدام وعود جافاسكريبت (Promises) وكلمات async/await.',
    ],
    skills: ['JavaScript ES6+', 'Promises & Async/Await', 'Modern JavaScript Syntax', 'Modular JS', 'Front-End Engineering'],
    skillsAr: ['معايير جافاسكريبت ES6+', 'البرمجة غير المتزامنة Async/Await', 'الصياغة البرمجية الحديثة', 'تجزئة وتضمين الوحدات', 'هندسة الواجهات'],
    practicalValueEn:
      'Ensures modern, maintainable code implementation in web portals and validates modern framework prerequisites in software proposals.',
    practicalValueAr:
      'تضمن كتابة كود برمجي حديث وقابل للصيانة للبوابات الإلكترونية، وتدعم التحقق من اشتراطات أطر العمل المعاصرة في العروض الفنية.',
    relevanceProfileEn: [
      'Front-End Architecture & Modern Web Engineering',
      'Software Proposal Writing for Interactive Platforms',
      'Code Quality Assurance & Standards Verification',
    ],
    relevanceProfileAr: [
      'هندسة الواجهات الأمامية بالمعايير الحديثة',
      'صياغة العروض الفنية للمنصات التفاعلية',
      'ضبط جودة الكود البرمجي ومطابقة معايير ES6+',
    ],
    summaryEn:
      'ITI certificate certifying proficiency in modern ECMAScript standards, asynchronous control flows, and clean front-end patterns.',
    summaryAr:
      'شهادة معتمدة من ITI تؤكد إتقان معايير جافاسكريبت الحديثة، ومعالجة العمليات غير المتزامنة، وبناء الكود عالي الجودة.',
    programCoverage: [
      'ES6 syntax enhancements: let/const, arrow functions, destructuring',
      'Classes, inheritance, and modular code architecture',
      'Promises, async/await, and modern asynchronous control flow',
    ],
    featured: false,
    status: 'published',
  },

  // 20. Learn HTML & CSS (Mahara-Tech ITI)
  {
    id: 'mahara-tech-html-css',
    title: 'Learn HTML & CSS',
    titleAr: 'إتقان لغات بناء وهيكلة صفحات الويب HTML و CSS (Mahara-Tech ITI)',
    issuer: 'Mahara-Tech (Information Technology Institute - ITI)',
    issuerAr: 'معهد تكنولوجيا المعلومات (ITI) - منصة مهارة تك',
    provider: 'Information Technology Institute (ITI)',
    providerAr: 'معهد تكنولوجيا المعلومات - وزارة الاتصالات وتكنولوجيا المعلومات بمصر',
    trainingProvider: 'Information Technology Institute Platform',
    recipientName: 'Youssef Sayed ghamry',
    issueDate: 'July 3, 2022',
    issueDateAr: '3 يوليو 2022',
    credentialId: 'da3XdVnvwc',
    verificationUrl: 'https://mahara-tech.gov.eg/',
    duration: '7 Hours, 42 Minutes',
    durationAr: '7 ساعات و42 دقيقة تدريبية',
    image: '/assets/certificates/html___css.png',
    category: 'Web & Front-End Development',
    categoryAr: 'تطوير الويب والواجهات الأمامية',
    certificateType: 'Governmental Institute Certificate',
    certificateTypeAr: 'شهادة إتمام معتمدة من معهد تكنولوجيا المعلومات ITI',
    overviewEn:
      'Comprehensive web foundation certification from the Information Technology Institute (ITI), covering semantic HTML layout, CSS cascading rules, positioning, responsive layouts, and cross-browser styling.',
    overviewAr:
      'شهادة تأسيسية شاملة في تطوير الويب من معهد تكنولوجيا المعلومات (ITI)، تغطي الهيكلة الدلالية لصفحات الويب بـ HTML، قواعد تتابع CSS، تموضع العناصر، والتصميم المتجاوب مع المتصفحات.',
    learnedEn: [
      'Comprehensive HTML document structure, metadata, typography, and links.',
      'CSS selectors, styling rules, box model dimensions, and margin/padding mechanics.',
      'CSS positioning models: static, relative, absolute, fixed, and sticky.',
      'Multi-column layouts with floating elements and Flexbox basics.',
      'Form elements, multimedia embedding (video/audio), and cross-browser compatibility.',
    ],
    learnedAr: [
      'الهيكل المتكامل لوثائق HTML، البيانات الوصفية، تنسيق النصوص، والروابط التشعبية.',
      'محددات CSS، قواعد التنسيق، أبعاد نموذج الصندوق (Box Model)، والهوامش الداخلية والخارجية.',
      'نماذج تموضع العناصر: النسبي، والمطلق، والثابت، والملتصق (Sticky Positioning).',
      'تخطيطات الأعمدة المتعددة وأساسيات تصميم الحاويات المرنة Flexbox.',
      'حقول النماذج وتضمين الوسائط المتعددة وفحص التوافق عبر مختلف متصفحات الإنترنت.',
    ],
    skills: ['HTML', 'CSS', 'Web Layouts', 'Box Model', 'Responsive Web', 'Cross-Browser Styling'],
    skillsAr: ['هيكلة HTML', 'تنسيق CSS', 'تخطيط صفحات الويب', 'نموذج الصندوق', 'التصميم المتجاوب', 'توافقية المتصفحات'],
    practicalValueEn:
      'Provides foundational expertise for auditing web development requirements, website revamp bids, and responsive front-end quality standards.',
    practicalValueAr:
      'توفر الأساس المعرفي لفحص متطلبات تطوير المواقع، وتحديث المنصات الرقمية، وضمان جودة الواجهات في كراسات الشروط.',
    relevanceProfileEn: [
      'Website Revamp & Corporate Portal Proposals',
      'Front-End Web Development Execution',
      'Tender QA on Web Standards & Accessibility',
    ],
    relevanceProfileAr: [
      'عروض تطوير وتحديث بوابات المنشآت',
      'تنفيذ أعمال تطوير الواجهات الأمامية',
      'ضبط الجودة لمطابقة معايير الويب القياسية',
    ],
    summaryEn:
      'ITI credential certifying comprehensive hands-on competence in HTML page structures and CSS styling foundations.',
    summaryAr:
      'شهادة معتمدة من ITI تثبت الإتقان العملي والشامل لهيكلة صفحات الويب وتنسيقها باحترافية.',
    programCoverage: [
      'HTML document tree, semantic tags, and forms',
      'CSS styling rules, cascading order, and the box model',
      'Positioning, Flexbox mechanics, and responsive styling',
    ],
    featured: false,
    status: 'published',
  },

  // 21. Javascript Core Concepts (Mahara-Tech ITI)
  {
    id: 'mahara-tech-javascript',
    title: 'Javascript Core Concepts',
    titleAr: 'أساسيات ومفاهيم لغة جافاسكريبت البرمجية (Mahara-Tech ITI)',
    issuer: 'Mahara-Tech (Information Technology Institute - ITI)',
    issuerAr: 'معهد تكنولوجيا المعلومات (ITI) - منصة مهارة تك',
    provider: 'Information Technology Institute (ITI)',
    providerAr: 'معهد تكنولوجيا المعلومات - وزارة الاتصالات وتكنولوجيا المعلومات بمصر',
    trainingProvider: 'Information Technology Institute Platform',
    recipientName: 'Youssef Sayed ghamry',
    issueDate: 'July 6, 2022',
    issueDateAr: '6 يوليو 2022',
    credentialId: 'sU78rwdYSo',
    verificationUrl: 'https://mahara-tech.gov.eg/',
    duration: '7 Hours',
    durationAr: '7 ساعات تدريبية متخصصة',
    image: '/assets/certificates/js.png',
    category: 'Web & Front-End Development',
    categoryAr: 'تطوير الويب والواجهات الأمامية',
    certificateType: 'Governmental Institute Certificate',
    certificateTypeAr: 'شهادة إتمام معتمدة من معهد تكنولوجيا المعلومات ITI',
    overviewEn:
      'Core programming certification from the Information Technology Institute (ITI), covering client-side JavaScript logic, browser DOM manipulation, event handling, data structures, and dynamic web functionality.',
    overviewAr:
      'شهادة برمجية تخصصية من معهد تكنولوجيا المعلومات (ITI)، تغطي منطق لغة جافاسكريبت، التحكم في عناصر المتصفح DOM، معالجة الأحداث التفاعلية، هياكل البيانات، وإضفاء الديناميكية على صفحات الويب.',
    learnedEn: [
      'JavaScript syntax, variables, operators, conditional execution, and loops.',
      'Function declarations, expressions, parameters, and variable scope.',
      'Manipulating HTML DOM elements dynamically (selection, content alteration, styling).',
      'Event-driven programming: click, submit, change, and key listeners.',
      'Form validation, timing events (setTimeout, setInterval), and browser BOM objects.',
    ],
    learnedAr: [
      'بناء برامج جافاسكريبت، والمتغيرات، والعمليات الرياضية والمنطقية، والحلقات التكرارية.',
      'تعريف الدوال البرمجية، وتمرير المعاملات، ونطاق المتغيرات البرمجية (Scope).',
      'التحكم البرمجي في شجرة عناصر المتصفح DOM وتعديل المحتوى والخصائص والتنسيقات ديناميكياً.',
      'البرمجة الموجهة بالأحداث: الاستماع لنقر الفأرة، وإرسال النماذج، وتغيير الحقول.',
      'التحقق المبدئي من صحة مدخلات النماذج، وأحداث المؤقتات، والتعامل مع كائنات المتصفح BOM.',
    ],
    skills: ['JavaScript', 'DOM Manipulation', 'Event-Driven Programming', 'Client-Side Validation', 'Interactive Web'],
    skillsAr: ['لغة جافاسكريبت', 'التحكم في شجرة DOM', 'البرمجة الموجهة بالأحداث', 'التحقق من صحة النماذج', 'تطوير الويب التفاعلي'],
    practicalValueEn:
      'Essential for building custom interactive web calculators, dynamic bidding tools, and responsive digital interfaces.',
    practicalValueAr:
      'أساسية لبناء الأدوات التفاعلية الرقمية المخصصة، وحاسبات التكلفة البرمجية، والواجهات المتجاوبة لخدمة المنشآت.',
    relevanceProfileEn: [
      'Web Development & Front-End Interactivity',
      'Custom Web Tools Engineering',
      'Software Methodology Quality Assurance',
    ],
    relevanceProfileAr: [
      'تطوير الواجهات التفاعلية لمواقع الويب',
      'هندسة الأدوات البرمجية المخصصة عبر الويب',
      'ضبط جودة المنهجيات الفنية للحلول الرقمية',
    ],
    summaryEn:
      'ITI credential confirming solid foundational skills in client-side JavaScript programming and DOM manipulation.',
    summaryAr:
      'شهادة معتمدة من ITI تثبت الإتقان العملي لمنطق لغة جافاسكريبت والتحكم البرمجي في عناصر المتصفح.',
    programCoverage: [
      'JavaScript core syntax, logic statements, and functions',
      'DOM tree element manipulation and style alterations',
      'Event-driven architecture and client-side form validation',
    ],
    featured: false,
    status: 'published',
  },

  // 22. The Complete Node.js Course (Mahara-Tech ITI)
  {
    id: 'mahara-tech-nodejs-mongodb',
    title: 'The Complete Node.js Course (RESTful Web Services with Node.js, Express, and MongoDB)',
    titleAr: 'المسار المتكامل لتطوير خدمات الويب RESTful باستخدام Node.js و Express و MongoDB (ITI)',
    issuer: 'Mahara-Tech (Information Technology Institute - ITI)',
    issuerAr: 'معهد تكنولوجيا المعلومات (ITI) - منصة مهارة تك',
    provider: 'Information Technology Institute (ITI)',
    providerAr: 'معهد تكنولوجيا المعلومات - وزارة الاتصالات وتكنولوجيا المعلومات بمصر',
    trainingProvider: 'Information Technology Institute Platform',
    recipientName: 'Youssef Sayed ghamry',
    issueDate: 'October 20, 2022',
    issueDateAr: '20 أكتوبر 2022',
    credentialId: 'CkFWlDd9HB',
    verificationUrl: 'https://mahara-tech.gov.eg/',
    duration: '8 Hours, 5 Minutes',
    durationAr: '8 ساعات و5 دقائق تدريبية مكثفة',
    image: '/assets/certificates/node_js.png',
    category: 'Back-End & Databases',
    categoryAr: 'الخوادم وقواعد البيانات',
    certificateType: 'Governmental Institute Certificate',
    certificateTypeAr: 'شهادة إتمام معتمدة من معهد تكنولوجيا المعلومات ITI',
    overviewEn:
      'Comprehensive back-end engineering certification from the Information Technology Institute (ITI), covering server-side JavaScript with Node.js, Express framework routing, RESTful web services, MongoDB NoSQL database integration, and JWT authentication.',
    overviewAr:
      'شهادة هندسية متكاملة في تطوير الأنظمة الخلفية من معهد تكنولوجيا المعلومات (ITI)، تغطي برمجة الخوادم بـ Node.js، إطار عمل Express، بناء خدمات الويب RESTful، قواعد بيانات MongoDB NoSQL، والمصادقة الأمنية بـ JWT.',
    learnedEn: [
      'Node.js runtime architecture, event-driven non-blocking I/O, and asynchronous event loops.',
      'Building robust web servers and routing engines with Express.js framework.',
      'Designing, developing, and documenting RESTful API endpoints for client consumption.',
      'NoSQL database modeling, CRUD operations, indexing, and aggregation pipelines with MongoDB and Mongoose.',
      'User authentication, password hashing (bcrypt), JSON Web Tokens (JWT), and role-based access control.',
    ],
    learnedAr: [
      'معمارية بيئة تشغيل Node.js، ومعالجة المدخلات والمخرجات غير المعطلة (Non-blocking I/O)، وحلقة الأحداث Event Loop.',
      'بناء خوادم الويب وتوجيه المسارات باحترافية باستخدام إطار عمل Express.js.',
      'تصميم وتطوير وتوثيق واجهات برمجة التطبيقات RESTful APIs لتغذية تطبيقات الويب والجوال.',
      'نمذجة قواعد بيانات NoSQL وتنفيذ عمليات CRUD معقدة وتجميع البيانات باستخدام MongoDB و Mongoose.',
      'مصادقة المستخدمين، وتشفير كلمات المرور بـ bcrypt، واستخدام رموز JWT وإدارة الصلاحيات (RBAC).',
    ],
    skills: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'Mongoose ODM', 'JWT Authentication', 'Back-End Engineering'],
    skillsAr: ['بيئة تشغيل Node.js', 'إطار عمل Express.js', 'قواعد بيانات MongoDB', 'واجهات RESTful APIs', 'المصادقة الأمنية JWT', 'هندسة الخوادم'],
    practicalValueEn:
      'Directly applicable to drafting microservices architectures, API integration plans, and scalable back-end specifications in enterprise and government digital transformation bids.',
    practicalValueAr:
      'قابلة للتطبيق مباشرة في صياغة معمارية الخدمات المصغرة (Microservices)، وخطط التكامل الرقمي عبر APIs، ومواصفات الخوادم عالية الكفاءة في مناقصات التحول الرقمي.',
    relevanceProfileEn: [
      'Enterprise IT Solutions & API Architecture Proposals',
      'Microservices & Modern Cloud Back-End Scoping',
      'Tender QA on Security, Authentication, and Scalability',
      'Full-Stack Web & Mobile App Back-End Engineering',
    ],
    relevanceProfileAr: [
      'هندسة حلول تقنية المعلومات وتصميم معمارية واجهات APIs',
      'توصيف الخدمات الخلفية السحابية والخدمات المصغرة في العروض',
      'ضبط الجودة لاشتراطات الأمان والمصادقة وقابلية التوسع',
      'التطوير الهندسي المتكامل للأنظمة الخلفية لتطبيقات الويب والجوال',
    ],
    summaryEn:
      'Advanced ITI certification demonstrating mastery over Node.js back-end services, Express.js REST APIs, and MongoDB document storage.',
    summaryAr:
      'اعتماد متقدم من ITI يثبت التمكن الهندسي من خوادم Node.js وبناء واجهات Express وبنية قواعد بيانات MongoDB.',
    programCoverage: [
      'Node.js asynchronous event loop and Express routing mechanics',
      'RESTful API architecture, controllers, and middleware pipelines',
      'MongoDB schema modeling, Mongoose queries, and JWT authentication',
    ],
    featured: true,
    status: 'published',
  },

  // 23. Building Web Applications using PHP & MYSQL (Mahara-Tech ITI)
  {
    id: 'mahara-tech-php-mysql',
    title: 'Building Web Applications using PHP & MYSQL',
    titleAr: 'بناء وتطوير تطبيقات الويب الديناميكية باستخدام PHP وقواعد بيانات MySQL (ITI)',
    issuer: 'Mahara-Tech (Information Technology Institute - ITI)',
    issuerAr: 'معهد تكنولوجيا المعلومات (ITI) - منصة مهارة تك',
    provider: 'Information Technology Institute (ITI)',
    providerAr: 'معهد تكنولوجيا المعلومات - وزارة الاتصالات وتكنولوجيا المعلومات بمصر',
    trainingProvider: 'Information Technology Institute Platform',
    recipientName: 'Youssef Sayed ghamry',
    issueDate: 'November 25, 2020',
    issueDateAr: '25 نوفمبر 2020',
    credentialId: 'ol9NAsaBBh',
    verificationUrl: 'https://mahara-tech.gov.eg/',
    duration: '2 Hours, 47 Minutes',
    durationAr: 'ساعتان و47 دقيقة تدريبية',
    image: '/assets/certificates/php___mysql.png',
    category: 'Back-End & Databases',
    categoryAr: 'الخوادم وقواعد البيانات',
    certificateType: 'Governmental Institute Certificate',
    certificateTypeAr: 'شهادة إتمام معتمدة من معهد تكنولوجيا المعلومات ITI',
    overviewEn:
      'Server-side web development certification from the Information Technology Institute (ITI), covering server-side scripting with PHP, database persistence with MySQL, session management, and secure web application development.',
    overviewAr:
      'شهادة في تطوير تطبيقات الويب من معهد تكنولوجيا المعلومات (ITI)، تغطي البرمجة الخادومية بلغة PHP، الربط بقواعد بيانات MySQL، إدارة جلسات المستخدمين (Sessions)، وتطوير التطبيقات الآمنة.',
    learnedEn: [
      'PHP scripting fundamentals: syntax, superglobals ($_GET, $_POST, $_SESSION), and control flow.',
      'Connecting PHP applications to MySQL databases using PDO and MySQLi.',
      'Executing secure SQL prepared statements to prevent SQL Injection attacks.',
      'User authentication systems: registration, secure password hashing, and session persistence.',
      'Handling dynamic form submissions, file uploads, and server-side data validation.',
    ],
    learnedAr: [
      'أساسيات لغة PHP: الصياغة البرمجية، المتغيرات العامة ($_GET, $_POST, $_SESSION)، والمنطق البرمجي.',
      'ربط تطبيقات PHP بقواعد بيانات MySQL باستخدام امتدادات PDO و MySQLi الآمنة.',
      'تنفيذ استعلامات SQL المجهزة (Prepared Statements) للوقاية من ثغرات حقن SQL.',
      'بناء أنظمة تسجيل دخول ومصادقة المستخدمين وتشفير كلمات المرور وإدارة الجلسات.',
      'معالجة النماذج التفاعلية، ورفع الملفات، والتحقق الخادومي الصارم من البيانات.',
    ],
    skills: ['PHP', 'MySQL Database', 'Server-Side Web Development', 'SQL Injection Prevention', 'Session Management', 'PDO'],
    skillsAr: ['لغة PHP', 'قواعد بيانات MySQL', 'التطوير الخادومي للويب', 'الحماية من ثغرات SQL Injection', 'إدارة الجلسات', 'اتصال PDO'],
    practicalValueEn:
      'Directly underpins custom WordPress theme programming, enterprise portal customization, and legacy server-side application maintenance.',
    practicalValueAr:
      'تشكل الركيزة الأساسية لبرمجة قوالب ووردبريس المخصصة، وتعديل بوابات الأعمال، وصيانة وتحديث التطبيقات الخادومية المؤسسية.',
    relevanceProfileEn: [
      'Custom WordPress Core & Plugin Engineering',
      'Server-Side Web Applications Proposal Drafting',
      'Tender QA on Web Application Security & Database Integrity',
    ],
    relevanceProfileAr: [
      'برمجة قوالب وإضافات ووردبريس المخصصة',
      'صياغة العروض الفنية لتطبيقات الويب الخادومية',
      'ضبط الجودة لمعايير أمان التطبيقات وحماية قواعد البيانات',
    ],
    summaryEn:
      'ITI certification confirming solid proficiency in server-side PHP scripting, relational MySQL integration, and application security.',
    summaryAr:
      'شهادة معتمدة من ITI تثبت الإتقان العملي للبرمجة الخادومية بـ PHP والربط الآمن بقواعد بيانات MySQL.',
    programCoverage: [
      'PHP syntax, control structures, and superglobals',
      'MySQL database connectivity via PDO with prepared statements',
      'Authentication, session management, and server-side data validation',
    ],
    featured: false,
    status: 'published',
  },

  // 24. Install NGINX, PHP, MySQL, SSL & WordPress on Ubuntu (Udemy)
  {
    id: 'udemy-nginx-php-mysql-ssl-wordpress',
    title: 'Install NGINX, PHP, MySQL, SSL & WordPress on Ubuntu',
    titleAr: 'إعداد خوادم NGINX وتثبيت PHP و MySQL وشهادات SSL وووردبريس على أوبونتو',
    issuer: 'Udemy / YouAccel Training',
    issuerAr: 'منصة يوديمي / أكاديمية YouAccel للتدريب',
    provider: 'Udemy',
    providerAr: 'يوديمي',
    trainingProvider: 'YouAccel Training Academy',
    recipientName: 'Youssef Sayed Ghamry',
    issueDate: 'October 5, 2022',
    issueDateAr: '5 أكتوبر 2022',
    credentialId: 'UC-0bbbb9b4-07ec-4900-9aed-632d2c7008aa',
    verificationUrl: 'https://ude.my/UC-0bbbb9b4-07ec-4900-9aed-632d2c7008aa',
    duration: '1.5 Hours (Hands-on Server Deployment)',
    durationAr: '1.5 ساعة تدريبية (نشر عملي على الخوادم)',
    image: '/assets/certificates/cert_udemy_nginx_wordpress.jpg',
    category: 'Cloud & IT Infrastructure',
    categoryAr: 'الحوسبة السحابية والبنية التحتية',
    certificateType: 'Certificate of Completion',
    certificateTypeAr: 'شهادة إتمام معتمدة',
    overviewEn:
      'Technical systems administration certificate issued by Udemy and YouAccel Training, detailing the complete configuration of a high-performance LEMP stack (Linux, NGINX, MySQL, PHP) on Ubuntu servers, including free SSL encryption and hardened WordPress deployments.',
    overviewAr:
      'شهادة إدارة خوادم تقنية معتمدة من يوديمي وأكاديمية YouAccel، تفصل التهيئة الكاملة لحزمة LEMP عالية الأداء (لينكس، خادم NGINX، قواعد MySQL، ولغة PHP) على خوادم أوبونتو، وتثبيت شهادات التشفير SSL وتأمين بيئة ووردبريس.',
    learnedEn: [
      'Deploying and configuring an Ubuntu Linux production server environment.',
      'Installing and tuning the NGINX web server for optimal throughput and concurrency.',
      'Configuring PHP-FPM processor and MySQL database server instances.',
      'Issuing and automating SSL/TLS certificate renewals using Let’s Encrypt Certbot.',
      'Deploying WordPress with secure directory permissions, firewall rules, and caching optimization.',
    ],
    learnedAr: [
      'تنصيب وتهيئة بيئة خوادم أوبونتو لينكس الإنتاجية من سطر الأوامر.',
      'تثبيت وضبط خادم الويب فائق السرعة NGINX لتحقيق أعلى معدل استجابة وتزامن.',
      'تهيئة معالج PHP-FPM وإعداد محرك قواعد بيانات MySQL وإنشاء قواعد البيانات.',
      'إصدار وتجديد شهادات التشفير الرقمية SSL/TLS تلقائياً عبر Let’s Encrypt Certbot.',
      'تثبيت ووردبريس مع تطبيق أذونات المجلدات الآمنة، وجدران الحماية، وتسريع التخزين المؤقت.',
    ],
    skills: ['NGINX', 'Ubuntu Linux', 'LEMP Stack', 'SSL/TLS Encryption', 'PHP-FPM', 'MySQL Administration', 'Server Hardening'],
    skillsAr: ['خادم NGINX', 'نظام أوبونتو لينكس', 'حزمة LEMP', 'تشفير وحماية SSL', 'إدارة قواعد MySQL', 'تأمين الخوادم والحماية'],
    practicalValueEn:
      'Directly equips with the technical knowledge to author server architecture specifications, web hosting configurations, and security compliance criteria in IT infrastructure and portal tenders.',
    practicalValueAr:
      'تزود بالمعرفة التقنية المباشرة لصياغة مواصفات خوادم الاستضافة، وبنى حزم البرمجيات الخادومية، وضوابط الأمان والتشفير الإلزامية في مناقصات البوابات والبنية التحتية.',
    relevanceProfileEn: [
      'Server Architecture & Hosting Infrastructure Proposals',
      'Technical Proposal Writing for Portal Security & SSL Compliance',
      'Tender QA on Hosting Performance & Server Hardening Mandates',
    ],
    relevanceProfileAr: [
      'صياغة معمارية الخوادم والاستضافات في العروض الفنية',
      'توصيف معايير الأمان والتشفير الرقمي SSL في كراسات الشروط',
      'ضبط الجودة لمطابقة متطلبات الأداء والأمان المؤسسي',
    ],
    summaryEn:
      'Practical Udemy certificate validating hands-on Linux system administration, NGINX server configuration, and secure LEMP stack architecture.',
    summaryAr:
      'شهادة عملية من يوديمي تثبت الإتقان التطبيقي لإدارة خوادم لينكس، وتهيئة NGINX، وبناء بيئات LEMP الآمنة.',
    programCoverage: [
      'Ubuntu server administration and package management',
      'NGINX web server setup, virtual hosts, and PHP-FPM tuning',
      'MySQL database creation, SSL encryption, and WordPress deployment',
    ],
    featured: false,
    status: 'published',
  },

  // 25. The Complete GSAP: JavaScript, HTML and CSS Course for 2022 (Udemy)
  {
    id: 'udemy-gsap-animation',
    title: 'The Complete GSAP: JavaScript ,HTML and CSS Course for 2022',
    titleAr: 'الدورة الشاملة لمكتبة التحريك GSAP باستخدام جافاسكريبت و HTML و CSS',
    issuer: 'Udemy',
    issuerAr: 'منصة يوديمي العالمية (Udemy)',
    provider: 'Udemy',
    providerAr: 'يوديمي',
    trainingProvider: 'Martin Yanev, Petya Yaneva, Plamen Yanev',
    recipientName: 'Youssef Sayed Ghamry',
    issueDate: 'October 23, 2022',
    issueDateAr: '23 أكتوبر 2022',
    credentialId: 'UC-cb0c59e5-cab2-4f2a-98e3-e2ee666c825a',
    verificationUrl: 'https://ude.my/UC-cb0c59e5-cab2-4f2a-98e3-e2ee666c825a',
    duration: '4 Hours',
    durationAr: '4 ساعات تدريبية متخصصة',
    image: '/assets/certificates/cert_udemy_gsap.jpg',
    category: 'Web & Front-End Development',
    categoryAr: 'تطوير الويب والواجهات الأمامية',
    certificateType: 'Certificate of Completion',
    certificateTypeAr: 'شهادة إتمام معتمدة',
    overviewEn:
      'Professional web animation certification authorized by Udemy instructors Martin Yanev and team, focusing on the GreenSock Animation Platform (GSAP), timeline orchestration, ScrollTrigger interactive reveals, and high-performance DOM animations.',
    overviewAr:
      'شهادة احترافية في تحريك الواجهات التفاعلية معتمدة من يوديمي، تركز على مكتبة GreenSock (GSAP)، وتنسيق الجداول الزمنية للتحريك (Timelines)، وتحريكات التمرير التفاعلية (ScrollTrigger)، وتأثيرات الواجهات فائقة السلاسة.',
    learnedEn: [
      'GSAP architecture: tweens (gsap.to, gsap.from, gsap.fromTo) and easing algorithms.',
      'Timeline orchestration for choreographing complex, synchronized multi-element animations.',
      'ScrollTrigger integration for scroll-linked visual storytelling and interactive reveals.',
      'SVG animation: morphing paths, stroke drawing, and responsive graphics manipulation.',
      'Performance optimization: GPU hardware acceleration and preventing layout recalculation jank.',
    ],
    learnedAr: [
      'معمارية مكتبة GSAP: دوال التحريك (to, from, fromTo) ومعادلات التسارع والتباطؤ (Easing).',
      'إدارة وتنسيق الجداول الزمنية (Timelines) للتحريك المتسلسل والمتزامن لعدة عناصر.',
      'دمج إضافة ScrollTrigger لربط التحريك التفاعلي بالتمرير وصناعة الرواية البصرية للمواقع.',
      'تحريك رسوم المتجهات SVG: تشكيل المسارات، ورسم الحدود، والرسوم المتجاوبة.',
      'تحسين الأداء البرمجي: التسريع بواسطة معالج الرسوميات GPU وتفادي بطء المتصفحات.',
    ],
    skills: ['GSAP 3', 'Web Animation', 'ScrollTrigger', 'SVG Animation', 'Interactive Web Interfaces', 'Front-End Polish'],
    skillsAr: ['مكتبة GSAP 3', 'تحريك الواجهات التفاعلية', 'ScrollTrigger', 'تحريك رسوم SVG', 'الواجهات الفاخرة', 'صقل تجربة المستخدم'],
    practicalValueEn:
      'Enables the creation of visually distinctive, award-winning corporate websites, interactive presentation decks, and immersive digital brand platforms.',
    practicalValueAr:
      'تمكن من بناء مواقع وتجارب رقمية متميزة بصرياً، وعروض تقديمية تفاعلية تحبس الأنفاس، ومنصات رقمية تعكس هوية العلامات التجارية الراقية.',
    relevanceProfileEn: [
      'Luxury & Interactive Web Development Projects',
      'Interactive Proposal Presentations & Bid Demos',
      'Front-End UI Polish & Motion Design Systems',
    ],
    relevanceProfileAr: [
      'تطوير المواقع الفاخرة والواجهات السينمائية التفاعلية',
      'بناء العروض التوضيحية التفاعلية لنماذج المشاريع',
      'صقل الحركة وأنظمة التصميم التفاعلية للمنصات',
    ],
    summaryEn:
      'Specialized Udemy certificate confirming advanced capabilities in GSAP animation timelines, ScrollTrigger, and smooth UI motion choreography.',
    summaryAr:
      'شهادة تخصصية من يوديمي تؤكد التمكن من مكتبة GSAP للتحريك، وتنسيق الحركات البصرية المعقدة، والواجهات التفاعلية الممتعة.',
    programCoverage: [
      'GSAP tweens, easing, staggers, and execution control',
      'Timeline sequencing and choreography for complex UI flows',
      'ScrollTrigger interactive reveals and performance optimization',
    ],
    featured: false,
    status: 'published',
  },

  // 26. SQL- The Complete Introduction to SQL programming (Udemy)
  {
    id: 'udemy-sql-programming',
    title: 'SQL- The Complete Introduction to SQL programming',
    titleAr: 'البرمجة المتقدمة لقواعد البيانات ولغة الاستعلام الهيكلية SQL',
    issuer: 'Udemy',
    issuerAr: 'منصة يوديمي العالمية (Udemy)',
    provider: 'Udemy',
    providerAr: 'يوديمي',
    trainingProvider: 'Yassin Marco',
    recipientName: 'Youssef Sayed Ghamry',
    issueDate: 'October 3, 2022',
    issueDateAr: '3 أكتوبر 2022',
    duration: '3.5 Hours',
    durationAr: '3.5 ساعات تدريبية مكثفة',
    credentialId: 'UC-f12e5b03-5aea-43fe-9cb8-3e5db211787b',
    verificationUrl: 'https://ude.my/UC-f12e5b03-5aea-43fe-9cb8-3e5db211787b',
    image: '/assets/certificates/cert_udemy_sql.jpg',
    category: 'Back-End & Databases',
    categoryAr: 'الخوادم وقواعد البيانات',
    certificateType: 'Certificate of Completion',
    certificateTypeAr: 'شهادة إتمام معتمدة',
    overviewEn:
      'Practical database programming certificate issued by Udemy, covering SQL relational database management: data retrieval, filtering, joining tables, aggregating statistics, and database creation.',
    overviewAr:
      'شهادة برمجة قواعد بيانات تطبيقية معتمدة من يوديمي، تغطي إدارة واستعلام قواعد البيانات العلائقية بلغة SQL: استرجاع البيانات، التصفية والفرز، ربط الجداول، وحساب الإحصائيات التجميعية.',
    learnedEn: [
      'Relational database architecture: tables, records, fields, data types, and schemas.',
      'SQL data query syntax: SELECT, WHERE, ORDER BY, GROUP BY, and HAVING.',
      'Relational joining: INNER JOIN, LEFT JOIN, RIGHT JOIN, and cross joins.',
      'Aggregate functions: COUNT, SUM, AVG, MIN, MAX for analytical reporting.',
      'Creating and altering databases, tables, constraints, and data modifications (INSERT, UPDATE, DELETE).',
    ],
    learnedAr: [
      'معمارية قواعد البيانات العلائقية: الجداول، السجلات، أنواع الحقول، والمخططات.',
      'صياغة استعلامات SQL: أوامر SELECT، وشروط WHERE، والترتيب والتجميع بـ GROUP BY و HAVING.',
      'عمليات ربط الجداول العلائقية: INNER JOIN و LEFT JOIN و RIGHT JOIN.',
      'الدوال الإحصائية التجميعية: COUNT و SUM و AVG و MIN و MAX لإنشاء التقارير التحليلية.',
      'إنشاء وتعديل قواعد البيانات والجداول وتطبيق القيود وإجراء عمليات الإدخال والتعديل والحذف.',
    ],
    skills: ['SQL Programming', 'Relational Databases', 'Data Queries', 'Table Joins', 'Data Aggregation', 'CRUD Operations'],
    skillsAr: ['برمجة SQL', 'قواعد البيانات العلائقية', 'استعلامات البيانات', 'ربط الجداول Joins', 'معالجة البيانات CRUD'],
    practicalValueEn:
      'Supports the analysis of database requirements, reporting pipelines, and schema validation across enterprise software and ERP proposals.',
    practicalValueAr:
      'تدعم تحليل متطلبات قواعد البيانات، وبناء خطوط التقارير والإحصائيات، ومطابقة متطلبات البيانات في عروض أنظمة ERP والبرمجيات.',
    relevanceProfileEn: [
      'Database Architecture Validation in Bids',
      'Reporting & Data Sizing Methodologies in RFP Responses',
      'ERP & Business Software System Design',
    ],
    relevanceProfileAr: [
      'التحقق من كفاءة معمارية قواعد البيانات في وثائق المناقصات',
      'صياغة منهجيات التقارير وتحليل البيانات في العروض',
      'تصميم أنظمة الأعمال وقواعد بيانات برمجيات ERP',
    ],
    summaryEn:
      'Udemy certificate proving hands-on competence in SQL programming, relational data queries, and multi-table operations.',
    summaryAr:
      'شهادة عملية من يوديمي تؤكد الإتقان التطبيقي للبرمجة بلغة SQL، وربط الجداول، وإجراء الاستعلامات التحليلية.',
    programCoverage: [
      'SQL querying, filtering, and sorting mechanics',
      'Relational joins and aggregate analytical functions',
      'Database creation, table maintenance, and CRUD operations',
    ],
    featured: false,
    status: 'published',
  },

  // 27. Learn WordPress & Using WordPress to Make Money Online (Udemy)
  {
    id: 'udemy-wordpress-monetization',
    title: 'Learn WordPress & Using WordPress to Make Money Online',
    titleAr: 'هندسة وتطوير مواقع ووردبريس الاحترافية ونماذج العمل الرقمية',
    issuer: 'Udemy',
    issuerAr: 'منصة يوديمي العالمية (Udemy)',
    provider: 'Udemy',
    providerAr: 'يوديمي',
    trainingProvider: 'Zeeshan Hussain',
    recipientName: 'Youssef Sayed Ghamry',
    issueDate: 'October 4, 2022',
    issueDateAr: '4 أكتوبر 2022',
    duration: '6.5 Hours',
    durationAr: '6.5 ساعات تدريبية متكاملة',
    credentialId: 'UC-98392095-98e4-4bc1-97fc-18b5c43f51c7',
    verificationUrl: 'https://ude.my/UC-98392095-98e4-4bc1-97fc-18b5c43f51c7',
    image: '/assets/certificates/cert_udemy_wordpress_business.jpg',
    category: 'WordPress & CMS Solutions',
    categoryAr: 'ووردبريس وإدارة المحتوى',
    certificateType: 'Certificate of Completion',
    certificateTypeAr: 'شهادة إتمام معتمدة',
    overviewEn:
      'Comprehensive WordPress engineering and commercial web deployment certificate issued by Udemy instructor Zeeshan Hussain, covering custom site development, WooCommerce store setup, digital marketing integration, SEO, and client website delivery.',
    overviewAr:
      'شهادة متكاملة في هندسة ونشر مواقع ومتاجر ووردبريس معتمدة من يوديمي، تغطي بناء المواقع الاحترافية المخصصة، إعداد المتاجر الإلكترونية بـ WooCommerce، دمج أدوات التسويق الرقمي، السيو، وتسليم المواقع للعملاء.',
    learnedEn: [
      'End-to-end WordPress site building: themes, plugins, custom menus, and header/footer builders.',
      'E-commerce setup using WooCommerce: product catalogs, payment gateways, and shipping rules.',
      'WordPress SEO optimization, metadata configuration, schema markup, and speed tuning.',
      'Security configurations: anti-spam, brute-force protection, and regular automated backups.',
      'Commercial client delivery workflows and content management system handoff documentation.',
    ],
    learnedAr: [
      'بناء مواقع ووردبريس المتكاملة: القوالب، الإضافات، القوائم المخصصة، وبناء الترويسة والتذييل.',
      'تجهيز المتاجر الإلكترونية بـ WooCommerce: كتالوج المنتجات، بوابات الدفع، وقواعد الشحن.',
      'تهيئة السيو لمواقع ووردبريس، وضبط البيانات الوصفية، والترميز المنظم، وتسريع الصفحات.',
      'إعدادات الأمان والحماية: مكافحة الرسائل المزعجة، الحماية من هجمات التخمين، والنسخ الاحتياطي التلقائي.',
      'إجراءات تسليم المواقع للعملاء وتوثيق أدلة استخدام نظام إدارة المحتوى.',
    ],
    skills: ['WordPress', 'WooCommerce', 'E-commerce Architecture', 'WordPress SEO', 'CMS Security', 'Digital Solutions'],
    skillsAr: ['ووردبريس', 'متاجر WooCommerce', 'معمارية المتاجر الإلكترونية', 'سيو ووردبريس', 'أمان أنظمة CMS', 'الحلول الرقمية'],
    practicalValueEn:
      'Equips with practical delivery expertise for corporate portal tenders, commercial e-commerce bids, CMS support services, and client handoff documentation.',
    practicalValueAr:
      'تزود بالخبرة التطبيقية لتسليم مواقع المنشآت ومتاجر التجارة الإلكترونية، وتقديم خدمات دعم أنظمة المحتوى، وتوثيق كراسات التسليم للعملاء.',
    relevanceProfileEn: [
      'WordPress & E-commerce Proposal Writing',
      'Commercial CMS Delivery & Handover Documentation',
      'Technical SEO & Digital Marketing Integration',
    ],
    relevanceProfileAr: [
      'صياغة العروض الفنية لمواقع ووردبريس والمتاجر الإلكترونية',
      'إعداد وثائق التسليم والتدريب على أنظمة إدارة المحتوى',
      'تكامل السيو التقني والتسويق الرقمي في الحلول البرمجية',
    ],
    summaryEn:
      'Comprehensive Udemy certificate validating end-to-end WordPress web development, WooCommerce e-commerce setup, and commercial CMS delivery.',
    summaryAr:
      'شهادة متكاملة من يوديمي تثبت الإتقان العملي لتطوير مواقع ومتاجر ووردبريس وإدارتها وتأمينها باحترافية.',
    programCoverage: [
      'Full WordPress website development and page building',
      'WooCommerce store setup, payments, and product workflows',
      'WordPress security, backup redundancy, and SEO optimization',
    ],
    featured: false,
    status: 'published',
  },
];
