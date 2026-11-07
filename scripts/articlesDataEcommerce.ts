import { ArticleItem } from './types';

export const shopifyArticles: ArticleItem[] = [
  {
    slug: 'what-is-shopify',
    title: 'ما هي منصة شوبيفاي (Shopify)؟ الدليل الشامل لبدء التجارة الإلكترونية العالمية',
    metaTitle: 'ما هي منصة شوبيفاي Shopify وكيف تعمل؟ | دليل التجارة الإلكترونية | يوسف الغمري',
    metaDesc: 'دليل كامل لفهم منصة Shopify: كيفية عمل المنصة السحابية، إدارة الكتالوج، معالجة المدفوعات والشحن، وأهم الفروق عن المنصات الأخرى.',
    category: 'shopify',
    categoryName: 'شوبيفاي (Shopify)',
    date: '2025-02-14',
    readTime: '8 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/shopify-guide.svg',
    imageAlt: 'شعار شوبيفاي وتجارة التجزئة الإلكترونية',
    relatedServiceUrl: '/ar/services/shopify-store-development.html',
    relatedServiceName: 'تطوير متاجر شوبيفاي الاحترافية',
    intro: 'تُعد منصة شوبيفاي (Shopify) الرائدة عالمياً في تقديم حلول التجارة الإلكترونية السحابية المتكاملة (SaaS). تتيح المنصة للتجار ورواد الأعمال إطلاق متاجر إلكترونية راقية بسرعة فائقة دون الحاجة للتعامل مع تعقيدات السيرفرات وقواعد البيانات.',
    toc: [
      { id: 'definition', text: '1. مفهوم منصة شوبيفاي ومميزاتها' },
      { id: 'store-management', text: '2. كيف تدير متجرك عبر Shopify؟' },
      { id: 'payments-shipping', text: '3. بوابات الدفع والشحن في شوبيفاي' },
      { id: 'pros-cons', text: '4. أبرز مميزات وعيوب المنصة' },
      { id: 'faq', text: '5. أسئلة شائعة' }
    ],
    sections: [
      {
        id: 'definition',
        title: 'مفهوم منصة شوبيفاي ومميزاتها',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            شوبيفاي هي منصة تجارة سحابية تستضيف حالياً ملايين المتاجر وتدير مئات المليارات من المعاملات حول العالم. توفر المنصة كل ما يحتاجه التاجر في مكان واحد: الاستضافة الآمنة، معالجة بطاقات الائتمان، كتالوج المنتجات، وتحليلات المبيعات.
          </p>
        `
      },
      {
        id: 'store-management',
        title: 'كيف تدير متجرك عبر Shopify؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تتميز لوحة تحكم شوبيفاي بسهولة استثنائية تمكن التاجر من إدارة المخزون، وتحديث الأسعار، وتجهيز الطلبات، وتتبع الشحنات، وإصدار التقارير المالية والضريبية بدقة بصرية مريحة على الحواسيب والهواتف الذكية.
          </p>
        `
      },
      {
        id: 'payments-shipping',
        title: 'بوابات الدفع والشحن في شوبيفاي',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تدعم شوبيفاي الربط مع بوابات الدفع العالمية مثل Stripe و PayPal، إلى جانب البوابات الإقليمية في الشرق الأوسط مثل Tap و Moyasar و PayTabs، مما يوفر بطاقات مدى و Apple Pay لجمهور الخليج.
          </p>
        `
      },
      {
        id: 'pros-cons',
        title: 'أبرز مميزات وعيوب المنصة',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            <strong>المميزات:</strong> أمان لا يضاهى (PCI DSS Level 1)، استقرار الخوادم 99.99%، ومتجر تطبيقات ضخم.<br>
            <strong>العيوب:</strong> رسوم شهرية متكررة، وعمولات إضافية على المعاملات عند استخدام بوابات دفع خارجية، ومحدودية تعديل كود الخادم الداخلي.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل شوبيفاي مناسب للبيع داخل السعودية والخليج؟',
        a: 'نعم، يدعم شوبيفاي اللغة العربية بالكامل وبوابات الدفع الخليجية والعملات المحلية مثل الريال السعودي والدرهم الإماراتي.'
      }
    ]
  },
  {
    slug: 'shopify-store-setup',
    title: 'كيفية إنشاء وضبط متجر Shopify احترافي من الصفر حتى أول عملية بيع',
    metaTitle: 'خطوات إنشاء متجر شوبيفاي وضبطه باحترافية | يوسف الغمري',
    metaDesc: 'خطوات إطلاق متجر Shopify خطوة بخطوة: اختيار النطاق، إعداد قنوات البيع، إضافة المنتجات والتصنيفات، وتهيئة بوابات الدفع.',
    category: 'shopify',
    categoryName: 'شوبيفاي (Shopify)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/shopify-guide.svg',
    imageAlt: 'خطوات إعداد متجر شوبيفاي الجديد',
    relatedServiceUrl: '/ar/services/shopify-store-development.html',
    relatedServiceName: 'تطوير وتخصيص متاجر شوبيفاي',
    intro: 'يمثل إطلاق متجر شوبيفاي بداية رحلة تجارية واعدة. يشرح هذا الدليل الخطوات التنفيذية العملية لضبط إعدادات المتجر من شراء النطاق وحتى استقبال أول دفعة نقدية بنجاح.',
    toc: [
      { id: 'domain-account', text: '1. إعداد الحساب والنطاق المخصص' },
      { id: 'catalog-structure', text: '2. تنظيم هيكل المنتجات والتصنيفات' },
      { id: 'taxes-shipping', text: '3. ضبط خيارات الشحن والضرائب' },
      { id: 'checkout-test', text: '4. اختبار مسار الدفع الكامل' }
    ],
    sections: [
      {
        id: 'domain-account',
        title: 'إعداد الحساب والنطاق المخصص',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يبدأ إطلاق المتجر باختيار اسم نطاق (Domain) جذاب وربطه بمتجر شوبيفاي مع تفعيل شهادة الأمان SSL التلقائية وضبط بيانات البريد الرسمي للشركة.
          </p>
        `
      },
      {
        id: 'catalog-structure',
        title: 'تنظيم هيكل المنتجات والتصنيفات',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            إنشاء مجموعات المنتجات الذكية (Smart Collections) التي تجمع المنتجات تلقائياً بناءً على وسوم Tags محددة، مما يسهل إدارة آلاف المنتجات بكفاءة.
          </p>
        `
      },
      {
        id: 'taxes-shipping',
        title: 'ضبط خيارات الشحن والضرائب',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تحديد نطاقات الشحن الجغرافية والشحن المجاني الترويجي، وضبط نسب ضريبة القيمة المضافة حسب بلد العميل لضمان الامتثال القانوني.
          </p>
        `
      },
      {
        id: 'checkout-test',
        title: 'اختبار مسار الدفع الكامل',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            إجراء عملية شراء تجريبية عبر وضع Bogus Gateway أو بطاقة تجريبية للتأكد من وصول رسائل تأكيد الطلب والفواتير وتحديث المخزون بنجاح.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل يمكن تجربة شوبيفاي مجاناً قبل الاشتراك؟',
        a: 'نعم، يوفر شوبيفاي فترات تجريبية تتيح بناء المتجر واختبار وظائفه قبل إطلاقه العام.'
      }
    ]
  },
  {
    slug: 'shopify-vs-woocommerce',
    title: 'مقارنة تفصيلية بين Shopify و WooCommerce: أيهما أفضل لمتجرك؟',
    metaTitle: 'مقارنة Shopify مقابل WooCommerce بالتفصيل | يوسف الغمري',
    metaDesc: 'مقارنة عميقة بين شوبيفاي وووكوميرس من حيث التكلفة، سهولة الاستخدام، قابلية التوسع، خيارات التخصيص، والتحكم في البيانات.',
    category: 'shopify',
    categoryName: 'شوبيفاي (Shopify)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/shopify-guide.svg',
    imageAlt: 'مقارنة شوبيفاي مقابل ووكوميرس',
    relatedServiceUrl: '/ar/services/shopify-store-development.html',
    relatedServiceName: 'تطوير المتاجر الإلكترونية',
    intro: 'المقارنة بين شوبيفاي وووكوميرس هي معركة بين البنية السحابية المدارة ذات الصيانة الصفرية والحرية مفتوحة المصدر غير المقيدة. نساعدك على اختيار المنصة الأنسب لحجم تجارتك.',
    toc: [
      { id: 'architecture', text: '1. الفروق الجوهرية في البنية المعمارية' },
      { id: 'costs', text: '2. مقارنة التكاليف الشهرية والإضافية' },
      { id: 'customization', text: '3. المرونة والتحكم البرمجي' },
      { id: 'verdict', text: '4. الحكم النهائي لاختيارك' }
    ],
    sections: [
      {
        id: 'architecture',
        title: 'الفروق الجوهرية في البنية المعمارية',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            شوبيفاي نظام مدار بالكامل يتولى الأمان والخوادم نيابة عنك، بينما WooCommerce يعمل كإضافة على ووردبريس ويتطلب منك اختيار الاستضافة وحمايتها وتحديثها دورياً.
          </p>
        `
      },
      {
        id: 'costs',
        title: 'مقارنة التكاليف الشهرية والإضافية',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            ووكوميرس مجاني كنواة وتدفع فقط للاستضافة والإضافات المدفوعة، بينما شوبيفاي يبدأ باشتراك شهري ثابت وعمولات مبيعات تتراوح بين 0.5% إلى 2% على بوابات الطرف الثالث.
          </p>
        `
      },
      {
        id: 'customization',
        title: 'المرونة والتحكم البرمجي',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يتفوق ووكوميرس في التخصيص البرمجي المطلق، بينما يقدم شوبيفاي تجربة أكثر استقراراً وخالية من صراعات تحديثات الإضافات المفاجئة.
          </p>
        `
      },
      {
        id: 'verdict',
        title: 'الحكم النهائي لاختيارك',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            اختر شوبيفاي إذا كنت تريد التركيز التام على التسويق والمبيعات وتفادي أي مهام برمجية. واختر ووكوميرس إذا كنت تمتلك فريقاً تقنياً وتريد تملك كافة بياناتك وتجنب العمولات الشهرية.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'أيهما أسهل للمبتدئين؟',
        a: 'شوبيفاي بلا شك أسهل وأسرع للمبتدئين بفضل توفيره لكافة الأدوات في منصة موحدة.'
      }
    ]
  },
  {
    slug: 'shopify-store-design',
    title: 'تخصيص وتطوير قوالب Shopify بالاعتماد على محرك Liquid',
    metaTitle: 'تخصيص وتطوير ثيمات Shopify عبر لغة Liquid | يوسف الغمري',
    metaDesc: 'دليل متقدم لتطوير قوالب شوبيفاي المخصصة: استخدام لغة Liquid، هيكلة ملفات الثيم OS 2.0، وتطوير أقسام قابلة للتعديل.',
    category: 'shopify',
    categoryName: 'شوبيفاي (Shopify)',
    date: '2025-02-14',
    readTime: '10 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/shopify-guide.svg',
    imageAlt: 'تطوير وتخصيص قوالب شوبيفاي',
    relatedServiceUrl: '/ar/services/shopify-store-development.html',
    relatedServiceName: 'تطوير وتخصيص قوالب شوبيفاي',
    intro: 'محرك Liquid هو لغة القوالب مفتوحة المصدر التي تمنح شوبيفاي مرونته الهائلة. يشرح هذا المقال كيف تبني قوالب عصرية تتوافق مع معمارية Online Store 2.0.',
    toc: [
      { id: 'liquid-basics', text: '1. أساسيات لغة Liquid البرمجية' },
      { id: 'os-two-architecture', text: '2. بنية قوالب شوبيفاي الحديثة OS 2.0' },
      { id: 'custom-sections', text: '3. تطوير Sections مخصصة مع JSON Schema' },
      { id: 'speed-optimization', text: '4. نصائح تحسين سرعة الثيم' }
    ],
    sections: [
      {
        id: 'liquid-basics',
        title: 'أساسيات لغة Liquid البرمجية',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تعتمد Liquid على ثلاثة عناصر أساسية: <strong>الكائنات (Objects)</strong> المغلفة بأقواس مزدوجة <code>{{ product.title }}</code>، <strong>الوسوم (Tags)</strong> للتحكم البرمجي <code>{% if product.available %}</code>، و <strong>الفلاتر (Filters)</strong> لتعديل المخرجات <code>{{ product.price | money }}</code>.
          </p>
        `
      },
      {
        id: 'os-two-architecture',
        title: 'بنية قوالب شوبيفاي الحديثة OS 2.0',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تعتمد معمارية OS 2.0 على قوالب بصيغة JSON تتيح إضافة وتحريك أقسام المكونات (Sections everywhere) في أي صفحة من صفحات المتجر وليس الصفحة الرئيسية فقط.
          </p>
        `
      },
      {
        id: 'custom-sections',
        title: 'تطوير Sections مخصصة مع JSON Schema',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            إضافة كود <code>{% schema %}</code> في نهاية ملف السكشن يتيح للتاجر تغيير الألوان، والنصوص، والصور مباشرة عبر المحرر المرئي دون لمس الأكواد البرمجية.
          </p>
        `
      },
      {
        id: 'speed-optimization',
        title: 'نصائح تحسين سرعة الثيم',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تجنب استدعاء طلبات Liquid متكررة داخل حلقات التكرار، وتأجيل تحميل نصوص JavaScript غير الحرجة لضمان أداء قياسي على الأجهزة الذكية.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل يمكن تعديل ثيم شوبيفاي بالكامل؟',
        a: 'نعم، عبر محرر الكود أو أداة Shopify CLI يمكنك تعديل ملفات CSS و Liquid و JS بالكامل.'
      }
    ]
  },
  {
    slug: 'shopify-apps-and-conversion',
    title: 'أفضل تطبيقات Shopify لزيادة المبيعات وتحسين معدلات التحويل (CRO)',
    metaTitle: 'أهم تطبيقات شوبيفاي لزيادة المبيعات والتحويل لعام 2026 | يوسف الغمري',
    metaDesc: 'قائمة بأفضل تطبيقات متجر شوبيفاي لرفع المبيعات: أدوات التسويق، إشعارات السلات المتروكة، المراجعات، وحزم المنتجات.',
    category: 'shopify',
    categoryName: 'شوبيفاي (Shopify)',
    date: '2025-02-14',
    readTime: '8 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/shopify-guide.svg',
    imageAlt: 'تطبيقات شوبيفاي المعتمدة لزيادة المبيعات',
    relatedServiceUrl: '/ar/services/shopify-store-development.html',
    relatedServiceName: 'حلول التجارة الإلكترونية وتطبيقاتها',
    intro: 'يعتبر اختيار التطبيقات المناسبة على شوبيفاي عاملاً فارقاً في مضاعفة العائد على الاستثمار. نستعرض أهم التطبيقات التي ترفع المبيعات دون الإضرار بسرعة المتجر.',
    toc: [
      { id: 'abandoned-carts', text: '1. تطبيقات استعادة السلات المتروكة' },
      { id: 'reviews-social-proof', text: '2. أدوات المراجعات وبناء الثقة' },
      { id: 'bundles-upsells', text: '3. تطبيقات الخصومات وحزم المنتجات (Bundles)' },
      { id: 'checkout-ux', text: '4. تطبيقات تحسين تجربة الشراء' }
    ],
    sections: [
      {
        id: 'abandoned-carts',
        title: 'تطبيقات استعادة السلات المتروكة',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تطبيقات المتابعة التلقائية عبر الرسائل القصيرة والواتساب تساعد في استرداد ما يصل إلى 15% من المبيعات الضائعة عبر إرسال كوبونات حصرية سريعة.
          </p>
        `
      },
      {
        id: 'reviews-social-proof',
        title: 'أدوات المراجعات وبناء الثقة',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تطبيقات مثل Loox أو Judge.me تعرض مراجعات العملاء الموثقة بالصور والفيديوهات، مما يرفع الثقة ومعدل التحويل بنسبة تفوق 20%.
          </p>
        `
      },
      {
        id: 'bundles-upsells',
        title: 'تطبيقات الخصومات وحزم المنتجات (Bundles)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تقديم عروض "اشتر 2 واحصل على 1 مجاناً" أو حزم المنتجات المكملة في صفحة السلة لرفع متوسط قيمة الطلب (Average Order Value).
          </p>
        `
      },
      {
        id: 'checkout-ux',
        title: 'تطبيقات تحسين تجربة الشراء',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تفعيل ميزة الشراء بنقرة واحدة وتثبيت أزرار الشراء العائمة Sticky Buy لتقليل خطوات الدفع إلى الحد الأدنى.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل تؤثر كثرة تطبيقات شوبيفاي على سرعة المتجر؟',
        a: 'نعم، يجب استخدام التطبيقات الضرورية فقط وحذف التطبيقات غير المستخدمة لتفادي حقن أكواد JavaScript ثقيلة.'
      }
    ]
  },
  {
    slug: 'shopify-store-optimization',
    title: 'الدليل العملي لتحسين السيو لمتجر Shopify وتصدر نتائج بحث جوجل',
    metaTitle: 'دليل سيو شوبيفاي الشامل | تهيئة المتجر لمحركات البحث | يوسف الغمري',
    metaDesc: 'خطوات تحسين محركات البحث لمتجر شوبيفاي: معالجة الروابط المكررة للمنتجات، تحسين أوصاف التصنيفات، وسرعة الصفحات.',
    category: 'shopify',
    categoryName: 'شوبيفاي (Shopify)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/shopify-guide.svg',
    imageAlt: 'تحسين السيو الداخلي لمتاجر شوبيفاي',
    relatedServiceUrl: '/ar/services/seo-search-engine-optimization.html',
    relatedServiceName: 'تحسين محركات البحث SEO للمتاجر',
    intro: 'يعتمد تصدر متجر شوبيفاي لنتائج جوجل على تهيئة الهيكل الداخلي وحل بعض السلوكيات التلقائية للنظام التي قد تسبب محتوى مكرراً.',
    toc: [
      { id: 'collections-structure', text: '1. هيكلة المتجر وتصنيفات المنتجات' },
      { id: 'duplicate-urls-fix', text: '2. حل مشكلة الروابط المكررة في شوبيفاي' },
      { id: 'images-alt', text: '3. كتابة نصوص بديلة للصور Alt Text' },
      { id: 'sitemap-schema', text: '4. إدارة خريطة الموقع والبيانات المنظمة' }
    ],
    sections: [
      {
        id: 'collections-structure',
        title: 'هيكلة المتجر وتصنيفات المنتجات',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            بناء تصنيفات هرمية منطقية واستهداف كلمات مفتاحية ذات نية شراء واضحة، مع إضافة نصوص وصفية ممتازة في صفحات المجموعات Collections.
          </p>
        `
      },
      {
        id: 'duplicate-urls-fix',
        title: 'حل مشكلة الروابط المكررة في شوبيفاي',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            ينشئ شوبيفاي افتراضياً رابطاً للمنتج تحت كل تصنيف. يتم تعديل ملف <code>product-card.liquid</code> ليوجه الرابط الرئيسي لصفحة المنتج الجذرية <code>/products/item</code> لتفادي تجزئة قوة الصفحة في جوجل.
          </p>
        `
      },
      {
        id: 'images-alt',
        title: 'كتابة نصوص بديلة للصور Alt Text',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            كتابة نصوص بديلة دقيقة بالعربية تعبر عن نوع المنتج ومواصفاته لضمان ظهوره في نتائج بحث صور جوجل.
          </p>
        `
      },
      {
        id: 'sitemap-schema',
        title: 'إدارة خريطة الموقع والبيانات المنظمة',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يولد شوبيفاي خريطة <code>sitemap.xml</code> تلقائياً ويجب ربطها بـ Google Search Console، مع التأكد من سلامة بيانات Product Schema المنظمة.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل شوبيفاي قوي في محركات البحث؟',
        a: 'نعم، مع التكوين الصحيح للميتا داتا وهندسة المحتوى يحقق شوبيفاي مراتب ممتازة في جوجل.'
      }
    ]
  },
  {
    slug: 'shopify-payment-gateways-guide',
    title: 'بوابات الدفع الإلكتروني في Shopify: طرق الربط والرسوم والخيارات في الخليج',
    metaTitle: 'دليل بوابات الدفع في شوبيفاي للسوق السعودي والخليجي | يوسف الغمري',
    metaDesc: 'شرح شامل لبوابات الدفع المعتمدة في شوبيفاي: ميسر، تاب، هايبر باي، وباي تابس، مع توضيح رسوم المعاملات وتفعيل مدى.',
    category: 'shopify',
    categoryName: 'شوبيفاي (Shopify)',
    date: '2025-02-14',
    readTime: '8 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/shopify-guide.svg',
    imageAlt: 'بوابات الدفع المعتمدة في متجر شوبيفاي',
    relatedServiceUrl: '/ar/services/shopify-store-development.html',
    relatedServiceName: 'ربط بوابات الدفع للمتاجر',
    intro: 'يعتبر تفعيل وسائل الدفع المحلية مثل مدى و Apple Pay العامل الحاسم لنجاح متجر شوبيفاي في السوق السعودي والخليجي.',
    toc: [
      { id: 'gcc-gateways', text: '1. خيارات الدفع المتاحة في السوق السعودي والخليجي' },
      { id: 'shopify-fees', text: '2. رسوم شوبيفاي الإضافية على المعاملات' },
      { id: 'integration-steps', text: '3. خطوات الربط والتفعيل الرسمي' },
      { id: 'troubleshooting', text: '4. نصائح تفادي تعليق العمليات' }
    ],
    sections: [
      {
        id: 'gcc-gateways',
        title: 'خيارات الدفع المتاحة في السوق السعودي والخليجي',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            توفر بوابات مثل Moyasar و Tap Payments و PayTabs تكاملاً معتمداً مع شوبيفاي لدعم شبكة مدى الوطنية و Apple Pay والبطاقات الائتمانية العالمية.
          </p>
        `
      },
      {
        id: 'shopify-fees',
        title: 'رسوم شوبيفاي الإضافية على المعاملات',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يفرض شوبيفاي رسوماً إضافية تتراوح بين 0.5% لباقة Advanced و 2% لباقة Basic عند استخدام بوابات دفع غير تابعة لـ Shopify Payments.
          </p>
        `
      },
      {
        id: 'integration-steps',
        title: 'خطوات الربط والتفعيل الرسمي',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تثبيت تطبيق بوابة الدفع المعتمد من متجر التطبيقات وإدخال مفاتيح الربط (API Keys) الصادرة من لوحة تحكم مزود الخدمة.
          </p>
        `
      },
      {
        id: 'troubleshooting',
        title: 'نصائح تفادي تعليق العمليات',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            التأكد من تطابق بيانات السجل التجاري مع الحساب البنكي والامتثال لمعايير 3D Secure لتفادي رفض العمليات البنكية.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل يدعم شوبيفاي الدفع عند الاستلام (COD)؟',
        a: 'نعم، يمكن تفعيل خيار الدفع عند الاستلام بسهولة من إعدادات المدفوعات.'
      }
    ]
  },
  {
    slug: 'shopify-dropshipping-strategies',
    title: 'دليل الدروب شيبينغ الشامل عبر Shopify: استراتيجيات اختيار المنتجات والموردين',
    metaTitle: 'دليل الدروب شيبينغ على شوبيفاي 2026 | يوسف الغمري',
    metaDesc: 'دليل المبتدئين في دروب شيبينغ شوبيفاي: أسرار اختيار المنتجات الرابحة، ربط الموردين، حساب هوامش الربح، وأتمتة الطلبات.',
    category: 'shopify',
    categoryName: 'شوبيفاي (Shopify)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/shopify-guide.svg',
    imageAlt: 'استراتيجيات الدروب شيبينغ على شوبيفاي',
    relatedServiceUrl: '/ar/services/shopify-store-development.html',
    relatedServiceName: 'تطوير منصات التجارة الإلكترونية',
    intro: 'يعتبر الدروب شيبينغ أحد أشهر نماذج العمل الرقمية التي لا تتطلب رأس مال لتخزين البضائع. نوضح هنا كيفية إدارته باحترافية عبر شوبيفاي.',
    toc: [
      { id: 'business-model', text: '1. ما هو نموذج عمل الدروب شيبينغ؟' },
      { id: 'winning-products', text: '2. اختيار النيتش والمنتجات عالية الطلب' },
      { id: 'supplier-apps', text: '3. تطبيقات الربط مع الموردين المعتمدين' },
      { id: 'customer-service', text: '4. خدمة العملاء وتقليل استرجاع المنتجات' }
    ],
    sections: [
      {
        id: 'business-model',
        title: 'ما هو نموذج عمل الدروب شيبينغ؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تعرض المنتجات على متجرك وعندما يشتري العميل، يقوم المورد بشحن الطلب مباشرة إلى العميل مع احتفاظك بفارق السعر كأرباح صافية.
          </p>
        `
      },
      {
        id: 'winning-products',
        title: 'اختيار النيتش والمنتجات عالية الطلب',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            التركيز على منتجات تحل مشاكل حقيقية (Problem-solving) أو منتجات فريدة يصعب العثور عليها في المتاجر الواقعية، مع هوامش ربح لا تقل عن 30%.
          </p>
        `
      },
      {
        id: 'supplier-apps',
        title: 'تطبيقات الربط مع الموردين المعتمدين',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            استخدام تطبيقات مثل DSers أو Spocket لمزامنة المخزون والأسعار وتنفيذ الطلبات بنقرة واحدة لدى الموردين.
          </p>
        `
      },
      {
        id: 'customer-service',
        title: 'خدمة العملاء وتقليل استرجاع المنتجات',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            توفير أوقات شحن واضحة وسياسة استرجاع شفافة لتفادي النزاعات المالية مع العملاء وبوابات الدفع.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل الدروب شيبينغ قانوني في السعودية؟',
        a: 'نعم، بشرط استخراج وثيقة العمل الحر أو السجل التجاري والالتزام بأنظمة حماية المستهلك.'
      }
    ]
  },
  {
    slug: 'shopify-speed-optimization',
    title: 'تسريع متجر شوبيفاي وتقليل وقت التحميل لرفع المبيعات وتجربة المستخدم',
    metaTitle: 'كيفية تسريع متجر شوبيفاي وتحسين نقاط السرعة | يوسف الغمري',
    metaDesc: 'استراتيجيات تسريع متاجر Shopify: ضغط الصور بدون فقدان الجودة، تنظيف أكواد التطبيقات القديمة، وتأجيل نصوص جافاسكريبت.',
    category: 'shopify',
    categoryName: 'شوبيفاي (Shopify)',
    date: '2025-02-14',
    readTime: '8 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/shopify-guide.svg',
    imageAlt: 'تسريع متجر شوبيفاي',
    relatedServiceUrl: '/ar/services/speed-performance-optimization.html',
    relatedServiceName: 'تحسين السرعة والأداء',
    intro: 'كل ثانية تأخير في تحميل متجر شوبيفاي قد تكلفك خسارة ما يصل إلى 7% من المبيعات. يستعرض هذا المقال خطوات عملية لتسريع متجرك.',
    toc: [
      { id: 'speed-impact', text: '1. تأثير سرعة المتجر على المبيعات' },
      { id: 'app-audit', text: '2. تدقيق التطبيقات والأكواد المهملة' },
      { id: 'image-formats', text: '3. ضغط وتنسيق الصور بالصيغ الحديثة' },
      { id: 'theme-choice', text: '4. اختيار الثيمات السريعة خفيفة الوزن' }
    ],
    sections: [
      {
        id: 'speed-impact',
        title: 'تأثير سرعة المتجر على المبيعات',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            السرعة العالية تحسن تجربة المستخدم على الهواتف الذكية وتخفض معدل الارتداد (Bounce Rate) وتساهم في تحسين ترتيب صفحاتك في جوجل.
          </p>
        `
      },
      {
        id: 'app-audit',
        title: 'تدقيق التطبيقات والأكواد المهملة',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            عند حذف تطبيق، قد يتبقى كود عالق في ملف <code>theme.liquid</code> يرسل طلبات HTTP غير ضرورية. إزالة تلك المخلفات يعيد للمتجر سرعته الأصلية.
          </p>
        `
      },
      {
        id: 'image-formats',
        title: 'ضغط وتنسيق الصور بالصيغ الحديثة',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            شوبيفاي يقدم صور WebP تلقائياً، ولكن رفع صور بوزن أقل من 150 كيلوبايت وأبعاد مناسبة يحافظ على سرعة استجابة الخادم.
          </p>
        `
      },
      {
        id: 'theme-choice',
        title: 'اختيار الثيمات السريعة خفيفة الوزن',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            اعتماد قوالب خفيفة مبنية بمعايير OS 2.0 النظيفة مثل ثيم Dawn الافتراضي بدلاً من القوالب القديمة المحشوة بالمؤثرات الثقيلة.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'ما هي درجة السرعة المقبولة في شوبيفاي؟',
        a: 'درجة تفوق 60 على أجهزة الجوال وأكثر من 85 على سطح المكتب تعد ممتازة للمتاجر الإلكترونية.'
      }
    ]
  },
  {
    slug: 'shopify-plus-enterprise-guide',
    title: 'شوبيفاي بلس (Shopify Plus): متى تحتاج الشركات الكبرى للترقية وما هي المميزات؟',
    metaTitle: 'دليل شوبيفاي بلس للشركات الكبرى Shopify Plus | يوسف الغمري',
    metaDesc: 'نظرة متعمقة على باقة Shopify Plus للمؤسسات: تخصيص صفحة الدفع بالكامل، إدارة مبيعات B2B، أتمتة Shopify Flow، والتوسع متعدد المتاجر.',
    category: 'shopify',
    categoryName: 'شوبيفاي (Shopify)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/shopify-guide.svg',
    imageAlt: 'منصة شوبيفاي بلس للشركات الكبرى',
    relatedServiceUrl: '/ar/services/shopify-store-development.html',
    relatedServiceName: 'حلول شوبيفاي المتقدمة للشركات',
    intro: 'Shopify Plus هو الإصدار الموجه للمؤسسات والعلامات التجارية الكبرى التي تحقق ملايين الدولارات سنوياً وتحتاج إلى تخصيص مطلق لصفحات الدفع وقنوات B2B.',
    toc: [
      { id: 'what-is-plus', text: '1. ما هو شوبيفاي بلس؟' },
      { id: 'core-features', text: '2. أبرز مميزات باقة المؤسسات' },
      { id: 'b2b-commerce', text: '3. تجارة الجملة B2B المدمجة' },
      { id: 'when-to-upgrade', text: '4. متى تقرر الترقية إلى Shopify Plus؟' }
    ],
    sections: [
      {
        id: 'what-is-plus',
        title: 'ما هو شوبيفاي بلس؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            هو الحل المؤسسي الذي يوفر قدرة استيعاب هائلة للمرور في مواسم العروض الكبرى مثل Black Friday و Cyber Monday دون أي توقف أو بطء في معالجة آلاف الطلبات في الدقيقة.
          </p>
        `
      },
      {
        id: 'core-features',
        title: 'أبرز مميزات باقة المؤسسات',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            إمكانية تخصيص صفحة إتمام الطلب بالكامل عبر Checkout Extensibility، وإنشاء حتى 9 متاجر تابعة لأسواق دولية مختلفة، وأتمتة المهام المعقدة عبر أداة Shopify Flow.
          </p>
        `
      },
      {
        id: 'b2b-commerce',
        title: 'تجارة الجملة B2B المدمجة',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            إدارة مبيعات التجزئة والجملة من نفس المتجر، مع قوائم أسعار وشروط دفع مخصصة (Net 30/60) لكل عميل تجاري.
          </p>
        `
      },
      {
        id: 'when-to-upgrade',
        title: 'متى تقرر الترقية إلى Shopify Plus؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يوصى بالترقية عندما تتجاوز مبيعات المتجر الشهرية 100 ألف دولار وتتطلب العمليات أدوات أتمتة وتخصيصات دقيقة لصفحة الدفع.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'كم تبلغ تكلفة الاشتراك في Shopify Plus؟',
        a: 'يبدأ الاشتراك من 2000 دولار شهرياً بناءً على حجم المبيعات الإجمالي والخدمات المطلوبة.'
      }
    ]
  }
];

export const opencartArticles: ArticleItem[] = [
  {
    slug: 'what-is-opencart',
    title: 'ما هو نظام أوبن كارت (OpenCart)؟ الدليل الشامل للتجارة الإلكترونية مفتوحة المصدر',
    metaTitle: 'ما هو نظام OpenCart ومميزاته؟ | يوسف الغمري',
    metaDesc: 'شرح متكامل لنظام أوبن كارت: بنيته البرمجية المبنية على MVC-L، لوحة التحكم السلسة، مميزاته للتجار، ومقارنته بالمنصات الأخرى.',
    category: 'opencart',
    categoryName: 'أوبن كارت (OpenCart)',
    date: '2025-02-14',
    readTime: '8 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/opencart-guide.svg',
    imageAlt: 'شعار أوبن كارت ومنصة التجارة مفتوحة المصدر',
    relatedServiceUrl: '/ar/services/opencart-store-development.html',
    relatedServiceName: 'تطوير متاجر أوبن كارت',
    intro: 'يُعد نظام أوبن كارت (OpenCart) أحد أشهر حلول التجارة الإلكترونية مفتوحة المصدر المكتوبة بلغة PHP. يقدم توازناً استثنائياً بين خفة الوزن وسهولة الاستخدام وإمكانات التوسع.',
    toc: [
      { id: 'definition', text: '1. مفهوم نظام OpenCart وبنيته المعمارية' },
      { id: 'features', text: '2. مميزات أوبن كارت لأصحاب المتاجر' },
      { id: 'hosting-requirements', text: '3. متطلبات استضافة أوبن كارت' },
      { id: 'is-it-right', text: '4. هل أوبن كارت مناسب لمشروعك؟' }
    ],
    sections: [
      {
        id: 'definition',
        title: 'مفهوم نظام OpenCart وبنيته المعمارية',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            أوبن كارت مبني وفق نمط التصميم MVC-L (Model-View-Controller-Language) مما يوفر فصلاً نظيفاً بين قواعد البيانات، ومنطق المعالجة، والواجهات، ولغات العرض المتعددة.
          </p>
        `
      },
      {
        id: 'features',
        title: 'مميزات أوبن كارت لأصحاب المتاجر',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            لوحة تحكم شديدة الوضوح، دعم مدمج لتعدد المتاجر واللغات والعملات، وسهولة تخصيص الضرائب والشحن دون الحاجة لإضافات خارجية مكلفة.
          </p>
        `
      },
      {
        id: 'hosting-requirements',
        title: 'متطلبات استضافة أوبن كارت',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يعمل بكفاءة على معظم استضافات PHP 8.1+ مع قواعد بيانات MySQL / MariaDB، ولا يستهلك موارد السيرفر الكثيفة مقارنة بمنصات مثل ماجنتو.
          </p>
        `
      },
      {
        id: 'is-it-right',
        title: 'هل أوبن كارت مناسب لمشروعك؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            هو الخيار المثالي للشركات التي تبحث عن متجر ذاتي الاستضافة بتكلفة منخفضة وتحكم كامل في قاعدة البيانات دون دفع عمولات على المبيعات.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل أوبن كارت مجاني؟',
        a: 'نعم، النظام الأساسي مجاني ومفتوح المصدر بالكامل، وتتحمل فقط تكاليف الاستضافة وتطوير الواجهات.'
      }
    ]
  },
  {
    slug: 'opencart-store-development',
    title: 'خطوات تطوير وإطلاق متجر إلكتروني احترافي بنظام OpenCart',
    metaTitle: 'تطوير متجر أوبن كارت خطوة بخطوة | يوسف الغمري',
    metaDesc: 'دليل عملي لبناء متجر OpenCart: تثبيت النظام على الخادم، ضبط اللغات والعملات، تثبيت القالب، وتكوين الشحن والمدفوعات.',
    category: 'opencart',
    categoryName: 'أوبن كارت (OpenCart)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/opencart-guide.svg',
    imageAlt: 'خطوات تطوير متجر أوبن كارت',
    relatedServiceUrl: '/ar/services/opencart-store-development.html',
    relatedServiceName: 'تطوير وتجهيز متاجر أوبن كارت',
    intro: 'يتطلب تطوير متجر أوبن كارت اتباع مسار تقني دقيق يبدأ من ضبط البيئة السحابية وحتى اختبار تجربة العميل. يوضح هذا المقال الخطوات المعيارية المعتمدة.',
    toc: [
      { id: 'server-setup', text: '1. تثبيت النظام وضبط قاعدة البيانات' },
      { id: 'localization', text: '2. تعريب المتجر وضبط الريال السعودي' },
      { id: 'theme-customization', text: '3. تخصيص القالب والصفحات الرئيسية' },
      { id: 'launch-orders', text: '4. إطلاق المتجر واستقبال الطلبات' }
    ],
    sections: [
      {
        id: 'server-setup',
        title: 'تثبيت النظام وضبط قاعدة البيانات',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            رفع ملفات أوبن كارت وإنشاء قاعدة بيانات UTF-8 مع بادئة جداول مخصصة، وضبط أذونات ملفات config.php لضمان الأمان الأولي.
          </p>
        `
      },
      {
        id: 'localization',
        title: 'تعريب المتجر وضبط الريال السعودي',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تثبيت حزمة اللغة العربية الفصحى وضبط العملة الافتراضية على الريال السعودي مع تحديد القيمة والرمز (ر.س) في الواجهات.
          </p>
        `
      },
      {
        id: 'theme-customization',
        title: 'تخصيص القالب والصفحات الرئيسية',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تثبيت قالب متجاوب وضبط البنرات الترويجية وتنسيق كتل المنتجات المميزة والأكثر مبيعاً في الصفحة الرئيسية.
          </p>
        `
      },
      {
        id: 'launch-orders',
        title: 'إطلاق المتجر واستقبال الطلبات',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تفعيل بوابات الدفع والشحن وإجراء طلبات فحص متكاملة للتأكد من وصول رسائل البريد وتوليد الفواتير بنجاح.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل يدعم أوبن كارت اللغات المتعددة؟',
        a: 'نعم، يدعم تعدد اللغات بشكل أصيل في كل منتج وتصنيف.'
      }
    ]
  },
  {
    slug: 'opencart-vs-other-platforms',
    title: 'مقارنة OpenCart مع ماجنتو وووكوميرس وشوبيفاي: نقاط القوة والضعف',
    metaTitle: 'مقارنة أوبن كارت مع ماجنتو وشوبيفاي وووكوميرس | يوسف الغمري',
    metaDesc: 'تحليل مقارن بين أوبن كارت وأبرز منصات التجارة الإلكترونية لتحديد الخيار الأمثل من حيث استهلاك الموارد والتكلفة.',
    category: 'opencart',
    categoryName: 'أوبن كارت (OpenCart)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/opencart-guide.svg',
    imageAlt: 'مقارنة أوبن كارت مع المنصات المنافسة',
    relatedServiceUrl: '/ar/services/opencart-store-development.html',
    relatedServiceName: 'استشارات منصات التجارة الإلكترونية',
    intro: 'يعتبر اختيار منصة التجارة استثماراً طويل الأمد. نستعرض في هذه المقارنة الفروقات الدقيقة بين أوبن كارت وأشهر منافسيه لمساعدتك في اتخاذ القرار الأمثل.',
    toc: [
      { id: 'performance-resources', text: '1. مقارنة استهلاك الموارد والسرعة' },
      { id: 'costs-licenses', text: '2. تكاليف التطوير والتراخيص' },
      { id: 'customization-depth', text: '3. تنوع الإضافات وسهولة التخصيص' },
      { id: 'decision', text: '4. متى تختار أوبن كارت؟' }
    ],
    sections: [
      {
        id: 'performance-resources',
        title: 'مقارنة استهلاك الموارد والسرعة',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يتفوق أوبن كارت بخفة وزنه الكبيرة مقارنة بماجنتو؛ فهو يقدم أداءً سريعاً دون الحاجة لسيرفرات مخصصة مكلفة.
          </p>
        `
      },
      {
        id: 'costs-licenses',
        title: 'تكاليف التطوير والتراخيص',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            لا توجد رسوم ترخيص سنوية أو نسب مقتطعة من المبيعات، وتكاليف موديولاته منخفضة مقارنة بإضافات ماجنتو وشوبيفاي.
          </p>
        `
      },
      {
        id: 'customization-depth',
        title: 'تنوع الإضافات وسهولة التخصيص',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يوفر سوق أوبن كارت آلاف الموديولات والقوالب الجاهزة التي تغطي كافة الاحتياجات التجارية واللوجستية.
          </p>
        `
      },
      {
        id: 'decision',
        title: 'متى تختار أوبن كارت؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            اختره إذا كان لديك متجر متوسط الحجم (حتى 50 ألف منتج) وتريد استقلالية برمجية كاملة وتكاليف تشغيلية منخفضة.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل أوبن كارت مناسب للمتاجر الكبيرة؟',
        a: 'نعم، مع تحسين استعلامات قواعد البيانات والتخزين المؤقت، يمكنه استيعاب عشرات الآلاف من المنتجات بكفاءة.'
      }
    ]
  },
  {
    slug: 'opencart-theme-design',
    title: 'تصميم وتخصيص قوالب OpenCart المتوافقة مع أجهزة الجوال',
    metaTitle: 'تصميم قوالب أوبن كارت الاحترافية المتجاوبة | يوسف الغمري',
    metaDesc: 'أفضل الممارسات لتصميم قوالب أوبن كارت عصرية: استخدام قوالب Journal، تخصيص واجهات التصفح، وتحسين تجربة العميل على الجوال.',
    category: 'opencart',
    categoryName: 'أوبن كارت (OpenCart)',
    date: '2025-02-14',
    readTime: '8 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/opencart-guide.svg',
    imageAlt: 'تصميم وتخصيص قوالب أوبن كارت',
    relatedServiceUrl: '/ar/services/opencart-store-development.html',
    relatedServiceName: 'تصميم واجهات قوالب أوبن كارت',
    intro: 'يعتبر التصميم المتجاوب للهواتف الذكية الركيزة الأساسية لتحقيق مبيعات مرتفعة في أوبن كارت. يشرح هذا المقال أساليب التخصيص المتقدمة.',
    toc: [
      { id: 'journal-theme', text: '1. قالب Journal الشهير ومميزاته' },
      { id: 'mobile-standards', text: '2. معايير التجاوب التام مع الجوال' },
      { id: 'quick-checkout', text: '3. تخصيص مسار إتمام الطلب السريع' },
      { id: 'testing-speed', text: '4. اختبار سرعة تجربة المستخدم' }
    ],
    sections: [
      {
        id: 'journal-theme',
        title: 'قالب Journal الشهير ومميزاته',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            يُعد ثيم Journal 3 المعيار القياسي لمتاجر أوبن كارت؛ حيث يضم محرر تخطيط بصري ومئات الأدوات التسويقية المدمجة.
          </p>
        `
      },
      {
        id: 'mobile-standards',
        title: 'معايير التجاوب التام مع الجوال',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تنسيق القوائم السفلية للشاشات الصغيرة وتحسين التباعد بين العناصر لتمكين التصفح السلس بالإبهام.
          </p>
        `
      },
      {
        id: 'quick-checkout',
        title: 'تخصيص مسار إتمام الطلب السريع',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            استبدال مسار الدفع الافتراضي المكون من 6 خطوات بصفحة واحدة (One Page Checkout) لتقليل معدل هجر السلات.
          </p>
        `
      },
      {
        id: 'testing-speed',
        title: 'اختبار سرعة تجربة المستخدم',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            ضغط أصول CSS وجافاسكريبت وتحسين عرض الخطوط العربية لمنع وميض النصوص أثناء التحميل.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل يدعم أوبن كارت اتجاه اليمين لليسار (RTL)؟',
        a: 'نعم، تدعم أغلب قوالب أوبن كارت الحديثة وقالب Journal اللغة العربية و RTL بشكل كامل.'
      }
    ]
  },
  {
    slug: 'opencart-essential-extensions',
    title: 'أفضل موديلات وإضافات OpenCart لتعزيز وظائف المبيعات وإدارة الشحن',
    metaTitle: 'أهم إضافات أوبن كارت لرفع المبيعات وإدارة المتجر | يوسف الغمري',
    metaDesc: 'استعراض لأفضل موديولات أوبن كارت: أدوات الشحن، بوابات الدفع، التخزين المؤقت، وتحسين السيو وسرعة التصفح.',
    category: 'opencart',
    categoryName: 'أوبن كارت (OpenCart)',
    date: '2025-02-14',
    readTime: '8 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/opencart-guide.svg',
    imageAlt: 'أفضل إضافات وموديولات أوبن كارت',
    relatedServiceUrl: '/ar/services/opencart-store-development.html',
    relatedServiceName: 'تطوير وتكامل موديولات أوبن كارت',
    intro: 'تتيح موديولات أوبن كارت توسيع وظائف المتجر دون المساس بالنواة عبر نظام تعديل الأكواد الافتراضي OCMOD.',
    toc: [
      { id: 'shipping-mods', text: '1. موديولات الشحن والربط اللوجستي' },
      { id: 'caching-tools', text: '2. أدوات التخزين المؤقت وتسريع الاستجابة' },
      { id: 'payment-mods', text: '3. موديولات الدفع المتقدم' },
      { id: 'seo-mods', text: '4. إضافات تحسين محركات البحث' }
    ],
    sections: [
      {
        id: 'shipping-mods',
        title: 'موديولات الشحن والربط اللوجستي',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            ربط متجرك بشركات أرامكس، سمسا، وسبل عبر موديولات مخصصة تتيح إنشاء الشحنات وطباعة البوليصات آلياً.
          </p>
        `
      },
      {
        id: 'caching-tools',
        title: 'أدوات التخزين المؤقت وتسريع الاستجابة',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تثبيت موديولات مثل NitroPack أو PageCache لتخزين مخرجات HTML مسبقاً وتخفيف الضغط عن قاعدة البيانات.
          </p>
        `
      },
      {
        id: 'payment-mods',
        title: 'موديولات الدفع المتقدم',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            توفير بوابات دفع تدعم بطاقات مدى و Apple Pay وخدمات التقسيط تمارا وتابي لرفع المبيعات في الخليج.
          </p>
        `
      },
      {
        id: 'seo-mods',
        title: 'إضافات تحسين محركات البحث',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            موديولات توليد وسوم الميتا التلقائية والروابط الذكية SEF وخريطة الموقع XML المحدثة تلقائياً.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'كيف يتم تثبيت موديول في أوبن كارت؟',
        a: 'يتم الرفع مباشرة عبر مثبت الإضافات المدمج في لوحة التحكم (OCMOD Extension Installer).'
      }
    ]
  },
  {
    slug: 'opencart-payment-methods',
    title: 'طرق ربط بوابات الدفع الإلكتروني في OpenCart لدول الخليج والشرق الأوسط',
    metaTitle: 'ربط بوابات الدفع في متجر أوبن كارت | مدى و Apple Pay | يوسف الغمري',
    metaDesc: 'دليل ربط بوابات الدفع في OpenCart: تفعيل بطاقات مدى، البطاقات الائتمانية، و Apple Pay عبر مزودين مثل تابي وميسر.',
    category: 'opencart',
    categoryName: 'أوبن كارت (OpenCart)',
    date: '2025-02-14',
    readTime: '8 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/opencart-guide.svg',
    imageAlt: 'تفعيل بوابات الدفع في أوبن كارت',
    relatedServiceUrl: '/ar/services/opencart-store-development.html',
    relatedServiceName: 'ربط بوابات الدفع الإلكتروني',
    intro: 'يقدم أوبن كارت معمارية مفتوحة تسهل ربط أي بوابة دفع بنكية عبر واجهات RESTful API أو موديولات التثبيت المباشرة.',
    toc: [
      { id: 'gateways-list', text: '1. أبرز بوابات الدفع المدعومة في الخليج' },
      { id: 'bnpl-options', text: '2. تفعيل خيارات الشراء الآن والدفع لاحقاً (BNPL)' },
      { id: 'api-setup', text: '3. خطوات الربط عبر مفاتيح API' },
      { id: 'security-standards', text: '4. معايير أمان معالجة المدفوعات' }
    ],
    sections: [
      {
        id: 'gateways-list',
        title: 'أبرز بوابات الدفع المدعومة في الخليج',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            بوابات Tap, PayTabs, Moyasar, و HyperPay توفر موديولات معتمدة ومحدثة دورياً لنظام أوبن كارت.
          </p>
        `
      },
      {
        id: 'bnpl-options',
        title: 'تفعيل خيارات الشراء الآن والدفع لاحقاً (BNPL)',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            إضافة تمارا وتابي تتيح للعملاء تقسيط المشتريات على دفعات، مما يرفع متوسط قيمة السلة بنسبة ملحوظة.
          </p>
        `
      },
      {
        id: 'api-setup',
        title: 'خطوات الربط عبر مفاتيح API',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            إدخال معرف التاجر والمفاتيح السرية في إعدادات الموديول، واختبار العمليات على بيئة تجريبية Sandbox قبل النشر.
          </p>
        `
      },
      {
        id: 'security-standards',
        title: 'معايير أمان معالجة المدفوعات',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            الامتثال لمعايير تشفير PCI-DSS وتفعيل شهادة SSL الإلزامية لحماية بيانات البطاقات أثناء الإرسال.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل يحتاج ربط بوابات الدفع لخبرة برمجية؟',
        a: 'غالباً توفر البوابات موديولات جاهزة وسهلة الإعداد مع مفاتيح API معتمدة.'
      }
    ]
  },
  {
    slug: 'opencart-seo-guide',
    title: 'تهيئة متجر أوبن كارت لمحركات البحث: الروابط والكلمات وبنية البيانات',
    metaTitle: 'دليل سيو أوبن كارت الشامل | تصدر نتائج بحث المتاجر | يوسف الغمري',
    metaDesc: 'خطوات تحسين سيو أوبن كارت: تفعيل SEO URLs، منع المحتوى المكرر، إضافة خرائط الموقع، وتطبيق Product Schema.',
    category: 'opencart',
    categoryName: 'أوبن كارت (OpenCart)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/opencart-guide.svg',
    imageAlt: 'تحسين السيو لمحركات البحث في أوبن كارت',
    relatedServiceUrl: '/ar/services/seo-search-engine-optimization.html',
    relatedServiceName: 'تحسين محركات البحث للمتاجر',
    intro: 'تحسين السيو في أوبن كارت يضمن تدفق زيارات مجانية عالية الجودة إلى صفحات منتجاتك من بحث قوقل.',
    toc: [
      { id: 'seo-urls', text: '1. تفعيل روابط SEO الصديقة للبحث' },
      { id: 'keywords-strategy', text: '2. هندسة الكلمات المفتاحية في صفحات المنتجات' },
      { id: 'sitemap-xml', text: '3. إعداد خريطة الموقع XML الرسمية' },
      { id: 'schema-data', text: '4. تطبيق ترميز Schema للمنتجات والتقييمات' }
    ],
    sections: [
      {
        id: 'seo-urls',
        title: 'تفعيل روابط SEO الصديقة للبحث',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تفعيل خيار Use SEO URLs من إعدادات السيرفر وضبط ملف <code>.htaccess</code> لتحويل الروابط من معلمات index.php إلى روابط نصية نظيفة.
          </p>
        `
      },
      {
        id: 'keywords-strategy',
        title: 'هندسة الكلمات المفتاحية في صفحات المنتجات',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            كتابة عناوين وأوصاف سيو فريدة لكل منتج وعدم تكرار الوصف العام للشركات المصنعة.
          </p>
        `
      },
      {
        id: 'sitemap-xml',
        title: 'إعداد خريطة الموقع XML الرسمية',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تفعيل تغذية Google Sitemap المدمجة في أوبن كارت وتقديم الرابط إلى Google Search Console لأرشفة سريعة.
          </p>
        `
      },
      {
        id: 'schema-data',
        title: 'تطبيق ترميز Schema للمنتجات والتقييمات',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            إضافة وسوم JSON-LD لظهور أسعار المنتجات، وحالة التوفر بالمخزون، ونجمات التقييم في مقتطفات نتائج البحث المنسقة.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'كيف أمنع الصفحات المكررة في أوبن كارت؟',
        a: 'باستخدام وسوم Canonical URLs في الهيدر لتوحيد النسخة المعيارية للمنتج.'
      }
    ]
  },
  {
    slug: 'opencart-speed-optimization',
    title: 'تقنيات تسريع متجر OpenCart وتحسين استجابة الخادم وقاعدة البيانات',
    metaTitle: 'دليل تسريع متجر أوبن كارت | تحسين أداء قواعد البيانات | يوسف الغمري',
    metaDesc: 'طرق هندسية لتسريع OpenCart: تحسين استعلامات MySQL، تفعيل التخزين المؤقت، ضغط الصور بصيغة WebP، واستخدام خادم Nginx السريع.',
    category: 'opencart',
    categoryName: 'أوبن كارت (OpenCart)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/opencart-guide.svg',
    imageAlt: 'تسريع متجر أوبن كارت وتحسين سرعة التصفح',
    relatedServiceUrl: '/ar/services/speed-performance-optimization.html',
    relatedServiceName: 'تحسين السرعة والأداء',
    intro: 'يعتبر تحسين قواعد البيانات واستعلامات الفهارس في أوبن كارت كلمة السر للوصول إلى أزمنة استجابة خادم تقل عن 200 مللي ثانية.',
    toc: [
      { id: 'mysql-indexing', text: '1. فهرسة وتحسين جداول MySQL' },
      { id: 'caching-mechanisms', text: '2. تفعيل تقنيات التخزين المؤقت Cache' },
      { id: 'image-compression', text: '3. ضغط الصور والأيقونات بصيغ حديثة' },
      { id: 'hosting-infra', text: '4. اختيار بيئة الاستضافة السحابية المناسبة' }
    ],
    sections: [
      {
        id: 'mysql-indexing',
        title: 'فهرسة وتحسين جداول MySQL',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            إضافة فهارس Indexes على أعمدة الجداول الأكثر طلباً (مثل product_id و category_id و status) يمنع فحص ملايين الصفوف ويسرع استجابة المتجر.
          </p>
        `
      },
      {
        id: 'caching-mechanisms',
        title: 'تفعيل تقنيات التخزين المؤقت Cache',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            استخدام Redis أو Memcached لحفظ استعلامات الفئات والقوائم الثابتة في الذاكرة العشوائية السريعة للسيرفر.
          </p>
        `
      },
      {
        id: 'image-compression',
        title: 'ضغط الصور والأيقونات بصيغ حديثة',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تحويل الصور تلقائياً إلى صيغة WebP وتفعيل التحميل الكسول Lazy Loading لتقليل حجم النقل عبر شبكات الهاتف.
          </p>
        `
      },
      {
        id: 'hosting-infra',
        title: 'اختيار بيئة الاستضافة السحابية المناسبة',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            الانتقال من الاستضافات المشتركة الضعيفة إلى خوادم سحابية VPS مع خادم ويب عالي الكفاءة مثل LiteSpeed أو Nginx.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل يدعم أوبن كارت خوادم LiteSpeed؟',
        a: 'نعم، ويعمل بكفاءة فائقة مع خوادم LiteSpeed وإضافات LSCache المخصصة.'
      }
    ]
  },
  {
    slug: 'opencart-multi-store-guide',
    title: 'إدارة عدة متاجر إلكترونية مختلفة من لوحة تحكم واحدة في OpenCart',
    metaTitle: 'ميزة المتاجر المتعددة في أوبن كارت (Multi-Store) | يوسف الغمري',
    metaDesc: 'شرح ميزة Multi-Store في أوبن كارت: إدارة علامات تجارية متعددة بنطاقات مختلفة ومنتجات مخصصة ومخزون مشترك من لوحة تحكم واحدة.',
    category: 'opencart',
    categoryName: 'أوبن كارت (OpenCart)',
    date: '2025-02-14',
    readTime: '8 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/opencart-guide.svg',
    imageAlt: 'إدارة المتاجر المتعددة في نظام أوبن كارت',
    relatedServiceUrl: '/ar/services/opencart-store-development.html',
    relatedServiceName: 'تطوير حلول المتاجر المتعددة',
    intro: 'تتيح ميزة المتاجر المتعددة (Multi-Store) المدمجة في أوبن كارت إطلاق عدة براندات بنطاقات وتصاميم مستقلة تماماً، مع إدارة المنتجات والطلبات من مكان واحد.',
    toc: [
      { id: 'multistore-concept', text: '1. مفهوم المتاجر المتعددة وكيف تعمل؟' },
      { id: 'setup-steps', text: '2. خطوات إعداد المتجر الثاني والنطاق' },
      { id: 'custom-pricing', text: '3. تخصيص الأسعار واللغات لكل متجر' },
      { id: 'unified-inventory', text: '4. إدارة المخزون الموحد والطلبات' }
    ],
    sections: [
      {
        id: 'multistore-concept',
        title: 'مفهوم المتاجر المتعددة وكيف تعمل؟',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تشغيل عدة نطاقات مختلفة تخدم أسواقاً مختلفة من نفس كود التثبيت وقاعدة البيانات دون الحاجة لترقية تراخيص أو شراء نسخ إضافية.
          </p>
        `
      },
      {
        id: 'setup-steps',
        title: 'خطوات إعداد المتجر الثاني والنطاق',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            توجيه نطاق المتجر الإضافي لنفس مسار السيرفر عبر Alias Domain، ثم إضافة المتجر من إعدادات النظام وتعيين قالبه وشعاره.
          </p>
        `
      },
      {
        id: 'custom-pricing',
        title: 'تخصيص الأسعار واللغات لكل متجر',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            تحديد أي منتجات تظهر في المتجر (أ) وأيها يظهر في المتجر (ب)، مع إمكانية تعديل الأسعار لتناسب كل سوق مستهدف.
          </p>
        `
      },
      {
        id: 'unified-inventory',
        title: 'إدارة المخزون الموحد والطلبات',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            مخزون مشترك تلقائي يمنع بيع نفس السلعة في متجرين في آن واحد، مع فلترة الطلبات لمعرفة مصدر كل عملية شراء.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل تتطلب المتاجر المتعددة تراخيص إضافية؟',
        a: 'لا، الميزة مدمجة ومجانية بالكامل في النواة الأساسية لأوبن كارت.'
      }
    ]
  },
  {
    slug: 'opencart-security-and-maintenance',
    title: 'دليل أمان وصيانة متجر OpenCart وحماية بيانات العملاء وبطاقات الدفع',
    metaTitle: 'تأمين وحماية متجر أوبن كارت | خطة الصيانة ومكافحة الاختراق | يوسف الغمري',
    metaDesc: 'إجراءات حماية متجر OpenCart: نقل مجلد التخزين storage، تغيير رابط لوحة الإدارة، تأمين ملفات config.php، وإدارة الصلاحيات.',
    category: 'opencart',
    categoryName: 'أوبن كارت (OpenCart)',
    date: '2025-02-14',
    readTime: '9 دقائق',
    author: 'يوسف الغمري',
    featuredImage: 'assets/images/articles/opencart-guide.svg',
    imageAlt: 'تأمين وحماية متجر أوبن كارت ضد الاختراق',
    relatedServiceUrl: '/ar/services/backend-development.html',
    relatedServiceName: 'أمن وحماية المتاجر والأنظمة الرقمية',
    intro: 'يعتمد أمان متجر أوبن كارت على عزل ملفات التخزين وتأمين مجلد لوحة التحكم. يستعرض هذا الدليل التدابير الوقائية اللازمة.',
    toc: [
      { id: 'storage-directory', text: '1. نقل مجلد Storage خارج مسار الويب العام' },
      { id: 'admin-path', text: '2. تأمين مجلد admin وتغيير مساره' },
      { id: 'config-permissions', text: '3. حماية ملفات الإعدادات وتصاريح الملفات' },
      { id: 'auto-backups', text: '4. النسخ الاحتياطي التلقائي لقاعدة البيانات' }
    ],
    sections: [
      {
        id: 'storage-directory',
        title: 'نقل مجلد Storage خارج مسار الويب العام',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            نقل مجلد التخزين (storage) إلى مسار أعلى من public_html يمنع الوصول المباشر عبر المتصفح لملفات الكاش وسجلات النظام وجلسات المستخدمين.
          </p>
        `
      },
      {
        id: 'admin-path',
        title: 'تأمين مجلد admin وتغيير مساره',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            إعادة تسمية مجلد <code>admin</code> أو حمايته بطبقة مصادقة HTTP Auth إضافية لمنع هجمات التخمين الآلية لسرقة كلمات المرور.
          </p>
        `
      },
      {
        id: 'config-permissions',
        title: 'حماية ملفات الإعدادات وتصاريح الملفات',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            ضبط تصريح ملفي <code>config.php</code> على القراءة فقط (444 أو 644) لمنع أي حقن أو تعديل غير مصرح به.
          </p>
        `
      },
      {
        id: 'auto-backups',
        title: 'النسخ الاحتياطي التلقائي لقاعدة البيانات',
        content: `
          <p class="text-zinc-300 leading-relaxed mb-4">
            جدولة نسخ احتياطي دوري يومي لقاعدة البيانات والملفات ورفعها إلى مساحة تخزين سحابية خارجية معزولة.
          </p>
        `
      }
    ],
    faqs: [
      {
        q: 'هل يحفظ أوبن كارت أرقام البطاقات الائتمانية؟',
        a: 'لا، تتم معالجة المدفوعات عبر بوابات مشفرة وفق معايير PCI-DSS دون تخزين البطاقات في قاعدة بيانات متجرك.'
      }
    ]
  }
];
