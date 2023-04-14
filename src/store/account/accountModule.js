import Vue from 'vue'
import Vuex from 'vuex'

import state from "@/store/account/accountStates"

Vue.use(Vuex)

const accountModule = {
    namespaced: true, 
    state
}
export default accountModule