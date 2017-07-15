/*
 Documentation on State Management:
 https://vuejs.org/v2/guide/state-management.html

 AND

 VEUX: A Centralized State Management for Vue.js.
 https://github.com/vuejs/vuex
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  spaceshipList: [],
};

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  updateSpaceshipList(placeholder, ships) {
    console.log('----------', ships);
    state.spaceshipList = ships;
  },
};

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
  updateSpaceshipList: ({ commit }) => commit('updateSpaceshipList'),
};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  actions,
  mutations,
});
