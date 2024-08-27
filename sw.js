// sw.js
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
);

// In your service worker:
// It's up to you to either precache, use warmRuntimeCache, or
// explicitly call cache.add() to populate the cache with media assets.
// If you choose to cache media assets up front, do so with care,
// as they can be quite large and exceed storage quotas.
//
// This route will go to the network if there isn't a cache match,
// but it won't populate the cache at runtime because the response for
// the media asset will be a partial 206 response. If there is a cache
// match, then it will properly serve partial responses.
workbox.routing.registerRoute(
  ({ request }) => request.destination === "video",
  new workbox.strategies.CacheFirst({
    cacheName: "video-cache",
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [200],
      }),
      new workbox.rangeRequests.RangeRequestsPlugin(),
    ],
  })
);
workbox.routing.registerRoute(
  ({ request }) => request.destination === "audio",
  new workbox.strategies.CacheFirst({
    cacheName: "audio-cache",
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [200],
      }),
      new workbox.rangeRequests.RangeRequestsPlugin(),
    ],
  })
);
workbox.routing.registerRoute(
  ({ request }) => request.destination === "image",
  new workbox.strategies.CacheFirst({
    cacheName: "image-cache",
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [200],
      }),
      new workbox.rangeRequests.RangeRequestsPlugin(),
    ],
  })
);

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
