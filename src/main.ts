import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/router'
import "./registerServiceWorker";
import { createPinia } from "pinia";
import "./assets/style/custom.scss";
import VueFeather from "vue-feather";

const pinia = createPinia();
// import * as VueRouter from "vue-router";
// App.use(VueRouter);
const app = createApp(App);

app.component(VueFeather.name, VueFeather);

app.use(pinia).use(router).mount("#app");

