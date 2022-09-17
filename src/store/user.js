import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);


// state is the same as what would typically go inside of the data object when using Vue without Vuex.
export const state = () => ({
    userData: null,
    isLoggedIn: false
})

// getters are Vuex's equivalent to computed properties in Vue.
// functions here will always contain state as a parameter
export const getters = {

    getUserData(state) {
        return state.userData
    },
    getAuthentication(state) {
        return state.isLoggedIn
    }
}

// mutations are essentially functions that update state in some way.
// You can think of these as kind of being Vuex's equivalent to Vue's methods.
export const mutations = {


    SET_AUTH(state, isLoggedIn) {
        state.isLoggedIn = isLoggedIn;
    }
}
// actions are effectively the functions that get called by your components in order to trigger a mutation.
export const actions = {

    setAuthentication({ commit }, isLoggedIn) {
        commit('SET_AUTH', isLoggedIn)
    },

    checkAuth({ commit }) {
        if (localStorage.getItem('isLoggedIn')) {
            commit('SET_AUTH', true)
        } else {
            commit('SET_AUTH', false)

        }
    }
}


export default {
    actions,
    mutations,
    getters,
    state
}
