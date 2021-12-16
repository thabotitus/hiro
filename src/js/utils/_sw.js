if ("serviceWorker" in navigator) {
  console.log('SW ready');
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("../../service-worker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}
