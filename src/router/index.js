import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

// 태현씨 qna 게시판
import QnaBoardListPage from "@/views/board/qna/QnaBoardListPage.vue"
import QnaBoardRegisterPage from "@/views/board/qna/QnaBoardRegisterPage.vue"
import QnaBoardReadPage from "@/views/board/qna/QnaBoardReadPage.vue"
import QnaBoardModifyPage from "@/views/board/qna/QnaBoardModifyPage.vue"

// 채율씨 공지 게시판으로 바뀔 예정
import JpaBoardListPage from "@/views/board/JpaBoardListPage.vue"
import JpaBoardRegisterPage from "@/views/board/JpaBoardRegisterPage.vue"
import JpaBoardReadPage from "@/views/board/JpaBoardReadPage.vue"
import JpaBoardModifyPage from "@/views/board/JpaBoardModifyPage.vue"

// 성희씨 회원가입, 로그인 페이지
import SignUpPage from "@/views/member/SignUpPage.vue"
import SignInPage from "@/views/member/SignInPage.vue"
import SearchMemberPasswordPage from "@/views/member/SearchMemberPasswordPage.vue"

// 지영씨 기부 페이지
import DonateChoiceView from "@/views/boards/donate/DonateChoiceView.vue"
import DonateVisitView from "@/views/boards/donate/DonateVisitView.vue"
import DonateMailView from "@/views/boards/donate/DonateMailView.vue"
import DonateSearchView from "@/views/boards/donate/DonateSearchView.vue"

// 진우씨 상품 게시판
import ProductListView from "@/views/boards/product/ProductListView.vue"
import ProductRegisterView from "@/views/boards/product/ProductRegisterView.vue"
import ProductReadView from "@/views/boards/product/ProductReadView.vue"
import ProductModifyView from "@/views/boards/product/ProductModifyView.vue"

// 채율씨 상품 게시판 - 썸네일 테스트중
import ProductListPage from "@/views/product/ProductListPage.vue"

// 성희씨 마이 페이지
import MyPage from "@/views/mypage/MyPageView.vue"

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
    path: '/board-list',
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
    path: '/product-list',
    name: 'ProductListView',
    component: ProductListView
  },
  {
    path: '/product-register',
    name: 'ProductRegisterView',
    component: ProductRegisterView
  },
  {
    path: '/product-read/:productId',
    name: 'ProductReadView',
    components: {
      default: ProductReadView
    },
    props: {
      default: true
    }
  },
  {
    path: '/product-modify/:productId',
    name: 'ProductModifyView',
    components: {
      default: ProductModifyView
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
  },
  
  // 성희씨 마이페이지
  {
    path: '/mypage',
    name: 'MyPage',
    components: {
      default: MyPage
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
