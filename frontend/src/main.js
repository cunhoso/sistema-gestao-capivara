import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BootstrapVue3 } from 'bootstrap-vue-3';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

axios.defaults.baseURL = process.env.VUE_APP_API_URL || 'http://localhost:3000';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

const app = createApp(App);

app.use(BootstrapVue3);

app.use(router);
app.mount('#app');