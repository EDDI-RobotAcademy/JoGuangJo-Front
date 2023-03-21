import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuestionBoardList from "@/views/board/QuestionBoard/QuestionBoardListPage.vue"
import QuestionBoardRegisterPage from "@/views/board/QuestionBoard/QuestionBoardRegisterPage.vue"

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
