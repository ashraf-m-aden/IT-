import Vuex from 'vuex';
import Vue from 'vue';
import FormationService from '../services/formation';
Vue.use(Vuex);


// state is the same as what would typically go inside of the data object when using Vue without Vuex.
export const state = () => ({
    formations: [],
})

// getters are Vuex's equivalent to computed properties in Vue.
// functions here will always contain state as a parameter
export const getters = {

    getMyFormations(state) {
        return state.formations
    },

}

// mutations are essentially functions that update state in some way.
// You can think of these as kind of being Vuex's equivalent to Vue's methods.
export const mutations = {


    SET_COURSES(state, formations) {
        state.formations = formations;
    }
}
// actions are effectively the functions that get called by your components in order to trigger a mutation.
export const actions = {

    setCourses({ commit }) {
        const formation = FormationService.getTraining();
        // eslint-disable-next-line no-console
        formation.then(data => {

            commit('SET_COURSES', data)

        })

    },

    // getMyCourses({ dispatch }) {
    //     if (localStorage.getItem('isLoggedIn')) {
    //         commit('SET_AUTH', true)
    //     } else {
    //         commit('SET_AUTH', false)

    //     }
    // }
}

export default {
    actions,
    mutations,
    getters,
    state
}
