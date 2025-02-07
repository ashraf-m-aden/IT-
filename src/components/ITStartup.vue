<template>
  <div>
    <Banner></Banner>
    <BoxesArea></BoxesArea>
    <ReseauxInformatiques></ReseauxInformatiques>
    <Programmation></Programmation>

  </div>
</template>

<script>
import Banner from "./it-startup/BannerComponent";
import BoxesArea from "./it-startup/BoxesArea";
import ReseauxInformatiques from "./it-startup/ReseauxInformatiques.vue";
import Programmation from "./it-startup/Programmation.vue";

import { ref } from 'vue'
export default {
  name: "ITStartup",
  components: {
    Banner,
    BoxesArea,
    ReseauxInformatiques,
    Programmation,
  },
};
</script>
