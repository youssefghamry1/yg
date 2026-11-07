import React, { useState } from 'react';
import {
  X,
  Plus,
  Trash2,
  Edit3,
  Eye,
  EyeOff,
  Download,
  Upload,
  RefreshCw,
  CheckCircle,
  Briefcase,
  Layers,
  BookOpen,
  UserCheck,
  Inbox,
  AlertCircle,
  FileCode,
  Save,
  Sparkles,
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { Project, Service, Article, WorkExperience, ProjectCategory } from '../types';

interface AdminStudioProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminStudio: React.FC<AdminStudioProps> = ({ isOpen, onClose }) => {
  const {
    profile,
    updateProfile,
    projects,
    addProject,
    updateProject,
    deleteProject,
    toggleProjectStatus,
    services,
    addService,
    updateService,
    deleteService,
    toggleServiceStatus,
    articles,
    addArticle,
    updateArticle,
    deleteArticle,
    toggleArticleStatus,
    experiences,
    updateExperience,
    addExperience,
    deleteExperience,
    contactSubmissions,
    updateSubmissionStatus,
    exportDataJSON,
    importDataJSON,
    resetToDefaults,
  } = useData();

  const [activeTab, setActiveTab] = useState<
    'projects' | 'services' | 'articles' | 'experiences' | 'inbox' | 'json'
  >('projects');

  // Form states for adding / editing
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [newProjectCategory, setNewProjectCategory] = useState<ProjectCategory>('Technical Proposal Projects');
  const [newProjectTitle, setNewProjectTitle] = useState('');
  const [newProjectShortDesc, setNewProjectShortDesc] = useState('');
  const [newProjectFullDesc, setNewProjectFullDesc] = useState('');
  const [newProjectRole, setNewProjectRole] = useState('Tender Proposal Writer & QA Specialist');
  const [newProjectTech, setNewProjectTech] = useState('Etimad, MS Word, Excel, Compliance Matrix');
  const [newProjectResults, setNewProjectResults] = useState('');
  const [newProjectUrl, setNewProjectUrl] = useState('');

  // Article form state
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [isAddingArticle, setIsAddingArticle] = useState(false);
  const [newArticleTitle, setNewArticleTitle] = useState('');
  const [newArticleCategory, setNewArticleCategory] = useState('Tender & Procurement');
  const [newArticleDesc, setNewArticleDesc] = useState('');
  const [newArticleContent, setNewArticleContent] = useState('');
  const [newArticleKeywords, setNewArticleKeywords] = useState('Tender Preparation, Proposal Writing');

  // JSON Import State
  const [importJsonText, setImportJsonText] = useState('');
  const [statusMessage, setStatusMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  if (!isOpen) return null;

  const showStatus = (text: string, type: 'success' | 'error' = 'success') => {
    setStatusMessage({ text, type });
    setTimeout(() => setStatusMessage(null), 4000);
  };

  const handleSaveNewProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectTitle.trim()) return;

    const slug = newProjectTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const techArray = newProjectTech.split(',').map((t) => t.trim()).filter(Boolean);

    addProject({
      title: newProjectTitle,
      slug: slug || `project-${Date.now()}`,
      category: newProjectCategory,
      shortDescription: newProjectShortDesc || newProjectTitle,
      fullDescription: newProjectFullDesc || newProjectShortDesc || newProjectTitle,
      role: newProjectRole,
      technologies: techArray,
      objectives: ['Execute deliverables according to specifications.'],
      results: newProjectResults || undefined,
      url: newProjectUrl || undefined,
      featured: true,
      status: 'published',
      isPlaceholder: false,
    });

    setIsAddingProject(false);
    setNewProjectTitle('');
    setNewProjectShortDesc('');
    setNewProjectFullDesc('');
    setNewProjectResults('');
    setNewProjectUrl('');
    showStatus('Project added successfully to portfolio!');
  };

  const handleSaveNewArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newArticleTitle.trim()) return;

    const slug = newArticleTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const kwArray = newArticleKeywords.split(',').map((k) => k.trim()).filter(Boolean);

    addArticle({
      title: newArticleTitle,
      slug: slug || `article-${Date.now()}`,
      category: newArticleCategory,
      shortDescription: newArticleDesc || newArticleTitle,
      content: newArticleContent || 'Full article content pending drafting.',
      publishedDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      readTime: '4 min read',
      keywords: kwArray,
      metaTitle: `${newArticleTitle} | Youssef Ghamry`,
      metaDescription: newArticleDesc || newArticleTitle,
      featured: true,
      status: 'published',
    });

    setIsAddingArticle(false);
    setNewArticleTitle('');
    setNewArticleDesc('');
    setNewArticleContent('');
    showStatus('Article published successfully to Knowledge Hub!');
  };

  const handleDownloadJSON = () => {
    const data = exportDataJSON();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `youssef-ghamry-portfolio-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showStatus('Export downloaded successfully.');
  };

  const handleImportJSON = () => {
    if (!importJsonText.trim()) return;
    const res = importDataJSON(importJsonText);
    if (res.success) {
      showStatus('Portfolio data updated successfully from JSON!');
      setImportJsonText('');
    } else {
      showStatus(`Import failed: ${res.error}`, 'error');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div
        className="bg-[#07130D] rounded-2xl shadow-2xl max-w-5xl w-full overflow-hidden border border-emerald-500/30 flex flex-col max-h-[92vh] text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 bg-[#050806] text-white flex items-center justify-between border-b border-emerald-950/80">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C6A15B] shadow-sm shadow-[#C6A15B]"></span>
              <h2 className="text-base sm:text-lg font-bold tracking-tight font-serif">
                Content Management Studio & Dashboard
              </h2>
            </div>
            <p className="text-xs text-emerald-300/60 mt-0.5">
              Live updates for Projects, Services, Articles, CV Experience, and Inquiries.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-emerald-300/60 hover:text-white rounded-lg hover:bg-emerald-950/40 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Notification */}
        {statusMessage && (
          <div
            className={`py-2 px-4 text-xs font-semibold flex items-center gap-2 ${
              statusMessage.type === 'success'
                ? 'bg-emerald-600 text-white'
                : 'bg-rose-600 text-white'
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            <span>{statusMessage.text}</span>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex border-b border-emerald-950/80 bg-[#050806]/60 overflow-x-auto text-xs font-medium scrollbar-none">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-3 border-b-2 flex items-center gap-2 shrink-0 cursor-pointer transition-colors ${
              activeTab === 'projects'
                ? 'border-[#C6A15B] text-[#E5C78B] font-semibold bg-[#07130D]'
                : 'border-transparent text-emerald-300/60 hover:text-white'
            }`}
          >
            <Briefcase className="w-4 h-4 text-emerald-400" />
            <span>Projects ({projects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`px-4 py-3 border-b-2 flex items-center gap-2 shrink-0 cursor-pointer transition-colors ${
              activeTab === 'services'
                ? 'border-[#C6A15B] text-[#E5C78B] font-semibold bg-[#07130D]'
                : 'border-transparent text-emerald-300/60 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>Services ({services.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('articles')}
            className={`px-4 py-3 border-b-2 flex items-center gap-2 shrink-0 cursor-pointer transition-colors ${
              activeTab === 'articles'
                ? 'border-[#C6A15B] text-[#E5C78B] font-semibold bg-[#07130D]'
                : 'border-transparent text-emerald-300/60 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>Articles ({articles.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('experiences')}
            className={`px-4 py-3 border-b-2 flex items-center gap-2 shrink-0 cursor-pointer transition-colors ${
              activeTab === 'experiences'
                ? 'border-[#C6A15B] text-[#E5C78B] font-semibold bg-[#07130D]'
                : 'border-transparent text-emerald-300/60 hover:text-white'
            }`}
          >
            <UserCheck className="w-4 h-4 text-emerald-400" />
            <span>CV Experience ({experiences.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('inbox')}
            className={`px-4 py-3 border-b-2 flex items-center gap-2 shrink-0 cursor-pointer transition-colors ${
              activeTab === 'inbox'
                ? 'border-[#C6A15B] text-[#E5C78B] font-semibold bg-[#07130D]'
                : 'border-transparent text-emerald-300/60 hover:text-white'
            }`}
          >
            <Inbox className="w-4 h-4 text-emerald-400" />
            <span>Inquiries ({contactSubmissions.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('json')}
            className={`px-4 py-3 border-b-2 flex items-center gap-2 shrink-0 cursor-pointer transition-colors ${
              activeTab === 'json'
                ? 'border-[#C6A15B] text-[#E5C78B] font-semibold bg-[#07130D]'
                : 'border-transparent text-emerald-300/60 hover:text-white'
            }`}
          >
            <FileCode className="w-4 h-4 text-emerald-400" />
            <span>JSON Backup / Import</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 overflow-y-auto flex-1 text-sm text-slate-300 bg-[#07130D]">
          {/* TAB 1: PROJECTS */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-white font-serif">Manage Portfolio Projects</h3>
                  <p className="text-xs text-emerald-300/60">
                    Add new projects, websites, or case studies, edit descriptions, or toggle visibility.
                  </p>
                </div>
                <button
                  onClick={() => setIsAddingProject(!isAddingProject)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-black bg-gradient-to-r from-[#E5C78B] to-[#C6A15B] rounded-lg cursor-pointer hover:brightness-110 transition-all shadow-sm shadow-[#C6A15B]/20"
                >
                  <Plus className="w-3.5 h-3.5 text-black stroke-[3]" />
                  <span>{isAddingProject ? 'Cancel' : 'Add New Project'}</span>
                </button>
              </div>

              {/* Add Project Form */}
              {isAddingProject && (
                <form
                  onSubmit={handleSaveNewProject}
                  className="p-5 glass-panel rounded-xl border border-emerald-500/30 space-y-4"
                >
                  <h4 className="text-xs font-bold uppercase text-[#E5C78B] tracking-wider">
                    New Project Details
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-emerald-200/80 mb-1">
                        Project Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={newProjectTitle}
                        onChange={(e) => setNewProjectTitle(e.target.value)}
                        placeholder="e.g. Saudi Healthcare Ministry IT Tender"
                        className="w-full px-3 py-2 text-xs bg-[#050806] border border-emerald-500/30 rounded-lg focus:border-[#C6A15B] focus:outline-none text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-emerald-200/80 mb-1">
                        Category *
                      </label>
                      <select
                        value={newProjectCategory}
                        onChange={(e) => setNewProjectCategory(e.target.value as ProjectCategory)}
                        className="w-full px-3 py-2 text-xs bg-[#050806] border border-emerald-500/30 rounded-lg focus:border-[#C6A15B] focus:outline-none text-white cursor-pointer"
                      >
                        <option value="Technical Proposal Projects">Technical Proposal Projects</option>
                        <option value="Tender Preparation Projects">Tender Preparation Projects</option>
                        <option value="Bid QA & Compliance Projects">Bid QA & Compliance Projects</option>
                        <option value="Web Development Projects">Web Development Projects</option>
                        <option value="E-commerce Websites">E-commerce Websites</option>
                        <option value="Software & ERP Solutions">Software & ERP Solutions</option>
                        <option value="SEO Projects">SEO Projects</option>
                        <option value="UI/UX Projects">UI/UX Projects</option>
                        <option value="Digital Solutions">Digital Solutions</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-emerald-200/80 mb-1">Role</label>
                      <input
                        type="text"
                        value={newProjectRole}
                        onChange={(e) => setNewProjectRole(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-[#050806] border border-emerald-500/30 rounded-lg focus:border-[#C6A15B] focus:outline-none text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-emerald-200/80 mb-1">
                        Technologies / Platforms (Comma-separated)
                      </label>
                      <input
                        type="text"
                        value={newProjectTech}
                        onChange={(e) => setNewProjectTech(e.target.value)}
                        placeholder="Etimad, Next.js, WordPress, Salla"
                        className="w-full px-3 py-2 text-xs bg-[#050806] border border-emerald-500/30 rounded-lg focus:border-[#C6A15B] focus:outline-none text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-emerald-200/80 mb-1">
                      Short Description *
                    </label>
                    <input
                      type="text"
                      required
                      value={newProjectShortDesc}
                      onChange={(e) => setNewProjectShortDesc(e.target.value)}
                      placeholder="Concise 1-2 sentence overview"
                      className="w-full px-3 py-2 text-xs bg-[#050806] border border-emerald-500/30 rounded-lg focus:border-[#C6A15B] focus:outline-none text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-emerald-200/80 mb-1">
                      Full Case Study / Scope Details
                    </label>
                    <textarea
                      rows={3}
                      value={newProjectFullDesc}
                      onChange={(e) => setNewProjectFullDesc(e.target.value)}
                      placeholder="Comprehensive breakdown of responsibilities and technical execution"
                      className="w-full px-3 py-2 text-xs bg-[#050806] border border-emerald-500/30 rounded-lg focus:border-[#C6A15B] focus:outline-none text-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-emerald-200/80 mb-1">
                        Verified Results / Outcomes
                      </label>
                      <input
                        type="text"
                        value={newProjectResults}
                        onChange={(e) => setNewProjectResults(e.target.value)}
                        placeholder="e.g. 100% compliance pass on Etimad evaluation"
                        className="w-full px-3 py-2 text-xs bg-[#050806] border border-emerald-500/30 rounded-lg focus:border-[#C6A15B] focus:outline-none text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-emerald-200/80 mb-1">
                        Project URL (Optional)
                      </label>
                      <input
                        type="url"
                        value={newProjectUrl}
                        onChange={(e) => setNewProjectUrl(e.target.value)}
                        placeholder="https://..."
                        className="w-full px-3 py-2 text-xs bg-[#050806] border border-emerald-500/30 rounded-lg focus:border-[#C6A15B] focus:outline-none text-white"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsAddingProject(false)}
                      className="px-3 py-1.5 text-xs text-emerald-300 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-1.5 text-xs font-semibold text-black bg-gradient-to-r from-[#E5C78B] to-[#C6A15B] rounded-lg cursor-pointer"
                    >
                      Save Project
                    </button>
                  </div>
                </form>
              )}

              {/* Projects List */}
              <div className="space-y-3">
                {projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-4 glass-panel rounded-xl border border-emerald-500/20 flex items-start justify-between gap-4"
                  >
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-semibold text-[#E5C78B]">{proj.category}</span>
                        <span className="text-emerald-500/40">·</span>
                        <span
                          className={`font-mono text-[10px] uppercase px-1.5 py-0.5 rounded ${
                            proj.status === 'published'
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {proj.status}
                        </span>
                        {proj.country && (
                          <span className="text-xs">{proj.country}</span>
                        )}
                        {proj.isPlaceholder && (
                          <span className="text-[10px] text-[#E5C78B] font-medium">
                            [Custom Slot]
                          </span>
                        )}
                      </div>
                      <h4 className="font-bold text-white text-sm font-serif">{proj.title}</h4>
                      <p className="text-xs text-emerald-200/70 line-clamp-1">{proj.shortDescription}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => toggleProjectStatus(proj.id)}
                        className="p-1.5 text-emerald-300/70 hover:text-white rounded-lg hover:bg-emerald-950/60 cursor-pointer"
                        title={proj.status === 'published' ? 'Unpublish' : 'Publish'}
                      >
                        {proj.status === 'published' ? (
                          <Eye className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <EyeOff className="w-4 h-4 text-slate-500" />
                        )}
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Delete project "${proj.title}"?`)) {
                            deleteProject(proj.id);
                            showStatus('Project deleted.');
                          }
                        }}
                        className="p-1.5 text-slate-400 hover:text-rose-400 rounded-lg hover:bg-rose-950/40 cursor-pointer"
                        title="Delete project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: SERVICES */}
          {activeTab === 'services' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-white font-serif">Manage Professional Services</h3>
                  <p className="text-xs text-emerald-300/60">
                    Services each have their own dedicated detail page.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {services.map((srv) => (
                  <div
                    key={srv.id}
                    className="p-4 glass-panel rounded-xl border border-emerald-500/20 flex items-start justify-between gap-4"
                  >
                    <div className="space-y-1 flex-1">
                      <div className="text-xs font-semibold text-[#E5C78B]">
                        {srv.categoryTitle}
                      </div>
                      <h4 className="font-bold text-white text-sm font-serif">{srv.title}</h4>
                      <p className="text-xs text-emerald-200/70 line-clamp-1">{srv.shortDescription}</p>
                      <div className="text-[11px] text-emerald-400/60">
                        URL Slug: /services/{srv.slug} · {srv.deliverables?.length || 0} Deliverables
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => toggleServiceStatus(srv.id)}
                        className="p-1.5 text-emerald-300/70 hover:text-white rounded-lg hover:bg-emerald-950/60 cursor-pointer"
                        title={srv.status === 'published' ? 'Unpublish' : 'Publish'}
                      >
                        {srv.status === 'published' ? (
                          <Eye className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <EyeOff className="w-4 h-4 text-slate-500" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: ARTICLES */}
          {activeTab === 'articles' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-white font-serif">Manage Knowledge Hub Articles</h3>
                  <p className="text-xs text-emerald-300/60">
                    Publish tender insights, technical whitepapers, and guides.
                  </p>
                </div>
                <button
                  onClick={() => setIsAddingArticle(!isAddingArticle)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-black bg-gradient-to-r from-[#E5C78B] to-[#C6A15B] rounded-lg cursor-pointer hover:brightness-110 transition-all shadow-sm shadow-[#C6A15B]/20"
                >
                  <Plus className="w-3.5 h-3.5 text-black stroke-[3]" />
                  <span>{isAddingArticle ? 'Cancel' : 'Publish New Article'}</span>
                </button>
              </div>

              {/* Add Article Form */}
              {isAddingArticle && (
                <form
                  onSubmit={handleSaveNewArticle}
                  className="p-5 glass-panel rounded-xl border border-emerald-500/30 space-y-4"
                >
                  <h4 className="text-xs font-bold uppercase text-[#E5C78B] tracking-wider">
                    New Article Draft
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-emerald-200/80 mb-1">
                        Article Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={newArticleTitle}
                        onChange={(e) => setNewArticleTitle(e.target.value)}
                        placeholder="e.g. Navigating Technical Scoring in Etimad IT Bids"
                        className="w-full px-3 py-2 text-xs bg-[#050806] border border-emerald-500/30 rounded-lg focus:border-[#C6A15B] focus:outline-none text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-emerald-200/80 mb-1">
                        Category *
                      </label>
                      <select
                        value={newArticleCategory}
                        onChange={(e) => setNewArticleCategory(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-[#050806] border border-emerald-500/30 rounded-lg focus:border-[#C6A15B] focus:outline-none text-white cursor-pointer"
                      >
                        <option value="Tender & Procurement">Tender & Procurement</option>
                        <option value="IT & Technology">IT & Technology</option>
                        <option value="Business Development">Business Development</option>
                        <option value="Web Development & SEO">Web Development & SEO</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-emerald-200/80 mb-1">
                      Short Summary / Meta Description *
                    </label>
                    <input
                      type="text"
                      required
                      value={newArticleDesc}
                      onChange={(e) => setNewArticleDesc(e.target.value)}
                      placeholder="1-2 sentences summarizing key takeaways for evaluators"
                      className="w-full px-3 py-2 text-xs bg-[#050806] border border-emerald-500/30 rounded-lg focus:border-[#C6A15B] focus:outline-none text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-emerald-200/80 mb-1">
                      Article Content (Supports markdown ### Headings, bullet points, and paragraphs)
                    </label>
                    <textarea
                      rows={6}
                      required
                      value={newArticleContent}
                      onChange={(e) => setNewArticleContent(e.target.value)}
                      placeholder="Write your article paragraphs here..."
                      className="w-full px-3 py-2 text-xs bg-[#050806] border border-emerald-500/30 rounded-lg focus:border-[#C6A15B] focus:outline-none text-white font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-emerald-200/80 mb-1">
                      Keywords (Comma-separated)
                    </label>
                    <input
                      type="text"
                      value={newArticleKeywords}
                      onChange={(e) => setNewArticleKeywords(e.target.value)}
                      placeholder="Etimad, Technical Proposal, Bid QA"
                      className="w-full px-3 py-2 text-xs bg-[#050806] border border-emerald-500/30 rounded-lg focus:border-[#C6A15B] focus:outline-none text-white"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsAddingArticle(false)}
                      className="px-3 py-1.5 text-xs text-emerald-300 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-1.5 text-xs font-semibold text-black bg-gradient-to-r from-[#E5C78B] to-[#C6A15B] rounded-lg cursor-pointer"
                    >
                      Publish Article
                    </button>
                  </div>
                </form>
              )}

              {/* Articles List */}
              <div className="space-y-3">
                {articles.map((art) => (
                  <div
                    key={art.id}
                    className="p-4 glass-panel rounded-xl border border-emerald-500/20 flex items-start justify-between gap-4"
                  >
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-semibold text-[#E5C78B]">{art.category}</span>
                        <span className="text-emerald-500/40">·</span>
                        <span className="text-emerald-300/60">{art.publishedDate}</span>
                        <span className="text-emerald-500/40">·</span>
                        <span className="text-emerald-300/60">{art.readTime}</span>
                      </div>
                      <h4 className="font-bold text-white text-sm font-serif">{art.title}</h4>
                      <p className="text-xs text-emerald-200/70 line-clamp-1">{art.shortDescription}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => toggleArticleStatus(art.id)}
                        className="p-1.5 text-emerald-300/70 hover:text-white rounded-lg hover:bg-emerald-950/60 cursor-pointer"
                        title={art.status === 'published' ? 'Unpublish' : 'Publish'}
                      >
                        {art.status === 'published' ? (
                          <Eye className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <EyeOff className="w-4 h-4 text-slate-500" />
                        )}
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Delete article "${art.title}"?`)) {
                            deleteArticle(art.id);
                            showStatus('Article deleted.');
                          }
                        }}
                        className="p-1.5 text-slate-400 hover:text-rose-400 rounded-lg hover:bg-rose-950/40 cursor-pointer"
                        title="Delete article"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: EXPERIENCES */}
          {activeTab === 'experiences' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-white font-serif">Professional Experience Catalog</h3>
                <p className="text-xs text-emerald-300/60">
                  Strict adherence to verified positions. Brains Valley and Aamak are concurrent; Al Yosr
                  and actmedia descriptions are pending confirmation.
                </p>
              </div>

              <div className="space-y-3">
                {experiences.map((exp) => (
                  <div key={exp.id} className="p-4 glass-panel rounded-xl border border-emerald-500/20 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-white text-sm font-serif">{exp.company}</h4>
                          {exp.isConcurrent && (
                            <span className="text-[10px] bg-sky-950/60 text-sky-300 border border-sky-500/30 px-2 py-0.5 rounded font-medium">
                              Concurrent Position
                            </span>
                          )}
                          {exp.isPendingDescription && (
                            <span className="text-[10px] bg-amber-950/60 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded font-medium">
                              Description Pending
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-emerald-300 font-medium">{exp.position}</div>
                        <div className="text-[11px] text-emerald-400/60">
                          {exp.period} · {exp.workMode} {exp.location && `· ${exp.location}`}
                        </div>
                      </div>
                    </div>

                    {exp.tenderCountNote && (
                      <div className="p-2.5 bg-[#050806]/80 rounded-lg text-xs text-emerald-200 border border-emerald-500/20">
                        <span className="font-semibold text-[#E5C78B]">Tender Record: </span>
                        {exp.tenderCountNote}
                      </div>
                    )}

                    <div className="text-xs text-emerald-300/60">
                      {exp.responsibilities?.length || 0} documented responsibilities.
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: INBOX */}
          {activeTab === 'inbox' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-white font-serif">Client Inquiries & RFPs Received</h3>
                <p className="text-xs text-emerald-300/60">
                  Messages submitted via the contact form are logged directly here.
                </p>
              </div>

              {contactSubmissions.length === 0 ? (
                <div className="p-12 text-center glass-panel rounded-2xl border-dashed border-emerald-500/30">
                  <Inbox className="w-8 h-8 text-emerald-400/60 mx-auto mb-2" />
                  <p className="text-xs text-emerald-300/80">No client submissions yet.</p>
                  <p className="text-[11px] text-emerald-400/50 mt-1">
                    Test the contact form to see messages arrive instantly.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {contactSubmissions.map((sub) => (
                    <div
                      key={sub.id}
                      className="p-4 glass-panel rounded-xl border border-emerald-500/20 space-y-2"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-white">{sub.name}</span>
                        <span className="text-emerald-400/50 text-[11px]">
                          {new Date(sub.createdAt).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-x-4 text-xs text-emerald-200/70">
                        <div>
                          Email: <a href={`mailto:${sub.email}`} className="text-[#E5C78B] underline">{sub.email}</a>
                        </div>
                        {sub.phone && <div>Phone: {sub.phone}</div>}
                        <div>Type: <span className="font-medium text-white">{sub.inquiryType}</span></div>
                      </div>
                      <div className="p-3 bg-[#050806]/80 rounded-lg text-xs text-emerald-100 border border-emerald-500/20">
                        <div className="font-semibold text-[#E5C78B] mb-1">Subject: {sub.subject}</div>
                        <p className="whitespace-pre-line text-emerald-200/80">{sub.message}</p>
                      </div>
                      <div className="flex items-center justify-between text-xs pt-1">
                        <span className="text-emerald-400/60 text-[11px]">
                          Status: <strong className="uppercase text-white">{sub.status}</strong>
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateSubmissionStatus(sub.id, 'reviewed')}
                            className="px-2.5 py-1 text-[11px] bg-slate-800 text-slate-200 hover:bg-slate-700 rounded-md cursor-pointer transition-colors"
                          >
                            Mark Reviewed
                          </button>
                          <button
                            onClick={() => updateSubmissionStatus(sub.id, 'replied')}
                            className="px-2.5 py-1 text-[11px] bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/40 rounded-md cursor-pointer transition-colors"
                          >
                            Mark Replied
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 6: JSON BACKUP / IMPORT */}
          {activeTab === 'json' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-white font-serif">Backup & Batch Content Management</h3>
                <p className="text-xs text-emerald-300/60">
                  Export all portfolio projects, services, articles, and CV entries to JSON, or import
                  a previously saved backup to load new content in bulk.
                </p>
              </div>

              {/* Export Box */}
              <div className="p-5 glass-panel rounded-xl border border-emerald-500/20 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase text-[#E5C78B]">
                      Export Current Portfolio Data
                    </h4>
                    <p className="text-xs text-emerald-200/70 mt-0.5">
                      Download a clean JSON file containing all 29 projects, services, articles, and
                      CV history.
                    </p>
                  </div>
                  <button
                    onClick={handleDownloadJSON}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-black bg-gradient-to-r from-[#E5C78B] to-[#C6A15B] rounded-lg cursor-pointer hover:brightness-110 transition-all shadow-md shadow-[#C6A15B]/20 shrink-0"
                  >
                    <Download className="w-3.5 h-3.5 text-black stroke-[2.5]" />
                    <span>Download JSON Backup</span>
                  </button>
                </div>
              </div>

              {/* Import Box */}
              <div className="p-5 glass-panel rounded-xl border border-emerald-500/20 space-y-3">
                <h4 className="text-xs font-bold uppercase text-[#E5C78B]">
                  Import / Restore Portfolio Data
                </h4>
                <p className="text-xs text-emerald-200/70">
                  Paste valid JSON data below to update or batch-populate your projects and articles.
                </p>
                <textarea
                  rows={6}
                  value={importJsonText}
                  onChange={(e) => setImportJsonText(e.target.value)}
                  placeholder="Paste JSON content here..."
                  className="w-full p-3 text-xs bg-[#050806] border border-emerald-500/30 rounded-xl font-mono focus:border-[#C6A15B] focus:outline-none text-white placeholder-emerald-400/30"
                />
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (confirm('Reset all content back to factory defaults?')) {
                        resetToDefaults();
                        showStatus('Reset to factory defaults.');
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Reset to Factory Defaults</span>
                  </button>
                  <button
                    onClick={handleImportJSON}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-black bg-gradient-to-r from-[#E5C78B] to-[#C6A15B] rounded-lg cursor-pointer hover:brightness-110 transition-all shadow-md shadow-[#C6A15B]/20"
                  >
                    <Upload className="w-3.5 h-3.5 text-black stroke-[2.5]" />
                    <span>Apply JSON Import</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#050806] border-t border-emerald-950/80 flex items-center justify-between text-xs text-emerald-300/60">
          <span>Storage: Browser LocalStorage (Auto-persisted)</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-emerald-950/60 border border-emerald-500/30 text-white font-medium rounded-lg hover:border-[#C6A15B]/60 transition-colors cursor-pointer"
          >
            Close Studio
          </button>
        </div>
      </div>
    </div>
  );
};
