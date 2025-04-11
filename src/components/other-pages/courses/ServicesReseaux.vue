<template>
  <div>
    <!-- Start Page Title -->
    <div class="page-title-area">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <h2>Cours et formations en systemes et réseaux informatiques</h2>
          </div>
        </div>
      </div>

      <div class="shape1">
        <img src="../../../assets/img/shape1.png" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape2 rotateme">
        <img src="../../../assets/img/shape2.svg" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape3">
        <img src="../../../assets/img/shape3.svg" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape4">
        <img src="../../../assets/img/shape4.svg" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape5">
        <img src="../../../assets/img/shape5.png" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape6 rotateme">
        <img src="../../../assets/img/shape4.svg" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape7">
        <img src="../../../assets/img/shape4.svg" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape8 rotateme">
        <img src="../../../assets/img/shape2.svg" alt="IT+ formation cours informatique djibouti" />
      </div>
    </div>
    <!-- End Page Title -->

    <!-- Start Services Area -->
    <div class="agency-services-area ptb-80">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-6 col-md-6">
            <div
              class="agency-services-box"
              @click="goPage('/cours-reseaux-systemes/fondamentaux-reseaux')"
            >
              <img
                src="../../../assets/img/courses/fondamentaux.jpeg"
                alt="IT+Code Lab"
              />

              <div class="content">
                <h3><a href="#">Les fondamentaux des réseaux</a></h3>
                <a href="#" class="read-more-btn"
                  ><router-link
                    to="/cours-reseaux-systemes/fondamentaux-reseaux"
                    >Lire plus
                    <vue-feather type="plus-circle"></vue-feather> </router-link
                ></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6 col-md-6">
            <div
              class="agency-services-box"
              @click="goPage('/cours-reseaux-systemes/reseaux-avances')"
            >
              <img
                src="../../../assets/img/courses/ccna.jpeg"
                alt="IT+Code Lab"
              />

              <div class="content">
                <h3><a href="#">Réseaux avancés</a></h3>
                <a href="#" class="read-more-btn"
                  ><router-link to="/cours-reseaux-systemes/reseaux-avances"
                    >Lire plus
                    <vue-feather type="plus-circle"></vue-feather> </router-link
                ></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6 col-md-6">
            <div
              class="agency-services-box"
              @click="goPage('/cours-reseaux-systemes/gns3')"
            >
              <img
                src="../../../assets/img/courses/gns3.jpeg"
                alt="IT+Code Lab"
              />

              <div class="content">
                <h3><a href="#">Maitriser l'émulation des réseaux</a></h3>
                <a href="#" class="read-more-btn"
                  ><router-link to="/cours-reseaux-systemes/gns3"
                    >Lire plus
                    <vue-feather type="plus-circle"></vue-feather> </router-link
                ></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-md-6">
            <div
              class="agency-services-box"
              @click="goPage('/cours-reseaux-systemes/securite-informatique')"
            >
              <img
                src="../../../assets/img/courses/security.jpeg"
                alt="IT+Code Lab"
              />

              <div class="content">
                <h3><a href="#">Securité informatique</a></h3>
                <a href="#" class="read-more-btn"
                  ><router-link
                    to="/cours-reseaux-systemes/securite-informatique"
                    >Lire plus
                    <vue-feather type="plus-circle"></vue-feather> </router-link
                ></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6 col-md-6">
            <div
              class="agency-services-box"
              @click="goPage('/cours-reseaux-systemes/installation-windows')"
            >
              <img
                src="../../../assets/img/courses/windows.jpeg"
                alt="IT+Code Lab"
              />

              <div class="content">
                <h3>
                  <a href="#"
                    >Installation et configuration de windows 7, 8, 10 et 11</a
                  >
                </h3>
                <a href="" class="read-more-btn"
                  ><router-link
                    to="/cours-reseaux-systemes/installation-windows"
                    >Lire plus
                    <vue-feather type="plus-circle"></vue-feather> </router-link
                ></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6 col-md-6">
            <div
              class="agency-services-box"
              @click="goPage('cours-reseaux-systemes/admin-serveur')"
            >
              <img
                src="../../../assets/img/courses/winserverr.jpeg"
                alt="IT+Code Lab"
              />

              <div class="content">
                <h3>
                  <a href="#"
                    >Administration systeme windows server (2008, 2012, 2016)</a
                  >
                </h3>
                <a href="#" class="read-more-btn"
                  ><router-link to="cours-reseaux-systemes/admin-serveur"
                    >Lire plus
                    <vue-feather type="plus-circle"></vue-feather> </router-link
                ></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-md-6">
            <div
              class="agency-services-box"
              @click="goPage('/cours-reseaux-systemes/linux')"
            >
              <img
                src="../../../assets/img/courses/LINUX-LOGO.png"
                alt="IT+Code Lab"
              />

              <div class="content">
                <h3><a href="#">Administration systeme Linux </a></h3>
                <a href="#" class="read-more-btn"
                  ><router-link to="/cours-programmation/java"
                    >Lire plus
                    <vue-feather type="plus-circle"></vue-feather> </router-link
                ></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-md-6">
            <div
              class="agency-services-box"
              @click="goPage('/cours-reseaux-systemes/bureautique')"
            >
              <img
                src="../../../assets/img/courses/Office_logos.jpg"
                alt="IT+Code Lab"
              />

              <div class="content">
                <h3><a href="#">Bureautique</a></h3>
                <a href="#" class="read-more-btn"
                  ><router-link to="/cours-reseaux-systemes/bureautique"
                    >Lire plus
                    <vue-feather type="plus-circle"></vue-feather> </router-link
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="shape2 rotateme">
        <img src="../../../assets/img/shape2.svg" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape3">
        <img src="../../../assets/img/shape3.svg" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape4">
        <img src="../../../assets/img/shape4.svg" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape6 rotateme">
        <img src="../../../assets/img/shape4.svg" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape7">
        <img src="../../../assets/img/shape4.svg" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape8 rotateme">
        <img src="../../../assets/img/shape2.svg" alt="IT+ formation cours informatique djibouti" />
      </div>
    </div>
    <!-- End Services Area -->
  </div>
</template>

<script setup lang="ts">
import { useHead } from "@vueuse/head";
import { useRouter } from "vue-router";
const router = useRouter();
const goPage = (url:any) => {
  router.push(url);
};

useHead({
  title: "RESEAUX - IT+ CODE LAB",
  meta: [
    { name: "description", content: "La liste de nos formations en réseaux informatiques | Code Lab | Cours et Formations en informatique à Djibouti" },
    { name: "keywords", content: "formation,réseaux,informatique,cours,Djibouti" }
  ],
});
</script>
