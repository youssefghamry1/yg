import fs from 'fs';
import path from 'path';

const awardedTendersPath = path.resolve(process.cwd(), 'ar/tenders/awarded-tenders.html');
const tendersIndexPath = path.resolve(process.cwd(), 'ar/tenders/index.html');

function updateAwardedTendersHtml() {
  if (!fs.existsSync(awardedTendersPath)) return;
  let html = fs.readFileSync(awardedTendersPath, 'utf-8');

  // 1. Rename titles and header links
  html = html.replace(/المناقصات التي عملت عليها والإنجازات/g, 'المناقصات');
  html = html.replace(/المناقصات والإنجازات/g, 'المناقصات');
  html = html.replace(/<title>.*?<\/title>/, '<title>المناقصات | سابقة أعمال المنافسات والعطاءات الحكومية | يوسف الغمري</title>');

  // 2. Expand max-w-7xl to full width max-w-[1920px]
  html = html.replace(/class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"/g, 'class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20"');
  html = html.replace(/class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12"/g, 'class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-12 space-y-12"');

  // 3. Update Hero, Stats (400+, 50+, 60+), and insert Clarification Paragraph
  const oldHeroTarget = `<h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans leading-tight">
          المناقصات
        </h1>`;

  const newHeroAndStats = `<h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans leading-tight">
          المناقصات <span class="gold-gradient-text heading-hover-glow">الحكومية والتقنية</span>
        </h1>
        
        <p class="text-sm sm:text-base text-emerald-200/80 max-w-4xl leading-relaxed">
          سجل مهني موثق يستعرض المشاركات والخبرات في إعداد العروض الفنية، مصفوفات الامتثال، اتفاقيات مستوى الخدمة (SLA)، وهندسة الحلول التقنية وفق كراسات الشروط والمواصفات الرسمية عبر منصة اعتماد والجهات السيادية.
        </p>

        <!-- Mandatory Clarification Paragraph -->
        <div class="p-5 rounded-2xl bg-amber-500/10 border border-[#C6A15B]/30 text-xs sm:text-sm text-zinc-200 leading-relaxed space-y-2">
          <div class="flex items-center gap-2 font-bold text-[#E5C78B]">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span>تنويه مهني حول سابقة أعمال المناقصات:</span>
          </div>
          <p class="text-zinc-300">
            المناقصات المعروضة هنا تمثل جزءًا محدودًا فقط من نطاق الخبرة والمشاركات التي تمتد إلى أكثر من 400 مناقصة ومشروع تقني. وقد تم اختيار هذه النماذج لعرض أمثلة من المشاركات والخبرات المرتبطة بالجهات والوزارات الحكومية، ولا تمثل القائمة الكاملة لجميع الأعمال التي تمت المشاركة فيها.
          </p>
        </div>

        <!-- Strictly Updated Metrics Banner (400+, 50+, 60+) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          <div class="p-5 rounded-2xl glass-panel border border-emerald-500/25 space-y-2 bg-zinc-900/60">
            <div class="text-3xl sm:text-4xl font-extrabold text-[#E5C78B] font-mono">400+</div>
            <div class="text-sm font-bold text-white">مناقصة تم إعدادها وكتابتها وتنسيقها ومراجعتها</div>
            <p class="text-xs text-zinc-400 leading-relaxed">
              تمت كتابة وإعداد وتنسيق ومراجعة أكثر من 400 مناقصة، مع التركيز على إعداد العروض الفنية وتحليل المتطلبات ومراجعة مستندات التقديم وضمان اكتمالها.
            </p>
          </div>
          <div class="p-5 rounded-2xl glass-panel border border-emerald-500/25 space-y-2 bg-zinc-900/60">
            <div class="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">50+</div>
            <div class="text-sm font-bold text-white">مشروعًا تمت ترسيته من جهات حكومية</div>
            <p class="text-xs text-zinc-400 leading-relaxed">
              خبرة مرتبطة بمشاريع تمت ترسيتها من جهات حكومية، ضمن نطاق المشاركات والخبرات في إعداد العروض والمناقصات.
            </p>
          </div>
          <div class="p-5 rounded-2xl glass-panel border border-emerald-500/25 space-y-2 bg-zinc-900/60">
            <div class="text-3xl sm:text-4xl font-extrabold text-[#E5C78B] font-mono">60+</div>
            <div class="text-sm font-bold text-white">جهة حكومية وسيادية</div>
            <p class="text-xs text-zinc-400 leading-relaxed">
              خبرة في التعامل مع متطلبات ومنافسات جهات حكومية ووزارات وهيئات مختلفة - ما يقرب من 60 جهة حكومية وسيادية.
            </p>
          </div>
        </div>`;

  // Replace stats block in HTML
  html = html.replace(/<!-- Metrics Banner -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, newHeroAndStats + '\n      </div>');

  // 4. Remove status filter tabs
  html = html.replace(/<!-- Filter Tabs -->[\s\S]*?<\/div>/, '<!-- Status filters removed as per client requirements -->');

  // 5. Remove status badges from cards (like "تمت الترسية", "تم إعداد العرض والتقديم", "قيد التقييم الفني")
  html = html.replace(/<span class="px-2\.5 py-1 rounded-lg border text-\[11px\] flex items-center gap-1\.5 border-\[#C6A15B\] text-\[#E5C78B\] bg-\[#C6A15B\]\/15 font-bold">[\s\S]*?<\/span>/g, '<span class="text-xs font-semibold text-emerald-400 font-mono">منافسة حكومية</span>');
  html = html.replace(/<span class="px-2\.5 py-1 rounded-lg border text-\[11px\] flex items-center gap-1\.5 border-slate-500\/40 text-slate-300 bg-black\/40">[\s\S]*?<\/span>/g, '<span class="text-xs font-semibold text-emerald-400 font-mono">منافسة حكومية</span>');
  html = html.replace(/<span class="px-2\.5 py-1 rounded-lg border text-\[11px\] flex items-center gap-1\.5 border-emerald-500\/40 text-emerald-300 bg-emerald-950\/40 font-bold">[\s\S]*?<\/span>/g, '<span class="text-xs font-semibold text-emerald-400 font-mono">منافسة حكومية</span>');

  fs.writeFileSync(awardedTendersPath, html, 'utf-8');
  console.log('Successfully updated ar/tenders/awarded-tenders.html with new stats, clarification, and full-width layout!');
}

function updateTendersIndexHtml() {
  if (!fs.existsSync(tendersIndexPath)) return;
  let html = fs.readFileSync(tendersIndexPath, 'utf-8');

  // Rename titles and references
  html = html.replace(/المناقصات والإنجازات/g, 'المناقصات');
  html = html.replace(/class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"/g, 'class="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20"');

  // Update stats if present
  html = html.replace(/34 منافسة/g, '400+ مناقصة');
  html = html.replace(/16 مشروع/g, '50+ مشروع تمت ترسيته');
  html = html.replace(/28\+ جهة/g, '60+ جهة حكومية');

  fs.writeFileSync(tendersIndexPath, html, 'utf-8');
  console.log('Successfully updated ar/tenders/index.html!');
}

updateAwardedTendersHtml();
updateTendersIndexHtml();
