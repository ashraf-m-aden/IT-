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
  history: VueRouter.createWebHistory(),
  linkExactActiveClass: "active",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      component: ITStartup,
      meta: {
        title: "IT+ Advanced Technology",
        description:
          "Bienvenue dans le meilleur centre de formation pratique en informatique à Djibouti. | Cours en Formations en informatique à Djibouti",
      },
    },

    {
      path: "/cours-programmation/html-css",
      component: Html,
      meta: {
        title: "HTML - IT+ Advanced Technology",
        description:
          "Plongez dans les base de la programmation avec notre formation en HTML et CSS | Cours en Formations en informatique à Djibouti",
      },
    },
    {
      path: "/cours-programmation",
      component: ServicesProgrammation,
      meta: {
        title: "PROGRAMMATION - IT+ Advanced Technology",
        description: "Consultez la liste de nos formations en programmation | Cours en Formations en informatique à Djibouti",
      },
    },
    {
      path: "/cours-programmation/angular",
      component: Angular,
      meta: {
        title: "ANGULAR - IT+ Advanced Technology",
        description: "Maitrisez un des meilleurs frameworks Javascript | Cours en Formations en informatique à Djibouti",
      },
    },
    {
      path: "/cours-programmation/vue",
      component: Vue,
      meta: {
        title: "VUE - IT+ Advanced Technology",
        description: "Maitrisez un des meilleurs frameworks Javascript | Cours en Formations en informatique à Djibouti",
      },
    },
    {
      path: "/cours-programmation/javascript",
      component: Javascript,
      meta: {
        title: "JAVASCRIPT - IT+ Advanced Technology",
        description:
          "Apprenez les bases du Javascript et élargissez vos horizons! | Cours en Formations en informatique à Djibouti",
      },
    },
    {
      path: "/cours-programmation/java",
      component: Java,
      meta: {
        title: "JAVA - IT+ Advanced Technology",
        description:
          "Maitrisez un des languages de programmation les plus populaires | Cours en Formations en informatique à Djibouti",
      },
    },
    {
      path: "/cours-programmation/node",
      component: Node,
      meta: {
        title: "NODE - IT+ Advanced Technology",
        description:
          "Plongez dans le mondes des backends et créez vos premieres applications backends | Cours en Formations en informatique à Djibouti",
      },
    },
    {
      path: "/cours-programmation/mysql",
      component: MySQL,
      meta: {
        title: "MYSQL - IT+ Advanced Technology",
        description: "Nos formations en base de données vont vous interesser! | Cours en Formations en informatique à Djibouti",
      },
    },

    {
      path: "/cours-reseaux-systemes",
      component: ServiceReseauxSystemes,
      meta: {
        title: "RESEAUX - IT+ Advanced Technology",
        description: "La liste de nos formations en réseaux informatiques | Cours en Formations en informatique à Djibouti",
      },
    },
    {
      path: "/cours-reseaux-systemes/linux",
      component: Linux,
      meta: {
        title: "Formation Linux - IT+ Advanced Technology",
        description:
          "Maîtrisez l'administration Linux et découvrez les bases des systèmes open-source avec notre formation pratique. | Cours en Formations en informatique à Djibouti",
      },
    },
    {
      path: "/cours-reseaux-systemes/fondamentaux-reseaux",
      component: FondamentauxReseaux,
      meta: {
        title: "Fondamentaux des Réseaux - IT+ Advanced Technology",
        description:
          "Apprenez les bases des réseaux informatiques : protocoles, infrastructures et configuration pour bien débuter. | Cours en Formations en informatique à Djibouti",
      },
    },
    {
      path: "/cours-reseaux-systemes/reseaux-avances",
      component: ReseauxAvances,
      meta: {
        title: "Réseaux Avancés - IT+ Advanced Technology",
        description:
          "Approfondissez vos connaissances en réseaux informatiques et maîtrisez les architectures avancées. | Cours en Formations en informatique à Djibouti",
      },
    },
    {
      path: "/cours-reseaux-systemes/gns3",
      component: GNS3,
      meta: {
        title: "GNS3 et Simulation Réseau - IT+ Advanced Technology",
        description:
          "Utilisez GNS3 pour simuler et tester vos configurations réseau dans un environnement pratique. | Cours en Formations en informatique à Djibouti",
      },
    },
    {
      path: "/cours-reseaux-systemes/securite-informatique",
      component: SecuriteInformatique,
      meta: {
        title: "Sécurité Informatique - IT+ Advanced Technology",
        description:
          "Développez vos compétences en cybersécurité et apprenez à protéger les systèmes informatiques contre les menaces. | Cours en Formations en informatique à Djibouti",
      },
    },
    {
      path: "/cours-reseaux-systemes/installation-windows",
      component: InstallationWindows,
      meta: {
        title:
          "Installation et Configuration Windows - IT+ Advanced Technology",
        description:
          "Apprenez à installer, configurer et gérer les systèmes Windows pour une utilisation professionnelle. | Cours en Formations en informatique à Djibouti",
      },
    },
    {
      path: "/cours-reseaux-systemes/admin-serveur",
      component: AdminWinServer,
      meta: {
        title: "Administration Windows Server - IT+ Advanced Technology",
        description:
          "Maîtrisez l'administration des serveurs Windows et optimisez la gestion des infrastructures IT. | Cours en Formations en informatique à Djibouti",
      },
    },
    {
      path: "/cours-reseaux-systemes/bureautique",
      component: Bureautique,
      meta: {
        title: "Formation Bureautique - IT+ Advanced Technology",
        description:
          "Optimisez votre productivité avec nos formations en bureautique : Word, Excel, PowerPoint et plus encore. | Cours en Formations en informatique à Djibouti",
      },
    },

    {
      path: "/not-found",
      component: NotFound,
      meta: {
        title: "IT+ Advanced Technology",
        description: "OOPS 404 | Cours en Formations en informatique à Djibouti",
      },
    },

    {
      path: "/a-propos",
      component: Apropo,
      meta: {
        title: "À Propos - IT+ Advanced Technology",
        description:
          "Découvrez IT+ Advanced Technology, le centre de formation de référence en informatique et technologies à Djibouti. | Cours en Formations en informatique à Djibouti",
      },
    },

    {
      path: "/contact",
      component: Contact,
      meta: {
        title: "À Propos - IT+ Advanced Technology",
        description:
          "Découvrez IT+ Advanced Technology, le centre de formation de référence en informatique et technologies à Djibouti. | Cours en Formations en informatique à Djibouti",
      },
    },

    {
      path: "/**",
      component: NotFound,
      meta: {
        title: "Contact - IT+ Advanced Technology",
        description:
          "Contactez IT+ Advanced Technology pour en savoir plus sur nos formations et nos services en informatique. | Cours en Formations en informatique à Djibouti",
      },
    },
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
router.afterEach((to) => {
  document.title = to.meta.title || "IT+ Advanced Technology";

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute(
      "content",
      to.meta.description || "IT+ Advanced Technology"
    );
  } else {
    const metaTag = document.createElement("meta");
    metaTag.name = "description";
    metaTag.content = to.meta.description || "IT+ Advanced Technology";
    document.head.appendChild(metaTag);
  }
});
