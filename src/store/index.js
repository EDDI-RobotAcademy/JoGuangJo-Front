// 각 도메인별로 store 분리가 완전히 끝나면,
// store 폴더 들어갔을 때 각 도메인폴더 주루룩 + 이 index.js 파일 이렇게 보여야 합니다


import Vue from 'vue'
import Vuex from 'vuex'


import accountModule from '@/store/account/accountModule.js';

import state from "@/store/states"
import actions from "@/store/actions"
import mutations from "@/store/mutations"
// import getters from "@/store/getters"

//성희
import accountModule from '@/store/account/accountModule.js'

// 태현
import qnaModule from "@/store/boards/qna/qnaModule.js"

// 진우
import productModule from "@/store/boards/product/productModule.js"

// 지영
import donateModule from "@/store/boards/donate/donateModule.js"


Vue.use(Vuex)

export default new Vuex.Store({

  modules:{

    // 성희
    account: accountModule,

    // 태현
    qnaModule: qnaModule,

    // 진우
    productModule: productModule,

    // 지영
    donateModule: donateModule,

  },
  state,
  actions,
  mutations,
  // getters,
})