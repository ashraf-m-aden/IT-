<template>
  <div>
    <!-- Start Page Title -->
    <div class="page-title-area">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <h2>Contactez nous</h2>
          </div>
        </div>
      </div>

      <div class="shape1">
        <img src="../../../assets/img/shape1.png" alt="shape" />
      </div>
      <div class="shape2 rotateme">
        <img src="../../../assets/img/shape2.svg" alt="shape" />
      </div>
      <div class="shape3">
        <img src="../../../assets/img/shape3.svg" alt="shape" />
      </div>
      <div class="shape4">
        <img src="../../../assets/img/shape4.svg" alt="shape" />
      </div>
      <div class="shape5">
        <img src="../../../assets/img/shape5.png" alt="shape" />
      </div>
      <div class="shape6 rotateme">
        <img src="../../../assets/img/shape4.svg" alt="shape" />
      </div>
      <div class="shape7">
        <img src="../../../assets/img/shape4.svg" alt="shape" />
      </div>
      <div class="shape8 rotateme">
        <img src="../../../assets/img/shape2.svg" alt="shape" />
      </div>
    </div>
    <!-- End Page Title -->

    <!-- Start Contact Info Area -->
    <section class="contact-info-area ptb-80">
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="contact-info-box">
              <div class="icon">
                <vue-feather type="mail"></vue-feather>
              </div>
              <h3>Email</h3>
              <p><a href="#">djib.it.advanced.technology@gmail.com</a></p>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
            <div class="contact-info-box">
              <div class="icon">
                <vue-feather type="phone"></vue-feather>
              </div>
              <h3>Appellez nous</h3>
              <p><a href="#">+253 77 151875</a></p>
            </div>
          </div>
          <div class="col-12 text-center">
            <div class="contact-info-box text-center">
              <div class="icon">
                <vue-feather type="map-pin"></vue-feather>
              </div>
              <div class="map-container">
                <div class="map">
                  <l-map ref="map" v-model:zoom="zoom" :center="[11.554622, 43.100724]">
                    <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
                      name="OpenStreetMap"></l-tile-layer>
                    <l-marker :lat-lng="[11.554622, 43.100724]">
                      <l-icon :icon-url="iconUrl" :icon-size="iconSize" />
                      <l-popup> IT+ ADVANCED TECHNOLOGY</l-popup>
                    </l-marker>
                  </l-map>
                </div>
              </div>

            </div>
          </div>
          <div class="col-12  offset-lg-0 offset-md-3 offset-sm-3 m-auto">
            <img src="../../../assets/img/image.png" class="m-auto">
            <p>Scanne moi!
            </p>
          </div>


        </div>
      </div>
    </section>

  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import {
  LMap,
  LTileLayer,
  LIcon,
  LMarker,
  LPopup,
} from "@vue-leaflet/vue-leaflet";
export default {
  name: "ContactPage",
  components: {
    LMap,
    LTileLayer,
    LIcon,
    LMarker,
    LPopup,
  },

  data() {
    return {
      zoom: 17,
      iconWidth: 20,
      iconHeight: 30,
    };
  },
  computed: {
    iconUrl() {
      return `https://cdn.pixabay.com/photo/2014/04/03/10/03/google-309739_640.png`;
    },
    iconSize() {
      return [this.iconWidth, this.iconHeight];
    },
  },

};
</script>

<style lang="scss" scoped>
// @import "../assets/style/custom.scss";
.map-container {
  margin-top: 2rem;
  width: 100%;
  height: 300px;

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
