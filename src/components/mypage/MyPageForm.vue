<template>
    <div class="buttons-container">
        <h1>hi user</h1>
        <router-link :to="{ name: 'ChangeAddress' }" class="button-link">
            주소 변경
        </router-link>
        <router-link :to="{ name: 'PasswordChange' }" class="button-link">
            비밀번호 변경
        </router-link>
        <router-link :to="{ name: 'MemberTypeRequest' }" class="button-link">
            등급 변경 요청
        </router-link>
        <router-link :to="{name: 'MemberTypeRequestListView'}" class="button-link">
            등급 변경 요청 리스트
        </router-link>
        <router-link :to="{ name: 'DonateListView' }" class="button-link">
            기부 내역
        </router-link>
        <v-btn click="resignhandler" class="button-link">
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

.button-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  padding: 15px;
  margin: 10px;
  text-align: center;
  text-decoration: none;
  color: #333;
  background-color: #f0f0f0;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
}

.button-link:hover {
  background-color: #e0e0e0;
}
</style>