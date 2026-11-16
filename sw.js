// Lairs Tracker offline support.
// Change CACHE when you change this file, so phones drop the old copy.
const CACHE = 'lairs-tracker-v1';

const LOCAL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png'
];

// Fonts and the PDF tool come from the internet once, then stay on the phone.
const REMOTE = [
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Oswald:wght@500;600;700&display=swap'
];
const REMOTE_HOSTS = /(^|\.)(fonts\.googleapis\.com|fonts\.gstatic\.com|cdnjs\.cloudflare\.com)$/;

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(LOCAL);
    await Promise.all(REMOTE.map(url =>
      fetch(url, {mode: 'cors'})
        .then(res => { if (res.ok) return cache.put(url, res); })
        .catch(() => {})
    ));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (url.origin === self.location.origin) {
    // Open instantly from the stored copy, and refresh it in the background when online.
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const cached = await cache.match(req, {ignoreSearch: true});
      const network = fetch(req)
        .then(res => { if (res && res.ok) cache.put(req, res.clone()); return res; })
        .catch(() => null);
      if (cached) {
        event.waitUntil(network);
        return cached;
      }
      const res = await network;
      if (res) return res;
      if (req.mode === 'navigate') {
        const page = await cache.match('./index.html');
        if (page) return page;
      }
      return Response.error();
    })());
    return;
  }

  if (REMOTE_HOSTS.test(url.hostname)) {
    // Fonts and the PDF tool: use the stored copy first.
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const cached = await cache.match(req, {ignoreVary: true});
      if (cached) return cached;
      try {
        const res = await fetch(req);
        if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
        return res;
      } catch (err) {
        return Response.error();
      }
    })());
  }
});
