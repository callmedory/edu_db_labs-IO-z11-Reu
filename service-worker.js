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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a3d5424351a14250fb517dddd0fb43e4"
  },
  {
    "url": "assets/css/0.styles.a94d5013.css",
    "revision": "255f3751f23377ad05daede6bdca1ec8"
  },
  {
    "url": "assets/img/addeduser.62cd139e.png",
    "revision": "62cd139eff87c2ebe54a2b5a0cd83916"
  },
  {
    "url": "assets/img/adduser.3d583a08.png",
    "revision": "3d583a08ec042abcfbc50c74cf8edf3b"
  },
  {
    "url": "assets/img/allusers.4dfa74ec.png",
    "revision": "4dfa74ecb4dc7e908f6c1f00d8d20fa6"
  },
  {
    "url": "assets/img/deleted.2aa5c8df.png",
    "revision": "2aa5c8dfb775d50520ae2f6f202f5893"
  },
  {
    "url": "assets/img/deletenotfound.c097cbc7.png",
    "revision": "c097cbc72560f7ba23cfb91db50e4b10"
  },
  {
    "url": "assets/img/deleteuser.b5ea2065.png",
    "revision": "b5ea206528314d0fd1a275686558255d"
  },
  {
    "url": "assets/img/EER.10208c4b.png",
    "revision": "10208c4bec682ee4b78ab4301bbdff14"
  },
  {
    "url": "assets/img/finduser.ba853d61.png",
    "revision": "ba853d61ca9f24bc4f9751b8dffe83dc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/updateduser.a621a431.png",
    "revision": "a621a431bb2e4978799482b708fe9832"
  },
  {
    "url": "assets/img/updatenotfound.b43fd1ff.png",
    "revision": "b43fd1ffcd1044f78cf1d4c05c370134"
  },
  {
    "url": "assets/img/usernotfound.5d3ee6e8.png",
    "revision": "5d3ee6e87ded73ca14232fd1c5ec4533"
  },
  {
    "url": "assets/img/userupdate.35f8b8fa.png",
    "revision": "35f8b8fa487de6bb132fea56a204011e"
  },
  {
    "url": "assets/js/10.eb16c742.js",
    "revision": "0462b08e2d13728ec9c2fb460bfc2ff7"
  },
  {
    "url": "assets/js/11.9f95bcea.js",
    "revision": "c75aad72b17e49d4b15996b43d37148f"
  },
  {
    "url": "assets/js/12.21fae77a.js",
    "revision": "141802a57741398351f7dafa27475b53"
  },
  {
    "url": "assets/js/13.6a180b2c.js",
    "revision": "6e46a15fa596d1671d9549f5486809e7"
  },
  {
    "url": "assets/js/14.e8321ced.js",
    "revision": "6cc042f965ae3432eee14978696f5eef"
  },
  {
    "url": "assets/js/15.b9293569.js",
    "revision": "92e7f62cc4977a7e275c65c1e01977d4"
  },
  {
    "url": "assets/js/16.0eccf095.js",
    "revision": "03425cc06aa6cdbb21bc0b7afaa0a137"
  },
  {
    "url": "assets/js/17.7b7d9538.js",
    "revision": "b79cf36f5417810dea1b5b93fda6a045"
  },
  {
    "url": "assets/js/18.c214af66.js",
    "revision": "0cabd6ae938ec637b28f5f25ed288f40"
  },
  {
    "url": "assets/js/19.5ad1c0af.js",
    "revision": "62aafb68e19de81fc59510e838d63888"
  },
  {
    "url": "assets/js/2.8b81ca1c.js",
    "revision": "6e385980e1361a82053c75467019136d"
  },
  {
    "url": "assets/js/20.30d32d34.js",
    "revision": "a2e259f29292f34796ff35dad619e138"
  },
  {
    "url": "assets/js/21.62e8b4cf.js",
    "revision": "d4cfc336ea1d70283b0dfda13bc758db"
  },
  {
    "url": "assets/js/22.4f334c8e.js",
    "revision": "1932f71782d5c0457cbd2726e85149e1"
  },
  {
    "url": "assets/js/23.08a39936.js",
    "revision": "38853251c806898f7a8626be3b8383e8"
  },
  {
    "url": "assets/js/24.c927b7f4.js",
    "revision": "2363e399d11dbfc77594ce71754a058f"
  },
  {
    "url": "assets/js/26.d055c4e2.js",
    "revision": "72ceaebfab60dab1c69530cf4a1c6117"
  },
  {
    "url": "assets/js/3.e8bb8459.js",
    "revision": "afa01a7f0eae82e3925307d7cf681684"
  },
  {
    "url": "assets/js/4.47bd8645.js",
    "revision": "1f5d106ae36de262c9dc9e3d06fd3da8"
  },
  {
    "url": "assets/js/5.bb25f919.js",
    "revision": "2e688bc88dc1351c9748b25b8258bf19"
  },
  {
    "url": "assets/js/6.bd61b622.js",
    "revision": "e46d1a15d85befb20515948df81dbce7"
  },
  {
    "url": "assets/js/7.6b463537.js",
    "revision": "258a39b8bdd92332ab098c4ed83d649d"
  },
  {
    "url": "assets/js/8.41a96ea7.js",
    "revision": "9e76e554525db01fa2088c8714e67270"
  },
  {
    "url": "assets/js/9.4ed8c080.js",
    "revision": "4119d9ce5fe2ca70e543b1e6e733a4fc"
  },
  {
    "url": "assets/js/app.a2d0983b.js",
    "revision": "0c4204af842d5f129dfbe2c8a555125b"
  },
  {
    "url": "conclusion/index.html",
    "revision": "12f6ef3fd17b18d1642e2b7b89213c71"
  },
  {
    "url": "design/index.html",
    "revision": "fc08c519f1d1445f0696394f3e5062a2"
  },
  {
    "url": "index.html",
    "revision": "8e6ebe10aad20b7192ebf98c549466d6"
  },
  {
    "url": "intro/index.html",
    "revision": "69f71a431144382f0357d77b896eb3ba"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "1c5c06899fda6a8f105a86b106acba3c"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "58f11efbc2062c2935488ed5417a166a"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "8a3a34248e587a9d5f202c7b8503019f"
  },
  {
    "url": "software/index.html",
    "revision": "42daf2312e230b3b512cd181a89e3a35"
  },
  {
    "url": "test/index.html",
    "revision": "df5cbb602a1cbfb1a9a4dac149111d92"
  },
  {
    "url": "use cases/index.html",
    "revision": "b698d40436f7a29f3dcb36e8780b25c9"
  }
].concat(self.__precacheManifest || []);
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
