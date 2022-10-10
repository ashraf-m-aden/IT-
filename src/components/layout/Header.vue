<template>
  <!-- Start Navbar Area -->
  <header id="header" :class="['headroom', { 'is-sticky': isSticky }]">
    <div class="startp-nav">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-md navbar-light">
          <router-link class="navbar-brand" to="/">
            <img src="../../assets/img/logo.png" alt="logo" />
          </router-link>

          <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>

          <b-collapse class="collapse navbar-collapse mean-menu" id="navbarSupportedContent" is-nav>
            <ul class="navbar-nav nav ml-auto">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Acceuil</router-link>
              </li>

              <li class="nav-item">
                <router-link to="/a-propos" class="nav-link">A propos de nous</router-link>
              </li>

              <li class="nav-item">
                <a class="nav-link">Programmes <feather type="chevron-down"></feather></a>
                <ul class="dropdown_menu">
                  <li class="nav-item">
                    <router-link to="/cours-programmation" class="nav-link">Developpement</router-link>
                  </li>

                  <li class="nav-item">
                    <router-link to="/cours-reseaux-systemes" class="nav-link">Systemes et réseaux</router-link>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <router-link to="/contact" class="nav-link">Contact</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/formations-disponibles" class="nav-link">Formations disponibles</router-link>
              </li>
              <li class="nav-item" v-show="isAuthenticated">
                <router-link to="/mes-formations" class="nav-link">Mes formations</router-link>
              </li>

              <li class="nav-item">
                <router-link to="/login" v-show="!isAuthenticated ">
                  <a class="nav-link">Se connecter</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/" v-show="isAuthenticated ">
                  <a class=" conn" style="color='red'" @click="logout()">Deconnection</a>
                </router-link>
              </li>
            </ul>
          </b-collapse>
          <!-- 
          <div class="others-option">
            <router-link to="/login" v-show="!isAuthenticated">
              <a class="btn btn-primary">Se connecter</a>
            </router-link>
            <router-link to="/" v-show="isAuthenticated">
              <a class="btn btn-outline-danger" @click="logout()">Deconnection</a>
            </router-link>
          </div> -->
        </nav>
      </div>
    </div>
  </header>
  <!-- End Navbar Area -->
</template>

<script>
import auth from "../../services/auth";
export default {
  name: "Header",
  data() {
    return {
      isSticky: false,
      isMobile: false,
    };
  },

  mounted() {
    const that = this;
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      // eslint-disable-next-line no-console
      if (scrollPos >= 100) {
        that.isSticky = true;
      } else {
        that.isSticky = false;
      }
    });
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },

  computed: {
    isAuthenticated() {
      return this.$store.getters.getAuthentication;
    },
  },
  methods: {
    logout() {
      auth
        .Logout()
        .then(async () => {
          await this.$store.dispatch("setAuthentication", false);

          localStorage.removeItem("userinfo");
          localStorage.removeItem("isLoggedIn");
          this.$router.push("/login");
        })
        .catch(() => {
          localStorage.removeItem("userinfo");
          localStorage.removeItem("isLoggedIn");
          this.$router.push("/login");
        });
    },

    handleResize() {
      if (window.innerWidth < 992) {
        this.isMobile = true;
      } else this.isMobile = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.conn {
  text-decoration-line: underline;
  text-decoration-color: red;
  color: red;
}
</style>
