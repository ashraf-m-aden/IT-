<template>
  <div>

    <HeaderComponent ></HeaderComponent>
    <PreLoaderComponent v-show="isLoading" />
    <router-view></router-view>

    <FooterComponent></FooterComponent>
    <button bottom="50px" right="50px" @click="toTopFunction">
      <div class="go-top">
        <vue-feather type="arrow-up"></vue-feather>
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import HeaderComponent from "./components/layout/HeaderComponent.vue";
import PreLoaderComponent from "./components/layout/PreLoaderComponent.vue";
import FooterComponent from "./components/layout/FooterComponent.vue";

const isLoading = ref(true);
const currentUrl = ref();
const route = useRoute();

const toTopFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

watch(route, () => {
  currentUrl.value = route.fullPath;

  isLoading.value = true;

  setTimeout(() => {
    isLoading.value = false;
  }, 1500);
});
</script>
