<template>
  <div class="row">
    <div class="col-12">
      <div class="map-container">
        <div class="map">
          sss
          <l-map ref="map" v-model:zoom="zoom" :center="[11.5532, 43.1503]">
            <l-tile-layer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              layer-type="base"
              name="OpenStreetMap"
            ></l-tile-layer>
            <l-marker :lat-lng="[11.553, 43.1501]">
              <l-icon :icon-url="iconUrl" :icon-size="iconSize" />
              <l-popup> Autorité de l'Aviation Civile de Djibouti </l-popup>
            </l-marker>
          </l-map>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import {
  LMap,
  LTileLayer,
  LIcon,
  LMarker,
  LPopup,
} from "@vue-leaflet/vue-leaflet";
import { computed, ref } from "vue";

const zoom = ref(17);
const iconWidth = ref(40);
const iconHeight = ref(40);

const iconUrl = computed(() => {
  return `https://icons-for-free.com/iconfiles/png/512/map+marker+icon-1320166582858325800.png`;
});
const iconSize = computed(() => {
  return [iconWidth.value, iconHeight.value];
});
</script>

<style lang="scss" scoped>
// @import "../assets/style/custom.scss";
.map-container {
  margin-top: 2rem;
  width: 500px;
  height: 300px;
  @media (max-width: 37.5em) {
    width: 300px;
    height: 300px;
  }
}
.map {
  width: 100%;
  height: 100%;
}

.map-frame {
  height: 100%;
}

#map {
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: 0;
}
</style>
