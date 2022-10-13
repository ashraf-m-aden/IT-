<template>
  <div>
    <div>
      <!-- Start Page Title -->
      <div class="page-title-area">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="container">
              <h2>Mes formations</h2>
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
      <section class="ml-services-area ptb-80" v-if="formations.length > 0">
        <div class="container">
          <div class="row">
            <div class="col">
              <table class="table bg-white">
                <thead class="table-head">
                  <tr>
                    <td>
                      #
                    </td>
                    <td>
                      Nom de la formation
                    </td>
                    <td>
                      Début de la formation
                    </td>
                    <td>
                      Statut
                    </td>
                    <td>Instructeur</td>
                  </tr>

                </thead>
                <tbody>
                  <tr v-for="(formation, index) in formations" :key="index" class="formation">
                    <td>
                      {{index+ 1}}
                    </td>
                    <td>
                      {{formation.courseName}}
                    </td>
                    <td>
                      {{formation.startDate}}
                    </td>
                    <td>
                      <span v-show="formation.inscription">Non débuté</span>
                      <span v-show="formation.started">En cours</span>
                      <span v-show="formation.finished">Terminé</span>
                    </td>
                    <td>
                      {{formation.professeurName}}
                    </td>
                  </tr>
                </tbody>
              </table>
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
                <span class="sub-title">Vous n'êtes inscris à aucune formation</span>
                <h1>Prenez votre avenir en main!</h1>
                <p>
                  Il est grand temps de vous lancer dans cette superbe aventure
                  qu'est la science des systemes d'informations.
                </p>
                <router-link to="/cours-programmation"><a class="btn btn-secondary">Programmation</a></router-link>
                <router-link to="/cours-reseaux-systemes">
                  <a class="btn btn-secondary">Réseaux et Systemes</a>
                </router-link>
              </div>
            </div>

            <div class="col-lg-6 col-md-12">
              <div class="agency-banner-image">
                <img src="../../../assets/img/courses/courses.jpeg" alt="image" />
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
  name: "formations",

  data() {
    return {
      showModal: false

    };
  },
  async mounted() {
    // await this.$store.dispatch("checkAuth");
    await this.$store.dispatch("setMyCourses");
  },
  computed: {
    formations() {
      // eslint-disable-next-line no-console
      return this.$store.getters.getMyFormations
    }
  }
};
</script>

<style lang="scss" scoped>
.table {


  &-head {
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(7, 56, 152, 1) 22%, rgba(0, 212, 255, 1) 100%);
    color: white;
    font-size: 17px;
  }

}

.formation {

  &:hover {
    background: rgb(238, 174, 202);
    background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
    color: white;
    cursor: pointer;
  }
}
</style>
