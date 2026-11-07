import React, { useState, useEffect } from 'react';
import { DataProvider, useData } from './context/DataContext';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileTopBar } from './components/MobileTopBar';
import { MobileBottomBar } from './components/MobileBottomBar';
import { ProjectModal } from './components/ProjectModal';
import { ServiceDetailView } from './components/ServiceDetailView';
import { ArticleDetailView } from './components/ArticleDetailView';
import { CertificateModal } from './components/CertificateModal';
import { AdminStudio } from './components/AdminStudio';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CVPage } from './pages/CVPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ServicesPage } from './pages/ServicesPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { ContactPage } from './pages/ContactPage';
import { TendersPage } from './pages/TendersPage';

import { Project, Service, Article, Certification } from './types';

const MainApp: React.FC = () => {
  const { projects, services, articles, certifications } = useData();

  // Tab & Route State
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeCertificate, setActiveCertificate] = useState<Certification | null>(null);
  const [adminStudioOpen, setAdminStudioOpen] = useState<boolean>(false);
  const [isMoreDrawerOpen, setIsMoreDrawerOpen] = useState<boolean>(false);

  // Inquiry preset state
  const [inquiryTypePreset, setInquiryTypePreset] = useState<string>('');
  const [inquirySubjectPreset, setInquirySubjectPreset] = useState<string>('');

  // Handle URL hash changes for bookmarkable URLs
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (!hash) {
        setCurrentTab('home');
        setActiveService(null);
        setActiveArticle(null);
        return;
      }

      if (hash.startsWith('services/')) {
        const slug = hash.replace('services/', '');
        const found = services.find((s) => s.slug === slug);
        if (found) {
          setCurrentTab('services');
          setActiveService(found);
          return;
        }
      }

      if (hash.startsWith('articles/')) {
        const slug = hash.replace('articles/', '');
        const found = articles.find((a) => a.slug === slug);
        if (found) {
          setCurrentTab('articles');
          setActiveArticle(found);
          return;
        }
      }

      if (hash.startsWith('certifications/')) {
        const certId = hash.replace('certifications/', '');
        const found = certifications.find((c) => c.id === certId);
        if (found) {
          setCurrentTab('certifications');
          setActiveCertificate(found);
          return;
        }
      }

      const validTabs = [
        'home',
        'about',
        'cv',
        'portfolio',
        'services',
        'certifications',
        'articles',
        'contact',
        'tenders',
      ];
      if (validTabs.includes(hash)) {
        setCurrentTab(hash);
        setActiveService(null);
        setActiveArticle(null);
        setActiveCertificate(null);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [services, articles, certifications]);

  const navigateToTab = (tab: string) => {
    setCurrentTab(tab);
    setActiveService(null);
    setActiveArticle(null);
    setActiveCertificate(null);
    setIsMoreDrawerOpen(false);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (service: Service) => {
    setActiveService(service);
    setCurrentTab('services');
    window.location.hash = `services/${service.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticle = (article: Article) => {
    setActiveArticle(article);
    setCurrentTab('articles');
    window.location.hash = `articles/${article.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCertificate = (cert: Certification) => {
    setActiveCertificate(cert);
  };

  const handleSelectProject = (project: Project) => {
    setActiveProject(project);
  };

  const handleInquireFromEntity = (title: string, type: string = 'Tender & Proposal Services') => {
    setInquirySubjectPreset(`Inquiry regarding: ${title}`);
    setInquiryTypePreset(type);
    navigateToTab('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050806] text-slate-100 selection:bg-emerald-600 selection:text-white">
      {/* 1. Mobile Top Bar (App-like top bar with notifications & language switch) */}
      <MobileTopBar
        currentTab={currentTab}
        onNavigate={navigateToTab}
        onOpenMore={() => setIsMoreDrawerOpen(true)}
        isAr={true}
      />

      {/* 2. Desktop Navigation Header (8 primary independent links + Services mega dropdown) */}
      <div className="hidden lg:block">
        <Header
          currentTab={currentTab}
          setCurrentTab={navigateToTab}
          onOpenAdmin={() => setAdminStudioOpen(true)}
          isAr={true}
        />
      </div>

      {/* 3. Main Content Area with Safe Bottom Padding for Mobile Tab Bar */}
      <main className="flex-1 pb-28 lg:pb-0">
        {/* Render Tab Contents */}
        {currentTab === 'home' && (
          <HomePage
            onNavigate={navigateToTab}
            onSelectProject={handleSelectProject}
            onSelectService={handleSelectService}
            onSelectArticle={handleSelectArticle}
          />
        )}

        {currentTab === 'about' && <AboutPage onNavigate={navigateToTab} />}

        {currentTab === 'cv' && <CVPage onNavigate={navigateToTab} isAr={true} />}

        {currentTab === 'portfolio' && (
          <PortfolioPage
            onSelectProject={handleSelectProject}
            onOpenAdmin={() => setAdminStudioOpen(true)}
            isAr={true}
          />
        )}

        {currentTab === 'tenders' && (
          <TendersPage
            onNavigate={navigateToTab}
            isAr={true}
          />
        )}

        {currentTab === 'services' && (
          activeService ? (
            <ServiceDetailView
              service={activeService}
              onBack={() => {
                setActiveService(null);
                window.location.hash = 'services';
              }}
              onSelectProject={handleSelectProject}
              onInquire={(title) => handleInquireFromEntity(title, 'Tender & Proposal Services')}
              allProjects={projects}
              isAr={true}
            />
          ) : (
            <ServicesPage
              onSelectService={handleSelectService}
              onInquire={(title) => handleInquireFromEntity(title, 'Tender & Proposal Services')}
              onOpenAdmin={() => setAdminStudioOpen(true)}
            />
          )
        )}

        {currentTab === 'certifications' && (
          <CertificationsPage
            onSelectCertificate={handleSelectCertificate}
            onOpenAdmin={() => setAdminStudioOpen(true)}
          />
        )}

        {currentTab === 'articles' && (
          activeArticle ? (
            <ArticleDetailView
              article={activeArticle}
              onBack={() => {
                setActiveArticle(null);
                window.location.hash = 'articles';
              }}
              onSelectService={handleSelectService}
              onSelectProject={handleSelectProject}
              allServices={services}
              allProjects={projects}
            />
          ) : (
            <ArticlesPage
              onSelectArticle={handleSelectArticle}
              onOpenAdmin={() => setAdminStudioOpen(true)}
            />
          )
        )}

        {currentTab === 'contact' && (
          <ContactPage
            initialInquiryType={inquiryTypePreset}
            initialSubject={inquirySubjectPreset}
          />
        )}
      </main>

      {/* 4. Desktop Footer */}
      <Footer
        setCurrentTab={navigateToTab}
        onOpenAdmin={() => setAdminStudioOpen(true)}
      />

      {/* 5. Mobile Fixed Bottom Navigation Bar (5 thumb tabs + More drawer) */}
      <MobileBottomBar
        currentTab={currentTab}
        onNavigate={navigateToTab}
        onOpenAdmin={() => setAdminStudioOpen(true)}
        isMoreDrawerOpen={isMoreDrawerOpen}
        setIsMoreDrawerOpen={setIsMoreDrawerOpen}
        isAr={true}
      />

      {/* Modals & Dialogs */}
      <CertificateModal
        certificate={activeCertificate}
        allCertificates={certifications}
        onClose={() => setActiveCertificate(null)}
        onSelectCertificate={(cert) => setActiveCertificate(cert)}
      />

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onInquire={(title) => handleInquireFromEntity(title, 'Tender & Proposal Services')}
      />

      <AdminStudio
        isOpen={adminStudioOpen}
        onClose={() => setAdminStudioOpen(false)}
      />
    </div>
  );
};

export function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <MainApp />
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
