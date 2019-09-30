if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then((registrationObject) => console.log('Service worker registered '))
    .catch((err)=> console.log('Not Registered', err));
}