<template>
    <nav>
        <!-- 네비게이션바 -->
        <v-app-bar color="white" dense app elevation="1">
            <v-app-bar-nav-icon @click="drawer = true" class="drawer-icon"></v-app-bar-nav-icon>

            <v-spacer></v-spacer>

         <!--   <v-btn
            v-if="isAuthenticated == true"
            v-on:click="resign"
            class="btn"
            >
            회원 탈퇴 
            <v-icon right>mdi-login</v-icon>
            </v-btn> -->  <!-- 바로 보이는 회원 탈퇴 버튼 삭제 -->

            <v-btn
             v-if="!isAuthenticated"
             onclick="location.href='http://localhost:8080/sign-up'"
             class="btn"
            >
            회원 가입
            <v-icon right>mdi-account-plus-outline</v-icon>
            </v-btn>

            <v-btn
             v-else
             onclick="location.href='http://localhost:8080/mypage'"
             class="btn"
            >
            마이페이지
            <v-icon right>mdi-account-circle-outline</v-icon>
            </v-btn>

            <v-btn
            v-if="isAuthenticated == false"
            onclick="location.href='http://localhost:8080/sign-in'"
            class="btn"
            >
            로그인
            <v-icon right>mdi-login</v-icon>
            </v-btn>

            <v-btn
            v-else
            v-on:click="logout"
            class="btn"
            >
            로그아웃
            <v-icon right>mdi-exit-to-app</v-icon>
            
            </v-btn>
                   <!--     <v-btn
            v-if="isAuthenticated == true"
            onclick="location.href='http://localhost:8080/cart-list-view'"
            class="btn"
            >
            장바구니
            <v-icon right></v-icon>
            </v-btn> 일단 삭제 -->

        </v-app-bar>
        
        <!-- 사이드바 -->
        <v-navigation-drawer v-model="drawer" absolute temporary class="nav-drawer">
            <v-list nav dense>
                
                <v-list-item-group
                v-model="group"
                active-class="yellow--text text--accent-4"
                >

                <div align="center">
                    <router-link v-for="icon in icons" :key="icon" :to="getLink(icon)" class="deleteBlueUnderLine">
                        <v-btn class="mx-1 icon-btn" icon>
                            <v-icon size="24px">{{ icon }}</v-icon>
                        </v-btn>
                    </router-link>
                </div>
                
                <v-toolbar-title class="nav-drawer-logo">
                  <router-link to="/">
                    <img src="@/assets/logo/logo.gif" alt="로고" width="100%" height="100%">
                  </router-link>
                </v-toolbar-title>

                <v-list-item>
                  <div class="search-bar">
                    <v-text-field
                        v-model="search"
                        class="nav-search"
                        placeholder="  검색어를 입력하세요."
                        prepend-icon="mdi-magnify"
                        color="#FFDE59"
                        clearable
                        style="width:160px;"
                        @keydown.enter="searchPage()"
                    >
                    </v-text-field>
                  </div>
                       <div class="search-btn">
                        <v-btn
                        small
                        color="#fee789"
                        rounded
                        @click="searchPage()"
                        >
                        검색
                        </v-btn>
                       </div>
                    </v-list-item>

                    <v-list-item
                    onclick="location.href='/'">
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                    <v-list-item-title>홈으로 돌아가기</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                    onclick="location.href='http://localhost:8080/donate-register'">
                        <v-list-item-icon>
                            <v-icon>mdi-hand-heart-outline</v-icon>
                        </v-list-item-icon>
                    <v-list-item-title>책 기부하기</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                    onclick="location.href='http://localhost:8080/'">
                        <v-list-item-icon>
                            <v-icon>mdi-card-account-details-star-outline</v-icon>
                        </v-list-item-icon>
                    <v-list-item-title>후원하기</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                    onclick="location.href='http://localhost:8080/'">
                        <v-list-item-icon>
                            <v-icon>mdi-hand-back-right-outline</v-icon>
                        </v-list-item-icon>
                    <v-list-item-title>자원봉사 신청하기</v-list-item-title>
                    </v-list-item>
        
                    <v-list-item
                    onclick="location.href='http://localhost:8080/product-list'">
                        <v-list-item-icon>
                            <v-icon>mdi-cart</v-icon>
                        </v-list-item-icon>
                    <v-list-item-title>쇼핑하기</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                    onclick="location.href='http://localhost:8080/product-list'">
                        <v-list-item-icon>
                            <v-icon>mdi-teddy-bear</v-icon>
                        </v-list-item-icon>
                    <v-list-item-title>굿즈 구매하기</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                    onclick="location.href='http://localhost:8080/product-list'">
                        <v-list-item-icon>
                            <v-icon>mdi-book</v-icon>
                        </v-list-item-icon>
                    <v-list-item-title>책 구매하기</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                    onclick="location.href='http://localhost:8080/'">
                        <v-list-item-icon>
                            <v-icon>mdi-lead-pencil</v-icon>
                        </v-list-item-icon>
                    <v-list-item-title>책 리뷰 쓰기</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                    onclick="location.href='http://localhost:8080/'">
                        <v-list-item-icon>
                            <v-icon>mdi-dots-circle</v-icon>
                        </v-list-item-icon>
                    <v-list-item-title>온오프 모임 참여하기</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                    onclick="location.href='http://localhost:8080/qna-board-list-view'">
                        <v-list-item-icon>
                            <v-icon>mdi-help-circle-outline</v-icon>
                        </v-list-item-icon>
                    <v-list-item-title>QnA 문의하기</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                    onclick="location.href='http://localhost:8080/'">
                        <v-list-item-icon>
                            <v-icon>mdi-information-outline</v-icon>
                        </v-list-item-icon>
                    <v-list-item-title>공지 보러가기</v-list-item-title>
                    </v-list-item>


                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>


<script>
import {mapState} from "vuex";
// const accountModule = 'accountModule';
import axios from "axios";

export default {
        name: "NavigationForm",
        data() {
            return {
                drawer: false,
                group: null,
                search: '',
                isTrue: false,
                links: [
                { icon: 'mdi-home', text: 'Home', name: 'home', route: '/' },
                { icon: 'mdi-cart', text: 'Product', name: 'product', route: '/product-list'}
                ],
                icons: [
                "mdi-instagram",
                "mdi-youtube",
                "mdi-facebook"
                ],
                links: {
                "mdi-instagram": "/instagram",
                "mdi-youtube": "/youtube",
                "mdi-facebook": "/facebook"
                },
                selectedOption: { text: '상품명', value: 'productName' },
                searchOptions: [
                    { text: '상품명', value: 'productName' },
                    { text: '작성자', value: 'author' },
                    { text: '내용', value: 'content' }
        ]
        }
    }, 
    computed: {
        // ...mapState(accountModule, ["isAuthenticated"]),
        ...mapState(["isAuthenticated"]),
    },
    mounted() {
        if (localStorage.getItem("userInfo")) {
        // this.$store.state.accountModule.isAuthenticated = true;
        // } else {
        // this.$store.state.accountModule.isAuthenticated = false;
        // }
        this.$store.state.isAuthenticated = true;
        } else {
        this.$store.state.isAuthenticated = false;
        }
    },
    methods: {
        searchPage() {
            if(this.search.trim() !== '') {
             // 검색어가 있는 경우, 검색 결과 페이지로 이동합니다.
                this.$router.push({
                path: '/search',
                query: { q: this.search.trim() } // 검색어를 쿼리 파라미터로 전달합니다.
        });
            } else {
                alert('검색결과가 없습니다.');
        }
        },
        clickToggle () {
            this.isTrue = !this.isTrue;
        },
        logout () {
            console.log('getItem: ' + localStorage.getItem("userInfo"))
            let token = localStorage.getItem("userInfo")
            const length = token.length
            console.log('token: ' + token + ', length: ' + length)
            token = token.substr(1, length - 2)
            console.log('token: ' + token + ', length: ' + token.length)
            axios.post("http://localhost:7777/member/logout", token)
                .then(() => {
                    alert("로그아웃 완료");
                    localStorage.removeItem("userInfo");
                    this.$store.state.isAuthenticated = false;
                })
        },
        resign () {

        // localStorage에 "userInfo"라는 키에 매핑되어있는 값을 token에 저장
        let token = localStorage.getItem("userInfo")
        console.log("초기 데이터" + token)
        let length = token.length
        // token은 {}(중괄호) 로 묶여있으므로 해당하는 중괄호 제거
        token = token.substr(2, length - 4)
        // 해당하는 값들에서 우리가 전달하고 싶은 token값만 선별
        console.log(token.split(',')[0].split(':')[1])
        // 해당하는 토큰값은 ""(쌍따옴표)로 묶여있음 해당하는 것은 Spring에서 제거(이유없음)
        console.log('token: ' + token + ', length: ' + length)
        let userToken = token.split(',')[0].split(':')[1]
        const userLength = userToken.length; 
        userToken = userToken.substr(1, userLength - 2)
        
        console.log('token: ' + userToken + ' !!!! length: ' + length)
        axios.post("http://localhost:7777/member/resign", userToken)
            .then(() => {
                alert("회원탈퇴 완료");
                localStorage.removeItem("userInfo");
                this.$store.state.isAuthenticated = false;
            })
        },
        getLink(icon) {
            return this.links[icon];
        }
    }
}
</script>



<style scoped>

.nav-drawer {
    position: fixed;
    top: 0;
}

.nav-drawer-logo {
    padding: 20px;
}

.nav-search ::placeholder {
  font-size: 12px;
}

.drawer-icon:hover {
    background-color: rgba(255, 242, 189, 0.5);
    color: #FFC107;
}

.v-list-item:hover .v-icon,
.v-list-item:hover .v-list-item__title {
  color: #FFC107;
}
.v-list-item:hover {
  background-color: rgba(255, 242, 189, 0.5);
}

.icon-btn:hover {
    background-color: rgba(255, 242, 189, 0.5);
    color: #FFC107;
}

.btn {
    background-color: #fee789 !important;
    color: black;
    border-radius: 25px;
    margin-right: 10px;
  }

.btn:hover {
    background-color: #FFC107 !important;
    color: white;
  }

.deleteBlueUnderLine {
  text-decoration: none;
  color: black;
}

.search-btn {
  margin-left: 7px;
  margin-bottom: -7px;
  width: 100px;
  height: 40px; 
}
.search-bar {
  margin-left: 0px;
}
</style>