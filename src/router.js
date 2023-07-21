
// Pages

import ServicesProgrammation from './components/other-pages/courses/ServicesProgrammation'

import MySQL from './components/other-pages/courses/programmation/MySQL.vue'

import ServiceReseauxSystemes from './components/other-pages/courses/ServicesReseaux.vue'
import FondamentauxReseaux from './components/other-pages/courses/reseaux/FondamentauxReseaux.vue'
import ReseauxAvances from './components/other-pages/courses/reseaux/ReseauxAvances.vue'
import GNS3 from './components/other-pages/courses/reseaux/GNS3.vue'
import SecuriteInformatique from './components/other-pages/courses/reseaux/SecuriteInformatique.vue'
import InstallationWindows from './components/other-pages/courses/reseaux/InstallationWindows.vue'
import AdminWinServer from './components/other-pages/courses/reseaux/AdminWinServer.vue'

import Disponibles from './components/other-pages/user-folder/FormationDisponible.vue'

import Apropo from './components/other-pages/about/Apropos.vue'

import NotFound from './components/other-pages/not-found/NotFound'

import ITStartup from './components/landing-pages/ITStartup'
import HtmlCss from './components/other-pages/courses/programmation/HtmlCss.vue'
import CourseAngular from './components/other-pages/courses/programmation/CourseAngular.vue'
import CourseVue from './components/other-pages/courses/programmation/CourseVue.vue'
import CourseJavascript from './components/other-pages/courses/programmation/CourseJavascript.vue'
import CourseNode from './components/other-pages/courses/programmation/CourseNode.vue'
import CourseLinux from './components/other-pages/courses/reseaux/CourseLinux.vue'
import CourseBureautique from './components/other-pages/courses/reseaux/CourseBureautique.vue'
import PageContact from './components/other-pages/contact/PageContact.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkExactActiveClass: 'active',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [

    { path: '/', component: ITStartup },

    { path: '/cours-programmation', component: ServicesProgrammation },
    { path: '/cours-programmation/html-css', component: HtmlCss },
    { path: '/cours-programmation/angular', component: CourseAngular },
    { path: '/cours-programmation/vue', component: CourseVue },
    { path: '/cours-programmation/javascript', component: CourseJavascript },
    { path: '/cours-programmation/java', component: CourseJavascript },
    { path: '/cours-programmation/node', component: CourseNode },
    { path: '/cours-programmation/mysql', component: MySQL },

    { path: '/cours-reseaux-systemes', component: ServiceReseauxSystemes },
    { path: '/cours-reseaux-systemes/linux', component: CourseLinux },
    { path: '/cours-reseaux-systemes/fondamentaux-reseaux', component: FondamentauxReseaux },
    { path: '/cours-reseaux-systemes/reseaux-avances', component: ReseauxAvances },
    { path: '/cours-reseaux-systemes/gns3', component: GNS3 },
    { path: '/cours-reseaux-systemes/securite-informatique', component: SecuriteInformatique },
    { path: '/cours-reseaux-systemes/installation-windows', component: InstallationWindows },
    { path: '/cours-reseaux-systemes/admin-serveur', component: AdminWinServer },
    { path: '/cours-reseaux-systemes/bureautique', component: CourseBureautique },

    { path: '/formations-disponibles', component: Disponibles },

    // { path: '/login', component: Login },
    // { path: '/register', component: Register },

    { path: '/not-found', component: NotFound },

    { path: '/a-propos', component: Apropo },

    { path: '/contact', component: PageContact },

    { path: '/**', component: NotFound }

  ]
})

router.beforeEach((to, from, next) => {
  if ((to.path === '/login' || to.path === '/login#') && localStorage.getItem('isLoggedIn') === 'true') {
    return next('/')
  }
  next()
})
export default router
