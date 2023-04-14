import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "@/store/boards/qna/mutations";
import state from "@/store/boards/qna/qnaStates"
import actions from "@/store/boards/qna/actions";

Vue.use(Vuex)

const qnaModule = {
    namespaced: true,
    mutations,   
    state,
    actions,
}

export default qnaModule