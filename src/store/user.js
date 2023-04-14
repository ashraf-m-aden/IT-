import Vuex from "vuex";
import Vue from "vue";
// import firebase from 'firebase'
import AuthService from "../services/auth";
Vue.use(Vuex);

// state is the same as what would typically go inside of the data object when using Vue without Vuex.
export const state = () => ({
  userData: null,
  isLoggedIn: false,
});

// getters are Vuex's equivalent to computed properties in Vue.
// functions here will always contain state as a parameter
export const getters = {
  getUserData(state) {
    return state.userData;
  },
  getAuthentication(state) {
    return state.isLoggedIn;
  },
};

// mutations are essentially functions that update state in some way.
// You can think of these as kind of being Vuex's equivalent to Vue's methods.
export const mutations = {
  SET_AUTH(state, isLoggedIn) {
    localStorage.setItem("isLoggedIn", isLoggedIn);
    state.isLoggedIn = isLoggedIn;
  },
  SET_USER(state, user) {
    state.userData = user;
  },
};
// actions are effectively the functions that get called by your components in order to trigger a mutation.
export const actions = {
  // async checkAuth({ commit, dispatch }) {
  //     // eslint-disable-next-line no-console
  //     firebase.auth().onAuthStateChanged(async user => {

  //         if (user) {
  //             await AuthService.getUserData(user.uid).then(async (res) => {
  //                 await commit('SET_AUTH', true)
  //                 await commit('SET_USER', res.data())
  //                 await dispatch("setCourses");

  //                 // eslint-disable-next-line no-console
  //                 console.log(user);
  //             }).catch(() => {

  //                 commit('SET_AUTH', false)
  //                 commit('SET_USER', null)
  //                 AuthService.Logout();
  //             })

  //         } else {
  //             commit('SET_AUTH', false)
  //             commit('SET_USER', null)
  //             AuthService.Logout();

  //         }
  //     })

  // },
  async afterLogin({ commit, dispatch }, id) {
    localStorage.setItem("idUser", id);
    await AuthService.getUserData(id).then(async (res) => {
      await commit("SET_AUTH", true);
      await commit("SET_USER", res.data());
      await dispatch("setMyCourses");
      await dispatch("setCoursesDisponibles");
    });
  },

  async logout() {
    await AuthService.Logout();
    this.afterLogout();
  },

  afterLogout({ commit }) {
    commit("SET_AUTH", false);
    commit("SET_USER", null);
    localStorage.setItem("isLoggedIn", false);
    localStorage.removeItem("idUser");
  },
};

export default {
  actions,
  mutations,
  getters,
  state,
};
