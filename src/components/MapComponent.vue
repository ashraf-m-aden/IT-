<template>
  <div class="row">
    <div class="col-12">

    </div>
  </div>
</template>



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
