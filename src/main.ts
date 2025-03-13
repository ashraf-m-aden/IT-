import { createApp } from 'vue'
import './assets/style/custom.scss'
import App from './App.vue'
// import "./registerServiceWorker";
import { createPinia } from "pinia";
import "./assets/style/style.scss";
import VueFeather from "vue-feather";

const pinia = createPinia();
// import * as VueRouter from "vue-router";
// App.use(VueRouter);
import { router } from "./router/router.js";


const app = createApp(App);

app.component(VueFeather.name!, VueFeather);

app.use(pinia).use(router).mount("#app");
