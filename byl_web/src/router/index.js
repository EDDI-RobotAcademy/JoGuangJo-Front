import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
