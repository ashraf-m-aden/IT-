import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import { createPinia } from "pinia";
import "./assets/style/custom.scss";

const pinia = createPinia();
// import * as VueRouter from "vue-router";
// App.use(VueRouter);
import { router } from "./router/router";
import store from "./store";

createApp(App).use(pinia).use(router).mount("#app");
