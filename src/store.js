import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Xuser: {}
  },
  mutations: {
    CHANGEXUSER(state, Xuser) {
      state.Xuser = Xuser;
    }
  },
  actions: {
    changeXuser({ commit }, Xuser) {
      commit("CHANGEXUSER", Xuser);
    }
  }
});
