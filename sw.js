/* Bank of Career Ed service worker: keeps the app working offline.
   When you upload a new version of the app, change VERSION below so every iPad picks it up. */
var VERSION="bank-v1";
var CORE=["./","index.html","manifest.webmanifest","logo.png","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","fonts/comic-neue-400.woff2","fonts/comic-neue-700.woff2"];
self.addEventListener("install",function(e){
  e.waitUntil(caches.open(VERSION).then(function(c){
    return c.addAll(CORE.map(function(u){return new Request(u,{cache:"reload"});}));
  }).then(function(){return self.skipWaiting();}));
});
self.addEventListener("activate",function(e){
  e.waitUntil(caches.keys().then(function(ks){
    return Promise.all(ks.filter(function(k){return k!==VERSION;}).map(function(k){return caches.delete(k);}));
  }).then(function(){return self.clients.claim();}));
});
/* Open instantly from the saved copy, and quietly fetch a fresh copy for next time. */
self.addEventListener("fetch",function(e){
  var r=e.request;
  if(r.method!=="GET")return;
  var u=new URL(r.url);
  if(u.origin!==location.origin)return;
  e.respondWith(caches.open(VERSION).then(function(c){
    return c.match(r,{ignoreSearch:true}).then(function(hit){
      var net=fetch(r.mode==="navigate"?r.url:r,{cache:"no-cache"}).then(function(res){
        if(res&&res.ok)c.put(r,res.clone());return res;
      }).catch(function(){return null;});
      if(hit){e.waitUntil(net);return hit;}
      return net.then(function(res){return res||(r.mode==="navigate"?c.match("index.html"):Response.error());});
    });
  }));
});
