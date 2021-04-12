import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import 'assets/css/global.css'
import 'network/request';
import axios from "axios";
const app = createApp(App)
installElementPlus(app)
app.use(store).use(router).mount('#app')
// app.config.globalProperties.$http = axios;
// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/';