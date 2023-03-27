import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QnaBoardListPage from "@/views/board/qna/QnaBoardListPage.vue"
import QnaBoardRegisterPage from "@/views/board/qna/QnaBoardRegisterPage.vue"
import QnaBoardReadPage from "@/views/board/qna/QnaBoardReadPage.vue"
import QnaBoardModifyPage from "@/views/board/qna/QnaBoardModifyPage.vue"

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


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
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
    path: '/qna-modify/:qnaBoardId',
    name: 'QnaBoardModifyPage',
    components: {
      default: QnaBoardModifyPage
      },
      props: {
        default: true
      }
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
