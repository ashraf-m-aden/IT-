<template>
  <div>
    <BannerComponent></BannerComponent>
    <BoxesArea></BoxesArea>
    <ReseauxInformatiques></ReseauxInformatiques>
    <Programmation></Programmation>

  </div>
</template>

<script setup lang="ts">
import ReseauxInformatiques from "./it-startup/ReseauxInformatiques.vue";
import Programmation from "./it-startup/ProgrammationComponent.vue";
import BannerComponent from "./it-startup/BannerComponent.vue";
import BoxesArea from "./it-startup/BoxesArea.vue";
import { useHead } from "@vueuse/head";
useHead({
  title: 'ACCUEIL - IT+ CODE LAB',
  meta: [
    { name: 'description', content: 'Bienvenue dans le meilleur centre de formation pratique en informatique à Djibouti. | Code Lab | Cours et Formations en informatique à Djibouti' }
    , { name: 'keywords', content: 'formation,Code Lab,formations,angular,vue, html, css,linux,sécurité,javascript, java, informatique,djibouti, Djibouti, programmation, réseaux, cours, Code Lab' }

  ]
})
</script>
