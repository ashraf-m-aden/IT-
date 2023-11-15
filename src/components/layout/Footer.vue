<template>
  <!-- Start Footer Area -->
  <footer class="footer-area bg-f7fafd">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <div class="logo">
              <a href="/">
                <img src="../../assets/img/logo.png" alt="logo" />
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
            <h3>Compagnie</h3>
            <ul class="list">
              <li>
                <router-link to="/a-propos" class="nav-link">A propos de nous</router-link>
              </li>
              <li>
                <router-link to="/cours-programmation" class="nav-link">Formation en developpementr</router-link>
              </li>
              <li>
                <router-link to="/cours-reseaux-systemes" class="nav-link">Formation en réseaux</router-link>
              </li>
              <li>
                <router-link to="/a-propos" class="nav-link">Nos prix</router-link>
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
                <feather type="map-pin"></feather>
                Bientot
              </li>
              <li>
                <feather type="mail"></feather> Email:
                <a href="#">Bientot</a>
              </li>
              <li>
                <feather type="phone-call"></feather> Phone:
                <a href="#"> Bientot</a>
              </li>
            </ul>
            <ul class="social-links">
              <li>
                <a href="#" class="facebook">
                  <feather type="facebook"></feather>
                </a>
              </li>
              <li>
                <a href="#" class="twitter">
                  <feather type="twitter"></feather>
                </a>
              </li>
              <li>
                <a href="#" class="instagram">
                  <feather type="instagram"></feather>
                </a>
              </li>
              <li>
                <a href="#" class="linkedin">
                  <feather type="linkedin"></feather>
                </a>
              </li>
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
      <img src="../../assets/img/shape1.png" alt="shape" />
    </div>
    <div class="shape8 rotateme">
      <img src="../../assets/img/shape2.svg" alt="shape" />
    </div>
    <!-- <div class="go-top"><feather type="arrow-up"></feather></div> -->

    <back-to-top bottom="50px" right="50px">
      <div class="go-top">
        <feather type="arrow-up"></feather>
      </div>
    </back-to-top>
  </footer>
  <!-- End Footer Area -->
</template>

<script>
import { ref } from 'vue'
export default {
  name: "FooterPage",
};
</script>
