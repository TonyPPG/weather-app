/*
  state management for weathers used by vuex
*/
import weathers from "../../data/weathers";

const state = {
  weathers: []
};

const mutations = {
  SET_WEATHERS(state, weathers) {
    state.weathers = weathers;
  }
};

const actions = {
  initWeathers: ({ commit }) => {
    commit("SET_WEATHERS", weathers);
  }
};

const getters = {
  weathers: state => {
    return state.weathers;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
