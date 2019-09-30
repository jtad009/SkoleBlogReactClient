const staticCacheName = 'skole-blog-cache-v1';
const dynamicCacheName = 'skole-blog-dynamic-cache-v1'
const asset = [
    '/',
    '/index.html',
    '/static/bundle.js',
    '/css/bootstrap.min.css',
    '/css/sb-admin.css',
    '/js/bootstrap.min.js',
    '/js/jquery.min.js',
    '/script/js/',
    '/img/bg-post.jpg',
    '/img/skole.png'
    
];

self.addEventListener('install', evt => {
    //wait untill async task is complete as install event terminates after sw install
    evt.waitUntil(
        caches.open(staticCacheName)
        .then(cache => {
            console.log('Caching shell asset')
            cache.addAll(asset);
        })
    );
  
});
self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== staticCacheName && key !== dynamicCacheName)
                .map(key => caches.delete(key))
            );
        })
        
    );
});

//get fetch events
self.addEventListener('fetch', evt => {
   
    evt.respondWith(
        // if(event.request.url.includes("/api/")){}
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes => {
                return caches.open(dynamicCacheName).then(cache => {
                    cache.put(evt.request.url, fetchRes.clone());
                    return fetchRes;
                })
            });
        })
    );
});



if(window.indexedDB){

}else{
    console.log("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
}