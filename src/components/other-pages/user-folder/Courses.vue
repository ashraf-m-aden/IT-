<template>
  <div>
    <div>
      <!-- Start Page Title -->
      <div class="page-title-area">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="container">
              <h2>Mes cours</h2>
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

      <!-- Start ML Services Area -->
      <section class="ml-services-area ptb-80" v-if="myCourses.length > 0">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-4 col-sm-6 col-md-6"
              v-for="(cours, index) in myCourses"
              :key="index"
            >
              <div class="single-ml-services-box">
                <div class="image">
                  <img
                    src="../../../assets/img/services-image/1.png"
                    alt="image"
                  />
                </div>
                <h3>
                  <a href="#">{{ cours.name }}</a>
                </h3>
                <p>Date de début: {{ cours.startDate }}</p>
                <p>Instructeur: {{ cours.profName }}</p>
              </div>
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
        <div class="shape6 rotateme">
          <img src="../../../assets/img/shape4.svg" alt="shape" />
        </div>
        <div class="shape7">
          <img src="../../../assets/img/shape4.svg" alt="shape" />
        </div>
        <div class="shape8 rotateme">
          <img src="../../../assets/img/shape2.svg" alt="shape" />
        </div>
      </section>
      <!-- End ML Services Area -->
      <div class="agency-main-banner" v-else>
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-12">
              <div class="agency-banner-content">
                <span class="sub-title">Vous n'êtes inscris à aucun cours</span>
                <h1>Prenez votre avenir en main!</h1>
                <p>
                  Il est grand temps de vous lancer dans cette superbe aventure
                  qu'est la science des systemes d'informations.
                </p>
                <router-link to="/cours-programmation"
                  ><a class="btn btn-secondary">Programmation</a></router-link
                >
                <router-link to="/cours-reseaux-systemes">
                  <a class="btn btn-secondary"
                    >Réseaux et Systemes</a
                  ></router-link
                >
              </div>
            </div>

            <div class="col-lg-6 col-md-12">
              <div class="agency-banner-image">
                <img
                  src="../../../assets/img/courses/courses.jpeg"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="shape2 rotateme">
          <img src="../../../assets/img/shape2.svg" alt="shape" />
        </div>
        <div class="shape8 rotateme">
          <img src="../../../assets/img/shape2.svg" alt="shape" />
        </div>

        <div class="shape3">
          <img src="../../../assets/img/shape3.svg" alt="shape" />
        </div>
        <div class="shape4">
          <img src="../../../assets/img/shape4.svg" alt="shape" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cours",

  data() {
    return {
      myCourses: this.$store.getters.getMyCourses,
    };
  },
};
</script>
