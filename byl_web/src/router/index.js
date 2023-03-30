import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import QnaBoardListPage from "@/views/board/qna/QnaBoardListPage.vue"
import QnaBoardRegisterPage from "@/views/board/qna/QnaBoardRegisterPage.vue"
import QnaBoardReadPage from "@/views/board/qna/QnaBoardReadPage.vue"
import QnaBoardModifyPage from "@/views/board/qna/QnaBoardModifyPage.vue"

import JpaBoardListPage from "@/views/board/JpaBoardListPage.vue"
import JpaBoardRegisterPage from "@/views/board/JpaBoardRegisterPage.vue"
import JpaBoardReadPage from "@/views/board/JpaBoardReadPage.vue"
import JpaBoardModifyPage from "@/views/board/JpaBoardModifyPage.vue"

import SignUpPage from "@/views/member/SignUpPage";
import SignInPage from "@/views/member/SignInPage";
import SearchMemberPasswordPage from "@/views/member/SearchMemberPasswordPage";

import DonateChoiceView from "@/views/boards/donate/DonateChoiceView.vue";
import DonateVisitView from "@/views/boards/donate/DonateVisitView.vue";
import DonateMailView from "@/views/boards/donate/DonateMailView.vue";
import DonateSearchView from "@/views/boards/donate/DonateSearchView.vue";

import JpaProductListPage from "@/views/boards/product/ProductListPageView.vue"
import JpaProductRegisterPage from "@/views/boards/product/ProductRegisterPageView.vue"
import JpaProductReadPage from "@/views/boards/product/ProductReadPageView.vue"
import JpaProductModifyPage from "@/views/boards/product/ProductModifyPageView.vue"

import ProductListPage from "@/views/product/ProductListPage.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },


  //태현씨 qna 게시판
  {
    path: '/qna-board-list-page',
    name: 'QnaBoardListPage',
    component: QnaBoardListPage
  },
  {
    path: '/qna-board-register-page',
    name: 'QnaBoardRegisterPage',
    component: QnaBoardRegisterPage
  },
  {
  path: '/qna-board-read-page/:qnaBoardId',
  name: 'QnaBoardReadPage',
  components: {
    default: QnaBoardReadPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/qna-modify/:qnaBoardId',
    name: 'QnaBoardModifyPage',
    components: {
      default: QnaBoardModifyPage
      },
      props: {
        default: true
      }
  },


  //채율씨 이름없는 게시판 -> 태현씨가 공지(notice) 게시판으로 바꿀 예정
  {
    path: '/board-list-page',
    name: 'JpaBoardListPage',
    component: JpaBoardListPage
  },
  {
    path: '/board-register',
    name: 'JpaBoardRegisterPage',
    component: JpaBoardRegisterPage
  },
  {
    path: '/board-read/:boardId',
    name: 'JpaBoardReadPage',
    components: {
      default: JpaBoardReadPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/board-modify/:boardId',
    name: 'JpaBoardModifyPage',
    components: {
      default: JpaBoardModifyPage
    },
    props: {
      default: true
    }
  },


  //성희씨 회원가입, 로그인 페이지
  {
    path: '/sign-up',
    name: 'SignUpPage',
    component: SignUpPage
  },
  {
    path: '/sign-in',
    name: 'SignInPage',
    component: SignInPage
  },
  {
    path: '/search-password',
    name: 'SearchMemberPasswordPage',
    component: SearchMemberPasswordPage
  },
  

  //지영씨 기부 페이지
  {
    path: '/donate-choice',
    name: 'DonateChoiceView',
    component: DonateChoiceView
  },
  {
    path: '/donate-visit',
    name: 'DonateVisitView',
    component: DonateVisitView
  },
  {
    path: '/donate-mail',
    name: 'DonateMailView',
    component: DonateMailView
  },
  {
    path: '/donate-search',
    name: 'DonateSearchView',
    component: DonateSearchView
  },


  //진우씨 상품게시판
  {
    path: '/product-list-page',
    name: 'JpaProductListPage',
    component: JpaProductListPage
  },
  {
    path: '/product-register',
    name: 'JpaProductRegisterPage',
    component: JpaProductRegisterPage
  },
  {
    path: '/product-read/:productId',
    name: 'JpaProductReadPage',
    components: {
      default: JpaProductReadPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/product-modify/:productId',
    name: 'JpaProductModifyPage',
    components: {
      default: JpaProductModifyPage
    },
    props: {
      default: true
    }
  },

  //채율씨 상품게시판
  {
    path: '/product-list',
    name: 'ProductListPage',
    component: ProductListPage
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
