<template>
  <div>
    <Banner />
    <BoxesArea />
    <ReseauxInformatiques />
    <Programmation />
  </div>
</template>

<script>
import Banner from './it-startup/ComponentBanner'
import BoxesArea from './it-startup/BoxesArea'
import ReseauxInformatiques from './it-startup/ReseauxInformatiques.vue'
import Programmation from './it-startup/ComponentProgrammation.vue'
// import Features from './it-startup/Features';
// import Team from './it-startup/Team';
// import Funfacts from './it-startup/Funfacts';
// import Works from './it-startup/Works';
// import Pricing from './it-startup/Pricing';
// import Feedback from './it-startup/Feedback';
// import Partner from './it-startup/Partner';
// import Blog from './it-startup/Blog';
export default {
  name: 'ITStartup',
  components: {
    Banner,
    BoxesArea,
    ReseauxInformatiques,
    Programmation
  }
}
</script>
