<template>
    <nav>
        <v-app-bar color="white" class="flex-grow-0" app elevation="0"> 
            <v-app-bar-nav-icon @click="navigation_drawer = !navigation_drawer"/>
                <router-link to="/">
                    <v-img class="mx-2" src="@/assets/logo/logo.png"
                        max-height="80" max-width="130" contain/>
                </router-link>
            <v-toolbar-title class="text-uppercase text--darken-4">
                <span></span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-menu bottom left class="custom-menu">
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on">
                    <v-icon>mdi-menu-down</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="item in searchOptions" :key="item.text" @click="selectedOption=item">
                    <v-list-item-title>{{ item.text }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>


            <v-text-field v-model="search" hide-details prepend-inner-icon="mdi-magnify" solo-inverted
                color="white"
                flat
                @keydown.enter="searchPage()" 
                style="max-width: 200px;"
                class="search-elements"/>

            <v-btn text @click="searchPage()" class="search-elements"> 
                <span>검색</span>
            </v-btn>

              <v-btn v-if="isAuthenticated == true" text color="grey" v-on:click="resign">
                <span>회원 탈퇴</span>
                <v-icon right>mdi-login</v-icon>
            </v-btn>
            <v-btn text color="grey" onclick="location.href='http://localhost:8080/sign-up'">
                <span>Sign Up</span>
                <v-icon right>mdi-account-plus-outline</v-icon>
            </v-btn>
            <v-btn v-if="isAuthenticated == false" text color="grey" onclick="location.href='http://localhost:8080/sign-in'">
                <span>Sign In</span>
                <v-icon right>mdi-login</v-icon>
            </v-btn>
            <v-btn v-else text color="grey" v-on:click="logout">
                <span>Sign Out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>

        </v-app-bar>

        <v-navigation-drawer app v-model="navigation_drawer">
            <v-list-item>
                <v-list-item-content>
                    <v-card-text>
                        <v-btn v-for="icon in icons" :key="icon" class="mx-1" icon>
                            <v-icon size="24px">
                                {{ icon }} 
                            </v-icon>
                        </v-btn>
                    </v-card-text>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list nav dense>
                <v-list-item v-for="link in links" :key="link.name" router :to="link.route">
                    <v-list-item-action>
                        <v-icon left>
                        {{ link.icon }}
                        </v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                        {{ link.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>

import {mapState} from "vuex";
import axios from "axios";

export default {
    name: "Navigation",
    data() {
        return {
            search: '',
            isTrue: false,
            navigation_drawer: false,
            links: [
            { icon: 'mdi-home', text: 'Home', name: 'home', route: '/' },
            { icon: 'mdi-cart', text: 'Product', name: 'product', route: '/product-list-page'}
            ],
            icons: [
            "mdi-facebook",
            "mdi-instagram",
            "mdi-youtube"
            ],
            selectedOption: { text: '상품명', value: 'productName' },
            searchOptions: [
                { text: '상품명', value: 'productName' },
                { text: '작성자', value: 'author' },
                { text: '내용', value: 'content' }
    ]
        }
    }, 
    computed: {
        ...mapState(["isAuthenticated"]),
    },
    mounted() {
        if (localStorage.getItem("userInfo")) {
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
        }
    }
}
</script>

<style scoped>
.search-elements {
    height: 48px; 
    border-radius: 10px;
}
</style>