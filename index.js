import store from './app/store/index.js';
import App from './app/App.js'

document.addEventListener('DOMContentLoaded', evt => {
    const app = new App({
        store,
        elClass: ".wrapper"
    });
});