import React, { createContext, useContext, useState, useEffect } from 'react';
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
  ContactSubmission,
} from '../types';
import {
  INITIAL_PROFILE,
  INITIAL_EXPERIENCES,
  INITIAL_CERTIFICATIONS,
  INITIAL_SKILL_GROUPS,
  INITIAL_TOOL_CATEGORIES,
  INITIAL_EDUCATION,
  INITIAL_LANGUAGES,
  INITIAL_SERVICES,
  INITIAL_PROJECTS,
  INITIAL_ARTICLES,
} from '../data/initialData';

interface DataContextType {
  profile: SiteProfile;
  experiences: WorkExperience[];
  certifications: Certification[];
  skillGroups: SkillGroup[];
  toolCategories: ToolCategory[];
  education: typeof INITIAL_EDUCATION;
  languages: Language[];
  services: Service[];
  projects: Project[];
  articles: Article[];
  contactSubmissions: ContactSubmission[];
  adminMode: boolean;
  setAdminMode: (active: boolean) => void;
  // CRUD Handlers
  updateProfile: (profile: SiteProfile) => void;
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (project: Project) => void;
  deleteProject: (id: string) => void;
  toggleProjectStatus: (id: string) => void;
  addService: (service: Omit<Service, 'id'>) => void;
  updateService: (service: Service) => void;
  deleteService: (id: string) => void;
  toggleServiceStatus: (id: string) => void;
  addArticle: (article: Omit<Article, 'id'>) => void;
  updateArticle: (article: Article) => void;
  deleteArticle: (id: string) => void;
  toggleArticleStatus: (id: string) => void;
  updateExperience: (experience: WorkExperience) => void;
  addExperience: (experience: Omit<WorkExperience, 'id'>) => void;
  deleteExperience: (id: string) => void;
  updateLanguages: (languages: Language[]) => void;
  updateCertifications: (certs: Certification[]) => void;
  addCertification: (cert: Omit<Certification, 'id'>) => void;
  updateCertification: (cert: Certification) => void;
  deleteCertification: (id: string) => void;
  submitContact: (data: {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    inquiryType: string;
  }) => { success: boolean; message: string };
  updateSubmissionStatus: (id: string, status: ContactSubmission['status']) => void;
  exportDataJSON: () => string;
  importDataJSON: (jsonString: string) => { success: boolean; error?: string };
  resetToDefaults: () => void;
}

const STORAGE_KEY = 'yg_portfolio_data_v4';

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<SiteProfile>(INITIAL_PROFILE);
  const [experiences, setExperiences] = useState<WorkExperience[]>(INITIAL_EXPERIENCES);
  const [certifications, setCertifications] = useState<Certification[]>(INITIAL_CERTIFICATIONS);
  const [skillGroups, setSkillGroups] = useState<SkillGroup[]>(INITIAL_SKILL_GROUPS);
  const [toolCategories, setToolCategories] = useState<ToolCategory[]>(INITIAL_TOOL_CATEGORIES);
  const [education, setEducation] = useState(INITIAL_EDUCATION);
  const [languages, setLanguages] = useState<Language[]>(INITIAL_LANGUAGES);
  const [services, setServices] = useState<Service[]>(INITIAL_SERVICES);
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [articles, setArticles] = useState<Article[]>(INITIAL_ARTICLES);
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [adminMode, setAdminMode] = useState<boolean>(false);

  // Load from LocalStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('yg_portfolio_data_v2');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.profile) {
          const normalizedEmail =
            !parsed.profile.email ||
            /youssefghamry\.work@gmail\.com|1youssefghamry@gmail\.com/i.test(parsed.profile.email)
              ? '1youssefghamry@gmail.com'
              : parsed.profile.email;
          setProfile({ ...parsed.profile, email: normalizedEmail });
        }
        if (parsed.experiences) setExperiences(parsed.experiences);
        if (parsed.certifications && parsed.certifications.length >= INITIAL_CERTIFICATIONS.length) {
          setCertifications(parsed.certifications);
        } else {
          setCertifications(INITIAL_CERTIFICATIONS);
        }
        if (parsed.skillGroups) setSkillGroups(parsed.skillGroups);
        if (parsed.toolCategories) setToolCategories(parsed.toolCategories);
        if (parsed.education) setEducation(parsed.education);
        if (parsed.languages) setLanguages(parsed.languages);
        if (parsed.services) setServices(parsed.services);
        if (parsed.projects && parsed.projects.length >= INITIAL_PROJECTS.length) {
          setProjects(parsed.projects);
        } else {
          setProjects(INITIAL_PROJECTS);
        }
        if (parsed.articles) setArticles(parsed.articles);
        if (parsed.contactSubmissions) setContactSubmissions(parsed.contactSubmissions);
      }
    } catch (e) {
      console.warn('Could not load stored portfolio data, using defaults', e);
    }
  }, []);

  // Save to LocalStorage on updates
  const persistState = (overrides?: Partial<{
    profile: SiteProfile;
    experiences: WorkExperience[];
    certifications: Certification[];
    skillGroups: SkillGroup[];
    toolCategories: ToolCategory[];
    education: typeof INITIAL_EDUCATION;
    languages: Language[];
    services: Service[];
    projects: Project[];
    articles: Article[];
    contactSubmissions: ContactSubmission[];
  }>) => {
    try {
      const stateToSave = {
        profile,
        experiences,
        certifications,
        skillGroups,
        toolCategories,
        education,
        languages,
        services,
        projects,
        articles,
        contactSubmissions,
        ...overrides,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    } catch (e) {
      console.error('Failed to persist to localStorage', e);
    }
  };

  const updateProfile = (newProfile: SiteProfile) => {
    setProfile(newProfile);
    persistState({ profile: newProfile });
  };

  const addProject = (project: Omit<Project, 'id'>) => {
    const newProj: Project = {
      ...project,
      id: `proj-${Date.now()}`,
    };
    const updated = [newProj, ...projects];
    setProjects(updated);
    persistState({ projects: updated });
  };

  const updateProject = (project: Project) => {
    const updated = projects.map((p) => (p.id === project.id ? project : p));
    setProjects(updated);
    persistState({ projects: updated });
  };

  const deleteProject = (id: string) => {
    const updated = projects.filter((p) => p.id !== id);
    setProjects(updated);
    persistState({ projects: updated });
  };

  const toggleProjectStatus = (id: string) => {
    const updated = projects.map((p) =>
      p.id === id
        ? { ...p, status: (p.status === 'published' ? 'draft' : 'published') as 'published' | 'draft' }
        : p
    );
    setProjects(updated);
    persistState({ projects: updated });
  };

  const addService = (service: Omit<Service, 'id'>) => {
    const newService: Service = {
      ...service,
      id: `srv-${Date.now()}`,
    };
    const updated = [...services, newService];
    setServices(updated);
    persistState({ services: updated });
  };

  const updateService = (service: Service) => {
    const updated = services.map((s) => (s.id === service.id ? service : s));
    setServices(updated);
    persistState({ services: updated });
  };

  const deleteService = (id: string) => {
    const updated = services.filter((s) => s.id !== id);
    setServices(updated);
    persistState({ services: updated });
  };

  const toggleServiceStatus = (id: string) => {
    const updated = services.map((s) =>
      s.id === id
        ? { ...s, status: (s.status === 'published' ? 'draft' : 'published') as 'published' | 'draft' }
        : s
    );
    setServices(updated as Service[]);
    persistState({ services: updated as Service[] });
  };

  const addArticle = (article: Omit<Article, 'id'>) => {
    const newArticle: Article = {
      ...article,
      id: `art-${Date.now()}`,
    };
    const updated = [newArticle, ...articles];
    setArticles(updated);
    persistState({ articles: updated });
  };

  const updateArticle = (article: Article) => {
    const updated = articles.map((a) => (a.id === article.id ? article : a));
    setArticles(updated);
    persistState({ articles: updated });
  };

  const deleteArticle = (id: string) => {
    const updated = articles.filter((a) => a.id !== id);
    setArticles(updated);
    persistState({ articles: updated });
  };

  const toggleArticleStatus = (id: string) => {
    const updated = articles.map((a) =>
      a.id === id
        ? { ...a, status: (a.status === 'published' ? 'draft' : 'published') as 'published' | 'draft' }
        : a
    );
    setArticles(updated);
    persistState({ articles: updated });
  };

  const updateExperience = (experience: WorkExperience) => {
    const updated = experiences.map((e) => (e.id === experience.id ? experience : e));
    setExperiences(updated);
    persistState({ experiences: updated });
  };

  const addExperience = (experience: Omit<WorkExperience, 'id'>) => {
    const newExp: WorkExperience = {
      ...experience,
      id: `exp-${Date.now()}`,
    };
    const updated = [newExp, ...experiences];
    setExperiences(updated);
    persistState({ experiences: updated });
  };

  const deleteExperience = (id: string) => {
    const updated = experiences.filter((e) => e.id !== id);
    setExperiences(updated);
    persistState({ experiences: updated });
  };

  const updateLanguages = (langs: Language[]) => {
    setLanguages(langs);
    persistState({ languages: langs });
  };

  const updateCertifications = (certs: Certification[]) => {
    setCertifications(certs);
    persistState({ certifications: certs });
  };

  const addCertification = (cert: Omit<Certification, 'id'>) => {
    const newCert: Certification = {
      ...cert,
      id: `cert-${Date.now()}`,
    };
    const updated = [newCert, ...certifications];
    setCertifications(updated);
    persistState({ certifications: updated });
  };

  const updateCertification = (cert: Certification) => {
    const updated = certifications.map((c) => (c.id === cert.id ? cert : c));
    setCertifications(updated);
    persistState({ certifications: updated });
  };

  const deleteCertification = (id: string) => {
    const updated = certifications.filter((c) => c.id !== id);
    setCertifications(updated);
    persistState({ certifications: updated });
  };

  const submitContact = (data: {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    inquiryType: string;
  }) => {
    const newSubmission: ContactSubmission = {
      id: `sub-${Date.now()}`,
      ...data,
      createdAt: new Date().toISOString(),
      status: 'new',
    };
    const updated = [newSubmission, ...contactSubmissions];
    setContactSubmissions(updated);
    persistState({ contactSubmissions: updated });
    return {
      success: true,
      message: 'Thank you! Your business inquiry has been recorded and received.',
    };
  };

  const updateSubmissionStatus = (id: string, status: ContactSubmission['status']) => {
    const updated = contactSubmissions.map((s) => (s.id === id ? { ...s, status } : s));
    setContactSubmissions(updated);
    persistState({ contactSubmissions: updated });
  };

  const exportDataJSON = () => {
    const dataToExport = {
      exportedAt: new Date().toISOString(),
      profile,
      experiences,
      certifications,
      skillGroups,
      toolCategories,
      education,
      languages,
      services,
      projects,
      articles,
      contactSubmissions,
    };
    return JSON.stringify(dataToExport, null, 2);
  };

  const importDataJSON = (jsonString: string) => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.profile) setProfile(parsed.profile);
      if (parsed.experiences) setExperiences(parsed.experiences);
      if (parsed.certifications) setCertifications(parsed.certifications);
      if (parsed.skillGroups) setSkillGroups(parsed.skillGroups);
      if (parsed.toolCategories) setToolCategories(parsed.toolCategories);
      if (parsed.education) setEducation(parsed.education);
      if (parsed.languages) setLanguages(parsed.languages);
      if (parsed.services) setServices(parsed.services);
      if (parsed.projects) setProjects(parsed.projects);
      if (parsed.articles) setArticles(parsed.articles);
      if (parsed.contactSubmissions) setContactSubmissions(parsed.contactSubmissions);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message || 'Invalid JSON format' };
    }
  };

  const resetToDefaults = () => {
    setProfile(INITIAL_PROFILE);
    setExperiences(INITIAL_EXPERIENCES);
    setCertifications(INITIAL_CERTIFICATIONS);
    setSkillGroups(INITIAL_SKILL_GROUPS);
    setToolCategories(INITIAL_TOOL_CATEGORIES);
    setEducation(INITIAL_EDUCATION);
    setLanguages(INITIAL_LANGUAGES);
    setServices(INITIAL_SERVICES);
    setProjects(INITIAL_PROJECTS);
    setArticles(INITIAL_ARTICLES);
    setContactSubmissions([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <DataContext.Provider
      value={{
        profile,
        experiences,
        certifications,
        skillGroups,
        toolCategories,
        education,
        languages,
        services,
        projects,
        articles,
        contactSubmissions,
        adminMode,
        setAdminMode,
        updateProfile,
        addProject,
        updateProject,
        deleteProject,
        toggleProjectStatus,
        addService,
        updateService,
        deleteService,
        toggleServiceStatus,
        addArticle,
        updateArticle,
        deleteArticle,
        toggleArticleStatus,
        updateExperience,
        addExperience,
        deleteExperience,
        updateLanguages,
        updateCertifications,
        addCertification,
        updateCertification,
        deleteCertification,
        submitContact,
        updateSubmissionStatus,
        exportDataJSON,
        importDataJSON,
        resetToDefaults,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
