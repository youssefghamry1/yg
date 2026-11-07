/// <reference types="node" />
import fs from 'fs';
import path from 'path';

const OUT_DIR = path.join(process.cwd(), 'public/assets/images/articles');

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

interface FeaturedSvgSpec {
  filename: string;
  eyebrow: string;
  headlineLine1: string;
  headlineLine2: string;
  pillars: [string, string, string, string];
  metrics: [string, string, string];
  accentVariant: 'emerald' | 'gold' | 'teal';
}

interface DiagramSvgSpec {
  filename: string;
  headerTitle: string;
  headerRight: string;
  leftTitle: string;
  leftSub: string;
  leftItems: [string, string, string, string];
  rightTitle: string;
  rightSub: string;
  rightItems: [string, string, string, string];
  bottomBar: string;
}

function buildFeaturedSvg(spec: FeaturedSvgSpec): string {
  const accentHex =
    spec.accentVariant === 'gold'
      ? '#E5C78B'
      : spec.accentVariant === 'teal'
      ? '#2DD4BF'
      : '#10B981';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="1600" height="900" role="img" aria-label="${esc(
    `${spec.headlineLine1} ${spec.headlineLine2}`
  )}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#040806"/>
      <stop offset="55%" stop-color="#07150F"/>
      <stop offset="100%" stop-color="#050B08"/>
    </linearGradient>
    <radialGradient id="glowA" cx="78%" cy="28%" r="52%">
      <stop offset="0%" stop-color="${accentHex}" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#040806" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowB" cx="18%" cy="82%" r="48%">
      <stop offset="0%" stop-color="#C6A15B" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#040806" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#C6A15B" stop-opacity="0.85"/>
      <stop offset="50%" stop-color="${accentHex}" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#C6A15B" stop-opacity="0.25"/>
    </linearGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#10B981" stroke-opacity="0.07" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="1600" height="900" fill="url(#bg)"/>
  <rect width="1600" height="900" fill="url(#grid)"/>
  <rect width="1600" height="900" fill="url(#glowA)"/>
  <rect width="1600" height="900" fill="url(#glowB)"/>

  <!-- Architectural Isometric Frame Right -->
  <g transform="translate(930, 130)" opacity="0.95">
    <polygon points="280,20 540,150 280,280 20,150" fill="#071911" stroke="#C6A15B" stroke-width="2" stroke-opacity="0.65"/>
    <polygon points="280,120 540,250 280,380 20,250" fill="#06140E" stroke="${accentHex}" stroke-width="2" stroke-opacity="0.55"/>
    <polygon points="280,220 540,350 280,480 20,350" fill="#040C08" stroke="#E5C78B" stroke-width="1.5" stroke-opacity="0.45"/>
    <line x1="280" y1="20" x2="280" y2="480" stroke="#C6A15B" stroke-dasharray="6 6" stroke-opacity="0.5"/>
    <circle cx="280" cy="150" r="10" fill="#E5C78B"/>
    <circle cx="280" cy="250" r="10" fill="${accentHex}"/>
    <circle cx="280" cy="350" r="10" fill="#C6A15B"/>
  </g>

  <!-- Outer Editorial Hairline -->
  <rect x="56" y="56" width="1488" height="788" rx="28" fill="none" stroke="#10B981" stroke-opacity="0.26" stroke-width="1.5"/>
  <line x1="110" y1="158" x2="860" y2="158" stroke="url(#goldLine)" stroke-width="2"/>

  <!-- Eyebrow -->
  <text x="110" y="134" fill="#E5C78B" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="21" font-weight="700" letter-spacing="3">
    ${esc(spec.eyebrow.toUpperCase())}
  </text>

  <!-- Main Display Title -->
  <text x="110" y="255" fill="#F8FAFC" font-family="Georgia, Cambria, 'Times New Roman', serif" font-size="56" font-weight="700">
    ${esc(spec.headlineLine1)}
  </text>
  <text x="110" y="328" fill="#D1FAE5" font-family="Georgia, Cambria, 'Times New Roman', serif" font-size="48" font-weight="700">
    ${esc(spec.headlineLine2)}
  </text>

  <!-- 4 Architectural Pillar Cards -->
  ${spec.pillars
    .map((p, idx) => {
      const col = idx % 2;
      const row = Math.floor(idx / 2);
      const x = 110 + col * 410;
      const y = 405 + row * 122;
      return `<g transform="translate(${x}, ${y})">
        <rect width="388" height="98" rx="16" fill="#07150F" fill-opacity="0.92" stroke="#10B981" stroke-opacity="0.32" stroke-width="1.5"/>
        <text x="24" y="36" fill="#C6A15B" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="15" font-weight="700">0${
          idx + 1
        } · ARCHITECTURE LAYER</text>
        <text x="24" y="70" fill="#F1F5F9" font-family="system-ui, -apple-system, sans-serif" font-size="21" font-weight="600">${esc(
          p
        )}</text>
      </g>`;
    })
    .join('\n  ')}

  <!-- Bottom Metrics Strip -->
  <g transform="translate(110, 705)">
    <rect width="1380" height="84" rx="16" fill="#050D09" stroke="#C6A15B" stroke-opacity="0.35" stroke-width="1.2"/>
    <text x="36" y="50" fill="#E5C78B" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="19" font-weight="600">${esc(
      spec.metrics[0]
    )}</text>
    <text x="515" y="50" fill="#A7F3D0" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="19" font-weight="600">${esc(
      spec.metrics[1]
    )}</text>
    <text x="985" y="50" fill="#F8FAFC" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="19" font-weight="600">${esc(
      spec.metrics[2]
    )}</text>
  </g>
</svg>
`;
}

function buildDiagramSvg(spec: DiagramSvgSpec): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 520" width="1200" height="520" role="img" aria-label="${esc(
    spec.headerTitle
  )}">
  <defs>
    <linearGradient id="dbg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#040806"/>
      <stop offset="100%" stop-color="#07140E"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="520" rx="20" fill="url(#dbg)" stroke="#10B981" stroke-opacity="0.32" stroke-width="1.5"/>

  <!-- Top Header -->
  <rect x="28" y="24" width="1144" height="58" rx="12" fill="#071811" stroke="#C6A15B" stroke-opacity="0.4" stroke-width="1"/>
  <text x="52" y="60" fill="#E5C78B" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="18" font-weight="700">${esc(
    spec.headerTitle
  )}</text>
  <text x="1148" y="60" text-anchor="end" fill="#6EE7B7" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="15">${esc(
    spec.headerRight
  )}</text>

  <!-- Left Architecture Column -->
  <g transform="translate(28, 102)">
    <rect width="546" height="326" rx="16" fill="#06120D" stroke="#10B981" stroke-opacity="0.38" stroke-width="1.4"/>
    <text x="26" y="40" fill="#F8FAFC" font-family="Georgia, serif" font-size="22" font-weight="700">${esc(
      spec.leftTitle
    )}</text>
    <text x="26" y="66" fill="#6EE7B7" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="13">${esc(
      spec.leftSub
    )}</text>
    ${spec.leftItems
      .map(
        (item, idx) => `<g transform="translate(24, ${86 + idx * 56})">
      <rect width="498" height="44" rx="9" fill="#081B13" stroke="#10B981" stroke-opacity="0.25"/>
      <text x="18" y="28" fill="#E2E8F0" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="500">${
        idx + 1
      }. ${esc(item)}</text>
    </g>`
      )
      .join('\n    ')}
  </g>

  <!-- Center Connector -->
  <g transform="translate(578, 240)">
    <line x1="0" y1="25" x2="44" y2="25" stroke="#C6A15B" stroke-width="2.5" stroke-dasharray="4 4"/>
    <circle cx="22" cy="25" r="14" fill="#071811" stroke="#E5C78B" stroke-width="2"/>
    <text x="22" y="30" text-anchor="middle" fill="#E5C78B" font-family="ui-monospace, monospace" font-size="12" font-weight="700">VS</text>
  </g>

  <!-- Right Architecture Column -->
  <g transform="translate(626, 102)">
    <rect width="546" height="326" rx="16" fill="#06120D" stroke="#C6A15B" stroke-opacity="0.42" stroke-width="1.4"/>
    <text x="26" y="40" fill="#F8FAFC" font-family="Georgia, serif" font-size="22" font-weight="700">${esc(
      spec.rightTitle
    )}</text>
    <text x="26" y="66" fill="#E5C78B" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="13">${esc(
      spec.rightSub
    )}</text>
    ${spec.rightItems
      .map(
        (item, idx) => `<g transform="translate(24, ${86 + idx * 56})">
      <rect width="498" height="44" rx="9" fill="#0B1711" stroke="#C6A15B" stroke-opacity="0.28"/>
      <text x="18" y="28" fill="#E2E8F0" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="500">${
        idx + 1
      }. ${esc(item)}</text>
    </g>`
      )
      .join('\n    ')}
  </g>

  <!-- Bottom Decision Strip -->
  <rect x="28" y="446" width="1144" height="50" rx="12" fill="#050F0A" stroke="#10B981" stroke-opacity="0.28"/>
  <text x="52" y="477" fill="#CBD5E1" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="14">${esc(
    spec.bottomBar
  )}</text>
</svg>
`;
}

const FEATURED_SPECS: FeaturedSvgSpec[] = [
  {
    filename: 'svelte-vs-react-compiler-runes-vs-vdom-comparison-featured.svg',
    eyebrow: 'JS Frontend Compilers · Islands · Micro-Libraries',
    headlineLine1: 'Svelte 5 Runes, SolidJS & Astro 5',
    headlineLine2: 'vs. Virtual DOM & Legacy JS Stacks',
    pillars: [
      'Svelte 5 Runes & SvelteKit SSR',
      'SolidJS Signals & Qwik O(1)',
      'Astro 5 Islands, Preact & Lit',
      'Alpine.js, Mithril, Ember & Backbone'
    ],
    metrics: ['Compiler Signals: Zero VDOM', 'Islands Architecture: 0kB Default JS', 'Strangler Legacy Migration'],
    accentVariant: 'emerald'
  },
  {
    filename: 'react-ui-component-libraries-shadcn-radix-mui-antd-mantine-featured.svg',
    eyebrow: 'UI Component Systems · Headless Primitives · CSS v4',
    headlineLine1: 'Shadcn, Radix, MUI, AntD & Mantine',
    headlineLine2: '+ Tailwind CSS v4, Sass & CSS-in-JS',
    pillars: [
      'Shadcn UI + Radix & Headless UI',
      'MUI, Ant Design, Chakra & Mantine',
      'Tailwind v4 Oxide, DaisyUI & Bootstrap',
      'Sass/Less vs Styled Components/Emotion'
    ],
    metrics: ['WAI-ARIA Keyboard Accessibility', 'Zero-Runtime RSC Styling', 'Design Token Governance'],
    accentVariant: 'gold'
  },
  {
    filename: 'jest-vs-vitest-javascript-testing-comparison-featured.svg',
    eyebrow: 'JavaScript Unit · Component · E2E Testing',
    headlineLine1: 'Vitest 4 vs. Jest & Playwright',
    headlineLine2: 'vs. Cypress, Storybook & Testing Lib',
    pillars: [
      'Vitest 4 Native ESM & Browser Mode',
      'Jest Legacy CJS & Mocha/Jasmine',
      'Playwright BiDi/CDP vs Cypress',
      'Testing Library, Storybook & Puppeteer'
    ],
    metrics: ['Native ESM Transform Pipeline', 'Playwright Trace Sharding', 'WebdriverIO Mobile/Web QA'],
    accentVariant: 'teal'
  },
  {
    filename: 'javascript-bundlers-and-compilers-vite-rolldown-webpack-rspack-swc-featured.svg',
    eyebrow: 'Bundlers · Rust Compilers · Package Managers',
    headlineLine1: 'Vite 6, Rolldown, Webpack & Turbopack',
    headlineLine2: '+ SWC, esbuild, Babel, pnpm & Bun',
    pillars: [
      'Vite Environment API & Rolldown',
      'Webpack 5, Rspack, Turbopack & Parcel',
      'Rollup Library Treeshaking & esbuild',
      'SWC vs Babel + pnpm, Bun, Yarn & npm'
    ],
    metrics: ['Rust/Go Native Compilation', 'Strict pnpm Content Store', 'Dual ESM/CJS Exports'],
    accentVariant: 'emerald'
  },
  {
    filename: 'typescript-api-layers-trpc-apollo-urql-relay-graphql-yoga-websockets-featured.svg',
    eyebrow: 'TypeScript APIs · GraphQL · Realtime · ORMs',
    headlineLine1: 'tRPC 11, Apollo, urql & Relay',
    headlineLine2: '+ Socket.IO, ws & Node.js ORMs',
    pillars: [
      'tRPC 11 Zero-Codegen RPC Procedures',
      'Apollo Federation, urql & Relay',
      'Socket.IO Rooms vs Raw ws + Redis',
      'MikroORM, TypeORM, Sequelize & Knex'
    ],
    metrics: ['End-to-End Type Inference', 'Horizontal WebSocket Pub/Sub', 'SQL & Mongoose Persistence'],
    accentVariant: 'gold'
  },
  {
    filename: 'interactive-visualization-3d-and-utilities-threejs-d3-chartjs-gsap-dayjs-featured.svg',
    eyebrow: 'Validation · Charts · WebGL 3D · Motion · Utilities',
    headlineLine1: 'Zod 4, Ajv, ECharts, D3 & Three.js',
    headlineLine2: '+ GSAP, Motion, Anime.js & Day.js',
    pillars: [
      'Zod 4, Yup, Joi & Ajv Schemas',
      'ECharts, Chart.js, Highcharts & D3',
      'Three.js WebGL, GSAP, Motion & Anime',
      'Axios, RxJS, Lodash & Day.js/date-fns'
    ],
    metrics: ['60fps GPU Compositor Budgets', 'Zero-Trust Payload Schemas', 'Moment/jQuery Modernization'],
    accentVariant: 'teal'
  },
  {
    filename: 'laravel-vs-codeigniter-php-framework-comparison-featured.svg',
    eyebrow: 'Full-Spectrum PHP Frameworks Architecture',
    headlineLine1: 'CodeIgniter 4, CakePHP 5 & Yii2/Yii3',
    headlineLine2: '+ Slim 4, Laminas, Nette, Spiral & Hyperf',
    pillars: [
      'CodeIgniter 4 & CakePHP 5 MVC',
      'Yii2 Portals & Strict PSR Yii3',
      'Slim 4, Laminas/Mezzio & Nette',
      'Phalcon, Spiral, Hyperf & Lumen Exit'
    ],
    metrics: ['Sub-4MB Micro-MVC Footprint', 'PSR-7 / PSR-15 Middleware', 'Coroutine & RoadRunner Engines'],
    accentVariant: 'gold'
  },
  {
    filename: 'magento-vs-prestashop-ecommerce-architecture-comparison-featured.svg',
    eyebrow: 'PHP Enterprise Commerce · CMS · LMS Platforms',
    headlineLine1: 'Magento, PrestaShop 9 & Shopware 6.7',
    headlineLine2: '+ TYPO3 v13, Craft CMS 5 & Moodle',
    pillars: [
      'Magento B2B vs PrestaShop 9 Symfony',
      'Shopware 6.7 API-First Commerce',
      'TYPO3 v13 LTS, Craft 5 & October CMS',
      'WordPress/Woo, Drupal, Joomla & Moodle'
    ],
    metrics: ['Multi-Store B2B Price Books', 'Headless GraphQL & REST', 'Enterprise ERP & LMS Scale'],
    accentVariant: 'emerald'
  },
  {
    filename: 'essential-php-ecosystem-packages-guzzle-monolog-carbon-mailer-spatie-featured.svg',
    eyebrow: 'Composer · Symfony Components · Laravel Packages',
    headlineLine1: 'Composer, Guzzle, Monolog & Symfony',
    headlineLine2: '+ Laravel Sanctum, Horizon & Flysystem',
    pillars: [
      'Composer Classmaps, PHP-DI & dotenv',
      'Symfony Console, Validator & Messenger',
      'Sanctum, Passport, Horizon, Scout, Cashier',
      'Guzzle, Flysystem, TCPDF & Spreadsheet'
    ],
    metrics: ['Authoritative PSR-4 Autoload', 'Async Queue Workers & OAuth', 'Streaming S3, PDF & XLSX'],
    accentVariant: 'teal'
  },
  {
    filename: 'enterprise-php-api-architecture-api-platform-oauth2-jwt-graphql-reverb-featured.svg',
    eyebrow: 'PHP APIs · OAuth2/JWT · Async Runtimes · OPcache',
    headlineLine1: 'API Platform 4, OAuth2, JWT & GraphQL',
    headlineLine2: '+ FrankenPHP, RoadRunner, Swoole & PSR',
    pillars: [
      'API Platform 4 & Laravel API Resources',
      'League OAuth2 PKCE, JWT & GraphQL PHP',
      'FrankenPHP, RoadRunner, Swoole & Octane',
      'PHP-FPM, OPcache JIT, ReactPHP & Amp'
    ],
    metrics: ['OpenAPI 3.1 & JSON-LD Hydra', 'Persistent Worker Isolation', 'PSR Standards & Sodium Crypto'],
    accentVariant: 'gold'
  }
];

const DIAGRAM_SPECS: DiagramSvgSpec[] = [
  {
    filename: 'nextjs-vs-nuxtjs-fullstack-ssr-comparison-diagram.svg',
    headerTitle: 'FIG 1 · NEXT.JS APP ROUTER (RSC) VS. NUXT (NITRO ENGINE) REQUEST PIPELINE',
    headerRight: 'FULL-STACK META-FRAMEWORKS',
    leftTitle: 'Next.js App Router (React 19)',
    leftSub: 'React Server Components + Flight Stream + Server Actions',
    leftItems: [
      'Edge/Node Middleware -> Route Matcher & Auth Headers',
      'Async Server Components Query DB Without Client JS',
      'RSC Flight Payload Streams Suspense Boundaries',
      'Selective Hydration Only on "use client" Leaves'
    ],
    rightTitle: 'Nuxt Full-Stack (Vue 3.5 + Nitro)',
    rightSub: 'Universal SSR + Route Rules + h3 Portable Server',
    rightItems: [
      'Nitro Route Rules (SSR / SWR / ISR / Prerender per URL)',
      'useAsyncData / $fetch Direct In-Memory Server Call',
      'Pinia + Devalue Payload Serialization into HTML',
      'Deploy Unchanged to Node, Cloudflare, Bun or Deno'
    ],
    bottomBar: 'Decision Rule: Choose Next.js for RSC zero-bundle trees & React ecosystem; choose Nuxt for portable Nitro hosting & Vue velocity.'
  },
  {
    filename: 'svelte-vs-react-compiler-runes-vs-vdom-comparison-diagram.svg',
    headerTitle: 'FIG 1 · COMPILER SIGNALS, ISLANDS & RESUMABILITY VS. VIRTUAL DOM',
    headerRight: 'FRONTEND EXECUTION MODELS',
    leftTitle: 'Compiler & Signal Architectures',
    leftSub: 'Svelte 5 Runes · SolidJS · Astro 5 Islands · Qwik',
    leftItems: [
      'Svelte 5 ($state/$derived) Compiles Direct DOM Mutations',
      'SolidJS Tracks Fine-Grained Signal Subscriptions Once',
      'Astro 5 Ships Zero Client JS Outside client:* Islands',
      'Qwik Serializes Listeners into HTML for O(1) Resume'
    ],
    rightTitle: 'VDOM, Micro-Widgets & Legacy Paths',
    rightSub: 'React 19 · Preact · Lit · Alpine.js · Ember/Backbone',
    rightItems: [
      'React 19 + Compiler Auto-Memoizes Fiber Reconciliation',
      'Preact (3kB) & Lit Shadow DOM Power Embedded Widgets',
      'Alpine.js Enhances Blade/Twig HTML Declaratively',
      'Strangler-Fig Wraps Legacy jQuery, Backbone & Ember'
    ],
    bottomBar: 'Decision Rule: Match runtime budget to page type—Islands/Runes for CWV-critical portals, Lit/Alpine for server-rendered widgets.'
  },
  {
    filename: 'react-ui-component-libraries-shadcn-radix-mui-antd-mantine-diagram.svg',
    headerTitle: 'FIG 1 · UI OWNERSHIP SPECTRUM & ZERO-RUNTIME CSS ARCHITECTURE',
    headerRight: 'DESIGN SYSTEMS & STYLING',
    leftTitle: 'Headless & Source-Owned Primitives',
    leftSub: 'Shadcn UI · Radix UI · Headless UI · Tailwind CSS v4',
    leftItems: [
      'WAI-ARIA Focus Traps, Roving Tabindex & Portal Dismissal',
      'Source Code Lives in /components/ui (Zero Vendor Lock)',
      'Tailwind CSS v4 Oxide (@theme CSS Custom Properties)',
      'Full React Server Components Compatibility (0kB Runtime)'
    ],
    rightTitle: 'Packaged Suites, Preprocessors & CSS-in-JS',
    rightSub: 'MUI · Ant Design · Mantine · Chakra v3 · Sass · Emotion',
    rightItems: [
      'Turnkey Enterprise DataGrids, DatePickers & Complex Trees',
      'Mantine CSS Modules & Chakra v3 Tokens Avoid RSC Overhead',
      'Bootstrap 5, Bulma & DaisyUI Accelerate Multi-Stack HTML',
      'Migrate Runtime Styled-Components to CSS Modules / Sass @use'
    ],
    bottomBar: 'Decision Rule: Own customer-facing brand systems with Shadcn/Radix + Tailwind v4; accelerate dense ERP backoffices with AntD/MUI/Mantine.'
  },
  {
    filename: 'expressjs-vs-nestjs-nodejs-backend-comparison-diagram.svg',
    headerTitle: 'FIG 1 · NODE.JS HTTP FRAMEWORK SPECTRUM: MIDDLEWARE VS. DI VS. SCHEMA',
    headerRight: 'NODE.JS BACKEND STACKS',
    leftTitle: 'Minimalist & Web-Standard Routers',
    leftSub: 'Express 5 · Fastify 5 · Hono · Koa.js',
    leftItems: [
      'Express 5 Native Async Promise Error Forwarding',
      'Fastify 5 Ajv Validation + fast-json-stringify Throughput',
      'Hono Web Fetch API Runs on Node, Bun, Deno & Workers',
      'Koa.js Context Onion Pipeline for Custom Gateways'
    ],
    rightTitle: 'Structured Enterprise & MVC Frameworks',
    rightSub: 'NestJS 11 · AdonisJS v6 · LoopBack/Hapi/Feathers/Sails',
    rightItems: [
      'NestJS 11 IoC Modules, Guards, Pipes & Interceptors',
      'Swappable Express 5 or Fastify 5 HTTP Adapter + gRPC/Kafka',
      'AdonisJS v6 Batteries-Included MVC, Lucid ORM & VineJS',
      'Structured Upgrade Paths from Hapi, LoopBack 4 & Sails.js'
    ],
    bottomBar: 'Decision Rule: Pick NestJS 11 or AdonisJS v6 for multi-team enterprise governance; pick Fastify 5 or Hono for high-RPS microservices.'
  },
  {
    filename: 'redux-toolkit-vs-zustand-react-state-comparison-diagram.svg',
    headerTitle: 'FIG 1 · FOUR-PLANE STATE SEPARATION IN MODERN JAVASCRIPT APPS',
    headerRight: 'CLIENT, SERVER & MACHINE STATE',
    leftTitle: 'Server Cache & Deterministic Workflows',
    leftSub: 'TanStack Query v5 · XState v5 Actor Machines',
    leftItems: [
      'TanStack Query v5 Owns 80% Async API Cache & gcTime',
      'Optimistic Mutations + Automatic Stale Invalidation',
      'XState v5 Finite Statecharts Prevent Impossible UI States',
      'Actor Model Isolates Checkout, KYC & Upload Lifecycles'
    ],
    rightTitle: 'Client Stores, Atoms & Vue Reactivity',
    rightSub: 'Zustand v5 · Redux Toolkit · Jotai · MobX · Pinia',
    rightItems: [
      'Zustand v5 (~1.2kB) External Store + useShallow Selectors',
      'Redux ToolkitSlices + Listener Middleware Audit Trails',
      'Jotai Bottom-Up Atoms (Replacing Deprecated Recoil)',
      'Pinia Setup Stores Power Vue 3.5 / Nuxt (Replacing Vuex)'
    ],
    bottomBar: 'Decision Rule: Never duplicate REST/GraphQL payloads in Redux/Zustand—pair TanStack Query with Zustand, RTK, Jotai, or Pinia.'
  },
  {
    filename: 'jest-vs-vitest-javascript-testing-comparison-diagram.svg',
    headerTitle: 'FIG 1 · MODERN JAVASCRIPT TESTING TROPHY: VITEST 4, TESTING LIBRARY & PLAYWRIGHT',
    headerRight: 'UNIT · COMPONENT · E2E QA',
    leftTitle: 'Fast ESM Unit & Component Isolation',
    leftSub: 'Vitest 4 · Jest · Testing Library · Storybook · MSW',
    leftItems: [
      'Vitest 4 Shares vite.config.ts (Zero Babel CJS Mismatch)',
      'Testing Library Queries Accessible Roles Over CSS Classes',
      'Vitest Browser Mode + Storybook Interaction Stories',
      'MSW Intercepts Fetch/GraphQL Deterministically'
    ],
    rightTitle: 'Cross-Browser E2E & Protocol Automation',
    rightSub: 'Playwright · Cypress · Puppeteer · WebdriverIO',
    rightItems: [
      'Playwright Isolated BrowserContexts & Multi-Tab OAuth',
      'CI Sharding + Time-Travel Trace Viewer ZIP Artifacts',
      'Cypress In-Browser Runner vs Playwright BiDi/CDP Speed',
      'Puppeteer PDF/Scraping & WebdriverIO Appium Mobile QA'
    ],
    bottomBar: 'Decision Rule: Standardize new TypeScript repos on Vitest 4 + Testing Library + Playwright; migrate legacy Jest/Mocha incrementally.'
  },
  {
    filename: 'javascript-bundlers-and-compilers-vite-rolldown-webpack-rspack-swc-diagram.svg',
    headerTitle: 'FIG 1 · JS MODULE BUNDLERS, RUST TRANSPILERS & PACKAGE STORE TOPOLOGY',
    headerRight: 'BUILD & MONOREPO PIPELINE',
    leftTitle: 'Bundlers & Native Compilers',
    leftSub: 'Vite 6 + Rolldown · Rspack · Turbopack · esbuild · SWC',
    leftItems: [
      'Vite 6 Unbundled ESM Dev + Rust Rolldown Production Build',
      'Webpack 5 Module Federation -> Drop-In Rspack Speedup',
      'Rollup / tsup (esbuild) Emit Clean Tree-Shaken Libraries',
      'SWC Compiles TS/JSX 20x Faster Than Legacy Babel Chains'
    ],
    rightTitle: 'Package Managers & Monorepo Stores',
    rightSub: 'pnpm · Bun · Yarn Berry (PnP) · npm Workspaces',
    rightItems: [
      'pnpm Content-Addressable Hard-Link Store Blocks Phantom Deps',
      'Bun Unified JSC Runtime, Fast Installer & Lockfile Runner',
      'Yarn Berry Plug-n-Play Zip Archives vs nodeLinker Mode',
      'npm Workspaces + Lockfile Provenance Security Auditing'
    ],
    bottomBar: 'Decision Rule: Adopt Vite + SWC + pnpm Workspaces by default; use Rspack to accelerate legacy Webpack 5 Module Federation.'
  },
  {
    filename: 'typescript-api-layers-trpc-apollo-urql-relay-graphql-yoga-websockets-diagram.svg',
    headerTitle: 'FIG 1 · END-TO-END TYPESCRIPT API PROTOCOLS, WEBSOCKETS & NODE.JS ORMS',
    headerRight: 'API & DATA PERSISTENCE',
    leftTitle: 'RPC, GraphQL & Real-Time Transports',
    leftSub: 'tRPC 11 · Apollo / urql / Relay · Socket.IO vs ws',
    leftItems: [
      'tRPC 11 Shares Router Types Directly with TanStack Query v5',
      'Apollo Federation & Relay Fragments Scale Multi-Team Graphs',
      'urql Lightweight Exchanges Minimize Client GraphQL Bundles',
      'Socket.IO Rooms & Raw ws Scale Horizontally via Redis Pub/Sub'
    ],
    rightTitle: 'Node.js SQL & Document Persistence',
    rightSub: 'MikroORM · TypeORM · Sequelize · Knex.js · Mongoose',
    rightItems: [
      'Drizzle & Prisma Lead Modern Type-Safe SQL Inference',
      'MikroORM Unit-of-Work & Identity Map Enforce DDD Purity',
      'Knex.js & Kysely Build Composable Multi-Dialect SQL',
      'Mongoose ODM Indexes + .lean() Optimize MongoDB Reads'
    ],
    bottomBar: 'Decision Rule: Use tRPC 11 inside TypeScript monorepos; expose OpenAPI/Federated GraphQL to external mobile & third-party clients.'
  },
  {
    filename: 'interactive-visualization-3d-and-utilities-threejs-d3-chartjs-gsap-dayjs-diagram.svg',
    headerTitle: 'FIG 1 · VALIDATION BOUNDARIES, CANVAS/WEBGL RENDERING & MODERN JS UTILITIES',
    headerRight: 'VALIDATION · VIZ · MOTION',
    leftTitle: 'Runtime Schemas, HTTP & Streams',
    leftSub: 'Zod 4 · Ajv · Yup · Joi · Axios · RxJS · Day.js/date-fns',
    leftItems: [
      'Zod 4 Infers Static TS Types + Fast Boundary Parsing',
      'Ajv Compiles JSON Schema Draft-2020-12 into Fast Validators',
      'Axios Token-Refresh Interceptors & RxJS switchMap/retry',
      'Replace Mutable Moment.js & Full Lodash with date-fns/Day.js'
    ],
    rightTitle: 'Charts, 3D WebGL & 60fps Animation',
    rightSub: 'ECharts · Chart.js · Highcharts · D3 · Three.js · GSAP',
    rightItems: [
      'ECharts & Chart.js Canvas Handle 50k+ Financial Points',
      'D3.js Computes Scales/Layouts While Highcharts Powers BI',
      'Three.js Disposes Geometries/Materials to Prevent GPU Leaks',
      'GSAP ScrollTrigger, Motion Layout Springs & Anime.js Timelines'
    ],
    bottomBar: 'Decision Rule: Validate every external payload with Zod 4/Ajv; switch from SVG to Canvas/WebGL above 2,500 live data nodes.'
  },
  {
    filename: 'laravel-vs-codeigniter-php-framework-comparison-diagram.svg',
    headerTitle: 'FIG 1 · PHP FRAMEWORKS SPECTRUM: MICRO-ROUTERS TO PERSISTENT ENTERPRISE CORES',
    headerRight: 'PHP FRAMEWORK TAXONOMY',
    leftTitle: 'Lightweight MVC & PSR-15 Micro-Stacks',
    leftSub: 'CodeIgniter 4 · Slim 4 · Laminas Mezzio · Phalcon',
    leftItems: [
      'CodeIgniter 4 Boots in <4MB RAM for High-Speed MVC',
      'Slim 4 & Mezzio Compose Strict PSR-7 / PSR-15 Pipelines',
      'Phalcon Executes C-Compiled Framework Classes in Memory',
      'Replace Deprecated Lumen with Slim 4 or Laravel Octane'
    ],
    rightTitle: 'Structured MVC & Coroutine Frameworks',
    rightSub: 'CakePHP 5 · Yii2/Yii3 · Nette · Spiral · Hyperf',
    rightItems: [
      'CakePHP 5 Table/Entity Conventions & Typed Date/ORM',
      'Yii2 High-Traffic Portals -> Strict PSR-11 Yii3 Packages',
      'Nette Context-Aware Latte Templates Block XSS by Design',
      'Spiral (RoadRunner) & Hyperf (Swoole) Run Async Workers'
    ],
    bottomBar: 'Decision Rule: Match framework weight to hosting & domain—Slim/CI4 for lean APIs, Laravel/Symfony/Cake5/Yii3 for rich domains, Spiral/Hyperf for async.'
  },
  {
    filename: 'magento-vs-prestashop-ecommerce-architecture-comparison-diagram.svg',
    headerTitle: 'FIG 1 · ENTERPRISE PHP COMMERCE, MULTISITE CMS & LMS ARCHITECTURE MATRIX',
    headerRight: 'PHP PLATFORMS & COMMERCE',
    leftTitle: 'Enterprise & Mid-Market PHP Commerce',
    leftSub: 'Magento / Adobe Commerce · Shopware 6.7 · PrestaShop 9',
    leftItems: [
      'Magento Multi-Website B2B Catalogs, Shared Carts & OpenSearch',
      'Shopware 6.7 API-First Symfony Core + Composable Storefronts',
      'PrestaShop 9 Modernized Symfony LTS Backoffice & Lower TCO',
      'WooCommerce & OpenCart 4 Serve Agile SMB Merchandising'
    ],
    rightTitle: 'Institutional CMS, Custom Modeling & LMS',
    rightSub: 'TYPO3 v13 · Craft CMS 5 · Drupal 11 · October · Moodle',
    rightItems: [
      'TYPO3 v13 LTS & Drupal Govern 100+ Multisite Gov Portals',
      'Craft CMS 5 Matrix Content Modeling + Native GraphQL API',
      'October CMS & Joomla 5 Deliver Rapid Multilingual Portals',
      'Moodle LMS Scales SCORM/LTI Universities with Redis Caching'
    ],
    bottomBar: 'Decision Rule: Select Magento/Shopware 6.7 for ERP-heavy B2B commerce, PrestaShop 9 for lean retail TCO, and TYPO3/Craft/Drupal for structured portals.'
  },
  {
    filename: 'essential-php-ecosystem-packages-guzzle-monolog-carbon-mailer-spatie-diagram.svg',
    headerTitle: 'FIG 1 · PRODUCTION PHP APPLICATION LAYER: COMPOSER, SYMFONY & LARAVEL PACKAGES',
    headerRight: 'CORE PHP LIBRARIES',
    leftTitle: 'Foundation, DI, Messaging & Auth Packages',
    leftSub: 'Composer · PHP-DI · Symfony Console/Validator/Messenger · Sanctum',
    leftItems: [
      'Composer Classmap-Authoritative + PHP-DI Compiled Containers',
      'Symfony Validator & Messenger Decouple Commands & Retries',
      'Laravel Sanctum (SPA/Mobile) vs Passport (Full OAuth2 Server)',
      'Horizon, Octane, Scout & Cashier Power SaaS Infrastructure'
    ],
    rightTitle: 'HTTP Pools, Cloud Storage & Document I/O',
    rightSub: 'Guzzle · Monolog · Carbon 3 · Flysystem · TCPDF · Spreadsheet',
    rightItems: [
      'Guzzle Pool Concurrency + Monolog JSON Context Telemetry',
      'CarbonImmutable + Ramsey UUIDv7 B-Tree Ordered Keys',
      'League Flysystem v3 Streams S3 Uploads Without RAM Spikes',
      'TCPDF (Arabic RTL) / Dompdf + Chunked PhpSpreadsheet Exports'
    ],
    bottomBar: 'Decision Rule: Assemble PSR-compliant building blocks (Guzzle, Monolog, Flysystem, Symfony Mailer) and never retain deprecated SwiftMailer.'
  },
  {
    filename: 'doctrine-orm-vs-eloquent-orm-php-persistence-comparison-diagram.svg',
    headerTitle: 'FIG 1 · DATA MAPPER UNIT-OF-WORK VS. ACTIVE RECORD & WORKER-SAFE PHP ORMS',
    headerRight: 'PHP PERSISTENCE LAYERS',
    leftTitle: 'Data Mapper & Worker-Safe Persistence',
    leftSub: 'Doctrine ORM 3 · Cycle ORM · Atlas ORM',
    leftItems: [
      'Pure POPO Domain Entities Free of Database Base Classes',
      'Identity Map + Unit of Work Computes Atomic Commit Diffs',
      'Cycle ORM Isolates Entity Heaps Across RoadRunner Workers',
      'Atlas ORM Explicit Table-Data-Gateway Predictable SQL'
    ],
    rightTitle: 'Active Record & Lightweight PDO Layers',
    rightSub: 'Eloquent ORM · Propel · Medoo · RedBeanPHP · PDO',
    rightItems: [
      'Eloquent Model Combines State, Scopes & Relation Fluency',
      'Model::shouldBeStrict() Blocks N+1 & Unfillable Bugs',
      'Cursor/Chunk Streaming Processes Millions of SQL Rows',
      'Medoo & Prepared PDO Power Ultra-Lean Reporting Queries'
    ],
    bottomBar: 'Decision Rule: Choose Doctrine 3 or Cycle ORM for complex DDD & persistent workers; choose strict-mode Eloquent for high-velocity SaaS.'
  },
  {
    filename: 'phpunit-vs-pest-php-testing-framework-comparison-diagram.svg',
    headerTitle: 'FIG 1 · ZERO-REGRESSION PHP CI GATE: STATIC ANALYSIS, AST REFACTORING & TESTS',
    headerRight: 'PHP QA & STATIC ANALYSIS',
    leftTitle: 'Static Analysis, Style & AST Upgrades',
    leftSub: 'PHPStan 2 · Psalm · Rector 2 · PHPCS · PHP-CS-Fixer',
    leftItems: [
      'PHP-CS-Fixer / PHPCS Enforce PER-CS 2.0 Formatting First',
      'PHPStan 2 (Level 9/10) Verifies Generics Without Running Code',
      'Psalm Taint Analysis Traces Unescaped User Input to SQL/HTML',
      'Rector 2 Automates PHP 8.4/8.5 & PHPUnit Attribute Upgrades'
    ],
    rightTitle: 'Unit, Architecture, BDD & Browser Suites',
    rightSub: 'PHPUnit 12 · Pest 4 · Mockery · Codeception · Behat',
    rightItems: [
      'PHPUnit 12 Native #[Test] & #[DataProvider] Attributes',
      'Pest 4 Architecture Presets Block Layer Boundary Violations',
      'Mockery Isolates External Gateways; Behat Runs Gherkin BDD',
      'Codeception & Pest 4 Playwright Verify Full End-to-End Flows'
    ],
    bottomBar: 'Decision Rule: Gate every pull request on PER-CS -> PHPStan Level 8+ -> Rector --dry-run -> Parallel Pest 4 / PHPUnit 12.'
  },
  {
    filename: 'enterprise-php-api-architecture-api-platform-oauth2-jwt-graphql-reverb-diagram.svg',
    headerTitle: 'FIG 1 · ENTERPRISE PHP API GATEWAY & PERSISTENT WORKER EXECUTION MODEL',
    headerRight: 'PHP APIS & ASYNC RUNTIMES',
    leftTitle: 'Hypermedia, OAuth2/JWT, GraphQL & Sockets',
    leftSub: 'API Platform 4 · League OAuth2 · JWT · GraphQL PHP · Ratchet',
    leftItems: [
      'API Platform 4 #[ApiResource] Emits OpenAPI 3.1 & JSON-LD',
      'League OAuth2 PKCE + Short-Lived EdDSA/RS256 lcobucci/jwt',
      'webonyx/graphql-php Batching Solves Nested Resolver N+1',
      'Laravel Reverb, Swoole & Ratchet Stream Live WebSocket Events'
    ],
    rightTitle: 'PHP-FPM + OPcache vs. Async Worker Servers',
    rightSub: 'PHP-FPM · OPcache JIT · FrankenPHP · RoadRunner · Swoole · Amp',
    rightItems: [
      'PHP-FPM Shared-Nothing Isolation + OPcache Preloading/JIT',
      'FrankenPHP (Caddy/Go) & RoadRunner Keep App Booted in RAM',
      'Swoole Coroutines, ReactPHP Loops & AMPHP Native PHP Fibers',
      'Stateless Service Resetting Prevents Cross-Tenant Leaks'
    ],
    bottomBar: 'Decision Rule: Tune PHP-FPM + OPcache first; adopt FrankenPHP/RoadRunner workers with strict stateless DI for sub-10ms p99 APIs.'
  }
];

fs.mkdirSync(OUT_DIR, { recursive: true });
for (const f of FEATURED_SPECS) {
  fs.writeFileSync(path.join(OUT_DIR, f.filename), buildFeaturedSvg(f), 'utf8');
}
for (const d of DIAGRAM_SPECS) {
  fs.writeFileSync(path.join(OUT_DIR, d.filename), buildDiagramSvg(d), 'utf8');
}
console.log(
  `Generated ${FEATURED_SPECS.length} unique featured SVGs and ${DIAGRAM_SPECS.length} bespoke architecture diagrams in ${OUT_DIR}.`
);
