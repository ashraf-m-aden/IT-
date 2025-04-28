import * as VueRouter from 'vue-router'

// Pages

// import Login from './components/other-pages/authentication/login.vue';
// import Register from './components/other-pages/authentication/registration.vue';

import ServicesProgrammation from '../components/other-pages/courses/ServicesProgrammation.vue'

import MySQL from '../components/other-pages/courses/programmation/MySQL.vue'

import ServiceReseauxSystemes from '../components/other-pages/courses/ServicesReseaux.vue'
import FondamentauxReseaux from '../components/other-pages/courses/reseaux/FondamentauxReseaux.vue'
import ReseauxAvances from '../components/other-pages/courses/reseaux/ReseauxAvances.vue'
import GNS3 from '../components/other-pages/courses/reseaux/GNS3.vue'
import SecuriteInformatique from '../components/other-pages/courses/reseaux/SecuriteInformatique.vue'
import InstallationWindows from '../components/other-pages/courses/reseaux/InstallationWindows.vue'
import AdminWinServer from '../components/other-pages/courses/reseaux/AdminWinServer.vue'

import Contact from '../components/other-pages/contact/ContactComponent.vue'

import NotFound from '../components/other-pages/not-found/NotFound.vue'

import ITStartup from '../components/ITStartup.vue'
import EnrolFormation from '../components/it-startup/EnrolFormation.vue'
import BureautiqueComponent from '../components/other-pages/courses/reseaux/BureautiqueComponent.vue'
import LinuxComponent from '../components/other-pages/courses/reseaux/LinuxComponent.vue'
import NodeComponent from '../components/other-pages/courses/programmation/NodeComponent.vue'
import JavaComponent from '../components/other-pages/courses/programmation/JavaComponent.vue'
import JavascriptComponent from '../components/other-pages/courses/programmation/JavascriptComponent.vue'
import VueComponent from '../components/other-pages/courses/programmation/VueComponent.vue'
import AngularComponent from '../components/other-pages/courses/programmation/AngularComponent.vue'
import HtmlCss from '../components/other-pages/courses/programmation/HtmlCss.vue'
import Apropos from '../components/other-pages/about/A_Propos.vue'
import LoginComponent from '../components/other-pages/LoginComponent.vue'
import NewCourse from '../components/it-startup/NewCourse.vue'
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  linkExactActiveClass: 'active',
  scrollBehavior ():any {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: ITStartup,
      meta: {
        title: 'ACCUEIL - IT+ Code Lab',
        description:
          'Bienvenue dans le meilleur centre de formation pratique en informatique à Djibouti. | Cours en Formations en informatique à Djibouti'
      }
    },

    {
      path: '/cours-programmation/html-css',
      component: HtmlCss,
      meta: {
        title: 'HTML - IT+ Code Lab',
        description:
          'Plongez dans les base de la programmation avec notre formation en HTML et CSS | Cours en Formations en informatique à Djibouti'
      }
    },
    {
      path: '/cours-programmation',
      component: ServicesProgrammation,
      meta: {
        title: 'PROGRAMMATION - IT+ Code Lab',
        description: 'Consultez la liste de nos formations en programmation | Cours en Formations en informatique à Djibouti'
      }
    },
    {
      path: '/cours-programmation/angular',
      component: AngularComponent,
      meta: {
        title: 'ANGULAR - IT+ Code Lab',
        description: 'Maitrisez un des meilleurs frameworks Javascript | Cours en Formations en informatique à Djibouti'
      }
    },
    {
      path: '/cours-programmation/vue',
      component: VueComponent,
      meta: {
        title: 'VUE - IT+ Code Lab',
        description: 'Maitrisez un des meilleurs frameworks Javascript | Cours en Formations en informatique à Djibouti'
      }
    },
    {
      path: '/cours-programmation/javascript',
      component: JavascriptComponent,
      meta: {
        title: 'JAVASCRIPT - IT+ Code Lab',
        description:
          'Apprenez les bases du Javascript et élargissez vos horizons! | Cours en Formations en informatique à Djibouti'
      }
    },
    {
      path: '/cours-programmation/java',
      component: JavaComponent,
      meta: {
        title: 'JAVA - IT+ Code Lab',
        description:
          'Maitrisez un des languages de programmation les plus populaires | Cours en Formations en informatique à Djibouti'
      }
    },
    {
      path: '/cours-programmation/node',
      component: NodeComponent,
      meta: {
        title: 'NODE - IT+ Code Lab',
        description:
          'Plongez dans le mondes des backends et créez vos premieres applications backends | Cours en Formations en informatique à Djibouti'
      }
    },
    {
      path: '/cours-programmation/mysql',
      component: MySQL,
      meta: {
        title: 'MYSQL - IT+ Code Lab',
        description: 'Nos formations en base de données vont vous interesser! | Cours en Formations en informatique à Djibouti'
      }
    },

    {
      path: '/cours-reseaux-systemes',
      component: ServiceReseauxSystemes,
      meta: {
        title: 'RESEAUX - IT+ Code Lab',
        description: 'La liste de nos formations en réseaux informatiques | Cours en Formations en informatique à Djibouti'
      }
    },
    {
      path: '/cours-reseaux-systemes/linux',
      component: LinuxComponent,
      meta: {
        title: 'Formation Linux - IT+ Code Lab',
        description:
          "Maîtrisez l'administration Linux et découvrez les bases des systèmes open-source avec notre formation pratique. | Cours en Formations en informatique à Djibouti"
      }
    },
    {
      path: '/cours-reseaux-systemes/fondamentaux-reseaux',
      component: FondamentauxReseaux,
      meta: {
        title: 'Fondamentaux des Réseaux - IT+ Code Lab',
        description:
          'Apprenez les bases des réseaux informatiques : protocoles, infrastructures et configuration pour bien débuter. | Cours en Formations en informatique à Djibouti'
      }
    },
    {
      path: '/cours-reseaux-systemes/reseaux-avances',
      component: ReseauxAvances,
      meta: {
        title: 'Réseaux Avancés - IT+ Code Lab',
        description:
          'Approfondissez vos connaissances en réseaux informatiques et maîtrisez les architectures avancées. | Cours en Formations en informatique à Djibouti'
      }
    },
    {
      path: '/cours-reseaux-systemes/gns3',
      component: GNS3,
      meta: {
        title: 'GNS3 et Simulation Réseau - IT+ Code Lab',
        description:
          'Utilisez GNS3 pour simuler et tester vos configurations réseau dans un environnement pratique. | Cours en Formations en informatique à Djibouti'
      }
    },
    {
      path: '/cours-reseaux-systemes/securite-informatique',
      component: SecuriteInformatique,
      meta: {
        title: 'Sécurité Informatique - IT+ Code Lab',
        description:
          'Développez vos compétences en cybersécurité et apprenez à protéger les systèmes informatiques contre les menaces. | Cours en Formations en informatique à Djibouti'
      }
    },
    {
      path: '/cours-reseaux-systemes/installation-windows',
      component: InstallationWindows,
      meta: {
        title:
          'Installation et Configuration Windows - IT+ Code Lab',
        description:
          'Apprenez à installer, configurer et gérer les systèmes Windows pour une utilisation professionnelle. | Cours en Formations en informatique à Djibouti'
      }
    },
    {
      path: '/cours-reseaux-systemes/admin-serveur',
      component: AdminWinServer,
      meta: {
        title: 'Administration Windows Server - IT+ Code Lab',
        description:
          "Maîtrisez l'administration des serveurs Windows et optimisez la gestion des infrastructures IT. | Cours en Formations en informatique à Djibouti"
      }
    },
    {
      path: '/cours-reseaux-systemes/bureautique',
      component: BureautiqueComponent,
      meta: {
        title: 'Formation Bureautique - IT+ Code Lab',
        description:
          'Optimisez votre productivité avec nos formations en bureautique : Word, Excel, PowerPoint et plus encore. | Cours en Formations en informatique à Djibouti'
      }
    },

    {
      path: '/not-found',
      component: NotFound,
      meta: {
        title: 'IT+ Code Lab',
        description: 'OOPS 404 | Cours en Formations en informatique à Djibouti'
      }
    },

    {
      path: '/a-propos',
      component: Apropos,
      meta: {
        title: 'À Propos - IT+ Code Lab',
        description:
          'Découvrez IT+ Code Lab, le centre de formation de référence en informatique et technologies à Djibouti. | Cours en Formations en informatique à Djibouti'
      }
    },

    {

      path: '/contact',
      component: Contact,
      meta: {
        title: 'À Propos - IT+ Code Lab',
        description:
          'Découvrez IT+ Code Lab, le centre de formation de référence en informatique et technologies à Djibouti. | Cours en Formations en informatique à Djibouti'
      }
    },
    {
      path: '/enroll',
      component: EnrolFormation,
      meta: {
        title: 'Inscription - IT+ Code Lab',
        description:
          'Inscrivez vous à nos formations et cours disponibles. | Cours en Formations en informatique à Djibouti'
      }
    },

    {
      path: '/new_course',
      component: NewCourse,
      meta: {
        title: 'Nouvelle formation - IT+ Code Lab'

      }
    },

    {
      path: '/login',
      component: LoginComponent,
      meta: {
        title: 'Login - IT+ Code Lab'
      }
    },
    {
      path: '/**',
      component: NotFound,
      meta: {
        title: 'Contact - IT+ Code Lab',
        description:
          'Contactez IT+ Code Lab pour en savoir plus sur nos formations et nos services en informatique. | Cours en Formations en informatique à Djibouti'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (
    (to.path === '/login' || to.path === '/login#') &&
    localStorage.getItem('isLoggedIn') === 'true'
  ) {
    return next('/')
  }
  next()
})
// Use `@vueuse/head` to dynamically update meta tags

export default router
