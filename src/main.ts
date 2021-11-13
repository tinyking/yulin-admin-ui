import ElementPlus from 'element-plus';
import { createApp } from 'vue';
import router from './routers';
import i18n from './locale';
import App from './App.vue';

// import styles
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/display.css';

const app = createApp(App);

// install components
app.use(ElementPlus, { size: 'small' });
app.use(router);
app.use(i18n);

// mount app
app.mount('#app');
