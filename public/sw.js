// Youssef Ghamry Platform - Modern Service Worker
const CACHE_NAME = 'yg-platform-v11';
const BASE_PATH = self.registration.scope.includes('/yg') ? '/yg' : '';
const PRECACHE_ASSETS = [
  BASE_PATH + '/',
  BASE_PATH + '/index.html',
  BASE_PATH + '/ar/index.html',
  BASE_PATH + '/assets/css/style.css',
  BASE_PATH + '/assets/images/youssef-executive-portrait.jpg',
  BASE_PATH + '/assets/images/youssef-executive-avatar.jpg',
  BASE_PATH + '/assets/aistudio/image_ef5d64bf.png',
  BASE_PATH + '/assets/icons/icon-192.png',
  BASE_PATH + '/assets/icons/icon-512.png',
  BASE_PATH + '/assets/icons/icon-maskable-512.png',
  BASE_PATH + '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('Pre-caching non-fatal warning:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Network-first for HTML pages, CSS, and JS so updates appear immediately
  if (
    event.request.mode === 'navigate' ||
    url.pathname.match(/\.(html|css|js)$/)
  ) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const cloned = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, cloned));
          }
          return response;
        })
        .catch(() => caches.match(event.request) || caches.match(BASE_PATH + '/index.html'))
    );
    return;
  }

  // Cache-first for immutable media & web fonts
  if (
    url.pathname.match(/\.(png|jpg|jpeg|svg|webp|woff|woff2|ico)$/) ||
    url.origin.includes('fonts.googleapis.com') ||
    url.origin.includes('fonts.gstatic.com')
  ) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          const cloned = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, cloned));
          return response;
        });
      })
    );
    return;
  }

  // Default fetch
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
