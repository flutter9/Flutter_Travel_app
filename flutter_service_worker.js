'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/main.dart.js": "6e7a9e645d10a61d8c0945050d8de663",
"/assets/LICENSE": "954706ef951b9553ecb95d1a66a0f589",
"/assets/AssetManifest.json": "0473bded7c188745aa717adbbc47f7bd",
"/assets/FontManifest.json": "d0f9ebc2110dcedfa80ec03f92d6f8a0",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/Nunito/Nunito-ExtraBold.ttf": "19caf1c06e022593ea4657734d691c86",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/paris.png": "3691ce24c52cbc13a3b0eb85cdab2d1d",
"/assets/assets/eiffel.png": "074734ba2b2ead645d24e2d3d793c1be",
"/assets/assets/amsterdam.png": "480bafd528cbc367e685fed4238432aa",
"/assets/assets/tower.png": "51d334331228b4fd3dcdba182d36a59e"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
