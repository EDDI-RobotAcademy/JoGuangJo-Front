import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "@/store/boards/product/mutations";
import state from "@/store/boards/product/productStates"
import actions from "@/store/boards/product/actions";

Vue.use(Vuex)

const productModule = {
    namespaced: true,
    mutations,   
    state,
    actions,
}

export default productModule