const CACHE_NAME = 'math2a-v2';

const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Với index.html: Network First để luôn cập nhật bản mới nhất khi có mạng, nếu mất mạng thì đọc cache
  if (
    event.request.mode === 'navigate' ||
    event.request.url.endsWith('index.html') ||
    event.request.url.endsWith('/')
  ) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          const resClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, resClone));
          return networkResponse;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Với hình ảnh và tài nguyên khác: Cache First để mở siêu nhanh và hỗ trợ Offline
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200) {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      });
    })
  );
});
