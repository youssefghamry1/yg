export type ProjectCategory = 
  | 'Technical Proposal Projects'
  | 'Tender Preparation Projects'
  | 'Bid QA & Compliance Projects'
  | 'Web Development Projects'
  | 'E-commerce Websites'
  | 'Software & ERP Solutions'
  | 'SEO Projects'
  | 'UI/UX Projects'
  | 'Digital Solutions'
  | 'Websites'
  | 'E-Commerce'
  | 'Web Applications'
  | 'Software & Business Systems'
  | 'Mobile Applications'
  | 'UI/UX Design'
  | 'Other Digital Solutions';

export interface ProjectHighlight {
  icon?: string;
  title: string;
  text: string;
}

export interface Project {
  id: string;
  title: string;
  titleAr?: string;
  slug: string;
  category: ProjectCategory;
  shortDescription: string;
  fullDescription: string;
  role: string;
  technologies: string[];
  objectives: string[];
  results?: string;
  url?: string;
  domain?: string;
  country?: string;
  countryName?: string;
  icon?: string;
  highlights?: ProjectHighlight[];
  image?: string;
  featured: boolean;
  status: 'published' | 'draft';
  isPlaceholder?: boolean;
}

export interface ServiceStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  categoryTitle: string;
  shortDescription: string;
  fullIntro: string;
  problemsAddressed: string[];
  scope: string[];
  methodology: ServiceStep[];
  deliverables: string[];
  benefits: string[];
  faqs: ServiceFAQ[];
  relatedProjectCategories?: string[];
  featured: boolean;
  status: 'published' | 'draft';
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  content: string; // Markdown or rich text
  publishedDate: string;
  readTime: string;
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
  relatedServices?: string[];
  relatedProjects?: string[];
  featured: boolean;
  status: 'published' | 'draft';
}

export interface WorkExperience {
  id: string;
  company: string;
  companyArabic?: string;
  position: string;
  period: string;
  workMode: 'Remote' | 'On-site' | 'Hybrid';
  location?: string;
  isConcurrent?: boolean;
  tenderCountNote?: string;
  responsibilities: string[];
  isPendingDescription?: boolean;
  pendingNote?: string;
}

export interface Certification {
  id: string;
  title: string;
  titleAr: string;
  issuer: string;
  issuerAr: string;
  provider?: string;
  providerAr?: string;
  trainingProvider?: string;
  recipientName: string;
  issueDate: string;
  issueDateAr: string;
  expirationDate?: string | null;
  credentialId?: string | null;
  verificationUrl?: string | null;
  duration?: string | null;
  durationAr?: string | null;
  image: string;
  category: string;
  categoryAr: string;
  certificateType: string;
  certificateTypeAr: string;
  overviewEn: string;
  overviewAr: string;
  learnedEn: string[];
  learnedAr: string[];
  skills: string[];
  skillsAr: string[];
  practicalValueEn: string;
  practicalValueAr: string;
  relevanceProfileEn: string[];
  relevanceProfileAr: string[];
  summaryEn: string;
  summaryAr: string;
  programCoverage?: string[];
  capstoneProject?: string;
  featured?: boolean;
  status?: 'published' | 'draft';
}

export interface SkillItem {
  name: string;
  isVerified: boolean;
  note?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  skills: SkillItem[];
}

export interface ToolCategory {
  id: string;
  title: string;
  tools: string[];
}

export interface Language {
  language: string;
  level: string;
  isConfirmed: boolean;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  inquiryType: string;
  createdAt: string;
  status: 'new' | 'reviewed' | 'replied' | 'archived';
}

export interface SiteProfile {
  name: string;
  title: string;
  secondaryTitle: string;
  location: string;
  phone: string;
  email: string;
  whatsappUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  summary: string;
  aboutBackground: string;
  careerJourney: string;
  tenderExperienceDetails: string;
  bidQAExperienceDetails: string;
  saudiTenderDetails: string;
  itBackgroundDetails: string;
  businessDevDetails: string;
  workingMethodology: string;
}
