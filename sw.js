// A simple no-fail service worker to force PWA installation
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Just pass the request through to the network
  // This prevents 404 errors from stopping the installation
});
