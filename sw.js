/*
  Service Worker for offline-first caching
  - Cache-first for images and fonts
  - Stale-while-revalidate for JS and CSS
  - Network-first for navigations (HTML) with cached fallback
*/

const CACHE_VERSION = 'v1.0.0';
const PRECACHE_CACHE = `precache-${CACHE_VERSION}`;
const RUNTIME_CACHE = `runtime-${CACHE_VERSION}`;

// Minimal precache: core shell only
const PRECACHE_URLS = [
  './',
  './index.html',
  './assets/css/style.css',
  './assets/js/lib.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(PRECACHE_CACHE).then((cache) => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => ![PRECACHE_CACHE, RUNTIME_CACHE].includes(key))
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

/**
 * Cache-first strategy
 */
async function cacheFirst(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request, { ignoreVary: true });
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    return cached || Promise.reject(err);
  }
}

/**
 * Stale-while-revalidate strategy
 */
async function staleWhileRevalidate(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request, { ignoreVary: true });
  const networkFetch = fetch(request)
    .then((response) => {
      if (response && response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => undefined);
  return cached || networkFetch;
}

/**
 * Network-first strategy for HTML navigations
 */
async function networkFirst(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    const cached = await cache.match(request, { ignoreVary: true });
    if (cached) return cached;
    // As a last resort, serve the precached shell
    const fallback = await caches.match('./index.html');
    return fallback || Promise.reject(err);
  }
}

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only handle GET and same-origin
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  const destination = request.destination;

  // Avoid caching large videos by default
  if (destination === 'video' || url.pathname.endsWith('.mp4')) return;

  // Runtime routing rules
  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request));
    return;
  }

  // Images and fonts: cache-first
  if (
    destination === 'image' ||
    destination === 'font' ||
    url.pathname.startsWith('/assets/img/') ||
    url.pathname.startsWith('/assets/fonts/')
  ) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // JS and CSS: stale-while-revalidate
  if (
    destination === 'script' ||
    destination === 'style' ||
    url.pathname.startsWith('/assets/js/') ||
    url.pathname.startsWith('/assets/css/') ||
    url.pathname.startsWith('/svelte/dist/assets/js/') ||
    url.pathname.startsWith('/svelte/dist/assets/css/')
  ) {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }

  // Default: try SWR for other same-origin GET requests
  event.respondWith(staleWhileRevalidate(request));
});


