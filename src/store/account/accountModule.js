import Vue from "vue";
import Vuex from "vuex";

import state from "@/store/account/accountStates";
import actions from "@/store/account/accountActions";
import mutations from "@/store/account/accountMutations";

Vue.use(Vuex);

const accountModule = {
  namespaced: true,
  state,
  actions,
  mutations
};

export default accountModule;
