import Vue from "vue";
import Vuex from "vuex";

import weathers from "./modules/weathers";

import * as actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  modules: {
    weathers
  }
});
