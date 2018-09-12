/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "40c6f41028ad3e2174f64e1418489b5e"
  },
  {
    "url": "assets/css/0.styles.fefdbcd3.css",
    "revision": "439d826d57d7154c5ddbcf8f39f129c2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.614cf17f.js",
    "revision": "1bb3cca24f818ce2577b6c986d05a896"
  },
  {
    "url": "assets/js/3.85402eda.js",
    "revision": "bacaa4da6d7ac856c847abc6a7742928"
  },
  {
    "url": "assets/js/4.59f5c700.js",
    "revision": "7f3acf5683bec90645df25332331f0bb"
  },
  {
    "url": "assets/js/5.6ec7d57d.js",
    "revision": "72420f86e302c5acd375a39eaf31e440"
  },
  {
    "url": "assets/js/6.8b147507.js",
    "revision": "61fb8e77cb0e7970c96c0eadb7261ea2"
  },
  {
    "url": "assets/js/7.1ba3d364.js",
    "revision": "369491eb1bb9498c66acc91a7e386f1f"
  },
  {
    "url": "assets/js/app.d00a5a20.js",
    "revision": "f43ba759ba2e092d18ff300649970aab"
  },
  {
    "url": "dev-helpers/cli.html",
    "revision": "1b5c5299416312cfc3d21b5e49bdb69e"
  },
  {
    "url": "docs/methods.html",
    "revision": "5e0f10ccac6964b8bf64de387420a501"
  },
  {
    "url": "index.html",
    "revision": "5a64afa1921168cd0262406a441a0036"
  },
  {
    "url": "start/installation.html",
    "revision": "ebda7fc78b90748168df58ddab9dba94"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
