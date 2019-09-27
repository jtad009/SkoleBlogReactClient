if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then((registrationObject) => console.log('Service worker ', registrationObject))
    .catch((err)=> console.log('Not Registered', err));
}