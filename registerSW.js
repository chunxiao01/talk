if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/talk/sw.js', { scope: '/talk/' })})}