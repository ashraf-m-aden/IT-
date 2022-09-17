import Vuex from 'vuex';
import Vue from 'vue';
import user from './user.js'
import courses from './courses.js'
Vue.use(Vuex);

export default new Vuex.Store({
    // state is the same as what would typically go inside of the data object when using Vue without Vuex.
    state: {

    },

    // getters are Vuex's equivalent to computed properties in Vue.
    // functions here will always contain state as a parameter
    getters: {
        total: state => {
            if (state.cart.length > 0) {
                return state.cart.map(item => item.totalPrice).reduce((total, amount) => total + amount);
            } else {
                return 0;
            }
        }
    },

    // mutations are essentially functions that update state in some way.
    // You can think of these as kind of being Vuex's equivalent to Vue's methods.
    mutations: {
        addToCart(state, payload) {
            let addedItem = state.items.find(item => item.id === payload.id)

            let existItem = state.cart.find(item => item.id == payload.id);

            if (existItem) {
                existItem.productQuantity++;
                existItem.totalPrice += addedItem.price;
            } else {
                return state.cart.push(payload);
            }
            // return state.cart.push(payload);
        },

        removeFromCart(state, item) {
            let index = state.cart.indexOf(item);
            state.cart.splice(index, 1);
        }
    },
    // actions are effectively the functions that get called by your components in order to trigger a mutation.
    actions: {

    },

    modules: {
        user,
        courses
    }
});

