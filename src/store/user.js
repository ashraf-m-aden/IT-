import AuthService from "../services/auth";
import { defineStore } from "pinia";

// state is the same as what would typically go inside of the data object when using Vue without Vuex.
export const userStore = defineStore("user", {
  state: () => {
    return {
      userData: null,
      isLoggedIn: false,
    };
  },
  // getters are Vuex's equivalent to computed properties in Vue.
  // functions here will always contain state as a parameter
  getters: {
    getUserData(state) {
      return state.userData;
    },
    getAuthentication(state) {
      return state.isLoggedIn;
    },
  },

  // mutations are essentially functions that update state in some way.
  // You can think of these as kind of being Vuex's equivalent to Vue's methods.
  mutations: {
    SET_AUTH(state, isLoggedIn) {
      localStorage.setItem("isLoggedIn", isLoggedIn);
      state.isLoggedIn = isLoggedIn;
    },
    SET_USER(state, user) {
      state.userData = user;
    },
  },
  // actions are effectively the functions that get called by your components in order to trigger a mutation.
  actions: {
    async afterLogin(id) {
      localStorage.setItem("idUser", id);
      await AuthService.getUserData(id).then(async (res) => {
        this.isLoggedIn = true;
        localStorage.setItem("isLoggedIn", true);
        this.userData = res.data();
      });
    },

    async logout() {
      await AuthService.Logout();
      this.afterLogout();
    },

    afterLogout() {
      this.isLoggedIn = false;
      localStorage.setItem("isLoggedIn", false);
      localStorage.removeItem("idUser");
      this.userData = null;
    },
  },
});
