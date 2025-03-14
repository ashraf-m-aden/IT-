import { createApp } from 'vue'
import './assets/style/custom.scss'
import App from './App.vue'
// import "./registerServiceWorker";
import { createPinia } from "pinia";
import "./assets/style/style.scss";
import VueFeather from "vue-feather";
import { createHead } from "@vueuse/head";

const pinia = createPinia();
// import * as VueRouter from "vue-router";
// App.use(VueRouter);
import  router  from "./router/router";
const head = createHead(); // Create the head manager


const app = createApp(App);
app.use(head); // Use @vueuse/head globally

app.component(VueFeather.name!, VueFeather);

app.use(pinia).use(router).mount("#app");
