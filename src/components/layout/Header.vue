<template>
  <!-- Start Navbar Area -->
  <header id="header" :class="['headroom', { 'is-sticky': isSticky }]">
    <div class="startp-nav">
      <div class="container">
        <nav class="navbar navbar-expand-md navbar-light">
          <router-link class="navbar-brand" to="/">
            <img src="../../assets/img/logo.png" alt="logo" />
          </router-link>

          <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>

          <b-collapse
            class="collapse navbar-collapse mean-menu"
            id="navbarSupportedContent"
            is-nav
          >
            <ul class="navbar-nav nav ml-auto">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Acceuil</router-link>
              </li>

              <li class="nav-item">
                <router-link to="/a-propos" class="nav-link"
                  >A propos de nous</router-link
                >
              </li>

              <li class="nav-item">
                <a class="nav-link"
                  >Programmes <feather type="chevron-down"></feather
                ></a>
                <ul class="dropdown_menu">
                  <li class="nav-item">
                    <router-link to="/cours-programmation" class="nav-link"
                      >Developpement</router-link
                    >
                  </li>

                  <li class="nav-item">
                    <router-link to="/cours-reseaux-systemes" class="nav-link"
                      >Systemes et réseaux</router-link
                    >
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <router-link to="/contact" class="nav-link"
                  >Contact</router-link
                >
              </li>
            </ul>
          </b-collapse>

          <div class="others-option">
            <router-link to="/login" v-show="!isAuthenticated">
              <a class="btn btn-primary">Se connecter</a></router-link
            >
            <router-link to="/" v-show="isAuthenticated">
              <a class="btn btn-outline-danger" @click="logout()"
                >Deconnection</a
              ></router-link
            >
          </div>
        </nav>
      </div>
    </div>
  </header>
  <!-- End Navbar Area -->
</template>

<script>
import auth from "../../services/auth/index";
export default {
  name: "Header",
  data() {
    return {
      isSticky: false,
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
  },
};
</script>
