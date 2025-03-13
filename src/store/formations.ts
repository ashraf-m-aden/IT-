import { defineStore } from "pinia";
import FormationService from "../services/formation";

export const formationStore = defineStore("formation", {
  state: () => {
    return {
      formationsData: [],
      myFormations: [],
    };
  },
  // getters are Vuex's equivalent to computed properties in Vue.
  // functions here will always contain state as a parameter
  getters: {
    getMyFormations() {
      return this.myFormations;
    },
    getAllformations() {
      // eslint-disable-next-line no-console
      return this.formationsData;
    },
  },

  // mutations are essentially functions that update state in some way.
  // You can think of these as kind of being Vuex's equivalent to Vue's methods.
  // mutations: {
  //   SET_COURSES(state, formations) {
  //     state.formations = formations;
  //   },
  //   SET_MYCOURSES(state, formations) {
  //     state.myFormations = formations;
  //   },
  // },
  // actions are effectively the functions that get called by your components in order to trigger a mutation.
  actions: {
    async setCoursesDisponibles() {
      await FormationService.getTraining().then((data) => {
        this.formationsData = data;
      });
    },

    async setMyCourses() {
      const myFormations = await FormationService.getMyTraining();
      this.myFormations = myFormations;
    },

    // getMyCourses({ dispatch }) {
    //     if (localStorage.getItem('isLoggedIn')) {
    //         commit('SET_AUTH', true)
    //     } else {
    //         commit('SET_AUTH', false)

    //     }
    // }
  },
});
