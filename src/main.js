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

Vue.config.productionTip = false;

import { fb, db } from '../db.js'

Vue.use(fb)
Vue.use(db)

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })



Vue.use(BootstrapVue);
Vue.use(VueFeather);
Vue.use(VueRouter);
Vue.use(vWow);
Vue.use(VueCarousel);

Vue.use(Toasted, {
  iconPack: 'fontawesome'
});
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
