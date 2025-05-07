/// <reference lib="webworker" />

declare const self: ServiceWorkerGlobalScope

const CACHE_NAME = "portfolio-cache-v1"

// Assets to cache
const STATIC_ASSETS = ["/", "/articles", "/media", "/offline", "/favicon.ico"]

// Install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS)
    }),
  )
  self.skipWaiting()
})

// Activate event
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => cacheName !== CACHE_NAME).map((cacheName) => caches.delete(cacheName)),
      )
    }),
  )
  self.clients.claim()
})

// Fetch event
self.addEventListener("fetch", (event) => {
  // Skip non-GET requests
  if (event.request.method !== "GET") return

  // Skip browser-sync and analytics requests
  if (
    event.request.url.includes("browser-sync") ||
    event.request.url.includes("analytics") ||
    event.request.url.includes("gtag") ||
    event.request.url.includes("gtm")
  ) {
    return
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return cached response if found
      if (cachedResponse) {
        return cachedResponse
      }

      // Otherwise, fetch from network
      return fetch(event.request)
        .then((response) => {
          // Don't cache if not a valid response
          if (!response || response.status !== 200 || response.type !== "basic") {
            return response
          }

          // Clone the response
          const responseToCache = response.clone()

          // Cache the fetched response
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache)
          })

          return response
        })
        .catch(() => {
          // If fetch fails (offline), show offline page for HTML requests
          if (event.request.headers.get("Accept")?.includes("text/html")) {
            return caches.match("/offline")
          }
        })
    }),
  )
})

// Push event
self.addEventListener("push", (event) => {
  const data = event.data?.json()

  if (data) {
    const options = {
      body: data.body,
      icon: "/icon-192x192.png",
      badge: "/icon-96x96.png",
      data: {
        url: data.url || "/",
      },
    }

    event.waitUntil(self.registration.showNotification(data.title, options))
  }
})

// Notification click event
self.addEventListener("notificationclick", (event) => {
  event.notification.close()

  event.waitUntil(
    clients.matchAll({ type: "window" }).then((clientList) => {
      const url = event.notification.data?.url || "/"

      // If a window is already open, focus it
      for (const client of clientList) {
        if (client.url === url && "focus" in client) {
          return client.focus()
        }
      }

      // Otherwise, open a new window
      if (clients.openWindow) {
        return clients.openWindow(url)
      }
    }),
  )
})

export {}
