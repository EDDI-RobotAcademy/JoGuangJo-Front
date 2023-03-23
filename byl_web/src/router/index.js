import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuestionBoardList from "@/views/board/QuestionBoard/QuestionBoardListPage.vue"
import QuestionBoardRegisterPage from "@/views/board/QuestionBoard/QuestionBoardRegisterPage.vue"

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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
