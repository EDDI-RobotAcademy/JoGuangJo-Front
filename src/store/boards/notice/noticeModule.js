import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "@/store/boards/notice/mutations";
import state from "@/store/boards/notice/noticeStates"
import actions from "@/store/boards/notice/actions";

Vue.use(Vuex)

const noticeModule = {
    namespaced: true,
    mutations,   
    state,
    actions,
}

export default noticeModule