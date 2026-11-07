import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, type PluginOption} from 'vite';

function getHtmlInputs(): Record<string, string> {
  const inputs: Record<string, string> = {
    main: path.resolve(__dirname, 'index.html'),
    en_main: path.resolve(__dirname, 'en/index.html'),
    ar_main: path.resolve(__dirname, 'ar/index.html'),
  };

  const scanDirs = [
    'en/services',
    'ar/services',
    'en/articles',
    'ar/articles',
    'en/certifications',
    'ar/certifications',
    'en/tenders',
    'ar/tenders',
    'en/cv',
    'ar/cv',
    'en/portfolio',
    'ar/portfolio',
    'en/contact',
    'ar/contact'
  ];

  for (const dir of scanDirs) {
    const fullDir = path.resolve(__dirname, dir);
    if (fs.existsSync(fullDir)) {
      const files = fs.readdirSync(fullDir);
      for (const file of files) {
        if (file.endsWith('.html')) {
          const cleanKey = `${dir.replace(/\//g, '_')}_${file.replace('.html', '')}`.replace(/[^a-zA-Z0-9_]/g, '_');
          inputs[cleanKey] = path.resolve(fullDir, file);
        }
      }
    }
  }

  return inputs;
}

function githubPagesPostProcessor(basePath: string = '/yg/'): PluginOption {
  const cleanBase = basePath.endsWith('/') ? basePath : `${basePath}/`;
  const baseWithoutTrailing = cleanBase.slice(0, -1);
  const siteUrl = 'https://youssefghamry1.github.io/yg';

  return {
    name: 'github-pages-post-processor',
    enforce: 'post',
    closeBundle: async () => {
      const distDir = path.resolve(__dirname, 'dist');
      if (!fs.existsSync(distDir)) return;

      // Ensure .nojekyll exists
      fs.writeFileSync(path.join(distDir, '.nojekyll'), '');

      // Helper to recursively find all HTML files
      function getAllHtmlFiles(dir: string): string[] {
        let results: string[] = [];
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            results = results.concat(getAllHtmlFiles(fullPath));
          } else if (entry.name.endsWith('.html')) {
            results.push(fullPath);
          }
        }
        return results;
      }

      const htmlFiles = getAllHtmlFiles(distDir);

      for (const filePath of htmlFiles) {
        let content = fs.readFileSync(filePath, 'utf-8');

        // 1. Fix canonical and hreflang links where Rollup may have bundled them into /assets/index-xxx.html or /yg/assets/index-xxx.html
        content = content.replace(
          /(<link\s+rel="(?:canonical|alternate)"[^>]*?href=")(?:\/yg)?\/assets\/index-[^"]+\.html("[^>]*>)/gi,
          (match, p1, p2) => {
            if (match.includes('hreflang="ar"')) {
              return `${p1}${cleanBase}ar/index.html${p2}`;
            }
            return `${p1}${cleanBase}index.html${p2}`;
          }
        );

        // 2. Fix internal hrefs starting with '/' that missed the /yg prefix:
        content = content.replace(/href="\/(ar|en|index\.html|assets|manifest\.json)([\/"#?][^"]*)?"/gi, (_match, p1, p2 = '') => {
          return `href="${cleanBase}${p1}${p2}"`;
        });

        // 3. Fix internal src starting with '/assets' that missed the /yg prefix:
        content = content.replace(/src="\/assets\/([^"]*)"/gi, (_match, p1) => {
          return `src="${cleanBase}assets/${p1}"`;
        });

        // 4. Update OpenGraph image and twitter:image domain if needed
        content = content.replace(/content="\/assets\/([^"]*)"/gi, (_match, p1) => {
          return `content="${siteUrl}/assets/${p1}"`;
        });

        fs.writeFileSync(filePath, content, 'utf-8');
      }

      // 5. Generate a luxury, bespoke bilingual 404.html page for GitHub Pages
      const fourOhFourPath = path.join(distDir, '404.html');
      const fourOhFourHtml = `<!doctype html>
<html lang="en" dir="ltr" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>404 — Page Not Found | Youssef Ghamry</title>
    <link rel="stylesheet" href="${cleanBase}assets/css/style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Cinzel:wght@600;700;800&family=JetBrains+Mono:wght@400;600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <script>
      (function() {
        var path = window.location.pathname;
        var search = window.location.search || '';
        var hash = window.location.hash || '';

        // If visiting a path without .html, attempt to append .html
        if (!path.endsWith('.html') && !path.endsWith('/')) {
          var target = path + '.html' + search + hash;
          window.location.replace(target);
          return;
        }
        if (path.endsWith('/') && path !== '${baseWithoutTrailing}/' && path !== '${cleanBase}') {
          var targetIndex = path + 'index.html' + search + hash;
          window.location.replace(targetIndex);
          return;
        }
      })();
    </script>
  </head>
  <body class="theme-gold selection:bg-emerald-600 selection:text-white bg-[#050806] text-slate-100 min-h-screen flex items-center justify-center p-4">
    <div class="w-full max-w-lg p-8 sm:p-10 rounded-3xl glass-panel-elevated border border-[#C6A15B]/40 text-center space-y-6 shadow-2xl">
      <div class="w-16 h-16 rounded-full border border-[#C6A15B]/50 p-1 mx-auto bg-[#07130D]">
        <img src="${cleanBase}assets/aistudio/image_ef5d64bf.png" alt="Emblem" class="w-full h-full object-cover rounded-full" />
      </div>

      <div class="space-y-2">
        <span class="text-xs font-mono uppercase tracking-widest text-[#E5C78B] font-bold">404 · Page Not Found</span>
        <h1 class="text-3xl sm:text-4xl font-extrabold text-white font-serif">الصفحة غير موجودة</h1>
        <p class="text-xs sm:text-sm text-emerald-200/80 leading-relaxed">
          The requested page could not be found or has been relocated. You can return to the primary homepage or explore our specialized technical directories below.
        </p>
      </div>

      <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="${cleanBase}index.html" class="w-full sm:w-auto btn-gold text-xs py-3 px-6 font-bold">
          <span>Home (EN)</span>
        </a>
        <a href="${cleanBase}ar/index.html" class="w-full sm:w-auto btn-ghost-gold text-xs py-3 px-6 font-bold">
          <span>الرئيسية (عربي)</span>
        </a>
      </div>

      <div class="pt-4 border-t border-emerald-950/80 text-[11px] text-slate-400">
        <a href="${cleanBase}en/services/index.html" class="hover:text-[#E5C78B] mx-2">Services (93)</a>·
        <a href="${cleanBase}en/tenders/awarded-tenders.html" class="hover:text-[#E5C78B] mx-2">Tenders (400+)</a>·
        <a href="${cleanBase}en/articles/index.html" class="hover:text-[#E5C78B] mx-2">Articles (132)</a>
      </div>
    </div>
  </body>
</html>`;
      fs.writeFileSync(fourOhFourPath, fourOhFourHtml, 'utf-8');

      // 6. Update manifest.json in dist if present
      const distManifestPath = path.join(distDir, 'manifest.json');
      if (fs.existsSync(distManifestPath)) {
        try {
          const manifest = JSON.parse(fs.readFileSync(distManifestPath, 'utf-8'));
          manifest.id = cleanBase;
          manifest.start_url = `${cleanBase}index.html`;
          manifest.scope = cleanBase;
          if (Array.isArray(manifest.icons)) {
            manifest.icons = manifest.icons.map((ic: { src: string }) => ({
              ...ic,
              src: ic.src.startsWith(cleanBase) ? ic.src : `${cleanBase}${ic.src.replace(/^\//, '')}`
            }));
          }
          fs.writeFileSync(distManifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
        } catch {
          // ignore
        }
      }

      // 7. Update sitemap.xml in dist if present
      const distSitemapPath = path.join(distDir, 'sitemap.xml');
      if (fs.existsSync(distSitemapPath)) {
        try {
          let sitemap = fs.readFileSync(distSitemapPath, 'utf-8');
          sitemap = sitemap.replace(/https:\/\/youssefghamry\.com\//g, `${siteUrl}/`);
          fs.writeFileSync(distSitemapPath, sitemap, 'utf-8');
        } catch {
          // ignore
        }
      }
    }
  };
}

export default defineConfig(() => {
  const base = '/yg/';

  return {
    base,
    plugins: [react(), tailwindcss(), githubPagesPostProcessor(base)],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: getHtmlInputs(),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
