<template>
    <div class="buttons-container">
        <h1>hi user</h1>
        <router-link :to="{ name: 'ChangeAddress' }" class="sunghee button-link btn">
            주소 변경
        </router-link>
        <router-link :to="{ name: 'PasswordChange' }" class="sunghee button-link btn">
            비밀번호 변경
        </router-link>
        <router-link :to="{ name: 'MemberTypeRequest' }" class="sunghee button-link btn">
            등급 변경 요청
        </router-link>
        <router-link :to="{name: 'MemberTypeRequestListView'}" class="sunghee button-link btn">
            등급 변경 요청 리스트
        </router-link>
        <router-link :to="{ name: 'DonateListView' }" class="sunghee button-link btn">
            기부 내역
        </router-link>
        <router-link to="/FindMyPost" class="sunghee button-link btn">
            내 게시글 찾기
        </router-link>
        <v-btn v-on:click="resignhandler" class="sunghee button-link btn">
            회원 탈퇴
        </v-btn>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "MyPageForm",
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
.buttons-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>