import { ArticleItem } from './types';

export const joomlaArticles: ArticleItem[] = [
  {
    slug: 'what-is-joomla',
    title: 'ما هو جوملا (Joomla)؟ دليلك الشامل لنظام إدارة المحتوى القوي',
    metaTitle: 'ما هو جوملا؟ دليل شامل لنظام إدارة المحتوى Joomla ومميزاته | يوسف الغمري',
    metaDesc: 'تعرف على نظام جوملا (Joomla) لإدارة المحتوى، معمارية النظام، أبرز مميزاته، الفروقات الجوهرية بينه وبين ووردبريس ودوروبال، وحالات الاستخدام المثالية.',
    category: 'joomla',
    categoryName: 'جوملا (Joomla)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/joomla-guide.svg',
    imageAlt: 'دليل نظام جوملا لإدارة المحتوى Joomla',
    relatedServiceUrl: '/ar/services/backend-development.html',
    relatedServiceName: 'تطوير المنصات والأنظمة الخلفية',
    intro: 'يُعد نظام جوملا (Joomla) أحد أعرق وأقوى أنظمة إدارة المحتوى مفتوحة المصدر (CMS) في العالم. يقف جوملا في موقع استراتيجي بين سهولة ووردبريس وقوة دوروبال المعمارية، مما يجعله الخيار المفضل للعديد من البوابات الحكومية والجامعات والمواقع المؤسسية المعقدة.',
    toc: [
      { id: 'definition', text: '1. ما هو جوملا وتاريخ تطوره' },
      { id: 'architecture', text: '2. البنية المعمارية للنظام (MVC)' },
      { id: 'core-features', text: '3. مميزات جوملا الأساسية المدمجة' },
      { id: 'joomla-vs-others', text: '4. مقارنة جوملا مع ووردبريس ودوروبال' },
      { id: 'when-to-use', text: '5. متى تختار جوملا لمشروعك؟' },
      { id: 'faq', text: '6. أسئلة شائعة حول جوملا' }
    ],
    sections: [
      {
        id: 'definition',
        title: 'ما هو جوملا وتاريخ تطوره',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            أُطلق جوملا في عام 2005 كمنصة مفتوحة المصدر مشتقة من نظام Mambo، وسرعان ما حصد عشرات الجوائز العالمية بفضل مرونته الاستثنائية. كلمة "Joomla" مشتقة من الكلمة السواحيلية "Jumla" والتي تعني "معاً" أو "ككيان واحد"، وهو ما يجسد الروح التعاونية لمجتمع مطوري النظام الممتد حول العالم.
          </p>
          <p class="text-zinc-300 leading-relaxed mb-4">
            مع إطلاق الإصدارات الحديثة (Joomla 4 و Joomla 5)، شهد النظام ثورة تقنية كبرى تضمنت إعادة كتابة الكود البرمجي بالكامل ليتوافق مع معايير PHP الحديثة، وتحسين محرك تدفقات العمل (Workflows)، وتوفير واجهة برمجة تطبيقات Web Services RESTful API مدمجة.
          </p>
        `
      },
      {
        id: 'architecture',
        title: 'البنية المعمارية للنظام (MVC)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يعتمد جومla على نمط التصميم البرمجي الشهير Model-View-Controller (MVC)، وهو ما يمنح المطورين فصلاً كاملاً ونظيفاً بين منطق العمليات، وطريقة عرض البيانات، وقواعد البيانات. تتألف إضافات جوملا من ثلاثة عناصر محورية:
          </p>
          <ul class="list-disc list-inside space-y-2 text-zinc-300 mb-6">
            <li><strong>المكونات (Components):</strong> تمثل التطبيقات الرئيسية في الموقع (مثل نظام المقالات، النماذج، المتاجر الإلكترونية) وتتحكم في الجزء المركزي من الصفحة.</li>
            <li><strong>الموديولات (Modules):</strong> كتل محتوى فرعية خفيفة الوزن يمكن وضعها في مواضع متعددة بالقالب (مثل قوائم التنقل، تسجيل الدخول، أحدث الأخبار).</li>
            <li><strong>الإضافات البرمجية (Plugins):</strong> نصوص برمجية تعترض الأحداث في النظام لتعديل السلوك العام (مثل معالجة النصوص، مصادقة المستخدمين، تحسين SEO).</li>
          </ul>
        `
      },
      {
        id: 'core-features',
        title: 'مميزات جوملا الأساسية المدمجة',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تتميز منصة جوملا بوجود ميزات احترافية هائلة مدمجة في النواة (Core) دون الحاجة لتثبيت إضافات خارجية طرف ثالث:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div class="bg-zinc-900/60 border border-emerald-500/20 rounded-xl p-4">
              <h4 class="text-emerald-400 font-bold mb-2">إدارة متقدمة للصلاحيات (ACL)</h4>
              <p class="text-xs text-zinc-400">نظام أذونات هرمي دقيق للغاية يسمح بتحديد صلاحيات القراءة، الإنشاء، التعديل، والحذف على مستوى القسم، المقال، أو حتى الحقل الواحد.</p>
            </div>
            <div class="bg-zinc-900/60 border border-emerald-500/20 rounded-xl p-4">
              <h4 class="text-emerald-400 font-bold mb-2">تعدد اللغات المدمج (Native Multilingual)</h4>
              <p class="text-xs text-zinc-400">بناء مواقع متعددة اللغات دون الحاجة لأي إضافة خارجية، مع ارتباط مباشر بين المقالات والقوائم بمختلف اللغات.</p>
            </div>
            <div class="bg-zinc-900/60 border border-emerald-500/20 rounded-xl p-4">
              <h4 class="text-emerald-400 font-bold mb-2">محرك تدفقات العمل (Workflows)</h4>
              <p class="text-xs text-zinc-400">إدارة دورة حياة المحتوى من المسودة إلى المراجعة ثم الاعتماد والنشر، مع إشعارات بريدية آلية للمحررين.</p>
            </div>
            <div class="bg-zinc-900/60 border border-emerald-500/20 rounded-xl p-4">
              <h4 class="text-emerald-400 font-bold mb-2">حقول المحتوى المخصصة (Custom Fields)</h4>
              <p class="text-xs text-zinc-400">إمكانية إضافة أكثر من 15 نوعاً من الحقول المخصصة لأي مقال أو نموذج مستخدم بسهولة فائقة.</p>
            </div>
          </div>
        `
      },
      {
        id: 'joomla-vs-others',
        title: 'مقارنة جوملا مع ووردبريس ودوروبال',
        content: `
          <div class="overflow-x-auto my-6">
            <table class="w-full text-sm text-right text-zinc-300 border border-zinc-800">
              <thead class="bg-zinc-900 text-emerald-400 font-bold">
                <tr>
                  <th class="p-3 border-b border-zinc-800">وجه المقارنة</th>
                  <th class="p-3 border-b border-zinc-800">جوملا (Joomla)</th>
                  <th class="p-3 border-b border-zinc-800">ووردبريس (WordPress)</th>
                  <th class="p-3 border-b border-zinc-800">دوروبال (Drupal)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-zinc-800/60">
                <tr>
                  <td class="p-3 font-semibold text-white">منحنى التعلم</td>
                  <td class="p-3">متوسط</td>
                  <td class="p-3 text-emerald-400">سهل وسريع</td>
                  <td class="p-3 text-amber-400">شديد الصعوبة</td>
                </tr>
                <tr>
                  <td class="p-3 font-semibold text-white">إدارة الصلاحيات (ACL)</td>
                  <td class="p-3 text-emerald-400">متقدمة ومدمجة في النواة</td>
                  <td class="p-3">أساسية (تحتاج إضافات)</td>
                  <td class="p-3 text-emerald-400">معقدة وشاملة جداً</td>
                </tr>
                <tr>
                  <td class="p-3 font-semibold text-white">دعم تعدد اللغات</td>
                  <td class="p-3 text-emerald-400">مدمج كلياً</td>
                  <td class="p-3">يتطلب إضافات (WPML/Polylang)</td>
                  <td class="p-3 text-emerald-400">مدمج كلياً</td>
                </tr>
                <tr>
                  <td class="p-3 font-semibold text-white">تكلفة الصيانة</td>
                  <td class="p-3">متوسطة</td>
                  <td class="p-3">منخفضة إلى متوسطة</td>
                  <td class="p-3 text-amber-400">مرتفعة</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        id: 'when-to-use',
        title: 'متى تختار جوملا لمشروعك؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            جوملا هو الخيار الأنسب حين يكون مشروعك أكبر من مجرد مدونة أو موقع تعريفي بسيط، وفي نفس الوقت لا يتطلب الميزانيات الضخمة والتعقيد المفرط لنظام دوروبال. نوصي باعتماد جوملا في الحالات التالية:
          </p>
          <ul class="list-disc list-inside space-y-2 text-zinc-300">
            <li>بوابات الجامعات والمدارس والمراكز الأكاديمية متعددة الأقسام واللغات.</li>
            <li>المنصات المؤسسية والمواقع الحكومية التي تتطلب هرمية صلاحيات دقيقة لموظفي التحرير.</li>
            <li>المواقع التي تقدم خدمات حجز أو بوابات للمجتمعات الافتراضية والشبكات الداخلية (Intranet).</li>
            <li>المنصات متعددة اللغات التي تتطلب استقراراً دون الاعتماد على مصفوفة معقدة من ملحقات الطرف الثالث.</li>
          </ul>
        `
      }
    ],
    faqs: [
      {
        q: 'هل جوملا مجاني ومفتوح المصدر؟',
        a: 'نعم، جوملا مجاني 100% ومرخص تحت رخصة جنو العمومية (GPL)، ولا توجد أي رسوم ترخيص سنوية لاستخدامه.'
      },
      {
        q: 'أيهما أكثر أماناً: جوملا أم ووردبريس؟',
        a: 'يتمتع كلا النظامين بمستوى أمان ممتاز إذا تم تحديثهما دورياً. غير أن جوملا يمتلك ميزات أمان متقدمة مدمجة أصلاً مثل المصادقة الثنائية وتشفير البيانات وتفاصيل الصلاحيات، مما يقلل من حاجته للإضافات الخارجية التي تعد المصدر الأول للثغرات.'
      },
      {
        q: 'هل يمكن تحويل موقع ووردبريس الحالي إلى جوملا؟',
        a: 'نعم، تتوفر أدوات ترحيل احترافية لنقل المقالات والمستخدمين والفئات مع الحفاظ على بنية الروابط الدائمة (Permalinks) وسلامة محركات البحث.'
      }
    ]
  },
  {
    slug: 'joomla-website-development',
    title: 'تطوير مواقع جوملا الاحترافية: دليلك لبناء بوابات الويب المؤسسية',
    metaTitle: 'تطوير مواقع جوملا الاحترافية | بناء وتطوير بوابات الويب Joomla | يوسف الغمري',
    metaDesc: 'دليل عملي شامل لتطوير مواقع جوملا الحديثة: إعداد بيئة التطوير، تخصيص القوالب، برمجة المكونات والموديولات، وأفضل ممارسات الأداء.',
    category: 'joomla',
    categoryName: 'جوملا (Joomla)',
    date: '2025-02-14',
    readTime: '10 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/joomla-guide.svg',
    imageAlt: 'تطوير مواقع جوملا الاحترافية',
    relatedServiceUrl: '/ar/services/backend-development.html',
    relatedServiceName: 'تطوير المنصات والأنظمة الخلفية',
    intro: 'يتطلب تطوير مواقع جوملا الحديثة الجمع بين الفهم العميق لنمط MVC وأحدث تقنيات الويب الحديثة. يستعرض هذا الدليل مسار التطوير المتكامل من الفكرة وحتى النشر المؤسسي الآمن.',
    toc: [
      { id: 'prep', text: '1. إعداد بيئة التطوير المحلية' },
      { id: 'templating', text: '2. هندسة قوالب جوملا وتخصيصها' },
      { id: 'custom-dev', text: '3. برمجة المكونات والموديولات المخصصة' },
      { id: 'database', text: '4. التعامل مع قاعدة البيانات ومحرك الاستعلامات' },
      { id: 'deployment', text: '5. مرحلة الفحص والنشر على خوادم الإنتاج' },
      { id: 'faq', text: '6. أسئلة شائعة' }
    ],
    sections: [
      {
        id: 'prep',
        title: 'إعداد بيئة التطوير المحلية',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            للبدء في تطوير مشاريع جوملا 5 الحديثة، يجب توفير بيئة تشغيل تدعم PHP 8.1 أو أحدث مع تفعيل إضافات Intl وCurl وGD ومحرك قواعد بيانات MySQL 8.0 أو MariaDB 10.4+. يُنصح باستخدام Docker أو أدوات مثل DDEV لتوفير بيئات حاويات متطابقة مع خوادم الإنتاج.
          </p>
        `
      },
      {
        id: 'templating',
        title: 'هندسة قوالب جوملا وتخصيصها',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            في جوملا 4 و 5 تم استبدال القوالب القديمة بقالب Cassiopeia المبني على Bootstrap 5 و CSS Grid. يتضمن تطوير القالب المخصص الخطوات التالية:
          </p>
          <ul class="list-disc list-inside space-y-2 text-zinc-300 mb-4">
            <li>تعريف ملف التكوين <code>templateDetails.xml</code> وتحديد مواضع الموديولات (Positions).</li>
            <li>كتابة ملف العرض الرئيسي <code>index.php</code> مع استدعاء أصول Web Asset Manager الحديثة في جوملا.</li>
            <li>استخدام ميزة تجاوز القوالب (Template Overrides) لتعديل مخرجات أي موديول أو مكون دون لمس الكود المصدري للنظام.</li>
          </ul>
        `
      },
      {
        id: 'custom-dev',
        title: 'برمجة المكونات والموديولات المخصصة',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            توفر منصة جوملا معمارية الخدمات (Dependency Injection Container) الحديثة، مما يجعل برمجة الإضافات تتبع معايير PSR البرمجية العالمية. يتم هيكلة المكون المخصص عبر طبقات واضحة: Controllers لمعالجة الطلبات، Models للتعامل مع البيانات والمنطق، و Views لإعداد مخرجات العرض بصيغ HTML أو JSON.
          </p>
        `
      },
      {
        id: 'database',
        title: 'التعامل مع قاعدة البيانات ومحرك الاستعلامات',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يوفر كائن <code>DatabaseInterface</code> في جوملا طبقة تجريد آمنة تدعم الاستعلامات المجهزة (Prepared Statements) تلقائياً، مما يحصن التطبيق بالكامل ضد هجمات حقن قواعد البيانات SQL Injection:
          </p>
          <pre class="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-emerald-400 font-mono text-xs overflow-x-auto my-4">
$db = $this->getDatabase();
$query = $db->getQuery(true)
    ->select($db->quoteName(['id', 'title', 'created']))
    ->from($db->quoteName('#__content'))
    ->where($db->quoteName('state') . ' = 1')
    ->order($db->quoteName('created') . ' DESC');
$db->setQuery($query, 0, 10);
$results = $db->loadObjectList();
          </pre>
        `
      },
      {
        id: 'deployment',
        title: 'مرحلة الفحص والنشر على خوادم الإنتاج',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تشمل مرحلة النشر تفعيل الذاكرة المؤقتة (Joomla Cache)، ضغط ملفات Gzip، ضبط صلاحيات الملفات (644 للملفات و 755 للمجلدات)، وإعداد شهادة الأمان SSL وحظر استعراض المجلدات في ملف .htaccess.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل يمكن بناء متجر إلكتروني باستخدام جوملا؟',
        a: 'نعم، تتوفر إضافات تجارة إلكترونية متطورة جداً لجوملا مثل VirtueMart و HikaShop تدعم آلاف المنتجات والربط مع بوابات الدفع.'
      },
      {
        q: 'ما ميزة Template Overrides في جوملا؟',
        a: 'تتيح لك تعديل أي كود HTML ناتج عن النظام في مجلد قالبك الخاص، بحيث لا تفقد تعديلاتك عند تحديث جوملا أو إضافاته مستقبلاً.'
      }
    ]
  },
  {
    slug: 'joomla-speed-optimization',
    title: 'تحسين سرعة مواقع جوملا: دليلك للوصول إلى النتيجة 100 في PageSpeed',
    metaTitle: 'دليل تسريع مواقع جوملا وتحسين مؤشرات Core Web Vitals | يوسف الغمري',
    metaDesc: 'خطوات عملية مدروسة لتسريع موقع جوملا الخاص بك: ضبط التخزين المؤقت، تحسين قواعد البيانات، ضغط الصور والأكواد، واستخدام شبكات CDN.',
    category: 'joomla',
    categoryName: 'جوملا (Joomla)',
    date: '2025-02-14',
    readTime: '8 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/joomla-guide.svg',
    imageAlt: 'تحسين سرعة مواقع جوملا',
    relatedServiceUrl: '/ar/services/speed-performance-optimization.html',
    relatedServiceName: 'تحسين السرعة والأداء',
    intro: 'سرعة تحميل الموقع لم تعد رفاهية، بل ركيزة أساسية في تصدر نتائج البحث والحفاظ على تفاعل الزوار. يستعرض هذا المقال خطوات عملية متقدمة لتحويل موقع جوملا البطيء إلى موقع فائق السرعة.',
    toc: [
      { id: 'caching', text: '1. تفعيل وضبط التخزين المؤقت المتقدم (Joomla Cache)' },
      { id: 'gzip', text: '2. تفعيل ضغط Gzip وضغط المخرجات' },
      { id: 'images', text: '3. ضغط الصور وتحويلها لصيغ WebP و AVIF' },
      { id: 'assets', text: '4. تقليص وتأجيل تحميل أكواد CSS و JavaScript' },
      { id: 'db-opt', text: '5. صيانة وتنظيف قاعدة البيانات' }
    ],
    sections: [
      {
        id: 'caching',
        title: 'تفعيل وضبط التخزين المؤقت المتقدم (Joomla Cache)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يوفر جوملا مستويين رئيسيين للتخزين المؤقت في الإعدادات العامة: Conservative Caching (تخزين معتدل) و Progressive Caching (تخزين تدريجي للمواقع الكبيرة). كما يمكن استخدام Redis أو Memcached كمعالج تخزين مؤقت على مستوى السيرفر لتقليل زمن استجابة الخادم TTFB إلى أقل من 200 مللي ثانية.
          </p>
        `
      },
      {
        id: 'gzip',
        title: 'تفعيل ضغط Gzip وضغط المخرجات',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تفعيل ميزة Gzip Page Compression داخل جوملا يقلل حجم ملفات HTML المنقولة عبر الشبكة بنسبة تصل إلى 70%، مما ينعكس فوراً على سرعة معالجة المستعرض للصفحة.
          </p>
        `
      },
      {
        id: 'images',
        title: 'ضغط الصور وتحويلها لصيغ WebP و AVIF',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تمثل الصور عادة أكثر من 60% من حجم صفحات الويب. في جوملا 5 تتوفر معالجة صور حديثة، ويُنصح باعتماد أدوات مؤتمتة لتحويل الصور لصيغة WebP وتطبيق ميزة التحميل الكسول <code>loading="lazy"</code> على جميع الصور خارج الإطار المرئي الأولي.
          </p>
        `
      },
      {
        id: 'assets',
        title: 'تقليص وتأجيل تحميل أكواد CSS و JavaScript',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            استخدام أدوات مثل JCH Optimize يسمح بدمج ملفات CSS و JS في ملف واحد مضغوط وتأجيل ملفات السكريبت غير الحرجة (Defer / Async)، مما يلغي موارد حظر العرض Render-blocking resources.
          </p>
        `
      },
      {
        id: 'db-opt',
        title: 'صيانة وتنظيف قاعدة البيانات',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            مع مرور الوقت تتراكم سجلات الجلسات المنتهية وبيانات الـ Cache المؤقتة في قاعدة بيانات جوملا. يجب تنفيذ تحسين دوري للجداول (OPTIMIZE TABLE) ومراجعة الفهارس لضمان سرعة تنفيذ الاستعلامات.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'ما هو الفارق بين Conservative و Progressive Caching في جوملا؟',
        a: 'التخزين المعتدل Conservative يخزن أجزاء محددة من الصفحة لكل مستخدم على حدة، بينما التدريجي Progressive يخزن الصفحة كاملة للموديولات وهو مناسب للمواقع ذات الحركة الكثيفة مع محتوى شبه ثابت.'
      }
    ]
  },
  {
    slug: 'joomla-security-and-maintenance',
    title: 'أمان وصيانة مواقع جوملا: دليل الحماية الشامل من الاختراق',
    metaTitle: 'دليل حماية وأمان مواقع جوملا وصيانتها الدورية | يوسف الغمري',
    metaDesc: 'استراتيجيات تأمين مواقع جوملا ضد الاختراق: تفعيل المصادقة الثنائية 2FA، حماية لوحة التحكم، فحص الثغرات، وإدارة النسخ الاحتياطية الاحترافية.',
    category: 'joomla',
    categoryName: 'جوملا (Joomla)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/joomla-guide.svg',
    imageAlt: 'أمان وصيانة مواقع جوملا',
    relatedServiceUrl: '/ar/services/backend-development.html',
    relatedServiceName: 'تطوير وصيانة الأنظمة البرمجية',
    intro: 'يحتل جوملا مرتبة متقدمة في معايير الأمان المدمجة، ولكن ترك الإعدادات الافتراضية أو إهمال التحديثات قد يجعل الموقع عرضة للهجمات. يوضح هذا الدليل بروتوكول الأمان الموصى به لمواقع جوملا الحساسة.',
    toc: [
      { id: 'updates', text: '1. تحديث النظام والإضافات فورياً' },
      { id: 'admin-protect', text: '2. حماية وتغيير مسار لوحة الإدارة /administrator' },
      { id: 'mfa', text: '3. تفعيل المصادقة متعددة العوامل (MFA)' },
      { id: 'firewall', text: '4. تثبيت جدار حماية ويب (WAF)' },
      { id: 'backups', text: '5. خطة النسخ الاحتياطي الآلي مع Akeeba Backup' }
    ],
    sections: [
      {
        id: 'updates',
        title: 'تحديث النظام والإضافات فورياً',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تأتي معظم الاختراقات نتيجة استغلال ثغرات معروفة تم إصلاحها في التحديثات الرسمية. يوفر جوملا نظام إشعارات بريدية تلقائي عند توفر تحديثات أمنية جديدة، ويجب تطبيقها فوراً بعد اختبارها على بيئة تجريبية Staging.
          </p>
        `
      },
      {
        id: 'admin-protect',
        title: 'حماية وتغيير مسار لوحة الإدارة /administrator',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يجب عدم ترك مسار لوحة التحكم <code>/administrator</code> مكشوفاً لهجمات التخمين Brute-force. يمكن استخدام كلمة مرور سرية عبر ملف .htaccess (HTTP Basic Auth) أو استخدام إضافات أمنية تشترط كتابة رمز سري في رابط الدخول للوصول إلى الواجهة.
          </p>
        `
      },
      {
        id: 'mfa',
        title: 'تفعيل المصادقة متعددة العوامل (MFA)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يحتوي جوملا على دعم أصيل ومتطور للمصادقة متعددة العوامل (MFA) عبر تطبيقات الهواتف الذكية (Google Authenticator / Authy)، أو مفاتيح الأمان الفيزيائية WebAuthn (YubiKey)، مما يمنع الاختراق حتى لو تم تسريب كلمة المرور.
          </p>
        `
      },
      {
        id: 'firewall',
        title: 'تثبيت جدار حماية ويب (WAF)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            إضافة أدوات مثل RSFirewall توفر حماية حية ضد حقن SQL وهجمات XSS وفحص ملفات الموقع دورياً لاكتشاف أي كود خبيث أو تعديلات غير مصرح بها على الملفات البرمجية.
          </p>
        `
      },
      {
        id: 'backups',
        title: 'خطة النسخ الاحتياطي الآلي مع Akeeba Backup',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تعتبر إضافة Akeeba Backup المعيار الذهبي في بيئة جوملا. يجب جدولة نسخ احتياطي كامل (الملفات وقاعدة البيانات) أسبوعياً، مع نسخ يومي لقاعدة البيانات، وتخزين النسخ مشفرة على سحابة خارجية مثل AWS S3 أو Google Drive.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'ماذا أفعل إذا تعرض موقع جوملا للاختراق؟',
        a: 'قم فوراً بوضع الموقع في وضع الصيانة (Offline)، استرجع نسخة احتياطية نظيفة سابقة للاختراق، غيّر جميع كلمات المرور وقواعد البيانات ومفاتيح API، وقم بتحديث جميع الملفات إلى أحدث إصدار.'
      }
    ]
  },
  {
    slug: 'joomla-seo-best-practices',
    title: 'تهيئة محركات البحث لمواقع جوملا (SEO): استراتيجيات تصدر النتائج',
    metaTitle: 'دليل سيو جوملا (Joomla SEO): أفضل ممارسات تصدر النتائج | يوسف الغمري',
    metaDesc: 'دليل شامل لتهيئة سيو مواقع جوملا: الروابط الصديقة SEF، الميتا تاجز، بيانات Schema.org المنظمة، خرائط الموقع XML، وتجنب المحتوى المكرر.',
    category: 'joomla',
    categoryName: 'جوملا (Joomla)',
    date: '2025-02-14',
    readTime: '8 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/joomla-guide.svg',
    imageAlt: 'تهيئة محركات البحث لمواقع جوملا SEO',
    relatedServiceUrl: '/ar/services/seo-search-engine-optimization.html',
    relatedServiceName: 'تحسين محركات البحث SEO',
    intro: 'يمتلك جوملا بنية قوية تدعم محركات البحث بشكل أصيل. نتعرف في هذا الدليل على كيفية ضبط إعدادات السيو المتقدمة وتحسين ظهور صفحات الموقع في نتائج البحث الأولى.',
    toc: [
      { id: 'sef-urls', text: '1. ضبط الروابط الصديقة لمحركات البحث (Search Engine Friendly URLs)' },
      { id: 'metadata', text: '2. إدارة الأوصاف والعناوين الوصفية (Metadata)' },
      { id: 'schema', text: '3. إضافة البيانات المنظمة Schema.org المدمجة' },
      { id: 'canonical', text: '4. حل مشكلة الروابط المتعددة والوسم الأساسي Canonical' },
      { id: 'sitemap', text: '5. إنشاء خرائط الموقع XML وربطها بـ Google Search Console' }
    ],
    sections: [
      {
        id: 'sef-urls',
        title: 'ضبط الروابط الصديقة لمحركات البحث (Search Engine Friendly URLs)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تفعيل ميزة Search Engine Friendly URLs وميزة Use URL Rewriting في إعدادات جوملا يزيل مسار index.php من الروابط ويجعلها نظيفة ومقروءة لمحركات البحث والمستخدمين، مع تفعيل إعادة التوجيه التلقائي عبر ملف .htaccess.
          </p>
        `
      },
      {
        id: 'metadata',
        title: 'إدارة الأوصاف والعناوين الوصفية (Metadata)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يجب كتابة عنوان Meta Title فريد لكل مقال وقسم لا يتجاوز 60 حرفاً، مع وصف Meta Description دقيق وجذاب يقل عن 155 حرفاً، واستخدام علامات Open Graph لضمان ظهور بطاقات المشاركة على منصات التواصل بشكل أنيق.
          </p>
        `
      },
      {
        id: 'schema',
        title: 'إضافة البيانات المنظمة Schema.org المدمجة',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            في جوملا 5 أصبحت ميزة Schema.org مدمجة في النواة بدون إضافات، حيث يمكنك بضغطة زر تحديد نوع المحتوى (Article, Organization, Event, FAQ) ليتم حقن أكواد JSON-LD المنظمة تلقائياً ومساعدة جوجل على فهم سياق المحتوى.
          </p>
        `
      },
      {
        id: 'canonical',
        title: 'حل مشكلة الروابط المتعددة والوسم الأساسي Canonical',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            في بعض الحالات قد يظهر نفس المقال تحت مسارات قوائم مختلفة. يحل جوملا هذه المعضلة عبر وسم <code>&lt;link rel="canonical"&gt;</code> الذي يشير دائماً إلى الرابط الأصلي المعتمد لتفادي عقوبات المحتوى المكرر في جوجل.
          </p>
        `
      },
      {
        id: 'sitemap',
        title: 'إنشاء خرائط الموقع XML وربطها بـ Google Search Console',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            استخدام إضافات مثل OSMap أو JSitemap يتيح توليد خريطة موقع ديناميكية محدثة لحظياً تُرسل لمحركات البحث لفهرسة الصفحات الجديدة فور نشرها.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل يدعم جوملا 5 ميزات السيو الحديثة؟',
        a: 'نعم، جوملا 5 يُعد من أكثر أنظمة إدارة المحتوى تطوراً في دعم السيو المدمج وخاصة البيانات المنظمة Schema.org وسرعة استجابة الكود المصدري.'
      }
    ]
  },
  {
    slug: 'joomla-multilingual-website-guide',
    title: 'إنشاء مواقع جوملا متعددة اللغات: الدليل العملي الكامل للمواقع الدولية',
    metaTitle: 'دليل إنشاء مواقع جوملا متعددة اللغات بالتفصيل | يوسف الغمري',
    metaDesc: 'تعلم كيفية إعداد موقع جوملا متعدد اللغات (عربي/إنجليزي) باستخدام الميزات المدمجة في النواة دون أي إضافات خارجية مدفوعة.',
    category: 'joomla',
    categoryName: 'جوملا (Joomla)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/joomla-guide.svg',
    imageAlt: 'إنشاء مواقع جوملا متعددة اللغات',
    relatedServiceUrl: '/ar/services/business-development-consulting.html',
    relatedServiceName: 'استشارات المواقع والتحول الرقمي',
    intro: 'على عكس منصات أخرى تتطلب إضافات مكلفة، يمتلك جوملا أقوى نظام مدمج لإدارة المواقع متعددة اللغات في العالم. يشرح هذا الدليل خطوات تفعيل وإدارة لغات متعددة بسلاسة تامة.',
    toc: [
      { id: 'languages-install', text: '1. تثبيت حزم اللغات وتفعيل لغات المحتوى' },
      { id: 'plugin-filter', text: '2. تفعيل بلجن Language Filter وضبط التوجيه' },
      { id: 'menus-structure', text: '3. هيكلة القوائم والصفحات الرئيسية لكل لغة' },
      { id: 'associations', text: '4. ربط المقالات المترجمة بنظام Associations' },
      { id: 'switcher', text: '5. إضافة موديول تبديل اللغة (Language Switcher)' }
    ],
    sections: [
      {
        id: 'languages-install',
        title: 'تثبيت حزم اللغات وتفعيل لغات المحتوى',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            الخطوة الأولى هي تنزيل حزم اللغات المطلوبة (مثل حزمة اللغة العربية الفصحى) من لوحة التحكم، ثم الانتقال إلى قسم Content Languages لتعريف البادئة اللغوية (مثل <code>ar</code> أو <code>en</code>) واتجاه الكتابة RTL أو LTR.
          </p>
        `
      },
      {
        id: 'plugin-filter',
        title: 'تفعيل بلجن Language Filter وضبط التوجيه',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يقوم بلجن فلتر اللغة في جوملا باكتشاف لغة متصفح الزائر تلقائياً وتوجيهه إليها، كما يتيح حذف بادئة اللغة الافتراضية من الروابط لتبدو أكثر بساطة واحترافية.
          </p>
        `
      },
      {
        id: 'menus-structure',
        title: 'هيكلة القوائم والصفحات الرئيسية لكل لغة',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يتطلب جوملا إنشاء قائمة رئيسية موحدة (All Languages) تحتوي على صفحة بداية افتراضية، ثم إنشاء قائمة منفصلة تماماً لكل لغة مع تعيين الصفحة الرئيسية الخاصة بها.
          </p>
        `
      },
      {
        id: 'associations',
        title: 'ربط المقالات المترجمة بنظام Associations',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تتيح ميزة Multilingual Associations للمحررين مقارنة المقال الأصلي وترجمته في شاشة مقسمة جنباً إلى جنب، مع حفظ الارتباط التلقائي بينهما لنقل الزائر إلى نفس الصفحة المقابلة عند تبديل اللغة.
          </p>
        `
      },
      {
        id: 'switcher',
        title: 'إضافة موديول تبديل اللغة (Language Switcher)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            أخيراً يتم نشر موديول مبدل اللغة في الهيدر، والذي يمكن عرضه كقائمة منسدلة أنيقة أو أعلام أو أسماء لغات مختصرة.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل يؤثر تعدد اللغات في جوملا على سرعة الموقع؟',
        a: 'لا، لأن النظام مدمج داخل نواة جوملا ومصمم بكفاءة عالية دون استعلامات قواعد بيانات مفرطة أو إضافات ثقيلة.'
      }
    ]
  },
  {
    slug: 'joomla-vs-wordpress',
    title: 'جوملا أم ووردبريس؟ مقارنة شاملة لاختيار المنصة الأنسب لمشروعك',
    metaTitle: 'مقارنة جوملا مقابل ووردبريس: أيهما أفضل لموقعك في 2025؟ | يوسف الغمري',
    metaDesc: 'مقارنة حيادية مفصلة بين جوملا وووردبريس من حيث سهولة الاستخدام، إدارة الصلاحيات، الأمان، السيو، وتكاليف التطوير المستقبلية.',
    category: 'joomla',
    categoryName: 'جوملا (Joomla)',
    date: '2025-02-14',
    readTime: '10 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/joomla-guide.svg',
    imageAlt: 'مقارنة جوملا وووردبريس',
    relatedServiceUrl: '/ar/services/business-process-analysis.html',
    relatedServiceName: 'تحليل وتخطيط الأنظمة الرقمية',
    intro: 'يقف أصحاب الأعمال في حيرة متكررة عند الاختيار بين جوملا وووردبريس. كلاهما نظامان عظيمان، لكن لكل منهما فلسفة معمارية تناسب نوعية مختلفة من المشاريع.',
    toc: [
      { id: 'market-share', text: '1. الشعبية والحصة السوقية' },
      { id: 'ease-of-use', text: '2. سهولة الاستخدام وإدارة المحتوى' },
      { id: 'permissions', text: '3. إدارة الصلاحيات والمستخدمين' },
      { id: 'security-perf', text: '4. الأمان والأداء المستقر' },
      { id: 'final-verdict', text: '5. جدول الحكم النهائي: لمن تختار كل نظام؟' }
    ],
    sections: [
      {
        id: 'market-share',
        title: 'الشعبية والحصة السوقية',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يستحوذ ووردبريس على الحصة الأكبر عالمياً بسبب سهولة انطلاقه وانتشار القوالب الجاهزة. في المقابل، يمتلك جوملا قاعدة مستخدمين مخلصة جداً من المؤسسات والجامعات التي تفضل منصة أكثر تنظيماً واحترافية في إدارتها للنواة.
          </p>
        `
      },
      {
        id: 'ease-of-use',
        title: 'سهولة الاستخدام وإدارة المحتوى',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            ووردبريس أسهل بلا شك للمبتدئين وأصحاب المدونات بفضل محرر المكونات Gutenberg. بينما يتطلب جوملا وقتاً أطول لفهم مفاهيم الأقسام، الموديولات، والمكونات، ولكنه يوفر تحكماً هيكلياً أدق بكثير بمجرد استيعاب النظام.
          </p>
        `
      },
      {
        id: 'permissions',
        title: 'إدارة الصلاحيات والمستخدمين',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يتفوق جوملا باكتساح في هذا الجانب بفضل نظام Access Control List (ACL) المدمج، حيث يمكنك تحديد صلاحيات مستخدمين معقدة لفرق عمل تضم مئات المحررين، وهو ما يتطلب في ووردبريس إضافات خارجية معقدة ومدفوعة.
          </p>
        `
      },
      {
        id: 'security-perf',
        title: 'الأمان والأداء المستقر',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            نواة كلا النظامين آمنة جداً. لكن ووردبريس يتعرض لاستهداف أكبر بسبب شعبيته، واعتماده الكثيف على الإضافات يزيد من نقاط الضعف. جوملا يعتمد على ميزات مدمجة أكثر مما يقلل الاعتماد على إضافات المطورين الخارجيين.
          </p>
        `
      },
      {
        id: 'final-verdict',
        title: 'جدول الحكم النهائي: لمن تختار كل نظام؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            <strong>اختر ووردبريس إذا:</strong> كان موقعك مدونة شخصية، مجلة بسيطة، أو موقع تجاري سريع بميزانية صغيرة وتحتاج لإدارته دون أي خلفية تقنية.<br>
            <strong>اختر جوملا إذا:</strong> كان موقعك بوابة مؤسسية، منصة متعددة اللغات، موقعاً أكاديمياً، أو لديك فريق تحريري كبير يحتاج مستويات وصول وصلاحيات دقيقة.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل مطورو جوملا متاحون بنفس وفرة مطوري ووردبريس؟',
        a: 'مطورو ووردبريس أكثر عدداً، لكن مطوري جوملا عادة ما يمتلكون فهماً أعمق لمعمارية البرمجة الكائنية PHP OOP ونمط MVC.'
      }
    ]
  },
  {
    slug: 'joomla-extensions-development',
    title: 'تطوير إضافات جوملا (Extensions): دليل المطورين الشامل لمكونات Joomla 5',
    metaTitle: 'دليل تطوير إضافات وموديولات جوملا 5 للمطورين | يوسف الغمري',
    metaDesc: 'تعلم كيفية برمجة وتطوير مكونات وموديولات جوملا 5 الحديثة: هيكل المجلدات، حقن التبعيات DI، وواجهات برمجة التطبيقات REST API.',
    category: 'joomla',
    categoryName: 'جوملا (Joomla)',
    date: '2025-02-14',
    readTime: '10 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/joomla-guide.svg',
    imageAlt: 'تطوير إضافات جوملا للمطورين',
    relatedServiceUrl: '/ar/services/backend-development.html',
    relatedServiceName: 'برمجة الإضافات والمكونات المخصصة',
    intro: 'شهد نظام جوملا 5 قفزة معمارية رائدة عبر دعم معايير PHP الحديثة بالكامل ونظام أسماء الفئات Namespaces وحقن التبعيات. يقدم هذا الدليل المرجع العملي لبناء إضافات برمجية نظيفة وقابلة للتطوير.',
    toc: [
      { id: 'structure', text: '1. هيكل الإضافات في جوملا 5 ونظام Namespaces' },
      { id: 'services-provider', text: '2. مزود الخدمات (Service Provider) ومصنع المكونات' },
      { id: 'database-orm', text: '3. التعامل مع النماذج وقواعد البيانات' },
      { id: 'api-controller', text: '4. بناء نقاط اتصال Web Services API' },
      { id: 'packaging', text: '5. حزم الإضافة ونشرها في مجتمع جوملا' }
    ],
    sections: [
      {
        id: 'structure',
        title: 'هيكل الإضافات في جوملا 5 ونظام Namespaces',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تتبع إضافات جوملا 5 مسار التحميل التلقائي PSR-4. يتم تخزين ملفات الإضافة تحت المجلد <code>administrator/components/com_mycomponent/src</code> مع استخدام فضاء أسماء موحد مثل <code>MyCompany\\Component\\MyComponent\\Administrator</code>.
          </p>
        `
      },
      {
        id: 'services-provider',
        title: 'مزود الخدمات (Service Provider) ومصنع المكونات',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            القلب النابض لأي مكون حديث هو ملف <code>services/provider.php</code>، حيث يتم تسجيل المكون داخل حاوية حقن التبعيات (Dependency Injection Container) وربطه مع موجه الروابط ومصنع MVC.
          </p>
        `
      },
      {
        id: 'database-orm',
        title: 'التعامل مع النماذج وقواعد البيانات',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            توفر فئات <code>AdminModel</code> و <code>ListModel</code> كل الوظائف القياسية لعمليات CRUD وفلترة السجلات وتجزئة الصفحات تلقائياً دون كتابة استعلامات تكرارية يدوية.
          </p>
        `
      },
      {
        id: 'api-controller',
        title: 'بناء نقاط اتصال Web Services API',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يحتوي جوملا على دعم أصيل لإنشاء واجهات برمجية RESTful API تتيح لتطبيقات الهاتف الذكي ومواقع الـ Headless التفاعل مع بيانات المكون بسلاسة عبر مصادقة الرموز المميزة (API Token).
          </p>
        `
      },
      {
        id: 'packaging',
        title: 'حزم الإضافة ونشرها في مجتمع جوملا',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يتم تجهيز ملف التثبيت XML متضمناً أوامر إنشاء الجداول وعمليات الترقية (SQL Schema Migrations)، ثم ضغط الإضافة في ملف ZIP جاهز للتثبيت والتحديث التلقائي.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل إضافات جوملا 4 تعمل تلقائياً على جوملا 5؟',
        a: 'نعم، يتضمن جوملا 5 بلجن التوافقية العكسية (Backward Compatibility Plugin) لتشغيل إضافات جوملا 4 السليمة برمجياً دون مشاكل.'
      }
    ]
  },
  {
    slug: 'joomla-migration-upgrade-guide',
    title: 'ترقية وترحيل مواقع جوملا: دليلك لنقل موقعك إلى Joomla 5 بأمان',
    metaTitle: 'دليل ترقية جوملا إلى الإصدار 5 وترحيل المواقع | يوسف الغمري',
    metaDesc: 'خطوات ترحيل وترقية مواقع جوملا القديمة (Joomla 3 و 4) إلى Joomla 5 الحديث مع الحفاظ على البيانات والمستخدمين وروابط السيو.',
    category: 'joomla',
    categoryName: 'جوملا (Joomla)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/joomla-guide.svg',
    imageAlt: 'ترقية وترحيل مواقع جوملا',
    relatedServiceUrl: '/ar/services/backend-development.html',
    relatedServiceName: 'صيانة وترقية الأنظمة البرمجية',
    intro: 'يعد الانتقال إلى جوملا 5 خطوة جوهرية للحصول على أقصى درجات الأمان والسرعة. يقدم هذا الدليل المنهجية الاحترافية للترقية الآمنة دون توقف الخدمة أو فقدان ترتيب محركات البحث.',
    toc: [
      { id: 'readiness', text: '1. فحص متطلبات النظام وجاهزية الإضافات' },
      { id: 'staging', text: '2. إنشاء بيئة تجريبية معزولة (Staging)' },
      { id: 'upgrade-path', text: '3. مسار الترقية الصحيح: من 3 إلى 4 ثم 5' },
      { id: 'db-check', text: '4. فحص وإصلاح هيكل قاعدة البيانات' },
      { id: 'post-launch', text: '5. الفحوصات اللاحقة والتحويل للإنتاج' }
    ],
    sections: [
      {
        id: 'readiness',
        title: 'فحص متطلبات النظام وجاهزية الإضافات',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            قبل أي خطوة يجب التأكد من ترقية إصدار PHP في الاستضافة إلى 8.1 أو 8.2 ومطابقة إصدار قاعدة البيانات. كما يجب استخدام فاحص الترقية المدمج للتحقق من توافق جميع القوالب والإضافات المنصبة.
          </p>
        `
      },
      {
        id: 'staging',
        title: 'إنشاء بيئة تجريبية معزولة (Staging)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            لا تقم أبداً بالترقية المباشرة على الموقع الحي. قم باستنساخ الموقع بالكامل إلى نطاق فرعي تجريبي، واختبر عملية الترقية واكتشف أي أخطاء محتملة قبل التطبيق الفعلي.
          </p>
        `
      },
      {
        id: 'upgrade-path',
        title: 'مسار الترقية الصحيح: من 3 إلى 4 ثم 5',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            إذا كان موقعك يعمل على جوملا 3.10، فلا يمكنك القفز مباشرة إلى جوملا 5. المسار المعتمد هو الترقية إلى آخر إصدار من جوملا 4.4، ثم تنفيذ الترقية بنقرة واحدة إلى جوملا 5.
          </p>
        `
      },
      {
        id: 'db-check',
        title: 'فحص وإصلاح هيكل قاعدة البيانات',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            بعد الترقية، توجه إلى قسم System -> Maintenance -> Database واضغط على زر Repair للتأكد من مطابقة جداول قاعدة البيانات ومفاهيم الفهارس الجديدة لمتطلبات جوملا 5.
          </p>
        `
      },
      {
        id: 'post-launch',
        title: 'الفحوصات اللاحقة والتحويل للإنتاج',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            اختبر جميع النماذج، روابط الدخول، سلة المشتريات (إن وجدت)، وتحقق من عدم وجود روابط مكسورة 404 لضمان سلامة الحركة القادمة من محركات البحث.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل سأفقد محتوى موقعي أو المقالات أثناء الترقية؟',
        a: 'لا، عملية الترقية النظامية تحافظ على كافة المقالات، المستخدمين، والصور طالما تم اتباع خطوات الترقية المعتمدة مع أخذ نسخ احتياطية كاملة.'
      }
    ]
  },
  {
    slug: 'joomla-custom-fields-workflow-guide',
    title: 'الحقول المخصصة وتدفقات العمل في جوملا: أسرار بناء بوابات محتوى متطورة',
    metaTitle: 'دليل الحقول المخصصة Custom Fields وتدفقات العمل Workflows في جوملا | يوسف الغمري',
    metaDesc: 'اكتشف قوة الحقول المخصصة وتدفقات النشر الآلية في جوملا لبناء بوابات إخبارية ومنصات عقارية ومؤسسية دون كتابة سطر كود واحد.',
    category: 'joomla',
    categoryName: 'جوملا (Joomla)',
    date: '2025-02-14',
    readTime: '8 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/joomla-guide.svg',
    imageAlt: 'الحقول المخصصة وتدفقات العمل في جوملا',
    relatedServiceUrl: '/ar/services/business-process-analysis.html',
    relatedServiceName: 'أتمتة الأعمال وتدفقات العمل',
    intro: 'تحولت منصة جوملا بفضل ميزتي Custom Fields و Workflows المدمجتين إلى منصة قادرة على منافسة أنظمة إدارة المحتوى الرائدة، حيث يمكنك تحويل المقالات العادية إلى أدلة عقارية، معارض سيارات، أو بوابات توظيف متقدمة.',
    toc: [
      { id: 'custom-fields-intro', text: '1. ما هي الحقول المخصصة (Custom Fields) في جوملا؟' },
      { id: 'field-types', text: '2. أنواع الحقول المتاحة وكيفية تجميعها' },
      { id: 'rendering', text: '3. تخصيص ظهور الحقول في القالب' },
      { id: 'workflows', text: '4. تصميم تدفقات العمل المؤسسية (Workflows)' },
      { id: 'real-example', text: '5. مثال تطبيقي: بناء بوابة سيارات أو عقارات' }
    ],
    sections: [
      {
        id: 'custom-fields-intro',
        title: 'ما هي الحقول المخصصة (Custom Fields) في جوملا؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تتيح لك الحقول المخصصة إضافة بيانات منظمة لأي مقال دون حشرها في المحرر النصي، مثل السعر، الموقع الجغرافي، رقم الهاتف، أو ملفات التحميل، وتصنيفها في مجموعات محددة تظهر تلقائياً لكاتب المقال.
          </p>
        `
      },
      {
        id: 'field-types',
        title: 'أنواع الحقول المتاحة وكيفية تجميعها',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يدعم جوملا أكثر من 16 نوعاً أصلياً من الحقول، بما في ذلك: النصوص، القوائم المنسدلة، مربعات الاختيار، الألوان، الوسائط والصور، التقويم، المحرر النصي، وروابط URL المخصصة، مع إمكانية ربطها بأقسام معينة فقط.
          </p>
        `
      },
      {
        id: 'rendering',
        title: 'تخصيص ظهور الحقول في القالب',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يمكن عرض الحقول المخصصة تلقائياً قبل أو بعد المحتوى، أو استدعاؤها برمجياً داخل كود القالب المخصص عبر معرّف الحقل (Field ID) لتنسيقها بتصميم بطاقات جذابة.
          </p>
        `
      },
      {
        id: 'workflows',
        title: 'تصميم تدفقات العمل المؤسسية (Workflows)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يتيح محرك Workflows تقسيم مسار المقال إلى حالات متعددة (مثل: مسودة كاتب، بانتظار التدقيق اللغوي، موافقة رئيس التحرير، جاهز للنشر)، مع تقييد الانتقال بين المراحل لأدوار وظيفية محددة.
          </p>
        `
      },
      {
        id: 'real-example',
        title: 'مثال تطبيقي: بناء بوابة سيارات أو عقارات',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            من خلال الجمع بين فئة مخصصة "العقارات"، ومجموعة حقول (سعر العقار، المساحة، عدد الغرف، الخريطة)، وميزة الفلترة الذكية Smart Search في جوملا، يمكنك إنشاء منصة عقارية كاملة في غضون ساعات دون شراء قوالب مخصصة باهظة.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل تظهر بيانات الحقول المخصصة في نتائج بحث جوملا الداخلي؟',
        a: 'نعم، يتم فهرسة جميع قيم الحقول المخصصة تلقائياً داخل نظام البحث الذكي Smart Search مع دعم الفلترة المتقدمة.'
      }
    ]
  }
];

export const drupalArticles: ArticleItem[] = [
  {
    slug: 'what-is-drupal',
    title: 'ما هو دوروبال (Drupal)؟ دليلك الشامل لنظام إدارة المحتوى للشركات الكبرى',
    metaTitle: 'ما هو نظام دوروبال Drupal؟ دليل شامل لأقوى CMS للمؤسسات | يوسف الغمري',
    metaDesc: 'اكتشف نظام دوروبال (Drupal): البنية المعمارية، لماذا تعتمد عليه الحكومات والجامعات العالمية، مقارنته بالأنظمة الأخرى، ومميزات Drupal 10.',
    category: 'drupal',
    categoryName: 'دوروبال (Drupal)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/drupal-guide.svg',
    imageAlt: 'دليل نظام دوروبال Drupal للمؤسسات',
    relatedServiceUrl: '/ar/services/backend-development.html',
    relatedServiceName: 'تطوير المنصات والأنظمة الخلفية',
    intro: 'يُعد دوروبال (Drupal) المعيار الأبرز عالمياً بين أنظمة إدارة المحتوى الموجهة للمؤسسات الكبرى (Enterprise CMS). تشتهر المنصة بأمانها الصارم، وهندستها البرمجية المعيارية المبنية على إطار Symfony، مما جعلها الخيار الأول للبيت الأبيض، والمفوضية الأوروبية، وأكبر الجامعات والشركات العالمية.',
    toc: [
      { id: 'definition', text: '1. ما هو دوروبال وفلسفته المعمارية' },
      { id: 'why-enterprise', text: '2. لماذا تعتمد المؤسسات والحكومات على دوروبال؟' },
      { id: 'architecture', text: '3. مكونات البنية التحتية (Entities & Views)' },
      { id: 'drupal-10', text: '4. ما الجديد في Drupal 10 و 11؟' },
      { id: 'drupal-vs-others', text: '5. مقارنة دوروبال مع ووردبريس وجوملا' }
    ],
    sections: [
      {
        id: 'definition',
        title: 'ما هو دوروبال وفلسفته المعمارية',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            دوروبال هو إطار عمل لإدارة المحتوى (CMF) مفتوح المصدر أُطلق عام 2001 بواسطة المطور Dries Buytaert. على خلاف أنظمة إدارة المحتوى البسيطة، تم تصميم دوروبال منذ اليوم الأول ليكون منصة معيارية فائقة المرونة قادرة على التعامل مع هياكل بيانات معقدة وحركة مرور هائلة بملايين الزيارات يومياً.
          </p>
        `
      },
      {
        id: 'why-enterprise',
        title: 'لماذا تعتمد المؤسسات والحكومات على دوروبال؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تعتمد أكثر من 70% من أرقى الجامعات العالمية والعديد من الهيئات الحكومية على دوروبال لأسباب حاسمة:
          </p>
          <ul class="list-disc list-inside space-y-2 text-zinc-300 mb-4">
            <li><strong>فريق أمان نخبوي (Drupal Security Team):</strong> يمتلك دوروبال واحداً من أقوى وأدق بروتوكولات الأمان في صناعة البرمجيات عالمياً.</li>
            <li><strong>هيكلة بيانات لامحدودة:</strong> إمكانية إنشاء كائنات وأنواع محتوى مترابطة عبر مئات الحقول والعلاقات.</li>
            <li><strong>التكامل البرمجي مع الأنظمة المؤسسية:</strong> سهولة الربط مع أنظمة SAP, Salesforce, ERP, ومصادقة Single Sign-On (SSO / SAML / OAuth).</li>
          </ul>
        `
      },
      {
        id: 'architecture',
        title: 'مكونات البنية التحتية (Entities & Views)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تقوم فلسفة دوروبال على مفهوم الكيانات (Entities)؛ فكل شيء في دوروبال—من المقالات والمصطلحات والمستخدمين—هو كائن برمجي. كما توفر أداة العروض (Views) المدمجة محرك استعلامات رسومي يتيح بناء استعلامات وتصنيفات معقدة بدون كتابة استعلام SQL واحد.
          </p>
        `
      },
      {
        id: 'drupal-10',
        title: 'ما الجديد في Drupal 10 و 11؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يعتمد Drupal 10 على مكونات Symfony 6.2 ومحرك القوالب الحديث Twig 3، مع محرر المحتوى المتطور CKEditor 5، وقالب الإدارة العصري Claro وقالب الواجهة الافتراضي الأنيق Olivero، مع دعم كامل للويب المقطوع الرأس (Headless Drupal).
          </p>
        `
      },
      {
        id: 'drupal-vs-others',
        title: 'مقارنة دوروبال مع ووردبريس وجوملا',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            بينما يعد ووردبريس رائعاً للمواقع البسيطة والتجارية، وجوملا خياراً وسطاً للبوابات متوسطة التعقيد، ينفرد دوروبال بكونه الحل الأمثل للمشاريع ذات متطلبات الأمان الصارمة والبيانات المترابطة المعقدة والشبكات متعددة المواقع (Multisite).
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل دوروبال مناسب للشركات الصغيرة والمتوسطة؟',
        a: 'قد يكون دوروبال معقداً ومكلفاً بالنسبة للشركات الصغيرة ذات المتطلبات البسيطة، لكنه خيار استراتيجي لا غنى عنه للمؤسسات التي تتطلب بنية تحتية مستدامة وقابلة للتوسع.'
      }
    ]
  },
  {
    slug: 'drupal-website-development',
    title: 'تطوير مواقع دوروبال الاحترافية: هندسة الحلول للمشاريع الحكومية والكبرى',
    metaTitle: 'تطوير مواقع دوروبال Drupal الاحترافية | يوسف الغمري',
    metaDesc: 'دليل عملي لبناء وتطوير مواقع دوروبال الحديثة: إعداد بيئة DDEV، قوالب Twig، برمجة موديولات مخصصة، وإدارة التكوينات Configuration Management.',
    category: 'drupal',
    categoryName: 'دوروبال (Drupal)',
    date: '2025-02-14',
    readTime: '10 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/drupal-guide.svg',
    imageAlt: 'تطوير مواقع دوروبال الاحترافية',
    relatedServiceUrl: '/ar/services/backend-development.html',
    relatedServiceName: 'تطوير البرمجيات والأنظمة المعقدة',
    intro: 'يتطلب تطوير مواقع دوروبال الحديثة عقلية هندسية رصينة تفهم معمارية Symfony وحقن التبعيات وإدارة الكود عبر مستودعات Git. يوضح هذا الدليل مسار العمل المعياري المعتمد في كبرى شركات التطوير العالمية.',
    toc: [
      { id: 'composer-setup', text: '1. التثبيت المعياري عبر Composer و DDEV' },
      { id: 'cmi', text: '2. نظام إدارة التكوينات (Configuration Management)' },
      { id: 'theming-twig', text: '3. تطوير القوالب الحديثة باستخدام محرك Twig' },
      { id: 'custom-modules', text: '4. برمجة الموديولات المخصصة (Custom Modules)' },
      { id: 'drush', text: '5. تسريع العمليات عبر سطر الأوامر Drush' }
    ],
    sections: [
      {
        id: 'composer-setup',
        title: 'التثبيت المعياري عبر Composer و DDEV',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            لا يتم تثبيت دوروبال الحديث يدوياً، بل يُدار مشروع التطوير بالكامل عبر Composer. يضمن استخدام بيئة DDEV المبنية على دوكر عزلاً كاملاً وضمان تطابق إصدارات PHP وقواعد البيانات بين أعضاء الفريق.
          </p>
        `
      },
      {
        id: 'cmi',
        title: 'نظام إدارة التكوينات (Configuration Management)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            أحد أعظم إنجازات دوروبال هو نظام CMI الذي يقوم بتصدير جميع إعدادات الموقع، الحقول، القوائم، وأنواع المحتوى إلى ملفات YAML نصية، مما يسمح بتتبعها عبر Git ونقلها بين بيئات التطوير والاختبار والإنتاج بدون أخطاء.
          </p>
        `
      },
      {
        id: 'theming-twig',
        title: 'تطوير القوالب الحديثة باستخدام محرك Twig',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يعتمد نظام القوالب في دوروبال على محرك Twig الآمن والسريع، مع دعم كامل لفصل كود العرض HTML عن منطق الـ PHP، واستخدام تقنيات التجاوز Theme Suggestions للتحكم في بنية ووسوم أي عنصر بدقة مطلقة.
          </p>
        `
      },
      {
        id: 'custom-modules',
        title: 'برمجة الموديولات المخصصة (Custom Modules)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يتم بناء موديولات دوروبال وفق معايير البرمجة الكائنية الصارمة، مع استخدام ملفات routing.yml لتعريف المسارات، وفئات Controller لمعالجة المنطق، ونظام Plugins المرن لتوسيع قدرات النظام.
          </p>
        `
      },
      {
        id: 'drush',
        title: 'تسريع العمليات عبر سطر الأوامر Drush',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تعتبر أداة Drush (Drupal Shell) الرفيق الأساسي لأي مطور دوروبال، حيث تمكنك من مسح الكاش <code>drush cr</code>، استيراد التكوينات <code>drush cim</code>، وتنفيذ ترقيات قواعد البيانات في ثوانٍ معدودة.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'ما أهمية نظام Configuration Management في دوروبال؟',
        a: 'يمنع التعديلات اليدوية على خوادم الإنتاج، ويتيح نقل التغييرات من بيئة التطوير إلى الموقع الحي بضغطة زر وبأمان مطلق عبر سطور الأوامر.'
      }
    ]
  },
  {
    slug: 'drupal-for-enterprise-websites',
    title: 'دوروبال للمؤسسات والشركات الكبرى (Enterprise Drupal): لماذا تختاره الحكومات؟',
    metaTitle: 'دوروبال للمؤسسات والجهات الحكومية (Enterprise Drupal) | يوسف الغمري',
    metaDesc: 'لماذا تختار الوزارات والمؤسسات العالمية دوروبال؟ الأمان، الحوكمة الرقمية، تعدد المواقع Multisite، وقابلية التوسع المليونية.',
    category: 'drupal',
    categoryName: 'دوروبال (Drupal)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/drupal-guide.svg',
    imageAlt: 'دوروبال للمؤسسات والشركات الكبرى',
    relatedServiceUrl: '/ar/services/business-development-consulting.html',
    relatedServiceName: 'استشارات التحول الرقمي المؤسسي',
    intro: 'عندما تفكر المنظمات العالمية في أصولها الرقمية، فإنها تبحث عن الاستقرار لعشرات السنين، والأمان غير القابل للمساومة، والامتثال لأعلى معايير الحوكمة. هذا بالضبط ما يوفره دوروبال.',
    toc: [
      { id: 'security-governance', text: '1. حوكمة الأمان وشهادات الامتثال العالمية' },
      { id: 'multisite-network', text: '2. ميزة إدارة شبكات المواقع المتعددة (Multisite)' },
      { id: 'workflow-audit', text: '3. تدفقات النشر والتدقيق وسجلات التغيير الشاملة' },
      { id: 'enterprise-integrations', text: '4. الربط مع البنى التحتية للمؤسسات (CRM/ERP/SSO)' },
      { id: 'scalability', text: '5. التوسع الهائل وتحمل ملايين الزيارات المتزامنة' }
    ],
    sections: [
      {
        id: 'security-governance',
        title: 'حوكمة الأمان وشهادات الامتثال العالمية',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يخضع كود دوروبال المصدري لتدقيق مستمر من فريق أمان عالمي متخصص، ويتوافق مع معايير الأمان الفيدرالية مثل FedRAMP و HIPAA و GDPR، مما يجعله المنصة الوحيدة المعتمدة في كثير من الوزارات والهيئات الدفاعية والدبلوماسية.
          </p>
        `
      },
      {
        id: 'multisite-network',
        title: 'ميزة إدارة شبكات المواقع المتعددة (Multisite)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تتيح ميزة Drupal Multisite تشغيل وإدارة مئات المواقع الفرعية (مثل كليات الجامعة أو فروع الوزارة) من خلال قاعدة كود برمجي واحدة (Single Codebase)، مما يخفض تكاليف الصيانة والترقيات بنسبة تتجاوز 80%.
          </p>
        `
      },
      {
        id: 'workflow-audit',
        title: 'تدفقات النشر والتدقيق وسجلات التغيير الشاملة',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يوفر دوروبال نظام Workspaces و Content Moderation المتقدم الذي يسمح بتجهيز حملات إعلامية كاملة واختبارها واعتمادها قبل جدولتها للنشر اللحظي، مع توثيق هوية كل محرر وكل حرف تم تعديله.
          </p>
        `
      },
      {
        id: 'enterprise-integrations',
        title: 'الربط مع البنى التحتية للمؤسسات (CRM/ERP/SSO)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يتصل دوروبال بسلاسة مع أنظمة Microsoft Active Directory, LDAP, Okta، ويستقبل ويرسل البيانات لخدمات السحابة عبر منصات Kafka و RabbitMQ و GraphQL.
          </p>
        `
      },
      {
        id: 'scalability',
        title: 'التوسع الهائل وتحمل ملايين الزيارات المتزامنة',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            بفضل طبقة التخزين المؤقت الذكية وسهولة الربط مع Varnish Cache و Redis وشبكات CDN مثل Cloudflare و Fastly، يقدم دوروبال أداءً ثابتاً في أوقات ذروة الزيارات دون أي انهيار.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل دوروبال مكلف مقارنة بووردبريس؟',
        a: 'تكلفة التطوير الأولي لدوروبال أعلى نظراً للحاجة لمهندسين ذوي خبرة عالية، ولكن بالنسبة للمؤسسات الكبرى تكون التكلفة الإجمالية للملكية (TCO) على المدى الطويل أقل بفضل متانة النظام وتوفير تكاليف التراخيص والصيانة الموحدة.'
      }
    ]
  },
  {
    slug: 'drupal-speed-and-performance',
    title: 'تسريع مواقع دوروبال: الدليل الهندسي لتحسين أداء المنصات الكبيرة',
    metaTitle: 'دليل تسريع أداء مواقع دوروبال Drupal Performance | يوسف الغمري',
    metaDesc: 'تعرف على تقنيات تحسين أداء وتسريع دوروبال: BigPipe، التخزين المؤقت الذكي Cache Tags، خوادم Varnish، وتحسين استعلامات قواعد البيانات.',
    category: 'drupal',
    categoryName: 'دوروبال (Drupal)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/drupal-guide.svg',
    imageAlt: 'تسريع مواقع دوروبال',
    relatedServiceUrl: '/ar/services/speed-performance-optimization.html',
    relatedServiceName: 'تحسين السرعة والأداء',
    intro: 'يمتلك دوروبال واحدة من أكثر بنيات التخزين المؤقت تعقيداً وكفاءة في عالم الويب. يوضح هذا الدليل كيف تستغل هذه البنية للوصول بموقعك إلى أزمنة استجابة لا تتعدى بضعة أجزاء من الثانية.',
    toc: [
      { id: 'cache-tags', text: '1. ثورة وسوم الكاش (Cache Tags & Contexts)' },
      { id: 'bigpipe', text: '2. تقنية BigPipe المدمجة لتحميل فوري للواجهات' },
      { id: 'reverse-proxy', text: '3. تكوين خوادم Varnish والـ CDN' },
      { id: 'db-optimization', text: '4. ضبط قواعد البيانات ومحركات البحث Solr/Elasticsearch' },
      { id: 'aggregation', text: '5. تجميع الأصول البرمجية وضغط الموارد' }
    ],
    sections: [
      {
        id: 'cache-tags',
        title: 'ثورة وسوم الكاش (Cache Tags & Contexts)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تعتبر وسوم الكاش في دوروبال طفرة هندسية؛ حيث يتم تمييز كل عنصر في الصفحة بوسوم تتبع بياناته، وعندما يقوم محرر بتعديل مقال، لا يتم مسح كاش الموقع كاملاً بل يتم تفريغ كاش الأجزاء التي تستعرض هذا المقال فقط، مما يحافظ على سرعة استجابة الخادم لجميع الزوار الآخرين.
          </p>
        `
      },
      {
        id: 'bigpipe',
        title: 'تقنية BigPipe المدمجة لتحميل فوري للواجهات',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            اخترع مهندسو فيسبوك تقنية BigPipe ونقلها مطورو دوروبال إلى النواة. تقوم هذه التقنية بإرسال الهيكل الثابت للصفحة للزائر فوراً، ثم بث الأجزاء الديناميكية والشخصية تباعاً عبر نفس الاتصال، مما يعطي إحساساً آنياً بالسرعة الفائقة.
          </p>
        `
      },
      {
        id: 'reverse-proxy',
        title: 'تكوين خوادم Varnish والـ CDN',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يوفر دوروبال تكاملاً سحرياً مع Varnish عبر موديول Purge، حيث يتم تخزين 95% من صفحات الزوار غير المسجلين في الذاكرة العشوائية للسيرفر العكسي، مما يرفع قدرة الموقع على تحمل آلاف الطلبات في الثانية دون إجهاد خادم PHP.
          </p>
        `
      },
      {
        id: 'db-optimization',
        title: 'ضبط قواعد البيانات ومحركات البحث Solr/Elasticsearch',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            في المواقع التي تحوي ملايين المحتويات، يجب فصل عمليات البحث والفلترة عن قاعدة البيانات العادية ونقلها إلى محركات بحث مخصصة مثل Apache Solr أو Elasticsearch لتقديم نتائج بحث لحظية دون إبطاء الموقع.
          </p>
        `
      },
      {
        id: 'aggregation',
        title: 'تجميع الأصول البرمجية وضغط الموارد',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تفعيل ميزة CSS & JavaScript Aggregation المدمجة في دوروبال يدمج عشرات الملفات ويضغطها ويقلل عدد طلبات HTTP بشكل جذري.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'ما هي ميزة BigPipe في دوروبال؟',
        a: 'تقنية مدمجة تتيح إرسال محتوى الصفحة المتاح فوراً للمتصفح دون انتظار العناصر البطيئة أو المخصصة، مما يحسن مؤشرات السرعة وتجربة الزائر بشكل لافت.'
      }
    ]
  },
  {
    slug: 'drupal-security-best-practices',
    title: 'أمان وحماية مواقع دوروبال: الدليل الشامل لمعايير الحماية المؤسسية',
    metaTitle: 'دليل أمان وحماية مواقع دوروبال Drupal Security | يوسف الغمري',
    metaDesc: 'أفضل الممارسات الأمنية لحماية مواقع دوروبال: صلاحيات المستخدمين، تأمين ملف settings.php، الحماية من حقن SQL و XSS، ومراقبة الثغرات.',
    category: 'drupal',
    categoryName: 'دوروبال (Drupal)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/drupal-guide.svg',
    imageAlt: 'أمان وحماية مواقع دوروبال',
    relatedServiceUrl: '/ar/services/backend-development.html',
    relatedServiceName: 'تطوير وحماية الأنظمة الرقمية',
    intro: 'يتمتع دوروبال بأعلى سمعة أمنية بين كافة أنظمة إدارة المحتوى مفتوحة المصدر. ومع ذلك، فإن التطبيق الصحيح لإعدادات السيرفر وضوابط الكود هو ما يضمن استمرارية هذا الأمان الفولاذي.',
    toc: [
      { id: 'security-team', text: '1. كيف يعمل فريق أمان دوروبال الرسمي؟' },
      { id: 'settings-security', text: '2. تأمين ملف settings.php وصلاحيات الملفات' },
      { id: 'input-sanitization', text: '3. تنقية المدخلات والوقاية من ثغرات XSS و SQLi' },
      { id: 'two-factor-auth', text: '4. تفعيل المصادقة الثنائية وسياسات كلمات المرور' },
      { id: 'security-review', text: '5. الفحص الدوري عبر موديول Security Review' }
    ],
    sections: [
      {
        id: 'security-team',
        title: 'كيف يعمل فريق أمان دوروبال الرسمي؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يضم فريق أمان دوروبال نخبة من خبراء الأمن السيبراني العالميين، ويقومون بفحص ومراجعة كافة الموديولات المساهمة التي تحمل شارة الأمان الرسمية (Security Covered)، وإصدار نشرات أمنية وتصحيحات برمجية منتظمة كل أربعاء.
          </p>
        `
      },
      {
        id: 'settings-security',
        title: 'تأمين ملف settings.php وصلاحيات الملفات',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يجب عزل ملف <code>settings.php</code> بقفل أذونات القراءة فقط (444 أو 400)، واستخدام ملف منفصل غير متتبع في Git لحفظ بيانات الاعتماد الحساسة ومفاتيح التشفير Hash Salt.
          </p>
        `
      },
      {
        id: 'input-sanitization',
        title: 'تنقية المدخلات والوقاية من ثغرات XSS و SQLi',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            بفضل استخدام محرك Twig، يقوم دوروبال بتعقيم وطباعة جميع المتغيرات النصية تلقائياً لمنع حقن السكريبتات الخبيثة (XSS)، كما تضمن طبقة استعلامات قاعدة البيانات Database Abstraction منع ثغرات SQLi تماماً عند كتابة الأكواد بالمعايير الرسمية.
          </p>
        `
      },
      {
        id: 'two-factor-auth',
        title: 'تفعيل المصادقة الثنائية وسياسات كلمات المرور',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يجب فرض المصادقة الثنائية (TFA) على جميع حسابات المديرين والمحررين، مع تطبيق موديول Password Policy لفرض تعقيد كلمات المرور وتدويرها دورياً وحظر الحسابات بعد عدد محدد من المحاولات الفاشلة.
          </p>
        `
      },
      {
        id: 'security-review',
        title: 'الفحص الدوري عبر موديول Security Review',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يوفر موديول Security Review فحصاً آلياً شاملاً لأكثر من 20 نقطة أمنية في الموقع، بما في ذلك أذونات الملفات الخطرة، رسائل الأخطاء المكشوفة، وتكوينات تنسيقات النص Text Formats.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل دوروبال منيع تماماً ضد الاختراق؟',
        a: 'لا يوجد نظام رقمي منيع 100%، ولكن دوروبال يمتلك أقل معدل ثغرات حرجة مقارنة ببقية أنظمة إدارة المحتوى، شريطة تطبيق التحديثات الأمنية بانتظام.'
      }
    ]
  },
  {
    slug: 'drupal-headless-decoupled-architecture',
    title: 'دوروبال مقطوع الرأس (Headless & Decoupled Drupal): بنية المستقبل الرقمي',
    metaTitle: 'دليل دوروبال مقطوع الرأس Headless Drupal والتكامل مع React و Next.js | يوسف الغمري',
    metaDesc: 'تعرف على بنية Decoupled Drupal: استخدام دوروبال كنظام خلفي قوي لإدارة المحتوى وبث البيانات عبر JSON:API و GraphQL إلى تطبيقات Next.js و React.',
    category: 'drupal',
    categoryName: 'دوروبال (Drupal)',
    date: '2025-02-14',
    readTime: '10 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/drupal-guide.svg',
    imageAlt: 'دوروبال مقطوع الرأس Headless Drupal',
    relatedServiceUrl: '/ar/services/api-development-integration.html',
    relatedServiceName: 'تطوير وتكامل واجهات البرمجة API',
    intro: 'تتجه الشركات العالمية الرائدة نحو فصل الواجهة الأمامية تماماً عن الواجهة الخلفية (Decoupled Architecture). يتربع دوروبال على عرش هذه البنية كأقوى مستودع محتوى متقدم يغذي واجهات React و Next.js وتطبيقات الموبايل بأعلى كفاءة.',
    toc: [
      { id: 'what-is-headless', text: '1. ما هي بنية Decoupled Drupal؟' },
      { id: 'jsonapi-graphql', text: '2. المقارنة بين معيار JSON:API المدمج و GraphQL' },
      { id: 'nextjs-integration', text: '3. الربط مع Next.js عبر حزمة Next-Drupal' },
      { id: 'auth-tokens', text: '4. إدارة المصادقة وصلاحيات الـ API عبر OAuth2' },
      { id: 'pros-cons', text: '5. مزايا وتحديات البنية مقطوعة الرأس' }
    ],
    sections: [
      {
        id: 'what-is-headless',
        title: 'ما هي بنية Decoupled Drupal؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            في النموذج مقطوع الرأس، يتولى دوروبال إدارة المحتوى، الصلاحيات، وسير العمليات في الخلفية، بينما يتم بناء واجهة المستخدم بالكامل باستخدام أطر عمل الواجهات الحديثة مثل Next.js أو Nuxt.js، ويتم التخاطب بين الطرفين عبر واجهات برمجية RESTful أو GraphQL.
          </p>
        `
      },
      {
        id: 'jsonapi-graphql',
        title: 'المقارنة بين معيار JSON:API المدمج و GraphQL',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يحتوي دوروبال على دعم أصيل ومكتمل لمواصفة JSON:API العالمية دون كتابة أي كود، مما يوفر نقاط وصول لجميع الكيانات مع إمكانات تصفية وتضمين العلاقات المترابطة. كما يتيح موديول GraphQL بناء مخطط بياني فائق الدقة لجلب البيانات التي تحتاجها الواجهة فقط.
          </p>
        `
      },
      {
        id: 'nextjs-integration',
        title: 'الربط مع Next.js عبر حزمة Next-Drupal',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تعتبر حزمة Next-Drupal الرسمية أسهل وأقوى وسيلة لبناء مواقع فائقة السرعة مع دعم التوليد الثابت المتزايد (Incremental Static Regeneration - ISR) والمزامنة الفورية لمسودات المقالات (Preview Mode) مباشرة من شاشة تحرير دوروبال.
          </p>
        `
      },
      {
        id: 'auth-tokens',
        title: 'إدارة المصادقة وصلاحيات الـ API عبر OAuth2',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يوفر موديول Simple OAuth إمكانية مصادقة المستخدمين وتطبيقات الطرف الثالث وفق معيار OAuth 2.0 الصارم، مما يضمن أمان التخاطب بين الواجهة الأمامية والخادم.
          </p>
        `
      },
      {
        id: 'pros-cons',
        title: 'مزايا وتحديات البنية مقطوعة الرأس',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            <strong>المزايا:</strong> حرية تصميم مطلقة لمطوري الواجهات، سرعة خيالية، وبث المحتوى لنفس المنصة عبر تطبيقات الجوال وشاشات العرض الذكية ومواقع الويب في آن واحد.<br>
            <strong>التحديات:</strong> تعقيد أكبر في إدارة معمارية النظام والحاجة لمهندسين متخصصين في كلا الجانبين.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل أحتاج لسيرفرين مختلفين لتشغيل Decoupled Drupal؟',
        a: 'نعم، في الأغلب يتم استضافة خادم دوروبال على بنية تحتية سحابية قوية، بينما يتم نشر واجهة Next.js على منصات مثل Vercel لضمان أداء عالمي فائق على أطراف الشبكة Edge.'
      }
    ]
  },
  {
    slug: 'drupal-vs-wordpress',
    title: 'دوروبال أم ووردبريس؟ مقارنة استراتيجية شاملة للمؤسسات وأصحاب القرار',
    metaTitle: 'مقارنة دوروبال مقابل ووردبريس: أيهما تختار لمشروعك المؤسسي؟ | يوسف الغمري',
    metaDesc: 'تحليل مقارن دقيق بين دوروبال وووردبريس: التكلفة الإجمالية للملكية، الأمان، سهولة التحرير، وقابلية التوسع للمشاريع الكبيرة.',
    category: 'drupal',
    categoryName: 'دوروبال (Drupal)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/drupal-guide.svg',
    imageAlt: 'مقارنة دوروبال وووردبريس للمؤسسات',
    relatedServiceUrl: '/ar/services/business-process-analysis.html',
    relatedServiceName: 'تحليل المتطلبات التقنية والمؤسسية',
    intro: 'المقارنة بين دوروبال وووردبريس ليست مجرد مقارنة بين نظامي إدارة محتوى، بل هي مقارنة بين فلسفتين مختلفتين تماماً في هندسة البرمجيات. نساعدك في هذا الدليل على اتخاذ القرار الأنسب لمؤسستك.',
    toc: [
      { id: 'core-philosophy', text: '1. الفلسفة الأساسية والجمهور المستهدف' },
      { id: 'security-comparison', text: '2. معايير الأمان وحصانة النظام' },
      { id: 'data-complexity', text: '3. تعقيد هياكل البيانات والعلاقات' },
      { id: 'cost-roi', text: '4. التكلفة الإجمالية للملكية (TCO) والعائد على الاستثمار' },
      { id: 'decision-matrix', text: '5. مصفوفة القرار السريع لاختيار المنصة' }
    ],
    sections: [
      {
        id: 'core-philosophy',
        title: 'الفلسفة الأساسية والجمهور المستهدف',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            بدأ ووردبريس كمنصة تدوين وتطور ليصبح نظام إدارة محتوى شاملاً يركز على سهولة الاستخدام للمستخدم العادي وسرعة الإطلاق. بينما صُمم دوروبال منذ نشأته كإطار عمل معقد للمطورين والمهندسين الذين يبنون حلولاً مخصصة شديدة التعقيد.
          </p>
        `
      },
      {
        id: 'security-comparison',
        title: 'معايير الأمان وحصانة النظام',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يتفوق دوروبال تاريخياً في هذا المضمار، حيث يتم تدقيق كل كود مساهم، بينما يفتح نظام ووردبريس البيئي الباب لآلاف الإضافات التجارية غير الموحدة والتي تعد المسبب الأكبر لثغرات المواقع المخترقة عالمياً.
          </p>
        `
      },
      {
        id: 'data-complexity',
        title: 'تعقيد هياكل البيانات والعلاقات',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            إذا كان موقعك يتطلب أنواع محتوى متشابكة وعلاقات مرجعية ثلاثية الأبعاد (مثل الأبحاث، الباحثين، المختبرات، المؤتمرات، التمويل)، فإن دوروبال ينجز ذلك بسلاسة مذهلة، بينما يحتاج ووردبريس لإضافات عديدة تجعل قاعدة البيانات بطيئة وصعبة الإدارة.
          </p>
        `
      },
      {
        id: 'cost-roi',
        title: 'التكلفة الإجمالية للملكية (TCO) والعائد على الاستثمار',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            ووردبريس أقل كلفة في الإنشاء الأولي، لكن تكاليف تراخيص الإضافات وتحديثاتها المتضاربة قد ترتفع مستقبلاً. دوروبال يتطلب استثماراً أولياً أعلى، لكنه يوفر استقراراً لا يضاهى لسنوات طويلة دون الحاجة لشراء إضافات تجارية شهرية.
          </p>
        `
      },
      {
        id: 'decision-matrix',
        title: 'مصفوفة القرار السريع لاختيار المنصة',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            <strong>اختر دوروبال:</strong> إذا كنت جهة حكومية، جامعة، بنكاً، منصة وسائط ضخمة، أو مشروعاً متعدد المواقع يتطلب تدقيقاً أمنياً صارماً.<br>
            <strong>اختر ووردبريس:</strong> إذا كنت تبني موقعاً تجارياً، مدونة، متجر WooCommerce سريع، أو بوابة محتوى يديرها فريق صغير بدون مبرمج متخصص.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل يمكن نقل موقع ووردبريس ضخم إلى دوروبال؟',
        a: 'نعم، يوفر دوروبال نظام ترحيل فائق القوة (Migrate API) يتيح سحب مئات الآلاف من مقالات ومستخدمي ووردبريس وإعادة تنظيمها في كيانات دوروبال باحترافية.'
      }
    ]
  },
  {
    slug: 'drupal-multilingual-enterprise-guide',
    title: 'إدارة البوابات متعددة اللغات في دوروبال: الدليل الشامل للمواقع الحكومية والدولية',
    metaTitle: 'دليل دوروبال للمواقع متعددة اللغات Drupal Multilingual | يوسف الغمري',
    metaDesc: 'كيفية بناء بوابات متعددة اللغات في دوروبال 10: ترجمة واجهة النظام، ترجمة الكيانات والحقول، دعم اتجاه RTL، والتوافق الكامل مع معايير السيو.',
    category: 'drupal',
    categoryName: 'دوروبال (Drupal)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/drupal-guide.svg',
    imageAlt: 'إدارة البوابات متعددة اللغات في دوروبال',
    relatedServiceUrl: '/ar/services/backend-development.html',
    relatedServiceName: 'تطوير البوابات والمنصات المؤسسية',
    intro: 'يحتوي دوروبال على النظام الأكثر شمولاً وتكاملاً لإدارة المحتوى متعدد اللغات على مستوى العالم؛ حيث صُممت النواة في دوروبال 8 وما بعده لتدعم الترجمة في صميم كينونتها دون أي حلول ترقيعية.',
    toc: [
      { id: 'four-core-modules', text: '1. موديولات الترجمة الأربعة الأساسية في النواة' },
      { id: 'field-level-translation', text: '2. الترجمة على مستوى الحقول (Field-level Translation)' },
      { id: 'rtl-support', text: '3. الدعم الأصيل للغة العربية واتجاه RTL' },
      { id: 'translation-workflows', text: '4. دورات عمل فرق المترجمين وشركات الترجمة' },
      { id: 'hreflang-seo', text: '5. وسوم hreflang ومحركات البحث العالمية' }
    ],
    sections: [
      {
        id: 'four-core-modules',
        title: 'موديولات الترجمة الأربعة الأساسية في النواة',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تتكون بنية تعدد اللغات في دوروبال من أربعة موديولات مدمجة تعمل بتناغم تام: Language (تعريف اللغات)، Interface Translation (ترجمة نصوص النظام والقوالب آلياً من مجتمع دوروبال)، Content Translation (ترجمة المقالات والكيانات)، و Configuration Translation (ترجمة الإعدادات والقوائم).
          </p>
        `
      },
      {
        id: 'field-level-translation',
        title: 'الترجمة على مستوى الحقول (Field-level Translation)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            على خلاف الأنظمة التي تفرض نسخ المقال كاملاً، يتيح دوروبال تحديد أي حقل ليكون قابلاً للترجمة وأي حقل يبقى مشتركاً (مثل تاريخ النشر أو صورة المقال أو السعر)، مما يضمن تكامل البيانات عبر كافة النسخ اللغوية.
          </p>
        `
      },
      {
        id: 'rtl-support',
        title: 'الدعم الأصيل للغة العربية واتجاه RTL',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يدعم دوروبال اتجاه الكتابة من اليمين إلى اليسار (RTL) بشكل أصيل في كل من واجهة الموقع ولوحة التحكم الإدارية، مع مراعاة خصائص CSS المنطقية (Logical Properties) لضمان تناسق القوالب بسلاسة.
          </p>
        `
      },
      {
        id: 'translation-workflows',
        title: 'دورات عمل فرق المترجمين وشركات الترجمة',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يتكامل دوروبال عبر موديول TMGMT مع كبرى شركات وخدمات الترجمة السحابية مثل Google Translate و DeepL و Transifex لتصدير واستيراد ملفات XLIFF القياسية بنقرة زر واحدة.
          </p>
        `
      },
      {
        id: 'hreflang-seo',
        title: 'وسوم hreflang ومحركات البحث العالمية',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يقوم دوروبال تلقائياً بإنشاء وسوم <code>hreflang</code> المناسبة لكل لغة وإرسالها في ترويسات الصفحات لإرشاد روبوتات جوجل للنسخة الصحيحة لكل زائر بحسب موقعه ولغته دون أي أخطاء فهرسة.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل يتطلب إعداد موقع دوروبال متعدد اللغات تثبيت إضافات خارجية؟',
        a: 'لا، جميع ميزات الترجمة القوية مدمجة تماماً في نواة دوروبال الرسمية وتعمل فور تفعيل الموديولات الأربعة الأساسية.'
      }
    ]
  },
  {
    slug: 'drupal-migration-guide',
    title: 'دليل ترحيل المواقع إلى دوروبال الحديث: استخدام Drupal Migrate API باحترافية',
    metaTitle: 'دليل ترحيل ونقل البيانات إلى دوروبال Migrate API | يوسف الغمري',
    metaDesc: 'تعلم كيفية استخدام إطار العمل القوي Drupal Migrate API لترحيل ملايين المقالات والملفات وقواعد البيانات المعقدة إلى دوروبال 10 الحديث.',
    category: 'drupal',
    categoryName: 'دوروبال (Drupal)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/drupal-guide.svg',
    imageAlt: 'دليل ترحيل المواقع إلى دوروبال Migrate API',
    relatedServiceUrl: '/ar/services/backend-development.html',
    relatedServiceName: 'ترحيل وهندسة البيانات البرمجية',
    intro: 'يعتبر إطار العمل Migrate API في دوروبال أحد أقوى محركات نقل ومعالجة البيانات (ETL Engine) في العالم. سواء كنت تنقل من دوروبال 7 قديم، أو من ووردبريس، أو من قواعد بيانات مخصصة، فإن هذا الدليل يشرح المنهجية الهندسية لذلك.',
    toc: [
      { id: 'etl-concept', text: '1. مفهوم المعمارية الثلاثية: Extract, Transform, Load' },
      { id: 'migration-yaml', text: '2. كتابة ملفات الترحيل بصيغة YAML' },
      { id: 'process-plugins', text: '3. استخدام إضافات المعالجة (Process Plugins)' },
      { id: 'rollback-rerun', text: '4. التراجع عن الترحيل وإعادة التشغيل بأمان' },
      { id: 'migrating-drupal-7', text: '5. استراتيجية ترحيل مواقع دوروبال 7 الكبيرة' }
    ],
    sections: [
      {
        id: 'etl-concept',
        title: 'مفهوم المعمارية الثلاثية: Extract, Transform, Load',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يقسم دوروبال عملية الترحيل إلى ثلاثة محاور: <strong>المصدر (Source)</strong> لاستخراج البيانات من SQL أو CSV أو JSON، <strong>المعالجة (Process)</strong> لتنظيف وتعديل الحقول، و <strong>الوجهة (Destination)</strong> لإنشاء كيانات دوروبال الرسمية وحفظ العلاقات بينها.
          </p>
        `
      },
      {
        id: 'migration-yaml',
        title: 'كتابة ملفات الترحيل بصيغة YAML',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تتم كتابة مهام الترحيل في ملفات تكوين نصية YAML محكمة تحدد خرائط الحقول Source to Destination، مع ربط المصطلحات والمؤلفين والمرفقات بهوياتها الجديدة دون فقدان تاريخ النشر أو بيانات السيو.
          </p>
        `
      },
      {
        id: 'process-plugins',
        title: 'استخدام إضافات المعالجة (Process Plugins)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يوفر دوروبال مكتبة ضخمة من أدوات المعالجة مثل <code>migration_lookup</code> لربط الفئات والتعليقات بمقالاتها المقابلة، وتغيير صياغات التواريخ، واستخراج الصور وتحميلها إلى نظام الملفات العام.
          </p>
        `
      },
      {
        id: 'rollback-rerun',
        title: 'التراجع عن الترحيل وإعادة التشغيل بأمان',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تتعقب أداة Migrate كل سجل تم إنشاؤه في جداول خريطة (Map Tables). يتيح هذا للمطور التراجع التام <code>drush migrate:rollback</code> وحذف السجلات التجريبية بضغطة زر وإعادة التشغيل حتى الوصول لترحيل نقي 100%.
          </p>
        `
      },
      {
        id: 'migrating-drupal-7',
        title: 'استراتيجية ترحيل مواقع دوروبال 7 الكبيرة',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            مع وصول دوروبال 7 لنهاية دورة حياته الرسمية (EOL)، يتطلب الانتقال إلى دوروبال 10 إعادة هندسة القوالب والموديولات والتركيز على ترحيل البيانات الصافية لضمان الاستفادة من معايير الويب المعاصرة.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل يمكن تشغيل عملية الترحيل على دفعات دون توقف السيرفر؟',
        a: 'نعم، تدعم أداة Drush معيار <code>--limit</code> لتشغيل ترحيل دفعات صغيرة وتجنب استهلاك موارد الذاكرة في قواعد البيانات الكبيرة.'
      }
    ]
  },
  {
    slug: 'drupal-graphql-content-hub',
    title: 'دوروبال كمركز محتوى موحد (Content Hub): بث البيانات لتطبيقات الجوال والويب عبر GraphQL',
    metaTitle: 'دليل دوروبال كـ Content Hub مع GraphQL وتطبيقات الويب | يوسف الغمري',
    metaDesc: 'تعلم كيف تحول دوروبال إلى مركز إدارة محتوى موحد يغذي المواقع وتطبيقات الموبايل وشاشات العرض عبر استعلامات GraphQL و JSON:API.',
    category: 'drupal',
    categoryName: 'دوروبال (Drupal)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/drupal-guide.svg',
    imageAlt: 'دوروبال كمركز محتوى موحد Content Hub',
    relatedServiceUrl: '/ar/services/backend-development.html',
    relatedServiceName: 'تطوير المنصات والأنظمة الموزعة',
    intro: 'في المؤسسات متعددة المنصات، تصبح إدارة المحتوى في مكان واحد وبثه لكافة التطبيقات حلاً جوهرياً للقضاء على التكرار. يبرز دوروبال كأقوى Content Hub عالمي بفضل مرونة نمذجة البيانات ومحرك GraphQL.',
    toc: [
      { id: 'content-hub-concept', text: '1. ما هو مفهوم الـ Content Hub المؤسسي؟' },
      { id: 'schema-design', text: '2. تصميم مخطط GraphQL المخصص في دوروبال' },
      { id: 'multichannel-delivery', text: '3. بث المحتوى المتزامن لتطبيقات iOS و Android و Next.js' },
      { id: 'caching-cdn', text: '4. التخزين المؤقت الذكي على خوادم الـ CDN' },
      { id: 'governance', text: '5. حوكمة الصلاحيات واعتماد المحتوى المركزي' }
    ],
    sections: [
      {
        id: 'content-hub-concept',
        title: 'ما هو مفهوم الـ Content Hub المؤسسي؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            الـ Content Hub هو مستودع مركزي واحد يتم فيه إنشاء وتحرير ومراجعة المحتوى، ثم توزيعه تلقائياً عبر واجهات برمجية لجميع البوابات الفرعية والتطبيقات دون الحاجة لإعادة كتابته يدوياً في كل منصة.
          </p>
        `
      },
      {
        id: 'schema-design',
        title: 'تصميم مخطط GraphQL المخصص في دوروبال',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يوفر موديول GraphQL v4 في دوروبال إمكانية كتابة مخططات SDL محكمة تحدد الحقول والأنواع بدقة وتمنع استرجاع بيانات غير مصرح بها.
          </p>
        `
      },
      {
        id: 'multichannel-delivery',
        title: 'بث المحتوى المتزامن لتطبيقات iOS و Android و Next.js',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تستدعي التطبيقات نقاط نهاية دوروبال وتستقبل استجابات JSON فورية، مما يوفر تجربة قراءة موحدة ومحدثة لحظياً على كافة الأجهزة.
          </p>
        `
      },
      {
        id: 'caching-cdn',
        title: 'التخزين المؤقت الذكي على خوادم الـ CDN',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            ربط استعلامات GraphQL بوسوم الكاش Cache Tags يتيح لشبكة Cloudflare أو Fastly تخزين الاستجابات وتحديثها تلقائياً فقط عند تعديل المحتوى في لوحة دوروبال.
          </p>
        `
      },
      {
        id: 'governance',
        title: 'حوكمة الصلاحيات واعتماد المحتوى المركزي',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            فرض دورات الاعتماد والموافقة قبل نشر أي نص، مع الحفاظ على سجل كامل بالتعديلات للامتثال المؤسسي الصارم.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل يدعم Content Hub في دوروبال الصور والفيديوهات؟',
        a: 'نعم، يدعم نظام Media Library المدمج في دوروبال إدارة كافة الملفات والوسائط وتوزيعها عبر روابط CDN محسنة.'
      }
    ]
  }
];
