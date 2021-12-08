import { createApp } from 'vue';
import App from './App.vue';
import "@fontsource/vazir";
import "@fontsource/poppins";
import reset from './assets/reset/reset.css';
const app = createApp(App);
app.use(reset);
app.mount('#app');
