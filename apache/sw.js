const ASSETS=[],CACHE_NAME="p4-980126d3f243a9971469698251161e5f8f613a6cb9abe714bbc5ff532afe4991",IS_PRODUCTION=true,base=location.pathname.substr(0,location.pathname.indexOf("sw.js"));self.addEventListener("install",(e=>{self.skipWaiting(),e.waitUntil(caches.open(CACHE_NAME).then((e=>e.addAll(ASSETS.map((e=>""===e?base:e))))))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((e=>Promise.all(e.filter((e=>e!==CACHE_NAME)).map((e=>caches.delete(e)))))))}));const fetchWithTimeout=e=>new Promise(((t,s)=>{const n=setTimeout(s,5e3);fetch(e).then((e=>{clearTimeout(n),t(e)})).catch((e=>{clearTimeout(n),s(e)}))}));self.addEventListener("fetch",(e=>{if("GET"!==e.request.method)return;const t=new URL(e.request.url);if(t.origin!==location.origin)return;const s=t.pathname.substr(base.length);if(IS_PRODUCTION&&ASSETS.includes(s)){t.search="";!!s?e.respondWith(caches.match(new Request(t)).then((t=>t||fetch(e.request)))):e.respondWith(fetchWithTimeout(e.request).catch((()=>caches.match(new Request(t)))))}}));