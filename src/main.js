/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

import VueFeather from 'vue-feather'
import vWow from 'v-wow'
import VueCarousel from 'vue-carousel'
import './assets/style/custom.scss'
import router from './router'
import store from './store/index'

import { fb, db } from '../db.js'
// Plugins
const app = createApp(App)
app.use(router)
app.use(store)

app.config.productionTip = false

app.use(fb)
app.use(db)

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })

app.use(VueFeather)
app.use(vWow)
app.use(VueCarousel)

router.isReady().then(() => app.mount('#app'))
