import VueRouter from 'vue-router';
// Pages



import ServicesProgrammation from './components/other-pages/services/ServicesProgrammation';
import Angular from './components/other-pages/services/programmation/Angular.vue';
import Html from './components/other-pages/services/programmation/HtmlCss.vue';
import Javascript from './components/other-pages/services/programmation/Javascript.vue';
import MySQL from './components/other-pages/services/programmation/MySQL.vue';
import Java from './components/other-pages/services/programmation/Java.vue';
import Node from './components/other-pages/services/programmation/Node.vue';
import Vue from './components/other-pages/services/programmation/Vue.vue';


import ServiceReseauxSystemes from './components/other-pages/services/ServicesReseaux.vue';
import Linux from './components/other-pages/services/reseaux/Linux.vue';
import FondamentauxReseaux from './components/other-pages/services/reseaux/FondamentauxReseaux.vue';
import ReseauxAvances from './components/other-pages/services/reseaux/ReseauxAvances.vue';
import GNS3 from './components/other-pages/services/reseaux/GNS3.vue';
import SecuriteInformatique from './components/other-pages/services/reseaux/SecuriteInformatique.vue';
import InstallationWindows from './components/other-pages/services/reseaux/InstallationWindows.vue';
import AdminWinServer from './components/other-pages/services/reseaux/AdminWinServer.vue';


import Apropo from './components/other-pages/about/Apropos.vue';

import Contact from './components/other-pages/contact/Contact';

import NotFound from './components/other-pages/not-found/NotFound';

import ITStartup from './components/landing-pages/ITStartup';

export const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    // { path: '/developer', component: Developer },
    // { path: '/web-hosting', component: WebHosting },
    // { path: '/repair-center', component: RepairCenter },
    // { path: '/iot', component: Iot },
    // { path: '/ai-machine-learning', component: AiMachineLearning },
    // { path: '/machine-learning', component: MachineLearning },
    // { path: '/digital-agency', component: DigitalAgency },
    // { path: '/about-style-two', component: AboutStyleTwo },
    // { path: '/about-style-three', component: AboutStyleThree },
    // { path: '/features', component: Features },
    // { path: '/feature-details', component: FeatureDetails },
    // { path: '/service-style-one', component: ServicesOne },
    // { path: '/service-style-two', component: ServicesTwo },
    // { path: '/service-style-three', component: ServicesThree },
    // { path: '/service-style-four', component: ServicesFour },
    // { path: '/service-details', component: ServiceDetails },
    // { path: '/project-style-one', component: ProjectStyleOne },
    // { path: '/project-style-two', component: ProjectStyleTwo },
    // { path: '/project-details', component: ProjectDetails },
    // { path: '/team', component: Team },
    // { path: '/pricing', component: Pricing },
    // { path: '/faq', component: Faq },
    // { path: '/coming-soon', component: ComingSoon },
    // { path: '/blog-grid', component: BlogGrid },
    // { path: '/blog-right-sidebar', component: BlogRightSidebar },
    // { path: '/blog-grid-two', component: BlogGridTwo },
    // { path: '/blog-right-sidebar-two', component: BlogRightSidebarTwo },
    // { path: '/blog-grid-three', component: BlogGridThree },
    // { path: '/blog-right-sidebar-three', component: BlogRightSidebarThree },
    // { path: '/blog-details', component: BlogDetails },
    // { path: '/shop', component: Shop },
    // { path: '/cart', component: Cart },
    // { path: '/checkout', component: Checkout },
    // { path: '/details', component: ItemDetails },

    { path: '/', component: ITStartup },



    { path: '/cours-programmation', component: ServicesProgrammation },
    { path: '/cours-programmation/html-css', component: Html },
    { path: '/cours-programmation/angular', component: Angular },
    { path: '/cours-programmation/vue', component: Vue },
    { path: '/cours-programmation/javascript', component: Javascript },
    { path: '/cours-programmation/java', component: Java },
    { path: '/cours-programmation/node', component: Node },
    { path: '/cours-programmation/mysql', component: MySQL },



    { path: '/cours-reseaux-systemes', component: ServiceReseauxSystemes },
    { path: '/cours-reseaux-systemes/linux', component: Linux },
    { path: '/cours-reseaux-systemes/fondamentaux-reseaux', component: FondamentauxReseaux },
    { path: '/cours-reseaux-systemes/reseaux-avances', component: ReseauxAvances },
    { path: '/cours-reseaux-systemes/gns3', component: GNS3 },
    { path: '/cours-reseaux-systemes/securite-informatique', component: SecuriteInformatique },
    { path: '/cours-reseaux-systemes/installation-windows', component: InstallationWindows },
    { path: '/cours-reseaux-systemes/admin-serveur', component: AdminWinServer },



    { path: '/not-found', component: NotFound },

    { path: '/a-propos', component: Apropo },

    { path: '/contact', component: Contact },

    { path: '**', component: NotFound },


  ]
});