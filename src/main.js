import Vue from 'vue'
import VueRouter from 'vue-router';
import { BootstrapVue } from 'bootstrap-vue';
import VueFeather from 'vue-feather';
import vWow from 'v-wow';
import VueCarousel from 'vue-carousel';
import Toasted from 'vue-toasted';
import App from './App.vue'
import './assets/style/custom.scss';
import { router } from './router';
import store from './store';
import firebase from 'firebase';
import 'firebase/firestore';
Vue.config.productionTip = false;
import config from '../config.json';
firebase.initializeApp(config.firebase)

Vue.use(BootstrapVue);
Vue.use(VueFeather);
Vue.use(VueRouter);
Vue.use(vWow);
Vue.use(VueCarousel);
Vue.use(Toasted)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
