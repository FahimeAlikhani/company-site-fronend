import { createApp } from 'vue';
import App from './App.vue';
import "@fontsource/vazir";
import "@fontsource/poppins";
import store from './store/index.js';
//import "@fontsource/IRANSansFaNum";
import reset from './assets/reset/reset.css';
import router from './components/router/index' 

const app = createApp(App);
app.use(store);
app.use(reset);
app.use(router);
app.mount('#app');
