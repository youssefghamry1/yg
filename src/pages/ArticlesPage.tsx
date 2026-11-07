import React, { useState, useMemo } from 'react';
import {
  Search,
  Clock,
  Calendar,
  Sparkles,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { all100Articles, ArticleSummary } from '../data/all100Articles';

interface ArticlesPageProps {
  onSelectArticle?: (article: any) => void;
  onOpenAdmin?: () => void;
}

export const ArticlesPage: React.FC<ArticlesPageProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'الكل (100 مقال)' },
    { id: 'wordpress', label: 'ووردبريس (10)' },
    { id: 'shopify', label: 'شوبيفاي (10)' },
    { id: 'salla', label: 'سلة (10)' },
    { id: 'zid', label: 'زد (10)' },
    { id: 'joomla', label: 'جوملا (10)' },
    { id: 'drupal', label: 'دوروبال (10)' },
    { id: 'opencart', label: 'أوبن كارت (10)' },
    { id: 'react', label: 'ريأكت (10)' },
    { id: 'node', label: 'نود جي إس (10)' },
    { id: 'angular', label: 'أنجولار (10)' },
  ];

  const filteredArticles = useMemo(() => {
    return all100Articles.filter((art) => {
      const matchesCategory = selectedCategory === 'all' || art.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        art.title.toLowerCase().includes(query) ||
        art.metaDesc.toLowerCase().includes(query) ||
        art.categoryName.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full max-w-[1920px] mx-auto py-10 sm:py-16 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 space-y-10 animate-fade-in relative z-10 text-zinc-200">
      
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Page Header (Full Width Fluid) */}
      <div className="border-b border-emerald-950/60 pb-8 space-y-4 text-center sm:text-right">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
          <BookOpen className="w-3.5 h-3.5 text-[#C6A15B]" />
          <span>المكتبة المعرفية التقنية والهندسية</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span className="text-[#C6A15B]">100 مقال متخصص</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          المقالات <span className="bg-gradient-to-r from-emerald-400 to-[#E5C78B] bg-clip-text text-transparent">والأدلة التقنية المتخصصة</span>
        </h1>
        
        <p className="text-sm sm:text-base text-zinc-300 max-w-4xl leading-relaxed">
          موسوعة برمجية واستشارية متكاملة تضم 100 مقال معمق تغطي 10 تخصصات تقنية رئيسية: أنظمة إدارة المحتوى، التجارة الإلكترونية، تطوير الواجهات، وهندسة البرمجيات والمناقصات.
        </p>

        {/* Search Bar */}
        <div className="pt-4 max-w-2xl sm:mx-0">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث في 100 مقال (مثال: أمان، شوبيفاي، سلة، زكاة، ريأكت، SEO...)"
              className="w-full py-3.5 pr-12 pl-4 rounded-xl bg-zinc-900/90 border border-zinc-700/80 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 text-sm shadow-lg transition-all"
            />
            <Search className="w-5 h-5 text-zinc-500 absolute right-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>

      {/* Category Filter Pills (Fluid Horizontal Scroll) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none whitespace-nowrap">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/30'
                : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Meta Counter */}
      <div className="flex items-center justify-between text-xs text-zinc-400 pb-2 border-b border-zinc-800/60">
        <span>المعروض حالياً: <strong className="text-emerald-400 font-extrabold text-sm">{filteredArticles.length}</strong> مقالاً</span>
        <a 
          href="/ar/articles/index.html" 
          className="text-xs text-[#E5C78B] hover:text-white flex items-center gap-1 font-semibold"
        >
          <span>تصفح الفهرس الكامل للمقالات (HTML)</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Articles Grid (Responsive Multi-Column up to 4 & 5 cols on large screens) */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-20 bg-zinc-950/40 rounded-2xl border border-zinc-800/80 space-y-3">
          <p className="text-base font-bold text-white">لم يتم العثور على مقالات مطابقة للبحث</p>
          <p className="text-xs text-zinc-400">جرب البحث بكلمات مختلفة أو اختر تصنيفاً آخر.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {filteredArticles.map((article: ArticleSummary) => (
            <a
              key={article.slug}
              href={`/ar/articles/${article.slug}.html`}
              className="p-5 bg-zinc-900/60 hover:bg-zinc-900/95 border border-zinc-800/80 hover:border-emerald-500/40 rounded-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/20"
            >
              <div className="space-y-3">
                {/* Image */}
                <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-zinc-950 relative border border-zinc-800/60">
                  <img 
                    src={`/${article.featuredImage}`} 
                    alt={article.title}
                    loading="lazy" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md text-[10px] font-bold bg-black/70 backdrop-blur-md text-emerald-400 border border-emerald-500/20">
                    {article.categoryName}
                  </span>
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-zinc-500" />
                    <span>{article.date}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-zinc-500" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug line-clamp-2">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                  {article.metaDesc}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-zinc-800/80 mt-4 flex items-center justify-between text-xs">
                <span className="text-emerald-400 font-bold flex items-center gap-1 group-hover:text-emerald-300">
                  <span>قراءة المقال بالكامل</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
                <span className="text-[10px] text-zinc-500">{article.author}</span>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Hub Notice Banner */}
      <div className="p-8 bg-gradient-to-r from-emerald-950/30 via-zinc-900 to-amber-950/20 rounded-2xl border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-bold text-[#C6A15B]">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>مكتبة معرفية معتمدة ومحدثة</span>
          </div>
          <h3 className="text-lg font-bold text-white">
            هل تحتاج إلى استشارة تقنية مخصصة لمشروعك؟
          </h3>
          <p className="text-xs text-zinc-300 leading-relaxed">
            نقدم دراسات جدوى معمارية، تحليل كراسات الشروط، وتدقيق العروض الفنية للمنافسات والحلول الرقمية للمؤسسات الحكومية والشركات.
          </p>
        </div>

        <a
          href="/ar/contact.html"
          className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition-all text-center whitespace-nowrap"
        >
          طلب استشارة تقنية فورية
        </a>
      </div>

    </div>
  );
};
