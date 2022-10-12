import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js';
import router from './router.js'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"


var app=createApp(App);
app.use(router);
app.use(store);

app.mount('#app');
