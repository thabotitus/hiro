const HIRO_CACHE = "hiro-sw-cache-v1"

const assets = [
  "./js/app.min.js",
  "./css/app.min.css",
  "./css/app.min.css.map",
  "./images/icons/icon-72.png",
  "./images/icons/icon-128.png",
  "./images/icons/icon-144.png",
  "./images/icons/icon-152.png",
  "./images/icons/icon-196.png",
  "./images/icons/icon-256.png",
  "./images/icons/icon-512.png",
  "./images/icons/icon-1024.png",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
  "https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css",
  "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css",
  "https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;700&family=PT+Mono&display=swap",
  "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/default.min.css",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/highlight.min.js",
  "https://res.cloudinary.com/duvwrnkqj/image/upload/v1638010336/Logos/HiroLight_nxobf5.png",
  "https://res.cloudinary.com/duvwrnkqj/image/upload/v1638004524/Logos/HiroDark_ith1ug.png"
]

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
