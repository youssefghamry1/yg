import { ArArticleItem } from './arArticlesTypes.js';

export const AR_PROGRESSIVE_GUIDES_PART1: ArArticleItem[] = [
  // 1. Enterprise PHP APIs, Security & Async Runtimes
  {
    slug: 'enterprise-php-api-architecture-api-platform-oauth2-jwt-graphql-reverb',
    categoryKey: 'php',
    categoryLabel: 'بي إتش بي والأنظمة الخلفية (PHP & Backend)',
    badge: 'PHP المؤسسي · API Platform 4 · FrankenPHP · Swoole',
    title:
      'معمارية واجهات البرمجة المؤسسية في PHP والأمان وبيئات التشغيل غير المتزامنة: API Platform 4 وOAuth 2.0 وJWT وGraphQL وReverb وFrankenPHP وSwoole',
    seoTitle:
      'معمارية APIs المؤسسية في PHP: API Platform 4 وOAuth2 وFrankenPHP وSwoole',
    metaDescription:
      'دليل هندسي شامل لتصميم واجهات برمجة التطبيقات المؤسسية في PHP باستخدام API Platform 4، بروتوكولات OAuth 2.0 وJWT، GraphQL، Laravel Reverb، وبيئات التشغيل FrankenPHP وRoadRunner وSwoole.',
    summary:
      'مرجع هندسي عملي لبناء واجهات APIs عالية الاعتمادية في PHP: من التوثيق الآلي بمعيار OpenAPI 3.1 عبر API Platform 4 وتأمين الجلسات ببروتوكول OAuth 2.0 PKCE وJWT، إلى البث اللحظي عبر Laravel Reverb ومضاعفة إنتاجية الخوادم عبر FrankenPHP وRoadRunner وSwoole.',
    readTime: '14 دقيقة قراءة',
    publishedDate: '2026-03-20',
    updatedDate: '2026-03-20',
    featuredSvg:
      '/assets/images/articles/enterprise-php-api-architecture-api-platform-oauth2-jwt-graphql-reverb-featured.svg',
    featuredImageAlt:
      'مخطط معمارية واجهات البرمجة المؤسسية في PHP مع API Platform 4 وFrankenPHP وOAuth 2.0',
    relatedServiceSlug: 'api-development-integration',
    relatedServiceTitle: 'تطوير وتكامل واجهات برمجة التطبيقات (APIs)',
    secondaryServiceSlug: 'backend-development',
    secondaryServiceTitle: 'هندسة وتطوير الأنظمة الخلفية (Backend)',
    primaryKeyword: 'معمارية واجهات البرمجة المؤسسية في PHP',
    secondaryKeywords: [
      'API Platform 4 شرح',
      'FrankenPHP مقابل PHP-FPM',
      'تأمين API ببروتوكول OAuth 2.0 وJWT',
      'Laravel Reverb WebSockets',
      'RoadRunner وSwoole في PHP'
    ],
    isNewlyPublished: true,
    wordCount: 1620,
    introHtml: `<p class="text-sm sm:text-base text-slate-300 leading-[1.85]">لم تعد لغة PHP مقتصرة على نموذج دورة حياة الطلب الكلاسيكي (Shared-Nothing Request Lifecycle) عبر PHP-FPM فقط؛ بل أصبحت في عام 2026 منظومة متكاملة لبناء البوابات الحكومية، الأنظمة المصرفية، ومنصات SaaS عالية التزامن بفضل بيئات التشغيل المقيمة في الذاكرة مثل <strong>FrankenPHP</strong> و<strong>RoadRunner</strong> و<strong>OpenSwoole</strong>.</p>
<p class="text-sm sm:text-base text-slate-300 leading-[1.85]">يستعرض هذا الدليل المعماري كيفية توحيد عقود REST وGraphQL عبر <strong>API Platform 4</strong>، وتحصين المصادقة عبر <strong>OAuth 2.0 / OpenID Connect</strong>، وتشغيل قنوات البث اللحظي عبر <strong>Laravel Reverb</strong> و<strong>Mercure</strong> مع الالتزام الكامل بمعايير PSR القياسية.</p>`,
    sections: [
      {
        id: 'sec-1',
        heading: '1. هندسة العقود القياسية عبر API Platform 4 وOpenAPI 3.1 وGraphQL',
        paragraphs: [
          'يوفر إطار API Platform 4 طبقة تجريد معمارية متقدمة فوق كلٍ من Symfony وLaravel، تتيح تعريف الموارد (API Resources) عبر سمات PHP 8 الحديثة (Attributes) مع فصل تام بين نموذج قاعدة البيانات وعقود البيانات الخارجية (DTOs / State Providers & Processors).',
          'بمجرد توصيف المورد، يقوم النظام آلياً بتوليد مواصفات OpenAPI 3.1، ودعم JSON:API وHydra/JSON-LD، إضافة إلى تشغيل نقطة نهاية GraphQL متكاملة تدعم التصفية والترقيم والحماية من استعلامات العمق المفرط (Query Depth Limiting).'
        ],
        codeBlock: {
          filename: 'app/ApiResource/InvoiceResource.php',
          language: 'php',
          code: `<?php
declare(strict_types=1);

namespace App\\ApiResource;

use ApiPlatform\\Metadata\\ApiResource;
use ApiPlatform\\Metadata\\Get;
use ApiPlatform\\Metadata\\Post;
use App\\State\\InvoiceStateProcessor;
use Symfony\\Component\\Validator\\Constraints as Assert;

#[ApiResource(
    operations: [
        new Get(security: "is_granted('INVOICE_VIEW', object)"),
        new Post(processor: InvoiceStateProcessor::class, security: "is_granted('ROLE_FINANCE')")
    ],
    paginationItemsPerPage: 25
)]
final class InvoiceResource
{
    public function __construct(
        public readonly string $uuid,
        #[Assert\\Positive]
        public readonly int $amountHalalas,
        #[Assert\\Currency]
        public readonly string $currency = 'SAR',
    ) {}
}`
        },
        keyTakeaways: [
          'استخدم State Providers وState Processors لفصل منطق المجال (Domain Logic) عن كيانات قاعدة البيانات.',
          'فعّل التحقق الصارم من المخططات (Schema Validation) وتحديد معدل الطلبات (Rate Limiting) على مستوى كل عملية.'
        ]
      },
      {
        id: 'sec-2',
        heading: '2. مصفوفة الأمان المؤسسي: OAuth 2.0 (PKCE) وJWT قصير العمر وSanctum',
        paragraphs: [
          'في المشاريع الحكومية والمؤسسية، يعتمد اختيار بروتوكول المصادقة على طبيعة المستهلكين: فالتطبيقات الأحادية (SPAs) التي تعمل على نفس النطاق تستفيد من جلسات ملفات الارتباط المحمية (HttpOnly SameSite Cookies) في Laravel Sanctum، بينما تتطلب المنظومات متعددة الأطراف خادم هوية متوافقاً مع OAuth 2.0 (league/oauth2-server أو Laravel Passport).',
          'عند استخدام رموز JWT، يجب توقيع الرموز بخوارزميات غير متماثلة (RS256 أو EdDSA)، وتقليص صلاحية رمز الوصول (Access Token) إلى 5–15 دقيقة، مع تدوير رموز التحديث (Refresh Token Rotation) وإبطال السلسلة فور رصد أي إعادة استخدام مشبوهة.'
        ],
        checklistTitle: 'قائمة التحقق لتأمين واجهات API في الإنتاج',
        checklistItems: [
          'توقيع رموز JWT بمفاتيح غير متماثلة (EdDSA / RS256) ونشر نقطة JWKS لتدوير المفاتيح بأمان.',
          'فرض تدفق Authorization Code + PKCE لتطبيقات الجوال والواجهات الأمامية ومنع Implicit Flow نهائياً.',
          'حماية كل مورد عبر سياسات الصلاحيات الدقيقة (Voters / Policies) لتفادي ثغرات BOLA/IDOR.',
          'تفعيل رؤوس الأمان الصارمة وCORS المحدد بالنطاقات الموثوقة وتسجيل محاولات التسلل.'
        ]
      },
      {
        id: 'sec-3',
        heading: '3. مقارنة بيئات التشغيل الحديثة: PHP-FPM مقابل FrankenPHP وRoadRunner وSwoole',
        paragraphs: [
          'في نموذج PHP-FPM التقليدي، يُعاد تهيئة إطار العمل وحاوية حقن الاعتماديات في كل طلب HTTP، بينما تحتفظ الخوادم التطبيقية الحديثة (Worker Mode عبر Laravel Octane أو Symfony Runtime) بالتطبيق محمّلاً في الذاكرة لتقليص زمن الاستجابة (TTFB) من عشرات المللي ثانية إلى أقل من 3 مللي ثانية.',
          'يجمع FrankenPHP (المبني على خادم Caddy ولغة Go) بين سهولة النشر ودعم HTTP/3 وEarly Hints (103)، في حين يتفوق OpenSwoole وReactPHP وAmp في المعالجة غير المتزامنة كثيفة الاتصالات الشبكية.'
        ],
        comparisonTable: {
          caption: 'مقارنة معمارية بين بيئات تشغيل PHP المؤسسية في الإنتاج',
          headers: ['بيئة التشغيل', 'النموذج المعماري', 'متوسط زمن الاستجابة', 'الاستخدام الأمثل'],
          rows: [
            ['PHP-FPM + OPcache + JIT', 'عزل كامل لكل طلب (Process/Request)', '18–45 مللي ثانية', 'تطبيقات تقليدية ومكتبات قديمة غير مهيأة للذاكرة المقيمة'],
            ['FrankenPHP (Worker Mode)', 'مقيم في الذاكرة فوق Caddy / Go + HTTP/3', '2–6 مللي ثانية', 'واجهات API حديثة في Laravel Octane وSymfony وتكامل Mercure'],
            ['RoadRunner (Go)', 'مجمع عمال PSR-7 عالي الثبات مع gRPC', '2–5 مللي ثانية', 'خدمات مصغرة (Microservices) وعقود gRPC وطوابير مهام'],
            ['OpenSwoole / Swoole', 'حلقة أحداث غير متزامنة (Coroutines)', '1–4 مللي ثانية', 'بوابات فائقة التزامن وخوادم WebSockets كثيفة الاتصالات']
          ]
        }
      },
      {
        id: 'sec-4',
        heading: '4. البث اللحظي عبر Laravel Reverb وMercure ومعايير PSR القياسية',
        paragraphs: [
          'لتشغيل لوحات المتابعة اللحظية وإشعارات المناقصات الفورية دون الاعتماد الحصري على مزودات خارجية مكلفة، يوفر Laravel Reverb خادم WebSockets رسمي متوافق مع بروتوكول Pusher وقابل للتوسع الأفقي عبر Redis Pub/Sub.',
          'أما في معمارية API Platform وSymfony، فيتيح بروتوكول Mercure (المعتمد على Server-Sent Events فوق HTTP/3 والمُدمج أصلياً في FrankenPHP) دفع التحديثات اللحظية للمتصفحات وتطبيقات الجوال باستهلاك منخفض للبطارية والذاكرة، مع التزام كامل بمعايير PSR-7 وPSR-15 وPSR-18.'
        ]
      }
    ],
    commonMistakes: [
      {
        title: 'تسرب الحالة بين المستخدمين في وضع العمال المقيمين (Memory & State Leaks)',
        detail:
          'تخزين بيانات المستخدم الحالي أو المستأجر (Tenant ID) في خصائص ثابتة (Static Properties) أو خدمات Singleton داخل FrankenPHP/Octane يؤدي لتسرب بيانات جلسة مستخدم إلى طلب مستخدم آخر.'
      },
      {
        title: 'كشف كيانات ORM مباشرة في استجابات API دون طبقة DTO',
        detail:
          'إرجاع نماذج Eloquent أو كيانات Doctrine الخام يعرّض الحقول الحساسة للتسرب ويربط عقد الواجهة الخارجية بتغييرات جداول قاعدة البيانات.'
      }
    ],
    faqs: [
      {
        q: 'متى نختار FrankenPHP بدلاً من PHP-FPM التقليدي؟',
        a: 'عند الحاجة لمضاعفة قدرة الخادم على استيعاب الطلبات المتزامنة (4x–8x) وتفعيل HTTP/3 وEarly Hints في تطبيقات Laravel وSymfony الحديثة النظيفة من المتغيرات العامة.'
      },
      {
        q: 'هل يغني GraphQL عن واجهات REST في الأنظمة الحكومية؟',
        a: 'ليس بالضرورة؛ فواجهات REST الموثقة بمعيار OpenAPI 3.1 تظل الأنسب للتكاملات الحكومية والمصرفية والتخزين المؤقت على الشبكات الطرفية، بينما يتألق GraphQL في الشاشات المعقدة متعددة المصادر.'
      },
      {
        q: 'كيف نحمي واجهات WebSockets في Laravel Reverb تحت الضغط العالي؟',
        a: 'عبر المصادقة المسبقة للقنوات الخاصة (Private/Presence Channels)، وتفعيل Redis لتوزيع الرسائل أفقياً، وضبط حدود حجم الرسالة ومعدل النبضات عبر الموازن الأمامي.'
      }
    ],
    conclusion: {
      heading: 'الخلاصة المعمارية لبناء واجهات PHP المؤسسية',
      paragraphs: [
        'الجمع بين صرامة العقود في API Platform 4، وحوكمة الهوية عبر OAuth 2.0، وسرعة التنفيذ في FrankenPHP أو RoadRunner يمنح المؤسسات بنية خلفية تضاهي أسرع المنصات السحابية مع الحفاظ على إنتاجية فريق PHP العالية.'
      ]
    },
    officialSources: [
      { title: 'توثيق API Platform 4 الرسمي', url: 'https://api-platform.com/docs/', publisher: 'API Platform' },
      { title: 'توثيق خادم FrankenPHP الرسمي', url: 'https://frankenphp.dev/docs/', publisher: 'Les-Tilleuls.coop' },
      { title: 'معايير PHP-FIG القياسية (PSR)', url: 'https://www.php-fig.org/psr/', publisher: 'PHP-FIG' }
    ],
    relatedArticleSlugs: [
      'laravel-vs-symfony-enterprise-architecture-comparison',
      'php-8-5-new-features-and-upgrade-guide',
      'doctrine-orm-vs-eloquent-orm-php-persistence-comparison',
      'essential-php-ecosystem-packages-guzzle-monolog-carbon-mailer-spatie'
    ]
  },

  // 2. PHPUnit 12 vs Pest 4 & Static Analysis
  {
    slug: 'phpunit-vs-pest-php-testing-framework-comparison',
    categoryKey: 'php',
    categoryLabel: 'بي إتش بي والأنظمة الخلفية (PHP & Backend)',
    badge: 'اختبارات PHP · PHPUnit 12 · Pest 4 · PHPStan 2 · Rector 2',
    title:
      'الاختبارات والتحليل الثابت وإعادة الهيكلة الآلية في PHP: مقارنة PHPUnit 12 وPest 4 مع PHPStan 2 وPsalm وRector 2',
    seoTitle:
      'مقارنة PHPUnit 12 مقابل Pest 4 مع PHPStan 2 وRector 2 في مشاريع PHP',
    metaDescription:
      'دليل عملي لمقارنة PHPUnit 12 وPest 4 في اختبارات PHP، مع دمج التحليل الثابت عبر PHPStan 2 وPsalm وأتمتة الترقية وإعادة الهيكلة باستخدام Rector 2 في خطوط CI/CD.',
    summary:
      'منهجية هندسية لبناء شبكة أمان برمجية شاملة في مشاريع PHP المؤسسية: متى تستخدم PHPUnit 12 أو Pest 4 (بما في ذلك اختبارات المعمارية Architecture Testing)، وكيف ترفع جودة الكود عبر PHPStan المستوى 9 وRector 2.',
    readTime: '12 دقيقة قراءة',
    publishedDate: '2026-03-19',
    updatedDate: '2026-03-19',
    featuredSvg:
      '/assets/images/articles/phpunit-vs-pest-php-testing-framework-comparison-featured.jpg',
    featuredImageAlt:
      'مقارنة أطر اختبار PHPUnit 12 وPest 4 ومنظومة التحليل الثابت PHPStan 2 وRector 2',
    relatedServiceSlug: 'custom-software-development',
    relatedServiceTitle: 'تطوير البرمجيات والأنظمة المخصصة للشركات',
    secondaryServiceSlug: 'backend-development',
    secondaryServiceTitle: 'تطوير الأنظمة الخلفية وضبط الجودة',
    primaryKeyword: 'مقارنة PHPUnit مقابل Pest',
    secondaryKeywords: [
      'PHPUnit 12 شرح',
      'Pest 4 اختبارات المعمارية',
      'PHPStan 2 التحليل الثابت',
      'Rector 2 ترقية PHP آلياً',
      'أتمتة اختبارات Laravel وSymfony'
    ],
    isNewlyPublished: true,
    wordCount: 1480,
    introHtml: `<p class="text-sm sm:text-base text-slate-300 leading-[1.85]">في الأنظمة المالية والحكومية المبنية بلغة PHP، لا يكفي تشغيل اختبارات يدوية قبل الإطلاق؛ بل تتطلب هندسة الاعتمادية خط أنابيب آلياً يجمع بين <strong>التحليل الثابت الصارم (Static Analysis)</strong>، و<strong>الاختبارات الآلية السريعة</strong>، و<strong>حوكمة حدود الطبقات المعمارية</strong>.</p>
<p class="text-sm sm:text-base text-slate-300 leading-[1.85]">يقارن هذا الدليل بين المعيار الصناعي العريق <strong>PHPUnit 12</strong> وإطار الاختبارات التعبيري <strong>Pest 4</strong>، مع استعراض تكامل Mockery وPHPStan 2 وPsalm وRector 2 وPHP-CS-Fixer.</p>`,
    sections: [
      {
        id: 'sec-1',
        heading: '1. المقارنة الجوهرية: كلاسيكية PHPUnit 12 مقابل تعبيرية Pest 4',
        paragraphs: [
          'يمثل PHPUnit 12 حجر الأساس لمنظومة الاختبارات في PHP، إذ يعتمد على الأصناف الصريحة (Class-based Test Cases) والسمات الحديثة مثل #[Test] و#[DataProvider]، مما يجعله الخيار المفضل للفرق المؤسسية التي تتبع معايير Symfony الصارمة.',
          'في المقابل، يُبنى Pest 4 مباشرة فوق نواة PHPUnit لكنه يقدم واجهة وظيفية مختصرة (expect API)، وتنفيذاً متوازياً فائق السرعة، وميزة اختبارات المعمارية (Arch Testing) وتغطية الطفرات (Mutation Testing) المدمجة أصلياً.'
        ],
        comparisonTable: {
          caption: 'مقارنة فنية بين PHPUnit 12 وPest 4 في بيئات العمل المؤسسية',
          headers: ['المعيار الهندسي', 'PHPUnit 12', 'Pest 4'],
          rows: [
            ['أسلوب الكتابة', 'كائني التوجه عبر الأصناف والسمات #[Test]', 'وظيفي مختصر عبر test() وit() وسلاسل expect()'],
            ['اختبارات المعمارية (Arch)', 'تتطلب حزماً خارجية مثل Deptrac أو PHPArkitect', 'مدمجة أصلياً عبر arch()->expect(...)'],
            ['اختبارات الطفرات (Mutation)', 'عبر أداة Infection PHP المستقلة', 'مدمجة مباشرة عبر خيار --mutate'],
            ['التوافق المشترك', 'النواة الأساسية القياسية', 'يشغّل ملفات PHPUnit الحالية جنباً إلى جنب دون تعارض']
          ]
        }
      },
      {
        id: 'sec-2',
        heading: '2. فرض قواعد المعمارية النظيفة آلياً (Architecture Testing)',
        paragraphs: [
          'أحد أخطر أسباب تدهور الأنظمة الكبيرة هو استدعاء طبقات العرض أو وحدات التحكم لنماذج قاعدة البيانات أو دوال التصحيح مثل dd() وenv() مباشرة داخل منطق المجال.',
          'باستخدام اختبارات المعمارية في Pest 4 (أو Deptrac مع PHPUnit)، يمكنك منع هذه المخالفات في كل طلب دمج (Pull Request) قبل وصولها إلى الفرع الرئيسي.'
        ],
        codeBlock: {
          filename: 'tests/Architecture/DomainBoundariesTest.php',
          language: 'php',
          code: `<?php
declare(strict_types=1);

arch('منع دوال التصحيح نهائياً في الكود الإنتاجي')
    ->expect(['dd', 'dump', 'ray', 'var_dump'])
    ->not->toBeUsed();

arch('عزل طبقة المجال Domain عن إطار العمل وطبقات HTTP')
    ->expect('App\\Domain')
    ->toUseStrictTypes()
    ->not->toUse(['Illuminate\\Http', 'Symfony\\Component\\HttpFoundation']);`
        }
      },
      {
        id: 'sec-3',
        heading: '3. التحليل الثابت عبر PHPStan 2 وPsalm وأتمتة الترقية بـ Rector 2',
        paragraphs: [
          'يكتشف PHPStan 2 (مع Larastan أو إضافة Symfony) أخطاء الأنواع والقيم الفارغة غير المعالجة (`null` dereferences) ومفاتيح المصفوفات المفقودة دون الحاجة لتشغيل الكود أصلاً، موفراً سرعة هائلة في المشاريع التي تتجاوز مئات الآلاف من الأسطر.',
          'أما أداة Rector 2 فتقوم بتحويل الشجرة النحوية المجردة (AST) لإعادة هيكلة الكود القديم وترقيته آلياً إلى ميزات PHP 8.4/8.5 ومعايير الكتابة الصارمة في دقائق بدلاً من أسابيع من التعديل اليدوي.'
        ],
        checklistTitle: 'بوابات الجودة الإلزامية في خط CI/CD لمشاريع PHP',
        checklistItems: [
          'تنسيق الكود آلياً عبر Laravel Pint أو PHP-CS-Fixer بمعيار PER-CS 2.0.',
          'اجتياز فحص PHPStan 2 عند المستوى 8 أو 9 مع تفعيل ملف الأساس (Baseline) للمشاريع القائمة.',
          'تشغيل اختبارات الوحدات والتكامل بالتوازي (--parallel) مع حد أدنى لتغطية المسارات الحرجة.',
          'فحص قواعد Rector (--dry-run) لضمان عدم دخول أنماط برمجية متقادمة.'
        ]
      }
    ],
    commonMistakes: [
      {
        title: 'الإفراط في استخدام المحاكاة (Over-Mocking) عبر Mockery',
        detail:
          'محاكاة الكيانات الداخلية واستعلامات قاعدة البيانات تجعل الاختبارات خضراء وهمياً بينما تفشل الاستعلامات الحقيقية في الإنتاج؛ اختبر العقود الخارجية فقط واستخدم معاملات قاعدة بيانات معزولة.'
      },
      {
        title: 'إهمال اختبارات الطفرات والاعتماد على نسبة التغطية السطرية وحدها',
        detail:
          'قد تصل تغطية الأسطر إلى 90% دون وجود تحققات فعلية (Assertions) دقيقة؛ تساعد اختبارات الطفرات في كشف الاختبارات السطحية.'
      }
    ],
    faqs: [
      {
        q: 'هل يمكن اعتماد Pest 4 تدريجياً في مشروع يضم آلاف اختبارات PHPUnit؟',
        a: 'نعم تماماً؛ لأن Pest يعمل فوق PHPUnit، فيمكن الإبقاء على جميع اختبارات PHPUnit الحالية كما هي وكتابة الاختبارات الجديدة واختبارات المعمارية بصياغة Pest داخل نفس الحزمة.'
      },
      {
        q: 'أيهما نختار: PHPStan 2 أم Psalm؟',
        a: 'يتفوق PHPStan 2 حالياً في سرعة التحليل ودعم منظومتي Laravel وSymfony ومجتمع الإضافات، بينما يظل Psalm قوياً في تتبع تدفق البيانات الأمني (Taint Analysis).'
      }
    ],
    conclusion: {
      heading: 'الخلاصة التنفيذية لمنظومة اختبارات PHP',
      paragraphs: [
        'دمج PHPStan 2 وRector 2 مع PHPUnit 12 أو Pest 4 يحوّل صيانة الأنظمة الضخمة وترقيتها السنوية من مخاطرة تشغيلية إلى عملية هندسية مضبوطة وقابلة للتنبؤ.'
      ]
    },
    officialSources: [
      { title: 'توثيق PHPUnit 12 الرسمي', url: 'https://phpunit.de/documentation.html', publisher: 'PHPUnit' },
      { title: 'توثيق Pest PHP الرسمي', url: 'https://pestphp.com/docs/installation', publisher: 'Pest' },
      { title: 'توثيق PHPStan الرسمي', url: 'https://phpstan.org/user-guide/getting-started', publisher: 'PHPStan' }
    ],
    relatedArticleSlugs: [
      'php-8-5-new-features-and-upgrade-guide',
      'laravel-vs-symfony-enterprise-architecture-comparison',
      'jest-vs-vitest-javascript-testing-comparison',
      'essential-php-ecosystem-packages-guzzle-monolog-carbon-mailer-spatie'
    ]
  },

  // 3. Doctrine ORM 3 vs Eloquent ORM
  {
    slug: 'doctrine-orm-vs-eloquent-orm-php-persistence-comparison',
    categoryKey: 'php',
    categoryLabel: 'بي إتش بي والأنظمة الخلفية (PHP & Backend)',
    badge: 'قواعد البيانات وORM · Doctrine 3 · Eloquent · Cycle ORM',
    title:
      'معمارية قواعد البيانات وأنظمة ORM في PHP: مقارنة Doctrine ORM 3 مقابل Eloquent ORM وCycle ORM وPDO',
    seoTitle:
      'مقارنة Doctrine ORM 3 مقابل Eloquent ORM في PHP: الأداء والمعمارية',
    metaDescription:
      'مقارنة هندسية شاملة بين نمط Data Mapper في Doctrine ORM 3 ونمط Active Record في Laravel Eloquent، مع استعراض Cycle ORM وAtlas ORM وتحسين الأداء ومنع N+1.',
    summary:
      'تحليل معماري معمّق للفرق بين نمط Data Mapper (Doctrine ORM 3 / Cycle ORM) ونمط Active Record (Laravel Eloquent): أثر كل نمط على التصميم المدفوع بالمجال DDD، استهلاك الذاكرة، المعاملات المالية، وأداء الاستعلامات.',
    readTime: '13 دقيقة قراءة',
    publishedDate: '2026-03-18',
    updatedDate: '2026-03-18',
    featuredSvg:
      '/assets/images/articles/doctrine-orm-vs-eloquent-orm-php-persistence-comparison-featured.jpg',
    featuredImageAlt:
      'مقارنة معمارية بين Doctrine ORM 3 Data Mapper وEloquent Active Record في PHP',
    relatedServiceSlug: 'database-development',
    relatedServiceTitle: 'تصميم وتطوير قواعد البيانات المؤسسية وتحسين الأداء',
    secondaryServiceSlug: 'erp-system-development',
    secondaryServiceTitle: 'تطوير أنظمة تخطيط الموارد المؤسسية (ERP)',
    primaryKeyword: 'مقارنة Doctrine ORM مقابل Eloquent ORM',
    secondaryKeywords: [
      'Data Mapper مقابل Active Record',
      'Doctrine ORM 3 شرح',
      'تحسين أداء استعلامات Eloquent',
      'Cycle ORM في PHP',
      'منع مشكلة N+1 في PHP'
    ],
    isNewlyPublished: true,
    wordCount: 1510,
    introHtml: `<p class="text-sm sm:text-base text-slate-300 leading-[1.85]">تُعد طبقة استمرارية البيانات (Persistence Layer) القرار المعماري الأكثر تأثيراً في عمر الأنظمة المحاسبية وأنظمة تخطيط الموارد (ERP). وفي عالم PHP، يتجلى هذا القرار في المفاضلة بين مدرستين هندسيتين عريقتين: <strong>Data Mapper</strong> متمثلاً في <strong>Doctrine ORM 3</strong>، و<strong>Active Record</strong> متمثلاً في <strong>Eloquent ORM</strong>.</p>`,
    sections: [
      {
        id: 'sec-1',
        heading: '1. نمط Data Mapper (Doctrine 3) مقابل Active Record (Eloquent)',
        paragraphs: [
          'في نمط Active Record الذي يتبناه Eloquent، يرث كل نموذج (Model) قدرات الاتصال بقاعدة البيانات والحفظ والحذف مباشرة، مما يمنح سرعة تطوير استثنائية وواجهة استعلام سلسة، لكنه يربط كائنات المجال ببنية الجداول.',
          'أما Doctrine ORM 3 فيطبق نمط Data Mapper ووحدة العمل (Unit of Work): تبقى كائنات المجال (Entities) أصناف PHP نقية تماماً لا تعرف شيئاً عن SQL، بينما يتولى EntityManager تتبع التغييرات وإرسالها دفعة واحدة داخل معاملة ذرية عند استدعاء flush().'
        ],
        comparisonTable: {
          caption: 'مقارنة معمارية بين أنظمة ORM ومكتبات قواعد البيانات في PHP',
          headers: ['الأداة / المكتبة', 'النمط المعماري', 'التوافق مع DDD', 'حالة الاستخدام المثالية'],
          rows: [
            ['Doctrine ORM 3', 'Data Mapper + Unit of Work', 'ممتاز (كيانات PHP نقية معزولة)', 'الأنظمة البنكية والمؤسسية المعقدة طويلة العمر'],
            ['Eloquent ORM', 'Active Record', 'متوسط (يتطلب طبقة تعيين إضافية عند العزل)', 'تطبيقات SaaS المتسارعة ومنصات الأعمال المتكاملة'],
            ['Cycle ORM', 'Data Mapper متوافق مع الذاكرة المقيمة', 'ممتاز دون تسرب ذاكرة في RoadRunner/Swoole', 'الخدمات المصغرة عالية التزامن في Spiral وRoadRunner'],
            ['Doctrine DBAL / PDO', 'استعلامات SQL محضّرة منخفضة المستوى', 'كامل عبر مستودعات مخصصة', 'التقارير المالية الضخمة والمعالجة الدفعية للملايين']
          ]
        }
      },
      {
        id: 'sec-2',
        heading: '2. ضبط الأداء: منع استعلامات N+1 والتعامل مع ملايين السجلات',
        paragraphs: [
          'في Eloquent، يُنصح بتفعيل Model::shouldBeStrict(!app()->isProduction()) في بيئات التطوير لإيقاف التحميل الكسول الخفي (Lazy Loading) واكتشاف مشكلة N+1 فوراً قبل وصولها للإنتاج.',
          'وفي عمليات التصدير والتسويات المالية الكبرى في كلا النظامين، تجنّب ترطيب آلاف الكائنات الكاملة في الذاكرة؛ استخدم التمرير عبر المؤشرات (lazyById / toIterable) أو استعلامات DTO الجزئية المخصصة للقراءة فقط.'
        ],
        codeBlock: {
          filename: 'app/Providers/AppServiceProvider.php',
          language: 'php',
          code: `<?php
declare(strict_types=1);

namespace App\\Providers;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Support\\ServiceProvider;

final class AppServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        // منع مشكلة N+1 وتعبئة الحقول غير المصرح بها أثناء التطوير والاختبار
        Model::preventLazyLoading(!$this->app->isProduction());
        Model::preventSilentlyDiscardingAttributes(!$this->app->isProduction());
    }
}`
        }
      },
      {
        id: 'sec-3',
        heading: '3. البدائل المتخصصة: Cycle ORM وAtlas ORM وPDO المحضّر',
        paragraphs: [
          'عند تشغيل PHP في بيئات دائمة الذاكرة مثل RoadRunner، يبرز Cycle ORM بفضل فصل مخطط التعيين عن حالة وحدة العمل، مما يمنع تضخم خريطة الهوية (Identity Map) عبر الطلبات المتعاقبة.',
          'وللاستعلامات التحليلية المعقدة (CTEs، Window Functions، أقفال الصفوف المحاسبية SELECT ... FOR UPDATE SKIP LOCKED)، يبقى استخدام Doctrine DBAL أو الاستعلامات المحضّرة عبر PDO الخيار الأدق والأسرع.'
        ]
      }
    ],
    commonMistakes: [
      {
        title: 'استدعاء flush() داخل الحلقات التكرارية في Doctrine',
        detail:
          'استدعاء flush() في كل دورة يدمر ميزة التجميع الدفعي في Unit of Work؛ الصحيح تجميع دفعات من 200–500 سجل ثم استدعاء flush() متبوعاً بـ clear() لتحرير الذاكرة.'
      },
      {
        title: 'تحميل جميع الأعمدة (SELECT *) في شاشات القوائم والتقارير',
        detail:
          'جلب الحقول النصية الكبيرة وJSON غير المطلوبة يضاعف استهلاك الشبكة والذاكرة ويبطل الاستفادة من الفهارس المغطية (Covering Indexes).'
      }
    ],
    faqs: [
      {
        q: 'هل يمكن استخدام Doctrine ORM داخل مشروع Laravel أو Eloquent داخل Symfony؟',
        a: 'نعم عبر حزم الربط مثل Laravel Doctrine أو illuminate/database، لكن الأفضل غالباً اختيار الإطار المتجانس مع نمط البيانات المطلوب منذ البداية.'
      },
      {
        q: 'متى نتخلى عن ORM ونكتب SQL مباشر عبر PDO/DBAL؟',
        a: 'في التقارير المجمعة الثقيلة، ترحيل البيانات المليوني، والاستعلامات المكانية أو التحليلية التي تعتمد على ميزات خاصة بمحرك PostgreSQL أو MySQL.'
      }
    ],
    conclusion: {
      heading: 'الخلاصة المعمارية لاختيار طبقة البيانات في PHP',
      paragraphs: [
        'اختر Doctrine ORM 3 أو Cycle ORM عندما تكون قواعد العمل معقدة وتتطلب عزلاً صارماً لطبقة المجال، واختر Eloquent مع تفعيل الوضع الصارم عندما تكون سرعة الإنجاز والانسجام مع منظومة Laravel أولوية قصوى.'
      ]
    },
    officialSources: [
      { title: 'توثيق Doctrine ORM 3 الرسمي', url: 'https://www.doctrine-project.org/projects/orm.html', publisher: 'Doctrine Project' },
      { title: 'توثيق Laravel Eloquent الرسمي', url: 'https://laravel.com/docs/eloquent', publisher: 'Laravel' },
      { title: 'توثيق Cycle ORM الرسمي', url: 'https://cycle-orm.dev/docs/', publisher: 'Cycle ORM' }
    ],
    relatedArticleSlugs: [
      'laravel-vs-symfony-enterprise-architecture-comparison',
      'prisma-vs-drizzle-orm-typescript-comparison',
      'enterprise-php-api-architecture-api-platform-oauth2-jwt-graphql-reverb',
      'essential-php-ecosystem-packages-guzzle-monolog-carbon-mailer-spatie'
    ]
  },

  // 4. Essential PHP Libraries & Packages
  {
    slug: 'essential-php-ecosystem-packages-guzzle-monolog-carbon-mailer-spatie',
    categoryKey: 'php',
    categoryLabel: 'بي إتش بي والأنظمة الخلفية (PHP & Backend)',
    badge: 'حزم PHP الأساسية · Composer · Guzzle · Monolog · Spatie',
    title:
      'دليل المكتبات والحزم الأساسية في منظومة PHP: Composer وGuzzle وMonolog وCarbon ومكونات Symfony وحزم Laravel وSpatie',
    seoTitle:
      'أهم مكتبات وحزم PHP الأساسية للمشاريع المؤسسية: Guzzle وMonolog وSpatie',
    metaDescription:
      'المرجع الشامل لأهم مكتبات وحزم PHP المعتمدة في الإنتاج: Composer، Guzzle، Monolog، Carbon، PHP-DI، Symfony Messenger/Mailer، وحزم Laravel وFlysystem وتوليد PDF وExcel.',
    summary:
      'خريطة عملية للمكتبات القياسية التي تعتمد عليها تطبيقات PHP الكبرى في الإنتاج: إدارة الحزم عبر Composer، الاتصالات الخارجية المرنة عبر Guzzle، السجلات المهيكلة عبر Monolog، التخزين السحابي عبر Flysystem، وحزم الصلاحيات والتقارير.',
    readTime: '13 دقيقة قراءة',
    publishedDate: '2026-03-17',
    updatedDate: '2026-03-17',
    featuredSvg:
      '/assets/images/articles/essential-php-ecosystem-packages-guzzle-monolog-carbon-mailer-spatie-featured.svg',
    featuredImageAlt:
      'خريطة حزم ومكتبات منظومة PHP القياسية عبر Composer وSymfony وLaravel وSpatie',
    relatedServiceSlug: 'backend-development',
    relatedServiceTitle: 'تطوير الأنظمة الخلفية وتكامل الخدمات المؤسسية',
    secondaryServiceSlug: 'custom-software-development',
    secondaryServiceTitle: 'تطوير البرمجيات المخصصة',
    primaryKeyword: 'أهم مكتبات وحزم PHP',
    secondaryKeywords: [
      'Guzzle HTTP في PHP',
      'Monolog تسجيل الأخطاء المهيكل',
      'Flysystem التخزين السحابي',
      'مكونات Symfony المستقلة',
      'حزم Spatie وLaravel Horizon'
    ],
    isNewlyPublished: true,
    wordCount: 1460,
    introHtml: `<p class="text-sm sm:text-base text-slate-300 leading-[1.85]">تكمن القوة الحقيقية للغة PHP الحديثة في نضج منظومة <strong>Composer وPackagist</strong> والتوافق البيني القياسي عبر واجهات PSR؛ مما يتيح للمهندس تركيب أفضل المكونات المجربة عالمياً دون إعادة اختراع العجلة أو الوقوع في فخ الحزم المهجورة.</p>`,
    sections: [
      {
        id: 'sec-1',
        heading: '1. نواة البنية التحتية: Composer 2.8 وGuzzle 7 وMonolog 3 وCarbon 3',
        paragraphs: [
          'يضمن Composer مع أوامر التدقيق الأمني (composer audit) وتثبيت النسخ عبر composer.lock وتوليد خرائط التحميل المحسّنة (--classmap-authoritative) نشراً متطابقاً وآمناً في الإنتاج.',
          'للربط مع البوابات الحكومية وبوابات الدفع، يوفر Guzzle (المتوافق مع PSR-18) وسطاء إعادة المحاولة الذكية (Retry Middleware) ومهل الاتصال الصارمة، بينما يصدر Monolog 3 سجلات JSON مهيكلة جاهزة للفهرسة في OpenSearch وDatadog، ويعالج Carbon 3 المناطق الزمنية والتقويمين الميلادي والهجري بثبات تام.'
        ],
        codeBlock: {
          filename: 'src/Infrastructure/Http/ResilientClientFactory.php',
          language: 'php',
          code: `<?php
declare(strict_types=1);

namespace App\\Infrastructure\\Http;

use GuzzleHttp\\Client;
use GuzzleHttp\\HandlerStack;
use GuzzleHttp\\Middleware;
use Psr\\Http\\Message\\ResponseInterface;

final class ResilientClientFactory
{
    public static function create(string $baseUri): Client
    {
        $stack = HandlerStack::create();
        $stack->push(Middleware::retry(
            fn (int $retries, $req, ?ResponseInterface $res): bool =>
                $retries < 3 && ($res === null || $res->getStatusCode() >= 500),
            fn (int $retries): int => 250 * (2 ** $retries)
        ));

        return new Client([
            'base_uri' => $baseUri,
            'handler' => $stack,
            'connect_timeout' => 3.0,
            'timeout' => 8.0,
        ]);
    }
}`
        }
      },
      {
        id: 'sec-2',
        heading: '2. مكونات Symfony المستقلة وحزم Laravel الرسمية وحزم Spatie',
        paragraphs: [
          'حتى خارج إطار Symfony الكامل، تعتمد معظم مشاريع PHP الاحترافية على مكونات Symfony المستقلة مثل symfony/console لبناء أوامر سطر الأوامر، وsymfony/validator، وsymfony/mailer، وsymfony/messenger لمعالجة الطوابير غير المتزامنة.',
          'وفي بيئة Laravel، تشكل حزم Horizon (لمراقبة طوابير Redis)، وScout (للبحث الفوري عبر Meilisearch/Typesense)، وCashier، إلى جانب حزم Spatie الشهيرة مثل spatie/laravel-permission وspatie/laravel-medialibrary وspatie/laravel-backup العمود الفقري لمعظم أنظمة الأعمال.'
        ],
        comparisonTable: {
          caption: 'خريطة الحزم القياسية المعتمدة حسب الوظيفة الهندسية في PHP',
          headers: ['المجال الوظيفي', 'الحزمة القياسية الموصى بها', 'أبرز ميزة إنتاجية'],
          rows: [
            ['التخزين السحابي والملفات', 'league/flysystem v3', 'تبديل شفاف بين التخزين المحلي وAWS S3 وCloudflare R2'],
            ['حقن الاعتماديات المستقل', 'php-di/php-di v7', 'تهيئة مترجمة فائقة السرعة متوافقة مع PSR-11'],
            ['توليد تقارير وفواتير PDF', 'spatie/browsershot أو mpdf/mpdf', 'دعم ممتاز للغة العربية واتجاه RTL والخطوط المخصصة'],
            ['استيراد وتصدير Excel الضخم', 'openspout/openspout', 'بث ملايين الصفوف باستهلاك ذاكرة ثابت لا يتجاوز بضعة ميجابايت']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        title: 'استدعاء واجهات HTTP الخارجية بدون مهلة اتصال (Timeout)',
        detail:
          'ترك مهلة الاتصال مفتوحة في Guzzle يؤدي لتجميد جميع عمال PHP عند تباطؤ أي خدمة خارجية؛ حدد دائماً connect_timeout وtimeout بقيم قصيرة.'
      },
      {
        title: 'استخدام مكتبات Excel غير المتدفقة للملفات الكبيرة',
        detail:
          'تحميل مصنفات تضم مئات الآلاف من الصفوف دفعة واحدة في الذاكرة يسبب خطأ Allowed memory size exhausted؛ استخدم OpenSpout أو التدفق المؤشر.'
      }
    ],
    faqs: [
      {
        q: 'ما أفضل مكتبة لتوليد فواتير وتقارير PDF باللغة العربية في PHP؟',
        a: 'للتصاميم الحديثة المعقدة بعناصر CSS Grid/Flexbox يُنصح بـ Browsershot (Chromium)، وللتشغيل الخفيف بدون متصفح خفي تُعد مكتبة mPDF الخيار الأدق في تشكيل الحروف العربية واتجاه RTL.'
      },
      {
        q: 'كيف نضمن عدم تسرب ثغرات أمنية عبر حزم Composer؟',
        a: 'عبر تشغيل composer audit كخطوة إلزامية في CI/CD وتثبيت composer.lock في المستودع ومراجعة صلاحيات الحزم الجديدة قبل اعتمادها.'
      }
    ],
    conclusion: {
      heading: 'الخلاصة حول اختيار الحزم في منظومة PHP',
      paragraphs: [
        'الاعتماد على حزم متوافقة مع معايير PSR ومدعومة بمؤسسات نشطة (Symfony، Laravel، The PHP League، Spatie) يقلص الديون التقنية ويسرّع تسليم المشاريع المؤسسية بأعلى مستويات الأمان.'
      ]
    },
    officialSources: [
      { title: 'توثيق Composer الرسمي', url: 'https://getcomposer.org/doc/', publisher: 'Composer' },
      { title: 'مكتبات The PHP League القياسية', url: 'https://thephpleague.com/', publisher: 'The PHP League' },
      { title: 'دليل حزم Spatie مفتوحة المصدر', url: 'https://spatie.be/open-source/packages', publisher: 'Spatie' }
    ],
    relatedArticleSlugs: [
      'laravel-vs-symfony-enterprise-architecture-comparison',
      'enterprise-php-api-architecture-api-platform-oauth2-jwt-graphql-reverb',
      'phpunit-vs-pest-php-testing-framework-comparison',
      'php-8-5-new-features-and-upgrade-guide'
    ]
  },

  // 5. Magento vs PrestaShop, Shopware, TYPO3, Craft CMS & Moodle
  {
    slug: 'magento-vs-prestashop-ecommerce-architecture-comparison',
    categoryKey: 'php',
    categoryLabel: 'بي إتش بي والأنظمة الخلفية (PHP & Backend)',
    badge: 'التجارة والمنصات · Magento · Shopware 6 · PrestaShop 9 · TYPO3 · Moodle',
    title:
      'معمارية منصات التجارة الإلكترونية وإدارة المحتوى والتعلم في PHP: مقارنة Magento وPrestaShop 9 وShopware 6.7 وTYPO3 وCraft CMS وMoodle',
    seoTitle:
      'مقارنة Magento وShopware 6 وPrestaShop 9 وTYPO3 وCraft CMS وMoodle',
    metaDescription:
      'مقارنة معمارية شاملة لمنصات PHP المؤسسية: Magento / Mage-OS مقابل Shopware 6.7 وPrestaShop 9 للتجارة الإلكترونية، وTYPO3 v13 وCraft CMS 5 وMoodle للبوابات والتعليم.',
    summary:
      'دليل قرارات تقني للمؤسسات والجهات الحكومية لاختيار المنصة الأنسب في منظومة PHP: متى تختار Magento أو Shopware 6.7 للتجارة المركبة B2B، ومتى تتفوق PrestaShop 9، وكيف تختار بين TYPO3 وCraft CMS وDrupal وMoodle.',
    readTime: '14 دقيقة قراءة',
    publishedDate: '2026-03-16',
    updatedDate: '2026-03-16',
    featuredSvg:
      '/assets/images/articles/magento-vs-prestashop-ecommerce-architecture-comparison-featured.svg',
    featuredImageAlt:
      'مصفوفة مقارنة معمارية لمنصات التجارة والمحتوى في PHP: Magento وShopware وPrestaShop وTYPO3 وMoodle',
    relatedServiceSlug: 'ecommerce-development',
    relatedServiceTitle: 'تصميم وتطوير المتاجر الإلكترونية المؤسسية',
    secondaryServiceSlug: 'magento-development',
    secondaryServiceTitle: 'تطوير متاجر ماجنتو (Magento / Adobe Commerce)',
    primaryKeyword: 'مقارنة Magento مقابل PrestaShop وShopware',
    secondaryKeywords: [
      'Shopware 6.7 مقابل Magento',
      'PrestaShop 9 المعمارية الجديدة',
      'TYPO3 v13 مقابل Craft CMS 5',
      'تطوير منصات Moodle التعليمية',
      'واجهات Hyvä في ماجنتو'
    ],
    isNewlyPublished: true,
    wordCount: 1540,
    introHtml: `<p class="text-sm sm:text-base text-slate-300 leading-[1.85]">تُشغّل لغة PHP النصيب الأكبر من منصات التجارة الإلكترونية المؤسسية وبوابات المحتوى الحكومية وأنظمة إدارة التعلم (LMS) حول العالم. غير أن التباين المعماري وتكلفة الملكية الكلية (TCO) بين هذه المنصات يجعل الاختيار الخاطئ مكلفاً للغاية.</p>`,
    sections: [
      {
        id: 'sec-1',
        heading: '1. التجارة الإلكترونية المؤسسية: Magento (مع Hyvä) مقابل Shopware 6.7 وPrestaShop 9',
        paragraphs: [
          'يظل Magento (Adobe Commerce / Mage-OS) الخيار الأقوى لمتاجر الجملة والشركات (B2B) ذات الكتالوجات الضخمة وقوائم الأسعار المخصصة لكل عميل والمستودعات المتعددة، خاصة بعد اعتماد واجهة Hyvä Themes التي استبدلت واجهة Luma الثقيلة ببنية خفيفة مبنية على Tailwind CSS وAlpine.js تحقق 98+ في مؤشرات الويب.',
          'في المقابل، يقدم Shopware 6.7 معمارية حديثة مبنية بالكامل على Symfony وAPI-First مع محرك قواعد تسعير مرن، بينما يوفر PrestaShop 9 (المحدث على Symfony) تكلفة تشغيل أقل وسرعة إطلاق مثالية للمتاجر المتوسطة.'
        ],
        comparisonTable: {
          caption: 'مقارنة منصات التجارة الإلكترونية وإدارة المحتوى والتعلم المبنية على PHP',
          headers: ['المنصة', 'النواة البرمجية', 'نطاق الاستخدام الأمثل', 'تعقيد البنية التحتية'],
          rows: [
            ['Magento / Mage-OS', 'نواة معيارية مخصصة + OpenSearch + Varnish', 'تجارة B2B/B2C ضخمة متعددة الدول والمستودعات', 'مرتفع (يتطلب Redis وOpenSearch وVarnish)'],
            ['Shopware 6.7', 'Symfony + API-First + Vue Admin', 'تجارة متوسطة وكبيرة مرنة وقابلة للتشغيل Headless', 'متوسط إلى مرتفع'],
            ['PrestaShop 9', 'Symfony تدريجي + خطافات وحدات', 'متاجر التجزئة الصغيرة والمتوسطة سريعة الإطلاق', 'منخفض إلى متوسط'],
            ['TYPO3 v13 LTS / Drupal', 'معمارية مؤسسية متعددة المواقع والصلاحيات', 'البوابات الحكومية والجامعية متعددة اللغات والنطاقات', 'متوسط'],
            ['Craft CMS 5', 'Yii2 + نمذجة محتوى مرنة + GraphQL', 'منصات العلامات التجارية الفاخرة والمحتوى المهيكل', 'منخفض إلى متوسط'],
            ['Moodle 4.5+', 'منظومة تعليمية معيارية متوافقة مع SCORM/LTI', 'الجامعات وهيئات التدريب والاعتماد المهني', 'متوسط (يتطلب ضبط كاش الجلسات عند الاختبارات المتزامنة)']
          ]
        }
      },
      {
        id: 'sec-2',
        heading: '2. بوابات المحتوى والتعليم: TYPO3 v13 وCraft CMS 5 وOctober/Winter CMS وMoodle',
        paragraphs: [
          'في البوابات الحكومية والأكاديمية التي تدير عشرات المواقع الفرعية بصلاحيات تحرير دقيقة وسير عمل مراجعة واعتماد، يتفوق كل من TYPO3 v13 LTS وDrupal بفضل الفصل الصارم للصلاحيات ودعم اللغات المتعددة الأصلي.',
          'وعند بناء أكاديميات التدريب الوطني أو الجامعات الافتراضية باستخدام Moodle، يجب عزل خوادم قواعد البيانات وتخزين الجلسات في Redis Cluster وموازنة التحميل لضمان صمود المنصة أمام عشرات الآلاف من المختبرين في نفس اللحظة.'
        ],
        checklistTitle: 'معايير جاهزية متاجر ومنصات PHP للسوق السعودي والخليجي',
        checklistItems: [
          'دعم أصيل لاتجاه RTL والفصل التام لملفات التنسيق والخطوط العربية دون انزياح التخطيط (CLS = 0).',
          'الربط الموثق مع بوابات الدفع الإقليمية (مدى، Apple Pay، تابي، تمارا) ومعيار الفوترة الإلكترونية ZATCA المرحلة الثانية.',
          'تفعيل التخزين المؤقت للصفحات الكاملة (Varnish / Cloudflare Edge) مع إبطال الكاش الذكي عند تغير المخزون.',
          'أتمتة مزامنة المخزون والقيود المحاسبية مع أنظمة ERP عبر طوابير رسائل غير متزامنة.'
        ]
      }
    ],
    commonMistakes: [
      {
        title: 'تشغيل Magento بواجهة Luma القديمة على استضافة مشتركة ضعيفة',
        detail:
          'يحتاج Magento إلى بيئة مخصصة تضم OPcache وRedis وOpenSearch وواجهة Hyvä؛ تشغيله بدونها يسبب بطئاً شديداً وخسارة مباشرة في معدلات التحويل.'
      },
      {
        title: 'تعديل الملفات الأساسية (Core Hacking) في PrestaShop أو Moodle',
        detail:
          'أي تعديل مباشر خارج نظام الإضافات والخطافات الرسمية يمنع تثبيت التحديثات الأمنية الحرجة مستقبلاً.'
      }
    ],
    faqs: [
      {
        q: 'متى نختار Shopware 6 بدلاً من Magento؟',
        a: 'عندما يمتلك فريقك خبرة قوية في Symfony ويرغب في بنية API-First أخف وزناً وأسرع تطويراً من بنية XML المعقدة في Magento.'
      },
      {
        q: 'هل يصلح Moodle لإدارة اختبارات متزامنة لأكثر من 10,000 متدرب؟',
        a: 'نعم بشرط نشره على عقد تطبيقية متعددة خلف موازن أحمال، مع نقل الجلسات وكاش التطبيقات إلى Redis المجمّع وضبط اتصالات قاعدة البيانات.'
      }
    ],
    conclusion: {
      heading: 'الخلاصة التنفيذية لاختيار منصة PHP المناسبة',
      paragraphs: [
        'لا توجد منصة واحدة تناسب كل السيناريوهات؛ طابق دائماً بين حجم الكتالوج وتعقيد العمليات وفريق الصيانة المتاح قبل اتخاذ قرار البناء.'
      ]
    },
    officialSources: [
      { title: 'توثيق Shopware 6 للمطورين', url: 'https://developer.shopware.com/', publisher: 'Shopware' },
      { title: 'توثيق TYPO3 v13 الرسمي', url: 'https://docs.typo3.org/', publisher: 'TYPO3' },
      { title: 'توثيق Moodle الرسمي للبنية التحتية', url: 'https://docs.moodle.org/', publisher: 'Moodle' }
    ],
    relatedArticleSlugs: [
      'what-is-magento',
      'magento-vs-shopify',
      'wordpress-vs-other-cms',
      'laravel-vs-symfony-enterprise-architecture-comparison'
    ]
  },

  // 6. PHP Frameworks Beyond Laravel & Symfony
  {
    slug: 'laravel-vs-codeigniter-php-framework-comparison',
    categoryKey: 'php',
    categoryLabel: 'بي إتش بي والأنظمة الخلفية (PHP & Backend)',
    badge: 'أطر PHP المتخصصة · CodeIgniter 4 · CakePHP 5 · Yii3 · Slim 4 · Hyperf',
    title:
      'أطر عمل PHP ما بعد Laravel وSymfony: مقارنة CodeIgniter 4 وCakePHP 5 وYii2/Yii3 وSlim 4 وLaminas وPhalcon وSpiral وHyperf',
    seoTitle:
      'مقارنة أطر عمل PHP: CodeIgniter 4 وCakePHP 5 وYii3 وSlim 4 وHyperf',
    metaDescription:
      'دليل شامل لمقارنة أطر عمل PHP المتخصصة والناشئة: CodeIgniter 4، CakePHP 5، Yii2/Yii3، Slim 4، Laminas/Mezzio، Nette، Phalcon، Spiral، وHyperf مع خطط تحديث الأنظمة القديمة.',
    summary:
      'خريطة شاملة لمنظومة أطر عمل PHP خارج الثنائي الأشهر: متى تتفوق خفة Slim 4 وCodeIgniter 4، وما الذي يميز CakePHP 5 وYii3 وNette، وكيف تقود Spiral وHyperf ثورة الخدمات المصغرة فائقة السرعة، مع مسارات ترحيل Lumen وFuelPHP.',
    readTime: '13 دقيقة قراءة',
    publishedDate: '2026-03-15',
    updatedDate: '2026-03-15',
    featuredSvg:
      '/assets/images/articles/laravel-vs-codeigniter-php-framework-comparison-featured.svg',
    featuredImageAlt:
      'خريطة مقارنة أطر عمل PHP المتخصصة: CodeIgniter 4 وCakePHP 5 وYii3 وSlim 4 وSpiral وHyperf',
    relatedServiceSlug: 'backend-development',
    relatedServiceTitle: 'هندسة وتطوير الأنظمة الخلفية وتحديث الأنظمة المتقادمة',
    secondaryServiceSlug: 'custom-software-development',
    secondaryServiceTitle: 'تطوير البرمجيات المخصصة للشركات',
    primaryKeyword: 'مقارنة أطر عمل PHP الشاملة',
    secondaryKeywords: [
      'CodeIgniter 4 مقابل Laravel',
      'CakePHP 5 وYii3 للمؤسسات',
      'إطار Slim 4 المصغر PSR-15',
      'Hyperf وSpiral الخدمات المصغرة',
      'ترحيل مشاريع Lumen القديمة'
    ],
    isNewlyPublished: true,
    wordCount: 1470,
    introHtml: `<p class="text-sm sm:text-base text-slate-300 leading-[1.85]">رغم هيمنة Laravel وSymfony على شريحة واسعة من المشاريع الجديدة، لا تزال أطر عمل متخصصة مثل <strong>CodeIgniter 4</strong> و<strong>CakePHP 5</strong> و<strong>Yii</strong> و<strong>Slim 4</strong> و<strong>Laminas/Mezzio</strong> و<strong>Spiral</strong> و<strong>Hyperf</strong> تؤدي أدواراً محورية في البوابات الحكومية، الخدمات المصغرة فائقة السرعة، وتحديث الأنظمة الموروثة.</p>`,
    sections: [
      {
        id: 'sec-1',
        heading: '1. الأطر المتكاملة الرشيقة: CodeIgniter 4 وCakePHP 5 وYii2/Yii3 وNette',
        paragraphs: [
          'يتميز CodeIgniter 4 ببصمة ذاكرة ضئيلة للغاية وسرعة تنفيذ فورية دون تعقيد، مما يجعله مناسباً للخدمات الخفيفة أو الفرق المنتقلة من PHP الإجرائي إلى معمارية MVC المنظمة.',
          'أما CakePHP 5 فيقدم نظام ORM متيناً واتفاقيات تسمية صارمة تسرّع بناء تطبيقات إدارة البيانات، بينما تركز حزم Yii3 الجديدة وNette على التصميم المعياري النظيف والأمان الصارم ضد ثغرات XSS وحقن الاستعلامات.'
        ],
        comparisonTable: {
          caption: 'مقارنة هندسية لأطر عمل PHP المتخصصة والناشئة',
          headers: ['إطار العمل', 'الفئة المعمارية', 'أبرز نقطة قوة', 'متى تختاره؟'],
          rows: [
            ['CodeIgniter 4', 'إطار MVC خفيف الوزن', 'سرعة استجابة عالية واعتماديات محدودة جداً', 'الواجهات الخفيفة وتحديث مشاريع CodeIgniter 3'],
            ['CakePHP 5', 'إطار متكامل قائم على الاتفاقيات', 'طبقة ORM قوية وتوليد سريع لشاشات الأعمال', 'أنظمة الأعمال الداخلية كثيفة الجداول والعلاقات'],
            ['Slim 4 / Mezzio', 'إطار وسطاء مصغر (PSR-7 / PSR-15)', 'مرونة مطلقة لاختيار حاوية الاعتماديات وطبقة البيانات', 'بوابات API المصغرة وخدمات الربط المتخصصة'],
            ['Spiral (RoadRunner)', 'إطار مؤسسي هجين Go + PHP', 'طوابير مهام وgRPC وCycle ORM مدمجة في الذاكرة', 'الأنظمة الموزعة عالية الإنتاجية'],
            ['Hyperf (Swoole)', 'إطار خدمات مصغرة غير متزامن (Coroutines)', 'سرعة استثنائية مع قواطع دوائر وتتبع موزع', 'منصات التكنولوجيا المالية ذات التزامن الفائق']
          ]
        }
      },
      {
        id: 'sec-2',
        heading: '2. استراتيجية تحديث وترحيل الأنظمة القديمة (Lumen، Zend، FuelPHP، CI3)',
        paragraphs: [
          'بعد توقف التطوير النشط لإطار Lumen لصالح خفة Laravel الحديث مع Octane، ينبغي ترحيل خدمات Lumen القائمة تدريجياً إلى Laravel 11/12 أو Slim 4 لاستعادة التحديثات الأمنية المباشرة.',
          'وفي الأنظمة المبنية على Zend Framework أو CodeIgniter 2/3، طبّق نمط الإحلال التدريجي (Strangler Fig Pattern): ضع موازناً أمامياً يوجّه المسارات الجديدة إلى خدمة حديثة مع مشاركة طبقة المصادقة حتى اكتمال الإحلال دون توقف الخدمة.'
        ]
      }
    ],
    commonMistakes: [
      {
        title: 'بدء مشاريع جديدة على Lumen أو أطر متوقفة الدعم',
        detail:
          'استخدام إطار متوقف يعرّض المشروع لتعارض التبعيات عند ترقية إصدارات PHP؛ استخدم Slim 4 للخدمات المصغرة المجردة أو Laravel مع Octane.'
      },
      {
        title: 'إعادة كتابة الأنظمة الضخمة دفعة واحدة (Big-Bang Rewrite)',
        detail:
          'إيقاف التطوير لعام كامل لإعادة كتابة نظام يعمل في الإنتاج ينتهي غالباً بتجاوز الميزانية؛ اعتمد الترحيل التدريجي مع Rector.'
      }
    ],
    faqs: [
      {
        q: 'هل لا يزال Phalcon خياراً مفضلاً للأداء العالي في 2026؟',
        a: 'مع نضج FrankenPHP وRoadRunner وSwoole ومترجم JIT في PHP 8.5، أصبحت الأطر المكتوبة بلغة PHP القياسية تحقق سرعات مماثلة دون تعقيد تثبيت امتدادات C المترجمة.'
      },
      {
        q: 'أيهما أنسب للخدمات المصغرة القياسية: Slim 4 أم Mezzio؟',
        a: 'Slim 4 أبسط وأسرع في الإعداد الأولي للواجهات الصغيرة، بينما يوفر Mezzio (من مشروع Laminas) هيكلة وحدات مؤسسية أقوى للفرق الكبيرة.'
      }
    ],
    conclusion: {
      heading: 'الخلاصة المعمارية لاختيار إطار PHP',
      paragraphs: [
        'تمنحك معرفة الطيف الكامل لأطر PHP القدرة على اختيار الأداة الرشيقة المناسبة لكل خدمة مصغرة أو وضع خطة تحديث آمنة للأنظمة المؤسسية القائمة.'
      ]
    },
    officialSources: [
      { title: 'توثيق Slim Framework 4 الرسمي', url: 'https://www.slimframework.com/docs/v4/', publisher: 'Slim' },
      { title: 'توثيق Spiral Framework الرسمي', url: 'https://spiral.dev/docs', publisher: 'Spiral Scout' },
      { title: 'توثيق CodeIgniter 4 الرسمي', url: 'https://codeigniter.com/user_guide/', publisher: 'CodeIgniter Foundation' }
    ],
    relatedArticleSlugs: [
      'laravel-vs-symfony-enterprise-architecture-comparison',
      'enterprise-php-api-architecture-api-platform-oauth2-jwt-graphql-reverb',
      'php-8-5-new-features-and-upgrade-guide',
      'phpunit-vs-pest-php-testing-framework-comparison'
    ]
  },

  // 7. Production JavaScript Libraries: Zod, Charts, Three.js, GSAP, RxJS
  {
    slug: 'interactive-visualization-3d-and-utilities-threejs-d3-chartjs-gsap-dayjs',
    categoryKey: 'javascript',
    categoryLabel: 'منظومة جافاسكربت وتايب سكربت (JS & TS Ecosystem)',
    badge: 'مكتبات جافاسكربت الإنتاجية · Zod 4 · ECharts · D3 · Three.js · GSAP',
    title:
      'دليل مكتبات JavaScript الإنتاجية: التحقق عبر Zod 4 والرسوم البيانية ECharts وD3.js والمشاهد ثلاثية الأبعاد Three.js والتحريك GSAP',
    seoTitle:
      'دليل مكتبات JavaScript: Zod 4 وECharts وD3.js وThree.js وGSAP وDay.js',
    metaDescription:
      'مرجع هندسي لمكتبات جافاسكربت وتايب سكربت في الإنتاج: التحقق من البيانات عبر Zod 4 وValibot، لوحات البيانات بـ ECharts وChart.js وD3.js، الرسوم ثلاثية الأبعاد Three.js، والتحريك عبر GSAP وMotion.',
    summary:
      'دليل عملي لاختيار وتكامل أهم مكتبات JavaScript التخصصية مع الحفاظ على سرعة التحميل وميزانية الحزم (Bundle Budget): التحقق من المخططات، التصوير البصري للبيانات الضخمة، تجارب WebGL ثلاثية الأبعاد، ومكتبات التواريخ والأدوات.',
    readTime: '13 دقيقة قراءة',
    publishedDate: '2026-03-14',
    updatedDate: '2026-03-14',
    featuredSvg:
      '/assets/images/articles/interactive-visualization-3d-and-utilities-threejs-d3-chartjs-gsap-dayjs-featured.svg',
    featuredImageAlt:
      'معمارية مكتبات جافاسكربت التفاعلية: Zod 4 وApache ECharts وD3.js وThree.js وGSAP',
    relatedServiceSlug: 'frontend-development',
    relatedServiceTitle: 'تطوير الواجهات الأمامية التفاعلية ولوحات البيانات',
    secondaryServiceSlug: 'web-application-development',
    secondaryServiceTitle: 'تطوير تطبيقات الويب المتقدمة',
    primaryKeyword: 'أهم مكتبات JavaScript للرسوم البيانية والتحقق',
    secondaryKeywords: [
      'Zod 4 التحقق من البيانات في TypeScript',
      'مقارنة ECharts وChart.js وD3.js',
      'تطوير واجهات Three.js وWebGL',
      'تحريك الواجهات عبر GSAP وMotion',
      'بدائل Moment.js مثل Day.js وdate-fns'
    ],
    isNewlyPublished: true,
    wordCount: 1520,
    introHtml: `<p class="text-sm sm:text-base text-slate-300 leading-[1.85]">بناء تطبيق ويب مؤسسي حديث لا يقف عند اختيار إطار الواجهة الأمامية فحسب؛ بل يتحدد تميزه بجودة المكتبات المساندة التي تتحقق من العقود البرمجية على حدود الشبكة، وتعرض ملايين النقاط البيانية بسلاسة 60 إطاراً في الثانية، وتقدم تفاعلات بصرية متقنة دون تضخيم حجم الحزمة.</p>`,
    sections: [
      {
        id: 'sec-1',
        heading: '1. التحقق من البيانات في وقت التشغيل: Zod 4 مقابل Valibot وYup وAjv',
        paragraphs: [
          'تمحى أنواع TypeScript بالكامل بعد الترجمة، لذا تظل التطبيقات عرضة للبيانات المشوهة القادمة من واجهات API أو نماذج الإدخال ما لم تُفحص بمخططات وقت التشغيل (Runtime Schemas).',
          'يجمع Zod 4 بين استنتاج الأنواع التلقائي وسرعة فحص محسّنة بشكل كبير، بينما يوفرAjv أعلى سرعة لمخططات JSON Schema القياسية في الخوادم، ويبرز Valibot بحجم حزمة مصغر قابل للتشذيب الشجري الكامل.'
        ],
        codeBlock: {
          filename: 'src/schemas/tenderSubmission.ts',
          language: 'typescript',
          code: `import { z } from 'zod';

export const TenderSubmissionSchema = z.object({
  referenceNumber: z.string().min(4),
  entityName: z.string().min(3),
  budgetSar: z.number().positive(),
  closingDateIso: z.string().datetime(),
  complianceScore: z.number().min(0).max(100),
});

export type TenderSubmission = z.infer<typeof TenderSubmissionSchema>;`
        }
      },
      {
        id: 'sec-2',
        heading: '2. لوحات البيانات والرسوم التفاعلية: Apache ECharts مقابل Chart.js وD3.js',
        paragraphs: [
          'للوحات القيادة التنفيذية التي تعرض خرائط حرارية وعشرات الآلاف من النقاط اللحظية مع تكبير وتصغير فوري، يتفوق Apache ECharts بفضل دعم الرسم على Canvas/WebGL وتعدد المحاور الجاهز.',
          'أما Chart.js فهو الأنسب للرسوم الإحصائية القياسية الخفيفة، في حين تُستخدم وحدات D3.js الدقيقة (مثل d3-scale وd3-shape) لبناء تصورات بيانية مخصصة بالكامل مع ترك إدارة عناصر SVG لإطار React أو Vue أو Svelte.'
        ],
        comparisonTable: {
          caption: 'مصفوفة اختيار مكتبات التصوير البصري والتحريك والأدوات في JavaScript',
          headers: ['الفئة', 'المكتبة الموصى بها', 'أهم ميزة تقنية', 'تنبيه الأداء وحجم الحزمة'],
          rows: [
            ['الرسوم المؤسسية الكثيفة', 'Apache ECharts', 'دعم Canvas/WebGL وتكبير لحظي للبيانات الضخمة', 'استورد الوحدات المطلوبة فقط عبر echarts/core'],
            ['التصورات المخصصة الحرة', 'D3.js (Modular)', 'مرونة رياضية مطلقة للمقاييس والمسارات الجغرافية', 'استورد الحزم الفرعية مثل d3-scale بدلاً من d3 الكاملة'],
            ['المشاهد ثلاثية الأبعاد', 'Three.js / React Three Fiber', 'محرك WebGL/WebGPU متكامل للمنتجات والتوائم الرقمية', 'حمّله كسولاً عبر import() مع ضغط مجسمات Draco/KTX2'],
            ['التحريك المتقدم', 'GSAP / Motion', 'جداول زمنية دقيقة تعتمد على transform وopacity فقط', 'احترم دائماً تفضيل تقليل الحركة prefers-reduced-motion'],
            ['التواريخ والأدوات', 'date-fns v4 / Day.js + Native', 'دوال نقية قابلة للتشذيب الشجري بديلاً عن Moment.js', 'استخدم دوال اللغة الأصلية بدلاً من استيراد lodash كاملة']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        title: 'استيراد مكتبتي Three.js أو ECharts بالكامل في الحزمة الرئيسية للصفحة الأولى',
        detail:
          'تحميل مئات الكيلوبايتات من محركات الرسم قبل تفاعل المستخدم يدمّر مؤشري LCP وINP؛ اعزلها دائماً في أجزاء محمّلة ديناميكياً عند الحاجة.'
      },
      {
        title: 'تحريك خصائص التخطيط الهندسي مثل width وtop وmargin',
        detail:
          'تحريك هذه الخصائص يجبر المتصفح على إعادة حساب التخطيط في كل إطار؛ اقتصر التحريك على transform وopacity لتحقيق سلاسة فائقة.'
      }
    ],
    faqs: [
      {
        q: 'هل ما زلنا بحاجة إلى Axios مع نضج واجهة fetch القياسية؟',
        a: 'تكفي fetch القياسية (أو مغلف خفيف مثل ky) لمعظم المشاريع الحديثة، بينما يظل Axios مفيداً عند الحاجة لمعترضات الطلبات المركزية وتتبع تقدم رفع الملفات.'
      },
      {
        q: 'ما البديل الأمثل لمكتبة Moment.js المتوقفة؟',
        a: 'مكتبة date-fns v4 (مع دعم المناطق الزمنية الأصلي) أو Day.js خفيفة الحجم (2 كيلوبايت) إلى جانب واجهة Intl.DateTimeFormat المدمجة في المتصفح.'
      }
    ],
    conclusion: {
      heading: 'الخلاصة الهندسية لإدارة مكتبات JavaScript',
      paragraphs: [
        'الانضباط في اختيار المكتبات التخصصية واستيراد أجزائها الفرعية فقط يمنح تطبيقاتك ثراءً بصرياً وتفاعلياً مذهلاً دون التضحية بسرعة التحميل على الهواتف.'
      ]
    },
    officialSources: [
      { title: 'توثيق مكتبة Zod الرسمي', url: 'https://zod.dev/', publisher: 'Zod' },
      { title: 'توثيق Apache ECharts الرسمي', url: 'https://echarts.apache.org/en/index.html', publisher: 'Apache Software Foundation' },
      { title: 'توثيق محرك Three.js الرسمي', url: 'https://threejs.org/docs/', publisher: 'Three.js' }
    ],
    relatedArticleSlugs: [
      'javascript-bundlers-and-compilers-vite-rolldown-webpack-rspack-swc',
      'react-ui-component-libraries-shadcn-radix-mui-antd-mantine',
      'react-vs-vue-architecture-and-ecosystem-comparison',
      'redux-toolkit-vs-zustand-react-state-comparison'
    ]
  },

  // 8. TypeScript API Layers, Real-Time WebSockets & Node.js ORMs
  {
    slug: 'typescript-api-layers-trpc-apollo-urql-relay-graphql-yoga-websockets',
    categoryKey: 'node',
    categoryLabel: 'نود جي إس والخوادم (Node.js)',
    badge: 'واجهات TypeScript · tRPC 11 · GraphQL Yoga · Socket.IO vs ws · MikroORM',
    title:
      'بروتوكولات API في TypeScript والبث اللحظي WebSockets وأنظمة ORM في Node.js: مقارنة tRPC 11 وApollo وGraphQL Yoga وSocket.IO وMikroORM',
    seoTitle:
      'مقارنة tRPC 11 وGraphQL Yoga وSocket.IO مقابل ws وأنظمة ORM في Node.js',
    metaDescription:
      'دليل معماري شامل لبروتوكولات الاتصال في TypeScript وNode.js: متى تختار tRPC 11 أو OpenAPI أو GraphQL (Apollo / urql / Relay / Yoga)، ومقارنة Socket.IO مع ws، وMikroORM مع TypeORM وMongoose.',
    summary:
      'مرجع هندسي لتصميم طبقة الاتصال والبيانات في خوادم Node.js وTypeScript: المفاضلة بين أمان الأنواع المباشر في tRPC 11 وعقود GraphQL الموحدة، هندسة قنوات WebSockets عالية التوسع، واختيار طبقة ORM الأنسب.',
    readTime: '14 دقيقة قراءة',
    publishedDate: '2026-03-13',
    updatedDate: '2026-03-13',
    featuredSvg:
      '/assets/images/articles/typescript-api-layers-trpc-apollo-urql-relay-graphql-yoga-websockets-featured.svg',
    featuredImageAlt:
      'مخطط بروتوكولات واجهات TypeScript: tRPC 11 وGraphQL Yoga وWebSockets وأنظمة ORM في Node.js',
    relatedServiceSlug: 'api-development-integration',
    relatedServiceTitle: 'تصميم وتكامل واجهات البرمجة والأنظمة اللحظية',
    secondaryServiceSlug: 'backend-development',
    secondaryServiceTitle: 'تطوير خوادم Node.js والأنظمة الموزعة',
    primaryKeyword: 'مقارنة tRPC مقابل GraphQL وREST في TypeScript',
    secondaryKeywords: [
      'tRPC 11 شرح ومزايا',
      'GraphQL Yoga وPothos في Node.js',
      'Socket.IO مقابل ws في WebSockets',
      'مقارنة MikroORM وTypeORM وSequelize',
      'توسيع خوادم WebSockets عبر Redis'
    ],
    isNewlyPublished: true,
    wordCount: 1560,
    introHtml: `<p class="text-sm sm:text-base text-slate-300 leading-[1.85]">تمنح بيئة TypeScript ميزة استثنائية عند توحيد لغة البرمجة بين الخادم والواجهة الأمامية، إلا أن اختيار بروتوكول الاتصال الخاطئ قد يقيد قدرتك المستقبلية على دعم تطبيقات الجوال الأصلية أو الشركاء الخارجيين.</p>`,
    sections: [
      {
        id: 'sec-1',
        heading: '1. طبقة العقود: tRPC 11 مقابل GraphQL (Yoga / Apollo / urql / Relay) مقابل OpenAPI',
        paragraphs: [
          'في المستودعات الموحدة (TypeScript Monorepos) التي تتحكم فيها الواجهة الأمامية والخلفية معاً، يلغي tRPC 11 الحاجة لتوليد الأكواد تماماً؛ إذ تنتقل أنواع المدخلات والمخرجات لحظياً من الخادم إلى عميل TanStack Query في المتصفح.',
          'أما عندما يستهلك الواجهة شركاء خارجيون أو تطبيقات Swift/Kotlin أصلية، فإن واجهات OpenAPI 3.1 أو خادم GraphQL Yoga المبني بمخططات Pothos مع عميل urql أو Apollo/Relay توفر عقداً معيارياً مستقلاً عن لغة البرمجة.'
        ],
        comparisonTable: {
          caption: 'مقارنة معمارية لبروتوكولات الاتصال في مشاريع TypeScript الحديثة',
          headers: ['البروتوكول / الإطار', 'أمان الأنواع', 'دعم اللغات غير TypeScript', 'الاستخدام الأمثل'],
          rows: [
            ['tRPC 11', 'مباشر تلقائي بدون توليد أكواد', 'محدود (يتطلب جسور OpenAPI مثل trpc-to-openapi)', 'تطبيقات Full-Stack TypeScript داخل مستودع موحد'],
            ['GraphQL (Yoga + Pothos)', 'عبر GraphQL Codegen', 'ممتاز لكافة المنصات والجوال', 'واجهات غنية تجمع بيانات مترابطة من خدمات متعددة'],
            ['REST + OpenAPI (Hono / NestJS)', 'عبر openapi-typescript', 'المعيار العالمي الأوسع توافقاً', 'البوابات الحكومية والمصرفية والتكاملات بين الشركات B2B']
          ]
        }
      },
      {
        id: 'sec-2',
        heading: '2. البث اللحظي: Socket.IO مقابل مكتبة ws الخفيفة وتوسيع العقد عبر Redis',
        paragraphs: [
          'توفر Socket.IO إدارة تلقائية للغرف (Rooms)، وإعادة الاتصال التدريجي، وتخزين الرسائل أثناء انقطاع الشبكة المؤقت، مما يجعلها عملية جداً لغرف المحادثات ولوحات التعاون التفاعلية.',
          'وللبوابات عالية التردد التي تتبادل رسائل ثنائية أو JSON قياسية بأقل استهلاك للذاكرة، تتفوق مكتبة ws الخفيفة أو WebSockets المدمجة في Bun/uWebSockets، شريطة ربط العقد الخلفية عبر محول Redis Pub/Sub أو NATS لمزامنة المشتركين عبر جميع الخوادم.'
        ]
      },
      {
        id: 'sec-3',
        heading: '3. خريطة أنظمة ORM في Node.js خارج Prisma وDrizzle: MikroORM وTypeORM وKnex وMongoose',
        paragraphs: [
          'لعشاق نمط Data Mapper ووحدة العمل الشبيه بـ Doctrine، يقدم MikroORM v6 أفضل تصميم كائني نظيف في TypeScript لتطبيقات المجال المعقدة (DDD)، متفوقاً في دقة الأنواع على TypeORM وSequelize الكلاسيكيين.',
          'أما لباني الاستعلامات المرن بدون كائنات ثقيلة فيبرز Kysely وKnex.js، وفي قواعد بيانات المستندات تظل Mongoose 8 مع التحقق الصارم المدمج الخيار الأكثر نضجاً مع MongoDB.'
        ]
      }
    ],
    commonMistakes: [
      {
        title: 'تشغيل GraphQL بدون DataLoader وتحديد عمق الاستعلام',
        detail:
          'إهمال تجميع الاستعلامات عبر DataLoader يسبب مئات استعلامات N+1 في كل طلب متداخل، كما أن غياب حد العمق يعرّض الخادم لهجمات حجب الخدمة.'
      },
      {
        title: 'تخزين حالة غرف WebSockets في ذاكرة خادم واحد فقط',
        detail:
          'بمجرد إضافة خادم ثانٍ خلف موازن الأحمال لن تصل الرسائل للمستخدمين المتصلين بالعقدة الأخرى ما لم يتم تفعيل محول Redis/NATS.'
      }
    ],
    faqs: [
      {
        q: 'متى نختار urql بدلاً من Apollo Client في تطبيقات React/Vue؟',
        a: 'يتميز urql بحجم حزمة أصغر بكثير وبنية إضافات (Exchanges) مرنة وسهلة الفهم، بينما يُفضل Apollo أو Relay عند الحاجة لتطبيع كاش معقد جداً على مستوى الحقول.'
      },
      {
        q: 'هل يمكن جمع tRPC مع واجهات REST العامة في نفس الخادم؟',
        a: 'نعم بسهولة؛ يمكنك تخصيص tRPC للوحة التحكم الداخلية وتوليد نقاط OpenAPI REST موثقة للتكاملات الخارجية من نفس طبقة الخدمات.'
      }
    ],
    conclusion: {
      heading: 'الخلاصة المعمارية لطبقة API في Node.js',
      paragraphs: [
        'ابدأ بـ tRPC للسرعة القصوى داخل المستودعات الموحدة، واعتمد OpenAPI أو GraphQL المحمي بـ DataLoader عندما تتعدد الأنظمة المستهلكة خارج نطاق TypeScript.'
      ]
    },
    officialSources: [
      { title: 'توثيق tRPC v11 الرسمي', url: 'https://trpc.io/docs', publisher: 'tRPC' },
      { title: 'توثيق MikroORM الرسمي', url: 'https://mikro-orm.io/docs', publisher: 'MikroORM' },
      { title: 'توثيق Socket.IO الرسمي للتوسع الأفقي', url: 'https://socket.io/docs/v4/redis-adapter/', publisher: 'Socket.IO' }
    ],
    relatedArticleSlugs: [
      'expressjs-vs-nestjs-nodejs-backend-comparison',
      'prisma-vs-drizzle-orm-typescript-comparison',
      'redux-toolkit-vs-zustand-react-state-comparison',
      'nextjs-vs-nuxtjs-fullstack-ssr-comparison'
    ]
  },

  // 9. JavaScript Bundlers, Compilers & Package Managers
  {
    slug: 'javascript-bundlers-and-compilers-vite-rolldown-webpack-rspack-swc',
    categoryKey: 'javascript',
    categoryLabel: 'منظومة جافاسكربت وتايب سكربت (JS & TS Ecosystem)',
    badge: 'أدوات البناء والمترجمات · Vite 6 · Rolldown · Rspack · SWC · pnpm',
    title:
      'أدوات البناء والمترجمات ومديرو الحزم في JavaScript: مقارنة Vite 6 وRolldown وWebpack 5 وRspack وTurbopack وSWC وpnpm وBun',
    seoTitle:
      'مقارنة Vite 6 وRolldown وWebpack 5 وRspack وSWC ومديري الحزم pnpm وBun',
    metaDescription:
      'دليل هندسي شامل لأدوات البناء والمترجمات في جافاسكربت: Vite 6 ومحرك Rolldown، ترحيل Webpack 5 إلى Rspack، مقارنة SWC وesbuild وBabel، واختيار pnpm أو Bun للمستودعات الكبرى.',
    summary:
      'تشريح تقني للجيل الجديد من أدوات البناء المكتوبة بلغات الأنظمة (Rust وGo): كيف يوحّد محرك Rolldown بيئة التطوير والإنتاج في Vite، ومتى تنقل مشاريع Webpack 5 الضخمة إلى Rspack في ساعات، وأفضل ممارسات إدارة المستودعات المتعددة عبر pnpm.',
    readTime: '13 دقيقة قراءة',
    publishedDate: '2026-03-12',
    updatedDate: '2026-03-12',
    featuredSvg:
      '/assets/images/articles/javascript-bundlers-and-compilers-vite-rolldown-webpack-rspack-swc-featured.svg',
    featuredImageAlt:
      'معمارنة أدوات البناء والمترجمات في جافاسكربت: Vite 6 وRolldown وRspack وSWC وpnpm',
    relatedServiceSlug: 'frontend-development',
    relatedServiceTitle: 'تطوير الواجهات الأمامية وتسريع خطوط البناء والأداء',
    secondaryServiceSlug: 'speed-optimization',
    secondaryServiceTitle: 'تحسين سرعة المواقع ومؤشرات الويب الأساسية',
    primaryKeyword: 'مقارنة أدوات البناء في JavaScript Vite مقابل Webpack وRspack',
    secondaryKeywords: [
      'Vite 6 ومحرك Rolldown',
      'ترحيل Webpack 5 إلى Rspack',
      'مقارنة SWC وesbuild وBabel',
      'مدير الحزم pnpm مقابل npm وBun',
      'تقليص زمن البناء في CI/CD'
    ],
    isNewlyPublished: true,
    wordCount: 1490,
    introHtml: `<p class="text-sm sm:text-base text-slate-300 leading-[1.85]">شهدت البنية التحتية لأدوات JavaScript تحولاً جذرياً بانتقال المترجمات وأدوات التجميع إلى لغتي <strong>Rust</strong> و<strong>Go</strong>؛ مما قلّص أزمنة البناء في المشاريع المؤسسية من عشر دقائق إلى ثوانٍ معدودة وحسّن إنتاجية المطورين بشكل ملموس.</p>`,
    sections: [
      {
        id: 'sec-1',
        heading: '1. أدوات التجميع (Bundlers): Vite 6 + Rolldown مقابل Webpack 5 وRspack وRollup',
        paragraphs: [
          'أصبح Vite 6 (مع واجهة Environment API ومحرك Rolldown المبني بلغة Rust) المعيار الافتراضي لتطبيقات الويب الحديثة وأطر Nuxt وSvelteKit وAstro، جامعاً بين الإقلاع الفوري في التطوير وتقسيم الشفرات الدقيق في الإنتاج.',
          'أما بالنسبة للمؤسسات التي تمتلك تطبيقات ضخمة تعتمد على إضافات Webpack 5 أو Module Federation، فإن أداة Rspack (المكتوبة بلغة Rust والمتوافقة مع واجهة إعدادات Webpack) تخفض زمن البناء بنسبة 80%–90% دون الحاجة لإعادة هيكلة شاملة.'
        ],
        comparisonTable: {
          caption: 'مقارنة أدوات التجميع والمترجمات ومديري الحزم في منظومة JavaScript الحديثة',
          headers: ['الأداة', 'اللغة الأساسية', 'أهم حالة استخدام', 'زمن البناء النسبي'],
          rows: [
            ['Vite 6 (مع Rolldown / esbuild)', 'Rust / Go + TS', 'التطبيقات الحديثة والأطر الشاملة والمكتبات', 'فائق السرعة (< 3 ثوانٍ)'],
            ['Rspack', 'Rust', 'ترحيل سلس لمشاريع Webpack 5 الضخمة وModule Federation', 'فائق السرعة (5x–10x أسرع من Webpack)'],
            ['Webpack 5', 'JavaScript', 'الأنظمة الموروثة ذات الإضافات المخصصة النادرة', 'بطيء في المشاريع الكبيرة'],
            ['Rollup / tsup', 'JS / Go', 'نشر مكتبات وحزم npm نقية بنظامي ESM وCJS', 'سريع جداً'],
            ['SWC / Oxc', 'Rust', 'ترجمة TypeScript/JSX والتحقق فائق السرعة بديلاً عن Babel', 'أسرع بـ 20 ضعفاً من Babel']
          ]
        }
      },
      {
        id: 'sec-2',
        heading: '2. مديرو الحزم والمستودعات الموحدة: pnpm Workspaces مقابل Bun وYarn وnpm',
        paragraphs: [
          'يعتمد pnpm على مخزن محتوى عالمي قابل للعنونة بالروابط الصلبة والرمزية، مما يوفر 60% من مساحة القرص ويمنع تماماً مشكلة التبعيات الشبحية (Phantom Dependencies) الشائعة في npm المسطح.',
          'وعند دمج pnpm Workspaces مع Turborepo أو Nx وتخزين مخرجات البناء المؤقت عن بُعد، لن تعيد خطوط CI/CD بناء أو اختبار سوى الحزم المتأثرة فعلياً بالتعديل الأخير.'
        ]
      }
    ],
    commonMistakes: [
      {
        title: 'ملفات التصدير المجمعة (Barrel Files index.ts) الضخمة',
        detail:
          'إعادة تصدير مئات المكونات من ملف index.ts واحد يعطل التشذيب الشجري (Tree-Shaking) ويبطئ تشغيل خوادم التطوير والاختبارات بشكل حاد.'
      },
      {
        title: 'عدم فصل حزم التبعيات الثابتة في إعدادات تقسيم الشفرات',
        detail:
          'دمج كافة الشفرات في ملف واحد يلغي فائدة التخزين المؤقت في المتصفح عند كل تحديث بسيط.'
      }
    ],
    faqs: [
      {
        q: 'متى نحتاج Babel اليوم بدلاً من SWC أو esbuild؟',
        a: 'فقط عند الاعتماد على تحويلات AST مخصصة لا يتوفر لها بديل في SWC (ومع ذلك يدعم React Compiler الحديث التكامل دون إبطاء كامل المشروع).'
      },
      {
        q: 'هل يُنصح باستخدام pnpm في جميع المشاريع متعددة الحزم (Monorepos)؟',
        a: 'نعم، لصرامته في عزل التبعيات وسرعة تثبيته العالية ودعمه الأصيل لبروتوكول workspace:* وكتالوجات الإصدارات الموحدة.'
      }
    ],
    conclusion: {
      heading: 'الخلاصة التنفيذية لأدوات بناء JavaScript',
      paragraphs: [
        'اعتمد Vite 6 + pnpm للمشاريع الجديدة، وانتقل إلى Rspack لتسريع مشاريع Webpack المؤسسية دون مخاطرة، مع مراقبة أحجام الحزم آلياً في كل إصدار.'
      ]
    },
    officialSources: [
      { title: 'توثيق Vite 6 الرسمي', url: 'https://vite.dev/guide/', publisher: 'Vite' },
      { title: 'توثيق Rspack الرسمي', url: 'https://rspack.dev/', publisher: 'ByteDance Web Infra' },
      { title: 'توثيق مدير الحزم pnpm الرسمي', url: 'https://pnpm.io/motivation', publisher: 'pnpm' }
    ],
    relatedArticleSlugs: [
      'jest-vs-vitest-javascript-testing-comparison',
      'nextjs-vs-nuxtjs-fullstack-ssr-comparison',
      'svelte-vs-react-compiler-runes-vs-vdom-comparison',
      'interactive-visualization-3d-and-utilities-threejs-d3-chartjs-gsap-dayjs'
    ]
  },

  // 10. Jest vs Vitest & Playwright vs Cypress
  {
    slug: 'jest-vs-vitest-javascript-testing-comparison',
    categoryKey: 'javascript',
    categoryLabel: 'منظومة جافاسكربت وتايب سكربت (JS & TS Ecosystem)',
    badge: 'اختبارات JavaScript · Vitest 4 · Jest · Playwright · Cypress',
    title:
      'دليل اختبارات JavaScript وأتمتة النهاية للنهاية (E2E): مقارنة Vitest 4 مقابل Jest وPlaywright مقابل Cypress وTesting Library وStorybook',
    seoTitle:
      'مقارنة Vitest 4 مقابل Jest وPlaywright مقابل Cypress في اختبارات الويب',
    metaDescription:
      'المرجع الشامل لبناء هرم اختبارات JavaScript وTypeScript الحديث: مقارنة Vitest 4 وJest، مفاضلة Playwright وCypress لاختبارات E2E، ودور Testing Library وStorybook.',
    summary:
      'استراتيجية متكاملة لهندسة الاختبارات الآلية في تطبيقات الويب الحديثة: لماذا تتفوق Vitest 4 في دعم ESM ووضع المتصفح الحقيقي، وكيف يضمن Playwright استقرار اختبارات E2E عبر جميع المتصفحات بدون فشل عشوائي (Flakiness).',
    readTime: '13 دقيقة قراءة',
    publishedDate: '2026-03-11',
    updatedDate: '2026-03-11',
    featuredSvg:
      '/assets/images/articles/jest-vs-vitest-javascript-testing-comparison-featured.svg',
    featuredImageAlt:
      'هرم اختبارات JavaScript الحديث: Vitest 4 وTesting Library وStorybook وPlaywright',
    relatedServiceSlug: 'custom-software-development',
    relatedServiceTitle: 'تطوير البرمجيات وهندسة ضبط الجودة والاختبارات الآلية',
    secondaryServiceSlug: 'frontend-development',
    secondaryServiceTitle: 'تطوير الواجهات الأمامية المعتمدة',
    primaryKeyword: 'مقارنة Vitest مقابل Jest وPlaywright مقابل Cypress',
    secondaryKeywords: [
      'Vitest 4 مقابل Jest',
      'Playwright مقابل Cypress اختبارات E2E',
      'Testing Library اختبار المكونات',
      'Storybook 8 الاختبار البصري',
      'تقليل الاختبارات المتقلبة Flaky Tests'
    ],
    isNewlyPublished: true,
    wordCount: 1500,
    introHtml: `<p class="text-sm sm:text-base text-slate-300 leading-[1.85]">انتقلت هندسة اختبارات الواجهات والخوادم في JavaScript من محاكاة DOM البطيئة والاختبارات الهشة المعتمدة على المؤقتات الزمنية الثابتة إلى ما يُعرف بـ <strong>كأس الاختبارات الحديث (Testing Trophy)</strong>: تحليل أنواع صارم، اختبارات وحدات فائقة السرعة بـ <strong>Vitest</strong>، اختبارات مكونات سلوكية، واختبارات تدفقات حرجة حقيقية عبر <strong>Playwright</strong>.</p>`,
    sections: [
      {
        id: 'sec-1',
        heading: '1. اختبارات الوحدات والمكونات: Vitest 4 مقابل Jest',
        paragraphs: [
          'يعاني Jest في المشاريع الحديثة من تعقيد إعدادات تحويل وحدات ES Modules وTypeScript عبر ts-jest أو Babel، بينما يشارك Vitest 4 نفس ملف إعدادات Vite ويدعم ESM وTypeScript أصلياً مع إعادة تشغيل فورية للاختبارات المتأثرة فقط خلال أجزاء من الثانية.',
          'كما يقدم Vitest وضع المتصفح الحقيقي (Browser Mode عبر Playwright) لاختبار المكونات التي تعتمد على CSS الحقيقي وأبعاد العناصر بدلاً من بيئة jsdom التقريبية، مع واجهة متوافقة بنسبة 95% مع دوال describe/expect/vi الخاصة بـ Jest لترحيل سلس.'
        ],
        comparisonTable: {
          caption: 'مقارنة أدوات الاختبار في منظومة JavaScript وTypeScript',
          headers: ['الأداة', 'طبقة الاختبار', 'نقطة التفوق الرئيسية', 'حالة الاستخدام المثلى'],
          rows: [
            ['Vitest 4', 'الوحدات والمكونات ووضع المتصفح', 'دعم أصيل لـ ESM/TS وسرعة فائقة وتكامل مباشر مع Vite', 'جميع مشاريع TypeScript وReact وVue وSvelte الحديثة'],
            ['Jest', 'الوحدات والتكامل', 'انتشار تاريخي واسع في المشاريع القديمة', 'صيانة الأنظمة الموروثة المبنية على CommonJS/Webpack'],
            ['Playwright', 'نهاية لنهاية (E2E) وواجهات API', 'توازي مجاني، عزل سياقات المتصفح، وانتظار تلقائي ذكي', 'اختبار رحلات المستخدم الحرجة عبر Chromium وWebKit وFirefox'],
            ['Cypress', 'نهاية لنهاية ومكونات', 'واجهة تصحيح تفاعلية مريحة أثناء التطوير المحلي', 'الفرق الصغيرة التي تركز على متصفحات Chromium'],
            ['Storybook 8', 'توثيق وعزل واختبار تفاعلي بصري', 'تطوير المكونات بمعزل عن الخادم وكشف التراجعات البصرية', 'مكتبات التصميم المشتركة (Design Systems)']
          ]
        }
      },
      {
        id: 'sec-2',
        heading: '2. اختبارات النهاية للنهاية (E2E): لماذا أصبح Playwright المعيار المؤسسي الأول؟',
        paragraphs: [
          'ينشئ Playwright سياق متصفح معزولاً (BrowserContext) لكل اختبار في بضعة مللي ثانية، مما يتيح تشغيل عشرات الاختبارات بالتوازي مجاناً ودعم نوافذ التبويب المتعددة والنطاقات المتقاطعة (OAuth / بوابات الدفع) بسلاسة.',
          'بفضل ميزة الانتظار التلقائي للعناصر المرئية والقابلة للتفاعل ومسجل التتبع الكامل (Trace Viewer)، يختفي السبب الأكبر لفشل الاختبارات العشوائي في بيئات CI.'
        ],
        codeBlock: {
          filename: 'tests/e2e/consultation-flow.spec.ts',
          language: 'typescript',
          code: `import { test, expect } from '@playwright/test';

test('إرسال نموذج طلب استشارة المناقصة بنجاح', async ({ page }) => {
  await page.goto('/ar/contact/index.html');
  await page.getByLabel(/الاسم/i).fill('م. عبد الرحمن السبيعي');
  await page.getByLabel(/البريد الإلكتروني/i).fill('eng@enterprise.sa');
  await page.getByRole('button', { name: /إرسال/i }).click();

  await expect(page.getByText(/تم استلام/i)).toBeVisible();
});`
        }
      }
    ],
    commonMistakes: [
      {
        title: 'استخدام محددات CSS الهشة بدلاً من الأدوار الدلالية للوصول',
        detail:
          'الاعتماد على أصناف التنسيق يكسر الاختبارات مع أي تعديل بصري؛ استخدم getByRole وgetByLabel في Testing Library وPlaywright لفحص تجربة المستخدم والوصول معاً.'
      },
      {
        title: 'وضع مهل انتظار ثابتة waitForTimeout(3000)',
        detail:
          'المهل الثابتة تبطئ خط البناء وتفشل تحت ضغط الخوادم؛ اعتمد دائماً على التحققات المنتظرة تلقائياً (Web-First Assertions).'
      }
    ],
    faqs: [
      {
        q: 'كم يستغرق ترحيل مشروع متوسط من Jest إلى Vitest؟',
        a: 'غالباً بضع ساعات فقط؛ إذ يكفي استبدال jest.* بـ vi.* وإزالة محولات Babel المعقدة للاستفادة من سرعة التحميل الفورية.'
      },
      {
        q: 'كيف نحاكي واجهات API الخارجية في اختبارات المكونات دون كسر الواقعية؟',
        a: 'باستخدام مكتبة MSW (Mock Service Worker) التي تعترض الطلبات على مستوى الشبكة بدلاً من تعديل كود fetch أو Axios داخل التطبيق.'
      }
    ],
    conclusion: {
      heading: 'الخلاصة التنفيذية لاستراتيجية اختبارات JavaScript',
      paragraphs: [
        'الجمع بين Vitest 4 + Testing Library لاختبارات المنطق والمكونات السريعة، وPlaywright لرحلات الأعمال الحرجة يمنح فريقك ثقة كاملة للنشر اليومي دون تراجعات.'
      ]
    },
    officialSources: [
      { title: 'توثيق Vitest الرسمي', url: 'https://vitest.dev/guide/', publisher: 'Vitest' },
      { title: 'توثيق Playwright الرسمي', url: 'https://playwright.dev/docs/intro', publisher: 'Microsoft' },
      { title: 'توثيق Testing Library الرسمي', url: 'https://testing-library.com/docs/', publisher: 'Testing Library' }
    ],
    relatedArticleSlugs: [
      'javascript-bundlers-and-compilers-vite-rolldown-webpack-rspack-swc',
      'phpunit-vs-pest-php-testing-framework-comparison',
      'react-ui-component-libraries-shadcn-radix-mui-antd-mantine',
      'react-vs-vue-architecture-and-ecosystem-comparison'
    ]
  }
];
