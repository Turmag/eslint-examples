import '@/style.scss';
import 'floating-vue/dist/style.css';
import { router } from '@/router/router';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from '@/App.vue';
import FloatingVue from 'floating-vue';

const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(FloatingVue);
app.mount('#app');
