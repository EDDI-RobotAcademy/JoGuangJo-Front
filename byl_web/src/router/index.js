import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuestionBoardList from "@/views/board/QuestionBoard/QuestionBoardListPage.vue"
import QuestionBoardRegisterPage from "@/views/board/QuestionBoard/QuestionBoardRegisterPage.vue"
import QuestionBoardReadPage from "@/views/board/QuestionBoard/QuestionBoardReadPage.vue"
import QuestionBoardModifyPage from "@/views/board/QuestionBoard/QuestionBoardModifyPage.vue"

import SignUpChoiceView from "@/views/signUp/SignUpChoiceView.vue";
import EnterpriseSignUpView from "@/views/signUp/EnterpriseSignUpView.vue";
import CommonSignUpView from "@/views/signUp/CommonSignUpView.vue";
import SignInView from "@/views/signUp/SignInView.vue";

import JpaBoardListPage from "@/views/board/JpaBoardListPage.vue"
import JpaBoardRegisterPage from "@/views/board/JpaBoardRegisterPage.vue"
import JpaBoardReadPage from "@/views/board/JpaBoardReadPage.vue"
import JpaBoardModifyPage from "@/views/board/JpaBoardModifyPage.vue"

import SignUpPage from "@/views/member/SignUpPage";
import SignInPage from "@/views/member/SignInPage";
import SearchMemberPasswordPage from "@/views/member/SearchMemberPasswordPage";

import DonateChoicePage from "@/views/donate/DonateChoicePage.vue";
import DonateVisitPage from "@/views/donate/DonateVisitPage.vue";
import DonateMailPage from "@/views/donate/DonateMailPage.vue";
import DonateSearchPage from "@/views/donate/DonateSearchPage.vue";


import JpaProductListPage from "@/views/lecture/product/JpaProductListPage.vue"
import JpaProductRegisterPage from "@/views/lecture/product/JpaProductRegisterPage.vue"
import JpaProductReadPage from "@/views/lecture/product/JpaProductReadPage.vue"
import JpaProductModifyPage from "@/views/lecture/product/JpaProductModifyPage.vue"

import ProductListPage from "@/views/product/ProductListPage.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/question-board-list-page',
    name: 'QuestionBoardList',
    component: QuestionBoardList
  },
  {
    path: '/question-board-register-page',
    name: 'QuestionBoardRegisterPage',
    component: QuestionBoardRegisterPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  
  {
    path: '/sign-up-choice',
    name: 'SignUpChoiceView',
    component: SignUpChoiceView
  },
  {
    path: '/enterprise-sing-up',
    name: 'EnterpriseSignUpView',
    component: EnterpriseSignUpView
  },
  {
    path: '/common-sing-up',
    name: 'CommonSignUpView',
    component: CommonSignUpView
  },
  {
    path: '/SignInView',
    name: 'SignInView',
    component: SignInView
  },

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
  
  {
    path: '/donate-choice',
    name: 'DonateChoicePage',
    component: DonateChoicePage
  },
  {
    path: '/donate-visit',
    name: 'DonateVisitPage',
    component: DonateVisitPage
  },
  {
    path: '/donate-mail',
    name: 'DonateMailPage',
    component: DonateMailPage
  },
  {
    path: '/donate-search',
    name: 'DonateSearchPage',
    component: DonateSearchPage
  },
  {
  path: '/question-board-read-page/:questionBoardId',
  name: 'QuestionBoardReadPage',
  components: {
    default: QuestionBoardReadPage
    },
    props: {
      default: true
    }
  },
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
  {
    path: '/questionBoard-modify/:questionBoardId',
    name: 'QuestionBoardModifyPage',
    components: {
      default: QuestionBoardModifyPage
      },
      props: {
        default: true
      }
  },
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
