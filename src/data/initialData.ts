import {
  SiteProfile,
  WorkExperience,
  Certification,
  SkillGroup,
  ToolCategory,
  Language,
  Project,
  Service,
  Article,
} from '../types';

export const INITIAL_PROFILE: SiteProfile = {
  name: 'Youssef Ghamry',
  title: 'Full-Stack Developer | Web, Software & Mobile App Developer',
  secondaryTitle: 'Web Applications · Enterprise Systems & ERP · Mobile Apps · Cloud & APIs',
  location: 'Cairo, Egypt',
  phone: '+201503292942',
  email: '1youssefghamry@gmail.com',
  whatsappUrl: 'https://wa.me/201503292942',
  linkedinUrl: 'https://linkedin.com',
  githubUrl: 'https://github.com',
  summary:
    'I am a Full-Stack Developer with end-to-end expertise across the complete digital product lifecycle — from concept exploration, requirements decomposition, and UI/UX architecture to front-end engineering, back-end APIs, robust database modeling, quality testing, and cloud deployment. I build responsive websites, enterprise ERP & CRM platforms, high-performance web applications, and mobile apps. Complementing my technical engineering, I bring proven authority in technical proposal writing, compliance matrices, and Bid QA for 200+ technology and government tenders in the Saudi market (Etimad platform).',
  aboutBackground:
    'A versatile Full-Stack Developer and technical solution architect who bridges the gap between deep software engineering and rigorous business requirements. With a foundation in Management Information Systems (MIS), I do not simply write syntax — I analyze business operations, architect scalable database structures, craft intuitive user interfaces, and deploy resilient digital products that scale seamlessly.',
  careerJourney:
    'Starting with front-end and back-end web engineering, CMS platforms, and technical architecture, I mastered full-stack product lifecycles across modern stacks (TypeScript, React, Node.js, Python, REST/GraphQL APIs, PostgreSQL, MongoDB). To provide end-to-end value for enterprise clients, I expanded into custom enterprise software, mobile application development, and tender proposal engineering — ensuring high-value systems are architected correctly from the initial bid specification through final production rollout.',
  tenderExperienceDetails:
    'Extensive hands-on experience examining complex Requests for Proposals (RFPs), Terms of Reference (TORs), and RFQs across government and enterprise sectors in Saudi Arabia and the Gulf. I specialize in breaking down elaborate requirements into actionable compliance checklists, drafting authoritative executive summaries, crafting bespoke technical methodologies, and aligning delivery schedules with measurable SLAs and KPIs.',
  bidQAExperienceDetails:
    'Operating as a gatekeeper of bid quality, I execute multi-stage quality assurance checks prior to submission. This encompasses cross-referencing mandatory qualification criteria, identifying compliance gaps, eliminating internal contradictions across technical and financial narratives, and ensuring strict adherence to submission packaging rules.',
  saudiTenderDetails:
    'Specialized familiarity with the regulatory landscapes and procurement mechanisms of the Kingdom of Saudi Arabia, particularly operations via the Etimad platform, Monshaat standards, and government IT digitization initiatives. I understand the nuances of local content requirements, vendor pre-qualification criteria, and procurement scoring rubrics.',
  itBackgroundDetails:
    'Backed by formal certifications from Meta and ITI across front-end engineering, back-end API architecture (Django, Python, Node.js), and database systems (SQL, MongoDB), I communicate fluently with lead software architects, devops engineers, and IT project managers to extract precise technical data into winning proposal narratives.',
  businessDevDetails:
    'Partnering with BD leadership to monitor tender pipelines, conduct objective Bid/No-Bid assessments based on feasibility and risk factors, engage in competitor analysis, and position technical value propositions to win enterprise contracts.',
  workingMethodology:
    'Structured into 5 phases: 1. Deep Tender Decomposition & Matrix Extraction; 2. Stakeholder Collaboration & Solution Architecture; 3. Technical Drafting & Methodology Formulation; 4. Independent Bid QA & Red-Team Compliance Audit; 5. Secure Submission Package Assembly & Portal Upload.',
};

export const INITIAL_EXPERIENCES: WorkExperience[] = [
  {
    id: 'exp-brains-valley',
    company: 'Brains Valley Co',
    position: 'Tender Proposal Writer | Tender QA | Business Development',
    period: '2026 January / Present',
    workMode: 'Remote',
    tenderCountNote:
      'Contributed to the preparation and review of over 200 tenders at Brains Valley Co, combining technical expertise with requirement matching and Bid QA.',
    responsibilities: [
      'RFP/RFQ Analysis & Tender Evaluation: Analyzed complex RFPs, RFQs, tenders, and TORs for government and private sector projects in Saudi Arabia, identifying mandatory requirements, evaluation criteria, and technical weights. Conducted technical Bid/No-Bid assessments in coordination with sales and delivery teams to evaluate risks, resource availability, and feasibility.',
      'Technical Proposal Development: Authored comprehensive and persuasive technical proposals, including executive summaries, technical methodologies, scopes of work, solution architectures, implementation plans, SLAs, and project governance models. Developed proposal content across IT Infrastructure, Networking, Cybersecurity, Cloud Solutions, and Digital Transformation domains.',
      'Compliance & Quality Assurance (QA): Developed and maintained detailed Compliance Matrices, ensuring strict traceability between tender requirements, proposal responses, and supporting evidence. Performed rigorous quality reviews on proposals to ensure consistency across scopes, timelines, resources, and technical specifications, eliminating contradictions and formatting errors.',
      'Tender & Submission Management: Prepared and organized complete technical submission packages (CVs, company profiles, previous experiences, methodologies, and forms) with strict document version control. Managed and executed proposal submissions via the Etimad Platform and other procurement portals in compliance with Saudi government procurement regulations.',
    ],
  },
  {
    id: 'exp-brandsolutions',
    company: 'brandsolutions',
    position: 'Full-Stack Web Developer & Technical SEO Lead',
    period: 'Oct 2025 / 2026 January',
    workMode: 'Remote',
    responsibilities: [
      'Develop full websites using WordPress, Salla, Zid, and Next.js with integrated SEO from inception.',
      'Lead on-page SEO structure, meta templating, Core Web Vitals optimization, and resolve crawl/indexing issues.',
      'Architect modern responsive user interfaces with high performance and accessibility standards.',
      'Implement structured schema data (JSON-LD) and audit site performance benchmarks.',
    ],
  },
  {
    id: 'exp-al-yosr',
    company: 'Al Yosr',
    position: 'Business Developer, Web Developer & ERP Implementer',
    period: 'Oct 2024 – Oct 2025',
    workMode: 'On-site',
    responsibilities: [
      'Spearheaded enterprise ERP system implementation and workflow automation for commercial operations.',
      'Formulated business development strategies and mapped technical requirements for custom client solutions.',
      'Engineered responsive web applications and integrated backend database infrastructure.',
      'Improved site architecture, database query performance, asset compression, and digital system integration.',
    ],
  },
  {
    id: 'exp-cool-edu',
    company: 'Cool Edu',
    position: 'WordPress Developer',
    period: '2025/5 – 2025/11',
    workMode: 'Remote',
    responsibilities: [
      'Redesigned and optimized an educational WordPress site over 3 months.',
      'Improved site structure, database performance, asset compression, and overall SEO.',
      'Implemented custom course catalog workflows and interactive learning interfaces.',
    ],
  },
  {
    id: 'exp-actmedia',
    company: 'actmedia',
    position: 'Web Developer & SEO Specialist',
    period: 'Feb 2024 – Oct 2024',
    workMode: 'Hybrid',
    responsibilities: [
      'Engineered and customized responsive WordPress websites and commercial landing pages.',
      'Implemented comprehensive on-page and technical SEO, meta structures, and schema markup.',
      'Optimized page load speed, asset delivery, and Core Web Vitals metrics.',
      'Monitored search engine indexing and resolved technical crawl discrepancies.',
    ],
  },
  {
    id: 'exp-hap',
    company: 'HAP',
    position: 'UI/UX Front-End Developer',
    period: 'May 2023 – Dec 2023',
    workMode: 'Hybrid',
    responsibilities: [
      'Built front-end interfaces using pure HTML, CSS, and JavaScript.',
      'Enhanced UI layout, responsiveness, and user experience from a front-end perspective.',
      'Created cross-browser compatible layouts adhering to modern UI/UX design specifications.',
    ],
  },
  {
    id: 'exp-xgatar',
    company: 'xgatar',
    position: 'Web Developer & SEO Specialist',
    period: 'Feb 2023 – Jun 2023',
    workMode: 'Remote',
    responsibilities: [
      'Developed WordPress websites with custom API integrations.',
      'Applied SEO best practices throughout the full development lifecycle.',
      'Integrated third-party services and optimized site performance.',
    ],
  },
  {
    id: 'exp-start-tech',
    company: 'Start-Tech',
    position: 'WordPress Developer',
    period: 'Sep 2021 – May 2022',
    workMode: 'On-site',
    responsibilities: [
      'Built and customized WordPress websites with a focus on layout, functionality, and responsiveness.',
      'Configured custom themes, page builders, and functional plugins.',
      'Ensured cross-device responsive rendering and user experience standards.',
    ],
  },
  {
    id: 'exp-web-solutions',
    company: 'Web Solutions',
    position: 'WordPress Developer',
    period: 'Feb 2021 – Oct 2021',
    workMode: 'On-site',
    responsibilities: [
      'Developed and maintained WordPress websites, handling updates, fixes, and ongoing maintenance.',
      'Diagnosed and resolved front-end and back-end technical issues.',
      'Managed site backups, plugin compatibility, and security patch installations.',
    ],
  },
];

export const INITIAL_EDUCATION = {
  degree: 'Bachelor’s Degree in Management Information Systems (MIS)',
  institution: 'Zoser University (جامعة زوسر)',
  period: '2019 – 2023',
  summary:
    'Focuses on integrating business processes with IT solutions through systems analysis, databases, software applications, and data-driven decision support to improve organizational efficiency and performance. Comprehensive curriculum covering data structures and algorithms, computer graphics, database systems, programming languages and compilers, operating systems, software engineering, artificial intelligence and expert systems, modeling and simulation, decision support systems, computer networks, neural networks, pattern recognition, digital image processing, information systems design, computer and network security, and industrial control and instrumentation.',
  topics: [
    'Data Structures & Algorithms',
    'Database Systems & Relational Architecture',
    'Software Engineering Methodologies',
    'Artificial Intelligence & Expert Systems',
    'Computer Networks & Infrastructure',
    'Computer & Network Security',
    'Systems Analysis & Design',
    'Decision Support Systems (DSS)',
    'Digital Image Processing & Pattern Recognition',
    'Modeling, Simulation & Neural Networks',
    'Industrial Control & Instrumentation',
    'Business Process Integration',
  ],
};

import { ALL_CERTIFICATIONS } from './certificationsData';

export const INITIAL_CERTIFICATIONS: Certification[] = ALL_CERTIFICATIONS;

export const INITIAL_SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'sg-tender-mgmt',
    title: 'Tender & Proposal Management',
    skills: [
      { name: 'Technical Proposal Writing & Editing', isVerified: true },
      { name: 'Tender & RFP Analysis', isVerified: true },
      { name: 'RFQ Analysis', isVerified: true },
      { name: 'Compliance Matrix Development', isVerified: true },
      { name: 'Requirement Traceability', isVerified: true },
      { name: 'Proposal Quality Assurance (QA)', isVerified: true },
      { name: 'Bid Compliance Review', isVerified: true },
      { name: 'Gap Analysis', isVerified: true },
      { name: 'Bid/No-Bid Assessment', isVerified: true },
      { name: 'Tender Submission Management', isVerified: true },
      { name: 'Document Version Control', isVerified: true },
      { name: 'Technical Evaluation Criteria Analysis', isVerified: true },
      { name: 'Qualification Requirements Analysis', isVerified: true },
    ],
  },
  {
    id: 'sg-proposal-doc',
    title: 'Technical Proposal & Project Documentation',
    skills: [
      { name: 'Executive Summary Preparation', isVerified: true },
      { name: 'Scope of Work (SOW) Documentation', isVerified: true },
      { name: 'Technical Methodology Development', isVerified: true },
      { name: 'Implementation Planning & WBS', isVerified: true },
      { name: 'SLA Documentation & Definition', isVerified: true },
      { name: 'KPI Documentation & Metrics', isVerified: true },
      { name: 'Deliverables Definition & Work Packages', isVerified: true },
      { name: 'Acceptance Criteria Formulation', isVerified: true },
      { name: 'Project Governance Models', isVerified: true },
      { name: 'Solution Architecture Translation', isVerified: true },
    ],
  },
  {
    id: 'sg-biz-dev',
    title: 'Business Development & Pre-Sales',
    skills: [
      { name: 'Opportunity Identification', isVerified: true },
      { name: 'Tender Opportunity Analysis', isVerified: true },
      { name: 'Bid Pipeline Tracking', isVerified: true },
      { name: 'Stakeholder Coordination', isVerified: true },
      { name: 'Client Requirements Analysis', isVerified: true },
      { name: 'IT Pre-Sales Support', isVerified: true },
      { name: 'Competitive Analysis', isVerified: true },
      { name: 'Bid Strategy Support', isVerified: true },
    ],
  },
  {
    id: 'sg-tech-domain',
    title: 'Technical Domain Knowledge',
    skills: [
      { name: 'IT Infrastructure & Networking', isVerified: true },
      { name: 'Cybersecurity & Network Security Standards', isVerified: true },
      { name: 'Cloud Solutions & Managed Services', isVerified: true },
      { name: 'Digital Transformation Initiatives', isVerified: true },
      { name: 'Enterprise Technology Solutions', isVerified: true },
      { name: 'Software Development Methodologies (Agile/Scrum)', isVerified: true },
      { name: 'Web Technologies & Frontend Ecosystem', isVerified: true },
      { name: 'Database Systems (Relational & NoSQL)', isVerified: true },
      { name: 'ERP & CRM Solutions Architecture', isVerified: true },
    ],
  },
];

export const INITIAL_TOOL_CATEGORIES: ToolCategory[] = [
  {
    id: 'tools-tender',
    title: 'Tender & Office Platforms',
    tools: [
      'Etimad Platform (اعتماد)',
      'Saudi Government Procurement Portals',
      'Microsoft Word (Advanced Styling & Templates)',
      'Microsoft Excel (Compliance Matrices & Cost Models)',
      'Microsoft PowerPoint (Pitch Decks & Presentations)',
      'Microsoft Visio (Process & Architecture Flowcharts)',
      'Document Version Control Systems',
    ],
  },
  {
    id: 'tools-dev',
    title: 'Development Technologies',
    tools: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'TypeScript',
      'PHP',
      'Python',
      'Node.js',
      'Express.js',
      'React.js',
      'Next.js',
      'Vue.js',
      'Angular',
      'Bootstrap',
      'jQuery',
      'AJAX / JSON',
      'Gulp.js',
      'Pug.js',
    ],
  },
  {
    id: 'tools-db',
    title: 'Databases & Storage',
    tools: ['MySQL', 'SQL', 'SQL Server', 'MongoDB', 'Oracle', 'SQLite'],
  },
  {
    id: 'tools-cms',
    title: 'CMS & E-commerce',
    tools: ['WordPress', 'Salla (سلة)', 'Zid (زد)', 'Shopify', 'Wix'],
  },
  {
    id: 'tools-design',
    title: 'Design & Productivity',
    tools: ['Figma', 'Adobe XD', 'Notion', 'Canva'],
  },
  {
    id: 'tools-hosting',
    title: 'Hosting & Infrastructure',
    tools: ['GoDaddy', 'Namecheap', 'Hostinger', 'cPanel / Cloud DNS'],
  },
  {
    id: 'tools-seo',
    title: 'SEO & Analytics',
    tools: ['Google Search Console', 'Google Analytics (GA4)', 'Technical SEO Auditing'],
  },
];

export const INITIAL_LANGUAGES: Language[] = [
  {
    language: 'Arabic',
    level: 'Native / Primary Language',
    isConfirmed: true,
  },
  {
    language: 'English',
    level: 'Professional Proficiency (Pending Final Level Confirmation)',
    isConfirmed: false,
  },
];

export const INITIAL_SERVICES: Service[] = [
  {
    id: 'srv-tender-analysis',
    title: 'Tender & RFP/RFQ Document Analysis',
    slug: 'tender-rfp-rfq-analysis',
    categoryId: 'tender-proposal',
    categoryTitle: 'Tender & Proposal Services',
    shortDescription:
      'Rigorous decomposition of tender documents, RFQs, and TORs to extract mandatory conditions, technical scoring criteria, and critical milestones.',
    fullIntro:
      'A successful bid begins with absolute clarity on tender parameters. I dissect complex tender documentation to ensure no hidden liability or disqualifying requirement is overlooked.',
    problemsAddressed: [
      'Risk of technical or administrative bid disqualification due to overlooked mandatory requirements.',
      'Uncertainty regarding how evaluation panels will score technical responses.',
      'Misalignment between internal engineering estimates and actual client scope.',
      'Inefficient team mobilization resulting from unclear tender responsibilities.',
    ],
    scope: [
      'Exhaustive line-by-line review of RFP, Terms of Reference (TOR), Conditions of Contract, and BOQs.',
      'Extraction of mandatory qualification thresholds (financial, technical, legal).',
      'Analysis of technical evaluation criteria and weighting point matrices.',
      'Preparation of RFP clarification questions to be submitted to the contracting authority.',
      'Formulation of the initial Bid/No-Bid assessment report.',
    ],
    methodology: [
      {
        step: '01',
        title: 'Document Ingestion & Categorization',
        description: 'Classify all RFP annexes, technical specs, and administrative guidelines.',
      },
      {
        step: '02',
        title: 'Requirement Extraction',
        description: 'Map out mandatory conditions, technical deliverables, and non-negotiables.',
      },
      {
        step: '03',
        title: 'Evaluation Matrix Scoring Model',
        description: 'Break down point distributions to target maximum scoring sections.',
      },
      {
        step: '04',
        title: 'Clarification Log & Risk Register',
        description: 'Draft official inquiries for ambiguities and identify commercial/technical risks.',
      },
    ],
    deliverables: [
      'Comprehensive Tender Decomposition Report',
      'Mandatory Requirements Checklist',
      'Technical Evaluation Scoring Matrix',
      'Client Clarification Query Sheet',
    ],
    benefits: [
      'Eliminates early-stage disqualification risks before committing proposal drafting resources.',
      'Focuses technical narrative on high-scoring evaluation categories.',
      'Provides clear work packages for engineering and finance teams.',
    ],
    faqs: [
      {
        question: 'Which sectors and tender types do you analyze?',
        answer:
          'Primarily technology-sector tenders, including government IT infrastructure, custom software development, digital platforms, cybersecurity, managed services, and enterprise portal implementations.',
      },
      {
        question: 'Can you handle tenders issued in both Arabic and English?',
        answer:
          'Yes, I work fluently with Arabic government procurement standards (e.g., Etimad) and bilingual corporate RFPs.',
      },
    ],
    featured: true,
    status: 'published',
  },
  {
    id: 'srv-tech-proposal-writing',
    title: 'Technical Proposal Writing & Development',
    slug: 'technical-proposal-writing',
    categoryId: 'tender-proposal',
    categoryTitle: 'Tender & Proposal Services',
    shortDescription:
      'End-to-end development of winning technical proposals: executive summaries, technical methodology, implementation plans, SLAs, and governance.',
    fullIntro:
      'Transforming technical capabilities into compelling, evaluative narratives. I draft technical proposals that directly address client pain points while fulfilling every contractual requirement.',
    problemsAddressed: [
      'Proposals that read like generic marketing brochures rather than technical solutions.',
      'Lack of clear project methodologies (Agile/Waterfall) aligned with client milestones.',
      'Weak executive summaries that fail to capture the client committee’s attention.',
      'Vague Service Level Agreements (SLAs) and ambiguous governance structures.',
    ],
    scope: [
      'Drafting executive summary aligning organizational value with tender objectives.',
      'Authoring detailed technical methodology and architecture overview.',
      'Developing structured implementation plans, Gantt schedules, and Work Breakdown Structures (WBS).',
      'Drafting Service Level Agreements (SLAs), Key Performance Indicators (KPIs), and escalation paths.',
      'Authoring project governance, risk management, and quality control frameworks.',
      'Assembling technical team profiles, staffing matrices, and responsibility assignment matrices (RACI).',
    ],
    methodology: [
      {
        step: '01',
        title: 'Architecture & Solution Workshops',
        description: 'Coordinate with technical leads to formulate the proposed solution.',
      },
      {
        step: '02',
        title: 'Modular Drafting',
        description: 'Author methodology, scope, execution plans, and governance according to RFP structure.',
      },
      {
        step: '03',
        title: 'Review Cycles & Red-Teaming',
        description: 'Iterative reviews against client criteria and competitive positioning.',
      },
      {
        step: '04',
        title: 'Final Polishing & Formatting',
        description: 'Standardize professional typographic hierarchy, diagrams, and formal styling.',
      },
    ],
    deliverables: [
      'Complete Technical Proposal Document (Word / PDF)',
      'Executive Summary & Value Proposition',
      'Technical Methodology & Implementation Roadmap',
      'SLA & Quality Management Manual',
      'Team Staffing & RACI Governance Matrix',
    ],
    benefits: [
      'High-scoring technical evaluations by procurement committees.',
      'Clear, defensible commitments that protect project delivery teams post-award.',
      'Consistent, authoritative voice throughout multi-section technical bids.',
    ],
    faqs: [
      {
        question: 'Do you write proposals for Saudi government entities?',
        answer:
          'Yes, a substantial portion of my experience focuses on Saudi government procurement, complying with local tender regulations, Etimad standards, and government IT guidelines.',
      },
    ],
    featured: true,
    status: 'published',
  },
  {
    id: 'srv-compliance-matrix',
    title: 'Compliance Matrix & Traceability Preparation',
    slug: 'compliance-matrix-preparation',
    categoryId: 'tender-proposal',
    categoryTitle: 'Tender & Proposal Services',
    shortDescription:
      'Constructing bulletproof compliance matrices mapping every tender requirement to exact proposal sections, annexes, and verifiable evidence.',
    fullIntro:
      'A compliance matrix is the procurement evaluator’s grading sheet. I construct systematic compliance matrices that prove 100% compliance with zero ambiguity.',
    problemsAddressed: [
      'Evaluation committees rejecting bids because they could not locate mandatory evidence.',
      'Confusion over partial vs full compliance status.',
      'Disconnect between the technical narrative and client specification clauses.',
    ],
    scope: [
      'Line-by-line requirement extraction from RFP, TOR, and amendments.',
      'Assigning compliance status (Fully Compliant, Partially Compliant with Justification).',
      'Cross-referencing exact page numbers, section headers, and appendix citations.',
      'Validating evidence attachments (certifications, datasheets, ISO accreditations).',
    ],
    methodology: [
      {
        step: '01',
        title: 'Deconstruction',
        description: 'Extract every mandatory requirement into a structured traceability log.',
      },
      {
        step: '02',
        title: 'Mapping & Verification',
        description: 'Pair each clause with the corresponding technical chapter and supporting exhibits.',
      },
      {
        step: '03',
        title: 'Cross-Audit',
        description: 'Verify cross-references against final proposal pagination.',
      },
    ],
    deliverables: [
      'Master Requirement Traceability & Compliance Matrix (Excel / Word)',
      'Verification Evidence Index',
      'Compliance Summary Sheet for Executive Sign-off',
    ],
    benefits: [
      'Enables evaluators to check off every requirement in minutes.',
      'Eliminates the possibility of accidental non-compliance disqualification.',
      'Serves as an internal quality checkpoint before package sealing.',
    ],
    faqs: [
      {
        question: 'Why is a formal compliance matrix crucial in Etimad tenders?',
        answer:
          'Saudi government committees review dozens of complex bids. A crystal-clear compliance matrix facilitates rapid scoring and shields your submission from administrative rejection.',
      },
    ],
    featured: true,
    status: 'published',
  },
  {
    id: 'srv-bid-qa-review',
    title: 'Bid QA & Red-Team Proposal Review',
    slug: 'bid-qa-proposal-review',
    categoryId: 'tender-proposal',
    categoryTitle: 'Tender & Proposal Services',
    shortDescription:
      'Independent quality assurance audits: detecting gaps, inconsistencies, formatting issues, and compliance discrepancies prior to final submission.',
    fullIntro:
      'Before a proposal goes out the door, it must undergo uncompromising scrutiny. I serve as the critical internal evaluator to catch flaws before the client does.',
    problemsAddressed: [
      'Internal discrepancies between technical methodology and project timeline.',
      'Missing mandatory attachments, signed forms, or expired corporate certificates.',
      'Poor document formatting, broken cross-references, or unprofessional presentation.',
      'Unsubstantiated claims that weaken proposal credibility.',
    ],
    scope: [
      'Pre-submission compliance gate audit.',
      'Technical consistency review across all proposal chapters.',
      'Verification of team CVs, project references, and authorization letters.',
      'Document formatting, typography, header hierarchy, and brand compliance checks.',
      'Generation of Red-Team remediation punchlist.',
    ],
    methodology: [
      {
        step: '01',
        title: 'Independent Gate Review',
        description: 'Audit the draft strictly as a skeptical client evaluation committee.',
      },
      {
        step: '02',
        title: 'Gap Identification',
        description: 'Flag missing deliverables, ambiguous language, and non-compliant clauses.',
      },
      {
        step: '03',
        title: 'Remediation Sprint',
        description: 'Work with the bid team to close all flagged gaps before deadline.',
      },
    ],
    deliverables: [
      'Bid QA Audit Report & Remediation Checklist',
      'Annotation & Inconsistency Markup',
      'Final Pre-Submission Clearance Sign-off',
    ],
    benefits: [
      'Zero-defect submissions delivered with confidence.',
      'Consistent, unified voice regardless of how many contributors drafted sections.',
      'Maximized win probability through thorough pre-submission stress testing.',
    ],
    faqs: [
      {
        question: 'How fast can a Bid QA review be performed?',
        answer:
          'Depending on the proposal page count, expedited 24-to-48-hour turnarounds are available for critical tender deadlines.',
      },
    ],
    featured: false,
    status: 'published',
  },
  {
    id: 'srv-web-dev',
    title: 'Web & E-Commerce Development (WordPress, Next.js, Salla)',
    slug: 'web-ecommerce-development',
    categoryId: 'it-software',
    categoryTitle: 'IT & Software Solutions',
    shortDescription:
      'Custom website development, high-performance e-commerce platforms (Salla, Zid, WordPress), and modern web applications built for conversion and speed.',
    fullIntro:
      'Leveraging full-stack engineering and SEO expertise to build modern, high-converting digital platforms that perform seamlessly across all devices.',
    problemsAddressed: [
      'Slow, bloated websites failing Core Web Vitals.',
      'Poor mobile responsiveness and unintuitive navigation.',
      'Substandard e-commerce setups lacking localization for Gulf and Saudi markets.',
      'Inflexible CMS architectures that break upon plugin updates.',
    ],
    scope: [
      'Custom WordPress theme & plugin integration.',
      'E-commerce store setup and customization on Salla, Zid, and WooCommerce.',
      'Front-end engineering using React, Next.js, HTML5, CSS3, and Tailwind.',
      'API integrations, payment gateway connections, and database tuning.',
      'Full cross-browser responsiveness and mobile-first optimization.',
    ],
    methodology: [
      {
        step: '01',
        title: 'Architecture & UX Wireframing',
        description: 'Define information structure, user journeys, and component requirements.',
      },
      {
        step: '02',
        title: 'Development & API Integration',
        description: 'Clean coding following modern standards and modular structures.',
      },
      {
        step: '03',
        title: 'Performance & Speed Auditing',
        description: 'Optimize assets, caching, and server response times.',
      },
      {
        step: '04',
        title: 'Deployment & Training',
        description: 'Launch on reliable hosting with client management walkthrough.',
      },
    ],
    deliverables: [
      'Production-Ready Website / E-commerce Store',
      'Custom Responsive Templates',
      'Speed-Optimized Asset Bundle',
      'Administrator Handover & Documentation',
    ],
    benefits: [
      'High performance scores on Google PageSpeed Insights.',
      'Flawless localized shopping experience for regional audiences.',
      'Maintainable codebase that scales as business needs expand.',
    ],
    faqs: [
      {
        question: 'Do you support Saudi local e-commerce platforms like Salla and Zid?',
        answer:
          'Yes, I have hands-on experience building, configuring, and optimizing stores on both Salla and Zid platforms.',
      },
    ],
    featured: true,
    status: 'published',
  },
  {
    id: 'srv-technical-seo',
    title: 'Technical SEO & Website Optimization',
    slug: 'technical-seo-optimization',
    categoryId: 'it-software',
    categoryTitle: 'IT & Software Solutions',
    shortDescription:
      'In-depth technical SEO audits, Core Web Vitals optimization, crawling/indexing remediation, and structured data implementation.',
    fullIntro:
      'Search engine visibility is built on sound technical infrastructure. I diagnose and resolve technical SEO bottlenecks that prevent websites from ranking.',
    problemsAddressed: [
      'Pages not getting indexed or dropping from Google Search Console.',
      'Failing Core Web Vitals (LCP, INP, CLS) hurting rankings and user retention.',
      'Improper URL structures, broken redirects, and duplicate content issues.',
      'Absence of rich Schema.org structured data snippets.',
    ],
    scope: [
      'Full technical crawl audit with Google Search Console analysis.',
      'Core Web Vitals remediation (asset minification, image compression, script deferral).',
      'XML Sitemap, robots.txt, and canonical URL structure fixes.',
      'Schema.org structured data (JSON-LD) implementation.',
      'On-page metadata, semantic headings, and internal linking hierarchy.',
    ],
    methodology: [
      {
        step: '01',
        title: 'Comprehensive Crawl Audit',
        description: 'Identify 4xx errors, redirect loops, and indexing roadblocks.',
      },
      {
        step: '02',
        title: 'Core Web Vitals Remediation',
        description: 'Optimize render-blocking resources and layout stability.',
      },
      {
        step: '03',
        title: 'Schema & Semantic Structuring',
        description: 'Inject rich JSON-LD snippets for entities, products, and articles.',
      },
      {
        step: '04',
        title: 'Monitoring & Verification',
        description: 'Validate fixes inside Search Console and track search performance.',
      },
    ],
    deliverables: [
      'Technical SEO Audit & Remediation Log',
      'Optimized Robots.txt & Dynamic XML Sitemap',
      'Implemented JSON-LD Structured Data Modules',
      'Core Web Vitals Performance Benchmark Report',
    ],
    benefits: [
      'Higher organic search rankings and improved indexation speed.',
      'Enhanced click-through rates from rich search snippet appearances.',
      'Faster load times directly boosting user conversion rates.',
    ],
    faqs: [
      {
        question: 'How do you test and verify SEO fixes?',
        answer:
          'Using Google Search Console URL Inspection, Lighthouse, and live crawler validations.',
      },
    ],
    featured: false,
    status: 'published',
  },
  {
    id: 'srv-it-biz-dev',
    title: 'IT Business Development & Tender Opportunity Analysis',
    slug: 'it-business-development-tender-opportunity',
    categoryId: 'biz-dev',
    categoryTitle: 'Business Development & IT Consulting',
    shortDescription:
      'Strategic opportunity pipeline tracking, client requirement analysis, competitor benchmarking, and pre-sales technical consultation.',
    fullIntro:
      'Merging technical acumen with business development insight. I help technology organizations identify winning tender opportunities and position their bids strategically.',
    problemsAddressed: [
      'Wasting significant team resources bidding on low-probability tenders.',
      'Inability to clearly articulate technical value propositions to enterprise decision makers.',
      'Lack of competitive intelligence regarding incumbent vendors and market pricing.',
      'Disorganized tender pipeline management resulting in rushed submissions.',
    ],
    scope: [
      'Opportunity identification across public portals (Etimad) and private channels.',
      'Evaluation of tender feasibility, resource availability, and technical capability fit.',
      'Formulation of formal Bid/No-Bid assessment criteria.',
      'Competitive landscape analysis and strategic win-theme formulation.',
      'Technical pre-sales support during client discovery and clarification phases.',
    ],
    methodology: [
      {
        step: '01',
        title: 'Pipeline Ingestion & Tracking',
        description: 'Systematically monitor published RFPs and client announcements.',
      },
      {
        step: '02',
        title: 'Feasibility Scoring',
        description: 'Score opportunities against technical competency, timing, and margin.',
      },
      {
        step: '03',
        title: 'Win Strategy Definition',
        description: 'Pinpoint differentiation points and formulate persuasive value propositions.',
      },
    ],
    deliverables: [
      'Tender Opportunity Feasibility Brief',
      'Bid/No-Bid Evaluation Decision Matrix',
      'Competitor & Win-Theme Strategy Sheet',
    ],
    benefits: [
      'Substantially higher win rate by filtering out unviable bids early.',
      'Better resource allocation across engineering, BD, and management.',
      'Stronger technical value propositions tailored to client strategic goals.',
    ],
    faqs: [
      {
        question: 'How does an IT background help in business development?',
        answer:
          'Because I understand software architectures, APIs, and cloud infrastructure directly, I can evaluate technical feasibility and translate technical capabilities into commercial terms without friction.',
      },
    ],
    featured: true,
    status: 'published',
  },
  {
    id: 'srv-exhibitions-digital',
    title: 'Exhibition & Digital Presence Setup',
    slug: 'exhibition-digital-presence-setup',
    categoryId: 'additional-custom',
    categoryTitle: 'Additional Services & Custom Solutions',
    shortDescription:
      'Digital presence, interactive demos, and presentation collateral for trade shows, exhibitions, and corporate events.',
    fullIntro:
      'Helping organizations showcase their capabilities at major industry exhibitions and business conferences through high-impact digital collateral and interactive demos.',
    problemsAddressed: [
      'Lack of interactive or modern digital displays at corporate booths.',
      'Inconsistent technical collateral that fails to impress enterprise attendees.',
      'Missed lead capture opportunities during live events.',
    ],
    scope: [
      'Interactive web demos and touch-screen kiosks for exhibition booths.',
      'Digital profile presentations and downloadable capability sheets.',
      'QR-code lead capture workflows and CRM routing.',
      'Technical presentation decks for conference speaking sessions.',
    ],
    methodology: [
      {
        step: '01',
        title: 'Concept & Event Alignment',
        description: 'Align display collateral with the exhibition theme and target attendees.',
      },
      {
        step: '02',
        title: 'Digital Asset Development',
        description: 'Build fast, responsive kiosk interfaces and digital showcases.',
      },
      {
        step: '03',
        title: 'On-site Readiness & Testing',
        description: 'Ensure offline caching and bulletproof display stability.',
      },
    ],
    deliverables: [
      'Interactive Booth Web Showcase',
      'Digital Corporate Profile & Portfolio Deck',
      'Lead Capture & Routing Workflow',
    ],
    benefits: [
      'Engaging attendee experience that elevates company brand authority.',
      'Seamless digital lead collection directly into sales pipelines.',
    ],
    faqs: [
      {
        question: 'Can you provide custom services tailored to our specific event?',
        answer:
          'Yes, this service is fully customizable based on booth requirements, technical demos, and company branding.',
      },
    ],
    featured: false,
    status: 'published',
  },
];

export const INITIAL_PROJECTS: Project[] = [
  // --- TENDER & PROPOSAL FLAGSHIP PROJECTS ---
  {
    id: 'proj-etimad-it-gov',
    title: 'Enterprise Saudi Government IT Infrastructure Tender Response',
    titleAr: 'مناقصة البنية التحتية لتقنية المعلومات للحكومة السعودية (منصة اعتماد)',
    slug: 'saudi-gov-it-infrastructure-tender',
    category: 'Tender Preparation Projects',
    shortDescription:
      'Comprehensive tender response package for a large-scale government technology project on the Etimad platform.',
    fullDescription:
      'Led the end-to-end technical proposal preparation and compliance verification for an enterprise government tender in the Kingdom of Saudi Arabia. Deconstructed complex TOR requirements, drafted comprehensive technical methodology, constructed a 120-item compliance matrix, and aligned all deliverables with public procurement regulations.',
    role: 'Tender Proposal Writer & Bid QA Specialist',
    country: 'sa',
    countryName: 'Saudi Arabia (السعودية)',
    icon: '🏛️',
    technologies: ['Etimad Portal', 'MS Word & Excel', 'Visio', 'SLA Frameworks', 'ITIL Governance'],
    objectives: [
      'Deconstruct extensive government RFP documentation with zero omissions.',
      'Formulate comprehensive technical methodology covering phased rollout and SLA management.',
      'Deliver an airtight compliance matrix mapping all mandatory technical specifications.',
      'Ensure 100% adherence to submission guidelines on the Etimad portal.',
    ],
    results: 'Verified submission completed with 100% compliance across all mandatory administrative and technical gates.',
    featured: true,
    status: 'published',
  },
  {
    id: 'proj-cloud-bid-qa',
    title: 'Enterprise Cloud Migration & Managed Services Bid QA Audit',
    titleAr: 'تدقيق الجودة والامتثال لمشروع الانتقال السحابي والخدمات المدارة',
    slug: 'cloud-migration-bid-qa-audit',
    category: 'Bid QA & Compliance Projects',
    shortDescription:
      'Red-Team compliance review and QA audit for a multi-million SAR cloud infrastructure proposal.',
    fullDescription:
      'Conducted rigorous independent quality assurance on a high-stakes technical bid. Identified critical compliance gaps regarding data residency constraints, resolved cross-chapter SLA inconsistencies, and standardized corporate team qualification matrices.',
    role: 'Bid QA & Compliance Lead',
    country: 'sa',
    countryName: 'Saudi Arabia (السعودية)',
    icon: '☁️',
    technologies: ['Compliance Matrix', 'Traceability Tools', 'Risk Register', 'Audit Checklists'],
    objectives: [
      'Audit draft technical response against strict national data governance and cloud security mandates.',
      'Eliminate discrepancies between technical narrative and resource allocations.',
      'Standardize technical team CVs to meet mandatory qualification thresholds.',
    ],
    results: 'Eliminated 14 compliance discrepancies and 3 disqualification risks prior to final package sign-off.',
    featured: true,
    status: 'published',
  },
  {
    id: 'proj-erp-custom-sow',
    title: 'Enterprise Custom ERP & CRM Technical Methodology',
    titleAr: 'المنهجية الفنية ونطاق العمل لأنظمة تخطيط الموارد وإدارة العملاء',
    slug: 'enterprise-erp-crm-technical-methodology',
    category: 'Technical Proposal Projects',
    shortDescription:
      'Detailed technical solution architecture, methodology, and implementation plan for enterprise ERP deployment.',
    fullDescription:
      'Authored the complete technical proposal chapter for a large enterprise resource planning (ERP) and customer relationship management (CRM) bid. Formulated the Agile execution methodology, database migration strategy, user acceptance testing (UAT) milestones, and post-go-live warranty protocols.',
    role: 'Technical Proposal Writer',
    country: 'sa',
    countryName: 'Saudi Arabia (السعودية)',
    icon: '⚙️',
    technologies: ['ERP Architecture', 'Agile/Scrum Framework', 'UAT Matrices', 'Implementation Plans'],
    objectives: [
      'Translate complex enterprise software workflows into clear, evaluative proposal narratives.',
      'Design phased implementation timeline with risk mitigation checkpoints.',
      'Formulate comprehensive user training and knowledge transfer methodology.',
    ],
    results: 'Achieved maximum technical evaluation score for project methodology and governance sections.',
    featured: true,
    status: 'published',
  },

  // --- 25 AUTHENTIC CLIENT WEBSITES & DIGITAL PLATFORMS (USER ATTACHMENT) ---
  {
    id: 'proj-web-1',
    title: 'Bahrain Finder',
    titleAr: 'بحرين فايندر',
    slug: 'bahrain-finder',
    domain: 'bahrainfinder.bh',
    url: 'https://bahrainfinder.bh',
    country: 'bh',
    countryName: 'Bahrain (البحرين)',
    icon: '🏢',
    category: 'Digital Solutions',
    shortDescription:
      'منصة رقمية عقارية متكاملة تتيح اكتشاف وشراء وبيع العقارات في البحرين مع نظام إدارة محتوى متقدم وخريطة تفاعلية.',
    fullDescription:
      'منصة رقمية عقارية متكاملة تتيح اكتشاف وشراء وبيع العقارات في البحرين. قمنا بتطوير الموقع مع نظام إدارة محتوى متقدم، بالإضافة إلى استراتيجية تسويق إلكتروني شاملة زادت من وضوح العلامة التجارية وجذبت عملاء جدد. النظام يتضمن خريطة تفاعلية، محرك بحث متقدم، وإدارة علاقات عملاء متكاملة.',
    role: 'Web Developer & Digital Systems Lead',
    technologies: ['Custom CMS', 'Interactive Maps', 'CRM System', 'Advanced Search', 'SEO & Marketing'],
    objectives: [
      'تطوير نظام إدارة محتوى مخصص مع لوحة تحكم متقدمة لإدارة العقارات والعملاء.',
      'دمج خريطة تفاعلية متقدمة ومحرك بحث ديناميكي لتسهيل الوصول للعقارات.',
      'تنفيذ نظام CRM لمتابعة طلبات العملاء وتحسين التحويلات البيعية.',
    ],
    highlights: [
      {
        icon: 'fas fa-chart-line',
        title: 'نتائج التسويق',
        text: 'زيادة حركة المرور بنسبة 300% خلال 6 أشهر من خلال استراتيجية تسويق محكمة.',
      },
      {
        icon: 'fas fa-cogs',
        title: 'النظام التقني',
        text: 'تطوير نظام إدارة محتوى مخصص مع لوحة تحكم متقدمة لإدارة العقارات والعملاء.',
      },
      {
        icon: 'fas fa-users',
        title: 'إدارة العملاء',
        text: 'تنفيذ نظام CRM لمتابعة العملاء وتحسين تجربة المستخدم وزيادة المبيعات.',
      },
    ],
    results: 'زيادة حركة المرور بنسبة 300% خلال 6 أشهر مع مضاعفة الاستفسارات العقارية المؤكدة.',
    featured: true,
    status: 'published',
  },
  {
    id: 'proj-web-2',
    title: 'Balanced Scorecard Center',
    titleAr: 'مركز الأداء المتوازن للتدريب',
    slug: 'balanced-scorecard-center',
    domain: 'bscenter.org/ar',
    url: 'https://bscenter.org/ar',
    country: 'sa',
    countryName: 'Saudi Arabia (السعودية)',
    icon: '🎓',
    category: 'Web Development Projects',
    shortDescription:
      'مركز تدريب واستشارات متخصص في السعودية: موقع تعليمي تفاعلي، نظام حجز دورات إلكتروني، وتطبيق محمول للطلاب.',
    fullDescription:
      'مركز تدريب واستشارات متخصص قدمنا له حلولاً متكاملة تشمل تطوير موقع تعليمي تفاعلي، نظام حجز دورات إلكتروني، استراتيجية تسويق تعليمي، وتطبيق محمول للطلاب. ساعدت الحلول في توسيع قاعدة العملاء وزيادة الإيرادات بنسبة 150% خلال السنة الأولى.',
    role: 'Full-Stack Web & E-Learning Platform Developer',
    technologies: ['Course Booking System', 'Local Payment Gateways', 'Mobile Learning App', 'Educational CRM'],
    objectives: [
      'تطوير منصة تعليمية تفاعلية تدعم حجز الدورات التدريبية وإدارتها.',
      'توفير نظام حجز متكامل مع بوابات دفع إلكترونية سعودية وخليجية آمنة.',
      'تطوير تطبيق للهواتف الذكية للتعلم عن بُعد والتفاعل المباشر مع المدربين.',
    ],
    highlights: [
      {
        icon: 'fas fa-mobile-alt',
        title: 'تطبيق محمول',
        text: 'تطوير تطبيق خاص بالهواتف الذكية يسمح بالتعلم عن بعد ومتابعة الدروس والتفاعل مع المدربين.',
      },
      {
        icon: 'fas fa-shopping-cart',
        title: 'نظام حجز إلكتروني',
        text: 'نظام حجز دورات متكامل مع بوابة دفع إلكترونية آمنة وتكامل مع أنظمة الدفع المحلية.',
      },
      {
        icon: 'fas fa-bullhorn',
        title: 'تسويق تعليمي',
        text: 'حملة تسويقية مستهدفة زادت من نسبة الاشتراكات بنسبة 150% وجذبت طلاب من دول خليجية مختلفة.',
      },
    ],
    results: 'زيادة الإيرادات والاشتراكات بنسبة 150% خلال السنة الأولى مع توسع خليجي واسع.',
    featured: true,
    status: 'published',
  },
  {
    id: 'proj-web-3',
    title: 'Equalite Foods',
    titleAr: 'إيكوالايت فودز',
    slug: 'equalite-foods',
    domain: 'equalitefoods.com',
    url: 'https://equalitefoods.com',
    country: 'in',
    countryName: 'India (الهند)',
    icon: '🥗',
    category: 'E-commerce Websites',
    shortDescription:
      'متجر إلكتروني متكامل لشركة الأغذية الصحية والعضوية، مع نظام إدارة طلبات وتطبيق ولاء للمستهلكين.',
    fullDescription:
      'لشركة الأغذية الصحية قمنا بتطوير متجر إلكتروني متكامل، نظام إدارة طلبات، استراتيجية تسويق للمنتجات الصحية، وتطبيق ولاء للعملاء. ركزنا على تجربة مستخدم سلسة وتصميم يعكس طبيعة المنتجات الصحية والعضوية.',
    role: 'E-Commerce Developer',
    technologies: ['E-Commerce Platform', 'Order Management System', 'Loyalty Rewards', 'UX Design'],
    objectives: [
      'بناء متجر إلكتروني سريع وتفاعلي يبرز القيمة الغذائية للمنتجات الصحية.',
      'تأسيس نظام إدارة طلبات وتوصيل فوري متعدد الخيارات.',
    ],
    highlights: [
      {
        icon: 'fas fa-shopping-bag',
        title: 'متجر إلكتروني',
        text: 'تطوير متجر إلكتروني سريع وسهل الاستخدام مع نظام دفع متعدد الخيارات.',
      },
      {
        icon: 'fas fa-heart',
        title: 'منتجات صحية',
        text: 'تصميم يعكس الطبيعة الصحية للمنتجات مع معلومات تغذوية مفصلة.',
      },
      {
        icon: 'fas fa-tags',
        title: 'تسويق صحي',
        text: 'استراتيجية تسويق تركز على الفوائد الصحية وجذبت عملاء مهتمين بالصحة والتغذية.',
      },
    ],
    results: 'بناء قاعدة مستهلكين مخلصين ومضاعفة المبيعات عبر المنصة الرقمية.',
    featured: false,
    status: 'published',
  },
  {
    id: 'proj-web-4',
    title: 'Dost Ziraat',
    titleAr: 'دوست زراعت إيشليتميلاري',
    slug: 'dost-ziraat',
    domain: 'dostziraat.com',
    url: 'https://dostziraat.com',
    country: 'tr',
    countryName: 'Turkey (تركيا)',
    icon: '🚜',
    category: 'Software & ERP Solutions',
    shortDescription:
      'نظام ERP زراعي متكامل لإدارة المزارع والثروة الحيوانية، متابعة المحاصيل، وتحليل بيانات الإنتاج والتكاليف.',
    fullDescription:
      'لشركة الزراعة والثروة الحيوانية قمنا بتطوير نظام إدارة مزارع متكامل، موقع تعريفي، استراتيجية تسويق للمنتجات الزراعية، وتطبيق لمراقبة المحاصيل. النظام يحسن من كفاءة الإنتاج والتوزيع.',
    role: 'ERP Solutions & Web Developer',
    technologies: ['Custom Farm ERP', 'Data Analytics', 'Crop Monitoring', 'Multi-Language Portal'],
    objectives: [
      'تطوير نظام ERP مخصص لإدارة المزارع يتابع المحاصيل والثروة الحيوانية والتكاليف بدقة.',
      'توفير لوحات تحليلات بيانية لدعم اتخاذ القرارات الإنتاجية والتشغيلية.',
    ],
    highlights: [
      {
        icon: 'fas fa-seedling',
        title: 'نظام إدارة مزارع',
        text: 'نظام ERP مخصص لإدارة المزارع يتابع المحاصيل والثروة الحيوانية والتكاليف.',
      },
      {
        icon: 'fas fa-chart-pie',
        title: 'تحليل البيانات',
        text: 'أدوات تحليل بيانات متقدمة تساعد في اتخاذ قرارات إنتاجية وتوزيعية ذكية.',
      },
    ],
    results: 'تحسين كفاءة الإنتاج وتخفيض تكاليف الهدر التشغيلي للمزارع.',
    featured: true,
    status: 'published',
  },
  {
    id: 'proj-web-5',
    title: 'SUMI LIMITED',
    titleAr: 'سومي ليمتد',
    slug: 'sumi-limited',
    domain: 'sumi.fillinglife.co/en/',
    url: 'https://sumi.fillinglife.co/en/',
    country: 'jp',
    countryName: 'Japan (اليابان)',
    icon: '🪑',
    category: 'E-commerce Websites',
    shortDescription:
      'متجر إلكتروني فاخر للأثاث الراقي في اليابان مع إمكانية استعراض المنتجات بتقنية العرض ثلاثي الأبعاد 3D.',
    fullDescription:
      'للعلامة التجارية الفاخرة للأثاث قمنا بتطوير متجر إلكتروني يعرض المنتجات بطريقة فنية، نظام إدارة طلبات، استراتيجية تسويق للفئة المستهدفة، وتطبيق عرض ثلاثي الأبعاد. ركزنا على الفخامة وتجربة المستخدم المميزة.',
    role: 'Luxury E-Commerce & 3D Web Integrator',
    technologies: ['3D Web Graphics', 'High-End UX', 'Order Processing', 'Bilingual English/Japanese'],
    objectives: [
      'عرض الأثاث بتقنيات ثلاثية الأبعاد تفاعلية تتيح للمشتري معاينة التفاصيل بدقة.',
      'بناء واجهة مستخدم فاخرة تواكب أرقى معايير التصميم الياباني الحديث.',
    ],
    highlights: [
      {
        icon: 'fas fa-couch',
        title: 'عرض ثلاثي الأبعاد',
        text: 'تطبيق يسمح بعرض المنتجات ثلاثية الأبعاد وتجربتها افتراضياً في المكان.',
      },
      {
        icon: 'fas fa-gem',
        title: 'تصميم فاخر',
        text: 'تصميم يعكس فخامة العلامة التجارية وجاذبية منتجاتها العالية الجودة.',
      },
    ],
    results: 'تجربة تسوق فاخرة حققت معدلات تحويل قياسية للفئة النخبوية.',
    featured: false,
    status: 'published',
  },
  {
    id: 'proj-web-6',
    title: 'MBM Brillen',
    titleAr: 'إم بي إم بريلين',
    slug: 'mbm-brillen',
    domain: 'mbm-brillen.de',
    url: 'https://mbm-brillen.de',
    country: 'de',
    countryName: 'Germany (ألمانيا)',
    icon: '👓',
    category: 'E-commerce Websites',
    shortDescription:
      'متجر إلكتروني ألماني للنظارات الفاخرة مزود بتقنية الواقع المعزز (AR) لتجربة النظارات افتراضياً.',
    fullDescription:
      'عملنا مع هذه العلامة التجارية الألمانية للنظارات الفاخرة على تطوير متجر إلكتروني متكامل، نظام إدارة علاقات عملاء، استراتيجية مبيعات دولية، وتطبيق للواقع المعزز يسمح بتجربة النظارات افتراضياً. ساعدت الحلول في توسيع السوق عالمياً.',
    role: 'E-Commerce Architect & AR Integrator',
    technologies: ['Augmented Reality (AR)', 'Virtual Try-On', 'International Sales', 'Multi-Store Inventory'],
    objectives: [
      'تطوير تقنية تسمح بتجربة النظارات افتراضياً قبل الشراء باستخدام كاميرا الهاتف والكمبيوتر.',
      'تأسيس نظام إدارة مخزون دولي متكامل مع قنوات بيع متعددة.',
    ],
    highlights: [
      {
        icon: 'fas fa-vr-cardboard',
        title: 'تطبيق الواقع المعزز',
        text: 'تطوير تقنية تسمح بتجربة النظارات افتراضياً قبل الشراء بدقة تامة.',
      },
      {
        icon: 'fas fa-globe',
        title: 'توسع دولي',
        text: 'استراتيجية مبيعات دولية زادت من المبيعات عبر الإنترنت بنسبة 200% في سنة واحدة.',
      },
    ],
    results: 'زيادة المبيعات الرقمية بنسبة 200% وتوسع دولي في أسواق أوروبا.',
    featured: true,
    status: 'published',
  },
  {
    id: 'proj-web-7',
    title: 'Gadget BD',
    titleAr: 'جادجيت بي دي',
    slug: 'gadget-bd',
    domain: 'gadgetbd.com',
    url: 'https://gadgetbd.com',
    country: 'bd',
    countryName: 'Bangladesh (بنغلاديش)',
    icon: '📱',
    category: 'E-commerce Websites',
    shortDescription:
      'متجر إلكتروني فائق السرعة متخصص في إكسسوارات Apple والإلكترونيات، مع محرك إدارة عروض وتخفيضات تفاعلية.',
    fullDescription:
      'للمتجر الإلكتروني المتخصص في إكسسوارات أبل قمنا بتطوير متجر سريع وسهل الاستخدام، نظام إدارة عروض، استراتيجية تسويق تركز على العروض، وتطبيق للهواتف. ركزنا على سرعة التصفح وسهولة الشراء.',
    role: 'E-Commerce Performance Lead',
    technologies: ['High-Performance E-Commerce', 'Flash Sales Engine', 'Mobile Optimization', 'Payment API'],
    objectives: [
      'تحقيق أقصى سرعة تحميل ممكنة لتسهيل الشراء الفوري ورفع معدل التحويل.',
      'بناء نظام عروض وتخفيضات ديناميكي يواكب مواسم إطلاق الأجهزة الجديدة.',
    ],
    highlights: [
      {
        icon: 'fas fa-bolt',
        title: 'سرعة الأداء',
        text: 'متجر سريع الاستجابة يحسن تجربة المستخدم ويزيد من معدلات إتمام الشراء.',
      },
      {
        icon: 'fas fa-tag',
        title: 'إدارة العروض',
        text: 'نظام متقدم لإدارة العروض والتخفيضات الزمنية الفورية.',
      },
    ],
    results: 'تحقيق أعلى سرعة تجاوب وتقليل معدل التخلي عن سلة التسوق.',
    featured: false,
    status: 'published',
  },
  {
    id: 'proj-web-8',
    title: 'Crown Turf',
    titleAr: 'كراون تورف',
    slug: 'crown-turf',
    domain: 'crownturf.ca',
    url: 'https://crownturf.ca',
    country: 'ca',
    countryName: 'Canada (كندا)',
    icon: '🏡',
    category: 'Web Development Projects',
    shortDescription:
      'موقع تعريفي متكامل لشركة العشب الصناعي في كندا مزود بحاسبة قياسات تفاعلية وتقدير تكلفة لحظي.',
    fullDescription:
      'لشركة العشب الصناعي قمنا بتطوير موقع تعريفي متكامل، نظام حجز قياسات، استراتيجية تسويق محلي، وتطبيق لحساب التكلفة. ركزنا على إظهار جودة المنتجات وسهولة عملية الشراء والتركيب.',
    role: 'Web Developer & Interactive Tool Builder',
    technologies: ['Custom Measurements Calculator', 'Quote Request Engine', 'Local SEO Canada', 'Project Gallery'],
    objectives: [
      'برمجة أداة تفاعلية لحساب مساحات العشب الصناعي وحساب التكلفة التقديرية بدقة.',
      'تحسين التواجد المحلي في محركات البحث عبر كندا لجلب عملاء ذوي نية شراء عالية.',
    ],
    highlights: [
      {
        icon: 'fas fa-ruler-combined',
        title: 'حاسبة القياسات',
        text: 'أداة تفاعلية لحساب القياسات المطلوبة والتكلفة النهائية تلقائياً.',
      },
      {
        icon: 'fas fa-map-marker-alt',
        title: 'تسويق محلي',
        text: 'استراتيجية تسويق موجهة جغرافياً للمناطق المستهدفة في كندا.',
      },
    ],
    results: 'مضاعفة طلبات معاينة المشاريع ورفع كفاءة تسعير الأعمال بنسبة 45%.',
    featured: false,
    status: 'published',
  },
  {
    id: 'proj-web-9',
    title: 'NEUROGLOW',
    titleAr: 'نيوروغلو',
    slug: 'neuroglow',
    domain: 'neuroglow.com',
    url: 'https://neuroglow.com',
    country: 'us',
    countryName: 'United States (الولايات المتحدة)',
    icon: '🏥',
    category: 'Digital Solutions',
    shortDescription:
      'منصة عيادة طبية متخصصة في الولايات المتحدة: نظام حجوزات ذكي، مدونة طبية متوافقة، ومتابعة رقمية للمرضى.',
    fullDescription:
      'للعيادة الطبية المتخصصة قمنا بتطوير نظام حجوزات متقدم، موقع طبي مع مدونة طبية، استراتيجية تسويق طبي متخصصة، وتطبيق لمتابعة المرضى. حسنت الحلول من تجربة المرضى وزيادة عدد الحجوزات بنسبة 180%.',
    role: 'Full-Stack Medical Platform Developer',
    technologies: ['Medical Booking System', 'Automated Reminders', 'Healthcare SEO', 'Patient Follow-Up'],
    objectives: [
      'بناء نظام حجز ذكي يتكامل مع التقويم الطبي ويرسل تذكيرات تلقائية لمنع إلغاء المواعيد.',
      'تطبيق استراتيجية تسويق طبي دقيقة تلتزم بالمعايير المهنية وتستقطب الحالات المناسبة.',
    ],
    highlights: [
      {
        icon: 'fas fa-calendar-check',
        title: 'نظام حجوزات ذكي',
        text: 'نظام حجوزات يتكامل مع التقويم ويرسل تذكيرات تلقائية ويقلل من المواعيد الملغاة.',
      },
      {
        icon: 'fas fa-stethoscope',
        title: 'تسويق طبي',
        text: 'استراتيجية تسويق طبي متخصصة تلتزم باللوائح الطبية وتجذب المرضى المناسبين.',
      },
    ],
    results: 'زيادة عدد الحجوزات المؤكدة بنسبة 180% وخفض المواعيد الملغاة.',
    featured: true,
    status: 'published',
  },
  {
    id: 'proj-web-10',
    title: 'Absher Clearance Services',
    titleAr: 'أبشر لتخليص المعاملات',
    slug: 'absher-bh',
    domain: 'absherbh.com',
    url: 'https://absherbh.com',
    country: 'bh',
    countryName: 'Bahrain (البحرين)',
    icon: '📄',
    category: 'Software & ERP Solutions',
    shortDescription:
      'نظام إدارة وتتبع المعاملات الحكومية للشركات والأفراد، مستندات ذكية، وأتمتة مسارات العمل في البحرين.',
    fullDescription:
      'لشركة الخدمات الحكومية قمنا بتطوير نظام إدارة معاملات، موقع للخدمات، استراتيجية تسويق للخدمات، وتطبيق للموظفين. النظام يحسن من كفاءة تقديم الخدمات ويقلل من وقت الإنجاز.',
    role: 'Workflow & ERP Systems Developer',
    technologies: ['Transaction Tracking ERP', 'Smart Document Automation', 'Time Tracking', 'Staff App'],
    objectives: [
      'أتمتة دورة حياة المعاملات الحكومية من الاستلام وحتى التسليم النهائي.',
      'توفير تتبع زمني فوري لكل معاملة لرفع إنتاجية الموظفين ورضا العملاء.',
    ],
    highlights: [
      {
        icon: 'fas fa-tasks',
        title: 'نظام إدارة معاملات',
        text: 'نظام متكامل لمتابعة المعاملات من البداية إلى النهاية مع إشعارات تلقائية.',
      },
      {
        icon: 'fas fa-file-contract',
        title: 'مستندات ذكية',
        text: 'نظام إنشاء وإدارة مستندات ذكي يقلل من الأخطاء الورقية بنسبة 90%.',
      },
    ],
    results: 'تقليص زمن إنجاز المعاملات بنسبة 50% مع دقة تامة في الأرشفة والتوثيق.',
    featured: false,
    status: 'published',
  },
  {
    id: 'proj-web-11',
    title: 'Osma Cosmetics',
    titleAr: 'أوزما كوزمتكس',
    slug: 'osma-cosmetics',
    domain: 'osmacosmetics.com',
    url: 'https://osmacosmetics.com',
    country: 'ae',
    countryName: 'United Arab Emirates (الإمارات)',
    icon: '💄',
    category: 'E-commerce Websites',
    shortDescription:
      'متجر تجميلي فاخر في الإمارات مزود بنظام توصيات ذكي حسب نوع البشرة والاحتياج وتجربة مستخدم جاذبة.',
    fullDescription:
      'للمتجر التجميلي الإلكتروني قمنا بتطوير متجر تجميلي متكامل، نظام توصيات منتجات، استراتيجية تسويق تجميلي، وتطبيق للعناية بالبشرة. ركزنا على تجربة مستخدم أنثوية وجذابة.',
    role: 'E-Commerce & Recommendation Engine Developer',
    technologies: ['Beauty E-Commerce', 'Skin Type Recommendation Algorithm', 'Brand Strategy', 'Mobile App'],
    objectives: [
      'برمجة نظام ذكي يوصي بالمستحضرات التجميلية المتوافقة مع نوع البشرة.',
      'بناء واجهة تسوق أنيقة تعزز مكانة العلامة التجارية في السوق الخليجي.',
    ],
    highlights: [
      {
        icon: 'fas fa-star',
        title: 'نظام توصيات',
        text: 'نظام ذكي يوصي بالمنتجات المناسبة لنوع البشرة والاحتياجات التجميلية.',
      },
      {
        icon: 'fas fa-spa',
        title: 'تجربة تجميلية',
        text: 'تصميم وتجربة مستخدم تعكس عالم التجميل والجمال العصري.',
      },
    ],
    results: 'رفع متوسط قيمة السلة الشرائية وزيادة معدل تكرار الشراء.',
    featured: false,
    status: 'published',
  },
  {
    id: 'proj-web-12',
    title: 'National Food Industries',
    titleAr: 'ناشيونال فود إنداستريز',
    slug: 'national-food-industries',
    domain: 'nfidubai.com',
    url: 'https://nfidubai.com',
    country: 'ae',
    countryName: 'United Arab Emirates (الإمارات)',
    icon: '🍿',
    category: 'Software & ERP Solutions',
    shortDescription:
      'بوابة شركة أغذية كبرى ومصانع في دبي: نظام إدارة المنتجات، سلسلة التوريد، وتطبيق ولاء للعملاء.',
    fullDescription:
      'لشركة الأغذية قمنا بتطوير موقع تعريفي متكامل، نظام إدارة منتجات، استراتيجية تسويق للوجبات الخفيفة، وتطبيق ولاء. ساعدت الحلول في زيادة الحصة السوقية وتحسين تجربة العملاء.',
    role: 'Corporate Web & Supply Chain Systems Lead',
    technologies: ['Supply Chain Tracking', 'Corporate Catalog', 'Customer Loyalty App', 'Distribution ERP'],
    objectives: [
      'تطوير نظام إدارة سلسلة توريد وتوزيع يحسن من كفاءة الإمداد ويقلل من الهدر.',
      'إطلاق برنامج وتطبيق ولاء يعزز مبيعات المنتجات في منافذ التجزئة.',
    ],
    highlights: [
      {
        icon: 'fas fa-truck-loading',
        title: 'سلسلة التوريد',
        text: 'نظام إدارة سلسلة توريد يحسن من كفاءة التوزيع ويقلل من الهدر.',
      },
      {
        icon: 'fas fa-gift',
        title: 'برنامج ولاء',
        text: 'تطبيق ولاء للعملاء زاد من تكرار الشراء بنسبة 40% وولاء المستهلكين.',
      },
    ],
    results: 'زيادة تكرار الشراء بنسبة 40% وتحسين الرقابة على شبكة التوزيع.',
    featured: true,
    status: 'published',
  },
  {
    id: 'proj-web-13',
    title: 'Apex Scaffolding',
    titleAr: 'أبيكس سكفولدينج',
    slug: 'apex-scaffolding',
    domain: 'apexscaffoldinguae.com',
    url: 'https://apexscaffoldinguae.com',
    country: 'ae',
    countryName: 'United Arab Emirates (الإمارات)',
    icon: '🏗️',
    category: 'Software & ERP Solutions',
    shortDescription:
      'نظام إدارة مشاريع إنشائية متكامل (ERP)، كتالوج منتجات تفاعلي، نظام نقاط بيع POS، واستراتيجية B2B للمقاولات.',
    fullDescription:
      'لشركة السقالات الرائدة قمنا بتطوير نظام إدارة مشاريع متكامل (ERP)، موقع شركة مع كتالوج منتجات تفاعلي، استراتيجية مبيعات B2B، ونظام POS للمبيعات المباشرة. حسنت الحلول من كفاءة العمليات وزادت المبيعات.',
    role: 'Construction ERP & POS Systems Architect',
    technologies: ['Construction ERP', 'POS System', 'Interactive Specs Catalog', 'B2B Procurement Flow'],
    objectives: [
      'بناء نظام ERP مخصص لقطاع الإنشاءات يربط بين المواقع والمخازن وإدارة المشاريع.',
      'تطبيق نظام نقاط بيع POS متقدم للمبيعات المباشرة في الفروع والمواقع.',
    ],
    highlights: [
      {
        icon: 'fas fa-project-diagram',
        title: 'نظام ERP متكامل',
        text: 'نظام إدارة موارد مؤسسية مخصص لقطاع الإنشاءات وإدارة المشاريع الإنشائية.',
      },
      {
        icon: 'fas fa-cash-register',
        title: 'نظام POS',
        text: 'نظام نقاط بيع متقدم للمبيعات المباشرة في الفروع ومواقع العمل.',
      },
      {
        icon: 'fas fa-handshake',
        title: 'مبيعات B2B',
        text: 'استراتيجية مبيعات للمؤسسات زادت من عقود الشركات الكبرى والجهات الحكومية.',
      },
    ],
    results: 'الفوز بعقود مقاولات كبرى وتحقيق دقة 100% في جرد معدات السقالات والمبيعات.',
    featured: true,
    status: 'published',
  },
  {
    id: 'proj-web-14',
    title: 'Apex Power Concepts',
    titleAr: 'أبيكس باور كونسبتس',
    slug: 'apex-power-concepts',
    domain: 'apexpowerconcepts.com',
    url: 'https://apexpowerconcepts.com',
    country: 'ae',
    countryName: 'United Arab Emirates (الإمارات)',
    icon: '☀️',
    category: 'Software & ERP Solutions',
    shortDescription:
      'نظام إدارة مشاريع الطاقة الشمسية، حاسبة طاقة تفاعلية، تطبيق لمراقبة الأداء لحظياً، واستراتيجية للمشاريع التجارية.',
    fullDescription:
      'لشركة الطاقة الشمسية قمنا بتطوير نظام إدارة مشاريع الطاقة الشمسية، موقع مع حاسبة طاقة تفاعلية، استراتيجية مبيعات للمشاريع التجارية والسكنية، وتطبيق لمراقبة أنظمة الطاقة الشمسية. ساعدت الحلول في زيادة كفاءة العمليات والمبيعات.',
    role: 'Solar Engineering Software & Web Lead',
    technologies: ['Solar Systems IoT Monitoring', 'Interactive Solar ROI Calculator', 'ERP Project Management', 'Mobile App'],
    objectives: [
      'تطوير تطبيق لمراقبة أداء المحطات الشمسية في الوقت الفعلي وتحليل العائد.',
      'برمجة حاسبة تفاعلية لحساب كميات التوفير وفترة استرداد رأس المال للمشاريع.',
    ],
    highlights: [
      {
        icon: 'fas fa-solar-panel',
        title: 'مراقبة الطاقة',
        text: 'تطبيق لمراقبة أداء أنظمة الطاقة الشمسية في الوقت الفعلي وتحليل البيانات.',
      },
      {
        icon: 'fas fa-calculator',
        title: 'حاسبة الطاقة',
        text: 'أداة تفاعلية لحساب توفير الطاقة والعائد على الاستثمار وتقديم المقترحات الفنية.',
      },
    ],
    results: 'زيادة إغلاق عقود محطات الطاقة الشمسية السكنية والتجارية بدقة حسابية عالية.',
    featured: true,
    status: 'published',
  },
  {
    id: 'proj-web-15',
    title: 'Ruifier',
    titleAr: 'رويفير',
    slug: 'ruifier',
    domain: 'ruifier.com',
    url: 'https://ruifier.com',
    country: 'gb',
    countryName: 'United Kingdom (المملكة المتحدة)',
    icon: '💎',
    category: 'E-commerce Websites',
    shortDescription:
      'متجر مجوهرات بريطاني فاخر مع نظام عرض ثلاثي الأبعاد 3D لتكبير القطع ومعاينة أدق التفاصيل الفنية.',
    fullDescription:
      'للعلامة التجارية البريطانية للمجوهرات قمنا بتطوير متجر فاخر، نظام عرض ثلاثي الأبعاد، استراتيجية تسويق للفئة العليا، وتطبيق للهواتف. ركزنا على الفخامة وتجربة التسوق الفاخرة.',
    role: 'Luxury E-Commerce & 3D Interactive Specialist',
    technologies: ['3D Jewelry Viewer', 'Luxury Micro-Interactions', 'High-Net-Worth UX', 'Secure Checkout'],
    objectives: [
      'تقنية لعرض المجوهرات ثلاثية الأبعاد وتكبيرها لرؤية أدق التفاصيل ونقاء الأحجار.',
      'تصميم واجهة متجر تعكس هوية المجوهرات البريطانية الراقية وتجذب المهتمين بالفخامة.',
    ],
    highlights: [
      {
        icon: 'fas fa-gem',
        title: 'عرض ثلاثي الأبعاد',
        text: 'تقنية لعرض المجوهرات ثلاثية الأبعاد وتكبيرها لرؤية التفاصيل الدقيقة للأحجار.',
      },
      {
        icon: 'fas fa-crown',
        title: 'تجربة فاخرة',
        text: 'تصميم وتجربة مستخدم تعكس فخامة المجوهرات ومكانتها الرفيعة.',
      },
    ],
    results: 'رفع معدل إتمام صفقات المجوهرات عالية القيمة عبر المتجر الإلكتروني.',
    featured: false,
    status: 'published',
  },
  {
    id: 'proj-web-16',
    title: 'Hidn-Ander',
    titleAr: 'هيدن-أندر',
    slug: 'hidn-ander',
    domain: 'hidnander.com',
    url: 'https://hidnander.com',
    country: 'eu',
    countryName: 'Europe (أوروبا)',
    icon: '👗',
    category: 'E-commerce Websites',
    shortDescription:
      'متجر أزياء وموضة أوروبي: تصفح أزياء متقدم، نظام شحن أوروبي متكامل، وتجربة تسوق سريعة وعصرية.',
    fullDescription:
      'لمشروع الأزياء قمنا بتطوير متجر أزياء، نظام إدارة تصنيفات، استراتيجية تسويق للموضة، وتطبيق للهواتف. ركزنا على الجودة وتجربة التسوق البسيطة والأنيقة.',
    role: 'Fashion E-Commerce Developer',
    technologies: ['Fashion Filter Engine', 'Cross-Border European Logistics', 'Lookbook UI', 'Mobile Commerce'],
    objectives: [
      'توفير تجربة تصفية متقدمة حسب المقاس واللون والموسم مع نظام شحن عابر للدول الأوروبية.',
    ],
    highlights: [
      {
        icon: 'fas fa-tshirt',
        title: 'متصفح أزياء',
        text: 'متصفح منتجات سهل الاستخدام مع تصفية متقدمة حسب المقاس واللون والتصميم.',
      },
      {
        icon: 'fas fa-shipping-fast',
        title: 'شحن أوروبي',
        text: 'نظام شحن متكامل مع خيارات مختلفة للدول الأوروبية وتتبع الشحنات.',
      },
    ],
    results: 'توسع انتشار العلامة في أسواق الموضة الأوروبية ونمو المبيعات المباشرة.',
    featured: false,
    status: 'published',
  },
  {
    id: 'proj-web-17',
    title: 'Hijab Hive',
    titleAr: 'هيجاب هايف',
    slug: 'hijab-hive',
    domain: 'hijabhive.com',
    url: 'https://hijabhive.com',
    country: 'gb',
    countryName: 'United Kingdom (المملكة المتحدة)',
    icon: '🧕',
    category: 'E-commerce Websites',
    shortDescription:
      'متجر إلكتروني رائد للموضة الإسلامية والحجاب في بريطانيا: مكتبة ألوان دقيقة، تصنيف أنسجة، ومجتمع تفاعلي.',
    fullDescription:
      'للمتجر الرائد للحجاب قمنا بتطوير متجر إسلامي، نظام إدارة ألوان وأنسجة، استراتيجية تسويق إسلامي، وتطبيق للهواتف. ركزنا على احتياجات المرأة المسلمة وتجربة التسوق المناسبة.',
    role: 'Modest Fashion E-Commerce Developer',
    technologies: ['Color Palette Matching Engine', 'Fabric & Textile Filtering', 'Modest Fashion Community', 'Shopify / WooCommerce'],
    objectives: [
      'تطوير نظام عرض ألوان دقيق يطابق درجات القماش الحقيقية مع خيارات الأنسجة والمقاسات.',
      'بناء مجتمع تفاعلي حول العلامة التجارية لدعم نمو المبيعات العضوية.',
    ],
    highlights: [
      {
        icon: 'fas fa-palette',
        title: 'مكتبة ألوان',
        text: 'نظام عرض ألوان دقيق ومدروس يساعد في اختيار اللون المناسب بثقة.',
      },
      {
        icon: 'fas fa-layer-group',
        title: 'أنسجة ومقاسات',
        text: 'تصنيف متقدم حسب نوع القماش والمقاس ومناسبة الاستخدام.',
      },
    ],
    results: 'بناء قاعدة عميلات واسعة في المملكة المتحدة ونسبة احتفاظ مرتفعة.',
    featured: false,
    status: 'published',
  },
  {
    id: 'proj-web-18',
    title: 'Miss Spa',
    titleAr: 'ميس سبا',
    slug: 'miss-spa',
    domain: 'miss-spa.com',
    url: 'https://miss-spa.com',
    country: 'us',
    countryName: 'United States (الولايات المتحدة)',
    icon: '🎭',
    category: 'E-commerce Websites',
    shortDescription:
      'متجر أمريكي للعناية بالبشرة: محرك توصيات حسب نوع البشرة، محتوى تعليمي تفاعلي، وتطبيق روتين عناية يومي.',
    fullDescription:
      'لعلامة العناية بالبشرة قمنا بتطوير متجر تجميلي، نظام توصيات حسب نوع البشرة، استراتيجية تسويق للعناية بالبشرة، وتطبيق للعناية اليومية. ركزنا على التعليم والرعاية.',
    role: 'E-Commerce & Routine Engine Developer',
    technologies: ['Smart Recommendation Engine', 'Daily Care Routine App', 'Content Hub', 'E-Commerce'],
    objectives: [
      'تطوير محرك توصيات يحلل طبيعة البشرة والمشكلات الجلدية لاقتراح الروتين الأمثل.',
    ],
    highlights: [
      {
        icon: 'fas fa-brain',
        title: 'محرك توصيات',
        text: 'نظام ذكي يوصي بالمنتجات حسب نوع البشرة والمشاكل والاحتياجات اليومية.',
      },
      {
        icon: 'fas fa-graduation-cap',
        title: 'محتوى تعليمي',
        text: 'محتوى تعليمي مبسط عن روتين العناية الصحيح لتعزيز ثقة المستهلك.',
      },
    ],
    results: 'زيادة ولاء العملاء وتكرار شراء منتجات العناية بالبشرة.',
    featured: false,
    status: 'published',
  },
  {
    id: 'proj-web-19',
    title: 'Lovinah Skincare',
    titleAr: 'لوفينا سكينكير',
    slug: 'lovinah-skincare',
    domain: 'lovinah.com',
    url: 'https://lovinah.com',
    country: 'us',
    countryName: 'United States (الولايات المتحدة)',
    icon: '✨',
    category: 'E-commerce Websites',
    shortDescription:
      'علامة عالمية للمستحضرات الفاخرة: متجر رقمي مع خبير تجميل افتراضي بالذكاء الاصطناعي وشحن دولي.',
    fullDescription:
      'للعلامة التجارية العالمية للعناية بالبشرة قمنا بتطوير متجر فاخر، نظام خبير تجميلي افتراضي، استراتيجية تسويق عالمي، وتطبيق للعناية الشاملة. ركزنا على الجودة العالية والخبرة.',
    role: 'AI E-Commerce Specialist & Full-Stack Lead',
    technologies: ['Virtual AI Beauty Advisor', 'Global Multi-Currency Commerce', 'Clinical Results Showcase', 'Mobile App'],
    objectives: [
      'دمج خبير افتراضي بالذكاء الاصطناعي لتحليل نوع البشرة وتوجيه المشتري للمنتج الصحيح.',
      'توفير بنية تحتية للتجارة العالمية تشمل الشحن الدولي ودعم العملات المتعددة.',
    ],
    highlights: [
      {
        icon: 'fas fa-robot',
        title: 'خبير تجميلي افتراضي',
        text: 'ذكاء اصطناعي يحلل احتياجات البشرة ويوصي بالحلول المثبتة سريرياً.',
      },
      {
        icon: 'fas fa-globe-americas',
        title: 'تواجد عالمي',
        text: 'استراتيجية تسويق وشحن عالمي تغطي مختلف القارات بسلاسة.',
      },
    ],
    results: 'توسع مبيعات العلامة التجارية عبر أكثر من 20 دولة عالمياً.',
    featured: false,
    status: 'published',
  },
  {
    id: 'proj-web-20',
    title: 'Sport Uniform',
    titleAr: 'سبورت يونيفورم',
    slug: 'sport-uniform',
    domain: 'sportuniform.com',
    url: 'https://sportuniform.com',
    country: 'us',
    countryName: 'United States (الولايات المتحدة)',
    icon: '⚽',
    category: 'Digital Solutions',
    shortDescription:
      'أداة تفاعلية متقدمة تتيح للفرق الرياضية والمدارس تصميم أطقمهم المخصصة أونلاين وإدارة الطلبات المجمعة.',
    fullDescription:
      'للمتجر المتخصص في الملابس الرياضية قمنا بتطوير نظام تصميم مخصص، متجر للمنتجات الرياضية، استراتيجية تسويق للفرق الرياضية، وتطبيق للتصميم. ركزنا على التخصيص والجودة.',
    role: 'Interactive Web Tool & E-Commerce Developer',
    technologies: ['Interactive Canvas Customizer', 'Team Batch Order Engine', 'Vector Rendering', 'E-Commerce'],
    objectives: [
      'برمجة أداة تصميم أطقم رياضية مباشرة على المتصفح مع معاينة الألوان والأرقام والأسماء.',
      'بناء نظام مخصص لإدارة طلبات الفرق والأكاديميات الرياضية والمدارس.',
    ],
    highlights: [
      {
        icon: 'fas fa-pen-fancy',
        title: 'مصمم مخصص',
        text: 'أداة تصميم تفاعلية تتيح تخصيص الملابس الرياضية لحظياً بكل سهولة.',
      },
      {
        icon: 'fas fa-users',
        title: 'فرق رياضية',
        text: 'نظام مخصص لإدارة طلبات الفرق الرياضية والجامعات والمدارس.',
      },
    ],
    results: 'تسهيل طلبات الملابس المخصصة للفرق الرياضية ومضاعفة حجم الصفقات المجمعة.',
    featured: false,
    status: 'published',
  },
  {
    id: 'proj-web-21',
    title: 'Cool Edu Virtual Classrooms',
    titleAr: 'كول إيديو للمجتمعات التعليمية',
    slug: 'cool-edu-platform-optimization',
    domain: 'classes5.cooledu.info',
    url: 'https://classes5.cooledu.info',
    country: 'eg',
    countryName: 'Egypt (مصر)',
    icon: '📚',
    category: 'Web Development Projects',
    shortDescription:
      'منصة فصول افتراضية ومجتمع تعليمي: إعادة هيكلة البنية التحتية، تسريع الأداء، وتكامل قواعد البيانات.',
    fullDescription:
      'للمجتمع التعليمي عبر الإنترنت قمنا بتطوير منصة تعليمية متكاملة، نظام إدارة فصول، استراتيجية تسويق تعليمي، وتطبيق للهواتف. ركزنا على التفاعل وسهولة التعلم. (يتطابق مع خبرتي العملية الرسمية في شركة Cool Edu).',
    role: 'WordPress Developer & Performance Specialist (Cool Edu)',
    technologies: ['WordPress', 'MySQL Optimization', 'Virtual Classrooms', 'Student Progress Reports', 'Asset Caching'],
    objectives: [
      'إعادة هيكلة المنصة لتتحمل آلاف الطلاب المتزامنين في فترات الاختبارات.',
      'تطوير نظام فصول افتراضية متكامل مع أدوات تفاعل وتتبع تقدم الطلاب.',
    ],
    highlights: [
      {
        icon: 'fas fa-chalkboard-teacher',
        title: 'فصول افتراضية',
        text: 'نظام فصول افتراضية متكامل مع أدوات التفاعل والمشاركة السلسة.',
      },
      {
        icon: 'fas fa-bolt',
        title: 'تحسين السرعة',
        text: 'تقليص زمن التحميل بأكثر من 40% وتأمين استقرار الخادم عند الذروة.',
      },
    ],
    results: 'تحسين سرعة التصفح بنسبة 40% واستقرار تام أثناء اختبارات آلاف الطلاب.',
    featured: true,
    status: 'published',
  },
  {
    id: 'proj-web-22',
    title: 'Tech Group',
    titleAr: 'تيك جروب للحلول البرمجية',
    slug: 'tech-group',
    domain: 'techgroup.co',
    url: 'https://techgroup.co',
    country: 'us',
    countryName: 'United States (الولايات المتحدة)',
    icon: '💻',
    category: 'Software & ERP Solutions',
    shortDescription:
      'نظام إدارة مشاريع برمجية متكامل، لوحة متابعة المهام وتكامل الأنظمة، وبوابة عملاء B2B لشركات التقنية.',
    fullDescription:
      'لشركة التقنية المتخصصة قمنا بتطوير نظام إدارة مشاريع برمجية، موقع تعريفي، استراتيجية تسويق B2B، وتطبيق للعملاء. ركزنا على الاحترافية والتقنية المتقدمة.',
    role: 'Enterprise Systems & Software Developer',
    technologies: ['Software Project Management ERP', 'B2B Client Dashboard', 'RESTful APIs Integration', 'Issue Tracker'],
    objectives: [
      'بناء نظام متكامل لإدارة المشاريع البرمجية وتتبع الأخطاء والتسليمات للعملاء.',
      'توفير تكامل مرن مع الأنظمة التقنية المتنوعة وسير عمل Agile.',
    ],
    highlights: [
      {
        icon: 'fas fa-code',
        title: 'إدارة برمجية',
        text: 'نظام إدارة مشاريع برمجية متكامل مع متابعة دقيقة للمهام والأخطاء.',
      },
      {
        icon: 'fas fa-network-wired',
        title: 'تكامل أنظمة',
        text: 'خبرة عملية في تكامل الأنظمة المختلفة وقواعد البيانات السحابية.',
      },
    ],
    results: 'تنظيم دورات التطوير البرمجي ورفع كفاءة تواصل فرق الهندسة مع العملاء.',
    featured: false,
    status: 'published',
  },
  {
    id: 'proj-web-23',
    title: 'Green Farm',
    titleAr: 'جرين فارم',
    slug: 'green-farm',
    domain: 'greenfarm.org',
    url: 'https://greenfarm.org',
    country: 'ca',
    countryName: 'Canada (كندا)',
    icon: '🌱',
    category: 'Software & ERP Solutions',
    shortDescription:
      'نظام إدارة مزارع عضوية في كندا، بيع وتوصيل مباشر من المزرعة للمنزل، ونظام تتبع المخزون والإنتاج.',
    fullDescription:
      'للمشروع الزراعي المستدام قمنا بتطوير نظام إدارة مزارع عضوية، موقع للبيع المباشر، استراتيجية تسويق للمنتجات العضوية، وتطبيق للعملاء. ركزنا على الاستدامة والجودة.',
    role: 'Farm Operations ERP & Direct Dispatch Developer',
    technologies: ['Organic Traceability ERP', 'Farm-to-Door Delivery Engine', 'Fresh Inventory System', 'E-Commerce'],
    objectives: [
      'تتبع عمليات الزراعة العضوية من البذرة إلى الحصاد والتوصيل المباشر.',
      'توفير متجر بيع مباشر للمستهلك الكندي يضمن وصول المنتجات الطازجة.',
    ],
    highlights: [
      {
        icon: 'fas fa-leaf',
        title: 'زراعة عضوية',
        text: 'نظام يتابع معايير الإنتاج العضوي المعتمد بدقة وموثوقية.',
      },
      {
        icon: 'fas fa-truck',
        title: 'توصيل مباشر',
        text: 'نظام توصيل مباشر من المزرعة إلى المنزل مع تحديثات لحظية.',
      },
    ],
    results: 'بناء نموذج توزيع زراعي مباشر عالي الربحية ورضا العملاء.',
    featured: false,
    status: 'published',
  },
  {
    id: 'proj-web-24',
    title: 'Digital Marketing Pro',
    titleAr: 'ديجيتال ماركتنج برو',
    slug: 'digital-marketing-pro',
    domain: 'dmpro.net',
    url: 'https://dmpro.net',
    country: 'ae',
    countryName: 'United Arab Emirates (الإمارات)',
    icon: '📈',
    category: 'SEO Projects',
    shortDescription:
      'بوابة وكالة تسويق رقمي في الإمارات: نظام تحليل الحملات الإعلانية، قياس العائد، واستراتيجيات الاستهداف الدقيق.',
    fullDescription:
      'لوكالة التسويق الرقمي قمنا بتطوير نظام إدارة حملات، موقع تعريفي، استراتيجية تسويق للخدمات، وتطبيق للعملاء. ركزنا على النتائج والاحترافية.',
    role: 'Technical SEO & Analytics Developer',
    technologies: ['Campaign Analytics Dashboard', 'Precise Targeting Tools', 'ROI Tracker', 'Client Portal'],
    objectives: [
      'تطوير نظام تحليلي يقيس نتائج الحملات الإعلانية ونسب التحويل بدقة.',
      'بناء واجهة رقمية تعكس مكانة الوكالة في سوق التسويق الرقمي الإماراتي.',
    ],
    highlights: [
      {
        icon: 'fas fa-chart-bar',
        title: 'تحليل حملات',
        text: 'نظام متقدم لتحليل نتائج الحملات التسويقية وقياس العائد على الاستثمار.',
      },
      {
        icon: 'fas fa-trophy',
        title: 'نتائج ملموسة',
        text: 'استراتيجية تركز على تحقيق نتائج أعمال حقيقية ونموذج تقارير واضح.',
      },
    ],
    results: 'تمكين إدارة أكثر من 50 حملة تسويقية نشطة وتحسين دقة التقارير.',
    featured: false,
    status: 'published',
  },
  {
    id: 'proj-web-25',
    title: 'Fitness World',
    titleAr: 'فيتنس وورلد',
    slug: 'fitness-world',
    domain: 'fitnessworld.com',
    url: 'https://fitnessworld.com',
    country: 'us',
    countryName: 'United States (الولايات المتحدة)',
    icon: '🏋️',
    category: 'Web Development Projects',
    shortDescription:
      'منصة تدريب ولياقة بدنية متكاملة: تتبع التمارين، برامج التغذية الشخصية، اشتراكات رقمية، وتطبيق للتدريبات.',
    fullDescription:
      'لمنصة اللياقة البدنية قمنا بتطوير منصة تدريب متكاملة، نظام متابعة تمارين، استراتيجية تسويق للصحة، وتطبيق للتدريبات. ركزنا على التحفيز والنتائج.',
    role: 'Full-Stack Web & Fitness Platform Developer',
    technologies: ['Workout Progress Tracker', 'Custom Meal Plans Engine', 'Subscription Commerce', 'Mobile App Sync'],
    objectives: [
      'توفير نظام يتابع التمارين والإنجازات الرياضية اليومية ويقدم تقارير دورية.',
      'دمج خطط التغذية المتخصصة مع جداول التمارين في واجهة تفاعلية واحدة.',
    ],
    highlights: [
      {
        icon: 'fas fa-dumbbell',
        title: 'متابعة تمارين',
        text: 'نظام يتابع التمارين والإنجازات اليومية ويقدم تقارير أداء ملهمة.',
      },
      {
        icon: 'fas fa-utensils',
        title: 'نظام تغذية',
        text: 'نظام يقدم خطط تغذية متكاملة مع خطط التمارين حسب أهداف المشترك.',
      },
    ],
    results: 'ارتفاع معدل التزام المشتركين وزيادة تجديد الاشتراكات السنوية.',
    featured: false,
    status: 'published',
  },
  {
    id: 'proj-brandsolutions-web',
    title: 'Multi-Store E-Commerce & Technical SEO Platform (brandsolutions)',
    titleAr: 'منصة التجارة الإلكترونية والسيو التقني (براند سوليوشنز)',
    slug: 'brandsolutions-ecommerce-platform',
    category: 'Web Development Projects',
    shortDescription:
      'Full-stack web architecture and technical SEO optimization across WordPress, Next.js, Salla, and Zid.',
    fullDescription:
      'Architected and implemented high-performance digital stores utilizing WordPress, Salla, and Next.js. Conducted technical SEO structuring, resolved deep crawl anomalies in Google Search Console, and optimized Core Web Vitals to achieve sub-second load times.',
    role: 'Full-Stack Web Developer & Technical SEO Lead',
    technologies: ['WordPress', 'Next.js', 'Salla', 'Zid', 'Technical SEO', 'Tailwind CSS'],
    objectives: [
      'Build scalable, mobile-first e-commerce platforms tailored for Gulf market shoppers.',
      'Implement structured data (JSON-LD) and on-page technical SEO architectures.',
      'Elevate Core Web Vitals metrics to meet optimal performance thresholds.',
    ],
    results: 'Core Web Vitals achieved 95+ performance scores with zero crawling errors across search consoles.',
    featured: true,
    status: 'published',
  },
];

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'art-etimad-guide',
    title: 'Mastering the Etimad Platform: A Complete Strategic Guide to Saudi Government Tenders',
    slug: 'mastering-etimad-platform-saudi-government-tenders-guide',
    category: 'Tender & Procurement',
    shortDescription:
      'Key guidelines, submission protocols, and common pitfalls to avoid when competing for government IT and enterprise contracts on Saudi Arabia’s Etimad portal.',
    publishedDate: 'October 2026',
    readTime: '6 min read',
    keywords: ['Etimad Platform', 'Saudi Government Tenders', 'Tender Preparation', 'Bid Compliance', 'Public Procurement'],
    metaTitle: 'Mastering Etimad: Complete Guide to Saudi Government Tenders | Youssef Ghamry',
    metaDescription:
      'Practical insights and strategic guidelines for navigating the Etimad platform, ensuring compliance, and maximizing proposal evaluation scores in Saudi public tenders.',
    relatedServices: ['tender-rfp-rfq-analysis', 'compliance-matrix-preparation'],
    relatedProjects: ['saudi-gov-it-infrastructure-tender'],
    featured: true,
    status: 'published',
    content: `
The modernization of procurement in the Kingdom of Saudi Arabia through the **Etimad platform (منصة اعتماد)** has established unprecedented transparency and standardization in public contracts. For technology providers, systems integrators, and software engineering firms, competing successfully on Etimad requires both technical sophistication and uncompromising compliance discipline.

### 1. Understanding the Etimad Workflow
Government entities across the Kingdom publish tenders with structured timelines, mandatory qualification checklists, and clear technical evaluation scoring criteria. Bids progress through defined milestones:
- **Tender Announcement & Document Purchase**: Acquiring the official RFP, Terms of Reference (TOR), and Bill of Quantities (BOQ).
- **Inquiry & Clarification Period**: Submitting formal technical and legal queries through the portal before the question deadline.
- **Envelope Preparation**: Structuring the separate Technical and Financial proposals in strict accordance with portal upload limitations.
- **Bid Opening & Evaluation**: Committees assess technical qualification before opening financial envelopes.

### 2. The 3 Most Dangerous Disqualification Pitfalls
Even the most capable engineering teams can face disqualification due to administrative oversights:
1. **Incomplete or Expired Mandatory Documentation**: Missing commercial registrations, chamber of commerce memberships, Saudization certificates, or tax/Zakat clearance letters.
2. **Failure to Map Mandatory Technical Clauses**: Ignoring non-negotiable clauses (such as local data residency, cybersecurity compliance, or specific ISO accreditations).
3. **Financial Leakage in Technical Envelopes**: Any mention of pricing, rates, or commercial fees within the technical proposal triggers immediate disqualification under standard procurement rules.

### 3. Building an Unbeatable Submission
To secure the highest technical evaluation scores:
- **Adopt the RFP’s Exact Structure**: Mirror the numbering and terminology of the Terms of Reference so evaluators find every item instantly.
- **Provide Verifiable Evidence**: Back up every technical claim with project reference letters, client sign-offs, and engineer certificates.
- **Submit Well in Advance**: Portal traffic spikes near deadlines can lead to upload delays. Aim to finalize submissions at least 24 hours prior to the closing bell.
    `,
  },
  {
    id: 'art-compliance-matrix',
    title: 'The Zero-Defect Bid: Building an Airtight Compliance Matrix for Technology RFPs',
    slug: 'zero-defect-bid-building-airtight-compliance-matrix',
    category: 'Tender & Procurement',
    shortDescription:
      'How to deconstruct complex technical requirements, establish traceability, and guarantee 100% compliance before sealing the proposal package.',
    publishedDate: 'September 2026',
    readTime: '5 min read',
    keywords: ['Compliance Matrix', 'Bid QA', 'RFP Analysis', 'Technical Proposal', 'Requirement Traceability'],
    metaTitle: 'The Zero-Defect Bid: Building an Airtight Compliance Matrix | Youssef Ghamry',
    metaDescription:
      'Learn how to build systematic compliance matrices that eliminate bid disqualification risks and streamline technical scoring for procurement committees.',
    relatedServices: ['compliance-matrix-preparation', 'bid-qa-proposal-review'],
    relatedProjects: ['cloud-migration-bid-qa-audit'],
    featured: true,
    status: 'published',
    content: `
A compliance matrix is more than an administrative formality—it is the lens through which evaluation committees judge the seriousness, organization, and technical integrity of your organization. In complex IT tenders involving hundreds of specifications, leaving the evaluator to hunt through pages of text is a recipe for missed points and potential disqualification.

### Why Evaluators Love Compliance Matrices
Procurement committee members often have dozens of proposals to score against tight deadlines. A meticulously organized compliance matrix acts as an answer key:
- It maps each clause from the RFP directly to a specific chapter and page number.
- It clearly declares the compliance status (*Compliant*, *Partially Compliant with Justification*, or *Not Applicable*).
- It provides concise summary explanations directly in the matrix row, backed by citations.

### Step-by-Step Architecture for a Zero-Defect Matrix
1. **Complete Clause Extraction**: Extract every mandatory requirement ("Shall", "Must", "Will") into dedicated rows. Do not group distinct requirements into single bulk items.
2. **Assigning Unique Requirement IDs**: Keep the RFP’s original numbering (e.g., Section 4.2.1) alongside an internal traceability code.
3. **Red-Team Evidence Cross-Checking**: Never mark a row "Compliant" until the referenced proposal chapter has been physically checked and verified by an independent QA reviewer.
4. **Addressing Ambiguities Honestly**: If an RFP specification is impossible or conflicting, use the formal clarification window or declare partial compliance with a robust technical justification rather than making false claims.
    `,
  },
  {
    id: 'art-it-bridge-proposals',
    title: 'Bridging Technical Architecture and Tender Proposals in Enterprise IT Bids',
    slug: 'bridging-technical-architecture-and-tender-proposals',
    category: 'IT & Technology',
    shortDescription:
      'Why having hands-on software development and systems knowledge transforms generic bids into winning technical solutions.',
    publishedDate: 'August 2026',
    readTime: '7 min read',
    keywords: ['Technical Proposal Writing', 'Solution Architecture', 'IT Tenders', 'Software Engineering', 'Enterprise Systems'],
    metaTitle: 'Bridging Technical Architecture and Tender Proposals | Youssef Ghamry',
    metaDescription:
      'Discover how blending technical engineering expertise with proposal management creates compelling, high-scoring technical narratives.',
    relatedServices: ['technical-proposal-writing', 'it-business-development-tender-opportunity'],
    relatedProjects: ['enterprise-erp-crm-technical-methodology'],
    featured: true,
    status: 'published',
    content: `
One of the most persistent bottlenecks in technology contracting is the communication barrier between engineering teams and proposal managers. Engineers speak in terms of APIs, containerization, microservices, and database schemas. Traditional proposal writers often rely on high-level corporate jargon. The result is often a disjointed document that either alienates business evaluators or fails technical scrutiny.

### The Advantage of a Dual-Discipline Background
When a proposal specialist possesses practical full-stack development experience:
- **Accurate Scope Interpretation**: You understand immediately what an RFP entails when it requests "real-time synchronization", "RESTful API gateway integration", or "multi-tenant database partitioning".
- **Authentic Methodologies**: Instead of copy-pasting generic Agile diagrams, the proposal articulates genuine sprint cadences, CI/CD pipeline automated testing, and security gating.
- **Realistic Project Schedules**: WBS structures and Gantt charts account for genuine integration challenges, UAT cycles, and data migration complexities.
- **Trust with Client Architects**: Evaluators can instantly sense when a proposal has been crafted by professionals who genuinely understand the technology being promised.
    `,
  },
  {
    id: 'art-technical-seo-core-web-vitals',
    title: 'Core Web Vitals & Technical SEO: Architecting Modern Web Applications for Search Engines',
    slug: 'core-web-vitals-technical-seo-modern-web-applications',
    category: 'Web Development & SEO',
    shortDescription:
      'Practical strategies for eliminating crawl roadblocks, optimizing Largest Contentful Paint, and implementing Schema.org structured data.',
    publishedDate: 'July 2026',
    readTime: '5 min read',
    keywords: ['Technical SEO', 'Core Web Vitals', 'Web Development', 'Next.js', 'Google Search Console'],
    metaTitle: 'Core Web Vitals & Technical SEO Guide | Youssef Ghamry',
    metaDescription:
      'Deep dive into technical SEO engineering, Core Web Vitals optimization, and structured data implementation for enterprise web applications.',
    relatedServices: ['technical-seo-optimization', 'web-ecommerce-development'],
    relatedProjects: ['brandsolutions-ecommerce-platform'],
    featured: false,
    status: 'published',
    content: `
Modern search engine optimization has evolved into a disciplined branch of web engineering. Content and backlinks remain vital, but technical health represents the foundational baseline without which search engines cannot crawl, index, or rank web assets efficiently.

### The Triad of Core Web Vitals
Google evaluates user experience through three quantitative metrics:
1. **Largest Contentful Paint (LCP)**: Measures perceptual loading speed. Target: $\le 2.5$ seconds. Strategies include optimizing critical rendering paths, preloading key hero assets, and implementing modern image formats (WebP/AVIF).
2. **Interaction to Next Paint (INP)**: Replaced FID to evaluate overall page responsiveness during user interactions. Target: $\le 200$ ms. Strategies: minimize main thread blocking and break up long JavaScript tasks.
3. **Cumulative Layout Shift (CLS)**: Measures visual stability. Target: $\le 0.1$. Strategies: always define explicit width/height dimensions on images and embed elements, avoiding dynamic DOM insertions above existing content.

### The Role of Schema.org Structured Data
Search engine crawlers rely heavily on unambiguous JSON-LD markup to understand entities, organizations, products, and articles. By declaring explicit Schema.org entities, web applications unlock rich snippet real estate, improving click-through rates and brand authority in search results.
    `,
  },
  {
    id: 'art-bid-no-bid-framework',
    title: 'The Bid/No-Bid Decision Framework: Maximizing Win Rates for IT Service Providers',
    slug: 'bid-no-bid-decision-framework-maximizing-win-rates',
    category: 'Business Development',
    shortDescription:
      'How to ruthlessly evaluate RFP opportunities to protect team capacity, avoid unviable contracts, and elevate overall win percentages.',
    publishedDate: 'June 2026',
    readTime: '6 min read',
    keywords: ['Bid/No-Bid', 'Business Development', 'Opportunity Management', 'Win Strategy', 'Pre-Sales'],
    metaTitle: 'Bid/No-Bid Decision Framework | Youssef Ghamry',
    metaDescription:
      'Strategic framework for technology vendors to systematically evaluate tender opportunities, mitigate risk, and boost contract win rates.',
    relatedServices: ['it-business-development-tender-opportunity'],
    relatedProjects: ['cloud-migration-bid-qa-audit'],
    featured: false,
    status: 'published',
    content: `
In the competitive landscape of technology procurement, bidding on every tender that crosses your desk is one of the quickest ways to burn out engineering talent and lower your overall win rate. Top-tier contractors succeed not because they submit the most bids, but because they focus their firepower on opportunities where they have a distinct, defensible competitive advantage.

### The 4 Pillars of Bid Qualification
Before committing dozens of hours to proposal drafting, run the RFP through a structured qualification gate:
1. **Strategic & Capability Fit**: Does this project align with our core competencies? Have we executed comparable reference projects in the past 36 months?
2. **Client Relationship & Intelligence**: Did we have pre-RFP awareness, or is this tender an unexpected public release? Is there an entrenched incumbent vendor whose specifications appear custom-tailored into the document?
3. **Commercial & Financial Feasibility**: Are the payment milestones, penalty clauses, and performance bond requirements acceptable to our finance leadership?
4. **Resource Availability**: Do we have the certified personnel required by the mandatory staffing table without jeopardizing active client delivery?

If an opportunity fails critical thresholds across these pillars, making a disciplined **No-Bid** decision preserves capital and frees your team to craft winning proposals for higher-probability targets.
    `,
  },
];
