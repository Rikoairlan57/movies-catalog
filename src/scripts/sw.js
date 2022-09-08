self.addEventListener("install", (event) => {
    console.log("Installing service worker...")
});

self.addEventListener("activate", (event) => {
    console.log("Activating Service worker...")
});

self.addEventListener("fetch", (event) => {
    console.log(event.request);

    event.respondWith(fetch(event.request))
});

