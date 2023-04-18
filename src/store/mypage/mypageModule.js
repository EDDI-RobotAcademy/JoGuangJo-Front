import Vue from "vue";
import Vuex from "vuex";

import state from "@/store/mypage/mypageStates";
import actions from "@/store/mypage/mypageActions";
import mutations from "@/store/mypage/mypageMutations";

Vue.use(Vuex);

const mypageModule = {
    namespaced: true,
    state,
    actions,
    mutations
};

export default mypageModule;