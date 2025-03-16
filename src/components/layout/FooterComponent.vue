<template>
  <!-- Start Footer Area -->
  <footer class="footer-area bg-f7fafd">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <div class="logo">
              <a href="/">
                <img src="../../assets/img/logo.svg" alt="IT+ ADVANCED TECHNOLOGY" class="logo" />
              </a>
            </div>
            <p>
              Aujourd'hui l'informatique est au coeur de presque toute activité,
              nous offrons des cours et des formations pratiques professionels
              qui vous lancera dans le metier d'informaticien.
            </p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="single-footer-widget pl-5">
            <h3>Centre de formation</h3>
            <ul class="list">
              <li>
                <router-link to="/a-propos" class="nav-link">A propos de nous</router-link>
              </li>
              <li>
                <router-link to="/cours-programmation" class="nav-link">Formation en developpement</router-link>
              </li>
              <li>
                <router-link to="/cours-reseaux-systemes" class="nav-link">Formation en réseaux</router-link>
              </li>

              <li>
                <router-link to="/contact" class="nav-link">Contact</router-link>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <h3>Information</h3>

            <ul class="footer-contact-info">
              <li>
                <vue-feather type="map-pin"></vue-feather>
                Hodan 1 Lot 28
              </li>
              <li>
                <vue-feather type="mail"></vue-feather> Email:
                <a href="#">djib.it.advanced.technology@gmail.com</a>
              </li>
              <li>
                <vue-feather type="phone-call"></vue-feather> Phone:
                <a href="#"> +253 77 151875</a>
              </li>
            </ul>
            <ul class="social-links">
              <li>
                <a href="#" class="facebook">
                  <vue-feather type="facebook"></vue-feather>
                </a>
              </li>
              <li>
                <a href="#" class="twitter">
                  <vue-feather type="twitter"></vue-feather>
                </a>
              </li>
              <li>
                <a href="#" class="instagram">
                  <vue-feather type="instagram"></vue-feather>
                </a>
              </li>
              <!-- <li>
                <a href="#" class="linkedin">
                  <vue-feather type="linkedin"></vue-feather>
                </a>
              </li> -->
            </ul>
          </div>
        </div>

        <div class="col-lg-12 col-md-12">
          <div class="copyright-area">
            <p>Copyright &copy;2022 IT+. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>

    <img src="../../assets/img/map.png" class="map" alt="map" />
    <div class="shape1">
      <img src="../../assets/img/shape1.png" alt="IT+ formation cours informatique djibouti" />
    </div>
    <div class="shape8 rotateme">
      <img src="../../assets/img/shape2.svg" alt="IT+ formation cours informatique djibouti" />
    </div>
    <!-- <div class="go-top"><vue-feather type="arrow-up"></vue-feather></div> -->


  </footer>
  <!-- End Footer Area -->
</template>


<style lang="scss" scoped>
@import "../../assets/style/style.scss";
.logo{
  text-align: center;
  margin-bottom: 20px;
  width: 200px;
}
  
</style>