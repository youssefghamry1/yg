/// <reference types="node" />
import fs from 'fs';
import path from 'path';
import { PLATFORM_ARTICLES } from './articlesData.js';

export interface EnArticleSection {
  id: string;
  heading: string;
  paragraphs?: string[];
  rawHtml?: string;
  keyTakeaways?: string[];
  codeOrChecklistTitle?: string;
  checklistItems?: string[];
}

export interface EnArticleItem {
  slug: string;
  categoryKey: string;
  categoryLabel: string;
  badge: string;
  title: string;
  seoTitle?: string;
  metaDescription?: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  summary: string;
  readTime: string;
  createdDate?: string;
  publishedDate?: string;
  updatedDate: string;
  featuredSvg: string;
  featuredImageAlt?: string;
  relatedServiceSlug: string;
  relatedServiceTitle: string;
  secondaryServiceSlug?: string;
  secondaryServiceTitle?: string;
  introHtml?: string;
  tocSubItems?: { parentId: string; id: string; label: string }[];
  sections: EnArticleSection[];
  commonMistakes?: { title: string; detail: string }[];
  faqs: { q: string; a: string }[];
  conclusion?: { heading: string; paragraphs: string[] };
  customCta?: {
    badge: string;
    heading: string;
    body: string;
    primaryHref: string;
    primaryLabel: string;
    secondaryHref?: string;
    secondaryLabel?: string;
  };
  officialSources?: { title: string; url: string; publisher: string }[];
  relatedArticleSlugs: string[];
  isNewlyPublished?: boolean;
  wordCount?: number;
}

interface SlugBlueprint {
  categoryKey: string;
  categoryLabel: string;
  badge: string;
  title: string;
  summary: string;
  readTime: string;
  relatedServiceSlug: string;
  relatedServiceTitle: string;
  focusPoints: [string, string, string, string];
  takeaways: [string, string, string];
  checklist: [string, string, string, string];
  faqs: [{ q: string; a: string }, { q: string; a: string }, { q: string; a: string }];
}

const SLUG_BLUEPRINTS: Record<string, SlugBlueprint> = {
  // ==================== ANGULAR (10) ====================
  'what-is-angular': {
    categoryKey: 'angular',
    categoryLabel: 'Angular',
    badge: 'Angular · Enterprise Frontend',
    title: 'What Is Angular? Complete Enterprise Architecture Guide to Google’s TypeScript Framework',
    summary: 'An executive and engineering breakdown of modern Angular (v17–v19), standalone architecture, signals-based reactivity, dependency injection, and why sovereign portals and banking platforms standardize on Angular.',
    readTime: '9 min read',
    relatedServiceSlug: 'frontend-development',
    relatedServiceTitle: 'Front-End Development & UI Engineering',
    focusPoints: [
      'Opinionated TypeScript-first architecture with strict compile-time safety, built-in routing, HTTP interceptors, and dependency injection.',
      'Evolution from NgModules and Zone.js change detection to lightweight Standalone Components and fine-grained Angular Signals.',
      'Governance advantages for multi-squad government and banking portals requiring long-term LTS upgrades via ng update schematics.',
      'Seamless integration with REST/GraphQL backends, .NET Core/Java microservices, and RTL/LTR enterprise design systems.'
    ],
    takeaways: [
      'Angular eliminates framework fragmentation by shipping official router, forms, DI, SSR, and testing tooling out of the box.',
      'Standalone components and Signals drastically reduce bundle overhead and simplify developer onboarding.',
      'Strict TypeScript contracts make Angular ideal for mission-critical portals maintained over 5–10 year lifecycles.'
    ],
    checklist: [
      'Enable strict TypeScript compiler flags (strictTemplates, noImplicitOverride) from day one.',
      'Adopt Standalone Components and functional route guards/interceptors across all new modules.',
      'Use Angular Signals and OnPush change detection for predictable sub-millisecond UI updates.',
      'Configure automated ng update verification inside CI/CD pipelines.'
    ],
    faqs: [
      { q: 'Why do government and financial institutions prefer Angular over unopinionated libraries?', a: 'Angular enforces a standardized folder structure, dependency injection system, and official CLI upgrade path—ensuring multiple vendor teams write consistent, auditable code.' },
      { q: 'Is Angular suitable for SEO-critical public portals?', a: 'Yes. Modern Angular SSR (@angular/ssr) with non-destructive client hydration and incremental hydration delivers fast First Contentful Paint and full search engine crawlability.' },
      { q: 'Does Angular support bilingual Arabic RTL and English LTR layouts natively?', a: 'Yes, through Angular i18n, CDK Bidirectionality (Dir), and CSS logical properties.' }
    ]
  },
  'angular-standalone-components-guide': {
    categoryKey: 'angular',
    categoryLabel: 'Angular',
    badge: 'Angular · Standalone Architecture',
    title: 'Angular Standalone Components Guide: Eliminating NgModules & Streamlining Lazy Loading',
    summary: 'Master standalone components, directives, and pipes in modern Angular—covering bootstrapApplication, functional providers, route-level code splitting, and incremental migration from legacy NgModules.',
    readTime: '8 min read',
    relatedServiceSlug: 'frontend-development',
    relatedServiceTitle: 'Front-End Development & UI Engineering',
    focusPoints: [
      'Replacing AppModule with bootstrapApplication and provideRouter, provideHttpClient, and environment injectors.',
      'Direct component-level imports that make dependencies explicit and improve tree-shaking efficiency.',
      'Granular lazy loading with loadComponent and loadChildren route arrays without wrapper feature modules.',
      'Step-by-step migration schematics (@angular/core:standalone) for modernizing large enterprise codebases safely.'
    ],
    takeaways: [
      'Standalone components remove boilerplate NgModule files and prevent accidental circular module imports.',
      'loadComponent allows lazy-loading individual screens directly inside the router table.',
      'Legacy NgModules and standalone components interoperate smoothly during phased migrations.'
    ],
    checklist: [
      'Set standalone: true (default in Angular 19+) on all new UI and feature components.',
      'Migrate HTTP interceptors to functional HttpInterceptorFn registered with withInterceptors().',
      'Scope feature state services inside route providers arrays where appropriate.',
      'Audit bundle chunks with source-map-explorer after converting shared modules.'
    ],
    faqs: [
      { q: 'Can standalone components still use legacy third-party NgModule libraries?', a: 'Yes. You can import existing NgModules directly inside a standalone component’s imports array or bridge providers using importProvidersFrom().' },
      { q: 'Does migrating to standalone components reduce JavaScript bundle size?', a: 'Yes, removing monolithic SharedModules eliminates unused component bundling and enables finer route-level tree shaking.' },
      { q: 'How long does an automated NgModule-to-Standalone migration take?', a: 'Angular’s official schematic runs in three automated passes and typically converts medium-to-large apps within a few sprints of QA verification.' }
    ]
  },
  'angular-signals-and-reactivity-guide': {
    categoryKey: 'angular',
    categoryLabel: 'Angular',
    badge: 'Angular · Reactive State',
    title: 'Angular Signals & Fine-Grained Reactivity: Architecture Patterns for Zoneless Performance',
    summary: 'Deep dive into signal(), computed(), effect(), linkedSignal(), and resource() APIs—and how to combine Angular Signals with RxJS streams for ultra-responsive enterprise dashboards.',
    readTime: '9 min read',
    relatedServiceSlug: 'frontend-development',
    relatedServiceTitle: 'Front-End Development & UI Engineering',
    focusPoints: [
      'Synchronous, glitch-free reactive state primitives with signal(), memoized computed() derivations, and controlled side effects.',
      'Replacing @Input/@Output decorators with signal-based input(), model(), and output() APIs.',
      'Bridging asynchronous event streams using toSignal() and toObservable() from @angular/core/rxjs-interop.',
      'Preparing enterprise applications for Zoneless change detection to eliminate unnecessary component tree checks.'
    ],
    takeaways: [
      'Signals track exact template consumers, updating only the DOM bindings that actually changed.',
      'computed() derivations are lazy and memoized, preventing redundant recalculations on high-frequency data tables.',
      'RxJS remains ideal for complex async orchestration (debounce, race cancellation, WebSockets), while Signals own synchronous UI state.'
    ],
    checklist: [
      'Keep computed() functions 100% pure with zero state mutations or HTTP calls.',
      'Avoid overusing effect() to copy state; prefer computed() or linkedSignal() for derived values.',
      'Use toSignal(stream$, { initialValue }) to eliminate manual async pipe subscriptions and memory leaks.',
      'Adopt signal input.required<T>() for type-safe component contracts.'
    ],
    faqs: [
      { q: 'Do Angular Signals replace RxJS completely?', a: 'No. Signals excel at synchronous UI state and template reactivity, while RxJS remains unmatched for complex asynchronous event streams and HTTP cancellation.' },
      { q: 'What is zoneless Angular and why does it matter?', a: 'Removing Zone.js cuts ~35KB+ of polyfill overhead, improves Core Web Vitals INP, and yields cleaner stack traces.' },
      { q: 'Are signal inputs backward-compatible with template bindings?', a: 'Yes, consumers bind to signal inputs in templates using the exact same [prop]="value" syntax.' }
    ]
  },
  'angular-ssr-and-hydration-guide': {
    categoryKey: 'angular',
    categoryLabel: 'Angular',
    badge: 'Angular · SSR & Hydration',
    title: 'Angular SSR, Non-Destructive Hydration & Incremental Rendering Guide',
    summary: 'How to engineer sub-second Largest Contentful Paint (LCP) and full search indexability in Angular using @angular/ssr, HTTP TransferState caching, event replay, and hybrid route rendering modes.',
    readTime: '8 min read',
    relatedServiceSlug: 'speed-optimization',
    relatedServiceTitle: 'Website Speed & Core Web Vitals Optimization',
    focusPoints: [
      'Eliminating full-DOM flicker with provideClientHydration() and withEventReplay() for early user interactions.',
      'Configuring hybrid server routing (Server, Prerender/SSG, and Client CSR modes per route) for portals mixing public pages and authenticated cockpits.',
      'Automatic HTTP TransferState serialization preventing duplicate API requests on initial browser boot.',
      'Guarding browser-only APIs (window, localStorage, ResizeObserver) with afterNextRender() lifecycle hooks.'
    ],
    takeaways: [
      'Non-destructive hydration reuses server-rendered DOM nodes rather than destroying and recreating the page.',
      'Event Replay captures clicks made before JavaScript finishes downloading and replays them seamlessly.',
      'Hybrid rendering lets marketing and knowledge pages prerender statically while dashboards remain client-rendered.'
    ],
    checklist: [
      'Enable withEventReplay() and withHttpTransferCacheOptions() in app.config.ts.',
      'Replace direct constructor DOM manipulation with afterNextRender() or platform checks.',
      'Ensure valid HTML nesting in templates (no <p> inside <p> or missing <tbody>) to avoid hydration mismatches.',
      'Cache SSR responses at the CDN edge with stale-while-revalidate headers.'
    ],
    faqs: [
      { q: 'What causes Angular hydration mismatch errors?', a: 'Invalid HTML structure (which browsers auto-correct differently than server serializers) or direct DOM manipulation before hydration completes.' },
      { q: 'Can Angular SSR run on Node.js and edge runtimes?', a: 'Yes, @angular/ssr builds standard Web Fetch / Express adapters compatible with Node.js containers, Cloud Run, and edge workers.' },
      { q: 'How does SSR affect Core Web Vitals?', a: 'SSR dramatically improves FCP and LCP while Event Replay and incremental hydration protect Interaction to Next Paint (INP).' }
    ]
  },
  'angular-control-flow-syntax': {
    categoryKey: 'angular',
    categoryLabel: 'Angular',
    badge: 'Angular · Template Engineering',
    title: 'Built-In Angular Control Flow (@if, @for, @switch): Performance & Migration Best Practices',
    summary: 'Why Angular’s built-in block template syntax (@if, @for, @empty, @switch, @let) outperforms structural directives (*ngIf, *ngFor) in both runtime diffing speed and developer ergonomics.',
    readTime: '7 min read',
    relatedServiceSlug: 'frontend-development',
    relatedServiceTitle: 'Front-End Development & UI Engineering',
    focusPoints: [
      'Compiler-native @if / @else if / @else blocks with automatic TypeScript type narrowing and zero CommonModule imports.',
      'Mandatory track expressions in @for loops delivering up to 90% faster collection diffing on large data grids.',
      'Zero-code empty state rendering via @empty blocks paired directly with @for.',
      'Template local variable declarations with @let for clean async and signal unwrapping.'
    ],
    takeaways: [
      'Mandatory track keys in @for eliminate accidental full-list DOM re-renders.',
      'Built-in control flow requires zero directive imports in standalone components.',
      'Automated ng generate @angular/core:control-flow upgrades existing templates cleanly.'
    ],
    checklist: [
      'Always track @for items by a stable unique identifier (track item.id), never $index on mutable lists.',
      'Pair every data-driven @for list with a user-friendly @empty fallback state.',
      'Use @let to store computed or signal values read multiple times in the same template block.',
      'Remove unused NgIf, NgFor, and NgSwitch imports after migration.'
    ],
    faqs: [
      { q: 'Are *ngIf and *ngFor deprecated?', a: 'Built-in @if and @for are now the official standard in modern Angular, offering superior type checking and faster runtime reconciliation.' },
      { q: 'When is track $index acceptable in @for?', a: 'Only for strictly static arrays whose order and items never mutate at runtime.' },
      { q: 'Can I migrate hundreds of templates automatically?', a: 'Yes, the Angular CLI control-flow schematic converts templates automatically while preserving logic.' }
    ]
  },
  'angular-deferrable-views-guide': {
    categoryKey: 'angular',
    categoryLabel: 'Angular',
    badge: 'Angular · Bundle Optimization',
    title: 'Angular Deferrable Views (@defer): Declarative Lazy Loading & Core Web Vitals Tuning',
    summary: 'Learn how @defer, @placeholder, @loading, and @error blocks let you split heavy charts, editors, and below-the-fold widgets out of the main bundle with declarative viewport and interaction triggers.',
    readTime: '7 min read',
    relatedServiceSlug: 'speed-optimization',
    relatedServiceTitle: 'Website Speed & Core Web Vitals Optimization',
    focusPoints: [
      'Declarative chunk splitting directly inside templates without manual ViewContainerRef dynamic component boilerplate.',
      'Built-in triggers: on viewport, on interaction, on hover, on idle, on timer(), and custom when boolean expressions.',
      'Preventing layout shift (CLS) and flicker using @placeholder (minimum) and @loading (after, minimum) timing guards.',
      'Combining @defer with SSR incremental hydration so deferred blocks stay static HTML until triggered.'
    ],
    takeaways: [
      '@defer automatically extracts standalone child components and their dependencies into separate lazy JS chunks.',
      'Matching @placeholder dimensions to final component height guarantees zero Cumulative Layout Shift (CLS).',
      'Prefetching on idle while rendering on viewport delivers instant UX without penalizing initial page load.'
    ],
    checklist: [
      'Ensure components inside @defer blocks are standalone and not eagerly referenced in the component TypeScript class.',
      'Configure @loading (after 150ms; minimum 400ms) to avoid sub-frame spinner flashes on fast networks.',
      'Add explicit min-height skeletons inside @placeholder to keep CLS at 0.00.',
      'Include @error fallback blocks so network drops degrade gracefully.'
    ],
    faqs: [
      { q: 'Why didn’t my @defer component split into a separate chunk?', a: 'Check that the component is standalone and is not imported as a value reference (e.g., @ViewChild(HeavyComp)) in the parent class.' },
      { q: 'How does @defer behave during Server-Side Rendering?', a: 'By default SSR renders the @placeholder block on the server, or with incremental hydration can render the full HTML and hydrate lazily on trigger.' },
      { q: 'Can I prefetch deferred chunks before the user clicks?', a: 'Yes, combine triggers such as @defer (on interaction; prefetch on idle) for instant response.' }
    ]
  },
  'angular-reactive-forms-and-validation': {
    categoryKey: 'angular',
    categoryLabel: 'Angular',
    badge: 'Angular · Complex Forms',
    title: 'Strictly Typed Angular Reactive Forms, Dynamic FormArrays & Custom Async Validation',
    summary: 'Architectural patterns for multi-step government e-services, financial onboarding, and ERP forms using NonNullableFormBuilder, FormRecord, cross-field validators, and ControlValueAccessor.',
    readTime: '8 min read',
    relatedServiceSlug: 'custom-software-development',
    relatedServiceTitle: 'Custom Software Development & Engineering',
    focusPoints: [
      'Full compile-time type safety with FormControl<T>, FormGroup, FormArray, and NonNullableFormBuilder.',
      'Dynamic schema-driven forms for government licensing, tender submission portals, and ZATCA invoice line items.',
      'Debounced asynchronous validators checking CR numbers, national IDs, or unique slugs without flooding backend APIs.',
      'Reusable custom design-system inputs implementing ControlValueAccessor with accessible ARIA error announcements.'
    ],
    takeaways: [
      'NonNullableFormBuilder ensures form.reset() restores initial defaults rather than nullifying typed fields.',
      'Cross-field validators belong on the parent FormGroup so date ranges and budget totals validate cohesively.',
      'updateOn: "blur" reduces validation noise on complex financial and registration forms.'
    ],
    checklist: [
      'Use inject(NonNullableFormBuilder) for clean, strictly typed form definitions.',
      'Debounce async validators (300–500ms) and switchMap to cancel stale HTTP checks.',
      'Persist multi-step wizard drafts safely in session storage to prevent accidental data loss.',
      'Bind aria-invalid and aria-describedby to validation error messages for WCAG compliance.'
    ],
    faqs: [
      { q: 'When should we choose Reactive Forms over Template-Driven Forms?', a: 'Reactive Forms are essential for dynamic field arrays, multi-step wizards, complex cross-field validation, and unit-testable form logic without DOM rendering.' },
      { q: 'How do we avoid performance lag on FormArrays with 200+ rows?', a: 'Combine OnPush change detection, @for tracking by row ID, and updateOn: "blur" or virtual scrolling.' },
      { q: 'How can Angular Signals interact with Reactive Forms?', a: 'Wrap control.valueChanges and control.statusChanges with toSignal() or unified events() streams.' }
    ]
  },
  'angular-enterprise-architecture-and-nx-monorepo': {
    categoryKey: 'angular',
    categoryLabel: 'Angular',
    badge: 'Angular · Nx Monorepo',
    title: 'Enterprise Angular Architecture with Nx Monorepos: Domain Boundaries & Scalable Governance',
    summary: 'How to structure large multi-application Angular ecosystems using Nx workspaces, Sheriff/ESLint module boundary enforcement, shared UI design libraries, and distributed computation caching.',
    readTime: '9 min read',
    relatedServiceSlug: 'custom-software-development',
    relatedServiceTitle: 'Custom Software Development & Engineering',
    focusPoints: [
      'Organizing monorepos by vertical domain (scope:admin, scope:citizen, scope:finance) and library type (feature, ui, data-access, util).',
      'Enforcing strict dependency graphs via @nx/enforce-module-boundaries so UI libraries never import data-access layers.',
      'Cutting CI build and test times by 70%+ using nx affected and remote task caching.',
      'Sharing unified design tokens, authentication interceptors, and API SDKs across citizen portals and back-office apps.'
    ],
    takeaways: [
      'Thin app shells (~5% code) composed of modular workspace libraries (~95% code) prevent monolithic tangle.',
      'Automated lint rules stop architectural drift during code review before technical debt accumulates.',
      'Nx affected ensures a change in one microservice feature only rebuilds and retests impacted apps.'
    ],
    checklist: [
      'Tag every library with both domain:* and type:* tags in project.json.',
      'Forbid type:ui libraries from importing state stores or HTTP services.',
      'Generate typed OpenAPI TypeScript clients into shared data-access libraries.',
      'Enable nx affected -t lint,test,build in pull-request CI workflows.'
    ],
    faqs: [
      { q: 'When does an organization need Nx instead of a single Angular CLI workspace?', a: 'Whenever two or more portals share design systems, auth flows, or domain models—or when build/test times exceed 5–8 minutes in CI.' },
      { q: 'Does a monorepo force all apps to deploy at the same time?', a: 'No. Each application in apps/ builds and deploys independently while sharing version-aligned internal libraries.' },
      { q: 'How do we prevent teams from importing internal files across domains?', a: 'Expose only curated public symbols through each library’s index.ts barrel and enforce boundaries via ESLint.' }
    ]
  },
  'angular-security-and-best-practices': {
    categoryKey: 'angular',
    categoryLabel: 'Angular',
    badge: 'Angular · Cybersecurity & NCA',
    title: 'Angular Security Hardening Guide: XSS Prevention, CSP Nonces, OAuth2 OIDC & NCA Compliance',
    summary: 'Production security controls for Angular applications—covering contextual DOM sanitization, strict Content Security Policy (CSP) nonces, HttpOnly token patterns, route authorization, and OWASP/NCA alignment.',
    readTime: '8 min read',
    relatedServiceSlug: 'website-security',
    relatedServiceTitle: 'Website Security & Cyber Hardening',
    focusPoints: [
      'Leveraging Angular’s built-in contextual escaping and avoiding dangerous DomSanitizer.bypassSecurityTrustHtml misuse.',
      'Deploying nonce-based Content-Security-Policy headers via ngCspNonce to neutralize Cross-Site Scripting (XSS).',
      'Implementing OAuth 2.0 Authorization Code + PKCE or Backend-for-Frontend (BFF) HttpOnly session cookies instead of storing raw JWTs in localStorage.',
      'Aligning frontend security headers, audit logging, and dependency scanning with OWASP ASVS and Saudi NCA Essential Cybersecurity Controls.'
    ],
    takeaways: [
      'Never store sensitive long-lived access or refresh tokens in localStorage where any XSS gadget can exfiltrate them.',
      'Client-side route guards are UX conveniences—every API endpoint must enforce server-side RBAC/ABAC.',
      'Strict CSP with ngCspNonce blocks unauthorized inline script execution at the browser engine level.'
    ],
    checklist: [
      'Ban unreviewed calls to bypassSecurityTrust* via custom ESLint rules.',
      'Configure ngCspNonce and HSTS / X-Content-Type-Options / Referrer-Policy headers at the reverse proxy.',
      'Enable Angular XSRF protection with withXsrfConfiguration() for cookie-authenticated APIs.',
      'Run automated npm audit / Snyk scans on every CI pipeline run.'
    ],
    faqs: [
      { q: 'Does Angular automatically protect against XSS?', a: 'Angular automatically sanitizes untrusted values bound via interpolation and property bindings, provided developers do not bypass DomSanitizer or manipulate nativeElement.innerHTML directly.' },
      { q: 'Why are client route guards insufficient for security?', a: 'All JavaScript bundles are downloadable by users; real authorization must always be enforced on the backend API.' },
      { q: 'How does ngCspNonce work?', a: 'Your server injects a unique cryptographic nonce per HTTP response into both the CSP header and the <app-root ngCspNonce="..."> attribute so Angular styles/scripts execute safely without unsafe-inline.' }
    ]
  },
  'angular-testing-best-practices': {
    categoryKey: 'angular',
    categoryLabel: 'Angular',
    badge: 'Angular · QA & Testing',
    title: 'Angular Testing Strategy: Component Harnesses, Jest/Vitest Unit Tests & Playwright E2E',
    summary: 'Build fast, deterministic test suites for enterprise Angular platforms—replacing brittle CSS-selector tests with Angular CDK Component Harnesses, Testing Library, HttpTestingController, and Playwright.',
    readTime: '8 min read',
    relatedServiceSlug: 'custom-software-development',
    relatedServiceTitle: 'Custom Software Development & Engineering',
    focusPoints: [
      'Structuring the modern testing pyramid: fast isolated unit tests for Signals/services, shallow integration tests for user flows, and Playwright E2E for critical journeys.',
      'Using Angular Testing Library and CDK Harnesses to test user-visible behavior and ARIA roles rather than private class methods.',
      'Mocking HTTP pipelines deterministically with provideHttpClientTesting() and HttpTestingController.',
      'Running parallelized headless Playwright suites validating both LTR English and RTL Arabic layouts in CI.'
    ],
    takeaways: [
      'Testing behavior via accessible roles (getByRole) makes tests resilient to internal CSS and DOM refactors.',
      'Standalone components simplify TestBed setup by importing only the component under test.',
      'Playwright trace viewer and network mocking eliminate flaky end-to-end test failures.'
    ],
    checklist: [
      'Call httpTesting.verify() in afterEach() to catch unexpected or unfulfilled HTTP calls.',
      'Prefer Vitest or Jest over legacy Karma runners for 3–5x faster unit test feedback.',
      'Write Playwright smoke tests for authentication, form submission, and checkout/bid workflows.',
      'Assert zero console errors and WCAG axe-core accessibility compliance inside E2E specs.'
    ],
    faqs: [
      { q: 'Should we still use Karma and Protractor in Angular?', a: 'No. Protractor is end-of-life and Karma is deprecated; modern Angular teams pair Vitest/Jest with Playwright or Cypress.' },
      { q: 'What are Angular CDK Component Harnesses?', a: 'Official abstraction classes that let tests interact with complex UI widgets (dropdowns, datepickers, dialogs) without coupling to internal DOM classes.' },
      { q: 'What code coverage target is realistic for enterprise tenders?', a: '80%+ coverage on domain services, validators, and state logic paired with 100% E2E coverage of mandatory SLA user journeys.' }
    ]
  },

  // ==================== NODE.JS (10) ====================
  'what-is-nodejs': {
    categoryKey: 'node',
    categoryLabel: 'Node.js',
    badge: 'Node.js · Backend Runtime',
    title: 'What Is Node.js? V8 Engine, Non-Blocking I/O & Enterprise Backend Use Cases',
    summary: 'Understand how Node.js leverages Google’s V8 JavaScript engine and libuv event-driven I/O to power high-concurrency API gateways, real-time platforms, BFF layers, and cloud microservices.',
    readTime: '8 min read',
    relatedServiceSlug: 'backend-development',
    relatedServiceTitle: 'Back-End Development & Server Architecture',
    focusPoints: [
      'Single-threaded event loop paired with libuv thread-pool offloading for non-blocking network, DNS, and file I/O.',
      'Unified full-stack TypeScript development sharing Zod validation schemas and DTO types across client and server.',
      'Ideal workloads (API gateways, BFFs, streaming, real-time collaboration) vs CPU-heavy workloads offloaded to Worker Threads.',
      'Modern Node.js 20/22 LTS native capabilities: built-in fetch, test runner, --env-file, permission model, and ESM support.'
    ],
    takeaways: [
      'Node.js handles tens of thousands of concurrent I/O connections with minimal memory footprint per socket.',
      'Sharing TypeScript types end-to-end eliminates API contract mismatches between web, mobile, and backend squads.',
      'CPU-intensive cryptography, PDF generation, or image processing must be isolated into Worker Threads or job queues.'
    ],
    checklist: [
      'Standardize on active Node.js LTS releases pinned via .nvmrc and Docker base images.',
      'Run Node.js in production behind a reverse proxy or container ingress with graceful SIGTERM shutdown.',
      'Monitor Event Loop Utilization (ELU) and p99 latency metrics continuously.',
      'Use TypeScript with strict mode and runtime input validation (Zod/TypeBox).'
    ],
    faqs: [
      { q: 'Is Node.js single-threaded in production?', a: 'JavaScript execution runs on a single main event-loop thread, while libuv manages background C++ threads for heavy I/O, and Worker Threads / clustering utilize all CPU cores.' },
      { q: 'Can Node.js power high-security government and fintech backends?', a: 'Yes—when architected with TypeScript, NestJS/Fastify, parameterized SQL queries, mTLS, and strict container hardening.' },
      { q: 'Which Node.js version should enterprise projects deploy?', a: 'Always deploy even-numbered Active or Maintenance LTS versions (Node 20 LTS or Node 22 LTS) for guaranteed security patches.' }
    ]
  },
  'nodejs-event-loop-and-asynchronous-programming': {
    categoryKey: 'node',
    categoryLabel: 'Node.js',
    badge: 'Node.js · Runtime Internals',
    title: 'Mastering the Node.js Event Loop, Microtasks, Async/Await & Worker Threads',
    summary: 'A deep engineering walkthrough of libuv phases (timers, poll, check), process.nextTick vs Promise microtasks, preventing event-loop starvation, and scaling CPU tasks with Piscina Worker Threads.',
    readTime: '9 min read',
    relatedServiceSlug: 'backend-development',
    relatedServiceTitle: 'Back-End Development & Server Architecture',
    focusPoints: [
      'How libuv cycles through timers, pending callbacks, poll I/O, setImmediate (check), and close phases—with microtask queues draining between transitions.',
      'Identifying hidden event-loop blockers: catastrophic RegEx backtracking, synchronous fs.*Sync calls, and massive JSON.parse payloads.',
      'Concurrency control patterns using Promise.allSettled, p-limit bounded concurrency, and AbortController timeouts.',
      'Offloading CPU-bound report generation and cryptographic hashing to bounded Worker Thread pools.'
    ],
    takeaways: [
      'A single 200ms synchronous function on the main thread freezes responses for every connected user simultaneously.',
      'Unbounded Promise.all() over thousands of database rows exhausts connection pools; always bound concurrency.',
      'AbortSignal timeouts prevent hung downstream third-party APIs from leaking memory and sockets.'
    ],
    checklist: [
      'Ban fs.*Sync and crypto.*Sync inside HTTP request handlers via ESLint.',
      'Pass AbortSignal.timeout(5000) to all outbound fetch and SDK requests.',
      'Alert when Event Loop lag exceeds 40ms under peak traffic.',
      'Use AsyncLocalStorage for zero-overhead correlation request IDs across async boundaries.'
    ],
    faqs: [
      { q: 'What is the difference between setImmediate() and setTimeout(fn, 0)?', a: 'Inside an I/O callback, setImmediate() always executes first in the check phase before timers are evaluated on the next loop tick.' },
      { q: 'Why can recursive process.nextTick() crash responsiveness?', a: 'The nextTick queue drains completely before libuv advances to I/O polling, starving incoming network requests.' },
      { q: 'When should we use Worker Threads instead of child processes?', a: 'Worker Threads share memory via SharedArrayBuffer and have much lower startup overhead for CPU-intensive JS/WASM computations.' }
    ]
  },
  'nodejs-rest-api-with-express-and-typescript': {
    categoryKey: 'node',
    categoryLabel: 'Node.js',
    badge: 'Node.js · REST Architecture',
    title: 'Production-Grade REST APIs with Node.js, Express/Fastify, TypeScript & OpenAPI 3.1',
    summary: 'Blueprint for building maintainable, self-documented RESTful services with layered Controller-Service-Repository architecture, Zod request validation, RFC 9457 Problem Details errors, and cursor pagination.',
    readTime: '8 min read',
    relatedServiceSlug: 'api-development-integration',
    relatedServiceTitle: 'API Development & Enterprise System Integration',
    focusPoints: [
      'Clean separation of HTTP transport (Controllers), business rules (Services), and SQL/ORM persistence (Repositories).',
      'Schema-first validation of body, query, and path parameters using Zod—generating OpenAPI 3.1 / Swagger specs automatically.',
      'Standardized centralized error middleware returning RFC 9457 Problem Details JSON without leaking stack traces.',
      'Idempotency-Key headers for payment/order mutations and keyset cursor pagination for million-row datasets.'
    ],
    takeaways: [
      'Validating inputs at the HTTP boundary guarantees domain services only ever receive sanitized, typed payloads.',
      'Cursor-based pagination maintains constant O(1) index speed unlike OFFSET queries that degrade at deep pages.',
      'Idempotency keys prevent duplicate charges or duplicate records when mobile networks retry POST requests.'
    ],
    checklist: [
      'Enforce explicit request body size limits (e.g. express.json({ limit: "256kb" })).',
      'Return consistent HTTP status codes (201 Created, 400 Validation, 401/403 Auth, 409 Conflict, 429 Rate Limit).',
      'Attach x-request-id headers and structured Pino JSON logs to every request.',
      'Version public API contracts (/api/v1/...) and publish OpenAPI specs in CI.'
    ],
    faqs: [
      { q: 'Should new Node.js projects choose Express 5 or Fastify?', a: 'Express offers unmatched middleware ecosystem familiarity (with native async error catching in v5), while Fastify delivers 2–3x higher raw JSON throughput and built-in schema serialization.' },
      { q: 'Why avoid OFFSET pagination on large enterprise tables?', a: 'OFFSET 100000 forces PostgreSQL/MySQL to scan and discard 100,000 rows per request; cursor pagination seeks directly via indexed keys.' },
      { q: 'How do we share API types safely with React or Angular frontends?', a: 'Generate TypeScript clients automatically from your OpenAPI 3.1 specification using openapi-typescript.' }
    ]
  },
  'nodejs-nestjs-enterprise-architecture': {
    categoryKey: 'node',
    categoryLabel: 'Node.js',
    badge: 'Node.js · NestJS Enterprise',
    title: 'NestJS Enterprise Architecture: Modular Monoliths, Dependency Injection & Clean Domain Design',
    summary: 'Why NestJS is the premier enterprise backend framework for Node.js—covering IoC containers, Guards, Interceptors, Pipes, Prisma/TypeORM transactions, CQRS, and Saudi government system integration.',
    readTime: '9 min read',
    relatedServiceSlug: 'backend-development',
    relatedServiceTitle: 'Back-End Development & Server Architecture',
    focusPoints: [
      'Angular-inspired modular architecture with Inversion of Control (IoC) making large multi-team Node.js backends predictable and testable.',
      'Request lifecycle pipeline: Middleware → Guards (RBAC/JWT) → Interceptors (logging/caching) → Pipes (DTO validation) → Controllers → Exception Filters.',
      'Starting with a well-bounded Modular Monolith before extracting high-scale microservices over gRPC, Redis, or Kafka.',
      'Clean unit-of-work database transactions and audit-trail interceptors for regulated ERP and e-government workflows.'
    ],
    takeaways: [
      'NestJS brings Spring Boot / .NET architectural discipline to the high-velocity TypeScript ecosystem.',
      'ExecutionContext-aware Guards centralize tenant isolation and role permissions declaratively.',
      'A modular monolith avoids premature distributed-systems complexity while preserving clean domain boundaries.'
    ],
    checklist: [
      'Enable global ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }).',
      'Swap the default Express adapter to FastifyAdapter when low-latency throughput is critical.',
      'Validate all environment variables at startup using @nestjs/config + Zod/Joi.',
      'Implement Terminus health checks (/health/live and /health/ready) verifying DB and Redis connectivity.'
    ],
    faqs: [
      { q: 'Why do Angular and .NET enterprise teams adopt NestJS so quickly?', a: 'NestJS uses familiar decorators, modules, dependency injection, and guards—allowing engineers across frontend and backend to follow identical design patterns.' },
      { q: 'Does NestJS lock us into a single database or ORM?', a: 'No. NestJS is database-agnostic and integrates cleanly with Prisma, Drizzle, TypeORM, MikroORM, PostgreSQL, Oracle, and MongoDB.' },
      { q: 'Can NestJS run microservices and cron workers from the same codebase?', a: 'Yes, NestJS natively supports hybrid apps, standalone CLI workers, BullMQ queues, gRPC, and Kafka.' }
    ]
  },
  'nodejs-graphql-api-development': {
    categoryKey: 'node',
    categoryLabel: 'Node.js',
    badge: 'Node.js · GraphQL & BFF',
    title: 'Enterprise GraphQL APIs in Node.js: DataLoader N+1 Prevention, Federation & Query Security',
    summary: 'Design high-performance GraphQL gateways in Node.js using Apollo/Mercurius and Pothos/NestJS—solving N+1 database queries with DataLoader and hardening against deep-query DoS attacks.',
    readTime: '8 min read',
    relatedServiceSlug: 'api-development-integration',
    relatedServiceTitle: 'API Development & Enterprise System Integration',
    focusPoints: [
      'Eliminating mobile over-fetching and multi-roundtrip waterfalls by aggregating microservices behind a typed GraphQL BFF.',
      'Solving the classic GraphQL N+1 SQL problem with request-scoped DataLoader batching and caching.',
      'Hardening public GraphQL endpoints: query depth limits, query complexity cost budgets, persisted queries, and disabling introspection in production.',
      'Code-first type-safe schema construction with Pothos or NestJS GraphQL.'
    ],
    takeaways: [
      'Every relational field resolver MUST batch via a per-request DataLoader instance to prevent database meltdowns.',
      'Never cache DataLoader instances globally across requests—doing so leaks private data between users.',
      'Query complexity analysis stops malicious nested queries before resolvers execute.'
    ],
    checklist: [
      'Instantiate fresh DataLoaders inside the per-request GraphQL context factory.',
      'Enforce max query depth (e.g. <= 7) and max complexity score on every operation.',
      'Disable GraphQL schema introspection and Playground in production environments.',
      'Use persisted operations / allow-listed query hashes for first-party web and mobile clients.'
    ],
    faqs: [
      { q: 'When is GraphQL better than REST?', a: 'When web, iOS, and Android clients require different slices of deeply nested relational graphs and you want to eliminate multiple sequential network roundtrips.' },
      { q: 'How do HTTP CDNs cache GraphQL queries?', a: 'By using Automatic Persisted Queries (APQ) over HTTP GET requests or entity-level Redis caching inside resolvers.' },
      { q: 'How should authorization work in GraphQL?', a: 'Enforce field- and entity-level authorization inside domain services/dataloaders—not just at top-level query entry points.' }
    ]
  },
  'nodejs-realtime-apps-with-socketio-and-redis': {
    categoryKey: 'node',
    categoryLabel: 'Node.js',
    badge: 'Node.js · Real-Time Systems',
    title: 'Scaling Real-Time Node.js Applications with WebSockets, Socket.IO & Redis Pub/Sub Streams',
    summary: 'Architect horizontally scalable live bidding rooms, fleet tracking, and instant notification engines in Node.js using Socket.IO, @socket.io/redis-streams-adapter, JWT handshake auth, and backpressure control.',
    readTime: '8 min read',
    relatedServiceSlug: 'backend-development',
    relatedServiceTitle: 'Back-End Development & Server Architecture',
    focusPoints: [
      'Horizontal multi-pod WebSocket scaling with Redis Streams Adapter so events broadcast seamlessly across Kubernetes replicas.',
      'Authenticating socket handshakes with short-lived tokens and scoping rooms per tenant/user privilege.',
      'Connection State Recovery buffering missed events during brief mobile 4G/5G handoffs.',
      'Throttling high-frequency GPS/telemetry broadcasts and protecting clients from memory backpressure.'
    ],
    takeaways: [
      'Without a Redis Pub/Sub or Streams adapter, users connected to Pod A never receive events emitted on Pod B.',
      'Socket.IO Redis Streams Adapter survives brief Redis failovers and supports missed-packet state recovery.',
      'Choose Server-Sent Events (SSE) when communication is strictly one-way server-to-client.'
    ],
    checklist: [
      'Verify JWT expiration both on initial handshake and periodically on long-lived sockets.',
      'Avoid sticky-session dependency where possible by forcing transports: ["websocket"] when supported.',
      'Cap maxHttpBufferSize (e.g. 64KB) to prevent oversized WebSocket payload abuse.',
      'Coalesce high-rate live telemetry updates into 250–500ms batched ticks.'
    ],
    faqs: [
      { q: 'How many concurrent WebSockets can a single Node.js instance maintain?', a: 'With tuned Linux file-descriptor limits and lean per-socket state, a single Node.js container comfortably holds 20,000–50,000+ idle/moderate connections.' },
      { q: 'When should we use SSE instead of WebSockets?', a: 'For live dashboards, order status trackers, and notification feeds where only the server pushes updates—SSE works effortlessly over standard HTTP/2.' },
      { q: 'How do we prevent thundering-herd reconnect storms after a deploy?', a: 'Configure randomized reconnectionDelay and exponential backoff with jitter on all clients.' }
    ]
  },
  'nodejs-streams-and-buffers': {
    categoryKey: 'node',
    categoryLabel: 'Node.js',
    badge: 'Node.js · Memory & Streaming',
    title: 'Node.js Streams, Buffers & Backpressure: Processing Multi-Gigabyte Files in Constant Memory',
    summary: 'Eliminate Out-Of-Memory (OOM) crashes when exporting 500,000-row ERP reports, ZATCA XML archives, or encrypted S3 uploads by mastering stream.pipeline(), async iterators, and backpressure.',
    readTime: '8 min read',
    relatedServiceSlug: 'backend-development',
    relatedServiceTitle: 'Back-End Development & Server Architecture',
    focusPoints: [
      'Why buffering large CSV/PDF/ZIP files in V8 heap memory crashes containers—and how Readable/Transform/Writable streams keep RAM flat (~30MB).',
      'Using stream/promises pipeline() instead of legacy .pipe() to guarantee automatic file/socket cleanup on client disconnect.',
      'Respecting highWaterMark backpressure so fast database cursors never overwhelm slow mobile download connections.',
      'Interoperating Node.js streams with modern Web ReadableStream / WritableStream standards.'
    ],
    takeaways: [
      'Never uselegacy a.pipe(b) in production—if the client closes their browser tab mid-download, .pipe() leaks upstream database/file streams.',
      'stream/promises pipeline() automatically destroys all streams in the chain when any stage errors or aborts.',
      'Database cursor streaming + CSV transform streams let a 512MB container export multi-gigabyte reports safely.'
    ],
    checklist: [
      'Always import { pipeline } from "node:stream/promises" for stream composition.',
      'Use Buffer.alloc() rather than Buffer.allocUnsafe() when handling sensitive multi-tenant buffers.',
      'Stream S3/MinIO uploads directly with multipart upload streams instead of writing temp files to disk.',
      'Tune highWaterMark chunk sizes (64KB–256KB) for throughput-heavy file pipelines.'
    ],
    faqs: [
      { q: 'What is backpressure in Node.js streams?', a: 'When a slow consumer (like a 3G client socket) fills its internal write buffer, write() returns false to pause the fast producer (like a DB cursor) until "drain" fires.' },
      { q: 'Can we use for await (const chunk of readable) cleanly?', a: 'Yes! Node.js Readable streams implement Symbol.asyncIterator, making chunk processing clean and readable with async/await.' },
      { q: 'Why did my PDF/Excel export crash the Node.js pod with Heap Out of Memory?', a: 'Because all rows were loaded into an in-memory JS array at once instead of streaming rows incrementally from a database cursor.' }
    ]
  },
  'nodejs-docker-and-microservices': {
    categoryKey: 'node',
    categoryLabel: 'Node.js',
    badge: 'Node.js · Cloud & Containers',
    title: 'Containerizing Node.js Microservices: Multi-Stage Dockerfiles, Graceful Shutdown & Kubernetes Readiness',
    summary: 'Production DevOps blueprint for Node.js containers—shrinking images by 80%, running non-root distroless/slim images, handling PID 1 SIGTERM signals, tuning V8 --max-old-space-size, and zero-downtime rolling deploys.',
    readTime: '8 min read',
    relatedServiceSlug: 'backend-development',
    relatedServiceTitle: 'Back-End Development & Server Architecture',
    focusPoints: [
      'Multi-stage Docker builds separating TypeScript compilation and devDependencies from lean node:22-bookworm-slim production runtimes.',
      'Why never to use CMD ["npm", "start"] in Docker (npm swallows SIGTERM)—and how direct node execution + server.close() drains active requests cleanly.',
      'Aligning V8 heap limits (--max-old-space-size) with Kubernetes cgroup memory limits to prevent abrupt OOMKilled restarts.',
      'Separating Liveness probes (process alive) from Readiness probes (DB/Redis healthy & not shutting down).'
    ],
    takeaways: [
      'Prefer bookworm-slim over Alpine when native addons (sharp, bcrypt, Prisma) are used—avoiding musl DNS and segfault edge cases.',
      'Always run containers as an unprivileged USER node with read-only root filesystems where possible.',
      'Graceful shutdown must stop readiness, finish in-flight HTTP requests, close DB pools, and exit cleanly before terminationGracePeriodSeconds.'
    ],
    checklist: [
      'Add a strict .dockerignore excluding node_modules, .git, .env, and build artifacts.',
      'Use CMD ["node", "dist/main.js"] (exec form) instead of shell or npm wrappers.',
      'Handle SIGTERM and SIGINT explicitly to drain HTTP connections and BullMQ workers.',
      'Pin exact base image digests and scan images with Trivy in CI.'
    ],
    faqs: [
      { q: 'Why do rolling Kubernetes deployments sometimes return brief 502 errors?', a: 'Because pods terminate immediately before Ingress/Service endpoints finish removing the pod IP; add a readiness gate and graceful HTTP connection drain.' },
      { q: 'Should we use PM2 cluster mode inside Kubernetes?', a: 'No. Run one single-process Node.js container per pod and let Kubernetes HorizontalPodAutoscaler (HPA) manage replica scaling.' },
      { q: 'How much V8 heap should we allocate in a 1GB RAM container?', a: 'Typically ~750MB (--max-old-space-size=768), leaving headroom for Buffers, C++ TLS contexts, and OS overhead.' }
    ]
  },
  'nodejs-event-driven-microservices-kafka': {
    categoryKey: 'node',
    categoryLabel: 'Node.js',
    badge: 'Node.js · Event-Driven & Kafka',
    title: 'Event-Driven Microservices in Node.js with Apache Kafka, Transactional Outbox & Idempotent Consumers',
    summary: 'Eliminate dual-write data loss and cascading synchronous failures across distributed ERP, payment, and logistics services using Apache Kafka, the Transactional Outbox pattern, Dead Letter Topics, and Sagas.',
    readTime: '9 min read',
    relatedServiceSlug: 'api-development-integration',
    relatedServiceTitle: 'API Development & Enterprise System Integration',
    focusPoints: [
      'Solving the Dual-Write Problem by writing domain state + outbox_events in one atomic PostgreSQL transaction before publishing to Kafka.',
      'Designing idempotent consumers with processed_event_ids deduplication tables because Kafka guarantees at-least-once delivery.',
      'Preserving strict per-entity ordering (e.g. OrderCreated → OrderPaid → OrderShipped) using aggregate IDs as Kafka partition keys.',
      'Orchestrating multi-service compensating Sagas and Dead Letter Queues (DLQs) for poison messages.'
    ],
    takeaways: [
      'Never update a database and call kafkaProducer.send() without a Transactional Outbox—a crash in between leaves systems permanently inconsistent.',
      'Every event consumer must be 100% idempotent so duplicate message delivery never double-charges or double-deducts stock.',
      'Partition keys guarantee strict chronological event ordering per order, invoice, or account.'
    ],
    checklist: [
      'Include eventId (UUIDv7), eventType, schemaVersion, occurredAt, and correlationId in every event envelope.',
      'Enforce backward-compatible schema evolution via Avro, Protobuf, or JSON Schema Registry.',
      'Route unrecoverable validation/poison errors to a Dead Letter Topic after bounded exponential retries.',
      'Monitor consumer lag per partition in Prometheus/Grafana.'
    ],
    faqs: [
      { q: 'When should we pick RabbitMQ/BullMQ over Apache Kafka?', a: 'Use BullMQ/RabbitMQ for background job queues (emails, PDFs, retries); use Kafka when multiple independent services need durable, replayable event streams.' },
      { q: 'How do we prevent one bad message from blocking an entire Kafka partition?', a: 'Distinguish transient network errors (retry with backoff) from permanent schema/domain errors (commit offset after forwarding to a Dead Letter Topic).' },
      { q: 'What is Debezium CDC in the Outbox pattern?', a: 'Debezium tails the PostgreSQL Write-Ahead Log (WAL) of your outbox table and streams events into Kafka with near-zero polling overhead.' }
    ]
  },
  'nodejs-security-best-practices': {
    categoryKey: 'node',
    categoryLabel: 'Node.js',
    badge: 'Node.js · Backend Security',
    title: 'Node.js Security Hardening Checklist: OWASP API Top 10, Supply-Chain Defense & NCA Compliance',
    summary: 'Comprehensive security architecture for Node.js backends—preventing Broken Object Level Authorization (BOLA), prototype pollution, SSRF, SQL/NoSQL injection, ReDoS, and npm supply-chain attacks.',
    readTime: '9 min read',
    relatedServiceSlug: 'website-security',
    relatedServiceTitle: 'Website Security & Cyber Hardening',
    focusPoints: [
      'Defending against OWASP API #1 risk (BOLA/IDOR) by scoping every SQL query with tenant_id / owner_id predicates.',
      'Eliminating Prototype Pollution, NoSQL operator injection, and Server-Side Request Forgery (SSRF) via strict schema allow-lists.',
      'Password hashing with Argon2id, short-lived asymmetric JWTs (RS256/EdDSA), and Redis-backed sliding-window rate limiting.',
      'Locking down npm supply chains with npm ci, lockfile verification, --ignore-scripts where feasible, and automated CVE gating.'
    ],
    takeaways: [
      'Authentication proves who the caller is; object-level authorization proves they own the specific record ID requested.',
      'Helmet HTTP headers, strict CORS allow-lists, and parameterized queries eliminate entire classes of web exploits.',
      'Secrets belong in Vault / KMS / Cloud Secret Manager—never in Git repositories or client bundles.'
    ],
    checklist: [
      'Apply Helmet middleware and explicit origin allow-lists on CORS.',
      'Hash passwords with Argon2id (OWASP recommended parameters) and enforce MFA on admin accounts.',
      'Rate-limit login, OTP, and password-reset endpoints by both IP and account identifier.',
      'Log structured security audit trails (actor, IP, action, resource, outcome) with PII redaction.'
    ],
    faqs: [
      { q: 'What is Prototype Pollution in JavaScript/Node.js?', a: 'An attacker injects keys like "__proto__" or "constructor.prototype" into deep-merge helpers to mutate Object.prototype across the entire Node process; Zod stripping and Object.create(null) prevent it.' },
      { q: 'Are ORMs like Prisma or Drizzle 100% immune to SQL injection?', a: 'Standard parameterized methods are safe, provided developers never interpolate raw user strings into $queryRawUnsafe or sql.raw.' },
      { q: 'How do we prevent SSRF when fetching user-supplied webhook URLs?', a: 'Validate HTTPS schemes and resolve DNS before connecting to block RFC 1918 private IPs, localhost, and cloud metadata IPs (169.254.169.254).' }
    ]
  },

  // ==================== REACT.JS (10) ====================
  'what-is-reactjs': {
    categoryKey: 'react',
    categoryLabel: 'React.js',
    badge: 'React.js · UI Architecture',
    title: 'What Is React.js? Declarative UI Engineering, Fiber Reconciliation & Modern React 19 Architecture',
    summary: 'Explore how React’s declarative component model, Fiber concurrent renderer, Server Components, and massive ecosystem power modern SaaS platforms, executive dashboards, and cross-platform ecosystems.',
    readTime: '8 min read',
    relatedServiceSlug: 'frontend-development',
    relatedServiceTitle: 'Front-End Development & UI Engineering',
    focusPoints: [
      'Declarative UI = f(state) mental model eliminating error-prone imperative DOM mutations.',
      'React Fiber concurrent reconciliation prioritizing urgent user input over background transitions.',
      'React 19 breakthroughs: Actions, useActionState, useOptimistic, native document metadata, and the React Compiler.',
      'Choosing the right production architecture: Vite SPA for internal cockpits vs Next.js / React Router v7 Framework Mode for public SEO.'
    ],
    takeaways: [
      'React scales from lightweight interactive widgets to multi-team enterprise SaaS platforms and React Native mobile apps.',
      'Concurrent transitions keep complex filtered dashboards responsive at 60fps.',
      'Strict component composition beats bloated 25-prop monolithic components.'
    ],
    checklist: [
      'Pair React 18/19 with strict TypeScript and ESLint react-hooks rules.',
      'Co-locate feature components, hooks, types, and tests by business domain.',
      'Keep state as close as possible to where it is consumed before lifting it globally.',
      'Measure real render flamegraphs with React DevTools Profiler.'
    ],
    faqs: [
      { q: 'Is React a library or a full framework?', a: 'React core is a UI rendering library; paired with Next.js or React Router v7 it forms a full-stack production framework with routing, SSR, and data mutations.' },
      { q: 'Can React engineering skills transfer to iOS and Android apps?', a: 'Yes—React Native uses the exact same component, hook, and TypeScript paradigms to render native iOS and Android views.' },
      { q: 'What does the React Compiler change for developers?', a: 'It automatically memoizes components and values at build time, removing most manual useMemo and useCallback boilerplate.' }
    ]
  },
  'reactjs-modern-hooks-guide': {
    categoryKey: 'react',
    categoryLabel: 'React.js',
    badge: 'React.js · Hooks & Concurrency',
    title: 'Modern React Hooks Guide: Custom Hooks, Concurrent Transitions & Avoiding useEffect Anti-Patterns',
    summary: 'Write bug-free, idiomatic React hooks—mastering useState, useReducer, useSyncExternalStore, useTransition, useDeferredValue, React 19 Actions, and eliminating cascading useEffect re-renders.',
    readTime: '8 min read',
    relatedServiceSlug: 'frontend-development',
    relatedServiceTitle: 'Front-End Development & UI Engineering',
    focusPoints: [
      'Why deriving state during render beats syncing state inside useEffect (eliminating double renders and stale bugs).',
      'Encapsulating domain workflows, event listeners, and browser APIs inside composable, testable custom hooks.',
      'Keeping search and data filtering silky smooth with useTransition and useDeferredValue.',
      'Simplifying async form submissions and optimistic UI updates with React 19 useActionState and useOptimistic.'
    ],
    takeaways: [
      'useEffect is an escape hatch for synchronizing with external systems—not for computing derived data or handling button clicks.',
      'Every external subscription inside useEffect must return a deterministic cleanup function to pass StrictMode double-invocation.',
      'Custom hooks share stateful logic, not state instances—each caller gets isolated state.'
    ],
    checklist: [
      'Never suppress exhaustive-deps lint warnings without fixing stale closure dependencies.',
      'Compute filtered/sorted lists directly during render (or useMemo for large arrays) instead of mirroring them in useState.',
      'Pass AbortController signals inside custom fetch hooks or delegate data fetching to TanStack Query.',
      'Use useId() for collision-free accessible label/input IDs under SSR.'
    ],
    faqs: [
      { q: 'Why does my useEffect run twice in development?', a: 'React StrictMode intentionally mounts, unmounts, and remounts components in dev to surface missing cleanup functions and memory leaks early.' },
      { q: 'When should I pick useReducer over useState?', a: 'When multiple state fields transition together according to explicit domain events (e.g., multi-step tender wizard states).' },
      { q: 'What is the difference between useTransition and debounce?', a: 'Debounce delays execution by a fixed timer even on fast CPUs; useTransition starts rendering immediately in the background without blocking user typing.' }
    ]
  },
  'reactjs-server-components-nextjs': {
    categoryKey: 'react',
    categoryLabel: 'React.js',
    badge: 'React.js · RSC & Next.js',
    title: 'React Server Components (RSC) & Next.js App Router: Streaming SSR & Hybrid Architecture',
    summary: 'How React Server Components execute exclusively on the server with zero client JavaScript cost—interleaving seamlessly with interactive Client Components, Suspense streaming, and Server Actions.',
    readTime: '9 min read',
    relatedServiceSlug: 'frontend-development',
    relatedServiceTitle: 'Front-End Development & UI Engineering',
    focusPoints: [
      'Server Components querying databases, internal microservices, and heavy markdown/syntax libraries with 0KB shipped to the browser.',
      'Pushing "use client" boundaries down to interactive leaves while passing Server Components via children slots.',
      'Progressive HTML streaming with <Suspense> boundaries so fast header/summary shells paint immediately while slow analytics stream in.',
      'Securing Server Actions as public HTTP POST endpoints: authentication, authorization, Zod validation, and revalidation.'
    ],
    takeaways: [
      'Server Components complement SSR: SSR speeds up first HTML paint, while RSC permanently shrinks the client JavaScript bundle.',
      'Marking a top-level layout "use client" drags its entire import subtree into the client bundle—keep interactive boundaries small.',
      'Treat every "use server" function with the exact same zero-trust security rigor as a public REST endpoint.'
    ],
    checklist: [
      'Import "server-only" in modules handling database clients or secret API credentials.',
      'Fetch independent data sources in parallel with Promise.all() inside Server Components.',
      'Pass only minimal DTO fields—never raw database user rows—across the Server-to-Client prop boundary.',
      'Validate every Server Action payload with Zod and verify session permissions.'
    ],
    faqs: [
      { q: 'Do Client Components still render on the server?', a: 'Yes! Client Components are pre-rendered to HTML during SSR for fast first paint and SEO, then hydrated in the browser to attach event listeners.' },
      { q: 'Can a Client Component render a Server Component?', a: 'Yes, via composition—pass the <ServerComponent /> as the children prop from a parent Server Component.' },
      { q: 'Are Server Actions safe for public mutations?', a: 'Yes, when every action checks session auth, enforces RBAC, and validates input schemas independently.' }
    ]
  },
  'reactjs-state-management-comparison': {
    categoryKey: 'react',
    categoryLabel: 'React.js',
    badge: 'React.js · State Architecture',
    title: 'React State Management Comparison: TanStack Query vs Zustand vs Redux Toolkit vs Context',
    summary: 'An architectural decision framework separating Server Cache State, URL State, Form State, and Client UI State—comparing TanStack Query, Zustand, Jotai, Redux Toolkit, and React Context.',
    readTime: '8 min read',
    relatedServiceSlug: 'frontend-development',
    relatedServiceTitle: 'Front-End Development & UI Engineering',
    focusPoints: [
      'Why 80% of legacy Redux boilerplate was actually server-cache management better handled by TanStack Query or RTK Query.',
      'Storing filters, pagination, tabs, and sort order in URL SearchParams for shareable, bookmarkable enterprise views.',
      'Comparing Zustand (minimal selector-based store), Jotai (atomic bottom-up state for canvas/spreadsheet UIs), and Redux Toolkit (strict middleware & time-travel DevTools).',
      'Avoiding global React Context performance traps caused by high-frequency state updates.'
    ],
    takeaways: [
      'Separate Server State (TanStack Query) from Client UI State (Zustand/RTK) from day one.',
      'Putting search filters and active tabs in the URL makes dashboards shareable across teams with zero store code.',
      'Zustand + TanStack Query covers 90% of modern enterprise React applications with minimal bundle weight.'
    ],
    checklist: [
      'Audit global stores and move remote API responses into TanStack Query / RTK Query caches.',
      'Always subscribe to Zustand/Redux via narrow state selectors (useStore(s => s.sidebarOpen)).',
      'Reserve React Context for low-frequency dependency injection (theme, locale, auth user).',
      'Use React Hook Form + Zod for high-performance complex form state.'
    ],
    faqs: [
      { q: 'Why shouldn’t we store everything in React Context?', a: 'Whenever a Context value changes, every consumer component re-renders regardless of which property it reads—causing lag on rapidly changing state.' },
      { q: 'Is Redux dead in modern React?', a: 'No—Redux Toolkit (RTK) is concise, TypeScript-friendly, and still strong for complex cross-slice client state machines and financial trading cockpits.' },
      { q: 'Why put table filters in URL query params instead of Zustand?', a: 'Users can refresh the page, click Back/Forward, or paste links in Slack/Teams and see the exact same filtered dataset.' }
    ]
  },
  'reactjs-with-typescript-best-practices': {
    categoryKey: 'react',
    categoryLabel: 'React.js',
    badge: 'React.js · TypeScript Patterns',
    title: 'React with TypeScript Best Practices: Discriminated Unions, Polymorphic Props & Strict Typing',
    summary: 'Eliminate runtime TypeErrors across React codebases using discriminated union state models, ComponentPropsWithoutRef HTML extension, generic data-table components, and Zod runtime boundary parsing.',
    readTime: '8 min read',
    relatedServiceSlug: 'frontend-development',
    relatedServiceTitle: 'Front-End Development & UI Engineering',
    focusPoints: [
      'Making impossible UI states unrepresentable with Discriminated Unions instead of loose boolean flags.',
      'Extending native HTML attributes cleanly via React.ComponentPropsWithoutRef<"button"> without reinventing prop types.',
      'Building reusable generic components (<DataTable<TRow> />) that preserve full row autocomplete.',
      'Combining compile-time TypeScript types with runtime Zod parsing at external API boundaries.'
    ],
    takeaways: [
      'Prefer plain typed functions over legacy React.FC so generic components and default parameters stay clean.',
      'TypeScript types vanish at runtime—always validate untrusted JSON responses with Zod before trusting interfaces.',
      'Discriminated unions guarantee you cannot render a link button without href or a success screen with null data.'
    ],
    checklist: [
      'Enable strict: true and noUncheckedIndexedAccess: true in tsconfig.json.',
      'Ban unreviewed any and unsafe as Type assertions via @typescript-eslint.',
      'Type event handlers explicitly (React.ChangeEvent<HTMLInputElement>, React.FormEvent<HTMLFormElement>).',
      'Use satisfies Record<...> to validate config maps while preserving literal key unions.'
    ],
    faqs: [
      { q: 'Should we use ReactNode or ReactElement for children props?', a: 'Use React.ReactNode in almost all cases because it safely accepts strings, numbers, fragments, arrays, booleans, and JSX elements.' },
      { q: 'Why enable noUncheckedIndexedAccess in TypeScript?', a: 'It forces explicit undefined checks on array[i] and dictionary[key] lookups—preventing the #1 cause of "Cannot read properties of undefined" crashes.' },
      { q: 'How has ref typing improved in React 19?', a: 'In React 19, ref is passed as a regular prop in ComponentProps<"input"> without needing forwardRef wrappers.' }
    ]
  },
  'reactjs-performance-optimization': {
    categoryKey: 'react',
    categoryLabel: 'React.js',
    badge: 'React.js · Speed & CWV',
    title: 'React Performance Optimization: Virtualization, Code Splitting, Composition & Core Web Vitals',
    summary: 'Practical engineering techniques to achieve sub-second LCP and <100ms INP in large React apps—using composition before memoization, TanStack Virtual lists, route chunking, and bundle budgets.',
    readTime: '8 min read',
    relatedServiceSlug: 'speed-optimization',
    relatedServiceTitle: 'Website Speed & Core Web Vitals Optimization',
    focusPoints: [
      'Structural composition patterns (moving local state down and passing children) that prevent subtree re-renders naturally.',
      'Windowing/virtualizing 10,000+ row ERP and financial tables with @tanstack/react-virtual so only ~25 DOM rows mount at once.',
      'Route- and widget-level code splitting via React.lazy() + <Suspense> for heavy charting, PDF, and map libraries.',
      'Eliminating client-side data waterfalls by parallelizing requests or prefetching on link hover.'
    ],
    takeaways: [
      'Passing expensive subtrees as children skips re-rendering them when wrapper state changes—no React.memo needed.',
      'DOM node count (>1,500 nodes) hurts scrolling and INP far more than virtual DOM diffing; virtualize long lists.',
      'Network waterfalls usually dwarf render times—fix sequential API fetches first.'
    ],
    checklist: [
      'Lazy-load heavy secondary dependencies (ApexCharts, Monaco, SheetJS, Mapbox).',
      'Virtualize any scrollable list or table exceeding 100 rows.',
      'Audit production bundles in CI with rollup-plugin-visualizer and enforce size budgets.',
      'Profile under 4x CPU throttling in Chrome DevTools to match mid-tier mobile devices.'
    ],
    faqs: [
      { q: 'Should we wrap every function and component in useCallback and React.memo?', a: 'No. Apply structural composition first, adopt the React Compiler where supported, and reserve manual memoization for profiled bottlenecks.' },
      { q: 'Why does using array index as key break React performance and state?', a: 'Inserting, deleting, or sorting items shifts indices—causing React to mutate the wrong DOM nodes and corrupt uncontrolled input states.' },
      { q: 'How do we improve Interaction to Next Paint (INP) on heavy filter clicks?', a: 'Update the clicked filter button immediately and wrap the expensive table state update inside startTransition().' }
    ]
  },
  'reactjs-routing-with-react-router-v7': {
    categoryKey: 'react',
    categoryLabel: 'React.js',
    badge: 'React.js · Routing & Data',
    title: 'React Router v7 Guide: Nested Layouts, Parallel Route Loaders, Actions & Role-Protected Portals',
    summary: 'Eliminate component-level loading waterfalls by mastering React Router v7 nested layouts, parallel route loaders, form actions, optimistic fetchers, and route-level code splitting.',
    readTime: '8 min read',
    relatedServiceSlug: 'frontend-development',
    relatedServiceTitle: 'Front-End Development & UI Engineering',
    focusPoints: [
      'Unified Remix + React Router v7 architecture offering seamless progression from SPA Data Mode to SSR Framework Mode.',
      'Parallel route loaders fetching parent shell data and child screen data simultaneously before navigation completes.',
      'Automatic cache revalidation after route Action mutations without manual state wiring.',
      'Granular nested ErrorBoundaries isolating widget failures without crashing the global navigation shell.'
    ],
    takeaways: [
      'Route loaders decouple data fetching from component rendering, ending nested spinner waterfalls.',
      'useFetcher enables inline row mutations (status toggles, bookmarks) without URL changes.',
      'lazy route modules load code and data in parallel rather than sequentially.'
    ],
    checklist: [
      'Group shared sidebars and headers inside nested layout routes with <Outlet />.',
      'Enforce authentication redirects inside root/protected route loaders before components mount.',
      'Attach route-level errorElement boundaries so partial API errors stay localized.',
      'Sync search, sort, and page parameters with useSearchParams().'
    ],
    faqs: [
      { q: 'What happened to Remix?', a: 'Remix v2 merged directly into React Router v7—giving teams one unified router supporting both pure Vite SPAs and full-stack SSR.' },
      { q: 'Can React Router v7 work alongside TanStack Query?', a: 'Yes! Route loaders can call queryClient.ensureQueryData() to prefetch on navigation while keeping rich client cache invalidation.' },
      { q: 'How do we prevent unauthorized screen flashes on protected routes?', a: 'Perform session checks inside route loaders and throw redirect("/login") before any protected UI renders.' }
    ]
  },
  'reactjs-design-system-and-storybook': {
    categoryKey: 'react',
    categoryLabel: 'React.js',
    badge: 'React.js · Design Systems',
    title: 'Building Accessible Bilingual React Design Systems with Radix Primitives, Tailwind CSS & Storybook 8',
    summary: 'How to engineer enterprise UI component libraries supporting WCAG 2.2 AA accessibility, CSS logical properties for seamless Arabic RTL / English LTR switching, CVA variants, and Storybook play tests.',
    readTime: '8 min read',
    relatedServiceSlug: 'frontend-development',
    relatedServiceTitle: 'Front-End Development & UI Engineering',
    focusPoints: [
      'Three-tier CSS custom property tokens (Primitive → Semantic → Component) syncing Figma variables with Tailwind CSS.',
      'Building on headless accessible primitives (Radix UI / React Aria) to guarantee keyboard focus traps, roving tabindex, and ARIA compliance.',
      'Bilingual RTL/LTR mastery using Tailwind logical utilities (ps-*, pe-*, ms-*, me-*, start-*, end-*, text-start).',
      'Documenting states and running automated Storybook 8 interaction & axe-core accessibility tests in CI.'
    ],
    takeaways: [
      'Never build modal focus traps, combobox keyboard navigation, or accessible menus from raw divs—compose battle-tested headless primitives.',
      'CSS logical properties allow a single component codebase to flip cleanly between English LTR and Arabic RTL.',
      'class-variance-authority (CVA) + tailwind-merge gives consumers type-safe variants with conflict-free class overrides.'
    ],
    checklist: [
      'Replace physical directional classes (ml-*, pl-*, left-*, text-left) with logical equivalents.',
      'Add a Storybook toolbar toggle switching dir="ltr" and dir="rtl" across every story.',
      'Verify minimum 4.5:1 text contrast ratios across dark and light tokens.',
      'Run @storybook/addon-a11y automatically in pull-request checks.'
    ],
    faqs: [
      { q: 'Why combine Radix UI / shadcn patterns with Tailwind instead of heavy legacy UI kits?', a: 'You own 100% of the component source code, ship zero unused CSS-in-JS runtime overhead, and customize luxury brand aesthetics without fighting specificity wars.' },
      { q: 'How should icons behave in RTL vs LTR?', a: 'Directional navigation arrows (chevrons, back/forward) mirror with rtl:rotate-180, while non-directional icons (checkmarks, clocks, logos) remain unflipped.' },
      { q: 'How many components should v1 of an enterprise design system include?', a: 'Start with tokens + the 15 foundational primitives (Button, Input, Select, Dialog, Drawer, Table, Tabs, Badge, Alert, Tooltip) used across 80% of screens.' }
    ]
  },
  'reactjs-micro-frontends-architecture': {
    categoryKey: 'react',
    categoryLabel: 'React.js',
    badge: 'React.js · Micro-Frontends',
    title: 'React Micro-Frontends Architecture: Module Federation 2.0, Independent Deploys & Governance',
    summary: 'When and how large enterprises split massive portals into independently deployable React micro-frontends using Module Federation 2.0, strict custom-event contracts, and fault-isolated shells.',
    readTime: '9 min read',
    relatedServiceSlug: 'custom-software-development',
    relatedServiceTitle: 'Custom Software Development & Engineering',
    focusPoints: [
      'Evaluating organizational scale: Nx Modular Monorepo (1–4 squads) vs Runtime Micro-Frontends (5+ autonomous domain squads).',
      'Sharing singleton React, React-DOM, and design-system tokens at runtime with Module Federation 2.0 (Vite / Rspack).',
      'Enforcing loose coupling between remotes via URL state and typed CustomEvents—never shared mutable Redux stores.',
      'Wrapping every remote mount point in an ErrorBoundary + Suspense fallback so one squad’s outage never crashes the host portal.'
    ],
    takeaways: [
      'Micro-frontends solve organizational release bottlenecks across large multi-vendor programs—do not adopt them prematurely for small teams.',
      'If two micro-frontends must deploy together synchronously, you have built a distributed monolith.',
      'React and React-DOM must always be negotiated as strict runtime singletons.'
    ],
    checklist: [
      'Configure singleton: true on react, react-dom, and router packages in federation config.',
      'Isolate CSS via CSS Modules, scoped prefixes, or unified design-system utility tokens.',
      'Wrap every federated remote in a resilient ErrorBoundary with retry capability.',
      'Run contract tests verifying host-to-remote TypeScript manifest compatibility.'
    ],
    faqs: [
      { q: 'What happens if two micro-frontends bundle two different copies of React?', a: 'React hooks throw invalid hook call errors and bundle size doubles—which is why Module Federation singleton sharing is mandatory.' },
      { q: 'How should authentication work across multiple micro-frontends?', a: 'The host shell owns OIDC/BFF session management cleanly, and all remotes share same-origin HttpOnly cookies or read a minimal read-only auth facade.' },
      { q: 'Are iframes still used for micro-frontends?', a: 'Only when embedding untrusted third-party legacy systems requiring hard sandbox isolation; first-party portals use Module Federation for unified routing, SEO, and modals.' }
    ]
  },
  'reactjs-testing-strategy': {
    categoryKey: 'react',
    categoryLabel: 'React.js',
    badge: 'React.js · Testing & MSW',
    title: 'Enterprise React Testing Strategy: Vitest, React Testing Library, MSW v2 & Playwright',
    summary: 'Ship high-confidence React releases with zero-flake tests—combining Vitest, React Testing Library user-event simulations, Mock Service Worker (MSW v2) network interception, and Playwright E2E.',
    readTime: '8 min read',
    relatedServiceSlug: 'frontend-development',
    relatedServiceTitle: 'Front-End Development & UI Engineering',
    focusPoints: [
      'Applying the Testing Trophy: heavy investment in realistic component integration tests backed by MSW network handlers.',
      'Querying by accessible ARIA roles (getByRole, getByLabelText) and simulating real pointer/keyboard interactions with @testing-library/user-event.',
      'Intercepting real fetch/Axios calls at the network layer via MSW v2 instead of brittle module mocks.',
      'Playwright cross-browser and mobile-viewport E2E verification for mission-critical flows.'
    ],
    takeaways: [
      'Mocking fetch at the network boundary with MSW exercises your real API client, TanStack Query hooks, and Zod parsers.',
      'Avoid giant component HTML snapshot files that developers blindly update without reading.',
      'Accessible getByRole queries verify both functional logic and screen-reader semantics simultaneously.'
    ],
    checklist: [
      'Set server.listen({ onUnhandledRequest: "error" }) in MSW test setup to catch stray API calls.',
      'Create a fresh QueryClient({ defaultOptions: { queries: { retry: false } } }) per test case.',
      'Use await userEvent.setup() instead of low-level fireEvent for realistic focus and keyboard sequences.',
      'Gate production deployments on green Vitest + Playwright CI checks.'
    ],
    faqs: [
      { q: 'Why prefer userEvent over fireEvent in React Testing Library?', a: 'fireEvent dispatches a single synthetic DOM event, whereas userEvent simulates real browser hover, focus, pointerdown, keydown, and input sequences.' },
      { q: 'How do we test custom React hooks?', a: 'Test them naturally through a consuming component, or use renderHook() when testing complex standalone hook edge cases.' },
      { q: 'Why disable TanStack Query retries inside unit/integration tests?', a: 'Default 3x exponential retries make error-state tests hang for several seconds and time out.' }
    ]
  },

  // ==================== JOOMLA (10) ====================
  'what-is-joomla': {
    categoryKey: 'joomla',
    categoryLabel: 'Joomla',
    badge: 'Joomla · Enterprise CMS',
    title: 'What Is Joomla 5? Native ACL, Multilingual Core & Enterprise Portal Capabilities',
    summary: 'Discover Joomla 5’s modern PHP 8.2/8.3 MVC architecture, built-in granular Access Control Lists (ACL), native multilingual engine, custom fields, and editorial workflows without third-party plugin bloat.',
    readTime: '8 min read',
    relatedServiceSlug: 'corporate-websites',
    relatedServiceTitle: 'Corporate Website Development',
    focusPoints: [
      'Re-engineered Joomla 5 core built on Symfony components, PSR-4 namespacing, DI containers, and native dark-mode admin UX.',
      'Out-of-the-box enterprise features—granular ACL, 70+ language associations, custom fields, workflows, and 2FA/Passkeys—requiring zero paid add-ons.',
      'Built-in RESTful Web Services API enabling headless mobile app and external portal integrations.',
      'Ideal fit for ministries, chambers of commerce, universities, federations, and multi-department corporate portals.'
    ],
    takeaways: [
      'Joomla ships native ACL, multilingual routing, and custom fields in core—slashing third-party plugin attack surface.',
      'Joomla 5 runs natively without legacy compatibility layers on modern PHP 8.3 and MySQL 8 / PostgreSQL.',
      'WebAssetManager delivers clean, dependency-ordered asset loading and strong Core Web Vitals.'
    ],
    checklist: [
      'Deploy Joomla 5 on PHP 8.2/8.3 with OPcache and Redis session/cache handlers.',
      'Design user group and Viewing Access Level hierarchies before creating categories.',
      'Enable Passkey / WebAuthn MFA for all Super Users and backend administrators.',
      'Use child templates so core updates never overwrite custom styling.'
    ],
    faqs: [
      { q: 'Is Joomla still actively developed for modern enterprise websites?', a: 'Yes—Joomla 5 features a modernized PSR-compliant PHP 8 architecture, WebAuthn Passkeys, Schema.org integration, and top-tier security.' },
      { q: 'Why choose Joomla when native multilingual governance is required?', a: 'Joomla links Arabic and English items, menus, and modules natively in core without needing paid translation plugins.' },
      { q: 'Does Joomla include a built-in REST API?', a: 'Yes, Joomla 4/5 ships native token-authenticated Web Services endpoints for articles, users, categories, and custom components.' }
    ]
  },
  'joomla-website-development': {
    categoryKey: 'joomla',
    categoryLabel: 'Joomla',
    badge: 'Joomla · Custom Portals',
    title: 'Custom Joomla Website Development: Child Templates, Layout Overrides & Institutional Architecture',
    summary: 'Engineering bespoke institutional portals on Joomla 5—covering Cassiopeia/custom template architecture, joomla.asset.json management, template overrides, and departmental ACL governance.',
    readTime: '8 min read',
    relatedServiceSlug: 'corporate-websites',
    relatedServiceTitle: 'Corporate Website Development',
    focusPoints: [
      'Information architecture mapping hierarchical categories, custom field groups, and departmental editorial permissions.',
      'Bespoke child template engineering with Tailwind CSS, RTL/LTR logical styling, and WebAssetManager asset registration.',
      'Upgrade-safe HTML layout overrides (/templates/custom/html/...) customizing article, directory, and search views without touching core.',
      'Pre-launch technical SEO, Schema.org structured data, and WCAG accessibility verification.'
    ],
    takeaways: [
      'Never edit core Joomla component views—template overrides give 100% markup freedom while keeping one-click core security updates intact.',
      'WebAssetManager eliminates duplicate script loading and render-blocking CSS.',
      'Structured backend custom fields let non-technical editors publish rich cards without breaking layouts.'
    ],
    checklist: [
      'Register all styles and scripts with defer/module attributes inside joomla.asset.json.',
      'Configure Search Engine Friendly (SEF) URLs and URL rewriting (.htaccess / NGINX try_files).',
      'Restrict backend Super User accounts and delegate daily publishing to scoped Editor/Publisher roles.',
      'Automate encrypted off-site backups via Akeeba Backup CLI or server snapshots.'
    ],
    faqs: [
      { q: 'Can Joomla match completely custom luxury UI designs?', a: '100%. Joomla separates data models from presentation views via PHP template overrides, allowing pixel-accurate bespoke frontends.' },
      { q: 'How does Joomla handle multiple departments publishing independently?', a: 'Each department gets a scoped User Group with Create/Edit/Publish permissions restricted strictly to its assigned category tree.' },
      { q: 'Which databases does Joomla 5 support?', a: 'MySQL 8.0+, MariaDB 10.4+, and PostgreSQL 12+.' }
    ]
  },
  'joomla-vs-wordpress': {
    categoryKey: 'joomla',
    categoryLabel: 'Joomla',
    badge: 'Joomla · CMS Comparison',
    title: 'Joomla vs WordPress: Architectural Comparison for Corporate, Media & Multi-Role Portals',
    summary: 'An objective engineering comparison of Joomla 5 and WordPress across access control (ACL), native multilingual capabilities, custom content modeling, plugin dependency risk, and total cost of ownership.',
    readTime: '8 min read',
    relatedServiceSlug: 'corporate-websites',
    relatedServiceTitle: 'Corporate Website Development',
    focusPoints: [
      'Core feature philosophy: WordPress’s minimal core + heavy plugin ecosystem vs Joomla’s rich built-in enterprise core.',
      'Granular role-based ACL and multi-stage editorial workflows included natively in Joomla vs multiple third-party plugins in WordPress.',
      'Native bilingual/multilingual associations in Joomla core vs WPML/Polylang licensing and table overhead in WordPress.',
      'Editorial familiarity, WooCommerce ecosystem advantages, and choosing the right platform per project brief.'
    ],
    takeaways: [
      'Choose Joomla when multi-department ACL, native bilingual governance, and minimal third-party plugins are top priorities.',
      'Choose WordPress when rapid marketing velocity, Gutenberg editorial UX, or WooCommerce retail integrations lead the brief.',
      'Both platforms achieve 95+ Core Web Vitals when engineered with custom themes, PHP 8.3, and Redis caching.'
    ],
    checklist: [
      'Count how many paid third-party plugins would be required to replicate native core features.',
      'Evaluate internal editorial team familiarity and training requirements.',
      'Audit long-term license renewal and maintenance SLA costs over 36 months.',
      'Verify required payment, CRM, or ERP integrations before locking platform selection.'
    ],
    faqs: [
      { q: 'Which CMS is more secure: Joomla or WordPress?', a: 'Core security in both is mature; most real-world breaches stem from outdated third-party plugins—where Joomla’s richer built-in core often requires fewer external add-ons.' },
      { q: 'Is Joomla harder for content editors to learn?', a: 'Joomla’s backend is slightly more structured initially, though custom dashboards and scoped ACL permissions make daily departmental editing very clean.' },
      { q: 'Which is better for pure e-commerce?', a: 'WordPress (WooCommerce) or dedicated platforms like Shopify/Magento/Salla have much broader payment and shipping ecosystems than Joomla.' }
    ]
  },
  'joomla-extensions-development': {
    categoryKey: 'joomla',
    categoryLabel: 'Joomla',
    badge: 'Joomla · Extension Engineering',
    title: 'Joomla 5 Extension Development: PSR-4 Components, Modules, Event Plugins & Web Services',
    summary: 'How to architect modern Joomla 5 extensions using Dependency Injection services/provider.php, MVC Components, lightweight Modules, SubscriberInterface Plugins, and custom API endpoints.',
    readTime: '9 min read',
    relatedServiceSlug: 'custom-software-development',
    relatedServiceTitle: 'Custom Software Development & Engineering',
    focusPoints: [
      'Distinguishing Components (primary routed apps), Modules (reusable layout blocks), and Plugins (event-driven lifecycle hooks).',
      'Modern Joomla 5 PSR-4 namespaced directory structure wired through Dependency Injection (services/provider.php).',
      'Preventing SQL injection and XSS using parameterized DatabaseInterface queries ($db->getQuery(true)) and Form XML filtering.',
      'Exposing custom component entities to mobile apps via native Joomla Web Services API plugins.'
    ],
    takeaways: [
      'Never use legacy JFactory static calls—inject services cleanly via Joomla 5’s DI container.',
      'SubscriberInterface event plugins allow clean ERP/CRM synchronization on content or user save without core hacks.',
      'Built-in Form XML + ACL rules give custom components enterprise permissions and CSRF tokens automatically.'
    ],
    checklist: [
      'Enforce defined("_JEXEC") or die; guards and PSR-4 namespaces across all PHP files.',
      'Bind every SQL parameter with :named placeholders via $query->bind().',
      'Validate every POST/PUT form submission with Session::checkToken().',
      'Configure an XML update server manifest for one-click extension updates.'
    ],
    faqs: [
      { q: 'Will Joomla 3 extensions run on Joomla 5?', a: 'Legacy Joomla 3 extensions require refactoring to Joomla 4/5 namespaces and removal of deprecated JFactory/JError APIs.' },
      { q: 'When can Custom Fields replace writing a custom Component?', a: 'When your data is primarily publishable content items (events, staff profiles, tenders) rather than transactional multi-table relational workflows.' },
      { q: 'How do we expose custom Joomla tables as JSON APIs?', a: 'Build a lightweight webservices plugin registering ApiRouter routes mapped to your component’s MVC API controller.' }
    ]
  },
  'joomla-custom-fields-workflow-guide': {
    categoryKey: 'joomla',
    categoryLabel: 'Joomla',
    badge: 'Joomla · Content Modeling',
    title: 'Joomla Custom Fields & Editorial Workflows: Structured Content Governance Without Extra Plugins',
    summary: 'Transform Joomla 5 into a structured enterprise content engine using 16+ native Custom Field types, Subform repeaters, layout overrides, and multi-stage editorial approval workflows.',
    readTime: '8 min read',
    relatedServiceSlug: 'corporate-websites',
    relatedServiceTitle: 'Corporate Website Development',
    focusPoints: [
      'Modeling structured directories (medical doctors, real estate listings, tender notices, academic programs) using native Field Groups.',
      'Rendering custom field values cleanly inside PHP template overrides rather than relying on auto-appended lists.',
      'Designing multi-stage Publishing Workflows (Draft → Technical Review → Legal Sign-Off → Published) with ACL-restricted transitions.',
      'Triggering email notifications and version-history snapshots at every editorial transition.'
    ],
    takeaways: [
      'Joomla’s Subform repeatable custom fields model complex specs, schedules, and FAQs with zero third-party extensions.',
      'Editorial Workflows ensure junior authors can draft content without ever publishing unapproved statements live.',
      'Content Versioning allows instant diff comparison and rollback to any historical revision.'
    ],
    checklist: [
      'Scope Field Groups to specific Categories so editors only see fields relevant to that content type.',
      'Disable Automatic Display on custom fields rendered manually inside custom card/hero overrides.',
      'Map each Workflow Transition to a dedicated ACL permission group (e.g., Legal Reviewer).',
      'Enable Smart Search (Finder) indexing on searchable custom fields.'
    ],
    faqs: [
      { q: 'Does Joomla need an ACF-equivalent plugin for custom fields?', a: 'No—Joomla includes text, media, calendar, SQL list, user, list, and repeatable Subform fields natively in core.' },
      { q: 'Can different categories follow different approval workflows?', a: 'Yes, each category can be assigned its own independent multi-stage Workflow.' },
      { q: 'Are custom fields exposed in Joomla’s REST API?', a: 'Yes, custom field values are automatically serialized inside Joomla Web Services article responses.' }
    ]
  },
  'joomla-multilingual-website-guide': {
    categoryKey: 'joomla',
    categoryLabel: 'Joomla',
    badge: 'Joomla · Bilingual AR/EN',
    title: 'Building Native Bilingual Arabic (RTL) & English (LTR) Websites in Joomla 5',
    summary: 'Complete architectural guide to configuring Joomla 5’s built-in multilingual engine—covering Content Languages, Language Filter routing, Multilingual Associations, hreflang SEO, and RTL CSS.',
    readTime: '8 min read',
    relatedServiceSlug: 'corporate-websites',
    relatedServiceTitle: 'Corporate Website Development',
    focusPoints: [
      'Configuring Language Packs, Content Languages (ar-AA / en-GB), Language Filter plugin, and per-language Default Home menus.',
      'Side-by-side translation management via Joomla’s Multilingual Associations component.',
      'Automatic <link rel="alternate" hreflang="..."> generation and localized URL slugs (/ar/... and /en/...).',
      'Seamless RTL/LTR typography switching (Cairo/Tajawal for Arabic, Plus Jakarta Sans/Inter for English) via CSS logical properties.'
    ],
    takeaways: [
      'When switching languages, Joomla Associations take visitors to the exact counterpart page—not back to the homepage.',
      'Every active language requires its own dedicated Menu containing one Default Home item.',
      'Multilingual Status admin module diagnoses any missing language configuration in one click.'
    ],
    checklist: [
      'Enable System - Language Filter and System - Language Code plugins.',
      'Keep one root "All Languages" menu unpublished as fallback while publishing dedicated AR and EN menus.',
      'Verify bidirectional hreflang tags and localized meta descriptions on every associated page.',
      'Test mobile drawers, breadcrumbs, and directional icons in both dir="rtl" and dir="ltr".'
    ],
    faqs: [
      { q: 'Does Joomla require paid plugins for Arabic/English websites?', a: 'No. Full multilingual routing, associations, hreflang tags, and language switcher modules are 100% built into Joomla core.' },
      { q: 'Why didn’t my language flag appear in the Language Switcher?', a: 'Usually because that language does not yet have a published menu item marked as Default Home.' },
      { q: 'Can we share media assets across both Arabic and English articles?', a: 'Yes, images and documents in the Media Manager are shared while alt texts and captions are localized per language.' }
    ]
  },
  'joomla-speed-optimization': {
    categoryKey: 'joomla',
    categoryLabel: 'Joomla',
    badge: 'Joomla · Core Web Vitals',
    title: 'Joomla 5 Speed Optimization: Redis Caching, PHP 8.3 OPcache, WebP/AVIF & 95+ PageSpeed',
    summary: 'Achieve sub-second TTFB and green Core Web Vitals on Joomla 5 portals through Conservative/Page caching, Redis in-memory stores, WebAssetManager tuning, Smart Search optimization, and CDN edge rules.',
    readTime: '7 min read',
    relatedServiceSlug: 'speed-optimization',
    relatedServiceTitle: 'Website Speed & Core Web Vitals Optimization',
    focusPoints: [
      'Tuning PHP 8.3 FPM + OPcache JIT alongside MySQL 8 buffer pools and Redis memory handlers for sessions and cache.',
      'Choosing Conservative Caching vs System Page Cache safely without caching personalized or CSRF-form views.',
      'Serving responsive WebP/AVIF images with explicit width/height attributes, fetchpriority="high" on LCP heroes, and native lazy loading.',
      'Auditing slow extension queries using Joomla’s built-in Debug System profiler.'
    ],
    takeaways: [
      'Moving Joomla sessions from database tables to Redis or PHP filesystem eliminates heavy write contention under traffic spikes.',
      'WebAssetManager defer/module loading removes render-blocking JavaScript from the critical path.',
      'Preloading subsetted WOFF2 Arabic/English fonts prevents Flash of Invisible Text and CLS.'
    ],
    checklist: [
      'Switch Session Handler from Database to Filesystem or Redis in Global Configuration.',
      'Enable Gzip/Brotli compression at NGINX/Cloudflare level.',
      'Exclude dynamic contact/login URLs when enabling System - Page Cache.',
      'Verify LCP < 2.5s, INP < 200ms, and CLS < 0.1 in PageSpeed Insights.'
    ],
    faqs: [
      { q: 'Why shouldn’t high-traffic Joomla sites store sessions in MySQL?', a: 'Every anonymous visitor writes/updates #__session rows on each hit, causing table lock contention during viral traffic.' },
      { q: 'What is the difference between Conservative and Progressive caching in Joomla?', a: 'Conservative caching caches module outputs cleanly across users and is recommended over Progressive caching on dynamic portals.' },
      { q: 'Does Joomla 5 still load jQuery by default?', a: 'No! Joomla 5 core frontend scripts are written in modern vanilla ES6+ JavaScript with zero jQuery dependency.' }
    ]
  },
  'joomla-seo-best-practices': {
    categoryKey: 'joomla',
    categoryLabel: 'Joomla',
    badge: 'Joomla · Technical SEO',
    title: 'Joomla 5 Technical SEO Guide: Clean URLs, Native Schema.org JSON-LD, Redirects & Indexation',
    summary: 'Maximize organic search visibility on Joomla 5—eliminating duplicate category/ID URLs, configuring native Joomla 5 Schema.org rich snippets, managing 301 redirects, and scaling bilingual sitemaps.',
    readTime: '8 min read',
    relatedServiceSlug: 'technical-seo',
    relatedServiceTitle: 'Technical SEO & Search Architecture',
    focusPoints: [
      'Enabling SEF URLs, URL Rewriting, and Modern Routing with "Remove IDs from URLs" to produce clean canonical paths.',
      'Leveraging Joomla 5’s built-in Schema.org plugin suite (Organization, Article, BreadcrumbList, FAQ, Event, Person) without external extensions.',
      'Preventing duplicate content across category blog views, tags, and pagination via canonical tags and robots directives.',
      'Capturing broken legacy URLs with Joomla’s native Redirect component (with Collect URLs disabled once stabilized).'
    ],
    takeaways: [
      'Enabling "Remove IDs from URLs" in Article/Category Integration options eliminates /14-article-slug numeric prefixes.',
      'Joomla 5 ships native JSON-LD Schema.org tabs directly inside every article editor.',
      'Disable "Collect URLs" in the Redirect plugin on high-traffic sites after migration so bot 404 scans don’t bloat the database.'
    ],
    checklist: [
      'Turn on Search Engine Friendly URLs + Use URL Rewriting in Global Configuration.',
      'Enable Modern Routing + Remove IDs from URLs in Articles → Options → Integration.',
      'Configure Organization/Person base Schema.org metadata and per-article rich types.',
      'Submit XML sitemaps for both /en/ and /ar/ properties in Google Search Console.'
    ],
    faqs: [
      { q: 'Why do /index.php/ segments appear in fresh Joomla URLs?', a: 'Because "Use URL Rewriting" is still off or htaccess.txt hasn’t been renamed to .htaccess (or try_files configured in NGINX).' },
      { q: 'Does Joomla 5 support FAQ and Article JSON-LD natively?', a: 'Yes, Joomla 5 introduced core Schema.org plugins managed right inside a dedicated Schema tab when editing content.' },
      { q: 'Why did #__redirect_links grow to hundreds of thousands of rows?', a: 'Automated vulnerability bots hit thousands of non-existent URLs; keep the Redirect plugin active for manual 301s while turning off automatic 404 URL collection.' }
    ]
  },
  'joomla-security-and-maintenance': {
    categoryKey: 'joomla',
    categoryLabel: 'Joomla',
    badge: 'Joomla · Cyber Hardening',
    title: 'Joomla 5 Security Hardening & SLA Maintenance: Passkeys, HTTP Headers, WAF & Zero-Day Defense',
    summary: 'Enterprise security blueprint for government and corporate Joomla portals—configuring WebAuthn Passkeys, core HTTP Security Headers plugin, administrator endpoint protection, filesystem permissions, and backup SLAs.',
    readTime: '8 min read',
    relatedServiceSlug: 'website-security',
    relatedServiceTitle: 'Website Security & Cyber Hardening',
    focusPoints: [
      'Enforcing Multi-Factor Authentication (TOTP / YubiKey / WebAuthn Passkeys) for all backend accounts and disabling public user registration when unused.',
      'Configuring Joomla’s built-in System - HTTP Headers plugin for HSTS, Content-Security-Policy, X-Frame-Options, and Referrer-Policy.',
      'Hardening server permissions (configuration.php at 440/444, blocking PHP execution inside /images and /tmp) plus Cloudflare WAF protection on /administrator.',
      'Structured staging-first patch cycles monitoring the Joomla Security Strike Team (JSST) and VEL advisories.'
    ],
    takeaways: [
      'Disabling unused public User Registration in Users → Options closes privilege-escalation vectors immediately.',
      'Joomla 5 includes an enterprise HTTP Security Headers manager natively—no extra security plugin required for CSP/HSTS.',
      'An untested backup is not a backup—verify quarterly disaster-recovery restoration onto an isolated staging host.'
    ],
    checklist: [
      'Set Allow User Registration = No unless public member accounts are explicitly required.',
      'Require MFA / Passkeys for all Administrator and Super User roles.',
      'Block direct PHP execution inside /images, /media, and /tmp in NGINX/Apache config.',
      'Apply Joomla core and extension patches within 24–48 hours of security advisories.'
    ],
    faqs: [
      { q: 'How do we protect /administrator from brute-force login bots?', a: 'Combine Cloudflare Zero Trust / IP rate limiting on /administrator with mandatory Joomla MFA/Passkeys and strong unique usernames.' },
      { q: 'Should configuration.php be writable in production?', a: 'No—Joomla sets configuration.php to read-only (444) automatically after saving settings; keep it read-only at the OS level.' },
      { q: 'How can we check if any installed third-party extension has a known vulnerability?', a: 'Check the official Joomla Vulnerable Extensions List (VEL) and enable extension update notifications.' }
    ]
  },
  'joomla-migration-upgrade-guide': {
    categoryKey: 'joomla',
    categoryLabel: 'Joomla',
    badge: 'Joomla · Legacy Migration',
    title: 'Zero-Downtime Joomla Migration & Upgrade Guide (Joomla 3.x / 4.x to Joomla 5)',
    summary: 'Step-by-step enterprise migration methodology for upgrading legacy Joomla 3.10 and Joomla 4 portals to Joomla 5 without losing SEO rankings, URLs, multilingual associations, or historical archives.',
    readTime: '8 min read',
    relatedServiceSlug: 'website-redesign',
    relatedServiceTitle: 'Website Redesign & Platform Modernization',
    focusPoints: [
      'Pre-migration extension audit using Joomla’s Pre-Update Check to classify compatible, replaceable, and deprecated add-ons.',
      'Follow the official bridge path (3.10.12 → 4.4.x → 5.x) on an isolated PHP 8.2/8.3 staging environment.',
      'Rebuilding legacy Joomla 3 templates cleanly on Joomla 5 child templates while preserving 100% of article IDs, categories, ACLs, and custom fields.',
      'Full Crawl URL mapping (Screaming Frog) before and after cutover to guarantee zero broken backlinks or SEO traffic drops.'
    ],
    takeaways: [
      'Never run a major Joomla version upgrade directly on a live production server—always clone to staging first.',
      'Upgrading from Joomla 4.4 to Joomla 5 is a smooth in-place update rather than a disruptive rebuild.',
      'Replacing abandoned legacy extensions with native Joomla 5 Custom Fields and Workflows reduces technical debt permanently.'
    ],
    checklist: [
      'Export a complete pre-migration URL list (status 200, titles, canonicals, hreflang) as baseline.',
      'Uninstall unused legacy templates, plugins, and packages before running Joomla Update.',
      'Disable the Behaviour - Backward Compatibility plugin once all extensions run native Joomla 5 code.',
      'Monitor Google Search Console Coverage and 404 logs daily for 14 days post-cutover.'
    ],
    faqs: [
      { q: 'Can you upgrade directly from Joomla 3.x to Joomla 5.x in one step?', a: 'No—you first update to Joomla 3.10.12, step through Joomla 4.4.x, modernize incompatible extensions/templates, and then update cleanly to Joomla 5.' },
      { q: 'Will migrating to Joomla 5 hurt our Google rankings?', a: 'When canonical URL slugs, meta tags, and 301 redirect maps are preserved—and PageSpeed improves—organic rankings typically hold steady or climb.' },
      { q: 'What if our portal uses an old custom component written for Joomla 3?', a: 'We either refactor its PHP classes to Joomla 5 PSR-4 MVC standards or migrate its records into native Joomla 5 Custom Fields.' }
    ]
  },

  // ==================== DRUPAL (+6 new) ====================
  'drupal-headless-decoupled-architecture': {
    categoryKey: 'drupal',
    categoryLabel: 'Drupal',
    badge: 'Drupal · Headless Architecture',
    title: 'Headless & Decoupled Drupal 10/11 Architecture with Next.js & Mobile Clients',
    summary: 'Combining Drupal’s enterprise content modeling, editorial governance, and security with sub-second Next.js/React frontends via JSON:API, Simple OAuth, and granular cache-tag invalidation.',
    readTime: '9 min read',
    relatedServiceSlug: 'drupal-development',
    relatedServiceTitle: 'Drupal Website Development',
    focusPoints: [
      'Choosing Coupled Twig vs Progressively Decoupled vs Fully Headless Drupal based on omnichannel and editorial preview needs.',
      'Using Drupal’s core JSON:API module with sparse fieldsets and compound ?include= relationships to fetch full pages in one request.',
      'Wiring Drupal Cache Tags to Next.js On-Demand ISR revalidateTag() so editorial edits go live globally in under a second.',
      'Restoring live editorial split-screen preview for draft/unpublished revisions via Next-Drupal OAuth.'
    ],
    takeaways: [
      'Drupal includes a full specification-compliant JSON:API server in core with zero extra contributed modules required.',
      'Cache-tag webhooks give decoupled portals both static CDN speed and instant editorial updates.',
      'Never break editorial preview—content teams need live draft preview before publishing sensitive announcements.'
    ],
    checklist: [
      'Use JSON:API sparse fieldsets (fields[node--article]=...) to trim payload sizes by 70%+.',
      'Secure draft preview and authenticated mutations with Simple OAuth (OAuth 2.0) and scoped Drupal roles.',
      'Trigger Next.js revalidateTag() webhooks on Drupal entity insert/update/delete hooks.',
      'Keep Drupal’s editorial admin domain behind WAF / VPN access controls.'
    ],
    faqs: [
      { q: 'Should we use JSON:API or GraphQL on Headless Drupal?', a: 'JSON:API is built into Drupal core, zero-config, and deeply integrated with Drupal permissions and cache tags; GraphQL (v4) is great when custom stitched schemas are preferred.' },
      { q: 'What is Progressive Decoupling in Drupal?', a: 'Keeping Drupal Twig for standard content pages while mounting React/Vue apps inside interactive blocks like calculators or e-service wizards.' },
      { q: 'Does headless Drupal support bilingual Arabic and English routing?', a: 'Yes—JSON:API prefixes endpoints per language (/ar/jsonapi/... and /en/jsonapi/...) automatically.' }
    ]
  },
  'drupal-graphql-content-hub': {
    categoryKey: 'drupal',
    categoryLabel: 'Drupal',
    badge: 'Drupal · Omnichannel Hub',
    title: 'Architecting an Enterprise Omnichannel Content Hub with Drupal & GraphQL',
    summary: 'How large ministries, universities, and holding groups centralize structured content in one governed Drupal 10/11 repository serving websites, native mobile apps, kiosks, and partner portals via GraphQL.',
    readTime: '8 min read',
    relatedServiceSlug: 'drupal-development',
    relatedServiceTitle: 'Drupal Website Development',
    focusPoints: [
      'Centralizing "Create Once, Publish Everywhere" (COPE) content models free from presentation-specific HTML.',
      'Schema-first GraphQL v4 module design with custom DataProducers and DeferredResolver batching to eliminate N+1 entity loads.',
      'Propagating Drupal entity and field-level CacheableMetadata into GraphQL responses for Varnish/Fastly edge caching.',
      'Multi-site Domain Access and Workbench Moderation governing dozens of sub-portals from one platform.'
    ],
    takeaways: [
      'Schema-first GraphQL decouples mobile app release cycles from internal Drupal field refactors.',
      'Deferred resolvers batch Drupal entity storage loads just like DataLoader in Node.js.',
      'Field-level Drupal permissions enforce strict confidentiality on sensitive fields automatically.'
    ],
    checklist: [
      'Model clean presentation-agnostic Paragraphs/Fields reusable across web, iOS, and Android.',
      'Use DeferredResolver for all entity-reference fields to prevent N+1 database queries.',
      'Enable Persisted Queries in production so arbitrary ad-hoc GraphQL queries are blocked.',
      'Bubble CacheableMetadata on every custom GraphQL resolver.'
    ],
    faqs: [
      { q: 'Can one Drupal Content Hub power 20+ subsidiary or college websites?', a: 'Yes—using Domain Access or decoupled channel taxonomies, editors publish once and syndicate selectively across sub-brands.' },
      { q: 'How do we prevent slow nested GraphQL queries in Drupal?', a: 'Combine DeferredResolver entity batching, persisted query allow-lists, and Varnish/CDN edge caching.' },
      { q: 'Does Drupal GraphQL respect Content Moderation draft states?', a: 'Yes, anonymous tokens only resolve published revisions while authorized preview tokens can inspect moderated drafts.' }
    ]
  },
  'drupal-multilingual-enterprise-guide': {
    categoryKey: 'drupal',
    categoryLabel: 'Drupal',
    badge: 'Drupal · Multilingual Governance',
    title: 'Enterprise Multilingual Drupal Guide: Arabic RTL, Field-Level Translation & Moderation Workflows',
    summary: 'Configure Drupal’s 4 core multilingual modules for sovereign-grade bilingual (Arabic/English) and multi-language platforms—with independent per-language moderation states and XLIFF TMS integration.',
    readTime: '8 min read',
    relatedServiceSlug: 'drupal-development',
    relatedServiceTitle: 'Drupal Website Development',
    focusPoints: [
      'Drupal’s four core multilingual pillars: Language, Interface Translation, Content Translation, and Configuration Translation.',
      'Field-level translation granularity—translating titles, body copy, and image alt text while sharing dates, prices, and taxonomy references.',
      'Independent Content Moderation per language so updating an Arabic translation draft never unpublishes the live English page.',
      'Integrating Translation Management Tool (TMGMT) for XLIFF export/import and translation teams.'
    ],
    takeaways: [
      'Drupal translates entities at the field level on a single Node ID rather than duplicating disconnected posts.',
      'Configuration Translation localizes Views titles, blocks, emails, and form labels cleanly in YAML.',
      'Warning: For Paragraphs modules, enable translation on the inner Paragraph fields—not on the host Entity Reference Revisions field!'
    ],
    checklist: [
      'Enable Language, Content Translation, Config Translation, and Interface Translation in core.',
      'Configure URL prefix negotiation (/ar and /en) with clean Pathauto patterns per language.',
      'Verify bidirectional hreflang links and canonical URLs on translated nodes and Views.',
      'Commit translated config overrides cleanly via drush config:export.'
    ],
    faqs: [
      { q: 'Why is Drupal’s Paragraphs translation rule so important?', a: 'Marking the host reference field translatable breaks revision syncing; Drupal best practice keeps the reference field untranslatable and translates fields inside each Paragraph type.' },
      { q: 'Can Arabic and English editors have separate permissions?', a: 'Yes, granular translation permissions and TMGMT queues allow dedicated Arabic and English localization reviewers.' },
      { q: 'How many languages can Drupal handle natively?', a: 'Over 100 languages out of the box, including full RTL support for Arabic, Urdu, and Persian.' }
    ]
  },
  'drupal-speed-and-performance': {
    categoryKey: 'drupal',
    categoryLabel: 'Drupal',
    badge: 'Drupal · High-Concurrency Speed',
    title: 'Drupal 10/11 Performance Engineering: Render Cache Tags, BigPipe, Redis & Varnish Edge Caching',
    summary: 'How Drupal serves millions of concurrent requests with <50ms TTFB using Cache Tags, Cache Contexts, Dynamic Page Cache, BigPipe streaming, Redis object caching, and Varnish/CDN Surrogate-Keys.',
    readTime: '8 min read',
    relatedServiceSlug: 'speed-optimization',
    relatedServiceTitle: 'Website Speed & Core Web Vitals Optimization',
    focusPoints: [
      'Drupal’s three-dimensional cache metadata: Cache Keys, Cache Contexts (user.roles, languages), and granular Cache Tags (node:42).',
      'Internal Page Cache + Varnish/Cloudflare Surrogate-Key purging for anonymous traffic vs Dynamic Page Cache + BigPipe for logged-in portals.',
      'Offloading cache_* database bins to Redis (phpredis) to eliminate SQL bottlenecks under heavy traffic.',
      'Responsive image styles with native WebP conversion and Twig CSS/JS asset aggregation.'
    ],
    takeaways: [
      'Cache Tags solve cache invalidation cleanly: editing Node 42 purges every page and View listing Node 42 while keeping 99.9% of cached pages warm.',
      'BigPipe streams the cached page shell immediately and fills personalized user blocks asynchronously.',
      'Avoid setting max-age = 0 on global blocks—doing so disables page caching for every page containing that block; use #lazy_builder instead.'
    ],
    checklist: [
      'Enable Internal Page Cache, Dynamic Page Cache, and BigPipe core modules.',
      'Route cache backends to Redis via settings.php in production.',
      'Audit custom Views to ensure caching is set to Tag-based rather than None.',
      'Verify X-Drupal-Cache: HIT and X-Drupal-Dynamic-Cache: HIT response headers.'
    ],
    faqs: [
      { q: 'Why is X-Drupal-Dynamic-Cache returning UNCACHEABLE on our custom page?', a: 'A block or controller on the page likely sets cache max-age: 0 or uses a high-cardinality context like user instead of delegating personalized snippets to a #lazy_builder.' },
      { q: 'How does Varnish or Fastly know which URLs contain updated Drupal nodes?', a: 'The Purge module outputs Drupal Cache Tags into HTTP Surrogate-Key headers so the CDN invalidates exact matching edges instantly.' },
      { q: 'Does Drupal convert uploaded JPEGs/PNGs to WebP natively?', a: 'Yes, Drupal 10/11 includes a built-in "Convert to WebP" image style effect in core.' }
    ]
  },
  'drupal-security-best-practices': {
    categoryKey: 'drupal',
    categoryLabel: 'Drupal',
    badge: 'Drupal · Sovereign Security',
    title: 'Drupal Security Hardening Guide: Drupal Security Team Standards, Composer Audits & NCA Compliance',
    summary: 'Why ministries, central banks, and defense agencies trust Drupal—covering Twig auto-escaping, Database API SQLi immunity, read-only Config Management, TFA/SAML SSO, and Wednesday SA patch governance.',
    readTime: '8 min read',
    relatedServiceSlug: 'website-security',
    relatedServiceTitle: 'Website Security & Cyber Hardening',
    focusPoints: [
      'Dedicated Drupal Security Team governance reviewing core and opted-in contributed modules with coordinated Wednesday advisories.',
      'Built-in code defenses: Twig automatic XSS escaping, parameterized Database API, Form API CSRF tokens, and Private File System ACLs.',
      'Immutable production security: locking configuration changes in prod (config_readonly), Composer audit CI gates, and disabling unused UI modules.',
      'Enterprise identity & audit compliance: SAML 2.0 / OIDC / Nafath SSO, Two-Factor Auth (TFA), Security Kit headers, and syslog SIEM streaming.'
    ],
    takeaways: [
      'Only install contributed modules displaying the green shield icon ("Covered by the Drupal Security Advisory Policy").',
      'Sensitive tender uploads and KYC documents must use private:// storage outside the public webroot so Drupal verifies permissions on every download.',
      'Composer audit inside CI blocks any build containing known CVEs automatically.'
    ],
    checklist: [
      'Set $settings["file_private_path"] outside the public webroot (docroot/web).',
      'Uninstall Views UI, Field UI, and Devel modules on production environments (enable via config split in dev only).',
      'Enforce TFA/SSO, Password Policy, and Login Security brute-force lockouts.',
      'Reserve a weekly Wednesday maintenance window for Drupal Security Advisories.'
    ],
    faqs: [
      { q: 'Why do governments worldwide standardize on Drupal for high-security portals?', a: 'Because Drupal combines enterprise RBAC, field-level permissions, strict Twig/SQL abstractions, configuration-as-code auditability, and a dedicated institutional Security Team.' },
      { q: 'How do we prevent admins from installing untested modules on production?', a: 'Mount production codebases read-only from CI artifacts and enforce config_readonly so all changes flow through Git pull requests.' },
      { q: 'How are private PDFs protected from direct URL guessing in Drupal?', a: 'Files stored in private:// are served through Drupal’s PHP/X-Accel-Redirect controller after running hook_file_download() access checks.' }
    ]
  },
  'drupal-migration-guide': {
    categoryKey: 'drupal',
    categoryLabel: 'Drupal',
    badge: 'Drupal · Migrate API',
    title: 'Enterprise Drupal Migration Guide: Upgrading Legacy Drupal 7/8/9 or Custom CMS to Drupal 10/11',
    summary: 'Execute zero-data-loss enterprise migrations using Drupal’s core ETL Migrate API (Source, Process, Destination YAML pipelines), Upgrade Status readiness audits, incremental delta syncs, and SEO redirect mapping.',
    readTime: '9 min read',
    relatedServiceSlug: 'drupal-development',
    relatedServiceTitle: 'Drupal Website Development',
    focusPoints: [
      'Distinguishing Drupal 7 → 10/11 (full structural rebuild + Migrate API ETL) vs Drupal 9 → 10 → 11 (smooth Composer + Drupal Rector modernization).',
      'Writing repeatable YAML migration pipelines with migrate_plus and migrate_tools (--update, --rollback, highwater delta runs).',
      'Converting legacy inline HTML blobs and file attachments cleanly into Media Library entities and structured Paragraphs.',
      'Importing legacy URL aliases into Drupal’s Redirect module so 100% of historical search authority carries forward.'
    ],
    takeaways: [
      'Drupal’s Migrate API supports incremental delta runs—allowing editors to keep publishing on the legacy portal right up until cutover night.',
      'Migrate into Drupal Media entities rather than legacy raw Image fields so assets become reusable across the portal.',
      'Drupal Rector automates ~80% of deprecated API updates when moving custom modules from Drupal 9/10 to Drupal 11.'
    ],
    checklist: [
      'Run the Upgrade Status module + drupal-rector on all custom modules first.',
      'Map every legacy content type, taxonomy, user role, and file attachment in a Migration Specification sheet.',
      'Preserve node IDs or generate automatic 301 redirects from legacy paths to new Pathauto URLs.',
      'Verify row counts and spot-check Arabic/English encoding before DNS cutover.'
    ],
    faqs: [
      { q: 'Is Drupal 7 officially End-of-Life?', a: 'Yes, Drupal 7 reached official End-of-Life in January 2025—making migration to Drupal 10/11 essential for security and compliance.' },
      { q: 'Can Drupal Migrate API import from WordPress, SharePoint, Oracle, or JSON APIs?', a: 'Yes! Source plugins natively read SQL databases, CSV, XML, SOAP, and REST/JSON feeds into Drupal entities.' },
      { q: 'Will future upgrades from Drupal 10 to Drupal 11 or 12 require another rebuild?', a: 'No. Since Drupal 8+, major upgrades are incremental Composer updates removing deprecated code rather than architectural rewrites.' }
    ]
  },

  // ==================== WORDPRESS (+6 new) ====================
  'essential-wordpress-plugins': {
    categoryKey: 'wordpress',
    categoryLabel: 'WordPress',
    badge: 'WordPress · Curated Stack',
    title: 'Essential WordPress Plugins for Enterprise Performance, Security & SEO (Zero-Bloat Stack)',
    summary: 'How senior WordPress engineers select a lean, conflict-free plugin stack—evaluating code quality, database query overhead, autoloaded wp_options impact, and active security governance.',
    readTime: '7 min read',
    relatedServiceSlug: 'wordpress-development',
    relatedServiceTitle: 'WordPress Website Development',
    focusPoints: [
      'Why plugin quality matters far more than raw plugin count—auditing PHP memory, SQL queries, and frontend CSS/JS injection with Query Monitor.',
      'Curated enterprise categories: Custom Content Modeling (ACF Pro), Technical SEO (Rank Math / Yoast), Caching (Redis Object Cache + WP Rocket), and Backups.',
      'Replacing 10+ single-purpose micro-plugins with clean 20-line Must-Use (mu-plugins) PHP hooks.',
      'Preventing wp_options autoload bloat left behind by poorly coded plugins.'
    ],
    takeaways: [
      'One bloated visual slider plugin hurts speed and security more than 15 lean, well-engineered backend plugins.',
      'Never install overlapping caching, SEO, or security plugins on the same WordPress instance.',
      'Audit autoloaded wp_options regularly—keep total autoloaded data well under 800KB.'
    ],
    checklist: [
      'Profile every candidate plugin on staging using Query Monitor before production approval.',
      'Deactivate and dequeue plugin CSS/JS on pages where the plugin is not rendered (e.g., contact form scripts only on /contact).',
      'Verify last update date, PHP 8.3 compatibility, and Patchstack vulnerability history.',
      'Document every installed plugin’s purpose and owner in the project handover runbook.'
    ],
    faqs: [
      { q: 'How many plugins are too many on a corporate WordPress site?', a: 'Aim for a lean 8–15 well-vetted plugins; quality and asset discipline matter more than an arbitrary number.' },
      { q: 'What are WordPress mu-plugins (Must-Use plugins)?', a: 'Lightweight PHP files in wp-content/mu-plugins/ that load automatically and cannot be accidentally deactivated by content editors—ideal for CPT registrations and security hooks.' },
      { q: 'Should we enable automatic updates for all plugins in production?', a: 'Test major updates on staging via CI/Visual Regression first, while applying vetted minor security patches promptly.' }
    ]
  },
  'woocommerce-store-setup': {
    categoryKey: 'wordpress',
    categoryLabel: 'WordPress',
    badge: 'WordPress · WooCommerce',
    title: 'Enterprise WooCommerce Store Setup Guide: HPOS, Saudi Payment Gateways, ZATCA & High-Speed Checkout',
    summary: 'End-to-end engineering blueprint for building scalable WooCommerce stores—enabling High-Performance Order Storage (HPOS), integrating Mada/Apple Pay/Tabby/Tamara, ZATCA e-invoicing, and Redis scaling.',
    readTime: '9 min read',
    relatedServiceSlug: 'ecommerce-development',
    relatedServiceTitle: 'E-Commerce Website Development',
    focusPoints: [
      'Enabling WooCommerce High-Performance Order Storage (HPOS) custom tables for 5x faster order creation and admin filtering.',
      'Integrating GCC & international payment gateways (Moyasar, HyperPay, PayTabs, Stripe) supporting Mada, Apple Pay, Tabby, and Tamara BNPL.',
      'Automating shipping carrier labels & webhooks (Aramex, SMSA, SPL, DHL) plus 15% VAT / ZATCA QR tax invoicing.',
      'Smart cache bypass rules keeping catalog pages cached at the CDN edge while cart/checkout remain dynamic.'
    ],
    takeaways: [
      'Always enable HPOS (custom order tables) on WooCommerce so orders never bottleneck the wp_postmeta table.',
      'Dequeue WooCommerce cart-fragments AJAX on static informational pages to cut TTFB immediately.',
      'Frictionless one-page mobile checkout with Apple Pay and Mada boosts GCC conversion rates dramatically.'
    ],
    checklist: [
      'Turn on High-Performance Order Storage (HPOS) under WooCommerce → Settings → Advanced → Features.',
      'Configure Redis Object Cache alongside NGINX FastCGI cache bypassing woocommerce_items_in_cart cookies.',
      'Test full payment webhook callbacks (paid, failed, refunded) in sandbox before live launch.',
      'Implement Product Schema.org JSON-LD (price, currency, availability, GTIN) for Google Merchant Center.'
    ],
    faqs: [
      { q: 'Can WooCommerce handle 50,000+ SKUs and high flash-sale traffic?', a: 'Yes—when deployed on dedicated cloud VPS/Kubernetes with PHP 8.3, MariaDB/MySQL tuned indexes, HPOS enabled, ElasticPress faceted search, and Redis caching.' },
      { q: 'Does WooCommerce support Saudi Mada, Tabby, and Tamara?', a: 'Yes, official certified plugins from Moyasar, HyperPay, PayTabs, Tabby, and Tamara integrate natively with WooCommerce.' },
      { q: 'Why choose WooCommerce over SaaS store builders?', a: '100% source-code ownership, zero platform transaction fees, custom ERP/WMS database sync, and limitless SEO flexibility.' }
    ]
  },
  'wordpress-corporate-website': {
    categoryKey: 'wordpress',
    categoryLabel: 'WordPress',
    badge: 'WordPress · Corporate Portals',
    title: 'Building High-Authority Corporate Websites with Custom WordPress & Gutenberg Architecture',
    summary: 'How holding groups, contracting firms, and enterprises build prestige bilingual corporate portals on WordPress—featuring investor governance hubs, tender prequalification libraries, and bespoke block themes.',
    readTime: '8 min read',
    relatedServiceSlug: 'corporate-websites',
    relatedServiceTitle: 'Corporate Website Development',
    focusPoints: [
      'Architecting Custom Post Types (Projects, Subsidiaries, Executive Board, Press Releases, Careers) with clean taxonomies.',
      'Building bespoke Gutenberg blocks with ACF Blocks / native block.json + theme.json design tokens instead of heavy page builders.',
      'Bilingual Arabic RTL & English LTR parity with Polylang Pro / WPML, localized slugs, and executive PDF profile hubs.',
      'Hardened enterprise security, role-based editorial permissions, and CRM lead routing.'
    ],
    takeaways: [
      'Custom Gutenberg blocks lock brand typography and spacing tokens while giving PR teams effortless drag-and-drop page assembly.',
      'Dedicated Case Study and Prequalification sections directly strengthen vendor evaluation scores during procurement reviews.',
      'Zero page-builder DOM bloat ensures instant mobile loading for executives and procurement officers.'
    ],
    checklist: [
      'Lock color palettes, typography scales, and spacing inside theme.json so editors stay on-brand.',
      'Structure Organization, BreadcrumbList, and NewsArticle Schema.org markup.',
      'Connect inquiry forms directly to HubSpot/Salesforce/Zoho CRM + encrypted email notifications.',
      'Optimize executive PDF company profiles and ISO certificates for fast CDN delivery.'
    ],
    faqs: [
      { q: 'Why avoid heavy third-party visual page builders on corporate portals?', a: 'Multipurpose builders wrap every heading in 8–12 nested divs and load megabytes of CSS/JS—hurting Core Web Vitals and long-term maintainability.' },
      { q: 'Can non-technical PR and HR staff manage a custom WordPress portal easily?', a: 'Yes—custom post types and tailored Gutenberg blocks present simple labeled fields while handling all responsive design automatically.' },
      { q: 'How is bilingual content managed in corporate WordPress?', a: 'Via Polylang Pro or WPML Multisite, pairing every English page with its exact Arabic RTL counterpart and hreflang tags.' }
    ]
  },
  'wordpress-cost-guide': {
    categoryKey: 'wordpress',
    categoryLabel: 'WordPress',
    badge: 'WordPress · Budgeting & ROI',
    title: 'WordPress Website Cost Guide: Transparent Enterprise Pricing, Scope Factors & 3-Year TCO',
    summary: 'Understand what actually drives professional WordPress & WooCommerce development budgets—comparing template setups vs custom engineering, hosting tiers, integrations, security SLAs, and Total Cost of Ownership.',
    readTime: '7 min read',
    relatedServiceSlug: 'wordpress-development',
    relatedServiceTitle: 'WordPress Website Development',
    focusPoints: [
      'Key cost drivers: UX/UI bespoke design vs pre-made templates, bilingual RTL/LTR localization, custom CPTs, and ERP/payment integrations.',
      'Comparing 3 tiers: Lean Business Presence, Custom Corporate Bilingual Portal, and Enterprise WooCommerce / Custom Portal.',
      'Hidden costs of cheap template builds: slow PageSpeed penalties, plugin license sprawl, security cleanups, and early rebuilds.',
      'Calculating 36-month Total Cost of Ownership (cloud hosting, CDN/WAF, premium licenses, and preventative maintenance SLAs).'
    ],
    takeaways: [
      'WordPress software itself is free (GPL open source), so investment goes 100% into custom UX, clean engineering, integrations, and infrastructure.',
      'A clean custom-coded theme typically pays for itself within Year 1 via lower hosting needs, zero rebuild debt, and higher conversion rates.',
      'Always separate one-time build CAPEX from predictable annual hosting & SLA OPEX in project budgets.'
    ],
    checklist: [
      'Define exact page templates, languages, user roles, and third-party API integrations in a written Scope of Work.',
      'Confirm full Git repository and hosting account ownership in the development contract.',
      'Budget for managed cloud hosting with staging environments and daily automated backups.',
      'Include post-launch Core Web Vitals and security hardening sign-off criteria.'
    ],
    faqs: [
      { q: 'Why do WordPress quotes vary so widely between freelancers and engineering agencies?', a: 'Low quotes typically install a $60 multipurpose theme with 30 plugins, whereas engineering builds deliver bespoke Figma UX, clean PHP/Tailwind code, bilingual SEO, and security hardening.' },
      { q: 'Are there recurring monthly platform commissions on WordPress?', a: 'Zero. Unlike SaaS platforms, WordPress charges 0% revenue share—your only ongoing costs are cloud hosting, domain, and optional plugin/SLA renewals.' },
      { q: 'Do I own 100% of the code after launch?', a: 'Yes—with self-hosted WordPress you own all source code, database records, and media assets with full portability.' }
    ]
  },
  'wordpress-org-vs-com': {
    categoryKey: 'wordpress',
    categoryLabel: 'WordPress',
    badge: 'WordPress · Platform Architecture',
    title: 'WordPress.org vs WordPress.com: Complete Technical & Commercial Comparison for Businesses',
    summary: 'Clarifying the #1 misconception in the WordPress ecosystem—comparing open-source self-hosted WordPress.org against Automattic’s commercial hosted WordPress.com across code control, costs, SEO, and compliance.',
    readTime: '7 min read',
    relatedServiceSlug: 'wordpress-development',
    relatedServiceTitle: 'WordPress Website Development',
    focusPoints: [
      'Architectural distinction: open-source software you deploy on any cloud (WordPress.org) vs a proprietary multi-tier SaaS host (WordPress.com).',
      'Server & DevOps control: custom NGINX rules, Redis, SSH/WP-CLI, custom PHP extensions, and Saudi data-residency hosting on self-hosted WordPress.org.',
      'Plugin, custom theme, and database access restrictions on lower WordPress.com plans.',
      'Step-by-step migration path from WordPress.com to self-hosted cloud infrastructure with zero SEO loss.'
    ],
    takeaways: [
      'When enterprises say "built on WordPress," 99% mean self-hosted open-source WordPress.org on dedicated cloud infrastructure.',
      'Self-hosted WordPress.org allows hosting inside local Saudi cloud regions (AWS Bahrain/ME, GCP Dammam, Oracle Jeddah) for regulatory data residency.',
      'Migrating from WordPress.com to self-hosted WordPress.org preserves all posts, media, and URLs cleanly.'
    ],
    checklist: [
      'Choose self-hosted WordPress.org for all commercial, e-commerce, and institutional portals.',
      'Deploy onto cloud infrastructure with SSH, WP-CLI, Git CI/CD, and isolated staging.',
      'Verify local data-residency requirements if handling regulated government or healthcare inquiries.',
      'Keep domain DNS managed independently on Cloudflare or Route53.'
    ],
    faqs: [
      { q: 'Can we install custom themes and WooCommerce on free/starter WordPress.com plans?', a: 'No—WordPress.com restricts custom plugins and themes to higher-priced commercial tiers, whereas self-hosted WordPress.org has zero restrictions from day one.' },
      { q: 'Can we host WordPress.org inside Saudi Arabia?', a: 'Yes, self-hosted WordPress deploys on any Saudi-region cloud provider (Google Cloud Dammam, Oracle Cloud Riyadh/Jeddah, Alibaba/STC Cloud).' },
      { q: 'Is migrating away from WordPress.com difficult?', a: 'No—content, media, and database tables export cleanly into self-hosted WordPress with full URL preservation.' }
    ]
  },
  'wordpress-seo-guide': {
    categoryKey: 'wordpress',
    categoryLabel: 'WordPress',
    badge: 'WordPress · Search Architecture',
    title: 'WordPress Technical SEO Guide: Crawl Budget, Schema JSON-LD, Silo Architecture & Core Web Vitals',
    summary: 'Go beyond green SEO plugin lights—mastering WordPress permalink architecture, taxonomy noindex pruning, custom Schema.org graphs, bilingual hreflang, internal topic clusters, and server-level CWV speed.',
    readTime: '8 min read',
    relatedServiceSlug: 'technical-seo',
    relatedServiceTitle: 'Technical SEO & Search Architecture',
    focusPoints: [
      'Eliminating WordPress index bloat: disabling thin author archives, date archives, media attachment pages, and uncurated tag archives.',
      'Designing semantic topical silos linking pillar service pages (/services/...) with supporting technical guides (/articles/...).',
      'Deploying rich interconnected Schema.org JSON-LD graphs (Organization, ProfessionalService, Article, FAQPage, Product, BreadcrumbList).',
      'Optimizing server TTFB (<200ms), LCP (<1.8s), and CLS (0.00) to win competitive SERP rankings.'
    ],
    takeaways: [
      'An SEO plugin only outputs meta tags—real rankings come from clean information architecture, crawl efficiency, Core Web Vitals, and authoritative content.',
      'Redirect WordPress media attachment URLs to their parent post immediately so thin image pages never dilute site quality.',
      'Never change live permalink structures without a tested 1:1 regex 301 redirect map.'
    ],
    checklist: [
      'Set Permalinks to clean /%postname%/ or structured category paths before launch.',
      'Noindex thin tag, date, search-result, and single-author archive pages.',
      'Add bidirectional hreflang tags on all Arabic and English page pairs.',
      'Audit XML sitemaps in Google Search Console to ensure 100% of submitted URLs return HTTP 200 canonical pages.'
    ],
    faqs: [
      { q: 'Rank Math vs Yoast SEO vs SEOPress: which is best?', a: 'All three handle core metadata well; Rank Math and SEOPress offer lightweight modular code and rich built-in Schema builders without heavy add-on sprawl.' },
      { q: 'Why did Google Search Console report thousands of "Crawled - currently not indexed" URLs?', a: 'Usually due to unchecked tag archives, ?replytocom= comment links, faceted filter query strings, or attachment pages wasting crawl budget.' },
      { q: 'Does dark-mode luxury design hurt or help SEO?', a: 'Google renders CSS fully—high-contrast dark luxury designs with fast Core Web Vitals and strong user dwell time perform excellently in search.' }
    ]
  },

  // ==================== SHOPIFY (+6 new) ====================
  'shopify-store-setup': {
    categoryKey: 'shopify',
    categoryLabel: 'Shopify',
    badge: 'Shopify · Store Launch',
    title: 'Complete Shopify Store Setup Guide: OS 2.0 Architecture, Saudi/GCC Localization & Tax Compliance',
    summary: 'Step-by-step blueprint for launching a conversion-ready Shopify store—configuring Online Store 2.0 JSON templates, Metafields, Arabic/English Shopify Markets, VAT rules, and clean collection architecture.',
    readTime: '8 min read',
    relatedServiceSlug: 'shopify-development',
    relatedServiceTitle: 'Shopify Store Development',
    focusPoints: [
      'Structuring Collections, Product Metafields, and Metaobjects for rich specifications without hardcoding duplicate theme templates.',
      'Configuring Shopify Markets for multi-currency (SAR, AED, USD, EUR) and native bilingual Arabic RTL / English LTR storefronts.',
      'Setting up GCC 15%/5% tax-inclusive pricing rules, shipping zones, and automated transactional notifications.',
      'Connecting custom domains with SPF/DKIM/DMARC authentication and Google Merchant Center feeds.'
    ],
    takeaways: [
      'Shopify Metafields + OS 2.0 dynamic sources let every product render unique sizing charts, ingredients, or warranty specs cleanly.',
      'Configure Shopify Markets with subfolders (/ar and /en) for consolidated domain SEO authority.',
      'Clean handle naming from day one avoids redirect chains later.'
    ],
    checklist: [
      'Define Product & Collection Metafield schemas before bulk-importing catalog CSVs.',
      'Configure tax-inclusive display where required by Saudi Ministry of Commerce & ZATCA guidelines.',
      'Verify RTL layout mirroring across cart drawers, Predictive Search, and checkout branding.',
      'Set up Google Analytics 4 + Meta/TikTok/Snap Conversions API via Shopify Customer Events pixels.'
    ],
    faqs: [
      { q: 'Can one Shopify store sell in both Arabic and English with SAR and AED currencies?', a: 'Yes—Shopify Markets + Translate & Adapt natively serve localized languages and currencies under one unified inventory.' },
      { q: 'Should we use subdomains or subfolders for bilingual Shopify SEO?', a: 'Subfolders (domain.com/ar and domain.com/en) consolidate backlink authority onto a single root domain.' },
      { q: 'Does Shopify cap product or bandwidth limits?', a: 'Shopify includes unlimited bandwidth and PCI-DSS Level 1 cloud hosting across all standard plans.' }
    ]
  },
  'shopify-apps-and-conversion': {
    categoryKey: 'shopify',
    categoryLabel: 'Shopify',
    badge: 'Shopify · CRO & Apps',
    title: 'Shopify Conversion Rate Optimization (CRO) & App Governance Without Slowing Down Your Store',
    summary: 'Increase Average Order Value (AOV) and checkout conversion on Shopify while auditing Theme App Extensions, eliminating legacy script-tag bloat, and building native Liquid features instead of heavy apps.',
    readTime: '8 min read',
    relatedServiceSlug: 'shopify-development',
    relatedServiceTitle: 'Shopify Store Development',
    focusPoints: [
      'High-impact CRO patterns: sticky mobile Add-to-Cart bars, free-shipping progress meters in slide-out cart drawers, trust badges, and BNPL messaging.',
      'Why installing 25 third-party Shopify apps injects megabytes of render-blocking third-party JS that kills mobile conversion.',
      'Preferring Shopify OS 2.0 Theme App Extensions and Web Pixels API over legacy theme-modifying apps.',
      'Replacing monthly recurring micro-apps (announcement bars, tabs, size charts, bundles) with zero-latency native Liquid & Shopify Functions.'
    ],
    takeaways: [
      'Every 100ms of mobile JavaScript delay measurably reduces Add-to-Cart rates—audit every app’s JS payload in Chrome Coverage.',
      'Uninstalling legacy Shopify apps does not always remove leftover {% render %} snippets left inside theme.liquid; audit code after removal.',
      'Slide-out AJAX cart drawers with tiered bundle/free-shipping nudges lift AOV without interrupting browsing.'
    ],
    checklist: [
      'Only approve "Built for Shopify" certified apps using Theme App Extensions.',
      'Build announcement bars, accordions, upsell blocks, and free-shipping meters natively in Liquid.',
      'Migrate tracking scripts into Shopify’s sandboxed Customer Events Web Pixels manager.',
      'Audit theme.liquid quarterly for orphaned script tags from uninstalled apps.'
    ],
    faqs: [
      { q: 'Why did our Shopify speed score drop from 90 to 42 after installing marketing apps?', a: 'Frontend widget apps (chat bubbles, review carousels, popups) load external JS bundles on the main thread; defer non-critical widgets until user scroll/interaction.' },
      { q: 'What does the "Built for Shopify" badge guarantee?', a: 'Shopify verifies that the app uses modern Theme App Extensions, meets strict Core Web Vitals impact thresholds, and embeds cleanly in Admin.' },
      { q: 'Can product bundles be built without slowing down the storefront?', a: 'Yes, Shopify’s native Bundles API and Shopify Functions execute bundle logic directly on Shopify’s backend.' }
    ]
  },
  'shopify-payment-gateways-guide': {
    categoryKey: 'shopify',
    categoryLabel: 'Shopify',
    badge: 'Shopify · Payments & BNPL',
    title: 'Shopify Payment Gateways Guide for Saudi Arabia, UAE & Global Stores (Mada, Apple Pay, Tabby & Tamara)',
    summary: 'Configure high-acceptance payment gateways on Shopify across Saudi Arabia, the GCC, and international markets—integrating Mada, Apple Pay, Visa/Mastercard, Tabby, Tamara, and multi-currency payouts.',
    readTime: '8 min read',
    relatedServiceSlug: 'shopify-development',
    relatedServiceTitle: 'Shopify Store Development',
    focusPoints: [
      'Why Mada and Apple Pay acceptance is non-negotiable for Saudi e-commerce conversion (representing the vast majority of local card transactions).',
      'Integrating certified GCC Shopify payment apps: Tap Payments, PayTabs, Moyasar, HyperPay, Checkout.com, and Stripe (UAE/Global).',
      'Adding Buy Now, Pay Later (Tabby & Tamara) with on-page installment breakdown widgets on product and cart pages.',
      'Understanding gateway fees vs Shopify third-party transaction fees across Basic, Shopify, Advanced, and Plus tiers.'
    ],
    takeaways: [
      'Displaying Tabby and Tamara 4-installment badges directly beneath product prices lifts AOV by 25–45% on mid-to-high ticket stores.',
      'Calculate break-even volume between Shopify Basic (2% third-party fee), Shopify (1%), and Advanced (0.6%) to save thousands monthly.',
      'Enable 3D Secure 2.0 frictionless authentication to minimize false card declines.'
    ],
    checklist: [
      'Verify Commercial Registration (CR) / Freelance Document KYC documents match bank IBAN beneficiary names exactly.',
      'Place Mada, Apple Pay, Visa, Tabby, and Tamara icons prominently in the product buy-box and footer.',
      'Restrict Cash on Delivery (COD) via Shopify Checkout Rules / Functions for high-risk regions or oversized orders.',
      'Run end-to-end live 1 SAR/USD test transactions + partial refunds across every active gateway before launch.'
    ],
    faqs: [
      { q: 'Does Mada work on Shopify in Saudi Arabia?', a: 'Yes—certified Saudi gateways such as Moyasar, Tap Payments, PayTabs, and HyperPay support Mada and Apple Pay natively on Shopify checkout.' },
      { q: 'How do we reduce Cash on Delivery (COD) return rates on Shopify?', a: 'Incentivize prepaid Mada/Apple Pay/BNPL with free or priority shipping, add COD fees, and verify COD orders via automated WhatsApp OTP confirmation.' },
      { q: 'When should a high-volume store upgrade from Basic to Advanced Shopify?', a: 'As soon as the 1.4% savings on third-party payment fees exceeds the monthly plan difference (~$20,000+/month GMV).' }
    ]
  },
  'shopify-speed-optimization': {
    categoryKey: 'shopify',
    categoryLabel: 'Shopify',
    badge: 'Shopify · Core Web Vitals',
    title: 'Shopify Speed Optimization: Liquid Profiling, Responsive CDN Images & Sub-Second Mobile UX',
    summary: 'Engineer 95+ Lighthouse performance and instant mobile Interaction to Next Paint (INP) on Shopify—optimizing Liquid loops, image_tag srcset, font preloading, and third-party script execution.',
    readTime: '7 min read',
    relatedServiceSlug: 'speed-optimization',
    relatedServiceTitle: 'Website Speed & Core Web Vitals Optimization',
    focusPoints: [
      'Profiling server-side Liquid render times using the Shopify Theme Inspector for Chrome extension to eliminate nested collection/variant loops.',
      'Using Liquid image_tag with sizes, widths, and preload: true on above-the-fold hero banners while lazy-loading below-the-fold grids.',
      'Replacing heavy jQuery/Slick/Swiper libraries with lightweight native CSS Scroll Snap and Web Components.',
      'Controlling third-party analytics, heatmaps, and live-chat scripts via Web Pixels and interaction-triggered loading.'
    ],
    takeaways: [
      'Never set loading="lazy" on your main hero banner or first product gallery image—doing so delays LCP by 400–900ms.',
      'Shopify’s global Fastly CDN automatically negotiates AVIF and WebP when you use standard image_url | image_tag filters.',
      'Nested {% for product in collections.all.products %} loops inside Liquid templates silently spike server TTFB.'
    ],
    checklist: [
      'Profile collection and product templates with Shopify Theme Inspector to keep Liquid render under 150ms.',
      'Set preload: true and fetchpriority="high" on the primary LCP image.',
      'Load section-specific CSS/JS only when that section is mounted on the current template.',
      'Verify real-user CrUX Core Web Vitals inside Shopify Admin → Online Store → Web Performance.'
    ],
    faqs: [
      { q: 'Can we install caching plugins on Shopify like on WordPress?', a: 'No—Shopify already caches pages globally on Fastly CDN; speed gains come from clean Liquid code, proper responsive images, and eliminating third-party JS bloat.' },
      { q: 'Do "speed booster" apps that preload links actually improve Core Web Vitals?', a: 'Link hover prefetching speeds subsequent clicks, whereas initial LCP and INP only improve by fixing heavy images, fonts, and blocking scripts.' },
      { q: 'How many custom web fonts should a fast Shopify theme load?', a: 'At most 1–2 WOFF2 font families (2–3 weights) with font-display: swap.' }
    ]
  },
  'shopify-dropshipping-strategies': {
    categoryKey: 'shopify',
    categoryLabel: 'Shopify',
    badge: 'Shopify · Supply & Fulfillment',
    title: 'Modern Shopify Dropshipping & Private-Label Fulfillment: Supplier SLAs, Branding & Unit Economics',
    summary: 'Move beyond generic slow-shipping dropshipping—building defensible branded e-commerce on Shopify with vetted regional 3PL warehouses, automated ERP inventory sync, custom packaging, and profitable ROAS modeling.',
    readTime: '8 min read',
    relatedServiceSlug: 'shopify-development',
    relatedServiceTitle: 'Shopify Store Development',
    focusPoints: [
      'Why generic 20-day unbranded dropshipping fails in 2026—and how hybrid 3PL / private-label fulfillment wins repeat customers.',
      'Automated API synchronization of supplier stock levels, SKU variants, and tracking numbers to prevent overselling.',
      'Unit economics modeling: landed COGS, payment gateway fees, return rates, Customer Acquisition Cost (CAC), and LTV.',
      'Building genuine brand trust: custom photography, transparent delivery SLAs, local return addresses, and fast WhatsApp support.'
    ],
    takeaways: [
      'Fast 2–5 day regional 3PL fulfillment cuts refund disputes and ad-account feedback penalties dramatically.',
      'Real-time webhook stock sync prevents selling out-of-stock variants during paid TikTok/Meta campaign spikes.',
      'Transition top-performing hero SKUs into local 3PL bulk stock as soon as demand is validated.'
    ],
    checklist: [
      'Order physical quality-control samples of every hero SKU before launching paid ad spend.',
      'Automate real-time inventory and tracking-number webhooks between 3PL suppliers and Shopify.',
      'Publish clear, honest shipping & return timelines compliant with consumer protection laws.',
      'Build post-purchase email/WhatsApp retention flows so profitability scales beyond first-order ROAS.'
    ],
    faqs: [
      { q: 'Why do payment gateways freeze poorly structured dropshipping stores?', a: 'High chargeback rates (>1%) caused by uncommunicated 3-week shipping delays or missing tracking numbers; vetted fast 3PL fulfillment and automated tracking prevent holds.' },
      { q: 'Can Shopify route orders to multiple warehouses automatically?', a: 'Yes, Shopify Order Routing assigns line items to the closest stocked domestic or international fulfillment location automatically.' },
      { q: 'How do we transition from dropshipping to a private-label brand on the same store?', a: 'Move proven winning SKUs into local Saudi/UAE/US 3PL warehouses with custom branded packaging while keeping the exact same Shopify URLs and pixel data.' }
    ]
  },
  'shopify-plus-enterprise-guide': {
    categoryKey: 'shopify',
    categoryLabel: 'Shopify',
    badge: 'Shopify · Shopify Plus Enterprise',
    title: 'Shopify Plus Enterprise Guide: Checkout Extensibility, Shopify Functions, B2B Wholesale & ERP Sync',
    summary: 'An executive and technical guide to Shopify Plus—evaluating Checkout UI Extensions, Rust/WASM Shopify Functions, native B2B company catalogs, Expansion Stores, and SAP/Oracle/Odoo ERP integration.',
    readTime: '9 min read',
    relatedServiceSlug: 'shopify-development',
    relatedServiceTitle: 'Shopify Store Development',
    focusPoints: [
      'Customizing checkout safely with upgrade-safe Checkout UI Extensions (replacing deprecated checkout.liquid) for national address fields, loyalty redemption, and delivery slots.',
      'Running custom discount tiers, payment rules, and validation logic in <5ms on Shopify’s backend via WebAssembly Shopify Functions.',
      'Unified B2C + B2B Wholesale on one store: company profiles, custom price lists, net-30/60 payment terms, and minimum order quantities.',
      'Multi-region Expansion Stores (up to 9 included stores), higher GraphQL Admin API rate limits, and middleware ERP orchestration.'
    ],
    takeaways: [
      'Shopify Plus frequently pays for itself on payment fee reductions alone once monthly GMV crosses ~$800K–$1M+.',
      'Checkout Extensibility lets enterprises add custom checkout logic without ever breaking Apple Pay / Shop Pay security upgrades.',
      'Middleware queues (Celery/BullMQ/iPaaS) decouple flash-sale order surges from slower on-premise ERP databases.'
    ],
    checklist: [
      'Calculate fee savings + B2B license consolidation vs Plus subscription cost.',
      'Build custom promotions and cart validations using Shopify Functions rather than legacy Scripts.',
      'Design idempotent webhook + queue middleware between Shopify Plus and SAP / Dynamics / Odoo / NetSuite.',
      'Use Launchpad and Flow automations for scheduled flash sales and fraud review holds.'
    ],
    faqs: [
      { q: 'Is checkout.liquid still supported on Shopify Plus?', a: 'No—Shopify replaced checkout.liquid with Checkout Extensibility (UI Extensions, Branding API, Web Pixels, and Functions) for higher security and zero-maintenance upgrades.' },
      { q: 'Can Shopify Plus run both retail D2C and B2B dealer portals simultaneously?', a: 'Yes, native B2B on Shopify Plus shows wholesale buyers their negotiated company price lists, volume tiers, and net payment terms upon login.' },
      { q: 'How does Shopify Plus handle massive White Friday / Ramadan flash sales?', a: 'Shopify Plus provides unlimited burst checkout capacity, bot protection, and elevated API throughput tested at tens of thousands of checkouts per minute.' }
    ]
  },

  // ==================== OPENCART (+7 new) ====================
  'opencart-theme-design': {
    categoryKey: 'opencart',
    categoryLabel: 'OpenCart',
    badge: 'OpenCart · Bespoke Theme UX',
    title: 'Custom OpenCart 4 Theme Design & Twig Architecture: Fast RTL/LTR Storefronts Without Bloat',
    summary: 'How to design and build bespoke, sub-second OpenCart 4 storefronts using Twig templates, Bootstrap 5 / Tailwind CSS, native Arabic RTL support, and clean Event-system extensions instead of heavy commercial themes.',
    readTime: '8 min read',
    relatedServiceSlug: 'opencart-development',
    relatedServiceTitle: 'OpenCart Store Development',
    focusPoints: [
      'OpenCart 4’s clean MVC-L separation (Model, View Twig, Controller, Language) enabling rapid custom storefront engineering.',
      'Why custom Twig themes outperform bloated 2,000-option commercial themes (like unoptimized Journal builds) on mobile Core Web Vitals.',
      'Native bilingual Arabic RTL & English LTR architecture with localized language packs and logical CSS layouts.',
      'Modifying controller data cleanly via OpenCart 4’s Event System rather than fragile vQmod/OCMOD XML regex patches.'
    ],
    takeaways: [
      'OpenCart’s lightweight PHP footprint delivers 150ms server responses when paired with a clean custom Twig theme.',
      'Use OpenCart 4 Startup/Event hooks for template overrides so core upgrades never overwrite custom storefront code.',
      'Simplified single-screen mobile checkout dramatically reduces OpenCart cart abandonment.'
    ],
    checklist: [
      'Package custom themes as clean OpenCart 4 extensions inside /extension/yourbrand/catalog/view/template/.',
      'Test every catalog, cart, and account Twig view in both English LTR and Arabic RTL.',
      'Serve responsive WebP product thumbnails with explicit width and height attributes.',
      'Streamline guest and registered checkout steps for mobile thumb ergonomics.'
    ],
    faqs: [
      { q: 'Why do some OpenCart stores feel slow when OpenCart core is so lightweight?', a: 'Almost always because of heavy multipurpose themes executing hundreds of unindexed SQL queries per category page.' },
      { q: 'Did OpenCart 4 replace TPL files with Twig?', a: 'OpenCart transitioned to Twig in v3 and modernized its extension/event namespace architecture in OpenCart 4.' },
      { q: 'Does OpenCart support full Arabic RTL natively?', a: 'Yes, setting direction = rtl in the Arabic language pack automatically switches layout hooks across the storefront.' }
    ]
  },
  'opencart-essential-extensions': {
    categoryKey: 'opencart',
    categoryLabel: 'OpenCart',
    badge: 'OpenCart · Extensions & Architecture',
    title: 'Essential OpenCart Extensions & Event-Driven Module Architecture for Scalable Stores',
    summary: 'Curating a rock-solid OpenCart extension stack—covering one-step checkout, Elasticsearch/faceted filters, ZATCA e-invoicing, ERP webhooks, and migrating legacy OCMOD modifications to OpenCart 4 Events.',
    readTime: '8 min read',
    relatedServiceSlug: 'opencart-development',
    relatedServiceTitle: 'OpenCart Store Development',
    focusPoints: [
      'Why OpenCart 4’s native Event System eliminates the XML line-collision conflicts that plagued legacy vQmod and OCMOD plugins.',
      'High-ROI functional modules: streamlined mobile One-Step Checkout, indexed attribute filtering, abandoned cart WhatsApp/email recovery, and SEO pack.',
      'Auditing third-party marketplace modules for unindexed SQL COUNT(*) queries, PHP 8.2/8.3 strict typing, and CSRF admin tokens.',
      'Building bespoke lightweight ERP/WMS synchronization modules tailored to your exact warehouse schema.'
    ],
    takeaways: [
      'Never install unencrypted IonCube-locked extensions that block security audits and lock you to outdated PHP versions.',
      'Faceted category filters on 10,000+ SKU catalogs must use indexed filter tables or Meilisearch/Elasticsearch—not LIKE "%...%" scans.',
      'OpenCart 4 Events allow multiple extensions to hook into order creation cleanly without overwriting files.'
    ],
    checklist: [
      'Require 100% open, readable PHP 8.2+ source code on all commercial extensions.',
      'Benchmark category and checkout SQL query counts before and after enabling any module.',
      'Verify admin controllers validate user_token permissions on every route.',
      'Keep custom integrations encapsulated under a dedicated /extension/company_erp/ namespace.'
    ],
    faqs: [
      { q: 'Are OpenCart 3 OCMOD extensions directly compatible with OpenCart 4?', a: 'No—OpenCart 4 introduced PSR-4 namespaces and a unified /extension/ structure using Events, so v3 modules require updated v4 builds.' },
      { q: 'Why avoid IonCube-encoded OpenCart plugins?', a: 'Encoded blobs hide SQL bottlenecks and security flaws, complicate Docker builds, and break when upgrading PHP.' },
      { q: 'Can OpenCart generate ZATCA-compliant QR tax invoices?', a: 'Yes, via lightweight OpenCart event listeners generating TLV Base64 QR codes (Phase 1) or signed XML API reporting (Phase 2).' }
    ]
  },
  'opencart-payment-methods': {
    categoryKey: 'opencart',
    categoryLabel: 'OpenCart',
    badge: 'OpenCart · Payments & Checkout',
    title: 'OpenCart Payment Gateways Integration Guide: Mada, Apple Pay, Tabby, Tamara & Secure Webhooks',
    summary: 'How to integrate high-converting Saudi, GCC, and international payment gateways into OpenCart—implementing server-to-server HMAC webhooks, Apple Pay domain verification, BNPL installments, and idempotent order state machines.',
    readTime: '8 min read',
    relatedServiceSlug: 'opencart-development',
    relatedServiceTitle: 'OpenCart Store Development',
    focusPoints: [
      'Integrating GCC gateways (PayTabs, Moyasar, HyperPay, Tap, MyFatoorah) alongside Stripe and PayPal Commerce.',
      'Why browser redirect callbacks alone lose paid orders when users close mobile Safari—and how signed server-to-server Webhooks guarantee 100% order confirmation.',
      'Configuring Apple Pay merchant domain verification (/.well-known/apple-developer-merchantid-domain-association) and Mada priority ordering.',
      'Adding Tabby and Tamara split-payment widgets and webhook capture/refund synchronization.'
    ],
    takeaways: [
      'Always confirm OpenCart order statuses via cryptographically signed server-to-server webhooks—never trust client-side return URL parameters.',
      'Enforce database row locking / idempotency so simultaneous browser return + webhook hits never deduct stock twice.',
      'Embedded iframe/tokenized card fields keep customers on your checkout page and reduce drop-off.'
    ],
    checklist: [
      'Verify HMAC-SHA256 webhook signatures using hash_equals() before calling addHistory().',
      'Map Pending, Processing, Failed, Chargeback, and Refunded statuses explicitly in OpenCart.',
      'Host the Apple Pay domain verification file over HTTPS TLS 1.2/1.3 without redirects.',
      'Log sanitized gateway transaction references against each order_id for finance reconciliation.'
    ],
    faqs: [
      { q: 'Why did a customer’s Mada card get charged while the OpenCart order stayed in "Missing Orders"?', a: 'In OpenCart, orders start with order_status_id = 0 until payment confirms; configuring the gateway’s server-to-server webhook ensures the order updates even if the user closes their browser early.' },
      { q: 'Does OpenCart store customer credit card numbers on our server?', a: 'No—modern gateways tokenize card data via hosted fields/iframes so PCI-DSS cardholder data never touches your OpenCart database.' },
      { q: 'Can OpenCart charge extra fees or restrict Cash on Delivery by city or cart total?', a: 'Yes, via Order Total extensions and geo-zone shipping/payment rules.' }
    ]
  },
  'opencart-multi-store-guide': {
    categoryKey: 'opencart',
    categoryLabel: 'OpenCart',
    badge: 'OpenCart · Multi-Store B2B/B2C',
    title: 'OpenCart Multi-Store Architecture Guide: Running B2B, B2C & Multi-Country Brands from One Admin',
    summary: 'Leverage OpenCart’s standout built-in Multi-Store engine to operate multiple domains, B2B wholesale portals, regional GCC storefronts, and distinct themes from a single PHP codebase and unified inventory database.',
    readTime: '8 min read',
    relatedServiceSlug: 'opencart-development',
    relatedServiceTitle: 'OpenCart Store Development',
    focusPoints: [
      'How OpenCart resolves HTTP Host headers against oc_store to serve distinct domains (ksa.brand.com, uae.brand.com, wholesale.brand.com) from one installation.',
      'Sharing master SKU inventory while assigning products, categories, currencies, tax classes, and themes selectively per store.',
      'Differentiating B2C retail pricing from B2B wholesale tier pricing using Customer Groups per store.',
      'Configuring multi-domain SSL certificates, canonical tags, and per-store sitemaps to prevent cross-store duplicate content.'
    ],
    takeaways: [
      'OpenCart Multi-Store is built into core—eliminating expensive synchronization middleware between your retail and wholesale sites.',
      'Stock deductions on Store A reflect instantaneously on Store B because both read the same product table.',
      'Each sub-store must have unique titles, descriptions, or regional hreflang tags so search engines index them cleanly.'
    ],
    checklist: [
      'Point secondary domains/subdomains to the exact same OpenCart document root in NGINX/Apache.',
      'Include the trailing slash on every Store URL configured in System → Settings.',
      'Assign distinct default Currency, Language, Tax Geo-Zone, and Customer Group per store.',
      'Generate separate XML sitemaps and robots.txt rules per hostname.'
    ],
    faqs: [
      { q: 'Do secondary stores in OpenCart Multi-Store require separate PHP files on the server?', a: 'No! All stores point to the exact same OpenCart webroot and share one unified admin panel.' },
      { q: 'Can Store A use a luxury dark retail theme while Store B uses a dense B2B catalog theme?', a: 'Yes—each store entry in System → Settings selects its own active template, logo, and layout assignments.' },
      { q: 'Are customer accounts shared across stores?', a: 'Customers live in one database segmented by store_id and customer_group_id, enabling centralized CRM visibility.' }
    ]
  },
  'opencart-speed-optimization': {
    categoryKey: 'opencart',
    categoryLabel: 'OpenCart',
    badge: 'OpenCart · Database & Speed',
    title: 'OpenCart Speed Optimization for 50,000+ Products: MySQL Indexing, Category Count Fix & Redis',
    summary: 'Eliminate the #1 OpenCart bottleneck on large catalogs—disabling Category Product Counts, adding composite MySQL indexes, configuring Redis/OPcache, converting images to WebP, and achieving <200ms TTFB.',
    readTime: '7 min read',
    relatedServiceSlug: 'speed-optimization',
    relatedServiceTitle: 'Website Speed & Core Web Vitals Optimization',
    focusPoints: [
      'The single highest-impact OpenCart setting: turning OFF "Category Product Count" (which runs dozens of slow recursive JOIN queries on every page load).',
      'Adding missing composite MySQL/MariaDB indexes on oc_product_to_category, oc_product_attribute, oc_product_special, and oc_seo_url.',
      'Enabling Redis cache driver in config.php + NGINX FastCGI microcaching for anonymous category/product traffic.',
      'Generating modern WebP cached thumbnails and eliminating render-blocking font/CSS assets.'
    ],
    takeaways: [
      'Disabling "Category Product Count" in Store Settings often cuts TTFB on 20,000+ SKU stores from 3.5 seconds down to 180ms instantly.',
      'Adding an index on oc_seo_url (keyword, store_id, language_id) accelerates every single routed request in OpenCart.',
      'Store OpenCart image resize cache on fast NVMe SSD storage and serve static /image/cache/ via CDN.'
    ],
    checklist: [
      'Set Category Product Count = No under System → Settings → Option.',
      'Audit slow SQL queries (>100ms) using MariaDB/MySQL slow_query_log and EXPLAIN.',
      'Switch CACHE_ENGINE to redis in both catalog and admin config.php.',
      'Add explicit width/height and WebP output to catalog/model/tool/image.php.'
    ],
    faqs: [
      { q: 'Why did our OpenCart store slow down abruptly after importing 30,000 products?', a: 'Almost certainly recursive Category Product Count queries combined with missing composite indexes on product relation tables.' },
      { q: 'Can OpenCart scale past 100,000 SKUs?', a: 'Yes—with tuned MariaDB/MySQL InnoDB buffer pools, Category Product Count disabled, Redis caching, and Meilisearch/Elasticsearch for instant search.' },
      { q: 'Should we clear /image/cache/ frequently?', a: 'Never clear /image/cache/ unnecessarily in production—regenerating tens of thousands of thumbnails spikes CPU I/O.' }
    ]
  },
  'opencart-seo-guide': {
    categoryKey: 'opencart',
    categoryLabel: 'OpenCart',
    badge: 'OpenCart · E-Commerce SEO',
    title: 'OpenCart Technical SEO Guide: Canonical Product URLs, Rich Product Schema, Hreflang & Faceted Crawl Control',
    summary: 'Solve OpenCart’s classic multi-path product URL duplication—implementing strict canonical URLs, JSON-LD Product/Offer/Review schema, bilingual Arabic/English SEO keywords, and high-speed XML sitemaps.',
    readTime: '8 min read',
    relatedServiceSlug: 'technical-seo',
    relatedServiceTitle: 'Technical SEO & Search Architecture',
    focusPoints: [
      'Fixing duplicate product URLs (/product-slug vs /cat/subcat/product-slug) with consistent root canonical tags.',
      'Replacing OpenCart’s slow dynamic PHP sitemap feed on large stores with pre-generated chunked static XML sitemaps.',
      'Injecting complete Schema.org Product JSON-LD (sku, brand, image, priceCurrency, price, availability, aggregateRating).',
      'Controlling crawl budget on ?sort=, ?order=, ?limit=, and ?filter= query parameters via canonicals and robots rules.'
    ],
    takeaways: [
      'Every OpenCart product must declare one single canonical URL regardless of which category path the shopper clicked.',
      'Unique bilingual SEO URL slugs in oc_seo_url + hreflang tags let Arabic and English product pages rank independently.',
      'Never delete discontinued seasonal product URLs—keep the page live with "Out of Stock" alternatives or 301 redirect to the parent category.'
    ],
    checklist: [
      'Enable Use SEO URLs and verify .htaccess / NGINX rewrite rules.',
      '301-redirect index.php?route=common/home to clean root /.',
      'Validate Product & BreadcrumbList JSON-LD in Google Rich Results Test.',
      'Pre-generate segmented XML sitemaps via cron when catalog size exceeds 5,000 SKUs.'
    ],
    faqs: [
      { q: 'Why does OpenCart’s default sitemap time out on 25,000+ products?', a: 'The default feed controller resizes/checks every product image on the fly; generating static chunked sitemaps (sitemap-1.xml, sitemap-2.xml) via CLI cron solves it permanently.' },
      { q: 'Can Arabic and English share the same SEO slug in OpenCart 4?', a: 'OpenCart 4 maps SEO URLs by store_id and language_id, allowing dedicated localized slugs under /ar/ and /en/ prefixes.' },
      { q: 'Should ?sort=p.price&order=ASC URLs be indexed by Google?', a: 'No—sorting and page-size parameters duplicate the exact same products and should canonicalize back to the clean category URL.' }
    ]
  },
  'opencart-security-and-maintenance': {
    categoryKey: 'opencart',
    categoryLabel: 'OpenCart',
    badge: 'OpenCart · Store Hardening',
    title: 'OpenCart Security Hardening & Maintenance Guide: Storage Isolation, Admin Protection & WAF Rules',
    summary: 'Lock down OpenCart 4 e-commerce stores against automated skimmers, brute-force bots, and file exploits—moving storage outside webroot, renaming admin directories, blocking PHP in upload folders, and automating backups.',
    readTime: '8 min read',
    relatedServiceSlug: 'website-security',
    relatedServiceTitle: 'Website Security & Cyber Hardening',
    focusPoints: [
      'Moving the OpenCart /system/storage/ directory completely outside public_html and deleting the /install/ folder immediately.',
      'Renaming the /admin/ directory + adding HTTP Basic Auth / Cloudflare Zero Trust IP policies in front of backend login.',
      'Setting config.php and admin/config.php to 0440/0444 read-only permissions and blocking PHP execution inside /image/.',
      'File Integrity Monitoring (FIM), Content-Security-Policy against Magecart checkout skimmers, and automated encrypted off-site backups.'
    ],
    takeaways: [
      'Leaving /install/ on disk or keeping /system/storage/ inside public_html exposes logs, cache, and upload files directly.',
      'Renaming /admin/ + Cloudflare WAF eliminates 99% of automated credential-stuffing bot traffic.',
      'Strict CSP script-src rules prevent client-side checkout card-skimming injections.'
    ],
    checklist: [
      'Verify /install/ is deleted and DIR_STORAGE points above the public webroot.',
      'Set 0440 permissions on both config.php files and disable PHP execution in /image/.',
      'Force HTTPS across both catalog and admin with HSTS and Secure/HttpOnly session cookies.',
      'Schedule daily encrypted database + files backups to off-site S3 storage.'
    ],
    faqs: [
      { q: 'Why does OpenCart warn about moving the storage directory on first login?', a: 'Because storage/ holds error logs, modification caches, and customer file uploads that must never be directly reachable via browser URLs.' },
      { q: 'How do e-commerce card skimmers (Magecart) target stores and how do we block them?', a: 'Attackers try to inject external JS on the checkout page via compromised admin passwords or vulnerable plugins; 2FA, read-only code deploys, and strict CSP script-src allow-lists stop them.' },
      { q: 'How often should OpenCart error logs be reviewed?', a: 'Continuously via centralized logging or weekly SLA checks—while ensuring Display Errors is strictly OFF in production.' }
    ]
  },

  // ==================== SALLA (+7 new) ====================
  'salla-twilight-theme-development': {
    categoryKey: 'salla',
    categoryLabel: 'Salla',
    badge: 'Salla · Twilight Engine',
    title: 'Salla Twilight Theme Development Guide: Custom Twig Storefronts, Salla CLI & Web Components',
    summary: 'Build bespoke luxury Saudi e-commerce themes on Salla’s Twilight Engine—mastering twilight.json schema configuration, Salla CLI live preview, Web Components (<salla-products-list>), and Twilight JS SDK events.',
    readTime: '9 min read',
    relatedServiceSlug: 'salla-store-development',
    relatedServiceTitle: 'Salla Store Development & Customization',
    focusPoints: [
      'Architecture of Salla Twilight Engine: Twig templating, twilight.json merchant settings/home components, Tailwind CSS, and native Web Components.',
      'Local development workflow using Salla CLI (salla theme preview) connected to a sandbox partner developer store.',
      'Hooking into cart, wishlist, price, and auth events cleanly via Salla’s official Twilight JS SDK without fragile DOM scraping.',
      'Publishing private enterprise themes vs passing Salla Partners Marketplace speed, RTL/LTR, and accessibility review.'
    ],
    takeaways: [
      'Twilight combines SaaS reliability (managed hosting, ZATCA, checkout) with 100% custom luxury storefront code.',
      'Use official <salla-add-product-button> and <salla-cart-summary> Web Components so Apple Pay, Tabby, and stock rules stay future-proof.',
      'Designing dynamic twilight.json home blocks lets merchants launch Ramadan and National Day campaigns without developer deployments.'
    ],
    checklist: [
      'Version-control your Twilight theme repository on GitHub connected to Salla Partners Portal.',
      'Support both Arabic RTL and English LTR via CSS logical properties and Twig transtags.',
      'Keep custom JS bundles lightweight using Vite code-splitting per template.',
      'Test across iOS Safari (iPhone) where 75%+ of Saudi e-commerce shoppers browse.'
    ],
    faqs: [
      { q: 'Do we need a public marketplace theme, or can Salla run a 100% private custom theme for our brand?', a: 'Salla Twilight supports private custom themes linked exclusively to your merchant store via Salla Partners.' },
      { q: 'Can we customize the final payment card form inside Salla Twilight?', a: 'Catalog, product, and cart experiences are 100% customizable in Twilight, while the final PCI-DSS payment step stays securely hosted by Salla for instant Mada/Apple Pay compliance.' },
      { q: 'Which Salla plan supports custom CSS/JS and custom Twilight themes?', a: 'Salla Plus, Salla Pro, and Salla Special support advanced customization and custom theme deployments.' }
    ]
  },
  'salla-payment-gateways-saudi-arabia': {
    categoryKey: 'salla',
    categoryLabel: 'Salla',
    badge: 'Salla · Saudi Payments',
    title: 'Salla Payment Gateways in Saudi Arabia: Salla Pay, Mada, Apple Pay, STC Pay, Tabby & Tamara',
    summary: 'Optimize payment acceptance, settlement cycles, and Buy Now Pay Later (BNPL) conversion on Salla—configuring instant Salla Pay activation, Apple Pay Express Checkout, Tabby, Tamara, and COD fraud controls.',
    readTime: '8 min read',
    relatedServiceSlug: 'salla-store-development',
    relatedServiceTitle: 'Salla Store Development & Customization',
    focusPoints: [
      'Activating unified Salla Pay (Mada, Visa, Mastercard, Apple Pay) with verified Commercial Registration or Freelance Document + Saudi Business IBAN.',
      'Enabling Apple Pay Express Checkout directly on Product and Cart drawers for 1-tap iPhone biometric purchases.',
      'Maximizing Average Order Value (AOV) with Tabby and Tamara 4-installment Sharia-compliant BNPL widgets.',
      'Controlling Cash on Delivery (COD) return losses through order-value caps, COD fees, and prepaid shipping incentives.'
    ],
    takeaways: [
      'Over 70% of Saudi online orders happen on iOS—1-tap Apple Pay + Mada is the single biggest checkout conversion lever.',
      'Ensure your bank IBAN belongs to the exact legal entity named on your CR or Freelance Certificate to avoid settlement holds.',
      'Reconcile Salla Pay payout reports automatically against accounting ledgers (Qoyod, Daftra, Odoo) via API.'
    ],
    checklist: [
      'Verify Maroof / Saudi Business Center badge and matching corporate IBAN in Salla Wallet.',
      'Enable Tabby and Tamara promotional installment widgets on Product Detail Pages.',
      'Cap COD availability by cart amount and product category (e.g. disable COD on custom-made items).',
      'Test live Mada, Apple Pay, and refund flows before launching paid Snapchat/TikTok ads.'
    ],
    faqs: [
      { q: 'Can licensed Saudi freelancers activate Mada and Apple Pay on Salla without a CR?', a: 'Yes! Salla supports verified Saudi Freelance Certificates (Freelance Practitioner Permits) paired with an approved freelance bank IBAN.' },
      { q: 'When do Tabby and Tamara settle funds to the merchant?', a: 'The merchant receives full settlement upfront (minus gateway commission) while the BNPL provider collects installments from the shopper.' },
      { q: 'Can international GCC and global buyers pay on a Saudi Salla store?', a: 'Yes, via Visa, Mastercard, Apple Pay, and multi-currency display across GCC and international shipping zones.' }
    ]
  },
  'salla-shipping-integrations': {
    categoryKey: 'salla',
    categoryLabel: 'Salla',
    badge: 'Salla · Logistics & 3PL',
    title: 'Salla Shipping, Polisat Waybills & 3PL Fulfillment Guide (SMSA, Aramex, SPL, RedBox & Cold Chain)',
    summary: 'Architect fast, low-return e-commerce logistics on Salla—comparing Salla discounted waybills (Salla Polisat) vs direct carrier contracts, Smart Locker networks (RedBox), same-day Riyadh/Jeddah couriers, and 3PL warehouse sync.',
    readTime: '8 min read',
    relatedServiceSlug: 'salla-store-development',
    relatedServiceTitle: 'Salla Store Development & Customization',
    focusPoints: [
      'Comparing discounted pre-negotiated Salla Waybills (SMSA, Aramex, SPL, J&T, DHL) against direct enterprise carrier API accounts.',
      'Offering diversified checkout delivery options: Same-Day city couriers (Barq/Flow), Smart Lockers (RedBox), Standard Domestic, and Refrigerated Cold Chain.',
      'Integrating 3PL cloud fulfillment centers (Salasa, OTO, IQ Fulfillment, Byrd) for automated pick-pack-ship and stock sync.',
      'Configuring conditional free-shipping thresholds and volumetric weight rules to protect profit margins.'
    ],
    takeaways: [
      'Adding RedBox smart lockers gives Saudi shoppers 24/7 self-pickup at lower shipping cost and near-zero failed-delivery returns.',
      'Accurate product weights and dimensions in Salla prevent surprise volumetric carrier surcharges.',
      'Saudi National Short Address support at checkout speeds courier last-mile delivery.'
    ],
    checklist: [
      'Enter accurate actual/volumetric weight on every SKU before activating tiered shipping rates.',
      'Offer at least 2–3 distinct carriers (same-day city + national express + RedBox lockers).',
      'Set free-shipping thresholds ~25% above current Average Order Value to lift cart sizes.',
      'Automate self-service return waybill generation inside customer accounts.'
    ],
    faqs: [
      { q: 'Should a new store use Salla Waybills or sign separate contracts with SMSA and Aramex?', a: 'Start immediately with Salla Waybills for pre-discounted rates and zero minimum monthly quotas, then add direct contracts once volume exceeds thousands of monthly parcels.' },
      { q: 'Does Salla support refrigerated shipping for dates, chocolates, perfumes, and cosmetics?', a: 'Yes, temperature-controlled Saudi cold-chain carriers integrate directly and can be restricted conditionally to heat-sensitive products.' },
      { q: 'How does OTO or Salasa integrate with Salla?', a: 'Through certified one-click apps in the Salla App Store syncing orders, waybills, and real-time stock via webhooks.' }
    ]
  },
  'salla-zatca-einvoicing-compliance': {
    categoryKey: 'salla',
    categoryLabel: 'Salla',
    badge: 'Salla · ZATCA & Accounting',
    title: 'Salla ZATCA E-Invoicing (Fatoora) & Accounting ERP Integration Guide for Saudi Merchants',
    summary: 'Ensure 100% tax and regulatory compliance on your Saudi Salla store—configuring 15% VAT registration, ZATCA Phase 1 & Phase 2 simplified/standard tax invoices, credit notes, and automated Qoyod/Daftra/Odoo ERP sync.',
    readTime: '8 min read',
    relatedServiceSlug: 'accounting-systems-development',
    relatedServiceTitle: 'Accounting & Financial Software Development',
    focusPoints: [
      'Configuring your 15-digit VAT Tax Identification Number (TIN), tax-inclusive catalog pricing, and shipping VAT rules accurately.',
      'Understanding ZATCA Phase 1 (TLV QR Simplified Tax Invoices) and Phase 2 Integration Wave requirements via certified accounting connectors.',
      'Handling returns and partial refunds cleanly using compliant electronic Credit Notes rather than manual edits.',
      'Automating order, payment-fee, shipping-cost, and inventory COGS journal entries into Qoyod, Daftra, Wafeq, Zoho Books, or Odoo.'
    ],
    takeaways: [
      'Never enable VAT collection in Salla unless your establishment holds an active 15-digit ZATCA VAT certificate.',
      'Saudi consumer regulations require B2C storefront prices to display 15% VAT included upfront.',
      'Syncing Salla with Qoyod, Wafeq, or Odoo eliminates manual Excel reconciliation and prepares quarterly VAT returns automatically.'
    ],
    checklist: [
      'Verify exact legal entity Arabic name, National Address, and 15-digit VAT number in Tax Settings.',
      'Enable "Product prices include tax" for Saudi B2C retail compliance.',
      'Connect a ZATCA Phase 2-ready accounting system (Qoyod / Wafeq / Odoo / Daftra) when notified for your wave.',
      'Map Salla Pay and Tabby/Tamara gateway fee deductions to dedicated expense accounts.'
    ],
    faqs: [
      { q: 'Do Saudi stores below the mandatory VAT threshold charge VAT on Salla?', a: 'No—if you are not VAT-registered with ZATCA, keep VAT disabled in Salla so non-tax invoices are issued cleanly.' },
      { q: 'How are B2B corporate buyers who need their own VAT number on the invoice handled?', a: 'Enable optional Company Name & Tax Number checkout fields or issue B2B Standard Tax Invoices through your linked ZATCA-integrated ERP.' },
      { q: 'How do returns affect ZATCA VAT reporting?', a: 'Processing a refund/return issues an electronic Credit Note linked to the original invoice number, adjusting output VAT accurately.' }
    ]
  },
  'salla-seo-optimization': {
    categoryKey: 'salla',
    categoryLabel: 'Salla',
    badge: 'Salla · Search Growth',
    title: 'Salla SEO Optimization Guide: Ranking Saudi Online Stores #1 on Google Search & Shopping',
    summary: 'Capture high-intent free organic traffic in Saudi Arabia—optimizing Salla URL slugs, Arabic/English search intent keywords, category landing copy, Product JSON-LD rich snippets, and Google Merchant Center feeds.',
    readTime: '8 min read',
    relatedServiceSlug: 'technical-seo',
    relatedServiceTitle: 'Technical SEO & Search Architecture',
    focusPoints: [
      'Connecting Google Search Console and submitting Salla’s dynamic /sitemap.xml immediately upon custom domain launch.',
      'Keyword intent mapping for the Saudi market: commercial category hubs ("specialty coffee beans Saudi") vs transactional SKU pages.',
      'Crafting unique 250–400 word Persuasive Product Descriptions, clean English URL slugs, alt text, and Merchant Center GTIN/Brand fields.',
      'Leveraging Salla’s built-in Blog and Verified Product Reviews to earn star ratings in Google SERPs.'
    ],
    takeaways: [
      'Category pages drive the highest-volume non-brand search traffic—enrich every Salla category with concise introductory/footer SEO copy and FAQs.',
      'Never copy-paste manufacturer 1-sentence descriptions shared by 50 competing stores—write unique benefit-led Arabic and English copy.',
      'Verified customer star reviews on Salla populate AggregateRating JSON-LD, boosting organic click-through rates by 20–35%.'
    ],
    checklist: [
      'Verify your root domain property in Google Search Console and submit /sitemap.xml.',
      'Write clean, short hyphenated URL slugs for every main category and hero product.',
      'Compress uploaded product photography to crisp WebP (<180KB) with descriptive alt attributes.',
      'Sync Salla’s Google Merchant Center feed to appear in free Google Shopping product carousels.'
    ],
    faqs: [
      { q: 'Are Salla stores good for Google SEO compared to self-hosted platforms?', a: 'Yes! Salla provides fast Cloudflare CDN edge delivery, clean customizable URLs, native sitemaps, Product JSON-LD, and redirects out of the box.' },
      { q: 'Should Salla product URL slugs be written in Arabic or English?', a: 'Short, clean English slugs (e.g. /ethiopian-v60-coffee) avoid long percent-encoded URLs when shared on WhatsApp and social media while Arabic H1/Title tags rank fully for Arabic queries.' },
      { q: 'What should we do when a seasonal product sells out permanently?', a: 'Keep it visible as Out of Stock with similar-product recommendations or create a 301 Redirect in Salla SEO settings to its parent category.' }
    ]
  },
  'salla-marketing-apps-and-automations': {
    categoryKey: 'salla',
    categoryLabel: 'Salla',
    badge: 'Salla · Retention & Pixels',
    title: 'Salla Marketing Automations: Server-Side Pixels (CAPI), WhatsApp Cart Recovery & Loyalty Growth',
    summary: 'Turn paid ad clicks into repeat loyal buyers on Salla—configuring Snapchat/TikTok/Meta Conversions API (CAPI), automated WhatsApp abandoned-cart sequences, smart coupon rules, and points-based loyalty tiers.',
    readTime: '8 min read',
    relatedServiceSlug: 'digital-marketing-strategy',
    relatedServiceTitle: 'Integrated Digital Marketing Strategy',
    focusPoints: [
      'Recovering post-iOS14 ad attribution accuracy on Snapchat, TikTok, Meta, and Google Ads using Server-Side Conversions API (CAPI).',
      'Automated multi-touch Abandoned Cart recovery via WhatsApp Business API + SMS/Email (1 hour reminder → 12 hour social proof → 24 hour incentive).',
      'Increasing basket size with tiered volume bundles, BOGO promotions, and Salla Loyalty & Referral points.',
      'RFM customer segmentation (VIPs, Repeat Buyers, At-Risk) inside Salla Marketing tools.'
    ],
    takeaways: [
      'Browser pixels alone miss 25–40% of iOS Safari conversions; pairing Pixel + Server-Side CAPI restores algorithm optimization accuracy.',
      'WhatsApp Business API cart recovery messages achieve 75%+ open rates in Saudi Arabia—recovering 12–22% of abandoned carts.',
      'Never send a discount code in the very first 1-hour cart reminder, or shoppers learn to abandon carts intentionally.'
    ],
    checklist: [
      'Verify Event Match Quality scores across Purchase, InitiateCheckout, and AddToCart in Snap/TikTok/Meta Ads Managers.',
      'Configure a 3-step WhatsApp + Email abandoned cart sequence with smart exclusion once purchased.',
      'Use unique trackable affiliate/influencer coupon links inside Salla’s Affiliate Marketing module.',
      'Automate post-delivery review requests 4 days after shipment status turns Delivered.'
    ],
    faqs: [
      { q: 'Why do ad managers show fewer purchases than Salla’s orders dashboard?', a: 'iOS Intelligent Tracking Prevention and ad blockers block client-side pixels; enabling Server-Side Conversions API (CAPI) sends verified server purchase events.' },
      { q: 'Is automated WhatsApp cart recovery compliant with Meta policies?', a: 'Yes, when sent through an official Meta-approved WhatsApp Business API provider from the Salla App Store using approved utility/marketing templates.' },
      { q: 'How do we prevent leaked public coupon codes from eroding margins on discounted items?', a: 'Configure Salla coupon exclusions ("Exclude discounted products", per-customer usage limits, and minimum cart thresholds).' }
    ]
  },
  'salla-inventory-management-and-branches': {
    categoryKey: 'salla',
    categoryLabel: 'Salla',
    badge: 'Salla · Omnichannel Inventory',
    title: 'Salla Multi-Branch Inventory, Warehouses, Click-and-Collect & POS Synchronization Guide',
    summary: 'Manage multi-city warehouses, retail showrooms, Click-and-Collect branch pickup, and live POS stock synchronization on Salla without overselling or manual stock counts.',
    readTime: '8 min read',
    relatedServiceSlug: 'inventory-systems-development',
    relatedServiceTitle: 'Inventory & Warehouse Management Systems (WMS)',
    focusPoints: [
      'Setting up multiple Warehouses and Retail Branches in Salla with geographic priority routing (e.g., Riyadh warehouse serves Central Region, Jeddah serves Western Region).',
      'Activating "Pickup from Branch" (Click & Collect) so city shoppers save shipping fees and pick up orders within 2 hours.',
      'Synchronizing physical showroom POS systems (Foodics, Rewaa, Qoyod, Odoo, Salla POS) via unified barcode SKUs.',
      'Managing Composite Products / Bundles, low-stock safety buffers, and Restock Notification waitlists.'
    ],
    takeaways: [
      'Clean, unique SKU and Barcode hygiene across 100% of variants is mandatory before connecting any external POS or ERP.',
      'Routing orders automatically to the nearest stocked regional warehouse cuts both courier fees and delivery times.',
      '"Notify Me When Available" waitlists turn temporary stockouts into instant cash surges the moment containers clear customs.'
    ],
    checklist: [
      'Assign unique SKU codes to every single size/color variant across your entire catalog.',
      'Designate one single "Master of Inventory" (either your ERP/WMS or Salla—never two conflicting manual masters).',
      'Configure safety stock buffers (e.g. reserve 2 units) on fast-moving showroom items.',
      'Enable automated back-in-stock WhatsApp/email alerts for out-of-stock hero SKUs.'
    ],
    faqs: [
      { q: 'Can a customer in Riyadh order online and pick up from our Riyadh showroom the same day?', a: 'Yes—Salla’s Branch Pickup feature checks real-time branch stock at checkout and sends a Ready-for-Pickup code.' },
      { q: 'How do product bundles deduct inventory accurately?', a: 'Salla’s bundled product type links to underlying component SKUs so selling 1 gift box automatically deducts 1 unit from each included item.' },
      { q: 'Which retail POS systems sync live inventory with Salla?', a: 'Rewaa, Odoo, Qoyod, Foodics (for F&B/roasteries), Daftra, and custom ERP connectors via Salla Webhooks.' }
    ]
  },

  // ==================== ZID (+6 new) ====================
  'zid-api-and-app-development': {
    categoryKey: 'zid',
    categoryLabel: 'Zid',
    badge: 'Zid · Partner API & Webhooks',
    title: 'Zid API, OAuth 2.0 & Custom App Development Guide: Integrating ERPs, WMS & Custom Storefronts',
    summary: 'Technical guide for engineering teams building public Zid App Market apps or private enterprise connectors—covering Zid Partner OAuth 2.0, X-Manager-Token + Authorization headers, Webhooks, and Soft-Theme customization.',
    readTime: '9 min read',
    relatedServiceSlug: 'zid-store-development',
    relatedServiceTitle: 'Zid Store Development & Customization',
    focusPoints: [
      'Zid Partner Portal architecture: OAuth 2.0 installation handshake issuing dual Authorization Bearer + X-Manager-Token credentials.',
      'Core REST API domains: Catalog & Variants, Multi-Location Inventory, Orders & Waybills, Customers, and Coupons.',
      'Event-driven synchronization using Zid Webhooks (order.create, order.status.update, product.update) backed by Redis/BullMQ queues.',
      'Injecting lightweight storefront scripts safely via Zid App Scripts and custom Zid Theme templates.'
    ],
    takeaways: [
      'Acknowledge Zid Webhook POST requests with HTTP 200 within <2 seconds after enqueueing payloads—never run slow ERP calls synchronously in the webhook handler.',
      'Implement token refresh automation and respect Zid API rate-limit headers with exponential backoff.',
      'Use batch inventory update endpoints rather than looping single-SKU requests during nightly ERP reconciliations.'
    ],
    checklist: [
      'Store encrypted merchant OAuth access, refresh, and manager tokens in a secure vault/database.',
      'Enforce idempotency keys (order_id + status) on all webhook workers.',
      'Respect HTTP 429 Retry-After headers when bulk-syncing large catalogs.',
      'Test full app install, token refresh, and app uninstall cleanup flows in Zid Sandbox.'
    ],
    faqs: [
      { q: 'Can we build a private ERP integration for one company without publishing a public app in Zid App Market?', a: 'Yes—Zid supports private custom integrations and private partner apps scoped exclusively to your enterprise merchant account.' },
      { q: 'Why do some Zid API endpoints require two auth headers?', a: 'Zid’s Partner architecture separates platform-level OAuth Authorization from store-level X-Manager-Token context for multi-layer security.' },
      { q: 'Does Zid support custom storefront theme development?', a: 'Yes, Zid’s custom theme engine (Twig/Jinja-style templates) gives brands full HTML/CSS/JS control over storefront UX.' }
    ]
  },
  'zid-pay-gateways-and-settlements': {
    categoryKey: 'zid',
    categoryLabel: 'Zid',
    badge: 'Zid · ZidPay & FinTech',
    title: 'ZidPay, BNPL & Financial Settlements Guide: Mada, Apple Pay, Tabby, Tamara & Automated Reconciliation',
    summary: 'Streamline payments and treasury operations on Zid—activating unified ZidPay (Mada, Apple Pay, Cards), integrating Tabby/Tamara installments, understanding settlement schedules, and automating VAT/fee accounting.',
    readTime: '8 min read',
    relatedServiceSlug: 'zid-store-development',
    relatedServiceTitle: 'Zid Store Development & Customization',
    focusPoints: [
      'Unified ZidPay onboarding activating Mada, Apple Pay, Visa, and Mastercard under one consolidated financial dashboard.',
      'Boosting high-ticket conversion and AOV with Tabby and Tamara 4-installment BNPL badges on product and cart views.',
      'Understanding T+settlement cycles, itemized fee statements, and automated VAT tax invoices on gateway commissions.',
      'Controlling COD risks via conditional checkout fees, city restrictions, and prepaid nudges.'
    ],
    takeaways: [
      'ZidPay consolidates card settlements and fee invoices into one unified payout statement instead of juggling multiple gateway portals.',
      'Enabling Apple Pay Express + Tabby/Tamara routinely lifts checkout completion rates by 20–35% on Saudi mobile traffic.',
      'Always book gross sales, gateway commissions, and input VAT separately in your accounting ERP—never book net bank deposits as raw revenue.'
    ],
    checklist: [
      'Complete KYB verification with matching CR/Freelance Document, National Address, and corporate IBAN.',
      'Enable on-page Tabby & Tamara installment calculators inside your Zid theme.',
      'Connect Qoyod, Wafeq, Daftra, or Odoo to import Zid orders and ZidPay fee breakdowns automatically.',
      'Verify refund workflows (full and partial) before major seasonal campaigns.'
    ],
    faqs: [
      { q: 'Can merchants use external gateways like Tap, Moyasar, or HyperPay on Zid if needed?', a: 'Yes—alongside native ZidPay, Zid supports connecting external GCC and international gateways depending on your plan and regions.' },
      { q: 'Does ZidPay support Saudi Freelance Certificate merchants?', a: 'Yes, verified Saudi Freelance Certificate holders with an approved freelance bank IBAN can activate ZidPay.' },
      { q: 'How are gateway commission VAT amounts reclaimed?', a: 'Zid issues official VAT tax invoices for platform/gateway fees so VAT-registered businesses can claim input VAT in ZATCA filings.' }
    ]
  },
  'zid-ship-logistics-management': {
    categoryKey: 'zid',
    categoryLabel: 'Zid',
    badge: 'Zid · ZidShip Logistics',
    title: 'ZidShip & Smart E-Commerce Logistics Guide: Automated Carrier Routing, Waybills & Return Portals',
    summary: 'Scale daily order dispatch on Zid using ZidShip unified logistics—comparing 20+ integrated carriers, automated city-based carrier allocation, bulk thermal AWB printing, and self-service return workflows.',
    readTime: '8 min read',
    relatedServiceSlug: 'zid-store-development',
    relatedServiceTitle: 'Zid Store Development & Customization',
    focusPoints: [
      'Centralized ZidShip cockpit aggregating 20+ domestic, GCC, cold-chain, smart-locker, and international carriers on one wallet.',
      'Automated shipping rules routing orders to the fastest/highest-delivery-rate carrier per region and parcel weight.',
      'Warehouse efficiency: bulk 4x6 thermal AWB label printing, barcode packing verification, and live SMS/WhatsApp tracking updates.',
      'Reducing RTO (Return-to-Origin) losses through proactive NDR (Non-Delivery Report) follow-up and automated return portals.'
    ],
    takeaways: [
      'ZidShip’s unified wallet eliminates managing 6 separate carrier pre-paid balances and monthly invoices.',
      'Batch-printing 4x6 thermal waybills sorted by SKU zone cuts warehouse packing time by over 50%.',
      'Monitoring carrier delivery-success KPIs per city lets you route remote deliveries away from underperforming couriers.'
    ],
    checklist: [
      'Audit SKU weights and dimensions so automated ZidShip billable weights match carrier scales.',
      'Enable Smart Lockers (RedBox) + Express Domestic + Same-Day City options at checkout.',
      'Set up automated WhatsApp shipping updates to cut customer "Where is my order?" tickets.',
      'Configure clear return eligibility windows (e.g. 7–14 days) in a self-service returns portal.'
    ],
    faqs: [
      { q: 'Can we combine ZidShip carriers with our own private corporate Aramex/SMSA contract?', a: 'Yes—Zid lets you use ZidShip discounted rates for some lanes while linking your own direct carrier API credentials for others.' },
      { q: 'How does ZidShip handle failed delivery attempts?', a: 'Undelivered shipments surface immediately in the Zid dashboard so support teams can confirm updated customer coordinates before carriers return parcels.' },
      { q: 'Does ZidShip support GCC cross-border shipping to UAE, Kuwait, Bahrain, Oman, and Qatar?', a: 'Yes, cross-border couriers with automated commercial invoice generation are built directly into Zid’s shipping ecosystem.' }
    ]
  },
  'zid-pos-retail-omnichannel': {
    categoryKey: 'zid',
    categoryLabel: 'Zid',
    badge: 'Zid · Omnichannel Retail & POS',
    title: 'Omnichannel Retail on Zid: Zid POS, Multi-Warehouse Inventory, Click & Collect & Unified Loyalty',
    summary: 'Unify your brick-and-mortar showrooms and online Zid storefront—synchronizing Zid POS / ERP stock in real time, enabling Reserve-Online-Pickup-In-Store, and unifying customer purchase history across every channel.',
    readTime: '8 min read',
    relatedServiceSlug: 'pos-development',
    relatedServiceTitle: 'Point of Sale (POS) Systems Development',
    focusPoints: [
      'Eliminating showroom vs online stock discrepancies by unifying multi-location warehouse and branch inventories on Zid.',
      'Connecting Zid Cloud POS or enterprise retail ERPs (Rewaa, Odoo, Dynamics, Foodics) with Mada terminals and ZATCA Phase 2 QR receipts.',
      'Enabling Click & Collect branch pickup and Ship-from-Store fulfillment to turn retail branches into fast city micro-hubs.',
      'Single 360-degree customer profile uniting showroom phone-number purchases with online loyalty points and returns.'
    ],
    takeaways: [
      'Ship-from-Store unlocks slow-moving branch inventory for online buyers while slashing city delivery times to hours.',
      'Standardized GTIN/EAN-13 barcodes across every variant prevent cashier manual-entry errors.',
      'Unified omnichannel customer profiles let you retarget showroom walk-in buyers with online seasonal drops.'
    ],
    checklist: [
      'Standardize barcode labels and SKU codes across all physical branches and online variants before go-live.',
      'Run a complete physical cycle count per branch prior to enabling live two-way inventory sync.',
      'Configure safety-stock thresholds (e.g. hold last 1 showroom display piece from online sale).',
      'Verify ZATCA tax invoice compliance on both showroom POS thermal receipts and online PDFs.'
    ],
    faqs: [
      { q: 'Can a shopper buy an item on our Zid website and exchange size at our physical Riyadh branch?', a: 'Yes—unified order lookup and omnichannel inventory adjustments allow smooth in-store exchanges that boost brand trust.' },
      { q: 'What happens if showroom internet drops briefly during peak Friday evening sales?', a: 'Modern cloud POS terminals buffer offline transactions locally and synchronize stock deductions automatically once connectivity resumes.' },
      { q: 'Can different branches hold independent stock quantities on Zid?', a: 'Yes, Zid Multi-Inventory tracks stock per warehouse/branch and routes online orders according to geographic priority rules.' }
    ]
  },
  'zid-mazawood-partner-network': {
    categoryKey: 'zid',
    categoryLabel: 'Zid',
    badge: 'Zid · Ecosystem & Growth',
    title: 'Leveraging Zid’s Ecosystem (Mazaya, App Market & Fulfillment Partners) to Scale Saudi E-Commerce',
    summary: 'How high-growth Saudi merchants utilize Zid’s ecosystem—selecting vetted 3PL warehouses, server-side marketing integrations, photography/creative partners, and B2B operational tooling without technical debt.',
    readTime: '7 min read',
    relatedServiceSlug: 'zid-store-development',
    relatedServiceTitle: 'Zid Store Development & Customization',
    focusPoints: [
      'Navigating Zid’s integrated ecosystem: App Market integrations, Mazaya merchant perks, 3PL fulfillment networks, and certified technology partners.',
      'Structuring a lean 5-pillar growth stack: Accounting/ZATCA, 3PL/WMS, Server-Side Ad Attribution, WhatsApp CRM/Retention, and BI Analytics.',
      'Evaluating service and integration partners on verified SLAs, Core Web Vitals preservation, and clean webhook reliability.',
      'Scaling from 50 daily orders (in-house packing) to 1,000+ daily orders (outsourced 3PL + ERP orchestration).'
    ],
    takeaways: [
      'Focus internal leadership on product sourcing, brand storytelling, and unit economics while delegating warehousing and accounting sync to specialized integrations.',
      'Audit active Zid App Market subscriptions quarterly so unused frontend scripts never degrade mobile page speed.',
      'Standardize analytics tracking (GA4 + CAPI + Cohort LTV) before scaling monthly ad spend.'
    ],
    checklist: [
      'Connect one single source of truth per category (1 Accounting app, 1 WhatsApp CRM, 1 Loyalty engine).',
      'Benchmark storefront Lighthouse Mobile score before and after activating any storefront widget app.',
      'Negotiate clear SLA turnaround times (same-day dispatch cutoff, inventory accuracy >=99.8%) with 3PL partners.',
      'Review unit-economics dashboards weekly (Contribution Margin after COGS, ZidPay, ZidShip, and CAC).'
    ],
    faqs: [
      { q: 'When should a growing Zid merchant move from self-storage to a 3PL warehouse?', a: 'Typically once daily order volume consistently passes 30–50+ orders/day or seasonal Ramadan/National Day peaks overwhelm internal packing.' },
      { q: 'Can Zid connect to custom enterprise BI warehouses like BigQuery or Power BI?', a: 'Yes, via Zid Partner REST APIs/Webhooks streaming orders, products, and customer cohorts into your analytics warehouse.' },
      { q: 'When do we need a custom development partner on Zid?', a: 'When launching a distinctive bespoke brand theme, integrating proprietary ERP/WMS systems, or executing complex multi-platform migrations.' }
    ]
  },
  'zid-seo-best-practices': {
    categoryKey: 'zid',
    categoryLabel: 'Zid',
    badge: 'Zid · Technical SEO',
    title: 'Zid Store SEO Best Practices: Technical Indexation, Arabic Keyword Silos & Rich Product Snippets',
    summary: 'Rank your Zid store at the top of Saudi and GCC Google search results—optimizing custom Zid theme semantics, clean URL handles, category landing hubs, Product JSON-LD structured data, and Core Web Vitals.',
    readTime: '8 min read',
    relatedServiceSlug: 'technical-seo',
    relatedServiceTitle: 'Technical SEO & Search Architecture',
    focusPoints: [
      'Technical foundation on Zid: root domain verification in Google Search Console, sitemap submission, and canonical link verification.',
      'Semantic HTML heading discipline (one H1 per template, structured H2/H3 specs) inside custom Zid themes.',
      'Winning commercial category keywords ("luxury oud perfumes Riyadh", "ergonomic office chairs Saudi") with enriched category copy and FAQs.',
      'Product Rich Results (price in SAR, stock status, star reviews) + Google Merchant Center free listings.'
    ],
    takeaways: [
      'Paid ads stop the second budget pauses—compounding organic SEO on Zid categories delivers zero-CAC orders year-round.',
      'Unique product copy answering real buyer questions (sizing, materials, warranty, care) improves both Google rankings and conversion rate.',
      'Compress hero banners and product galleries to WebP (<150–200KB) so mobile shoppers on 4G/5G experience sub-second loads.'
    ],
    checklist: [
      'Submit your Zid store’s /sitemap.xml inside Google Search Console and Bing Webmaster Tools.',
      'Write unique Meta Titles (<60 chars) and Meta Descriptions (<155 chars) for all categories and top 20% Pareto SKUs.',
      'Ensure Product JSON-LD outputs valid SAR price, availability, SKU, brand, and AggregateRating.',
      'Set up 301 redirects whenever discontinuing or merging old category/product URLs.'
    ],
    faqs: [
      { q: 'How long does SEO take to generate consistent organic orders on a Zid store?', a: 'Technical fixes and long-tail product rankings typically gain traction within 4–8 weeks, while competitive category keywords compound strongly over 3–6 months.' },
      { q: 'Does switching to a custom Zid theme affect existing Google rankings?', a: 'Not if URL handles, H1/meta tags, and Product Schema are preserved—in fact, faster custom themes typically boost Core Web Vitals and lift rankings.' },
      { q: 'Should we publish educational blog guides alongside our Zid catalog?', a: 'Yes! Buying guides and comparison articles capture top-of-funnel shoppers and pass strong internal link equity directly to your category and product pages.' }
    ]
  }
};

const CATEGORY_META: Record<string, { label: string; svgFile: string; accent: string; bg1: string }> = {
  tenders: { label: 'Tenders & Etimad', svgFile: 'tenders-guide-en.svg', accent: '#E5C78B', bg1: '#07130D' },
  wordpress: { label: 'WordPress', svgFile: 'wordpress-guide-en.svg', accent: '#38bdf8', bg1: '#0f172a' },
  shopify: { label: 'Shopify', svgFile: 'shopify-guide-en.svg', accent: '#34d399', bg1: '#064e3b' },
  magento: { label: 'Magento', svgFile: 'magento-guide-en.svg', accent: '#fb923c', bg1: '#431407' },
  drupal: { label: 'Drupal', svgFile: 'drupal-guide-en.svg', accent: '#38bdf8', bg1: '#082f49' },
  joomla: { label: 'Joomla', svgFile: 'joomla-guide-en.svg', accent: '#818cf8', bg1: '#1e1b4b' },
  opencart: { label: 'OpenCart', svgFile: 'opencart-guide-en.svg', accent: '#2dd4bf', bg1: '#042f2e' },
  salla: { label: 'Salla', svgFile: 'salla-guide-en.svg', accent: '#10b981', bg1: '#064e3b' },
  zid: { label: 'Zid', svgFile: 'zid-guide-en.svg', accent: '#fbbf24', bg1: '#451a03' },
  react: { label: 'React.js', svgFile: 'react-guide-en.svg', accent: '#38bdf8', bg1: '#082f49' },
  node: { label: 'Node.js', svgFile: 'node-guide-en.svg', accent: '#4ade80', bg1: '#052e16' },
  angular: { label: 'Angular', svgFile: 'angular-guide-en.svg', accent: '#f43f5e', bg1: '#4c0519' }
};

export function generateEnglishArticleSvgs(rootDir: string): void {
  const dir = path.resolve(rootDir, 'public/assets/images/articles');
  fs.mkdirSync(dir, { recursive: true });

  for (const [key, meta] of Object.entries(CATEGORY_META)) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bg_${key}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${meta.bg1}" />
      <stop offset="100%" stop-color="#050806" />
    </linearGradient>
    <linearGradient id="gold_${key}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E5C78B" />
      <stop offset="100%" stop-color="#C6A15B" />
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#bg_${key})" />
  <circle cx="620" cy="140" r="170" fill="${meta.accent}" opacity="0.09" />
  <circle cx="180" cy="340" r="140" fill="#10b981" opacity="0.06" />
  <rect x="36" y="36" width="728" height="378" rx="22" fill="rgba(7,19,13,0.55)" stroke="rgba(229,199,139,0.22)" stroke-width="1.5" />
  <rect x="68" y="68" width="210" height="36" rx="18" fill="rgba(255,255,255,0.05)" stroke="url(#gold_${key})" stroke-width="1" />
  <text x="173" y="91" fill="#E5C78B" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" text-anchor="middle" letter-spacing="1">${meta.label.toUpperCase()}</text>
  <text x="68" y="175" fill="#FFFFFF" font-family="Georgia, serif" font-size="32" font-weight="700">${meta.label} Architecture</text>
  <text x="68" y="216" fill="#E5C78B" font-family="Georgia, serif" font-size="24" font-weight="700">&amp; Enterprise Engineering Blueprint</text>
  <text x="68" y="264" fill="#94a3b8" font-family="system-ui, -apple-system, sans-serif" font-size="15">Production Patterns · Security Hardening · Performance &amp; Compliance</text>
  <g transform="translate(68, 305)">
    <rect x="0" y="0" width="185" height="62" rx="12" fill="rgba(5,8,6,0.75)" stroke="rgba(16,185,129,0.3)" />
    <text x="18" y="26" fill="${meta.accent}" font-family="monospace" font-size="12" font-weight="700">ARCHITECTURE</text>
    <text x="18" y="46" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="600">Enterprise Grade</text>
    <rect x="205" y="0" width="185" height="62" rx="12" fill="rgba(5,8,6,0.75)" stroke="rgba(16,185,129,0.3)" />
    <text x="223" y="26" fill="#E5C78B" font-family="monospace" font-size="12" font-weight="700">BENCHMARK</text>
    <text x="223" y="46" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="600">Core Web Vitals 95+</text>
    <rect x="410" y="0" width="240" height="62" rx="12" fill="rgba(5,8,6,0.75)" stroke="rgba(229,199,139,0.3)" />
    <text x="428" y="26" fill="#10b981" font-family="monospace" font-size="12" font-weight="700">AUTHORED BY</text>
    <text x="428" y="46" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="600">Youssef Ghamry</text>
  </g>
</svg>`;
    fs.writeFileSync(path.join(dir, meta.svgFile), svg, 'utf-8');
  }
}

const TENDER_EXISTING_META: Record<string, {
  title: string;
  badge: string;
  summary: string;
  readTime: string;
  relatedServiceSlug: string;
  relatedServiceTitle: string;
}> = {
  'what-is-a-tender-and-rfp': {
    title: 'What Is a Tender? Understanding RFPs, RFQs, and RFIs in Enterprise Procurement',
    badge: 'Tender Fundamentals · Procurement Governance',
    summary: 'A comprehensive procurement breakdown distinguishing RFIs, RFQs, and RFPs, analyzing mandatory disqualification criteria, and establishing disciplined Bid / No-Bid governance.',
    readTime: '7 min read',
    relatedServiceSlug: 'rfp-analysis',
    relatedServiceTitle: 'RFP Analysis & Requirements Breakdown'
  },
  'how-to-write-a-technical-proposal': {
    title: 'How to Write a Professional Technical Proposal for Government & IT Tenders',
    badge: 'Technical Proposal · Bid Authoring',
    summary: 'Practical blueprint for structuring executive summaries, technical methodologies, WBS implementation schedules, SLAs, and governance models aligned with evaluation scorecards.',
    readTime: '9 min read',
    relatedServiceSlug: 'tender-proposal-writing',
    relatedServiceTitle: 'Tender Proposal Writing & Technical Offers'
  },
  'how-to-prepare-a-compliance-matrix': {
    title: 'How to Prepare a Zero-Defect Tender Compliance Matrix & Traceability Index',
    badge: 'Tender QA · Compliance Matrix',
    summary: 'Step-by-step methodology for extracting 100% of mandatory and scored RFP clauses into an evaluation-ready traceability matrix that eliminates administrative and technical disqualification.',
    readTime: '8 min read',
    relatedServiceSlug: 'tender-compliance-matrix',
    relatedServiceTitle: 'Tender Compliance Matrix & Gap Analysis'
  },
  'saudi-etimad-platform-bidding-guide': {
    title: 'Saudi Etimad Platform Bidding Guide: Navigating Government Tenders & Procurement Law',
    badge: 'Saudi Etimad · Public Procurement',
    summary: 'Essential guide to the Saudi Government Tenders and Procurement Law—covering electronic booklet purchase, inquiry windows, strict technical/financial file segregation, Local Content, and bid guarantees.',
    readTime: '10 min read',
    relatedServiceSlug: 'etimad-tender-support',
    relatedServiceTitle: 'Saudi Etimad Platform Bidding & Submission Support'
  },
  'bid-no-bid-assessment-strategy': {
    title: 'Bid / No-Bid Assessment Strategy: Qualifying Tenders to Maximize Win Probability',
    badge: 'Tender Strategy · Go/No-Go Matrix',
    summary: 'How technology contractors evaluate mandatory prequalification gates, delivery capacity, cash-flow exposure, and competitive positioning before committing senior bid resources.',
    readTime: '7 min read',
    relatedServiceSlug: 'bid-no-bid-assessment',
    relatedServiceTitle: 'Bid / No-Bid Strategic Assessment & Feasibility'
  },
  'avoiding-mandatory-tender-rejection': {
    title: 'Avoiding Mandatory Tender Rejection: Top Disqualification Causes & Pre-Submission QA',
    badge: 'Bid QA · Red Team Audit',
    summary: 'Field-tested audit of the most common technical and administrative rejection triggers in government tenders—from pricing leaks inside technical volumes to expired compliance certificates.',
    readTime: '8 min read',
    relatedServiceSlug: 'tender-quality-assurance',
    relatedServiceTitle: 'Tender Quality Assurance & Final Audit'
  }
};

export function buildAll111EnglishArticles(rootDir: string): EnArticleItem[] {
  const arArticlesDir = path.resolve(rootDir, 'ar/articles');
  const knownLegacySlugs = new Set<string>([
    ...Object.keys(TENDER_EXISTING_META),
    ...PLATFORM_ARTICLES.map((a) => a.slug),
    ...Object.keys(SLUG_BLUEPRINTS)
  ]);
  const arSlugs = fs.readdirSync(arArticlesDir)
    .filter((f) => f.endsWith('.html') && f !== 'index.html')
    .map((f) => f.replace(/\.html$/, ''))
    .filter((slug) => knownLegacySlugs.has(slug))
    .sort();

  const items: EnArticleItem[] = [];

  // Map category key from PLATFORM_ARTICLES platformCategory
  const mapPlatformKey = (cat: string): string => {
    const low = cat.toLowerCase();
    if (low.includes('wordpress')) return 'wordpress';
    if (low.includes('shopify')) return 'shopify';
    if (low.includes('magento')) return 'magento';
    if (low.includes('salla')) return 'salla';
    if (low.includes('zid')) return 'zid';
    if (low.includes('opencart')) return 'opencart';
    if (low.includes('drupal')) return 'drupal';
    return 'wordpress';
  };

  for (const slug of arSlugs) {
    // Case 1: One of the 6 existing English Tender articles — extract existing inner <article> HTML if present
    if (TENDER_EXISTING_META[slug]) {
      const meta = TENDER_EXISTING_META[slug];
      const existingPath = path.resolve(rootDir, 'en/articles', `${slug}.html`);
      const sections: EnArticleSection[] = [];

      if (fs.existsSync(existingPath)) {
        const html = fs.readFileSync(existingPath, 'utf-8');
        const articleMatch =
          html.match(/<article[^>]*content-body[^>]*>([\s\S]*?)<\/article>/i) ||
          html.match(/<article[^>]*lg:col-span-6[^>]*>([\s\S]*?)<\/article>/i);
        if (articleMatch) {
          const inner = articleMatch[1].replace(/200\+/g, '400+');
          const secMatches = [...inner.matchAll(/<section(?:\s+id="sec-\d+")?[^>]*>([\s\S]*?)<\/section>/gi)];
          if (secMatches.length > 0) {
            secMatches.forEach((m, idx) => {
              const rawSec = m[0];
              if (
                rawSec.includes('id="article-faqs"') ||
                rawSec.includes('id="related-guides"') ||
                rawSec.includes('id="common-mistakes"') ||
                rawSec.includes('id="conclusion"') ||
                rawSec.includes('id="official-references"')
              ) {
                return;
              }
              const h2Match = m[1].match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
              const heading = h2Match
                ? h2Match[1].replace(/<[^>]+>/g, '').trim()
                : `Section ${idx + 1}`;
              let bodyWithoutH2 = h2Match ? m[1].replace(h2Match[0], '').trim() : m[1].trim();
              const wrappedDivMatch = bodyWithoutH2.match(/^<div class="space-y-4[^"]*">([\s\S]*)<\/div>$/i);
              if (wrappedDivMatch) {
                bodyWithoutH2 = wrappedDivMatch[1].trim();
              }
              sections.push({
                id: `sec-${sections.length + 1}`,
                heading,
                rawHtml: bodyWithoutH2
              });
            });
          }
        }
      }

      if (sections.length === 0) {
        sections.push({
          id: 'sec-1',
          heading: '1. Strategic Procurement & Compliance Overview',
          paragraphs: [meta.summary]
        });
      }

      items.push({
        slug,
        categoryKey: 'tenders',
        categoryLabel: CATEGORY_META.tenders.label,
        badge: meta.badge,
        title: meta.title,
        summary: meta.summary,
        readTime: meta.readTime,
        updatedDate: '2026-03-01',
        featuredSvg: `/assets/images/articles/${CATEGORY_META.tenders.svgFile}`,
        relatedServiceSlug: meta.relatedServiceSlug,
        relatedServiceTitle: meta.relatedServiceTitle,
        sections,
        faqs: [
          {
            q: 'How early before the Etimad submission deadline should technical QA begin?',
            a: 'Conduct the Compliance Matrix mapping on Day 1 of RFP purchase and lock a full Red Team & Completeness QA review at least 48–72 hours prior to electronic submission.'
          },
          {
            q: 'Why must financial figures never appear inside the Technical Proposal volume?',
            a: 'Under Saudi Government Tenders and Procurement regulations, including any pricing or financial clues inside the technical envelope triggers immediate mandatory disqualification.'
          },
          {
            q: 'How does a Traceability Compliance Matrix improve evaluation scores?',
            a: 'It maps every RFP clause and evaluation criterion directly to the exact page and section of your proposal, making it effortless for committee evaluators to award full technical points.'
          }
        ],
        relatedArticleSlugs: Object.keys(TENDER_EXISTING_META).filter((s) => s !== slug).slice(0, 4)
      });
      continue;
    }

    // Case 2: One of the 28 PLATFORM_ARTICLES in scripts/articlesData.ts
    const plat = PLATFORM_ARTICLES.find((a) => a.slug === slug);
    if (plat) {
      const catKey = mapPlatformKey(plat.platformCategory);
      const catMeta = CATEGORY_META[catKey] || CATEGORY_META.wordpress;
      const primarySvc = plat.relatedServices[0] || 'wordpress-development';

      const sections: EnArticleSection[] = plat.sectionsEn.map((s, idx) => ({
        id: `sec-${idx + 1}`,
        heading: `${idx + 1}. ${s.heading}`,
        paragraphs: s.paragraphs,
        keyTakeaways: s.keyTakeaways
      }));

      // Add a practical enterprise implementation checklist section so long-form utility is rich
      sections.push({
        id: `sec-${sections.length + 1}`,
        heading: `${sections.length + 1}. Enterprise Implementation & Production Readiness Checklist`,
        paragraphs: [
          `Deploying ${plat.platformCategory} in competitive commercial or institutional environments requires disciplined engineering governance across performance, cybersecurity, bilingual UX (English LTR & Arabic RTL), and search engine architecture.`,
          `Before promoting any release to production, verify server-level caching, automated off-site backups, mobile Core Web Vitals thresholds (LCP < 2.5s, INP < 200ms, CLS < 0.1), and clean API observability.`
        ],
        codeOrChecklistTitle: `${plat.platformCategory} Production Verification Matrix`,
        checklistItems: [
          `Architecture & Clean Code: Zero bloated multipurpose templates or unvetted third-party scripts.`,
          `Performance & CDN Edge: Sub-second server TTFB backed by object caching and modern WebP/AVIF media.`,
          `Security & Access Governance: Least-privilege admin roles, MFA enforcement, WAF rules, and encrypted backups.`,
          `Search & Conversion Readiness: Valid Schema.org JSON-LD, canonical URLs, and frictionless mobile conversion paths.`
        ]
      });

      items.push({
        slug,
        categoryKey: catKey,
        categoryLabel: catMeta.label,
        badge: plat.badgeEn,
        title: plat.titleEn,
        summary: plat.summaryEn,
        readTime: plat.readTime,
        updatedDate: '2026-03-01',
        featuredSvg: `/assets/images/articles/${catMeta.svgFile}`,
        relatedServiceSlug: primarySvc,
        relatedServiceTitle: `${catMeta.label} Engineering & Consulting`,
        sections,
        faqs: [
          {
            q: `Is ${catMeta.label} suitable for bilingual Saudi & GCC enterprise deployments?`,
            a: `Yes—when engineered with native RTL/LTR logical CSS, localized payment/shipping gateways (Mada, Apple Pay, Tabby, Tamara), and regional CDN edge caching.`
          },
          {
            q: `How do we maintain 95+ Core Web Vitals on ${catMeta.label}?`,
            a: `By avoiding bloated all-in-one visual builders, optimizing critical-path CSS, serving responsive WebP/AVIF assets, and auditing third-party scripts rigorously.`
          },
          {
            q: `Can ${catMeta.label} integrate with our internal ERP, CRM, and ZATCA invoicing workflows?`,
            a: `Yes, through secure REST/GraphQL APIs and idempotent webhook queues synchronizing orders, inventory, and tax invoices automatically.`
          }
        ],
        relatedArticleSlugs: plat.relatedArticles
      });
      continue;
    }

    // Case 3: One of the 77 specialized technical slugs defined in SLUG_BLUEPRINTS
    const bp = SLUG_BLUEPRINTS[slug];
    if (bp) {
      const catMeta = CATEGORY_META[bp.categoryKey] || CATEGORY_META.wordpress;
      const sections: EnArticleSection[] = [
        {
          id: 'sec-1',
          heading: `1. Architectural Foundations & Strategic Context`,
          paragraphs: [
            bp.summary,
            bp.focusPoints[0],
            `Across high-availability digital platforms, government e-services, and commercial storefronts, teams that establish clear architectural conventions early avoid costly mid-project rewrites and technical debt.`
          ]
        },
        {
          id: 'sec-2',
          heading: `2. Core Engineering Patterns & Implementation Mechanics`,
          paragraphs: [
            bp.focusPoints[1],
            bp.focusPoints[2],
            `Structuring clean separation between presentation components, domain business rules, and external integration adapters keeps the codebase resilient as product scope and traffic grow.`
          ],
          keyTakeaways: [...bp.takeaways]
        },
        {
          id: 'sec-3',
          heading: `3. Performance, Security & Regional Enterprise Readiness`,
          paragraphs: [
            bp.focusPoints[3],
            `For organizations operating across Saudi Arabia, the GCC, and global markets, production readiness also encompasses bilingual RTL/LTR parity, Core Web Vitals optimization on mobile networks, and strict alignment with OWASP and regulatory cybersecurity standards.`
          ]
        },
        {
          id: 'sec-4',
          heading: `4. Pre-Production Audit & Engineering Checklist`,
          paragraphs: [
            `Apply the verification checklist below during architecture reviews, pull-request gates, and pre-launch quality assurance audits to guarantee deterministic production behavior.`
          ],
          codeOrChecklistTitle: `${bp.categoryLabel} Implementation Audit Checklist`,
          checklistItems: [...bp.checklist]
        }
      ];

      items.push({
        slug,
        categoryKey: bp.categoryKey,
        categoryLabel: catMeta.label,
        badge: bp.badge,
        title: bp.title,
        summary: bp.summary,
        readTime: bp.readTime,
        updatedDate: '2026-03-01',
        featuredSvg: `/assets/images/articles/${catMeta.svgFile}`,
        relatedServiceSlug: bp.relatedServiceSlug,
        relatedServiceTitle: bp.relatedServiceTitle,
        sections,
        faqs: [...bp.faqs],
        relatedArticleSlugs: []
      });
      continue;
    }

    // Fallback safety net if any unexpected slug ever existed in ar/articles
    const fallbackTitle = slug
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    items.push({
      slug,
      categoryKey: 'wordpress',
      categoryLabel: 'Web Engineering',
      badge: 'Technical Guide',
      title: `${fallbackTitle}: Enterprise Architecture & Implementation Guide`,
      summary: `Comprehensive technical guide covering architecture, performance optimization, security hardening, and implementation best practices for ${fallbackTitle}.`,
      readTime: '7 min read',
      updatedDate: '2026-03-01',
      featuredSvg: `/assets/images/articles/wordpress-guide-en.svg`,
      relatedServiceSlug: 'custom-software-development',
      relatedServiceTitle: 'Custom Software Development & Engineering',
      sections: [
        {
          id: 'sec-1',
          heading: '1. Overview & Architectural Principles',
          paragraphs: [`Detailed engineering blueprint and implementation standards for ${fallbackTitle}.`]
        }
      ],
      faqs: [],
      relatedArticleSlugs: []
    });
  }

  // Populate sibling relatedArticleSlugs where empty
  for (const item of items) {
    if (!item.relatedArticleSlugs || item.relatedArticleSlugs.length === 0) {
      item.relatedArticleSlugs = items
        .filter((other) => other.categoryKey === item.categoryKey && other.slug !== item.slug)
        .slice(0, 4)
        .map((o) => o.slug);
    }
  }

  return items;
}
