<template>
  <!-- Start Navbar Area -->
  <header id="header" :class="['headroom', { 'is-sticky': isSticky }]">
    <div class="startp-nav">
      <div class="container">
        <nav class="navbar navbar-expand-md navbar-light">

            <a class="navbar-brand" href="/">
                <img src="../../assets/img/logo.svg" class="navbarbrand" :class="{ 'navbar-shrink': isShrunk }"  alt="IT+ ADVANCED TECHNOLOGY" />
            </a>

          <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" id="collapseBtn"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav nav ml-auto">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Acceuil</router-link>
              </li>

              <li class="nav-item">
                <router-link to="/a-propos" class="nav-link">A propos de nous</router-link>
              </li>

              <li class="nav-item">
                <a class="nav-link">Programmes <vue-feather type="chevron-down"></vue-feather></a>
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

            </ul>
          </div>

        </nav>
      </div>
    </div>
  </header>
  <!-- End Navbar Area -->
</template>

<script>
import auth from "../../services/auth";
import { userStore } from "../../store/user";
import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "HeaderPage",

  setup() {
    const isSticky = ref(false);
    const isMobile = ref(false);
    const store = userStore();
    const isShrunk = ref(false);

    return {
      isSticky,
      isMobile,
      store,
      isShrunk,
    };
  },






  mounted() {

    const that = this;
    window.addEventListener("scroll", () => {
      this.isShrunk = window.scrollY > 50; // Shrink when scrolled 50px

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
    window.addEventListener("DOMContentLoaded", function () {
      var btn = document.getElementById("collapseBtn");
      var element = document.getElementById("navbarSupportedContent");

      // Create a collapse instance, toggles the collapse element on invocation
      var myCollapse = new bootstrap.Collapse(element);

      btn.addEventListener("click", function () {
        myCollapse.toggle();
      });
    });
  },

  computed: {
    isAuthenticated() {
      return this.store.getAuthentication;
    },
  },
  methods: {
    logout() {
      auth
        .Logout()
        .then(async () => {
          await store.afterLogout();
          // await this.$store.dispatch("afterLogout");
          this.$router.push("/login");
        })
        .catch(async () => {
          await store.afterLogout();
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

.navbarbrand{
  width: 100px;
  animation: backwards 1s;

}
/* Navbar Shrinks on Scroll */
.navbar-shrink {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  width: 40px; /* Shrinks the logo */

}

.navbar-shrink .navbarbrand {
  width: 40px; /* Shrinks the logo */

}
</style>
