// import Vue from 'vue'
// import Vuex from 'vuex'

// import accountModule from '@/store/account/accountModule.js'
// import qnaModule from "@/store/boards/qna/qnaModule.js"
// import productModule from "@/store/boards/product/productModule.js"

// Vue.use(Vuex)

// const store = new Vuex.Store({
//   modules: {
//     accountModule: accountModule,
//     qnaModule: qnaModule,
//     productModule: productModule,
//   },
// })
//export default store

import Vue from 'vue'
import Vuex from 'vuex'

import accountModule from '@/store/account/accountModule.js';

import state from "@/store/states"
import actions from "@/store/actions"
import mutations from "@/store/mutations"
// import getters from "@/store/getters"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    account: accountModule, // Changed from accountModule to account
    // qna: qnaModule, // Changed from qnaModule to qna
    // product: productModule, // Changed from productModule to product
  },
  state,
  actions,
  mutations,
  // getters,
})
