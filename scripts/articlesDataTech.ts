import { ArticleItem } from './types';

export const reactArticles: ArticleItem[] = [
  {
    slug: 'what-is-reactjs',
    title: 'ما هي مكتبة React.js؟ دليلك الشامل لثورة تطوير واجهات المستخدم الحديثة',
    metaTitle: 'ما هو ريأكت React.js؟ دليل شامل لتطوير واجهات المستخدم | يوسف الغمري',
    metaDesc: 'دليل شامل عن مكتبة React.js: فلسفة المكونات، Virtual DOM، خطافات Hooks، مقارنتها مع الأطر الأخرى، ولماذا تتصدر تطوير الويب عالمياً.',
    category: 'react',
    categoryName: 'ريأكت (React.js)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/react-guide.svg',
    imageAlt: 'دليل مكتبة React.js لتطوير واجهات المستخدم',
    relatedServiceUrl: '/ar/services/frontend-development.html',
    relatedServiceName: 'تطوير الواجهات الأمامية والـ SPA',
    intro: 'أحدثت مكتبة React.js التي طورتها شركة Meta ثورة جذرية في طريقة بناء تطبيقات الويب. من خلال مفهوم المكونات القابلة لإعادة الاستخدام وشجرة الدوم الافتراضية، أصبحت ريأكت المعيار القياسي لتطوير تجارب المستخدم الرقمية التفاعلية والسريعة.',
    toc: [
      { id: 'definition', text: '1. ما هي ريأكت وتاريخ نشأتها؟' },
      { id: 'core-concepts', text: '2. المفاهيم المحورية: Components, JSX, Props & State' },
      { id: 'virtual-dom', text: '3. كيف تعمل شجرة الدوم الافتراضية (Virtual DOM)؟' },
      { id: 'ecosystem', text: '4. النظام البيئي لريأكت (Next.js, Vite, Redux)' },
      { id: 'react-19', text: '5. ما الجديد في React 19 ومستقبل ريأكت؟' }
    ],
    sections: [
      {
        id: 'definition',
        title: 'ما هي ريأكت وتاريخ نشأتها؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            أُطلقت ريأكت كمكتبة جافاسكريبت مفتوحة المصدر عام 2013 بواسطة Jordan Walke مهندس شركة فيسبوك. كان الهدف حل مشكلة التحديثات المعقدة في واجهة فيسبوك، وسرعان ما تبنتها كبرى الشركات العالمية مثل Netflix, Airbnb, Uber.
          </p>
        `
      },
      {
        id: 'core-concepts',
        title: 'المفاهيم المحورية: Components, JSX, Props & State',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تقوم ريأكت على تقسيم الصفحة إلى مكونات مستقلة ومعزولة (Components). تستخدم لغة JSX لدمج منطق الجافاسكريبت مع وسوم الواجهة بطريقة تعبيرية، وتعتمد على تدفق البيانات أحادي الاتجاه (Unidirectional Data Flow) عبر Props للتمرير و State لتخزين الحالة المتغيرة.
          </p>
        `
      },
      {
        id: 'virtual-dom',
        title: 'كيف تعمل شجرة الدوم الافتراضية (Virtual DOM)؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            بدلاً من التعديل المباشر البطيء على DOM الحقيقي في المتصفح، تحتفظ ريأكت بنسخة خفيفة في الذاكرة. عند حدوث أي تغيير في الحالة، تقوم خوارزمية Diffing بمقارنة الشجرتين وتطبيق التغييرات الفعلية فقط على العناصر المتأثرة بدقة، مما يمنح التطبيق سرعة مذهلة.
          </p>
        `
      },
      {
        id: 'ecosystem',
        title: 'النظام البيئي لريأكت (Next.js, Vite, Redux)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            ريأكت ليست إطار عمل متكامل بل مكتبة واجهات، مما يمنحها مرونة هائلة. يتكامل ريأكت مع أدوات بناء مثل Vite، وأطر عمل إنتاجية مثل Next.js و Remix لتقديم العرض من جهة الخادم (SSR)، ومكتبات إدارة الحالة مثل Zustand و Redux Toolkit.
          </p>
        `
      },
      {
        id: 'react-19',
        title: 'ما الجديد في React 19 ومستقبل ريأكت؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يقدم React 19 معالج React Compiler لتحسين الأداء تلقائياً دون الحاجة لكتابة <code>useMemo</code> و <code>useCallback</code> يدوياً، بالإضافة لخطافات Actions الحديثة مثل <code>useActionState</code> و <code>useFormStatus</code>.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل ريأكت مكتبة أم إطار عمل (Framework)؟',
        a: 'ريأكت مكتبة (Library) متخصصة في طبقة العرض (UI)، ولكن عند دمجها مع أطر مثل Next.js تصبح إطار عمل كامل لتطبيقات الويب.'
      }
    ]
  },
  {
    slug: 'reactjs-modern-hooks-guide',
    title: 'دليل خطافات ريأكت الحديثة (React Hooks): من المبتدئ إلى الاحتراف',
    metaTitle: 'دليل خطافات ريأكت React Hooks بالتفصيل مع أمثلة عملية | يوسف الغمري',
    metaDesc: 'شرح شامل لخطافات ريأكت: useState, useEffect, useRef, useMemo, useCallback، وكيفية بناء خطافات مخصصة Custom Hooks بأعلى كفاءة.',
    category: 'react',
    categoryName: 'ريأكت (React.js)',
    date: '2025-02-14',
    readTime: '10 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/react-guide.svg',
    imageAlt: 'شرح خطافات ريأكت React Hooks',
    relatedServiceUrl: '/ar/services/frontend-development.html',
    relatedServiceName: 'تطوير وبرمجة تطبيقات React',
    intro: 'غيرت الخطافات (Hooks) في ريأكت طريقة كتابة المكونات إلى الأبد، حيث مكنت المطورين من استخدام الحالة (State) ودورات الحياة داخل المكونات الوظيفية النقية (Functional Components). يستعرض هذا الدليل أهم الخطافات الأساسية والمتقدمة.',
    toc: [
      { id: 'usestate-useeffect', text: '1. أساسيات الحالة والآثار الجانبية: useState و useEffect' },
      { id: 'useref', text: '2. التعامل مع عناصر DOM والمراجع الثابتة: useRef' },
      { id: 'usememo-usecallback', text: '3. تحسين الأداء وتفادي إعادة الرسم: useMemo و useCallback' },
      { id: 'usecontext', text: '4. مشاركة الحالة العالمية بدون تداخل: useContext' },
      { id: 'custom-hooks', text: '5. بناء خطافات مخصصة (Custom Hooks) قابلة لإعادة الاستخدام' }
    ],
    sections: [
      {
        id: 'usestate-useeffect',
        title: 'أساسيات الحالة والآثار الجانبية: useState و useEffect',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يُستخدم <code>useState</code> لتخزين وتحديث المتغيرات التفاعلية داخل المكون، بينما يتولى <code>useEffect</code> معالجة الآثار الجانبية مثل جلب البيانات من API، الاشتراك في الأحداث، أو تعديل عنوان الصفحة بعد اكتمال العرض.
          </p>
        `
      },
      {
        id: 'useref',
        title: 'التعامل مع عناصر DOM والمراجع الثابتة: useRef',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يتيح <code>useRef</code> الوصول المباشر لعقد الـ HTML (مثل تفعيل حقل الإدخال برمجياً)، كما يمكن استخدامه لتخزين قيم ثابتة تنجو عبر عمليات إعادة التصيير (Re-renders) دون أن يؤدي تغييرها إلى إعادة رسم الشاشة.
          </p>
        `
      },
      {
        id: 'usememo-usecallback',
        title: 'تحسين الأداء وتفادي إعادة الرسم: useMemo و useCallback',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يقوم <code>useMemo</code> بتخزين النتائج الحسابية الثقيلة في الذاكرة (Memoization) لمنع إعادة حسابها إلا عند تغير مصفوفة التبعيات، بينما يقوم <code>useCallback</code> بحفظ مرجع الدالة لمنع إعادة تمريرها لمكونات الأبناء وتحفيز رسم غير مبرر.
          </p>
        `
      },
      {
        id: 'usecontext',
        title: 'مشاركة الحالة العالمية بدون تداخل: useContext',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يحل <code>useContext</code> مشكلة تمرير الخصائص المرهق (Prop Drilling)، حيث يتيح لأي مكون في شجرة التطبيق استهلاك بيانات السمة (Theme) أو معلومات المستخدم المسجل مباشرة من الـ Provider.
          </p>
        `
      },
      {
        id: 'custom-hooks',
        title: 'بناء خطافات مخصصة (Custom Hooks) قابلة لإعادة الاستخدام',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            الخطاف المخصص هو دالة جافاسكريبت تبدأ بكلمة <code>use</code> وتغلف منطقاً تفاعلياً معيناً، مثل جلب البيانات عبر الشبكة <code>useFetch</code> أو متابعة حالة اتصال الإنترنت <code>useOnlineStatus</code>.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'ما هي قواعد استخدام React Hooks؟',
        a: 'يجب استدعاء الخطافات في المستوى الأعلى للمكون فقط (لا تستدعيها داخل الشروط if أو الحلقات for)، واستدعاؤها فقط من داخل مكونات ريأكت أو خطافات مخصصة أخرى.'
      }
    ]
  },
  {
    slug: 'reactjs-state-management-comparison',
    title: 'إدارة الحالة في ريأكت: مقارنة بين Redux Toolkit و Zustand و Context API',
    metaTitle: 'مقارنة مكتبات إدارة الحالة في ريأكت State Management | يوسف الغمري',
    metaDesc: 'دليل شامل لاختيار مكتبة إدارة الحالة لمشروع ريأكت: Redux Toolkit، Zustand، Jotai، و Context API من حيث الأداء وحجم الحزمة.',
    category: 'react',
    categoryName: 'ريأكت (React.js)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/react-guide.svg',
    imageAlt: 'إدارة الحالة في ريأكت',
    relatedServiceUrl: '/ar/services/frontend-development.html',
    relatedServiceName: 'تطوير وهندسة تطبيقات الواجهات',
    intro: 'تعتبر إدارة الحالة (State Management) من أهم القرارات المعمارية في أي مشروع ريأكت كبير. هل تكفيك Context API المدمجة أم تحتاج إلى خفة وسرعة Zustand أم قوة وهيكلة Redux Toolkit؟ نوضح في هذا المقال الفروقات الجوهرية.',
    toc: [
      { id: 'why-state-management', text: '1. متى تحتاج لمكتبة إدارة حالة خارجية؟' },
      { id: 'context-api-limits', text: '2. حدود وإمكانات React Context API المدمجة' },
      { id: 'zustand-simplicity', text: '3. لماذا تحظى Zustand بشعبية ساحقة اليوم؟' },
      { id: 'redux-toolkit-enterprise', text: '4. دور Redux Toolkit في المشاريع المؤسسية الكبرى' },
      { id: 'server-state-react-query', text: '5. فصل حالة الخادم عبر TanStack Query' }
    ],
    sections: [
      {
        id: 'why-state-management',
        title: 'متى تحتاج لمكتبة إدارة حالة خارجية؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تحتاج لمكتبة حالة عالمية عندما تتشارك مكونات متباعدة في شجرة التطبيق نفس البيانات (مثل سلة المشتريات، بيانات تسجيل الدخول، الإشعارات الحية) ويصبح تمرير الخصائص يدوياً عبر عشرات المستويات غير عملي.
          </p>
        `
      },
      {
        id: 'context-api-limits',
        title: 'حدود وإمكانات React Context API المدمجة',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تعتبر Context ممتازة للبيانات نادرة التغير (مثل تغيير مظهر الموقع أو اللغة)، ولكنها تسبب مشاكل أداء عند استخدامها مع بيانات سريعة التغير لأن أي تعديل يجبر كافة المكونات المستهلكة على إعادة الرسم (Re-render).
          </p>
        `
      },
      {
        id: 'zustand-simplicity',
        title: 'لماذا تحظى Zustand بشعبية ساحقة اليوم؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تتميز Zustand بحجمها الضئيل للغاية (أقل من 2 كيلوبايت)، وعدم حاجتها لتغليف التطبيق بمزودات Provider، ودعمها للاشتراك الانتقائي (Selectors) الذي يعيد رسم المكون فقط عند تغير القيمة المحددة بدقة متناهية.
          </p>
        `
      },
      {
        id: 'redux-toolkit-enterprise',
        title: 'دور Redux Toolkit في المشاريع المؤسسية الكبرى',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يوفر Redux Toolkit معمارية صارمة وأدوات تنقيح استثنائية (Redux DevTools مع ميزة السفر عبر الزمن Time-travel debugging)، مما يجعله الخيار الأول للفرق الكبيرة التي تبني تطبيقات مالية أو مصرفية معقدة.
          </p>
        `
      },
      {
        id: 'server-state-react-query',
        title: 'فصل حالة الخادم عبر TanStack Query',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            الاتجاه الحديث يوصي بفصل حالة الواجهة (Client State) عن حالة السيرفر (Server State). باستخدام TanStack Query (React Query)، تتولى المكتبة التخزين المؤقت، إعادة الجلب، وإلغاء صلاحية البيانات تلقائياً، مما يقلل الحاجة لمكتبات الحالة العامة بنسبة 80%.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'أيهما أفضل لمشروع جديد: Zustand أم Redux؟',
        a: 'لمعظم المشاريع المتوسطة والحديثة، تعتبر Zustand الخيار الأسهل والأسرع والأخف، بينما يظل Redux هو الخيار الأنسب للمؤسسات ذات متطلبات التتبع الصارمة.'
      }
    ]
  },
  {
    slug: 'reactjs-performance-optimization',
    title: 'تحسين أداء تطبيقات ريأكت: أسرار التخلص من عمليات إعادة الرسم الزائدة',
    metaTitle: 'دليل تحسين أداء وسرعة تطبيقات React.js | يوسف الغمري',
    metaDesc: 'تقنيات تسريع تطبيقات ريأكت: تجزئة الكود Code Splitting، استخدام React.memo، تحسين Virtual DOM، وتحليل الأداء عبر React Profiler.',
    category: 'react',
    categoryName: 'ريأكت (React.js)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/react-guide.svg',
    imageAlt: 'تحسين أداء تطبيقات ريأكت',
    relatedServiceUrl: '/ar/services/speed-performance-optimization.html',
    relatedServiceName: 'تحسين سرعة وأداء التطبيقات',
    intro: 'مع تضخم حجم تطبيق ريأكت وتعدد مكوناته، قد تظهر مشاكل بطء الاستجابة واستهلاك الذاكرة. يوضح هذا المقال التقنيات الاحترافية لضمان عمل واجهاتك بسرعة 60 إطاراً في الثانية (60 FPS).',
    toc: [
      { id: 'profiling', text: '1. اكتشاف عنق الزجاجة عبر React Profiler' },
      { id: 'code-splitting', text: '2. تجزئة الكود عبر React.lazy و Suspense' },
      { id: 'virtualization', text: '3. معالجة القوائم اللانهائية بالـ Windowing' },
      { id: 'memo-usage', text: '4. متى تستخدم React.memo بدقة ودون إفراط؟' },
      { id: 'transitions', text: '5. إعطاء الأولوية للتفاعلات عبر useTransition' }
    ],
    sections: [
      {
        id: 'profiling',
        title: 'اكتشاف عنق الزجاجة عبر React Profiler',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            استخدام أداة Profiler في React Developer Tools لتسجيل دورات الرسم ومعرفة المكونات التي استغرقت أطول وقت وسبب إعادة تصيير كل مكون (Props changed / Hook changed).
          </p>
        `
      },
      {
        id: 'code-splitting',
        title: 'تجزئة الكود عبر React.lazy و Suspense',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تجزئة حزمة الجافاسكريبت الكبيرة (Bundle) إلى أجزاء أصغر يتم تحميلها عند الطلب فقط عند زيارة المستخدم لمسار الصفحة أو فتح النافذة المنبثقة، مما يخفض زمن التحميل الأولي FCP بنسبة تزيد عن 50%.
          </p>
        `
      },
      {
        id: 'virtualization',
        title: 'معالجة القوائم اللانهائية بالـ Windowing',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            استخدام مكتبات مثل <code>react-window</code> أو <code>@tanstack/react-virtual</code> لعرض آلاف العناصر في القائمة دون إجهاد المتصفح، حيث ترسم المكتبة العناصر المرئية على الشاشة فقط.
          </p>
        `
      },
      {
        id: 'memo-usage',
        title: 'متى تستخدم React.memo بدقة ودون إفراط؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تغليف المكون بـ <code>React.memo</code> لمنع إعادة رسمه طالما لم تتغير خصائصه. لا يجب استخدامه على كل المكونات عشوائياً لأن مقارنة الخصائص نفسها تستهلك معالجة بسيطة.
          </p>
        `
      },
      {
        id: 'transitions',
        title: 'إعطاء الأولوية للتفاعلات عبر useTransition',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            استخدام خطاف <code>useTransition</code> المدمج لفصل التحديثات العاجلة (مثل الكتابة في حقل البحث) عن التحديثات الثقيلة غير العاجلة (مثل تصفية قائمة المنتجات)، للحفاظ على سلاسة واجهة المستخدم.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل يؤثر حجم حزمة البناء (Bundle Size) على سرعة ريأكت؟',
        a: 'نعم، كل كيلوبايت إضافي يزيد من زمن التنزيل والتحليل في متصفح الهواتف الضعيفة، لذا يُنصح بفحص الحزمة عبر <code>rollup-plugin-visualizer</code>.'
      }
    ]
  },
  {
    slug: 'reactjs-with-typescript-best-practices',
    title: 'ريأكت مع تايب سكريبت (React + TypeScript): الدليل الاحترافي لكتابة كود منيع',
    metaTitle: 'دليل تطوير React مع TypeScript باحترافية | يوسف الغمري',
    metaDesc: 'أفضل ممارسات استخدام تايب سكريبت مع ريأكت: تعريف أنواع الـ Props، الـ Events، الخطافات Hooks، والأنماط المعمارية لتجنب أخطاء وقت التشغيل.',
    category: 'react',
    categoryName: 'ريأكت (React.js)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/react-guide.svg',
    imageAlt: 'ريأكت مع تايب سكريبت',
    relatedServiceUrl: '/ar/services/frontend-development.html',
    relatedServiceName: 'تطوير التطبيقات بلغة TypeScript',
    intro: 'أصبح الجمع بين React و TypeScript المعيار الإجباري في مشاريع الشركات الحديثة. فهو يوفر أمان الأنواع البرمجية، والإكمال التلقائي الذكي، ويقضي على أخطاء <code>undefined is not a function</code> قبل وصول التطبيق إلى خوادم الإنتاج.',
    toc: [
      { id: 'typing-props', text: '1. تعريف أنواع الـ Props والمكونات الوظيفية' },
      { id: 'typing-hooks', text: '2. ضبط أنواع الخطافات (useState, useRef, useReducer)' },
      { id: 'dom-events', text: '3. التعامل مع أحداث المتصفح (Click & Change Events)' },
      { id: 'generics-components', text: '4. بناء المكونات المعممة (Generic Components)' },
      { id: 'strict-mode-tips', text: '5. نصائح العمل في بيئة Strict Mode' }
    ],
    sections: [
      {
        id: 'typing-props',
        title: 'تعريف أنواع الـ Props والمكونات الوظيفية',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            استخدام <code>interface</code> أو <code>type</code> لتعريف خصائص المكون بدقة، بما في ذلك الخصائص الاختيارية ودعم الأطفال عبر <code>React.ReactNode</code>:
          </p>
          <pre class="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-emerald-400 font-mono text-xs overflow-x-auto my-4">
interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'danger';
  isLoading?: boolean;
  onClick: (event: React.MouseEvent&lt;HTMLButtonElement&gt;) => void;
  children?: React.ReactNode;
}
          </pre>
        `
      },
      {
        id: 'typing-hooks',
        title: 'ضبط أنواع الخطافات (useState, useRef, useReducer)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تحديد أنواع الحالة المعقدة عبر Generics مثل <code>useState&lt;User | null&gt;(null)</code> وتحديد أنواع مراجع العناصر مثل <code>useRef&lt;HTMLInputElement&gt;(null)</code>.
          </p>
        `
      },
      {
        id: 'dom-events',
        title: 'التعامل مع أحداث المتصفح (Click & Change Events)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            استخدام الأنواع الصحيحة للأحداث مثل <code>React.ChangeEvent&lt;HTMLInputElement&gt;</code> لضمان استخراج <code>e.target.value</code> بأمان تام وتوافقية كاملة.
          </p>
        `
      },
      {
        id: 'generics-components',
        title: 'بناء المكونات المعممة (Generic Components)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            بناء جداول أو قوائم منسدلة تستقبل أي نوع من الكائنات عبر ميزة Generics في TypeScript، مما يوفر أمان الأنواع للمصفوفات المستلمة تلقائياً.
          </p>
        `
      },
      {
        id: 'strict-mode-tips',
        title: 'نصائح العمل في بيئة Strict Mode',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تفعيل <code>"strict": true</code> في ملف tsconfig.json، وتجنب استخدام النوع <code>any</code> واستبداله بـ <code>unknown</code> لفرض الفحص المنطقي قبل المعالجة.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'أيهما أفضل لتعريف الـ Props: interface أم type؟',
        a: 'كلاهما ممتاز؛ يُفضل الكثير استخدام interface لقابليته للتوسعة (extends) أو type للاتحادات (Unions) والخصائص الحسابية المتقدمة.'
      }
    ]
  },
  {
    slug: 'reactjs-server-components-nextjs',
    title: 'مكونات الخادم في ريأكت (React Server Components) و Next.js App Router',
    metaTitle: 'دليل React Server Components في Next.js | يوسف الغمري',
    metaDesc: 'شرح عميق لمكونات خادم ريأكت RSC: ما هي، كيف تقلل حجم الجافاسكريبت إلى صفر كيلوبايت، والفرق بين Server و Client Components في Next.js.',
    category: 'react',
    categoryName: 'ريأكت (React.js)',
    date: '2025-02-14',
    readTime: '10 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/react-guide.svg',
    imageAlt: 'مكونات خادم ريأكت RSC',
    relatedServiceUrl: '/ar/services/frontend-development.html',
    relatedServiceName: 'تطوير تطبيقات Next.js و Full-Stack',
    intro: 'تمثل مكونات الخادم (RSC) التحول الأكبر في فلسفة ريأكت منذ إطلاقها. تتيح لك كتابة مكونات ريأكت تعمل حصرياً على السيرفر، وتصل مباشرة إلى قواعد البيانات ونظام الملفات دون إرسال كيلوبايت واحد من الجافاسكريبت إلى متصفح العميل.',
    toc: [
      { id: 'rsc-concept', text: '1. ما هي فكرة React Server Components؟' },
      { id: 'server-vs-client', text: '2. متى تستخدم Server Component ومتى تستخدم Client Component؟' },
      { id: 'zero-bundle-size', text: '3. كيف تحقق صفر كيلوبايت في حزمة الجافاسكريبت؟' },
      { id: 'data-fetching-rsc', text: '4. جلب البيانات المباشر باستخدام async/await' },
      { id: 'server-actions', text: '5. معالجة النماذج بدون مسارات API عبر Server Actions' }
    ],
    sections: [
      {
        id: 'rsc-concept',
        title: 'ما هي فكرة React Server Components؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            في النموذج التقليدي، يتم تنزيل كود المكونات في المتصفح وتنفيذه محلياً. أما في RSC، يتم تنفيذ المكون وتجهيز شجرة العناصر على السيرفر وإرسال تمثيل رقمي خفيف للمتصفح دون الحاجة لتحميل مكتبات التحليل الثقيلة في جهاز المستخدم.
          </p>
        `
      },
      {
        id: 'server-vs-client',
        title: 'متى تستخدم Server Component ومتى تستخدم Client Component؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            <strong>Server Components (افتراضياً):</strong> لجلب البيانات، قراءة قواعد البيانات، إخفاء المفاتيح السرية، وتقليل كود الواجهة.<br>
            <strong>Client Components (مع <code>'use client'</code>):</strong> للأزرار التفاعلية، مدخلات النماذج، الاستماع للأحداث (onClick)، واستخدام الخطافات (useState, useEffect).
          </p>
        `
      },
      {
        id: 'zero-bundle-size',
        title: 'كيف تحقق صفر كيلوبايت في حزمة الجافاسكريبت؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            إذا قمت باستيراد مكتبة ضخمة لتنسيق التواريخ أو تحويل كود Markdown داخل Server Component، فإن كود المكتبة يظل على السيرفر فقط ويتم إرسال ناتج النص الصافي إلى المتصفح دون أي أثر لحجم المكتبة في حزمة العميل.
          </p>
        `
      },
      {
        id: 'data-fetching-rsc',
        title: 'جلب البيانات المباشر باستخدام async/await',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يمكنك كتابة مكون الخادم كدالة غير متزامنة <code>async function</code> واستدعاء قاعدة البيانات أو الـ API بكلمة <code>await</code> مباشرة دون الحاجة لـ useEffect أو حالات التحميل المعقدة:
          </p>
          <pre class="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-emerald-400 font-mono text-xs overflow-x-auto my-4">
export default async function ProductsPage() {
  const products = await db.query('SELECT * FROM products');
  return (
    &lt;div&gt;
      {products.map(p => &lt;ProductCard key={p.id} data={p} /&gt;)}
    &lt;/div&gt;
  );
}
          </pre>
        `
      },
      {
        id: 'server-actions',
        title: 'معالجة النماذج بدون مسارات API عبر Server Actions',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تتيح إجراءات الخادم استدعاء دوال برمجية تعمل على السيرفر مباشرة من نموذج HTML عبر خاصية <code>action</code>، مع إعادة التحقق من صحة الكاش تلقائياً (Revalidation).
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل يمكن استدعاء خطاف useState داخل Server Component؟',
        a: 'لا، خطافات الحالة والتفاعل تتطلب تشغيلها في متصفح العميل، لذا يجب تحويل المكون إلى Client Component عبر كتابة <code>\'use client\'</code> في أول سطر بالملف.'
      }
    ]
  },
  {
    slug: 'reactjs-testing-strategy',
    title: 'اختبار تطبيقات ريأكت: دليل المطورين لاختبارات الوحدات والتكامل مع Vitest و RTL',
    metaTitle: 'دليل اختبار تطبيقات React مع Vitest و React Testing Library | يوسف الغمري',
    metaDesc: 'كيفية كتابة اختبارات موثوقة لتطبيقات ريأكت: Unit Tests, Integration Tests, محاكاة الـ API باستخدام MSW، واختبارات E2E مع Playwright.',
    category: 'react',
    categoryName: 'ريأكت (React.js)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/react-guide.svg',
    imageAlt: 'اختبار تطبيقات ريأكت',
    relatedServiceUrl: '/ar/services/frontend-development.html',
    relatedServiceName: 'هندسة الجودة واختبار البرمجيات',
    intro: 'كتابة الاختبارات المؤتمتة ليست رفاهية بل ضمانة استقرار التطبيق وثقة المطورين عند إضافة ميزات جديدة. يشرح هذا الدليل كيفية تطبيق مبادئ React Testing Library و Vitest لاختبار سلوك المستخدم الحقيقي.',
    toc: [
      { id: 'testing-philosophy', text: '1. فلسفة الاختبار: اختبر السلوك لا تفاصيل التنفيذ' },
      { id: 'setup-vitest', text: '2. إعداد بيئة Vitest و React Testing Library' },
      { id: 'user-events', text: '3. محاكاة تفاعلات المستخدم عبر @testing-library/user-event' },
      { id: 'mocking-apis-msw', text: '4. محاكاة طلبات الشبكة باحترافية عبر Mock Service Worker' },
      { id: 'e2e-playwright', text: '5. استكمال الهرم باختبارات الطرف للطرف (E2E) مع Playwright' }
    ],
    sections: [
      {
        id: 'testing-philosophy',
        title: 'فلسفة الاختبار: اختبر السلوك لا تفاصيل التنفيذ',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تعتمد React Testing Library على مبدأ ذهبي: "كلما كانت اختباراتك تشبه الطريقة التي يُستخدم بها برنامجك فعلياً، كلما زادت ثقتك فيه". لا تهتم بأسماء المتغيرات الداخلية بل اختبر ما يراه المستخدم ويضغط عليه.
          </p>
        `
      },
      {
        id: 'setup-vitest',
        title: 'إعداد بيئة Vitest و React Testing Library',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يُعد Vitest البديل الحديث والأسرع لـ Jest بفضل توافقه التام مع إعدادات Vite وتشغيله السريع للاختبارات بالتوازي مع محاكاة بيئة المتصفح عبر jsdom أو happy-dom.
          </p>
        `
      },
      {
        id: 'user-events',
        title: 'محاكاة تفاعلات المستخدم عبر @testing-library/user-event',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            استخدام <code>userEvent.click()</code> و <code>userEvent.type()</code> لمحاكاة تصرفات المستخدم الطبيعية بما في ذلك تركيز الحقول والأحداث الفرعية.
          </p>
        `
      },
      {
        id: 'mocking-apis-msw',
        title: 'محاكاة طلبات الشبكة باحترافية عبر Mock Service Worker',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تتيح أداة MSW اعتراض طلبات الشبكة على مستوى السيرفر وتغذيتها باستجابات JSON واقعية لاختبار حالات النجاح والخطأ وحالات انقطاع الشبكة دون استدعاء الخادم الحقيقي.
          </p>
        `
      },
      {
        id: 'e2e-playwright',
        title: 'استكمال الهرم باختبارات الطرف للطرف (E2E) مع Playwright',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تشغيل متصفح كروميوم حقيقي واختبار رحلة المستخدم الكاملة من تسجيل الدخول وإضافة المنتجات وإتمام عملية الدفع لضمان عمل كافة أجزاء النظام بتناغم تام.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'كم يجب أن تكون نسبة تغطية الكود (Test Coverage)؟',
        a: 'الهدف ليس الوصول إلى 100% بل التركيز على تغطية المسارات الحرجة للعمليات التجارية (Critical User Journeys) بنسبة 75-85% لتفادي هشاشة الاختبارات.'
      }
    ]
  },
  {
    slug: 'reactjs-routing-with-react-router-v7',
    title: 'توجيه المسارات في ريأكت: الدليل الشامل لـ React Router v7 الحديث',
    metaTitle: 'دليل استخدام React Router v7 لتوجيه مسارات تطبيقات ريأكت | يوسف الغمري',
    metaDesc: 'تعلم أسرار React Router v7 الحديث: التوجيه القائم على البيانات Data Routers، محملات البيانات Loaders، والإجراءات Actions وحماية المسارات.',
    category: 'react',
    categoryName: 'ريأكت (React.js)',
    date: '2025-02-14',
    readTime: '8 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/react-guide.svg',
    imageAlt: 'توجيه المسارات في ريأكت',
    relatedServiceUrl: '/ar/services/frontend-development.html',
    relatedServiceName: 'تطوير تطبيقات الويب أحادية الصفحة SPA',
    intro: 'يمثل React Router المعيار الأساسي لتوجيه مسارات تطبيقات الصفحة الواحدة (SPA). مع صدور الإصدار السابع (v7) ودمج قدرات إطار عمل Remix، أصبح التوجيه يتعامل مع جلب البيانات ومعالجة الأخطاء كعناصر أصيلة في تعريف المسار.',
    toc: [
      { id: 'data-routers', text: '1. ثورة الموجهات القائمة على البيانات (createBrowserRouter)' },
      { id: 'loaders-actions', text: '2. جلب البيانات مسبقاً عبر Loaders ومعالجة النماذج بـ Actions' },
      { id: 'error-boundaries', text: '3. عزل الانهيارات عبر حدود الأخطاء (Error Boundaries)' },
      { id: 'nested-routes', text: '4. المسارات المتداخلة ونظام Outlet المتقدم' },
      { id: 'auth-guards', text: '5. حماية المسارات الخاصة بالمصادقة (Auth Guards)' }
    ],
    sections: [
      {
        id: 'data-routers',
        title: 'ثورة الموجهات القائمة على البيانات (createBrowserRouter)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            انتقلت النسخ الحديثة من مجرد مطابقة الروابط إلى جلب بيانات الصفحة بالتوازي مع تحميل ملفات الجافاسكريبت، مما يقضي تماماً على ظاهرة شاشات التحميل المتتالية (Waterfalls).
          </p>
        `
      },
      {
        id: 'loaders-actions',
        title: 'جلب البيانات مسبقاً عبر Loaders ومعالجة النماذج بـ Actions',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تعريف دالة <code>loader</code> لجلب بيانات المقال أو المستخدم قبل رسم المكون، واستهلاكها بنقرة واحدة عبر خطاف <code>useLoaderData()</code> النظيف.
          </p>
        `
      },
      {
        id: 'error-boundaries',
        title: 'عزل الانهيارات عبر حدود الأخطاء (Error Boundaries)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            في حال فشل جلب البيانات أو حدوث خطأ برمجي في صفحة معينة، يقوم <code>errorElement</code> المخصص بعرض واجهة خطأ ودية داخل نفس الإطار دون التسبب في انهيار التطبيق بالكامل.
          </p>
        `
      },
      {
        id: 'nested-routes',
        title: 'المسارات المتداخلة ونظام Outlet المتقدم',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            بناء لوحات تحكم متعددة المستويات تشترك في القوائم الجانبية والهيدر الثابت مع تبديل المحتوى الفرعي فقط عبر وسم <code>&lt;Outlet /&gt;</code>.
          </p>
        `
      },
      {
        id: 'auth-guards',
        title: 'حماية المسارات الخاصة بالمصادقة (Auth Guards)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            إنشاء مكون <code>ProtectedRoute</code> يفحص حالة تسجيل دخول المستخدم وصلاحياته، وتوجيهه إلى صفحة الدخول تلقائياً مع حفظ الرابط الأصلي الذي كان يحاول الوصول إليه.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل يدعم React Router v7 العرض من جهة السيرفر (SSR)؟',
        a: 'نعم، بفضل دمجه مع قدرات Remix، يدعم v7 توليد الصفحات في السيرفر أو البناء الثابت المتكامل.'
      }
    ]
  },
  {
    slug: 'reactjs-micro-frontends-architecture',
    title: 'معمارية الواجهات الموزعة (Micro Frontends) في ريأكت: بناء أنظمة رقمية ضخمة',
    metaTitle: 'دليل Micro Frontends في ريأكت وتطبيق Module Federation | يوسف الغمري',
    metaDesc: 'كيف تبني تطبيقات ريأكت عملاقة بنمط Micro Frontends: استخدام Webpack Module Federation، مشاركة التبعيات، وتنسيق الفرق المستقلة.',
    category: 'react',
    categoryName: 'ريأكت (React.js)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/react-guide.svg',
    imageAlt: 'معمارية الواجهات الموزعة Micro Frontends في ريأكت',
    relatedServiceUrl: '/ar/services/frontend-development.html',
    relatedServiceName: 'تصميم وهندسة النظم البرمجية الكبيرة',
    intro: 'عندما ينمو تطبيق المؤسسة ليعمل عليه عشرات المطورين في فرق متعددة، يتحول التطبيق المتجانس (Monolith) إلى عائق للإنتاجية. تقدم بنية Micro Frontends حلاً هندسياً جذرياً عبر تقسيم الواجهة إلى تطبيقات مستقلة تُنشر بمعزل عن بعضها البعض.',
    toc: [
      { id: 'concept-benefits', text: '1. ما هي بنية الواجهات الموزعة (Micro Frontends)؟' },
      { id: 'module-federation', text: '2. ثورة Webpack Module Federation و Vite Plugin' },
      { id: 'shared-dependencies', text: '3. إدارة ومشاركة المكتبات الأساسية بدون تكرار' },
      { id: 'cross-app-communication', text: '4. بروتوكولات التواصل وتبادل الأحداث بين التطبيقات' },
      { id: 'deployment-ci-cd', text: '5. خطوط النشر المستقل المستمر (CI/CD Pipelines)' }
    ],
    sections: [
      {
        id: 'concept-benefits',
        title: 'ما هي بنية الواجهات الموزعة (Micro Frontends)؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            هي تطبيق لمفهوم الخدمات المصغرة (Microservices) على طبقة واجهة المستخدم، حيث يمتلك فريق مستقل صفحة الدفع وفريق آخر كتالوج المنتجات، ويتم دمج هذه التطبيقات في واجهة مستخدم موحدة يراها العميل كمنصة واحدة متجانسة.
          </p>
        `
      },
      {
        id: 'module-federation',
        title: 'ثورة Webpack Module Federation و Vite Plugin',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تتيح تقنية Module Federation لتطبيق ريأكت (المضيف Host) تحميل مكونات تم بناؤها ونشرها في تطبيق آخر (البعيد Remote) أثناء وقت التشغيل (Runtime) دون الحاجة لإعادة بناء التطبيق المضيف كاملاً.
          </p>
        `
      },
      {
        id: 'shared-dependencies',
        title: 'إدارة ومشاركة المكتبات الأساسية بدون تكرار',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تضمن التكوينات مشاركة نسخة واحدة فقط من مكتبة <code>react</code> و <code>react-dom</code> بين جميع التطبيقات المصغرة، مما يمنع تنزيل نسخ مكررة ويحافظ على سرعة التطبيق.
          </p>
        `
      },
      {
        id: 'cross-app-communication',
        title: 'بروتوكولات التواصل وتبادل الأحداث بين التطبيقات',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            استخدام Custom DOM Events أو قنوات البث البرمجية (BroadcastChannel API) لتبادل البيانات الحيوية مثل أحداث تسجيل الخروج أو تحديث عدد عناصر السلة دون خلق ارتباط وثيق (Tight Coupling) بين الأكواد.
          </p>
        `
      },
      {
        id: 'deployment-ci-cd',
        title: 'خطوط النشر المستقل المستمر (CI/CD Pipelines)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يستطيع كل فريق نشر تحديثاته إلى خوادم الإنتاج عدة مرات في اليوم دون الحاجة للتنسيق المعقد مع الفرق الأخرى، مما يرفع سرعة دوران المنتجات الرقمية.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل ننصح ببدء أي مشروع بنظام Micro Frontends؟',
        a: 'لا، البداية بتطبيق متجانس منظم (Modular Monolith) هي الأفضل للشركات الناشئة؛ يتم اللجوء للـ Micro Frontends فقط عندما يزداد حجم الفريق عن 30-50 مطوراً ويصبح التنسيق عائقاً للنمو.'
      }
    ]
  },
  {
    slug: 'reactjs-design-system-and-storybook',
    title: 'بناء نظام تصميم متكامل (Design System) في ريأكت باستخدام Storybook و Tailwind',
    metaTitle: 'دليل بناء Design System متكامل في React مع Storybook | يوسف الغمري',
    metaDesc: 'كيف تبني مكتبة مكونات ونظام تصميم احترافي لشركتك: توثيق المكونات بـ Storybook، توحيد الألوان والخطوط مع Tailwind CSS، ونشرها كحزمة NPM.',
    category: 'react',
    categoryName: 'ريأكت (React.js)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/react-guide.svg',
    imageAlt: 'بناء Design System في ريأكت مع Storybook',
    relatedServiceUrl: '/ar/services/frontend-development.html',
    relatedServiceName: 'تصميم وبرمجة أنظمة التصميم UI Systems',
    intro: 'يعتبر نظام التصميم (Design System) اللغة المشتركة التي توحد جهود فرق التصميم وفرق البرمجة. يوضح هذا المقال كيفية بناء مكتبة مكونات قوية وموثقة بالكامل باستخدام React و Tailwind CSS و Storybook.',
    toc: [
      { id: 'design-tokens', text: '1. تأسيس رموز التصميم (Design Tokens)' },
      { id: 'atomic-design', text: '2. منهجية التصميم الذري (Atomic Design)' },
      { id: 'storybook-docs', text: '3. توثيق المكونات واختبارها بصرياً في Storybook' },
      { id: 'accessibility-a11y', text: '4. إتاحة الوصول الرقمي ومعايير WCAG' },
      { id: 'npm-package-release', text: '5. حزم النظام ونشره في مستودع NPM الداخلي' }
    ],
    sections: [
      {
        id: 'design-tokens',
        title: 'تأسيس رموز التصميم (Design Tokens)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تعريف القيم الثابتة للهوية مثل لوحة الألوان المعتمدة، مقاييس الخطوط، المسافات، ونصف قطر الانحناء (Border Radius) كمتغيرات CSS مدمجة مع إعدادات Tailwind CSS لضمان عدم خروج أي مطور عن الهوية البصرية.
          </p>
        `
      },
      {
        id: 'atomic-design',
        title: 'منهجية التصميم الذري (Atomic Design)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تنظيم المكونات هرمياً: <strong>الذرات (Atoms)</strong> مثل الأزرار والأيقونات وحقول الإدخال، <strong>الجزيئات (Molecules)</strong> مثل حقل البحث المزود بزر، <strong>والكائنات (Organisms)</strong> مثل الهيدر وبطاقات المنتجات.
          </p>
        `
      },
      {
        id: 'storybook-docs',
        title: 'توثيق المكونات واختبارها بصرياً في Storybook',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يوفر Storybook بيئة عمل معزولة ومستقلة لتطوير المكونات قبل ربطها بالتطبيقات الحقيقية، مع كتابة قصص تفاعلية (Stories) توثق كافة حالات المكون (Loading, Disabled, Error).
          </p>
        `
      },
      {
        id: 'accessibility-a11y',
        title: 'إتاحة الوصول الرقمي ومعايير WCAG',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            دمج مكتبة <code>@storybook/addon-a11y</code> لفحص تباين الألوان تلقائياً، والتأكد من دعم التنقل الكامل عبر لوحة المفاتيح وقارئات الشاشة (ARIA Attributes) وفق معايير WCAG 2.1 العالمية.
          </p>
        `
      },
      {
        id: 'npm-package-release',
        title: 'حزم النظام ونشره في مستودع NPM الداخلي',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            بناء الحزمة عبر أدوات مثل Vite Library Mode أو tsup لتوليد ملفات ESM و CJS مع ملفات التعريف <code>.d.ts</code>، مما يسمح لكافة فرق الشركة باستيراد المكونات بنقرة واحدة: <code>import { Button } from '@company/ui'</code>.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'ما هو العائد الاستثماري لبناء Design System خاص بالشركة؟',
        a: 'يقلل زمن تطوير الميزات الجديدة بنسبة تفوق 40%، ويوحد التجربة البصرية عبر كافة منصات وتطبيقات الشركة، ويقضي على الكود المكرر.'
      }
    ]
  }
];

export const nodeArticles: ArticleItem[] = [
  {
    slug: 'what-is-nodejs',
    title: 'ما هي بيئة Node.js؟ دليلك الشامل لمحرك تشغيل الجافاسكريبت على الخوادم',
    metaTitle: 'ما هو Node.js؟ دليل شامل لبيئة تشغيل الجافاسكريبت | يوسف الغمري',
    metaDesc: 'دليل متكامل عن Node.js: كيف يعمل محرك V8، دورة الأحداث Event Loop، معمارية المعالجة غير المتزامنة، وأبرز استخداماته في بناء الأنظمة السريعة.',
    category: 'node',
    categoryName: 'نود جي إس (Node.js)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/nodejs-guide.svg',
    imageAlt: 'دليل بيئة تشغيل Node.js',
    relatedServiceUrl: '/ar/services/backend-development.html',
    relatedServiceName: 'تطوير الخوادم والأنظمة الخلفية',
    intro: 'نقلت بيئة Node.js لغة الجافاسكريبت من مجرد لغة تعمل داخل متصفح المستخدم إلى واحدة من أقوى لغات الخوادم وأكثرها انتشاراً في العالم. بفضل محرك V8 السريع ومعمارية الأحداث، أصبحت نود جي إس الخيار الأول لبناء واجهات API الفائقة السرعة وتطبيقات الوقت الفعلي.',
    toc: [
      { id: 'definition', text: '1. ما هي Node.js وكيف نشأت؟' },
      { id: 'v8-engine', text: '2. محرك V8 ومكتبة libuv' },
      { id: 'event-loop', text: '3. كيف تعمل دورة الأحداث (Event Loop) والمعالجة غير المعطلة؟' },
      { id: 'use-cases', text: '4. ما هي أفضل حالات استخدام Node.js؟' },
      { id: 'npm-ecosystem', text: '5. مستودع حزم NPM: أكبر تجمع للمكتبات عالمياً' }
    ],
    sections: [
      {
        id: 'definition',
        title: 'ما هي Node.js وكيف نشأت؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            ابتكر مهندس البرمجيات Ryan Dahl بيئة Node.js في عام 2009. كانت المشكلة الأساسية التي سعى لحلها هي بطء خوادم الويب التقليدية مثل Apache في معالجة آلاف الاتصالات المتزامنة بسبب تخصيص خيط معالجة (Thread) منفصل لكل طلب.
          </p>
        `
      },
      {
        id: 'v8-engine',
        title: 'محرك V8 ومكتبة libuv',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تعتمد نود جي إس على محرك Google V8 المكتوب بلغة C++ والذي يقوم بترجمة كود الجافاسكريبت مباشرة إلى لغة الآلة، بينما تتولى مكتبة libuv المكتوبة بـ C إدارة المهام غير المتزامنة عبر مسبح خيوط المعالجة (Thread Pool) ونظام الملفات والشبكة.
          </p>
        `
      },
      {
        id: 'event-loop',
        title: 'كيف تعمل دورة الأحداث (Event Loop) والمعالجة غير المعطلة؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تعمل Node.js بنموذج أحادي الخيط وغير حاجب (Single-threaded, Non-blocking I/O). عندما يطلب الخادم قراءة ملف أو استعلام قاعدة بيانات، فإنه لا ينتظر انتهاء العملية بل يفوضها للنظام ويستمر في استقبال طلبات جديدة، وعندما تنتهي العملية تعود استجابتها عبر طابور الأحداث.
          </p>
        `
      },
      {
        id: 'use-cases',
        title: 'ما هي أفضل حالات استخدام Node.js؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تبرع نود جي إس في التطبيقات ذات معدل الإدخال والإخراج المرتفع (I/O Intensive) مثل: خوادم RESTful و GraphQL APIs، تطبيقات المراسلة الفورية والدردشة، منصات بث المحتوى، وأنظمة إنترنت الأشياء (IoT).
          </p>
        `
      },
      {
        id: 'npm-ecosystem',
        title: 'مستودع حزم NPM: أكبر تجمع للمكتبات عالمياً',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يضم مدير الحزم NPM أكثر من 2 مليون حزمة برمجية جاهزة، مما يسرع عملية التطوير بشكل لا يضاهى في أي لغة برمجة أخرى.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل Node.js لغة برمجة منفصلة؟',
        a: 'لا، Node.js هي بيئة تشغيل (Runtime Environment) تنفذ كود لغة الجافاسكريبت خارج المتصفح.'
      }
    ]
  },
  {
    slug: 'nodejs-rest-api-with-express-and-typescript',
    title: 'بناء واجهات برمجية REST API قوية باستخدام Node.js و Express و TypeScript',
    metaTitle: 'دليل بناء REST API احترافي بـ Node.js و Express و TypeScript | يوسف الغمري',
    metaDesc: 'دليل عملي لبناء وتصميم واجهة برمجية RESTful API متكاملة: تقسيم الطبقات Controller & Service، التحقق بـ Zod، وتوثيق Swagger.',
    category: 'node',
    categoryName: 'نود جي إس (Node.js)',
    date: '2025-02-14',
    readTime: '10 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/nodejs-guide.svg',
    imageAlt: 'بناء واجهات برمجية REST API بـ Node.js',
    relatedServiceUrl: '/ar/services/api-development-integration.html',
    relatedServiceName: 'تطوير وتكامل واجهات البرمجة API',
    intro: 'يعد بناء واجهة برمجية RESTful API مستقرة وقابلة للتوسع حجر الأساس لأي مشروع رقمي ناجح. يقدم هذا الدليل المنهجية الهندسية لبناء خادم Express بنظام الطبقات المنفصلة وأمان الأنواع الصارم عبر TypeScript.',
    toc: [
      { id: 'project-structure', text: '1. هيكل المجلدات والطبقات المعمارية (Layered Architecture)' },
      { id: 'validation-zod', text: '2. التحقق الصارم من صحة المدخلات باستخدام Zod' },
      { id: 'error-handling', text: '3. برمجية وسيطة مركزية لمعالجة الأخطاء (Global Error Handler)' },
      { id: 'orm-database', text: '4. الاتصال بقاعدة البيانات عبر Prisma أو Drizzle ORM' },
      { id: 'swagger-docs', text: '5. التوثيق التلقائي لنقاط الوصول عبر OpenAPI/Swagger' }
    ],
    sections: [
      {
        id: 'project-structure',
        title: 'هيكل المجلدات والطبقات المعمارية (Layered Architecture)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            فصل الكود إلى ثلاث طبقات أساسية: <strong>الموجهات والتحكم (Routes & Controllers)</strong> لاستقبال الطلب وإرسال الاستجابة، <strong>طبقة الخدمات (Services)</strong> لتنفيذ منطق العمليات، و <strong>طبقة المستودعات (Repositories)</strong> للتخاطب مع قاعدة البيانات.
          </p>
        `
      },
      {
        id: 'validation-zod',
        title: 'التحقق الصارم من صحة المدخلات باستخدام Zod',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            كتابة مخططات تحقق صارمة للمدخلات، ورفض أي طلب غير مطابق فوراً قبل وصوله لمنطق العمليات، مما يحمي التطبيق من البيانات التالفة وحقن الأكواد:
          </p>
          <pre class="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-emerald-400 font-mono text-xs overflow-x-auto my-4">
import { z } from 'zod';

export const CreateUserSchema = z.object({
  email: z.string().email('صيغة البريد الإلكتروني غير صحيحة'),
  password: z.string().min(8, 'كلمة المرور يجب أن لا تقل عن 8 خانات'),
  name: z.string().min(2, 'الاسم مطلوب')
});
          </pre>
        `
      },
      {
        id: 'error-handling',
        title: 'برمجية وسيطة مركزية لمعالجة الأخطاء (Global Error Handler)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            إنشاء Middleware مخصصة في Express تلتقط كافة الاستثناءات غير المعالجة، وترسل استجابة JSON موحدة تحتوي على رمز الخطأ والرسالة دون تسريب تفاصيل حساسة عن السيرفر أو قواعد البيانات.
          </p>
        `
      },
      {
        id: 'orm-database',
        title: 'الاتصال بقاعدة البيانات عبر Prisma أو Drizzle ORM',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            استخدام أحدث أدوات ORM مثل Drizzle أو Prisma يضمن أمان كتابة الاستعلامات ومنع حقن SQL تلقائياً وتوفير أنواع TypeScript مشتقة من الجداول مباشرة.
          </p>
        `
      },
      {
        id: 'swagger-docs',
        title: 'التوثيق التلقائي لنقاط الوصول عبر OpenAPI/Swagger',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            توليد واجهة Swagger تفاعلية تتيح للمطورين الخارجيين وفرق تطبيقات الموبايل تجربة نقاط الوصول وقراءة متطلبات الحقول بصرياً بسهولة تامة.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'لماذا نفضل Express على أطر العمل الأخرى؟',
        a: 'Express هي المنصة الأكثر نضجاً واستقراراً في بيئة نود جي إس، وتتمتع بآلاف البرمجيات الوسيطة الجاهزة والدعم المجتمعي الهائل.'
      }
    ]
  },
  {
    slug: 'nodejs-event-loop-and-asynchronous-programming',
    title: 'فهم عميق لدورة الأحداث في Node.js: كيف تعمل Event Loop ومراحل التنفيذ؟',
    metaTitle: 'شرح دورة الأحداث في Node.js بالتفصيل (Event Loop) | يوسف الغمري',
    metaDesc: 'اكتشف الأسرار الداخلية لدورة الأحداث Event Loop في Node.js: مراحل Timers, I/O Polling, Check Phase, والفرق بين microtasks و macrotasks.',
    category: 'node',
    categoryName: 'نود جي إس (Node.js)',
    date: '2025-02-14',
    readTime: '10 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/nodejs-guide.svg',
    imageAlt: 'شرح دورة الأحداث Event Loop في Node.js',
    relatedServiceUrl: '/ar/services/backend-development.html',
    relatedServiceName: 'هندسة معمارية النظم البرمجية',
    intro: 'يعتبر استيعاب دورة الأحداث (Event Loop) هو الفارق الجوهري بين مبرمج نود جي إس المبتدئ والمهندس المحترف. نتعمق في هذا المقال التقني في كيفية إدارة نود للمهام غير المتزامنة وطوابير التنفيذ في الخلفية.',
    toc: [
      { id: 'single-thread-paradox', text: '1. معضلة الخيط الواحد: كيف تخدم ملايين الطلبات بخيط معالجة واحد؟' },
      { id: 'six-phases', text: '2. المراحل الست لدورة الأحداث في libuv' },
      { id: 'nexttick-vs-setimmediate', text: '3. المعركة الخالدة: process.nextTick مقابل setImmediate' },
      { id: 'blocking-event-loop', text: '4. كيف تتجنب تجميد دورة الأحداث (Don\'t Block the Event Loop)' },
      { id: 'worker-threads', text: '5. حل العمليات الحسابية الثقيلة عبر Worker Threads' }
    ],
    sections: [
      {
        id: 'single-thread-paradox',
        title: 'معضلة الخيط الواحد: كيف تخدم ملايين الطلبات بخيط معالجة واحد؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            ينفذ كود الجافاسكريبت الخاص بك في خيط رئيسي واحد فقط (Main Thread). السر يكمن في أن العمليات التي تستغرق وقتاً طويلاً (مثل قراءة القرص أو انتظار رد الشبكة) لا تتم في هذا الخيط بل يتم تفويضها للنواة (Kernel) أو لمسبح الخيوط الخاص بـ libuv المكتوب بلغة C.
          </p>
        `
      },
      {
        id: 'six-phases',
        title: 'المراحل الست لدورة الأحداث في libuv',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تمر دورة الأحداث بست مراحل متتالية: <strong>Timers</strong> (معالجة setTimeout/setInterval)، <strong>Pending Callbacks</strong>، <strong>Idle/Prepare</strong>، <strong>Poll</strong> (استقبال اتصالات الشبكة وقراءة البيانات)، <strong>Check</strong> (تنفيذ دوال setImmediate)، و <strong>Close Callbacks</strong> (إغلاق مقابس السيرفر).
          </p>
        `
      },
      {
        id: 'nexttick-vs-setimmediate',
        title: 'المعركة الخالدة: process.nextTick مقابل setImmediate',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            لا تنتمي <code>process.nextTick</code> لدورة الأحداث مباشرة، بل تنفذ في طابور الـ Microtasks فور انتهاء العملية الحالية وقبل انتقال الـ Event Loop إلى أي مرحلة تالية، بينما تنفذ <code>setImmediate</code> في مرحلة Check المحددة.
          </p>
        `
      },
      {
        id: 'blocking-event-loop',
        title: 'كيف تتجنب تجميد دورة الأحداث (Don\'t Block the Event Loop)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تجنب الدوال التزامنية المسببة للانسداد مثل <code>fs.readFileSync</code>، والعمليات الحسابية المعقدة لتشفير النصوص في الخيط الرئيسي، ومصفوفات JSON العملاقة ذات ملايين العناصر التي تجمد استجابة السيرفر لكافة المستخدمين.
          </p>
        `
      },
      {
        id: 'worker-threads',
        title: 'حل العمليات الحسابية الثقيلة عبر Worker Threads',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            إذا كان تطبيقك يتطلب معالجة صور، ضغط ملفات، أو خوارزميات تعلم آلي، استخدم وحدة <code>worker_threads</code> المدمجة لتشغيل تلك العمليات في خيوط معالجة مستقلة تماماً بالتوازي مع الخيط الرئيسي.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'كم عدد الخيوط الافتراضية في مسبح libuv؟',
        a: 'العدد الافتراضي هو 4 خيوط، ويمكن زيادته برمجياً عبر المتغير <code>UV_THREADPOOL_SIZE=128</code> للاستفادة القصوى من معالجات السيرفرات المتعددة.'
      }
    ]
  },
  {
    slug: 'nodejs-streams-and-buffers',
    title: 'معالجة البيانات الضخمة في Node.js: التدفقات (Streams) والمخازن المؤقتة (Buffers)',
    metaTitle: 'دليل التدفقات Streams والمخازن المؤقتة في Node.js | يوسف الغمري',
    metaDesc: 'تعلم كيف تتعامل مع الملفات الجيجابايت في Node.js باستهلاك بضعة ميجابايت من الذاكرة فقط: Readable, Writable, Transform Streams و pipeline.',
    category: 'node',
    categoryName: 'نود جي إس (Node.js)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/nodejs-guide.svg',
    imageAlt: 'معالجة البيانات الضخمة في Node.js بالتدفقات',
    relatedServiceUrl: '/ar/services/backend-development.html',
    relatedServiceName: 'تطوير النظم والتعامل مع البيانات الضخمة',
    intro: 'إذا حاولت قراءة ملف فيديو أو سجل بيانات بحجم 5 جيجابايت دفعة واحدة في الذاكرة العشوائية للخادم، سينهار التطبيق فوراً بسبب خطأ تجاوز الذاكرة (Out of Memory). الحل السحري الذي تقدمه نود جي إس هو التدفقات (Streams).',
    toc: [
      { id: 'what-are-buffers', text: '1. ما هي المخازن المؤقتة (Buffers) والبيانات الثنائية؟' },
      { id: 'four-stream-types', text: '2. الأنواع الأربعة للتدفقات (Readable, Writable, Duplex, Transform)' },
      { id: 'backpressure', text: '3. مشكلة الضغط العكسي (Backpressure) وكيفية التعامل معها' },
      { id: 'pipeline-api', text: '4. استخدام pipeline الآمنة من أخطاء التسريب (Memory Leaks)' },
      { id: 'practical-usecase', text: '5. مثال تطبيقي: ضغط ملف ضخم وبثه عبر الشبكة' }
    ],
    sections: [
      {
        id: 'what-are-buffers',
        title: 'ما هي المخازن المؤقتة (Buffers) والبيانات الثنائية؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            كائن Buffer هو مساحة مخصصة من الذاكرة الخام خارج محرك V8 مخصصة لتخزين سلاسل البايتات الثنائية (Binary Data). يتيح لـ Node.js التعامل المباشر مع ملفات الصور والفيديوهات وحزم TCP بكفاءة عالية.
          </p>
        `
      },
      {
        id: 'four-stream-types',
        title: 'الأنواع الأربعة للتدفقات (Readable, Writable, Duplex, Transform)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            <strong>Readable:</strong> لتدفقات القراءة (مثل قراءة ملف من القرص)، <strong>Writable:</strong> لتدفقات الكتابة، <strong>Duplex:</strong> يدعم القراءة والكتابة معاً (مثل اتصالات الشبكة TCP)، و <strong>Transform:</strong> لتعديل البيانات أثناء مرورها لحظياً (مثل ضغط البيانات عبر zlib أو تشفيرها).
          </p>
        `
      },
      {
        id: 'backpressure',
        title: 'مشكلة الضغط العكسي (Backpressure) وكيفية التعامل معها',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تحدث عندما تكون سرعة قراءة البيانات من المصدر أسرع بكثير من سرعة كتابتها في الوجهة، مما يملأ الذاكرة المؤقتة. توفر نود آليات ذكية لإيقاف القراءة مؤقتاً <code>pause()</code> حتى يتم تفريغ الـ Buffer ثم الاستئناف <code>resume()</code> تلقائياً.
          </p>
        `
      },
      {
        id: 'pipeline-api',
        title: 'استخدام pipeline الآمنة من أخطاء التسريب (Memory Leaks)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            بدلاً من استخدام دالة <code>readable.pipe(writable)</code> القديمة التي لا تغلق التدفقات عند حدوث خطأ، يوفر <code>stream/promises</code> دالة <code>pipeline</code> الحديثة التي تضمن الإغلاق الآمن لكافة المقابض وتنظيف الذاكرة تلقائياً عند أي استثناء.
          </p>
        `
      },
      {
        id: 'practical-usecase',
        title: 'مثال تطبيقي: ضغط ملف ضخم وبثه عبر الشبكة',
        content: `
          <pre class="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-emerald-400 font-mono text-xs overflow-x-auto my-4">
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';

async function compressFile(source: string, destination: string) {
  await pipeline(
    createReadStream(source),
    createGzip(),
    createWriteStream(destination)
  );
  console.log('تم ضغط الملف بنجاح بأقل استهلاك للذاكرة!');
}
          </pre>
        `
      }
    ],
    faqs: [
      {
        q: 'كم يبلغ حجم الحزمة (Chunk) الافتراضي في التدفقات؟',
        a: 'الحجم الافتراضي هو 64 كيلوبايت (16 كيلوبايت لكائنات Object Mode) ويمكن تعديله عبر خاصية highWaterMark.'
      }
    ]
  },
  {
    slug: 'nodejs-security-best-practices',
    title: 'أمان وتأمين تطبيقات Node.js: دليل حماية الخوادم والـ API من الاختراق',
    metaTitle: 'دليل أمان Node.js وتأمين الخوادم والـ API من الاختراق | يوسف الغمري',
    metaDesc: 'أفضل الممارسات الأمنية لتأمين تطبيقات نود جي إس: حماية الترويسات بـ Helmet، الوقاية من ReDoS، إدارة الـ JWT، وتدقيق التبعيات عبر npm audit.',
    category: 'node',
    categoryName: 'نود جي إس (Node.js)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/nodejs-guide.svg',
    imageAlt: 'أمان وتأمين تطبيقات Node.js',
    relatedServiceUrl: '/ar/services/backend-development.html',
    relatedServiceName: 'أمن المعلومات وحماية التطبيقات',
    intro: 'الأمان ليس مجرد خطوة إضافية تضاف في نهاية المشروع، بل هو عقلية هندسية ترافق كتابة كل سطر كود. يستعرض هذا الدليل أهم التهديدات الأمنية التي تواجه تطبيقات Node.js وكيفية صدها باحترافية.',
    toc: [
      { id: 'helmet-headers', text: '1. تأمين ترويسات المتصفح باستخدام حزمة Helmet' },
      { id: 'rate-limiting', text: '2. منع هجمات حجب الخدمة (DDoS) عبر Rate Limiting' },
      { id: 'jwt-security', text: '3. الإدارة الآمنة لرموز الدخول JWT والتخزين' },
      { id: 'redos-regex', text: '4. ثغرات التعابير النمطية الكارثية (ReDoS)' },
      { id: 'supply-chain-audit', text: '5. حماية سلسلة التوريد وتدقيق حزم npm audit' }
    ],
    sections: [
      {
        id: 'helmet-headers',
        title: 'تأمين ترويسات المتصفح باستخدام حزمة Helmet',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تثبيت حزمة <code>helmet</code> يضيف ترويسات أمان حيوية تلقائياً: مثل إخفاء ترويسة <code>X-Powered-By: Express</code> التي تفضح بنية السيرفر للمهاجمين، وتفعيل سياسة Content Security Policy (CSP)، ومنع تأطير الموقع داخل إطارات خبيثة (Clickjacking).
          </p>
        `
      },
      {
        id: 'rate-limiting',
        title: 'منع هجمات حجب الخدمة (DDoS) عبر Rate Limiting',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            استخدام <code>express-rate-limit</code> ومخزن Redis لتحديد عدد الطلبات المسموح بها لكل عنوان IP (مثل 100 طلب في الدقيقة كحد أقصى، و5 محاولات فقط لصفحة تسجيل الدخول) لردع هجمات التخمين الآلية.
          </p>
        `
      },
      {
        id: 'jwt-security',
        title: 'الإدارة الآمنة لرموز الدخول JWT والتخزين',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            توقيع الرموز بخوارزميات تشفير قوية مثل RS256 أو HS256 بمفاتيح سرية طويلة ومعقدة، وتخزين رموز التحديث (Refresh Tokens) داخل كوكيز محمية بخصائص <code>HttpOnly, Secure, SameSite=Strict</code> لمنع سرقتها عبر ثغرات XSS.
          </p>
        `
      },
      {
        id: 'redos-regex',
        title: 'ثغرات التعابير النمطية الكارثية (ReDoS)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            بعض التعابير النمطية الرديئة الصياغة تسبب تراجعاً خوارزمياً أسياً (Exponential Backtracking) عند إدخال نصوص خبيثة، مما يجمد الخيط الرئيسي للسيرفر تماماً. يجب تدقيق كافة الـ Regex وفحصها بأدوات كشف الثغرات.
          </p>
        `
      },
      {
        id: 'supply-chain-audit',
        title: 'حماية سلسلة التوريد وتدقيق حزم npm audit',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تشغيل فحص آلي <code>npm audit</code> في مسار الـ CI/CD، واستخدام أدوات مثل Snyk و Dependabot لتحديث المكتبات التابعة وسد الثغرات الأمنية المعروفة فور اكتشافها.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل يمكن تشغيل تطبيق Node.js بصلاحيات المستخدم الجذر (Root)؟',
        a: 'قطعاً لا؛ يجب تشغيل حاويات وتطبيقات نود تحت مستخدم نظام محدود الصلاحيات غير جذري (Non-root user) لتقليل ضرر أي اختراق محتمل.'
      }
    ]
  },
  {
    slug: 'nodejs-nestjs-enterprise-architecture',
    title: 'إطار عمل NestJS: البنية المعمارية المؤسسية المتكاملة لبيئة Node.js',
    metaTitle: 'دليل إطار عمل NestJS وتطوير الأنظمة المؤسسية | يوسف الغمري',
    metaDesc: 'تعرف على إطار عمل NestJS في Node.js: معمارية الوحدات Modules، حقن التبعيات Dependency Injection، الديكورات Decorators، وبناء Microservices.',
    category: 'node',
    categoryName: 'نود جي إس (Node.js)',
    date: '2025-02-14',
    readTime: '10 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/nodejs-guide.svg',
    imageAlt: 'إطار عمل NestJS في Node.js',
    relatedServiceUrl: '/ar/services/backend-development.html',
    relatedServiceName: 'تطوير المنصات المؤسسية الكبرى',
    intro: 'بينما يمنحك Express حرية مطلقة قد تؤدي أحياناً إلى كود غير منظم في المشاريع الكبرى، يأتي NestJS ليجلب معمارية البرمجة المنظمة المستوحاة من Angular إلى الواجهة الخلفية، مدعوماً بقوة TypeScript وحقن التبعيات المعياري.',
    toc: [
      { id: 'why-nestjs', text: '1. لماذا أصبح NestJS الخيار المفضل للمؤسسات؟' },
      { id: 'modules-controllers-providers', text: '2. الثالوث المقدس: Modules, Controllers, Providers' },
      { id: 'dependency-injection', text: '3. قوة حقن التبعيات (Dependency Injection Container)' },
      { id: 'guards-interceptors-pipes', text: '4. الحراس والمعترضات والمنابيب (Guards, Interceptors, Pipes)' },
      { id: 'microservices-support', text: '5. الدعم الأصيل للخدمات المصغرة (Microservices)' }
    ],
    sections: [
      {
        id: 'why-nestjs',
        title: 'لماذا أصبح NestJS الخيار المفضل للمؤسسات؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يوفر NestJS هيكلية معمارية واضحة وموحدة (Opinionated Architecture) تجعل انضمام المطورين الجدد للفريق سلساً، مع دعم أصيل لـ TypeScript، واختبارات الوحدات الجاهزة عبر Jest، وإمكانية التبديل بين محرك Express السلس ومحرك Fastify فائق السرعة.
          </p>
        `
      },
      {
        id: 'modules-controllers-providers',
        title: 'الثالوث المقدس: Modules, Controllers, Providers',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يقسم التطبيق إلى <strong>Modules</strong> تعزل كل نطاق تجاري (مثل AuthModule, UsersModule, ProductsModule)، وتتولى <strong>Controllers</strong> توجيه الطلبات، بينما تتكفل <strong>Providers/Services</strong> بالمنطق المحاسبي والتخاطب مع البيانات.
          </p>
        `
      },
      {
        id: 'dependency-injection',
        title: 'قوة حقن التبعيات (Dependency Injection Container)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            لا تقوم الفئات بإنشاء الكائنات التي تعتمد عليها يدوياً؛ بل تتولى حاوية NestJS حقن الخدمات تلقائياً في مشيدات الفئات (Constructors)، مما يسهل استبدالها بخدمات وهمية (Mock Services) أثناء كتابة اختبارات الوحدات.
          </p>
        `
      },
      {
        id: 'guards-interceptors-pipes',
        title: 'الحراس والمعترضات والمنابيب (Guards, Interceptors, Pipes)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            توفر هذه الأدوات فصل اهتمامات (Separation of Concerns) عبقري: <strong>Pipes</strong> لتحويل والتحقق من صحة المدخلات، <strong>Guards</strong> للتحقق من مصادقة وصلاحيات المستخدمين، و <strong>Interceptors</strong> لتعديل الاستجابات وتسجيل أزمنة التنفيذ آلياً.
          </p>
        `
      },
      {
        id: 'microservices-support',
        title: 'الدعم الأصيل للخدمات المصغرة (Microservices)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يدعم NestJS الربط البرمجي السلس عبر وسائط نقل متعددة (Transporters) مثل RabbitMQ و Apache Kafka و gRPC و Redis Streams بنقرة زر ودون تغيير كود المنطق الداخلي.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل يمكن تشغيل NestJS على بيئة خالية من الخوادم (Serverless)؟',
        a: 'نعم، يمكن تغليف تطبيق NestJS بسهولة ليعمل كوظائف سحابية في AWS Lambda أو Google Cloud Functions.'
      }
    ]
  },
  {
    slug: 'nodejs-realtime-apps-with-socketio-and-redis',
    title: 'تطبيقات الوقت الفعلي في Node.js: بناء أنظمة تفاعلية باستخدام Socket.io و Redis',
    metaTitle: 'دليل تطبيقات الوقت الفعلي في Node.js مع Socket.io و Redis | يوسف الغمري',
    metaDesc: 'كيف تبني تطبيقات فورية قابلة للتوسع بملايين المستخدمين: اتصالات WebSockets، غرف Socket.io، والتوسع الأفقي عبر Redis Adapter.',
    category: 'node',
    categoryName: 'نود جي إس (Node.js)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/nodejs-guide.svg',
    imageAlt: 'تطبيقات الوقت الفعلي في Node.js',
    relatedServiceUrl: '/ar/services/real-time-app-development.html',
    relatedServiceName: 'تطوير التطبيقات التفاعلية وأنظمة الوقت الفعلي',
    intro: 'في العصر الرقمي الحالي، يتوقع المستخدمون رؤية التحديثات والإشعارات فور حدوثها في أجزاء من الثانية دون الحاجة لتحديث الصفحة يدوياً. تشرح هذه المقالة كيفية بناء منصة فورية متماسكة وقابلة للتوسع الأفقي.',
    toc: [
      { id: 'websockets-vs-http', text: '1. مقابس الويب (WebSockets) مقابل بروتوكول HTTP التقليدي' },
      { id: 'socketio-features', text: '2. ميزات Socket.io: الغرف، الإبراق، والتراجع التلقائي' },
      { id: 'horizontal-scaling-redis', text: '3. التوسع الأفقي ومحول Redis Pub/Sub Adapter' },
      { id: 'auth-middleware', text: '4. مصادقة اتصالات الـ Socket باستخدام JWT' },
      { id: 'reconnection-reliability', text: '5. إدارة انقطاع الشبكة وإعادة الاتصال التلقائي' }
    ],
    sections: [
      {
        id: 'websockets-vs-http',
        title: 'مقابس الويب (WebSockets) مقابل بروتوكول HTTP التقليدي',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يوفر بروتوكول WebSocket قناة اتصال ثنائية الاتجاه ومستمرة (Full-duplex Persistent Connection) عبر مقبس TCP واحد، مما يسمح للخادم ببث البيانات للمتصفح فوراً دون انتظار طلب جديد، متجاوزاً عبء ترويسات HTTP المتكررة.
          </p>
        `
      },
      {
        id: 'socketio-features',
        title: 'ميزات Socket.io: الغرف، الإبراق، والتراجع التلقائي',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تضيف مكتبة Socket.io طبقات ذكية فوق الـ WebSockets: مثل دعم غرف المحادثة (Rooms)، وإرسال الرسائل لجميع المتصلين عدا المرسل (Broadcast)، والتراجع الذكي إلى HTTP Long-polling في حال كانت شبكة العميل تحظر المقابس.
          </p>
        `
      },
      {
        id: 'horizontal-scaling-redis',
        title: 'التوسع الأفقي ومحول Redis Pub/Sub Adapter',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            عند تشغيل عدة نسخ من خادم Node.js خلف موزع أحمال (Load Balancer)، يكون المتصل (أ) على السيرفر 1 والمتصل (ب) على السيرفر 2. يحل محول <code>@socket.io/redis-adapter</code> هذه الأزمة عبر بث الرسائل فورياً بين كافة السيرفرات عبر قناة Redis المشتركة.
          </p>
        `
      },
      {
        id: 'auth-middleware',
        title: 'مصادقة اتصالات الـ Socket باستخدام JWT',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            التحقق من رمز JWT أثناء مصافحة الاتصال الأولية (Handshake)، ورفض الاتصال فوراً إذا كان المستخدم غير مصرح له، مع ربط معرّف المستخدم (userId) بكائن المقبس للتحكم بالصلاحيات.
          </p>
        `
      },
      {
        id: 'reconnection-reliability',
        title: 'إدارة انقطاع الشبكة وإعادة الاتصال التلقائي',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تفعيل ميزة التخزين المؤقت للرسائل الفائتة وتوليد معرّف تعويض لكل رسالة لاستعادة الرسائل التي لم تصل إلى جهاز المستخدم أثناء انقطاع شبكة الهاتف المحمول المؤقت.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'كم عدد اتصالات WebSocket المتزامنة التي يستطيع خادم Node.js تحملها؟',
        a: 'يمكن لخادم نود جي إس بذاكرة 2 جيجابايت مع ضبط إعدادات نواة لينكس ونهايات المقابس المفتوحة أن يتحمل أكثر من 50,000 إلى 100,000 اتصال نشط في نفس اللحظة.'
      }
    ]
  },
  {
    slug: 'nodejs-graphql-api-development',
    title: 'تطوير واجهات GraphQL باستخدام Node.js و Apollo Server: الثورة على REST',
    metaTitle: 'دليل تطوير واجهات GraphQL مع Node.js و Apollo Server | يوسف الغمري',
    metaDesc: 'تعلم كيفية بناء واجهات GraphQL في نود جي إس: المخططات Schema، المحللات Resolvers، الاشتراكات Subscriptions، وحل معضلة N+1 مع DataLoader.',
    category: 'node',
    categoryName: 'نود جي إس (Node.js)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/nodejs-guide.svg',
    imageAlt: 'تطوير واجهات GraphQL مع Node.js',
    relatedServiceUrl: '/ar/services/api-development-integration.html',
    relatedServiceName: 'تطوير واجهات البيانات والـ API المتقدمة',
    intro: 'جاءت لغة الاستعلامات GraphQL لتعالج أوجه القصور في معمارية REST التقليدية: التخلص من جلب البيانات الفائضة (Over-fetching) وجلب البيانات الناقصة (Under-fetching). يوضح هذا الدليل كيفية بناء خادم GraphQL مؤسسي سريع ومحصن.',
    toc: [
      { id: 'graphql-philosophy', text: '1. فلسفة GraphQL ولغة تعريف المخططات (SDL)' },
      { id: 'apollo-server-setup', text: '2. إعداد Apollo Server مع Express و TypeScript' },
      { id: 'resolvers-execution', text: '3. كتابة دوال التحليل (Query & Mutation Resolvers)' },
      { id: 'dataloader-n-plus-one', text: '4. حل مشكلة N+1 الكارثية باستخدام مكتبة DataLoader' },
      { id: 'subscriptions-realtime', text: '5. الاشتراكات اللحظية عبر GraphQL Subscriptions' }
    ],
    sections: [
      {
        id: 'graphql-philosophy',
        title: 'فلسفة GraphQL ولغة تعريف المخططات (SDL)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يحدد المطور مخطط بيانات صارم (Schema) يصف الكائنات والعلاقات، ويطلب تطبيق الموبايل الحقول التي يحتاجها فقط في استعلام واحد، مما يقلل حجم حزم البيانات المنقولة عبر شبكات الهاتف بنسبة تفوق 70%.
          </p>
        `
      },
      {
        id: 'apollo-server-setup',
        title: 'إعداد Apollo Server مع Express و TypeScript',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يوفر Apollo Server تكاملاً سلساً مع Express عبر برمجية وسيطة <code>expressMiddleware</code>، مع توفير واجهة الاستكشاف الرسومية Apollo Sandbox لاختبار الاستعلامات وتوثيقها تلقائياً.
          </p>
        `
      },
      {
        id: 'resolvers-execution',
        title: 'كتابة دوال التحليل (Query & Mutation Resolvers)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            دوال التحليل هي المحرك الذي يجلب البيانات الفعلية لكل حقل في المخطط من قواعد البيانات أو الخدمات المصغرة، مع تمرير سياق الطلب (Context) الذي يحتوي على بيانات هوية المستخدم.
          </p>
        `
      },
      {
        id: 'dataloader-n-plus-one',
        title: 'حل مشكلة N+1 الكارثية باستخدام مكتبة DataLoader',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تعتبر مشكلة N+1 أكبر عيب في GraphQL غير المحسن؛ حيث يُنفذ استعلام لقائمة 100 مقال متبوعاً بـ 100 استعلام منفصل لجلب مؤلف كل مقال. تحل مكتبة DataLoader ذلك عبر تجميع (Batching) كافة معرّفات المؤلفين في استعلام SQL واحد <code>WHERE id IN (...)</code> مع التخزين المؤقت الذكي.
          </p>
        `
      },
      {
        id: 'subscriptions-realtime',
        title: 'الاشتراكات اللحظية عبر GraphQL Subscriptions',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            إمكانية بث تحديثات البيانات لحظياً عبر اتصالات المقابس باستخدام حزمة <code>graphql-ws</code> القياسية المعتمدة.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل تستبدل GraphQL واجهات REST تماماً؟',
        a: 'لا، بل تكملها؛ تعد GraphQL ممتازة لتطبيقات الموبايل المعقدة والواجهات الغنية، بينما تظل REST أبسط وأكثر ملاءمة لنقل الملفات الضخمة والربط البسيط مع أنظمة الشركاء الخارجيين.'
      }
    ]
  },
  {
    slug: 'nodejs-docker-and-microservices',
    title: 'حاويات Docker ونشر تطبيقات Node.js: دليل التحزيم والنشر على بيئات الإنتاج',
    metaTitle: 'دليل تحزيم ونشر تطبيقات Node.js بحاويات Docker | يوسف الغمري',
    metaDesc: 'تعلم كيف تحزم تطبيقات Node.js في حاويات Docker خفيفة وآمنة: البناء متعدد المراحل Multi-stage، تحسين حجم الصورة، وممارسات الإنتاج مع PM2 و K8s.',
    category: 'node',
    categoryName: 'نود جي إس (Node.js)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/nodejs-guide.svg',
    imageAlt: 'حاويات Docker ونشر تطبيقات Node.js',
    relatedServiceUrl: '/ar/services/backend-development.html',
    relatedServiceName: 'هندسة السحابة والنشر المستمر DevOps',
    intro: 'يعتبر نشر تطبيقات Node.js في بيئات الإنتاج الحساسة تحدياً يتطلب ضبطاً دقيقاً لإدارة العمليات وموارد الذاكرة والحاويات. يشرح هذا المقال كيفية بناء صور Docker احترافية فائقة الصغر والأمان.',
    toc: [
      { id: 'multi-stage-dockerfile', text: '1. كتابة Dockerfile احترافي بالبناء متعدد المراحل (Multi-stage)' },
      { id: 'alpine-distroless', text: '2. تقليص حجم الصورة بنسبة 90% باستخدام Alpine أو Distroless' },
      { id: 'non-root-security', text: '3. تشغيل الحاوية بمستخدم غير جذري لصد الاختراق' },
      { id: 'graceful-shutdown', text: '4. الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات SIGTERM' },
      { id: 'pm2-clustering', text: '5. استغلال كافة أنوية المعالج عبر PM2 Cluster Mode' }
    ],
    sections: [
      {
        id: 'multi-stage-dockerfile',
        title: 'كتابة Dockerfile احترافي بالبناء متعدد المراحل (Multi-stage)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            فصل مرحلة البناء والترجمة عن الصورة النهائية، حيث يتم تثبيت حزم التطوير وترجمة أكواد TypeScript في المرحلة الأولى، ثم نقل الملفات الناتجة فقط إلى الصورة النهائية دون حزم <code>devDependencies</code> الضخمة.
          </p>
        `
      },
      {
        id: 'alpine-distroless',
        title: 'تقليص حجم الصورة بنسبة 90% باستخدام Alpine أو Distroless',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            استخدام صور أساسية مصغرة مثل <code>node:20-alpine</code> أو صور Distroless من Google التي تخلو من أي برامج نظام أو قذائف Bash غير ضرورية، مما يقلص حجم الصورة من 1 جيجابايت إلى أقل من 120 ميجابايت ويسرع وقت النشر التلقائي.
          </p>
        `
      },
      {
        id: 'non-root-security',
        title: 'تشغيل الحاوية بمستخدم غير جذري لصد الاختراق',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            إضافة تعليمة <code>USER node</code> داخل ملف Dockerfile، لضمان تشغيل التطبيق بحساب مستخدم عادي، مما يمنع المهاجم من السيطرة على خادم الاستضافة في حال تمكن من استغلال ثغرة في الكود.
          </p>
        `
      },
      {
        id: 'graceful-shutdown',
        title: 'الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات SIGTERM',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            الاستماع لإشارات <code>SIGTERM</code> الصادرة من Docker أو Kubernetes عند إعادة النشر، وإمهال الخادم 15-30 ثانية لإنهاء معالجة الطلبات الجارية وقفل اتصالات قواعد البيانات بأمان قبل إيقاف العملية.
          </p>
        `
      },
      {
        id: 'pm2-clustering',
        title: 'استغلال كافة أنوية المعالج عبر PM2 Cluster Mode',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            نظراً لأن نود أحادية الخيط، فإن تشغيل PM2 في وضع التجميع العنقودي <code>pm2 start app.js -i max</code> ينشئ نسخة من التطبيق لكل نواة معالج متاحة على السيرفر، مع موزع أحمال داخلي لمضاعفة الأداء.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل نحتاج لـ PM2 داخل حاويات Kubernetes؟',
        a: 'في العادة لا؛ حيث يتولى Kubernetes نفسه إدارة النسخ والمراقبة وإعادة التشغيل، ويفضل إبقاء الحاوية نقية تحتوي على عملية Node واحدة لكل Pod.'
      }
    ]
  },
  {
    slug: 'nodejs-event-driven-microservices-kafka',
    title: 'الخدمات المصغرة الموجهة بالأحداث (Event-Driven) في Node.js باستخدام Apache Kafka',
    metaTitle: 'دليل Event-Driven Microservices في Node.js مع Kafka | يوسف الغمري',
    metaDesc: 'كيف تبني معمارية خدمات مصغرة تعتمد على تدفق الأحداث مع Node.js و Apache Kafka: أنماط النشر والاشتراك، إدارة الرسائل الضخمة، والتحمل الفائق للأعطال.',
    category: 'node',
    categoryName: 'نود جي إس (Node.js)',
    date: '2025-02-14',
    readTime: '10 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/nodejs-guide.svg',
    imageAlt: 'الخدمات المصغرة الموجهة بالأحداث في Node.js مع Kafka',
    relatedServiceUrl: '/ar/services/backend-development.html',
    relatedServiceName: 'تصميم وهندسة المعماريات الموزعة',
    intro: 'عندما تتبنى الشركات معمارية الخدمات المصغرة، يصبح الاعتماد الحصري على اتصالات HTTP المباشرة سبباً في انهيار الدومينو عند توقف إحدى الخدمات. توفر معمارية تدفق الأحداث (Event-Driven) باستخدام Kafka فصلاً كاملاً وموثوقية قصوى لنقل البيانات.',
    toc: [
      { id: 'event-driven-philosophy', text: '1. فلسفة معمارية الأحداث وفك الارتباط البرمجي' },
      { id: 'kafka-core-concepts', text: '2. مفاهيم Kafka الأساسية: Topics, Partitions, Consumer Groups' },
      { id: 'kafkajs-integration', text: '3. التكامل البرمجي عبر مكتبة KafkaJS' },
      { id: 'saga-pattern', text: '4. إدارة المعاملات الموزعة عبر نمط الساجا (Saga Pattern)' },
      { id: 'dead-letter-queues', text: '5. معالجة الرسائل الفاشلة عبر طوابير Dead Letter Queues' }
    ],
    sections: [
      {
        id: 'event-driven-philosophy',
        title: 'فلسفة معمارية الأحداث وفك الارتباط البرمجي',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            بدلاً من قيام خدمة الطلبات باستدعاء خدمة الفواتير وخدمة الشحن وخدمة الإشعارات تزامناً، تقوم بنشر حدث واحد <code>OrderCreated</code> في وسيط الأحداث، لتستمع كافة الخدمات المعنية لهذا الحدث وتعالجه باستقلالية تامة.
          </p>
        `
      },
      {
        id: 'kafka-core-concepts',
        title: 'مفاهيم Kafka الأساسية: Topics, Partitions, Consumer Groups',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يتيح Kafka تقسيم مواضيع الرسائل (Topics) إلى أجزاء (Partitions) موزعة لتمكين القراءة المتوازية عبر مجموعات المستهلكين (Consumer Groups)، مع تخزين الأحداث على القرص لفترات محددة مما يتيح إعادة تشغيل ومعالجة الأحداث السابقة (Event Replay).
          </p>
        `
      },
      {
        id: 'kafkajs-integration',
        title: 'التكامل البرمجي عبر مكتبة KafkaJS',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تعتبر مكتبة KafkaJS الخيار الأكثر حداثة وموثوقية في بيئة Node.js، حيث توفر دعماً كاملاً لـ SSL و SASL والتحكم في إشارات الـ Heartbeat والتراجع التلقائي.
          </p>
        `
      },
      {
        id: 'saga-pattern',
        title: 'إدارة المعاملات الموزعة عبر نمط الساجا (Saga Pattern)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            في قواعد البيانات الموزعة لا توجد معاملات ACID عابرة للخدمات. يحل نمط Saga هذا التحدي عبر سلسلة من المعاملات المحلية، مع وجود معاملات تعويضية (Compensating Transactions) للتراجع عن التغييرات في حال فشل أي خطوة لاحقة.
          </p>
        `
      },
      {
        id: 'dead-letter-queues',
        title: 'معالجة الرسائل الفاشلة عبر طوابير Dead Letter Queues',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            إذا فشلت معالجة رسالة معينة بعد عدة محاولات إعادة، يتم تحويلها تلقائياً إلى طابور الرسائل الميتة (DLQ) لفحصها من قبل المهندسين دون إيقاف معالجة باقي تدفق الأحداث السليم.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'متى نختار Kafka ومتى نختار RabbitMQ؟',
        a: 'نختار RabbitMQ للرسائل التقليدية والتوجيه المعقد البسيط، ونختار Kafka للتدفقات الضخمة بملايين الأحداث وتطبيقات تتبع سجلات الأحداث المستمرة (Event Sourcing).'
      }
    ]
  }
];

export const angularArticles: ArticleItem[] = [
  {
    slug: 'what-is-angular',
    title: 'ما هو إطار عمل أنجولار (Angular)؟ دليلك الشامل لمنصة جوجل المتكاملة',
    metaTitle: 'ما هو أنجولار Angular؟ دليل شامل لإطار عمل جوجل المتكامل | يوسف الغمري',
    metaDesc: 'دليل شامل عن إطار عمل أنجولار: تاريخه من AngularJS إلى أنجولار الحديث، معمارية المكونات، حقن التبعيات، وثورة Signals في Angular 17 و 18.',
    category: 'angular',
    categoryName: 'أنجولار (Angular)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/angular-guide.svg',
    imageAlt: 'دليل إطار عمل أنجولار Angular',
    relatedServiceUrl: '/ar/services/frontend-development.html',
    relatedServiceName: 'تطوير التطبيقات المؤسسية بإطار أنجولار',
    intro: 'يُعد أنجولار (Angular) إطار العمل الأكثر شمولاً وتكاملاً في عالم الواجهات الأمامية. طوّرته شركة Google لتزويد الشركات والمؤسسات الضخمة بمنصة إنتاجية كاملة الميزات تتضمن كل ما يلزم لبناء تطبيقات ويب معقدة وآمنة دون الحاجة لجمع مكتبات خارجية متفرقة.',
    toc: [
      { id: 'definition', text: '1. ما هو أنجولار وفلسفته المتكاملة (Batteries-Included)؟' },
      { id: 'angular-renaissance', text: '2. عصر النهضة: من Angular 2 إلى ثورة الإصدارات الحديثة' },
      { id: 'core-building-blocks', text: '3. اللبنات المعمارية الأساسية: Components, Services & DI' },
      { id: 'signals-reactivity', text: '4. ثورة الإشارات (Angular Signals) والتخلي عن Zone.js' },
      { id: 'angular-vs-react', text: '5. مقارنة أنجولار مع ريأكت: أيهما الأنسب لمشروعك؟' }
    ],
    sections: [
      {
        id: 'definition',
        title: 'ما هو أنجولار وفلسفته المتكاملة (Batteries-Included)؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            على عكس المكتبات البسيطة، يأتي أنجولار كإطار عمل متكامل يتضمن في صميمه: نظام توجيه مسارات متقدم (Router)، محرك نماذج فائق التطور (Reactive Forms)، عميل طلبات شبكة HTTP، ونظام حقن تبعيات قوي، مما يوفر بيئة عمل موحدة ومنتجة.
          </p>
        `
      },
      {
        id: 'angular-renaissance',
        title: 'عصر النهضة: من Angular 2 إلى ثورة الإصدارات الحديثة',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            شهدت النسخ الأخيرة (Angular 17, 18, 19) نقلة نوعية أطلق عليها المجتمع "عصر النهضة لأنجولار"؛ شملت إدخال المكونات المستقلة (Standalone Components)، وصياغة التحكم الجديدة في القوالب <code>@if</code> و <code>@for</code>، ونظام التفاعل فائق السرعة المبني على Signals.
          </p>
        `
      },
      {
        id: 'core-building-blocks',
        title: 'اللبنات المعمارية الأساسية: Components, Services & DI',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يعتمد أنجولار على لغة TypeScript بشكل أصيل، حيث تفصل المكونات طبقة الواجهة HTML والأنماط CSS عن الكود المنطقي، بينما تتولى الخدمات (Services) منطق البيانات وتُحقن تلقائياً عبر نظام حقن التبعيات (DI).
          </p>
        `
      },
      {
        id: 'signals-reactivity',
        title: 'ثورة الإشارات (Angular Signals) والتخلي عن Zone.js',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تعتبر Signals طفرة حاسمة في طريقة تتبع التغييرات في أنجولار، حيث تقوم بتحديث الجزء الدقيق في الصفحة المتأثر بالقيمة المتغيرة فقط دون الحاجة لإجراء فحص شامل لشجرة التطبيق (Zoneless Angular)، مما يرفع السرعة بنسب قياسية.
          </p>
        `
      },
      {
        id: 'angular-vs-react',
        title: 'مقارنة أنجولار مع ريأكت: أيهما الأنسب لمشروعك؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            ريأكت تمنحك حرية المعمارية ولكنها تتطلب اتخاذ قرارات عديدة حول كل مكتبة، بينما يوفر أنجولار صرامة هندسية ومعايير واضحة تضمن ثبات الكود وجودته حتى مع تغيير المطورين، مما يجعله الخيار المفضل للبنوك والشركات الكبرى.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل ما زالت NgModules إلزامية في أنجولار الحديث؟',
        a: 'لا، أصبحت المكونات المستقلة (Standalone Components) هي المعيار الافتراضي، وتم التخلص من NgModules لجعل التطوير أسهل وأخف وزناً.'
      }
    ]
  },
  {
    slug: 'angular-signals-and-reactivity-guide',
    title: 'دليل إشارات أنجولار الحديثة (Angular Signals): التفاعل الدقيق فائق السرعة',
    metaTitle: 'دليل Angular Signals بالتفصيل مع أمثلة عملية | يوسف الغمري',
    metaDesc: 'شرح مفصل لنظام Signals في أنجولار: signal(), computed(), effect()، ومقارنتها مع RxJS وكيف تبني تطبيقات خالية من Zone.js.',
    category: 'angular',
    categoryName: 'أنجولار (Angular)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/angular-guide.svg',
    imageAlt: 'شرح Angular Signals في أنجولار',
    relatedServiceUrl: '/ar/services/frontend-development.html',
    relatedServiceName: 'تطوير وبرمجة تطبيقات الواجهات',
    intro: 'تمثل الإشارات (Signals) في أنجولار أكبر تغيير هيكلي في طريقة إدارة الحالة والتفاعل. تقدم Signals تتبعاً دقيقاً ومباشراً للاعتماديات دون إجهاد المعالج، وتفتح الباب أمام الجيل الجديد من تطبيقات أنجولار فائقة السرعة.',
    toc: [
      { id: 'signals-basics', text: '1. ما هي الإشارة (Signal) وكيف تختلف عن المتغيرات العادية؟' },
      { id: 'computed-signals', text: '2. الإشارات المشتقة المحسوبة (computed)' },
      { id: 'side-effects', text: '3. معالجة الآثار الجانبية والمراقبة عبر effect()' },
      { id: 'rxjs-interop', text: '4. التكامل والتحويل بين Signals و RxJS Observables' },
      { id: 'zoneless-future', text: '5. مستقبل أنجولار بدون Zone.js (Zoneless Performance)' }
    ],
    sections: [
      {
        id: 'signals-basics',
        title: 'ما هي الإشارة (Signal) وكيف تختلف عن المتغيرات العادية؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            الإشارة هي مغلف حول قيمة يمتلك القدرة على إشعار المستهلكين عند تغيرها. يتم إنشاؤها عبر الدالة <code>signal()</code> وقراءة قيمتها باستدعائها كدالة <code>count()</code> وتحديثها عبر <code>count.set(5)</code> أو <code>count.update(n => n + 1)</code>.
          </p>
        `
      },
      {
        id: 'computed-signals',
        title: 'الإشارات المشتقة المحسوبة (computed)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تنشئ <code>computed()</code> إشارة مشتقة للقراءة فقط، تُحسب قيمتها تلقائياً بناءً على إشارات أخرى ويتم تخزينها مؤقتاً (Memoized) بحيث لا يعاد حسابها إلا إذا تغيرت الإشارة الأصلية:
          </p>
          <pre class="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-emerald-400 font-mono text-xs overflow-x-auto my-4">
const price = signal(100);
const quantity = signal(2);
const total = computed(() => price() * quantity());
          </pre>
        `
      },
      {
        id: 'side-effects',
        title: 'معالجة الآثار الجانبية والمراقبة عبر effect()',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تُنفذ دالة <code>effect()</code> عند تغير قيمة أي إشارة تقرؤها بداخلها، وهي مخصصة لتسجيل السجلات، التفاعل مع التخزين المحلي LocalStorage، أو استدعاء رسوم بيانية تفاعلية خارجية.
          </p>
        `
      },
      {
        id: 'rxjs-interop',
        title: 'التكامل والتحويل بين Signals و RxJS Observables',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            توفر حزمة <code>@angular/core/rxjs-interop</code> دوال تحويل سلسة: <code>toSignal()</code> لتحويل تدفق Observable إلى Signal لقراءته في القالب دون وسم async pipe، و <code>toObservable()</code> للتحويل العكسي لتطبيق عوامل التصفية المعقدة.
          </p>
        `
      },
      {
        id: 'zoneless-future',
        title: 'مستقبل أنجولار بدون Zone.js (Zoneless Performance)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            مع ميزة <code>provideExperimentalZonelessChangeDetection()</code>، يستغني أنجولار تماماً عن مكتبة Zone.js الثقيلة، مما يخفض حجم الحزمة الأولية ويمنح زمن استجابة فوري لتفاعلات المستخدم.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل Signals تلغي مكتبة RxJS بالكامل في أنجولار؟',
        a: 'لا؛ الإشارات تتولى إدارة الحالة المتزامنة والتفاعل مع الواجهة، بينما تظل RxJS الأداة المثلى لإدارة الأحداث غير المتزامنة المعقدة والـ WebSockets.'
      }
    ]
  },
  {
    slug: 'angular-standalone-components-guide',
    title: 'المكونات المستقلة في أنجولار (Standalone Components): تبسيط معمارية التطبيقات',
    metaTitle: 'دليل Standalone Components في أنجولار الحديث | يوسف الغمري',
    metaDesc: 'شرح المكونات المستقلة Standalone في أنجولار: التخلي عن NgModules، استيراد التبعيات المباشر، وتحميل المسارات الكسول عبر loadComponent.',
    category: 'angular',
    categoryName: 'أنجولار (Angular)',
    date: '2025-02-14',
    readTime: '8 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/angular-guide.svg',
    imageAlt: 'المكونات المستقلة Standalone Components في أنجولار',
    relatedServiceUrl: '/ar/services/frontend-development.html',
    relatedServiceName: 'تطوير وتحديث تطبيقات أنجولار',
    intro: 'لسنوات طويلة كانت NgModules نقطة ارتباك للمطورين الجدد في أنجولار وسبباً في تعقيد هيكل الكود. مع إطلاق Standalone Components، أصبح كل مكون كياناً مستقلاً بذاته يستورد ما يحتاجه مباشرة.',
    toc: [
      { id: 'why-standalone', text: '1. لماذا تخلت جوجل عن NgModules لصالح Standalone؟' },
      { id: 'creating-standalone', text: '2. كيفية إنشاء وضبط مكون مستقل (standalone: true)' },
      { id: 'imports-array', text: '3. استيراد المكونات والخدمات عبر مصفوفة imports المباشرة' },
      { id: 'lazy-loading-routes', text: '4. التحميل الكسول المباشر في موجه الروابط (loadComponent)' },
      { id: 'migrating-legacy', text: '5. خطة ترحيل المشاريع القديمة باستخدام Angular CLI' }
    ],
    sections: [
      {
        id: 'why-standalone',
        title: 'لماذا تخلت جوجل عن NgModules لصالح Standalone؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            الهدف هو تقليل التعقيد البرمجي (Boilerplate)، تسريع وقت تجميع الكود، وتبسيط التحميل الكسول، ومطابقة نمط العمل المتبع في أغلب أطر الواجهات الحديثة عالمياً.
          </p>
        `
      },
      {
        id: 'creating-standalone',
        title: 'كيفية إنشاء وضبط مكون مستقل (standalone: true)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            في الإصدارات الحديثة، أصبحت خاصية <code>standalone: true</code> هي الوضع الافتراضي عند إنشاء أي مكون عبر أمر Angular CLI: <code>ng g c my-component</code>.
          </p>
        `
      },
      {
        id: 'imports-array',
        title: 'استيراد المكونات والخدمات عبر مصفوفة imports المباشرة',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يقوم المكون باستيراد المكونات والتعليمات البرمجية التي يحتاجها فقط داخل تعريفه المباشر <code>imports: [CommonModule, RouterLink, ButtonComponent]</code> دون الحاجة لتسجيله في أي موديول خارجي.
          </p>
        `
      },
      {
        id: 'lazy-loading-routes',
        title: 'التحميل الكسول المباشر في موجه الروابط (loadComponent)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            بدلاً من تحميل موديول كامل بمساراته، يمكنك تحميل المكون المستقل مباشرة عند زيارة الرابط عبر:
          </p>
          <pre class="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-emerald-400 font-mono text-xs overflow-x-auto my-4">
{
  path: 'dashboard',
  loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
}
          </pre>
        `
      },
      {
        id: 'migrating-legacy',
        title: 'خطة ترحيل المشاريع القديمة باستخدام Angular CLI',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            توفر أداة سطر الأوامر أداة ترحيل آلية ذكية: <code>ng generate @angular/core:standalone</code> والتي تقوم بتحويل المكونات القديمة وإلغاء NgModules بضغطة زر وبأمان عالي.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل يمكن خلط المكونات المستقلة مع الموديولات القديمة في نفس المشروع؟',
        a: 'نعم، يتوافق كلا النموذجين تماماً، مما يتيح للشركات ترحيل تطبيقاتها الضخمة تدريجياً دون الحاجة لإعادة كتابة النظام بالكامل.'
      }
    ]
  },
  {
    slug: 'angular-control-flow-syntax',
    title: 'صياغة التحكم الحديثة في أنجولار (@if, @for, @switch): وداعاً لـ *ngIf و *ngFor',
    metaTitle: 'شرح صياغة التحكم الحديثة في أنجولار @if و @for | يوسف الغمري',
    metaDesc: 'تعرف على نظام Control Flow الحديث في قوالب أنجولار: سرعة الأداء، معالجة القوائم بـ @for مع track الإلزامي، ودعم @empty المدمج.',
    category: 'angular',
    categoryName: 'أنجولار (Angular)',
    date: '2025-02-14',
    readTime: '8 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/angular-guide.svg',
    imageAlt: 'صياغة التحكم الحديثة في أنجولار @if و @for',
    relatedServiceUrl: '/ar/services/frontend-development.html',
    relatedServiceName: 'تطوير واجهات المستخدم المتقدمة',
    intro: 'قدمت جوجل في إصداراتها الحديثة ثورة بصرية وأدائية في لغة القوالب عبر صياغة التحكم المدمجة (@-syntax)، والتي توفر أداءً أسرع بكثير وقابلية قراءة بديهية تماثل لغات البرمجة الحديثة.',
    toc: [
      { id: 'why-new-syntax', text: '1. لماذا استبدلت جوجل *ngIf و *ngFor؟' },
      { id: 'at-if-else', text: '2. الشروط المتطورة باستخدام @if و @else if و @else' },
      { id: 'at-for-track', text: '3. القوائم الفائقة السرعة عبر @for وخاصية track الإلزامية' },
      { id: 'at-empty-block', text: '4. عرض الحالة الفارغة بسهولة عبر كتلة @empty' },
      { id: 'at-switch-case', text: '5. الحالات المتعددة باستخدام @switch' }
    ],
    sections: [
      {
        id: 'why-new-syntax',
        title: 'لماذا استبدلت جوجل *ngIf و *ngFor؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            كانت التعليمات السابقة (Directives) تتطلب استيراد CommonModule وتعتمد على ميكانيزمات معقدة في التحليل. الصياغة الجديدة مدمجة في المترجم مباشرة، ولا تتطلب استيراد أي موديول، وتوفر سرعة رسم أعلى بنسبة تصل إلى 90%.
          </p>
        `
      },
      {
        id: 'at-if-else',
        title: 'الشروط المتطورة باستخدام @if و @else if و @else',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            أصبحت كتابة الشروط نقية للغاية وتدعم التفرعات المنطقية الطبيعية دون الحاجة لوسوم <code>ng-template</code> المربكة:
          </p>
          <pre class="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-emerald-400 font-mono text-xs overflow-x-auto my-4">
@if (user.isLoggedIn) {
  &lt;p&gt;مرحباً، {{ user.name }}&lt;/p&gt;
} @else if (user.isGuest) {
  &lt;p&gt;مرحباً بالزائر الكريم&lt;/p&gt;
} @else {
  &lt;a href="/login"&gt;تسجيل الدخول&lt;/a&gt;
}
          </pre>
        `
      },
      {
        id: 'at-for-track',
        title: 'القوائم الفائقة السرعة عبر @for وخاصية track الإلزامية',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تفرض كتلة <code>@for</code> استخدام خاصية <code>track item.id</code> إجبارياً، مما يضمن تتبع كل عنصر بشكل فريد ويقضي على المشاكل الأدائية الناتجة عن نسيان دالة trackBy القديمة.
          </p>
        `
      },
      {
        id: 'at-empty-block',
        title: 'عرض الحالة الفارغة بسهولة عبر كتلة @empty',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تتيح كتلة <code>@empty</code> عرض رسالة "لا توجد نتائج" تلقائياً عند كون المصفوفة فارغة دون الحاجة لكتابة شرط منفصل للتحقق من طول المصفوفة.
          </p>
        `
      },
      {
        id: 'at-switch-case',
        title: 'الحالات المتعددة باستخدام @switch',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تنسيق نظيف لمعالجة الأدوار والصلاحيات المتعددة عبر <code>@switch(role) { @case('admin') {...} @default {...} }</code> مع تدقيق صارم للأنواع في TypeScript.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'كيف يمكن ترقية المشاريع القديمة للصياغة الجديدة تلقائياً؟',
        a: 'عبر تشغيل الأمر الرسمي: <code>ng generate @angular/core:control-flow</code> ليقوم المترجم بتحديث كافة قوالب المشروع تلقائياً.'
      }
    ]
  },
  {
    slug: 'angular-deferrable-views-guide',
    title: 'المشاهد المؤجلة في أنجولار (@defer): ثورة تسريع تحميل الصفحات في ثوانٍ',
    metaTitle: 'دليل Deferrable Views في أنجولار (@defer) لتسريع الصفحات | يوسف الغمري',
    metaDesc: 'اكتشف قوة @defer في أنجولار الحديث: تأجيل تحميل المكونات الثقيلة، محفزات on viewport و on interaction، وتحسين Core Web Vitals.',
    category: 'angular',
    categoryName: 'أنجولار (Angular)',
    date: '2025-02-14',
    readTime: '8 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/angular-guide.svg',
    imageAlt: 'المشاهد المؤجلة @defer في أنجولار',
    relatedServiceUrl: '/ar/services/speed-performance-optimization.html',
    relatedServiceName: 'تحسين سرعة وأداء التطبيقات',
    intro: 'تعتبر ميزة Deferrable Views الممثلة في كتلة <code>@defer</code> واحدة من أعظم الإضافات في تاريخ أطر الويب. تتيح لك تأجيل تحميل وتصيير أي مكون ثقيل في الصفحة بأسلوب تعبيري حتى يتحقق شرط محدد.',
    toc: [
      { id: 'defer-concept', text: '1. ما هي فكرة @defer ولماذا هي ثورية؟' },
      { id: 'triggers-conditions', text: '2. محفزات التحميل الذكية (on viewport, on hover, on timer)' },
      { id: 'companion-blocks', text: '3. الكتل المرافقة: @placeholder و @loading و @error' },
      { id: 'pre-fetching', text: '4. الجلب المسبق للكود قبل الحاجة إليه (prefetch)' },
      { id: 'web-vitals-impact', text: '5. الأثر المباشر على نقاط LCP و INP في أداء الويب' }
    ],
    sections: [
      {
        id: 'defer-concept',
        title: 'ما هي فكرة @defer ولماذا هي ثورية؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            في العادة يتم تنزيل كافة مكونات الصفحة في حزمة البداية. باستخدام <code>@defer</code>، يقوم المترجم تلقائياً بفصل المكونات الموجودة بداخلها في حزم مستقلة لا يتم تنزيلها إلا عند الحاجة إليها، مما يقلص زمن تحميل الصفحة الأولى إلى أقصى حد.
          </p>
        `
      },
      {
        id: 'triggers-conditions',
        title: 'محفزات التحميل الذكية (on viewport, on hover, on timer)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يمكنك تحديد متى يبدأ التحميل: <code>on viewport</code> عند تمرير المستخدم للشاشة واقترابه من العنصر، <code>on interaction</code> عند النقر، أو <code>on hover</code> عند مرور مؤشر الفأرة.
          </p>
        `
      },
      {
        id: 'companion-blocks',
        title: 'الكتل المرافقة: @placeholder و @loading و @error',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تسمح لك بتصميم تجربة مستخدم متكاملة: <code>@placeholder</code> لعرض هيكل عظمي (Skeleton)، <code>@loading</code> لعرض مؤشر التحميل مع تحديد حد أدنى للوقت لمنع الوميض، و <code>@error</code> في حال فشل تنزيل الحزمة.
          </p>
        `
      },
      {
        id: 'pre-fetching',
        title: 'الجلب المسبق للكود قبل الحاجة إليه (prefetch)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يمكنك فصل وقت تنزيل الملف عن وقت عرضه؛ مثلاً: تنزيل كود المكون مسبقاً في وقت خمول المتصفح <code>prefetch on idle</code>، ولكن لا ترسمه إلا عندما يضغط العميل على الزر <code>on interaction</code>.
          </p>
        `
      },
      {
        id: 'web-vitals-impact',
        title: 'الأثر المباشر على نقاط LCP و INP في أداء الويب',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يساعد هذا التأجيل الذكي في تحقيق النتيجة 100 في مؤشرات أداء جوجل Core Web Vitals عبر تفريغ الخيط الرئيسي من معالجة العناصر غير المرئية في الثواني الأولى.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل تعمل @defer مع المكونات غير المستقلة؟',
        a: 'تشترط @defer أن تكون المكونات والتعليمات الموجودة بداخلها مكونات مستقلة Standalone ليتمكن المترجم من فصلها في حزم مستقلة.'
      }
    ]
  },
  {
    slug: 'angular-enterprise-architecture-and-nx-monorepo',
    title: 'معمارية أنجولار للمشاريع المؤسسية الضخمة: إدارة الأنظمة عبر Nx Monorepo',
    metaTitle: 'دليل معمارية أنجولار المؤسسية باستخدام Nx Monorepo | يوسف الغمري',
    metaDesc: 'كيف تهندس تطبيقات أنجولار الضخمة: معمارية Nx Monorepo، تقسيم المكتبات، فرض حدود التبعيات، وتسريع البناء بـ Computation Caching.',
    category: 'angular',
    categoryName: 'أنجولار (Angular)',
    date: '2025-02-14',
    readTime: '10 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/angular-guide.svg',
    imageAlt: 'معمارية أنجولار المؤسسية بـ Nx Monorepo',
    relatedServiceUrl: '/ar/services/frontend-development.html',
    relatedServiceName: 'تصميم وهندسة البرمجيات المؤسسية',
    intro: 'عندما تدير مؤسسة مصرفية أو شركة اتصالات عدة بوابات وتطبيقات يشترك فيها مئات المطورين، يصبح بناء مستودع أحادي ذكي (Monorepo) أمراً حتمياً. تشرح هذه المقالة كيفية استخدام Nx مع Angular لتنظيم كود ضخم ومترابط بأعلى معايير الحوكمة.',
    toc: [
      { id: 'monorepo-concept', text: '1. ما هو الـ Monorepo ولماذا تتفوق أداة Nx؟' },
      { id: 'library-types', text: '2. تصنيف المكتبات: Feature, UI, Data-Access, Utility' },
      { id: 'module-boundaries', text: '3. فرض حدود الوحدات البرمجية لمنع فوضى الاستيراد' },
      { id: 'computation-caching', text: '4. التخزين المؤقت لعمليات البناء (Computation Caching)' },
      { id: 'affected-builds', text: '5. بناء واختبار المشاريع المتأثرة فقط (nx affected)' }
    ],
    sections: [
      {
        id: 'monorepo-concept',
        title: 'ما هو الـ Monorepo ولماذا تتفوق أداة Nx؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            الـ Monorepo يجمع كافة تطبيقات الشركة ومكتباتها المشتركة في مستودع Git واحد. وتتميز أداة Nx ببناء خريطة بيانية عميقة للاعتماديات (Dependency Graph) تسمح بتشغيل المهام بسرعة فائقة ودعم مشاركة الأكواد دون الحاجة لنشر حزم NPM وسيطة.
          </p>
        `
      },
      {
        id: 'library-types',
        title: 'تصنيف المكتبات: Feature, UI, Data-Access, Utility',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تقسيم النطاق (Domain) إلى أربعة أنواع من المكتبات: <strong>Feature</strong> للصفحات التفاعلية، <strong>Data-Access</strong> للخدمات وحالة البيانات، <strong>UI</strong> للمكونات التقديمية المجردة، و <strong>Utility</strong> للوظائف المساعدة المشتركة.
          </p>
        `
      },
      {
        id: 'module-boundaries',
        title: 'فرض حدود الوحدات البرمجية لمنع فوضى الاستيراد',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            استخدام قواعد ESLint الصارمة التي توفرها Nx (Module Boundary Rules) لمنع نطاق مثل "المدفوعات" من استيراد كود داخلي من نطاق "الكتالوج" بشكل مباشر، مما يحافظ على استقلالية ونظافة المعمارية.
          </p>
        `
      },
      {
        id: 'computation-caching',
        title: 'التخزين المؤقت لعمليات البناء (Computation Caching)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            لا تقوم Nx بإعادة بناء أو اختبار أي كود لم تتغير مدخلاته؛ بل تسترجع النتيجة فورياً من الكاش المحلي أو السحابي (Nx Cloud)، مما يقلص زمن عمليات الـ CI/CD من 40 دقيقة إلى دقيقتين فقط.
          </p>
        `
      },
      {
        id: 'affected-builds',
        title: 'بناء واختبار المشاريع المتأثرة فقط (nx affected)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            عند رفع كود Pull Request، يقوم أمر <code>nx affected:test</code> بفحص التغييرات وتحديد واختبار التطبيقات التي تأثرت بهذا التغيير فقط دون إضاعة الوقت في فحص باقي النظام المستقر.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل Monorepo يعني دمج الكود في ملف نهائي واحد عند النشر؟',
        a: 'لا، كل تطبيق في الـ Monorepo يتم بناؤه وتعبئته ونشره كحاوية أو موقع مستقل تماماً عند الإنتاج.'
      }
    ]
  },
  {
    slug: 'angular-reactive-forms-and-validation',
    title: 'النماذج التفاعلية في أنجولار (Reactive Forms): بناء نماذج معقدة وتحقق متقدم',
    metaTitle: 'دليل النماذج التفاعلية Reactive Forms في أنجولار | يوسف الغمري',
    metaDesc: 'احترف بناء النماذج المعقدة في أنجولار: FormGroup, FormArray, أدوات التحقق المخصصة Async Validators، والتحقق التفاعلي الصارم.',
    category: 'angular',
    categoryName: 'أنجولار (Angular)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/angular-guide.svg',
    imageAlt: 'النماذج التفاعلية في أنجولار Reactive Forms',
    relatedServiceUrl: '/ar/services/frontend-development.html',
    relatedServiceName: 'تطوير النظم وتطبيقات الأعمال',
    intro: 'تعتبر معالجة النماذج في أنجولار (Reactive Forms) الأكثر قوة ونضجاً في عالم الويب. تمنحك تحكماً برمجياً كاملاً في شجرة عناصر النموذج، وتتبع التغييرات لحظياً، وتطبيق شروط تحقق ديناميكية معقدة بدقة بالغة.',
    toc: [
      { id: 'reactive-vs-template', text: '1. الفرق بين Reactive Forms و Template-driven Forms' },
      { id: 'formgroup-formcontrol', text: '2. بناء النماذج عبر FormControl و FormGroup و FormBuilder' },
      { id: 'formarray-dynamic', text: '3. الحقول الديناميكية المتغيرة باستخدام FormArray' },
      { id: 'custom-validators', text: '4. كتابة أدوات تحقق مخصصة وتزامنية وغير تزامنية (Async Validators)' },
      { id: 'typed-forms', text: '5. أمان الأنواع الصارم عبر النماذج المطبوعة (Strictly Typed Forms)' }
    ],
    sections: [
      {
        id: 'reactive-vs-template',
        title: 'الفرق بين Reactive Forms و Template-driven Forms',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تعتمد النماذج التفاعلية على بناء النموذج داخل كود TypeScript أولاً، مما يجعلها متزامنة بالكامل، سهلة الاختبار في اختبارات الوحدات، وقابلة للتطوير للنماذج التي تحتوي على مئات الحقول.
          </p>
        `
      },
      {
        id: 'formgroup-formcontrol',
        title: 'بناء النماذج عبر FormControl و FormGroup و FormBuilder',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            استخدام أداة <code>FormBuilder</code> لحقن هيكل الحقول بسهولة، ومتابعة تدفقات القيم عبر <code>valueChanges</code> وتدفقات حالة الصلاحية <code>statusChanges</code> كـ Observables تفاعلية.
          </p>
        `
      },
      {
        id: 'formarray-dynamic',
        title: 'الحقول الديناميكية المتغيرة باستخدام FormArray',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تتيح <code>FormArray</code> إضافة أو حذف حقول أو مجموعات حقول ديناميكياً أثناء تشغيل التطبيق بنقرة زر من المستخدم (مثل إضافة بنود الفاتورة أو أرقام هواتف إضافية).
          </p>
        `
      },
      {
        id: 'custom-validators',
        title: 'كتابة أدوات تحقق مخصصة وتزامنية وغير تزامنية (Async Validators)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            برمجة أدوات تحقق مخصصة لفحص مطابقة كلمتي المرور، أو أدوات غير تزامنية (Async) تتخاطب مع خادم الـ API للتحقق من عدم تكرار اسم المستخدم أثناء كتابته في الحقل مع إيقاف مؤقت Debounce.
          </p>
        `
      },
      {
        id: 'typed-forms',
        title: 'أمان الأنواع الصارم عبر النماذج المطبوعة (Strictly Typed Forms)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يدعم أنجولار النماذج المطبوعة بقوة، حيث يتعرف TypeScript على نوع كل حقل وقيمته، مما يمنع تمرير أرقام لحقول نصية أو قراءة حقول غير معرفة في شجرة النموذج.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'كيف نمنع ظهور أخطاء التحقق قبل أن يلمس المستخدم الحقل؟',
        a: 'يتم فحص خاصية <code>control.touched</code> أو <code>control.dirty</code> قبل عرض رسائل الخطأ في الواجهة.'
      }
    ]
  },
  {
    slug: 'angular-ssr-and-hydration-guide',
    title: 'العرض من جهة السيرفر في أنجولار (Angular SSR) والإنعاش التدريجي (Hydration)',
    metaTitle: 'دليل Angular SSR وتقنية Hydration الحديثة لتسريع السيو | يوسف الغمري',
    metaDesc: 'شرح متكامل لـ Angular Universal و SSR الحديث: تفعيل الإنعاش الخالي من الوميض Non-destructive Hydration، وتصدر نتائج محركات البحث.',
    category: 'angular',
    categoryName: 'أنجولار (Angular)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/angular-guide.svg',
    imageAlt: 'العرض من جهة السيرفر في أنجولار Angular SSR',
    relatedServiceUrl: '/ar/services/seo-search-engine-optimization.html',
    relatedServiceName: 'تهيئة محركات البحث والأداء الفني',
    intro: 'كان التحدي الأكبر لتطبيقات أنجولار القديمة هو صعوبة قراءة المحتوى من روبوتات محركات البحث وتأخر زمن العرض الأولي. حل أنجولار الحديث هذه المعضلة عبر نظام SSR مدمج وتقنية الإنعاش غير التدميري (Non-destructive Hydration).',
    toc: [
      { id: 'why-ssr', text: '1. لماذا تحتاج تطبيقات أنجولار إلى العرض من جهة السيرفر؟' },
      { id: 'enable-ssr-cli', text: '2. تفعيل SSR بنقرة واحدة عبر Angular CLI' },
      { id: 'hydration-magic', text: '3. سحر الإنعاش غير التدميري والتخلص من وميض الشاشة' },
      { id: 'dom-server-safety', text: '4. معالجة آمنة لكائنات المتصفح (window, document)' },
      { id: 'meta-and-seo', text: '5. إدارة وسوم الميتا والسيو التفاعلية عبر Meta Service' }
    ],
    sections: [
      {
        id: 'why-ssr',
        title: 'لماذا تحتاج تطبيقات أنجولار إلى العرض من جهة السيرفر؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يقوم خادم Node.js بتوليد كود الـ HTML الكامل للصفحة وإرساله للمتصفح فوراً، مما يمكن محركات البحث مثل جوجل وروبوتات مواقع التواصل من فهرسة المحتوى وعرض بطاقات المشاركة بدقة متناهية.
          </p>
        `
      },
      {
        id: 'enable-ssr-cli',
        title: 'تفعيل SSR بنقرة واحدة عبر Angular CLI',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            في المشاريع الجديدة يمكن تفعيل SSR باختياره أثناء الإنشاء أو إضافته لأي مشروع قائم عبر أمر واحد: <code>ng add @angular/ssr</code> ليقوم النظام بإعداد خادم Express وملفات التكوين آلياً.
          </p>
        `
      },
      {
        id: 'hydration-magic',
        title: 'سحر الإنعاش غير التدميري والتخلص من وميض الشاشة',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            في السابق كان المتصفح يمسح كود HTML القادم من السيرفر ويعيد رسمه من الصفر مما يسبب وميضاً مزعجاً (Flicker). مع <code>provideClientHydration()</code>، يعيد أنجولار ربط مستمعات الأحداث بشجرة العناصر الحالية دون إعادة تدميرها ورسمها.
          </p>
        `
      },
      {
        id: 'dom-server-safety',
        title: 'معالجة آمنة لكائنات المتصفح (window, document)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            نظراً لأن كود السيرفر لا يمتلك كائن <code>window</code> أو <code>localStorage</code>، يجب استخدام دالة <code>isPlatformBrowser()</code> قبل الوصول لتلك الكائنات لتفادي أخطاء السيرفر المفاجئة.
          </p>
        `
      },
      {
        id: 'meta-and-seo',
        title: 'إدارة وسوم الميتا والسيو التفاعلية عبر Meta Service',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            استخدام خدمتي <code>Title</code> و <code>Meta</code> المدمجتين في أنجولار لتحديث وسوم العنوان والوصف وبيانات OpenGraph تلقائياً لكل صفحة ومقال قبل إرسال مخرجات الـ HTML إلى الزائر.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل يدعم Angular SSR التوليد الثابت مسبقاً (SSG / Prerendering)؟',
        a: 'نعم، يدعم أنجولار ميزة Prerendering لتوليد ملفات HTML ثابتة لصفحاتك أثناء وقت البناء Build-time لتقديم أعلى سرعة ممكنة.'
      }
    ]
  },
  {
    slug: 'angular-testing-best-practices',
    title: 'اختبار تطبيقات أنجولار باحترافية: دليل اختبارات الوحدات والتكامل مع Jest و Cypress',
    metaTitle: 'دليل اختبار تطبيقات Angular: اختبارات الوحدات و E2E | يوسف الغمري',
    metaDesc: 'تعلم كيف تختبر مكونات وخدمات أنجولار: استخدام TestBed، محاكاة الخدمات المعتمدة، استبدال Karma بـ Jest، واختبارات E2E مع Cypress.',
    category: 'angular',
    categoryName: 'أنجولار (Angular)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/angular-guide.svg',
    imageAlt: 'اختبار تطبيقات أنجولار الاحترافية',
    relatedServiceUrl: '/ar/services/frontend-development.html',
    relatedServiceName: 'ضمان الجودة واختبار البرمجيات',
    intro: 'صُمم أنجولار منذ نشأته مع مراعاة قابلية الاختبار كأولوية قصوى. بفضل معمارية حقن التبعيات (DI)، يمكنك عزل واختبار أي خدمة أو مكون بسهولة وسرعة بالغة.',
    toc: [
      { id: 'testbed-setup', text: '1. إعداد بيئة الاختبار المعزولة عبر TestBed' },
      { id: 'testing-services', text: '2. اختبار الخدمات ومحاكاة طلبات HTTP عبر HttpTestingController' },
      { id: 'component-fixture', text: '3. اختبار تفاعلات المكونات عبر ComponentFixture' },
      { id: 'migrating-to-jest', text: '4. الانتقال من Karma البطيء إلى Jest أو Web Test Runner' },
      { id: 'cypress-e2e', text: '5. اختبارات العمليات الكاملة من الطرف للطرف مع Cypress' }
    ],
    sections: [
      {
        id: 'testbed-setup',
        title: 'إعداد بيئة الاختبار المعزولة عبر TestBed',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يوفر كائن <code>TestBed</code> بيئة تشغيل مصغرة لمحاكاة إطار عمل أنجولار وتكوين المكونات المستقلة وحقن الخدمات الوهمية المعزولة لاختبار كل جزء بمفرده.
          </p>
        `
      },
      {
        id: 'testing-services',
        title: 'اختبار الخدمات ومحاكاة طلبات HTTP عبر HttpTestingController',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            استخدام <code>provideHttpClientTesting()</code> لاعتراض طلبات الشبكة، والتحقق من صحة رابط الـ API ونوع الطلب (GET/POST)، وإرسال استجابة وهمية فورية لاختبار المنطق الداخلي.
          </p>
        `
      },
      {
        id: 'component-fixture',
        title: 'اختبار تفاعلات المكونات عبر ComponentFixture',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يتيح <code>ComponentFixture</code> فحص قيم الـ HTML المطبوعة، وإطلاق نقرات الأزرار برمجياً، ثم استدعاء <code>fixture.detectChanges()</code> للتحقق من تغير الواجهة استجابة لتفاعل المستخدم.
          </p>
        `
      },
      {
        id: 'migrating-to-jest',
        title: 'الانتقال من Karma البطيء إلى Jest أو Web Test Runner',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            أصبح نظام Karma قديماً وبطيئاً؛ ويوصى اليوم باستخدام مشغلات الاختبارات الحديثة مثل Jest أو Web Test Runner أو التجريبي المدمج في Angular CLI لتشغيل الاختبارات في أجزاء من الثانية.
          </p>
        `
      },
      {
        id: 'cypress-e2e',
        title: 'اختبارات العمليات الكاملة من الطرف للطرف مع Cypress',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            كتابة اختبارات E2E واقعية تحاكي سيناريوهات المستخدم الحقيقية، مثل إنشاء حساب جديد وتعبئة النماذج والتنقل بين الصفحات للتأكد من سلامة النظام قبل النشر.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل أحتاج لكتابة ملف .spec.ts لكل مكون؟',
        a: 'نعم للمكونات الحيوية والخدمات التي تحوي منطق حسابي؛ أما المكونات التقديمية البسيطة فيكفي اختبارها عبر قصص Storybook أو اختبارات التكامل.'
      }
    ]
  },
  {
    slug: 'angular-security-and-best-practices',
    title: 'أمان وتأمين تطبيقات أنجولار (Angular Security): دليل الوقاية من XSS و CSRF وحقن البيانات',
    metaTitle: 'دليل أمان وحماية تطبيقات أنجولار Angular Security | يوسف الغمري',
    metaDesc: 'أفضل الممارسات الأمنية لتأمين تطبيقات أنجولار: نظام DomSanitizer، حماية XSRF المدمجة، سياسات CSP الصارمة، وتأمين تدفقات البيانات.',
    category: 'angular',
    categoryName: 'أنجولار (Angular)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/angular-guide.svg',
    imageAlt: 'أمان وتأمين تطبيقات أنجولار Angular Security',
    relatedServiceUrl: '/ar/services/frontend-development.html',
    relatedServiceName: 'أمن وتطوير التطبيقات البرمجية',
    intro: 'يعتبر أنجولار من أكثر أطر الويب صرامة في الأمان منذ التصميم الأساسي. فهو يعتبر كافة القيم غير موثوقة افتراضياً ويقوم بتطهيرها لمنع هجمات Cross-Site Scripting (XSS). يشرح هذا الدليل كيفية الاستفادة من هذه الطبقات لحماية بيانات العملاء والمؤسسة.',
    toc: [
      { id: 'dom-sanitizer', text: '1. التطهير التلقائي ونظام DomSanitizer' },
      { id: 'xsrf-protection', text: '2. الحماية المدمجة ضد هجمات تزوير الطلبات (CSRF/XSRF)' },
      { id: 'csp-strict', text: '3. فرض سياسة أمان المحتوى الصارمة (Content Security Policy)' },
      { id: 'route-guards-security', text: '4. حراس المسارات (CanActivate & Functional Guards)' },
      { id: 'template-injection', text: '5. تجنب ثغرات حقن القوالب (Template Injection)' }
    ],
    sections: [
      {
        id: 'dom-sanitizer',
        title: 'التطهير التلقائي ونظام DomSanitizer',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يقوم محرك قوالب أنجولار بفحص وتعقيم كافة القيم المدخلة في HTML والأنماط وروابط URL قبل حقنها في الـ DOM. لا تستخدم أبداً <code>bypassSecurityTrustHtml</code> إلا إذا كنت واثقاً تماماً من تعقيم المحتوى على الخادم مسبقاً.
          </p>
        `
      },
      {
        id: 'xsrf-protection',
        title: 'الحماية المدمجة ضد هجمات تزوير الطلبات (CSRF/XSRF)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يدعم عميل <code>HttpClient</code> في أنجولار قراءة رمز الأمان تلقائياً من كوكي <code>XSRF-TOKEN</code> وإرساله في ترويسة <code>X-XSRF-TOKEN</code> مع كل طلب HTTP طافر (POST/PUT/DELETE) لردع الهجمات العابرة للمواقع.
          </p>
        `
      },
      {
        id: 'csp-strict',
        title: 'فرض سياسة أمان المحتوى الصارمة (Content Security Policy)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يدعم أنجولار الحديث تطبيق سياسات CSP الصارمة بدون الحاجة لتعليمة <code>'unsafe-inline'</code> أو <code>'unsafe-eval'</code> عبر استخدام رموز Nonce في ترويسات السيرفر.
          </p>
        `
      },
      {
        id: 'route-guards-security',
        title: 'حراس المسارات (CanActivate & Functional Guards)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            استخدام الحراس الوظيفيين (Functional Guards) لمنع المستخدمين غير المصرح لهم من الوصول للوحات الإدارة، مع تذكر أن الحماية الحقيقية النهائية للبيانات يجب أن تتم دائماً على خادم الواجهة الخلفية.
          </p>
        `
      },
      {
        id: 'template-injection',
        title: 'تجنب ثغرات حقن القوالب (Template Injection)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            لا تقم أبداً بإنشاء قوالب أنجولار ديناميكية من خلال دمج نصوص يدخلها المستخدمون؛ استخدم المكونات المكتوبة مسبقاً وميزة ComponentFactoryResolver أو <code>createEnvironmentInjector</code> المعتمدة.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل أنجولار محصن ضد XSS بنسبة 100%؟',
        a: 'أنجولار يوفر أعلى حماية افتراضية، ولكن إساءة استخدام دوال التجاوز (DomSanitizer bypass) قد تعيد فتح الثغرات إذا لم يتم التدقيق بحذر.'
      }
    ]
  }
];
