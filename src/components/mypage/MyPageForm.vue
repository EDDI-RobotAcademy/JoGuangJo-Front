<template>
    <div class="mypage-container">
        <v-card class="outer-card">
            <v-card class="inner-card" elevation="0">
                <div align="center" class="justify-center" padding="30px">
                    <v-img
                        :src="require('@/assets/logo/logo.png')"
                        width="300px"/>
                </div>
                <h3>안녕하세요, {{ nickName }}님</h3>

                <v-btn @click="$router.push({ name: 'ChangeAddress' })" class="sunghee button-link btn">
                    주소 변경하기
                </v-btn>

                <v-btn @click="$router.push({ name: 'PassWordChange' })" class="sunghee button-link btn">
                    비밀번호 변경하기
                </v-btn>
                
                <v-btn @click="$router.push({ name: 'MemberTypeRequest' })" class="sunghee button-link btn">
                    등급 변경 요청하기
                </v-btn>

                <v-btn @click="$router.push({ name: 'MemberTypeRequestListView' })" class="sunghee button-link btn">
                    등급 변경 요청 확인하기
                </v-btn>
                
                <v-btn @click="$router.push({ name: 'DonateListView' })" class="sunghee button-link btn">
                    내 기부 내역 확인하기
                </v-btn>

                <v-btn @click="$router.push({ name: 'FindMyPostView' })" class="sunghee button-link btn">
                    내 게시글 찾기
                </v-btn>

                <v-btn v-on:click="resignhandler" class="sunghee button-link btn">
                    회원 탈퇴
                </v-btn>
            </v-card>
        </v-card>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "MyPageForm",
    data() {
        return{
            nickName: JSON.parse(localStorage.getItem('userInfo')).nickName
        }
    },
    methods: {
        ...mapActions("account", ["resign"]),
        async resignhandler() {
            const result = await this.$store.dispatch("account/resign");
            if (result) {
                if (this.$route.path !== "/") {
                    this.$router.push("/");
                }
            } else {
                alert("회원탈퇴중에 오류가 발생했습니다.")
            }
        },
    }
}
</script>

<style scoped>

.mypage-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
}

.outer-card {
    background-image: linear-gradient(to bottom, #FEE789, #FFDE59);
    margin: 15px;
    padding: 15px;
}

</style>