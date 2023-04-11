import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import state from "@/store/states.js"

// (박지영) 사용자의 로그인 여부에 따라 특정 페이지 접근을 제한하기 위한 메서드
function isAuthenticated() {
  return state.isAuthenticated;
}

// 태현씨 qna 게시판
import QnaBoardListView from "@/views/boards/qna/QnaBoardListView.vue"
import QnaBoardRegisterView from "@/views/boards/qna/QnaBoardRegisterView.vue"
import QnaBoardReadView from "@/views/boards/qna/QnaBoardReadView.vue"
import QnaBoardModifyView from "@/views/boards/qna/QnaBoardModifyView.vue"

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
import DonateVisitRegisterView from "@/views/boards/donate/DonateVisitRegisterView.vue"
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
import PassWordChange from "@/views/mypage/PassWordChangeView.vue"
import MemberTypeRequest from "@/views/mypage/MemberTypeRequestView.vue"

// 지영씨 마이페이지-나의기부내역
import MyDonateVisitListView from "@/views/mypage/myDonate/MyDonateVisitListView.vue"
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
    path: '/qna-board-list-view',
    name: 'QnaBoardListView',
    component: QnaBoardListView
  },
  {
    path: '/qna-board-register-view',
    name: 'QnaBoardRegisterView',
    component: QnaBoardRegisterView
  },
  {
  path: '/qna-board-read-view/:qnaBoardId',
  name: 'QnaBoardReadView',
  components: {
    default: QnaBoardReadView
    },
    props: {
      default: true
    }
  },
  {
    path: '/qna-modify/:qnaBoardId',
    name: 'QnaBoardModifyView',
    components: {
      default: QnaBoardModifyView
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
  {
    path: '/membertyperequest',
    name: 'MemberTypeRequest',
    component: MemberTypeRequest
  },
  

  //지영씨 기부 페이지
  {
    path: '/donate-choice',
    name: 'DonateChoiceView',
    component: DonateChoiceView
  },
  {
    path: '/donate-visit-register',
    name: 'DonateVisitRegisterView',
    component: DonateVisitRegisterView,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        alert("방문기부를 신청하시려면 먼저 로그인을 하셔야 합니다");
        next("/sign-in");
      }
    }
  },
  {
    path: '/donate-mail',
    name: 'DonateMailView',
    component: DonateMailView,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        alert("택배기부를 신청하시려면 먼저 로그인을 하셔야 합니다");
        next("/sign-in");
      }
    }
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
  },
  {
    path: '/passwordChange',
    name: 'PasswordChange',
    components: {
      default: PassWordChange
    }
  },

  // 지영씨 마이페이지-나의기부내역
  {
    path: '/mypage/my-donate-list',
    name: 'MyDonateVisitListView',
    component: MyDonateVisitListView
  },
  // SNS 이동
  {
    path: '/instagram',
    name: 'Instagram',
    beforeEnter: (to, from, next) => {
      window.location = 'https://www.instagram.com/bookyoulove.proj/';
      // to : 이동하려는 라우트의 'Route' 객체
      // from : 현재 라우트의 'Route' 객체
      // next : 다음 단계로 진행하기 위해 호출해야 하는 함수
      // 현재는 필요 없는 매개변수
    }
  },
  {
    path: '/youtube',
    name: 'youtube',
    beforeEnter: (to, from, next) => {
      window.location = 'https://www.youtube.com/@_BYL';
    }
  },
  {
    path: '/facebook',
    name: 'facebook',
    beforeEnter: (to, from, next) => {
      window.location = 'https://www.facebook.com/profile.php?id=100090712311488&mibextid=ZbWKwL';
    },
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
