import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import DonateBoardListPage from "@/views/donateBoard/DonateBoardListPage.vue"
import DonateBoardRegisterPage from "@/views/donateBoard/DonateBoardRegisterPage.vue"
import DonateBoardReadPage from "@/views/donateBoard/DonateBoardReadPage.vue"
import DonateBoardModifyPage from "@/views/donateBoard/DonateBoardModifyPage.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/donate-board-list',
    name: 'DonateBoardListPage',
    component: DonateBoardListPage
  },
  {
    path: '/donate-board-register',
    name: 'DonateBoardRegisterPage',
    component: DonateBoardRegisterPage
  },
  {
    path: '/donate-board-read/:boardId',
    name: 'DonateBoardReadPage',
    components: {
      default: DonateBoardReadPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/donate-board-modify/:boardId',
    name: 'DonateBoardModifyPage',
    components: {
      default: DonateBoardModifyPage
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
