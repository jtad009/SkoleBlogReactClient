const staticCacheName = 'skole-blog-cache-v2';
const dynamicCacheName = 'skole-blog-dynamic-cache-v2'
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
//cache size limit func
const limitCacheSize = (name, size) => {
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            if(keys.length > size){
                cache.delete(keys[0]).then(limitCacheSize(name, size))
            }
        })
    })
};
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
        
        caches.match(evt.request).then(cacheRes => {
            return cacheRes 
            || fetch(evt.request).then(fetchRes => {
                return caches.open(dynamicCacheName).then(cache => {
                    if(evt.request.url.includes("/api/v1/")){
                        // console.log(fetchRes.clone());
                    }else{
                        cache.put(evt.request.url, fetchRes.clone());
                        limitCacheSize(dynamicCacheName, 20);
                    }
                    
                    return fetchRes;
                })
            });
        })
    );
});


// 