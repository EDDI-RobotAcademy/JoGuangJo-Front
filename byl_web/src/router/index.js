import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


import QnaBoardListPage from "@/views/board/qnaBoard/QnaBoardListPage.vue"
import QnaBoardRegisterPage from "@/views/board/qnaBoard/QnaBoardRegisterPage.vue"

import ReviewBoardListPage from "@/views/board/reviewBoard/ReviewBoardListPage.vue"
import ReviewBoardRegisterPage from "@/views/board/reviewBoard/ReviewBoardRegisterPage.vue"
import ReviewBoardReadPage from "@/views/board/reviewBoard/ReviewBoardReadPage.vue"
import ReviewBoardModifyPage from "@/views/board/reviewBoard/ReviewBoardModifyPage.vue"

import SignUpPage from "@/views/member/SignUpPage.vue";
import SignInPage from "@/views/member/SignInPage.vue";
import FindPasswordPage from "@/views/member/FindPasswordPage.vue";

import DonateChoicePage from "@/views/donate/DonateChoicePage.vue";
import DonateVisitPage from "@/views/donate/DonateVisitPage.vue";
import DonateMailPage from "@/views/donate/DonateMailPage.vue";
import DonateSearchPage from "@/views/donate/DonateSearchPage.vue";



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/qnaBoard-list',
    name: 'QnaBoardListPage',
    component: QnaBoardListPage
  },
  {
    path: '/qnaBoard-register',
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
    path: '/reviewBoard-list',
    name: 'ReviewBoardListPage',
    component: ReviewBoardListPage
  },
  {
    path: '/reviewBoard-register',
    name: 'ReviewBoardRegisterPage',
    component: ReviewBoardRegisterPage
  },
  {
    path: '/reviewBoard-read/:boardId',
    name: 'ReviewBoardReadPage',
    components: {
      default: ReviewBoardReadPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/reviewBoard-modify/:boardId',
    name: 'ReviewBoardModifyPage',
    components: {
      default: ReviewBoardModifyPage
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
    path: '/find-password',
    name: 'FindPasswordPage',
    component: FindPasswordPage
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
