/**
 * Interactive Awarded Tenders Showcase Engine
 * Handles real-time search, multi-tier filtering, and full 8-section case study modal
 */

(function () {
  const BASE_PREFIX = (typeof window !== 'undefined' && window.location.pathname.startsWith('/yg')) ? '/yg' : '';
  document.addEventListener('DOMContentLoaded', () => {
    initTendersShowcase();
    setupTenderDetailModal();
  });

  function initTendersShowcase() {
    const grid = document.getElementById('tenders-grid');
    if (!grid) return;

    const searchBox = document.getElementById('tenders-search-box');
    const counter = document.getElementById('tenders-counter');
    const statusBtns = document.querySelectorAll('#tenders-status-filters button');
    const categoryBtns = document.querySelectorAll('#tenders-category-filters button');

    let activeStatus = 'all';
    let activeCategory = 'all';
    let searchQuery = '';

    const isAr = document.documentElement.dir === 'rtl' || document.documentElement.lang === 'ar';

    function filterCards() {
      const cards = grid.querySelectorAll('.tender-card');
      let visibleCount = 0;
      const q = searchQuery.toLowerCase().trim();

      cards.forEach((card) => {
        const cardStatus = card.getAttribute('data-status');
        const cardCategory = card.getAttribute('data-category');
        const cardText = card.textContent.toLowerCase();

        const statusMatch = activeStatus === 'all' || cardStatus === activeStatus;
        const categoryMatch = activeCategory === 'all' || cardCategory === activeCategory;
        const searchMatch = !q || cardText.includes(q);

        if (statusMatch && categoryMatch && searchMatch) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (counter) {
        counter.textContent = isAr 
          ? `عرض ${visibleCount} منافسة` 
          : `Displaying ${visibleCount} Tenders`;
      }
    }

    if (searchBox) {
      searchBox.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        filterCards();
      });
    }

    statusBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        statusBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        activeStatus = btn.getAttribute('data-status') || 'all';
        filterCards();
      });
    });

    categoryBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        categoryBtns.forEach((b) => {
          b.classList.remove('bg-emerald-950/60', 'text-white');
          b.classList.add('bg-[#07130D]', 'text-emerald-300/80');
        });
        btn.classList.remove('bg-[#07130D]', 'text-emerald-300/80');
        btn.classList.add('bg-emerald-950/60', 'text-white');
        activeCategory = btn.getAttribute('data-category') || 'all';
        filterCards();
      });
    });
  }

  function setupTenderDetailModal() {
    let modal = document.getElementById('tender-case-study-modal');
    const isAr = document.documentElement.dir === 'rtl' || document.documentElement.lang === 'ar';

    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'tender-case-study-modal';
      modal.className = 'fixed inset-0 z-[1000] hidden items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto';
      modal.innerHTML = `
        <div class="relative w-full max-w-4xl glass-panel-elevated rounded-3xl border border-emerald-500/30 p-6 sm:p-8 space-y-6 my-8 shadow-2xl ${isAr ? 'text-right' : 'text-left'}" id="tender-modal-content">
          <button type="button" id="close-tender-modal" class="absolute top-5 ${isAr ? 'left-5' : 'right-5'} p-2 rounded-full text-slate-400 hover:text-white bg-black/40 hover:bg-black/80 transition-colors" aria-label="Close modal">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          <div id="tender-modal-body"></div>
        </div>
      `;
      document.body.appendChild(modal);

      const closeBtn = document.getElementById('close-tender-modal');
      closeBtn.addEventListener('click', closeTenderModal);

      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeTenderModal();
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
          closeTenderModal();
        }
      });
    }

    // Delegate click handler for opening tender modal
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.open-tender-modal-btn');
      if (btn) {
        e.preventDefault();
        const tenderId = btn.getAttribute('data-tender-id');
        if (window.ALL_TENDERS_DATA) {
          const tender = window.ALL_TENDERS_DATA.find((t) => t.id === tenderId);
          if (tender) openTenderModal(tender, isAr);
        }
      }
    });

    function closeTenderModal() {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = 'auto';
    }

    function openTenderModal(t, isAr) {
      const body = document.getElementById('tender-modal-body');
      if (!body) return;

      const title = isAr ? t.nameAr : t.nameEn;
      const entity = isAr ? t.entityAr : t.entityEn;
      const subject = isAr ? t.subjectAr : t.subjectEn;
      const summary = isAr ? t.summaryAr : t.summaryEn;
      const role = isAr ? t.roleAr : t.roleEn;
      const challenges = isAr ? t.challengesAr : t.challengesEn;
      const statusText = isAr ? 'منافسة حكومية' : 'Government Tender';
      const statusBadgeClass = 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/30';
      function localizeEnField(val) {
        return String(val || '')
          .replace(/منصة اعتماد/g, 'Etimad Platform')
          .replace(/تعاميم تنظيمية عامة/g, 'Regulatory Circulars')
          .replace(/2026\/م\/79248/g, '2026/M/79248')
          .replace(/1447هـ\s*\/\s*2026م/g, '1447 AH / 2026')
          .replace(/(\d{2}\/\d{2}\/\d{4})\s*هـ/g, '$1 AH')
          .replace(/(\d{2}\/\d{2}\/\d{4})م/g, '$1')
          .replace(/(\d{4}-\d{2}-\d{2})م/g, '$1')
          .replace(/سنة ميلادية واحدة\s*\(12\s*شهراً?\)/g, '12 Months (1 Calendar Year)')
          .replace(/عام ميلادي واحد\s*\(12\s*(?:شهراً?|Months)\)/g, '12 Months (1 Calendar Year)')
          .replace(/سنتان ميلاديتان\s*\(24\s*شهراً?\)/g, '24 Months (2 Calendar Years)')
          .replace(/24\s*(?:شهراً?|Months)\s*ميلادياً?\s*\(سنتان\)/g, '24 Months (2 Calendar Years)')
          .replace(/24\s*(?:شهراً?|Months)\s*\(سنتان ميلاديتان\)/g, '24 Months (2 Calendar Years)')
          .replace(/24\s*(?:شهراً?|Months)\s*\(تشغيل وتطوير\)\s*و\s*36\s*(?:شهراً?|Months)\s*\(صيانة ودعم\)/g, '24 Months (Dev & Ops) + 36 Months (Maintenance & Support)')
          .replace(/60\s*(?:شهراً?|Months)\s*\(5\s*(?:سنوات|Years)\s*ميلادية\)/g, '60 Months (5 Calendar Years)')
          .replace(/36\s*(?:شهراً?|Months)\s*\(3\s*(?:سنوات|Years)\s*ميلادية\)/g, '36 Months (3 Calendar Years)')
          .replace(/1095\s*(?:يوماً?|Days)\s*\(3\s*(?:سنوات|Years)\s*ميلادية\)/g, '1,095 Days (3 Calendar Years)')
          .replace(/6\s*(?:أشهر|Months)\s*\(قابلة للتجديد الشهري\)/g, '6 Months (Monthly Renewable)')
          .replace(/3\s*(?:سنوات|Years)\s*\(سنة تنفيذ\s*\+\s*سنتين صيانة ودعم\)/g, '3 Years (1 Yr Implementation + 2 Yrs O&M)')
          .replace(/3\s*(?:سنوات|Years)\s*\(ثلاث سنوات متتالية\)/g, '3 Consecutive Years')
          .replace(/سنة واحدة من تاريخ توقيع العقد/g, '1 Year from Contract Signing')
          .replace(/بحسب أوامر الصرف المبنية على الاتفاقية الإطارية/g, 'Per Framework Agreement Work Orders')
          .replace(/سارية ومطبقة بموجب النظام/g, 'Active Statutory Regulation')
          .replace(/سنة واحدة\s*\(12\s*شهراً?\)/g, '12 Months (1 Year)')
          .replace(/ثلاث سنوات\s*\(36\s*شهراً?\)/g, '36 Months (3 Years)')
          .replace(/سنتان\s*\(24\s*شهراً?\)/g, '24 Months (2 Years)')
          .replace(/(\d+)\s*شهراً?\s*ميلادياً?/g, '$1 Months')
          .replace(/(\d+)\s*أشهر\s*ميلادية/g, '$1 Months')
          .replace(/(\d+)\s*Months\s*ميلادياً?/g, '$1 Months')
          .replace(/(\d+)\s*Months\s*ميلادية/g, '$1 Months')
          .replace(/(\d+)\s*شهراً?/g, '$1 Months')
          .replace(/(\d+)\s*أشهر/g, '$1 Months')
          .replace(/(\d+)\s*سنوات/g, '$1 Years')
          .replace(/(\d+)\s*سنة/g, '$1 Year')
          .replace(/(\d+)\s*يوماً?/g, '$1 Days')
          .replace(/(\d+)\s*أيام/g, '$1 Days')
          .replace(/سنة ميلادية/g, '1 Calendar Year');
      }
      const durationDisplay = isAr ? t.duration : localizeEnField(t.duration);
      const issueDisplay = isAr ? t.issueDate : localizeEnField(t.issueDate);
      const tenderNumDisplay = isAr ? t.tenderNumber : localizeEnField(t.tenderNumber);
      const keyReqList = isAr ? t.keyRequirementsAr : t.keyRequirementsEn;
      const qualList = isAr ? t.qualificationsAr : t.qualificationsEn;
      const pageUrl = (BASE_PREFIX || '') + (isAr ? `/ar/tenders/case-${t.slug}.html` : `/en/tenders/case-${t.slug}.html`);

      body.innerHTML = `
        <div class="space-y-6">
          <div class="space-y-2 pb-4 border-b border-emerald-950/80">
            <div class="flex flex-wrap items-center gap-2 text-xs">
              <span class="badge-gold">🏛️ ${entity}</span>
              <span class="badge-emerald font-mono">#${tenderNumDisplay}</span>
              <span class="px-2.5 py-0.5 rounded text-[11px] font-bold ${statusBadgeClass}">
                ${statusText}
              </span>
            </div>
            <h2 class="text-xl sm:text-2xl font-extrabold text-white font-serif leading-snug">
              ${title}
            </h2>
            <div class="text-xs text-emerald-300/80 flex flex-wrap gap-4 pt-1 font-mono">
              <span>⏱️ ${isAr ? 'المدة:' : 'Duration:'} ${durationDisplay}</span>
              <span>📅 ${isAr ? 'تاريخ الطرح:' : 'Issue:'} ${issueDisplay}</span>
              <span>🎯 ${isAr ? 'القطاع:' : 'Sector:'} ${isAr ? t.sectorAr : t.sectorEn}</span>
            </div>
          </div>

          <div class="space-y-3 text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            <h4 class="text-xs uppercase font-mono tracking-wider text-[#E5C78B] font-bold">${isAr ? '1. الملخص ونطاق العمل' : '1. Overview & Scope'}</h4>
            <p>${summary}</p>
          </div>

          <div class="space-y-2">
            <h4 class="text-xs uppercase font-mono tracking-wider text-[#E5C78B] font-bold">${isAr ? '2. أبرز المتطلبات الفنية للكراسة' : '2. Key Technical Specifications'}</h4>
            <div class="space-y-1.5">
              ${(keyReqList || []).map((r) => `<div class="p-2.5 rounded-lg bg-black/40 border border-emerald-950 text-xs text-emerald-200 flex items-start gap-2"><span class="text-[#E5C78B]">✦</span><span>${r}</span></div>`).join('')}
            </div>
          </div>

          <div class="space-y-2 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/20">
            <h4 class="text-xs uppercase font-mono tracking-wider text-[#E5C78B] font-bold">${isAr ? '3. دوري المهني ومصفوفة الامتثال' : '3. Professional Contribution & Compliance Role'}</h4>
            <p class="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">${role}</p>
          </div>

          <div class="space-y-2">
            <h4 class="text-xs uppercase font-mono tracking-wider text-[#E5C78B] font-bold">${isAr ? '4. التحديات الفنية ومواءمة الشروط' : '4. Key Challenges & Mitigation'}</h4>
            <p class="text-xs text-emerald-200/80 leading-relaxed">${challenges}</p>
          </div>

          <div class="space-y-2">
            <h4 class="text-xs uppercase font-mono tracking-wider text-[#E5C78B] font-bold">${isAr ? '5. الشهادات والاعتمادات المستوفاة' : '5. Qualifications & Certifications Addressed'}</h4>
            <div class="flex flex-wrap gap-1.5">
              ${(qualList || []).map((q) => `<span class="text-[11px] px-2.5 py-1 rounded bg-[#07130D] border border-emerald-950 text-emerald-300">✓ ${q}</span>`).join('')}
            </div>
          </div>

          <div class="pt-4 border-t border-emerald-950/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <a href="${pageUrl}" class="text-xs text-[#E5C78B] hover:text-white underline font-semibold flex items-center gap-1">
              <span>${isAr ? 'عرض صفحة دراسة الحالة الكاملة' : 'View Full Case Study Page'}</span>
              <svg class="w-3.5 h-3.5 ${isAr ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>

            <a href="${document.getElementById('contact') ? '#contact' : ((BASE_PREFIX || '') + (isAr ? '/ar/contact/index.html' : '/en/contact/index.html'))}" class="btn-gold text-xs py-2 px-5 w-full sm:w-auto text-center">
              <span>${isAr ? 'طلب استشارة مماثلة' : 'Request Similar Consultation'}</span>
            </a>
          </div>
        </div>
      `;

      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    }
  }
})();
