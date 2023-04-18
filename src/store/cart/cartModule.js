import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "@/store/cart/mutations";
import state from "@/store/cart/cartStates"
import actions from "@/store/cart/actions";

Vue.use(Vuex)

const cartModule = {
    namespaced: true,
    mutations,   
    state,
    actions,
}

export default cartModule