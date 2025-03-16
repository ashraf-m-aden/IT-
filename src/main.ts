import { createApp } from 'vue'
import './assets/style/custom.scss'
import App from './App.vue'
// import "./registerServiceWorker";
import { createPinia } from "pinia";
import "./assets/style/style.scss";
import VueFeather from "vue-feather";
import { createHead } from "@vueuse/head";
import "../firebaseConfig"
const pinia = createPinia();
import axios from "axios";

// import * as VueRouter from "vue-router";
// App.use(VueRouter);
import  router  from "./router/router";
const head = createHead(); // Create the head manager
import Toast, { POSITION } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const app = createApp(App);
// Set Axios globally
app.config.globalProperties.$axios = axios;
app.use(Toast, {
    // Setting the global default position
    position: POSITION.TOP_RIGHT,
    timeout: 2000
});


app.use(head); // Use @vueuse/head globally

app.component(VueFeather.name!, VueFeather);

app.use(pinia).use(router).mount("#app");
