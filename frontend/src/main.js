import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/router';
import './style.css'

const app = createApp(App);

// Plugins
app.use(router);

app.mount('#app');