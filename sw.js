importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js'
)

workbox.routing.registerRoute(
  /\/$|\/\?(utm_source|hl)/,
  workbox.strategies.networkFirst({ cacheName: 'pages' })
)

workbox.routing.registerRoute(
  /\.js$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'javascript'
  })
)

workbox.routing.registerRoute(
  // Cache image files
  /.*\.(?:png|jpg|jpeg|svg|gif)/,
  // Use the cache if it's available
  workbox.strategies.cacheFirst({
    cacheName: 'image',
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 999 images
        maxEntries: 999,
        // Cache for a maximum of a week
        maxAgeSeconds: 7 * 24 * 60 * 60
      })
    ]
  })
)

// Instagram endpoint
workbox.routing.registerRoute(
  /.*\?__a=1/,
  workbox.strategies.cacheFirst({
    cacheName: 'phuongmychi',
    plugins: [
      new workbox.expiration.Plugin({
        // Cache for a maximum of a day
        maxAgeSeconds: 86400
      })
    ]
  })
)
