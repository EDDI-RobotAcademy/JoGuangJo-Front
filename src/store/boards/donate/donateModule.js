import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "@/store/boards/donate/mutations";
import state from "@/store/boards/donate/donateStates"
import actions from "@/store/boards/donate/actions";

Vue.use(Vuex)

const donateModule = {
    namespaced: true,
    mutations,   
    state,
    actions,
}

export default donateModule


