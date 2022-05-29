import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameModeSelected: null,
    disabledNumbers: [],
    randomNumber: null,
  },
  getters: {
    getDisabledNumbers(state) {
      return state.disabledNumbers;
    },
    getRandomNumber(state) {
      return state.randomNumber;
    },
  },
  mutations: {
    setRandomNumber(state) {
      state.randomNumber = Math.floor(Math.random() * 49) + 1;
    },
    clearRandomNumber(state) {
      state.randomNumber = null;
    },
    disableNumber(state, value) {
      state.disabledNumbers.push(value);
    },
    resetDisabledNumbers(state) {
      state.disabledNumbers = [];
    },
  },
  actions: {
  },
  modules: {
  },
});
