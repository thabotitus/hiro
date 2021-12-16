const HIRO_CACHE = "hiro-sw-cache"
const assets = []

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(HIRO_CACHE).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
