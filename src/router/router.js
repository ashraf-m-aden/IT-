import * as VueRouter from "vue-router";

// Pages

// import Login from './components/other-pages/authentication/login.vue';
// import Register from './components/other-pages/authentication/registration.vue';

import ServicesProgrammation from "../components/other-pages/courses/ServicesProgrammation";
import Angular from "../components/other-pages/courses/programmation/Angular.vue";
import Html from "../components/other-pages/courses/programmation/HtmlCss.vue";
import Javascript from "../components/other-pages/courses/programmation/Javascript.vue";
import MySQL from "../components/other-pages/courses/programmation/MySQL.vue";
import Java from "../components/other-pages/courses/programmation/Java.vue";
import Node from "../components/other-pages/courses/programmation/Node.vue";
import Vue from "../components/other-pages/courses/programmation/Vue.vue";

import ServiceReseauxSystemes from "../components/other-pages/courses/ServicesReseaux.vue";
import Linux from "../components/other-pages/courses/reseaux/Linux.vue";
import FondamentauxReseaux from "../components/other-pages/courses/reseaux/FondamentauxReseaux.vue";
import ReseauxAvances from "../components/other-pages/courses/reseaux/ReseauxAvances.vue";
import GNS3 from "../components/other-pages/courses/reseaux/GNS3.vue";
import SecuriteInformatique from "../components/other-pages/courses/reseaux/SecuriteInformatique.vue";
import InstallationWindows from "../components/other-pages/courses/reseaux/InstallationWindows.vue";
import AdminWinServer from "../components/other-pages/courses/reseaux/AdminWinServer.vue";
import Bureautique from "../components/other-pages/courses/reseaux/Bureautique.vue";

import Apropo from "../components/other-pages/about/Apropos.vue";

import Contact from "../components/other-pages/contact/Contact";

import NotFound from "../components/other-pages/not-found/NotFound.vue";

import ITStartup from "../components/ITStartup";

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  linkExactActiveClass: "active",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    { path: "/", component: ITStartup },

    { path: "/cours-programmation/html-css", component: Html },
    { path: "/cours-programmation", component: ServicesProgrammation },
    { path: "/cours-programmation/angular", component: Angular },
    { path: "/cours-programmation/vue", component: Vue },
    { path: "/cours-programmation/javascript", component: Javascript },
    { path: "/cours-programmation/java", component: Java },
    { path: "/cours-programmation/node", component: Node },
    { path: "/cours-programmation/mysql", component: MySQL },

    { path: "/cours-reseaux-systemes", component: ServiceReseauxSystemes },
    { path: "/cours-reseaux-systemes/linux", component: Linux },
    {
      path: "/cours-reseaux-systemes/fondamentaux-reseaux",
      component: FondamentauxReseaux,
    },
    {
      path: "/cours-reseaux-systemes/reseaux-avances",
      component: ReseauxAvances,
    },
    { path: "/cours-reseaux-systemes/gns3", component: GNS3 },
    {
      path: "/cours-reseaux-systemes/securite-informatique",
      component: SecuriteInformatique,
    },
    {
      path: "/cours-reseaux-systemes/installation-windows",
      component: InstallationWindows,
    },
    {
      path: "/cours-reseaux-systemes/admin-serveur",
      component: AdminWinServer,
    },
    { path: "/cours-reseaux-systemes/bureautique", component: Bureautique },

    // { path: '/login', component: Login },
    // { path: '/register', component: Register },

    { path: "/not-found", component: NotFound },

    { path: "/a-propos", component: Apropo },

    { path: "/contact", component: Contact },

    { path: "/**", component: NotFound },
  ],
});

router.beforeEach((to, from, next) => {
  if (
    (to.path === "/login" || to.path === "/login#") &&
    localStorage.getItem("isLoggedIn") == "true"
  ) {
    return next("/");
  }
  next();
});
