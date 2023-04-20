import Vue from 'vue'
import Vuex from 'vuex'

//성희
import accountModule from '@/store/account/accountModule.js'
import mypageModule from '@/store/mypage/mypageModule.js'

// 태현
import qnaModule from "@/store/boards/qna/qnaModule.js"
import cartModule from "@/store/cart/cartModule.js"

// 진우
import productModule from "@/store/boards/product/productModule.js"

// 지영
import donateModule from "@/store/boards/donate/donateModule.js"

// 태현 -> 지영
import noticeModule from "@/store/boards/notice/noticeModule.js"


Vue.use(Vuex)

export default new Vuex.Store({

  modules:{

    // 성희
    account: accountModule,
    mypage: mypageModule,
    
    // 태현
    qnaModule: qnaModule,
    cartModule: cartModule,

    // 진우
    productModule: productModule,

    // 지영
    donateModule: donateModule,

    // 태현 -> 지영
    noticeModule: noticeModule,

  },
})